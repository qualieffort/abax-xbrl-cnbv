using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRL.Taxonomia;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Entities;
using AbaxXBRL.Taxonomia.Impl;

namespace AbaxXBRLCore.Viewer.Application.Service
{
    /// <summary>
    /// Definición del servicio de negocio para realizar las operaciones requeridas por el Visor XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public interface IXbrlViewerService
    {
        /// <summary>
        /// Procesa la información contenida en un documento instancia y la prepara para ser presentada en el visor de documentos XBRL.
        /// </summary>
        /// <param name="documentoInstancia">El documento instancia a procesar</param>
        /// <param name="taxonomiasRegistradas">Lista de taxonomías registradas, permite busca en las taxonomías registradas el espacio de nombres principal</param>
        /// <returns>Un DTO con la información procesada para ser presentada por el visor de documentos XBRL.</returns>
        DocumentoInstanciaXbrlDto PreparaDocumentoParaVisor(IDocumentoInstanciaXBRL documentoInstancia,IList<TaxonomiaXbrl> taxonomiasRegistradas);
        /// <summary>
        /// Crea un objeto <code>TaxonomiaDto</code> a partir de su declaráció original de una Taxonomía XBRL utilizada para la creación de un documento instancia Xbrl.
        /// </summary>
        /// <param name="taxonomiaXbrl">La taxonomía XBRL a procesar</param>
        /// <returns>un DTO el cual representa la estructura declarada para el reporte por la taxonomía XBRL.</returns>
        TaxonomiaDto CrearTaxonomiaAPartirDeDefinicionXbrl(ITaxonomiaXBRL taxonomiaXbrl);
        /// <summary>
        /// Crea un documento de instancia XBRL del procesador ABAX en base al modelo de vista del documento y a la taxonomía enviada
        /// como parámetro
        /// </summary>
        /// <param name="taxonomia">Taxonomía del documento</param>
        /// <param name="instanciaXbrlDto">Datos del documento de instancia</param>
        /// <returns>Documento de instancia creado</returns>
        IDocumentoInstanciaXBRL CrearDocumentoInstanciaXbrl(ITaxonomiaXBRL taxonomia, DocumentoInstanciaXbrlDto instanciaXbrlDto);
        /// <summary>
        /// Ajusta los valores de los ID de las dimensiones que únicamente tienen su QName 
        /// </summary>
        /// <param name="instanciaXbrlDto">Documento a ajustar</param>
        void AjustarIdentificadoresDimensioneConQname(DocumentoInstanciaXbrlDto instanciaXbrlDto);

        /// <summary>
        /// Intenta buscar algún espacio de nombres principal de las taxonomías registradas
        /// en la taxonomía enviada como parámetro, si se encuentra, se retorna el valor del espacio de nombres
        /// </summary>
        /// <param name="taxonomia">Taxonomía a inspeccionar</param>
        /// <param name="taxonomiasRegistradas">Lista de taxonomías registradas</param>
        string ObtenerEspacioNombresPrincipal(ITaxonomiaXBRL taxonomia, IList<TaxonomiaXbrl> taxonomiasRegistradas);

        /// <summary>
        /// Verifica unidades, contextos y hechos duplicados, para el caso de uniades y contextos, los elimina y 
        /// migra los elementos asociados a ellos.
        /// Para el caso de hechos, e eliminan los hechos duplicados
        /// </summary>
        /// <param name="instanciaXbrlDto">Documento de instancia a revisar</param>
        void EliminarElementosDuplicados(DocumentoInstanciaXbrlDto instanciaXbrlDto);

        void IncorporarTaxonomia(TaxonomiaDto taxonomiaOriginal, ITaxonomiaXBRL taxonomiaIncorporar);
    }
}
