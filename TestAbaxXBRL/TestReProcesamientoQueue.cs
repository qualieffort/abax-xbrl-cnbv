using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Spring.Testing.Microsoft;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.Services;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Distribucion.Ems;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Prueba unitaria para el reprocesamiento de archivos.
    /// </summary>
    [TestClass]
    public class TestReProcesamientoQueue : AbstractDependencyInjectionSpringContextTests
    {
        protected override string[] ConfigLocations
        {
            get
            {
                return new string[]
                {
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/common.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/repository.xml",
                    
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config/services.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config/servicesrest.xml",
                    
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/services_desarrollo.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.custom/servicesrest_mongodisable.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/bitacora.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/transaccion.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templates.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config/templatesold.xml",
                    "assembly://AbaxXBRLCore/AbaxXBRLCore.Config.Reports/reportesXBRL.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config/connectionMongoDB.xml",
                    //"assembly://AbaxXBRLCore/AbaxXBRLCore.Config/serviceBlockStore.xml",
                };
            }
        }

        IList<IList<String>> ElementosReProcesar = new List<IList<String>>()
        {
            new List<String>(){"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/pros_H_entry_point_2016-08-22","2HSOFT" },
            new List<String>(){"http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_N_entry_point_2016-08-22","SFPLUS" },
        };

        /// <summary>
        /// Envia los documentos indicaos en la lista para su re procesamiento.
        /// </summary>
        [TestMethod]
        public void ReprocesaArchivosQueue()
        {
            var ServicioAlmacenamiento = (IAlmacenarDocumentoInstanciaService)applicationContext.GetObject("AlmacenarDocumentoInstanciaService");
            var BitacoraVersionDocumentoService = (IBitacoraVersionDocumentoService)applicationContext.GetObject("BitacoraVersionDocumentoService");
            //var ServicioXBRLGateway = (ProcesarDocumentoXBRLEmsGateway)applicationContext.GetObject("ProcesarDocumentoXBRLGateway");

            foreach (var elemento in ElementosReProcesar)
            {
                var espacioNombres = elemento[0];
                var clavePizarra = elemento[1];
                var ultimaVersion = ServicioAlmacenamiento.ObtenUltimaDistribucionDocumento(espacioNombres, clavePizarra);
                var idDocumentoInstancia = ultimaVersion.First().Key;
                var version = ultimaVersion.First().Value;
                var listaIdsDistribuciones = ServicioAlmacenamiento.ObtenIdsDistribuciones(idDocumentoInstancia);
                foreach (var idDistribucion in listaIdsDistribuciones)
                {
                    ServicioAlmacenamiento.ActualizaEstadoDistribucion(idDistribucion, DistribucionDocumentoConstants.DISTRIBUCION_ESTATUS_ERROR);
                    var idBVersion = BitacoraVersionDocumentoService.ObtenBitacoraVersionDocumentoId(idDistribucion);
                    var versionDoc = BitacoraVersionDocumentoService.ObtenerVersionDocumentoInstanciaSinDatosPorIdBitacoraVersionDocumento(idBVersion);
                    if (versionDoc != null)
                    {

                        //ServicioXBRLGateway.EnviarSolicitudProcesarXBRL(versionDoc.IdDocumentoInstancia, versionDoc.Version);

                    }
                }
            }
        }


    }
}
