using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.CellStore.Services;
using AbaxXBRLCore.CellStore.Services.Impl;
using NPOI.SS.UserModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Util
{
    
    public class ReporteFichaTecnica
    {

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

        private const String ID_CONCEPTO_EVENTO_RELEVANTE = "rel_news_RelevantEventContent";
        private const String ID_CONCEPTO_FECHA_EVENTO_RELEVANTE = "rel_news_Date";

        private const String TAXOS_ER = "" +
           "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_common_representative_view_entry_point'," +
            "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_investment_funds_view_entry_point'," +
            "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_issuer_view_entry_point'," +
            "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_rating_agency_view_entry_point'," +
            "'http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_trust_issuer_view_entry_point'";

        public static ObjetoFecha[] obtenerFechas(int trimestre, int anio)
        {

            var mesInicio = mesesInicioTrimestre[(Convert.ToInt32(trimestre) - 1)];
            var mes = trimestres[(Convert.ToInt32(trimestre) - 1)];
            var dia = dias[(Convert.ToInt32(trimestre) - 1)];
            
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

            ObjetoFecha trimestreActual = new ObjetoFecha();
            trimestreActual.Periodo = TIPO_PERIODO_INSTANTE;
            trimestreActual.FechaInstante = (anio).ToString() + "-" + mes + "-" + dia;
            trimestreActual.FechaInicio = (anio).ToString() + "-" + mesInicio + "-" + diaMesInicio;
            trimestreActual.FechaFin = trimestreActual.FechaInstante;

            ObjetoFecha trimestreAnioAnterior = new ObjetoFecha();
            trimestreAnioAnterior.Periodo = TIPO_PERIODO_INSTANTE;
            trimestreAnioAnterior.FechaInstante = (anio-1).ToString() + "-" + mes + "-" + dia;
            trimestreAnioAnterior.FechaInicio = (anio-1).ToString() + "-" + mesInicio + "-" + diaMesInicio;
            trimestreAnioAnterior.FechaFin = trimestreAnioAnterior.FechaInstante;

            ObjetoFecha[] fechas = { fechaAnioAnterior, fechaDosAnioAnterior, trimestreActual, trimestreAnioAnterior};

            return fechas;
        }
        
        public static String[] EnvioPorFecha(String ticker, String trimestre, int anio, ObjetoFecha[] fechas, IAbaxXBRLCellStoreMongo AbaxXBRLCellStoreMongo)
        {

            String[] envioPorFecha = new String[4];

            for (var i = 0; i < 4; i++)
            {
                var parametroTrimestreEnvio = "";
                
                if (i == 0 || i == 1)
                {
                    parametroTrimestreEnvio = " $or: [ {'Parametros.trimestre': '4D'}, {'Parametros.trimestre': '4'} ]";
                }
                else
                {
                    parametroTrimestreEnvio = "'Parametros.trimestre': '" + trimestre + "'";
                }

                var parametrosEnvio = "{'Entidad.Nombre': '" + ticker + "', Taxonomia: {$regex: 'ifrs'}, 'Parametros.Ano':'" + fechas[i].FechaFin.Substring(0, 4) + "'," + parametroTrimestreEnvio + "}";

                List<Envio> envios = AbaxXBRLCellStoreMongo.ConsultaElementos<CellStore.Modelo.Envio>("Envio", parametrosEnvio).ToList();
                
                Envio envio = new Envio();

                if (envios != null && envios.Count > 0)
                {
                    envios = envios.OrderByDescending(envio1  => envio1.Parametros["trimestre"].ToString()).ToList();
                    envio = envios.ElementAt(0);
                } else
                {
                    if (i == 0 || i == 1)
                    {
                        parametrosEnvio = "{'Entidad.Nombre': '" + ticker + "', Taxonomia: {$regex: 'ifrs'}, 'Parametros.Ano':'" + (Convert.ToInt32(fechas[i].FechaFin.Substring(0, 4)) + 1).ToString() + "'," + parametroTrimestreEnvio + "}";
                        envios = AbaxXBRLCellStoreMongo.ConsultaElementos<CellStore.Modelo.Envio>("Envio", parametrosEnvio).ToList();
                        if (envios != null && envios.Count > 0)
                        {
                            envios = envios.OrderByDescending(envio1 => envio1.Parametros["trimestre"].ToString()).ToList();
                            envio = envios.ElementAt(0);
                        }
                    }                        
                }
               
                envioPorFecha[i] = envio.IdEnvio;
            }

            return envioPorFecha;
        }
        
        /// <summary>
        /// Obtiene los últimos 5 eventos relevantes por sector.
        /// </summary>
        /// <param name="ticker"></param>
        /// <param name="abaxXBRLBlockStore"></param>
        /// <returns></returns>
        public static List<List<Hecho>> ObtenerUltimosSincoEventosRelevantesDelSector(String ticker, IAbaxXBRLCellStoreMongo abaxXBRLBlockStore)
        {

            List<List<Hecho>> ulimosSincoEventosRelevantesDelSector = new List<List<Hecho>>();

            var parametrosConsultaEnviosEventosRelevantes = "{ 'Entidad.Nombre' : '" +  ticker + "', ";

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
        /// Escribe la sección de eventos relevantes del sector.
        /// </summary>
        /// <param name="hoja"></param>
        /// <param name="enviosEventoRelevante"></param>
        public static void EscribirSeccionEventosRelevantesDelSector(ISheet hoja, List<List<Hecho>> enviosEventoRelevante)
        {            
            int renglon = (hoja.LastRowNum + 2);
            var row = hoja.CreateRow(renglon++);

            var cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
            var bordeAbajoStyle = hoja.Workbook.CreateCellStyle();
            bordeAbajoStyle.BorderBottom = BorderStyle.Medium;

            for (var i = 0; i < 5; i++ )
            {
                cell = row.GetCell(i, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.CellStyle = bordeAbajoStyle;

                if (i == 0)
                {
                    cell.SetCellValue("Eventos Relevantes");
                }
            }
            
            foreach (var envioEventoRelevante in enviosEventoRelevante)
            {
                var eventoRelevante = envioEventoRelevante.Find(hecho => hecho.Concepto.IdConcepto.Equals(ID_CONCEPTO_EVENTO_RELEVANTE)) != null ? ReporteUtil.removeTextHTML(envioEventoRelevante.Find(hecho => hecho.Concepto.IdConcepto.Equals(ID_CONCEPTO_EVENTO_RELEVANTE)).Valor) : "";
                var fechaEventoRelevante = envioEventoRelevante.Find(hecho => hecho.Concepto.IdConcepto.Equals(ID_CONCEPTO_FECHA_EVENTO_RELEVANTE)) != null ? envioEventoRelevante.Find(hecho => hecho.Concepto.IdConcepto.Equals(ID_CONCEPTO_FECHA_EVENTO_RELEVANTE)).Valor : "";
                row = hoja.CreateRow(renglon);
                cell = row.GetCell(0, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.SetCellValue(fechaEventoRelevante);
                cell = row.GetCell(1, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                cell.SetCellValue(eventoRelevante);                

                renglon++;
            }
        }

    }

    public class ObjetoFecha
    {
        public int Periodo { get; set; }
        public String FechaInstante { get; set; }
        public String FechaInicio { get; set; }
        public String FechaFin { get; set; }
    }

}
