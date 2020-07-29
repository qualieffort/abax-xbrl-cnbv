using AbaxXBRLCore.Common.Cache;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.XPE.Common;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.XPE
{
    /// <summary>
    /// Definición de la interfaz que debe de cumplir la implementación del servicio que sirve para ejecutar
    /// las operaciones que realiza el procesador de XBRL XPE
    /// 
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public interface XPEService
    {
        
        /// <summary>
        /// Asigna un valor de propiedad del procesador
        /// </summary>
        /// <param name="prop">Nombre de la propiedad</param>
        /// <param name="value">Valor</param>
        void SetProperty(String prop, String value);

        /// <summary>
        /// Asigna una característica del procesador
        /// </summary>
        /// <param name="feat">Nombre de la característica</param>
        /// <param name="value">Valor</param>
        void SetFeature(String feat, Boolean value);

        /// <summary>
        /// Asigna el valor del directorio raíz del procesador, necesario para encontrar los
        /// archivos de configuración y personalización
        /// </summary>
        /// <param name="coreRoot">Ruta de la carpeta de configuración</param>
        void SetCoreRoot(String coreRoot);

        /// <summary>
        /// Asigna el lenguaje para los mensajes de error
        /// </summary>
        /// <param name="lang">Asigna el lenguaje para los mensajes de error</param>
        void SetLang(String lang);
        
        /// <summary>
        /// Obtiene la lista de errores generados durante la inicialización
        /// </summary>
        /// <returns>La lista d erroes de inicialización, null si no existen erroes o no ha sido inicializado</returns>
        IList<ErrorCargaTaxonomiaDto> GetErroresInicializacion();

        /// <summary>
        /// Obtiene el lenguaje actualmente configurado para los mensajes de error
        /// </summary>
        /// <returns>Lenguaje actualmente configurado</returns>
        String GetLang();
        /// <summary>
        /// Obtiene la ubicación del directorio raíz de la configuración del procesador
        /// </summary>
        /// <returns>Ubicación de la carpeta de configuración</returns>
        String GetCoreRoot();


        /// <summary>
        /// Carga un archivo de instancia o taxonomia en base a la configuracion previamente inicializada, adicionalmente se indica
        /// si se desean ejecutar las validaciones de calculo y de formulas durante la carga y 
        /// se envia el objeto de estadisticas de carga a llenar
        /// </summary>
        /// <param name="fileUrl">URL del archivo a cargar</param>
        /// <param name="cacheTaxonomia">Caché de taxonomías preprocesadas en DTO para evitar volver a generar el modelo</param>
        /// <param name="errores">Lista de errores a popular</param>
        /// <param name="ejecutarValidaciones">Indica si se deben ejecutar las validaciones de cálculo y fórmulas</param>
        /// <param name="infoCarga">Informacion estadistica de la carga</param>
        /// <returns>Objeto cargado, null en caso de error fatal</returns>
        DocumentoInstanciaXbrlDto CargarDocumentoInstanciaXbrl(ConfiguracionCargaInstanciaDto configuracionCarga);
        /// <summary>
        /// Genera la representación en archivo XBRL de un documento de instancia XBRL
        /// Retorna el stream con la información binaria del archivo XBRL
        /// </summary>
        /// <param name="instancia">Documento de instancia a escribir</param>
        /// <param name="cacheTax">Objeto de caché de taxonomías</param>
        /// <returns>Contenido binario del archivo</returns>
        Stream GenerarDocumentoInstanciaXbrl(DocumentoInstanciaXbrlDto instancia, ICacheTaxonomiaXBRL cacheTax);

        /// <summary>
        /// Relaiza la carga de una Taxonomía XBRL en base a la configuración previamente inicializada
        /// </summary>
        /// <param name="fileUrl">URL de la taxonomía a cargar</param>
        /// <param name="errores">Lista de errores generados</param>
        /// <param name="mantenerEnCache">Indica si el objeto de taxonomía debería mantenerse en el caché o desecharse en cuanto se lea</param>
        /// <returns>Objeto de taxonomía en caso que sea posible la carga, null en caso de un error fatal durante la carga</returns>
        TaxonomiaDto CargarTaxonomiaXbrl(String fileUrl, IList<ErrorCargaTaxonomiaDto> errores, Boolean mantenerEnCache);
        /// <summary>
        /// Realiza la carga de una taxonomía XBRL en base a la configuración previamiente inicializada.
        /// Este método no consume la información estructural de la taxonomía, únicamente precarga los esquemas de la taxonomía.
        /// La taxonomía se agregará al caché web interno
        /// </summary>
        /// <param name="fileUrl">URL de la taxonomía a cargar</param>
        /// <param name="errores">Lista de errores generados</param>
        /// <returns>True si se precargaron los esquemas de la taxonomía exitosamente, false en caso de errores</returns>
        Boolean PreCargarTaxonomiaXbrl(String fileUrl, IList<ErrorCargaTaxonomiaDto> errores);
        
        /// <summary>
        /// Desactiva y apaga los servicios, cache y configuraciones del procesador
        /// </summary>
        void Shutdown();
                
        /// <summary>
        /// Verifica si la taxonomía definida por el punto de entrada de la URL 
        /// </summary>
        /// <param name="fileUrl">URL del punto de entrada de la taxonomía a verificar</param>
        /// <returns>true si la taxonomía existe precargada en el caché web interno, false en otro caso</returns>
        Boolean TaxonomiaEnCache(String fileUrl);

        /// <summary>
        /// Elimina la taxonomía precargada en el cache interno
        /// </summary>
        /// <param name="fileUrl">Indica la taxonomía a quitar del caché interno</param>
        /// <returns>True si se quitó la taxonomía, false si la taxonomía no existe en el caché</returns>
        Boolean QuitarTaxonomiaDeCache(String fileUrl);

        /// <summary>
        /// Genera un Documento instancia dto con un stream de entrada con un archivo XBRL.
        /// </summary>
        /// <param name="inputStream">Flujo de entrada con un archivo XBRL.</param>
        /// <param name="fileName">Nombre del archivo.</param>
        /// <returns>Dto con la información del documento de instancia XBRL.</returns>
        DocumentoInstanciaXbrlDto CargaInstanciaXBRLStreamFile(Stream inputStream, String fileName);
        /// <summary>
        /// Procesa un documento de instancia dentro de un archivo zip, extrae los archivos a un directorio
        /// temporal y procesa el archivo XBRL que haya dentro
        /// </summary>
        /// <param name="inputStream">Stream de ZIP de entrada</param>
        /// <returns>Documento de instancia cargado, null si no se puede cargar el documento</returns>
        DocumentoInstanciaXbrlDto CargaInstanciaXBRLFilePath(String filePath);
    }
}
