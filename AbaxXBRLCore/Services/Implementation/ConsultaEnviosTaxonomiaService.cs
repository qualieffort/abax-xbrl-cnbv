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

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Implementación del servicio de negocio para la administración de documentos de instancia en la aplicación
    /// <author>Emigdio Hernández</author>
    /// </summary>
    public class ConsultaEnviosTaxonomiaService : IConsultaEnviosTaxonomiaService
    {

        /// <summary>
        /// Objeto que permite el acceso a los datos de la base de datos
        /// </summary>
        public IConsultaEnviosTaxonomiaRepository ConsultaEnviosTaxonomiaRepository { get; set; }



        static ConsultaEnviosTaxonomiaService()
        {
            //Inicializa la licencia de ASPOSE Words
            ActivadorLicenciaAsposeUtil.ActivarAsposeWords();
        }

 
        /// <summary>
        /// 
        /// </summary>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        public PeticionInformationDataTableDto<EnviosTaxonomiaDto> ObtenerInformacionConsultaEnviosTaxonomia(PeticionInformationDataTableDto<EnviosTaxonomiaDto> peticionDataTable)
        {
            return ConsultaEnviosTaxonomiaRepository.ObtenerInformacionConsultaEnviosTaxonomia(peticionDataTable);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        public List<EnviosTaxonomiaDto> ObtenerInformacionReporteConsultaEnviosTaxonomias(Dictionary<string, object> parametros)
        {
            return ConsultaEnviosTaxonomiaRepository.ObtenerInformacionReporteConsultaEnviosTaxonomias(parametros);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        public List<string> OntenerNumeroFideicomisos()
        {
            return ConsultaEnviosTaxonomiaRepository.OntenerNumeroFideicomisos();
        }
    }
    }