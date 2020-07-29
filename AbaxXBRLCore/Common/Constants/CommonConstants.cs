using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Constants
{
    /// <summary>
    /// Constantes comunes a todo el módulo.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class CommonConstants
    {
        /// <summary>
        /// Accion auditable para el login del sitio
        /// </summary>
        public const string SeparadorNombreCalificado = ":";
        /// <summary>
        /// Extensión de archivo zip
        /// </summary>
        public const string ExtensionZIP = ".zip";
        /// <summary>
        /// Extensión de archivo XBRL
        /// </summary>
        public const string ExtensionXBRL = ".xbrl";
        /// <summary>
        /// Extensión de archivo XML
        /// </summary>
        public const string ExtensionXML = ".xml";
        /// <summary>
        /// Siglas de lenguaje español
        /// </summary>
        public const string LenguajeEsp = "es";
        /// <summary>
        /// Diferentes representaciones de un valor verdadero
        /// </summary>
        public static string[] CADENAS_VERDADERAS = new String[]{"si","true","verdadero","1","yes"};
        /// <summary>
        /// Diferentes representaciones de un valor falso
        /// </summary>
        public static string[] CADENAS_FALSE = new String[] {"no","false","falso","0","no"};
        /// <summary>
        /// Cadena para exportar valores verdaderos
        /// </summary>
        public static string SI = "Si";
        /// <summary>
        /// Cadena para exportar valores falsos
        /// </summary>
        public static string NO = "No";

        /// <summary>
        /// Cadena para exportar valores falsos
        /// </summary>
        public static string BackupContainer = "xbrl-backup-container";

        /// <summary>
        /// Cadena para exportar valores falsos
        /// </summary>
        public static string AzureWebJobsStorage = "AzureWebJobsStorage";

        /// <summary>
        /// Subir version del documento instancia como archivo block blob storage de Azure
        /// </summary>
        public static string UploadToCloud = "uploadToCloud";

        private static SortedSet<String> SUFIJOS_VIEJAS_TAXONOMIAS = new SortedSet<String> {
            "_ccd_",
            "_cp_",
            "_deuda_",
            "_fibras_",
            "_ics_",
            "_sapib_",
            "_trac_",
            "rel_ev",
            "annext_",
            "_N_",
            "_NBIS_",
            "_NBIS1_",
            "_NBIS2_",
            "_NBIS3_",
            "_NBIS4_",
            "_NBIS5_",
            "_O_",
            "_H_",
            "_HBIS_",
            "_HBIS1_",
            "_HBIS2_",
            "_HBIS3_",
            "_HBIS4_",
            "_HBIS5_",
            "_L_",
            "_I_",
        };

        public static bool BuscarSufijoTaxonomia(string espacioNombres) {
            bool existeSufijo = false;

            foreach (string sufijo in SUFIJOS_VIEJAS_TAXONOMIAS)
            {
                if (espacioNombres.Contains(sufijo))
                {
                    existeSufijo = true;
                    break;
                }
            }

            return existeSufijo;
        }
    }
}
