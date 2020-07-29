using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using TestAbaxXBRL.Modelo;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestGenerarFormulasExistence
    {
        [TestMethod]
        public void GenerarDeclaracionFormulas()
        {
            
            var archivoDestino = @"C:\workspace_abax\AbaxXBRL\TestAbaxXBRL\TestOutput\formula.json";
            var archivoDefinicion = "PlantillasTs/DefinicionFormulaExistence.txt";
            var archivoListaConceptos = @"C:\workspace_abax\AbaxXBRL\TestAbaxXBRL\TestInputs\conceptosEA_ev_emisoras.csv";
            var lineasArchivo = File.ReadAllLines(archivoListaConceptos);

            string definicionFormula = File.ReadAllText(archivoDefinicion);
            StringBuilder resultadoStringBuilder = new StringBuilder();
            
            foreach (var linea in lineasArchivo)
            {
                var camposLinea = linea.Split(',');

                string tituloFormula = null;
                string idConceptoFormula = null;
                if (camposLinea.Length > 0)
                {
                    tituloFormula = camposLinea[0];
                }
                if (camposLinea.Length > 1)
                {
                    idConceptoFormula = camposLinea[1];
                }
                
                if (tituloFormula != null && camposLinea != null)
                {
                    var textoFormula = definicionFormula.Replace("{{idFormula}}", tituloFormula.Trim()).Replace("{{idConcepto}}", idConceptoFormula.Trim());
                    if (resultadoStringBuilder.Length > 0)
                    {
                        resultadoStringBuilder.Append(",\n\r");
                        
                    }
                    resultadoStringBuilder.Append(textoFormula);
                }

            }

            File.WriteAllText(archivoDestino, resultadoStringBuilder.ToString());

        }

        [TestMethod]
        public void GenerarFormulasExistencia()
        {
            
            var prefijoFormula = "Assertions_No_Numericos_No_Vacios";
            var archivoDestino = @"..\..\TestOutput\Formulas\" + prefijoFormula + ".json";
            var archivoDefinicion = "PlantillasTs/DefinicionFormulaExistence.txt";
            var archivoListaConceptos = @"..\..\TestInputs\conceptos-anexoT.csv";
            var lineasArchivo = File.ReadAllLines(archivoListaConceptos);

            string definicionFormula = File.ReadAllText(archivoDefinicion);
            StringBuilder resultadoStringBuilder = new StringBuilder();
            foreach (var linea in lineasArchivo)
            {

                var idConceptoFormula = linea;
                if (String.IsNullOrEmpty(idConceptoFormula))
                {
                    continue;
                }
                var tituloFormula = prefijoFormula + idConceptoFormula;
                var textoFormula = definicionFormula.Replace("{{idFormula}}", tituloFormula.Trim()).Replace("{{idConcepto}}", idConceptoFormula.Trim());
                if (resultadoStringBuilder.Length > 0)
                {
                    resultadoStringBuilder.Append(",\n\r");
                        
                }
                resultadoStringBuilder.Append(textoFormula);
            }
            File.WriteAllText(archivoDestino, resultadoStringBuilder.ToString());
        }
        /// <summary>
        /// Evalua las condiciones dimensionales de una variable.
        /// </summary>
        /// <param name="variables"></param>
        private void EvaluaCondicionesDimencionalesVariables(IList<VariableFormulaTest> variables)
        {
            for (var index = 0; index < variables.Count; index++)
            {
                var variable = variables[index];

                if (variable.Dimensiones != null && variable.Dimensiones.Count > 0)
                {
                    var builder = new StringBuilder();
                    builder.Append(",\r\n\t\t\t\t\t\t\t\tFiltrosDimension:");
                    builder.Append(
                        JsonConvert.SerializeObject(variable.Dimensiones, Formatting.Indented, new JsonSerializerSettings
                        {
                            NullValueHandling = NullValueHandling.Ignore
                        })
                    );
                    variable.TextoCondicionesDimensionales = builder.ToString();
                }
                else
                {
                    variable.TextoCondicionesDimensionales = String.Empty;
                }
            }
        }
        /// <summary>
        /// Evalua las variables y genera la cadeja json correspondiente.
        /// </summary>
        /// <param name="variables"></param>
        /// <returns></returns>
        private string GeneraDefinicionVariablesFormula(IList<DefinicionVariableFormulaJsonTest> variables) {

            var diccionario = new Dictionary<string, DefinicionVariableFormulaJsonTest>();
            for (var index = 0; index < variables.Count; index++)
            {
                var variable = variables[index];
                if (String.IsNullOrEmpty(variable.Id))
                {

                    variable.Id = "variable" + (index + 1);
                }
                if (!diccionario.ContainsKey(variable.Id))
                {
                    diccionario.Add(variable.Id, variable);
                }
            }

            return JsonConvert.SerializeObject(diccionario, Formatting.Indented, new JsonSerializerSettings
            {
                NullValueHandling = NullValueHandling.Ignore
            });

        }
        /// <summary>
        /// Determina un valor para el identificador de la formula.
        /// </summary>
        /// <param name="nombreFormula">Nombre de la formula original.</param>
        /// <param name="idConcepto">Identificador del concepto sobre el que se aplica</param>
        /// <param name="idsFormulasExistentes">Diccinario con los identificadores de formula existntes</param>
        /// <returns>Valor para el identificador de la formula.</returns>
        private string ObtenIdformula(string nombreFormula, string idConcepto, IDictionary<string, string> idsFormulasExistentes)
        {
            var idFormula = nombreFormula + "_" + idConcepto;
            var idFormulaBase = idFormula;
            var indexIdformula = 0;
            while (idsFormulasExistentes.ContainsKey(idFormula))
            {
                idFormula = idFormulaBase + "_" + indexIdformula;
                indexIdformula++;
            }
            idsFormulasExistentes.Add(idFormula, idFormula);

            return idFormula;
        }
        /// <summary>
        /// Genera las formulas en base a la configuración dada.
        /// </summary>
        [TestMethod]
        public void GenerarFormulasConfiguracionJSON()
        {

            var prefijoFormula = "FormulasAnexoH";
            var archivoConfiguracion = @"..\..\TestInput\Formulas\" + prefijoFormula + "_config.json";
            var archivoDestinoPrefijo = @"..\..\TestOutput\Formulas\AnexoH\" + prefijoFormula;
            var archivoDefinicionExistencia = "PlantillasTs/DefinicionFormulaExistence.txt";
            var archivoDefinicionExistenciaCondicional = "PlantillasTs/DefinicionFormulaExistenciaCondicional.txt";
            var archivoDefinicionIgualdad = "PlantillasTs/DefinicionFormulaIgualdad.txt";
            var archivoDefinicionLongitudMaxima = "PlantillasTs/DefinicionFormulaLongitudMaxima.txt";
            var archivoDefinicionGenerica = "PlantillasTs/FormulaGenerica.txt";
            var archivoCondicionalNegadoNoRequerido = "PlantillasTs/CondicionalNegadoNoRequerido.txt";

            string definicionFormulaExistencia = File.ReadAllText(archivoDefinicionExistencia);
            string definicionFormulaExistenciaCondicional = File.ReadAllText(archivoDefinicionExistenciaCondicional);
            string definicionFormulaIgualdad = File.ReadAllText(archivoDefinicionIgualdad);
            string definicionFormulaLongitudMaxima= File.ReadAllText(archivoDefinicionLongitudMaxima);
            string definicionFormulaGenerica = File.ReadAllText(archivoDefinicionGenerica);
            string definicionFormulaCondicionalNegadoNoRequerido = File.ReadAllText(archivoCondicionalNegadoNoRequerido);

            string textoConfiguracion = File.ReadAllText(archivoConfiguracion);


            var diccionarioConfiguracion = Newtonsoft.Json.JsonConvert.DeserializeObject<IDictionary<string, IDictionary<string, DefinicionFormulaTest>>>(textoConfiguracion);
            var separadorFormulas = ",\r\n\t\t\t\t\t";
            foreach (var nombreRol in diccionarioConfiguracion.Keys)
            {
                var archivoDestino = archivoDestinoPrefijo + "Formulas" + nombreRol + "_result.json";
                var resultadoStringBuilder = new StringBuilder();
                var diccionarioFormulas = diccionarioConfiguracion[nombreRol];
                var diccinarioIdsFormulas = new Dictionary<string, string>();
                foreach (var nombreFormula in diccionarioFormulas.Keys)
                {
                    var formula = diccionarioFormulas[nombreFormula];
                    if(formula.Variables != null)
                    {
                        EvaluaCondicionesDimencionalesVariables(formula.Variables);
                    }

                    if (!String.IsNullOrEmpty(formula.Precondition))
                    {
                        var variablePrecondicion = formula.Variables[0];
                        for (var indexVariable = 1; indexVariable < formula.Variables.Count; indexVariable++)
                        {
                            var variableRequerida = formula.Variables[indexVariable];
                            var idFormula = ObtenIdformula(nombreFormula, variableRequerida.Concepto, diccinarioIdsFormulas);
                            var esCondicionalNegado = formula.Precondition.IndexOf("!") == 0;
                            var precondicion = esCondicionalNegado ? formula.Precondition.Substring(1) : formula.Precondition;
                            var definicionFormula = esCondicionalNegado ? definicionFormulaCondicionalNegadoNoRequerido : definicionFormulaExistenciaCondicional;

                            var formulaString = definicionFormula
                            .Replace("{{idFormula}}", idFormula)
                            .Replace("{{valorCondicion}}", precondicion)
                            .Replace("{{idConceptoPrecondicion}}", variablePrecondicion.Concepto)
                            .Replace("{{configuracionDimensionPrecondicion}}", variablePrecondicion.TextoCondicionesDimensionales)
                            .Replace("{{idConceptoRequerido}}", variableRequerida.Concepto)
                            .Replace("{{configuracionDimensionRequerido}}", variableRequerida.TextoCondicionesDimensionales);
                            resultadoStringBuilder.Append(separadorFormulas);
                            resultadoStringBuilder.Append(formulaString);
                        }
                    }
                    else if (!String.IsNullOrEmpty(formula.Igual))
                    {
                        for (var indexVariable = 0; indexVariable < formula.Variables.Count; indexVariable++)
                        {
                            var variableRequerida = formula.Variables[indexVariable];
                            var idFormula = ObtenIdformula(nombreFormula, variableRequerida.Concepto, diccinarioIdsFormulas);
                            var formulaString = definicionFormulaIgualdad
                            .Replace("{{idFormula}}", idFormula)
                            .Replace("{{valorCondicion}}", formula.Igual)
                            .Replace("{{idConceptoCondicion}}", variableRequerida.Concepto)
                            .Replace("{{configuracionDimensionCondicion}}", variableRequerida.TextoCondicionesDimensionales);
                            resultadoStringBuilder.Append(separadorFormulas);
                            resultadoStringBuilder.Append(formulaString);
                        }
                    }
                    else if (formula.LongitudMaxima != null && formula.LongitudMaxima  > 0)
                    {
                        for (var indexVariable = 0; indexVariable < formula.Variables.Count; indexVariable++)
                        {
                            var variableRequerida = formula.Variables[indexVariable];
                            var idFormula = ObtenIdformula(nombreFormula, variableRequerida.Concepto, diccinarioIdsFormulas);
                            var formulaString = definicionFormulaLongitudMaxima
                            .Replace("{{idFormula}}", idFormula)
                            .Replace("{{longitudMaxima}}", formula.LongitudMaxima.ToString())
                            .Replace("{{idConcepto}}", variableRequerida.Concepto)
                            .Replace("{{configuracionDimensionCondicion}}", variableRequerida.TextoCondicionesDimensionales);
                            resultadoStringBuilder.Append(separadorFormulas);
                            resultadoStringBuilder.Append(formulaString);
                        }
                    }
                    else if (!String.IsNullOrWhiteSpace(formula.Expresion) && 
                        formula.VariablesExpresion != null && 
                        formula.VariablesExpresion.Count > 0)
                    {
                        var definicionVariables = GeneraDefinicionVariablesFormula(formula.VariablesExpresion);
                        var idFormula = ObtenIdformula(nombreFormula, "", diccinarioIdsFormulas);
                        var formulaString = definicionFormulaGenerica
                        .Replace("{{idFormula}}", idFormula)
                        .Replace("{{expresion}}", formula.Expresion)
                        .Replace("{{definicionVariables}}", definicionVariables)
                        .Replace("{{mensajeExito}}", formula.MensajeExito.Replace("'","\""))
                        .Replace("{{mensajeError}}", formula.MensajeError.Replace("'", "\""))
                        .Replace("{{VariablesCoincidenPeriodo}}", String.IsNullOrEmpty(formula.VariablesCoincidenPeriodo) ? "true" : formula.VariablesCoincidenPeriodo)
                        .Replace("{{TipoFormula}}", String.IsNullOrEmpty(formula.TipoFormula) ? "model.TipoFormula.ValueAssertion" : formula.TipoFormula)
                        .Replace("{{ExcepcionSinHijos}}", String.IsNullOrEmpty(formula.ExcepcionSinHijos) ? "" : "\r\n                        ExcepcionSinHijos: " + formula.ExcepcionSinHijos + ",")
                        .Replace("{{ExpresionJavaScript}}", !formula.ExpresionJavaScript ?  "": "\r\n                        ExpresionJavaScript: true,");
                        resultadoStringBuilder.Append(separadorFormulas);
                        resultadoStringBuilder.Append(formulaString);
                    }
                    else if (!String.IsNullOrWhiteSpace(formula.Expresion) &&
                         /*formula.VariablesPrecondicion != null && 
                         formula.VariablesPrecondicion.Count > 0 &&*/
                         formula.VariablesIteracion != null &&
                         formula.VariablesIteracion.Count > 0)
                    {
                        for (var indexVariable = 0; indexVariable < formula.VariablesIteracion.Count; indexVariable++)
                        {
                            var variableRequerida = formula.VariablesIteracion[indexVariable];
                            var variablesExpresion = new List<DefinicionVariableFormulaJsonTest>();
                            variablesExpresion.Add(variableRequerida);
                            if (formula.VariablesPrecondicion != null && formula.VariablesPrecondicion.Count > 0)
                            {
                                variablesExpresion.AddRange(formula.VariablesPrecondicion);
                            }
                            var definicionVariables = GeneraDefinicionVariablesFormula(variablesExpresion);
                            var idFormula = ObtenIdformula(nombreFormula, variableRequerida.IdConcepto, diccinarioIdsFormulas);
                            var formulaString = definicionFormulaGenerica
                            .Replace("{{idFormula}}", idFormula)
                            .Replace("{{expresion}}", formula.Expresion)
                            .Replace("{{definicionVariables}}", definicionVariables)
                            .Replace("{{mensajeExito}}", formula.MensajeExito.Replace("'", "\""))
                            .Replace("{{mensajeError}}", formula.MensajeError.Replace("'", "\""))
                            .Replace("{{VariablesCoincidenPeriodo}}", String.IsNullOrEmpty(formula.VariablesCoincidenPeriodo) ? "true" : formula.VariablesCoincidenPeriodo)
                            .Replace("{{TipoFormula}}", String.IsNullOrEmpty(formula.TipoFormula) ? "model.TipoFormula.ValueAssertion" : formula.TipoFormula)
                            .Replace("{{ExcepcionSinHijos}}", String.IsNullOrEmpty(formula.ExcepcionSinHijos) ? "" : "\r\n                        ExcepcionSinHijos: " + formula.ExcepcionSinHijos + ",")
                            .Replace("{{ExpresionJavaScript}}", !formula.ExpresionJavaScript ? "" : "\r\n                        ExpresionJavaScript: true,");
                            resultadoStringBuilder.Append(separadorFormulas);
                            resultadoStringBuilder.Append(formulaString);
                        }
                    }
                    else
                    {
                        for (var indexVariable = 0; indexVariable < formula.Variables.Count; indexVariable++)
                        {
                            var variableRequerida = formula.Variables[indexVariable];
                            var idFormula = ObtenIdformula(nombreFormula, variableRequerida.Concepto, diccinarioIdsFormulas);
                            var formulaString = definicionFormulaExistencia
                            .Replace("{{idFormula}}", idFormula)
                            .Replace("{{longitudMaxima}}", formula.LongitudMaxima.ToString())
                            .Replace("{{idConcepto}}", variableRequerida.Concepto)
                            .Replace("{{configuracionDimensionCondicion}}", variableRequerida.TextoCondicionesDimensionales)
                            .Replace("{{valorFallback}}", variableRequerida.ValorFallback);
                            resultadoStringBuilder.Append(separadorFormulas);
                            resultadoStringBuilder.Append(formulaString);
                        }
                    }
                }
                File.WriteAllText(archivoDestino, resultadoStringBuilder.ToString().Substring(1));
            }
            
        }
    }
}
