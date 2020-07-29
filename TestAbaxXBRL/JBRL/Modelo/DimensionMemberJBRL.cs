using AbaxXBRLCore.CellStore.Modelo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.JBRL.Modelo
{
    /// <summary>
    /// Element denoting a member of a JBRL dimension.
    /// </summary>
    public class DimensionMemberJBRL : ModeloBase
    {
        /// <summary>
        /// unique identifier of the dimension memeber
        /// </summary>
        public string dimensionMemeberId { get; set; }
        /// <summary>
        /// Identifier of the dimension.
        /// </summary>
        public String dimensionId { get; set; }
        /// <summary>
        /// value of the member.
        /// </summary>
        public String member { get; set; }
        /// <summary>
        /// value of the taxonomy
        /// </summary>
        public String taxonomy { get; set; }

        public override string GeneraJsonId()
        {
            var json = "{\"dimensionId\" : " + ParseJson(dimensionId) + ", " +
                        "\"member\" : " + ParseJson(member) + ",\"taxonomy\":"+ ParseJson(taxonomy) + "}";

            return json;
        }

        public override string GetKeyPropertyName()
        {
            return "_id";
        }

        public override string GetKeyPropertyVale()
        {
            return "_id";
        }

        public override string ToJson()
        {
            var json = "{\"dimensionId\" : " + ParseJson(dimensionId) + ", " +
                        "\"member\" : " + ParseJson(member) + ",\"taxonomy\":" + ParseJson(taxonomy) + "}";

            return json;
        }


    }
}
