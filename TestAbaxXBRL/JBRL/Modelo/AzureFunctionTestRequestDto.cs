using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.JBRL.Modelo
{
    /// <summary>
    /// DTO with the information of to send a request to azure function.
    /// </summary>
    public class AzureFunctionTestRequestDto
    {
        /// <summary>
        /// Default constructor.
        /// </summary>
        public AzureFunctionTestRequestDto ()
        {
            parameters = new Dictionary<string, object>();
        }
        /// <summary>
        /// Alias to indetify in the test.
        /// </summary>
        public string testAlias { get; set; }
        /// <summary>
        /// Name of the azure function.
        /// </summary>
        public string name { get; set; }
        /// <summary>
        /// If the mehtod is post.
        /// </summary>
        public bool isPost { get; set; }
        /// <summary>
        /// If the method is get.
        /// </summary>
        public bool isGet { get; set; }
        /// <summary>
        /// The parameters to send.
        /// </summary>
        public IDictionary<string, object> parameters { get; set; }
    }
}
