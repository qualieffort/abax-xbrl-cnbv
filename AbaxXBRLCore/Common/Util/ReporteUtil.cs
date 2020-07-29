using AbaxXBRLCore.CellStore.Modelo;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Util
{
    public static class ReporteUtil
    {
        /// <summary>
        /// Método que retorna los hechos pertenecientes a una misma secuencia.
        /// </summary>
        /// <param name="universoHechos">El universo de los hechos.</param>
        /// <param name="idDimension">Nombre de la dimension (Secuencia) por la cual se agruparan los hechos.</param>
        /// <returns></returns>
        public static List<List<CellStore.Modelo.Hecho>> obtenerListaHechosPorMiembroTipificadoSecuencia(IList<CellStore.Modelo.Hecho> universoHechos, String idDimension)
        {

            List<List<CellStore.Modelo.Hecho>> listaAgrupacion = new List<List<CellStore.Modelo.Hecho>>();

            foreach (var hecho in universoHechos)
            {
                List<CellStore.Modelo.Hecho> listaHechos = new List<CellStore.Modelo.Hecho>();

                foreach (var hecho2 in universoHechos)
                {
                    if (hecho.MiembrosDimensionales[0].IdDimension.Equals(idDimension) && hecho2.MiembrosDimensionales[0].MiembroTipificado.Equals(hecho.MiembrosDimensionales[0].MiembroTipificado))
                    {
                        bool existeHecho = false;
                        foreach (var listaHechosAux in listaAgrupacion)
                        {
                            foreach (var hecho3 in listaHechosAux)
                            {
                                if (hecho3.IdHecho.Equals(hecho2))
                                {
                                    existeHecho = true;
                                    break;
                                }
                            }

                            if (existeHecho)
                            {
                                break;
                            }

                        }

                        if (!existeHecho)
                        {
                            listaHechos.Add(hecho2);
                        }
                    }
                }

                #region Si no existe un hecho en alguna de las listas existentes en la lista se agrega.
                bool existeHecho2 = false;
                foreach (var listaHechosAux in listaAgrupacion)
                {
                    foreach (var hecho3 in listaHechosAux)
                    {
                        if (hecho.IdHecho.Equals(hecho3.IdHecho))
                        {
                            existeHecho2 = true;
                            break;
                        }
                    }

                    if (existeHecho2)
                    {
                        break;
                    }
                }

                if (!existeHecho2)
                {
                    listaAgrupacion.Add(listaHechos);
                }
                #endregion

            }

            return listaAgrupacion;
        }


        /// <summary>
        /// Coloca en un dict
        /// </summary>
        /// <param name="universoHechos"></param>
        /// <param name="listaEnvios"></param>
        /// <returns></returns>
        public static Dictionary<Envio, List<CellStore.Modelo.Hecho>> obtenerListaHechosPorEnvio(IList<CellStore.Modelo.Hecho> universoHechos, Dictionary<Envio, List<Hecho>> diccionarioHechosPorEnvio, List<Envio> listaEnvios)
        {

            Dictionary<Envio, List<CellStore.Modelo.Hecho>> listaHechosPorEnvio = new Dictionary<Envio, List<Hecho>>();

            if (diccionarioHechosPorEnvio.Keys.Count > 0)
            {
                listaHechosPorEnvio = diccionarioHechosPorEnvio;
            }


            foreach(var hecho in universoHechos)
            {

                var elementoEnvioAndHechos = listaHechosPorEnvio.ToList().Find(elementoDiccionario => elementoDiccionario.Key.IdEnvio.Equals(hecho.IdEnvio));

                if (elementoEnvioAndHechos.Key != null)
                {
                    var indiceElemetoEnvioAndHechos = listaHechosPorEnvio.ToList().IndexOf(elementoEnvioAndHechos);
                    listaHechosPorEnvio.Remove(elementoEnvioAndHechos.Key);
                    elementoEnvioAndHechos.Value.Add(hecho);
                    listaHechosPorEnvio.Add(elementoEnvioAndHechos.Key, elementoEnvioAndHechos.Value);
                } else
                {
                    var envio = listaEnvios.ToList().Find(envioAux => envioAux.IdEnvio.Equals(hecho.IdEnvio));
                    List<Hecho> listaHechos = new List<Hecho>();
                    listaHechos.Add(hecho);
                    listaHechosPorEnvio.Add(envio, listaHechos);
                }

            }
            
            return listaHechosPorEnvio;
        }


        //public static List<Dictionary<Envio, List<CellStore.Modelo.Hecho>>> obtenerListaHechosPorMiembroTipificadoSecuencia2(IList<CellStore.Modelo.Hecho> universoHechos, String idDimension, List<Envio> listaEnvios, String secuenciaId)
        //{

        //    List<Dictionary<Envio, List<CellStore.Modelo.Hecho>>> listaHechosPorEnvio = new List<Dictionary<Envio, List<Hecho>>>();

        //    foreach (var Envio in listaEnvios)
        //    {
        //        Dictionary<Envio, List<CellStore.Modelo.Hecho>> dictionary = new Dictionary<Envio, List<Hecho>>();
        //        dictionary.Add(Envio, universoHechos.ToList().FindAll(hecho => hecho.IdEnvio.Equals(Envio.IdEnvio)).ToList());
        //        listaHechosPorEnvio.Add(dictionary);
        //    }

        //    List<Dictionary<Envio, Dictionary<String, List<CellStore.Modelo.Hecho>>>> listaHechosPorSecuencia = new List<Dictionary<Envio, Dictionary<string, List<Hecho>>>>();

        //    //List<Dictionary<Envio, List<CellStore.Modelo.Hecho>>> listaHechosPorEnvio = new List<Dictionary<Envio, List<Hecho>>>();

        //    foreach (var elementoHechosPorEnvio in listaHechosPorEnvio)
        //    {

        //        //List<string> phrases = new List<string>() { "an apple a day", "the quick brown fox" };

        //        //var query = from phrase in phrases
        //        //            from word in phrase.Split(' ')
        //        //            select word;

        //        //listaOrdenada = from elemento in lista orderby typeof(T).GetProperty(columna).GetValue(elemento) ascending select elemento;
        //        //var secuencias = from hecho in elementoHechosPorEnvio.ElementAt(0).Value.ToList() where hecho;
        //        //var secuencias = elementoHechosPorEnvio.ElementAt(0).Value.ToList().GroupBy(hecho => hecho.MiembrosDimensionales.ToList().Find(miembro => miembro.IdDimension.Equals(secuenciaId)));

        //        var secuencias = from hecho in elementoHechosPorEnvio.ElementAt(0).Value.ToList() from miembro in hecho.MiembrosDimensionales where miembro.Equals(secuenciaId) select miembro;

        //        //  MiembrosDimensionales
        //    }

        //    return null;
        //}

        /// <summary>
        /// Ordena la lista de acuerdo al atributo de la clase que se le pase.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="lista"></param>
        /// <param name="columna"></param>
        /// <param name="tipoOrdenamiento"></param>
        /// <returns></returns>
        public static List<T> ordenarListaElementosPorColumna<T>(List<T> lista, String columna, string tipoOrdenamiento, string tipoDato)
        {

            if (lista != null && lista.Count() == 0)
            {
                return null;
            }

            IEnumerable<T> listaOrdenada = new List<T>();

            if (tipoOrdenamiento.Equals("asc"))
            {
                if (tipoDato.Equals("DateTime"))
                {
                    listaOrdenada = from elemento in lista orderby DateTime.ParseExact(typeof(T).GetProperty(columna).GetValue(elemento).ToString(), "dd/MM/yyyy", new CultureInfo("es-MX")) ascending select elemento;
                }
                else
                {
                    listaOrdenada = from elemento in lista orderby typeof(T).GetProperty(columna).GetValue(elemento) ascending select elemento;
                }
            }
            else
            {
                if (tipoDato.Equals("DateTime"))
                {
                    listaOrdenada = from elemento in lista orderby DateTime.ParseExact(typeof(T).GetProperty(columna).GetValue(elemento).ToString(), "dd/MM/yyyy", new CultureInfo("es-MX")) descending select elemento;
                }
                else
                {
                    listaOrdenada = from elemento in lista orderby typeof(T).GetProperty(columna).GetValue(elemento) descending select elemento;
                }
            }

            return listaOrdenada.ToList();
        }

        /// <summary>
        /// Método que retorna los filtros en formato una cadena BSON.
        /// </summary>
        /// <param name="filtrosDataTable"></param>
        /// <returns></returns>
        public static String obtenerFiltrosEnviosEnFormatoBSON(IDictionary<String, object> filtrosDataTable)
        {

            Dictionary<String, String> parametros = new Dictionary<String, String>();
            foreach (var filtro in filtrosDataTable)
            {
                parametros.Add(filtro.Key, (String)filtro.Value);
            }

            var filtros = "{";

            if (parametros.Count > 0)
            {
                var indice = 1;
                foreach (var filtro in parametros)
                {
                    if (indice < parametros.Count)
                    {
                        if (filtro.Key.ToString().Equals("FechaReporte") || filtro.Key.ToString().Equals("'Periodo.Fecha'") || filtro.Key.ToString().Equals("Fecha"))
                        {
                            filtros = filtros + filtro.Key.ToString() + ":" + filtro.Value + "";
                        }
                        else if (filtro.Key.ToString().Equals("ClaveCotizacion: { $in: [") || filtro.Key.ToString().Equals("'Entidad.Nombre': { $in: ["))
                        {
                            filtros = filtros + filtro.Key.ToString() + filtro.Value + ",";
                        }
                        else
                        {
                            filtros = filtros + filtro.Key.ToString() + ":" + "'" + filtro.Value + "',";
                        }

                    }
                    else
                    {
                        if (filtro.Key.ToString().Equals("FechaReporte") || filtro.Key.ToString().Equals("'Periodo.Fecha'") || filtro.Key.ToString().Equals("Fecha"))
                        {
                            filtros = filtros + filtro.Key.ToString() + ":" + filtro.Value;
                        }
                        else if (filtro.Key.ToString().Equals("ClaveCotizacion: { $in: [") || filtro.Key.ToString().Equals("'Entidad.Nombre': { $in: ["))
                        {
                            filtros = filtros + filtro.Key.ToString() + filtro.Value + "";
                        }
                        else
                        {
                            filtros = filtros + filtro.Key.ToString() + ":" + "'" + filtro.Value + "'";
                        }
                    }

                    indice++;
                }
            }

            filtros = filtros + "}";

            return filtros;
        }

        /// <summary>
        /// Método que obtiene los filtros en una cadena en formato BSON para los Hechos.
        /// </summary>
        /// <param name="listaEnvios"></param>
        /// <param name="universoHechos"></param>
        /// <returns></returns>
        public static String obtenerFiltrosHechosEnFormatoBSON(IList<Envio> listaEnvios, String universoHechos)
        {
            var filtroHechos = "";

            if (listaEnvios != null && listaEnvios.Count() > 0)
            {
                filtroHechos = "{ 'Concepto.IdConcepto':  { $in: [ " + universoHechos + " ]} ";

                filtroHechos = filtroHechos + ", IdEnvio : { $in: [";
                var indice2 = 1;
                foreach (var envio in listaEnvios)
                {
                    if (indice2 < listaEnvios.Count)
                    {
                        filtroHechos = filtroHechos + "'" + envio.IdEnvio + "' ,";
                    }
                    else
                    {
                        filtroHechos = filtroHechos + "'" + envio.IdEnvio + "' ";
                    }

                    indice2++;
                }

                filtroHechos = filtroHechos + "] } ";
                filtroHechos = filtroHechos + " }";

            }

            return filtroHechos;
        }

        /// <summary>
        /// Retorna el nombre simple de una taxonomía.
        /// </summary>
        /// <param name="taxonomia"></param>
        /// <returns></returns>
        public static String obtenerNombreSimpleTaxonomia(String taxonomia)
        {
            var nombreSimple = "";

            switch (taxonomia)
            {
                case "http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all":
                    nombreSimple = "IFRS BMV 2013";
                    break;
                case "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05":
                    nombreSimple = "IFRS BMV 2015 para ICS";
                    break;
                case "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_sapib_entry_point_2014-12-05":
                    nombreSimple = "IFRS BMV 2015 para SAPIB";
                    break;
                case "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2014-12-05":
                    nombreSimple = "IFRS BMV 2015 para Corto Plazo";
                    break;
                case "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2014-12-05":
                    nombreSimple = "IFRS BMV 2015 para FIBRAS";
                    break;
                case "http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30":
                    nombreSimple = "Fideicomisos CCD";
                    break;
                case "http://www.bmv.com.mx/2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30":
                    nombreSimple = "Fideicomisos Deuda";
                    break;
                case "http://www.bmv.com.mx/2015-06-30/trac/full_ifrs_trac_entry_point_2015-06-30":
                    nombreSimple = "Fideicomisos Trac";
                    break;
                case "http://www.bmv.com.mx/2016-08-22/annext_entrypoint":
                    nombreSimple = "Anexo T";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_N_entry_point_2016-08-22":
                    nombreSimple = "Reporte Anual - Anexo N";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS_entry_point_2016-08-22":
                    nombreSimple = "Reporte Anual - Anexo NBIS";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS1_entry_point_2016-08-22":
                    nombreSimple = "Reporte Anual - Anexo NBIS1";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS2_entry_point_2016-08-22":
                    nombreSimple = "Reporte Anual - Anexo NBIS2";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS3_entry_point_2016-08-22":
                    nombreSimple = "Reporte Anual - Anexo NBIS3";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS4_entry_point_2016-08-22":
                    nombreSimple = "Reporte Anual - Anexo NBIS4";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS5_entry_point_2016-08-22":
                    nombreSimple = "Reporte Anual - Anexo NBIS5";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_O_entry_point_2016-08-22":
                    nombreSimple = "Reporte Anual - Anexo O";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_H_entry_point_2016-08-22":
                    nombreSimple = "Prospecto de Colocación - Anexo H";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS_entry_point_2016-08-22":
                    nombreSimple = "Prospecto de Colocación - Anexo HBIS";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS1_entry_point_2016-08-22":
                    nombreSimple = "Prospecto de Colocación - Anexo HBIS1";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS2_entry_point_2016-08-22":
                    nombreSimple = "Prospecto de Colocación - Anexo HBIS2";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS3_entry_point_2016-08-22":
                    nombreSimple = "Prospecto de Colocación - Anexo HBIS3";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS4_entry_point_2016-08-22":
                    nombreSimple = "Prospecto de Colocación - Anexo HBIS4";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS5_entry_point_2016-08-22":
                    nombreSimple = "Prospecto de Colocación - Anexo HBIS5";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_L_entry_point_2016-08-22":
                    nombreSimple = "Prospecto de Colocación - Anexo L";
                    break;
                case "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_I_entry_point_2016-08-22":
                    nombreSimple = "Prospecto de Colocación - Anexo I";
                    break;
                case "http://www.bmv.com.mx/2016-08-22/rel_ev_emisoras_entrypoint":
                    nombreSimple = "Eventos relevantes 2016 - Emisoras";
                    break;
                case "http://www.bmv.com.mx/2016-08-22/rel_ev_fondos_entrypoint":
                    nombreSimple = "Eventos relevantes 2016 - Fondos de inversión";
                    break;
                case "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2016-08-22":
                    nombreSimple = "IFRS BMV 2016 para FIBRAS";
                    break;
                case "http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2016-08-22":
                    nombreSimple = "Fideicomisos CCD 2016";
                    break;
                case "http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_common_representative_view_entry_point":
                    nombreSimple = "Eventos relevantes - representante común";
                    break;
                case "http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_investment_funds_view_entry_point":
                    nombreSimple = "Eventos relevantes - fondos de inversión";
                    break;
                case "http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_issuer_view_entry_point":
                    nombreSimple = "Eventos relevantes - emisoras";
                    break;
                case "http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_rating_agency_view_entry_point":
                    nombreSimple = "Eventos relevantes - agencia calificadora";
                    break;
                case "http://www.cnbv.gob.mx/2017-08-01/relevant_events/rel_news_trust_issuer_view_entry_point":
                    nombreSimple = "Eventos relevantes -Fiduciarios";
                    break;
                default: break;
            }

            return nombreSimple;
        }

        /// <summary>
        /// Remueve etiquetas HTML del texto que se recibe.
        /// </summary>
        /// <param name="texto"></param>
        /// <returns></returns>
        public static String removeTextHTML(String texto)
        {
            if (texto == null || texto.Length == 0)
            {
                return texto;
            }

            String textoSinFormato = texto;

            Dictionary<String, String> palabrasToReplace = new Dictionary<string, string>()
                    {
                        {"&ntilde;" , "ñ"}, {"&Ntilde;" , "Ñ"}, {"&aacute;" , "á"}, {"&eacute;" , "é"}, {"&iacute;" , "í"}, {"&oacute;" , "ó"}, {"&uacute;" , "ú"},
                        {"&Aacute;" , "Á"}, {"&Eacute;" , "É"}, {"&Iacute;" , "Í"}, {"&Oacute;" , "Ó"}, {"&Uacute;" , "Ú"}, {"<.*?>" , ""}, {"&nbsp;", ""},
                        { "&#xa0;", ""}, {"\n", ""}, {"\t", ""}, {"\r", ""}, {"&ldquo;", ""}, {"&quot;", ""}, {"&rdquo;", ""}, {"&#39;", "'"}  
        };

            foreach (var elementoDictionary in palabrasToReplace)
            {
                textoSinFormato = new Regex(elementoDictionary.Key).Replace(textoSinFormato, elementoDictionary.Value);
            }

            return textoSinFormato;
        }


    }
}