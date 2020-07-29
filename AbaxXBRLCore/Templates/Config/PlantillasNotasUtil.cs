using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace AbaxXBRLCore.Templates.Config
{
    public sealed class PlantillasNotasUtil
    {
        public const String TIPO_DATO_TEXT_BLOCK = "textBlockItemType";

        public const string PATH_ETIQUETAS_PLANTILLAS_JSON = "AbaxXBRLCore.Config.templates.Common.etiquetas.json";


        public static T obtenerJSON<T>(String ubicacionDefinicion)
        {
            var assembly = Assembly.GetExecutingAssembly();
            T definicion;
            using (Stream stream = assembly.GetManifestResourceStream(ubicacionDefinicion))
            using (StreamReader reader = new StreamReader(stream))
            {
                string result = reader.ReadToEnd();
                definicion = JsonConvert.DeserializeObject<T>(result);
            }
            return definicion;
        }
    }
}
