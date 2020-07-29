using AbaxXBRLCore.Viewer.Application.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Hipercubos
{
    /// <summary>
    ///  Plantilla para la generación de contextos.
    /// </summary>
    public class PlantillaContextoDto : ContextoDto
    {
        ///<summary>
        /// Plantilla para la inicializaicón del periodo.
        ///</summary>
        public PlantillaPeriodoDto Periodo{get; set;}
        ///<summary>
        /// Identificador del grupo con la configuración de dimensiones con la que se inicializará el contexto.
        ///</summary>
        public string NombreGrupoDimensionesIniciales{get; set;}
        ///<summary>
        /// Lista con los identificadores de los contextos relacionados a esta plantilla.
        ///</summary>
        public IList<string> ContextosRelacionados {get; set;}
        /// <summary>
        /// Genera una representación en cadena con los elementos principales que componen este contexto.
        /// </summary>
        /// <returns>Llave del contexto.</returns>
        public string GeneraLlaveContexto() 
        {
            var llave = new StringBuilder();

            llave.Append("{\"Periodo\" : \"");
            llave.Append(Periodo.ObtenLlavePlantillaPeriodo());
            llave.Append("\", \"ContieneInformacionDimensional\" : \"");
            llave.Append(ContieneInformacionDimensional);
            llave.Append("\", \"NombreGrupoDimensionesIniciales\" : \"");
            llave.Append(NombreGrupoDimensionesIniciales);
            llave.Append("\"");
            llave.Append("}");

            return llave.ToString();
        }
       
        /// <summary>
        /// Toma los valores del contexto para generar su plantilla.
        /// </summary>
        /// <param name="input"></param>
        /// <returns></returns>
        public PlantillaContextoDto Deserialize(ContextoDto input) 
        {
            Periodo = new PlantillaPeriodoDto().Deserialize(input.Periodo);
            ContieneInformacionDimensional = input.ContieneInformacionDimensional;
            return this;
        }
        /// <summary>
        /// Genera un contexto con la información definida en la plantilla.
        /// </summary>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="definicionPlantilla">Plantilla donde se obtendran las variables para la generación del contexto.</param>
        /// <param name="listaDimensiones">Lista de dimensiones que se aplican al contexto.</param>
        /// <returns></returns>
        public ContextoDto GeneraContexto(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl definicionPlantilla, IList<DimensionInfoDto> listaDimensiones = null)
        {
            var periodo = this.Periodo.GeneraPeriodo(definicionPlantilla);
            var entidadAuxiliar = instancia.EntidadesPorId.Values.First();
            var entidad = new EntidadDto()
            {
                ContieneInformacionDimensional = false,
                EsquemaId = entidadAuxiliar.EsquemaId,
                Id = entidadAuxiliar.Id,
            };
            var diccionarioMiembrosdimensio = new Dictionary<String, DimensionInfoDto>();
            if (listaDimensiones != null)
            {
                foreach (var itemDimension in listaDimensiones)
                {
                    if (!diccionarioMiembrosdimensio.ContainsKey(itemDimension.IdDimension))
                    {
                        diccionarioMiembrosdimensio.Add(itemDimension.IdDimension, itemDimension);
                    }
                }
            }
            if (ValoresDimension != null)
            {
                foreach (var valorDimension in ValoresDimension)
                {
                    if (!diccionarioMiembrosdimensio.ContainsKey(valorDimension.IdDimension))
                    {
                        diccionarioMiembrosdimensio.Add(valorDimension.IdDimension, valorDimension);
                    }
                }
            }
            var dimensiones = new List<DimensionInfoDto>();
            foreach (var miembro in diccionarioMiembrosdimensio.Values)
            {
                dimensiones.Add(miembro);
            }
            var contexto = new ContextoDto()
            {
                Id = "C" + Guid.NewGuid().ToString(),
                Periodo = periodo,
                Entidad = entidad,
                ContieneInformacionDimensional = this.ContieneInformacionDimensional,
                ValoresDimension = dimensiones
            };
            return contexto;
        }
    }
}