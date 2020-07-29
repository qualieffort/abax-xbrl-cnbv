﻿using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Builder;
using AbaxXBRLCore.Reports.Builder.Factory;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Exporter.Impl.Rol;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using Aspose.Words.Fields;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter.Impl
{
    /// <summary>
    /// Implementación de un exportador de documentos de instancia
    /// donde utiliza una plantilla de exportación por cada rol de la taxonomía.
    /// En esta plantilla se configuran los contextos que se usan en cada rol junto con 
    /// los elementos definidos en el presentation linkbase
    /// </summary>
    public class ExportadorDocumentoInstanciaConPlantilla : ExportadorDocumentoInstanciaBase
    {
    //private static Logger log = Logger.getLogger(ExportadorDocumentoInstanciaConPlantillaImpl.class);

	/// <summary>
    /// Configuración de exportadores por rol	
	/// </summary>
    protected IDictionary<String, IExportadorRolDocumentoInstancia> ExportadorPorRol {get; set;}
	
	/// <summary>
    /// Ubicación del documento de WORD de origen sobre el cuál se populan los roles a expotar
	/// </summary>
    public String UbicacionPlantillaExportacion {get; set;}
	
	/// <summary>
    /// Ubicación de la plantilla Jasper para la generacion del reporte Excel	private 
	/// </summary>
    public String UbicacionPlantillaJasper {get; set;}
	
	/// <summary>
    /// Factory para el llamado del correspondiente ReporteBuilder acorde el documento de instancia
	/// </summary>
	
    public ReporteBuilderFactory ReporteBuilderFactory {get; set;}
	
	 /// (non-Javadoc)
	 /// @see com.bmv.spread.xbrl.reportes.exportador.ExportadorDocumentoInstancia#exportarDocumentoAWord(com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto)
	override public byte[] exportarDocumentoAWord(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO)
    {
		Document word = exportarDocumentoAWordInterno(instancia, reporteXBRLDTO);
		return guardarDocumentoComoWord(word);     
	}

	 /// (non-Javadoc)
	 /// @see com.bmv.spread.xbrl.reportes.exportador.ExportadorDocumentoInstancia#exportarDocumentoAPDF(com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto)
	override public byte[] exportarDocumentoAPDF(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO, bool concatenarAdjuntos = true){
		Document word = exportarDocumentoAWordInterno(instancia, reporteXBRLDTO);
		return guardarDocumentoComoPDF(word, instancia, concatenarAdjuntos);     
	}
	
	 /// (non-Javadoc)
	 /// @see com.bmv.spread.xbrl.reportes.exportador.ExportadorDocumentoInstancia#exportarDocumentoAHTML(com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto)
	override public byte[] exportarDocumentoAHTML(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO)
    {
		Document word = exportarDocumentoAWordInterno(instancia, reporteXBRLDTO);
		return guardarDocumentoComoHtml(word);     
	}
	
	/// (non-Javadoc)
	 /// @see com.bmv.spread.xbrl.reportes.exportador.ExportadorDocumentoInstancia#exportarDocumentoAExcel(com.hh.xbrl.abax.viewer.application.dto.DocumentoInstanciaXbrlDto)
	override public byte[] exportarDocumentoAExcel(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO){
        throw new NotImplementedException("No se ha implementado el uso de JASPER Reports");
		
	}

    /// <summary>
    /// Genera un ReporteXBRLDTO a partir de un documento de instancia.
    /// </summary>
	/// <param name="instancia">Documento de instanca a parsear.</param>
	/// <returns>ReporteXBRLDTO generado.</returns>
    override public ReporteXBRLDTO generarReporteXBRLDTO(DocumentoInstanciaXbrlDto instancia, IDefinicionPlantillaXbrl plantilla)
    {
		ReporteXBRLDTO reporteXBRLDTO = null;
		
		ReporteBuilder reporteBuilder = ReporteBuilderFactory.obtenerReporteBuilder(instancia, plantilla);
		reporteBuilder.crearReporteXBRLDTO(instancia);
		reporteXBRLDTO = reporteBuilder.ReporteXBRLDTO;
		
		return reporteXBRLDTO;
	}

    /// <summary>
    /// Método unificado para exportación a word, a partir de este formato se exporta al mismo word, a pdf
	/// o a html
    /// <summary>
	/// <param name="instancia">Datos del documento de instancia a exportar</param>
	/// <returns>Documento de word con el contenido a exportar</returns>
	/// @throws Exception 
	public virtual Document exportarDocumentoAWordInterno(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO){
        //StopWatch w = new StopWatch();
        //w.start();
		if(UbicacionPlantillaExportacion == null)
        {
			throw new Exception("La ubicación de la plantilla del archivo word es nula");
		}
		Stream streamPlantilla = null;
		Document word = null;
		
		try{
            streamPlantilla = Assembly.GetExecutingAssembly().GetManifestResourceStream(UbicacionPlantillaExportacion);
			if(streamPlantilla == null)
            {
				throw new Exception("La plantilla del archivo word es nula");
			}
			
			word = new Document(streamPlantilla);

           
            var tituloTablaContenido = reporteXBRLDTO.ObtenValorEtiquetaReporte("INFORMACION_FINANCIERA_TRIMESTRAL");
            if (!String.IsNullOrEmpty(tituloTablaContenido)) 
            {
                word.Range.Replace("Información Financiera Trimestral", tituloTablaContenido, false, true);
            }
            

	        DocumentBuilder docBuilder = new DocumentBuilder(word);
	        docBuilder.MoveToDocumentEnd();
	        for(int iIndice =0; iIndice < reporteXBRLDTO.Indices.Count(); iIndice++)
            {
	        	IndiceReporteDTO rolExportar =  reporteXBRLDTO.Indices[iIndice];

                   
                    if (ExportadorPorRol.ContainsKey(rolExportar.Uri))
                    {
	        		    if(iIndice==0)
                        {
	        			    ((ExportadorRolDocumentoBase)ExportadorPorRol[rolExportar.Uri]).escribirEncabezado(docBuilder, instancia, reporteXBRLDTO,false);
	        		    }
	        		    docBuilder.InsertBreak(BreakType.SectionBreakNewPage);
	        		    ExportadorPorRol[rolExportar.Uri].exportarRolAWord(docBuilder, instancia, rolExportar, reporteXBRLDTO);
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
            //word.UpdatePageLayout();
		}
        catch(Exception ex)
        {
            LogUtil.Error(ex);
			throw;
		}
		finally
        {
			if(streamPlantilla != null)
            {
				streamPlantilla.Close();
			}
			
		}
		
        //w.stop();
        //log.info("Tiempo en exportarDocumentoAWordInterno() : " + ReporteXBRLUtil.obtenerTiempos(w));
		return word;
	}

	override public Document generarArchivoWord(DocumentoInstanciaXbrlDto instancia, ReporteXBRLDTO reporteXBRLDTO)
    {
		return exportarDocumentoAWordInterno(instancia, reporteXBRLDTO);
	}
    }
}
