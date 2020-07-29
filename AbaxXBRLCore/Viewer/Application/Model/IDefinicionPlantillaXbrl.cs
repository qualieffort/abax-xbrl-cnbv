using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using NPOI.SS.UserModel;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Model
{
    /// <summary>
    /// Definición del contrato que deberá cumplir cada definición de una plantilla XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public interface IDefinicionPlantillaXbrl
    {
        /// <summary>
        /// Contiene las diferentes definiciones de elementos utilizados por cada uno de los roles de la taxonomía asociada a esta plantilla de documento instancia XBRL
        /// </summary>
        IDictionary<string, DefinicionElementosPlantillaXbrl> DefinicionesDeElementosPlantillaPorRol { get; set; }

        /// <summary>
        /// Inicializa la instancia de la definición de la plantilla y la asocia a un documento instancia.
        /// </summary>
        /// <param name="documentoInstancia">el documento instancia que será actualizado con los datos de la definición de la plantilla.</param>
        /// <returns>true si pudo inicializa correctamente la definición de la plantilla. false en cualquier otro caso.</returns>
        bool Inicializar(DocumentoInstanciaXbrlDto documentoInstancia);

        /// <summary>
        /// Agrega la definición de los elementos utilizados por la plantilla asociada a un rol.
        /// </summary>
        /// <param name="definicion">la definición de elementos que utilizará la plantilla asociada al rol.</param>
        void AgregarDefinicionElementos(DefinicionElementosPlantillaXbrl definicion);

        /// <summary>
        /// Obtiene la definición de los elementos utilizados por una plantilla que corresponde al rol pasado como parámetro.
        /// </summary>
        /// <returns>el objeto con la definición de los elementos utilizados por la plantilla asociada al rol. null en caso de que no exista una definición para dicho uri de rol.</returns>
        DefinicionElementosPlantillaXbrl ObtenerDefinicionDeElementos();

        /// <summary>
        /// Obtiene los parámetros de configuración de la instancia de la plantilla.
        /// </summary>
        /// <returns>los parámetros de configuración de la instancia de la plantilla.</returns>
        IDictionary<string, string> ObtenerParametrosConfiguracion();

        /// <summary>
        /// Genera las variables requeridas por el documento instancia.
        /// </summary>
        /// <returns>true si fue posible generar con éxito las variables. false en cualquier otro caso.</returns>
        bool GenerarVariablesDocumentoInstancia();

        bool DeterminarParametrosConfiguracion(DocumentoInstanciaXbrlDto documentoInstancia);

        /// <summary>
        /// Obtiene un mapa cuyas llaves son el identificador de la variable del documento instancia y como valor asociado el valor determinado para la variable del documento.
        /// </summary>
        /// <returns>un mapa cuyas llaves son el identificador de la variable del documento instancia y como valor asociado el valor determinado para la variable del documento.</returns>
        IDictionary<string, string> ObtenerVariablesDocumentoInstancia();

        /// <summary>
        /// Obtiene el valor de una variable por medio de su identificador.
        /// </summary>
        /// <param name="id">el identificador de la variable a consultar.</param>
        /// <returns>el valor asociado a la variable que corresponde al identificador proporcionado. null si no existe una variable con dicho identificador.</returns>
        string ObtenerVariablePorId(string id);

        /// <summary>
        /// Obtiene una ruta relativa a la raíz de la aplicación web en donde se encuentra la plantilla que deberá ser utilizada para el formato de captura de un rol de un documento instancia XBRL.
        /// </summary>
        /// <param name="rolURI">el URI del rol a consultar.</param>
        /// <returns>la ubicación relativa desde la raíz de la aplicación donde se localiza la plantilla. null en caso de no existir una plantilla para dicho rol.</returns>
        string ObtenerIdSpringDefinicionElementosPlantillaDeRol(string rolURI);

        /// <summary>
        /// Obtiene la ruta relativa a la raíz de la aplicación Core donde se ecuentra la plantilla de excel
        /// </summary>
        /// <returns>Ruta de la plantilla de excel</returns>
        string ObtenerRutaPlantillaExcel();
        /// <summary>
        /// Obtiene la ruta relativa a la raíz de la aplicación Core donde se encuentra el documento
        /// de excel basado en la plantilla listo para que el usuario lo llene
        /// </summary>
        /// <returns>Ruta de la plantilla que el usuario debe llenar</returns>
        string ObtenerRutaPlantillaLlenado();

        /// <summary>
        /// Obtiene la ruta relativa a la raíz de la aplicación Core donde se ecuentra la plantilla de word
        /// </summary>
        /// <returns>Ruta de la plantilla de word</returns>
        string ObtenerRutaPlantillaNotasWord();
        /// <summary>
        /// Obtiene la ruta donde se encuentra la plantilla de WORD para la exportación del reporte completo
        /// </summary>
        /// <param name="claveIdioma">Clave del idioma en el que se requiere la plantilla.</param>
        /// <returns></returns>
        string ObtenerRutaPlantillaExportacionWord(string claveIdioma);
        /// <summary>
        /// Obtiene el identificador del contexto que corresponde a un contexto del documento instancia que coincide en todas sus características con el contexto descrito por el identificador de contexto de la plantilla.
        /// Si no existiese un contexto equivalente, se creará en el documento instancia a partir de la definición de la plantilla.
        /// </summary>
        /// <param name="idContextoPlantilla">el identificador del contexto de la plantilla que será consultado.</param>
        /// <param name="idConcepto">el identificador del concepto que se ligará al contexto.</param>
        /// <returns>el identificador del contexto en el documento instancia que coincide con el contexto de plantilla relacionado al identificador pasado como parámetro. null en caso de no poder encontrar un contexto equivalente o no poder crearlo.</returns>
        string ObtenerIdContextoDocumentoInstanciaEquivalenteAIdContextoPlantilla(string idContextoPlantilla, string idConcepto);

        /// <summary>
        /// Agrega un contexto al modelo del documento instancia y actualiza los índices relacionados.
        /// </summary>
        /// <param name="contextoACrear">el contexto que se deberá agregar al documento instancia.</param>
        void InyectarContextoADocumentoInstancia(ContextoDto contextoACrear);

        /// <summary>
        /// Obtiene el identificador de la unidad que corresponde a una unidad del documento instancia que coincide en todas sus características con la unidad descrita por el identificador de unidad de la plantilla.
        /// Si no existiese una unidad equivalente, se creará en el documento instancia a partir de la definición de la plantilla.
        /// </summary>
        /// <param name="idUnidadPlantilla">el identificador de la unidad de la plantilla que será consultada.</param>
        /// <param name="idConcepto">el identificador del concepto que se va a relacionar con la unidad</param>
        /// <returns>el identificador de la unidad en el documento instancia que coincide con la unidad de plantilla relacionada al identificador pasado como parámetro. null en caso de no poder encontrar una unidad equivalente o no poder crearla.</returns>
        string ObtenerIdUnidadDocumentoInstanciaEquivalenteAIdUnidadPlantilla(string idUnidadPlantilla, string idConcepto);

        /// <summary>
        /// Obtiene el identificador del hecho que corresponde a un hecho del documento instancia que coincide en todas sus características con el hecho descrito por el identificador de hecho de la plantilla.
        /// Si no existiese un hecho equivalente, se creará en el documento instancia a partir de la definición de la plantilla.
        /// </summary>
        /// <param name="idHechoPlantilla">el identificador del hecho de la plantilla que será consultada.</param>
        /// <returns>el identificador del hecho en el documento instancia que coincide con el hecho de plantilla relacionada al identificador pasado como parámetro. null en caso de no poder encontrar un hecho equivalente o no poder crearlo.</returns>
        string ObtenerIdHechoDocumentoInstanciaEquivalenteAIdHechoPlantilla(string idHechoPlantilla);

        /// <summary>
        /// Agrega un hecho al documento instancia.
        /// </summary>
        /// <param name="hechoACrear">Es el hecho que se va a inyectar al documento de instancia.</param>
        void InyectaHechoADocumentoInstancia(HechoDto hechoACrear);

        /// <summary>
        /// Busca una unidad en el documento instancia la cual es equivalente a una unidad definida en una plantilla.
        /// </summary>
        /// <param name="idUnidadPlantilla">el identificador de la unidad de la plantilla a buscar.</param>
        /// <param name="idConcepto">el identificador del concepto que se va a relacionar con la unidad</param>
        /// <returns>el objeto con la unidad que corresponde a la unidad. null si no es posible buscar o encontrar la unidad en el documento instancia.</returns>
        UnidadDto BuscarUnidadPlantillaEnUnidadesDocumentoInstancia(string idUnidadPlantilla, string idConcepto);

        /// <summary>
        /// Busca un contexto en el documento instancia el cual es equivalente a un contexto definido en una plantilla.
        /// </summary>
        /// <param name="idContextoPlantilla">el identificador de la unidad de la plantilla a buscar.</param>
        /// <param name="idConcepto">el identificador del concepto que se ligará al contexto</param>
        /// <returns>el objeto con la unidad que corresponde a la unidad. null si no es posible buscar o encontrar la unidad en el documento instancia.</returns>
        ContextoDto BuscarContextoPlantillaEnContextosDocumentoInstancia(string idContextoPlantilla, string idConcepto);

        /// <summary>
        /// Busca un hecho en el documento instancia el cual es equivalente a un hecho definido en una plantilla.
        /// </summary>
        /// <param name="idHechoPlantilla">el identificador del hecho de la plantilla a buscar.</param>
        /// <returns>el objeto con la unidad que corresponde a la unidad. null si no es posible buscar o encontrar la unidad en el documento instancia.</returns>
        HechoDto BuscarHechoPlantillaEnHechosDocumentoInstancia(string idHechoPlantilla);

        /// <summary>
        /// Crea un objeto Hecho a partir de una definición de plantilla
        /// </summary>
        /// <param name="idHechoPlantilla">el identificador del hecho de plantilla</param>
        /// <returns>un objeto Hecho el cual representa el hecho descrito por la plantilla</returns>
        HechoDto CrearHechoAPartirDeIdDefinicionPlantilla(string idHechoPlantilla);

        /// <summary>
        /// Crea un objeto Hecho a partir de una definición de plantilla
        /// </summary>
        /// <param name="hechoPlantilla">el hecho de plantilla</param>
        /// <returns>un objeto Hecho el cual representa el hecho descrito por la plantilla</returns>
        HechoDto CrearHechoAPartirDeDefinicionPlantilla(HechoPlantillaDto hechoPlantilla);

        /// <summary>
        /// Crea un objeto Contexto a partir de una definición de plantilla
        /// </summary>
        /// <param name="idContextoPlantilla">el identificador del contexto de plantilla</param>
        /// <returns>un objeto Contexto el cual representa el contexto descrita por la plantilla.</returns>
        ContextoDto CrearContextoAPartirDeDefinicionPlantilla(string idContextoPlantilla);

        /// <summary>
        /// Crea un arreglo de información dimensional en base a la información dimensional provista para un contexto de una plantilla.
        /// </summary>
        /// <param name="valoresDimensionPlantilla">la información dimensional provista en la plantilla.</param>
        /// <returns>unf arreglo de información dimensional creado a partir de lo que se definió en la plantilla de captura. null si ocurrió un error al generar la información.</returns>
        IList<DimensionInfoDto> CrearValoresDimensionAPartirDeDefinicionPlantilla(IList<DimensionInfoDto> valoresDimensionPlantilla);

        /// <summary>
        /// Crea un objeto Unidad a partir de una definición de plantilla
        /// </summary>
        /// <param name="idUnidadPlantilla">el identificador de la unidad de plantilla</param>
        /// <returns>un objeto Unidad el cual representa la unidad descrita por la plantilla.</returns>
        UnidadDto CrearUnidadAPartirDeDefinicionPlantilla(string idUnidadPlantilla);

        /// <summary>
        /// Crea un arreglo de medidas a partir de su definición en una unidad de la plantilla del documento instancia.
        /// </summary>
        /// <param name="medidas">las medidas que se definieron en la unidad de la plantilla.</param>
        /// <returns>un arreglo con las medidas creadas a partir de la definición. null en caso de que haya un problema al crear las medidas en base a la definición.</returns>
        IList<MedidaDto> CrearMedidasAPartirMedidasPlantilla(IList<MedidaPlantillaDto> medidas);

        /// <summary>
        /// Analiza la expresión pasada como parámetros y si comienza con el caracter '#' reemplaza el contenido de la expresión por la variable del documento instancia que le corresponda.
        /// Si la expresión no comienza con el caracter '#' regresa la misma cadena sin modificaciones. Si la expresión comienza con el caracter '#' pero no existe una variable de documento
        /// instancia que corresponda con la expresión, se regresará null.
        /// </summary>
        /// <param name="expresion">la expresión a evaluar.</param>
        /// <returns>el resultado de la evaluación según lo descrito anteriormente.</returns>
        string ReemplazarVariablesPlantilla(string expresion);

        /// <summary>
        /// Obtiene uno o mas alias o identificador de un Rol en base a su URI 
        /// </summary>
        /// <param name="rolUri">URI completo del rol a consultar</param>
        /// <returns>Alias del rol, null si no tiene alias</returns>
        IList<string> ObtenerAliasDeRol(string rolUri);
        /// <summary>
        /// Obtiene el rol al que pertenece un alias de rol
        /// </summary>
        /// <param name="alias">Alias de rol a buscar</param>
        /// <returns>Rol encontrado, null en caso de que el alias no perteneza ningún rol</returns>
        string ObtenerRolDeAlias(string alias);

        /// <summary>
        /// Obtiene el identificador unico de la plantilla en base al id de la plantilla de notas del documento en word
        /// </summary>
        /// <param name="idDocumentoNota">identificaodr unico de la nota en el documento de word</param>
        /// <returns>Identidicador unico de la plantilla</returns>
        string ObtenerIdHechoPlantillaPorIdDocumentoNota(string idDocumentoNota);
       
        /// <summary>
        /// Obtiene el índice de sección correspondiente al Rol en el archivo
        /// </summary>
        /// <param name="rol">Rol a buscar su índice</param>
        /// <returns>Índice del rol en el documento</returns>
        string ObtenerIndiceSeccionWordPorRol(string rol);

        /// <summary>
        /// Si la plantilla lo requiere, construye el título que el regulador exige que tenga el archivo XBRL que se exporta
        /// </summary>
        /// <returns>Título del documento, null si la plantilla no cuenta con ningún título</returns>
        string ObtenerTituloEspecificoDocumentoXbrl(DocumentoInstanciaXbrlDto instancia = null);

        /// <summary>
        /// Valida si el identificador del concepto se debe de comportar como tipo text block
        /// </summary>
        /// <param name="idConcepto">Identificador del concepto a buscar</param>
        /// <returns>Si el concepto se debe de comportar como textblock</returns>
        bool ConceptoSeComportaComoTextBlockItem(string idConcepto);
        /// <summary>
        /// Determina los parametros de configuarción del documento
        /// </summary>
        /// <param name="documentoInstanciaXbrl">Documento del que se obtendrán los parametros de configuración.</param>
        /// <returns>Parametros de configuración estimados</returns>
        IDictionary<string, string> DeterminaParametrosConfiguracionDocumento(DocumentoInstanciaXbrlDto documentoInstanciaXbrl);

        /// <summary>
        /// Obtiene la fecha máxima en la que se reporta un hecho en el documento.
        /// </summary>
        /// <param name="documentoInstancia">Documento a evaluar.</param>
        /// <returns>Fecha máxima encontrada.</returns>
        DateTime ObtenMaximaFechaReporte(DocumentoInstanciaXbrlDto documentoInstancia);
        
        /// <summary>
        /// Aplica validaciones básica, requeridas o no requeridas a una plantilla de Excel de entrada
        /// </summary>
        /// <param name="workbook">Plantilla de excel a importar</param>
        /// <param name="resumenProceso">Objeto con el resumen de proceso para incluir errores generados</param>
        /// <returns>True si puede continuar con la importación, false en caso de algún error fatal</returns>
        bool ValidarPlantillaExcelImportacion(IWorkbook workbook, Common.Dtos.ResumenProcesoImportacionExcelDto resumenProceso);
        /// <summary>
        /// Recupera el número actual opcional de la versión de la plantilla
        /// </summary>
        /// <returns></returns>
        String ObtenerNumeroVersionPlantilla();
    }
}
