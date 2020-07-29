using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    public class MiembrosDimensionales : ModeloBase
    {
        public string HashMiembrosDimensionales { get; set; }
        public bool Explicita { get; set; }
        public string IdDimension { get; set; }
        public string IdItemMiembro { get; set; }
        public string QNameDimension { get; set; }
        public string QNameItemMiembro { get; set; }
        public string MiembroTipificado { get; set; }
        public string BodyMiembroTipificado { get; set; }
        public IList<Etiqueta> EtiquetasDimension { get; set; }
        public IList<Etiqueta> EtiquetasMiembroDimension { get; set; }

        public override string GeneraJsonId()
        {

            var json = "{\"QNameDimension\" : " + ParseJson(QNameDimension) + ", " +
                        "\"QNameItemMiembro\" : " + ParseJson(QNameItemMiembro) + ", " +
                        "\"MiembroTipificado\" : " + ParseJson(MiembroTipificado) +  "}";
            return json;
        }

        public override string GeneraJsonOrdenamiento()
        {
            var json = "{\"QNameDimension\" : " + ParseJson(QNameDimension) + ", " +
                        "\"QNameItemMiembro\" : " + ParseJson(QNameItemMiembro) + ", " +
                        "\"MiembroTipificado\" : " + ParseJson(MiembroTipificado) + "}";
            return json;
        }

        public string GeneraHashDimension()
        {
            var json = "{\"QNameDimension\" : " + ParseJson(QNameDimension) + "}";

            return GeneraHash(json);
        }

        public string GeneraHashDimensionMiembro()
        {
            var json = GeneraJsonOrdenamiento();

            return GeneraHash(json);
        }

        public override string ToJson()
        {
            var json = "{" +
                "\"Explicita\" : " + ParseJson(Explicita) + ", " +
                "\"IdDimension\" : " + ParseJson(IdDimension) + ", " +
                "\"IdItemMiembro\" : " + ParseJson(IdItemMiembro) + ", " +
                "\"QNameDimension\" : " + ParseJson(QNameDimension) + ", " +
                "\"QNameItemMiembro\" : " + ParseJson(QNameItemMiembro) + ", " +
                "\"MiembroTipificado\" : " + ParseJson(MiembroTipificado) + ", " +
                "\"BodyMiembroTipificado\" : " + ParseJson(BodyMiembroTipificado) + ", " +
                "\"EtiquetasDimension\" : " + ParseJson(EtiquetasDimension) + ", " +
                "\"EtiquetasMiembroDimension\" : " + ParseJson(EtiquetasMiembroDimension) +
                "}";

            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "_id";
        }

        public override string GetKeyPropertyVale()
        {
            return HashMiembrosDimensionales;
        }
    }
}
