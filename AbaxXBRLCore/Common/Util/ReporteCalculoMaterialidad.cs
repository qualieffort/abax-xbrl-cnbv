using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.CellStore.Services;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Util
{
    public class ReporteCalculoMaterialidad
    {
        private const String ID_CONCEPTO_EVENTO_RELEVANTE = "rel_news_RelevantEventContent";
        private const String ID_CONCEPTO_FECHA_EVENTO_RELEVANTE = "rel_news_Date";

        private static string[] ID_CONCEPTOS_IFRS = { "ifrs-full_Assets", "ifrs-full_Liabilities", "ifrs-full_Equity", "ifrs-full_Revenue" };

        private const String TAXOS_ER = "" +
           "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_common_representative_view_entry_point'," +
            "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_investment_funds_view_entry_point'," +
            "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_issuer_view_entry_point'," +
            "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_rating_agency_view_entry_point'," +
            "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_trust_issuer_view_entry_point'";

        private const String TAXO_REPORTE_ANUAL = "'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_N_entry_point_2016-08-22'";

        /// <summary>
        /// Escribe en el reporte la sección de datos generales de la emisora.
        /// </summary>
        /// <param name="sheet">Hoja en la cual se escribirán los datos.</param>
        /// <param name="hechos">Listado de hechos de reporte anual.</param>
        public static void EscribirDatosGeneralesReporteCalculoMaterialidad(ISheet sheet, List<Hecho> hechos, IDictionary<String, object> parametrosReporte, IDictionary<String, object> datosReporte)
        {
            Hecho hechoNombreEmisora = null;
            Hecho hechoTipoInstrumento = null;

            if (hechos != null)
            {

                hechoNombreEmisora = hechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_NameOfTheIssuer")) != null ? hechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_NameOfTheIssuer")) : null;
                hechoTipoInstrumento = hechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_TypeOfInstrument")) != null ? hechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_TypeOfInstrument")) : null;
            }

            if (hechoNombreEmisora != null)
            {
                sheet.GetRow(2).GetCell(1).SetCellValue(ReporteUtil.removeTextHTML(hechoNombreEmisora.Valor));
                sheet.GetRow(3).GetCell(1).SetCellValue(hechoNombreEmisora.Entidad.Nombre);
            }
            else
            {
                object claveEmisora = "";
                object razonSocialEmpresa = "";
                datosReporte.TryGetValue("nombreCompletoEmpresa", out razonSocialEmpresa);
                parametrosReporte.TryGetValue("'Entidad.Nombre'", out claveEmisora);
                sheet.GetRow(2).GetCell(1).SetCellValue(razonSocialEmpresa != null ? razonSocialEmpresa.ToString() : "");
                sheet.GetRow(3).GetCell(1).SetCellValue(claveEmisora != null ? claveEmisora.ToString().Replace("'", "") : "");
            }

            if (hechoTipoInstrumento != null)
            {
                sheet.GetRow(4).GetCell(1).SetCellValue(hechoTipoInstrumento.Valor);
            }
            else
            {
                object tipoDeInstrumento = "";
                datosReporte.TryGetValue("datoTipoDeInstumento", out tipoDeInstrumento);
                sheet.GetRow(4).GetCell(1).SetCellValue(tipoDeInstrumento != null ? tipoDeInstrumento.ToString() : "");
            }

            object noticia = new object();
            object fecha = new object();
            object moneda = new object();
            object montoDeOperacion = new object();
            object tipoDeCambio = new object();

            datosReporte.TryGetValue("datoNoticia", out noticia);
            datosReporte.TryGetValue("datoFecha", out fecha);
            datosReporte.TryGetValue("datoMoneda", out moneda);
            datosReporte.TryGetValue("datoMontoDeOperacion", out montoDeOperacion);
            datosReporte.TryGetValue("datoTipoDeCambio", out tipoDeCambio);

            sheet.GetRow(6).GetCell(1).SetCellValue(noticia != null ? noticia.ToString() : "");
            sheet.GetRow(9).GetCell(1).SetCellValue(fecha != null ? fecha.ToString() : "");

            sheet.GetRow(11).GetCell(1).SetCellValue(montoDeOperacion != null ? Convert.ToDouble(montoDeOperacion) : double.NaN);
            sheet.GetRow(11).GetCell(2).SetCellValue(moneda != null ? moneda.ToString() : "");
            sheet.GetRow(12).GetCell(1).SetCellValue(tipoDeCambio != null ? Convert.ToDouble(tipoDeCambio) : double.NaN);
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
        /// Escribe la sección de Reporte Anual.
        /// </summary>
        /// <param name="sheet"></param>
        /// <param name="envioReporteAnual"></param>
        public static void EscribirSeccionReporteAnual(ISheet sheet, Envio envioReporteAnual)
        {
            if (envioReporteAnual != null)
            {
                sheet.GetRow(37).GetCell(0).SetCellValue("Reporte Anual " + envioReporteAnual.Periodo.Ejercicio);
                sheet.GetRow(37).GetCell(1).SetCellValue(envioReporteAnual.FechaRecepcion.ToString("dd/MM/yyyy"));
            }
        }

        /// <summary>
        /// Obtiene el utlimo envio trimestral 4D de IFRS de la emisora.
        /// </summary>
        /// <param name="claveEmisora"></param>
        /// <param name="abaxXBRLBlockStore"></param>
        /// <returns></returns>
        public static Envio ObtenerUltimoEnviosIFRS(String claveEmisora, IAbaxXBRLCellStoreMongo abaxXBRLBlockStore)
        {
            Envio envioIFRS = null;

            Dictionary<String, object> parametros = new Dictionary<string, object>();
            parametros.Add("'Entidad.Nombre'", claveEmisora);
            parametros.Add("Taxonomia", "{$regex: 'ifrs'}");
            parametros.Add("EsVersionActual", "true");
            parametros.Add("'Parametros.Dictaminado'", "'true'");
            parametros.Add("'Parametros.trimestre'", "'4D'");

            var parametrosConsulta = GenerarCadenaParametrosConsulta(parametros);
            List<Envio> listaEnvios = abaxXBRLBlockStore.ConsultaElementos<Envio>("Envio", parametrosConsulta).ToList();

            if (listaEnvios != null && listaEnvios.Count > 0)
            {
                listaEnvios = listaEnvios.OrderByDescending(x => x.Periodo.Ejercicio).ToList();
                envioIFRS = listaEnvios.ElementAt(0);
            }

            return envioIFRS;
        }

        /// <summary>
        /// Obtiene la lista de hechos IFRS.
        /// </summary>
        /// <param name="abaxXBRLBlockStore"></param>
        /// <param name="envio"></param>
        /// <returns></returns>
        public static List<Hecho> ObtenerHechosIFRS(IAbaxXBRLCellStoreMongo abaxXBRLBlockStore, Envio envio)
        {
            List<Hecho> listaHechos = new List<Hecho>();

            if (envio != null)
            {
                Dictionary<String, object> parametros = new Dictionary<string, object>();
                parametros.Add("'Entidad.Nombre'", "'" + envio.Entidad.Nombre + "'");
                parametros.Add("IdEnvio", "'" + envio.IdEnvio + "'");
                parametros.Add("'Concepto.IdConcepto'", "{$in : ['" + String.Join("','", ID_CONCEPTOS_IFRS) + "']}");
                var parametrosConsulta = GenerarCadenaParametrosConsulta(parametros);
                listaHechos = abaxXBRLBlockStore.ConsultaElementos<Hecho>("Hecho", parametrosConsulta).ToList();
            }
            return listaHechos;
        }

        /// <summary>
        /// Escribe los valores en la tabla calculos.
        /// </summary>
        /// <param name="sheet"></param>
        /// <param name="envio"></param>
        /// <param name="listaHechosIFRS"></param>
        public static void EscribirValoresCalculo(ISheet sheet, Envio envio, List<Hecho> listaHechosIFRS)
        {
            int renglon = 17;
            int columna = 1;

            if (envio != null)
            {

                DateTime fechaCierreTrimestreActual = new DateTime((envio.Periodo.Ejercicio - 1), 12, 31);
                DateTime fechaCierreAcumuladoActual = new DateTime(envio.Periodo.Ejercicio, 12, 31);
                DateTime inicioCierreAcumuladoActual = new DateTime(envio.Periodo.Ejercicio, 01, 01);

                Hecho activos = listaHechosIFRS.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets") && hecho.Periodo.TipoPeriodo == 1 && hecho.Periodo.FechaInstante.Equals(fechaCierreTrimestreActual));
                Hecho pasivos = listaHechosIFRS.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities") && hecho.Periodo.TipoPeriodo == 1 && hecho.Periodo.FechaInstante.Equals(fechaCierreTrimestreActual));
                Hecho capital = listaHechosIFRS.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Equity") && hecho.Periodo.TipoPeriodo == 1 && hecho.Periodo.FechaInstante.Equals(fechaCierreTrimestreActual));
                Hecho ventas = listaHechosIFRS.Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue") && hecho.Periodo.TipoPeriodo == 2 && hecho.Periodo.FechaInicio.Equals(inicioCierreAcumuladoActual) && hecho.Periodo.FechaFin.Equals(fechaCierreAcumuladoActual));

                sheet.GetRow(renglon++).GetCell(columna).SetCellValue(activos != null ? Convert.ToDouble(activos.Valor) : double.NaN);
                sheet.GetRow(renglon++).GetCell(columna).SetCellValue(pasivos != null ? Convert.ToDouble(pasivos.Valor) : double.NaN);
                sheet.GetRow(renglon++).GetCell(columna).SetCellValue(capital != null ? Convert.ToDouble(capital.Valor) : double.NaN);
                sheet.GetRow(renglon).GetCell(columna).SetCellValue(ventas != null ? Convert.ToDouble(ventas.Valor) : double.NaN);
            }
        }

        /// <summary>
        /// Obtiene los ultimos tres reportes trimestrales IFRS enviados.
        /// </summary>
        /// <param name="abaxXBRLBlockStore"></param>
        /// <param name="claveEmisora"></param>
        /// <returns></returns>
        public static List<Envio> ObtenerUlrimosTresReportesTrimestralesIFRS(IAbaxXBRLCellStoreMongo abaxXBRLBlockStore, String claveEmisora)
        {
            List<Envio> enviosIFRS = new List<Envio>();

            Dictionary<String, object> parametros = new Dictionary<string, object>();
            parametros.Add("'Entidad.Nombre'", claveEmisora);
            parametros.Add("Taxonomia", "{$regex: 'ifrs'}");
            parametros.Add("EsVersionActual", "true");

            var parametrosConsulta = GenerarCadenaParametrosConsulta(parametros);
            enviosIFRS = abaxXBRLBlockStore.ConsultaElementos<Envio>("Envio", parametrosConsulta).ToList();

            if (enviosIFRS != null && enviosIFRS.Count > 0)
            {

                enviosIFRS = enviosIFRS.OrderByDescending(x => x.FechaRecepcion).ToList();
            }

            if (enviosIFRS != null && enviosIFRS.Count >= 3)
            {
                return enviosIFRS.GetRange(0, 3);
            }

            return enviosIFRS;
        }

        /// <summary>
        /// Escribe la seccion de Reporte Trimestral.
        /// </summary>
        /// <param name="sheet"></param>
        /// <param name="envios"></param>
        public static void EscribirSeccionReporteTrimestral(ISheet sheet, List<Envio> envios)
        {
            int renglon = 32;
            int columna = 0;

            foreach (Envio envio in envios)
            {
                object anio = "";
                object trimestre = "";
                DateTime fechaReporte = envio.FechaRecepcion;
                envio.Parametros.TryGetValue("Ano", out anio);
                envio.Parametros.TryGetValue("trimestre", out trimestre);

                string reporte = (trimestre != null ? trimestre.ToString() : "") + " " + (anio != null ? anio.ToString() : "");

                sheet.GetRow(renglon).GetCell(columna).SetCellValue(reporte);
                sheet.GetRow(renglon).GetCell(columna + 1).SetCellValue(fechaReporte != null ? fechaReporte.ToString("dd-MM-yyyy") : "");

                renglon++;
            }
        }

        /// <summary>
        /// Obtiene los hechos del Reporte Anual.
        /// </summary>
        /// <param name="parametrosConsulta"></param>
        /// <param name="abaxXBRLBlockStore"></param>
        /// <returns></returns>
        public static IList<Hecho> ObtenerHechosReporteAnual(String parametrosConsulta, IAbaxXBRLCellStoreMongo abaxXBRLBlockStore)
        {
            IList<Hecho> listaHechosReporteAnual = new List<Hecho>();
            listaHechosReporteAnual = abaxXBRLBlockStore.ConsultaElementos<Hecho>("Hecho", parametrosConsulta);
            return listaHechosReporteAnual;
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
                parametrosConsultaEnviosEventosRelevantes = parametrosConsultaEnviosEventosRelevantes.Remove(parametrosConsultaEnviosEventosRelevantes.LastIndexOf(","), 1);
                parametrosConsultaHechosEventosRelevantes += "] }";
                parametrosConsultaHechosEventosRelevantes += "}";
            }

            var listaHechosEventosRelevantesEmisoras = abaxXBRLBlockStore.ConsultaElementos<Hecho>("Hecho", parametrosConsultaEnviosEventosRelevantes);

            var hechosAgrupadosPorEnvio = listaHechosEventosRelevantesEmisoras.ToList().GroupBy(hecho => hecho.IdEnvio).Select(grp => grp.ToList()).ToList();

            hechosAgrupadosPorEnvio.OrderBy(lista => lista.Find(hecho => hecho.Concepto.IdConcepto.Equals(ID_CONCEPTO_FECHA_EVENTO_RELEVANTE)).Valor);

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
        /// Retorna los parametros como una cadena BSON.
        /// </summary>
        /// <param name="parametrosReporte"></param>
        /// <returns></returns>
        public static String GenerarCadenaParametrosConsulta(IDictionary<string, object> parametrosReporte)
        {
            String cadenaParametrosConsulta = "{";

            foreach (var parametro in parametrosReporte)
            {
                if (parametro.Key.Equals("EsVersionActual"))
                {
                    cadenaParametrosConsulta += parametro.Key + ": true ,";
                }
                else
                {
                    cadenaParametrosConsulta += parametro.Key + ":" + parametro.Value + ",";
                }
            }

            cadenaParametrosConsulta += "}";

            cadenaParametrosConsulta = cadenaParametrosConsulta.Remove(cadenaParametrosConsulta.LastIndexOf(","), 1);

            return cadenaParametrosConsulta;
        }

    }
}
