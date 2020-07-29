using AbaxXBRLCore.Common.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.MongoDB.Common.Entity
{
    /// <summary>
    /// Extensión de una entidad JSON de un hecho.
    /// </summary>
    public class EntHechoCheckun : EntHecho
    {
        /// <summary>
        /// Bandera que indica si el hecho es un hecho chekun.
        /// </summary>
        public bool esValorChunks { get; set; }
    }
}
