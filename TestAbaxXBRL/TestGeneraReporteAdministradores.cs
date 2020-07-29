using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.XPE;
using AbaxXBRLCore.XPE.impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using TestAbaxXBRL.Modelo;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestGeneraReporteAdministradores 
    {
        private String PatronXMl = @"<.*?>";
        private Dictionary<string, string> EtiquetasMiembro = new Dictionary<string, string>();
        private Dictionary<String, Dictionary<string, string>> FinalCollection = new Dictionary<string, Dictionary<string, string>>();

        private String[] Columns = {"_fecha","_entidad","_tipo",
            "ar_pros_AdministratorName",
            "ar_pros_AdministratorFirstName",
            "ar_pros_AdministratorSecondName",
            "ar_pros_AdministratorDirectorshipType",
            "ar_pros_AdministratorParticipateInCommitteesAudit",
            "ar_pros_AdministratorParticipateInCommitteesCorporatePractices",
            "ar_pros_AdministratorParticipateInCommitteesEvaluationAndCompensation",
            "ar_pros_AdministratorParticipateInCommitteesOthers",
            "ar_pros_AdministratorDesignationDate",
            "ar_pros_AdministratorAssemblyType",
            "ar_pros_AdministratorPeriodForWhichTheyWereElected",
            "ar_pros_AdministratorPosition",
            "ar_pros_AdministratorTimeWorkedInTheIssuer",
            "ar_pros_AdministratorShareholding",
            "ar_pros_AdministratorGender",
            "ar_pros_AdministratorAdditionalInformation"};

        [TestMethod]
        public void TestGeneraCSV()
        {

            EtiquetasMiembro["ar_pros_IndependentMember"] = "Independientes [Miembro]";
            EtiquetasMiembro["ar_pros_PatrimonialMember"] = "Patrimoniales [Miembro]";
            EtiquetasMiembro["ar_pros_PatrimonialIndependentMember"] = "Patrimoniales independientes [Miembro]";
            EtiquetasMiembro["ar_pros_RelatedMember"] = "Relacionados [Miembro]";
            EtiquetasMiembro["ar_pros_RelevantDirectorsMember"] = "Directivos relevantes [Miembro]";
            EtiquetasMiembro["ar_pros_NotIndependentMember"] = "No Independientes [Miembro]";
            EtiquetasMiembro["ar_pros_GovernorMember"] = "Gobernador o Presidente municipal [Miembro]";
            EtiquetasMiembro["ar_pros_FinancialSecretaryMember"] = "Secretario de finanzas o equivalente [Miembro]";
            EtiquetasMiembro["ar_pros_TreasurerMember"] = "Tesorero [Miembro]";
            EtiquetasMiembro["ar_pros_TopOfficialsMember"] = "Principales funcionarios [Miembro]";
           

            String path = "../../TestInput/";
            String pathout = "../../TestOutput/";
            String[] lineasTexto = File.ReadAllLines(path + "AdministradoresEmpresaReducidos.json");
            var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
            var lineaNum = 0;
            foreach (var linea in lineasTexto) {
                lineaNum++;
                var hechoCrudo = JsonConvert.DeserializeObject<RawAdministrator>(linea.Replace("$date", "date"), settings);
                AjustarHechoCrudo(hechoCrudo);

                if (!FinalCollection.ContainsKey(hechoCrudo.Llave))
                {
                    FinalCollection[hechoCrudo.Llave] = new Dictionary<string, string>();
                    FinalCollection[hechoCrudo.Llave]["_fecha"] = hechoCrudo.FechaObj.Year.ToString();
                    FinalCollection[hechoCrudo.Llave]["_entidad"] = hechoCrudo.Entidad;
                    FinalCollection[hechoCrudo.Llave]["_tipo"] = hechoCrudo.TipoAdministrador;
                    
                }
                if (FinalCollection[hechoCrudo.Llave].ContainsKey(hechoCrudo.IdConcepto))
                {
                    Debug.WriteLine(hechoCrudo.Llave+" "+hechoCrudo.Valor);
                }
                FinalCollection[hechoCrudo.Llave][hechoCrudo.IdConcepto] = hechoCrudo.Valor;


            }

            using (StreamWriter outputFile = new StreamWriter(pathout+"administradores_2017_out.csv",false,Encoding.UTF8))
            {
                StringBuilder sb = new StringBuilder();

                foreach (var column in Columns)
                {
                    sb.Append(",");
                    sb.Append(column);
                }
                outputFile.WriteLine(sb.ToString());
                foreach (var outLine in FinalCollection.Values)
                {
                    sb.Clear();
                    
                    foreach (var column in Columns) {
                        sb.Append(",");
                        
                        if (outLine.ContainsKey(column))
                        {
                            var outTmp = outLine[column];
                            
                            outTmp = outTmp.Replace(",",".");
                            outTmp = outTmp.Replace("\"", "\'");
                            outTmp = outTmp.Replace("\n", string.Empty).Replace("\r", string.Empty);
                            sb.Append(outTmp);
                        }
                    }
                    outputFile.WriteLine(sb.ToString());
                }
                    
            }
        }

        private void AjustarHechoCrudo(RawAdministrator hechoCrudo)
        {
            if (hechoCrudo.IdSecuenciaAdministrador != null)
            {
                var tmpSeq = WebUtility.HtmlDecode(hechoCrudo.IdSecuenciaAdministrador);
                
                hechoCrudo.SecuenciaAdministradorNumber = Regex.Replace(hechoCrudo.IdSecuenciaAdministrador, PatronXMl, String.Empty).Trim();
            }
           
            if (hechoCrudo.IdTipoAdministrador != null && EtiquetasMiembro.ContainsKey(hechoCrudo.IdTipoAdministrador))
            {
                hechoCrudo.TipoAdministrador = EtiquetasMiembro[hechoCrudo.IdTipoAdministrador];
            }
            if ("ar_pros_AdministratorAdditionalInformation".Equals(hechoCrudo.IdConcepto) || 
                "ar_pros_AdministratorParticipateInCommitteesOthers".Equals(hechoCrudo.IdConcepto)
                
                )
            {
                //Limpiar HTML
                hechoCrudo.Valor = WebUtility.HtmlDecode(hechoCrudo.Valor);
                hechoCrudo.Valor = Regex.Replace(hechoCrudo.Valor, "<[^>]*(>|$)", string.Empty);
                hechoCrudo.Valor = Regex.Replace(hechoCrudo.Valor, @"[\s\r\n]+", " ").Trim();
                
                if (hechoCrudo.Valor.Length > 32000)
                {
                    hechoCrudo.Valor = hechoCrudo.Valor.Substring(0, 32000);
                }
            }
            if(hechoCrudo.Fecha != null && hechoCrudo.Fecha.date != null)
            {
                DateTime tmpFecha;
                if(DateTime.TryParse(hechoCrudo.Fecha.date, out tmpFecha))
                {
                    hechoCrudo.FechaObj = tmpFecha;
                }
                
                
            }

            //Generar llave
            hechoCrudo.Llave = hechoCrudo.FechaObj.Year + ":"+hechoCrudo.Entidad + ":" + hechoCrudo.IdTipoAdministrador + ":" + hechoCrudo.SecuenciaAdministradorNumber;
        }
    }
}
