#region

using AbaxXBRLCore.Common.Dtos;
using SendGrid;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;

#endregion

namespace AbaxXBRLCore.Common.Util
{
    /// <summary>
    /// Clase útil para el envio de Email por SendGrid
    /// <author>Eric Alan Gonzalez Fuentes</author>
    /// <version>1.0</version>
    /// </summary>
    public class MailUtil
    {
        /// <summary>
        /// Puerto para envio de email
        /// </summary>
        //public const int NPORT = 2525;

        public int NPORT { get; set; }

        /// <summary>
        /// Indica si se mandara por un protocolo seguro 
        /// </summary>
        public bool APLICA_SSL { get; set; }

        /// <summary>
        /// Host para envio de email
        /// </summary>
        //public const string S_HOST = "smtp.sendgrid.net";
        public string S_HOST { get; set; }


        /// <summary>
        ///     El nombre del Usuario.
        /// </summary>
        //private const string S_USERNAME = "jose.antonio.huizar@gmail.com";
        //public const string S_USERNAME = "azure_b74dcd3f3772a6ec442d9c282d1145fc@azure.com";

        public string S_USERNAME { get; set; }
        /// <summary>
        /// Correo electronico de la app.
        /// </summary>
        public string S_APP_MAIL { get; set; }


        /// <summary>
        ///     La contraseña.
        /// </summary>
        //private const string S_PASSWORD = "jahmmxmx";
        //public const string S_PASSWORD = "lak5bjxg";
        public string S_PASSWORD { get; set; }


        /// <summary>
        /// Envia el email por sendgrid.
        /// </summary>
        /// <param name="correoOrigen"></param>
        /// <param name="correosDestinoTo"></param>
        /// <param name="asunto"></param>
        /// <param name="contenidoHtml"></param>
        /// <param name="filesAttachments"></param>
        /// <returns></returns>
        public bool EnviarEmailPorSendGrid(String correoOrigen, String correosDestinoTo, String asunto,
            String contenidoHtml, IList<String> filesAttachments)
        {
            var from = new MailAddress(correoOrigen);
            var to = ObtenCorreos(correosDestinoTo);
            var subject = asunto;
            var html = contenidoHtml;
            var text = String.Empty;
            var credenciales = new NetworkCredential(S_USERNAME, S_PASSWORD);
            var transportWeb = new Web(credenciales);
            // Create an email, passing in the the eight properties as arguments.

            var myMessage = new SendGrid.SendGridMessage { From = @from, To = to, Subject = subject, Html = html, Text = text };
            if (filesAttachments != null)
                foreach (string files in filesAttachments)
                {
                    myMessage.AddAttachment(files);
                }
            try
            {
                transportWeb.Deliver(myMessage);
                return true;
            }
            catch (Exception exception)
            {
                return false;
            }
        }
         /// <summary>
        /// Envia un mail utilizando el servidor SMTP especificado.
        /// </summary>
        /// <param name="correoOrigen">Cuenta de correo origen</param>
        /// <param name="correosDestinoTo">Cuenta de correo destino</param>
        /// <param name="asunto">Subject del correo</param>
        /// <param name="contenidoHtml">Contenido del correo</param>
        /// <returns>Si la configuracion es correcta y se envia el correo true, de lo contrario false</returns>
        public bool EnviarEmail(String correosDestinoTo, String asunto, String contenidoHtml) {
            return EnviarEmail(correosDestinoTo, asunto, contenidoHtml, null);
        }

        /// <summary>
        /// Envia un mail utilizando el servidor SMTP especificado.
        /// </summary>
        /// <param name="correoOrigen">Cuenta de correo origen</param>
        /// <param name="correosDestinoTo">Cuenta de correo destino</param>
        /// <param name="asunto">Subject del correo</param>
        /// <param name="contenidoHtml">Contenido del correo</param>
        /// <param name="attachment">Elemento a adjuntar.</param>
        /// <returns>Si la configuracion es correcta y se envia el correo true, de lo contrario false</returns>
        public bool EnviarEmail(String correosDestinoTo, String asunto, String contenidoHtml, Attachment attachment)
        {

            bool seEnvioCorreo = true;
            try
            {
                System.Net.Mail.MailMessage message = new System.Net.Mail.MailMessage();
                SmtpClient smtp = new SmtpClient();

                smtp.Port = NPORT;
                smtp.Host = S_HOST;
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.EnableSsl = APLICA_SSL;

                if (S_USERNAME.Length == 0)
                {
                    //Ingen auth 
                }
                else
                {
                    smtp.UseDefaultCredentials = false;
                    smtp.Credentials = new NetworkCredential(S_USERNAME, S_PASSWORD);
                }

                message.To.Add(correosDestinoTo);

                message.From = new MailAddress(GetCorreoApp());
                message.Subject = asunto;
                message.Body = contenidoHtml;
                message.IsBodyHtml = true;

                if (attachment != null)
                {
                    message.Attachments.Add(attachment);
                }

                smtp.Send(message);
            }
            catch (Exception e)
            {
                ///LogUtil.Error(e);
                var detalleError = new Dictionary<string, object>();
                detalleError.Add("Mensaje", "No se pudo enviar correo");
                detalleError.Add("correosDestinoTo", correosDestinoTo);
                detalleError.Add("asunto", asunto);
                detalleError.Add("contenidoHTM", contenidoHtml);
                detalleError.Add("attachment", attachment);
                detalleError.Add("Excepsion", e);
                LogUtil.Error(detalleError);
                seEnvioCorreo = false;
            }
            return seEnvioCorreo;

        }

        /// <summary>
        /// Obtiene el correo que debe enviar la aplicación.
        /// </summary>
        /// <returns>Retorna el remitente de la aplicación.</returns>
        private string GetCorreoApp()
        {
            var correo = S_APP_MAIL;
            if (String.IsNullOrEmpty(correo))
            {
                correo = ConstantsAbax.CorreoAdmin;
            }
            return correo;
        }

        /// <summary>
        /// Obtiene correos apartir de un string separado por ;
        /// </summary>
        /// <param name="correos"></param>
        /// <returns></returns>
        public static MailAddress[] ObtenCorreos(String correos)
        {
            if (String.IsNullOrWhiteSpace(correos))
            {
                return new MailAddress[0];
            }
            if (correos[correos.Length - 1] == ';')
                correos = correos.Remove(correos.Length - 1);
            var lista = correos.Split(new[] { ';' });
            int index;
            var arregloCorreos = new MailAddress[lista.Length];
            for (index = 0; index < lista.Length; index++)
            {
                arregloCorreos[index] = new MailAddress(lista[index]);
            }
            return arregloCorreos;
        }
    }
}