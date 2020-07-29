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
    public class ValidadorArchivoInstanciaEventosRelevantes: ValidadorArchivoInstanciaXBRLBase
    {
        /// <summary>
        /// Espacios de nombres de las taxonomías de reporte anual
        /// </summary>
        private IDictionary<String, String> ESPACIOS_NOMBRE = new Dictionary<String, String>()
        {
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_common_representative_view_entry_point_2017-08-01.xsd", ""},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_investment_funds_view_entry_point_2017-08-01.xsd", ""},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_issuer_view_entry_point_2017-08-01.xsd", ""},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_rating_agency_view_entry_point_2017-08-01.xsd", ""},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/eventos-relevantes-2017-08-01/rel_news_trust_issuer_view_entry_point_2017-08-01.xsd", ""},
            {"https://taxonomiasxbrl.cnbv.gob.mx/taxonomy/anexot-2016-08-22/annext_entry_point_2016-08-22.xsd", ""}
        };

        public static String M_ERROR_FID_RV011 = "El archivo XBRL proporcionado pertenece a la entidad con clave {0}. Sólo puede enviar información de la entidad que usted representa";
        public static String M_ERROR_FID_RV012 = "La fecha del reporte contenida en el archivo XBRL no corresponde al periodo reportado seleccionado";
        public static String M_ERROR_FID_RV013 = "El documento de instancia XBRL no contiene información obligatoria del contexto {0}";
        public static String M_ERROR_FID_RV014 = "Se debe reportar información monetaria únicamente en las monedas definidas MXN o USD y no utilizar más de una moneda en el documento de instancia.";
        public static String M_ERROR_FID_RV015 = "Los hechos te tipo Monetary cuyo valor sea diferente de '0' deberán indicar el atributo 'decimals' con un valor de '-3'";
        public static String M_ERROR_FID_RV016 = "Debe reportar los elementos de bloque de texto en el contexto correspondiente al acumulado del año actual ({0})";
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
        /// <summary>
        /// Nombre del parámetro de la clave de pizarra del fideicomitente a validar
        /// </summary>
        private const String CVE_FIDEICOMITENTE = "cveFideicomitente";
        /// <summary>
        /// Ticker corresponde al identificador de la emisora
        /// </summary>
        public const String NOMBRE_CONCEPTO_FIDEICOMITENTE = "rel_news_Ticker";

        public override void ValidarArchivoInstanciaXBRL(DocumentoInstanciaXbrlDto instancia, IDictionary<string, string> parametros, ResultadoValidacionDocumentoXBRLDto resultadoValidacion)
        {
            LogUtil.Info("Validando reglas Eventos Relevantes para:" + instancia.NombreArchivo);
            string hrefTax = null;
            foreach (var dts in instancia.DtsDocumentoInstancia)
            {
                if (dts.Tipo == DtsDocumentoInstanciaDto.SCHEMA_REF)
                {
                    hrefTax = dts.HRef;
                    break;
                }
            }
            if (hrefTax == null)
            {
                throw new Exception("Documento de instancia sin DTS de tipo HREF");
            }
            if (!ESPACIOS_NOMBRE.ContainsKey(hrefTax))
            {
                throw new Exception("Documento de instancia a validar no corresponde a ninguna taxonomía de Eventos relevantes");
            }
            var prefijoIdConceptos = ESPACIOS_NOMBRE[hrefTax];


            //La clave del fideicomitente reportada en el documento de instancia debe ser la misma clave del fide (clave de fideicomitente) enviada como parámetro
            String cvePizarra = parametros.ContainsKey(PARAMETRO_CLAVE_PIZARRRA) ? parametros[PARAMETRO_CLAVE_PIZARRRA] : null;
            if (cvePizarra == null)
            {
                AgregarError(resultadoValidacion, null, null, String.Format(MSG_ERROR_FALTA_PARAMETRO, PARAMETRO_CLAVE_PIZARRRA), true);
                LogUtil.Info("clavePizarra: " + cvePizarra);
                return;
            }

            String claveFideicomitente = null;
            if (parametros.TryGetValue(CVE_FIDEICOMITENTE, out claveFideicomitente) && !String.IsNullOrEmpty(claveFideicomitente))
            {
                LogUtil.Info("{clavePizarra:[" + cvePizarra + "] ,claveFideicomientente: [" + claveFideicomitente + "]}");
                cvePizarra = claveFideicomitente;
            }

            //Buscar alias de la clave de pizarra
            var aliasClaveCotizacion = obtenerAliasEmpresa(cvePizarra);
            if (aliasClaveCotizacion != null)
            {
                cvePizarra = aliasClaveCotizacion;
                LogUtil.Info("alias: " + cvePizarra);
            }

            string claveCotizacionXBRL = ObtenerValorNoNumerico(prefijoIdConceptos + NOMBRE_CONCEPTO_FIDEICOMITENTE, instancia);
            if (claveCotizacionXBRL != null && !claveCotizacionXBRL.Equals(cvePizarra, StringComparison.InvariantCultureIgnoreCase))
            {
                LogUtil.Info("Error comparar {clavePizarra: [" + cvePizarra + "],claveCotizacionXBRL: [" + claveCotizacionXBRL + "]}");
                AgregarError(resultadoValidacion, null, null, String.Format(M_ERROR_FID_RV011, claveCotizacionXBRL), true);
                return;
            }

        }

        /// <summary>
        /// Verifica si la empresa correspondiente al nombre corto enviado tiene un alias de clave de cotización, 
        /// si tiene se retorna el alias, null en otro caso
        /// </summary>
        /// <param name="nombreCorto">Nombre corto de la empresa buscada</param>
        /// <returns>Alias de la empresa</returns>
        private String obtenerAliasEmpresa(string nombreCorto)
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
