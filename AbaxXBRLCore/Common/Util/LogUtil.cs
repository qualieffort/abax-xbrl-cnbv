using Newtonsoft.Json;
using System;
using System.IO;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Util
{
    public class LogUtil
    {

        public static FileStream LogWriter { get; set; }

        /// <summary>
        /// Path del directorio de logeo.
        /// </summary>
        public static String LogDirPath;
        /// <summary>
        /// Path del archivo log.
        /// </summary>
        private static String LogPath;
        /// <summary>
        /// Token para indicar los datos del registro.
        /// </summary>
        public static String TokenDatosRegistro = "TOKEN_DATOS_REGISTRO";
        /// <summary>
        /// Token para separar los registros del log.
        /// </summary>
        public static String SeparadorRegistros = "\n\n==================================================================================================================\n== " + TokenDatosRegistro + "\n==================================================================================================================\n\n";
        /// <summary>
        /// Objeto que sirve como marcador de bloqueo para sincronizar el proceso de escritura en el log para los diferentes hilos.
        /// </summary>
        static object lockMethod = new object();
        /// <summary>
        /// Crea o sobreescribe el archivo log para el registro de las excepsiones.
        /// </summary>
        public static void Inicializa()
        {
            try
            {
                var prefijo = "AbaxXBRL";
                var extension = ".log";
                var indexLog = 0;
                string _path;

                while (indexLog < 100)
                {
                    _path = LogDirPath + prefijo + '-' + indexLog + extension;
                    if (!File.Exists(_path))
                    {
                        LogPath = _path;
                        CreaNuevoLog();
                        break;
                    }
                    if (!IsFileLocked(_path))
                    {
                        LogPath = _path;
                        Append("STARTUP", "Se levanta instancia aplicación.");
                        break;
                    }

                    indexLog++;
                }
            }
            catch (Exception e)
            {
                System.Console.Write(e.ToString());
            }

        }
        /// <summary>
        /// Metodo que nos indica si el archivo esta bloqueado.
        /// </summary>
        /// <param name="file">Archivo que se pretende evaluar.</param>
        /// <returns>Si el archivo se encuentra bloqueado.</returns>
        private static bool IsFileLocked(string path)
        {
            FileStream stream = null;

            try
            {
                stream = File.Open(path, FileMode.Open, FileAccess.Read, FileShare.None);
            }
            catch (IOException)
            {
                return true;
            }
            finally
            {
                if (stream != null)
                {
                    stream.Close();
                }
            }

            //file is not locked
            return false;
        }
        /// <summary>
        /// Crea un nuevo log con el path definido.
        /// </summary>
        private static void CreaNuevoLog()
        {
            // Create a file to write to.
            using (StreamWriter sw = File.CreateText(LogPath))
            {
                sw.WriteLine("Se crea el LOG para Abax XBRL ");
                sw.WriteLine("HoraInicio: " + DateTime.Now);
                sw.Close();
            }
        }
        /// <summary>
        /// Escribe en el contenido.
        /// </summary>
        /// <param name="tipo">Tipo de contenido.</param>
        /// <param name="contenido">Contenido.</param>
        private static void Append(String tipo, String contenido)
        {
            try
            {
                Task task = new Task(() =>
                {
                    try
                    {
                        lock (lockMethod)
                        {
                            var datosRegistro = "[ " + tipo + " ] : [" + DateTime.Now + "] : " + contenido;

                            // CAppend.
                            using (StreamWriter sw = File.AppendText(LogPath))
                            {
                                sw.WriteLine(datosRegistro);
                                sw.Close();
                            }
                        }
                    }
                    catch (Exception e)
                    {
                        System.Console.Write(e.ToString());
                    }
                });
                task.Start();
            }
            catch (Exception e)
            {
                System.Console.Write(e.ToString());
            }
        }
        /// <summary>
        /// Registra un error en el archivo log.
        /// </summary>
        /// <param name="e"></param>
        public static void Error(object e)
        {
            try
            {
                if (e == null)
                {
                    return;
                }
                var settings = new JsonSerializerSettings() { ReferenceLoopHandling = ReferenceLoopHandling.Ignore, Error = (ev,arg) => { arg.ErrorContext.Handled = true;} };
                var contenido = JsonConvert.SerializeObject(e, Formatting.Indented, settings);
                var tipo = "ERROR";
                Append(tipo, contenido);
            }
            catch (Exception ex)
            {
                Append("ERROR_LOG", ex.ToString());
                Append("ERROR", e.ToString());
                if (e.GetType().IsAssignableFrom(typeof(Exception)))
                {
                    Append("ERROR", ((Exception)e).Message);
                }
            }
        }
        

        /// <summary>
        /// Registra un error en el archivo log.
        /// </summary>
        /// <param name="mensaje">Texto con el mensaje a publicar.</param>
        public static void Info(string mensaje)
        {
            try
            {
                var contenido = mensaje == null ? "null" : mensaje;
                var tipo = "INFO";
                Append(tipo, contenido);
            }
            catch (Exception ex)
            {
                Append("ERROR_LOG", ex.ToString());
            }
        }

        /// <summary>
        /// Registra un error en el archivo log.
        /// </summary>
        /// <param name="mensaje">Texto con el mensaje a publicar.</param>
        public static void Info(object mensaje)
        {
            try
            {
                var contenido = mensaje == null ? "null" : JsonConvert.SerializeObject(mensaje, Formatting.Indented);
                var tipo = "INFO";
                Append(tipo, contenido);
            }
            catch (Exception ex)
            {
                Append("ERROR_LOG", ex.ToString());
            }
        }
    }
}
