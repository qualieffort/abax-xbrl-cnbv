using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Web.UI;
using System.Net.Mail;
using System.Net.Mime;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Common.Dtos.Usuario;
using AbaxXBRLCore.Entities;
using System.Configuration;


namespace AbaxXBRLCore.Common.Util
{
    /// <summary>
    /// Clase para generar el html mediante plantillas para los correos enviados por la aplicación.
    /// <author>Eric Alan Gonzalez Fuentes</author>
    /// <version>1.0</version>
    /// </summary>
    public class TemplateMail
    {
        public static String GenerateHtmlCorreoUsuario(UsuarioMailDto usuario, String url)
        {
            String html = String.Empty;
            String template = File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + ConstantsAbax.TemplateUsuario);
            html = template.Replace("@Model.Nombre", usuario.Nombre).Replace("@Model.CorreoElectronico", usuario.CorreoElectronico).Replace("@Model.Password", usuario.Password);
            html = html.Replace("@Model.Url", url);
            return html;
        }

        public static String GenerateHtmlCorreoBienvenida(UsuarioMailDto usuario, String url)
        {
            String html = String.Empty;
            String template = File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + ConstantsAbax.TemplateBienvenida);
            html = template.Replace("@Model.Nombre", usuario.Nombre).Replace("@Model.CorreoElectronico", usuario.CorreoElectronico).Replace("@Model.Password", usuario.Password);
            html = html.Replace("@Model.Url", url);
            return html;
        }

        public static String GenerateHtmlCorreoBienvenidaLDAP(UsuarioMailDto usuario, String url)
        {
            String html = String.Empty;
            String template = File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + ConstantsAbax.TemplateBienvenidaLDAP);
            html = template.Replace("@Model.Nombre", usuario.Nombre).Replace("@Model.CorreoElectronico", usuario.CorreoElectronico);
            html = html.Replace("@Model.Url", url);
            return html;
        }

        public static String GenerateHtmlCorreoBienvenidaSSO(UsuarioMailDto usuario, String url)
        {
            String html = String.Empty;
            String template = File.ReadAllText(AppDomain.CurrentDomain.BaseDirectory + ConstantsAbax.TemplateBienvenidaSSO);
            html = template.Replace("@Model.Nombre", usuario.Nombre).Replace("@Model.CorreoElectronico", usuario.CorreoElectronico);
            html = html.Replace("@Model.Url", url);
            return html;
        }

        


        /// <summary>
        /// Genera un elemento adjunto con la imagen de Abax XBRL.
        /// </summary>
        /// <returns>Elemento adjuntable.</returns>
        public static Attachment GeneraLogoAbaxAttachment()
        {
            var imagenCorreo = ConfigurationManager.AppSettings.Get("IMAGEN_CORREO_ELECTRONICO");
            if (String.IsNullOrEmpty(imagenCorreo))
            {
                imagenCorreo = ConstantsAbax.LogoAbaxPath;
            }
            var attachmentImage = new Attachment(AppDomain.CurrentDomain.BaseDirectory + imagenCorreo);
            attachmentImage.ContentDisposition.Inline = true;
            attachmentImage.ContentDisposition.DispositionType = DispositionTypeNames.Inline;
            attachmentImage.ContentId = "imagenAbax";
            attachmentImage.TransferEncoding = TransferEncoding.Base64;
            return attachmentImage;
        }

        /// <summary>
        /// Obtiene el contenido de un template HTML de la carpeta de recursos web
        /// </summary>
        /// <param name="rutaTemplate">Ruta del template a obtener, ruta absoluta a la carpeta del root de web</param>
        /// <returns>Contenido del template, null si no se puede obtener el contenido</returns>
        public static String ObtenerContenidoTemplateHtml(string rutaTemplate)
        {
            var rutaCompleta = AppDomain.CurrentDomain.BaseDirectory + rutaTemplate;
            if (File.Exists(rutaCompleta))
            {
                try
                {
                    return File.ReadAllText(rutaCompleta);
                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                }
            }
            return null;
        }

    }
}
