using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;

namespace TestAbaxXBRL
{
    /// <summary>
    /// Clase para generar los fragmentos XML de existence assertios y value assertion requeridos por voluman
    /// </summary>
    [TestClass]
    class TestGenerarExistenceYValueAssertions
    {

        public static string EA_template = 
            "<ea:existenceAssertion xlink:type=\"resource\" xlink:label=\"{0}\" id=\"{0}\" aspectModel=\"dimensional\" implicitFiltering=\"true\" test=\". &gt; 0\"/>";

        public static string VFA_Concept_to_or = 
            "<variable:variableFilterArc xlink:type=\"arc\" xlink:arcrole=\"http://xbrl.org/arcrole/2008/boolean-filter\" xlink:from=\"{0}\" xlink:to=\"{1}\" priority=\"0\" order=\"1.0\" cover=\"true\" complement=\"false\"/>";

        public static string EA_TO_AS_template = 
            "<gen:arc xlink:type=\"arc\" xlink:arcrole=\"http://xbrl.org/arcrole/2008/assertion-set\" xlink:from=\"{0}\" xlink:to=\"{1}\" priority=\"0\" order=\"1.0\"/>";

        public static string Fact_Variable_template =
            "<variable:factVariable xlink:type=\"resource\" xlink:label=\"{0}\" id=\"{0}\" bindAsSequence=\"false\"/>";

        public static string Concept_Name_template = 
            "<cf:conceptName xlink:type=\"resource\" xlink:label=\"{0}\" id=\"{0}\">\n"+
                "\t<cf:concept>\n"+
                    "\t\t<cf:qname>{1}:{2}</cf:qname>\n"+
                "\t</cf:concept>\n"+
            "</cf:conceptName>";

        public static string Variable_filter_arc_template = 
            "<variable:variableFilterArc xlink:type=\"arc\" xlink:arcrole=\"http://xbrl.org/arcrole/2008/variable-filter\" xlink:from=\"{0}\" xlink:to=\"{1}\" priority=\"0\" order=\"1.0\" cover=\"true\" complement=\"false\"/>";

        public static string Variable_arc_template =
            "<variable:variableArc xlink:type=\"arc\" xlink:arcrole=\"http://xbrl.org/arcrole/2008/variable-set\" xlink:from=\"{0}\" xlink:to=\"{1}\" priority=\"0\" order=\"1.0\" name=\"{2}\"/>";
	
        public static string Message_template =
            "<msg:message xlink:type=\"resource\" xlink:label=\"{0}\" xlink:role=\"http://www.xbrl.org/2010/role/message\" xml:lang=\"es\" id=\"{0}\">El hecho '{1}' debe ser reportado</msg:message>";

        public static string Message_Assertion_Arc_Template =
            "<gen:arc xlink:type=\"arc\" xlink:arcrole=\"http://xbrl.org/arcrole/2010/assertion-unsatisfied-message\" xlink:from=\"{0}\" xlink:to=\"{1}\" priority=\"0\" order=\"1.0\"/>";

        public static string Filter_FechaCierre =
            "<pf:periodInstant xlink:type=\"resource\" xlink:label=\"periodInstant_FechaCierre_Filter\" id=\"periodInstant_FechaCierre_Filter\" date=\"xs:date($fechaCierre)\"/>";


        public static string Filter_FechaInicio =
            "<pf:periodInstant xlink:type=\"resource\" xlink:label=\"periodInstant_FechaCierre_Filter\" id=\"periodInstant_FechaCierre_Filter\" date=\"xs:date($fechaCierre)\"/>";

        public static string Filter_FechaFin =
            "<pf:periodInstant xlink:type=\"resource\" xlink:label=\"periodInstant_FechaCierre_Filter\" id=\"periodInstant_FechaCierre_Filter\" date=\"xs:date($fechaCierre)\"/>";

        public static string FV_to_Filter_FechaCierre_Arc_Template =
            "<variable:variableFilterArc xlink:type=\"arc\" xlink:arcrole=\"http://xbrl.org/arcrole/2008/variable-filter\" xlink:from=\"{0}\" xlink:to=\"{1}\" priority=\"1\" order=\"1\" cover=\"true\" complement=\"false\"/>";
    
        public static string FV_FechaCierre = 
            "<variable:factVariable xlink:type=\"resource\" xlink:label=\"factVariable_DateOfEndOfReportingPeriod2013\" id=\"factVariable_DateOfEndOfReportingPeriod2013\" bindAsSequence=\"false\"/>";


        [TestMethod]
        public void crearExistenceAssertionNumericos() {


            StringBuilder builder = new StringBuilder();

            //Unir las existence al EA set
            var eaSetPadre = "Assertion_Set_EA_ElementosNumericos";
            var fvFechaCierre = "factVariable_DateOfEndOfReportingPeriod2013";
            var filtroPeriodInstant = "periodInstant_FechaCierre_Filter";
            var filtroOr = "orFilter_3";
            var etiquetaEA = "";
            var etiquetaFV = "";
            var etiquetaConceptName = "";
            var etiquetaMensaje = "";
            var taxonomia = new TaxonomiaXBRL();
           

            

            taxonomia.ManejadorErrores = new ManejadorErroresCargaTaxonomia();

            taxonomia.ProcesarDefinicionDeEsquema("file:///TaxonomiasXBRL/mx-bmv-fideicomisos-2015/trac/full_ifrs_trac_entry_point_2015-06-30.xsd");

            taxonomia.CrearArbolDeRelaciones();

            var viewService = new XbrlViewerService();

            var taxoDTO = viewService.CrearTaxonomiaAPartirDeDefinicionXbrl(taxonomia);

            builder.AppendLine("<!-- Inicio Validaciones EA SET Numericas -->");
            foreach (var concepto in taxoDTO.ConceptosPorId.Values)
            {
                var EsAbstracto = concepto.EsAbstracto != null ? concepto.EsAbstracto.Value : false;
                if (concepto.EsTipoDatoNumerico && !EsAbstracto)
                { 
                
                    //Crear existence assertion
                    etiquetaEA = "EA_" + concepto.Nombre;
                    etiquetaFV = "factVariable_ea_" + concepto.Nombre;
                    etiquetaConceptName = "conceptName_ea_" + concepto.Nombre;
                    etiquetaMensaje = "mensaje_ea_" + concepto.Nombre;
                    
                    builder.AppendLine(String.Format(EA_template, etiquetaEA));
                    
                    builder.AppendLine(String.Format(EA_TO_AS_template, new Object[]{eaSetPadre,etiquetaEA}));
                    
                    builder.AppendLine(String.Format(Fact_Variable_template, etiquetaFV));
                    //FV del concepto      
                    builder.AppendLine(String.Format(Concept_Name_template, etiquetaConceptName,taxonomia.ObtenerPrefijoDeEspacioNombres(concepto.EspacioNombres),concepto.Nombre));
                    builder.AppendLine(String.Format(Variable_filter_arc_template, new Object[] { etiquetaFV, etiquetaConceptName }));
                    builder.AppendLine(String.Format(Variable_arc_template, new Object[] { etiquetaEA, etiquetaFV, concepto.Nombre }));
                     
                    builder.AppendLine(String.Format(Message_template, new Object[] { etiquetaMensaje, UtilAbax.ObtenerEtiqueta(taxoDTO, concepto.Id)}));

                    builder.AppendLine(String.Format(Message_Assertion_Arc_Template, new Object[] { etiquetaEA, etiquetaMensaje }));
                                
                                       

                    builder.AppendLine("");
                    builder.AppendLine("");
                    
                }

            }
            builder.AppendLine("<!-- Fin Validaciones EA SET Numericas -->");
            Debug.WriteLine(builder.ToString());

        }


    }
}
