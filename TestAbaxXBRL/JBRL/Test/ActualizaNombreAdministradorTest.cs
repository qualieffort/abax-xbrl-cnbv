using AbaxXBRLCore.CellStore.Services.Impl;
using AbaxXBRLCore.Common.Util;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.JBRL.Test
{
    [TestClass]
    public class ActualizaNombreAdministradorTest
    {
        private AbaxXBRLCellStoreMongo abaxXBRLCellStoreMongo { get; set; }
        public ActualizaNombreAdministradorTest ()
        {
            abaxXBRLCellStoreMongo = new AbaxXBRLCellStoreMongo();
            abaxXBRLCellStoreMongo.JSONOutDirectory = @"..\..\TestOutput\";
            //abaxXBRLCellStoreMongo.ConnectionString = "mongodb://localhost/test";
            abaxXBRLCellStoreMongo.ConnectionString = "mongodb+srv://oscarloyola:oscar.loyola.2h@abaxxbrl-dk4sr.azure.mongodb.net/test";
            abaxXBRLCellStoreMongo.DataBaseName = "xbrlcellstore";
            abaxXBRLCellStoreMongo.Init();
        }


        [TestMethod]
        public async Task ProccessReportsByAzureFunction ()
        {
            try
            {
                LogUtil.LogDirPath = @"..\..\TestOutput\";
                LogUtil.Inicializa();
                var taskList = new List<Task<ResponseDto>>();
                var  administratorCollection = abaxXBRLCellStoreMongo.getCollection("administrator");
                FilterDefinition<BsonDocument>  find = "{\"fullName\":/[ÁÉÍÓÚ]/}";
                var findPointer = await administratorCollection.FindAsync(find);
                var documentsList = await findPointer.ToListAsync();
                foreach(var document in documentsList)
                {
                    var fullName = document.GetValue("fullName").AsString;
                    var fullNameSurName = document.GetValue("fullNameSurname").AsString;
                    UpdateDefinition<BsonDocument> updateSet = "{ $set: {\"fullName\": \"" + fullName.ToLower() + "\",\"fullNameSurName\": \"" + fullNameSurName.ToLower() + "\"} }";
                    FilterDefinition<BsonDocument> filter = Builders<BsonDocument>.Filter.Eq("_id", document.GetValue("_id").AsObjectId);
                    await administratorCollection.UpdateOneAsync(filter, updateSet);
                }
                LogUtil.Info($"Se completo el procesamiento de los reportes.");
            }
            catch(Exception ex)
            {
                LogUtil.Error(ex);
            }
        }
    }
}
