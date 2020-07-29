using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Modelo
{
    /// <summary>
    /// Definición de formula.
    /// </summary>
    public class DefinicionFormulaTest
    {
        /// <summary>
        /// Nombre de la formula.
        /// </summary>
        public string NombreFormula { get; set; }
        /// <summary>
        /// Precondicion en caso de que aplique.
        /// </summary>
        public string Precondition { get; set; }
        /// <summary>
        /// Listado de variables de la formula.
        /// </summary>
        public IList<VariableFormulaTest> Variables { get; set; }
        /// <summary>
        /// Listado con la definición de variables de una expresion.
        /// </summary>
        public IList<DefinicionVariableFormulaJsonTest> VariablesExpresion { get; set; }
        /// <summary>
        /// Listado con la definición de variables de una precondision.
        /// </summary>
        public IList<DefinicionVariableFormulaJsonTest> VariablesPrecondicion { get; set; }
        /// <summary>
        /// Listado con la definición de variables a iterar para una expresion de precondision.
        /// </summary>
        public IList<DefinicionVariableFormulaJsonTest> VariablesIteracion { get; set; }
        /// <summary>
        /// La longitud  máxima en caso de que aplique.
        /// </summary>
        public Nullable<int> LongitudMaxima { get; set; }
        /// <summary>
        /// Valor a igualar en caso de que aplique.
        /// </summary>
        public string Igual { get; set; }
        /// <summary>
        /// Especifica de forma explicita la expresión.
        /// </summary>
        public string Expresion { get; set; }
        /// <summary>
        /// Mensaje de exito
        /// </summary>
        public string MensajeExito { get; set; }
        /// <summary>
        /// Mensaje de error
        /// </summary>
        public string MensajeError { get; set; }
        /// <summary>
        /// Bandera que indica si las variables no coinciden en el periodo
        /// </summary>
        public string VariablesCoincidenPeriodo { get; set; }
        /// <summary>
        /// Tipo de formula que se esta tulizando.
        /// </summary>
        public string TipoFormula { get; set; }
        /// <summary>
        /// Variable que indica que la formula se evalue aun cuando todas sus variables secundarias son fallback.
        /// </summary>
        public string ExcepcionSinHijos { get; set; }
        /// <summary>
        /// Bandera que indica si es una expresión de tipo javascript.
        /// </summary>
        public bool ExpresionJavaScript { get; set; }
    }
}
