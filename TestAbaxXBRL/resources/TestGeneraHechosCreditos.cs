using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.CellStore.Services.Impl;

namespace TestAbaxXBRL.resources
{
    [TestClass]
    public class TestGeneraHechosCreditos
    {
        /// <summary>
        /// Formato estandar mongodb:<usario>:<contrasena>@<host>:<puerto>/<base de datos>
        /// </summary>
        private String ConectionString = "mongodb://localhost/abaxxbrl_cellstore";
        private String DatabaseName = "abaxxbrl_cellstore";
        private String JsonErrorDirectory = "../../TestOutput/ErrorJSON";
        private String ColeccionOrigen = "Credito2";

        [TestMethod]
        public void GeneraHechosCreditos()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();
            var AbaxXBRLCellStoreMongo = new AbaxXBRLCellStoreMongo();
            AbaxXBRLCellStoreMongo.ConnectionString = ConectionString;
            AbaxXBRLCellStoreMongo.DataBaseName = DatabaseName;
            AbaxXBRLCellStoreMongo.JSONOutDirectory = JsonErrorDirectory;
            AbaxXBRLCellStoreMongo.Init();
            var listaElementos = AbaxXBRLCellStoreMongo.ConsultaElementos<IDictionary<string,object>>(ColeccionOrigen, "{}");
            foreach (var elemento in listaElementos)
            {
                LogUtil.Info(elemento);
            }

        }
    }
}
