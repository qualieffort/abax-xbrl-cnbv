using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRL.Taxonomia.Linkbases
{
    public class Referencia : Recurso
    {
        /// <summary>
        /// Constructor predeterminado
        /// </summary>
        public Referencia()
        {
            PartesReferencia = new List<ReferenciaParte>();
        }
        /// <summary>
        /// El valor del rol estándar para un arco de referencia.
        /// </summary>
        public const string RolReferencia = "http://www.xbrl.org/2003/role/reference";
        /// <summary>
        /// Listado de los valores de los elementos de referencias partes de documentación declaradas en la taxonomía
        /// </summary>
        public IList<ReferenciaParte> PartesReferencia { get; set; }
        /// <summary>
        /// Cnojunto de roles estándar de referencia
        /// </summary>
        public static string[] RolesReferencia = {
                    "http://www.xbrl.org/2003/role/reference",
                    "http://www.xbrl.org/2003/role/definitionRef",
                    "http://www.xbrl.org/2003/role/disclosureRef",
                    "http://www.xbrl.org/2003/role/mandatoryDisclosureRef",
                    "http://www.xbrl.org/2003/role/recommendedDisclosureRef",
                    "http://www.xbrl.org/2003/role/unspecifiedDisclosureRef",
                    "http://www.xbrl.org/2003/role/presentationRef",
                    "http://www.xbrl.org/2003/role/measurementRef",
                    "http://www.xbrl.org/2003/role/commentaryRef",
                    "http://www.xbrl.org/2003/role/exampleRef"};
    }
}
