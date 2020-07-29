using AbaxXBRLCore.Viewer.Application.Dto;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Model
{
    /// <summary>
    /// Definición de la estructura que deberá tener la definición de los elementos de la plantilla utilizados por un rol.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class DefinicionElementosPlantillaXbrl
    {
        /// <summary>
        /// La definición de los contextos utilizados por la plantilla
        /// </summary>
        public IDictionary<string, ContextoPlantillaDto> ContextosPlantillaPorId { get; set; }

        /// <summary>
        /// La definición de las unidades utilizadas por la plantilla
        /// </summary>
        public IDictionary<string, UnidadPlantillaDto> UnidadesPlantillaPorId { get; set; }

        /// <summary>
        /// La definición de los hechos utilizados por la plantilla
        /// </summary>
        public IDictionary<string, HechoPlantillaDto> HechosPlantillaPorId { get; set; }

        /// <summary>
        /// Constructor por defecto de la clase DefinicionElementosPlantillaXbrl
        /// </summary>
        public DefinicionElementosPlantillaXbrl()
        {

        }

        /// <summary>
        /// Constructor de la clase DefinicionElementosPlantillaXbrl
        /// </summary>
        /// <param name="ubicacionDefinicion">la ubicación donde se encuentra el recurso incrustado con la definición de la plantilla en formato JSON</param>
        public DefinicionElementosPlantillaXbrl(string ubicacionDefinicion)
        {
            var assembly = Assembly.GetExecutingAssembly();

            using (Stream stream = assembly.GetManifestResourceStream(ubicacionDefinicion))
            using (StreamReader reader = new StreamReader(stream))
            {
                string result = reader.ReadToEnd();
                DefinicionElementosPlantillaXbrl definicion = JsonConvert.DeserializeObject<DefinicionElementosPlantillaXbrl>(result);
                if (definicion != null) {
                    this.HechosPlantillaPorId = definicion.HechosPlantillaPorId;
                    this.UnidadesPlantillaPorId = definicion.UnidadesPlantillaPorId;
                    this.ContextosPlantillaPorId = definicion.ContextosPlantillaPorId;
                }
            }
        }
    }
}
