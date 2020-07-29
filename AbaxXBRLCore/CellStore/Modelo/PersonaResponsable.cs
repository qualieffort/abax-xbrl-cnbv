using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MongoDB.Driver.GridFS;

namespace AbaxXBRLCore.CellStore.Modelo
{
    public class PersonaResponsable: ModeloBase
    {

        public String IdEnvio { get; set; }
        public String Taxonomia { get; set; }
        public String Fecha { get; set; }
        public String ClaveCotizacion { get; set; }
        public String NumeroFideicomiso { get; set; }
        public String TipoPersonaResponsable { get; set; }
        public String Institucion { get; set; }
        public String Nombre { get; set; }
        public String Cargo { get; set; }

        public static String universoIdHechos = "'ar_pros_ResponsiblePersonInstitution'," +
            "'ar_pros_ResponsiblePersonName', 'ar_pros_ResponsiblePersonPosition', 'ar_pros_NumberOfTrust' ";

        public static Dictionary<string, string> diccionarioColumnas = new Dictionary<string, string>()
        {
            {"Taxonomia", "String"},
            {"Fecha", "DateTime"},
            {"ClaveCotizacion", "String"},
            {"Número de fideicomiso", "String"},
            {"TipoPersonaResponsable","String"},
            {"Institucion","String"},
            {"Cargo","String"},
            {"Nombre","String"}
        };

        public static Dictionary<string, string> diccionarioColumnasExcel = new Dictionary<string, string>()
        {
            {"Taxonomia", "Taxonomía"},
            {"Fecha", "Fecha de reporte"},
            {"ClaveCotizacion", "Clave de cotización"},
            {"NumeroFideicomiso", "Número fideicomiso"},
            {"TipoPersonaResponsable","Tipo de persona responsable"},
            {"Institucion","Institución"},
            {"Cargo","Cargo"},
            {"Nombre","Nombre"}
        };

        public override string GeneraJsonId()
        {
            return "";
        }

        public override string ToJson()
        {
            var json = "{" +
                           "\"IdEnvio\" : " + ParseJson(IdEnvio) + ", " +
                           "\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                           "\"Fecha\" : " + ParseJson(Fecha) + ", " +
                           "\"ClaveCotizacion\" : " + ParseJson(ClaveCotizacion) + ", " +
                           "\"TipoPersonaResponsable\" : " + ParseJson(TipoPersonaResponsable) + ", " +
                           "\"Institucion\" : " + ParseJson(Institucion) + ", " +
                           "\"Nombre\" : " + ParseJson(Nombre) + ", " +
                               "\"Cargo\" : " + ParseJson(Cargo) + "}";

            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "Fecha";
        }

        public override string GetKeyPropertyVale()
        {
            return Fecha;
        }
    }
}
