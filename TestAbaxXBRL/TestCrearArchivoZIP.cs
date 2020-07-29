using Ionic.Zip;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestCrearArchivoZIP
    {
    
        [TestMethod]
        public void testCrearZipDeString(){

            var streamSalida = new MemoryStream();

            streamSalida.Write(Encoding.UTF8.GetBytes("PRUEBA DE ZIP"),0,Encoding.UTF8.GetBytes("PRUEBA DE ZIP").Length);
            streamSalida.Position = 0;

            using(ZipFile zip = new ZipFile()){
                ZipEntry entry = zip.AddEntry("archivodentro.xbrl", streamSalida.ToArray());
                zip.Save("/temp/zipsalida.zip");
            }
            streamSalida.Close();
        }
        [TestMethod]
        public void testExamen() { 
        
            int []arrA = new int[]{100,2048,5555,2047};
            int []arrB = new int[]{123,17,4444,2049};

            int []sol = new int[]{4,2,14,22};

            for (int i = 0; i < sol.Length;i++ )
            {
                Debug.WriteLine("A= "+ arrA[i] + ", B= " + arrB[i] + " got = "+solution(arrA[i],arrB[i])+" , expected = " + sol[i] );
            }


        }

        public int solution(int A, int B)
        {
            // write your code in C# 6.0 with .NET 4.5 (Mono)

            
            //A = 3; B = 7;
            return BinarioNumero(A * B);
        }
        private int BinarioNumero(int multi)
        {
            List<int> Bin = new List<int>();
            int operacion = 0;
            double res = 0.0;

            operacion = multi;
            while (operacion > 0)
            {
                Bin.Add(operacion % 2);
                res = operacion / 2;
                operacion = (int)Math.Truncate(res);
            }
            Console.WriteLine(String.Format("operacion  {0} ", operacion.ToString()));
            int contador = 0;
            foreach (int valor in Bin)
            {
                if (valor == 1)
                    contador++;
            }
            // Console.WriteLine(String.Format("numeros  {0} ",contador.ToString()));
            return contador;

        } 

    }
}
