using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using System.Globalization;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia.Linkbases;
using System.Text.RegularExpressions;
using System.Security.Cryptography;

namespace AbaxXBRLCore.Common.Util
{
    public static class UtilAbax
    {
        /// <summary>
        /// Elementos de la URL a reemplazar
        /// </summary>
        private static string _dosPuntos = ":";
        private static string _diagonal = "/";
        private static string _punto = ".";
        private static string _guion = "-";
        /// <summary>
        /// Caracter con el que se reemplazan los elementos a reemplazar
        /// </summary>
        private static string _caracterReemplazo = "_";
        private static string _puntoXSD = ".xsd";
        public static String GenerarCodigo()
        {
            var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            var random = new Random();
            var result = new string(
                Enumerable.Repeat(chars, 8)
                          .Select(s => s[random.Next(s.Length)])
                          .ToArray());
            return result;
        }

        public static DirectoryInfo ObtenerDirectorioTemporal()
        {
            string tempFolder = Path.GetTempFileName();
            if (File.Exists(tempFolder))
            {
                File.Delete(tempFolder);
            }
            return Directory.CreateDirectory(tempFolder);
        }
        /// <summary>
        /// Obtiene el identificador de spring que debe de tener la plantilla de definición en base
        /// al espacio de nombres principal enviado como parámetro.
        /// </summary>
        /// <param name="espacioNombres">Espacio de nombres principal de una taxonomía</param>
        /// <returns>ID del bean de Spring correspondiente a la plantilla</returns>
        public static string ObtenerIdSpringDefinicionPlantilla(String espacioNombres) {
           return
                espacioNombres.Replace(_puntoXSD, String.Empty).Replace(_guion, _caracterReemplazo).Replace(_dosPuntos, _caracterReemplazo).
                        Replace(_diagonal, _caracterReemplazo).Replace(_punto, _caracterReemplazo);
        }

        /// <summary>
        /// Intenta realizar la asignación del valor enviado como parámetro al hecho, si 
        /// el valor no es válido respecto al tipo de dato del concepto, el valor no es asignado
        /// </summary>
        /// <param name="conceptoImportar">Concepto que se está importando</param>
        /// <param name="hechoInstancia">Hecho en el documento de instancia</param>
        /// <param name="valorImportar">Valor a importar</param>
        /// <param name="fechaDefault">Fecha por default para un hecho del tipo fecha</param>
        /// <returns>True si se pudo asignar el valor, false en otro caso</returns>
        public static Boolean ActualizarValorHecho(ConceptoDto conceptoImportar, AbaxXBRLCore.Viewer.Application.Dto.HechoDto hechoInstancia, String valorImportar, String fechaDefault)
        {
            var valorAsignado = false;
            if (conceptoImportar.EsTipoDatoNumerico)
            {
                double resultado = 0;
                hechoInstancia.Valor = "0";
                if (Double.TryParse(valorImportar, NumberStyles.Any, CultureInfo.InvariantCulture, out resultado))
                {
                    if (conceptoImportar.TipoDatoXbrl.Contains(TiposDatoXBRL.MonetaryItemType) ||
                       conceptoImportar.TipoDatoXbrl.Contains(TiposDatoXBRL.DoubleItemType) ||
                       conceptoImportar.TipoDatoXbrl.Contains(TiposDatoXBRL.FloatItemType))
                    {
                        //hechoInstancia.Valor = resultado.ToString("###################################0.##############################", CultureInfo.InvariantCulture);
                        hechoInstancia.Valor = new Decimal(resultado).ToString();
                        valorAsignado = true;
                    }
                    else if (conceptoImportar.TipoDatoXbrl.Contains(TiposDatoXBRL.IntegerItemType) ||
                       conceptoImportar.TipoDatoXbrl.Contains(TiposDatoXBRL.IntItemType) ||
                       conceptoImportar.TipoDatoXbrl.Contains(TiposDatoXBRL.LongItemType) ||
                       conceptoImportar.TipoDatoXbrl.Contains(TiposDatoXBRL.SharesItemType) ||
                       conceptoImportar.TipoDatoXbrl.Contains(TiposDatoXBRL.ShortItemType)
                       )
                    {
                        hechoInstancia.Valor = ((long)resultado).ToString();
                        valorAsignado = true;
                    }
                    else if (conceptoImportar.TipoDatoXbrl.Contains(TiposDatoXBRL.NonNegativeIntegerItemType))
                    {
                        if (resultado >= 0)
                        {
                            hechoInstancia.Valor = ((long)resultado).ToString(); ;
                            valorAsignado = true;
                        }
                       
                    }
                    else if (conceptoImportar.TipoDatoXbrl.Contains(TiposDatoXBRL.NonPositiveIntegerItemType))
                    {
                        if (resultado < 0)
                        {
                            hechoInstancia.Valor = ((long)resultado).ToString(); 
                            valorAsignado = true;
                        }
                      
                    }
                    else
                    {
                        //hechoInstancia.Valor = resultado.ToString("###################################0.##############################",CultureInfo.InvariantCulture);
                        hechoInstancia.Valor = new Decimal(resultado).ToString(); ;
                        valorAsignado = true;
                    }
                }
            }
            else if (conceptoImportar.TipoDatoXbrl.Contains(TiposDatoXBRL.BooleanItemType))
            {
                if (valorImportar != null && CommonConstants.CADENAS_VERDADERAS.Any(x => x.ToLower().Equals(valorImportar.ToLower())))
                {
                    hechoInstancia.Valor = Boolean.TrueString.ToLower();
                }
                else
                {
                    hechoInstancia.Valor = Boolean.FalseString.ToLower();
                }
                valorAsignado = true;
            }
            else if (conceptoImportar.TipoDatoXbrl.Contains(TiposDatoXBRL.DateItemType))
            {
                string valorFecha = AbaxXBRLCore.Common.Util.DateUtil.ParseDateMultipleFormats(valorImportar);
                if (!String.IsNullOrEmpty(valorFecha))
                {
                    hechoInstancia.Valor = valorFecha;
                    valorAsignado = true;
                }
                else
                {
                    //Colocar fecha de inicio del ejercicio
                    hechoInstancia.Valor = fechaDefault;
                }
            }
            else if (conceptoImportar.EsTipoDatoToken)
            {
                if (conceptoImportar.ListaValoresToken != null && conceptoImportar.ListaValoresToken.Count > 0)
                {
                    if (valorImportar != null && conceptoImportar.ListaValoresToken.Contains(valorImportar))
                    {
                        hechoInstancia.Valor = valorImportar;
                        valorAsignado = true;
                    }else
                    {
                        var asingando = false;
                        if (!String.IsNullOrWhiteSpace(valorImportar))
                        {
                            foreach (var valorToken in conceptoImportar.ListaValoresToken)
                            {
                                if (valorToken.ToUpper().Equals(valorImportar.Trim().ToUpper()))
                                {
                                    hechoInstancia.Valor = valorToken;
                                    asingando = true;
                                    break;
                                }
                            }
                        }
                        if (!asingando)
                        {
	                        hechoInstancia.Valor = conceptoImportar.ListaValoresToken[0];
	                    }
                	}
                }
                
            }
            else
            {
                hechoInstancia.Valor = valorImportar;
                valorAsignado = true;
            }
            return valorAsignado;
        }
        /// <summary>
        /// Obtiene la etiqueta predeterminada de un concepto en el lenguaje enviado como parámetro,
        /// español por default
        /// </summary>
        /// <param name="taxonomia">Taxonomía a buscar</param>
        /// <param name="idConcepto">ID del concepto buscado</param>
        /// <param name="lang">Idioma</param>
        /// <returns>Etiqueta encontrada, nombre del concepto en caso de no encontrar la etiqueta</returns>
        public static String ObtenerEtiqueta(TaxonomiaDto taxonomia, String idConcepto,String rolEtiqueta = Etiqueta.RolEtiqueta, String lang = "es") {
            var etiqueta = "";
            if (taxonomia != null && taxonomia.ConceptosPorId != null && taxonomia.ConceptosPorId.ContainsKey(idConcepto)) {
                var concepto = taxonomia.ConceptosPorId[idConcepto];
                etiqueta = concepto.Nombre;
                if (concepto.Etiquetas != null && concepto.Etiquetas.ContainsKey(lang) &&
                    concepto.Etiquetas[lang].ContainsKey(rolEtiqueta))
                {
                    etiqueta = concepto.Etiquetas[lang][rolEtiqueta].Valor;
                }
            }
            return etiqueta;
        }

        /// <summary>
        /// Obtiene en forma de lista plana, los conceptos utilizados en un rol de presentación de la taxonomía enviada como parámetro
        /// </summary>
        /// <param name="taxonomia">Taxonomía a evaluar</param>
        /// <param name="uriRolPresentacion">URI del rol o obtener su lista de conceptos utilizados</param>
        /// <returns></returns>
        public static IList<ConceptoDto> ObtenerListaConceptosDeRolPresentacion(TaxonomiaDto taxonomia, String uriRolPresentacion) { 
            var listaConceptos = new List<ConceptoDto>();
            if (taxonomia != null && taxonomia.RolesPresentacion != null){
                RolDto<EstructuraFormatoDto> rol = taxonomia.RolesPresentacion.FirstOrDefault(x=>x.Uri.Equals(uriRolPresentacion));

                if (rol != null) {

                    foreach (var estructura in rol.Estructuras)
                    {
                        AgregarNodoEstructura(listaConceptos, estructura, taxonomia);
                    }
                    
                
                }

            } 
            return listaConceptos;
        }
        /// <summary>
        /// Recorre el árbol de estructuras y los agrega a la lista plana de estructuras
        /// </summary>
        /// <param name="listaConceptos">Lista a llenar</param>
        /// <param name="estructura">Estructura a agregar</param>
        private static void AgregarNodoEstructura(List<ConceptoDto> listaConceptos, EstructuraFormatoDto estructura, TaxonomiaDto taxonomia)
        {
            if (estructura.IdConcepto != null && taxonomia.ConceptosPorId.ContainsKey(estructura.IdConcepto)) { 
                if(!listaConceptos.Any(x=> x.Id.Equals(estructura.IdConcepto))){
                    listaConceptos.Add(taxonomia.ConceptosPorId[estructura.IdConcepto]);
                }
            }
            if (estructura.SubEstructuras != null) { 
                foreach(var subEstructura in estructura.SubEstructuras){
                    AgregarNodoEstructura(listaConceptos, subEstructura, taxonomia);
                }
            }
        }

        /// <summary>
        /// Valida si un correo es valido
        /// </summary>
        /// <param name="correo">Nombre del correo</param>
        /// <returns>Si el correo es valido</returns>
        public static bool esCorreoValido(string correo)
        {
            string pattern = @"^[a-z][a-z|0-9|]*([_][a-z|0-9]+)*([.][a-z|0-9]+([_][a-z|0-9]+)*)?@[a-z][a-z|0-9|]*\.([a-z][a-z|0-9]*(\.[a-z][a-z|0-9]*)?)$";
            Match match = Regex.Match(correo.Trim(), pattern, RegexOptions.IgnoreCase);

            if (match.Success)
                return true;
            else
                return false;
        }

        /// <summary>
        /// Calcula el hash en MD5
        /// </summary>
        /// <param name="input">Entrada de la cadena a generar el hash</param>
        /// <returns>Hash unica de una cadena</returns>
        public static string CalcularHash(string input)
        {
            MD5 md5 = System.Security.Cryptography.MD5.Create();
            byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(input);
            byte[] hash = md5.ComputeHash(inputBytes);

            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < hash.Length; i++)
            {
                sb.Append(hash[i].ToString("X2"));
            }
            return sb.ToString();
        }


        /// <summary>
        /// Genera una estructura indizada por concepto de los cubos negados y dimensiones donde el concepto participa
        /// </summary>
        /// <param name="taxonomiaDto"></param>
        public static void GenerarIndiceHipercubosNegados(TaxonomiaDto taxonomiaDto)
        {
            taxonomiaDto.ConceptosHipercubosNegados = new Dictionary<String, IDictionary<String, IList<String>>>();
            foreach (var listaHiperCubos in taxonomiaDto.ListaHipercubos.Values)
            {
                foreach (var hiperCubo in listaHiperCubos)
                {
                    if (!hiperCubo.ArcRoleDeclaracion.Equals("http://xbrl.org/int/dim/arcrole/all"))
                    {
                        AgregarHipercuboNegado(taxonomiaDto.ConceptosHipercubosNegados, hiperCubo, taxonomiaDto);
                    }
                }
                
            }
        }

        /// <summary>
        /// Agrega los elementos primarios de un hipercubo negado junto con las combinaciones de dimensiones donde no es válido al diccionario
        /// enviado como parámetro
        /// </summary>
        /// <param name="conceptosNoHabilitados"></param>
        /// <param name="hiperCubo"></param>
        private static void AgregarHipercuboNegado(IDictionary<string, IDictionary<String, IList<String>>> conceptosNoHabilitados, HipercuboDto hiperCubo, TaxonomiaDto taxoDto)
        {
            //Obtener las columnas del hipercubo
            var dimensionesYMiembrosCubo = new Dictionary<String, IList<String>>();
            foreach (var idDimension in hiperCubo.Dimensiones)
            {
                dimensionesYMiembrosCubo[idDimension] = ObtenerListaMiembros(hiperCubo.EstructuraDimension[idDimension]);
            }
            foreach (var idElementoPrimario in hiperCubo.ElementosPrimarios)
            {
                if (taxoDto.ConceptosPorId.ContainsKey(idElementoPrimario))
                {
                    var conceptoPrimario = taxoDto.ConceptosPorId[idElementoPrimario];
                    if (!(conceptoPrimario.EsAbstracto ?? false) && !conceptosNoHabilitados.ContainsKey(idElementoPrimario))
                    {
                        conceptosNoHabilitados[idElementoPrimario] = dimensionesYMiembrosCubo;
                    }
                }
            }
        }


        private static List<string> ObtenerListaMiembros(IList<EstructuraFormatoDto> list)
        {
            var listaFinal = new List<String>();
            foreach (var est in list)
            {
                if (est.SubEstructuras != null)
                {
                    AgregarSubEstructuras(est.SubEstructuras, listaFinal);
                }
                listaFinal.Add(est.IdConcepto);
            }
            return listaFinal;
        }

        private static void AgregarSubEstructuras(IList<EstructuraFormatoDto> list, List<string> listaFinal)
        {
            foreach (var est in list)
            {
                if (est.SubEstructuras != null)
                {
                    AgregarSubEstructuras(est.SubEstructuras, listaFinal);
                }
                listaFinal.Add(est.IdConcepto);
            }
        }

        /// <summary>
        /// Verifica si el concepto existe en un hipercubo negado de la taxonmía
        /// </summary>
        /// <param name="concepto"></param>
        /// <param name="dimensiones"></param>
        /// <returns></returns>
        public static bool EsConceptoEnHipercuboNegado(ConceptoDto concepto, List<DimensionInfoDto> dimensiones, TaxonomiaDto taxonomia)
        {

            if (concepto != null && taxonomia != null && taxonomia.ConceptosHipercubosNegados != null && 
                taxonomia.ConceptosHipercubosNegados.ContainsKey(concepto.Id))
            {
                if (CoincidenDimensiones(taxonomia.ConceptosHipercubosNegados[concepto.Id],dimensiones))
                {
                    return true;
                }
            }
            return false;
        }
        /// <summary>
        /// verifica si las dimensiones enviadas como parámetros coinciden
        /// </summary>
        /// <param name="dimensionesDeshabilitadas"></param>
        /// <param name="contenidoColumna"></param>
        /// <returns></returns>
        private static bool CoincidenDimensiones(IDictionary<string, IList<string>> dimensionesDeshabilitadas, List<DimensionInfoDto> contenidoColumna)
        {
            if (contenidoColumna == null || dimensionesDeshabilitadas == null || dimensionesDeshabilitadas.Count == 0 || contenidoColumna.Count == 0)
            {
                return false;
            }
            var coincide = false;
           
            foreach (var dimInfo in contenidoColumna)
            {
                if (dimensionesDeshabilitadas.ContainsKey(dimInfo.IdDimension) && dimensionesDeshabilitadas[dimInfo.IdDimension].Contains(dimInfo.IdItemMiembro))
                {
                    coincide = true;
                    break;
                }
                if (!coincide)
                {
                    return false;
                }
            }
            return true;

        }

        public static string obtenerFechaTrimestre(int anioReportado, string trimestreReportado)
        {
            if (anioReportado != null && (trimestreReportado != null && trimestreReportado.Count() > 0))
            {
                //try
                //{
                var trimestreNumerico = trimestreReportado.Contains("D") ? Int32.Parse(trimestreReportado.ElementAt(0).ToString()) : Int32.Parse(trimestreReportado);
                var fechaTrimestre = new DateTime(anioReportado, trimestreNumerico * 3, 1);
                fechaTrimestre = fechaTrimestre.AddMonths(1).AddDays(-1);
                var fechaTrimestreEnvio = fechaTrimestre.ToString("yyyy-MM-dd");

                return fechaTrimestreEnvio;
                //}
                //catch (Exception ex)
                //{
                //    LogUtil.Error(ex);
                //    resultado = new ResultadoOperacionDto();
                //    resultado.Resultado = false;
                //    resultado.Mensaje = "Ocurrió un error general al Procesar Sobre XBRL:" + ex.Message;
                //    resultado.Excepcion = ex.StackTrace;
                //}
            } else
            {
                return null;
            }
        }
    }
}
