using AbaxXBRLBlockStore.Common.Constants;
using MongoDB.Bson;
using MongoDB.Driver.GridFS;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{

    /// <summary>
    /// Data Object with the information to persist into Hecho Cell Store.
    /// </summary>
    public class Hecho : ModeloBase
    {
        public string IdHecho { get; set; }
        public string Taxonomia { get; set; }
        public bool EsDimensional { get; set; }
        public bool EsValorNil { get; set; }
        public bool EsNumerico { get; set; }
        public bool EsFraccion { get; set; }
        public bool EsTupla { get; set; }
        public string Precision { get; set; }
        public string Decimales { get; set; }
        public string Valor { get; set; }
        public Decimal ValorNumerico { get; set; }
        public string IdEnvio { get; set; }
        public bool Activo { get; set; }
        public bool EsValorChunks { get; set; }
        public Tupla Tupla { get; set; }
        public Unidad Unidad { get; set; }
        public Concepto Concepto { get; set; }
        public Periodo Periodo { get; set; }
        public Entidad Entidad { get; set; }
        public IList<RolPresentacionHecho> RolesPresentacion { get; set; }
        public IList<MiembrosDimensionales> MiembrosDimensionales { get; set; }
        /// <summary>
        /// Identificador que unifica el hecho para un envío determinado.
        /// </summary>
        public string IdHechoEnvio { get; set; }
        /// <summary>
        /// Fecha más representativa, para el caso de un periodo es la fecha fin, para el caso de un instante es la fecha instante, para cualquier otro caso es null.
        /// </summary>
        public DateTime? FechaRepresentativa { get; set; }
        /// <summary>
        /// Bandera que indica si este hecho es el más representativo del concepto para el reporte en el que se presento.
        /// </summary>
        public bool MasRecienteEnEnvioActual { get; set; }
        /// <summary>
        /// Bandera que indica si el hecho actual fué remplazado.
        /// </summary>
        public bool Remplazado { get; set; }
        /// <summary>
        /// Bandera que indica el identificador del envío que remplazo este hecho.
        /// </summary>
        public string IdEnvioRemplazo { get; set; }


        public override string GeneraJsonId()
        {
            var json = "{\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                        "\"IdConcepto\" : " + ParseJson(Concepto.IdConcepto) + ", " +
                        "\"TipoPeriodo\" : " + ParseJson(Periodo.TipoPeriodo) + ", " +
                        "\"FechaInicio\" : " + ParseJson(Periodo.FechaInicio) + ", " +
                        "\"FechaFin\" : " + ParseJson(Periodo.FechaFin) + ", " +
                        "\"FechaInstante\" : " + ParseJson(Periodo.FechaInstante) + ", " +
                        "\"NombreEmpresa\" : " + ParseJson(Entidad.Nombre) + ", " +
                        "\"MiembrosDimensionales\" : " + ParseJson(MiembrosDimensionales) + ", " +
                        "\"TipoUnidad\" : " + ParseJson(Unidad.Tipo) + ", " +
                        "\"HashMedidas\" : " + ParseJson(Unidad.Medidas) + ", " +
                        "\"HashMedidasNumerador\" : " + ParseJson(Unidad.MedidasNumerador) + ", " +
                        "\"HashMedidasDenominador\" : " + ParseJson(Unidad.MedidasDenominador) + "}";

            return json;
        }

        public override string ToJson()
        {
            var json = "{" +
                "\"IdHecho\" : " + ParseJson(IdHecho) + ", " +
                "\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                "\"IdEnvio\" : " + ParseJson(IdEnvio) + ", " +
                "\"Valor\" : " + ParseJson(EsValorChunks ? String.Empty : Valor) + ", " +
                "\"ValorNumerico\" : " + ParseJson(ValorNumerico) + ", " +
                "\"EsValorChunks\" : " + ParseJson(EsValorChunks) + ", " +
                "\"Precision\" : " + ParseJson(Precision) + ", " +
                "\"Decimales\" : " + ParseJson(Decimales) + ", " +
                "\"EsNumerico\" : " + ParseJson(EsNumerico) + ", " +
                "\"EsFraccion\" : " + ParseJson(EsFraccion) + ", " +
                "\"EsValorNil\" : " + ParseJson(EsValorNil) + ", " +
                "\"EsTupla\" : " + ParseJson(EsTupla) + ", " +
                "\"EsDimensional\" : " + ParseJson(EsDimensional) + ", " +
                "\"IdHechoEnvio\" : " + ParseJson(IdHechoEnvio) + ", " +
                "\"FechaRepresentativa\" : " + ParseJson(FechaRepresentativa) + ", " +
                "\"MasRecienteEnEnvioActual\" : " + ParseJson(MasRecienteEnEnvioActual) + ", " +
                "\"Remplazado\" : " + ParseJson(Remplazado) + ", " +
                "\"IdEnvioRemplazo\" : " + ParseJson(IdEnvioRemplazo) + ", " +
                "\"Tupla\" : " + Tupla.ToJson() + ", " +
                "\"Unidad\" : " + Unidad.ToJson() + ", " +
                "\"Concepto\" : " + Concepto.ToJson() + ", " +
                "\"Periodo\" : " + Periodo.ToJson() + ", " +
                "\"Entidad\" : " + Entidad.ToJson() + ", " +
                "\"RolesPresentacion\" : " + ParseJson(RolesPresentacion) + ", " +
                "\"MiembrosDimensionales\" : " + ParseJson(MiembrosDimensionales) + "}";

            return json;
        }


        public string StatementUpdateValueMongo()
        {
            var json = "{" +
                "\"Valor\" : " + ParseJson(EsValorChunks ? String.Empty : Valor) + ", " +
                "\"ValorNumerico\" : " + ParseJson(ValorNumerico) + ", " +
                "\"EsValorChunks\" : " + ParseJson(EsValorChunks) +
                "}";

            return json;
        }

        public string SetOnInsertMongo()
        {
            var json = "{" +
                "\"IdHecho\" : " + ParseJson(IdHecho) + ", " +
                "\"Taxonomia\" : " + ParseJson(Taxonomia) + ", " +
                "\"Precision\" : " + ParseJson(Precision) + ", " +
                "\"Decimales\" : " + ParseJson(Decimales) + ", " +
                "\"EsNumerico\" : " + ParseJson(EsNumerico) + ", " +
                "\"EsFraccion\" : " + ParseJson(EsFraccion) + ", " +
                "\"EsValorNil\" : " + ParseJson(EsValorNil) + ", " +
                "\"EsTupla\" : " + ParseJson(EsTupla) + ", " +
                "\"EsDimensional\" : " + ParseJson(EsDimensional) + ", " +
                "\"Tupla\" : " + Tupla.ToJson() + ", " +
                "\"Unidad\" : " + Unidad.ToJson() + ", " +
                "\"Concepto\" : " + Concepto.ToJson() + ", " +
                "\"Periodo\" : " + Periodo.ToJson() + ", " +
                "\"Entidad\" : " + Entidad.ToJson() + ", " +
                "\"RolesPresentacion\" : " + ParseJson(RolesPresentacion) + ", " +
                "\"MiembrosDimensionales\" : " + ParseJson(MiembrosDimensionales) + "}";

            return json;
        }



        public override string GetKeyPropertyName()
        {
            return "IdHecho";
        }

        public override string GetKeyPropertyVale()
        {
            return IdHecho;
        }


        public override bool IsChunks()
        {
            return EsValorChunks;
        }


        public override MongoGridFSCreateOptions GetChunksOptions()
        {
            return
                new MongoGridFSCreateOptions
                {
                    ChunkSize = ConstBlockStoreHechos.MAX_STRING_VALUE_LENGTH,
                    ContentType = "text/plain",
                    Metadata = new BsonDocument
                            {
                                { "IdHecho", IdHecho }
                            }
                };
        }

        public override Stream GetChunksSteram()
        {
            var stream = new System.IO.MemoryStream();
            var writer = new System.IO.StreamWriter(stream);
            writer.Write(Valor);
            writer.Flush();
            stream.Position = 0;
            return stream;
        }
        /// <summary>
        /// Crea un hash apartir de los identificadores de hecho y de envío.
        /// </summary>
        /// <returns>Hash generado.</returns>
        public string GeneraHashHechoEnvio()
        {
            var json = "{\"Taxonomia\" : " + ParseJson(IdHecho) + ", " +
                        "\"IdEnvio\" : " + ParseJson(IdEnvio) + "}";

            return GeneraHash(json);
        }
        /// <summary>
        /// Crea un hash enbase a la entidad y los miembros dimensionales.
        /// </summary>
        /// <returns>Hash generado.</returns>
        public string GeneraHashDimensiones()
        {
            var json = "{\"Entidad\" : " + Entidad.ToJson() + ", " +
                        "\"MiembrosDimensionales\" : " + ParseJson(MiembrosDimensionales) + "}";

            return GeneraHash(json);
        }

    }
}
