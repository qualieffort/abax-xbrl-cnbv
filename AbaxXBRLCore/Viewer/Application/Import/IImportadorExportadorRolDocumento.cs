using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Model;
using Aspose.Words;
using NPOI.SS.UserModel;
using AbaxXBRLCore.Common.Dtos;

namespace AbaxXBRLCore.Viewer.Application.Import
{
    /// <summary>
    /// Define la funcionalidad que debe de cumplir un componente que pueda importar los datos de un rol 
    /// de un documento de instancia a partir de un archivo excel o word.
    /// </summary>
    /// <author>Emigdio Hernandez</author>
    public interface IImportadorExportadorRolDocumento
    {
        /// <summary>
        /// Importa, de acuerdo a la posición de la celda, la información de un hecho que corresponda a un hecho en 
        /// la plantilla de excel, si el hecho a importar tiene valor y no existe en el documento de instancia entonces
        /// se debe de crear el hecho partiendo de la definición de la plantilla
        /// </summary>
        /// <param name="hojaAImportar">Hoja de excel a importar</param>
        /// <param name="hojaPlantilla">Hoja de excel de plantilla</param>
        /// <param name="instancia">Documento de instancia donde se pondrán los datos importados</param>
        /// <param name="rol">Rol que se está actualmente importando</param>
        /// <param name="informeErrores">Lista de informe de errores</param>
        /// <param name="resumenHechosImportados">Contiene el resumen de los valores importados en los hechos, el mapa tiene: ID del hecho en el documento - Valor importado</param>
        /// <param name="plantillaDocumento">Plantilla del documento de instancia</param>
        void ImportarDatosDeHojaExcel(ISheet hojaAImportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, ResumenProcesoImportacionExcelDto resumenImportacion, IDefinicionPlantillaXbrl plantillaDocumento);
        /// <summary>
        /// Exporta los datos del documento de instancia en las celdas correspondientes de la hoja a exportar
        /// </summary>
        /// <param name="hojaAExportar">Hoja donde se pondrán los datos del documento</param>
        /// <param name="hojaPlantilla">Hoja opcional de plantilla</param>
        /// <param name="instancia">Documento de instancia a exportar</param>
        /// <param name="rol">Rol que se está exportando</param>
        /// <param name="plantillaDocumento">Plantilla del documento de instancia</param>
        void ExportarDatosDeHojaExcel(ISheet hojaAExportar, ISheet hojaPlantilla, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, String idioma);

        /// <summary>
        /// Exporta los datos del rol en el documento de instancia al documento de word según los elementos definidos en la plantilla
        /// </summary>
        /// <param name="word">Documento destino de word</param>
        /// <param name="section"></param>
        /// <param name="instancia">Instancia a expostar</param>
        /// <param name="rol">rol a exportar</param>
        /// <param name="claveIdioma">Clave del idioma que se esta exportando.</param>
        /// <param name="plantillaDocumento">plantilla actual del documento</param>
        void ExportarRolADocumentoWord(Document word, Section section, DocumentoInstanciaXbrlDto instancia, string rol, IDefinicionPlantillaXbrl plantillaDocumento, string claveIdioma);
    }
}
