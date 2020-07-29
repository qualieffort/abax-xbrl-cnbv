using Ionic.Zip;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Util
{
    /// <summary>
    /// Clase de utilerías para el manjo de compresión de cadenas de texto y manejo de archivos comprimidos
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public class ZipUtil
    {
        /// <summary>
        /// Comprime una cadena de texto en un archivo gzip y lo representa en base 64.
        /// </summary>
        /// <param name="text">el texto a comprimir.</param>
        /// <returns>una cadena de texto con el archivo comprimido representado en base 64.</returns>
        public static string Zip(string text)
        {
            byte[] buffer = System.Text.Encoding.Unicode.GetBytes(text);
            var ms = new MemoryStream();
            using (System.IO.Compression.GZipStream zip = new System.IO.Compression.GZipStream(ms, System.IO.Compression.CompressionMode.Compress, true))
            {
                zip.Write(buffer, 0, buffer.Length);
            }

            ms.Position = 0;

            byte[] compressed = new byte[ms.Length];
            ms.Read(compressed, 0, compressed.Length);

            byte[] gzBuffer = new byte[compressed.Length + 4];
            System.Buffer.BlockCopy(compressed, 0, gzBuffer, 4, compressed.Length);
            System.Buffer.BlockCopy(BitConverter.GetBytes(buffer.Length), 0, gzBuffer, 0, 4);
            return Convert.ToBase64String(gzBuffer);
        }

        public static string UnZip(string compressedText)
        {
            byte[] gzBuffer = Convert.FromBase64String(compressedText);
            using (MemoryStream ms = new MemoryStream())
            {
                int msgLength = BitConverter.ToInt32(gzBuffer, 0);
                ms.Write(gzBuffer, 4, gzBuffer.Length - 4);

                byte[] buffer = new byte[msgLength];

                ms.Position = 0;
                using (System.IO.Compression.GZipStream zip = new System.IO.Compression.GZipStream(ms, System.IO.Compression.CompressionMode.Decompress))
                {
                    zip.Read(buffer, 0, buffer.Length);
                }

                return System.Text.Encoding.Unicode.GetString(buffer, 0, buffer.Length);
            }
        }

        /// <summary>
        /// Crea un ZIP en formato de un flujo de bytes, a partir de un stream de entrada, se comprime el flujo
        /// de entrada con el nombre del archivo enviado 
        /// </summary>
        /// <param name="streamArchivo">Archivo de entrada</param>
        /// <param name="nombreArchivo">Nombre del archivo de entrada</param>
        /// <returns>Flujo de bytes que representa a un archivo ZIP comprimido con el archivo enviado dentro</returns>
        public static Stream CrearZipAPartirDeStream(Stream streamArchivo, String nombreArchivo) { 
            var streamZip = new MemoryStream();
            using(ZipFile archivoZip = new ZipFile()){
                byte[] contenidoStream = new byte[streamArchivo.Length];
                streamArchivo.Read(contenidoStream,0,contenidoStream.Length);
                archivoZip.AddEntry(nombreArchivo, contenidoStream);
                archivoZip.Save(streamZip);
            }
            return streamZip;
        }

        /// <summary>
        /// Crea un ZIP en formato de un flujo de bytes, a partir de una cadena, se comprime la cadena
        /// de entrada con el nombre del archivo enviado 
        /// </summary>
        /// <param name="contenido">Cadena de entrada</param>
        /// <param name="nombreArchivo">Nombre del archivo de entrada</param>
        /// <param name="streamZip">Stream de destino del archivo ZIP</param>
        /// <returns>Flujo de bytes que representa a un archivo ZIP comprimido con el archivo enviado dentro</returns>
        public static void CrearZipAPartirDeString(String contenido, String nombreArchivo, Stream streamZip)
        {
            using (ZipFile archivoZip = new ZipFile())
            {
                archivoZip.AddEntry(nombreArchivo, UTF8Encoding.UTF8.GetBytes(contenido));
                archivoZip.Save(streamZip);
            }
        }

        /// <summary>
        /// Comprime una cadena de texto en un archivo gzip.
        /// </summary>
        /// <param name="text">el texto a comprimir.</param>
        /// <returns>un arreglo de bits con el archivo comprimido.</returns>
        public static byte[] GZip(string text)
        {
            byte[] buffer = UTF8Encoding.UTF8.GetBytes(text);
            var ms = new MemoryStream();
            using (System.IO.Compression.GZipStream zip = new System.IO.Compression.GZipStream(ms, System.IO.Compression.CompressionMode.Compress, true))
            {
                zip.Write(buffer, 0, buffer.Length);
            }

            ms.Position = 0;

            byte[] compressed = new byte[ms.Length];
            ms.Read(compressed, 0, compressed.Length);

            return compressed;
        }
    }
}
