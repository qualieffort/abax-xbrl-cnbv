using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Constants
{
    /// <summary>
    /// Constantes de los módulos auditables
    /// </summary>
    public static class ConstantsModulo
    {
        /// <summary>
        /// Identificador del módulo de login del sitio
        /// </summary>
        public const long Login = 1;

        /// <summary>
        /// Identificador del módulo de Usuarios del sitio
        /// </summary>
        public const long Usuarios = 2;

        /// <summary>
        /// Identificador del módulo de Empresas del sitio
        /// </summary>
        public const long Empresa = 3;

        /// <summary>
        /// Identificador del módulo de Rol del sitio
        /// </summary>
        public const long Rol = 4;

        /// <summary>
        /// Identificador del módulo de Grupos del sitio
        /// </summary>
        public const long Grupos = 5;

        /// <summary>
        /// Identificador del módulo de Asignación de roles a usuario.
        /// </summary>
        public const long UsuarioRol = 6;

        /// <summary>
        /// identificador del módulo para la edición de documentos XBRL
        /// </summary>
        public const long EditorDocumentosXBRL = 7;
        /// <summary>
        /// Identificador del módulo para la validación bajo demanda de documentos XBRL
        /// </summary>
        public const long ServicioValidacionDocumentosXBRL = 8;
        /// <summary>
        /// Identificador del módulo para el almacenamiento y procesamiento bajo demanda de documentos XBRL
        /// </summary>
        public const long ServicioAlmacenamientoDocumentosXBRL = 9;
        /// <summary>
        /// Identificador del módulo de Tipo de Empresas del sitio
        /// </summary>
        public const long TipoEmpresa = 10;
        /// <summary>
        /// Identificador del módulo de Taxonomías Xbrl del sitio
        /// </summary>
        public const long TaxonomiaXbrl = 11;
        /// <summary>
        /// Identificador del módulo de administración de grupos de empresas
        /// </summary>
        public const long GrupoEmpresa = 12;
        /// <summary>
        /// Identificador del módulo de administración del catálogo con los parametros del sistema.
        /// </summary>
        public const long ParametrosSistema = 13;
        /// <summary>
        /// Identificador del módulo de administración de las listas de notificación.
        /// </summary>
        public const long ListasNotificacion = 14;
        /// <summary>
        /// Identificador del módulo de administración de las consultas especializadas.
        /// </summary>
        public const long ConsultasEspecializadas = 15;
    }
}
