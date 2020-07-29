using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.CellStore.Services;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using NPOI.HSSF.UserModel;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AbaxXBRLCore.Common.Util
{
    public class ReporteErPcsUtil
    {

        public static String ID_CONCEPTO_EVENTO_RELEVANTE = "rel_news_RelevantEventContent";

        public static String ID_CONCEPTO_FECHA_EVENTO_RELEVANTE = "rel_news_Date";

        private const double UN_MILLON = 1000000;

        public static String TAXOS_IFRS = "" +
            "'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_ics_entry_point_2014-12-05'," +
            "'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_cp_entry_point_2014-12-05'," +
            "'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_fibras_entry_point_2014-12-05'," +
            "'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_sapib_entry_point_2014-12-05'," +
            "'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30'," +
            "'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/trac/full_ifrs_trac_entry_point_2015-06-30'," +
            "'http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-fid-2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30'";

        private const String TAXOS_ER = "" +
           "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_common_representative_view_entry_point'," +
            "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_investment_funds_view_entry_point'," +
            "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_issuer_view_entry_point'," +
            "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_rating_agency_view_entry_point'," +
            "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_trust_issuer_view_entry_point'";

        private const String TAXO_REPORTE_ANUAL = "'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_N_entry_point_2016-08-22'";

        private static String[] CONCEPTOS_INF_FINANCIERA = {
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

        public static String[] fechaFinTrimestre = { "03-31", "06-30", "09-30", "12-31" };

        public static String[] mesesInicioTrimestre = { "01", "04", "07", "10" };
        public static String[] trimestres = { "03", "06", "09", "12" };
        public static String[] dias = { "31", "30", "30", "31" };
        public static String diaMesInicio = "01";

        //Solo tiene dato en el atributo fecha instante.
        public static int TIPO_PERIODO_INSTANTE = 1;

        //Tiene valores en los atributos Fecha inicio y fecha fin.
        public static int TIPO_PERIODO_ANIO = 2;

        //Mes y día de inicio anio.
        public static String INICIO_ANIO = "-01-01";

        public static String FIN_ANIO = "-12-31";

        /// <summary>
        /// Escribe la sección Datos generales del sector.
        /// </summary>
        /// <param name="sheet">Hoja en la que se escribirá la información.</param>
        /// <param name="campos">Campos con la información correspondiente.</param>
        /// <returns></returns>
        public static void EscribirSeccionDatosGeneralesDelSector(ISheet sheet, String[] campos)
        {
            sheet.GetRow(9).GetCell(1).SetCellValue(campos[0]);
            sheet.GetRow(10).GetCell(1).SetCellValue(campos[1]);
            sheet.GetRow(11).GetCell(1).SetCellValue(campos[2]);
            sheet.GetRow(12).GetCell(1).SetCellValue(campos[3]);
            //sheet.GetRow(13).GetCell(1).SetCellValue(campos[4]);
        }

        /// <summary>
        /// Escribe la sección de eventos relevantes del sector.
        /// </summary>
        /// <param name="sheet"></param>
        /// <param name="enviosEventoRelevante"></param>
        public static void EscribirSeccionEventosRelevantesDelSector(ISheet sheet, List<List<Hecho>> enviosEventoRelevante)
        {
            int renglon = 16;

            foreach (var envioEventoRelevante in enviosEventoRelevante)
            {
                var eventoRelevante = envioEventoRelevante.Find(hecho => hecho.Concepto.IdConcepto.Equals(ID_CONCEPTO_EVENTO_RELEVANTE)) != null ? ReporteUtil.removeTextHTML(envioEventoRelevante.Find(hecho => hecho.Concepto.IdConcepto.Equals(ID_CONCEPTO_EVENTO_RELEVANTE)).Valor) : "";
                var fechaEventoRelevante = envioEventoRelevante.Find(hecho => hecho.Concepto.IdConcepto.Equals(ID_CONCEPTO_FECHA_EVENTO_RELEVANTE)) != null ? envioEventoRelevante.Find(hecho => hecho.Concepto.IdConcepto.Equals(ID_CONCEPTO_FECHA_EVENTO_RELEVANTE)).Valor : "";

                sheet.GetRow(renglon).GetCell(0).SetCellValue(fechaEventoRelevante);
                sheet.GetRow(renglon).GetCell(1).SetCellValue(eventoRelevante);

                renglon++;
            }
        }

        /// <summary>
        /// Escribe la sección de principales cuentas del sector.
        /// </summary>
        /// <param name="sheet"></param>
        /// <param name="columnasPrincipalesCuentas"></param>
        public static void EscribirSeccionPrincipalesCuentasDelSector(HSSFWorkbook workbook, ISheet sheet, IDataFormat format, Dictionary<ObjetoFecha, CuentaDelSectorDTO> columnasPrincipalesCuentas, String trimestre)
        {
            var columna = 1;
            var renglon = 24;

            foreach (var columnaReporte in columnasPrincipalesCuentas)
            {
                var esColumnaTrimestre = columna == 1 || columna == 2 ? false : true;

                if (columna == 4)
                {
                    trimestre = ObtenerTrimestreAnterior(trimestre);
                }

                sheet.GetRow(renglon - 1).GetCell(columna).SetCellValue(ObtenerEncabezadoColumna(columnaReporte.Key.FechaFin, esColumnaTrimestre, trimestre));

                sheet.GetRow(renglon).GetCell(columna).SetCellValue(columnaReporte.Value.ActivoCirculanteDelSector);
                sheet.GetRow(renglon + 1).GetCell(columna).SetCellValue(columnaReporte.Value.ActivoNoCirculanteDelSector);
                sheet.GetRow(renglon + 2).GetCell(columna).SetCellValue(columnaReporte.Value.TotalActivosDelSector);
                sheet.GetRow(renglon + 3).GetCell(columna).SetCellValue(columnaReporte.Value.PasivoCirculanteDelSector);
                sheet.GetRow(renglon + 4).GetCell(columna).SetCellValue(columnaReporte.Value.PasivoNoCirculanteDelSector);
                sheet.GetRow(renglon + 5).GetCell(columna).SetCellValue(columnaReporte.Value.TotalDePasivosDelSector);
                sheet.GetRow(renglon + 6).GetCell(columna).SetCellValue(columnaReporte.Value.CapitalSocialDelSector);
                sheet.GetRow(renglon + 7).GetCell(columna).SetCellValue(columnaReporte.Value.CapitalContableDelSector);
                sheet.GetRow(renglon + 8).GetCell(columna).SetCellValue(columnaReporte.Value.SumatoriaPasivosYCapitalContableDelSector);
                sheet.GetRow(renglon + 9).GetCell(columna).SetCellValue(columnaReporte.Value.IngresosDelSector);
                sheet.GetRow(renglon + 10).GetCell(columna).SetCellValue(columnaReporte.Value.CostoVentasDelSector);
                sheet.GetRow(renglon + 11).GetCell(columna).SetCellValue(columnaReporte.Value.UtilidadPerdidaBrutaDelSector);
                sheet.GetRow(renglon + 12).GetCell(columna).SetCellValue(columnaReporte.Value.UtilidadPerdidaDeOperacionDelSector);
                sheet.GetRow(renglon + 13).GetCell(columna).SetCellValue(columnaReporte.Value.UtilidadPerdidaNetaDelSector);
                //sheet.GetRow(renglon + 14).GetCell(columna).SetCellValue(columnaReporte.Value.UtilidadPerdidaPorAccionDelSector);

                ICellStyle cellStyle = workbook.CreateCellStyle();
                cellStyle.DataFormat = format.GetFormat("_-* #,##0_-;-* #,##0_-;_-* \" - \"??_-;_-@_-");

                for (int i = renglon; i <= 38; i++)
                {
                    sheet.GetRow(i).GetCell(columna).CellStyle = cellStyle;
                }

                columna++;
            }
        }

        /// <summary>
        /// Obtiene los últimos 5 eventos relevantes por sector.
        /// </summary>
        /// <param name="listaEmisoras"></param>
        /// <param name="abaxXBRLBlockStore"></param>
        /// <returns></returns>
        public static List<List<Hecho>> ObtenerUltimosSincoEventosRelevantesDelSector(String[] listaEmisoras, IAbaxXBRLCellStoreMongo abaxXBRLBlockStore)
        {

            List<List<Hecho>> ulimosSincoEventosRelevantesDelSector = new List<List<Hecho>>();

            var parametrosConsultaEnviosEventosRelevantes = "{ 'Entidad.Nombre' : { $in: [";

            foreach (var claveEmisora in listaEmisoras)
            {
                parametrosConsultaEnviosEventosRelevantes += "'" + claveEmisora + "' ,";
            }

            parametrosConsultaEnviosEventosRelevantes = parametrosConsultaEnviosEventosRelevantes.Remove(parametrosConsultaEnviosEventosRelevantes.LastIndexOf(","), 1);

            parametrosConsultaEnviosEventosRelevantes += "]}, ";

            parametrosConsultaEnviosEventosRelevantes += "Taxonomia: { $in: [" + TAXOS_ER + "]}, ";
            parametrosConsultaEnviosEventosRelevantes += "EsVersionActual: true";
            parametrosConsultaEnviosEventosRelevantes += "}";

            var listaEnviosEventosRelevantesEmisoras = abaxXBRLBlockStore.ConsultaElementos<Envio>("Envio", parametrosConsultaEnviosEventosRelevantes);

            var parametrosConsultaHechosEventosRelevantes = "{ 'Concepto.IdConcepto': { $in : ['" + ID_CONCEPTO_EVENTO_RELEVANTE + "', '" + ID_CONCEPTO_FECHA_EVENTO_RELEVANTE + "'] } , IdEnvio: { $in: [";

            var entroEnvios = false;

            foreach (var envio in listaEnviosEventosRelevantesEmisoras)
            {
                parametrosConsultaHechosEventosRelevantes += "'" + envio.IdEnvio + "',";
                entroEnvios = true;
            }

            if (entroEnvios)
            {
                parametrosConsultaHechosEventosRelevantes = parametrosConsultaHechosEventosRelevantes.Remove(parametrosConsultaHechosEventosRelevantes.LastIndexOf(","), 1);
            }

            parametrosConsultaHechosEventosRelevantes += "] }";
            parametrosConsultaHechosEventosRelevantes += "}";

            var listaHechosEventosRelevantesEmisoras = abaxXBRLBlockStore.ConsultaElementos<Hecho>("Hecho", parametrosConsultaHechosEventosRelevantes);

            var hechosAgrupadosPorEnvio = listaHechosEventosRelevantesEmisoras.ToList().GroupBy(hecho => hecho.IdEnvio).Select(grp => grp.ToList()).ToList();

            hechosAgrupadosPorEnvio = hechosAgrupadosPorEnvio.OrderByDescending(lista => lista.Find(hecho => hecho.Concepto.IdConcepto.Equals(ID_CONCEPTO_FECHA_EVENTO_RELEVANTE)).Valor).ToList();

            if (hechosAgrupadosPorEnvio.Count() > 0)
            {
                if (hechosAgrupadosPorEnvio.Count() >= 5)
                {
                    ulimosSincoEventosRelevantesDelSector = hechosAgrupadosPorEnvio.GetRange(0, 5);
                }
                else
                {
                    ulimosSincoEventosRelevantesDelSector = hechosAgrupadosPorEnvio.GetRange(0, hechosAgrupadosPorEnvio.Count());
                }
            }

            return ulimosSincoEventosRelevantesDelSector;

        }

        /// <summary>
        /// Obtiene las columnas de principales cuentas;
        /// </summary>
        /// <param name="listaHechosEmisoraPorFecha"></param>
        /// <returns></returns>
        public static Dictionary<ObjetoFecha, CuentaDelSectorDTO> ObtenerColumnasPrincipalesCuentas(Dictionary<String, Dictionary<ObjetoFecha, List<Hecho>>> listaHechosEmisoraPorFecha)
        {
            Dictionary<ObjetoFecha, CuentaDelSectorDTO> columnasPrincipalesCuentas = new Dictionary<ObjetoFecha, CuentaDelSectorDTO>();

            string[] fechas = { "", "", "", "" };

            ObjetoFecha[] objetoConFechas = new ObjetoFecha[4];

            var indice = 0;
            foreach (ObjetoFecha objetoFecha in listaHechosEmisoraPorFecha.ElementAt(0).Value.Keys)
            {
                objetoConFechas[indice] = objetoFecha;
                indice++;
            }

            List<CuentaDelSectorDTO> listaCuentasDelSectorPorFecha = new List<CuentaDelSectorDTO>();

            foreach (var fecha in fechas)
            {
                CuentaDelSectorDTO cuentaDelSectorDTO = new CuentaDelSectorDTO();
                listaCuentasDelSectorPorFecha.Add(cuentaDelSectorDTO);
            }

            foreach (var hechosEmisoraPorFecha in listaHechosEmisoraPorFecha)
            {
                ColumnaReporteDTO columnaReporteDTO = new ColumnaReporteDTO();

                indice = 0;
                foreach (var hechosPorFecha in hechosEmisoraPorFecha.Value)
                {

                    listaCuentasDelSectorPorFecha[indice].ActivoCirculanteDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_CurrentAssets")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_CurrentAssets")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].ActivoNoCirculanteDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_NoncurrentAssets")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_NoncurrentAssets")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].TotalActivosDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].PasivoCirculanteDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_CurrentLiabilities")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_CurrentLiabilities")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].PasivoNoCirculanteDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_NoncurrentLiabilities")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_NoncurrentLiabilities")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].TotalDePasivosDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].CapitalSocialDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_IssuedCapital")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_IssuedCapital")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].CapitalContableDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].SumatoriaPasivosYCapitalContableDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_EquityAndLiabilities")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_EquityAndLiabilities")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].IngresosDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].CostoVentasDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_CostOfSales")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_CostOfSales")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].UtilidadPerdidaBrutaDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_GrossProfit")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_GrossProfit")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].UtilidadPerdidaDeOperacionDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_ProfitLossFromOperatingActivities")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_ProfitLossFromOperatingActivities")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].UtilidadPerdidaNetaDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_ProfitLoss")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_ProfitLoss")).Valor) : 0;
                    listaCuentasDelSectorPorFecha[indice].UtilidadPerdidaPorAccionDelSector += hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_BasicEarningsLossPerShare")) != null ? Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_BasicEarningsLossPerShare")).Valor) : 0;

                    indice++;
                }

            }

            indice = 0;
            foreach (var fecha in objetoConFechas)
            {
                listaCuentasDelSectorPorFecha[indice].ActivoCirculanteDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].ActivoCirculanteDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].ActivoNoCirculanteDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].ActivoNoCirculanteDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].TotalActivosDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].TotalActivosDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].PasivoCirculanteDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].PasivoCirculanteDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].PasivoNoCirculanteDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].PasivoNoCirculanteDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].TotalDePasivosDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].TotalDePasivosDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].CapitalSocialDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].CapitalSocialDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].CapitalContableDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].CapitalContableDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].SumatoriaPasivosYCapitalContableDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].SumatoriaPasivosYCapitalContableDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].IngresosDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].IngresosDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].CostoVentasDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].CostoVentasDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].UtilidadPerdidaBrutaDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].UtilidadPerdidaBrutaDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].UtilidadPerdidaDeOperacionDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].UtilidadPerdidaDeOperacionDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].UtilidadPerdidaNetaDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].UtilidadPerdidaNetaDelSector, UN_MILLON);
                listaCuentasDelSectorPorFecha[indice].UtilidadPerdidaPorAccionDelSector = Dividir(listaCuentasDelSectorPorFecha[indice].UtilidadPerdidaPorAccionDelSector, UN_MILLON);

                columnasPrincipalesCuentas.Add(fecha, listaCuentasDelSectorPorFecha[indice]);
                indice++;
            }

            return columnasPrincipalesCuentas;
        }

        /// <summary>
        /// Obtiene los hechos por fechas de las principales cuentas.
        /// </summary>
        /// <param name="abaxXBRLBlockStore"></param>
        /// <param name="listaEmisoras"></param>
        /// <param name="trimestre"></param>
        /// <param name="anio"></param>
        /// <returns></returns>
        public static Dictionary<String, Dictionary<ObjetoFecha, List<Hecho>>> ObtenerHechosPrincipalesCuentasPorEmisora(IAbaxXBRLCellStoreMongo abaxXBRLBlockStore, String[] listaEmisoras, String trimestre, int anio)
        {
            Dictionary<String, Dictionary<ObjetoFecha, List<Hecho>>> hechosEmisoraPorFecha = new Dictionary<string, Dictionary<ObjetoFecha, List<Hecho>>>();

            var anioAnterior = trimestre == "1" ? anio - 1 : anio;
            var listaConceptosInstante = "'" + String.Join("','", ElementosInformacionFinancieraInstante) + "'";
            var listaConceptosPeriodo = "'" + String.Join("','", ElementosInformacionFinancieraPeriodo) + "'";

            foreach (String emisora in listaEmisoras)
            {
                Dictionary<ObjetoFecha, List<Hecho>> hechosPorFecha = new Dictionary<ObjetoFecha, List<Hecho>>();
                ObjetoFecha[] fechas = ObtenerFechas(trimestre, anio);
                String[] enviosPorFecha = EnvioPorFecha(emisora, trimestre.ToString(), anio, fechas, abaxXBRLBlockStore);

                var indice = 0;

                foreach (ObjetoFecha fecha in fechas)
                {
                    String parametrosHechosInstante = "{" +
                   "'Concepto.IdConcepto': { $in: [ " + listaConceptosInstante + " ] }," +
                   "'EsDimensional':false," +
                   "'Taxonomia':{$regex: 'ifrs'}," +
                   "'Entidad.Nombre':'" + emisora + "',";

                    String parametrosHechosPeriodo = "{" +
                        "'Concepto.IdConcepto': { $in: [ " + listaConceptosPeriodo + " ] }," +
                        "'EsDimensional':false," +
                        "'Taxonomia':{$regex: 'ifrs'}," +
                        "'Entidad.Nombre':'" + emisora + "',";

                    if (enviosPorFecha[indice] != null && enviosPorFecha[indice] != "")
                    {
                        parametrosHechosPeriodo = parametrosHechosPeriodo + "'Periodo.FechaInicio': " + "ISODate(" + "'" + fecha.FechaInicio + "T00:00:00.000Z')," +
                         "'Periodo.FechaFin': " + "ISODate(" + "'" + fecha.FechaFin + "T00:00:00.000Z'),";
                        parametrosHechosInstante = parametrosHechosInstante + "'Periodo.FechaInstante': " + "ISODate(" + "'" + fecha.FechaInstante + "T00:00:00.000Z'),";

                        parametrosHechosInstante = parametrosHechosInstante + "IdEnvio: '" + enviosPorFecha[indice] + "'";
                        parametrosHechosPeriodo = parametrosHechosPeriodo + "IdEnvio: '" + enviosPorFecha[indice] + "'";

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

                    var listaHechosInstante = abaxXBRLBlockStore.ConsultaElementos<CellStore.Modelo.Hecho>("Hecho", parametrosHechosInstante);
                    var listaHechosPeriodo = abaxXBRLBlockStore.ConsultaElementos<CellStore.Modelo.Hecho>("Hecho", parametrosHechosPeriodo);

                    //Si hay hechos periodo quiere decir que no hay 4D para ese año.
                    //Entonces se debe de ir por el 4D del anio anterior, que en este caso corresponde al año de fecha.
                    if(listaHechosPeriodo == null || listaHechosPeriodo.Count() == 0 && (indice == 0 || indice == 1))
                    {
                        //Aqui me quede
                        String parametrosHechoEnvio = "{Taxonomia: /ifrs/, 'Entidad.Nombre': '" + emisora + "', 'Parametros.Ano': '" + fecha.FechaFin.Substring(0, 4) + "',  $or: [{'Parametros.trimestre': '4'}, {'Parametros.trimestre': '4D'}]  }";
                        List<Envio> envios = abaxXBRLBlockStore.ConsultaElementos<Envio>("Envio", parametrosHechoEnvio).ToList();
                        
                        Envio envio = null;

                        if(envios != null && envios.Count() > 0)
                        {
                            envios = envios.OrderByDescending(envio1 => envio1.Parametros["trimestre"].ToString()).ToList();
                            envio = envios.ElementAt(0);

                            parametrosHechosPeriodo = parametrosHechosPeriodo.Substring(0, parametrosHechosPeriodo.IndexOf("IdEnvio")) + "IdEnvio: '" + envio.IdEnvio + "'}";
                            listaHechosPeriodo = abaxXBRLBlockStore.ConsultaElementos<CellStore.Modelo.Hecho>("Hecho", parametrosHechosPeriodo);
                        }

                    }

                    var listaTodosHechos = listaHechosInstante.Union(listaHechosPeriodo);

                    if (listaTodosHechos == null)
                    {
                        listaTodosHechos = new List<Hecho>();
                    }

                    hechosPorFecha.Add(fecha, listaTodosHechos.ToList());
                    indice++;
                }

                hechosEmisoraPorFecha.Add(emisora, hechosPorFecha);
            }

            return hechosEmisoraPorFecha;
        }

        /// <summary>
        /// Obtiene las columnas de la sección de análisis.
        /// </summary>
        /// <param name="principalesCuentasPorColumna"></param>
        /// <returns></returns>
        public static Dictionary<String, RatioDTO> CalcularSeccionAnalisis(Dictionary<String, CuentaDelSectorDTO> principalesCuentasPorColumna)
        {
            Dictionary<String, RatioDTO> ratioPorColumna = new Dictionary<string, RatioDTO>();

            foreach (var cuentasPorColumna in principalesCuentasPorColumna)
            {
                RatioDTO ratioDTO = new RatioDTO();
                CuentaDelSectorDTO cuenta = cuentasPorColumna.Value;

                //ratioDTO.RazonCirculante = Dividir(cuenta.ActivoCirculanteDelSector, cuenta.PasivoCirculanteDelSector);

                //try
                //{
                ratioDTO.RazonCirculante = Dividir(cuenta.ActivoCirculanteDelSector, cuenta.PasivoCirculanteDelSector);
                ratioDTO.Apalancamiento = Dividir(cuenta.TotalActivosDelSector, cuenta.TotalDePasivosDelSector);
                ratioDTO.DeudaTotalCapitalContable = Dividir(cuenta.TotalDePasivosDelSector, cuenta.CapitalContableDelSector);
                ratioDTO.MargenDeUtilidad = Dividir(cuenta.IngresosDelSector, cuenta.UtilidadPerdidaNetaDelSector);
                ratioDTO.Roa = Dividir(cuenta.TotalActivosDelSector, cuenta.UtilidadPerdidaNetaDelSector);
                ratioDTO.Roe = Dividir(cuenta.CapitalContableDelSector, cuenta.UtilidadPerdidaNetaDelSector);
                ratioDTO.MargenOperativo = Dividir(cuenta.CostoVentasDelSector, cuenta.UtilidadPerdidaDeOperacionDelSector);
                //}
                //catch (DivideByZeroException e)
                //{
                //    Console.WriteLine("No se puede dividir entre cero.");
                //}

                ratioPorColumna.Add(cuentasPorColumna.Key, ratioDTO);
            }

            return ratioPorColumna;
        }

        /// <summary>
        /// Escribe la sección de Análisis.
        /// </summary>
        /// <param name="workbook"></param>
        /// <param name="sheet"></param>
        /// <param name="format"></param>
        /// <param name="ratioPorColumna"></param>
        //public static void EscribirSeccionAnalisis(HSSFWorkbook workbook, ISheet sheet, IDataFormat format, Dictionary<String, RatioDTO> ratioPorColumna)
        //{
        //    var columna = 1;
        //    var renglon = 44;

        //    foreach (var columnaReporte in ratioPorColumna)
        //    {

        //        var esColumnaTrimestre = columna == 1 || columna == 2 ? false : true;
        //        sheet.GetRow(renglon - 2).GetCell(columna).SetCellValue(ObtenerEncabezadoColumna(columnaReporte.Key, esColumnaTrimestre));

        //        sheet.GetRow(renglon).GetCell(columna).SetCellValue(double.IsNaN(columnaReporte.Value.RazonCirculante) ? "#¡DIV/0!" : columnaReporte.Value.RazonCirculante.ToString());
        //        sheet.GetRow(renglon + 1).GetCell(columna).SetCellValue(double.IsNaN(columnaReporte.Value.Apalancamiento) ? "#¡DIV/0!" : columnaReporte.Value.Apalancamiento.ToString());
        //        sheet.GetRow(renglon + 2).GetCell(columna).SetCellValue(double.IsNaN(columnaReporte.Value.DeudaTotalCapitalContable) ? "#¡DIV/0!" : columnaReporte.Value.DeudaTotalCapitalContable.ToString());
        //        sheet.GetRow(renglon + 3).GetCell(columna).SetCellValue(double.IsNaN(columnaReporte.Value.MargenDeUtilidad) ? "#¡DIV/0!" : columnaReporte.Value.MargenDeUtilidad.ToString());
        //        sheet.GetRow(renglon + 4).GetCell(columna).SetCellValue(double.IsNaN(columnaReporte.Value.Roa) ? "#¡DIV/0!" : columnaReporte.Value.Roa.ToString());
        //        sheet.GetRow(renglon + 5).GetCell(columna).SetCellValue(double.IsNaN(columnaReporte.Value.Roe) ? "#¡DIV/0!" : columnaReporte.Value.Roe.ToString());
        //        sheet.GetRow(renglon + 6).GetCell(columna).SetCellValue(double.IsNaN(columnaReporte.Value.MargenOperativo) ? "#¡DIV/0!" : columnaReporte.Value.MargenOperativo.ToString());

        //        ICellStyle cellStyle = workbook.CreateCellStyle();
        //        cellStyle.DataFormat = format.GetFormat("0.00%");

        //        for (int i = renglon; i <= 50; i++)
        //        {
        //            sheet.GetRow(i).GetCell(columna).CellStyle = cellStyle;
        //        }

        //        columna++;
        //    }
        //}

        /// <summary>
        /// Obtiene los calculos de los atributos Activos, pasivos, capital contable e ingresos divididos entre UN_MILLON.
        /// </summary>
        /// <param name="hechosEmisoraFecha"></param>
        /// <returns></returns>
        public static Dictionary<String, Dictionary<ObjetoFecha, List<Hecho>>> ObtenerCalculosSeccionSectorVsEmisora(Dictionary<String, Dictionary<ObjetoFecha, List<Hecho>>> hechosEmisoraFecha)
        {
            Dictionary<String, Dictionary<ObjetoFecha, List<Hecho>>> hechosEmisoraPorFechaAux = new Dictionary<string, Dictionary<ObjetoFecha, List<Hecho>>>();

            foreach (var hechosPorEmisora in hechosEmisoraFecha)
            {
                hechosEmisoraPorFechaAux.Add(hechosPorEmisora.Key, hechosPorEmisora.Value);
            }

            foreach (var hechosPorEmisora in hechosEmisoraPorFechaAux)
            {
                foreach (var hechosPorFecha in hechosPorEmisora.Value)
                {
                    if (hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")) != null)
                    {
                        hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")).Valor = (Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")).Valor) / UN_MILLON).ToString();
                    }

                    if (hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")) != null)
                    {
                        hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")).Valor = (Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")).Valor) / UN_MILLON).ToString();
                    }

                    if (hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity")) != null)
                    {
                        hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity")).Valor = (Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity")).Valor) / UN_MILLON).ToString();
                    }

                    if (hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")) != null)
                    {
                        hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")).Valor = (Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")).Valor) / UN_MILLON).ToString();
                    }

                    if (hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_ProfitLoss")) != null)
                    {
                        hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_ProfitLoss")).Valor = (Convert.ToDouble(hechosPorFecha.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_ProfitLoss")).Valor) / UN_MILLON).ToString();
                    }
                }
            }

            return hechosEmisoraPorFechaAux;
        }

        /// <summary>
        /// Escribe la sección de Sector vs Emisora (Montos).
        /// </summary>
        /// <param name="workbook"></param>
        /// <param name="sheet"></param>
        /// <param name="format"></param>
        /// <param name="diccionarioHechosPorEmisoraYFechas"></param>
        public static void EscribirSeccionSectorVsEmisora(HSSFWorkbook workbook, ISheet sheet, IDataFormat format, Dictionary<String, Dictionary<ObjetoFecha, List<Hecho>>> diccionarioHechosPorEmisoraYFechas)
        {

            int indiceRenglon = 54;
            int columna = 2;

            int columnaAnioActual = 0;

            foreach (var hechosPorEmisoraYFechas in diccionarioHechosPorEmisoraYFechas)
            {

                ICellStyle cellStyle = workbook.CreateCellStyle();
                IFont cellFont = sheet.Workbook.CreateFont();
                cellFont.FontName = "Soberana Sans Light";
                cellFont.Boldweight = (short)FontBoldWeight.Bold;
                cellStyle.SetFont(cellFont);
                cellStyle.BorderBottom = BorderStyle.Thin;
                cellStyle.Alignment = HorizontalAlignment.Center;

                sheet.GetRow(indiceRenglon - 1).CreateCell(columna).SetCellValue(hechosPorEmisoraYFechas.Key);
                sheet.GetRow(indiceRenglon - 1).GetCell(columna).CellStyle = cellStyle;

                if (hechosPorEmisoraYFechas.Value.ElementAt(columnaAnioActual).Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")) != null)
                {
                    sheet.GetRow(indiceRenglon).CreateCell(columna).SetCellValue(Convert.ToDouble(hechosPorEmisoraYFechas.Value.ElementAt(columnaAnioActual).Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")).Valor));
                }
                else
                {
                    sheet.GetRow(indiceRenglon).CreateCell(columna).SetCellValue(double.NaN);
                }

                if (hechosPorEmisoraYFechas.Value.ElementAt(columnaAnioActual).Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")) != null)
                {
                    sheet.GetRow(indiceRenglon + 1).CreateCell(columna).SetCellValue(Convert.ToDouble(hechosPorEmisoraYFechas.Value.ElementAt(columnaAnioActual).Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")).Valor));
                }
                else
                {
                    sheet.GetRow(indiceRenglon + 1).CreateCell(columna).SetCellValue(double.NaN);
                }

                if (hechosPorEmisoraYFechas.Value.ElementAt(columnaAnioActual).Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity")) != null)
                {
                    sheet.GetRow(indiceRenglon + 2).CreateCell(columna).SetCellValue(Convert.ToDouble(hechosPorEmisoraYFechas.Value.ElementAt(columnaAnioActual).Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity")).Valor));
                }
                else
                {
                    sheet.GetRow(indiceRenglon + 2).CreateCell(columna).SetCellValue(double.NaN);
                }

                if (hechosPorEmisoraYFechas.Value.ElementAt(columnaAnioActual).Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")) != null)
                {
                    sheet.GetRow(indiceRenglon + 3).CreateCell(columna).SetCellValue(Convert.ToDouble(hechosPorEmisoraYFechas.Value.ElementAt(columnaAnioActual).Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")).Valor));
                }
                else
                {
                    sheet.GetRow(indiceRenglon + 3).CreateCell(columna).SetCellValue(double.NaN);
                }

                cellStyle = workbook.CreateCellStyle();
                cellFont = workbook.CreateFont();
                cellFont.Boldweight = (short)FontBoldWeight.Normal;
                cellStyle.SetFont(cellFont);
                cellStyle.Alignment = HorizontalAlignment.Center;
                cellStyle.DataFormat = format.GetFormat("_-* #,##0_-;-* #,##0_-;_-* \" - \"??_-;_-@_-");


                for (int i = indiceRenglon; i <= 57; i++)
                {
                    sheet.GetRow(i).GetCell(columna).CellStyle = cellStyle;
                }

                columna++;
            }

        }

        /// <summary>
        /// Recibe los calculos de Sector vs Emisora (Montos) y obtiene los porcentajes.
        /// </summary>
        /// <param name="hechosEmisoraFecha"></param>
        public static Dictionary<String, List<Hecho>> ObtenerCalculosPorcentajeSeccionSectorVsEmisora(Dictionary<String, Dictionary<ObjetoFecha, List<Hecho>>> hechosEmisoraFecha, Dictionary<ObjetoFecha, CuentaDelSectorDTO> principalesCuentasSector)
        {
            Dictionary<String, List<Hecho>> hechosPorEmisoraPeriodoAnoAnterior = new Dictionary<string, List<Hecho>>();

            //Se pasan solo los hechos del periodo año anterior de la emisora a un nuevo diccionario.
            foreach (var hechosPorEmisoraPeriodos in hechosEmisoraFecha)
            {
                hechosPorEmisoraPeriodoAnoAnterior.Add(hechosPorEmisoraPeriodos.Key, hechosPorEmisoraPeriodos.Value.ElementAt(0).Value);
            }

            //Se dividen los hechos para obtener el porcentaje.
            //Operaciones: activosEmisora/activosSector, pasivosEmisora/pasivosSector, capitalContableEmisora/capitalContableSector, ingresosEmisora/IngresosSector.
            foreach (var hechosEmisoraPeriodo in hechosPorEmisoraPeriodoAnoAnterior)
            {
                List<Hecho> hechosEmisora = hechosEmisoraPeriodo.Value;

                if (hechosEmisora.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")) != null && principalesCuentasSector.Count > 0)
                {
                    hechosEmisora.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")).Valor = Dividir(Convert.ToDouble(hechosEmisora.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")).Valor), principalesCuentasSector.ElementAt(0).Value.TotalActivosDelSector).ToString();
                }
                if (hechosEmisora.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")) != null && principalesCuentasSector.Count > 0)
                {
                    hechosEmisora.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")).Valor = Dividir(Convert.ToDouble(hechosEmisora.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")).Valor), principalesCuentasSector.ElementAt(0).Value.TotalDePasivosDelSector).ToString();
                }
                if (hechosEmisora.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity")) != null && principalesCuentasSector.Count > 0)
                {
                    hechosEmisora.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity")).Valor = Dividir(Convert.ToDouble(hechosEmisora.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity")).Valor), principalesCuentasSector.ElementAt(0).Value.CapitalContableDelSector).ToString();
                }
                if (hechosEmisora.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")) != null && principalesCuentasSector.Count > 0)
                {
                    hechosEmisora.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")).Valor = Dividir(Convert.ToDouble(hechosEmisora.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")).Valor), principalesCuentasSector.ElementAt(0).Value.IngresosDelSector).ToString();
                }
            }

            return hechosPorEmisoraPeriodoAnoAnterior;
        }

        /// <summary>
        /// Escribe la sección de Sector vs Emisora (Porcentajes).
        /// </summary>
        /// <param name="workbook"></param>
        /// <param name="sheet"></param>
        /// <param name="format"></param>
        /// <param name="calculosPorcentajesSeccionVsEmisora"></param>
        public static void EscribeSeccionPorcetanjesSectorVsEmisora(HSSFWorkbook workbook, ISheet sheet, IDataFormat format, Dictionary<String, List<Hecho>> calculosPorcentajesSeccionVsEmisora)
        {
            int columna = 2;
            int indiceRenglon = 61;

            foreach (var hechosPorEmisoraYPeriodo in calculosPorcentajesSeccionVsEmisora)
            {

                ICellStyle cellStyle = workbook.CreateCellStyle();
                IFont cellFont = sheet.Workbook.CreateFont();
                cellFont.FontName = "Soberana Sans Light";
                cellFont.Boldweight = (short)FontBoldWeight.Bold;
                cellStyle.SetFont(cellFont);
                cellStyle.BorderBottom = BorderStyle.Thin;
                cellStyle.Alignment = HorizontalAlignment.Center;

                sheet.GetRow(indiceRenglon - 1).CreateCell(columna).SetCellValue(hechosPorEmisoraYPeriodo.Key);
                sheet.GetRow(indiceRenglon - 1).GetCell(columna).CellStyle = cellStyle;

                if (hechosPorEmisoraYPeriodo.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")) != null)
                {
                    sheet.GetRow(indiceRenglon).CreateCell(columna).SetCellValue(Convert.ToDouble(hechosPorEmisoraYPeriodo.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")).Valor));
                }
                else
                {
                    sheet.GetRow(indiceRenglon).CreateCell(columna).SetCellValue(double.NaN);
                }

                if (hechosPorEmisoraYPeriodo.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")) != null)
                {
                    sheet.GetRow(indiceRenglon + 1).CreateCell(columna).SetCellValue(Convert.ToDouble(hechosPorEmisoraYPeriodo.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")).Valor));
                }
                else
                {
                    sheet.GetRow(indiceRenglon + 1).CreateCell(columna).SetCellValue(double.NaN);
                }

                if (hechosPorEmisoraYPeriodo.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity")) != null)
                {
                    sheet.GetRow(indiceRenglon + 2).CreateCell(columna).SetCellValue(Convert.ToDouble(hechosPorEmisoraYPeriodo.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity")).Valor));
                }
                else
                {
                    sheet.GetRow(indiceRenglon + 2).CreateCell(columna).SetCellValue(double.NaN);
                }

                if (hechosPorEmisoraYPeriodo.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")) != null)
                {
                    sheet.GetRow(indiceRenglon + 3).CreateCell(columna).SetCellValue(Convert.ToDouble(hechosPorEmisoraYPeriodo.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")).Valor));
                }
                else
                {
                    sheet.GetRow(indiceRenglon + 3).CreateCell(columna).SetCellValue(double.NaN);
                }

                cellStyle = workbook.CreateCellStyle();
                cellFont = workbook.CreateFont();
                cellFont.Boldweight = (short)FontBoldWeight.Normal;
                cellStyle.SetFont(cellFont);
                cellStyle.Alignment = HorizontalAlignment.Center;
                cellStyle.DataFormat = format.GetFormat("0.00%");

                for (int i = indiceRenglon; i <= 64; i++)
                {
                    sheet.GetRow(i).GetCell(columna).CellStyle = cellStyle;
                }

                columna++;
            }
        }

        /// <summary>
        /// Obtiene un diccionario de las utilidades por Emisora.
        /// </summary>
        /// <param name="hechosEmisoraFecha"></param>
        /// <param name="principalesCuentasSector"></param>
        /// <returns></returns>
        public static Dictionary<String, double> ObtenerCalculosUtilidades(Dictionary<String, Dictionary<ObjetoFecha, List<Hecho>>> hechosEmisoraFecha, Dictionary<ObjetoFecha, CuentaDelSectorDTO> principalesCuentasSector)
        {
            Dictionary<String, double> porcentajeUtilidadesPorEmisora = new Dictionary<string, double>();

            Dictionary<String, List<Hecho>> hechosPorEmisoraPeriodoAnoAnterior = new Dictionary<string, List<Hecho>>();

            //Se pasan solo los hechos del periodo año anterior de la emisora a un nuevo diccionario.
            foreach (var hechosPorEmisoraPeriodos in hechosEmisoraFecha)
            {
                hechosPorEmisoraPeriodoAnoAnterior.Add(hechosPorEmisoraPeriodos.Key, hechosPorEmisoraPeriodos.Value.ElementAt(0).Value);
            }

            foreach (var diccionarioEmisoraHechos in hechosPorEmisoraPeriodoAnoAnterior)
            {
                double utilidad = 0;
                if (diccionarioEmisoraHechos.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_ProfitLoss")) != null)
                {
                    double utilidadPerdidaNetaSector = principalesCuentasSector.ElementAt(0).Value.UtilidadPerdidaNetaDelSector;
                    double utilidadPerdidaNetaDeEmisora = Convert.ToDouble(diccionarioEmisoraHechos.Value.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_ProfitLoss")).Valor);
                    utilidad = Dividir(utilidadPerdidaNetaDeEmisora, utilidadPerdidaNetaSector);
                }

                porcentajeUtilidadesPorEmisora.Add(diccionarioEmisoraHechos.Key, utilidad);
            }

            return porcentajeUtilidadesPorEmisora;
        }

        /// <summary>
        /// Escribe en el reporte la sección de utilidades.
        /// </summary>
        /// <param name="workbook"></param>
        /// <param name="sheet"></param>
        /// <param name="format"></param>
        /// <param name="porcentajeUtilidadesPorEmisora"></param>
        public static void EscribeSeccionUtilidades(HSSFWorkbook workbook, ISheet sheet, IDataFormat format, Dictionary<String, double> porcentajeUtilidadesPorEmisora)
        {
            int renglon = 66;
            int columna = 2;

            foreach (var porcentajeEmisora in porcentajeUtilidadesPorEmisora)
            {
                sheet.GetRow(renglon).CreateCell(columna).SetCellValue(porcentajeEmisora.Value);

                ICellStyle cellStyle = workbook.CreateCellStyle();
                cellStyle.DataFormat = format.GetFormat("0.00%");

                for (int i = renglon; i <= renglon; i++)
                {
                    sheet.GetRow(i).GetCell(columna).CellStyle = cellStyle;
                }

                columna++;
            }
        }

        /// <summary>
        /// Obtiene el valor del hecho si no es nulo, caso contraria regresa cadena vacía.
        /// </summary>
        /// <param name="hecho"></param>
        /// <returns></returns>
        public static string ObtenerValorHecho(Hecho hecho)
        {
            string valor = "";

            if (hecho != null)
            {
                valor = hecho.Valor;
            }

            return valor;
        }

        /// <summary>
        /// Obtiene las fechas de los trimestres.
        /// </summary>
        /// <param name="trimestre"></param>
        /// <param name="anio"></param>
        /// <returns></returns>
        public static String ObtenerFechaInstanteTrimestre(int trimestre, int anio)
        {

            var fecha = "";
            switch (trimestre)
            {
                case 1:
                    fecha = (anio).ToString() + "-" + fechaFinTrimestre[0];
                    break;
                case 2:
                    fecha = (anio).ToString() + "-" + fechaFinTrimestre[1];
                    break;
                case 3:
                    fecha = (anio).ToString() + "-" + fechaFinTrimestre[2];
                    break;
                case 4:
                    fecha = (anio).ToString() + "-" + fechaFinTrimestre[3];
                    break;
            }

            return fecha;
        }

        /// <summary>
        /// Obtiene las fechas de cierre de año.
        /// </summary>
        /// <param name="anio"></param>
        /// <returns></returns>
        public static String ObtenerFechaPeriodoAnio(int anio)
        {
            var fecha = (anio - 1) + "-" + "12-31";
            return fecha;
        }

        /// <summary>
        /// Método que se encarga de realizar la división.
        /// </summary>
        /// <param name="dividendo"></param>
        /// <param name="divisor"></param>
        /// <returns></returns>
        public static double Dividir(double dividendo, double divisor)
        {
            if (divisor == 0)
            {
                return double.NaN;
                //throw new System.DivideByZeroException();
            }

            return dividendo / divisor;
        }

        /// <summary>
        /// Obtiene el encabezado de una columna dado una fecha.
        /// </summary>
        /// <param name="fecha"></param>
        /// <param name="esTrimestre"></param>
        /// <returns></returns>
        public static String ObtenerEncabezadoColumna(String fecha, Boolean esTrimestre, String trimestre)
        {
            String encabezado = "";

            if (esTrimestre)
            {
                encabezado = trimestre + "T" + fecha.Substring(2, 2);
            }
            else
            {
                encabezado = encabezado + fecha.Substring(0, 4);
            }

            return encabezado;
        }

        /// <summary>
        /// Método que obtiene el trimestre anterior.
        /// </summary>
        /// <param name="trimestre"></param>
        /// <returns></returns>
        private static string ObtenerTrimestreAnterior(string trimestre)
        {

            String trimestreAnterior = null;

            switch (trimestre)
            {
                case "1":
                    trimestreAnterior = "4D";
                    break;
                case "2":
                case "3":
                case "4":
                    trimestreAnterior = (Convert.ToInt32(trimestre) - 1).ToString();
                    break;
                case "4D":
                    trimestreAnterior = "3";
                    break;
            }

            return trimestreAnterior;
        }

        /// <summary>
        /// Método que obtiene las fechas de los reportes a buscar.
        /// </summary>
        /// <param name="trimestre"></param>
        /// <param name="anio"></param>
        /// <returns></returns>
        public static ObjetoFecha[] ObtenerFechas(String trimestre, int anio)
        {

            int trimestreActual = trimestre.Count() > 1 ? Convert.ToInt32(trimestre.Substring(0, 1)) : Convert.ToInt32(trimestre);
            int trimestreAnterior = trimestreActual;

            if (trimestreActual == 1)
            {
                trimestreAnterior = 4;
            }
            else
            {
                trimestreAnterior = trimestreActual - 1;
            }

            var mesInicio = mesesInicioTrimestre[trimestreActual - 1];
            var mesInicioTrimestreAnterior = mesesInicioTrimestre[trimestreAnterior - 1];
            var mesFinTrimestreAnterior = fechaFinTrimestre[trimestreAnterior - 1];

            var mes = trimestres[(Convert.ToInt32(trimestreActual) - 1)];
            var dia = dias[(Convert.ToInt32(trimestreActual) - 1)];

            ObjetoFecha fechaAnioAnterior = new ObjetoFecha();
            fechaAnioAnterior.Periodo = TIPO_PERIODO_ANIO;
            fechaAnioAnterior.FechaInicio = (anio - 1).ToString() + INICIO_ANIO;
            fechaAnioAnterior.FechaFin = (anio - 1).ToString() + FIN_ANIO;
            fechaAnioAnterior.FechaInstante = fechaAnioAnterior.FechaFin;

            ObjetoFecha fechaDosAnioAnterior = new ObjetoFecha();
            fechaDosAnioAnterior.Periodo = TIPO_PERIODO_ANIO;
            fechaDosAnioAnterior.FechaInicio = (anio - 2).ToString() + INICIO_ANIO;
            fechaDosAnioAnterior.FechaFin = (anio - 2).ToString() + FIN_ANIO;
            fechaDosAnioAnterior.FechaInstante = fechaDosAnioAnterior.FechaFin;

            ObjetoFecha objectoTrimestreActual = new ObjetoFecha();
            objectoTrimestreActual.Periodo = TIPO_PERIODO_INSTANTE;
            objectoTrimestreActual.FechaInstante = (anio).ToString() + "-" + mes + "-" + dia;
            objectoTrimestreActual.FechaInicio = (anio).ToString() + "-" + mesInicio + "-" + diaMesInicio;
            objectoTrimestreActual.FechaFin = objectoTrimestreActual.FechaInstante;

            if (trimestreAnterior == 4)
            {
                anio = anio - 1;
            }

            ObjetoFecha objetoTrimestreAnterior = new ObjetoFecha();
            objetoTrimestreAnterior.Periodo = TIPO_PERIODO_INSTANTE;
            objetoTrimestreAnterior.FechaInstante = (anio).ToString() + "-" + mesFinTrimestreAnterior;
            objetoTrimestreAnterior.FechaInicio = (anio).ToString() + "-" + mesInicioTrimestreAnterior + "-" + diaMesInicio;
            objetoTrimestreAnterior.FechaFin = objetoTrimestreAnterior.FechaInstante;

            ObjetoFecha[] fechas = { fechaAnioAnterior, fechaDosAnioAnterior, objectoTrimestreActual, objetoTrimestreAnterior };

            return fechas;
        }

        /// <summary>
        /// Método que obtiene los envios que corresponden a las fechas de entrada.
        /// </summary>
        /// <param name="ticker"></param>
        /// <param name="trimestre"></param>
        /// <param name="anio"></param>
        /// <param name="fechas"></param>
        /// <param name="AbaxXBRLCellStoreMongo"></param>
        /// <returns></returns>
        public static String[] EnvioPorFecha(String ticker, String trimestre, int anio, ObjetoFecha[] fechas, IAbaxXBRLCellStoreMongo AbaxXBRLCellStoreMongo)
        {

            String[] envioPorFecha = new String[4];

            for (var i = 0; i < 4; i++)
            {
                var parametroTrimestreEnvio = "";
                var parametrosEnvio = "";
                List<Envio> envios = null;
                Envio envio = new Envio();

                if (i == 3)
                {
                    trimestre = ObtenerTrimestreAnterior(trimestre);
                }

                parametroTrimestreEnvio = "'Parametros.trimestre': '" + trimestre + "'";

                if (i == 0 || i == 1)
                {
                    parametrosEnvio = "{'Entidad.Nombre': '" + ticker + "', Taxonomia: {$regex: 'ifrs'}, 'Parametros.Ano':'" + (Convert.ToInt32(fechas[i].FechaFin.Substring(0, 4)) + 1).ToString() + "'}";                    
                }else
                {
                    parametrosEnvio = "{'Entidad.Nombre': '" + ticker + "', Taxonomia: {$regex: 'ifrs'}, 'Parametros.Ano':'" + fechas[i].FechaFin.Substring(0, 4) + "'," + parametroTrimestreEnvio + "}";                    
                }

                envios = AbaxXBRLCellStoreMongo.ConsultaElementos<CellStore.Modelo.Envio>("Envio", parametrosEnvio).ToList();
          
                if (envios != null && envios.Count > 0)
                {
                    envios = envios.OrderByDescending(envio1 => envio1.Parametros["trimestre"].ToString()).ToList();
                    envio = envios.ElementAt(0);
                }

                envioPorFecha[i] = envio.IdEnvio;
            }

            return envioPorFecha;
        }

    }

    /// <summary>
    /// Clase que tiene los atributos para la tabla Principales cuentas.
    /// </summary>
    public class CuentaDelSectorDTO
    {
        public double ActivoCirculanteDelSector { get; set; }
        public double ActivoNoCirculanteDelSector { get; set; }
        public double TotalActivosDelSector { get; set; }
        public double PasivoCirculanteDelSector { get; set; }
        public double PasivoNoCirculanteDelSector { get; set; }
        public double TotalDePasivosDelSector { get; set; }
        public double CapitalSocialDelSector { get; set; }
        public double CapitalContableDelSector { get; set; }
        public double SumatoriaPasivosYCapitalContableDelSector { get; set; }
        public double IngresosDelSector { get; set; }
        public double CostoVentasDelSector { get; set; }
        public double UtilidadPerdidaBrutaDelSector { get; set; }
        public double UtilidadPerdidaDeOperacionDelSector { get; set; }
        public double UtilidadPerdidaNetaDelSector { get; set; }
        public double UtilidadPerdidaPorAccionDelSector { get; set; }
    }

    /// <summary>
    /// Clase que tiene los atributos de la sección de Análisis-Ratios.
    /// </summary>
    public class RatioDTO
    {
        /// <summary>
        /// Razón circulante: se obtiene de la operación Activo circulante (ifrs-full_CurrentAssets) / Pasivo circulante (ifrs-full_CurrentLiabilities).
        /// </summary>
        public double RazonCirculante { get; set; }

        /// <summary>
        /// Apalancamiento: se obtiene de la operación Total de activos (ifrs-full_Assets) / Total de pasivos (ifrs-full_Liabilities).
        /// </summary>
        public double Apalancamiento { get; set; }

        /// <summary>
        /// Deuda total / Capital contable: se obtiene de la operación Total de pasivos (ifrs-full_Liabilities) / Capital contable.
        /// </summary>
        public double DeudaTotalCapitalContable { get; set; }

        /// <summary>
        /// Margen de utilidad: se obtiene de la división de Ingresos / Utilidad (pérdida) neta (ifrs-full_ProfitLoss).
        /// </summary>
        public double MargenDeUtilidad { get; set; }

        /// <summary>
        /// Roa: se obtiene de la división de Total de activos (ifrs-full_Assets) / Utilidad (pérdida) neta (ifrs-full_ProfitLoss).
        /// </summary>
        public double Roa { get; set; }

        /// <summary>
        /// Roe: se obtiene de la división de Capital contable / Utilidad (pérdida) neta (ifrs-full_ProfitLoss).
        /// </summary>
        public double Roe { get; set; }

        /// <summary>
        /// Margen operativo: se obtiene de la división de Costo de ventas (ifrs-full_CostOfSales) / Utilidad (pérdida) de operación (ifrs-full_ProfitLossFromOperatingActivities).
        /// </summary>
        public double MargenOperativo { get; set; }
    }
}