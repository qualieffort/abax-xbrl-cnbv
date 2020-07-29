using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.CellStore.Services;
using MongoDB.Driver.Builders;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Diagnostics;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.CellStore.Modelo;
using NPOI.XSSF.UserModel;
using NPOI.SS.UserModel;
using System.Text.RegularExpressions;
using System.IO;
using System.Threading;
using System.Globalization;
using NPOI.HSSF.UserModel;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Util;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Implementación del servicio de negocio para la elaboración de reportes que explotan información
    /// especial de evíos
    /// </summary>
    public class ReporteFichaTecnicaCellStoreMongoService : Services.IReporteFichaTecnicaCellStoreMongoService
    {

        /// <summary>
        /// Objecto de acceso a datos en Mongo.
        /// </summary>
        public IAbaxXBRLCellStoreMongo AbaxXBRLCellStoreMongo { get; set; }

        private static String[] ElementosFichaTecnicaEmisora = {
            "ar_pros_NameOfTheIssuer",
            "ar_pros_AdressOfTheIssuer",
            "ar_pros_TypeOfInstrument",
            "ar_pros_Ticker",
            "ar_pros_MainActivity",
            "ar_pros_AdministratorName",
            "ar_pros_AdministratorFirstName",
            "ar_pros_AdministratorSecondName",
            "ar_pros_AdministratorPosition",
            "ar_pros_ResponsiblePersonName",
            "ar_pros_ResponsiblePersonPosition",
            "ar_pros_ResponsiblePersonInstitution",
            "ar_pros_SerieNumberOfStocks",
            "ar_pros_EquitySerie",
            "ar_pros_PublicDocuments"
        };

        private static String[] ElementosInformacionFinanciera = {
            "ifrs-full_CurrentAssets",
            "ifrs-full_NoncurrentAssets",
            "ifrs-full_Assets",
            "ifrs-full_CurrentLiabilities",
            "ifrs-full_NoncurrentLiabilities",
            "ifrs-full_Liabilities",
            "ifrs-full_IssuedCapital",
            "ifrs-full_Equity",
            "ifrs-full_EquityAndLiabilities",
            "ifrs-full_Revenue",
            "ifrs-full_CostOfSales",
            "ifrs-full_GrossProfit",
            "ifrs-full_ProfitLossFromOperatingActivities",
            "ifrs-full_ProfitLoss",
            "ifrs-full_BasicEarningsLossPerShare"
        };

        private static String[] ElementosInformacionFinancieraInstante = {
            "ifrs-full_CurrentAssets",
            "ifrs-full_NoncurrentAssets",
            "ifrs-full_Assets",
            "ifrs-full_CurrentLiabilities",
            "ifrs-full_NoncurrentLiabilities",
            "ifrs-full_Liabilities",
            "ifrs-full_IssuedCapital",
            "ifrs-full_Equity",
            "ifrs-full_EquityAndLiabilities"
        };

        private static String[] ElementosInformacionFinancieraPeriodo = {
            "ifrs-full_Revenue",
            "ifrs-full_CostOfSales",
            "ifrs-full_GrossProfit",
            "ifrs-full_ProfitLossFromOperatingActivities",
            "ifrs-full_ProfitLoss",
            "ifrs-full_BasicEarningsLossPerShare"
        };

        private static String[] NombresRengonInformacionFinanciera = {
            "Activo circulante",
            "Activo no circulante:",
            "Total de activos:",
            "Pasivo circulante:",
            "Pasivo no circulante:",
            "Total de pasivos:",
            "Capital social:",
            "Capital contable:",
            "∑ pasivos y capital contable:",
            "",
            "Ingresos:",
            "Costo de ventas",
            "Utilidad (pérdida) bruta",
            "Utilidad (pérdida) de operación",
            "Utilidad (pérdida) neta",
            "",
            "Utilidad (pérdida) por acción"
        };

        private static String[] OrdenElementosInformacionFinanciera = {
            "ifrs-full_CurrentAssets",
            "ifrs-full_NoncurrentAssets",
            "ifrs-full_Assets",
            "ifrs-full_CurrentLiabilities",
            "ifrs-full_NoncurrentLiabilities",
            "ifrs-full_Liabilities",
            "ifrs-full_IssuedCapital",
            "ifrs-full_Equity",
            "ifrs-full_EquityAndLiabilities",
            "",
            "ifrs-full_Revenue",
            "ifrs-full_CostOfSales",
            "ifrs-full_GrossProfit",
            "ifrs-full_ProfitLossFromOperatingActivities",
            "ifrs-full_ProfitLoss",
            "",
            "ifrs-full_BasicEarningsLossPerShare"
        };

        private static String[] ElementosRazonesFinancieras = {
            "razon_circulante",
            "apalancamiento",
            "deuda_total_capital",
            "margen_utilidad",
            "roa",
            "roe",
            "margen_operativo"
        };

        private static String[] TituloElementosRazonesFinancieras = {
            "Razón circulante",
            "Apalancamiento",
            "Deuda total /Capital contable",
            "Márgen de utilidad",
            "ROA",
            "ROE",
            "Margen operativo"
        };

        private static String[] ElementosDesgloseCreditos = {
            "ifrs_mx-cor_20141205_TotalDeCreditos"
        };

        private static String DimensionIntervaloTiempoCredito = "ifrs_mx-cor_20141205_IntervaloDeTiempoEje";
        private static String DimensionDenomacionCredito = "ifrs_mx-cor_20141205_DenominacionEje";
        private static String DimensionPersonaResponableInstitucionTyped = "ar_pros_ResponsiblePersonsInstitutionSequenceTypedAxis";
        private static String DimensionPersonaResponableTyped = "ar_pros_ResponsiblePersonsSequenceTypedAxis";
        private static String DimensionFiguraResponsable = "ar_pros_TypeOfResponsibleFigureAxis";

        private static String[] MiembrosDimensionIntervalo = {
            "ifrs_mx-cor_20141205_AnoActualMiembro",
            "ifrs_mx-cor_20141205_Hasta1AnoMiembro",
            "ifrs_mx-cor_20141205_Hasta2AnosMiembro",
            "ifrs_mx-cor_20141205_Hasta3AnosMiembro",
            "ifrs_mx-cor_20141205_Hasta4AnosMiembro",
            "ifrs_mx-cor_20141205_Hasta5AnosOMasMiembro"
        };

        private static String[] EtiquetasMiembrosDimensionIntervalo = {
            "Año actual",
            "Hasta 1 año",
            "Hasta 2 años",
            "Hasta 3 años",
            "Hasta 4 años",
            "Hasta 5 años o más"
        };

        private static String[] MiembrosDimensionDenominacion = {
            "ifrs_mx-cor_20141205_MonedaNacionalMiembro",
            "ifrs_mx-cor_20141205_MonedaExtranjeraMiembro",
            "ifrs_mx-cor_20141205_TotalMonedasMiembro"
        };

        private static String[] EtiquetasMiembrosDimensionDenominacion = {
            "Nacional",
            "Extranjero",
            "Total"
        };

        private static String ConceptoNombrePersonaResponsable = "ar_pros_ResponsiblePersonName";
        private static String ConceptoInstitucionPersonaResponsable = "ar_pros_ResponsiblePersonInstitution";
        private static String ConceptoBloqueDeTextoRol800007 = "ifrs_mx-cor_20141205_DiscusionDeLaAdministracionSobreLasPoliticasDeUsoDeInstrumentosFinancierosDerivadosExplicandoSiDichasPoliticasPermitenQueSeanUtilizadosUnicamenteConFinesDeCoberturaOConOtroFinesTalesComoNegociacionBloqueDeTexto";

        private static String MiembroAuditorExterno = "ar_pros_ExternalAuditorRepresentativeAndAuditorA33N12Member";

        private static String ClaveTaxonomiaReporteAnual = "ar_N_entry_point";

        private static String ClaveTaxonomiaEventosRelevantes = "relevant_events";

        public static String TICKER_PARAM = "claveCotizacion";

        public static String QUARTER_PARAM = "trimestre";

        public static String YEAR_PARAM = "anio";

        public static String INFO_TRIMESTRAL_MODO_PARAM = "modoInfoTrimestral";

        public static String NUMERO_TRIMESTRES_PARAM = "numTrimestres";

        public static String NUMERO_ANIOS_PARAM = "numAnios";

        public static int MODO_SOLO_ANIO = 1;
        public static int MODO_SOLO_TRIMESTRE = 2;
        public static int MODO_TRIMESTRES_ANIO_ACTUAL_ANIOS_ANTERIOR = 3;

        private static int RENGLON_INICIO_REPORTE = 1;

        public static string FORMATO_RAZONES_FINANCIERAS = "0.00; -0.00";
        public static string FORMATO_CANTIDADES_DECIMALES_AUX = "#,##0.00########; -#,##0.00########";

        public static IDataFormat format;

        /// <summary>
        /// Méotodo que genera el reporte de Ficha Técnica.
        /// </summary>
        /// <param name="parametrosReporte"></param>
        /// <returns></returns>
        public ResultadoOperacionDto GenerarFichaTecnicaEmisora(IDictionary<string, string> parametrosReporte)
        {
            ResultadoOperacionDto resultado = new ResultadoOperacionDto();
            var ticker = parametrosReporte.ContainsKey(TICKER_PARAM) ? parametrosReporte[TICKER_PARAM] : "";
            var trimestre = parametrosReporte.ContainsKey(QUARTER_PARAM) ? parametrosReporte[QUARTER_PARAM] : "1";
            var anio = parametrosReporte.ContainsKey(YEAR_PARAM) ? parametrosReporte[YEAR_PARAM] : "2017";
            

            var query = Query.And(new List<IMongoQuery>(){
                Query.EQ("Entidad.Nombre", ticker),Query.Matches("Taxonomia",
                new BsonRegularExpression(ClaveTaxonomiaReporteAnual)),
                Query.EQ("EsVersionActual",true),Query.EQ("Parametros.Ano", anio) });
            var enviosAProcesar = AbaxXBRLCellStoreMongo.Consulta("Envio", query);

            BsonDocument envio = null;

            List<Envio> envioIFRS = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", "{'Entidad.Nombre': '"+ ticker +"',Taxonomia: /ifrs/, 'Parametros.Ano': '"+ anio +"', 'Parametros.trimestre': '"+ trimestre +"'}").ToList();
            String idEnvioIFRS = null;

            if (envioIFRS != null && envioIFRS.Count() > 0)
            {
                idEnvioIFRS = envioIFRS[0].IdEnvio;
            }                    

            if (enviosAProcesar != null && enviosAProcesar.Count > 0)
            {
                envio = enviosAProcesar[0];
            }

            if (envio != null)
            {
                var hechosReporteAnual = RecuperarHechosFichaTecnica(ElementosFichaTecnicaEmisora, envio.GetElement("IdEnvio").Value.AsString);
                var hechosInfoFinanciera = RecuperarHechosInfoFinanciera(ElementosInformacionFinanciera, ticker, trimestre, anio, parametrosReporte);
                var hechosPerfilDeCredito = RecuperarHechosPerfilDeCredito(ElementosDesgloseCreditos, ticker, trimestre, anio, parametrosReporte);
                var hechoOperaInstrumentosFinancierosDerivados = RecuperaHechosByIdConcepto(ConceptoBloqueDeTextoRol800007, idEnvioIFRS);
                var hechosAccionesFijas = RecuperaHechosByIdConcepto("ar_pros_SerieNumberOfStocks", envio.GetElement("IdEnvio").Value.AsString);
                var ultimosSincoER = ReporteFichaTecnica.ObtenerUltimosSincoEventosRelevantesDelSector(ticker, AbaxXBRLCellStoreMongo);

                XSSFWorkbook workBookExportar = new XSSFWorkbook();
                var hoja = workBookExportar.CreateSheet("Cifras");
                hoja.DisplayGridlines = false;

                EscribirEncabezado(hoja);
                EscribirDatosGenerales(hoja, hechosReporteAnual, ticker, trimestre, anio, parametrosReporte);
                ReporteFichaTecnica.EscribirSeccionEventosRelevantesDelSector(hoja, ultimosSincoER);
                EscribirPrincipalesFuncionarios(hoja, hechosReporteAnual);
                EscribirSeccionAcciones(hechosAccionesFijas, hoja);
                EscribirPrincipalesCuentas(hoja, hechosInfoFinanciera.ToList(), Convert.ToInt16(anio), trimestre, workBookExportar);
                EscribirAnalisis(hoja, hechosInfoFinanciera.ToList(), Convert.ToInt16(anio), trimestre, workBookExportar);
                EscribirOperaInstrumentosFinancierosDerivados(hechoOperaInstrumentosFinancierosDerivados, hoja);
                EscribirPerfilCredito(hoja, hechosPerfilDeCredito.ToList(), Convert.ToInt16(anio), trimestre, workBookExportar);

                var memoryStreamNew = new MemoryStream();
                var currentCulture = Thread.CurrentThread.CurrentCulture;
                Thread.CurrentThread.CurrentCulture = new CultureInfo("en-US");
                workBookExportar.Write(memoryStreamNew);
                Thread.CurrentThread.CurrentCulture = currentCulture;
                resultado.InformacionExtra = memoryStreamNew.ToArray();
                resultado.Resultado = true;
            }
            else
            {
                resultado.Resultado = false;
                resultado.Mensaje = "No se localizó ningún envío de la emisora:" + ticker + " para el año:" + anio;
            }
            return resultado;
        }

        /// <summary>
        /// Obtiene la cantidad de acciones fijas.
        /// </summary>
        /// <param name="listadoHechos"></param>
        /// <returns></returns>
        private double ObtenerSumatoriaAccionesFijas(List<Hecho> listadoHechos)
        {

            double cantidadAccionesFijas = 0;

            if (listadoHechos == null && listadoHechos.Count == 0)
            {
                return cantidadAccionesFijas;
            }

            foreach (var hecho in listadoHechos)
            {
                cantidadAccionesFijas += Convert.ToDouble(hecho.Valor);
            }

            return cantidadAccionesFijas;
        }

        /// <summary>
        /// Escribe la sección "ACCIONES".
        /// </summary>
        /// <param name="hechoOperaInstrumentosFinancierosDerivados"></param>
        /// <param name="hoja"></param>
        private void EscribirSeccionAcciones(List<Hecho> hechoOperaInstrumentosFinancierosDerivados, ISheet hoja)
        {
            int numColumnasTitulos = 3;
            int iRenglon = hoja.LastRowNum;
            iRenglon += 3;
            var row = hoja.CreateRow(iRenglon++);
            var cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("Acciones:");

            var bordeAbajoStyle = hoja.Workbook.CreateCellStyle();
            bordeAbajoStyle.BorderBottom = BorderStyle.Medium;
            for (int iCol = 0; iCol < numColumnasTitulos; iCol++)
            {
                hoja.SetColumnWidth(iCol, 6000);
                cell = row.GetCell(iCol, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.CellStyle = bordeAbajoStyle;
            }

            row = hoja.CreateRow(iRenglon++);
            cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("Acciones inscritas en el RNV");

            row = hoja.CreateRow(iRenglon++);
            cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("Fijas:");
            cell = row.GetCell(1, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue(ObtenerSumatoriaAccionesFijas(hechoOperaInstrumentosFinancierosDerivados));

            row = hoja.CreateRow(iRenglon++);
            cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("Variables:");
        }

        /// <summary>
        /// Escribe la sección "PRINCIPALES CUENTAS".
        /// </summary>
        /// <param name="hoja"></param>
        /// <param name="infoFinanciera"></param>
        /// <param name="anio"></param>
        /// <param name="trimestre"></param>
        private void EscribirPrincipalesCuentas(ISheet hoja, List<ColumnaReporteDTO> infoFinanciera, int anio, String trimestre, XSSFWorkbook workBookExportar)
        {

            //trimestre = trimestre.Contains("D") ? trimestre.Substring(0, 1) : trimestre;
            String[] periodosAMostrarPrincipalesCuentas = { (anio - 1).ToString(), (anio - 2).ToString(), trimestre + "T" + (anio.ToString()), trimestre + "T" + ((anio - 1).ToString()) };

            format = workBookExportar.CreateDataFormat();
            int numColumnasTitulos = 5;
            int iRenglon = hoja.LastRowNum;
            iRenglon += 3;

            var row = hoja.CreateRow(iRenglon++);
            var cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("PRINCIPALES CUENTAS:");

            int celda = 1;

            foreach (String periodo in periodosAMostrarPrincipalesCuentas)
            {
                cell = row.GetCell(celda, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.SetCellValue(periodo);
                celda++;
            }

            var bordeAbajoStyle = hoja.Workbook.CreateCellStyle();
            bordeAbajoStyle.BorderBottom = BorderStyle.Medium;
            for (int iCol = 0; iCol < infoFinanciera.Count + 1; iCol++)
            {
                hoja.SetColumnWidth(iCol, 6000);
                cell = row.GetCell(iCol, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.CellStyle = bordeAbajoStyle;
            }

            EscribeNobreConceptoRenglon(hoja, NombresRengonInformacionFinanciera, iRenglon, 0);

            celda = 1;
            ICellStyle cellStyle = workBookExportar.CreateCellStyle();
            cellStyle.DataFormat = format.GetFormat("#,##0.00########");

            foreach (String periodo in periodosAMostrarPrincipalesCuentas)
            {
                if (infoFinanciera.Find(columnaReporte => columnaReporte.Titulo.Equals(periodo)) != null)
                {
                    ColumnaReporteDTO columnaReporteDTO = infoFinanciera.Find(columnaReporte => columnaReporte.Titulo.Equals(periodo));
                    List<Hecho> listaHechosColumnaReporte = new List<Hecho>();

                    foreach (var elemento in columnaReporteDTO.Hechos)
                    {
                        listaHechosColumnaReporte.Add(elemento.Value);
                    }

                    EscribirUnaColumna(hoja, listaHechosColumnaReporte, OrdenElementosInformacionFinanciera, iRenglon, celda, workBookExportar, FORMATO_CANTIDADES_DECIMALES_AUX, cellStyle);

                }
                celda++;
            }

        }

        /// <summary>
        /// Escribe sección "Análisis".
        /// </summary>
        /// <param name="hoja"></param>
        /// <param name="infoFinanciera"></param>
        /// <param name="anio"></param>
        /// <param name="trimestre"></param>
        /// <param name="workBookExportar"></param>
        private void EscribirAnalisis(ISheet hoja, List<ColumnaReporteDTO> infoFinanciera, int anio, String trimestre, XSSFWorkbook workBookExportar)
        {

            //trimestre = trimestre.Contains("D") ? trimestre.Substring(0, 1) : trimestre;
            String[] periodosAMostrarPrincipalesCuentas = { (anio - 1).ToString(), (anio - 2).ToString(), trimestre + "T" + (anio.ToString()), trimestre + "T" + ((anio - 1).ToString()) };

            int numColumnasTitulos = 5;
            int iRenglon = hoja.LastRowNum;
            iRenglon += 3;

            var row = hoja.CreateRow(iRenglon++);
            var cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("ANÁLISIS:");

            int celda = 1;

            foreach (String periodo in periodosAMostrarPrincipalesCuentas)
            {
                cell = row.GetCell(celda, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.SetCellValue(periodo);
                celda++;
            }

            var bordeAbajoStyle = hoja.Workbook.CreateCellStyle();
            bordeAbajoStyle.BorderBottom = BorderStyle.Medium;
            for (int iCol = 0; iCol < infoFinanciera.Count + 1; iCol++)
            {
                hoja.SetColumnWidth(iCol, 6000);
                cell = row.GetCell(iCol, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.CellStyle = bordeAbajoStyle;
            }

            row = hoja.CreateRow(iRenglon++);
            cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("RATIOS:");

            EscribeNobreConceptoRenglon(hoja, TituloElementosRazonesFinancieras, iRenglon, 0);

            celda = 1;
            ICellStyle cellStyle = workBookExportar.CreateCellStyle();
            cellStyle.DataFormat = format.GetFormat("#,##0.00");

            foreach (String periodo in periodosAMostrarPrincipalesCuentas)
            {
                if (infoFinanciera.Find(columnaReporte => columnaReporte.Titulo.Equals(periodo)) != null)
                {
                    ColumnaReporteDTO columnaReporteDTO = infoFinanciera.Find(columnaReporte => columnaReporte.Titulo.Equals(periodo));
                    List<Hecho> listaHechosColumnaReporte = new List<Hecho>();

                    foreach (var elemento in columnaReporteDTO.Hechos)
                    {
                        listaHechosColumnaReporte.Add(elemento.Value);
                    }

                    EscribirUnaColumna(hoja, listaHechosColumnaReporte, ElementosRazonesFinancieras, iRenglon, celda, workBookExportar, FORMATO_RAZONES_FINANCIERAS, cellStyle);
                }
                celda++;
            }

        }

        /// <summary>
        /// Escribe sección "Perfil de crédito"
        /// </summary>
        /// <param name="hoja"></param>
        /// <param name="infoFinanciera"></param>
        /// <param name="anio"></param>
        /// <param name="trimestre"></param>
        /// <param name="workBookExportar"></param>
        private void EscribirPerfilCredito(ISheet hoja, List<ColumnaReporteDTO> infoFinanciera, int anio, String trimestre, XSSFWorkbook workBookExportar)
        {
            format = workBookExportar.CreateDataFormat();
            int numColumnasTitulos = 7;
            int iRenglon = hoja.LastRowNum;
            iRenglon += 3;

            var row = hoja.CreateRow(iRenglon++);
            var cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("Perfil de crédito:");

            var bordeAbajoStyle = hoja.Workbook.CreateCellStyle();
            bordeAbajoStyle.BorderBottom = BorderStyle.Medium;
            for (int iCol = 0; iCol < infoFinanciera.Count + 1; iCol++)
            {
                hoja.SetColumnWidth(iCol, 6000);
                cell = row.GetCell(iCol, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.CellStyle = bordeAbajoStyle;
            }

            row = hoja.CreateRow(iRenglon++);
            cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("Periodo:");

            cell = row.GetCell(1, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue(trimestre + "T " + anio.ToString());

            row = hoja.CreateRow(iRenglon++);

            int celda = 1;
            foreach (var columnaReporteDTO in infoFinanciera)
            {
                cell = row.GetCell(celda, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.SetCellValue(columnaReporteDTO.Titulo);
                celda++;
            }

            EscribeNobreConceptoRenglon(hoja, EtiquetasMiembrosDimensionDenominacion, iRenglon, 0);

            celda = 1;
            var rengloIniciar = iRenglon;

            cell = null;
            ICellStyle cellStyle = workBookExportar.CreateCellStyle();
            cellStyle.DataFormat = format.GetFormat("#,##0.00########");

            foreach (var columnaReporteDTO in infoFinanciera)
            {
                iRenglon = rengloIniciar;

                foreach (var miembro in MiembrosDimensionDenominacion)
                {
                    foreach (var hecho in columnaReporteDTO.Hechos)
                    {
                        if (hoja.GetRow(iRenglon) != null)
                        {
                            row = hoja.GetRow(iRenglon);
                        }
                        else
                        {
                            row = hoja.CreateRow(iRenglon);
                        }

                        if (hecho.Key.Equals(miembro))
                        {
                            cell = row.CreateCell(celda);
                            cell.SetCellValue(Convert.ToDouble(hecho.Value.ValorNumerico));
                            cell.CellStyle = cellStyle;
                            iRenglon++;
                        }
                    }
                }

                celda++;
            }

        }

        /// <summary>
        /// Escribe Titulos de renglones.
        /// </summary>
        /// <param name="hoja"></param>
        /// <param name="titulos"></param>
        /// <param name="renglon"></param>
        /// <param name="columna"></param>
        public void EscribeNobreConceptoRenglon(ISheet hoja, String[] titulos, int renglon, int columna)
        {
            foreach (var titulo in titulos)
            {
                var row = hoja.CreateRow(renglon);
                var cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.SetCellValue(titulo);
                renglon++;
            }
        }

        /// <summary>
        /// Escribe la sección de datos generales de la emisora
        /// </summary>
        /// <param name="hoja"></param>
        /// <param name="hechosReporteAnual"></param>
        /// <param name="ticker"></param>
        /// <param name="trimestre"></param>
        /// <param name="anio"></param>
        /// <param name="parametrosReporte"></param>
        private void EscribirDatosGenerales(ISheet hoja, IDictionary<string, IList<Hecho>> hechosReporteAnual, string ticker, string trimestre, string anio, IDictionary<string, string> parametrosReporte)
        {
            int numColumnasTitulos = 5;
            int iRenglon = hoja.LastRowNum;
            iRenglon += 3;
            var row = hoja.CreateRow(iRenglon++);
            var cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("DATOS GENERALES DE LA EMISORA");
            var bordeAbajoStyle = hoja.Workbook.CreateCellStyle();
            bordeAbajoStyle.BorderBottom = BorderStyle.Medium;
            for (int iCol = 0; iCol < numColumnasTitulos; iCol++)
            {
                hoja.SetColumnWidth(iCol, 6000);

                cell = row.GetCell(iCol, MissingCellPolicy.CREATE_NULL_AS_BLANK);

                cell.CellStyle = bordeAbajoStyle;
            }

            EscribirDatoADosColumnas("Denominación:", "ar_pros_NameOfTheIssuer", hechosReporteAnual, numColumnasTitulos - 1, hoja, iRenglon++);
            EscribirDatoADosColumnas("Clave de pizarra:", "ar_pros_Ticker", hechosReporteAnual, numColumnasTitulos - 1, hoja, iRenglon++);
            EscribirDatoADosColumnas("Instrumentos:", "ar_pros_TypeOfInstrument", hechosReporteAnual, numColumnasTitulos - 1, hoja, iRenglon++);
            EscribirDatoADosColumnas("Sector:", "", hechosReporteAnual, numColumnasTitulos - 1, hoja, iRenglon++);
            EscribirDatoADosColumnas("Actividad principal:", "ar_pros_MainActivity", hechosReporteAnual, numColumnasTitulos - 1, hoja, iRenglon++);
            EscribirDatoADosColumnas("Dirección:", "ar_pros_AdressOfTheIssuer", hechosReporteAnual, numColumnasTitulos - 1, hoja, iRenglon++);
            EscribirDatoADosColumnas("Contacto:", "ar_pros_PublicDocuments", hechosReporteAnual, numColumnasTitulos - 1, hoja, iRenglon++);

            //Recuperar auditor externo
            var auditorExterno = RecuperarDescripcionAuditoresExternos(hechosReporteAnual);
            auditorExterno = ReporteUtil.removeTextHTML(auditorExterno);
            EscribirDatoADosColumnas("Auditor externo:", "", hechosReporteAnual, numColumnasTitulos - 1, hoja, iRenglon++, auditorExterno);
        }

        /// <summary>
        /// Escribe la sección de Principales Funcionarios.
        /// </summary>
        /// <param name="hoja"></param>
        /// <param name="hechosReporteAnual"></param>
        private void EscribirPrincipalesFuncionarios(ISheet hoja, IDictionary<string, IList<Hecho>> hechosReporteAnual)
        {
            int numColumnasTitulos = 2;
            int iRenglon = hoja.LastRowNum;
            iRenglon += 3;
            var row = hoja.CreateRow(iRenglon++);
            var cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("PRINCIPALES FUNCIONARIOS");

            var bordeAbajoStyle = hoja.Workbook.CreateCellStyle();
            bordeAbajoStyle.BorderBottom = BorderStyle.Medium;
            for (int iCol = 0; iCol < numColumnasTitulos; iCol++)
            {
                hoja.SetColumnWidth(iCol, 6000);
                cell = row.GetCell(iCol, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.CellStyle = bordeAbajoStyle;
            }

            EscribirUnaColumnaPorConcepto("ar_pros_ResponsiblePersonPosition", iRenglon, 0, "ar_pros_ExternalAuditorRepresentativeAndAuditorA33N12Member", hechosReporteAnual, hoja);
            EscribirUnaColumnaPorConcepto("ar_pros_ResponsiblePersonName", iRenglon, 1, "ar_pros_ExternalAuditorRepresentativeAndAuditorA33N12Member", hechosReporteAnual, hoja);
        }

        /// <summary>
        /// Escribe la sección de Opera Instrumentos Financieros Derivados.
        /// </summary>
        /// <param name="hechoOperaInstrumentosFinancierosDerivados"></param>
        /// <param name="hoja"></param>
        private void EscribirOperaInstrumentosFinancierosDerivados(List<Hecho> hechoOperaInstrumentosFinancierosDerivados, ISheet hoja)
        {
           
            int numColumnasTitulos = 3;
            int iRenglon = hoja.LastRowNum;
            iRenglon += 3;

            var row = hoja.CreateRow(iRenglon++);
            var cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);

            String valorCelda = "Revela información sobre instrumentos financieros derivados";

            if (hechoOperaInstrumentosFinancierosDerivados != null && hechoOperaInstrumentosFinancierosDerivados.Count > 0)
            {
                var cadena = hechoOperaInstrumentosFinancierosDerivados[0].Valor.ToLower();                

                if (cadena.Count() > 100)
                {
                    valorCelda =  valorCelda + "                             SI";
                }
                else
                {
                    valorCelda = valorCelda + "                              NO";
                }

            }else
            {
                valorCelda = valorCelda + "                              NO";
            }

            cell.SetCellValue(valorCelda);

            var bordeAbajoStyle = hoja.Workbook.CreateCellStyle();
            bordeAbajoStyle.BorderBottom = BorderStyle.Medium;
            for (int iCol = 0; iCol < numColumnasTitulos; iCol++)
            {
                hoja.SetColumnWidth(iCol, 6000);
                cell = row.GetCell(iCol, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.CellStyle = bordeAbajoStyle;
            }
                        
        }

        /// <summary>
        /// Escribe de forma genérica un dato y su etiqueta a 2 columnas, la  columna de datos puede opcionalmente
        /// tener un colspan
        /// </summary>
        private void EscribirDatoADosColumnas(string titulo, string idConcepto, IDictionary<string, IList<Hecho>> hechosReporte, int colspan, ISheet hoja, int iRenglon, String defaultValue = null)
        {
            var row = hoja.GetRow(iRenglon);
            if (row == null)
            {
                row = hoja.CreateRow(iRenglon);
            }

            var cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue(titulo);

            String valorDato = "";

            if (hechosReporte.ContainsKey(idConcepto) && hechosReporte[idConcepto].Count > 0)
            {
                valorDato = Regex.Replace(hechosReporte[idConcepto][0].Valor, "<.*?>", String.Empty);
                valorDato = ReporteUtil.removeTextHTML(valorDato);
                valorDato = ReporteUtil.removeTextHTML(valorDato);
            }
            else
            {
                if (defaultValue != null)
                {
                    valorDato = defaultValue;
                }
            }

            cell = row.GetCell(1, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue(valorDato.Trim());
            if (colspan > 1)
            {
                var range = new NPOI.SS.Util.CellRangeAddress(iRenglon, iRenglon, 1, 1 + colspan - 1);
                hoja.AddMergedRegion(range);
            }

        }

        /// <summary>
        /// Escribe una columna en el reporte.
        /// </summary>
        /// <param name="idConcepto"></param>
        /// <param name="hechosReporte"></param>
        /// <param name="hoja"></param>
        private void EscribirUnaColumnaPorConcepto(string idConcepto, int renglon, int columna, string miembroAExcluir, IDictionary<string, IList<Hecho>> hechosReporte, ISheet hoja)
        {
            IRow row = null;

            if (hechosReporte.ContainsKey(idConcepto) && hechosReporte[idConcepto].Count > 0)
            {

                List<Hecho> hechos = hechosReporte[idConcepto].ToList();
                hechos = hechos.OrderBy(hecho => hecho.MiembrosDimensionales[0].MiembroTipificado).ThenBy(hecho => hecho.MiembrosDimensionales[1].MiembroTipificado).ToList();

                foreach (var hecho in hechos)
                {
                    if (!hecho.MiembrosDimensionales[2].IdItemMiembro.Equals(miembroAExcluir))
                    {
                        if (hoja.GetRow(renglon) != null)
                        {
                            row = hoja.GetRow(renglon);
                        }
                        else
                        {
                            row = hoja.CreateRow(renglon);
                        }

                        var cell = row.GetCell(columna, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                        cell.SetCellValue(hecho.Valor);
                        renglon++;
                    }
                }
            }
        }

        /// <summary>
        /// Escribe una columna de datos de acuerdo al orden de ordenConceptos.
        /// </summary>
        /// <param name="hoja"></param>
        /// <param name="hechosReporte"></param>
        /// <param name="ordenConceptos"></param>
        /// <param name="renglon"></param>
        /// <param name="columna"></param>
        private void EscribirUnaColumna(ISheet hoja, IList<Hecho> hechosReporte, string[] ordenConceptos, int renglon, int columna, XSSFWorkbook workbook, String formatoTipoDato, ICellStyle cellStyle)
        {
            IRow row = null;

            foreach (var concepto in ordenConceptos)
            {
                if (hoja.GetRow(renglon) != null)
                {
                    row = hoja.GetRow(renglon);
                }
                else
                {
                    row = hoja.CreateRow(renglon);
                }

                var cell = row.CreateCell(columna);

                var hecho = hechosReporte.ToList().Find(hechoAux => hechoAux.Concepto.IdConcepto.Equals(concepto));

                if (hecho != null)
                {
                    if (hecho.Concepto.TipoDato.Contains("monetary"))
                    {
                        cell.SetCellValue(Convert.ToDouble(hecho.ValorNumerico));
                    }
                    else if (hecho.Concepto.TipoDato.Contains("perShareItemType"))
                    {
                        cell.SetCellValue(Convert.ToDouble(hecho.ValorNumerico));
                    }
                    else
                    {
                        cell.SetCellValue(hecho.Valor);
                    }
                }
                else
                {
                    cell.SetCellValue("");
                }

                cell.CellStyle = cellStyle;

                renglon++;
            }

        }

        /// <summary>
        /// Recupera las descripciones de los auditores externos
        /// </summary>
        /// <param name="hechosReporteAnual"></param>
        /// <returns></returns>
        private String RecuperarDescripcionAuditoresExternos(IDictionary<string, IList<Hecho>> hechosReporteAnual)
        {
            var descAuditor = "";
            if (hechosReporteAnual.ContainsKey(ConceptoNombrePersonaResponsable))
            {
                foreach (var hecho in hechosReporteAnual[ConceptoNombrePersonaResponsable])
                {
                    if (hecho.MiembrosDimensionales != null)
                    {
                        string seqInstitucion = null;
                        string seqPersona = null;
                        string idMiembroFigura = null;
                        foreach (var infoDim in hecho.MiembrosDimensionales)
                        {
                            if (DimensionPersonaResponableInstitucionTyped.Equals(infoDim.IdDimension))
                            {
                                seqInstitucion = Regex.Replace(infoDim.MiembroTipificado, "<.*?>", String.Empty).Trim();
                            }
                            if (DimensionPersonaResponableTyped.Equals(infoDim.IdDimension))
                            {
                                seqPersona = Regex.Replace(infoDim.MiembroTipificado, "<.*?>", String.Empty).Trim();
                            }
                            if (DimensionFiguraResponsable.Equals(infoDim.IdDimension))
                            {
                                idMiembroFigura = infoDim.IdItemMiembro;
                            }
                        }
                        if (idMiembroFigura != null && seqInstitucion != null && seqPersona != null &&
                            MiembroAuditorExterno.Equals(idMiembroFigura))
                        {

                            descAuditor += hecho.Valor;

                            //Auditor: Recuperar institucion
                            if (hechosReporteAnual.ContainsKey(ConceptoInstitucionPersonaResponsable))
                            {
                                string seqInstitucionInst = null;
                                string idMiembroFiguraInst = null;
                                foreach (var hechoInstitucion in hechosReporteAnual[ConceptoInstitucionPersonaResponsable])
                                {
                                    foreach (var infoDimInst in hechoInstitucion.MiembrosDimensionales)
                                    {
                                        if (DimensionPersonaResponableInstitucionTyped.Equals(infoDimInst.IdDimension))
                                        {
                                            seqInstitucionInst = Regex.Replace(infoDimInst.MiembroTipificado, "<.*?>", String.Empty).Trim();
                                        }
                                        if (DimensionFiguraResponsable.Equals(infoDimInst.IdDimension))
                                        {
                                            idMiembroFiguraInst = infoDimInst.IdItemMiembro;
                                        }
                                    }

                                    //Verificar si es la institución del auditor
                                    if (idMiembroFigura.Equals(idMiembroFiguraInst) && seqInstitucion.Equals(seqInstitucionInst))
                                    {
                                        descAuditor += " (" + hechoInstitucion.Valor + ") ";
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return descAuditor;
        }

        /// <summary>
        /// Escribe el encabezado de la hoja de reporte
        /// </summary>
        /// <param name="hoja"></param>
        private void EscribirEncabezado(ISheet hoja)
        {
            int iRenglon = RENGLON_INICIO_REPORTE;
            var row = hoja.CreateRow(iRenglon++);

            var cell = row.GetCell(2, MissingCellPolicy.CREATE_NULL_AS_BLANK);

            cell.SetCellValue("COMISIÓN NACIONAL BANCARIA Y DE VALORES");

            row = hoja.CreateRow(iRenglon++);

            cell = row.GetCell(2, MissingCellPolicy.CREATE_NULL_AS_BLANK);

            cell.SetCellValue("Vicepresidencia de Supervisión Bursátil");

            row = hoja.CreateRow(iRenglon++);
            cell = row.GetCell(2, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("Dirección General de Emisoras");

            row = hoja.CreateRow(iRenglon++);
            cell = row.GetCell(2, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            cell.SetCellValue("Dirección General Adjunta de Vigilancia de Emisoras");
        }

        /// <summary>
        /// Recupera los hechos relacionados al desglose de créditos y calcula el renglón de total
        /// </summary>
        private IList<ColumnaReporteDTO> RecuperarHechosPerfilDeCredito(string[] elementosDesgloseCreditos, string ticker, string trimestre, string anio, IDictionary<string, string> parametrosReporte)
        {
            var mapaColumnas = new Dictionary<String, ColumnaReporteDTO>();
            var listaColumnas = new List<ColumnaReporteDTO>();
            var listaConceptos = "";
            foreach (var idElem in elementosDesgloseCreditos)
            {
                if (!String.IsNullOrEmpty(listaConceptos))
                {
                    listaConceptos += ",";
                }
                listaConceptos += "'" + idElem + "'";
            }
            int intAnio = Int32.Parse(anio);
            int numMes = "4D".Equals(trimestre) ? 12 : Int32.Parse(trimestre) * 3;
            var fechaBuscada = new DateTime(intAnio, numMes, DateTime.DaysInMonth(intAnio, numMes));

            String parametrosEnvio = "{ 'Entidad.Nombre': '" + ticker + "' ,Taxonomia:{$regex: 'ifrs'}, 'Parametros.Ano': '" + intAnio + "', 'Parametros.trimestre': '" + trimestre + "' }"; 

            List<Envio> envios = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", parametrosEnvio).ToList();

            Envio envio = new Envio();
            String parametrosHechos = "{";

            if (envios != null && envios.Count > 0)
            {
                envio = envios.ElementAt(0);
                parametrosHechos = parametrosHechos + "IdEnvio: '" + envio.IdEnvio + "', ";
            }

            parametrosHechos = parametrosHechos + "'Concepto.IdConcepto': { $in: [ " + listaConceptos + " ] }," +
                 "'Entidad.Nombre':'" + ticker + "'," +
                 "'Periodo.FechaInstante':ISODate('" + fechaBuscada.ToString("o") + "Z')" +
                 "}";

            //Consultar todos los conceptos de todas las fechas disponibles
            var listTotalHechos = AbaxXBRLCellStoreMongo.ConsultaElementos<CellStore.Modelo.Hecho>("Hecho",parametrosHechos);

            for (int ixCol = 0; ixCol < MiembrosDimensionIntervalo.Length; ixCol++)
            {
                var columna = MiembrosDimensionIntervalo[ixCol];
                //Crear columnas
                mapaColumnas[columna] = new ColumnaReporteDTO();
                mapaColumnas[columna].Entidad = ticker;
                mapaColumnas[columna].FechaFin = fechaBuscada;
                mapaColumnas[columna].Titulo = EtiquetasMiembrosDimensionIntervalo[ixCol];
                mapaColumnas[columna].Hechos = new Dictionary<String, Hecho>();
                listaColumnas.Add(mapaColumnas[columna]);
            }

            foreach (var hecho in listTotalHechos)
            {
                string miembroIntervalo = null;
                string miembroMoneda = null;
                if (hecho.MiembrosDimensionales != null)
                {
                    foreach (var dimension in hecho.MiembrosDimensionales)
                    {
                        if (DimensionIntervaloTiempoCredito.Equals(dimension.IdDimension))
                        {
                            miembroIntervalo = dimension.IdItemMiembro;
                        }
                        if (DimensionDenomacionCredito.Equals(dimension.IdDimension))
                        {
                            miembroMoneda = dimension.IdItemMiembro;
                        }
                    }

                    if (miembroIntervalo != null && miembroMoneda != null)
                    {
                        //Colocar el hecho en la columna 
                        if (mapaColumnas.ContainsKey(miembroIntervalo))
                        {
                            //Colocar en la moneda
                            hecho.Concepto.TipoDato = "http://www.xbrl.org/2003/instance:monetaryItemType";
                            mapaColumnas[miembroIntervalo].Hechos[miembroMoneda] = hecho;
                        }
                    }
                }
            }

            //Crear la sumatoria extra requerida
            foreach (var columna in mapaColumnas.Values)
            {
                decimal resultadoTotal = 0;
                foreach (var hecho in columna.Hechos.Values)
                {
                    resultadoTotal += hecho.ValorNumerico;
                }
                var hechoTotal = new CellStore.Modelo.Hecho();
                hechoTotal.Concepto = new Concepto();
                hechoTotal.Concepto.IdConcepto = elementosDesgloseCreditos[0];
                hechoTotal.ValorNumerico = resultadoTotal;
                hechoTotal.Valor = resultadoTotal.ToString();
                columna.Hechos[MiembrosDimensionDenominacion[2]] = hechoTotal;
            }

            return listaColumnas;
        }

        /// <summary>
        /// Método que se encarga de recuperar los hechos de la información financiera que se utiliza en la 
        /// sección principales cuentas y análisis.
        /// </summary>
        /// <param name="elementosInformacionFinanciera"></param>
        /// <param name="ticker"></param>
        /// <param name="trimestre"></param>
        /// <param name="anio"></param>
        /// <param name="parametrosReporte"></param>
        /// <returns></returns>
        private IList<ColumnaReporteDTO> RecuperarHechosInfoFinanciera(string[] elementosInformacionFinanciera, string ticker, string trimestre, string anio,
                                                                                                IDictionary<string, string> parametrosReporte)
        {

            var listaConceptosInstante = "'" + String.Join("','", ElementosInformacionFinancieraInstante) + "'";
            var listaConceptosPeriodo = "'" + String.Join("','", ElementosInformacionFinancieraPeriodo) + "'";

            int numeroAnio = Convert.ToInt32(anio);
            int numeroTrimestre = trimestre.Contains("D") ? Convert.ToInt32(trimestre.Substring(0, 1)) : Convert.ToInt32(trimestre);

            ObjetoFecha[] fechas = ReporteFichaTecnica.obtenerFechas(numeroTrimestre, Convert.ToInt32(anio));

            String[] envioPorFecha = ReporteFichaTecnica.EnvioPorFecha(ticker, trimestre, numeroAnio, fechas, AbaxXBRLCellStoreMongo);

            String[] periodosAMostrarPrincipalesCuentas = { (numeroAnio - 1).ToString(), (numeroAnio - 2).ToString(), trimestre + "T" + (anio.ToString()), trimestre + "T" + ((numeroAnio - 1).ToString()) };

            List<ColumnaReporteDTO> listaColumnaReporteDTO = new List<ColumnaReporteDTO>();

            var indice = 0;

            foreach (ObjetoFecha fecha in fechas)
            {
                
                String parametrosHechosInstante = "{" +
                    "'Concepto.IdConcepto': { $in: [ " + listaConceptosInstante + " ] }," +
                    "'EsDimensional':false," +
                    "'Taxonomia':{$regex: 'ifrs'}," +
                    "'Entidad.Nombre':'" + ticker + "',";

                String parametrosHechosPeriodo = "{" +
                    "'Concepto.IdConcepto': { $in: [ " + listaConceptosPeriodo + " ] }," +
                    "'EsDimensional':false," +
                    "'Taxonomia':{$regex: 'ifrs'}," +
                    "'Entidad.Nombre':'" + ticker + "',";
                          
                if(envioPorFecha[indice] != null && envioPorFecha[indice] != "")
                {
                    parametrosHechosPeriodo = parametrosHechosPeriodo + "'Periodo.FechaInicio': " + "ISODate(" + "'" + fecha.FechaInicio + "T00:00:00.000Z')," +
                     "'Periodo.FechaFin': " + "ISODate(" + "'" + fecha.FechaFin + "T00:00:00.000Z'),";
                    parametrosHechosInstante = parametrosHechosInstante + "'Periodo.FechaInstante': " + "ISODate(" + "'" + fecha.FechaInstante + "T00:00:00.000Z'),";

                    parametrosHechosInstante = parametrosHechosInstante + "IdEnvio: '" + envioPorFecha[indice] + "'";
                    parametrosHechosPeriodo = parametrosHechosPeriodo + "IdEnvio: '" + envioPorFecha[indice] + "'";

                    parametrosHechosInstante = parametrosHechosInstante + "}";
                    parametrosHechosPeriodo = parametrosHechosPeriodo + "}";

                }
                else
                {
                    parametrosHechosPeriodo = parametrosHechosPeriodo + "'Periodo.FechaInicio': " + "ISODate(" + "'" + fecha.FechaInicio + "T00:00:00.000Z')" +
                     "'Periodo.FechaFin': " + "ISODate(" + "'" + fecha.FechaFin + "T00:00:00.000Z'),";
                    parametrosHechosInstante = parametrosHechosInstante + "'Periodo.FechaInstante': " + "ISODate(" + "'" + fecha.FechaInstante + "T00:00:00.000Z')";

                    parametrosHechosInstante = parametrosHechosInstante + "}";
                    parametrosHechosPeriodo = parametrosHechosPeriodo + "}";
                }
                
                var listaHechosInstante = AbaxXBRLCellStoreMongo.ConsultaElementos<CellStore.Modelo.Hecho>("Hecho", parametrosHechosInstante);
                var listaHechosPeriodo = AbaxXBRLCellStoreMongo.ConsultaElementos<CellStore.Modelo.Hecho>("Hecho", parametrosHechosPeriodo);

                var listaTodosHechos = listaHechosInstante.Union(listaHechosPeriodo);

                ColumnaReporteDTO columnaReporteDTO = new ColumnaReporteDTO();
                columnaReporteDTO.Entidad = listaTodosHechos.ToList().ElementAt(0).Entidad.Nombre;
                columnaReporteDTO.TipoPeriodo = fecha.Periodo;
                columnaReporteDTO.Hechos = new Dictionary<String, CellStore.Modelo.Hecho>();

                columnaReporteDTO.Titulo = periodosAMostrarPrincipalesCuentas[indice];

                foreach (Hecho hecho in listaTodosHechos)
                {
                    columnaReporteDTO.Hechos[hecho.Concepto.IdConcepto] = hecho;
                }

                listaColumnaReporteDTO.Add(columnaReporteDTO);

                indice++;
            }
            
            //Calcular cifras adicionales
            foreach (var columna in listaColumnaReporteDTO)
            {
                CalcularRazonesFinancieras(columna);
            }

            return listaColumnaReporteDTO;
        }

        /// <summary>
        /// Calcula las razones financieras extras de una columna de info financiera para un reporte
        /// </summary>
        /// <param name="columna"></param>
        private void CalcularRazonesFinancieras(ColumnaReporteDTO columna)
        {
            decimal activoCirculante = columna.Hechos.ContainsKey(ElementosInformacionFinanciera[0]) ? columna.Hechos[ElementosInformacionFinanciera[0]].ValorNumerico : 0;
            decimal pasivoCirculante = columna.Hechos.ContainsKey(ElementosInformacionFinanciera[3]) ? columna.Hechos[ElementosInformacionFinanciera[3]].ValorNumerico : 0;
            //Razón circulante
            AgregarColumna(columna.Hechos, ElementosRazonesFinancieras[0], pasivoCirculante != 0 ? activoCirculante / pasivoCirculante : 0);


            decimal totalActivos = columna.Hechos.ContainsKey(ElementosInformacionFinanciera[2]) ? columna.Hechos[ElementosInformacionFinanciera[2]].ValorNumerico : 0;
            decimal totalPasivos = columna.Hechos.ContainsKey(ElementosInformacionFinanciera[5]) ? columna.Hechos[ElementosInformacionFinanciera[5]].ValorNumerico : 0;

            //Apalancamiento
            AgregarColumna(columna.Hechos, ElementosRazonesFinancieras[1], totalActivos != 0 ? totalPasivos / totalActivos : 0);

            decimal capitalContable = columna.Hechos.ContainsKey(ElementosInformacionFinanciera[7]) ? columna.Hechos[ElementosInformacionFinanciera[7]].ValorNumerico : 0;
            //deuda / capital contable
            AgregarColumna(columna.Hechos, ElementosRazonesFinancieras[2], capitalContable != 0 ? totalPasivos / capitalContable : 0);

            decimal utilidad = columna.Hechos.ContainsKey(ElementosInformacionFinanciera[13]) ? columna.Hechos[ElementosInformacionFinanciera[13]].ValorNumerico : 0;
            decimal ingresos = columna.Hechos.ContainsKey(ElementosInformacionFinanciera[9]) ? columna.Hechos[ElementosInformacionFinanciera[9]].ValorNumerico : 0;

            //Margen de utilidad
            AgregarColumna(columna.Hechos, ElementosRazonesFinancieras[3], ingresos != 0 ? utilidad / ingresos : 0);

            //ROA
            AgregarColumna(columna.Hechos, ElementosRazonesFinancieras[4], totalActivos != 0 ? utilidad / totalActivos : 0);

            //ROE
            AgregarColumna(columna.Hechos, ElementosRazonesFinancieras[5], capitalContable != 0 ? utilidad / capitalContable : 0);

            decimal utilidadBruta = columna.Hechos.ContainsKey(ElementosInformacionFinanciera[11]) ? columna.Hechos[ElementosInformacionFinanciera[11]].ValorNumerico : 0;
            //MargenOperativo
            AgregarColumna(columna.Hechos, ElementosRazonesFinancieras[6], ingresos != 0 ? utilidadBruta / ingresos : 0);

        }

        /// <summary>
        /// Método que se encarga de generar una columna.
        /// </summary>
        /// <param name="hechos"></param>
        /// <param name="nombreConcepto"></param>
        /// <param name="valor"></param>
        private void AgregarColumna(IDictionary<string, Hecho> hechos, string nombreConcepto, decimal valor)
        {
            var hechoNuevo = new CellStore.Modelo.Hecho();
            hechoNuevo.Concepto = new CellStore.Modelo.Concepto();
            hechoNuevo.Concepto.IdConcepto = nombreConcepto;
            hechoNuevo.ValorNumerico = valor;
            hechoNuevo.Valor = valor.ToString();
            hechoNuevo.Concepto.TipoDato = "http://www.xbrl.org/2003/instance:monetaryItemType";
            hechos[nombreConcepto] = hechoNuevo;
        }

        /// <summary>
        /// Prepara las columnas con los títulos y fechas de acuerdo a la información solicitada en los parámetros
        /// </summary>
        private IList<ColumnaReporteDTO> GenerarColumnasInfoFinancieraFichaTecnica(string ticker, string trimestre, string anio,
            IDictionary<string, string> parametrosReporte, IList<CellStore.Modelo.Hecho> listaTotalHechos)
        {
            var indiceColumnas = new Dictionary<long, ColumnaReporteDTO>();
            var columnas = new List<ColumnaReporteDTO>();
            var listaOrdenadaAnios = new List<long>();
            var listaOrdenadaTrimestres = new List<long>();
            var intAnio = Int32.Parse(anio);
            foreach (var hecho in listaTotalHechos)
            {
                DateTime fechaDato;
                if (hecho.Periodo.TipoPeriodo == PeriodoDto.Instante)
                {
                    fechaDato = hecho.Periodo.FechaInstante.Value;
                }
                else
                {
                    fechaDato = hecho.Periodo.FechaFin.Value;
                }
                if (!indiceColumnas.ContainsKey(fechaDato.Ticks))
                {
                    indiceColumnas[fechaDato.Ticks] = new ColumnaReporteDTO();
                    indiceColumnas[fechaDato.Ticks].Entidad = hecho.Entidad.Nombre;
                    indiceColumnas[fechaDato.Ticks].FechaFin = fechaDato;
                    indiceColumnas[fechaDato.Ticks].TipoPeriodo = PeriodoDto.Instante;
                    indiceColumnas[fechaDato.Ticks].Moneda = hecho.Unidad.Medidas[0].Nombre;
                    indiceColumnas[fechaDato.Ticks].Hechos = new Dictionary<String, CellStore.Modelo.Hecho>();
                }
                indiceColumnas[fechaDato.Ticks].Hechos[hecho.Concepto.IdConcepto] = hecho;
            }

            foreach (var milisFecha in indiceColumnas.Keys)
            {
                DateTime fechaColumna = new DateTime(milisFecha);
                if (fechaColumna.Year < intAnio && fechaColumna.Month == 12)
                {
                    indiceColumnas[milisFecha].Titulo = fechaColumna.Year + "";
                    listaOrdenadaAnios.Add(milisFecha);
                }
                if (fechaColumna.Year == intAnio)
                {
                    indiceColumnas[milisFecha].Titulo = (((int)fechaColumna.Month / 3)) + "T" + fechaColumna.Year;
                    listaOrdenadaTrimestres.Add(milisFecha);
                }
            }

            listaOrdenadaAnios.Sort();
            listaOrdenadaTrimestres.Sort();

            for (int ix = listaOrdenadaAnios.Count - 1; ix >= 0; ix--)
            {
                columnas.Add(indiceColumnas[listaOrdenadaAnios[ix]]);
            }
            for (int ix = listaOrdenadaTrimestres.Count - 1; ix >= 0; ix--)
            {
                columnas.Add(indiceColumnas[listaOrdenadaTrimestres[ix]]);
            }


            return columnas;
        }

        /// <summary>
        /// Recupera le conjunto de hechos correspondientes a los datos de la ficha técnica de la emisora que se recuperan del reporte anual
        /// </summary>
        /// <param name="elementosFichaTecnicaEmisora">Conjunto de ID de conceptos buscados</param>
        /// <param name="idEnvio">Identificador del envío buscado</param>
        /// <returns></returns>
        private IDictionary<String, IList<CellStore.Modelo.Hecho>> RecuperarHechosFichaTecnica(string[] elementosFichaTecnicaEmisora, String idEnvio)
        {
            var resultadoHechos = new Dictionary<String, IList<CellStore.Modelo.Hecho>>();
            var listaConceptos = "";
            foreach (var idElem in elementosFichaTecnicaEmisora)
            {
                if (!String.IsNullOrEmpty(listaConceptos))
                {
                    listaConceptos += ",";
                }
                listaConceptos += "'" + idElem + "'";
            }
            var listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementos<CellStore.Modelo.Hecho>("Hecho",
                "{'IdEnvio':'" + idEnvio + "', 'Concepto.IdConcepto': { $in: [" + listaConceptos + "]}}");
            foreach (var hecho in listaHechos)
            {
                if (!resultadoHechos.ContainsKey(hecho.Concepto.IdConcepto))
                {
                    resultadoHechos[hecho.Concepto.IdConcepto] = new List<CellStore.Modelo.Hecho>();
                }
                resultadoHechos[hecho.Concepto.IdConcepto].Add(hecho);
            }
            return resultadoHechos;
        }

        /// <summary>
        /// Método que recupera un listado de hechos por su IdConcepto e IdEnvio.
        /// </summary>
        /// <param name="idConcepto"></param>
        /// <param name="idEnvio"></param>
        /// <returns></returns>
        private List<Hecho> RecuperaHechosByIdConcepto(String idConcepto, String idEnvio)
        {
            var parametros = "{IdEnvio: '" + idEnvio + "', 'Concepto.IdConcepto': '" + idConcepto + "'}";
            return AbaxXBRLCellStoreMongo.ConsultaElementos<Hecho>("Hecho", parametros).ToList();
        }

    }
}