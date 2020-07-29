using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.XPE.impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestAbaxXBRL.JBRL.Modelo;

namespace TestAbaxXBRL.JBRL.Test
{
    [TestClass]
    public class TestLoadTaxonomyModel
    {
        /// <summary>
        /// Prueba unitaria para el envío y distribución del documento de instancia sin conectarse alos queue
        /// </summary>
        [TestMethod]
        public void TestProcesarDistribucionDocumentosXBRL() {

            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            var xpe = XPEServiceImpl.GetInstance(false);
            var errores = new List<ErrorCargaTaxonomiaDto>();
            TaxonomiaDto tax = xpe.CargarTaxonomiaXbrl("http://emisnet.bmv.com.mx/taxonomy/mx-ifrs-2014-12-05/full_ifrs_mc_mx_ics_entry_point_2014-12-05.xsd",
                errores,false);

            var factsById = new Dictionary<String, FactJBRL>();

            var dimensionMembersByCode = new Dictionary<String, DimensionMemberJBRL>();
            

            var taxFact = new FactJBRL() {
                conceptId = "TaxonomyCode",
                value = tax.EspacioNombresPrincipal,
                factId = Guid.NewGuid().ToString()
            };
            
            taxFact.dimensionMap = new Dictionary<string,string>();

            AddDimensionMember(dimensionMembersByCode, taxFact,"taxonomy",tax.EspacioNombresPrincipal,null );
            AddDimensionMember(dimensionMembersByCode, taxFact, "taxonomyCategory", "financialInfo", null);

            taxFact.dimensionMap["taxonomy"] = tax.EspacioNombresPrincipal;
            taxFact.dimensionMap["taxonomyCategory"] = "financialInfo";

            var taxName = new FactJBRL()
            {
                conceptId = "TaxonomyName",
                value = "IFRS BMV 2015 For ICS",
                factId = Guid.NewGuid().ToString()
            };
            taxName.dimensionMap = new Dictionary<string, string>();
                       
            taxName.dimensionMap["taxonomy"] = tax.EspacioNombresPrincipal;
            taxName.dimensionMap["taxonomyCategory"] = "financialInfo";

            var taxDesc = new FactJBRL()
            {
                conceptId = "TaxonomyDescription",
                value = "Mexican Taxonomy for financial information for industrial, commercial and services companies",
                factId = Guid.NewGuid().ToString()
            };

            taxDesc.dimensionMap = new Dictionary<string, string>();

            taxDesc.dimensionMap["taxonomy"] = tax.EspacioNombresPrincipal;
            taxDesc.dimensionMap["taxonomyCategory"] = "financialInfo";

            factsById[taxFact.factId] = taxFact;
            factsById[taxName.factId] = taxName;
            factsById[taxDesc.factId] = taxDesc;

            var conceptsByPresentation = getConceptsByPresentationLinkbase(tax);

            foreach (var conceptId in conceptsByPresentation.Keys) {
                var concept = tax.ConceptosPorId[conceptId];
                var taxonomyConcept = new FactJBRL()
                {
                    conceptId = "TaxonomyConcept",
                    value = concept.Id,
                    factId = Guid.NewGuid().ToString()
                };
                


                foreach (var labelMap in concept.Etiquetas.Values) {

                    foreach (var label in labelMap.Values) {
                        var conceptLabel = new FactJBRL()
                        {
                            conceptId = "ConceptLabel",
                            value = label.Valor,
                            factId = Guid.NewGuid().ToString()
                        };


                        
                        conceptLabel.dimensionMap = new Dictionary<string, string>();
                         
                        conceptLabel.dimensionMap["taxonomy"] = tax.EspacioNombresPrincipal;
                        conceptLabel.dimensionMap["taxonomyCategory"] = "financialInfo";
                        conceptLabel.dimensionMap["concept"] = concept.Id;
                        conceptLabel.dimensionMap["language"] = label.Idioma;
                        conceptLabel.dimensionMap["labelRole"] = label.Rol;

                        factsById[conceptLabel.factId] = conceptLabel;
                    }

                    
                }
               
                taxonomyConcept.dimensionArray = new List<DimensionMemberJBRL>();
                taxonomyConcept.dimensionMap = new Dictionary<string, string>();

                taxonomyConcept.dimensionArray.Add(new DimensionMemberJBRL()
                {
                    dimensionId = "taxonomy",
                    member = tax.EspacioNombresPrincipal
                });
                taxonomyConcept.dimensionArray.Add(new DimensionMemberJBRL()
                {
                    dimensionId = "taxonomyCategory",
                    member = "financialInfo"
                });
                taxonomyConcept.dimensionArray.Add(new DimensionMemberJBRL()
                {
                    dimensionId = "taxonomyRole",
                    member = conceptsByPresentation[conceptId][0].ToString()
                });
                taxonomyConcept.dimensionArray.Add(new DimensionMemberJBRL()
                {
                    dimensionId = "roleOrder",
                    member = conceptsByPresentation[conceptId][1].ToString()
                });

                taxonomyConcept.dimensionMap["taxonomy"] = tax.EspacioNombresPrincipal;
                taxonomyConcept.dimensionMap["taxonomyCategory"] = "financialInfo";
                taxonomyConcept.dimensionMap["taxonomyRole"] = conceptsByPresentation[conceptId][0].ToString();
                taxonomyConcept.dimensionMap["roleOrder"] = conceptsByPresentation[conceptId][1].ToString();

                factsById[taxonomyConcept.factId] = taxonomyConcept;
            }

            var jsonFinal = JsonConvert.SerializeObject(factsById,Formatting.Indented);

           // LogUtil.Info(jsonFinal);

            File.WriteAllText(@"..\..\TestOutput\taxonomyTest.json", jsonFinal);

        }
        /// <summary>
        /// Agrega un valor dimensional al mapa de miembros de un hecho y agrega el miembro, si no existe, 
        /// </summary>
        /// <param name="dimensionMembersByCode"></param>
        /// <param name="dimensionMap"></param>
        /// <param name="v"></param>
        /// <param name="espacioNombresPrincipal"></param>
        private void AddDimensionMember(Dictionary<string, DimensionMemberJBRL> dimensionMembersByCode,FactJBRL currentFact, string dimensionId, string memberId, string taxonomy)
        {
            string memberKey = dimensionId + memberId;

            if (!dimensionMembersByCode.ContainsKey(memberKey))
            {
                dimensionMembersByCode[memberKey] = new DimensionMemberJBRL()
                {
                    dimensionMemeberId = Guid.NewGuid().ToString(),
                    dimensionId = dimensionId,
                    member = memberId,
                    taxonomy = taxonomy
                };
            }
            currentFact.dimensionMap[dimensionId] = memberId;
        }

        /// <summary>
        /// Organiza la lista de conceptos de taxonomía basado en recorrer los presentation linkbase para determinar dónde aparece el concepto
        /// y en qué orden del linkbase
        /// </summary>
        /// <param name="tax"></param>
        /// <returns></returns>
        private IDictionary<String,Object[]> getConceptsByPresentationLinkbase(TaxonomiaDto tax)
        {
            var finalList = new Dictionary<String, Object[]>();
            foreach (var presentationRole in tax.RolesPresentacion) {

                addConceptsInList(finalList,presentationRole.Estructuras, presentationRole, 1);

            }
            return finalList;
        }
        /// <summary>
        /// Agrega recursivamente al diccionario final los conceptos de la lista de estructuras
        /// </summary>
        /// <param name="finalList"></param>
        /// <param name="estructuras"></param>
        /// <param name="v"></param>
        private int addConceptsInList(Dictionary<string, object[]> finalList, IList<EstructuraFormatoDto> estructuras,RolDto<EstructuraFormatoDto> currRole ,int currentOrder)
        {
            if(estructuras != null)
            {
                foreach (var current in estructuras) {
                    if (!finalList.ContainsKey(current.IdConcepto))
                    {
                        finalList[current.IdConcepto] = new object[] {currRole.Uri,currentOrder.ToString() };
                        currentOrder++;
                    }
                    currentOrder = addConceptsInList(finalList, current.SubEstructuras, currRole, currentOrder);
                }
            }
            return currentOrder;
        }
    }
}
