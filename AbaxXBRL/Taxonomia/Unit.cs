using AbaxXBRL.Constantes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Representa un elemento <code>&lt;unit&gt;</code>. El elemento <code>&lt;unit&gt;</code> especifica las Unidades en las cuales un elemento numérico ha sido medido. El contenido del elemento <code>&lt;unit&gt;</code> DEBE ser ya sea un elemento simple de medida con un sólo elemento <code>&lt;measure&gt;</code> o una tasa de productos de unidades de medida, con la tasa representada por el elemento <code>&lt;divide&gt;</code> y el numerador y denominador ambos representados por una secuencia de elementos <code>&lt;measure&gt;</code>.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class Unit
    {
        /// <summary>
        /// Indica que la unidad sólo se compone de una medida
        /// </summary>
        public const int Medida = 1;

        /// <summary>
        /// Indica que la unidad se compone de un numerador y denominador
        /// </summary>
        public const int Divisoria = 2;

        /// <summary>
        /// El identificador único de la unidad dentro del documento instancia.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Contiene el conjunto de medidas utilizadas por esta Unidad.
        /// </summary>
        public IList<Measure> Medidas { get; set; }

        /// <summary>
        /// El identificador del tipo de unidad
        /// </summary>
        public int Tipo { set; get; }

        /// <summary>
        /// El conjunto de medidas que constituyen el numerador de la unidad.
        /// </summary>
        public IList<Measure> Numerador { get; set; }

        /// <summary>
        /// El conjunto de medidas que constituyen el denominador de la unidad.
        /// </summary>
        public IList<Measure> Denominador { get; set; }
        /// <summary>
        /// Espacio de nombres para la creación del elemento en XML
        /// </summary>
        public const String XmlNamespace = EspacioNombresConstantes.InstanceNamespace;
        /// <summary>
        /// Nombre local para la creación del elemento XML
        /// </summary>
        public const String XmlLocalName = EtiquetasXBRLConstantes.Unit;

        /// <summary>
        /// Agrega una nueva medida a la lista de medidas
        /// </summary>
        /// <param name="med"></param>
        public void AgregarMedida(Measure med)
        {
            if (med == null) return;
            if(Medidas == null)
            {
                Medidas = new List<Measure>();
            }
            Medidas.Add(med);
        }
        /// <summary>
        /// Agrega una nueva medida al numerador de la unidad
        /// </summary>
        /// <param name="medNum"></param>
        public void AgregarNumerador(Measure medNum)
        {
            if (medNum == null) return;
            if (Numerador == null)
            {
                Numerador = new List<Measure>();
            }
            Numerador.Add(medNum);
        }
        /// <summary>
        /// Agrega una nueva medida al denominador de la unidad
        /// </summary>
        /// <param name="medDen"></param>
        public void AgregarDenominador(Measure medDen)
        {
            if (medDen == null) return;
            if (Denominador == null)
            {
                Denominador = new List<Measure>();
            }
            Denominador.Add(medDen);
        }

        /// <summary>
        /// Verifica si esta unidad es estructuralmente igual o idéntica a la unidad a comparar
        /// </summary>
        /// <param name="comparar">Unidad a comparar</param>
        /// <returns>True si es idéntica o estructuralmente igual, false en otro caso</returns>
        public Boolean StructureEquals(Unit comparar)
        {
            if (comparar == null) return false;
            if (this == comparar) return true;
            if (this.Id != null && comparar.Id != null && this.Id.Equals(comparar.Id))
            {
                return true;
            }
            if (Tipo != comparar.Tipo)
            {
                return false;
            }
            //Si es medida comparar todos los elementos measure
            if (Tipo == Medida)
            {
                //Los elementos pueden estar en desorden
                if(!MedidasEquivalentes(Medidas,comparar.Medidas)){
                    return false;
                }
            }
            //Si es una división comparar elementos numerador y denominador
            if(Tipo == Divisoria){
                if (!MedidasEquivalentes(Numerador, comparar.Numerador))
                {
                    return false;
                }
                if (!MedidasEquivalentes(Denominador, comparar.Denominador))
                {
                    return false;
                }
            }
            return true;
        }
        /// <summary>
        /// Verifica si la lista de medidas orignales son equivalentes a las medidas a comparar
        /// según la especificación sección 4.10 se pueden tener los elementos en desorden siempre y cuando
        /// cada elemento tenga un equivalente en la lista a comparar
        /// </summary>
        /// <param name="MedidasOrigen">Lista de medidas origen</param>
        /// <param name="MedidasComparar">Lista de medidas a comparar</param>
        /// <returns>True si son equivalentes, false en otro caso</returns>
        private bool MedidasEquivalentes(IList<Measure> MedidasOrigen, IList<Measure> MedidasComparar)
        {
            if (MedidasOrigen == null && MedidasComparar == null) return true;
            if ((MedidasOrigen != null & MedidasComparar == null) || (MedidasOrigen == null & MedidasComparar != null)) return false;
            if (MedidasOrigen == MedidasComparar) return true;

            if (MedidasOrigen.Count != MedidasComparar.Count)
            {
                return false;
            }
            IList<Measure> medidasCompararFinales = new List<Measure>(MedidasComparar);
            Measure medidaEncontrada = null;

            foreach (Measure medidaOrigen in MedidasOrigen)
            {
                medidaEncontrada = null;
                foreach (Measure medidaComparar in medidasCompararFinales)
                {
                    if (medidaOrigen.Equals(medidaComparar))
                    {
                        medidaEncontrada = medidaComparar;
                    }
                }
                if (medidaEncontrada == null)
                {
                    return false;
                }
                medidasCompararFinales.Remove(medidaEncontrada);
            }
            return true;
        }
    }
}
