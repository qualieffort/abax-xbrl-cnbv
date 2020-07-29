using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Representa un elemento <code>&lt;arcroleType&gt;</code> de la taxonomía XBRL. El elemento <code>arcroleType</code> describe un tipo de arco personalizado 
    /// al declarar el valor del rol del arco, los elementos que pueden utilizar este arco, los tipos de ciclos que son permitidos para una red de relaciones y
    /// al darle una definición legible para humanos.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class ArcRoleType : ElementoXBRL
    {
        /// <summary>
        /// La definición legible para humanos del tipo de rol de arco.
        /// </summary>
        public string Definicion { get; set; }

        /// <summary>
        /// La lista de los elementos que pueden usar el tipo de rol de arco.
        /// </summary>
        public XmlQualifiedName[] UsadoEn { get; set; }

        /// <summary>
        /// El URI único que identifica a este tipo de rol de arco.
        /// </summary>
        public Uri ArcoRolURI { get; set; }

        /// <summary>
        /// Indica el tipo de ciclos que pueden formarse utilizando este tipo de rol de arco.
        /// </summary>
        public string CiclosPermitidos { get; set; }

       

        /// <summary>
        /// El URI del archivo en donde se declaró este rol de arco en la taxonomía.
        /// </summary>
        public string UbicacionArchivo { get; set; }

        /// <summary>
        /// Compara si una definición de rol es igual a otra definición de rol por medio de su URI así como los elementos usedOn
        /// </summary>
        /// <param name="role">el rol contra el que se comparará</param>
        /// <returns><code>true</code> si el URI de ambos roles es el mismo y sus elementos usedOn. <code>false</code> en cualquier otro caso.</returns>
        public bool Equals(ArcRoleType arcrole)
        {
            bool resultado = true;

            if (arcrole.ArcoRolURI.Equals(arcrole.ArcoRolURI))
            {
                if (arcrole.UsadoEn != null && this.UsadoEn != null)
                {
                    if (arcrole.UsadoEn.Length == this.UsadoEn.Length)
                    {
                        foreach (XmlQualifiedName usadoEn in arcrole.UsadoEn)
                        {
                            bool encontrado = false;
                            foreach (XmlQualifiedName usedOn in this.UsadoEn)
                            {
                                if (usedOn.Equals(usadoEn))
                                {
                                    encontrado = true;
                                    break;
                                }
                            }
                            if (!encontrado)
                            {
                                resultado = false;
                                break;
                            }
                        }
                    }
                    else
                    {
                        resultado = false;
                    }
                }
                else if ((arcrole.UsadoEn != null && this.UsadoEn == null) || (arcrole.UsadoEn == null && this.UsadoEn != null))
                {
                    resultado = false;
                }
                if (!arcrole.CiclosPermitidos.Equals(this.CiclosPermitidos))
                {
                    resultado = false;
                }
            }
            else
            {
                resultado = false;
            }

            return resultado;
        }
    }
}
