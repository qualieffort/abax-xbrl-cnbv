using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using System.Globalization;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia.Linkbases;
using System.Text.RegularExpressions;
using System.Security.Cryptography;

namespace AbaxXBRLCore.Common.Util
{
    public static class XbrlSobreUtil
    {
        /// <summary>
        /// Identificadores de conceptos correspondientes a firmas del XBRL Sobre
        /// </summary>
        public static string ID_CORREO_ELECTRONICO_FIRMA = "xbrl_env_DigitalSignatureEmail";
        public static string ID_CONTENIDO_FIRMA = "xbrl_env_DigitalSignatureContent";
        public static string ID_HUELLA_DIGITAL = "xbrl_env_DigitalSignatureCertificateThumbprint";
        public static string ID_XBRL_ADJUNTO = "xbrl_env_AttachedFile";
        public static string ID_NOMBRE_XBRL_ADJUNTO = "xbrl_env_AttachedFileName";
        public static string ID_TIPO_XBRL_ADJUNTO = "xbrl_env_AttachedFileType";
        public static string ID_ANIO_REPORTADO = "xbrl_env_ReportedYear";
	    public static string ID_SEMESTRE_REPORTADO = "xbrl_env_ReportedSemester";
	    public static string ID_TRIMESTRE_REPORTADO = "xbrl_env_ReportedQuarter";
	    public static string ID_MES_REPORTADO = "xbrl_env_ReportedMonth";
	    public static string ID_FECHA_INICIO_REPORTADO = "xbrl_env_ReportStartDate";
	    public static string ID_FECHA_FIN_REPORTADO = "xbrl_env_ReportEndDate";
	    public static string ID_CLAVE_COTIZACION = "xbrl_env_Ticker";
	    public static string ID_CLAVE_PARTICIPANTE = "xbrl_env_ParticipantShortName";
	    public static string ID_NUM_FIDEICOMISO = "xbrl_env_TrustNumber";
	    public static string ID_RAZON_SOCIAL = "xbrl_env_TickerLegalName";
	    public static string ID_RAZON_SOCIAL_PARTICIPANTE = "xbrl_env_ParticipantLegalName";
	    public static string ID_ARCHIVO_ADJUNTO = "xbrl_env_AttachedFile";
	    public static string ID_NOMBRE_ARCHIVO = "xbrl_env_AttachedFileName";
	    public static string ID_TIPO_ARCHIVO = "xbrl_env_AttachedFileType";
	    public static string ID_TIPO_ENVIO = "xbrl_env_InformationTypeCode";
	    public static string ID_ESPACIO_NOMBRES_ARCHIVO = "xbrl_env_AttachedFileNameSpace";
	    public static string ID_ENTRY_POINT_ARCHIVO = "xbrl_env_AttachedFileEntryPoint";
	    public static string ID_COMENTARIOS = "xbrl_env_Comments";
	    public static string ID_PARAMETROS_ADICIONALES = "xbrl_env_AdditionalParameters";
        public static string TIPO_ADJUNTO_ZIP = "zip";
        public static string TIPO_ADJUNTO_XBRL = "xbrl";



    }
}
