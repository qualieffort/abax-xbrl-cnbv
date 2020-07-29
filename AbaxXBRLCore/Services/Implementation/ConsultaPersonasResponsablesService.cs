using System;

using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;

using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Import;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using Aspose.Words;
using Aspose.Words.Saving;
using Newtonsoft.Json;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using ContextoDto = AbaxXBRLCore.Common.Dtos.ContextoDto;
using DateUtil = AbaxXBRLCore.Common.Util.DateUtil;
using Formatting = Newtonsoft.Json.Formatting;
using Spring.Util;
using AbaxXBRLCore.Viewer.Application.Service;
using AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using NPOI.XSSF.UserModel;
using NPOI.SS.UserModel;
using NPOI.SS.Util;
using System.Threading;
using AbaxXBRL.Taxonomia.Linkbases;
using AbaxXBRLCore.XPE.impl;
using System.Web;
using Quartz;
using Quartz.Impl;
using System.Data;
using Aspose.Words.Drawing;
using System.Drawing;
using AbaxXBRLCore.Distribucion;
using AbaxXBRLCore.Validador;
using AbaxXBRLCore.Validador.Impl;
using System.Collections.Generic;
using AbaxXBRLCore.CellStore.Modelo;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Implementación del servicio de negocio para la administración de documentos de instancia en la aplicación
    /// <author>Emigdio Hernández</author>
    /// </summary>
    public class ConsultaPersonasResponsablesService : IConsultaPersonasResponsablesService
    {

        /// <summary>
        /// Objeto que permite el acceso a los datos de la base de datos
        /// </summary>
        public IConsultaPersonasResponsablesRepository ConsultaPersonasResponsablesRepository { get; set; }

        static ConsultaPersonasResponsablesService()
        {
            //Inicializa la licencia de ASPOSE Words
            ActivadorLicenciaAsposeUtil.ActivarAsposeWords();
        }
 
        /// <summary>
        /// 
        /// </summary>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        public PeticionInformationDataTableDto<PersonaResponsable> ObtenerInformacionPersonasResponsables(PeticionInformationDataTableDto<PersonaResponsable> peticionDataTable)
        {
            return ConsultaPersonasResponsablesRepository.ObtenerInformacionPersonasResponsables(peticionDataTable);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        public PeticionInformationDataTableDto<Administrador> ObtenerInformacionAdministradores(PeticionInformationDataTableDto<Administrador> peticionDataTable)
        {
            return ConsultaPersonasResponsablesRepository.ObtenerInformacionAdministradores(peticionDataTable);
        }

        /// <summary>
        /// Obtiene el dataTable solicitado.
        /// </summary>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        public PeticionInformationDataTableDto<ResumenInformacion4DDTO> ObtenerResumenInformacion4D(PeticionInformationDataTableDto<ResumenInformacion4DDTO> peticionDataTable)
        {
            return ConsultaPersonasResponsablesRepository.ObtenerResumenInformacion4D(peticionDataTable);
        }
        
        /// <summary>
        /// Obtiene una lista de administradores dado los parámetros.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        public List<Administrador> ObtenerInformacionReporteAdministradores(Dictionary<string, object> parametros)
        {
            return ConsultaPersonasResponsablesRepository.ObtenerInformacionReporteAdministradores(parametros);
        }

        /// <summary>
        /// Obtiene una lista de Personas Responsables dado los parámetros.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        public List<PersonaResponsable> ObtenerInformacionReportePersonasResponsables(Dictionary<string, object> parametros)
        {
            return ConsultaPersonasResponsablesRepository.ObtenerInformacionReportePersonasResponsables(parametros);
        }

        /// <summary>
        /// Obtiene la lista del Resumen de Informacón de Reportes 4D.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        public List<ResumenInformacion4DDTO> ObtenerResumenInformaicon4DPorFiltro(Dictionary<string, object> parametros)
        {
            return ConsultaPersonasResponsablesRepository.ObtenerResumenInformacion4DPorFiltro(parametros);
        }

        /// <summary>
        /// Obtiene los envíos actuales de la clave de cotización pasada como parámetro.
        /// </summary>
        /// <param name="claveCotizacion"></param>
        /// <returns></returns>
        public List<LlaveValorDto> ObtenerAniosEnvioReporteAnual(String claveCotizacion)
        {
            return ConsultaPersonasResponsablesRepository.ObtenerAniosEnvioReporteAnual(claveCotizacion);
        }

        /// <summary>
        /// Obtiene los trimestres de envios ICS, dado la clave de cotización y el año.
        /// </summary>
        /// <param name="claveCotizacion"></param>
        /// <returns></returns>
        public List<LlaveValorDto> ObtenerTrimestresICSPorEntidadYAnio(String anio, String claveCotizacion)
        {
            return ConsultaPersonasResponsablesRepository.ObtenerTrimestresICSPorEntidadYAnio(anio, claveCotizacion);
        }

    }
    }