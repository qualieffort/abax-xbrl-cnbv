using AbaxXBRLCore.MongoDB.Services;
using AbaxXBRLCore.MongoDB.Services.Impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Realiza el registro multi task para el registro por concepto
    /// </summary>
    [TestClass]
    public class TestConsumerTaskHechos
    {

        /// <summary>
        /// Prueba que obtiene las emisoras reportadas
        /// </summary>
        [TestMethod]
        public void RegistrarHechosPorConcepto()
        {
            var factory = new ConsumerFactoryTaskHechoImpl();
            factory.numeroMaximoConsumidores = 5;

            var random = new Random(10000);
            for(int i=0;i<100;i++){
                factory.distribuirHecho(null);
            }
            

        }
    }
}
