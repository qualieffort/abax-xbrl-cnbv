using AbaxXBRL.Constantes;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Validador.Impl
{
    /// <summary>
    /// Clase base de los validadores específicos de archivos de instancia, 
    /// contiene código de utilerías y código común a los validadores 
    /// específicos para cada prefijo
    /// </summary>
    public abstract class ValidadorArchivoInstanciaXBRLBase : IValidadorArchivoInstanciaXBRL
    {
        /// <summary>
        /// Mensaje de error general para cuando faltan parámetros para la validación de un documento de instancia
        /// </summary>
        public const String MSG_ERROR_FALTA_PARAMETRO = "Falta parámetro para validación: {0}";

        public const String MSG_ERROR_FORMATO_PARAMETRO = "Error en el formato del parámetro: {0} con valor: {1}";
        public abstract  void ValidarArchivoInstanciaXBRL(DocumentoInstanciaXbrlDto instancia, IDictionary<string, string> parametros,ResultadoValidacionDocumentoXBRLDto resultadoValidacion);

        /// <summary>
        /// Permite recuperar los valores del tipo no numerico de elementos de la taxonomia.
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto buscado</param>
        /// <param name="instancia">Documento de instancia</param>
        /// <returns>Valor no numerico, null en caso de no encontrarlo</returns>
        public static String ObtenerValorNoNumerico(String idConcepto, DocumentoInstanciaXbrlDto instancia)
        {
            if (instancia.HechosPorIdConcepto.ContainsKey(idConcepto)) {
                var idHechos = instancia.HechosPorIdConcepto[idConcepto];
                if (idHechos != null && idHechos.Count > 0)
                {
                    var hecho = instancia.HechosPorId[idHechos[0]];
                    if (hecho != null)
                    {
                        return hecho.Valor;
                    }
                }
            }
            return null;
        }
        /// <summary>
        /// Permite recuperar los valores del tipo fecha de elementos de la taxonomia.
        /// </summary>
        /// <param name="idConceptoFecha">ID del concepto en la taxonomia</param>
        /// <param name="instancia">Documento de instancia</param>
        /// <returns>Valor fecha, null en caso de no encontrarlo</returns>
        protected DateTime ObtenerValorFecha(String idConceptoFecha, DocumentoInstanciaXbrlDto instancia)
        {
            var fechaTmp = DateTime.MinValue;
            if (instancia.HechosPorIdConcepto.ContainsKey(idConceptoFecha))
            {
                var idHechos = instancia.HechosPorIdConcepto[idConceptoFecha];
                if (idHechos != null && idHechos.Count > 0)
                {
                    var hecho = instancia.HechosPorId[idHechos[0]];
                    if (hecho != null && !String.IsNullOrEmpty(hecho.Valor))
                    {
                        XmlUtil.ParsearUnionDateTime(hecho.Valor, out fechaTmp);
                    }
                }
            }
            return fechaTmp;
        }
        /// <summary>
        /// Agrega un error nuevo a la lista de errores del resultado de validación
        /// </summary>
        /// <param name="resultadoValidcion">Objeto de resultado donde se colocará el error</param>
        /// <param name="codigo">Código opcional de error</param>
        /// <param name="idContexto">Identificador opcional de contexto del error</param>
        /// <param name="mensaje">Mensaje de error</param>
        /// <param name="borrarOtrosErrores">Indica si se deben de limpiar otros errores y agregar solo este error</param>
        protected void AgregarError(ResultadoValidacionDocumentoXBRLDto resultadoValidcion,String codigo,string idContexto,String mensaje,bool borrarOtrosErrores){
            if (borrarOtrosErrores) {
                resultadoValidcion.ErroresGenerales.Clear();
            }
            var error = new ErrorCargaTaxonomiaDto() { 
                CodigoError = codigo,
                IdContexto = idContexto,
                Mensaje = mensaje,
                Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_ERROR
            };
            resultadoValidcion.Valido = false;

            if (idContexto == null){
                resultadoValidcion.ErroresGenerales.Add(error);
            }
            else { 
                var validacionPeriodo = resultadoValidcion.Periodos.FirstOrDefault(x=>x.IdContextos != null && x.IdContextos.Contains(idContexto));
                if (validacionPeriodo != null)
                {
                    validacionPeriodo.Errores.Add(error);
                }
                else {
                    resultadoValidcion.ErroresGenerales.Add(error);
                }
            }
            
        }
        /// <summary>
        /// Verifica si existe informacion del formato en alguno de los periodos
        /// </summary>
        /// <param name="instancia">Documento de instancia donde se buscan los hechos</param>
        /// <param name="idConceptoBuscado">Identificador del concepto buscado</param>
        /// <param name="fechaInicio">Fecha de inicio buscada</param>
        /// <param name="fechaFin">Fecha de fin o fecha instante buscada</param>
        /// <param name="infoDimensional">Información extra opcional dimensional a filtrar</param>
        /// <returns>True si existe el hecho buscado en esas fechas y dimensiones, false en otro caso</returns>
        protected bool ExisteInformacionEnPeriodo(DocumentoInstanciaXbrlDto instancia, String idConceptoBuscado,DateTime fechaInicio,DateTime fechaFin,IList<DimensionInfoDto> infoDimensional) {
		    AbaxXBRLCore.Viewer.Application.Dto.HechoDto hecho = null;
            AbaxXBRLCore.Viewer.Application.Dto.ContextoDto ctx = null;
            if(instancia.HechosPorIdConcepto.ContainsKey(idConceptoBuscado)){
                var idHechos = instancia.HechosPorIdConcepto[idConceptoBuscado];
                foreach(var idHecho in idHechos){
                    if(instancia.HechosPorId.ContainsKey(idHecho)){
                        hecho = instancia.HechosPorId[idHecho];
                        if (hecho.IdContexto != null && instancia.ContextosPorId.ContainsKey(hecho.IdContexto))
                        {
                            ctx = instancia.ContextosPorId[hecho.IdContexto];
						    if(ctx != null){
							    bool dimensionOk = infoDimensional == null;
							
							    if(infoDimensional!=null){
                                    dimensionOk = ctx.SonDimensionesEquivalentes(infoDimensional);
							    }
							    if(dimensionOk){
								    if(ctx.Periodo.Tipo == PeriodoDto.Instante){
									    if(fechaFin.Equals(ctx.Periodo.FechaInstante)){
										    return true;
									    }
                                    }
                                    else if (ctx.Periodo.Tipo == PeriodoDto.Duracion)
                                    {
									    if(fechaInicio.Equals(ctx.Periodo.FechaInicio) && fechaFin.Equals(ctx.Periodo.FechaFin)){
										    return true;
									    }
								    }
							    }
						    }
					    }
                    }
                }
            }
		    return false;
	    }
        /// <summary>
        /// Verifica si se encuentra al menos un hecho y el concepto es de tipo periodo duracion, entonces al menos uno de los hechos debe ser
        /// reportado en el periodo enviado como parámetro
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto</param>
        /// <param name="instancia">Instancia a validar</param>
        /// <param name="fechaInicio">Fecha de inicio</param>
        /// <param name="fechaFin">Fecha de fin</param>
        /// <returns>True si al menos uno de los hechos está reportado en el periodo enviado como parámetro</returns>
        protected bool ValidarAlMenosunHechoEnPeriodo(string idConcepto, DocumentoInstanciaXbrlDto instancia, DateTime fechaInicio, DateTime fechaFin)
        {
            if (instancia.HechosPorIdConcepto.ContainsKey(idConcepto))
            {
                var listaHechos = instancia.HechosPorIdConcepto[idConcepto];
                foreach (var idHecho in listaHechos)
                {
                    if (instancia.HechosPorId.ContainsKey(idHecho))
                    {
                        var hecho = instancia.HechosPorId[idHecho];
                        if (hecho.IdContexto != null && instancia.ContextosPorId.ContainsKey(hecho.IdContexto))
                        {
                            var ctx = instancia.ContextosPorId[hecho.IdContexto];
                            if (ctx.Periodo.Tipo == PeriodoDto.Duracion)
                            {
                                if (fechaInicio.Equals(ctx.Periodo.FechaInicio) &&
                                    fechaFin.Equals(ctx.Periodo.FechaFin))
                                {
                                    return true;
                                }
                            }
                            else if (ctx.Periodo.Tipo == PeriodoDto.Instante)
                            {
                                if (fechaFin.Equals(ctx.Periodo.FechaInstante))
                                {
                                    return true;
                                }
                            }
                            else
                            {
                                return true;
                            }
                        }
                    }
                }
                return false;
            }
            return true;
        }

        /// <summary>
        /// Valida que los hechos moentarios con valor diferente de cero cuenten con el atributo "decimals" =  al parámetro enviado
        /// </summary>
        /// <param name="instancia">Documento de instancia a validar</param>
        /// <returns>True si todos los hechos pasan la validación correctamente, false en otro caso</returns>
        protected bool ValidarDecimalesHechosMonetarios(DocumentoInstanciaXbrlDto instancia, int decimales)
        {
            if (instancia.HechosPorId != null)
            {
                foreach (var hecho in instancia.HechosPorId.Values)
                {
                    if (hecho.TipoDatoXbrl != null && hecho.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType) &&
                        !hecho.EsValorNil && hecho.ValorNumerico != (decimal)0)
                    {

                        int decimalesHecho = 0;
                        if (hecho.DecimalesEstablecidos && !hecho.EsDecimalesInfinitos)
                        {
                            Int32.TryParse(hecho.Decimales, out decimalesHecho);
                        }
                        if (decimales != decimalesHecho)
                        {
                            return false;
                        }
                    }
                }
            }
            return true;
        }

        /// <summary>
        /// Valida que en el documento de instancia se hayan utilizado únicamente las moendas enviadas como parámetro y sólo una moneda a la vez para todo el reporte
        /// </summary>
        /// <param name="instancia">Documeto de instancia a validar</param>
        /// <param name="unidadesPermitidas">Lista de unidades permitidas en la instancia</param>
        /// <returns>True si las validación no produjo ningún error, false en otro caso</returns>
        protected bool ValidarMonedasDocumento(DocumentoInstanciaXbrlDto instancia, string[] unidadesPermitidas)
        {
            var medidas = new List<MedidaDto>();
            var unidadesUtilizadas = new Dictionary<String, bool>();
            if (instancia.UnidadesPorId != null)
            {
                foreach (var unidad in instancia.UnidadesPorId.Values)
                {
                    medidas.Clear();
                    if (unidad.Medidas != null)
                    {
                        medidas.AddRange(unidad.Medidas);
                    }
                    if (unidad.MedidasNumerador != null)
                    {
                        medidas.AddRange(unidad.MedidasNumerador);
                    }
                    if (unidad.MedidasDenominador != null)
                    {
                        medidas.AddRange(unidad.MedidasDenominador);
                    }
                    foreach (var medida in medidas)
                    {
                        if (EspacioNombresConstantes.ISO_4217_Currency_Namespace.Equals(medida.EspacioNombres))
                        {
                            if (!unidadesPermitidas.Contains(medida.Nombre))
                            {
                                return false;
                            }
                            if (!unidadesUtilizadas.ContainsKey(medida.Nombre))
                            {
                                unidadesUtilizadas.Add(medida.Nombre, true);
                            }
                            if (unidadesUtilizadas.Count > 1)
                            {
                                return false;
                            }
                        }
                    }
                }
            }
            return true;
        }

    }
}
