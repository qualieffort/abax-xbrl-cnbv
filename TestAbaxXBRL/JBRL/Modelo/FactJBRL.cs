using AbaxXBRLBlockStore.Common.Constants;
using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.CellStore.Util;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using MongoDB.Bson;
using MongoDB.Driver.GridFS;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using TestAbaxXBRL.JBRL.Constants;

namespace TestAbaxXBRL.JBRL.Modelo
{
    /// <summary>
    /// It is a fact that represents a data reported in the JBRL definition.
    /// </summary>
    public class FactJBRL : ModeloBase
    {
        /// <summary>
        /// Unique identifier of the fact within the given report.
        /// </summary>
        public String factId { get; set; }
        /// <summary>
        /// Value of the fact
        /// </summary>
        public String value { get; set; }
        /// <summary>
        /// Concept identifier of the current fact
        /// </summary>
        public String conceptId { get; set; }
        /// <summary>
        /// Context identifier of the current fact.
        /// </summary>
        public String contextId { get; set; }
        /// <summary>
        /// Map of dimensions that make up the context.
        /// </summary>
        public IDictionary<String, String> dimensionMap { get; set; }
        /// <summary>
        /// Identifier that links the fact to the information group to which it belongs.
        /// </summary>
        public String reportId { get; set; }
        /// <summary>
        /// Identifier that links the fact to the information group to which it belongs.
        /// </summary>
        public String reportRecordId { get; set; }
        /// <summary>
        /// Date of the last modification that denotes the version of the document.
        /// </summary>
        public DateTime registrationDate { get; set; }
        /// <summary>
        /// The label of the concept.
        /// </summary>
        public String conceptLabel { get; set; }
        /// <summary>
        /// Data type of the concept.
        /// </summary>
        public String dataType { get; set; }
        /// <summary>
        /// Flagg that indicates if the curren document is chunk
        /// </summary>
        public bool isChunk { get; set; }
        /// <summary>
        /// Flagg that indicates if the current document was replaced by an other. 
        /// </summary>
        public bool isReplaced { get; set; }
        /// <summary>
        /// The registration identifier that replace the current document. 
        /// </summary>
        public string replacementId { get; set; }

        /// <summary>
        /// Parse a XBRL fact to JBRL fact.
        /// </summary>
        /// <param name="factXBRL">Fact to be parse.</param>
        /// <param name="document">Document owner of the fact.</param>
        /// <returns>JBRL fact.</returns>
        public static FactJBRL Parse(
            HechoDto factXBRL, 
            DocumentoInstanciaXbrlDto document, 
            String reportId,
            String reportRecordId,
            DateTime registrationDate, 
            IDictionary<String, String> extraParams,
            String replacementId = null)
        {
            var factJbrl = new FactJBRL();
            factJbrl.value = factXBRL.Valor;
            factJbrl.conceptId = factXBRL.IdConcepto;
            factJbrl.reportId = reportId;
            factJbrl.reportRecordId = reportRecordId;
            factJbrl.registrationDate = registrationDate;
            ConceptoDto concept;
            if (document.Taxonomia.ConceptosPorId.TryGetValue(factXBRL.IdConcepto, out concept))
            {
                factJbrl.conceptLabel = GetConceptLabel(concept);
                factJbrl.dataType = concept.TipoDato;
            }
            else
            {
                return null;
            }
            ContextoDto context;
            factJbrl.dimensionMap = new Dictionary<String, String>();
            if (extraParams != null)
            {
                foreach (var paramId in extraParams.Keys)
                {
                    factJbrl.dimensionMap[paramId] = extraParams[paramId];
                }
            }
            if (document.ContextosPorId.TryGetValue(factXBRL.IdContexto, out context))
            {
                factJbrl.dimensionMap["entity"] = context.Entidad.Id;
                if (context.Periodo.Tipo.Equals(PeriodoDto.Instante))
                {
                    factJbrl.dimensionMap["periodInstantDate"] = factJbrl.ParseString(context.Periodo.FechaInstante);
                    factJbrl.dimensionMap["periodMainDate"] = factJbrl.dimensionMap["periodInstantDate"];
                }
                else if (context.Periodo.Tipo.Equals(PeriodoDto.Duracion))
                {
                    factJbrl.dimensionMap["periodStartDate"] = factJbrl.ParseString(context.Periodo.FechaInicio);
                    factJbrl.dimensionMap["periodEndDate"] = factJbrl.ParseString(context.Periodo.FechaFin);
                    factJbrl.dimensionMap["periodMainDate"] = factJbrl.dimensionMap["periodEndDate"];
                }
                factJbrl.dimensionMap["isDimensional"] = context.ContieneInformacionDimensional.ToString().ToLower();
                var listOfdimensionsXbrl = context.ValoresDimension == null || context.ValoresDimension.Count == 0 ? context.Entidad.ValoresDimension : context.ValoresDimension;
                if (listOfdimensionsXbrl != null)
                {
                    foreach (var dimensionXbrl in listOfdimensionsXbrl)
                    {
                        var dimensionId = "xbrlDim_" + dimensionXbrl.IdDimension;
                        var member = GetDimensionMember(dimensionXbrl, document);
                        factJbrl.dimensionMap[dimensionId] = member;
                    }
                }
            }
            else
            {
                return null;
            }
            UnidadDto unit;
            if (!String.IsNullOrEmpty(factXBRL.IdUnidad) && document.UnidadesPorId.TryGetValue(factXBRL.IdUnidad, out unit))
            {
                factJbrl.dimensionMap["unit"] = GetUnitValue(unit);
            }
            if (!String.IsNullOrEmpty(factXBRL.Decimales))
            {
                factJbrl.dimensionMap["decimals"] = factXBRL.Decimales;
            }
            if (!String.IsNullOrEmpty(factXBRL.Precision))
            {
                factJbrl.dimensionMap["precision"] = factXBRL.Precision;
            }
            var isChunk = false;
            var value = factJbrl.value;
            if (!String.IsNullOrWhiteSpace(value) && value.Length > ConstBlockStoreHechos.MAX_STRING_VALUE_LENGTH)
            {
                isChunk = true;
            }
            factJbrl.isChunk = isChunk;
            factJbrl.contextId = factJbrl.GetContextHash();

            factJbrl.factId = factJbrl.GeneraHashId();
            if (!string.IsNullOrEmpty(replacementId))
            {
                factJbrl.replacementId = replacementId;
                factJbrl.isReplaced = true;
            }

            return factJbrl;
        }

        /// <summary>
        /// Genera el identificador único del hecho.
        /// </summary>
        /// <returns>Json con los elementos llave para conformar el identificador del hecho.</returns>
        public override string GeneraJsonId()
        {
            var taxonomyId = String.Empty;
            var periodStartDate = String.Empty;
            var periodEndDate = String.Empty;
            var periodInstantDate = String.Empty;
            var entity = String.Empty;
            var dimensionsMembers = new Dictionary<string, string>();
            var unit = String.Empty;
            

            dimensionMap.TryGetValue(ConstantsJBRL.REPORT_TAXONOMY_ATT, out taxonomyId);
            dimensionMap.TryGetValue("entity", out entity);
            dimensionMap.TryGetValue("unit", out unit);
            dimensionMap.TryGetValue("periodStartDate", out periodStartDate);
            dimensionMap.TryGetValue("periodEndDate", out periodEndDate);
            dimensionMap.TryGetValue("periodInstantDate", out periodInstantDate);
            String isDimensional;
            if (dimensionMap.TryGetValue("isDimensional", out isDimensional) && isDimensional.Equals("true"))
            {
                foreach (var dimKey in dimensionMap.Keys)
                {
                    if (dimKey.StartsWith("xbrlDim_"))
                    {
                        dimensionsMembers[dimKey] = dimensionMap[dimKey];
                    }
                }
            }
            var json = "{\"taxonomyId\" : " + ParseJson(taxonomyId) + ", " +
                        "\"conceptId\" : " + ParseJson(conceptId) + ", " +
                        "\"entity\" : " + ParseJson(entity) + ", " +
                        "\"periodStartDate\" : " + ParseJson(periodStartDate) + ", " +
                        "\"periodEndDate\" : " + ParseJson(periodEndDate) + ", " +
                        "\"periodInstantDate\" : " + ParseJson(periodInstantDate) + ", " +
                        "\"dimensionsMembers\" : " + ParseJson(dimensionsMembers) + ", " +
                        "\"unit\" : " + ParseJson(unit) + "}";

            return json;
        }

        /// <summary>
        /// The attribute that identifier of the fact.
        /// </summary>
        /// <returns>Name of the fact atribute.</returns>
        public override string GetKeyPropertyName()
        {
            return "factId";
        }
        /// <summary>
        /// The value of the identifier of the fact
        /// </summary>
        /// <returns>Value of the fact identifier.</returns>
        public override string GetKeyPropertyVale()
        {
            return factId;
        }
        /// <summary>
        /// Jon representation of the fact.
        /// </summary>
        /// <returns>JSON representation of the fact.</returns>
        public override string ToJson()
        {
            var json = "{\"factId\" : " + ParseJson(factId) + ", " +
                        "\"value\" : " + ParseJson(value) + ", " +
                        "\"conceptId\" : " + ParseJson(conceptId) + ", " +
                        "\"contextId\" : " + ParseJson(contextId) + ", " +
                        "\"dimensionMap\" : " + ParseJson(dimensionMap) + ", " +
                        "\"conceptLabel\" : " + ParseJson(conceptLabel) + ", " +
                        "\"dataType\" : " + ParseJson(dataType) + ", " +
                        "\"isChunk\" : " + ParseJson(isChunk) + ", " +
                        "\"reportId\" : " + ParseJson(reportId) + ", " +
                        "\"registrationDate\" : " + ParseJson(registrationDate) + ", " +
                        "\"reportRecordId\" : " + ParseJson(reportRecordId) + ", " +
                        "\"isReplaced\" : " + ParseJson(isReplaced) + ", " +
                        "\"replacementId\" : " + ParseJson(replacementId) + "}";

            return json;
        }

        /// <summary>
        /// Genera una representación JSON del listado.
        /// </summary>
        /// <param name="lista">Lista que se pretende transforar</param>
        /// <returns>Representación JSON del listado</returns>
        public string ParseJson(IList<DimensionMemberJBRL> lista)
        {
            if (lista == null || lista.Count == 0)
            {
                return "[]";
            }

            var json = "[";
            var stringList = String.Empty;
            var listaOrdenada = lista.OrderBy(s => s.dimensionId).ToList();
            foreach (var item in listaOrdenada)
            {
                stringList += ", " + item.ToJson();
            }
            json += stringList.Substring(2);
            json += "]";
            return json;
        }

        /// <summary>
        /// Genera una representación JSON del listado.
        /// </summary>
        /// <param name="lista">Lista que se pretende transforar</param>
        /// <returns>Representación JSON del listado</returns>
        public string ParseJson(IDictionary<String,String> dictionary)
        {
            if (dictionary == null || dictionary.Count == 0)
            {
                return "{}";
            }

            var json = "{";
            var stringAtt = String.Empty;
            var keysList = (new List<String>(dictionary.Keys)).OrderBy(item => item).ToList();
            foreach (var key in keysList)
            {
                var value = ParseJson(dictionary[key]);
                stringAtt += ", \"" + key + "\": " + value ;
            }
            json += stringAtt.Substring(2);
            json += "}";
            return json;
        }

        /// <summary>
        /// Gets the label of the context.
        /// </summary>
        /// <param name="concept">Concept to get the label.</param>
        /// <param name="lenguage">Lannguage of the label.</param>
        /// <returns>Label value.</returns>
        private static String GetConceptLabel(ConceptoDto concept, String lenguage = "en")
        {
            String textoEtiqueta = String.Empty;
            IDictionary<string, EtiquetaDto> etiquetaPorRol;
            if (!concept.Etiquetas.TryGetValue(lenguage, out etiquetaPorRol))
            {
                etiquetaPorRol = concept.Etiquetas.First().Value;
            }
            EtiquetaDto etiquetaDto;
            if (etiquetaPorRol.TryGetValue(ReporteXBRLUtil.ETIQUETA_DEFAULT, out etiquetaDto))
            {
                etiquetaDto = etiquetaPorRol.First().Value;
            }
            if (etiquetaDto != null)
            {
                textoEtiqueta = etiquetaDto.Valor;
            }
            return textoEtiqueta;
        }
        /// <summary>
        /// Gets the member value.
        /// </summary>
        /// <param name="dimension">Dimension to evaluate.</param>
        /// <param name="document">Document owner of the dimension.</param>
        /// <returns>Member value.</returns>
        private static String GetDimensionMember(DimensionInfoDto dimension, DocumentoInstanciaXbrlDto document)
        {
            var member = String.Empty;
            if (dimension.Explicita)
            {
                member = dimension.IdItemMiembro;
            }
            else
            {
                member = CellStoreUtil.EliminaEtiquetas(dimension.ElementoMiembroTipificado);
            }
            return member;
        }
        /// <summary>
        /// Gets the string representation of an measure list operators.
        /// </summary>
        /// <param name="measuresList">Mesausres to evaluate.</param>
        /// <returns>String representation.</returns>
        private static String GetMeasureValue(IList<MedidaDto> measuresList)
        {
            var value = String.Empty;
            if (measuresList.Count == 1)
            {
                value = measuresList.First().Nombre;
            }
            else if(measuresList.Count > 1)
            {
                var sortedLists = measuresList.OrderBy(item => item.Nombre).ToList();
                foreach (var item in sortedLists)
                {
                    value = " * " + item.Nombre;
                }
                value = "(" + value.Substring(3) + ")";
            }
            return value;
        }
        /// <summary>
        /// Gets the string representation of the unit.
        /// </summary>
        /// <param name="unit">Unit to evaluate.</param>
        /// <returns>String representation of the unit.</returns>
        private static String GetUnitValue(UnidadDto unit)
        {
            var value = String.Empty;
            if (unit.Tipo.Equals(UnidadDto.Divisoria))
            {
                value = GetMeasureValue(unit.MedidasNumerador) + " / " + GetMeasureValue(unit.MedidasDenominador);
            }
            else
            {
                value = GetMeasureValue(unit.Medidas);
            }

            return value;
        }

        public override bool IsChunks()
        {
            return isChunk;
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
                                { "factId", factId },
                                { "conceptId", conceptId }
                            }
                };
        }

        public override Stream GetChunksSteram()
        {
            var stream = new System.IO.MemoryStream();
            var writer = new System.IO.StreamWriter(stream);
            writer.Write(value);
            writer.Flush();
            stream.Position = 0;
            return stream;
        }
        /// <summary>
        /// Creates the hash of the context by sort the dimensions elements by dimensions identifiers and then creates json representationt thah is hashed.
        /// </summary>
        /// <returns>Hash of json representation of dimensions stored.</returns>
        public String GetContextHash()
        {
            var jsonDimensionDictionary = ParseJson(dimensionMap);
            return GeneraHash(jsonDimensionDictionary);
        }

        


    }
}
