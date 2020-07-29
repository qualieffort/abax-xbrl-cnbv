using System;
using System.Collections.Generic;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.CellStore.Services;
using AbaxXBRLCore.CellStore.Modelo;
using System.IO;
using NPOI.SS.UserModel;
using NPOI.HSSF.UserModel;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Repository;
using System.Configuration;
using System.Reflection;
using System.Text;
using AbaxXBRLCore.Viewer.Application.Dto;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Implementación del servicio de negocio para la elaboración del reporte "Ficha Administrativa".
    /// </summary>
    public class ReporteCellStoreMongoService : IReporteCellStoreMongoService
    {

        /// <summary>
        /// Objecto de acceso a datos en Mongo.
        /// </summary>
        public IAbaxXBRLCellStoreMongo AbaxXBRLCellStoreMongo { get; set; }

        public ISectorRepository SectorRepository { get; set; }

        public ISubSectorRepository SubSectorRepository { get; set; }

        public IRamoRepository RamoRepository { get; set; }

        public IEmpresaRepository EmpresaRepository { get; set; }

        private const String TAXO_REPORTE_ANUAL = "'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_N_entry_point_2016-08-22'";

        private const String TAXO_REPORTE_TRIMESTRAL = "'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05'";
        
        /// <summary>
        /// Genera el reporte de Calculo de Materialidad.       
        /// </summary>
        /// <param name="parametrosReporte"></param>
        /// <returns></returns>
        public ResultadoOperacionDto GenerarReporteCalculoMaterialidad(IDictionary<string, object> parametrosReporte, IDictionary<String, object> datosReporte)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();

            String[] listaEmisoras = {""};
            object claveEmisora = "";
            parametrosReporte.TryGetValue("'Entidad.Nombre'", out claveEmisora);
            listaEmisoras[0] = "'" + claveEmisora.ToString() + "'";
            
            IDictionary<string, object> parametrosEnvioReporteAnual = new Dictionary<string, object>();
            foreach (var parametro in parametrosReporte)
            {
                parametrosEnvioReporteAnual.Add(parametro.Key, parametro.Value);
            }

            parametrosEnvioReporteAnual.Add("Taxonomia", TAXO_REPORTE_ANUAL);
            parametrosEnvioReporteAnual.Add("EsVersionActual", true);

            String parametrosConsultaEnvioReporteAnual = ReporteCalculoMaterialidad.GenerarCadenaParametrosConsulta(parametrosEnvioReporteAnual);
            List<Envio> enviosReporteAnual = (List<Envio>)AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", parametrosConsultaEnvioReporteAnual);

            enviosReporteAnual.Sort((x, y) => x.Periodo.Ejercicio.CompareTo(y.Periodo.Ejercicio));

            Envio envioReporteAnual = null;

            if(enviosReporteAnual != null && enviosReporteAnual.Count > 0)
            {
                envioReporteAnual = enviosReporteAnual[0];
            }            

            IDictionary<string, object> parametrosHechosReporteAnual = new Dictionary<string, object>();
            IList<Hecho> hechosReporteAnual = null;

            if (envioReporteAnual != null)
            {
                parametrosHechosReporteAnual.Add("IdEnvio", "'" + envioReporteAnual.IdEnvio + "'");
                String parametrosConsultaReporteAnual = ReporteCalculoMaterialidad.GenerarCadenaParametrosConsulta(parametrosHechosReporteAnual);
                hechosReporteAnual = ReporteCalculoMaterialidad.ObtenerHechosReporteAnual(parametrosConsultaReporteAnual, AbaxXBRLCellStoreMongo);
            }

            

            IDataFormat format;
            String plantillaDocumento = ConfigurationManager.AppSettings.Get("plantillaCalculoDeMaterialidad");
            Stream streamExcel = Assembly.GetExecutingAssembly().GetManifestResourceStream(plantillaDocumento);

            HSSFWorkbook workbook = new HSSFWorkbook(streamExcel, true);
            ISheet sheet = workbook.GetSheet("CÁLCULO DE MATERIALIDAD");
            format = workbook.CreateDataFormat();

            Envio envioIFRS = ReporteCalculoMaterialidad.ObtenerUltimoEnviosIFRS(claveEmisora.ToString(), AbaxXBRLCellStoreMongo);
            List<Hecho> listaHechosIFRS = ReporteCalculoMaterialidad.ObtenerHechosIFRS(AbaxXBRLCellStoreMongo, envioIFRS);

            List<Envio> enviosIFRS = ReporteCalculoMaterialidad.ObtenerUlrimosTresReportesTrimestralesIFRS(AbaxXBRLCellStoreMongo, claveEmisora.ToString());

            Entities.Empresa empresa = EmpresaRepository.ObtenerEmpresaClaveCotizacion(claveEmisora.ToString());
            if(empresa != null)
            {
                datosReporte.Add("nombreCompletoEmpresa", empresa.RazonSocial);
            }
            

            ReporteCalculoMaterialidad.EscribirDatosGeneralesReporteCalculoMaterialidad(sheet, (List<Hecho>)hechosReporteAnual, parametrosReporte, datosReporte);
            EscribirSeccionEventosRelevantesCalculoMaterialidad(sheet, ReporteErPcsUtil.ObtenerUltimosSincoEventosRelevantesDelSector(listaEmisoras, AbaxXBRLCellStoreMongo));
            ReporteCalculoMaterialidad.EscribirSeccionReporteAnual(sheet, envioReporteAnual);
            ReporteCalculoMaterialidad.EscribirValoresCalculo(sheet, envioIFRS, listaHechosIFRS);
            ReporteCalculoMaterialidad.EscribirSeccionReporteTrimestral(sheet, enviosIFRS);
            
            sheet.ForceFormulaRecalculation = true;

            MemoryStream ms = new MemoryStream();
            workbook.Write(ms);

            resultadoOperacionDto.InformacionExtra = ms.ToArray();
            resultadoOperacionDto.Resultado = true;

            return resultadoOperacionDto;
        }
       
          
        /// <summary>
        /// Genera el reporte de Eventos Relevantes y Principales Cuentas del Sector.
        /// </summary>
        /// <param name="sector"></param>
        /// <param name="subSector"></param>
        /// <param name="ramo"></param>
        /// <param name="listaEmisoras"></param>
        /// <param name="trimestre"></param>
        /// <param name="anio"></param>
        /// <returns></returns>
        public ResultadoOperacionDto GenerarReporteERyPCS(String sector, String subSector, String ramo, String[] listaEmisoras, String trimestre, int anio)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();

            Dictionary<String, Dictionary<ObjetoFecha, List<Hecho>>> hechosEmisoraPorFecha = ReporteErPcsUtil.ObtenerHechosPrincipalesCuentasPorEmisora(AbaxXBRLCellStoreMongo, listaEmisoras, trimestre, anio);
            Dictionary<String, Dictionary<ObjetoFecha, List<Hecho>>> hechosEmisoraPorFechaCopia = ReporteErPcsUtil.ObtenerHechosPrincipalesCuentasPorEmisora(AbaxXBRLCellStoreMongo, listaEmisoras, trimestre, anio);
            Dictionary<ObjetoFecha, CuentaDelSectorDTO> cuentasDelSector = ReporteErPcsUtil.ObtenerColumnasPrincipalesCuentas(hechosEmisoraPorFecha);
            
            IDataFormat format;
            var plantillaDocumento = ConfigurationManager.AppSettings.Get("plantillaDescripcionPorSectores");            
            var streamExcel = Assembly.GetExecutingAssembly().GetManifestResourceStream(plantillaDocumento);

            HSSFWorkbook workbook = new HSSFWorkbook(streamExcel, true);
            var sheet = workbook.GetSheet("PANEL");
            format = workbook.CreateDataFormat();

            String[] campos = { "", "", "", "", "" };
            campos[0] = sector;
            campos[1] = subSector;
            campos[2] = ramo;
            campos[3] = String.Join("/", listaEmisoras);
            campos[4] = "";

            ReporteErPcsUtil.EscribirSeccionDatosGeneralesDelSector(sheet, campos);
            ReporteErPcsUtil.EscribirSeccionEventosRelevantesDelSector(sheet, ReporteErPcsUtil.ObtenerUltimosSincoEventosRelevantesDelSector(listaEmisoras, AbaxXBRLCellStoreMongo));
            ReporteErPcsUtil.EscribirSeccionPrincipalesCuentasDelSector(workbook, sheet, format, cuentasDelSector, trimestre);                       
            ReporteErPcsUtil.EscribirSeccionSectorVsEmisora(workbook, sheet, format, ReporteErPcsUtil.ObtenerCalculosSeccionSectorVsEmisora(hechosEmisoraPorFecha));
            ReporteErPcsUtil.EscribeSeccionPorcetanjesSectorVsEmisora(workbook, sheet, format, ReporteErPcsUtil.ObtenerCalculosPorcentajeSeccionSectorVsEmisora(ReporteErPcsUtil.ObtenerCalculosSeccionSectorVsEmisora(hechosEmisoraPorFechaCopia), cuentasDelSector));
            ReporteErPcsUtil.EscribeSeccionUtilidades(workbook, sheet, format, ReporteErPcsUtil.ObtenerCalculosUtilidades(hechosEmisoraPorFecha, cuentasDelSector));

            //ReporteErPcsUtil.ObtenerCalculosSeccionSectorVsEmisora(hechosEmisoraPorFechaCopia);

            var sheetGraficos = workbook.GetSheet("Gráficos");
            sheet.ForceFormulaRecalculation = true;

            MemoryStream ms = new MemoryStream();
            workbook.Write(ms);

            resultadoOperacionDto.InformacionExtra = ms.ToArray();
            resultadoOperacionDto.Resultado = true;

            return resultadoOperacionDto;
        }

        /// <summary>
        /// Obtiene todos los sectores existentes.
        /// </summary>
        /// <returns></returns>
        public ResultadoOperacionDto ObtenerSectores()
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();
            resultadoOperacionDto.InformacionExtra = SectorRepository.ObtenerSectores();
            resultadoOperacionDto.Resultado = true;
            return resultadoOperacionDto;
        }

        /// <summary>
        /// Obtiene los subsectores existentes dado el identificador del sector.
        /// </summary>
        /// <param name="idSector"></param>
        /// <returns></returns>
        public ResultadoOperacionDto ObtenerSubSectores(int idSector)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();
            resultadoOperacionDto.InformacionExtra = SubSectorRepository.ObtenerSubSectoresPorIdSector(idSector);
            resultadoOperacionDto.Resultado = true;
            return resultadoOperacionDto;
        }

        /// <summary>
        /// Obtiene los ramos existentes dado el identificador del subsector.
        /// </summary>
        /// <param name="idSubSector"></param>
        /// <returns></returns>
        public ResultadoOperacionDto ObtenerRamos(int idSubSector)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();
            resultadoOperacionDto.InformacionExtra = RamoRepository.ObtenerRamosPorIdSubSector(idSubSector);
            resultadoOperacionDto.Resultado = true;
            return resultadoOperacionDto;
        }

        /// <summary>
        /// Obtiene los claves de cotización de las emisoras que pertenecen a un ramo.
        /// </summary>
        /// <param name="idRamo"></param>
        /// <returns></returns>
        public ResultadoOperacionDto ObtenerEmisorasPorRamo(int idRamo)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();
            resultadoOperacionDto.InformacionExtra = RamoRepository.ObtenerEmisorasPorRamo(idRamo);
            resultadoOperacionDto.Resultado = true;
            return resultadoOperacionDto;
        }

        /// <summary>
        /// Obtiene las opciones para el combo Año del reporte Eventos Relevantes y Principales cuentas del sector (Descripcioón por sectores).
        /// </summary>
        /// <param name="clavesCotizacionEmisoras"></param>
        /// <returns></returns>
        public ResultadoOperacionDto ObtenerAniosEnvioIFRS(string[] clavesCotizacionEmisoras)
        {
            var cadenaClavesCotizacion = "'" + String.Join("','", clavesCotizacionEmisoras) + "'";

            StringBuilder parametros = new StringBuilder();
            parametros.Append("{ ");
            parametros.Append("Taxonomia: {$regex: 'full_ifrs'}, ");
            parametros.Append("'Entidad.Nombre': { $in: [ " + cadenaClavesCotizacion + "]}");
            parametros.Append("}");

            IList<Envio> envios = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", parametros.ToString());
            List<LlaveValorDto> listaAnos = new List<LlaveValorDto>();

            foreach (var envio in envios)
            {
                Object ano = "";
                envio.Parametros.TryGetValue("Ano", out ano);
                LlaveValorDto llaveValorDto = new LlaveValorDto(ano.ToString(), ano.ToString());

                if (listaAnos.Find(elemento => elemento.Llave.Equals(llaveValorDto.Llave) && elemento.Valor.Equals(llaveValorDto.Valor)) == null)
                {
                    listaAnos.Add(new LlaveValorDto(ano.ToString(), ano.ToString()));
                }
            }

            listaAnos.Sort((x, y) => Convert.ToInt32(x.Llave).CompareTo(Convert.ToInt32(y.Llave)));

            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();
            resultadoOperacionDto.InformacionExtra = listaAnos;
            resultadoOperacionDto.Resultado = true;
            return resultadoOperacionDto;
        }

        /// <summary>
        /// Obtiene las opciones para el combo Trimestre del reporte Eventos Relevantes y Principales cuentas del sector (Descripcioón por sectores). 
        /// </summary>
        /// <param name="clavesCotizacionEmisoras"></param>
        /// <param name="anios"></param>
        /// <returns></returns>
        public ResultadoOperacionDto ObtenerTrimestreEnvioIFRS(string[] clavesCotizacionEmisoras, List<int> anios)
        {
            var cadenaClavesCotizacion = "'" + String.Join("','", clavesCotizacionEmisoras) + "'";
            var cadenaAnios = "'" + String.Join("','", anios) + "'";

            StringBuilder parametros = new StringBuilder();
            parametros.Append("{ ");
            parametros.Append("Taxonomia: {$regex: 'full_ifrs'}, ");
            parametros.Append("'Entidad.Nombre': { $in: [ " + cadenaClavesCotizacion + "]}, ");
            parametros.Append("'Parametros.Ano': { $in: [ " + cadenaAnios + "]}");
            parametros.Append("}");

            IList<Envio> envios = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", parametros.ToString());
            List<LlaveValorDto> listaTrimestres = new List<LlaveValorDto>();

            foreach (var envio in envios)
            {
                Object trimestre = "";

                if (envio.Parametros.TryGetValue("trimestre", out trimestre))
                {
                    LlaveValorDto llaveValorDto = new LlaveValorDto(trimestre.ToString(), trimestre.ToString());

                    if (listaTrimestres.Find(elemento => elemento.Llave.Equals(llaveValorDto.Llave) && elemento.Valor.Equals(llaveValorDto.Valor)) == null)
                    {
                        listaTrimestres.Add(new LlaveValorDto(trimestre.ToString(), trimestre.ToString()));
                    }
                }
            }

            listaTrimestres.Sort((x, y) => (x.Llave).CompareTo(y.Llave));

            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();
            resultadoOperacionDto.InformacionExtra = listaTrimestres;
            resultadoOperacionDto.Resultado = true;
            return resultadoOperacionDto;
        }

        /// <summary>
        /// Escribe la sección de eventos relevantes del reporte Calculo de Materialidad.
        /// </summary>
        /// <param name="sheet"></param>
        /// <param name="enviosEventoRelevante"></param>
        public static void EscribirSeccionEventosRelevantesCalculoMaterialidad(ISheet sheet, List<List<Hecho>> enviosEventoRelevante)
        {
            int renglon = 25;
            int indice = 1;
            foreach (var envioEventoRelevante in enviosEventoRelevante)
            {
                var eventoRelevante = envioEventoRelevante.Find(hecho => hecho.Concepto.IdConcepto.Equals(ReporteErPcsUtil.ID_CONCEPTO_EVENTO_RELEVANTE)) != null ? ReporteUtil.removeTextHTML(envioEventoRelevante.Find(hecho => hecho.Concepto.IdConcepto.Equals(ReporteErPcsUtil.ID_CONCEPTO_EVENTO_RELEVANTE)).Valor) : "";                
                sheet.GetRow(renglon).GetCell(0).SetCellValue(indice.ToString() + ". " + eventoRelevante);

                indice++;
                renglon++;
            }
        }
    }
}