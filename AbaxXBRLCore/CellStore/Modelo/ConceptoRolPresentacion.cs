using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    public class ConceptoRolPresentacion : ModeloBase
    {

        public string HashConceptoRolPresentacion { get; set; }
        public string IdConcepto{get; set;}
        public string Taxonomia { get; set; }
        public string EspacioNombres { get; set; }
        public int Tipo{get; set;}
        public int Balance{get; set;}
        public string TipoDato{get; set;}
        public string Nombre{get; set;}
        public bool EsHipercubo{get; set;}
        public bool EsDimension{get; set;}
        public bool EsAbstracto{get; set;}
        public bool EsMiembroDimension { get; set; }
        public int Posicion { get; set; }
        public int Indentacion { get; set; }
        public IList<Etiqueta> Etiquetas { get; set; }

        public override string GeneraJsonId()
        {
            var json = "{\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                      "\"EspacioNombres\" : " + ParseJson(EspacioNombres) + ", " +
                      "\"IdConcepto\" : " + ParseJson(IdConcepto) + ", " +
                      "\"Posicion\" : " + ParseJson(Posicion) + ", " +
                      "\"Indentacion\" : " + ParseJson(Indentacion) + ", " +
                      "\"EtiquetaRol\" : " + ParseJson(Etiquetas) + "}";
            return json;
        }

        public override string ToJson()
        {
            var json = "{" +
                "\"IdConcepto\" : " + ParseJson(IdConcepto) + ", " +
                "\"Tipo\" : " + ParseJson(Tipo) + ", " +
                "\"Balance\" : " + ParseJson(Balance) + ", " +
                "\"TipoDato\" : " + ParseJson(TipoDato) + ", " +
                "\"Nombre\" : " + ParseJson(Nombre) + ", " +
                "\"EsHipercubo\" : " + ParseJson(EsHipercubo) + ", " +
                "\"EsDimension\" : " + ParseJson(EsDimension) + ", " +
                "\"EsAbstracto\" : " + ParseJson(EsAbstracto) + ", " +
                "\"EsMiembroDimension\" : " + ParseJson(EsMiembroDimension) + ", " +
                "\"EspacioNombres\" : " + ParseJson(EspacioNombres) + ", " +
                "\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                "\"Posicion\" : " + ParseJson(Posicion) + ", " +
                "\"Indentacion\" : " + ParseJson(Indentacion) + ", " +
                "\"Etiquetas\" : " + ParseJson(Etiquetas) + "}";
            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "_id";
        }

        public override string GetKeyPropertyVale()
        {
            return HashConceptoRolPresentacion;
        }
    }
}
