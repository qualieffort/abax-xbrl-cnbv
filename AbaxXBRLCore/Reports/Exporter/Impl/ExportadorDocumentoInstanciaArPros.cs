using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Exporter.Impl.Rol;
using AbaxXBRLCore.Viewer.Application.Dto;
using Aspose.Words;
using Aspose.Words.Fields;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter.Impl
{
    public class ExportadorDocumentoInstanciaArPros : ExportadorDocumentoInstanciaConPlantilla
    {
        public override Document exportarDocumentoAWordInterno(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO)
        {
            if (UbicacionPlantillaExportacion == null)
            {
                throw new Exception("La ubicación de la plantilla del archivo word es nula");
            }
            Stream streamPlantilla = null;
            Document word = null;

            try
            {
                streamPlantilla = Assembly.GetExecutingAssembly().GetManifestResourceStream(UbicacionPlantillaExportacion);
                if (streamPlantilla == null)
                {
                    throw new Exception("La plantilla del archivo word es nula");
                }

                word = new Document(streamPlantilla);

                DocumentBuilder docBuilder = new DocumentBuilder(word);
                docBuilder.MoveToDocumentEnd();
                for (int iIndice = 0; iIndice < reporteXBRLDTO.Indices.Count(); iIndice++)
                {
                    IndiceReporteDTO rolExportar = reporteXBRLDTO.Indices[iIndice];

                    if (ExportadorPorRol.ContainsKey(rolExportar.Uri))
                    {
                        
                        ExportadorPorRol[rolExportar.Uri].exportarRolAWord(docBuilder, instancia, rolExportar, reporteXBRLDTO);
                        try
                        {
                            docBuilder.InsertBreak(BreakType.SectionBreakNewPage);
                        }
                        catch(Exception ex)
                        {
                            LogUtil.Error(ex);
                        }
                       
                    }
                }
                
                for (int i = 0; i < word.Sections.Count; i++)
                {
                    FieldCollection fields = word.Sections[i].Range.Fields;
                    
                    for (int j = 0; j < fields.Count; j++)
                    {
                        if (fields[j].Type == FieldType.FieldTOC || fields[j].Type == FieldType.FieldHyperlink)
                        {
                            
                            fields[j].Update();
                            
                        }
                    }

                }

                //word.UpdateFields();
                word.UpdatePageLayout();
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
            finally
            {
                if (streamPlantilla != null)
                {
                    streamPlantilla.Close();
                }

            }

            return word;
        }
    }
}
