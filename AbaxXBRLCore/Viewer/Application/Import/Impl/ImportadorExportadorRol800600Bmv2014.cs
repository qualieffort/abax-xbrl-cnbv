using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using AbaxXBRL.Constantes;
using AbaxXBRL.Taxonomia.Linkbases;
using AbaxXBRL.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using NPOI.SS.Formula.Functions;
using AbaxXBRLCore.Common.Util;

namespace AbaxXBRLCore.Viewer.Application.Import.Impl
{
    /// <summary>
    /// Implementación de un exportador personalizado para un rol.
    /// Se utiliza para exportar únicamente las notas de WORD debido a que este formato contiene una lista de notas
    /// que no se van a exportar si están vacías
    /// </summary>
    class ImportadorExportadorRol800600Bmv2014: ImportadorExportadorRolDocumentoPlantilla
    {
        private const string _rol800600 = "http://bmv.com.mx/role/ifrs/ias_1_2014-03-05_role-800600";
        public override void ExportarRolADocumentoWord(Document word, Section seccionActual, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma)
        {
            //Escribir los titulos de las notas y después el contenido de la nota
            var docBuilder = new DocumentBuilder(word);

            docBuilder.MoveTo(seccionActual.Body.LastParagraph);

            var rolPresentacion = instancia.Taxonomia.RolesPresentacion.FirstOrDefault(x => x.Uri.Equals(_rol800600));
            DateTime fechaInicio = DateTime.MinValue;
            DateTime fechaFin = DateTime.MinValue;
            //Trimestre actual


            if (XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_09_30"), out fechaFin)
                &&
                XmlUtil.ParsearUnionDateTime(plantillaDocumento.ObtenerVariablePorId("fecha_2015_01_01"),
                    out fechaInicio))
            {
                if (rolPresentacion != null)
                {
                    foreach (var estructura in rolPresentacion.Estructuras)
                    {
                        ExportarEstructuraRol(estructura, docBuilder, instancia, rol, plantillaDocumento, fechaInicio, fechaFin, claveIdioma);
                    }
                }
            }

            
        }
        /// <summary>
        /// Exporta al documento de word el hecho del concepto para el trimestre actual, agrega el titulo y el contenido
        /// los hechos sin valor no son exportados
        /// </summary>
        /// <param name="estructura">Estructura actual a exportar</param>
        /// <param name="docBuilder">Clase auxiliar para la creación de contenido en Word</param>
        /// <param name="instancia">Documento de instancia a exportar</param>
        /// <param name="rol">Rol exportado</param>
        /// <param name="plantillaDocumento">Plantilla de documento exportado</param>
        private void ExportarEstructuraRol(EstructuraFormatoDto estructura, DocumentBuilder docBuilder, DocumentoInstanciaXbrlDto instancia, string rol,
            IDefinicionPlantillaXbrl plantillaDocumento, DateTime fechaInicio, DateTime fechaFin, string claveIdioma)
        {
            var hechos = instancia.BuscarHechos(estructura.IdConcepto, null, null, fechaInicio, fechaFin, null);
            if (hechos.Count > 0 && hechos[0].Valor != null && !String.IsNullOrEmpty(hechos[0].Valor.Trim()))
            {
                if (String.IsNullOrEmpty(claveIdioma))
                {
                    claveIdioma = "es";
                }
                var etqs = instancia.Taxonomia.ConceptosPorId[estructura.IdConcepto].Etiquetas[claveIdioma];
                var rolEtiqueta = String.IsNullOrEmpty(estructura.RolEtiquetaPreferido)
                    ? Etiqueta.RolEtiqueta
                    : estructura.RolEtiquetaPreferido;
                var etiqueta = instancia.Taxonomia.ConceptosPorId[estructura.IdConcepto].Nombre;
                if (etqs.ContainsKey(rolEtiqueta))
                {
                    etiqueta = etqs[rolEtiqueta].Valor;
                }

                var font = docBuilder.Font;
                font.Size = 8;
                font.Bold = true;
                font.Name = "Arial";

                docBuilder.Writeln(etiqueta);
                docBuilder.InsertParagraph();

                WordUtil.InsertHtml(docBuilder, estructura.IdConcepto + ":" + hechos[0].Id, hechos[0].Valor, true);
                               
                
                docBuilder.InsertParagraph();
                docBuilder.Writeln("");
             

            }
            if (estructura.SubEstructuras != null)
            {
                foreach (var subestructura in estructura.SubEstructuras)
                {
                    ExportarEstructuraRol(subestructura, docBuilder, instancia, rol, plantillaDocumento, fechaInicio, fechaFin, claveIdioma);
                }
            }
        }
    }
}
