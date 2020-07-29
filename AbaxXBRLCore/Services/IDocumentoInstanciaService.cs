using System.IO;
using AbaxXBRLCore.Common.Dtos;
using System;
using System.Collections.Generic;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Common.Cache;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System.Linq;

namespace AbaxXBRLCore.Services
{
    /// <summary>
    /// Interfaz del servicio de negocio para la administración de los documentos de instancia creados, editados o 
    /// importados en el sistema.
    /// <author>Emigdio Hernández</author>
    /// </summary>
    public interface IDocumentoInstanciaService
    {
        /// <summary>
        /// Consulta los documentos de instancia asociados con el usuario enviado como parámetro.
        /// </summary>
        /// <param name="claveEmisora">Filtro para limitar la clave de la emisora del documento</param>
        /// <param name="fechaCreacion">Filtro para limitar la fecha de creación del documento</param>
        /// <param name="esDueno">Indica si se consultan únicamente los documentos donde el usuario es dueño o no</param>
        /// <param name="idUsuario">Usuario del que se desean consultar los documentos de instnacia</param>
        /// <returns>Resultado de la operación de consulta</returns>
        ResultadoOperacionDto ObtenerDocumentosDeUsuario(string claveEmisora, DateTime fechaCreacion,bool esDueno, long idUsuario);

        /// <summary>
        /// Consulta los documentos de instancia que no están asociados a ningún usuario en específico, opcionalmente
        /// filtrados por clave de emisora y fecha de creación
        /// </summary>
        /// <param name="claveEmisora">Clave de emisora opcional a filtrar</param>
        /// <param name="fechaCreacion">Fecha de creación opcional a filtrar</param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerDocumentosEnviadosSinUsuario(string claveEmisora, DateTime fechaCreacion);

        /// <summary>
        /// Carga y procesa una taxonomía de base de datos a su representación en el modelo
        /// puro del procesador de XBRL
        /// </summary>
        /// <param name="idTaxonomia">Identifcador de la taxonomía</param>
        /// <param name="errores">Errores a presentar.</param>
        /// <returns>Resultado de la operación, objeto TaxonomiaXbrl cargada</returns>
        ResultadoOperacionDto ObtenerTaxonomiaXbrlProcesada(long idTaxonomia, IList<ErrorCargaTaxonomiaDto> errores, bool forzarEsquemaHttp=false);

        /// <summary>
        /// Carga y procesa una taxonomía de base de datos a su representación en el modelo
        /// puro del procesador de XBRL
        /// </summary>
        /// <param name="archivosTaxonomiaXbrl">Listado de archivos de la taxonomia a cargar</param>
        /// <returns>Resultado de la operación, objeto TaxonomiaXbrl cargada</returns>
        ResultadoOperacionDto ObtenerTaxonomiaXbrlProcesada(ICollection<ArchivoTaxonomiaXbrl> archivosTaxonomiaXbrl, bool forzarEsquemaHttp = false);

        /// <summary>
        /// Obtiene la lista de taxonomías registradas en base de datos
        /// </summary>
        /// <returns>Lista de taxonomías registradas en base de datos</returns>
        ResultadoOperacionDto ObtenerTaxonomiasRegistradas();
        /// <summary>
        /// Obtiene por ID una taxonomía registrada en la base de datos
        /// </summary>
        /// <param name="idTaxonomia">Identificador de la taxonomía buscada</param>
        /// <returns>Resultado de la operación con la taxonomía encontrda</returns>
        ResultadoOperacionDto ObtenerTaxonomiaBdPorId(long idTaxonomia);
       
        /// <summary>
        /// Obtiene los datos de la última versión de un documento de instancia (sin el contenido de esa versión)
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento de instancia del cuál se obtiene la versión</param>
        /// <returns>Resultado de la operación</returns>
        ResultadoOperacionDto ObtenerUltimaVersionDocumentoInstancia(long idDocumentoInstancia);

        /// <summary>
        /// Obtiene todas las versiones del documento instancia sin incluir los datos almacenados.
        /// </summary>
        /// <param name="idDocumentoInstancia">el identificador del documento instancia a consultar.</param>
        /// <returns>Una lista con las versiones del documento. Una lista vacía en caso de no existir versiones.</returns>
        ResultadoOperacionDto ObtenerVersionesDocumentoInstancia(long idDocumentoInstancia);

        /// <summary>
        /// Elimina los datos de un documento de instancia, sus versiones y persmisos de usuario, únicamente si 
        /// el documento le pertenece al usuario que lo intenta borrar
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador a borrar</param>
        /// <param name="idUsuarioExec">Usuario que ejecuta la acción</param>
        /// <returns>Resultado de la operación</returns>
        ResultadoOperacionDto EliminarDocumentoInstancia(long idDocumentoInstancia, long idUsuarioExec);
        /// <summary>
        /// Consulta los datos de un documento de instancia en base a su llave primaria 
        /// </summary>
        /// <param name="idDocumentoInstancia">Llave primaria del documento a consultar</param>
        /// <returns>Resultado de la operación con el documento de instancia recuperado o null si no se encontró el documento</returns>
        ResultadoOperacionDto ObtenerDocumentoInstancia(long idDocumentoInstancia);

        /// <summary>
        /// Obtiene los usuarios asignados a un documento instancia que pertenecen a una empresa en específico.
        /// </summary>
        /// <param name="idDocumentoInstancia">El identificador del documento instancia</param>
        /// <param name="idEmpresa">El identificador de la empresa</param>
        /// <param name="idUsuarioExec">El identificador del usuario que consulta</param>
        /// <returns>Una lista con los usuarios actualmente asignados al documento</returns>
        ResultadoOperacionDto ObtenerUsuariosDeDocumentoInstancia(long idDocumentoInstancia, long idEmpresa,long idUsuarioExec);

        /// <summary>
        /// Actualiza los usuarios que tienen asignado un documento instancia.
        /// </summary>
        /// <param name="idDocumentoInstancia">El identificador del documento instancia</param>
        /// <param name="idEmpresa">El identificador de la empresa a la que pertenece el usuario</param>
        /// <param name="usuariosAsignados">Los usuarios a los que debe asignarse el documento instancia.</param>
        /// <param name="idUsuarioExec">El identificador del usuario que ejecuta la asignación.</param>
        /// <returns>Un DTO con el resultado de la operación</returns>
        ResultadoOperacionDto ActualizarUsuariosDeDocumentoInstancia(long idDocumentoInstancia, long idEmpresa, IList<UsuarioDocumentoInstancia> usuariosAsignados, long idUsuarioExec);

        /// <summary>
        /// Importa los datos de una plantilla de captura de excel al documento de instancia,
        /// determina si existe un importador adecuado para la taxonomía del documento e importa las hojas del
        /// libro a través del importador adecuado
        /// </summary>
        /// <param name="archivoExcel">Archivo de entrada</param>
        /// <param name="documentoInstancia">Documento a actualizar</param>
        /// <param name="idUsuarioExec">Identificador del usurio que ejecuta</param>
        /// <param name="conceptosDescartar">Conceptos a descartar</param>
        /// <param name="hojasDescartar">Hojas a descartar</param>
        /// <returns>Resultado de la operación</returns>
        ResultadoOperacionDto ImportarFormatoExcel(Stream archivoExcel, DocumentoInstanciaXbrlDto documentoInstancia,
            long idUsuarioExec, IDictionary<string, bool> conceptosDescartar = null, IList<string> hojasDescartar = null);
        /// <summary>
        /// Bloquea o libera un documento instancia en favor del usuario que realiza la petición. Sólo un usuario con permisos de escritura puede bloquear o liberar un documento.
        /// </summary>
        /// <param name="idDocumentoInstancia">el identificador del documento instancia</param>
        /// <param name="bloquear">indica si debe bloquear o desbloquear un documento</param>
        /// <param name="idUsuarioExec">el identificador del usuario que desea realizar la operación</param>
        /// <returns>un DTO con el resultado de la operación</returns>
        ResultadoOperacionDto BloquearLiberarDocumentoInstancia(long idDocumentoInstancia, bool bloquear, long idUsuarioExec);
       

        /// <summary>
        /// Importa la información de un documento en formato Word (.doc o .docx) y las acomoda 
        /// en una lista donde la llave es el id de la cuenta y el contenido es el contenido HTML de la nota
        /// El documento de Word debe de contener marcadores para marcar el inicio y fin de cada nota con corchetes
        /// 
        /// [ifrs_nota_1]
        /// 
        /// Contenido de la nota
        /// 
        /// [/ifrs_nota_1]
        /// 
        /// </summary>
        /// <param name="streamDocumento">Bytes del documento</param>
        /// <param name="aspose"> </param>
        /// <returns></returns>
        ResultadoOperacionDto ImportarNotasDeDocumentoWord(Stream streamDocumento, string libreria);
        /// <summary>
        /// Convierte en HTML un documento de WORD y coloca la cadena resultante en la información
        /// extra del resultado.
        /// </summary>
        /// <param name="streamDocumento">Documento origen</param>
        /// <returns></returns>
        ResultadoOperacionDto ImportarDocumentoWord(Stream streamDocumento);
        /// <summary>
        /// Convierte en base 64 un archivo binario y coloca la cadena resultante en la información
        /// extra del resultado.
        /// </summary>
        /// <param name="streamDocumento">Documento origen</param>
        /// <returns></returns>
        ResultadoOperacionDto ImportarArchivoBase64(Stream streamDocumento);

        /// <summary>
        /// Almacena o actualiza la representación del modelo de un documento de instancia XBRL.
        /// Realiza el almacenamiento y versionamiento del documento de instancia
        /// </summary>
        /// <param name="documentoInstancia">DTO que contiene los datos del modelo del documento de instancia</param>
        /// <param name="idUsuarioExec">Usuario que realiza la acción</param>
        /// <returns>Resultado de la operación</returns>
        ResultadoOperacionDto GuardarDocumentoInstanciaXbrl(DocumentoInstanciaXbrlDto documentoInstancia,long idUsuarioExec);
        /// <summary>
        /// Consulta los datos de un documento de instancia en base de datos
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento de instancia de base de datos</param>
        /// <param name="idUsuarioExec">Identificador del usuario que ejecuta la operación</param>
        /// <returns>Resultado de la operación: Modelo cargado del documento de instancia</returns>
        ResultadoOperacionDto ObtenerModeloDocumentoInstanciaXbrl(long idDocumentoInstancia,long idUsuarioExec);
        /// <summary>
        /// Consulta los datos de un documento de instancia en base de datos, recuperando
        /// la versión enviada como parámetro.
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento de instancia a conulstar</param>
        /// <param name="version">Versión del documento de instancia a consultar</param>
        /// <param name="idUsuarioExec">Usuario que realiza la consulta</param>
        /// <returns>El modelo del documento de instancia en caso de ser encontrado, indicador de error si no se encuentra o
        /// no se cuenta con los permisos para la lectura de la versión</returns>
        ResultadoOperacionDto ObtenerVersionModeloDocumentoInstanciaXbrl(long idDocumentoInstancia, int version,
                                                                         long idUsuarioExec);

        /// <summary>
        /// Realiza un export a formato excel de la consulta configurada
        /// </summary>
        /// <param name="estructuraDocumento">Informacion de la la estructura del documento</param>
        /// <param name="consultaAnalisisDto">Informacion de la consulta a realizar</param>
        /// <returns>Resultado de la acción</returns>
        MemoryStream ExportDatosEstructuraDocumento(Dictionary<string, object> estructuraDocumento, ConsultaAnalisisDto consultaAnalisisDto);

        /// <summary>
        /// Inicializa las taxonomías registradas en base de datos
        /// </summary>
        void InicializarTaxonomias();
        /// <summary>
        /// Inicializa las taxonomías registradas en la configuración de spring del servicio
        /// </summary>
        void InicializarTaxonomiasPorConfiguracion();


        /// <summary>
        /// Realiza una consulta del repositorio de hechos filtrando por el ID de las cuentas enviadas como parámetro
        /// Agrupado por documento y cuenta
        /// </summary>
        /// <param name="idConceptos">Lista de conceptos buscados</param>
        /// <param name="idUsuarioExec">Usuario que ejecuta la consulta</param>
        /// <param name="idTaxonomia">Identificador de la taxonomia a consultar</param>
        /// <returns>Resultado de la operación: Lista de resultados de hechos localizados</returns>
        ResultadoOperacionDto ObtenerHechosPorFiltro(string[] idConceptos, long idUsuarioExec,long idTaxonomia);


        /// <summary>
        /// Genera una nueva versión de un documento de instancia con los contextos actualizados.
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento al que se generará la nueva vesión.</param>
        /// <param name="IdUsuarioExec">Identificador del usuario que dispara este procedimiento.</param>
        /// <param name="_cacheTaxonomiaXbrl">Contiene definiciones de las taxonomias.</param>
        /// <param name="_estrategiaCacheTaxonomia">Cache de taxonomías de documentos de instancia.</param>
        void GeneradocumentoInstaciaCotextoActualizado(long idDocumentoInstancia, long IdUsuarioExec, ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl, EstrategiaCacheTaxonomiaMemoria _estrategiaCacheTaxonomia);

        ///// <summary>
        ///// Itera todos los documentos de instancia existentes en la BD y les genera una nueva versión con los contextos actualizados.
        ///// </summary>
        ///// <param name="idUsuarioExec">Identificador del usuario que ejecuta este procedimiento.</param>
        ///// <param name="_cacheTaxonomiaXbrl">Contiene definiciones de las taxonomias.</param>
        ///// <param name="_estrategiaCacheTaxonomia">Cache de taxonomías.</param>
        //void GeneraDocumentosInstannciaContextosActualizados(long idUsuarioExec, ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl, EstrategiaCacheTaxonomiaMemoria _estrategiaCacheTaxonomia);
        /// <summary>
        /// Importa los hechos de un documento de instancia cuyo contexto en el documento a importar sea equivalente a algún
        /// contexto del documento destino.
        /// </summary>
        /// <param name="documentoInstancia">Documento de instancia destino</param>
        /// <param name="idDocumentoImportar">Identificador de base de datos del documento del cuál se importan los hechos</param>
        /// <param name="coincidirUnidad">Indica si para importar un hecho debe de conincidir la unidad del hecho a importar</param>
        /// <param name="sobreescribirValores">Indica si se deben de sobreescribir los valores de un hecho que sea diferente de cero</param>
        /// <param name="idUsuarioExec">Identificador del usuario que realiza la importación</param>
        /// <returns>Resultado de la operación, en InformacionExtra["hechosImportados"] con el número total de hechos importaos</returns>
        ResultadoOperacionDto ImportarHechosADocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstancia, long idDocumentoImportar,Boolean coincidirUnidad, Boolean sobreescribirValores, long idUsuarioExec);

        /// <summary>
        /// Obtiene los hechos de una configuracion de consulta de analisis
        /// </summary>
        /// <param name="consultaAnalisis">Informacion de la consulta de configuracion</param>
        /// <returns>Resultado de la consulta con informacion extra con los hechos</returns>
        ResultadoOperacionDto ObtenerHechosPorConsultaAnalisis(ConsultaAnalisisDto consultaAnalisis);

        /// <summary>
        /// Obtiene todos los conceptos que tenga informacion de hechos 
        /// </summary>
        /// <param name="consultaAnalisis">Informacion de la configuracion de analisis de informacion</param>
        /// <param name="_cacheTaxonomiaXbrl">Taxonomias que se tienen en cache</param>
        /// <param name="idTaxonomia">Identificador de la taxonomia a consultar</param>
        /// <returns>Resultado de la consulta con informacion extra con los conceptos de la consulta de analisis</returns>
        ResultadoOperacionDto ObtenerConceptosPorConsultaAnalisis(ICacheTaxonomiaXBRL _cacheTaxonomiaXbrl, ConsultaAnalisisDto consultaAnalisis, long idTaxonomia);

        /// <summary>
        /// Obtiene un listado de emisoras las cuales tienen información en documentos instancia
        /// </summary>
        /// <returns>Listado de emisoras que tienen informacion en documento instancia</returns>
        ResultadoOperacionDto ObtenerEmpresasDocumentoInstancia();

        /// <summary>
        /// Obtiene la última versión de cada documento configurado en la consulta de analisis
        /// </summary>
        /// <param name="consultaAnalisis">Objeto con la ifnormacion de la configuracion de la consulta</param>
        /// <returns>Listado de la version de cada documento resultado de la consulta de analisis configurada</returns>
        ResultadoOperacionDto ObtenerVersionesDocumentosPorConfiguracionConsulta(ConsultaAnalisisDto consultaAnalisis);

        /// <summary>
        /// Crea la estructura completa de un documento instancia
        /// </summary>
        /// <param name="documentoInstancia">Informacion del documento instancia</param>
        /// <returns>Resultado de operacion con la informacion de la estructura de un documento</returns>
        ResultadoOperacionDto CrearEstructuraDocumento(DocumentoInstanciaXbrlDto documentoInstancia);


        /// <summary>
        /// Actualiza  la estructura completa de un documento instancia
        /// </summary>
        /// <param name="documentoInstancia">Informacion del documento instancia con la estructura del documento a actualizar</param>
        /// <param name="elementosDocumento">Elementos del documento que se pretende actualizar</param>
        /// <returns>Resultado de operacion con la informacion de la estructura de un documento</returns>
        ResultadoOperacionDto ActualizarEstructuraDocumento(DocumentoInstanciaXbrlDto documentoInstancia, IList<AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico.ElementoDocumentoDto> elementosDocumento);
        /// <summary>
        /// Obtiene el usuario de documento instancia que tiene bloqueado el documento.
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento a evaluar.</param>
        /// <returns>Usuario de documento instancia que tiene bloqueado el documento.</returns>
        UsuarioDocumentoInstancia ObtenUsuarioBloqueoDocumentoInstancia(long idDocumentoInstancia);
        /// <summary>
        /// Registra una entrada en la bitácora de auditoría tomando los datos enviados como parámetro
        /// </summary>
        /// <param name="inforAudit">Información de auditoría a registrar</param>
        /// <returns>Resultado de la operación</returns>
        ResultadoOperacionDto RegistrarAccionAuditoria(InformacionAuditoriaDto inforAudit);
        /// <summary>
        ///Actualiza los hechos, contextos, unidades y notas al pie en base de datos de un documento de instancia
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto RegistrarHechosDocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstancia);

        /// <summary>
        ///Actualiza los hechos, contextos, unidades y notas al pie en base de datos de un documento de instancia
        /// </summary>
        /// <returns></returns>
        ResultadoOperacionDto RegistrarArchivosHechosDocumentoInstancia(DocumentoInstanciaXbrlDto documentoInstancia);

        /// <summary>
        /// Obtiene los datos para graficar la cantidad de empresas que han reportado cada una de las taxonomías registradas para un trimestre determinado.
        /// </summary>
        /// <param name="anio">Año requerido</param>
        /// <param name="trimestre">Trinestre requerido</param>
        /// <returns>Datos para graficar.</returns>
        ResultadoOperacionDto IndicadorEmisorasTrimestreActualPorTaxonimia(int anio, string trimestre);

        /// <summary>
        /// Realiza una consluta de documentos con la paginación indicada.
        /// </summary>
        /// <param name="paginacion">DTO con la información de la paginación.</param>
        /// <param name="idUsuario">Identificador del usuario que ejecuta.</param>
        /// <param name="esDueno">Si debe retornar los documentos propios o compartidos.</param>
        /// <returns>Paginación evaluada con los datos obtenidos.</returns>
        PaginacionSimpleDto<AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto> ObtenerDocumentosPaginados(PaginacionSimpleDto<AbaxXBRLCore.Viewer.Application.Dto.Angular.DocumentoInstanciaDto> paginacion, long idUsuario, bool esDueno);
        /// <summary>
        /// Retorna los elementos del listado para el comparador de documentos de versión
        /// </summary>
        /// <param name="idDocumentoInstancia">Identificador del documento de instancia que se pretende comparar.</param>
        /// <returns></returns>
        ResultadoOperacionDto ObtenerVersionesDocumentoInstanciaComparador(long idDocumentoInstancia);
        /// <summary>
        /// Determina las dieferencias en los hechos equivalentes del documento de instancia.
        /// </summary>
        /// <param name="documentoInstancia">Documento con los hechos a comparar</param>
        /// <param name="salt">Cadena utilizada para salar los hechos.1 </param>
        void DeterminaDiferenciasHechosEquivalentes(DocumentoInstanciaXbrlDto documentoInstancia, String salt);
        /// <summary> 
        /// Retorna la configuración auxiliar XBRL asignada.
        /// </summary>
        /// <returns></returns>
        ConfiguracionAuxiliarXBRL ObtenConfiguracionAuxiliarXBRL();
        /// <summary>
        /// Actualiza el número de fideicomiso de los documentos de tipo Anexo T, pendientes.
        /// </summary>
        /// <param name="visorExternoUrl">Host del visor externo donde se presenta la información.</param>
        /// <returns>Resultado de la operación.</returns>
        ResultadoOperacionDto ActualizaNumerosFideicomisosAnexoT (string visorExternoUrl);
        /// <summary>
        /// Retorna el valor del primer hecho del identificador de concepto indicado.
        /// </summary>
        /// <param name="idConcepto">Identidificador del concepto.</param>
        /// <param name="documentoInstancia">Objeto que representa un documento instancia.</param>
        /// <returns>String correspondiente al valor del hecho encontrado</returns>
        String obtenerValorNoNumerico(String idConcepto, DocumentoInstanciaXbrlDto documentoInstancia);

        /// <summary>
        /// Retorna el valor del primer hecho del identificador de concepto indicado.
        /// </summary>
        /// <param name="idConcepto">Identidificador del concepto.</param>
        /// <param name="documentoInstancia">Objeto que representa un documento instancia.</param>
        /// <returns>short correspondiente al valor del hecho encontrado</returns>
        short? obtenerValorEnteroShort(String idConcepto, DocumentoInstanciaXbrlDto documentoInstancia);

        /// <summary>
        /// Retorna el valor del primer hecho del identificador de concepto indicado.
        /// </summary>
        /// <param name="idConcepto">Identidificador del concepto.</param>
        /// <param name="documentoInstancia">Objeto que representa un documento instancia.</param>
        /// <returns>fecha correspondiente al valor del hecho encontrado</returns>
        DateTime? obtenerValorFecha(String idConcepto, DocumentoInstanciaXbrlDto documentoInstancia);

        /// <summary>
        /// Obtiene la periodicidad de la taxonomía dado su espacio de nombres principal.
        /// </summary>
        /// <param name="espacioNombresPrincipal">Espacio de nombres principal de la taxonomía.</param>
        /// <returns>ResultadoOperacionDto con un objeto PeriodicidadReporte en informacioón extra cuando exista la taxonomía, en caso contrario será null.</returns>
        ResultadoOperacionDto ObtenerPeriodicidadReportePorEspacioNombresPrincipal(string espacioNombresPrincipal);
    }

}
