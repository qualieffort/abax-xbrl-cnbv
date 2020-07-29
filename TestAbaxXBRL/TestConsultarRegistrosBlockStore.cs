using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRLBlockStore.Common.Connection.MongoDb;
using AbaxXBRLBlockStore.BlockStore;
using AbaxXBRLBlockStore.Services;
using System.Collections.Generic;
using MongoDB.Bson;
using System.Diagnostics;
using MongoDB.Driver;
using System.Text.RegularExpressions;
using AbaxXBRLCore.Common.Entity;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Services.Implementation;
using AbaxXBRLCore.Repository.Implementation;
using Newtonsoft.Json;
using System.IO;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Realiza las consultas de registros del blockstore
    /// </summary>
    [TestClass]
    public class TestConsultarRegistrosBlockStore
    {

        string lineaCsv = "codigoHashRegistro,EspacioNombresPrincipal,idEntidad,espaciodeNombresEntidad,conceptoId, conceptoNombre , conceptoEspacioNombresTaxonomia, conceptoEspacioNombres , conceptoEtiquetaLenguaje,conceptoEtiquetaValor , conceptoEtiquetaRol, tipoDato, esTipoDatoNumerico,valor, valorRedondeado, decimales, esTipoDatoFraccion, esValorNil, periodoTipo, periodoFechaInicio,periodoFechaFin,periodoInstante, unidadEsDivisoria, unidadMedidaNombre, unidadMedidaEspacioNombres,dimensionExplicita, dimensionQNameDimension, IdDimension, dimensionQNameItemMiembro, dimensionIdItemMiembro,  dimensionEtiquetasDimensionLenguaje, dimensionEtiquetasValor, dimensionEtiquetasRol, dimensionEtiquetasMiembroLenguaje, dimensionEtiquetasMiembroValor, dimensionEtiquetasMiembroRol";


        [TestMethod]
        public void CrearArchivoCSV() { 
        

        int counter = 0;
        string line;

        JsonSerializerSettings settings = new JsonSerializerSettings();
        settings.NullValueHandling = NullValueHandling.Ignore;

        // Read the file and display it line by line.
        System.IO.StreamReader file = new System.IO.StreamReader("C:/Users/Luis Angel/Desktop/ipromotion/archivoSalida.txt");
        StreamWriter csvFile = new StreamWriter("C:/Users/Luis Angel/Desktop/ipromotion/archivoSalida.csv");


        List<EntHecho> hechos =new List<EntHecho>();
        while ((line = file.ReadLine()) != null)
        {
            var json = depurarIdentificadorBson(line);
            var hecho = Newtonsoft.Json.JsonConvert.DeserializeObject<EntHecho>(json, settings);

            String hechoWr=lineaCsv.Replace("codigoHashRegistro",hecho.codigoHashRegistro);
            hechoWr=hechoWr.Replace("EspacioNombresPrincipal",hecho.espacioNombresPrincipal);
            hechoWr=hechoWr.Replace("idEntidad",hecho.idEntidad);
            hechoWr=hechoWr.Replace("espaciodeNombresEntidad",hecho.espaciodeNombresEntidad);
            hechoWr=hechoWr.Replace("conceptoId",hecho.concepto.Id);
            hechoWr=hechoWr.Replace("conceptoNombre",hecho.concepto.Nombre);
            hechoWr=hechoWr.Replace("conceptoEspacioNombresTaxonomia",hecho.concepto.EspacioNombresTaxonomia);
            hechoWr=hechoWr.Replace("conceptoEspacioNombres",hecho.concepto.EspacioNombres);
            hechoWr=hechoWr.Replace("conceptoEtiquetaLenguaje",hecho.concepto.etiqueta[0].lenguaje);
            hechoWr=hechoWr.Replace("conceptoEtiquetaValor",hecho.concepto.etiqueta[0].valor);
            hechoWr=hechoWr.Replace("conceptoEtiquetaRol",hecho.concepto.etiqueta[0].roll);
            hechoWr=hechoWr.Replace("tipoDato",hecho.tipoDato);
            hechoWr=hechoWr.Replace("esTipoDatoNumerico",hecho.esTipoDatoNumerico.ToString());
            hechoWr=hechoWr.Replace("valor",hecho.valor);
            hechoWr=hechoWr.Replace("valorRedondeado",hecho.valorRedondeado);
            hechoWr=hechoWr.Replace("decimales",hecho.decimales);
            hechoWr=hechoWr.Replace("esTipoDatoFraccion",(hecho.esTipoDatoFraccion!=null?hecho.esTipoDatoFraccion.Value.ToString():"false"));
            hechoWr=hechoWr.Replace("esValorNil",hecho.esValorNil!=null?hecho.esValorNil.Value.ToString():"false");
            hechoWr=hechoWr.Replace("periodoTipo",hecho.periodo.Tipo.ToString());
            hechoWr=hechoWr.Replace("periodoFechaInicio",hecho.periodo.FechaInicio!=null?hecho.periodo.FechaInicio.Value.ToString("dd/MM/yyyy"):"");
            hechoWr=hechoWr.Replace("periodoFechaFin",hecho.periodo.FechaFin!=null?hecho.periodo.FechaFin.Value.ToString("dd/MM/yyyy"):"");
            hechoWr=hechoWr.Replace("periodoInstante",hecho.periodo.FechaInstante!=null?hecho.periodo.FechaInstante.Value.ToString("dd/MM/yyyy"):"");
            hechoWr = hechoWr.Replace("unidadEsDivisoria", hecho.unidades!=null?hecho.unidades.EsDivisoria.ToString() : "false");
            hechoWr=hechoWr.Replace("unidadMedidaNombre",hecho.unidades!=null?hecho.unidades.Medidas[0].Nombre:"");
            hechoWr=hechoWr.Replace("unidadMedidaEspacioNombres",hecho.unidades!=null?hecho.unidades.Medidas[0].EspacioNombres:"");

            if(hecho.dimension!= null && hecho.dimension.Length>0){
                hechoWr=hechoWr.Replace("dimensionExplicita",hecho.dimension[0].Explicita.ToString());
                hechoWr=hechoWr.Replace("dimensionQNameDimension",hecho.dimension[0].QNameDimension);
                hechoWr=hechoWr.Replace("IdDimension",hecho.dimension[0].IdDimension);
                hechoWr=hechoWr.Replace("dimensionQNameItemMiembro",hecho.dimension[0].QNameItemMiembro);
                hechoWr=hechoWr.Replace("dimensionIdItemMiembro",hecho.dimension[0].IdItemMiembro);
                hechoWr=hechoWr.Replace("dimensionEtiquetasDimensionLenguaje",hecho.dimension[0].etiquetasDimension[0].lenguaje);
                hechoWr=hechoWr.Replace("dimensionEtiquetasValor",hecho.dimension[0].etiquetasDimension[0].valor);
                hechoWr=hechoWr.Replace("dimensionEtiquetasRol",hecho.dimension[0].etiquetasDimension[0].roll);
                hechoWr=hechoWr.Replace("dimensionEtiquetasMiembroLenguaje",hecho.dimension[0].etiquetasMiembro[0].lenguaje);
                hechoWr=hechoWr.Replace("dimensionEtiquetasMiembroValor",hecho.dimension[0].etiquetasMiembro[0].valor);
                hechoWr=hechoWr.Replace("dimensionEtiquetasMiembroRol",hecho.dimension[0].etiquetasMiembro[0].roll);
            }else{
                hechoWr=hechoWr.Replace("dimensionExplicita","");
                hechoWr=hechoWr.Replace("dimensionQNameDimension","");
                hechoWr=hechoWr.Replace("IdDimension","");
                hechoWr=hechoWr.Replace("dimensionQNameItemMiembro","");
                hechoWr=hechoWr.Replace("dimensionIdItemMiembro","");
                hechoWr=hechoWr.Replace("dimensionEtiquetasDimensionLenguaje","");
                hechoWr=hechoWr.Replace("dimensionEtiquetasValor","");
                hechoWr=hechoWr.Replace("dimensionEtiquetasRol","");
                hechoWr=hechoWr.Replace("dimensionEtiquetasMiembroLenguaje","");
                hechoWr=hechoWr.Replace("dimensionEtiquetasMiembroValor","");
                hechoWr=hechoWr.Replace("dimensionEtiquetasMiembroRol","");
            }
            


            
            csvFile.WriteLine(hechoWr);
            counter++;
        }
        csvFile.Close();
        file.Close();
        }

        private string depurarIdentificadorBson(string json)
        {
            return json.Replace("\")", "\"").Replace("ObjectId(", "").Replace("ISODate(", "");
        }

        /// <summary>
        /// Prueba que obtiene las emisoras reportadas
        /// </summary>
        [TestMethod]
        public void ConsultarEmisorasReportadas()
        {
            var conectionServer = new ConnectionServer
            {
                //connectionString = "mongodb://usr_mongodb:usr_mongodb@ds027325-a0.mongolab.com:27325,ds027325-a1.mongolab.com:27325/abaxxbrl?replicaSet=rs-ds027325",
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                //connectionString = "mongodb://172.16.235.123:27017",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto"
            };

            var resultadoOperacion = BlockStoreHechoService.ConsultarEmisoras();

            var valoresDistintos = resultadoOperacion.InformacionExtra;

            Debug.WriteLine(valoresDistintos.ToString());
            
        }


        /// <summary>
        /// Prueba que obtiene las emisoras reportadas paginadas
        /// </summary>
        [TestMethod]
        public void ConsultarUnidades()
        {
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_mongodb:usr_mongodb@ds027325-a0.mongolab.com:27325,ds027325-a1.mongolab.com:27325/abaxxbrl?replicaSet=rs-ds027325",
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
                //miBaseDatos = "abaxxbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto"
            };

            var resultadoOperacion = BlockStoreHechoService.ConsultarUnidades();

            var valores = resultadoOperacion.InformacionExtra;

            Debug.WriteLine(valores.ToString());
        }

        [TestMethod]
        public void TestJson() {

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto"
            };

            var json = "[{ \"_id\" : ObjectId(\"56653e1dfb41e40390c9ccf5\"), \"Id\" : \"shares\", \"Tipo\" : \"1\", \"MedidasNumerador\" : \"\", \"MedidasDenominador\" : \"\", \"Medidas\" : [{ \"Nombre\" : \"shares\", \"EspacioNombres\" : \"http://www.xbrl.org/2003/instance\", \"Etiqueta\" : \"\" }] }, { \"_id\" : ObjectId(\"56653e35fb41e40390c9ccf6\"), \"Id\" : \"pure\", \"Tipo\" : \"1\", \"MedidasNumerador\" : \"\", \"MedidasDenominador\" : \"\", \"Medidas\" : [{ \"Nombre\" : \"pure\", \"EspacioNombres\" : \"http://www.xbrl.org/2003/instance\", \"Etiqueta\" : \"\" }] }, { \"_id\" : ObjectId(\"56653e3efb41e40390c9ccf7\"), \"Id\" : \"MXN_shares\", \"Tipo\" : \"2\", \"MedidasNumerador\" : \"System.Collections.Generic.List`1[AbaxXBRLCore.Viewer.Application.Dto.MedidaDto]\", \"MedidasDenominador\" : \"System.Collections.Generic.List`1[AbaxXBRLCore.Viewer.Application.Dto.MedidaDto]\" }, { \"_id\" : ObjectId(\"56653e42fb41e40390c9ccf8\"), \"Id\" : \"MXN\", \"Tipo\" : \"1\", \"MedidasNumerador\" : \"\", \"MedidasDenominador\" : \"\", \"Medidas\" : [{ \"Nombre\" : \"MXN\", \"EspacioNombres\" : \"http://www.xbrl.org/2003/iso4217\", \"Etiqueta\" : \"\" }] }, { \"_id\" : ObjectId(\"566a6c98fb41e419cca16cbb\"), \"Nombre\" : \"MXN\", \"EspacioNombres\" : \"http://www.xbrl.org/2003/iso4217\", \"Etiqueta\" : \"\" }, { \"_id\" : ObjectId(\"566a6c98fb41e419cca16cbc\"), \"Nombre\" : \"shares\", \"EspacioNombres\" : \"http://www.xbrl.org/2003/instance\", \"Etiqueta\" : \"\" }, { \"_id\" : ObjectId(\"566a6c99fb41e419cca16cbd\"), \"Nombre\" : \"pure\", \"EspacioNombres\" : \"http://www.xbrl.org/2003/instance\", \"Etiqueta\" : \"\" }]";

            var result = Regex.Match(json, @"ObjectId\(([^\)]*)\)").Value;
            var id = result.Replace("ObjectId(", string.Empty).Replace(")", String.Empty);
            //var valorJson =  json.Replace(result, id);
            var valorJson = json.Replace("\")", "\"").Replace("ObjectId(", "");


        }

        /// <summary>
        /// Prueba que obtiene los espacios de nombres principal - Taxonomia
        /// </summary>
        [TestMethod]
        public void ConsultarTaxonomias()
        {
            var conectionServer = new ConnectionServer
            {
                //connectionString = "mongodb://usr_mongodb:usr_mongodb@ds027325-a0.mongolab.com:27325,ds027325-a1.mongolab.com:27325/abaxxbrl?replicaSet=rs-ds027325",
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto"
            };

            var resultadoOperacion = BlockStoreHechoService.ConsultarTaxonomias();

            var valores = resultadoOperacion.InformacionExtra;

            Debug.WriteLine(valores.ToString());
        }


        /// <summary>
        /// Prueba que obtiene los conceptos registrados distintos
        /// </summary>
        [TestMethod]
        public void ConsultarConceptos()
        {
            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_mongodb:usr_mongodb@ds027325-a0.mongolab.com:27325,ds027325-a1.mongolab.com:27325/abaxxbrl?replicaSet=rs-ds027325",
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl" 
                //miBaseDatos = "abaxxbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto"
            };

            //var resultadoOperacion = BlockStoreHechoService.ConsultarConceptos("http://www.bmv.com.mx/fr/ics/2012-04-01/ifrs-mx-ics-entryPoint-all");
            var resultadoOperacion = BlockStoreHechoService.ConsultarConceptos("http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05");
            
            var valores = resultadoOperacion.InformacionExtra;

            Debug.WriteLine(valores.ToString());
        }

        /// <summary>
        /// Prueba que obtiene las dimensiones registradas
        /// </summary>
        [TestMethod]
        public void ConsultarDimensiones() {

            var conectionServer = new ConnectionServer
            {
                //miConnectionString = "mongodb://usr_mongodb:usr_mongodb@ds027325-a0.mongolab.com:27325,ds027325-a1.mongolab.com:27325/abaxxbrl?replicaSet=rs-ds027325",
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                miBaseDatos = "repositorioAbaxXbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto"
            };

            var resultadoOperacion = BlockStoreHechoService.ConsultarDimensionesPorConcepto("ifrs-full_Equity","");
            var valores = resultadoOperacion.InformacionExtra;

            Debug.WriteLine(valores.ToString());


        }


        /// <summary>
        /// Prueba que obtiene los hechos del repositorio con el filtro de consulta
        /// </summary>
        [TestMethod]
        public void ConsultarRepositorioInformacion()
        {

            var conectionServer = new ConnectionServer
            {
                miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@ds035185-a0.mongolab.com:35185,ds035185-a1.mongolab.com:35185/repositorioabaxxbrl?replicaSet=rs-ds035185",
                //miConnectionString = "mongodb://usr_RepositorioInformacion:4dm1n1str4t0r@172.16.235.123:27017/repositorioAbaxXbrl",
                //miBaseDatos = "repositorioAbaxXbrl"
                miBaseDatos = "repositorioabaxxbrl"
            };

            conectionServer.init();

            var conexion = new Conexion(conectionServer);
            var blockStoreDocIns = new BlockStoreDocumentoInstancia(conexion);
            var blockStoreConsulta = new BlockStoreConsulta(conexion);
            var GrupoEmpresaService = new GrupoEmpresaService
            {
                EmpresaRepository = new EmpresaRepository(),
                GrupoEmpresaRepository = new GrupoEmpresaRepository(),
                RegistroAuditoriaRepository = new RegistroAuditoriaRepository()
            };

            var BlockStoreHechoService = new BlockStoreHechoService
            {
                BlockStoreDocumentoInstancia = blockStoreDocIns,
                BlockStoreConsulta = blockStoreConsulta,
                Collection = "BlockStoreHecho",
                CollectionDimension = "BlockStoreDimension",
                CollectionEmpresas = "BlockStoreEmpresa",
                CollectionUnidades = "BlockStoreUnidad",
                CollectionConcepto = "BlockStoreConcepto",
                GrupoEmpresaService = GrupoEmpresaService
            };

            var filtroConsulta = new EntFiltroConsultaHecho();
            filtroConsulta.filtros = new EntFiltrosAdicionales();
            
            filtroConsulta.filtros.entidadesId = new string[2];
            filtroConsulta.filtros.entidadesId[0] = "DAIMLER";
            filtroConsulta.filtros.entidadesId[1] = "AEROMEX";

            filtroConsulta.filtros.unidades = new string[2];
            filtroConsulta.filtros.unidades[0] = "MXN";
            filtroConsulta.filtros.unidades[1] = "USD";

            filtroConsulta.filtros.periodos = new EntPeriodo[3];
            
            filtroConsulta.filtros.periodos[0] = new EntPeriodo();
            filtroConsulta.filtros.periodos[1] = new EntPeriodo();
            filtroConsulta.filtros.periodos[2] = new EntPeriodo();

            filtroConsulta.filtros.periodos[0].FechaInicio = new DateTime(2015, 1, 1);
            filtroConsulta.filtros.periodos[0].FechaFin = new DateTime(2015, 6, 30);

            filtroConsulta.filtros.periodos[1].FechaInicio = new DateTime(2015, 4, 1);
            filtroConsulta.filtros.periodos[1].FechaFin = new DateTime(2015, 6, 30);

            filtroConsulta.filtros.periodos[2].FechaInicio = new DateTime(2014, 4, 1);
            filtroConsulta.filtros.periodos[2].FechaFin = new DateTime(2014, 12, 31);
            

            filtroConsulta.idioma = "es";
            filtroConsulta.conceptos = new EntConcepto[6];
            filtroConsulta.conceptos[0] = new EntConcepto();
            filtroConsulta.conceptos[1] = new EntConcepto();
            filtroConsulta.conceptos[2] = new EntConcepto();
            filtroConsulta.conceptos[3] = new EntConcepto();
            filtroConsulta.conceptos[4] = new EntConcepto();
            filtroConsulta.conceptos[5] = new EntConcepto();


            filtroConsulta.conceptos[0].Id = "ifrs-full_AdministrativeExpense";
            filtroConsulta.conceptos[0].EsAbstracto = false;
            filtroConsulta.conceptos[0].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[0].Indentacion = 1;
            filtroConsulta.conceptos[0].orden = 1;

            

            


            filtroConsulta.conceptos[1].Id = "ifrs-full_DistributionCosts";
            filtroConsulta.conceptos[1].EsAbstracto = false;
            filtroConsulta.conceptos[1].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[1].Indentacion = 1;
            filtroConsulta.conceptos[1].orden = 2;

            filtroConsulta.conceptos[2].Id = "ifrs-full_Inventories";
            filtroConsulta.conceptos[2].EsAbstracto = false;
            filtroConsulta.conceptos[2].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[2].Indentacion = 1;
            filtroConsulta.conceptos[2].orden = 2;

            filtroConsulta.conceptos[3].Id = "ifrs-full_Equity";
            filtroConsulta.conceptos[3].EsAbstracto = false;
            filtroConsulta.conceptos[3].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[3].Indentacion = 2;
            filtroConsulta.conceptos[3].orden = 2;
            filtroConsulta.conceptos[3].InformacionDimensional = new EntInformacionDimensional[1];
            filtroConsulta.conceptos[3].InformacionDimensional[0] = new EntInformacionDimensional();
            filtroConsulta.conceptos[3].InformacionDimensional[0].Explicita = true;
            filtroConsulta.conceptos[3].InformacionDimensional[0].IdDimension = "ifrs-full_ComponentsOfEquityAxis";
            filtroConsulta.conceptos[3].InformacionDimensional[0].IdItemMiembro = "ifrs-full_OtherReservesMember";
            filtroConsulta.conceptos[3].InformacionDimensional[0].QNameDimension = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:ComponentsOfEquityAxis";
            filtroConsulta.conceptos[3].InformacionDimensional[0].QNameItemMiembro = "http://xbrl.ifrs.org/taxonomy/2014-03-05/ifrs-full:OtherReservesMember";





            filtroConsulta.conceptos[4].Id = "ifrs_mx-cor_20141205_ComercioExteriorBancarios";
            filtroConsulta.conceptos[4].EsAbstracto = false;
            filtroConsulta.conceptos[4].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[4].Indentacion = 2;
            filtroConsulta.conceptos[4].orden = 5;
            filtroConsulta.conceptos[4].InformacionDimensional = new EntInformacionDimensional[1];
            filtroConsulta.conceptos[4].InformacionDimensional[0] = new EntInformacionDimensional();
            filtroConsulta.conceptos[4].InformacionDimensional[0].Explicita = false;
            filtroConsulta.conceptos[4].InformacionDimensional[0].IdDimension = "ifrs_mx-cor_20141205_InstitucionEje";
            filtroConsulta.conceptos[4].InformacionDimensional[0].QNameDimension = "http://bmv.com.mx/ifrs_mx-cor_20141205/full_ifrs_mx-cor_2014-12-05:InstitucionEje";
            filtroConsulta.conceptos[4].InformacionDimensional[0].Filtro = "TOTAL";


            filtroConsulta.conceptos[5].Id = "ifrs-mc_DisclosureOfResultsOfOperationsAndProspectsExplanatory";
            filtroConsulta.conceptos[5].EsAbstracto = false;
            filtroConsulta.conceptos[5].EspacioNombresTaxonomia = "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05";
            filtroConsulta.conceptos[5].Indentacion = 3;
            filtroConsulta.conceptos[5].orden = 6;



            var filtroJson = JsonConvert.SerializeObject(filtroConsulta);

            

            var resultado = BlockStoreHechoService.ConsultarRepositorio(filtroConsulta,1,100);

            Debug.WriteLine(resultado.ToString());






        }



    }
}
