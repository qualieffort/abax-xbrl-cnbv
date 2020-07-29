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
        private Dictionary<string, string> EtiquetasConceptos = new Dictionary<string, string>();
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
            "ar_pros_AdministratorAdditionalInformation",
            "ar_pros_ShareholderNameCorporateName",
            "ar_pros_ShareholderFirstName",
            "ar_pros_ShareholderSecondName",
            "ar_pros_ShareholderShareholding",
            "ar_pros_ShareholderAdditionalInformation",
            "ar_pros_ExternalAuditorsAdministration",
            "ar_pros_TransactionsWithRelatedParties"
            };

      

        public void init()
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

            EtiquetasMiembro["ar_pros_BeneficialShareholdersOfMoreThan10Member"] = "Accionistas beneficiarios de más del 10 % del capital social de la emisora[Miembro]";
            EtiquetasMiembro["ar_pros_ShareholdersWithInfluenceMember"] = "Accionistas que ejerzan influencia significativa[Miembro]";
            EtiquetasMiembro["ar_pros_ShareholdersExercisingControlMember"] = "Accionistas que ejerzan control o poder de mando[Miembro]";


            EtiquetasConceptos["_fecha"] = "Año";
            EtiquetasConceptos["_entidad"] = "Ticker";
            EtiquetasConceptos["_tipo"] = "Tipo de Administrador / Accionista";
            EtiquetasConceptos["ar_pros_AdministratorName"] = "Nombre(s)";
            EtiquetasConceptos["ar_pros_AdministratorFirstName"] = "Apellido paterno";
            EtiquetasConceptos["ar_pros_AdministratorSecondName"] = "Apellido materno";
            EtiquetasConceptos["ar_pros_AdministratorDirectorshipType"] = "Tipo de Consejero (Propietario/Suplente)";
            EtiquetasConceptos["ar_pros_AdministratorParticipateInCommitteesAudit"] = "Comité de Auditoría";
            EtiquetasConceptos["ar_pros_AdministratorParticipateInCommitteesCorporatePractices"] = "Comité de Prácticas Societarias";
            EtiquetasConceptos["ar_pros_AdministratorParticipateInCommitteesEvaluationAndCompensation"] = "Comité de Evaluación y Compensación";
            EtiquetasConceptos["ar_pros_AdministratorParticipateInCommitteesOthers"] = "Otros comités";
            EtiquetasConceptos["ar_pros_AdministratorDesignationDate"] = "Fecha de designación";
            EtiquetasConceptos["ar_pros_AdministratorAssemblyType"] = "Tipo de asamblea de designación";
            EtiquetasConceptos["ar_pros_AdministratorPeriodForWhichTheyWereElected"] = "Periodo por el cual fueron electos";
            EtiquetasConceptos["ar_pros_AdministratorPosition"] = "Cargo";
            EtiquetasConceptos["ar_pros_AdministratorTimeWorkedInTheIssuer"] = "Tiempo laborando en la Emisora (años)";
            EtiquetasConceptos["ar_pros_AdministratorShareholding"] = "Participación accionaria (en %)";
            EtiquetasConceptos["ar_pros_AdministratorGender"] = "Gender";
            EtiquetasConceptos["ar_pros_AdministratorAdditionalInformation"] = "Información adicional";
            EtiquetasConceptos["ar_pros_ShareholderNameCorporateName"] = "Nombre (s) / Denominación o Razón social";
            EtiquetasConceptos["ar_pros_ShareholderFirstName"] = "Apellido paterno";
            EtiquetasConceptos["ar_pros_ShareholderSecondName"] = "Apellido materno";
            EtiquetasConceptos["ar_pros_ShareholderShareholding"] = "Participación accionaria (en %)";
            EtiquetasConceptos["ar_pros_ShareholderAdditionalInformation"] = "Información adicional";
            EtiquetasConceptos["ar_pros_ExternalAuditorsAdministration"] = "Auditores externos de la administración";
            EtiquetasConceptos["ar_pros_TransactionsWithRelatedParties"] = "Operaciones con personas relacionadas y conflictos de interés";
          
        }

        [TestMethod]
        public void TestGeneraCSV()
        {

            init();


            String path = "../../TestInput/";
            String pathout = "../../TestOutput/";
            String[] lineasTexto = File.ReadAllLines(path + "AdministradoresEmpresaReducidos.json");
            var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
            var lineaNum = 0;
            foreach (var linea in lineasTexto)
            {
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
                    Debug.WriteLine(hechoCrudo.Llave + " " + hechoCrudo.Valor);
                }
                FinalCollection[hechoCrudo.Llave][hechoCrudo.IdConcepto] = hechoCrudo.Valor;


            }

            using (StreamWriter outputFile = new StreamWriter(pathout + "administradores_2017_out.csv", false, Encoding.UTF8))
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

                    foreach (var column in Columns)
                    {
                        sb.Append(",");

                        if (outLine.ContainsKey(column))
                        {
                            var outTmp = outLine[column];

                            outTmp = outTmp.Replace(",", ".");
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

            if(hechoCrudo.IdSecuenciaAccionista != null)
            {
                hechoCrudo.IdSecuenciaAdministrador = hechoCrudo.IdSecuenciaAccionista;
            }
            if(hechoCrudo.IdTipoAccionista != null)
            {
                hechoCrudo.IdTipoAdministrador = hechoCrudo.IdTipoAccionista;
            }

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
                "ar_pros_AdministratorParticipateInCommitteesOthers".Equals(hechoCrudo.IdConcepto) ||
                "ar_pros_ShareholderAdditionalInformation".Equals(hechoCrudo.IdConcepto) ||
                "ar_pros_ExternalAuditorsAdministration".Equals(hechoCrudo.IdConcepto) ||
                "ar_pros_TransactionsWithRelatedParties".Equals(hechoCrudo.IdConcepto) ||
                "rel_news_RelevantEventContent".Equals(hechoCrudo.IdConcepto)
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
            if (hechoCrudo.Fecha != null && hechoCrudo.Fecha.date != null)
            {
                DateTime tmpFecha;
                if (DateTime.TryParse(hechoCrudo.Fecha.date, out tmpFecha))
                {
                    hechoCrudo.FechaObj = tmpFecha;
                }


            }

            //Generar llave
            hechoCrudo.Llave = hechoCrudo.FechaObj.Year + ":" + hechoCrudo.Entidad + ":" + (hechoCrudo.IdTipoAdministrador ?? string.Empty) + ":" + (hechoCrudo.SecuenciaAdministradorNumber??string.Empty);
        }


        [TestMethod]
        public void TestGeneraInformacionAdministradoresAccionistasYPartesRelacionadas()
        {

            init();


            String path = "../../TestInput/";
            String pathout = "../../TestOutput/";
            var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
            String[] lineasTexto = File.ReadAllLines(path + "AdministradoresEmpresaReducidos.json");
           
            var lineaNum = 0;
            foreach (var linea in lineasTexto)
            {
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
                    Debug.WriteLine(hechoCrudo.Llave + " " + hechoCrudo.Valor);
                }
                FinalCollection[hechoCrudo.Llave][hechoCrudo.IdConcepto] = hechoCrudo.Valor;
                
            }

            lineasTexto = File.ReadAllLines(path + "AccionistasEmpresaReducidos.json");
            lineaNum = 0;
            foreach (var linea in lineasTexto)
            {
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
                    Debug.WriteLine(hechoCrudo.Llave + " " + hechoCrudo.Valor);
                }
                FinalCollection[hechoCrudo.Llave][hechoCrudo.IdConcepto] = hechoCrudo.Valor;

            }


            lineasTexto = File.ReadAllLines(path + "AuditoresPartesRelacionadas.json");
            lineaNum = 0;
            foreach (var linea in lineasTexto)
            {
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
                    Debug.WriteLine(hechoCrudo.Llave + " " + hechoCrudo.Valor);
                }
                FinalCollection[hechoCrudo.Llave][hechoCrudo.IdConcepto] = hechoCrudo.Valor;

            }


            using (StreamWriter outputFile = new StreamWriter(pathout + "administradores_2018_out.csv", false, Encoding.UTF8))
            {
                StringBuilder sb = new StringBuilder();

                foreach (var column in Columns)
                {
                    sb.Append(",");
                    if (EtiquetasConceptos.ContainsKey(column))
                    {
                        sb.Append(EtiquetasConceptos[column]);
                    }
                    else
                    {
                        sb.Append(column);
                    }
                    
                }
                outputFile.WriteLine(sb.ToString());
                foreach (var outLine in FinalCollection.Values)
                {
                    sb.Clear();

                    foreach (var column in Columns)
                    {
                        sb.Append(",");

                        if (outLine.ContainsKey(column))
                        {
                            var outTmp = outLine[column];
                            if (outTmp != null)
                            {
                                outTmp = outTmp.Replace(",", ".");
                                outTmp = outTmp.Replace("\"", "\'");
                                outTmp = outTmp.Replace("\n", string.Empty).Replace("\r", string.Empty);
                                sb.Append(outTmp);
                            }
                            
                        }
                    }
                    outputFile.WriteLine(sb.ToString());
                }

            }
        }



        [TestMethod]
        public void TestGeneraInformeEventosRelevantes()
        {
            var eventosPorEnvio = new Dictionary<string, Dictionary<string, RawAdministrator>>();
            init();
            var eventosAConsiderar = new Dictionary<string, string>();
            eventosAConsiderar["rel_news_ChangesInTheCorporateStructureOfTheIssuerIssuerEventMember"] = "Cambios en la estructura organizacional de la emisora";
            eventosAConsiderar["rel_news_ChangesOfTheMembersOfTheGoverningBodiesOfTheIssuerIssuerEventMember"] = "Cambios de los integrantes de los órganos sociales o de sus directivos relevantes";
            eventosAConsiderar["rel_news_TheDesignationAndChangesOfTheMembersOfItsCorporateBodiesItsRelevantOfficersAndTheRegulatoryControllerInvestmentFundsEventMemeber"] = "Designación y cambios de los integrantes de sus órganos sociales, de sus directivos relevantes y del contralor normativo";
            eventosAConsiderar["rel_news_TheDesignationAndChangesOfTheMembersOfItsCorporateBodiesItsRelevantOfficersAndTheRegulatoryControllerInvestmentFundsEventMember"] = "Designación y cambios de los integrantes de sus órganos sociales, de sus directivos relevantes y del contralor normativo";
            eventosAConsiderar["rel_news_TheAmendmentsToTheByLawsIssuerEventMember"] = "Modificaciones a los estatutos sociales";

            String path = "../../TestInput/";
            String pathout = "../../TestOutput/";
            var settings = new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore };
            String[] lineasTexto = File.ReadAllLines(path + "EventosRelevantesReducidos.json");

            var lineaNum = 0;
            foreach (var linea in lineasTexto)
            {
                lineaNum++;
                var hechoCrudo = JsonConvert.DeserializeObject<RawAdministrator>(linea.Replace("$date", "date"), settings);
                AjustarHechoCrudo(hechoCrudo);


                

                if (!eventosPorEnvio.ContainsKey(hechoCrudo.IdEnvio))
                {
                    eventosPorEnvio[hechoCrudo.IdEnvio] = new Dictionary<string, RawAdministrator>();

                }
                eventosPorEnvio[hechoCrudo.IdEnvio][hechoCrudo.IdConcepto] = hechoCrudo;

            }

            

            using (StreamWriter outputFile = new StreamWriter(pathout + "eventos_relevantes_v1_out.csv", false, Encoding.UTF8))
            {
                StringBuilder sb = new StringBuilder();

                    sb.Append("Fecha");
                    sb.Append(",");
                    sb.Append("Entidad");
                    sb.Append(",");
                    sb.Append("Num. Fideicomiso");
                    sb.Append(",");
                    sb.Append("Tipo de Evento");
                    sb.Append(",");
                    sb.Append("Asunto");
                    sb.Append(",");
                    sb.Append("Evento");

                                
                outputFile.WriteLine(sb.ToString());
                foreach (var evento in eventosPorEnvio.Values)
                {
                    sb.Clear();

                    var numFideicomiso = evento.ContainsKey("rel_news_TrustNumber") ? evento["rel_news_TrustNumber"] : null;
                    var ticker = evento.ContainsKey("rel_news_Ticker") ? evento["rel_news_Ticker"] : null;
                    var contenido = evento.ContainsKey("rel_news_RelevantEventContent") ? evento["rel_news_RelevantEventContent"] : null;
                    var asunto = evento.ContainsKey("rel_news_Subject") ? evento["rel_news_Subject"] : null;

                    if(ticker != null && contenido != null && eventosAConsiderar.ContainsKey(contenido.IdTipoEvento))
                    {
                        sb.Append(ticker.FechaObj.ToString(DateUtil.DMYDateFormat));
                        sb.Append(",");
                        sb.Append(limpiarElementosCSV(ticker.Valor));
                        sb.Append(",");
                        sb.Append(numFideicomiso != null ? limpiarElementosCSV(numFideicomiso.Valor) : "");
                        sb.Append(",");
                        sb.Append(eventosAConsiderar[contenido.IdTipoEvento]);
                        sb.Append(",");
                        sb.Append(asunto != null ? limpiarElementosCSV(asunto.Valor) : "");
                        sb.Append(",");
                        sb.Append(contenido != null ? limpiarElementosCSV(contenido.Valor) : "");

                        outputFile.WriteLine(sb.ToString());
                    }
                                       
                }

            }
        }

        public string limpiarElementosCSV(string input)
        {
            if (input != null)
            {
                input = input.Replace(",", ".");
                input = input.Replace("\"", "\'");
                input = input.Replace("\n", string.Empty).Replace("\r", string.Empty);
                
            }
            return input;
        }
    }
}
