using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;
using AbaxXBRL.Taxonomia.Linkbases;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Representa un elemento <code>&lt;roleType/&gt;</code>. Este elemento contiene la definición de un tipo de rol personalizado. Este elemento describe el tipo de rol personalizado al definir el
    /// <code>&#64;roleUri</code> del tipo de rol y al declarar los elementos en los que el tol puede ser utilizado así como al proveer una definición legible para los humanos del tipo de rol.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class RoleType : ElementoXBRL
    {
        /// <summary>
        /// La definición legible para humanos
        /// </summary>
        public string Definicion { get; set; }

        /// <summary>
        /// Utilizado para identificar en que elementos pueden utilizar el rol.
        /// </summary>
        public XmlQualifiedName[] UsadoEn { get; set; }

        /// <summary>
        /// El URI que identifica al rol.
        /// </summary>
        public Uri RolURI { get; set; }

       
        // <summary>
        /// El URI del archivo en donde se declaró este rol en la taxonomía.
        /// </summary>
        public string UbicacionArchivo { get; set; }

        /// <summary>
        /// Los linkbases definidos para este rol en la taxonomía.
        /// </summary>
        public IDictionary<string, Linkbase> Linkbases;

        /// <summary>
        /// La taxonomía a la que pertenece este rol.
        /// </summary>
        public ITaxonomiaXBRL Taxonomia;

        /// <summary>
        /// Constructor por defecto de la clase <code>RolTipo</code>
        /// </summary>
        public RoleType()
        {
               Linkbases = new Dictionary<string,Linkbase>();
        }

        /// <summary>
        /// Construye un objeto <code>RolTipo</code>
        /// </summary>
        /// <param name="definicion">La definición del rol a crear</param>
        /// <param name="usadoEn">Indica que elementos pueden utilizar el rol</param>
        /// <param name="rolURI">Contiene el URI que identifica al rol</param>
        /// <param name="id">El identificador del rol a crear</param>
        public RoleType(string definicion, XmlQualifiedName[] usadoEn, Uri rolURI, string id)
        {
            Definicion = definicion;
            UsadoEn = usadoEn;
            RolURI = rolURI;
            Id = id;
        }

        /// <summary>
        /// Compara si una definición de rol es igual a otra definición de rol por medio de su URI así como los elementos usedOn
        /// </summary>
        /// <param name="role">el rol contra el que se comparará</param>
        /// <returns><code>true</code> si el URI de ambos roles es el mismo y sus elementos usedOn. <code>false</code> en cualquier otro caso.</returns>
        public bool Equals(RoleType role)
        {
            bool resultado = true;

            if (role.RolURI.Equals(role.RolURI))
            {
                if (role.UsadoEn != null && this.UsadoEn != null)
                {
                    if (role.UsadoEn.Length == this.UsadoEn.Length)
                    {
                        foreach (XmlQualifiedName usadoEn in role.UsadoEn)
                        {
                            bool encontrado = false;
                            foreach(XmlQualifiedName usedOn in this.UsadoEn)
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
                else if ((role.UsadoEn != null && this.UsadoEn == null) || (role.UsadoEn == null && this.UsadoEn != null))
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
        public override String ToString()
        {
            return Id + ":" + RolURI;
        }
    }
}
