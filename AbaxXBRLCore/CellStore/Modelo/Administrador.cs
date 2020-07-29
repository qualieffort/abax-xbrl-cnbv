using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    public class Administrador : ModeloBase
    {

        public String Taxonomia { get; set; }
        public String IdEnvio { get; set; }
        public String IdAdministrador { get; set; }
        public String FechaReporte { get; set; }
        public String ClaveCotizacion { get; set; }
        public String TipoAdministrador { get; set; }
        public String Nombre { get; set; }
        public String ApellidoPaterno { get; set; }
        public String ApellidoMaterno { get; set; }
        public String TipoConsejero { get; set; }
        public String Auditoria { get; set; }
        public String PracticasSocietarias { get; set; }
        public String EvaluacionCompensacion { get; set; }
        public String Otros { get; set; }
        public String FechaDesignacion { get; set; }
        public String TipoAsamblea { get; set; }
        public String PeriodoElecto { get; set; }
        public String Cargo { get; set; }
        public String TiempoOcupandoCargo { get; set; }
        public String ParticipacionAccionaria { get; set; }
        public String Sexo { get; set; }
        public String InfoAdicional { get; set; }

        public static String universoIdHechos = "'ar_pros_AdministratorName'," +
            "'ar_pros_AdministratorFirstName', 'ar_pros_AdministratorSecondName', 'ar_pros_AdministratorDirectorshipType', " +
            "'ar_pros_AdministratorParticipateInCommitteesAudit', 'ar_pros_AdministratorParticipateInCommitteesCorporatePractices'," +
            "'ar_pros_AdministratorParticipateInCommitteesEvaluationAndCompensation', 'ar_pros_AdministratorParticipateInCommitteesOthers'," +
            "'ar_pros_AdministratorDesignationDate', 'ar_pros_AdministratorAssemblyType', 'ar_pros_AdministratorPeriodForWhichTheyWereElected'," +
            "'ar_pros_AdministratorPosition', 'ar_pros_AdministratorTimeWorkedInTheIssuer', 'ar_pros_AdministratorShareholding', 'ar_pros_AdministratorGender', " +
            "'ar_pros_AdministratorAdditionalInformation'";

        public static Dictionary<string, string> diccionarioColumnas = new Dictionary<string, string>()
        {
            {"Taxonomia", "String"},
            {"FechaReporte", "DateTime"},
            {"ClaveCotizacion", "String"},
            {"TipoAdministrador", "String"},
            {"Nombre", "String"},
            {"ApellidoPaterno", "String"},
            {"ApellidoMaterno","String"},
            {"TipoConsejero","String"},
            {"Auditoria","String"},
            {"PracticasSocietarias","String"},
            {"EvaluacionCompensacion","String"},
            {"Otros","String"},
            {"FechaDesignacion","DateTime"},
            {"TipoAsamblea","String"},
            {"PeriodoElecto","String"},
            {"Cargo","String"},
            {"TiempoOcupandoCargo","String"},
            {"ParticipacionAccionaria","String"},
            {"Sexo","String"},
            {"InfoAdicional","String"}
        };

        public static Dictionary<string, string> diccionarioColumnasExcel = new Dictionary<string, string>()
        {
            {"Taxonomia", "Taxonomía"},
            {"FechaReporte", "Fecha de reporte"},
            {"ClaveCotizacion", "Entidad"},
            {"TipoAdministrador", "Tipo de administrador de la empresa"},
            {"Nombre", "Nombre"},
            {"ApellidoPaterno", "Apellido paterno"},
            {"ApellidoMaterno","Apellido materno"},
            {"TipoConsejero","Tipo de consejero"},
            {"Auditoria","Auditoría"},
            {"PracticasSocietarias","Prácticas societarias"},
            {"EvaluacionCompensacion","Evaluación y compensación"},
            {"Otros","Otros"},
            {"FechaDesignacion","Fecha designación"},
            {"TipoAsamblea","Tipo de asamblea"},
            {"PeriodoElecto","Periodo por el cual fueron electos"},
            {"Cargo","Cargo"},
            {"TiempoOcupandoCargo","Tiempo ocupando el cargo"},
            {"ParticipacionAccionaria","Participación accionaria (en %)"},
            {"Sexo","Sexo"},
            {"InfoAdicional","Información adicional"}
        };

        public override string GeneraJsonId()
        {
            return "";
        }

        public override string ToJson()
        {
            
            var json = "{" +
                            "\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                            "\"IdEnvio\" : " + ParseJson(IdEnvio) + ", " +
                            "\"IdAdministrador\" : " + ParseJson(IdAdministrador) + ", " +
                            "\"FechaReporte\" : " + ParseJson(FechaReporte) + ", " +
                            "\"ClaveCotizacion\" : " + ParseJson(ClaveCotizacion) + ", " +
                            "\"TipoAdministrador\" : " + ParseJson(TipoAdministrador) + ", " +
                            "\"Nombre\" : " + ParseJson(Nombre) + ", " +
                            "\"ApellidoPaterno\" : " + ParseJson(ApellidoPaterno) + ", " +
                            "\"ApellidoMaterno\" : " + ParseJson(ApellidoMaterno) + ", " +
                            "\"TipoConsejero\" : " + ParseJson(TipoConsejero) + ", " +
                            "\"Auditoria\" : " + ParseJson(Auditoria) + ", " +
                            "\"PracticasSocietarias\" : " + ParseJson(PracticasSocietarias) + ", " +
                            "\"EvaluacionCompensacion\" : " + ParseJson(EvaluacionCompensacion) + ", " +
                            "\"Otros\" : " + ParseJson(Otros) + ", " +
                            "\"FechaDesignacion\" : " + ParseJson(FechaDesignacion) + ", " +
                            "\"TipoAsamblea\" : " + ParseJson(TipoAsamblea) + ", " +
                            "\"PeriodoElecto\" : " + ParseJson(PeriodoElecto) + ", " +
                            "\"Cargo\" : " + ParseJson(Cargo) + ", " +
                            "\"TiempoOcupandoCargo\" : " + ParseJson(TiempoOcupandoCargo) + ", " +
                            "\"ParticipacionAccionaria\" : " + ParseJson(ParticipacionAccionaria) + ", " +
                            "\"Sexo\" : " + ParseJson(Sexo) + ", " +
                            "\"InfoAdicional\" : " + ParseJson(InfoAdicional) + "}";

            return json;

        }

        public override string GetKeyPropertyName()
        {
            return "IdAdministrador";
        }

        public override string GetKeyPropertyVale()
        {
            return IdAdministrador;
        }
    }
}
