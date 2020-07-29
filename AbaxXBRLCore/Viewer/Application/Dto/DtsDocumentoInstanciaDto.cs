using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// DTO que representa el conjunto de esquemas y linkbases importados en un documento de instancia
    /// </summary>
    public class DtsDocumentoInstanciaDto
    {
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
        /// Indica el tipo de archivo importado en el documento
        /// </summary>
        public int Tipo { get; set; }
        /// <summary>
        /// Ruta del archivo importado
        /// </summary>
        public string HRef { get; set; }
        /// <summary>
        /// RoleUri del arco o rol importado
        /// </summary>
        public string RoleUri { get; set; }
        /// <summary>
        /// Rol con el que se importa un archivo de linkbases
        /// </summary>
        public string Role { get; set; }
        /// <summary>
        /// Compara los atributos para evaluar la equivalencia del DTS
        /// </summary>
        /// <param name="comparar"></param>
        /// <returns></returns>
        public override Boolean Equals(Object comparar)
        {
            if (!(comparar is DtsDocumentoInstanciaDto))
            {
                return false;
            }
            var dtsComparar = comparar as DtsDocumentoInstanciaDto;
            
            if (HRef == null || !HRef.Equals(dtsComparar.HRef))
            {
                return false;
            }
            
            if (Tipo != SCHEMA_REF)
            {
                
                if (String.IsNullOrEmpty(Role) && !String.IsNullOrEmpty(dtsComparar.Role))
                {
                    return false;
                }
                if (Role != null && !Role.Equals(dtsComparar.Role))
                {
                    return false;
                }

                if (String.IsNullOrEmpty(RoleUri) && !String.IsNullOrEmpty(dtsComparar.RoleUri))
                {
                    return false;
                }
                if (RoleUri != null && !RoleUri.Equals(dtsComparar.RoleUri))
                {
                    return false;
                }
            }

            return true;
        }
        
    }
}
