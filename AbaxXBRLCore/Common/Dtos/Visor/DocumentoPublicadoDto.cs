using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos.Visor
{
    /// <summary>
    /// Representa a un documento publicado disponible para el visor de documentos 
    /// de instancia
    /// </summary>
    public class DocumentoPublicadoDto
    {
        public String Id { get; set; }
        public String Emisora { get; set; }
        public String Ejercicio { get; set; }

        public String Periodo { get; set; }

        public String Descripcion { get; set; }

        public String NombreArchivo { get; set; }

        public String FechaRecepcion { get; set; }

        public String NombreTaxonomia { get; set; }
    }
}
