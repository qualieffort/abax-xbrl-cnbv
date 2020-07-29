using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Hipercubos
{
    /// <summary>
    /// Definición de un periodo de plantilla.
    /// </summary>
    public class PlantillaPeriodoDto
    {
        ///<summary>
        /// Identificador de la variable que se utlizará para obtener la fecha instante del periodo.
        ///</summary>
        public string VariableFechaInstante {get; set;}
        ///<summary>
        /// Identificador de la variable que se utlizará para obtener la fecha de inicio del periodo.
        ///</summary>
        public string VariableFechaInicio {get; set;}
        ///<summary>
        /// Identificador de la variable que se utlizará para obtener la fecha de fin del periodo.
        ///</summary>
        public string VariableFechaFin {get; set;}

        ///<summary>
        /// Identificador del grupo de fechas en el que se encuentra este contexto.
        ///</summary>
        public string IdGrupoFechas { get; set; }
        /// <summary>
        /// Tipo de periodo.
        /// </summary>
        public int Tipo { get; set; }
        /// <summary>
        /// La fecha que representa un instante de tiempo
        /// </summary>
        public Nullable<DateTime> FechaInstante { get; set; }

        /// <summary>
        /// La fecha de inicio del intervalo de tiempo
        /// </summary>
        public Nullable<DateTime> FechaInicio { get; set; }

        /// <summary>
        /// La fecha de fin del intervalo de tiempo
        /// </summary>
        public Nullable<DateTime> FechaFin { get; set; }
        /// <summary>
        /// Bandera que indica si las variables de plantilla ya fueron evaluadas
        /// </summary>
        private bool VariablesEvaluadas = false;
        /// <summary>
        /// Inicializa los elementos de la plantila de periodo.
        /// </summary>
        /// <param name="input">Elemento con los valores que serán asignadoas.</param>
        public PlantillaPeriodoDto Deserialize(PeriodoDto input) 
        {
            this.Tipo = input.Tipo;

            if (input.Tipo == PeriodoDto.Instante) 
            {
                this.VariableFechaInstante = "fecha_" + input.FechaInstante.ToString("yyyy_MM_dd");
            }
            if (input.Tipo == PeriodoDto.Duracion)
            {
                this.VariableFechaFin = "fecha_" + input.FechaFin.ToString("yyyy_MM_dd"); ;
                this.VariableFechaInicio = "fecha_" + input.FechaInicio.ToString("yyyy_MM_dd"); ;
            }
            return this;
        }
        /// <summary>
        /// Genera un periodo en base a la definición de la palntilla de hipercubo.
        /// </summary>
        /// <param name="definicionPlantilla">Definición de la plantilla.</param>
        /// <returns>Periodo generado.</returns>
        public PeriodoDto GeneraPeriodo(IDefinicionPlantillaXbrl definicionPlantilla)
        {
            if (!VariablesEvaluadas)
            {
                EvaluaVariablesPlantilla(definicionPlantilla);
            }

            var periodo = new PeriodoDto()
            {
                Tipo = this.Tipo,
                FechaInstante = FechaInstante == null ? DateTime.MinValue : ((DateTime)FechaInstante).ToUniversalTime(),
                FechaInicio = FechaInicio == null ? DateTime.MinValue : ((DateTime)FechaInicio).ToUniversalTime(),
                FechaFin = FechaFin == null ? DateTime.MinValue : ((DateTime)FechaFin).ToUniversalTime()
            };
            return periodo;
        }

        /// <summary>
        /// Genera una llave única para identificar el periodo.
        /// </summary>
        /// <returns>Llave única para identificar el periodo.</returns>
        public string ObtenLlavePlantillaPeriodo() 
        {
            StringBuilder builder = new StringBuilder();
            builder.Append("{\"Tipo\" : \"");
            builder.Append(Tipo);
            if (Tipo == PeriodoDto.Instante) 
            {
                builder.Append("\", \"FechaInstante\" : \"");
                builder.Append(VariableFechaInstante);
                builder.Append("\"");
            }
            if (Tipo == PeriodoDto.Duracion)
            {
                builder.Append("\", \"FechaInicio\" : \"");
                builder.Append(VariableFechaInicio);
                builder.Append("\", \"FechaInicio\" : \"");
                builder.Append(VariableFechaFin);
                builder.Append("\"");
            }
            builder.Append("}");

            return builder.ToString();
        }
        /// <summary>
        /// Obtiene la fecha indicada.
        /// </summary>
        /// <param name="idVariableFecha">Identificador de la variable con la fecha requerida.</param>
        /// <param name="definicionPlantilla">Plantilla con la definición de las variables.</param>
        /// <returns>Fecha obtenida.</returns>
        private DateTime ParseVariableFecha(string idVariableFecha, IDefinicionPlantillaXbrl definicionPlantilla) 
        {

            var cadenaFecha = definicionPlantilla.ObtenerVariablePorId(idVariableFecha);
            if (cadenaFecha == null) {

                throw new NullReferenceException("No existe un valor para el dientrificador de varialbe \"" + idVariableFecha + "\"");
            }
            var fecha = new DateTime();
            DateUtil.ParseDate(cadenaFecha, DateUtil.YMDateFormat, out fecha);
            return fecha;
        }
        /// <summary>
        /// Inicializa los valores de las fehcas.
        /// </summary>
        /// <param name="definicionPlantilla">Definición de la plantilla con las variables a evaluar.</param>
        public void EvaluaVariablesPlantilla(IDefinicionPlantillaXbrl definicionPlantilla)
        {

            
            if (Tipo == PeriodoDto.Instante) {

                FechaInstante = ParseVariableFecha(VariableFechaInstante, definicionPlantilla);
                IdGrupoFechas = definicionPlantilla.ObtenerVariablePorId(VariableFechaInstante);
                if (IdGrupoFechas == null)
                {
                    throw new NullReferenceException("No existe la variable " + VariableFechaInstante  + " para la fecha instante en la definición de plantilla.");
                }
            }
            if (Tipo == PeriodoDto.Duracion) {

                FechaInicio = ParseVariableFecha(VariableFechaInicio, definicionPlantilla);
                FechaFin = ParseVariableFecha(VariableFechaFin, definicionPlantilla);
                var valorFechaInicio = definicionPlantilla.ObtenerVariablePorId(VariableFechaInicio);
                var valorFechaFin = definicionPlantilla.ObtenerVariablePorId(VariableFechaFin);
                if (valorFechaInicio == null)
                {
                    throw new NullReferenceException("No existe la variable " + VariableFechaInicio + " para la fecha inicio la definición de plantilla.");
                }
                if (valorFechaFin == null)
                {
                    throw new NullReferenceException("No existe la variable " + VariableFechaFin + " para la fecha fin la definición de plantilla.");
                }
                IdGrupoFechas = valorFechaInicio + "_" + valorFechaFin;
            }
            VariablesEvaluadas = true;
        }
        /// <summary>
        /// Determina si el periodo dado es equivalente a la plantilla actual.
        /// </summary>
        /// <param name="periodo">Periodo que se pretende comparar.</param>
        /// <param name="definicionPlantilla">Definicion de la plantilla para inicializar las variables del periodo.</param>
        /// <returns>Si el contexto aplica para la plantilla actual.</returns>
        public bool EsEquivalente(PeriodoDto periodo, IDefinicionPlantillaXbrl definicionPlantilla)
        {

            if (periodo.Tipo != Tipo) 
            {
                return false;
            }
            if (!VariablesEvaluadas) 
            {
                EvaluaVariablesPlantilla(definicionPlantilla);
            }
            if (Tipo == PeriodoDto.Instante && FechaInstante != null) 
            {
               if (!FechaInstante.Equals(periodo.FechaInstante) && 
                  !((DateTime)FechaInstante).ToUniversalTime().Equals(periodo.FechaInstante)) 
                {
                    return false;
                }
            }
            if (Tipo == PeriodoDto.Duracion && FechaInicio != null && FechaFin != null)
            {
                if (!FechaInicio.Equals(periodo.FechaInicio) &&
                    !((DateTime)FechaInicio).ToUniversalTime().Equals(periodo.FechaInicio))
                {
                    return false;
                }
                if (!FechaFin.Equals(periodo.FechaFin)&&
                    !((DateTime)FechaFin).ToUniversalTime().Equals(periodo.FechaFin))
                {
                    return false;
                }
            }
            return true;
 
        }
    }
}
