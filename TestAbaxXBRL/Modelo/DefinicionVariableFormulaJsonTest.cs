using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Modelo
{
    /// <summary>
    /// Definición exacta de una varialbe de formula Json.
    /// </summary>
    public class DefinicionVariableFormulaJsonTest
    {
        /// <summary>
        /// El identificador de la variable
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El identificador del concepto del hecho que da valor a esta variable
        /// </summary>
        public string IdConcepto { get; set; }

        /// <summary>
        /// Indica si este hecho puede eliminarse desde el diálogo que presenta el resumen de errores
        /// </summary>
        public bool PuedeEliminarse { get; set; }

        /// <summary>
        /// Indica si este hecho puede crearse desde el diálogo que presenta el resumen de errores
        /// </summary>
        public bool PuedeCrearse { get; set; }

        /// <summary>
        /// El identificador de la unidad de la plantilla que deberá usuarse en caso de crear un nuevo hecho
        /// </summary>
        public string IdUnidadPlantilla { get; set; }

        /// <summary>
        /// El identificador del contexto de la plantilla que deberá usuarse en caso de crear un publinuevo hecho
        /// </summary>
        public string IdContextoPlantilla { get; set; }

        /// <summary>
        /// Indica que la variable cuenta el número de ocurrencias de hechos que pertenecen al concepto
        /// </summary>
        public bool ConteoHechos { get; set; }

        /// <summary>
        /// Indica si el valor de la variable debe ser sustituido por el primer schemaRef incluido en el documento instancia
        /// </summary>
        public Nullable<bool> EsSchemaRef { get; set; }

        /// <summary>
        /// Valor que deberá ser asignado a la variable en caso de que no exista un hecho que cumpla con las condiciones descritas
        /// </summary>
        public string ValorFallback { get; set; }

        /// <summary>
        /// Indica que la cantidad de hechos que componen este valor puede cambiar dinamicamente durante la edición del documento.
        /// </summary>
        public Nullable<bool> EsDinamica { get; set; }

        /// <summary>
        /// Bandera que indica si la variable es el resultado de la función para enviarla al final.
        /// </summary>
        public Nullable<bool> EsResultado { get; set; }

        /// <summary>
        /// Bandera que indica como se debe de comparar las fechas entre periodos de diferente tipo
        /// </summary>
        public Nullable<int> EmpatarPeriodo { get; set; }

        /// <summary>
        /// Rol de etiqueta a utilizar al desplegar el detalle de las operaciones
        /// </summary>
        public string RolEtiqueta { get; set; }

        /// <summary>
        /// Indica si existe una excepción de periodo que no coincida con la variable de que coinciden en periodo las variables para la ejecución de la formula
        /// </summary>
        public Nullable<bool> ExcepcionPeriodo { get; set; }
        /// <summary>
        /// Los filtros que pueden aplicarse o no a las dimensiones del contexto en que aparece el hecho.
        /// </summary>
        public IList<FiltroDimensionJsonTest> FiltrosDimension { get; set; }
        /// <summary>
        /// Atributo que define si las dimensiones que apican para esta variable deben corresponder con las de la variable pibote.
        /// </summary>
        public Nullable<bool> MismasDimensiones { get; set; }
        /// <summary>
        /// Atributo que define si las dimensiones definidas aplican parcialmente, es decir que solo se evaluan las dimensiones definidas.
        /// </summary>
        public Nullable<bool> ConjuntoDimensionesParcial { get; set; }
    }
}
