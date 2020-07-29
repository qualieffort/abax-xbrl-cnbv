using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spring.Testing.Microsoft;
using System.Net.Http;
using AbaxXBRLCore.Common.Util;
using System.IO;
using System.Text.RegularExpressions;

namespace TestAbaxXBRL
{
    [TestClass]
    public class SolicitudHTTPTest
    {
        private HttpClient client = new HttpClient();
        private IList<String> AtributosTablaA = new List<String>()
        {
            "Concepto", "Gratis", "OpGratuitaNumero", "OpGratuitaPeriodicidad", "CostoMoneda",
            "CostoValorFijo","Cond", "CostoFactor", "CostoValorFactor", "ReferenciaDelFactor","Periodicidad"
        };
        private IList<String> AtributosTablaA_DosColumna = new List<String>()
        {
            "Concepto","Descripcion"
        };

        private IDictionary<String, Regex> PatronesA = new Dictionary<String, Regex>()
        {
            { "FechaDeActualizacion", new Regex(@"<b>Fecha de Actualización:\s*<\/b>(.+?)<\/p>",RegexOptions.Compiled) },
            { "Logo", new Regex(@"<img\s+src=""(https?:\/\/e\-portalif\.condusef\.gob\.mx\/SIPRES\/LOGOS\/.+?)""",RegexOptions.Compiled) },
            { "RECA", new Regex(@"<td .*?>\s*<b>Número RECA:<\/b>(.+?)<\/td>",RegexOptions.Compiled) },
            { "CAT", new Regex(@"<li>Costo Anual Total \(CAT\):(.*?)</li>",RegexOptions.Compiled) },
            { "DefinicionCalculo", new Regex(@"<li>Condiciones y variables establecidas para el cálculo:<p.*?>(.*?)<\/p>\s*<\/li>",RegexOptions.Compiled) }
        };

        private Regex PatronFechaDeActualizacion = new Regex(@"<b>Fecha de Actualización:\s*<\/b>(.+?)<\/p>", RegexOptions.Compiled);

        private Regex PatronB = new Regex(@"<td.*?>(.+?):?\s*<strong>\s*:?(.+?)<\/strong>\s*<\/td>", RegexOptions.Compiled | RegexOptions.Multiline);
        private Regex PatronCamel = new Regex(@"\s+\w", RegexOptions.Compiled);
        private Regex PatronC = new Regex(@"<tr.*?>\s*<td.*?><b>(.+?):?<\/b>\s*<\/td>\s*<td>(.+?)((<\/td>\s*<\/tr>)|(<tr>)|(<\/table>))", RegexOptions.Compiled | RegexOptions.Multiline);
        private Regex PatronNombre = new Regex(@"(.*?<tr>.*?<b>)(\w*)", RegexOptions.Compiled | RegexOptions.Multiline);
        private Regex PatronE = new Regex(@"<td.*?><p>(.+?):<strong>(.+?)<\/strong><\/p><\/td>", RegexOptions.Compiled | RegexOptions.Multiline);

        private Regex PatronChekbox = new Regex(@"<input.*?\stype='checkbox'.*\/>", RegexOptions.Compiled | RegexOptions.Multiline);
        private Regex PatronCheked = new Regex(@"\schecked", RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.IgnoreCase);

        private Regex PatronFileSet = new Regex(@"<fieldset.*?>\s*<legend.*?>(.*?)<\/legend>(.*?)<\/fieldset>", RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.Singleline);
        
        private Regex PatronFilaDatosTablaA = new Regex(@"<tr.*?>.*?<\/tr>", RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.Singleline);
        private Regex PatronCelda = new Regex(@"<td.*?>(.*?)<\/td>", RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.Singleline);
        private Regex PatronTituloDoscolumnas = new Regex(@"<td.*?><strong>Concepto<\/strong><\/td>\s+<td.*?><strong>Descripción<\/strong><\/td>", RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.Singleline);
        

        private Regex PatronConceptoTablaA = new Regex(@"<strong.*?>\s*Concepto\s*<\/strong>\s*</td>", RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.IgnoreCase);
        private Regex PatronTabla = new Regex(@"<table.*?>.*?<\/table>", RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.Singleline);
        private Regex PatronTablaTitulo = new Regex(@"<table.*?>\s*<tr.*?>\s*<td.*?>\s*<strong>(.*?)<\/strong>\s*<\/td>\s*<\/tr>\s*<\/table>", RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.Singleline);
        private Regex PatronListaFlecha = new Regex(@"<ul\s*class='flecha'>\s*<li>(.*?)<\/li>", RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.Singleline);
        private Regex PatronNoAplica = new Regex(@"<h4>No Aplica<\/h4>", RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.Singleline);
        private Regex PatronUltimacoma = new Regex(@",(\s*[\]\}])", RegexOptions.Compiled | RegexOptions.Multiline | RegexOptions.Singleline);
        private Regex ExpresionArchivo = new Regex(@"Credito(\d+).html", RegexOptions.Compiled | RegexOptions.Multiline);
        private Regex PatronSeparadorRequisitosA = new Regex(@"<td[^>]*bgcolor\s*=\s*['""]\#DEE2E0['""][^>]*>\s*<b.*?>\s*(.*?)\s*<\/", RegexOptions.Compiled | RegexOptions.Multiline);
        private Regex PatronSeparadorRequisitosB = new Regex(@"<td[^>]*colspan\s*=\s*['""]\d+['""][^>]*>\s*<b><u>(.*?)<\/u>", RegexOptions.Compiled | RegexOptions.Multiline);

        private Regex EspaciosInicio = new Regex(@"^\s", RegexOptions.Compiled | RegexOptions.Multiline);
        private Regex SaltosLinea = new Regex(@"\s?\r?\n", RegexOptions.Compiled | RegexOptions.Multiline);

        public int InidiceCreditoInicial { get; set; }
        public int InidiceCreditoFinal { get; set; }
        public string DirectorioSalida { get; set; }
        public bool CrearDirectorioPorRango { get; set; }

        public string DirectorioAReporcesar { get; set; }

        //[TestMethod]
        public void ObtenerContenidoHTMLMultiHilos()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            try
            {
                var elementosPorHilo = 100;
                var indiceInicio = 0;
                var indiceFin = 2000;
                IList<Task> listaTask = new List<Task>();
                for (var indiceComienza = indiceInicio; indiceComienza < indiceFin; indiceComienza += elementosPorHilo)
                {
                    try
                    {
                        var indiceCierre = (indiceComienza + (elementosPorHilo - 1));
                        var servicio = new SolicitudHTTPTest();
                        servicio.InidiceCreditoInicial = indiceComienza;
                        servicio.InidiceCreditoFinal = indiceCierre;
                        //servicio.DirectorioSalida = "..\\..\\TestOutput\\SalidaHTTPThreads\\";
                        //servicio.CrearDirectorioPorRango = true;
                        servicio.DirectorioSalida = @"..\..\TestOutput\SalidaHTTP\";
                        servicio.CrearDirectorioPorRango = false;

                        listaTask.Add(Task.Run(() => servicio.AccionTask()));
                    }
                    catch (Exception ex)
                    {
                        LogUtil.Error(ex);
                    }
                }
                LogUtil.Info("Se inician " + listaTask.Count + "  hilos.");
                Task.WaitAll(listaTask.ToArray());
                LogUtil.Info("Terminan la ejecución todos los hilos (" + listaTask.Count + ").");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }
        }

        public void AccionTask()
        {
            try
            {
                var pathDirectorio = DirectorioSalida;
                if (CrearDirectorioPorRango)
                {
                    pathDirectorio += InidiceCreditoInicial + "_" + InidiceCreditoFinal + "\\";
                }
                if (!Directory.Exists(pathDirectorio))
                {
                    Directory.CreateDirectory(pathDirectorio);
                }
                LogUtil.Info("Inicia hilo de ejecución de " + InidiceCreditoInicial + " a " + InidiceCreditoFinal + " creditos.");
                
                ObtenerInformacion(InidiceCreditoInicial, InidiceCreditoFinal, pathDirectorio);
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
            }

        }




        //[TestMethod]
        public void ObtenContenidoHTML()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            try
            {
                ObtenerInformacion(210, 1999, @"..\..\TestOutput\SalidaHTTP\");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw ex;
            }
        }

        public void ObtenerInformacion(int indiceInicio, int indiceFin, string directorioSalida)
        {
            for (var indexCredito = indiceInicio; indexCredito <= indiceFin; indexCredito++)
            {
                LogUtil.Info("ProcesandoCredito " + indexCredito);
                var url = "http://ifit.condusef.gob.mx/ifit/ft_general_final.php?idnc=" + indexCredito + "&t=17&b=1";
                try
                {
                    var pathArchivoHtml = directorioSalida + "Credito" + indexCredito + ".html";
                    var pathArchivoJson = directorioSalida + "Credito" + indexCredito + ".json";
                    if (File.Exists(pathArchivoJson) && File.Exists(pathArchivoHtml))
                    {
                        LogUtil.Info("Ya existe Archivo para el credito " + indexCredito);
                        continue;
                    }
                    var response = client.GetByteArrayAsync(url).Result;
                    var responseString = Encoding.GetEncoding("iso-8859-1").GetString(response, 0, response.Length);
                    var decodeString = System.Web.HttpUtility.HtmlDecode(responseString);
                    if (!PatronFechaDeActualizacion.Match(decodeString).Success)
                    {
                        LogUtil.Info("No existe contenido para el credito " + indexCredito);
                        continue;
                    }
                    File.WriteAllText(pathArchivoHtml, decodeString);
                    var stringBuilder = new StringBuilder();
                    stringBuilder.Append("{");
                    AgregaAtributo(stringBuilder, "IdCredito", indexCredito.ToString());
                    EvaluaPatronFecha(decodeString, stringBuilder);
                    EvaluaFilesetSingleTable(decodeString, stringBuilder);
                    stringBuilder.Append("}");
                    var contenidoJson = PatronUltimacoma.Replace(stringBuilder.ToString(), new MatchEvaluator(ReplaceUltimaComa));
                    File.WriteAllText(pathArchivoJson, contenidoJson);
                }
                catch (Exception ex)
                {
                    LogUtil.Error(new Dictionary<string, object>()
                    {
                        { "Error en Archivo", url},
                        { "Excepsion", ex}
                    });
                }
            }
        }

        public void EvaluaPatronFecha(String decodeString, StringBuilder stringBuilder, int identacion = 0)
        {
            var valor = String.Empty;
            var match = PatronFechaDeActualizacion.Match(decodeString);
            if (match.Success && match.Groups.Count > 0)
            {
                valor = DepuraValor(match.Groups[1].Value);
                AgregaAtributo(stringBuilder, "FechaDeActualizacion", valor, identacion);
            }
        }

        public void EvaluaPatronA(String decodeString, StringBuilder stringBuilder, int identacion = 0)
        {
            foreach (var nombreAtributo in PatronesA.Keys)
            {
                var expReg = PatronesA[nombreAtributo];
                var valor = String.Empty;
                var match = expReg.Match(decodeString);
                if (match.Success && match.Groups.Count > 0)
                {
                    valor = DepuraValor(match.Groups[1].Value);
                    AgregaAtributo(stringBuilder, nombreAtributo, valor, identacion);
                }
            }
        }

        public void EvaluaPatronB(String decodeString, StringBuilder stringBuilder, int identacion = 0)
        {
            var matchesB = PatronB.Matches(decodeString);
            var cerrarSubSeccion = false;
            foreach (Match matchB in matchesB)
            {
                var nombreAtributo = DepuraNombre(matchB.Groups[1].Value);
                var valor = DepuraValor(matchB.Groups[2].Value);
                var subSeccion = EvaluaPatronPatronSeparadorRequisitos(matchB.Value, stringBuilder, identacion);
                if (subSeccion != null)
                {
                    if (cerrarSubSeccion)
                    {
                        CierraSeccion(stringBuilder, identacion);
                    }
                    AbrirSeccion(subSeccion, stringBuilder, identacion);
                    cerrarSubSeccion = true;
                }
                else
                {
                    AgregaAtributo(stringBuilder, nombreAtributo, valor, identacion);
                }
            }

            if (cerrarSubSeccion)
            {
                CierraSeccion(stringBuilder, identacion);
            }
        }

        public void EvaluaPatronC(String decodeString, StringBuilder stringBuilder, int identacion = 0)
        {
            var matchesC = PatronC.Matches(decodeString);
            var cerrarSubSeccion = false;
            foreach (Match matchC in matchesC)
            {
                var nombreAtributo = DepuraNombre(matchC.Groups[1].Value);
                var valor = DepuraValor(matchC.Groups[2].Value);
                var subSeccion = EvaluaPatronPatronSeparadorRequisitos(matchC.Value, stringBuilder, identacion);
                if (subSeccion != null)
                {
                    if (cerrarSubSeccion)
                    {
                        CierraSeccion(stringBuilder, identacion);
                    }
                    AbrirSeccion(subSeccion, stringBuilder, identacion);
                    cerrarSubSeccion = true;
                }
                else
                {   
                    AgregaAtributo(stringBuilder, nombreAtributo, valor, identacion);
                }
            }

            if (cerrarSubSeccion)
            {
                CierraSeccion(stringBuilder, identacion);
            }
        }

        public void EvaluaPatronE(String decodeString, StringBuilder stringBuilder, int identacion = 0)
        {
            var matchesE = PatronE.Matches(decodeString);
            var cerrarSubSeccion = false;
            foreach (Match matchE in matchesE)
            {
                var nombreAtributo = DepuraNombre(matchE.Groups[1].Value);
                var valor = DepuraValor(matchE.Groups[2].Value);
                var subSeccion = EvaluaPatronPatronSeparadorRequisitos(matchE.Value, stringBuilder, identacion);
                if (subSeccion != null)
                {
                    if (cerrarSubSeccion)
                    {
                        CierraSeccion(stringBuilder, identacion);
                    }
                    AbrirSeccion(subSeccion, stringBuilder, identacion);
                    cerrarSubSeccion = true;
                }
                else
                {
                    AgregaAtributo(stringBuilder, nombreAtributo, valor, identacion);
                }
            }

            if (cerrarSubSeccion)
            {
                CierraSeccion(stringBuilder, identacion);
            }
        }

        public void AbrirSeccion(String nombre,StringBuilder stringBuilder, int identacion = 0)
        {
            AgregaIdentacion(stringBuilder, identacion);
            stringBuilder.Append('"');
            stringBuilder.Append(nombre);
            stringBuilder.Append("\":{\r\n");
        }

        public void CierraSeccion(StringBuilder stringBuilder, int identacion = 0)
        {
            stringBuilder.Append("\r\n");
            AgregaIdentacion(stringBuilder, identacion);
            stringBuilder.Append("}\r\n");
        }

        public String EvaluaPatronPatronSeparadorRequisitos(String decodeString, StringBuilder stringBuilder,int identacion = 0)
        {
            var match = PatronSeparadorRequisitosA.Match(decodeString);
            var patronEncontrado = false;
            String nombreAtributo = null;
            if (match.Success)
            {
                nombreAtributo = DepuraNombre(match.Groups[1].Value);
            }
            else
            {
                match = PatronSeparadorRequisitosB.Match(decodeString);
                if (match.Success)
                {
                    nombreAtributo = DepuraNombre(match.Groups[1].Value);
                }
            }

            return nombreAtributo;
        }
        public void EvaluaFilesetSingleTable(String decodeString, StringBuilder stringBuilder)
        {
            var matches = PatronFileSet.Matches(decodeString);
            foreach (Match match in matches)
            {
                var nombreObjeto = DepuraNombre(match.Groups[1].Value);
                var contenido = match.Groups[2].Value;
                stringBuilder.Append('"');
                stringBuilder.Append(nombreObjeto);
                
                if (PatronConceptoTablaA.Match(contenido).Success)
                {
                    stringBuilder.Append("\": {\r\n");
                    EvaluaContenidoMultiplesTablas(contenido, stringBuilder, 1);
                    stringBuilder.Append("\r\n},\r\n");
                }
                else if (PatronListaFlecha.Match(contenido).Success)
                {
                    stringBuilder.Append("\": [\r\n");
                    EvaluaContenidoListado(contenido, stringBuilder, 1);
                    stringBuilder.Append("\r\n],");
                }
                else if (PatronNoAplica.Match(contenido).Success)
                {
                    stringBuilder.Append("\": \"No aplica\",\r\n");
                }
                else
                {
                    stringBuilder.Append("\": {\r\n");
                        EvaluaPatronA(contenido, stringBuilder, 1);
                        EvaluaPatronB(contenido, stringBuilder, 1);
                        EvaluaPatronC(contenido, stringBuilder, 1);
                        EvaluaPatronE(contenido, stringBuilder, 1);
                    stringBuilder.Append("\r\n},\r\n");
                }
                
            }
        }


        public void EvaluaContenidoListado(String codigoMultiplesTablas, StringBuilder stringBuilder, int identacion)
        {
            var matches = PatronListaFlecha.Matches(codigoMultiplesTablas);
            String nombreTabla = null;
            foreach (Match match in matches)
            {
                var valor = DepuraValor(match.Groups[1].Value);
                AgregaIdentacion(stringBuilder, identacion);
                stringBuilder.Append('"');
                stringBuilder.Append(valor);
                stringBuilder.Append("\",\r\n");
            }
        }

        public void EvaluaContenidoMultiplesTablas(String codigoMultiplesTablas, StringBuilder stringBuilder, int identacion)
        {
            var matches = PatronTabla.Matches(codigoMultiplesTablas);
            String nombreTabla = null;
            foreach (Match match in matches)
            {
                var contenidoTabla = match.Value;
                var matchTitulo = PatronTablaTitulo.Match(contenidoTabla);
                if (matchTitulo.Success)
                {
                    nombreTabla = matchTitulo.Groups[1].Value;
                }
                else
                {
                    if (nombreTabla == null)
                    {
                        AgregaIdentacion(stringBuilder, identacion);
                        stringBuilder.Append("\"Valores\": [\r\n");
                        EvaluaTablaA(contenidoTabla, stringBuilder, identacion + 1);
                        stringBuilder.Append("]");
                    }
                    else
                    {
                        AgregaIdentacion(stringBuilder, identacion);
                        stringBuilder.Append('"');
                        stringBuilder.Append(nombreTabla);
                        stringBuilder.Append("\": [\r\n");
                        EvaluaTablaA(contenidoTabla, stringBuilder, (identacion + 1));
                        stringBuilder.Append("\r\n\t],\r\n");
                    }
                }
            }
        }
        public void EvaluaTablaA(String codigoTabla, StringBuilder stringBuilder, int identacion)
        {
            var matches = PatronFilaDatosTablaA.Matches(codigoTabla);
            foreach (Match match in matches)
            {
                var contenidoFila = match.Value;
                if (PatronTituloDoscolumnas.IsMatch(contenidoFila))
                {
                    continue;
                }

                var matchesCeldas = PatronCelda.Matches(contenidoFila);
                var indiceCelda = 0;
                if (matchesCeldas.Count == 11)
                {
                    AgregaIdentacion(stringBuilder, identacion);
                    stringBuilder.Append("{\r\n");
                    foreach (Match matchCelda in matchesCeldas)
                    {
                        var nombre = AtributosTablaA[indiceCelda];
                        var valor = DepuraValor(matchCelda.Groups[1].Value);
                        AgregaAtributo(stringBuilder, nombre, valor, identacion + 1);
                        indiceCelda++;
                    }
                    stringBuilder.Append("\r\n");
                    AgregaIdentacion(stringBuilder, identacion);
                    stringBuilder.Append("},\r\n");
                }
                if (matchesCeldas.Count == 2)
                {
                    AgregaIdentacion(stringBuilder, identacion);
                    stringBuilder.Append("{\r\n");
                    foreach (Match matchCelda in matchesCeldas)
                    {
                        var nombre = AtributosTablaA_DosColumna[indiceCelda];
                        var valor = DepuraValor(matchCelda.Groups[1].Value);
                        AgregaAtributo(stringBuilder, nombre, valor, identacion + 1);
                        indiceCelda++;
                    }
                    stringBuilder.Append("\r\n");
                    AgregaIdentacion(stringBuilder, identacion);
                    stringBuilder.Append("},\r\n");
                }
            }
        }

        public String DepuraNombre(String nombreAtributo)
        {
            var nombreMatch = PatronNombre.Match(nombreAtributo);
            if (nombreMatch.Success)
            {
                nombreAtributo = nombreMatch.Groups[2].Value;
            }
            nombreAtributo = nombreAtributo
                    .Replace('á', 'a').Replace('é', 'e').Replace('í', 'i').Replace('ó', 'o').Replace('ú', 'u')
                    .Replace('Á', 'A').Replace('É', 'E').Replace('Í', 'I').Replace('Ó', 'O').Replace('Ú', 'U')
                    .Replace('"', '\'').Replace("($)", "").Replace("(%)", "").Trim();
            nombreAtributo = PatronCamel.Replace(nombreAtributo, new MatchEvaluator(ReplaceCamel));
            return nombreAtributo;
        }

        public String DepuraValor(String valor)
        {
            try
            {
                valor = valor.Replace('"', '\'')
                .Replace("\t", "\\t")
                .Replace("\r", "\\r")
                .Replace("\n", "\\n")
                .Replace("\x10",String.Empty).Replace("\x13", String.Empty).Replace("\x00", String.Empty);
                valor = valor.Trim();

                if (PatronChekbox.Match(valor).Success)
                {
                    valor = (PatronCheked.Match(valor).Success) ? "true" : "false";
                }
                if (valor.Contains("imagenes/si.png"))
                {
                    valor = "true";
                }
                return valor;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw ex;
            }
        }

        public void AgregaAtributo(StringBuilder stringBuilder, String nombreAtributo, String valor, int identacion = 0)
        {
            AgregaIdentacion(stringBuilder, identacion);
            stringBuilder.Append('"');
            stringBuilder.Append(nombreAtributo);
            stringBuilder.Append("\": \"");
            stringBuilder.Append(valor);
            stringBuilder.Append("\",\r\n");
        }

        public void AgregaIdentacion(StringBuilder stringBuilder, int identacion)
        {
            if (identacion > 0)
            {
                for (var index = 0; index < identacion; index++)
                {
                    stringBuilder.Append('\t');
                }
            }
        }

        public string ReplaceCamel(Match m)
        {
            return m.Value.Trim().ToUpper();
        }
        public string ReplaceUltimaComa(Match m)
        {
            return m.Groups[1].Value;
        }

        [TestMethod]
        public void ReporcesaHTML_a_JSON()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            IList<Task> listaTask = new List<Task>();
            string[] subdirectoryEntries = Directory.GetDirectories("..\\..\\TestOutput\\SalidaHTTPThreads\\");
            foreach (string subdirectory in subdirectoryEntries)
            {
                var servicio = new SolicitudHTTPTest();
                servicio.DirectorioAReporcesar = subdirectory;
                listaTask.Add(Task.Run(() => servicio.ReprocesaArchivos()));
            }
            LogUtil.Info("Se inician " + listaTask.Count + "  hilos.");
            Task.WaitAll(listaTask.ToArray());
            LogUtil.Info("Terminan la ejecución todos los hilos (" + listaTask.Count + ").");
        }


        public void ReprocesaArchivos()
        {
            // Process the list of files found in the directory.
            LogUtil.Info("Se inicia procesamiento de directorio \"" + DirectorioAReporcesar + "\".");
            string[] fileEntries = Directory.GetFiles(DirectorioAReporcesar);
            foreach (string fileName in fileEntries)
                ProcessFile(fileName);
        }

        
        public void ProcessFile(string path)
        {
            if (path.EndsWith(".html"))
            {
                try
                {
                    var indexCredito = ExpresionArchivo.Match(Path.GetFileName(path)).Groups[1].Value;
                    //var pathArchivoJson = path.Replace("html","json");
                    string decodeString = File.ReadAllText(path);
                    LogUtil.Info("Se inicia procesamiento de credito \"" + indexCredito + "\".");
                    var stringBuilder = new StringBuilder();
                    stringBuilder.Append("{");
                    AgregaAtributo(stringBuilder, "IdCredito", indexCredito.ToString());
                    EvaluaPatronFecha(decodeString, stringBuilder);
                    EvaluaFilesetSingleTable(decodeString, stringBuilder);
                    stringBuilder.Append("}");
                    var contenidoJson = PatronUltimacoma.Replace(stringBuilder.ToString(), new MatchEvaluator(ReplaceUltimaComa));
                    //File.WriteAllText(pathArchivoJson, contenidoJson);
                    ConcatenaContenido(path, contenidoJson);
                }
                catch (Exception ex)
                {
                    LogUtil.Error(ex);
                }
            }
        }

        public void ConcatenaContenido(string path, string contenido)
        {
            var pathArchivoJson = Path.GetDirectoryName(path) + "\\creditos.json";
            String contents = EspaciosInicio.Replace(contenido, String.Empty);
            contents = SaltosLinea.Replace(contents, String.Empty);
            using (StreamWriter sw = File.AppendText(pathArchivoJson))
            {
                sw.WriteLine(contents);
            }
        }

        //[TestMethod]
        public void ProcesaArchivoPrueba()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            ProcessFile(@"C:\2HSoftware\Proyectos\AbaxXBRL\AbaxXBRL\TestAbaxXBRL\TestOutput\SalidaHTTPThreads\10000_10999\Credito10752.html");
        }

    }
}
