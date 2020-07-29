using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Services;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLCore.Common.Dtos;

namespace AbaxXBRLWeb.Controllers
{
    /// <summary>
    /// Controller para atender las solicitudes de búsqueda de información en el repositorio de hechos
    /// </summary>
    public class RepositorioController : BaseController
    {
        /// <summary>
        /// Servicio para el acceso a los datos de los documentos de instancia
        /// </summary>
        private IDocumentoInstanciaService DocumentoInstanciaService = null;
        
        public RepositorioController()
            : base()
        {
            try
            {
                DocumentoInstanciaService = (IDocumentoInstanciaService)ServiceLocator.ObtenerFabricaSpring().GetObject("DocumentoInstanciaService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }
        

    }
}
