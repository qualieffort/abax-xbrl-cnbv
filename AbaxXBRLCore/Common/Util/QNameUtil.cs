using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Util
{
    /// <summary>
    /// Clase de utilerias para parsear y almacenar información de QNames
    /// </summary>
    public class QNameUtil
    {
        public String Prefix { get; set; }

        public String NamespaceUri {get; set;}

        public String LocalName { get; set; }

        public String GetFullName() {
            return NamespaceUri + ":" + LocalName;
        }
        /// <summary>
        /// Interpreta una cadena con un qname completo y lo separa en sus componentes regresando un objeto nuevo
        /// </summary>
        /// <param name="qnameString">Cadena de entrada</param>
        /// <returns>Qname creado</returns>
        public static QNameUtil Parse(String qnameString) {
            if (qnameString == null)
            {
                return null;
            }

            int indexSeparador = qnameString.LastIndexOf(":");
            QNameUtil qname = null;

            String name = null;
            String names = null;
            if (indexSeparador < 0)
            {
                name = qnameString;
            }
            else
            {
                names = qnameString.Substring(0, indexSeparador);
                name = qnameString.Substring(indexSeparador + 1);
            }

            if (name != null)
            {
                qname = new QNameUtil();
                qname.NamespaceUri = names;
                qname.LocalName = name;
            }

            return qname;
        }

        public javax.xml.@namespace.QName GetQName()
        {
            return new javax.xml.@namespace.QName(NamespaceUri, LocalName, Prefix);
        }
    }
}
