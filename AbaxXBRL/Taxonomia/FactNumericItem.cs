using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Implementación de un hecho simple reportado en un documento instancia XBRL que corresponde a un concepto definido en la taxonomía cuyo grupo de sustitución es item y su tipo de dato deriva o es uno de los tipos de dato numéricos definidos por la especificación XBRL a excepción el tipo complejo fractionItemType.
    /// 
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class FactNumericItem : FactItem
    {

        public const string VALOR_INF = "INF";
        /// <summary>
        /// La unidad del elemento de tipo numérico
        /// </summary>
        public Unit Unidad { get; set; }

        /// <summary>
        /// El valor del atributo precision
        /// </summary>
        public string Precision { get; private set; }
        /// <summary>
        /// El valor del atributo decimals
        /// </summary>
        public string Decimales { get; private set; }
        /// <summary>
        /// La representación numérica del valor del hecho reportado
        /// </summary>
        public Decimal ValorNumerico { get; set; }
        /// <summary>
        /// Indica si el valor de la precisión del hecho es INF
        /// </summary>
        public Boolean EsPrecisionInfinita { get; set; }

        /// <summary>
        /// Valor numérico de la precision
        /// </summary>
        private int? _valorNumericoPrecision = null;
        /// <summary>
        /// Indica si el valor de los decimales del hecho es INF
        /// </summary>
        public Boolean EsDecimalesInfinitos { get; set; }
        /// <summary>
        /// Valor numérico de los decimales
        /// </summary>
        private int? _valorNumericoDecimales = null;
        /// <summary>
        /// Indica si ya fue calculado el valor redondeado
        /// </summary>
        private Boolean ValorRedondeadoCalculado = false;
        /// <summary>
        /// Valor redondeado interno
        /// </summary>
        private Decimal _ValorRedondeado = 0;
        /// <summary>
        /// Indica si el valor establecido es el valor de precision
        /// </summary>
        /// <returns></returns>
        public Boolean EsPrecisionEstablecida()
        {
            return !String.IsNullOrEmpty(Precision);
        }
        /// <summary>
        /// Campo de solo lecutra para los valores numéricos inferidos
        /// </summary>
        public int? PrecisionInferida {
            get { return _valorNumericoPrecision; }
        }
        /// <summary>
        /// Campo de solo lectura para los valores numéricos inferidos
        /// </summary>
        public int? DecimalesInferidos
        {
            get { return _valorNumericoDecimales; }
        }
        /// <summary>
        /// Indica si el valor establecido es el valor de decimales
        /// </summary>
        /// <returns></returns>
        public Boolean EsDecimalesEstablecidos()
        {
            return !String.IsNullOrEmpty(Decimales);
        }
        
        public virtual String Valor
        {
            get { return _valor; }
            set { 
                _valor = value;
                ActualizarValorRedondeado();
            }
        }
        /// <summary>
        /// Asigna el valor de precision, nulo, cadena, vacía, un número o la palabla INF
        /// </summary>
        /// <param name="valoPrecision"></param>
        public void AsignarPrecision(string valoPrecision)
        {
            Precision = valoPrecision;
            Decimales = null;
            EsPrecisionInfinita = false;
            EsDecimalesInfinitos = false;
            _valorNumericoDecimales = null;
            _valorNumericoPrecision = null;
            
            ActualizarValorRedondeado();
        }
        /// <summary>
        /// Asigna el valor de decimales, nulo, cadena, vacía, un número o la palabla INF
        /// </summary>
        /// <param name="valoPrecision"></param>
        public void AsignarDecimales(string valorDecimales)
        {
            Precision = null;
            Decimales = valorDecimales;
            EsPrecisionInfinita = false;
            EsDecimalesInfinitos = false;
            _valorNumericoDecimales = null;
            _valorNumericoPrecision = null;
            
            ActualizarValorRedondeado();
        }

        /// <summary>
        /// Constructor de la clase <code>FactNumericItem</code>
        /// </summary>
        /// <param name="nodo">el Elemento XML que da origen a este <code>FactNumericItem</code></param>
        public FactNumericItem(XmlNode nodo) : base(nodo)
        {

        }
        /// <summary>
        /// Constructor predeterminado
        /// </summary>
        public FactNumericItem():base()
        {
            
        }
        /// <summary>
        /// Obtiene el valor efectivo, redondeado de el número representado por este hecho
        /// tomando en cuenta los decimales
        /// </summary>
        /// <returns></returns>
        public Decimal ValorRedondeado
        {
            get
            {
                if (!ValorRedondeadoCalculado)
                {
                    InferirPrecisionYDecimales();
                    _ValorRedondeado = ObtenerValorRedondeado(this.Valor);
                    ValorRedondeadoCalculado = true;
                }
                return _ValorRedondeado;
            }

        }
        /// <summary>
        /// Actualiza y obtiene el valor numérico en base al valor en cadena del número
        /// </summary>
        /// <returns></returns>
        public Decimal ActualizarValorRedondeado()
        {
            double val = 0;
            if (this.IsNilValue) {
                return new Decimal(0);
            }
            Double.TryParse(this.Valor, NumberStyles.Any, CultureInfo.InvariantCulture, out val);
            ValorNumerico = new decimal(val);
            if (VALOR_INF.Equals(Decimales))
            {
                EsDecimalesInfinitos = true;
            }
            else if (!String.IsNullOrEmpty(Decimales))
            {
                int valDec = 0;
                if(Int32.TryParse(Decimales,NumberStyles.Any,CultureInfo.InvariantCulture,out valDec))
                {
                    _valorNumericoDecimales = valDec;
                }
            }

            if (VALOR_INF.Equals(Precision))
            {
                EsPrecisionInfinita = true;
            }
            else if (!String.IsNullOrEmpty(Precision))
            {
                int valPrec = 0;
                if (Int32.TryParse(Precision, NumberStyles.Any, CultureInfo.InvariantCulture, out valPrec))
                {
                    _valorNumericoPrecision = valPrec;
                }
            }


            if(String.IsNullOrEmpty(Valor))
            {
                return 0;
            }
            
            InferirPrecisionYDecimales();
            _ValorRedondeado = ObtenerValorRedondeado(this.Valor);
            ValorRedondeadoCalculado = true;
            
            return _ValorRedondeado;
        }
        /// <summary>
        /// Infiere los valores de decimales y precision partiendo de la configuración
        /// de los atriburos del hecho
        /// </summary>
        public void InferirPrecisionYDecimales()
        {
            
            
            if (EsPrecisionInfinita)
            {
                EsDecimalesInfinitos = true;
            }
            else if (_valorNumericoPrecision!=null && _valorNumericoPrecision > 0)
            {
                //inferir decimales
                //para un valor numérico de cero, decimales se ponen como inf
                if (ValorNumerico == 0)
                {
                    EsDecimalesInfinitos = true;
                    EsPrecisionInfinita = true;
                }
                else
                {
                    _valorNumericoDecimales =
                    _valorNumericoPrecision -
                    ((int)
                    Math.Floor(
                    Math.Log10(Math.Abs((double)ValorNumerico))
                    )) - 1;
                }
                
            }
            else if (_valorNumericoDecimales != null && !EsDecimalesInfinitos && !String.IsNullOrEmpty(Decimales))
            {
                //inferir precision
                //para un valor numérico de cero,precision  se ponen como inf
                if (ValorNumerico == 0)
                {
                    EsPrecisionInfinita = true;
                }
                    
                    //Inferir precision
                    string[] partes = DividirNumero(Valor);
                    _valorNumericoPrecision = (partes[0].Length > 0 ? partes[0].Length : -1 * partes[1].Length) + _valorNumericoDecimales;
                    //si tiene exponente
                    if (!String.IsNullOrEmpty(partes[2]))
                    {
                        _valorNumericoPrecision += Int32.Parse(partes[2]);
                    }

                    if (_valorNumericoPrecision < 0)
                    {
                        _valorNumericoPrecision = 0;
                    }
            }else if(EsDecimalesInfinitos)
            {
                EsPrecisionInfinita = true;
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
        /// Obtiene la cadena normalizada que representa los dígitos enterps significativos
        /// a la derecha del punto decimal
        /// </summary>
        /// <param name="valorString">Valor del número original</param>
        /// <returns>Cadena con los dígitos enteros representativos</returns>
        private string ObtenerDigitosEnteriosSignificativos(string valorString)
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
        /// <summary>
        /// Calcula el valor redondeado de una cadena
        /// de acuerdo a la configuración de precisión y valores decimales configurada para este hecho
        /// </summary>
        /// <param name="stringVal">Valor a redondear</param>
        /// <returns>Valor redondeado</returns>
        public decimal ObtenerValorRedondeado(string stringVal)
        {
            var valorDecimal = new decimal( Double.Parse(stringVal,NumberStyles.Any,CultureInfo.InvariantCulture));
            return Redondear(valorDecimal);
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
            if (_valorNumericoDecimales != null)
            {
                if (_valorNumericoDecimales >= 0)
                {
                    roundedValue = Math.Round(roundedValue, _valorNumericoDecimales.Value);
                }
                else
                {
                    decimal powerOfTen = Convert.ToDecimal(Math.Pow(10.0, (double)(Math.Abs(_valorNumericoDecimales.Value))));
                    roundedValue = roundedValue / powerOfTen;
                    roundedValue = Math.Round(roundedValue);
                    roundedValue = roundedValue * powerOfTen;
                }
            }
           

            return roundedValue;
        
        }

        /// <summary>
        /// Verifica si el elemento tiene el contexto equivalente
        /// y su valor no numerico es igual
        /// </summary>
        /// <param name="comparar">Hecho a comparar</param>
        /// <returns>True si es value equals, false en otro caso</returns>
        public Boolean ValueEquals(FactNumericItem comparar)
        {
            return Contexto.StructureEquals(comparar.Contexto) && 
            ValorRedondeado == Redondear(comparar.ValorRedondeado);
        }
        /// <summary>
        /// Verifica si el elemento tiene una unidad equivalente al elemento a comparar
        /// </summary>
        /// <param name="comparar">Hecho a comparar</param>
        /// <returns>True si es unit equals, false en otro caso</returns>
        public Boolean UnitEquals(FactNumericItem comparar)
        {
            return Unidad.StructureEquals(comparar.Unidad);
        }
    }
}
