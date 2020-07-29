using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using Aspose.Words.Tables;
using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    /// <summary>
    /// Para las taxonomías de reporte anual exporta el rol 427000 el cual contiene bloques de texto y tarjetas con datos de administradores.
    /// </summary>
    public class ExportadorRolDocumentoArProsO427000 : ExportadorRolDocumentoBase
    {
        ///
	    /// Indica si se deben de exportar las notas vacías
	    ////
        public bool ExportarNotasVacias { get; set; }
        /// <summary>
        /// Idioma en el que se esta reportando.
        /// </summary>
        public string Idioma { get; set; }
        /// <summary>
        /// Conceptos que no deben ser evaluados de manera regular.
        /// </summary>
        public IDictionary<String, bool> ConceptosIgnorar = new Dictionary<String, bool>()
        {
                {"ar_pros_AdministratorName", true},
                {"ar_pros_AdministratorFirstName", true},
                {"ar_pros_AdministratorSecondName", true},
                {"ar_pros_AdministratorDirectorshipType", true},
                {"ar_pros_AdministratorDesignationDate", true},
                {"ar_pros_AdministratorAssemblyType", true},
                {"ar_pros_AdministratorAssemblyTypePros", true},
                {"ar_pros_AdministratorPeriodForWhichTheyWereElected", true},
                {"ar_pros_AdministratorPosition", true},
                {"ar_pros_AdministratorTimeWorkedInTheIssuer", true},
                {"ar_pros_AdministratorShareholding", true},
                {"ar_pros_AdministratorGender", true},
                {"ar_pros_AdministratorAdditionalInformation", true},
                {"ar_pros_ShareholdersLineItems", true},
                {"ar_pros_ShareholderNameCorporateName", true},
                {"ar_pros_ShareholderFirstName", true},
                {"ar_pros_ShareholderSecondName", true},
                {"ar_pros_ShareholderShareholding", true},
                {"ar_pros_ShareholderAdditionalInformation", true},
                {"ar_pros_SubcommitteesIntegrationOfTheSubcommitteesItems", true},
                {"ar_pros_SubcommitteesNames", true},
                {"ar_pros_SubcommitteesLastName", true},
                {"ar_pros_SubcommitteesMothersLastName", true},
                {"ar_pros_SubcommitteesTypeOfSubcommitteeToWhichItBelongs", true},
                {"ar_pros_SubcommitteesAppointmentDate", true},
                {"ar_pros_SubcommitteesTypeOfAssemblyIfApplicable", true},
                {"ar_pros_SubcommitteesPeriodForWhichTheyWereElected", true},
                {"ar_pros_SubcommitteesGender", true},
                {"ar_pros_SubcommitteesAdditionalInformation", true},
                {"ar_pros_AdministratorParticipateInCommitteesAudit", true},
                {"ar_pros_AdministratorParticipateInCommitteesCorporatePractices", true},
                {"ar_pros_AdministratorParticipateInCommitteesEvaluationAndCompensation", true},
                {"ar_pros_AdministratorParticipateInCommitteesOthers", true}
        };

        /// <summary>
        /// Constructor por defecto.
        /// </summary>
        public ExportadorRolDocumentoArProsO427000()
        {
            ExportarNotasVacias = false;
            Idioma = "es";
        }
        /// <summary>
        /// Implementación de método abstracto que dispara la generación del report.
        /// </summary>
        /// <param name="docBuilder">Constructor de Aspose para la generación del contenido.</param>
        /// <param name="instancia">Documento de instancia XBRL.</param>
        /// <param name="rolAExportar">Definición del rol que se pretende presentar.</param>
        /// <param name="estructuraReporte">Información adicional sobre la estructura del reporte.</param>
        override public void exportarRolAWord(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, IndiceReporteDTO rolAExportar, ReporteXBRLDTO estructuraReporte)
        {
            Idioma = estructuraReporte.Lenguaje;

            docBuilder.CurrentSection.PageSetup.Orientation = Orientation.Portrait;
            docBuilder.CurrentSection.PageSetup.PaperSize = PaperSize.Letter;
            docBuilder.CurrentSection.PageSetup.LeftMargin = 40;
            docBuilder.CurrentSection.PageSetup.RightMargin = 40;
            escribirEncabezado(docBuilder, instancia, estructuraReporte, true);
            //Titulo rol
            imprimirTituloRol(docBuilder, rolAExportar);


            HechoReporteDTO hecho = null;
            foreach (ConceptoReporteDTO concepto in estructuraReporte.Roles[rolAExportar.Rol])
            {
                if (ConceptosIgnorar.ContainsKey(concepto.IdConcepto))
                {
                    continue;
                }
                if (concepto.Hechos != null)
                {
                    foreach (String llave in concepto.Hechos.Keys)
                    {
                        hecho = concepto.Hechos[llave];
                        var esBloqueTexto = concepto.TipoDato.Contains(TIPO_DATO_TEXT_BLOCK);
                        if (esBloqueTexto)
                        {
                            if (ExportarNotasVacias || (hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                            {
                                //Escribir titulo campo
                                EscribirNotaTextoAtributosAdicionales(docBuilder, estructuraReporte, hecho, concepto);
                            }
                        }
                        
                        if (concepto.TipoDato != null &&
                            (concepto.TipoDato.Contains(TIPO_DATO_SI_NO) || concepto.Numerico))
                        {
                            EscribirADosColumnasConceptoValor(docBuilder, concepto.IdConcepto, rolAExportar, estructuraReporte);
                        }
                        else if (concepto.IdConcepto.Equals("ar_pros_CompanyAdministratorsAbstract"))
                        {
                            ImprimeTitulo(docBuilder, concepto);
                            PintaAdministradores(docBuilder, instancia, estructuraReporte.Hipercubos["ar_pros_CompanyAdministratorsTable"]);
                        }
                        else if (concepto.IdConcepto.Equals("ar_pros_CompanyShareholdersAbstract"))
                        {
                            ImprimeTitulo(docBuilder, concepto);
                            PintaAccionistas(docBuilder, instancia, estructuraReporte.Hipercubos["ar_pros_CompanyShareholdersTable"]);
                        }
                        else if(concepto.IdConcepto.Equals("ar_pros_ReferenceIncorporationAdministration"))
                        {
                            if ((hecho != null && !String.IsNullOrWhiteSpace(hecho.Valor)))
                            {
                                EscribirADosColumnasConceptoValor(docBuilder, concepto.IdConcepto, rolAExportar, estructuraReporte);
                            }
                        }
                    }
                }
            }
        }
        
        /// <summary>
        /// Imprime una tarjeta de presentación de administrador.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="tarjeta">Diccionario con los datos del miembro.</param>
        /// <param name="instancia">Documento de instancia.</param>
        private void PintaTarjetaAdministrador(DocumentBuilder docBuilder, IDictionary<string, HechoDto> tarjeta, DocumentoInstanciaXbrlDto instancia, String idItemMiembroTipoAdministrador)
        {
            docBuilder.StartTable();
            establecerBordesCeldaTabla(docBuilder);
            var conceptosNombre = new List<string>(){ "ar_pros_AdministratorFirstName", "ar_pros_AdministratorSecondName", "ar_pros_AdministratorName" };
            var tituloNombre = ConcatenaElementosTarjeta(tarjeta,conceptosNombre, " ");
            establecerFuenteCeldaTitulo(docBuilder);
            SetCellColspan(docBuilder, tituloNombre, 12);
            docBuilder.EndRow();
            var conceptosPrimeraFila = new List<string>() {
                "ar_pros_AdministratorPosition",
                "ar_pros_AdministratorAge"
            };
            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosPrimeraFila, instancia, 6, Idioma);

            var conceptosParticipacion = new List<string>() {
                "ar_pros_AdministratorMaximumStudiesDegree",
                "ar_pros_AdministratorRelationship",
            };
            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosParticipacion, instancia, 4, Idioma);

            var conceptosPrincipalesResponsabilidades = new List<string>() {
                "ar_pros_AdministratorMainResponsabilities"
            };
            
            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosPrincipalesResponsabilidades, instancia, 12, Idioma);


            docBuilder.EndTable();
            docBuilder.Writeln();
        }
        /// <summary>
        /// Imprime las tarjetas de los administradores.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="hipercubo">Información del hipercubo.</param>
        private void PintaAdministradores(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, HipercuboReporteDTO hipercubo)
        {
            
            var matrizPlantillaContexto = hipercubo.Hechos;
            var diccionarioTarjetas = hipercubo.Utileria.ReordenaConjutosPorExplicitaImplicitaConcepto(matrizPlantillaContexto);

            foreach (var clavePlantilla in diccionarioTarjetas.Keys)
            {
                var listaTajetas = diccionarioTarjetas[clavePlantilla];
                var primerHecho = listaTajetas.First().First().Value;
                var miembroExplicita = hipercubo.Utileria.ObtenMiembroDimension(primerHecho, "ar_pros_TypeOfCompanyAdministratorsAxis", instancia);
                var itemMiembroTipoAdministrador = miembroExplicita.IdItemMiembro;
                var textoTituloMiembro = ObtenEtiquetaConcepto(itemMiembroTipoAdministrador, instancia, Idioma);
                ImprimeSubTitulo(docBuilder, textoTituloMiembro);
                foreach (var tarjeta in listaTajetas)
                {
                    PintaTarjetaAdministrador(docBuilder, tarjeta, instancia, itemMiembroTipoAdministrador);
                }
            }
        }
        

        /// <summary>
        /// Imprime una tarjeta de presentación de administrador.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="tarjeta">Diccionario con los datos del miembro.</param>
        /// <param name="instancia">Documento de instancia.</param>
        private void PintaTarjetaAccionista(DocumentBuilder docBuilder, IDictionary<string, HechoDto> tarjeta, DocumentoInstanciaXbrlDto instancia)
        {
            docBuilder.StartTable();
            establecerBordesCeldaTabla(docBuilder);
            var conceptosNombre = new List<string>() { "ar_pros_ShareholderFirstName", "ar_pros_ShareholderSecondName", "ar_pros_ShareholderNameCorporateName" };
            var tituloNombre = ConcatenaElementosTarjeta(tarjeta, conceptosNombre, " ");
            establecerFuenteCeldaTitulo(docBuilder);
            SetCellColspan(docBuilder, tituloNombre, 2);
            docBuilder.EndRow();
            var conceptosPrimeraFila = new List<string>() {"ar_pros_ShareholderShareholding"};
            ImprimeConceptosTarjetaMismaFila(docBuilder, tarjeta, conceptosPrimeraFila, instancia,0, Idioma);
            var conceptosSegundaFila = new List<string>() {"ar_pros_ShareholderAdditionalInformation"};
            ImprimeConceptosTarjetaDosFilas(docBuilder, tarjeta, conceptosSegundaFila, instancia, 2, Idioma);
            
            docBuilder.EndTable();
            docBuilder.Writeln();
        }

        /// <summary>
        /// Imprime las tarjetas de los accionistas.
        /// </summary>
        /// <param name="docBuilder">Constructor del documento.</param>
        /// <param name="instancia">Documento de instancia.</param>
        /// <param name="hipercubo">Información del hipercubo.</param>
        private void PintaAccionistas(DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, HipercuboReporteDTO hipercubo)
        {

            var matrizPlantillaContexto = hipercubo.Hechos;
            var diccionarioTarjetas = hipercubo.Utileria.ReordenaConjutosPorExplicitaImplicitaConcepto(matrizPlantillaContexto);

            foreach (var clavePlantilla in diccionarioTarjetas.Keys)
            {
                var listaTajetas = diccionarioTarjetas[clavePlantilla];
                var primerHecho = listaTajetas.First().First().Value;
                var miembroExplicita = hipercubo.Utileria.ObtenMiembroDimension(primerHecho, "ar_pros_TypeOfCompanyShareholdersAxis", instancia);
                var textoTituloMiembro = ObtenEtiquetaConcepto(miembroExplicita.IdItemMiembro, instancia, Idioma);
                ImprimeSubTitulo(docBuilder, textoTituloMiembro);
                foreach (var tarjeta in listaTajetas)
                {
                    PintaTarjetaAccionista(docBuilder, tarjeta, instancia);
                }
            }
        }

    }
}
