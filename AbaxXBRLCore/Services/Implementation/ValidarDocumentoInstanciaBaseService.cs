using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Clase base para las implementaciones del servicio de validación de documentos de instancia
    /// </summary>
    public  abstract class ValidarDocumentoInstanciaBaseService : IValidarDocumentoInstanciaService
    {
        /// <summary>
        /// Nombre del parámetro que contiene le identificador único de la empresa que envía la información
        /// </summary>
        public const String PARAM_ID_EMPRESA = "idEmpresa";
        public abstract ResultadoOperacionDto ValidarDocumentoInstanciaXBRL(Stream archivo, String rutaAbsolutaArchivo, String nombreArchivo, IDictionary<string, string> parametros);

        /// <summary>
        /// Agrega un nuevo error a la lista de errores del objeto de resultado
        /// </summary>
        /// <param name="resultado">Objeto de resultado al cuál se agrega el error</param>
        /// <param name="codigo">Código opcional del error</param>
        /// <param name="idContexto">Identificador del contexto donde se presenta el error</param>
        /// <param name="idHecho">Identificador del hecho donde se presenta el error</param>
        /// <param name="mensaje">Mensaje de error</param>
        protected void AgregarErrorFatal(ResultadoValidacionDocumentoXBRLDto resultado,String codigo,string idContexto,String idHecho,string mensaje){
            resultado.Valido = false;
            var nuevoError = new ErrorCargaTaxonomiaDto();
            nuevoError.CodigoError = codigo;
            nuevoError.IdContexto = idContexto;
            nuevoError.IdHecho = idHecho;
            nuevoError.Mensaje = mensaje;
            nuevoError.Severidad = ErrorCargaTaxonomiaDto.SEVERIDAD_FATAL;
            resultado.ErroresGenerales.Add(nuevoError);
        }
    }
}
