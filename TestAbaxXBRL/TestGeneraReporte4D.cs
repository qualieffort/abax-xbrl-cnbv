using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRLCore.CellStore.Services.Impl;
using System.IO;
using TestAbaxXBRL.Dtos.Mongo;
using AbaxXBRLCore.Common.Util;
using System.Net;
using System.Text.RegularExpressions;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Genera un reporte con información financiera trimestral del cuarto dicataminado.
    /// </summary>
    [TestClass]
    public class TestGeneraReporte4D
    {
        /// <summary>
        /// Formato estandar mongodb:<usario>:<contrasena>@<host>:<puerto>/<base de datos>
        /// </summary>
        private String ConectionString = "mongodb://localhost/abaxxbrl_cellstore";
        private String DatabaseName = "abaxxbrl_cellstore";
        private String JsonErrorDirectory = "../../TestOutput/ErrorJSON";
        private String PathArchivoCSV = "../../TestOutput/ConsultasMongo/InformacionFinanciera4D.csv";
        private String ColeccionOrigen = "CellstoreL1Reducido";

        /// <summary>
        /// Prueba unitaria que genera el reporte.
        /// </summary>
        [TestMethod]
        public void Consulta4D()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var AbaxXBRLCellStoreMongo = new AbaxXBRLCellStoreMongo();
            AbaxXBRLCellStoreMongo.ConnectionString = ConectionString;
            AbaxXBRLCellStoreMongo.DataBaseName = DatabaseName;
            AbaxXBRLCellStoreMongo.JSONOutDirectory = JsonErrorDirectory;
            AbaxXBRLCellStoreMongo.Init();
            var listaElementos = AbaxXBRLCellStoreMongo.ConsultaElementos<HechoReducido>(ColeccionOrigen, "{}");
            var diccionarioElementos = new Dictionary<String, ElementoConsulta4D>();
            File.Delete(PathArchivoCSV);
            LlenaElementosBase(listaElementos, diccionarioElementos, AbaxXBRLCellStoreMongo);
            LlenaInformacionFinanciera(listaElementos, diccionarioElementos);
            AjusteAdicionalPorInconsistencia(listaElementos, diccionarioElementos);
            using (StreamWriter w = File.AppendText(PathArchivoCSV))
            {
                foreach (var idEnvio in diccionarioElementos.Keys)
                {
                    var elementoTabla = diccionarioElementos[idEnvio];
                    if (String.IsNullOrEmpty(elementoTabla.NumeroTrimestre))
                    {
                        LogUtil.Error(new Dictionary<String, object>()
                        {
                            {"Error"," Inconsistencia de datos" },
                            {"Elemento", elementoTabla }
                        });
                        continue;
                    }
                    if (elementoTabla.NumeroTrimestre.Contains("4D"))
                    {
                        var linea = CreaLineaCsv(elementoTabla);
                        w.Write(linea);
                    }
                }
                w.Close();
            }
        }

        public void LlenaElementosBase(
            IList<HechoReducido> listaElementos, 
            IDictionary<String, ElementoConsulta4D> diccionarioElementos,
            AbaxXBRLCellStoreMongo AbaxXBRLCellStoreMongo)
        {
            foreach (var elemento in listaElementos)
            {
                ElementoConsulta4D elementoTabla = null;
                if (!diccionarioElementos.TryGetValue(elemento.IdEnvio, out elementoTabla))
                {
                    elementoTabla = new ElementoConsulta4D();
                    elementoTabla.Taxonomia = elemento.Taxonomia;
                    elementoTabla.Entidad = elemento.Entidad;
                    elementoTabla.IdEnvio = elemento.IdEnvio;
                    elementoTabla.Unidad = elemento.Unidad;
                    diccionarioElementos.Add(elemento.IdEnvio, elementoTabla);
                }
                var idConcepto = elemento.IdConcepto;
                if (idConcepto.Equals("ifrs_mx-cor_20141205_ClaveDeCotizacionBloqueDeTexto") ||
                    idConcepto.Equals("mx_deuda_Ticker") ||
                    idConcepto.Equals("mx_ccd_Ticker"))
                {
                    elementoTabla.ClaveCotizacion = elemento.Valor;
                    elementoTabla.Fecha = elemento.Fecha;
                }
                else if (idConcepto.Equals("mx_deuda_TrustNumber") || idConcepto.Equals("mx_ccd_TrustNumber"))
                {
                    elementoTabla.NumeroFideicomiso = elemento.Valor;
                }
                else if (
                    idConcepto.Equals("ifrs_mx-cor_20141205_NumeroDeTrimestre") ||
                    idConcepto.Equals("mx_deuda_NumberOfQuarter") ||
                    idConcepto.Equals("mx_ccd_NumberOfQuarter"))
                {
                    elementoTabla.NumeroTrimestre = elemento.Valor;
                }
                else if (
                    idConcepto.Equals("ifrs_mx-cor_20141205_NombreDeProveedorDeServiciosDeAuditoriaExternaBloqueDeTexto") ||
                    idConcepto.Equals("mx_deuda_NameServiceProviderExternalAudit") ||
                    idConcepto.Equals("mx_ccd_NameServiceProviderExternalAudit"))
                {
                    elementoTabla.NombreProveedorServiciosAuditoriaExterna = elemento.Valor;
                }
                else if (
                    idConcepto.Equals("ifrs_mx-cor_20141205_NombreDeProveedorDeServiciosDeAuditoriaExternaBloqueDeTexto") ||
                    idConcepto.Equals("mx_deuda_NameServiceProviderExternalAudit") ||
                    idConcepto.Equals("mx_ccd_NameServiceProviderExternalAudit"))
                {
                    elementoTabla.NombreProveedorServiciosAuditoriaExterna = elemento.Valor;
                }
                else if (
                    idConcepto.Equals("ifrs_mx-cor_20141205_NombreDelSocioQueFirmaLaOpinionBloqueDeTexto") ||
                    idConcepto.Equals("mx_deuda_NameOfTheAsociadoSigningOpinion") ||
                    idConcepto.Equals("mx_ccd_NameOfTheAsociadoSigningOpinion"))
                {
                    elementoTabla.NombreSocioFirmaOpinion = elemento.Valor;
                }
                else if (
                    idConcepto.Equals("ifrs_mx-cor_20141205_TipoDeOpinionALosEstadosFinancierosBloqueDeTexto") ||
                    idConcepto.Equals("mx_deuda_TypeOfOpinionOnTheFinancialStatements") ||
                    idConcepto.Equals("mx_ccd_TypeOfOpinionOnTheFinancialStatements"))
                {
                    elementoTabla.TipoOpinionEstadosFinancieros = elemento.Valor;
                    //if (String.IsNullOrEmpty(elemento.Valor))
                    //{
                    //    elementoTabla.TipoOpinionEstadosFinancieros = AbaxXBRLCellStoreMongo.ObtenValorCheckun(elemento.IdHecho);
                    //}
                }
            }
        }

        public void LlenaInformacionFinanciera(IList<HechoReducido> listaElementos, IDictionary<String, ElementoConsulta4D> diccionarioElementos)
        {

            foreach (var elemento in listaElementos)
            {
                ElementoConsulta4D elementoTabla = null;
                if (!diccionarioElementos.TryGetValue(elemento.IdEnvio, out elementoTabla))
                {
                    LogUtil.Error(new Dictionary<String, object>()
                        {
                            {"Error"," Inconsistencia de datos origen" },
                            {"Elemento", elemento }
                        });
                    continue;
                }
                if (!elemento.Fecha.Equals(elementoTabla.Fecha))
                {
                    continue;
                }
                var idConcepto = elemento.IdConcepto;
                if (idConcepto.Equals("ifrs-full_Assets"))
                {
                    elementoTabla.TotalActivos = elemento.Valor;
                }
                else if (idConcepto.Equals("ifrs-full_Liabilities"))
                {
                    elementoTabla.TotalPasivos = elemento.Valor;
                }
                else if (idConcepto.Equals("ifrs-full_EquityAndLiabilities"))
                {
                    elementoTabla.TotalCapitalContablePasivos = elemento.Valor;
                }
                else if (idConcepto.Equals("ifrs-full_Revenue"))
                {
                    elementoTabla.Ingresos = elemento.Valor;
                }
            }
        }

        public void AjusteAdicionalPorInconsistencia(IList<HechoReducido> listaElementos, IDictionary<String, ElementoConsulta4D> diccionarioElementos)
        {
            foreach (var idEnvio in diccionarioElementos.Keys)
            {
                var elementoTabla = diccionarioElementos[idEnvio];

                HechoReducido hecho;
                if (String.IsNullOrEmpty(elementoTabla.TotalActivos))
                {
                    hecho = listaElementos.Where(x =>
                            x.IdConcepto == "ifrs-full_Assets" &&
                            x.Taxonomia.Equals(elementoTabla.Taxonomia) &&
                            x.Fecha.Equals(elementoTabla.Fecha) &&
                            x.Entidad.Equals(elementoTabla.Entidad)).FirstOrDefault();
                    if (hecho != null)
                    {
                        elementoTabla.TotalActivos = hecho.Valor;
                    }
                }
                if (String.IsNullOrEmpty(elementoTabla.TotalPasivos))
                {
                    hecho = listaElementos.Where(x =>
                            x.IdConcepto == "ifrs-full_Liabilities" &&
                            x.Taxonomia.Equals(elementoTabla.Taxonomia) &&
                            x.Fecha.Equals(elementoTabla.Fecha) &&
                            x.Entidad.Equals(elementoTabla.Entidad)).FirstOrDefault();
                    if (hecho != null)
                    {
                        elementoTabla.TotalPasivos = hecho.Valor;
                    }
                }
                if (String.IsNullOrEmpty(elementoTabla.TotalPasivos))
                {
                    hecho = listaElementos.Where(x =>
                            x.IdConcepto == "ifrs-full_EquityAndLiabilities" &&
                            x.Taxonomia.Equals(elementoTabla.Taxonomia) &&
                            x.Fecha.Equals(elementoTabla.Fecha) &&
                            x.Entidad.Equals(elementoTabla.Entidad)).FirstOrDefault();
                    if (hecho != null)
                    {
                        elementoTabla.TotalPasivos = hecho.Valor;
                    }
                }
                if (String.IsNullOrEmpty(elementoTabla.TotalCapitalContablePasivos))
                {
                    hecho = listaElementos.Where(x =>
                            x.IdConcepto == "ifrs-full_EquityAndLiabilities" &&
                            x.Taxonomia.Equals(elementoTabla.Taxonomia) &&
                            x.Fecha.Equals(elementoTabla.Fecha) &&
                            x.Entidad.Equals(elementoTabla.Entidad)).FirstOrDefault();
                    if (hecho != null)
                    {
                        elementoTabla.TotalCapitalContablePasivos = hecho.Valor;
                    }
                }
                if (String.IsNullOrEmpty(elementoTabla.Ingresos))
                {
                    hecho = listaElementos.Where(x =>
                            x.IdConcepto == "ifrs-full_Revenue" &&
                            x.Taxonomia.Equals(elementoTabla.Taxonomia) &&
                            x.Fecha.Equals(elementoTabla.Fecha) &&
                            x.Entidad.Equals(elementoTabla.Entidad)).FirstOrDefault();
                    if (hecho != null)
                    {
                        elementoTabla.Ingresos = hecho.Valor;
                    }
                }
            }
        }

        public String CreaLineaCsv(ElementoConsulta4D elemento)
        {
            var linea = new StringBuilder();
            linea.Append("\"");
            linea.Append(ObtenNombreTaxonomia(elemento.Taxonomia));
            linea.Append("\",\"");
            linea.Append(elemento.Fecha.ToString("yyyy-MM-dd"));
            linea.Append("\",\"");
            linea.Append(elemento.Entidad);
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.NumeroFideicomiso));
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.Unidad));
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.TotalActivos));
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.TotalPasivos));
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.TotalCapitalContablePasivos));
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.Ingresos));
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.NombreProveedorServiciosAuditoriaExterna));
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.NombreSocioFirmaOpinion));
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.TipoOpinionEstadosFinancieros));
            //linea.Append("\",\"");
            //linea.Append(DepuraCadenaATexto(elemento.IdHecho));
            linea.Append("\"\r\n");

            return linea.ToString();
        }

        public String DepuraCadenaATexto(String cadena)
        {
            if (String.IsNullOrEmpty(cadena))
            {
                return String.Empty;
            }

            var depurada = cadena.Replace("\"", "'").Replace("\r", "").Replace("\n", "");
            depurada = WebUtility.HtmlDecode(depurada);
            depurada = Regex.Replace(depurada, "<[^>]*(>|$)", string.Empty);
            depurada = Regex.Replace(depurada, @"[\s\r\n]+", " ").Trim();
            if (depurada.Length > 32000)
            {
                depurada = depurada.Substring(0, 32000);
            }

            return depurada;

        }

        public String ObtenNombreTaxonomia(String espacioNombres)
        {
            String nombre = String.Empty;
            if (String.IsNullOrEmpty(espacioNombres))
            {
                return nombre;
            }
            if (espacioNombres.Equals("http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05"))
            {
                nombre = "ICS";
            }
            else if (espacioNombres.Equals("http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2014-12-05"))
            {
                nombre = "CP";
            }
            else if (espacioNombres.Equals("http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2014-12-05"))
            {
                nombre = "Fibras";
            }
            else if (espacioNombres.Equals("http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30"))
            {
                nombre = "CCD";
            }
            else if (espacioNombres.Equals("http://www.bmv.com.mx/2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30"))
            {
                nombre = "Deuda";
            }
            return nombre;
        }
    }
}
