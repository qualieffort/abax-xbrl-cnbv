using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRL.Constantes;
using System.Globalization;
using AbaxXBRLCore.Common.Util;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un Data Transfer Object el cual representa un hecho contenido en el documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class HechoDto
    {
        /// <summary>
        /// El identificador del concepto al cual pertenece este hecho.
        /// </summary>
        public string IdConcepto { get; set; }

        /// <summary>
        /// El identificador del hecho
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// El identificador del contexto al cual pertenece este hecho.
        /// </summary>
        public string IdContexto { get; set; }

        /// <summary>
        /// El identificador de la unidad a la cual pertenece este hecho.
        /// </summary>
        public string IdUnidad { get; set; }

        /// <summary>
        /// El valor del atributo precisión para el hecho.
        /// </summary>
        private string _precision = null;
        public String Precision
        {
            get { return _precision; }
            set
            {
                if (!String.IsNullOrEmpty(value))
                {
                    PrecisionEstablecida = true;
                    DecimalesEstablecidos = false;
                    _precision = value;
                }
            }
        }

        /// <summary>
        /// El valor del atributo decimales para el hecho.
        /// </summary>
        private string _decimales = null;
        public string Decimales
        {
            get { return _decimales; }
            set
            {
                if (!String.IsNullOrEmpty(value))
                {
                    PrecisionEstablecida = false;
                    DecimalesEstablecidos = true;
                    _decimales = value;
                }
            }
        }


        /// <summary>
        /// Indica si el valor establecido para el redondeo es Decimals
        /// </summary>
        public bool DecimalesEstablecidos { get; set; }

        /// <summary>
        /// Indica si el valor para el redondeo establecido es Precision
        /// </summary>
        public bool PrecisionEstablecida { get; set; }

        /// <summary>
        /// El tipo de hecho reportado (item o tuple)
        /// </summary>
        public int Tipo { get; set; }

        /// <summary>
        /// Indica si la precisión del valor es infinita.
        /// </summary>
        public bool EsPrecisionInfinita { get; set; }

        /// <summary>
        /// Indica si los decimales del valor son infinitos.
        /// </summary>
        public bool EsDecimalesInfinitos { get; set; }

        /// <summary>
        /// Contiene el valor del hecho reportado en el documento instancia
        /// </summary>
        public string Valor { get; set; }

        /// <summary>
        /// Contiene el valor del hecho en su representación numérica en caso de que este hecho contenga un número.
        /// </summary>
        public decimal ValorNumerico { get; set; }

        /// <summary>
        /// Contiene el valor numérico del denominador del hecho de tipo FractionItemType
        /// </summary>
        public decimal ValorDenominador { get; set; }

        /// <summary>
        /// Contiene el valor numérico del numerador del hecho de tipo FractionItemType
        /// </summary>
        public decimal ValorNumerador { get; set; }

        /// <summary>
        /// Los hechos que contiene este hecho de tipo tupla.
        /// </summary>
        public IList<String> Hechos { get; set; }

        /// <summary>
        /// La lista de identificadores de otros hechos contra los cuales se encuentra duplicado este hecho.
        /// </summary>
        public IList<string> DuplicadoCon { get; set; }

        /// <summary>
        /// Indica que este hecho es de tipo numérico.
        /// </summary>
        public bool EsNumerico { get; set; }

        /// <summary>
        /// Indica que este hecho es de tipo fracción
        /// </summary>
        public bool EsFraccion { get; set; }

        /// <summary>
        /// Indica que este hecho es de tipo tupla.
        /// </summary>
        public bool EsTupla { get; set; }

        /// <summary>
        /// Indica que el valor del hecho es nil.
        /// </summary>
        public bool EsValorNil { get; set; }

        /// <summary>
        /// Indica que este hecho no es de tipo numérico.
        /// </summary>
        public bool NoEsNumerico { get; set; }

        /// <summary>
        /// Contiene las notas la pie relacionadas con este hecho organizadas por idioma.
        /// </summary>
        public IDictionary<string, IList<NotaAlPieDto>> NotasAlPie { get; set; }

        /// <summary>
        /// Tipo de dato del elemento declarado en la taxonomía
        /// </summary>
        public String TipoDato { get; set; }

        /// <summary>
        /// Nombre del concpeto definido en su esquema
        /// </summary>
        public String NombreConcepto { get; set; }

        /// <summary>
        /// Espacio de nombres del esquema donde se define el concepto
        /// </summary>
        public String EspacioNombres { get; set; }

        /// <summary>
        /// Referencia a la tupla padre de este hecho
        /// </summary>
        public HechoDto TuplaPadre { get; set; }

        /// <summary>
        /// Uso interno para guardar en base de datos
        /// </summary>
        public long Consecutivo { get; set; }

        /// <summary>
        /// Uso interno para asociar tuplas
        /// </summary>
        public long ConsecutivoPadre { get; set; }

        /// <summary>
        /// Tipo de dato Base de XBRL utilizado para el hecho
        /// </summary>
        public string TipoDatoXbrl { get; set; }
        /// <summary>
        /// Bandera que indica si el hecho camio de valor contra otra versión.
        /// </summary>
        public bool CambioValorComparador { get; set; }

        public decimal ValorRedondeado
        {
            get
            {
                try 
                {
                    if (!this._valorRedondeadoCalculado && this.EsNumerico)
                    {
                        this.InferirPrecisionYDecimales();
                        this._valorRedondeado = this.ObtenerValorRedondeado(this.Valor);
                        this._valorRedondeadoCalculado = true;
                    }
                    return this._valorRedondeado;
                }
                catch(Exception e)
                {
                    LogUtil.Error(e);
                    return 0;
                }
            }
        }

        /// <summary>
        /// Contiene el valor numérico del hecho
        /// </summary>
        private decimal _valorNumerico;

        /// <summary>
        /// Contiene el valor redondeado del hecho utilizado para el cálculo
        /// </summary>
        private decimal _valorRedondeado;

        /// <summary>
        /// Indica si ya se ha calculado el valor redondeado del hecho con la precisión y decimales inferidos
        /// </summary>
        private bool _valorRedondeadoCalculado;

        /// <summary>
        /// El valor inferido o calculado de decimales
        /// </summary>
        private int? _valorCalculadoDecimales;

        /// <summary>
        /// El valor inferido o calculado de precisión
        /// </summary>
        private int? _valorCalculadoPrecision;

        /// <summary>
        /// Calcula el valor redondeado de una cadena
        /// de acuerdo a la configuración de precisión y valores decimales configurada para este hecho
        /// </summary>
        /// <param name="stringVal">Valor a redondear</param>
        /// <returns>Valor redondeado</returns>
        public decimal ObtenerValorRedondeado(string stringVal)
        {
            double val = 0;
            //if (Double.TryParse(stringVal, NumberStyles.Any, CultureInfo.InvariantCulture, out val))
            if (Double.TryParse(stringVal, NumberStyles.Any, new CultureInfo("en-US"), out val))
            {
                //var valorDecimal = new decimal(Double.Parse(stringVal, NumberStyles.Any, CultureInfo.InvariantCulture));
                var valorDecimal = new decimal(Double.Parse(stringVal, NumberStyles.Any, new CultureInfo("en-US")));
                return Redondear(valorDecimal);
            }
            return new decimal(val);
        }

        /// <summary>
        /// Infiere los valores de decimales y precision partiendo de la configuración de los atriburos del hecho
        /// </summary>
        public void InferirPrecisionYDecimales()
        {
            decimal valor = 0;
            int valorInt = 0;
            if (decimal.TryParse(this.Valor, out valor))
            {
                //this._valorNumerico = new decimal(Double.Parse(this.Valor, NumberStyles.Any, CultureInfo.InvariantCulture));
                this._valorNumerico = new decimal(Double.Parse(this.Valor, NumberStyles.Any, new CultureInfo("en-US")));
            }
            else
            {
                this._valorNumerico = 0;
            }
            if (int.TryParse(this.Decimales, out valorInt))
            {
                this._valorCalculadoDecimales = int.Parse(this.Decimales);
            }
            else
            {
                this._valorCalculadoDecimales = null;
            }
            if (int.TryParse(this.Precision, out valorInt))
            {
                this._valorCalculadoPrecision = int.Parse(this.Precision);
            }
            else
            {
                this._valorCalculadoPrecision = null;
            }
            if (this.EsPrecisionInfinita)
            {
                this.EsDecimalesInfinitos = true;
            }
            else if (this._valorCalculadoPrecision != null && this._valorCalculadoPrecision > 0)
            {
                if (this._valorNumerico == 0)
                {
                    this.EsDecimalesInfinitos = true;
                    this.EsPrecisionInfinita = true;
                }
                else
                {
                    this._valorCalculadoDecimales = this._valorCalculadoPrecision - (int)(Math.Floor(Math.Log10((double)Math.Abs(this._valorNumerico)))) - 1;
                }
            }
            else if (this._valorCalculadoDecimales != null && !this.EsDecimalesInfinitos && this._valorCalculadoDecimales > 0)
            {

                if (this._valorNumerico == 0)
                {
                    this.EsPrecisionInfinita = true;
                }

                string[] partes = this.DividirNumero(this.Valor);
                this._valorCalculadoPrecision = (partes[0].Length > 0 ? partes[0].Length : -1 * partes[1].Length) + this._valorCalculadoDecimales;

                if (partes[2] != null && partes[2].Length > 0)
                {
                    this._valorCalculadoPrecision += int.Parse(partes[2]);
                }

                if (this._valorCalculadoPrecision < 0)
                {
                    this._valorCalculadoPrecision = 0;
                }
            }
            else if (this.EsDecimalesInfinitos)
            {
                this.EsPrecisionInfinita = true;
            }
        }

        /// <summary>
        /// Parte la representación en cadena del número en dígitos enteros y decimales despreciando
        /// los ceros a la izquierda del dígito más significativo y los ceros  a la derecha después del decimal menos 
        /// significativo
        /// </summary>
        /// <param name="Valor"></param>
        /// <returns></returns>
        private string[] DividirNumero(string valorString)
        {
            //0 - digitos significativos enteros
            //1 - ceros antes del primero dígito significativo después del punto
            //2 - valor del exponente (si tiene)
            string[] partesFinales = new String[3];

            partesFinales[0] = ObtenerDigitosEnteriosSignificativos(valorString);
            partesFinales[1] = ObtenerCerosDecimalesAntesDelPrimerDigito(valorString);
            partesFinales[2] = ObtenerDigitosExponente(valorString);

            return partesFinales;
        }
        /// <summary>
        /// Obtiene la cadena de dígitos que están después de la letra de exponente E o e
        /// </summary>
        /// <param name="valorString">Valor numérico original</param>
        /// <returns>Cadena que representa el exponente del número</returns>
        private string ObtenerDigitosExponente(string valorString)
        {
            string exp = String.Empty;
            string[] partes = valorString.Split(new char[] { 'e', 'E' });
            if (partes.Length > 1)
            {
                exp = partes[1];
            }
            return exp;
        }

        /// <summary>
        /// Obtiene una cadena con los 0's encontrados deespués del punto decimal y hasta antes del primer dígito
        /// decimal significativo, si no hay dígito significativo entonces se retorna una cadena vacía
        /// </summary>
        /// <param name="valorString">Valor del número original</param>
        /// <returns>Cadena con los ceros después del punto antes del primer dígito significativo</returns>
        private string ObtenerCerosDecimalesAntesDelPrimerDigito(string valorString)
        {
            string cerosDecimale = String.Empty;
            string[] partes = valorString.Split(new char[] { 'e', 'E' });
            string[] enteros_decimales = partes[0].Split('.');
            if (enteros_decimales.Length > 1)
            {
                //Decimales, contar el número de ceros antes del primer dígito
                int indicePrimerDigitoSignificativo = -1;
                for (int i = 0; i < enteros_decimales[1].Length; i++)
                {
                    if (enteros_decimales[1][i] != '0')
                    {
                        indicePrimerDigitoSignificativo = i;
                        break;
                    }
                }
                if (indicePrimerDigitoSignificativo > -1)
                {
                    cerosDecimale = enteros_decimales[1].Substring(0, indicePrimerDigitoSignificativo);
                }
            }
            return cerosDecimale;
        }

        /// <summary>
        /// Obtiene la cadena normalizada que representa los dígitos enteros significativos
        /// a la derecha del punto decimal
        /// </summary>
        /// <param name="valorString">Valor del número original</param>
        /// <returns>Cadena con los dígitos enteros representativos</returns>
        private string ObtenerDigitosEnteriosSignificativos(string valorString)
        {
            try
            {
                string[] partes = valorString.Split(new char[] { 'e', 'E' });
                string[] enteros_decimales = partes[0].Split('.');
                enteros_decimales[0] = enteros_decimales[0].Replace("-", "").Replace("+", "");
                if (!String.IsNullOrEmpty(enteros_decimales[0]))
                {
                    enteros_decimales[0] = long.Parse(enteros_decimales[0]).ToString();
                    if (enteros_decimales[0].Equals("0"))
                    {
                        enteros_decimales[0] = String.Empty;
                    }
                }
                else
                {
                    enteros_decimales[0] = String.Empty;
                }
                return enteros_decimales[0];
            }
            catch (Exception e)
            {
                LogUtil.Error(new Dictionary<string, object>() 
                {
                    {"Exception", e},
                    {"ValorString", valorString},
                });
                return String.Empty;
            }
            
        }

        /// <summary>
        /// Redondea un número double de acuerdo a los parámetros de decimales
        /// y precisión especificados en el hecho
        /// </summary>
        /// <param name="valorDouble"></param>
        /// <returns></returns>
        public decimal Redondear(decimal valorDecimal)
        {
            if (EsDecimalesInfinitos)
            {
                return valorDecimal;
            }
            decimal roundedValue = valorDecimal;
            if (_valorCalculadoDecimales != null)
            {
                if (this._valorCalculadoDecimales >= 0)
                {
                    roundedValue = Math.Round(roundedValue, _valorCalculadoDecimales.Value);
                }
                else
                {
                    decimal powerOfTen = Convert.ToDecimal(Math.Pow(10.0, (double)(Math.Abs(_valorCalculadoDecimales.Value))));
                    roundedValue = roundedValue / powerOfTen;
                    roundedValue = Math.Round(roundedValue);
                    roundedValue = roundedValue * powerOfTen;
                }
            }
            return roundedValue;
        }
    }
}
