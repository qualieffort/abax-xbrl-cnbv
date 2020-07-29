using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRL.Taxonomia.Validador;
using AbaxXBRL.Taxonomia.Validador.Impl;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Services;
using AbaxXBRLWeb.App_Code.Common.Service;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Formatting = System.Xml.Formatting;

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    /// Controlador para atender las solicitudes de vista del visor anónimo de documentos
    /// </summary>
    public class DocumentoInstanciaAnonimoController : BaseController
    {

        /// <summary>
        /// Servicio para el acceso a los datos de los documentos de instancia
        /// </summary>
        private IDocumentoInstanciaService DocumentoInstanciaService = null;
        /// <summary>
        /// Servicio para el acceso a los datos de usuarios y sus empresas asignadas
        /// </summary>
        private IUsuarioService UsuarioService = null;

        
        public DocumentoInstanciaAnonimoController()
        {
            try
            {
                DocumentoInstanciaService = (IDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaService");
                UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }

        

        

        
        /// <summary>
        /// Obtener la etiqueta de la cuenta del hecho
        /// </summary>
        /// <param name="hecho"></param>
        /// <returns></returns>
        private string GetEtiqueta(Fact hecho)
        {
            String etiqueta = null;
            if (hecho.Concepto.Elemento.QualifiedName.Namespace.Equals("http://xbrl.ifrs.org/taxonomy/2011-08-26/ifrs-cp_1"))
            {
                etiqueta = "ifrs-cp_1:" + hecho.Concepto.Elemento.QualifiedName.Name;
            }
            else
            {
                etiqueta = hecho.Concepto.Id.Replace('_', ':');
            }
            return etiqueta;
        }
        /// <summary>
        /// Crear un hecho dto basado en un fact
        /// </summary>
        /// <param name="hecho"></param>
        /// <returns></returns>
        private HechoDto CrearHechoDto(FactItem hecho)
        {
            var hechoDto = new HechoDto();
            hechoDto.ClaveEmpresa = hecho.Contexto.Entidad.Id;
            hechoDto.Etiqueta = GetEtiqueta(hecho);
            if (hecho.Contexto.Escenario != null)
            {
                //determinar columna
                hechoDto.Dimension = ObtenerDimensionMember(hecho.Contexto.Escenario.ElementoOrigen);
            }

            if (hecho is FactNumericItem)
            {
                Unit unidad = ((FactNumericItem)hecho).Unidad;

                if (unidad.Medidas != null && unidad.Medidas.Count > 0)
                {
                    hechoDto.Unidad = unidad.Medidas[0].LocalName;
                    hechoDto.Valor = ((FactNumericItem)hecho).ValorRedondeado.ToString();
                }
                else
                {
                    hechoDto.Unidad = unidad.Numerador[0].LocalName + "/" + unidad.Denominador[0].LocalName;
                    hechoDto.Valor = ((FactNumericItem)hecho).ValorRedondeado.ToString();
                }
            }
            else
            {
                hechoDto.Valor = hecho.Valor;
            }
            return hechoDto;
        }
        /// <summary>
        /// Obtiene el miembro de la dimension del escenario
        /// </summary>
        /// <param name="xmlNode"></param>
        /// <returns></returns>
        private string ObtenerDimensionMember(System.Xml.XmlNode escenario)
        {
            if (escenario == null) return null;
            foreach (XmlNode nodo in escenario.ChildNodes)
            {
                if (EspacioNombresConstantes.DimensionInstanceNamespace.Equals(nodo.NamespaceURI) && EtiquetasXBRLConstantes.ExplicitMemberElement.Equals(nodo.LocalName))
                {
                    return nodo.InnerText;
                }
            }
            return null;
        }
        

        /// <summary>
        /// Implementación de un ContractResolver para indicar qué propiedades deben ser excluidas de la serialización a JSON.
        /// <author>José Antonio Huizar Moreno</author>
        /// <version>1.0</version>
        /// </summary>
        private class CatalogoElementosContractResolver2 : DefaultContractResolver
        {
            protected override IList<JsonProperty> CreateProperties(Type type, MemberSerialization memberSerialization)
            {
                IList<JsonProperty> properties = base.CreateProperties(type, memberSerialization);

                properties = properties.Where(p => (!p.PropertyName.Equals("REPOSITORIO_HECHOS") && !p.PropertyName.Equals("FORMATO"))).ToList();

                return properties;
            }
        }

        /// <summary>
        /// Implementación de un ContractResolver para indicar qué propiedades deben ser excluidas de la serialización a JSON.
        /// <author>José Antonio Huizar Moreno</author>
        /// <version>1.0</version>
        /// </summary>
        private class FormatoCapturaContractResolver2 : DefaultContractResolver
        {
            protected override IList<JsonProperty> CreateProperties(Type type, MemberSerialization memberSerialization)
            {
                IList<JsonProperty> properties = base.CreateProperties(type, memberSerialization);

                properties = properties.Where(p => (!p.PropertyName.Equals("Hechos"))).ToList();

                return properties;
            }
        }


        
    }
}
