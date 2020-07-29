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
    /// Genera un reporte con 
    /// </summary>
    [TestClass]
    public class TestGeneraReporteNbis1LuisMuguerza
    {
        private String ConectionString = "mongodb://localhost/consultas";
        private String DatabaseName = "consultas";
        private String JsonErrorDirectory = "../../TestOutput/ErrorJSON";
        private String PathArchivoNBis1Csv = "../../TestOutput/ConsultasMongo/PersonasResponsables/NBis1.csv";
        private String PathArchivoNBis1Html = "../../TestOutput/ConsultasMongo/PersonasResponsables/NBis1.html";

        [TestMethod]
        public void ConsultaNBis1()
        {
            var AbaxXBRLCellStoreMongo = new AbaxXBRLCellStoreMongo();
            AbaxXBRLCellStoreMongo.ConnectionString = ConectionString;
            AbaxXBRLCellStoreMongo.DataBaseName = DatabaseName;
            AbaxXBRLCellStoreMongo.JSONOutDirectory = JsonErrorDirectory;
            AbaxXBRLCellStoreMongo.Init();
            var listaElementos = AbaxXBRLCellStoreMongo.ConsultaElementos<Nbis1Raw>("NbisUnoFideicomisoReducido", "{}");
            var diccionarioElementosNBis1 = new Dictionary<String, NBis1TableElement>();

            foreach (var elemento in listaElementos)
            {
                NBis1TableElement elementoTabla = null;
                if (!diccionarioElementosNBis1.TryGetValue(elemento.IdEnvio, out elementoTabla))
                {
                    elementoTabla = new NBis1TableElement();
                    elementoTabla.Fecha = elemento.Fecha;
                    elementoTabla.Entidad = elemento.Entidad;
                    elementoTabla.IdEnvio = elemento.IdEnvio;
                    diccionarioElementosNBis1.Add(elemento.IdEnvio, elementoTabla);
                }
                var idConcepto = elemento.IdConcepto;
                if (idConcepto.Equals("ar_pros_NumberOfTrust"))
                {
                    elementoTabla.NumeroFideicomiso = elemento.Valor; 
                }
                else if (idConcepto.Equals("ar_pros_NameOfTheIssuer"))
                {
                    elementoTabla.Fiduciario = elemento.Valor;
                }
                else if (idConcepto.Equals("ar_pros_Settlor"))
                {
                    elementoTabla.Fideicomitente = elemento.Valor;
                }
                else if (idConcepto.Equals("ar_pros_GuaranteesOnAssets"))
                {
                    elementoTabla.Garantia = elemento.Valor;
                }
                else if (idConcepto.Equals("ar_pros_OtherThirdPartiesObligatedWithTheTrust"))
                {
                    elementoTabla.Otros = elemento.Valor;
                }
            }

            using (StreamWriter w = File.AppendText(PathArchivoNBis1Csv))
            {
                foreach (var idEnvio in diccionarioElementosNBis1.Keys)
                {
                    var elementoTabla = diccionarioElementosNBis1[idEnvio];
                    var linea = CreaLineaCsv(elementoTabla);
                    w.Write(linea);
                }
                w.Close();
            }
        }

        public String CreaLineaCsv(NBis1TableElement elemento)
        {
            var linea = new StringBuilder();
            linea.Append("\"");
            linea.Append(elemento.Fecha.ToString("yyyy-MM-dd"));
            linea.Append("\",\"");
            linea.Append(elemento.Entidad);
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.Fiduciario));
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.NumeroFideicomiso));
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.Fideicomitente));
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.Garantia));
            linea.Append("\",\"");
            linea.Append(DepuraCadenaATexto(elemento.Otros));
            linea.Append("\"\r\n");

            return linea.ToString();
        }

        public String DepuraCadenaATexto(String cadena)
        {
            if (String.IsNullOrEmpty(cadena))
            {
                return String.Empty;
            }

            var depurada =  cadena.Replace("\"", "'").Replace("\r","").Replace("\n","");
            depurada = WebUtility.HtmlDecode(depurada);
            depurada = Regex.Replace(depurada, "<[^>]*(>|$)", string.Empty);
            depurada = Regex.Replace(depurada, @"[\s\r\n]+", " ").Trim();
            if (depurada.Length > 32000)
            {
                depurada = depurada.Substring(0, 32000);
            }

            return depurada;

        }
    }
}
