using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Definición del servicio de negocio para el almacenamiento del documento de instancia XBRL de forma persistente
    /// </summary>
    public interface IAlmacenarDocumentoInstanciaService
    {
        /// <summary>
        /// Almacena el contenido de un documento de instancia de forma persistente en una o más bases de datos
        /// </summary>
        /// <param name="archivoXBRL">Archivo XBRL con el documento de instancia</param>
        /// <param name="rutaCompletaArchivo">Ruta temporal física completa del archivo de instancia</param>
        /// <param name="nombreArchivo">Nombre original del archivo a almacenar</param>
        /// <param name="parametros">Parametros adicionales para guardar el documento</param>
        /// <returns>Resultado de la operación de almacenamiento</returns>
        ResultadoOperacionDto GuardarDocumentoInstanciaXBRL(Stream archivoXBRL,String rutaCompletaArchivo, String nombreArchivo, IDictionary<string, string> parametros);
        /// <summary>
        /// Obtiene las bitácoras de versión de documento que estén pendientes por procesar
        /// </summary>
        /// <returns>Resultado de la operación, la información extra contiene la lista de bitácoras de versión de documento pendientes</returns>
        ResultadoOperacionDto ObtenerBitacorasVersionDocumentoPendientes();
        /// <summary>
        /// Actualiza un registro de bitácora versión documento
        /// </summary>
        /// <param name="bitacora">Registro a actualizar</param>
        void ActualizarBitacoraVersionDocumento(BitacoraVersionDocumento bitacora);
        /// <summary>
        /// Retorna un listado con todas las distribuciones existentes para el documento de instancia indicado.
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento de instancia.</param>
        /// <returns>Lista de identificadores de distribuciones.</returns>
        IList<long> ObtenIdsDistribuciones(long idDocumentoInstancia);
        /// <summary>
        /// Actualiza el estado de una distribución.
        /// </summary>
        /// <param name="idBitacoraDistribucionDocumento">Identificador de la distribución.</param>
        /// <param name="estatus">Nuevo estado</param>
        void ActualizaEstadoDistribucion(long idBitacoraDistribucionDocumento, int estatus);
        /// <summary>
        /// Retorna el identificador y la versión de la última distribución del documento.
        /// </summary>
        /// <param name="espacioNombresPrincipal">Espacio de nombres principal de la taxonomía</param>
        /// <param name="claveEmisora">Clave de la emisora.</param>
        /// <returns>Diccionario con el identificador del documento y la versión</returns>
        IDictionary<long, int> ObtenUltimaDistribucionDocumento(String espacioNombresPrincipal, String claveEmisora);
        /// <summary>
        /// Obtiene las firmas de un documento XBRL Sobre
        /// </summary>
        /// <param name="archivoXBRL">Archivo XBRL con el documento de instancia</param>
        /// <param name="rutaCompletaArchivo">Ruta temporal física completa del archivo de instancia</param>
        /// <param name="nombreArchivo">Nombre original del archivo a almacenar</param>
        /// <returns>Resultado de la operación de almacenamiento</returns>
        ResultadoOperacionDto ObtenerFirmasXBRLSobre(Stream archivoXBRL, String rutaCompletaArchivo, String nombreArchivo);
        /// </summary>
        /// <param name="archivoXBRL">Archivo XBRL con el documento de instancia</param>
        /// <param name="rutaCompletaArchivo">Ruta temporal física completa del archivo de instancia</param>
        /// <param name="nombreArchivo">Nombre original del archivo a almacenar</param>
        /// <returns>Resultado de la operación de almacenamiento</returns>
        ResultadoOperacionDto ObtenerPathTemporalXBRLAdjunto(ResultadoRecepcionSobreXBRLDTO sobreDto);

    }
}
