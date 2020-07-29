using System;
using System.Collections.Generic;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Repository;
using System.Linq;

namespace AbaxXBRLCore.Validador.Impl
{
    /// <summary>
    /// Validador de los documentos de al taxonomía de 
    /// </summary>
    public class ValidadorArchivoInstanciaProspecto : ValidadorArchivoInstanciaXBRLBase
    {
        /// <summary>
        /// Espacios de nombres de las taxonomías de reporte anual
        /// </summary>
        private IDictionary<String, String> ESPACIOS_NOMBRE = new Dictionary<String, String>()
        {
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_H_entry_point_2016-08-22", ""},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS_entry_point_2016-08-22", ""},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS1_entry_point_2016-08-22", ""},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS2_entry_point_2016-08-22", ""},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS3_entry_point_2016-08-22", ""},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS4_entry_point_2016-08-22", ""},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_HBIS5_entry_point_2016-08-22", ""},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_L_entry_point_2016-08-22", ""},
            {"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_I_entry_point_2016-08-22", ""}
        };
        
        /// <summary>
        /// Mensaje que se presentacuando se envía un documento que no pertenece a la emisroa del usuario.
        /// </summary>
        private const String M_ERROR_RV007 = "El archivo XBRL proporcionado pertenece a la emisora con clave {0}. Sólo puede enviar información de la emisora que usted representa";
        /// <summary>
        /// Mensaje de error cuando los periodos no coinciden.
        /// </summary>
        private const String M_ERROR_RA008 = "El periodo que se reporta ({0}) no coincide con el periodo del documento de instancia XBRL ({1}).";
        /// <summary>
        /// Mensaje de error cuando no se indica adecuadamente los decimales de los datos monetarios.
        /// </summary>
        private const String M_ERROR_RV011 = "Los hechos de tipo Monetary cuyo valor sea diferente de '0' deberán indicar el atributo 'decimals' con un valor de '-3'";
        /// <summary>
        /// Mensaje de error cuando no se indica una unidad valida para los datos monetarios.
        /// </summary>
        private const String M_ERROR_RV010 = "Se debe reportar información monetaria únicamente en las monedas definidas MXN o USD y no utilizar más de una moneda en el documento de instancia";

        /// <summary>
        /// Objeto de repository para el acceso a datos de empresas
        /// </summary>
        public IEmpresaRepository EmpresaRepository { get; set; }
        /// <summary>
        /// Parametro con el que se identifica la clave de pizarra.
        /// </summary>
        private const String PARAMETRO_CLAVE_PIZARRRA = "cvePizarra";

        /// <summary>
        /// Parametro con el que se identifica el periodo reportado.
        /// </summary>
        private const String PARAMETRO_FECHA_COLOCACION = "fechaColocacion";
        /// <summary>
        /// Cantidad de decimales permitidos para las cantidades monetarias.
        /// </summary>
        private const int DECIMALES_PERMITIDOS = -3;
        /// <summary>
        /// Lista de unidades monetarias permitidas en un documento de instancia
        /// </summary>
        private static String[] UNIDADES_PERMITIDAS = new String[] { "MXN", "USD" };


        public override void ValidarArchivoInstanciaXBRL(DocumentoInstanciaXbrlDto instancia, IDictionary<string, string> parametros, ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {
            LogUtil.Info("Validando reglas REPORTE ANUAL para:" + instancia.NombreArchivo);
            if (!ESPACIOS_NOMBRE.ContainsKey(instancia.EspacioNombresPrincipal))
            {
                throw new Exception("Documento de instancia a validar no corresponde a ninguna taxonomía de Prospecto (" + instancia.EspacioNombresPrincipal + ")");
            }

            String cvePizarra;
            if (!parametros.TryGetValue(PARAMETRO_CLAVE_PIZARRRA, out cvePizarra) || String.IsNullOrEmpty(cvePizarra))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(MSG_ERROR_FALTA_PARAMETRO, PARAMETRO_CLAVE_PIZARRRA), true);
                return;
            }
            String parametrofechaColocacion;
            if (!parametros.TryGetValue(PARAMETRO_FECHA_COLOCACION, out parametrofechaColocacion) || String.IsNullOrEmpty(parametrofechaColocacion))
            {
                AgregarError(resultadoValidacion, null, null, String.Format(MSG_ERROR_FALTA_PARAMETRO, PARAMETRO_FECHA_COLOCACION), true);
                return;
            }

            //Int32 anio;
            //if (!Int32.TryParse(parametrofechaColocacion.Trim(), out anio))
            //{
            //    AgregarError(resultadoValidacion, null, null, String.Format("El periodo indicado ({0}) no es valido para la taxonomía de prospecto.", valorPeroiodo), true);
            //    return;
            //}


            var aliasClaveCotizacion = ObtenerAliasEmpresa(cvePizarra);
            if (aliasClaveCotizacion != null)
            {
                LogUtil.Info("{clavePizarra:[" + cvePizarra + "], alias: [" + aliasClaveCotizacion + "]}");
                cvePizarra = aliasClaveCotizacion;
            }
            LogUtil.Info("{clavePizarra:[" + cvePizarra + "]}");
            var plantilla = new AbaxXBRLCore.Viewer.Application.Model.Impl.DefinicionPlantillaReporteAnualProspecto2016();
            var parametrosDocumento = plantilla.DeterminaParametrosConfiguracionDocumento(instancia);
            String claveEmisoraXBRL;
            if (!parametrosDocumento.TryGetValue("emisora", out claveEmisoraXBRL) || String.IsNullOrEmpty(claveEmisoraXBRL))
            {
                AgregarError(resultadoValidacion, null, null, "No fue posible determinar la clave de cotización de la emisora del documento.", true);
                return;
            }
            else
            {
                if (!claveEmisoraXBRL.Equals(cvePizarra, StringComparison.InvariantCultureIgnoreCase))
                {
                    LogUtil.Info("Error comparar {clavePizarra: [" + cvePizarra + "],claveCotizacionXBRL: [" + claveEmisoraXBRL + "]}");
                    AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RV007, claveEmisoraXBRL), true);
                }
            }
            //String paramfechaReporte;
            //DateTime fechaReporteXBRL;
            //if (!parametrosDocumento.TryGetValue("anio", out paramfechaReporte) ||
            //    String.IsNullOrEmpty(paramfechaReporte) ||
            //    !DateUtil.ParseDate(paramfechaReporte, (DateUtil.YMDateFormat + "T06:00:00.000Z"), out fechaReporteXBRL))
            //{
            //    AgregarError(resultadoValidacion, null, null, "No fue posible determinar el periodo del documento XBRL (" + paramfechaReporte ?? "null" + ").", true);
            //}
            //else
            //{
            //    if (fechaReporteXBRL.Year != anio)
            //    {
            //        LogUtil.Info("Error periodo {clavePizarra: [" + cvePizarra + "],fechaReporte: [" + paramfechaReporte + "], anio:[" + anio + "]}");
            //        AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_RA008, anio, fechaReporteXBRL.Year), true);
            //    }
            //}

            //if (!ValidarDecimalesHechosMonetarios(instancia, DECIMALES_PERMITIDOS))
            //{
            //    AgregarError(resultadoValidacion, null, null, M_ERROR_RV011, true);
            //}
            //if (!ValidarMonedasDocumento(instancia, UNIDADES_PERMITIDAS))
            //{
            //    AgregarError(resultadoValidacion, null, null, M_ERROR_RV010, true);
            //}
        }

        /// <summary>
        /// Verifica si la empresa correspondiente al nombre corto enviado tiene un alias de clave de cotización, 
        /// si tiene se retorna el alias, null en otro caso
        /// </summary>
        /// <param name="nombreCorto">Nombre corto de la empresa buscada</param>
        /// <returns>Alias de la empresa</returns>
        private String ObtenerAliasEmpresa(string nombreCorto)
        {
            var empresaBuscada = EmpresaRepository.GetQueryable().Where(x => x.AliasClaveCotizacion == nombreCorto && x.Borrado == false).FirstOrDefault();
            if (empresaBuscada != null)
            {
                return empresaBuscada.NombreCorto;
            }
            return null;
        }
    }
}
