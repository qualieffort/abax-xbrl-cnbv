using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;

namespace AbaxXBRL.Taxonomia
{
    /// <summary>
    /// Representa la información de los archivos importados por un documento XBRL, ya sea schemaRef, arcRoleRef, linkbaseRef o RoleRef
    /// </summary>
    public class ArchivoImportadoDocumento
    {
        /// <summary>
        /// Constructor predeterminado
        /// </summary>
        public ArchivoImportadoDocumento()
        {
        }
        /// <summary>
        /// Constructor para schema refs
        /// </summary>
        /// <param name="tipo"></param>
        /// <param name="href"></param>
        public ArchivoImportadoDocumento(int tipo,string href,String hrefOriginal,string role,string roleUri)
        {
            TipoArchivo = tipo;
            HRef = href;
            HRefOriginal = hrefOriginal;
            Role = role;
            RoleUri = roleUri;
        }

     
        /// <summary>
        /// Constante para representar al archivo importado del tipo schema ref
        /// </summary>
        public const int SCHEMA_REF = 1;
        /// <summary>
        /// Constante para representar al archivo importado del tipo linkbase ref
        /// </summary>
        public const int LINKBASE_REF = 2;
        /// <summary>
        /// Constante para representar al archivo importado del tipo role ref
        /// </summary>
        public const int ROLE_REF = 3;
        /// <summary>
        /// Constante para representar al archivo importado del tipo arc role ref
        /// </summary>
        public const int ARC_ROLE_REF = 4;

        /// <summary>
        /// Tipo de archivo que se importa en el documento (schema ref, role ref, arc role ref, linkbase)
        /// </summary>
        public int TipoArchivo { get; set; }
        /// <summary>
        /// Representa el atributo Href en la etiqueta de referencia
        /// </summary>
        public string HRef { get; set; }
        /// <summary>
        /// Representa el atributo de RoleURI en la etiqueta de referencia
        /// </summary>
        public string RoleUri { get; set; }
        /// <summary>
        /// Representa el atributo de role en la etiqueta de referencia
        /// </summary>
        public string Role { get; set; }
        /// <summary>
        /// Valor original del schema ref leído del documento de instancia
        /// </summary>
        public string HRefOriginal { get; set; }
        /// <summary>
        /// Compara si es la misma referencia
        /// </summary>
        /// <param name="comparar">Archivo a comparar</param>
        /// <returns>True si se trata del mismo archivo importado</returns>
        public Boolean EsMismoArchivo(ArchivoImportadoDocumento comparar)
        {
            if (comparar == null) return false;


            if (HRef == null || !HRef.Equals(comparar.HRef))
            {
                return false;
            }

            if (TipoArchivo != SCHEMA_REF)
            {

                if (String.IsNullOrEmpty(Role) && !String.IsNullOrEmpty(comparar.Role))
                {
                    return false;
                }
                if (Role != null && !Role.Equals(comparar.Role))
                {
                    return false;
                }

                if (String.IsNullOrEmpty(RoleUri) && !String.IsNullOrEmpty(comparar.RoleUri))
                {
                    return false;
                }
                if (RoleUri != null && !RoleUri.Equals(comparar.RoleUri))
                {
                    return false;
                }
            }

            return true;

        }
    }
}
