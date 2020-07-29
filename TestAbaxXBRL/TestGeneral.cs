using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Spring.Testing.Microsoft;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.CellStore.Util;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestGeneral
    {
        [TestMethod]
        public void TestDepuraJSON()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            var stringAux = "\"_id\" : ObjectId(\"5a999af09e50b407b8f4c0f7\"),\"FechaInstante\" : ISODate(\"2016-12-31T00:00:00.000Z\")";
            var ajustada = CellStoreUtil.DepurarIdentificadorBson(stringAux);
            LogUtil.Info("\r\nTextoOriginal: " + stringAux + "\r\nTextoAjustado: " + ajustada);
        }
    }
}
