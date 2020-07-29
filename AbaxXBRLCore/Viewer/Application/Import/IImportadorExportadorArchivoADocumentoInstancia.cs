using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Import
{
    /// <summary>
    /// Interfaz que define la funcionalidad que deben de implementar la clases que realizan la importación
    /// de datos de un archivo de excel o word a un documento de instancia en su representación de modelo genérico en DTO
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public interface IImportadorExportadorArchivoADocumentoInstancia
    {
        /// <summary>
        /// Realiza la lectura de los datos del archivo excel e intenta colocar cada dato leído
        /// en el documento de instancia enviado como parámetro.
        /// </summary>
        /// <param name="archivoEntrada">Archivo a leer</param>
        /// <param name="instancia">Documento de instancia a actualizar</param>
        /// <param name="conceptosDescartar">Diccionario con los conceptos a descartar.</param>
        /// <param name="hojasDescartar">Lista con el nombre de las hojas a eliminar.</param>
        /// <returns>Objeto de resultado con el resumen de la importación</returns>
        ResultadoOperacionDto ImportarDatosExcel(Stream archivoEntrada, DocumentoInstanciaXbrlDto instancia, IDictionary<string, bool> conceptosDescartar = null, IList<string> hojasDescartar = null);
        /// <summary>
        /// Realiza la importación de un archivo de notas en formato WORD y las coloca en el documento de instancia, en base
        /// a la fecha enviada como parámetro
        /// </summary>
        /// <param name="archivoEntrada">Archivo de Word con las notas</param>
        /// <param name="instancia">Documento de instancia a actualizar</param>
        /// <returns>Objeto de resultado con el resumen de la importación</returns>
        ResultadoOperacionDto ImportarNotasWord(Stream archivoEntrada, DocumentoInstanciaXbrlDto instancia);

        /// <summary>
        /// Crea un archivo de Excel en base a los datos del documento de instancia enviado como parámetro
        /// </summary>
        /// <param name="instancia">Datos de origen del archivo</param>
        /// <returns>Resultado de la operación con un arreglo de bytes con el archivo en la información extra</returns>
        ResultadoOperacionDto ExportarDocumentoExcel(DocumentoInstanciaXbrlDto instancia, String idioma, TaxonomiaDto taxonomia = null, IDictionary<string, bool> conceptosDescartar = null, IList<string> hojasDescartar = null);
        /// <summary>
        /// Crea un archivo de Word en base a los datos del documento de instancia enviado como parámetro
        /// tomando el cuenta el archivo de plantilla de word para exportación de la taxonomía
        /// </summary>
        /// <param name="instancia">Datos de origen para el reporte</param>
        /// <param name="claveIdioma">Clvae del idioma en el que se descargará el documento.</param>
        /// <returns>Resultado de la operación un arreglo de bytes con el archivo word en formato open document</returns>
        ResultadoOperacionDto ExportarDocumentoWord(DocumentoInstanciaXbrlDto instancia, string claveIdioma);

        /// <summary>
        /// Crea un archivo en formato PDF a partir de los datos del documento de instancia, tomando en cuenta
        /// el archivo de plantilla de word para exportación de la taxonomía
        /// </summary>
        /// <param name="instancia">Datos de origen para el reporte</param>
        /// <param name="claveIdioma">Clvae del idioma en el que se descargará el documento.</param>
        /// <returns>Resultado de la operación un arreglo de bytes con el archivo PDF en formato open document</returns>
        ResultadoOperacionDto ExportarDocumentoPdf(DocumentoInstanciaXbrlDto instancia, string claveIdioma);
        /// <summary>
        /// Crea un archivo en formato HTML a partir de los datos del documento de instancia, tomando en cuenta
        /// el archivo de plantilla de word para exportación de la taxonomía
        /// </summary>
        /// <param name="instancia">Datos de origen para el reporte</param>
        /// <param name="claveIdioma">Clvae del idioma en el que se descargará el documento.</param>
        /// <returns>Resultado de la operación un arreglo de bytes con el archivo PDF en formato open document</returns>
        ResultadoOperacionDto ExportarDocumentoHtml(DocumentoInstanciaXbrlDto instancia, string claveIdioma);

        /// <summary>
        /// Obtiene la plantilla en word para importar información de hechos en un documento instancia
        /// </summary>
        /// <param name="string">Espacio de nombres principal de la taxonomía</param>
        /// <returns>Resultado de la operacion con un MemoryStream de la plantilla en la informacion extra</returns>
        ResultadoOperacionDto ObtenerPlantillaWord(string espacioNombresPrincipal);

        /// <summary>
        /// Obtiene la plantilla en Excel para importar información de hechos en un documento instancia
        /// </summary>
        /// <param name="espacioNombresPrincipal">Espacio de nombres principal de la taxonomía</param>
        /// <param name="idioma">Idioma de las etiquetas deseadas en la plantilla</param>
        /// <param name="taxonomia">Taxonomía a utilizar para generar las etiquetas</param>
        /// <returns>Resultado de la operacion con un MemoryStream de la plantilla en la informacion extra</returns>
        ResultadoOperacionDto ObtenerPlantillaExcel(string espacioNombresPrincipal, String idioma, TaxonomiaDto taxonomia, IDictionary<string, bool> conceptosDescartar = null, IList<string> hojasDescartar = null);
        
    }
}
