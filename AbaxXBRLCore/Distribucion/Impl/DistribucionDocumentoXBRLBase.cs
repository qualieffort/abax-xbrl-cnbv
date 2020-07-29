using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Spring.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Distribucion.Impl
{
    /// <summary>
    /// Clase base para las implementaciones de distribuciones de documentos XBRL
    /// </summary>
    public abstract class DistribucionDocumentoXBRLBase : IDistribucionDocumentoXBRL, IApplicationContextAware
    {

        /// <summary>
        /// Application context relacionado con la creación de este objeto 
        /// </summary>
        private IApplicationContext applicarionContext = null;
        public IApplicationContext ApplicationContext
        {
            set
            {
                applicarionContext = value;
            }
        }

        /// <summary>
        /// Obtiene la definición de plantilla ara el documento de instancia indicado.
        /// </summary>
        /// <param name="documentoInstancia">Documento de instancia del que se requiere la definición de plantilla.</param>
        /// <returns>Definición de plantilla para el documento de instancia solicitado.</returns>
        protected IDefinicionPlantillaXbrl ObtenDefinicionPlantilla(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            var espacioNombres = documentoInstancia.EspacioNombresPrincipal;
            if (String.IsNullOrEmpty(espacioNombres) && documentoInstancia.Taxonomia != null)
            {
                espacioNombres = documentoInstancia.Taxonomia.EspacioNombresPrincipal;
            }
            if (String.IsNullOrEmpty(espacioNombres))
            {
                throw new NullReferenceException("No fué posible obtener el espacio de nombres del documento.");
            }
            var idBean = espacioNombres.Replace("/", "_").Replace(" ", "_").Replace("-", "_").Replace(":", "_").Replace(".", "_");
            var plantilla = (IDefinicionPlantillaXbrl)applicarionContext.GetObject(idBean);
            return plantilla;
        }
        /// <summary>
        /// Obtiene los parametros de configuración del documento de instancia.
        /// </summary>
        /// <param name="documentoInstancia">Documento de instancia a evaluar.</param>
        /// <returns>Parametros de configuración determinados para le documento de instancia dado.</returns>
        private IDictionary<string, string> ObtenParametrosConfiguracion(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            var plantilla = ObtenDefinicionPlantilla(documentoInstancia);
            var parametrosConfiguracion = plantilla.DeterminaParametrosConfiguracionDocumento(documentoInstancia);
            return parametrosConfiguracion;
        }

        public abstract ResultadoOperacionDto EjecutarDistribucion(Viewer.Application.Dto.DocumentoInstanciaXbrlDto instancia, IDictionary<string, object> parametros);

        /// <summary>
        /// Construye el nombre del archivo (sin extensión) que se utiliza en las distribuciones:
        /// infoxbrl_{0}_{1} Donde:
        /// 0 = Identificador del documento de instancia
        /// 1 = Version del documento
        /// </summary>
        /// <param name="instancia"></param>
        /// <param name="parametros"></param>
        /// <returns></returns>
        protected String ObtenerNombreArchivoDistribucion(Viewer.Application.Dto.DocumentoInstanciaXbrlDto instancia, IDictionary<string, object> parametros) {

            return String.Format("info_xbrl_{0}_{1}",instancia.IdDocumentoInstancia,instancia.Version);

        }

        /// <summary>
        /// Clave de la distribución
        /// </summary>
        public String ClaveDistribucion { get; set; }
    }
}
