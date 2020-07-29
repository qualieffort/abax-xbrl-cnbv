using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    ///     Implementacion del Servicio las consultas de analisis de informacion.
    ///     <author>Luis Angel Morales Gonzalez</author>
    ///     <version>1.0</version>
    /// </summary>
    public class ConsultaAnalisisService : IConsultaAnalisisService
    {
        /// <summary>
        /// Repositorio con la referencia para la consulta de analisis de informacion
        /// </summary>
        public IConsultaAnalisisRepository ConsultaAnalisisRepository { get; set; }

        /// <summary>
        /// Repositorio con la referencia para la consulta de contextos
        /// </summary>
        public IContextoRepository ContextoRepository { get; set; }

        /// <summary>
        /// Repositorio con la referencia del documento instancia del repositorio
        /// </summary>
        public IDocumentoInstanciaRepository DocumentoInstanciaRepository { get; set; }


        public ResultadoOperacionDto ObtenerConsultas()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = ConsultaAnalisisRepository.ObtenerConsultasAnalisis();
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerConsultaPorId(long idConsulta)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = ConsultaAnalisisRepository.GetById(idConsulta);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto EliminarConsulta(long idConsulta)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var consultaAnalisis = ConsultaAnalisisRepository.GetById(idConsulta);

                if (consultaAnalisis.ConsultaAnalisisConcepto.Count > 0)
                {
                    ConsultaAnalisisRepository.DbContext.ConsultaAnalisisConcepto.RemoveRange(consultaAnalisis.ConsultaAnalisisConcepto);
                }
                if (consultaAnalisis.ConsultaAnalisisEntidad.Count > 0)
                {
                    ConsultaAnalisisRepository.DbContext.ConsultaAnalisisEntidad.RemoveRange(consultaAnalisis.ConsultaAnalisisEntidad);
                }


                if (consultaAnalisis.ConsultaAnalisisPeriodo.Count > 0)
                {
                    ConsultaAnalisisRepository.DbContext.ConsultaAnalisisPeriodo.RemoveRange(consultaAnalisis.ConsultaAnalisisPeriodo);
                }

                ConsultaAnalisisRepository.Delete(consultaAnalisis);

                ConsultaAnalisisRepository.DbContext.SaveChanges();

                ConsultaAnalisisRepository.Commit();
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }
        public ResultadoOperacionDto ObtenerConsultasPorNombre(string valorConsulta)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = ConsultaAnalisisRepository.ObtenerConsultasAnalisis(valorConsulta);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto RegistrarConsultaAnalisis(ConsultaAnalisisDto consultaAnalisisDto)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {


                if (consultaAnalisisDto.IdConsultaAnalisis > 0)
                {
                    var registoConsultaBD = ConsultaAnalisisRepository.GetById(consultaAnalisisDto.IdConsultaAnalisis);

                    ConsultaAnalisisRepository.DbContext.ConsultaAnalisisEntidad.RemoveRange(registoConsultaBD.ConsultaAnalisisEntidad);
                    ConsultaAnalisisRepository.DbContext.ConsultaAnalisisConcepto.RemoveRange(registoConsultaBD.ConsultaAnalisisConcepto);
                    ConsultaAnalisisRepository.DbContext.ConsultaAnalisisPeriodo.RemoveRange(registoConsultaBD.ConsultaAnalisisPeriodo);

                    registoConsultaBD.Nombre = consultaAnalisisDto.Nombre;
                    ConsultaAnalisisRepository.DbContext.ConsultaAnalisisConcepto.AddRange(GenerarConsultaAnalisisConcepto(consultaAnalisisDto.ConsultaAnalisisConcepto, consultaAnalisisDto.IdConsultaAnalisis));
                    ConsultaAnalisisRepository.DbContext.ConsultaAnalisisEntidad.AddRange(GenerarConsultaAnalisisEntidad(consultaAnalisisDto.ConsultaAnalisisEntidad, consultaAnalisisDto.IdConsultaAnalisis));
                    ConsultaAnalisisRepository.DbContext.ConsultaAnalisisPeriodo.AddRange(GenerarConsultaAnalisisPeriodo(consultaAnalisisDto.ConsultaAnalisisPeriodo, consultaAnalisisDto.IdConsultaAnalisis));

                    ConsultaAnalisisRepository.Update(registoConsultaBD);

                    resultado.InformacionExtra = registoConsultaBD.IdConsultaAnalisis;

                }
                else
                {
                    var consultaAnalisis = new ConsultaAnalisis();
                    consultaAnalisis.Nombre = consultaAnalisisDto.Nombre;
                    consultaAnalisis.ConsultaAnalisisConcepto = GenerarConsultaAnalisisConcepto(consultaAnalisisDto.ConsultaAnalisisConcepto, consultaAnalisisDto.IdConsultaAnalisis);
                    consultaAnalisis.ConsultaAnalisisEntidad = GenerarConsultaAnalisisEntidad(consultaAnalisisDto.ConsultaAnalisisEntidad, consultaAnalisisDto.IdConsultaAnalisis);
                    consultaAnalisis.ConsultaAnalisisPeriodo = GenerarConsultaAnalisisPeriodo(consultaAnalisisDto.ConsultaAnalisisPeriodo, consultaAnalisisDto.IdConsultaAnalisis);

                    ConsultaAnalisisRepository.Add(consultaAnalisis);
                    ConsultaAnalisisRepository.Commit();

                    resultado.InformacionExtra = consultaAnalisis.IdConsultaAnalisis;
                }

                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerListadoContextosPorEmpresas(List<ConsultaAnalisisEntidadDto> consultasAnalisisEntidad)
        {

            var resultado = new ResultadoOperacionDto();
            try
            {
                List<string> identificadoresEmpresas = new List<string>();
                foreach (var entidad in consultasAnalisisEntidad)
                {
                    identificadoresEmpresas.Add(entidad.NombreEntidad);
                }

                resultado.InformacionExtra = ContextoRepository.ObtenerListadoContextosPorDocumentoInstancia(identificadoresEmpresas);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }


        /// <summary>
        /// Genera el objeto entidad de los conceptos que integran una consulta de analisis
        /// </summary>
        /// <param name="consultasAnalisisConceptoDto">Objeto dto con la informacion de los conceptos que integran la consulta de analisis</param>
        /// <param name="idConsultaAnalisis">Identificador unicao de la consulta de analisis</param>
        /// <returns>Listado de entidades de los conceptos que integran una consulta de analisis</returns>
        private List<ConsultaAnalisisConcepto> GenerarConsultaAnalisisConcepto(List<ConsultaAnalisisConceptoDto> consultasAnalisisConceptoDto, long idConsultaAnalisis)
        {
            List<ConsultaAnalisisConcepto> consultaAnalisis = new List<ConsultaAnalisisConcepto>();

            foreach (var consultaAnalisisConceptoDto in consultasAnalisisConceptoDto)
            {
                ConsultaAnalisisConcepto concepto = new ConsultaAnalisisConcepto();
                concepto.idConcepto = consultaAnalisisConceptoDto.IdConcepto;
                concepto.descripcionConcepto = consultaAnalisisConceptoDto.DescripcionConcepto;
                if (idConsultaAnalisis > 0)
                {
                    concepto.IdConsultaAnalisis = idConsultaAnalisis;
                }
                consultaAnalisis.Add(concepto);
            }
            return consultaAnalisis;
        }



        /// <summary>
        /// Genera el objeto entidad de las empresas que integran una consulta de analisis
        /// </summary>
        /// <param name="consultasAnalisisEntidadDto">Objeto dto con la informacion de las empresas que integran la consulta de analisis</param>
        /// <param name="idConsultaAnalisis">Identificador unico de la consulta de analisis</param>
        /// <returns>Listado de entidades de las empresas que integran una consulta de analisis</returns>
        private List<ConsultaAnalisisEntidad> GenerarConsultaAnalisisEntidad(List<ConsultaAnalisisEntidadDto> consultasAnalisisEntidadDto, long idConsultaAnalisis)
        {
            List<ConsultaAnalisisEntidad> consultaAnalisis = new List<ConsultaAnalisisEntidad>();

            foreach (var consultaAnalisisEntidadDto in consultasAnalisisEntidadDto)
            {
                ConsultaAnalisisEntidad empresa = new ConsultaAnalisisEntidad();
                empresa.idEmpresa = consultaAnalisisEntidadDto.IdEmpresa;
                empresa.NombreEntidad = consultaAnalisisEntidadDto.NombreEntidad;

                if (idConsultaAnalisis > 0)
                {
                    empresa.IdConsultaAnalisis = idConsultaAnalisis;
                }

                consultaAnalisis.Add(empresa);
            }
            return consultaAnalisis;
        }



        /// <summary>
        /// Genera el objeto entidad de los periodos que integran una consulta de analisis
        /// </summary>
        /// <param name="consultasAnalisisPeriodoDto">Objeto dto con la informacion de los periodos que integran la consulta de analisis</param>
        /// <param name="idConsultaAnalisis">Identificador unico de la consulta de analisis</param>
        /// <returns>Listado de entidades de los periodos que integran una consulta de analisis</returns>
        private List<ConsultaAnalisisPeriodo> GenerarConsultaAnalisisPeriodo(List<ConsultaAnalisisPeriodoDto> consultasAnalisisPeriodoDto, long idConsultaAnalisis)
        {
            List<ConsultaAnalisisPeriodo> consultaAnalisis = new List<ConsultaAnalisisPeriodo>();

            foreach (var consultaAnalisisPeriodo in consultasAnalisisPeriodoDto)
            {
                ConsultaAnalisisPeriodo periodo = new ConsultaAnalisisPeriodo();
                periodo.FechaInicio = consultaAnalisisPeriodo.FechaInicio;
                periodo.FechaFinal = consultaAnalisisPeriodo.FechaFinal;
                periodo.Fecha = consultaAnalisisPeriodo.Fecha;
                periodo.Periodo = consultaAnalisisPeriodo.Periodo;
                periodo.TipoPeriodo = consultaAnalisisPeriodo.TipoPeriodo;

                if (idConsultaAnalisis > 0)
                {
                    periodo.IdConsultaAnalisis = idConsultaAnalisis;
                }

                consultaAnalisis.Add(periodo);
            }
            return consultaAnalisis;
        }

        public Dictionary<string, object> ObtenerInformacionConsultaDocumentos(ConsultaAnalisisDto consiguracionConsulta, List<DocumentoInstanciaXbrlDto> informacionVersionDocumentos, TaxonomiaDto taxonomiaDto)
        {

            var informacionConsultaDocumentos = new Dictionary<string, object>();
            var documentoInstanciaDocumento = unirDocumentosInstancia(informacionVersionDocumentos);
            if (documentoInstanciaDocumento != null) {
                documentoInstanciaDocumento.Taxonomia = taxonomiaDto;
                informacionConsultaDocumentos.Add("DocumentoInstancia", documentoInstanciaDocumento);

                foreach (var rolTaxonomia in consiguracionConsulta.ConsultaAnalisisRolTaxonomia)
                {
                    var informacionRolTaxonomia = new Dictionary<string, object>();
                    var estructuraDocumento = new Dictionary<string, object>();

                    informacionRolTaxonomia.Add("NombreRol", rolTaxonomia.DescripcionRol);
                    informacionRolTaxonomia.Add("Uri", rolTaxonomia.Uri);


                    foreach (var rolPresentacion in taxonomiaDto.RolesPresentacion)
                    {

                        if (rolPresentacion.Uri.Equals(rolTaxonomia.Uri))
                        {
                            int indentacion = 1;
                            recorrerArbolLinkbasePresentacion(rolPresentacion.Estructuras, estructuraDocumento, indentacion, taxonomiaDto);
                            informacionRolTaxonomia.Add("Conceptos", estructuraDocumento);
                        }
                    }

                    informacionConsultaDocumentos.Add(rolTaxonomia.Uri, informacionRolTaxonomia);
                }
            }
            

            return informacionConsultaDocumentos;
        }


        private void recorrerArbolLinkbasePresentacion(IList<EstructuraFormatoDto> estructurasDocumento, Dictionary<string, object> estructuraDocumentoPresentacion,int indentacion,TaxonomiaDto taxonomiaDto){

            if (estructurasDocumento == null) return;

            foreach (var estructuraDocumento in estructurasDocumento) {
                Dictionary<string,object> elementoDocumento = new Dictionary<string,object>();
                elementoDocumento.Add("IdConcepto", estructuraDocumento.IdConcepto);
                elementoDocumento.Add("Indentacion", indentacion);

                if (!estructuraDocumentoPresentacion.ContainsKey(estructuraDocumento.IdConcepto))
                {
                    estructuraDocumentoPresentacion.Add(estructuraDocumento.IdConcepto, elementoDocumento);
                }
                else {
                    System.Console.WriteLine("Concepto Existe en : " + estructuraDocumento.IdConcepto);
                }
                

                recorrerArbolLinkbasePresentacion(estructuraDocumento.SubEstructuras, estructuraDocumentoPresentacion, indentacion + 1, taxonomiaDto);
            }
        }

        private DocumentoInstanciaXbrlDto unirDocumentosInstancia(List<DocumentoInstanciaXbrlDto> documentosInstancia)
        {
            DocumentoInstanciaXbrlDto documentoInstanciaPrincipal = null;
            foreach (var documentoInstancia in documentosInstancia)
            {
                if (documentoInstanciaPrincipal == null)
                {
                    documentoInstanciaPrincipal = documentoInstancia;
                    continue;
                }
                unirDiccionariosContextos(documentoInstancia.ContextosPorId, documentoInstanciaPrincipal.ContextosPorId);
                unirDiccionarios(documentoInstancia.HechosPorIdConcepto, documentoInstanciaPrincipal.HechosPorIdConcepto);
                unirDiccionariosHechosId(documentoInstancia.HechosPorId, documentoInstanciaPrincipal.HechosPorId);
                unirDiccionarios(documentoInstancia.HechosPorIdContexto, documentoInstanciaPrincipal.HechosPorIdContexto);

            }
            return documentoInstanciaPrincipal;
        }

        private void unirDiccionariosContextos(IDictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto> diccionarioContextoOrigen, IDictionary<string, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto> diccionarioContextoDestino)
        {
            foreach (var key in diccionarioContextoOrigen.Keys)
            {
                if (!diccionarioContextoDestino.ContainsKey(key)) {
                    diccionarioContextoDestino.Add(key, diccionarioContextoOrigen[key]);
                }
                
            }
        }

        private void unirDiccionariosHechosId(IDictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto> diccionarioHechoOrigen, IDictionary<string, AbaxXBRLCore.Viewer.Application.Dto.HechoDto> diccionarioHechoDestino)
        {
            foreach (var key in diccionarioHechoOrigen.Keys)
            {
                if (!diccionarioHechoDestino.ContainsKey(key))
                {
                    diccionarioHechoDestino.Add(key, diccionarioHechoOrigen[key]);
                }

            }
        }


        private void unirDiccionarios(IDictionary<string, IList<string>> diccionarioOrigen, IDictionary<string, IList<string>> diccionarioDestino)
        {
            foreach (var key in diccionarioOrigen.Keys)
            {
                if (diccionarioDestino.ContainsKey(key))
                {
                    foreach (var informacion in diccionarioOrigen[key])
                    {
                        diccionarioDestino[key].Add(informacion);
                    }
                }
                else
                {
                    diccionarioDestino.Add(key, diccionarioOrigen[key]);
                }
            }
        }


    }
}
