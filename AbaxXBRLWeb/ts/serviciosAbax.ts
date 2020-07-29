///<reference path="../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../scripts/typings/math/math.d.ts" /> 
///<reference path="modeloAbax.ts" /> 
///<reference path="utileriasAbax.ts" />
///<reference path="../scripts/typings/json/jquery.json.d.ts" />
///<reference path="../scripts/typings/moment/moment.d.ts" />
///<reference path="../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../scripts/typings/angularjs/angular-resource.d.ts" />
///<reference path="../scripts/typings/decimal.js/decimal.js.d.ts" /> 

module abaxXBRL.services {

    /**
     * Implementación de un servicio AngularJS el cual está encargado de realizar las operaciones con el servidor remoto relacionadas al documento instancia.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class AbaxXBRLServices {

        /** El servicio para encolar solicitudes */
        private qService: ng.IQService;

        /** El servicio para comunicarse al servidor remoto */
        private httpService: ng.IHttpService;
        /** Servicio para el envio de solicitudes al servidor. **/
        abaxXBRLRequestService:shared.service.AbaxXBRLRequestService;

        /** El path en el que se encuentra el servicio remoto para la carga del documento instancia a presentar */
        private abaxXBRLViewerApiPath: string;

        /** El path en el que se encuentra el servicio remoto para guardar un documento instancia */
        private abaxXBRLSaveDocApiPath: string;

        /** El path en el se que encuentra el servicio remoto para recuperar un documento de instancia de la BD */
        private abaxXBRLCargarDocApiPath: string;

        /** El path en el se que encuentra el servicio remoto para recuperar el histórico de versiones de un documento de instancia de la BD */
        private abaxXBRLHistoricoVersionesApiPath: string;

        /** El path en el que se encuentra el servicio remoto para recuperar los usuarios asignados y por asignar a un documento de instnancia */
        private abaxXBRLUsuariosDocumentoApiPath: string;

        /** El path en el que se encuentra el servicio remoto para guardar a los usuarios asignados a un documento*/
        private abaxXBRLGuardarUsuariosDocumentoApiPath: string;

        /** El path en el que se encuentra el servicio remoto para obtener las taxonomías registradas */
        private abaxXBRLObtenerTaxonomiasApiPath: string;

        /** El path en el que se encuentra el servicio remoto para la carga de la definición de una taxonomía */
        private abaxXBRLObtenerDefinicionTaxonomia: string;

        /** Path del servico para bloquear o liberar un documento instancia */
        private abaxXBRLBloquearLiberarDocumentoInstanciaApiPath: string;

        /** Path del servico para importar las notas de un documento instancia */
        private abaxXBRLImportarNotasDocumentoApiPath: string;

        /** Path del servicio para cargar una taxonomia por su URL */
        private abaxXBRLCargarTaxonomiaUrlApiPath: string;

        /** Path del servicio para obtener todos los documentos de un usuario */
        private abaxXBRLObtenerDocumentosUsuarioEnListaUnificada: string;
        /**
        * Path para obtener la lista de versiones enviadas del documento.
        **/
        private abaxXBRLObtenerDocumentosVersion: string;

        /** Path del servicio para agregar información de un documento de instancia a otro */
        private abaxXBRLAgregarDocumentoInstanciaAComparar: string;

        /** Path del servicio para importar hechos de otro documento de instancia */
        private abaxXBRLImportarHechosDocumentoInstancia: string;

        /** El documento instancia XBRL con el que trabaja el servicio */
        private documentoInstancia: abaxXBRL.model.DocumentoInstanciaXbrl;

        /** El documento instancia XBRL con el que trabaja el servicio antes de realizar la comparación */
        private documentoAntesComparacion: abaxXBRL.model.DocumentoInstanciaXbrl;
        



        /* Identificador del usuario que realiza la operación */
        idUsuarioActivo: number;

        /* Identificador de la emisora del usuario que realiza la operación */
        idEmisoraActiva: number;

        /* Nombre completo del usuario que realiza la operación */
        nombreCompletoUsuarioActivo: string;

        /** La definición de la plantilla de captura asociada al documento instancia */
        private definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl;

        /** Contiene un mapeo entre los identificadores de los contextos descritos por la plantilla y los identificadores de sus contextos equivalentes en el documento instancia */
        private mapeoContextosPlantillaAContextosDocumentoInstancia: { [idContextoPlantilla: string]: string };

        /** Contiene un mapeo entre los identificadores de las unidades descritas por la plantilla y los identificadores de sus unidades equivalentes en el documento instancia */
        private mapeoUnidadesPlantillaAUnidadesDocumentoInstancia: { [idUnidadPlantilla: string]: string };

        /** Contiene un mapeo entre los identificadores de los hechos descritos por la plantilla y los identificadores de sus hechos equivalentes en el documento instancia */
        private mapeoHechosPlantillaAHechosDocumentoInstancia: { [idHechoPlantilla: string]: string };

        /** Contiene las unidades que se generaron a partir de la definición de una unidad de plantilla */
        private unidadPorIdUnidadPlantilla: { [idUnidadPlantilla: string]: abaxXBRL.model.Unidad };

        /** Contiene los contextos que se generaron a partir de la definición de un contexto de plantilla */
        private contextoPorIdContextoPlantilla: { [idUnidadPlantilla: string]: abaxXBRL.model.Contexto };

        /** Contiene los hechos que se generaron a partir de la definición de un hecho de plantilla */
        private hechoPorIdHechoPlantilla: { [idHechoPlantilla: string]: abaxXBRL.model.Hecho };

        /**
        * Retona una descripción de los roles en los que se presenta el concepto indicado.
        **/
        private descripcionRolesPorConcepto: {[idConcepto: string]: string};

        /**
         * Carga un documento instancia a partir de su URL
         *
         * @param url la URL del documento instancia a cargar
         * @return una promesa para ejecutar operaciones en caso de error y éxito.
         */
        loadDocumentoInstancia(url: string): ng.IPromise<any> {

            var self = this;
            var deferred = self.qService.defer();
            
            self.abaxXBRLRequestService.post(self.abaxXBRLViewerApiPath, { documentoUrl: url }).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {

                    var docInstancia = new model.DocumentoInstanciaXbrl().deserialize(resultadoOperacion.InformacionExtra);
                    var existeDefinicionPlantilla = false;

                    if (!self.definicionPlantilla || self.definicionPlantilla == null) {
                        if (docInstancia.DtsDocumentoInstancia && docInstancia.DtsDocumentoInstancia.length && docInstancia.DtsDocumentoInstancia.length == 1) {
                            if (docInstancia.DtsDocumentoInstancia[0].Tipo == abaxXBRL.model.ConstantesComunes.TIPO_ARCHIVO_SCHEMA_REF) {
                                var schemaUrl = docInstancia.DtsDocumentoInstancia[0].HRef;
                                existeDefinicionPlantilla = true;
                                self.cargarDefinicionDePlantillaParaTaxonomia(schemaUrl).then(function (definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl) {
                                    self.definicionPlantilla = definicionPlantilla;
                                    if (self.definicionPlantilla && self.definicionPlantilla != null) {
                                        self.definicionPlantilla.init(docInstancia);
                                    }
                                }).finally(function () {
                                        if (!self.documentoInstancia) {
                                            self.documentoInstancia = new model.DocumentoInstanciaXbrl();
                                        }
                                        self.documentoInstancia.deserialize(resultadoOperacion.InformacionExtra);
                                        self.documentoInstancia.PendienteGuardar = false;
                                        if (!abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo ||
                                            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo == null) {
                                            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo = self.documentoInstancia.Taxonomia.generarIndiceOperacionesCalculo();
                                        }
                                        deferred.resolve(resultadoOperacion);
                                    });
                            }
                        }
                    }

                    if (!existeDefinicionPlantilla) {

                        if (!self.documentoInstancia) {
                            self.documentoInstancia = new model.DocumentoInstanciaXbrl();
                        }
                        self.documentoInstancia.deserialize(resultadoOperacion.InformacionExtra);
                        self.documentoInstancia.PendienteGuardar = false;
                        if (!abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo ||
                            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo == null) {
                            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo = self.documentoInstancia.Taxonomia.generarIndiceOperacionesCalculo();
                        }
                        deferred.resolve(resultadoOperacion);
                    }
                }
            }, function (error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
        /**
        * Determina si el DTS de un documento es igual a los archivos o puntos de entrada de una taxonomía
        */
        esMismoDts(archivoTaxonomia: Array<model.ArchivoTaxonomiaXbrl>, archivosDts: Array<model.DtsDocumentoInstancia>): Boolean {

            if (archivoTaxonomia.length != archivosDts.length) {
                return false;
            }

            for (var iArchivo = 0; iArchivo < archivoTaxonomia.length; iArchivo++) {
                var encontrado = false;
                for (var iDts = 0; iDts < archivosDts.length; iDts++) {

                    if (archivoTaxonomia[iArchivo].Href === archivosDts[iDts].HRef &&
                        archivoTaxonomia[iArchivo].TipoReferencia == archivosDts[iDts].Tipo) {
                        if (archivoTaxonomia[iArchivo].TipoReferencia != abaxXBRL.model.ConstantesComunes.TIPO_ARCHIVO_SCHEMA_REF) {
                            if (archivoTaxonomia[iArchivo].Rol === archivosDts[iDts].Role &&
                                archivoTaxonomia[iArchivo].RolUri === archivosDts[iDts].RoleUri) {
                                encontrado = true;
                            }
                        } else {
                            encontrado = true;
                        }
                    }
                }
                if (!encontrado) {
                    return false;
                }
            }

            return true;
        }
        /**
        * Transforma Los archivos importados que conforman a una taxonomía
        * y crea una lista de DTS para el documento de instancia
        * @param archivosImportadosTaxonomia Archivos importados de la taxonomía
        * @return DTS para un documento de instancia
        */
        obtenerDtsDocumentoDeTaxonomia(archivosImportadosTaxonomia: Array<model.ArchivoTaxonomiaXbrl>): Array<model.DtsDocumentoInstancia> {
            var dtsRetorno = new Array<model.DtsDocumentoInstancia>();

            if (archivosImportadosTaxonomia && archivosImportadosTaxonomia != null) {
                for (var i = 0; i < archivosImportadosTaxonomia.length; i++) {
                    var archivo = archivosImportadosTaxonomia[i];
                    var dts = new model.DtsDocumentoInstancia();
                    dts.Tipo = archivo.TipoReferencia;
                    dts.HRef = archivo.Href;
                    dts.Role = archivo.Rol;
                    dts.RoleUri = archivo.RolUri;
                    dtsRetorno.push(dts);
                }
            }

            return dtsRetorno;
        }
        /**
         * Carga de un recurso remoto la definición de una plantilla asociada a un esquema que sirve como punto de entrada de una taxonomía XBRL.
         *
         * @param schemaUrl el URL del schema que sirve como punto de entrada para la taxonomía.
         * @return la definición de la plantilla cargada a partir del URL pasado como parámetro. null en caso de que no exista un recurso asociado a dicho URL.
         */
        cargarDefinicionDePlantillaParaTaxonomia(schemaUrl: string): ng.IPromise<any> {
           
            var deferred = this.qService.defer();

            if (!schemaUrl || schemaUrl == null) {
                deferred.reject("Plantilla no existe");
            } else {
                var rutaPlantillas = 'ts/templates/taxonomias/';
                var rutaDefiniciones = 'definiciones/';
                var extensionDefiniciones = '.js?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version;
                var nombreArchivoDefinicion = schemaUrl.replace(/:/g, '_').replace(/\//g, '_');

                var rutaDefinicion = rutaPlantillas + rutaDefiniciones + nombreArchivoDefinicion + extensionDefiniciones;

                $.getScript(rutaDefinicion).then(function () {

                    var nombreClase = schemaUrl.replace(/:/g, '_').replace(/\//g, '_').replace(/\./g, '_').replace(/\-/g, '_');
                    var definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl = eval('new abaxXBRL.templates.' + nombreClase + '()');
                    deferred.resolve(definicionPlantilla);
                }).fail(function (error, error2, error3) {

                    deferred.reject(error);
                    console.error(error);
                    console.error(error2);
                    console.error(error3);
                });
            }

            

            return deferred.promise;
        }

        /**
        * Recupera un documento de instancia ya almacenado en base de datos y opcionalmente se puede especificar la versión que se desea recuperar,
        * si no se especifica la versión, se recupera la información de la versión actual del documento
        * @param idDocumento El identificador del documento a cargar
        * @param version La versión opcional del documento de instancia a cargar
        * @return una promesa para ejecutar operaciones en caso de error y éxito.
        */
        cargarDocumentoInstanciaPorId(idDocumento: string, version: string): ng.IPromise<any> {

            var self = this;
            var deferred = self.qService.defer();

            self.abaxXBRLRequestService.post(self.abaxXBRLCargarDocApiPath, { idDocumentoInstancia: idDocumento, numeroVersion: version }).then(function (result: any) {

                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    self.limpiarDiccionariosServicio();

                    var docInstancia = new model.DocumentoInstanciaXbrl().deserialize(resultadoOperacion.InformacionExtra);
                    var existeDefinicionPlantilla = false;

                    if (!self.documentoInstancia) {
                        self.documentoInstancia = new model.DocumentoInstanciaXbrl();
                    }
                    self.documentoInstancia.deserialize(resultadoOperacion.InformacionExtra);

                    if (!self.definicionPlantilla || self.definicionPlantilla == null) {
                        if (self.documentoInstancia.EspacioNombresPrincipal && self.documentoInstancia.EspacioNombresPrincipal != "") {

                            existeDefinicionPlantilla = true;
                            self.cargarDefinicionDePlantillaParaTaxonomia(self.documentoInstancia.EspacioNombresPrincipal).then(function (definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl) {
                                self.definicionPlantilla = definicionPlantilla;

                                if (self.definicionPlantilla && self.definicionPlantilla != null) {
                                    self.definicionPlantilla.ParametrosConfiguracion = docInstancia.ParametrosConfiguracion;
                                    self.definicionPlantilla.init(self.documentoInstancia);
                                }
                            }).finally(function () {
                                self.documentoInstancia.PendienteGuardar = false;
                                abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo = self.documentoInstancia.Taxonomia.generarIndiceOperacionesCalculo();
                                deferred.resolve(resultadoOperacion);
                            });

                        }
                    }

                    if (!existeDefinicionPlantilla) {

                        self.documentoInstancia.PendienteGuardar = false;
                        if (!abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo ||
                            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo == null) {
                            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceOperacionesCalculo = self.documentoInstancia.Taxonomia.generarIndiceOperacionesCalculo();
                        }



                        deferred.resolve(resultadoOperacion);
                    }
                } else {
                    if (resultadoOperacion.Mensaje == "MENSAJE_ERROR_PROCESAR_TAXONOMIAS") {
                        var uris: string = "";
                        var errores: Array<shared.modelos.IErrorCargaTaxonomia> = resultadoOperacion.InformacionExtra;
                        var $modal = shared.service.AbaxXBRLUtilsService.getModalService();
                        var $session = shared.service.AbaxXBRLSessionService;
                        var atributoListaErrores = AbaxXBRLConstantes.ATRIBUTO_LISTADO_ERRORES;
                        $session.setAtributoSesion(atributoListaErrores, errores);

                        $modal.open({
                            templateUrl: 'abax-xbrl/componentes/editor-xbrl/error-carga-taxonomia/abax-xbrl-error-carga-taxonomia-template.html?version=' + root.AbaxXBRLConstantesRoot.VERSION_APP.version,
                            controller: componentes.controllers.AbaxXBRLErrorCargaTaxonomiaPopupController,
                            size: 'lg',
                        });
                    }
                    deferred.resolve(resultadoOperacion.InformacionExtra);
                }


            }, function (error) {
                    deferred.reject(error);
                });
            return deferred.promise;

        }

        /**
         * Obtiene el listado con el histórico de versiones de un documento instancia.
         */
        obtenerHistoricoVersionesDeDocumentoInstancia(): ng.IPromise<any> {
            var self = this;
            var deferred = self.qService.defer();

            self.abaxXBRLRequestService.post(self.abaxXBRLHistoricoVersionesApiPath, { idDocumentoInstancia: self.documentoInstancia.IdDocumentoInstancia }).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    deferred.resolve(resultadoOperacion);
                } else {
                    deferred.reject(resultadoOperacion);
                }
            }, function (error: any) {
                    deferred.reject(error)
                });

            return deferred.promise;
        }

        /**
         * Guarda y genera una nueva versión de un documento instancia 
         */
        guardarDocumentoInstancia(): ng.IPromise<any> {

            var self = this;
            var deferred = self.qService.defer();

            self.abaxXBRLRequestService.post(self.abaxXBRLSaveDocApiPath, { documentoInstanciaJSON: $.toJSON(self.documentoInstancia) }).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    deferred.resolve(resultadoOperacion);
                } else {
                    deferred.reject(resultadoOperacion);
                }
            }, function (error: any) {
                    deferred.reject(error)
                });

            return deferred.promise;
        }
        /**
        * Asinga el identificador de una formula al diccionario de formulas por hecho.
        * @param idHecho Identificador del hecho al que aplica la formula.
        * @param idFormula Formula que será asingada al hecho.
        **/
        public  asignaFormulaHecho(idHecho: string, idFormula: string):void {
            var formulasHechos = this.documentoInstancia.FormulasHecho;
            if (!formulasHechos || formulasHechos == null) {
                this.documentoInstancia.FormulasHecho = {};
                formulasHechos = this.documentoInstancia.FormulasHecho;
            }
            if (!formulasHechos[idHecho] || formulasHechos[idHecho] == null) {
                formulasHechos[idHecho] = [];
            }
            if (formulasHechos[idHecho].indexOf(idFormula) == -1) {
                formulasHechos[idHecho].push(idFormula);
                var idConcepto = this.documentoInstancia.HechosPorId[idHecho].IdConcepto;
                var listaFormulsaConcepto = model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceFormulasPorConcepto;

                if (!listaFormulsaConcepto[idConcepto]) {
                    listaFormulsaConcepto[idConcepto] = [];
                }

                if (listaFormulsaConcepto[idConcepto].indexOf(idFormula) == -1) {
                    listaFormulsaConcepto[idConcepto].push(idFormula);
                }
            }
        }
        /**
        * Se elimina la formula del listado de formulas para el concepto indicado.
        * @param idConcepto Identificador del concepto.
        * @param idFormula Identificador de la formula. 
        **/
        private remueveFormulaDeConcepto(idConcepto: string, idFormula:string):void {
            var listaFormulas:Array<string> = model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceFormulasPorConcepto[idConcepto];
            if (listaFormulas) {
                var indice: number = listaFormulas.indexOf(idFormula);
                if (indice != -1) {
                    listaFormulas.splice(indice, 1);
                }
            }
        }
        /**
        * Elimina la formula de los indices generales.
        * @para idFormula Identrificador de la formula.
        **/
        public eliminaFormula(idFormula: string): void {
            var $self = this;
            var listadoFormulas = $self.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas; 
            var formula = listadoFormulas[idFormula];

            if (!formula) {
                return;
            }

            var variables = formula.DefinicionVariables;
            if (variables) {
                var listaIdsConceptos = new Array<string>();
                for (var idVariable in variables) {
                    var definicionVariable = variables[idVariable];
                    var idConcepto = definicionVariable.IdConcepto;
                    if (idConcepto) {
                        if (listaIdsConceptos.indexOf(idConcepto) == -1) {

                            $self.remueveFormulaDeConcepto(idConcepto, idFormula);
                            listaIdsConceptos.push(idConcepto);
                        }
                    }

                    var idsHechos = $self.documentoInstancia.HechosPorIdConcepto[idConcepto];
                    if (!idsHechos) {
                        continue;
                    }
                    for (var indexIdHecho: number = 0; indexIdHecho < idsHechos.length; indexIdHecho++) {
                        var idHecho = idsHechos[indexIdHecho];
                        var operaciones = abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().OperacionesPorIdHecho[idHecho];
                        if (!operaciones) {
                            continue;
                        }
                        var operacionesAEliminar: Array<model.DetalleOperacion> = [];
                        //Identificamos las operaciones de la funcion y eliminamos los errores
                        for (var indexOperacion: number = 0; indexOperacion < operaciones.length; indexOperacion++){
                            var operacion = operaciones[indexOperacion];
                            if (operacion.EsFormula && operacion.IdFormula == idFormula) {
                                abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().removerError(idHecho, operacion);
                                operacionesAEliminar.push(operacion);
                            }
                        }
                        //Eliminamos la operación.
                        for (var indexOperacion: number = 0; indexOperacion < operacionesAEliminar.length; indexOperacion++) {
                            var operacion = operacionesAEliminar[indexOperacion];
                            var indexEliminar = operaciones.indexOf(operacion);
                            if (indexEliminar != -1) {
                                operaciones.splice(indexEliminar, 1);
                            }
                        }
                    }

                }//for
            }//if
            listadoFormulas[idFormula] = undefined;
            delete listadoFormulas[idFormula];
        }

        /**
        * Retornna las formulas que aplican para un hecho determinado.
        * @idHecho Identificador del hecho.
        * @return Lista de formulas que aplican para el hecho.
        **/
        private obtenFormulasAplican(idHecho: string):Array<string> {
            return this.documentoInstancia.FormulasHecho[idHecho];
        }

        /**
        * Agrega la definición de una nueva formula a la plantilla actual.
        * @param formula Nueva formula que se agregará al listado de formulas de la plantilla actual.
        **/
        public agregaFormulaPlantilla(formula: model.DefinicionFormula): void {
            //this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas[formula.Id] = formula;
            Object.defineProperty(this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas, formula.Id, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: formula
            });
            this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas[formula.Id] = formula;

            this.asignaFormulaIndiceFormulasPorConcepto(formula);
           
            formula.RequiereValidacion = true;
        }

        /**
        * Evalua de la formula y la incluye en sus diccionario de conceptos correspondientes.
        * @formula Formula que será evaluada e incluida en los indices de formula concepto correspondientes.
        **/
        public asignaFormulaIndiceFormulasPorConcepto(formula: model.DefinicionFormula): void {
            for (var nombreVariable in formula.DefinicionVariables) {
                var definicionVariable = formula.DefinicionVariables[nombreVariable];
                var idConcepto = definicionVariable.IdConcepto;
                if (!model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceFormulasPorConcepto[idConcepto]) {
                    model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceFormulasPorConcepto[idConcepto] = [];
                }
                var formulasConcepto = model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceFormulasPorConcepto[idConcepto];
                if (formulasConcepto.indexOf(formula.Id) == -1) {
                    formulasConcepto.push(formula.Id);
                }
            }
        }

        /**
        * Retirba ka definición de una formula por su identificador.
        * @param idFormula Identificador de la formula a obtener.
        * @return Retorna la definición encontrada o undefined si no existe.
        **/
        public obtenDefinicionFormulaPorId(idFormula: string): model.DefinicionFormula {
            return this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas[idFormula];
        }
        /**
        * Busca las formulas asciadas a un concepto y las reevalua.
        * @idConcepto Identificador del concepto de las formulas buscadas.
        *
        **/
        public reevaluaFormulasPorConcepto(idConcepto:string):void {
            var _this = this;
            var existenFormulasPorReevaluar = false;
            var idsFormulas: Array<string> = model.OperacionesCalculoDocumentoInstancia.getInstance().IndiceFormulasPorConcepto[idConcepto];
            if (_this.definicionPlantilla && _this.definicionPlantilla != null && idsFormulas && idsFormulas != null && idsFormulas.length > 0) {
                for (var i = 0; i < idsFormulas.length; i++) {
                    var idFormula = idsFormulas[i];
                    var formula = _this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas[idFormula];
                    if (formula) {
                        formula.RequiereValidacion = true;
                        existenFormulasPorReevaluar = true;
                    }
                }
            }
            if (existenFormulasPorReevaluar) {
                this.documentoInstancia.RequiereValidacionFormulas = true;
                try {
                plugins.AngularJQueryBridge.getInstance().obtenerScopeAngular().$apply();
                } catch (error) {
                    console.error(error);
                }
            }
        }
       

        /**
        * Evalua una formjula determinada.
        * @param idFormula Identificador de la formula a evaluar.
        **/
        public evaluaFormula(idFormula: string): void {
            
            var self = this;
            var formula: model.DefinicionFormula = this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas[idFormula];
            var ajustarEvaluacionBloquesTexto: boolean = this.definicionPlantilla.obtenerVariablePorId("ajustarEvaluacionBloquesTexto") == "true"; 
            if (formula.RequiereValidacion) {
                if (formula.EvaluacionDinamica) {
                    formula.RequiereValidacion = false;
                    formula.EvaluacionDinamica.Evaluar(self);
                    return;
                }

                var conjuntosVariablesAEvaluar: { [idHecho: string]: { [idVariable: string]: [{ idHecho: string; valor: string; esFallback: boolean; RolEtiqueta: string; TipoDatoXbrl:string}] } } = {};
                var hechosAAnalizar = new Array<model.Hecho>();
                var idsVariables: Array<string> = [];
                var primerVariable = true;
                var resultadoDetalleOperando: { IdHecho: string; DetalleOperacion: abaxXBRL.model.DetalleOperacion; };
                for (var idVariable in formula.DefinicionVariables) {
                    if (formula.DefinicionVariables.hasOwnProperty(idVariable)) {
                        var variable = formula.DefinicionVariables[idVariable];
                        var valorVariable: string = null;
                        
                        if (variable.IdConcepto) {
                            var concepto = this.documentoInstancia.Taxonomia.ConceptosPorId[variable.IdConcepto];
                            var tipoXbrl = concepto ? concepto.TipoDato : "";
                            if (variable.ConteoHechos) {
                                valorVariable = "0";
                                if (this.documentoInstancia.HechosPorIdConcepto[variable.IdConcepto] !== undefined && this.documentoInstancia.HechosPorIdConcepto[variable.IdConcepto] != null) {
                                    if (variable.FiltrosDimension) {
                                        var listaIdsHechos = this.documentoInstancia.HechosPorIdConcepto[variable.IdConcepto];
                                        for (var indexHecho = 0; indexHecho < listaIdsHechos.length; indexHecho++) {
                                            var hechoConteo = this.documentoInstancia.HechosPorId[listaIdsHechos[indexHecho]];
                                            if (hechoConteo) {
                                                if (this.hechoCumpleConFiltrosDimensionalesVariable(variable, hechoConteo)) {
                                                    valorVariable = (parseInt(valorVariable) + 1).toString();
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        valorVariable = this.documentoInstancia.HechosPorIdConcepto[variable.IdConcepto].length.toString();
                                    }
                                }
                                if (hechosAAnalizar.length > 0) {
                                    for (var i = 0; i < hechosAAnalizar.length; i++) {
                                        conjuntosVariablesAEvaluar[hechosAAnalizar[i].Id][variable.Id] = [{ idHecho: null, valor: valorVariable, esFallback: false, RolEtiqueta: variable.RolEtiqueta, TipoDatoXbrl: tipoXbrl }];
                                    }
                                } else {
                                    conjuntosVariablesAEvaluar[variable.Id] = {};
                                    conjuntosVariablesAEvaluar[variable.Id][variable.Id] = [{ idHecho: null, valor: valorVariable, esFallback: false, RolEtiqueta: variable.RolEtiqueta, TipoDatoXbrl: tipoXbrl }];
                                }
                            } else {
                                if (primerVariable) {
                                    if (this.documentoInstancia.HechosPorIdConcepto[variable.IdConcepto]) {
                                        for (var i = 0; i < this.documentoInstancia.HechosPorIdConcepto[variable.IdConcepto].length; i++) {
                                            var hecho = this.documentoInstancia.HechosPorId[this.documentoInstancia.HechosPorIdConcepto[variable.IdConcepto][i]];
                                            if ((!variable.MismasDimensiones && this.hechoCumpleConFiltrosDimensionalesVariable(variable, hecho)) ||
                                                (variable.MismasDimensiones && this.hechoMismasDimensionesPrimeraVariable(hecho, variable)) ) {
                                                hechosAAnalizar.push(hecho);
                                                if (!conjuntosVariablesAEvaluar[hecho.Id]) {
                                                    conjuntosVariablesAEvaluar[hecho.Id] = {};
                                                }
                                                if (!conjuntosVariablesAEvaluar[hecho.Id][variable.Id]) {
                                                    conjuntosVariablesAEvaluar[hecho.Id][variable.Id] = [{ idHecho: hecho.Id, valor: hecho.ValorHecho, esFallback: false, RolEtiqueta: variable.RolEtiqueta, TipoDatoXbrl: tipoXbrl  }];
                                                }
                                            }
                                        }
                                    }
                                    primerVariable = false;
                                } else {
                                    for (var i = 0; i < hechosAAnalizar.length; i++) {
                                        var contextoComparar = this.documentoInstancia.ContextosPorId[hechosAAnalizar[i].IdContexto];
                                        var valorVariableEncontrado = false;
                                        for (var j = 0; this.documentoInstancia.HechosPorIdConcepto[variable.IdConcepto] && ( j < this.documentoInstancia.HechosPorIdConcepto[variable.IdConcepto].length); j++) {
                                            var hecho = this.documentoInstancia.HechosPorId[this.documentoInstancia.HechosPorIdConcepto[variable.IdConcepto][j]];
                                            var coincidenPeriodo = false;
                                            if (formula.VariablesCoincidenPeriodo) {
                                                var contexto = this.documentoInstancia.ContextosPorId[hecho.IdContexto];

                                                if (contexto.Periodo.EstructuralmenteIgual(contextoComparar.Periodo) || variable.ExcepcionPeriodo ) {
                                                    coincidenPeriodo = true;
                                                } else {
                                                    //Si no son estructuralmente iguales, son de tipos de periodo diferente y esta variable tiene configurado el tipo de match de periodo
                                                    if (contexto.Periodo.Tipo == TipoContextoEnum.INSTANTE && contextoComparar.Periodo.Tipo == TipoContextoEnum.PERIODO &&
                                                        variable.EmpatarPeriodo !== undefined){
                                                        //buscar empatar el periodo
                                                        var fechaComparar = moment(contexto.Periodo.FechaInstante).utc();
                                                        if (variable.EmpatarPeriodo == model.TipoMatchPeriodo.PeriodStartMatch) {
                                                            //si se busca empatar al inicio y el componente de fecha no tiene horas, entonces sumar un día
                                                            if (fechaComparar.hour() == 0 && fechaComparar.minute() == 0 && fechaComparar.second() == 0) {
                                                                fechaComparar.add(1, 'days');
                                                            }
                                                            if (fechaComparar.toDate().getTime() == contextoComparar.Periodo.FechaInicio.getTime()){
                                                                coincidenPeriodo = true;
                                                            }
                                                        } else {
                                                            if (fechaComparar.toDate().getTime() == contextoComparar.Periodo.FechaFin.getTime()) {
                                                                coincidenPeriodo = true;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            if (!formula.VariablesCoincidenPeriodo || (formula.VariablesCoincidenPeriodo && coincidenPeriodo)) {
                                                
                                                if ((!variable.MismasDimensiones && this.hechoCumpleConFiltrosDimensionalesVariable(variable, hecho)) ||
                                                    (variable.MismasDimensiones && this.hechoMismasDimensionesContexto(contextoComparar, hecho, variable))) {
                                                    this.asignaFormulaHecho(hechosAAnalizar[i].Id, formula.Id);
                                                    valorVariableEncontrado = true;
                                                    if (variable.EsDinamica) {
                                                        if (conjuntosVariablesAEvaluar[hechosAAnalizar[i].Id][variable.Id] && conjuntosVariablesAEvaluar[hechosAAnalizar[i].Id][variable.Id] != null) {
                                                            conjuntosVariablesAEvaluar[hechosAAnalizar[i].Id][variable.Id].push({ idHecho: hecho.Id, valor: hecho.ValorHecho, esFallback: false, RolEtiqueta: variable.RolEtiqueta, TipoDatoXbrl: tipoXbrl });
                                                        } else { 
                                                            conjuntosVariablesAEvaluar[hechosAAnalizar[i].Id][variable.Id] = [{ idHecho: hecho.Id, valor: hecho.ValorHecho, esFallback: false, RolEtiqueta: variable.RolEtiqueta, TipoDatoXbrl: tipoXbrl }];
                                                        }
                                                        
                                                    } else {
                                                        if (conjuntosVariablesAEvaluar[hechosAAnalizar[i].Id])
                                                            conjuntosVariablesAEvaluar[hechosAAnalizar[i].Id][variable.Id] = [{ idHecho: hecho.Id, valor: hecho.ValorHecho, esFallback: false, RolEtiqueta: variable.RolEtiqueta, TipoDatoXbrl: tipoXbrl}];
                                                        break;
                                                    }


                                                }
                                            }
                                        }
                                        if (!valorVariableEncontrado) {
                                            if (variable.ValorFallback != undefined && variable.ValorFallback != null && conjuntosVariablesAEvaluar[hechosAAnalizar[i].Id]) {
                                                conjuntosVariablesAEvaluar[hechosAAnalizar[i].Id][variable.Id] = [{ idHecho: null, valor: variable.ValorFallback, esFallback: true, RolEtiqueta: variable.RolEtiqueta, TipoDatoXbrl: tipoXbrl }];
                                            } else {
                                                conjuntosVariablesAEvaluar[hechosAAnalizar[i].Id] = undefined;
                                                delete conjuntosVariablesAEvaluar[hechosAAnalizar[i].Id];
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            if (variable.EsSchemaRef) {
                                if (this.documentoInstancia && this.documentoInstancia.DtsDocumentoInstancia && this.documentoInstancia.DtsDocumentoInstancia.length && this.documentoInstancia.DtsDocumentoInstancia.length == 1) {
                                    if (this.documentoInstancia.DtsDocumentoInstancia[0].Tipo == model.ConstantesComunes.TIPO_ARCHIVO_SCHEMA_REF) {
                                        valorVariable = this.documentoInstancia.DtsDocumentoInstancia[0].HRef;
                                        if (hechosAAnalizar.length > 0) {
                                            for (var i = 0; i < hechosAAnalizar.length; i++) {
                                                conjuntosVariablesAEvaluar[hechosAAnalizar[i].Id][variable.Id] = [{ idHecho: null, valor: valorVariable, esFallback: false, RolEtiqueta: variable.RolEtiqueta, TipoDatoXbrl: tipoXbrl }];
                                            }
                                        } else {
                                            conjuntosVariablesAEvaluar[variable.Id] = {};
                                            conjuntosVariablesAEvaluar[variable.Id][variable.Id] = [{ idHecho: null, valor: valorVariable, esFallback: false, RolEtiqueta: variable.RolEtiqueta, TipoDatoXbrl: tipoXbrl }];
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                for (var idHecho in conjuntosVariablesAEvaluar) {
                    if (conjuntosVariablesAEvaluar.hasOwnProperty(idHecho)) {

                        var hecho = this.documentoInstancia.HechosPorId[idHecho];
                        var variable: model.DefinicionVariableFormula = null;
                        var detalleOperacion: abaxXBRL.model.DetalleOperacion = new abaxXBRL.model.DetalleOperacion();

                        detalleOperacion.mostrarPeriodo = formula.MostrarPeriodo;

                        if (hecho && hecho != null) {
                            detalleOperacion.IdConcepto = hecho.IdConcepto;
                            detalleOperacion.IdContexto = hecho.IdContexto;
                            detalleOperacion.IdUnidad = hecho.IdUnidad;
                            detalleOperacion.IdHecho = hecho.Id;
                        } else {
                            variable = formula.DefinicionVariables[idHecho];
                            if (variable && variable != null) {
                                detalleOperacion.IdConcepto = variable.IdConcepto;
                            }
                        }

                        detalleOperacion.DetalleOperandos = new Array<abaxXBRL.model.DetalleOperando>();

                        var expresionJavaScript = "";
                        var parser = math.parser();
                        var tieneInformacionDimensiones = false;
                        var numeroFallbacks = 0;
                        var numeroVariables = 0;
                        var subExpresionVariable: { [idVariable: string]: string } = {};
                        for (var idVariable in conjuntosVariablesAEvaluar[idHecho]) {
                            
                            var variableTurno = formula.DefinicionVariables[idVariable];
                            var elementosVariable = conjuntosVariablesAEvaluar[idHecho][idVariable]; 
                            for (var indexElementoVariable: number = 0; indexElementoVariable < elementosVariable.length; indexElementoVariable++) {
                                var elementoVariable = elementosVariable[indexElementoVariable];
                                var hechoTurno = this.documentoInstancia.HechosPorId[elementoVariable.idHecho];
                                var detalleOperando = new abaxXBRL.model.DetalleOperando();
                                if (conjuntosVariablesAEvaluar[idHecho].hasOwnProperty(idVariable)) {
                                    numeroVariables++;
                                    if (elementoVariable.esFallback) {
                                        numeroFallbacks++;
                                    }

                                    if (elementoVariable.valor == null) {
                                        parser.eval(idVariable + ' = ""');
                                        expresionJavaScript += "var " + idVariable + ' = "";\r\n';
                                    } else {

                                        var nombreVariable = indexElementoVariable == 0 ? idVariable : idVariable + '_' + indexElementoVariable;

                                        if (elementosVariable.length > 0) {

                                            if (!subExpresionVariable[idVariable] || subExpresionVariable[idVariable] == null) {
                                                subExpresionVariable[idVariable] = 'bignumber(' + nombreVariable + ')';
                                            } else {
                                                subExpresionVariable[idVariable] = subExpresionVariable[idVariable] + ' + ' + 'bignumber(' + nombreVariable + ')';
                                            }
                                        }
                                        if (ajustarEvaluacionBloquesTexto && (elementoVariable.valor.length > 0) &&
                                            (elementoVariable.TipoDatoXbrl == "http://www.xbrl.org/2003/instance:base64BinaryItemType" ||
                                            elementoVariable.TipoDatoXbrl == "http://www.xbrl.org/dtr/type/non-numeric:textBlockItemType")) {

                                            parser.eval(nombreVariable + ' = "abx"');
                                            expresionJavaScript += "var " + nombreVariable + ' = "abx";\r\n';
                                        } else {
                                            var retornarIdentificadorHecho = variableTurno.retornarIdentificadorHecho;
                                            var _valorVariable = retornarIdentificadorHecho ? elementoVariable.idHecho : utils.StringUtils.escaparHtml(elementoVariable.valor);
                                            parser.eval(nombreVariable + ' = "' + _valorVariable + '"');
                                            expresionJavaScript += "var " + nombreVariable + ' = "' + _valorVariable + '";\r\n';
                                        }
                                        
                                    }
                                }

                                if (hechoTurno && hechoTurno != null) {
                                    detalleOperando.IdConcepto = hechoTurno.IdConcepto;
                                    detalleOperando.IdContexto = hechoTurno.IdContexto;
                                    detalleOperando.IdUnidad = hechoTurno.IdUnidad;
                                    detalleOperando.IdHecho = hechoTurno.Id;
                                    detalleOperando.RolEtiqueta = elementoVariable.RolEtiqueta;
                                    var contextoTurno = this.documentoInstancia.ContextosPorId[hechoTurno.IdContexto];

                                    var dimensiones = new Array<model.DimensionInfo>();

                                    if (contextoTurno.ContieneInformacionDimensional) {
                                        dimensiones = contextoTurno.ValoresDimension;
                                    } else if (contextoTurno.Entidad.ContieneInformacionDimensional) {
                                        dimensiones = contextoTurno.Entidad.ValoresDimension;
                                    }

                                    if (dimensiones && dimensiones != null && dimensiones.length && dimensiones.length > 0) {
                                        var informacionDimensiones = new Array<{ dimension: string; miembro: string; valorTipificado: string; }>();
                                        for (var j = 0; j < dimensiones.length; j++) {
                                            var filtroDimension = dimensiones[j];

                                            var valorTipificado: string = null;
                                            if (!filtroDimension.Explicita) {
                                                var objetoTipificado = utils.XmlUtils.CrearJsonAPartirDeXml(filtroDimension.ElementoMiembroTipificado);
                                                for (var prop in objetoTipificado) {
                                                    if (objetoTipificado.hasOwnProperty(prop) && !utils.StringUtils.startsWith(prop, '_')) {
                                                        valorTipificado = objetoTipificado[prop]['__text'];
                                                    }
                                                }
                                            }
                                            informacionDimensiones.push({
                                                dimension: filtroDimension.IdDimension,
                                                miembro: filtroDimension.IdItemMiembro,
                                                valorTipificado: valorTipificado
                                            });
                                        }
                                        detalleOperando.InformacionDimensiones = informacionDimensiones;
                                        tieneInformacionDimensiones = true;
                                    }

                                } else {
                                    detalleOperando.IdConcepto = variableTurno.IdConcepto;
                                }

                                detalleOperando.Valor = elementoVariable.valor;
                                if (variableTurno.IdConcepto && variableTurno.IdConcepto != null && hechoTurno && hechoTurno != null) {
                                    detalleOperacion.DetalleOperandos.push(detalleOperando);
                                }
                            }
                        }

                        if ((numeroFallbacks > 0 && numeroFallbacks >= (numeroVariables - 1)) && !formula.ExcepcionSinHijos) {

                            var erroresHecho = abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().ErroresPorIdHecho[hecho.Id];
                            var hechoTieneErrores = erroresHecho && erroresHecho.length > 0;

                            hecho.ValorEstadoValidacion = hechoTieneErrores ? abaxXBRL.model.EstadoValidacion.Invalido : formula.SeveridadExcepcionSinHijos;
                            hecho.TieneDetalleOperaciones = true;

                            detalleOperacion.IdFormula = formula.Id;
                            detalleOperacion.Motivo = formula.MensajeExito;
                            detalleOperacion.EstadoValidacionFormula = hecho.ValorEstadoValidacion;
                            detalleOperacion.EsFormula = true;
                            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarOperacion(hecho.Id, detalleOperacion);
                            if (formula.SeveridadExcepcionSinHijos == model.EstadoValidacion.Invalido) {
                                abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarError(hecho.Id, detalleOperacion);
                            } else {
                                abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().removerError(hecho.Id, detalleOperacion);
                            }

                            continue;
                        } else {
                            var detalleOperacionPrevio = new model.DetalleOperacion();
                            detalleOperacionPrevio.EsFormula = true;
                            detalleOperacion.IdFormula = formula.Id;
                            if (hecho) {
                            	abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().removerError(hecho.Id, detalleOperacion);
                        	}
                        }

                        var expresion: string = formula.Expresion;

                        for (var idVariableSubExpresion in subExpresionVariable) {
                            var subExpresion = '(' + subExpresionVariable[idVariableSubExpresion] + ')';

                            var toReplace = 'bignumber(' + idVariableSubExpresion + ')';
                            if (expresion.indexOf(toReplace) != -1) {
                                expresion = expresion.replace(toReplace, subExpresion);
                            } else {

                                toReplace = 'number(' + idVariableSubExpresion + ')';
                                if (expresion.indexOf(toReplace) != -1) {

                                    expresion = expresion.replace(toReplace, subExpresion);
                                }
                            }
                        }

                        var resultado: any = false;
                        try {
                            if (formula.ExpresionJavaScript) {

                                expresionJavaScript += expresion;
                                resultado = eval(expresionJavaScript);

                            } else {

                                resultado = parser.eval(expresion);
                            }
                        } catch (error) {
                            console.error({ "Expresion": expresion, "formula": formula });
                            console.error(error);
                            
                        } 
                        detalleOperacion.EsFormula = true;
                        detalleOperacion.IdFormula = formula.Id;
                        detalleOperacion.OperacionEjecutada = true;
                        detalleOperacion.EsFormulaDeCalculo = formula.TipoFormula == model.TipoFormula.ValueAssertion;
                        detalleOperacion.ContieneInformacionDimension = tieneInformacionDimensiones;
                        if (hecho && hecho != null) {
                            hecho.TieneDetalleOperaciones = true;
                            hecho.TieneOperacionesCalculo = formula.TipoFormula == model.TipoFormula.ValueAssertion;
                            hecho.ValorEstadoValidacion = abaxXBRL.model.EstadoValidacion.SinDeterminar;
                        }
                        if (!resultado) {
                            detalleOperacion.Motivo = formula.MensajeError;

                            if (hecho && hecho != null) {
                                if (formula.EsAdvertencia){
                                    hecho.ValorEstadoValidacion = abaxXBRL.model.EstadoValidacion.Advertencia;
                                    detalleOperacion.EstadoValidacionFormula = hecho.ValorEstadoValidacion;
                                    detalleOperacion.EstadoValidacion = hecho.ValorEstadoValidacion;
                                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarAdvertencia(hecho.Id, detalleOperacion);

                                } else {
                                    hecho.ValorEstadoValidacion = abaxXBRL.model.EstadoValidacion.Invalido;
                                    detalleOperacion.EstadoValidacionFormula = hecho.ValorEstadoValidacion;
                                    detalleOperacion.EstadoValidacion = hecho.ValorEstadoValidacion;
                                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarError(hecho.Id, detalleOperacion);
                                }
                                
                            } else {
                                abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarError("sinHecho", detalleOperacion);
                            }
                        } else {
                            detalleOperacion.Motivo = formula.MensajeExito;
                            
                            if (hecho && hecho != null) {
                                detalleOperacion.EstadoValidacionFormula = abaxXBRL.model.EstadoValidacion.Valido;
                                if (abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().removerError(hecho.Id, detalleOperacion) > 0) {
                                    hecho.ValorEstadoValidacion = abaxXBRL.model.EstadoValidacion.Invalido;
                                    detalleOperacion.EstadoValidacion = hecho.ValorEstadoValidacion;
                                } else if (abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().removerAdvertencia(hecho.Id, detalleOperacion) > 0){
                                    hecho.ValorEstadoValidacion = abaxXBRL.model.EstadoValidacion.Advertencia;
                                    detalleOperacion.EstadoValidacion = hecho.ValorEstadoValidacion;
                                } else {
                                    hecho.ValorEstadoValidacion = abaxXBRL.model.EstadoValidacion.Valido;
                                    detalleOperacion.EstadoValidacion = hecho.ValorEstadoValidacion;
                                }
                            } else {
                                abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().removerError("sinHecho", detalleOperacion);
                            }
                        }
                        if (hecho && hecho != null) {
                            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarOperacion(hecho.Id, detalleOperacion);
                        } else {
                            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarOperacion("sinHecho", detalleOperacion);
                        }

                    }
                }
                formula.RequiereValidacion = false;
            }
            
        }


        /**
         * Valida el documento instancia utilizando las fórmulas XBRL asociadas a la taxonomía en uso.
         */
        validarFormulasDocumentoInstancia(): void {
            var numeroValidacionesRealizadas = 0;

            if (!this.documentoInstancia.RequiereValidacionFormulas || !this.definicionPlantilla || this.definicionPlantilla == null) return;

            for (var idFormula in this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas) {
                if (this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas.hasOwnProperty(idFormula)) {
                            try {
                                this.evaluaFormula(idFormula);
                            } catch (error) {
                                console.error("Ocurrio un error al evaluar la formula [" + idFormula + "]");
                                console.error(error);
                            }
                        }
                    }

            this.documentoInstancia.RequiereValidacionFormulas = false;
                    //Intentamos repintar el listado de errores
            this.documentoInstancia.EsCorrecto = abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().NumeroErrores == 0;
                    abaxXBRL.plugins.XbrlListadoErrores.getInstance().reevaluaListadoErrores();
        }
        /**
         * Genera un diccionario de filtros por dimensión miembro.
         * @param listaMiembrosDimension Lista de dimensiones a evaluar.
         * @param filtrosDimension Filtros a considerar.
         * @return Diccionario de filtros pro dimension.
         */
        private generaDiccionarioFiltroDimensiones(listaMiembrosDimension: Array<model.DimensionInfo>, filtrosDimension?: Array<model.FiltroDimension>): { [idConceptoDimension: string]: model.FiltroDimension }
        {
            var diccionarioDimensiones: { [idConceptoDimension: string]: model.FiltroDimension } = {};
            for (var indexMiembro = 0; indexMiembro < listaMiembrosDimension.length; indexMiembro++) {

                var miembro: model.DimensionInfo = listaMiembrosDimension[indexMiembro];
                if (miembro && miembro.IdDimension) {
                    diccionarioDimensiones[miembro.IdDimension] = new model.FiltroDimension().deserialize(miembro);
                }
            }
            if (filtrosDimension && filtrosDimension.length > 0) {

                for (var indexFiltro = 0; indexFiltro < filtrosDimension.length; indexFiltro++) {

                    var filtro: model.FiltroDimension = filtrosDimension[indexFiltro];
                    if (filtro && filtro.IdDimension) {
                        diccionarioDimensiones[filtro.IdDimension] = filtro;
                    }
                }
            }

            return diccionarioDimensiones;
        }
        /**
         * Determina si el hecho contiene los mismos elementos diemensionales que el contexto dado.
         * @param contexto Contexto a comparar.
         * @param hechoEvaluar Hecho a comparar.
         */
        private hechoMismasDimensionesContexto(contexto: model.Contexto, hechoEvaluar: model.Hecho, variable: model.DefinicionVariableFormula): boolean {

            var equivalente = false;
            var $self = this;
            var $documentoInstancia = $self.documentoInstancia;
            var contextoEvaluar = $documentoInstancia.ContextosPorId[hechoEvaluar.IdContexto];
            if (contextoEvaluar.Id == contexto.Id) {

                return true;
            }
            if (!variable.DiccionarioContextosEquivalentes[contexto.Id]) {
                variable.DiccionarioContextosEquivalentes[contexto.Id] = {};
            }
            var evaluado = variable.DiccionarioContextosEquivalentes[contexto.Id][contextoEvaluar.Id];
            if (evaluado != undefined && evaluado != null) {

                return evaluado;
            }

            if ((contexto.ContieneInformacionDimensional && contextoEvaluar.ContieneInformacionDimensional) ||
                (contexto.Entidad.ContieneInformacionDimensional && contextoEvaluar.ContieneInformacionDimensional)) {
                
                var diccionarioFiltros = variable.DiccionarioFiltroPorcontexto[contexto.Id];
                var dimensionesComparar = contextoEvaluar.ContieneInformacionDimensional ? contextoEvaluar.ValoresDimension : contextoEvaluar.ValoresDimension;
                if (!diccionarioFiltros) {

                    var elementosDimensionales = contexto.ContieneInformacionDimensional ? contexto.ValoresDimension : contexto.Entidad.ValoresDimension;
                    diccionarioFiltros = $self.generaDiccionarioFiltroDimensiones(elementosDimensionales, variable.FiltrosDimension);
                    variable.DiccionarioFiltroPorcontexto[contexto.Id] = diccionarioFiltros;
                }   
                equivalente = true;
                for (var indexMiembroEvaluar: number = 0; indexMiembroEvaluar < dimensionesComparar.length; indexMiembroEvaluar++) {

                    var dimensionEvaluar = dimensionesComparar[indexMiembroEvaluar];
                    var filtro = diccionarioFiltros[dimensionEvaluar.IdDimension];

                    if (!filtro && variable.ConjuntoDimensionesParcial) {
                        continue;
                    }

                    if (!filtro || !filtro.cumpleFiltro(dimensionEvaluar)) {

                        equivalente = false;
                        break;
                    }
                }
            } else {

                if (!contextoEvaluar.ContieneInformacionDimensional && !contextoEvaluar.Entidad.ContieneInformacionDimensional && 
                    !contexto.ContieneInformacionDimensional && !contexto.Entidad.ContieneInformacionDimensional) {

                    equivalente = true;
                }
            }
            variable.DiccionarioContextosEquivalentes[contexto.Id][contextoEvaluar.Id] = equivalente;
            return equivalente;
        }

        /**
         * Determina si el hecho contiene los mismos elementos diemensionales que el contexto dado.
         * @param contexto Contexto a comparar.
         * @param hechoEvaluar Hecho a comparar.
         */
        private hechoMismasDimensionesPrimeraVariable(hechoEvaluar: model.Hecho, variable: model.DefinicionVariableFormula): boolean {

            var equivalente = false;
            var $self = this;
            var $documentoInstancia = $self.documentoInstancia;
            var contextoEvaluar = $documentoInstancia.ContextosPorId[hechoEvaluar.IdContexto];

            var diccionarioFiltros = variable.DiccionarioFiltroPorcontexto["filtro_default"];
            var dimensionesComparar = contextoEvaluar.ContieneInformacionDimensional ? contextoEvaluar.ValoresDimension : contextoEvaluar.ValoresDimension;
            if (!dimensionesComparar || dimensionesComparar.length == 0)
            {
                return false;
            }
            if (!diccionarioFiltros) {

                diccionarioFiltros = $self.generaDiccionarioFiltroDimensiones([], variable.FiltrosDimension);
                variable.DiccionarioFiltroPorcontexto["filtro_default"] = diccionarioFiltros;
            }
            equivalente = true;
            for (var indexMiembroEvaluar: number = 0; indexMiembroEvaluar < dimensionesComparar.length; indexMiembroEvaluar++) {

                var dimensionEvaluar = dimensionesComparar[indexMiembroEvaluar];
                var filtro = diccionarioFiltros[dimensionEvaluar.IdDimension];

                if (!filtro && variable.ConjuntoDimensionesParcial) {
                    continue;
                }

                if (!filtro || !filtro.cumpleFiltro(dimensionEvaluar)) {

                    equivalente = false;
                    break;
                }
            }
            return equivalente;
        }

        /**
         * Valida que un hecho cumpla con los criterios de filtro dimensionales de la definición de una variable de una fórmula.
         *
         * @param variable la definición de la variable.
         * @param hecho el hecho que se validará contra la definición de la variable.
         * @return true si el hecho cumple con el criterio establecido. false en cualquier otro caso.
         */
        private hechoCumpleConFiltrosDimensionalesVariable(variable: model.DefinicionVariableFormula, hecho: model.Hecho): boolean {
            var cumpleFiltro = true;
            
            if (variable.FiltrosDimension && variable.FiltrosDimension != null && variable.FiltrosDimension.length && variable.FiltrosDimension.length > 0) {

                var filtrosDimension: Array<model.DimensionInfo> = new Array<model.DimensionInfo>();
                for (var j = 0; j < variable.FiltrosDimension.length; j++) {
                    filtrosDimension.push(new model.DimensionInfo().deserialize(variable.FiltrosDimension[j]));
                }

                var contexto = this.documentoInstancia.ContextosPorId[hecho.IdContexto];

                if (contexto.ContieneInformacionDimensional) {
                    for (var j = 0; j < filtrosDimension.length; j++) {
                        var dimensionEncontrada: boolean = false;
                        var valorEnDimensionBuscada: boolean = false;
                        if (!filtrosDimension[j].Explicita && variable.FiltrosDimension[j].DistintoDe) {
                            for (var i = 0; i < contexto.ValoresDimension.length; i++) {
                                if (contexto.ValoresDimension[i].EsInfoMismaDimension(filtrosDimension[j])) {
                                    if (contexto.ValoresDimension[i].ElementoMiembroTipificado && contexto.ValoresDimension[i].ElementoMiembroTipificado != null && filtrosDimension[j].ElementoMiembroTipificado && filtrosDimension[j].ElementoMiembroTipificado != null &&
                                        !abaxXBRL.utils.XmlUtils.EsNodoEquivalente(contexto.ValoresDimension[i].ElementoMiembroTipificado, filtrosDimension[j].ElementoMiembroTipificado)) {
                                        dimensionEncontrada = true;
                                    }
                                    valorEnDimensionBuscada = true;
                                    break;
                                }
                            }
                        }
                        else if (filtrosDimension[j].Explicita && variable.FiltrosDimension[j].EvaluaExplicita && variable.FiltrosDimension[j].DistintoDe) {
                            for (var i = 0; i < contexto.ValoresDimension.length; i++) {
                                if (contexto.ValoresDimension[i].EsInfoMismaDimension(filtrosDimension[j])) {
                                    if (contexto.ValoresDimension[i].IdItemMiembro != filtrosDimension[j].IdItemMiembro) {
                                        dimensionEncontrada = true;
                                    }
                                    valorEnDimensionBuscada = true;
                                    break;
                                }
                            }
                        } else {
                            for (var i = 0; i < contexto.ValoresDimension.length; i++) {
                                if (contexto.ValoresDimension[i].EstructuralmenteIgual(filtrosDimension[j])) {
                                    dimensionEncontrada = true;
                                    break;
                                } else if (contexto.ValoresDimension[i].IdDimension === filtrosDimension[j].IdDimension) {
                                    valorEnDimensionBuscada = true;
                                }
                            }
                        }
                        if (!dimensionEncontrada && !valorEnDimensionBuscada) {
                            if (this.documentoInstancia.Taxonomia.DimensionDefaults[filtrosDimension[j].IdDimension]) {
                                if (this.documentoInstancia.Taxonomia.DimensionDefaults[filtrosDimension[j].IdDimension] === filtrosDimension[j].IdItemMiembro) {
                                    dimensionEncontrada = true;
                                }
                            }
                        }

                        if (variable.FiltrosDimension[j].CualquierMiembro && valorEnDimensionBuscada) {

                            dimensionEncontrada = true;
                        }

                        if (!dimensionEncontrada) {
                            cumpleFiltro = false;
                            break;
                        }
                    }

                } else if (contexto.Entidad.ContieneInformacionDimensional) {
                    for (var j = 0; j < filtrosDimension.length; j++) {
                        var dimensionEncontrada: boolean = false;
                        var valorEnDimensionBuscada: boolean = false;
                        if (!filtrosDimension[j].Explicita && variable.FiltrosDimension[j].DistintoDe) {
                            for (var i = 0; i < contexto.Entidad.ValoresDimension.length; i++) {
                                if (contexto.Entidad.ValoresDimension[i].EsInfoMismaDimension(filtrosDimension[j])) {
                                    if (contexto.Entidad.ValoresDimension[i].ElementoMiembroTipificado && contexto.Entidad.ValoresDimension[i].ElementoMiembroTipificado != null && filtrosDimension[j].ElementoMiembroTipificado && filtrosDimension[j].ElementoMiembroTipificado != null &&
                                        !abaxXBRL.utils.XmlUtils.EsNodoEquivalente(contexto.Entidad.ValoresDimension[i].ElementoMiembroTipificado, filtrosDimension[j].ElementoMiembroTipificado)) {
                                        dimensionEncontrada = true;
                                    }
                                    valorEnDimensionBuscada = true;
                                    break;
                                }
                            }
                        } else {
                            for (var i = 0; i < contexto.Entidad.ValoresDimension.length; i++) {
                                if (contexto.Entidad.ValoresDimension[i].EstructuralmenteIgual(filtrosDimension[j])) {
                                    dimensionEncontrada = true;
                                    break;
                                } else if (contexto.Entidad.ValoresDimension[i].IdDimension === filtrosDimension[j].IdDimension) {
                                    valorEnDimensionBuscada = true;
                                }
                            }
                        }
                        if (!dimensionEncontrada && !valorEnDimensionBuscada) {
                            if (this.documentoInstancia.Taxonomia.DimensionDefaults[filtrosDimension[j].IdDimension]) {
                                if (this.documentoInstancia.Taxonomia.DimensionDefaults[filtrosDimension[j].IdDimension] === filtrosDimension[j].IdItemMiembro) {
                                    dimensionEncontrada = true;
                                }
                            }   
                        }
                        if (!dimensionEncontrada) {
                            cumpleFiltro = false;
                            break;
                        }
                    }
                } else {
                    for (var j = 0; j < filtrosDimension.length; j++) {
                        if (!this.documentoInstancia.Taxonomia.DimensionDefaults[filtrosDimension[j].IdDimension] ||
                            this.documentoInstancia.Taxonomia.DimensionDefaults[filtrosDimension[j].IdDimension] != filtrosDimension[j].IdItemMiembro) {
                            cumpleFiltro = false;
                            break;
                        }
                    }
                }
            } 

            return cumpleFiltro;
        }

        /**
         * Valida el documento instancia asociado al servicio.
         */
        validarDocumentoInstancia(): void {

            var numeroValidacionesRealizadas = 0;

            if (!this.documentoInstancia.RequiereValidacion) return;

            for (var i = 0; i < this.documentoInstancia.Taxonomia.RolesCalculo.length; i++) {
                var rol: abaxXBRL.model.RolCalculo = this.documentoInstancia.Taxonomia.RolesCalculo[i];
                for (var id in rol.OperacionesCalculo) {
                    var idConceptoSumatoria: string = id;
                    var sumandos: Array<abaxXBRL.model.SumandoCalculo> = rol.OperacionesCalculo[id];

                    var hechosAValidar: Array<string> = this.documentoInstancia.obtenerHechosPorConcepto(idConceptoSumatoria);
                    if (hechosAValidar && hechosAValidar != null && hechosAValidar.length > 0) {

                        for (var j = 0; j < hechosAValidar.length; j++) {

                            try {
                                var hechoSumatoria: abaxXBRL.model.Hecho = this.documentoInstancia.HechosPorId[hechosAValidar[j]];

                                if (!hechoSumatoria.RequiereValidacion) continue;

                                numeroValidacionesRealizadas++;

                                var valorDeSumandos: decimal.Decimal = math.eval('bignumber("0")');
                                var tieneSumandosDuplicados: boolean = false;
                                var tieneElementosQueContribuyen: boolean = false;
                                var detalleOperacion: abaxXBRL.model.DetalleOperacion = new abaxXBRL.model.DetalleOperacion();
                                var tipoDatoNumerico = <abaxXBRL.model.TipoDatoNumerico>(abaxXBRL.model.TiposDatoXbrl.getInstance().get()[this.documentoInstancia.Taxonomia.ConceptosPorId[hechoSumatoria.IdConcepto].TipoDatoXbrl]);

                                detalleOperacion.IdConcepto = hechoSumatoria.IdConcepto;
                                detalleOperacion.IdContexto = hechoSumatoria.IdContexto;
                                detalleOperacion.IdUnidad = hechoSumatoria.IdUnidad;
                                detalleOperacion.IdHecho = hechoSumatoria.Id;
                                detalleOperacion.UriRol = rol.Uri;

                                detalleOperacion.DetalleOperandos = new Array<abaxXBRL.model.DetalleOperando>();
                                detalleOperacion.expresionNumerico = tipoDatoNumerico.OpcionesAutonumeric;
                                if (hechoSumatoria.EsValorNil) continue;

                                if (!hechoSumatoria.EsPrecisionInfinita && hechoSumatoria.Precision == 0) {
                                    detalleOperacion.OperacionEjecutada = false;
                                    detalleOperacion.Motivo = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CALCULO_PRECISION_CERO',
                                        {
                                            hechoSumatoria: this.documentoInstancia.describirHecho(hechoSumatoria)
                                        });
                                    hechoSumatoria.TieneDetalleOperaciones = true;
                                    hechoSumatoria.ValorEstadoValidacion = abaxXBRL.model.EstadoValidacion.Invalido;
                                    detalleOperacion.EstadoValidacion = hechoSumatoria.ValorEstadoValidacion;
                                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarError(hechoSumatoria.Id, detalleOperacion);
                                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarOperacion(hechoSumatoria.Id, detalleOperacion);
                                    continue;
                                }
                                if (hechoSumatoria.DuplicadoCon && hechoSumatoria.DuplicadoCon != null && hechoSumatoria.DuplicadoCon.length > 0) {
                                    detalleOperacion.OperacionEjecutada = false;
                                    detalleOperacion.Motivo = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CALCULO_HECHO_DUPLICADO',
                                        {
                                            hechoSumatoria: this.documentoInstancia.describirHecho(hechoSumatoria)
                                        });
                                    hechoSumatoria.TieneDetalleOperaciones = true;
                                    detalleOperacion.EstadoValidacion = hechoSumatoria.ValorEstadoValidacion;
                                    hechoSumatoria.ValorEstadoValidacion = abaxXBRL.model.EstadoValidacion.Invalido;
                                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarError(hechoSumatoria.Id, detalleOperacion);
                                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarOperacion(hechoSumatoria.Id, detalleOperacion);
                                    continue;
                                }

                                for (var k = 0; k < sumandos.length; k++) {

                                    var elementosSumatoria: Array<string> = this.documentoInstancia.obtenerHechosPorConcepto(sumandos[k].IdConcepto);
                                    if (elementosSumatoria && elementosSumatoria != null && elementosSumatoria.length > 0) {
                                        for (var l = 0; l < elementosSumatoria.length; l++) {

                                            var hechoSumando: abaxXBRL.model.Hecho = this.documentoInstancia.HechosPorId[elementosSumatoria[l]];

                                            if ($.inArray(hechoSumatoria.IdContexto, this.documentoInstancia.GruposContextosEquivalentes[hechoSumando.IdContexto]) == -1) {
                                                continue;
                                            }

                                            if (!this.documentoInstancia.UnidadesEquivalente(hechoSumatoria, hechoSumando)) {
                                                continue;
                                            }

                                            if (!hechoSumando.EsPrecisionInfinita && hechoSumando.Precision == 0) {
                                                detalleOperacion.OperacionEjecutada = false;
                                                detalleOperacion.Motivo = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CALCULO_PRECISION_CERO',
                                                    {
                                                        hechoSumatoria: this.documentoInstancia.describirHecho(hechoSumando)
                                                    });
                                                break;
                                            }

                                            if (hechoSumando.DuplicadoCon != null && hechoSumando.DuplicadoCon.length > 0) {
                                                detalleOperacion.Motivo = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_ERROR_CALCULO_HECHO_DUPLICADO',
                                                    {
                                                        hechoSumatoria: this.documentoInstancia.describirHecho(hechoSumando)
                                                    });
                                                tieneSumandosDuplicados = true;
                                                break;
                                            }

                                            if (hechoSumando.EsValorNil) {
                                                continue;
                                            }

                                            tieneElementosQueContribuyen = true;
                                            valorDeSumandos = valorDeSumandos.plus(hechoSumando.ValorRedondeado.times(sumandos[k].Peso));

                                            var detalleOperando = new abaxXBRL.model.DetalleOperando();

                                            detalleOperando.IdConcepto = hechoSumando.IdConcepto;
                                            detalleOperando.IdContexto = hechoSumando.IdContexto;
                                            detalleOperando.IdUnidad = hechoSumando.IdUnidad;
                                            detalleOperando.IdHecho = hechoSumando.Id;
                                            detalleOperando.Valor = hechoSumando.ValorHecho;

                                            detalleOperando.expresionNumerico = tipoDatoNumerico.OpcionesAutonumeric;

                                            detalleOperando.Peso = sumandos[k].Peso;

                                            detalleOperacion.DetalleOperandos.push(detalleOperando);
                                        }
                                    }
                                }
                                if (tieneElementosQueContribuyen && !tieneSumandosDuplicados) {

                                    hechoSumatoria.TieneDetalleOperaciones = true;
                                    hechoSumatoria.TieneOperacionesCalculo = true;
                                    detalleOperacion.EsFormula = false;
                                    detalleOperacion.OperacionEjecutada = true;
                                    detalleOperacion.Valor = hechoSumatoria.ValorRedondeado.toString();
                                    detalleOperacion.ValorCalculado = hechoSumatoria.redondear(valorDeSumandos).toString();

                                    if (!hechoSumatoria.ValorRedondeado.equals(hechoSumatoria.redondear(valorDeSumandos))) {
                                        hechoSumatoria.ValorEstadoValidacion = abaxXBRL.model.EstadoValidacion.Invalido;
                                        detalleOperacion.EstadoValidacion = hechoSumatoria.ValorEstadoValidacion;
                                        abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarError(hechoSumatoria.Id, detalleOperacion);
                                    } else {
                                        if (abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().removerError(hechoSumatoria.Id, detalleOperacion) > 0) {
                                            hechoSumatoria.ValorEstadoValidacion = abaxXBRL.model.EstadoValidacion.Invalido;
                                            detalleOperacion.EstadoValidacion = hechoSumatoria.ValorEstadoValidacion;
                                        } else {
                                            hechoSumatoria.ValorEstadoValidacion = abaxXBRL.model.EstadoValidacion.Valido;
                                            detalleOperacion.EstadoValidacion = hechoSumatoria.ValorEstadoValidacion;
                                        }
                                    }
                                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().agregarOperacion(hechoSumatoria.Id, detalleOperacion);
                                } else {
                                    hechoSumatoria.TieneDetalleOperaciones = false;
                                    hechoSumatoria.ValorEstadoValidacion = abaxXBRL.model.EstadoValidacion.SinDeterminar;
                                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().removerError(hechoSumatoria.Id, detalleOperacion);
                                }
                                hechoSumatoria.RequiereValidacion = false;

                            } catch (error){
                                console.log(error);
                            }
                        }
                    }
                }
            }
            this.documentoInstancia.RequiereValidacion = false;
            this.documentoInstancia.EsCorrecto = abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().NumeroErrores == 0;
            //Intentamos repintar el listado de errores
            abaxXBRL.plugins.XbrlListadoErrores.getInstance().reevaluaListadoErrores();
        }

        /**
         * Obtiene el documento instancia relacionado a esta instancia del servicio.
         *
         * @return el documento instancia relacionado a esta instancia del servicio.
         */
        getDocumentoInstancia(): abaxXBRL.model.DocumentoInstanciaXbrl {
            return this.documentoInstancia;
        }

        /**
         * Asigna el documento instancia relacionado a esta instancia del servicio.
         *
         * @oaram documento el documento instancia a asignar.
         */
        setDocumentoInstancia(documento: abaxXBRL.model.DocumentoInstanciaXbrl): void {
            this.documentoInstancia = documento;
        }


        /**
         * Obtiene el documento instancia antes de ser comparado relacionado a esta instancia del servicio.
         *
         * @return el documento instancia antes de ser comparado relacionado a esta instancia del servicio.
         */
        getDocumentoInstanciaAntesComparacion(): abaxXBRL.model.DocumentoInstanciaXbrl {
            return this.documentoAntesComparacion;
        }

        /**
         * Asigna el documento instancia antes de ser comparado relacionado a esta instancia del servicio.
         *
         * @oaram documento el documento instancia a asignar.
         */
        setDocumentoInstanciaAntesComparacion(documento: abaxXBRL.model.DocumentoInstanciaXbrl): void {
            this.documentoAntesComparacion = documento;
        }


        /** 
         * Obtiene la definición de la plantilla de captura relacionada a esta instancia del servicio.
         *
         * @return la definición de la plantilla de captura relacionada a esta instancia del servicio.
         */
        getDefinicionPlantilla(): abaxXBRL.model.DefinicionDePlantillaXbrl {
            return this.definicionPlantilla;
        }

        /** 
         * Establece la definición de la plantilla de captura relacionada a esta instancia del servicio.
         *
         * @param definicionPlantilla la definición de la plantilla de captura relacionada a esta instancia del servicio a establecer.
         */
        setDefinicionPlantilla(definicionPlantilla: abaxXBRL.model.DefinicionDePlantillaXbrl): void {
            this.definicionPlantilla = definicionPlantilla;
        }

        /**
         * Obtiene el identificador del contexto que corresponde a un contexto del documento instancia que coincide en todas sus características con el contexto descrito por el identificador de contexto de la plantilla.
         * Si no existiese un contexto equivalente, se creará en el documento instancia a partir de la definición de la plantilla.
         *
         * @param idContextoPlantilla el identificador del contexto de la plantilla que será consultado.
         * @param idConcepto el identificador del concepto que se ligará al contexto.
         * @return el identificador del contexto en el documento instancia que coincide con el contexto de plantilla relacionado al identificador pasado como parámetro. null en caso de no poder encontrar un contexto equivalente o no poder crearlo.
         */
        obtenerIdContextoDocumentoInstanciaEquivalenteAIdContextoPlantilla(idContextoPlantilla: string, idConcepto: string): string {
            var idContexto: string = null;
            if (this.documentoInstancia && this.documentoInstancia != null && this.definicionPlantilla && this.definicionPlantilla != null) {
                if (this.mapeoContextosPlantillaAContextosDocumentoInstancia[idContextoPlantilla] && this.mapeoContextosPlantillaAContextosDocumentoInstancia[idContextoPlantilla] != null) {
                    idContexto = this.mapeoContextosPlantillaAContextosDocumentoInstancia[idContextoPlantilla];
                } else {
                    var contexto = this.buscarContextoPlantillaEnContextosDocumentoInstancia(idContextoPlantilla, idConcepto);
                    if (contexto == null) {
                        var contextoACrear = this.contextoPorIdContextoPlantilla[idContextoPlantilla];
                        if (contextoACrear && contextoACrear != null) {
                            this.inyectarContextoADocumentoInstancia(contextoACrear);
                            idContexto = contextoACrear.Id;
                            this.mapeoContextosPlantillaAContextosDocumentoInstancia[idContextoPlantilla] = idContexto;
                        }
                    } else {
                        idContexto = contexto.Id;
                        this.mapeoContextosPlantillaAContextosDocumentoInstancia[idContextoPlantilla] = idContexto;
                    }
                }
            }

            return idContexto;
        }

        /**
         * Agrega un contexto al modelo del documento instancia y actualiza los índices relacionados.
         *
         * @param contextoACrear el contexto que se deberá agregar al documento instancia.
         */
        inyectarContextoADocumentoInstancia(contextoACrear: model.Contexto): void {
            var llaveFechas: string = null;
            if (contextoACrear.Periodo.Tipo == abaxXBRL.model.Periodo.INSTANTE) {
                llaveFechas = moment(contextoACrear.Periodo.FechaInstante).utc().format(model.ConstantesComunes.FORMATO_FECHA);
            } else {
                llaveFechas = moment(contextoACrear.Periodo.FechaInicio).utc().format(model.ConstantesComunes.FORMATO_FECHA) + model.ConstantesComunes.SEPARADOR_LLAVE_FECHAS_CONTEXTO + moment(contextoACrear.Periodo.FechaFin).utc().format(model.ConstantesComunes.FORMATO_FECHA);
            }
            if (!this.documentoInstancia.ContextosPorFecha[llaveFechas]) {
                this.documentoInstancia.ContextosPorFecha[llaveFechas] = new Array<string>();
            }
            if ($.inArray(contextoACrear.Id, this.documentoInstancia.ContextosPorFecha[llaveFechas]) == -1) {
                this.documentoInstancia.ContextosPorFecha[llaveFechas].push(contextoACrear.Id);
            }
            if (!this.documentoInstancia.GruposContextosEquivalentes[contextoACrear.Id]) {
                this.documentoInstancia.GruposContextosEquivalentes[contextoACrear.Id] = new Array<string>();
                this.documentoInstancia.GruposContextosEquivalentes[contextoACrear.Id].push(contextoACrear.Id);
            }
            this.documentoInstancia.ContextosPorId[contextoACrear.Id] = contextoACrear;
            for (var i = 0; i < this.documentoInstancia.ContextosPorFecha[llaveFechas].length; i++) {
                var contextoComparar = this.documentoInstancia.ContextosPorId[this.documentoInstancia.ContextosPorFecha[llaveFechas][i]];
                if (contextoComparar && contextoComparar != null) {
                    if (contextoACrear.EstructuralmenteIgual(contextoComparar)) {
                        this.documentoInstancia.GruposContextosEquivalentes[contextoACrear.Id].push(contextoComparar.Id);
                        if (!this.documentoInstancia.GruposContextosEquivalentes[contextoComparar.Id]) {
                            this.documentoInstancia.GruposContextosEquivalentes[contextoComparar.Id] = new Array<string>();
                            this.documentoInstancia.GruposContextosEquivalentes[contextoComparar.Id].push(contextoComparar.Id);
                        }
                        this.documentoInstancia.GruposContextosEquivalentes[contextoComparar.Id].push(contextoACrear.Id);
                    }
                }
            }
        }

        /**
         * Eliminar un contexto del modelo del documento instancia y actualiza los índices relacionados.
         *
         * @param idContexto el identificador del contexto que se deberá eliminar del documento instancia.
         */
        eliminarContextoDeDocumentoInstancia(idContexto: string): void {
            var contextoAEliminar = this.documentoInstancia.ContextosPorId[idContexto];
            var index = 0;
            if (!contextoAEliminar || contextoAEliminar == null) return;

            var llaveFechas: string = null;
            if (contextoAEliminar.Periodo.Tipo == abaxXBRL.model.Periodo.INSTANTE) {
                llaveFechas = moment(contextoAEliminar.Periodo.FechaInstante).utc().format(model.ConstantesComunes.FORMATO_FECHA);
            } else {
                llaveFechas = moment(contextoAEliminar.Periodo.FechaInicio).utc().format(model.ConstantesComunes.FORMATO_FECHA) + model.ConstantesComunes.SEPARADOR_LLAVE_FECHAS_CONTEXTO + moment(contextoAEliminar.Periodo.FechaFin).utc().format(model.ConstantesComunes.FORMATO_FECHA);
            }
            if (!this.documentoInstancia.ContextosPorFecha[llaveFechas]) {
                index = $.inArray(contextoAEliminar.Id, this.documentoInstancia.ContextosPorFecha[llaveFechas]);
                if (index != -1) {
                    this.documentoInstancia.ContextosPorFecha[llaveFechas].splice(index, 1);
                }
                if (this.documentoInstancia.ContextosPorFecha[llaveFechas].length == 0) {
                    this.documentoInstancia.ContextosPorFecha[llaveFechas] = undefined;
                    delete this.documentoInstancia.ContextosPorFecha[llaveFechas];
                }
            }
            if (this.documentoInstancia.GruposContextosEquivalentes[contextoAEliminar.Id]) {

                for (var i = 0; i < this.documentoInstancia.GruposContextosEquivalentes[contextoAEliminar.Id].length; i++) {
                    var idContextoEquivalente = this.documentoInstancia.GruposContextosEquivalentes[contextoAEliminar.Id][i];
                    index = $.inArray(contextoAEliminar.Id, this.documentoInstancia.GruposContextosEquivalentes[idContextoEquivalente]);
                    if (index != -1) {
                        this.documentoInstancia.GruposContextosEquivalentes[idContextoEquivalente].splice(index, 1);
                    }
                }

                this.documentoInstancia.GruposContextosEquivalentes[contextoAEliminar.Id] = undefined;
                delete this.documentoInstancia.GruposContextosEquivalentes[contextoAEliminar.Id];
            }
            this.documentoInstancia.ContextosPorId[contextoAEliminar.Id] = undefined;
            delete this.documentoInstancia.ContextosPorId[contextoAEliminar.Id];
        }

        /**
         * Obtiene el identificador de la unidad que corresponde a una unidad del documento instancia que coincide en todas sus características con la unidad descrita por el identificador de unidad de la plantilla.
         * Si no existiese una unidad equivalente, se creará en el documento instancia a partir de la definición de la plantilla.
         *
         * @param idUnidadPlantilla el identificador de la unidad de la plantilla que será consultada.
         * @param idConcepto el identificador del concepto que será ligado a la unidad
         * @return el identificador de la unidad en el documento instancia que coincide con la unidad de plantilla relacionada al identificador pasado como parámetro. null en caso de no poder encontrar una unidad equivalente o no poder crearla.
         */
        obtenerIdUnidadDocumentoInstanciaEquivalenteAIdUnidadPlantilla(idUnidadPlantilla: string, idConcepto: string): string {
            var idUnidad: string = null;

            if (this.documentoInstancia && this.documentoInstancia != null && this.definicionPlantilla && this.definicionPlantilla != null) {
                if (this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia[idUnidadPlantilla] && this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia[idUnidadPlantilla] != null) {
                    idUnidad = this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia[idUnidadPlantilla];
                } else {
                    var unidad = this.buscarUnidadPlantillaEnUnidadesDocumentoInstancia(idUnidadPlantilla, idConcepto);
                    if (unidad == null) {
                        var unidadACrear = this.unidadPorIdUnidadPlantilla[idUnidadPlantilla];
                        if (unidadACrear && unidadACrear != null) {
                            this.documentoInstancia.UnidadesPorId[unidadACrear.Id] = unidadACrear;
                            idUnidad = unidadACrear.Id;
                            this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia[idUnidadPlantilla] = idUnidad;
                        }
                    } else {
                        idUnidad = unidad.Id;
                        this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia[idUnidadPlantilla] = idUnidad;
                    }
                }
            }
            return idUnidad;
        }

        /**
         * Obtiene el identificador del hecho que corresponde a un hecho del documento instancia que coincide en todas sus características con el hecho descrito por el identificador de hecho de la plantilla.
         * Si no existiese un hecho equivalente, se creará en el documento instancia a partir de la definición de la plantilla.
         *
         * @param idHechoPlantilla el identificador del hecho de la plantilla que será consultada.
         * @param crearHecho Bandera que indica que se debe crear un nuevo hecho si este no existe en el documento de instnacia, por defecto su valor es "true".
         * @return el identificador del hecho en el documento instancia que coincide con el hecho de plantilla relacionada al identificador pasado como parámetro. null en caso de no poder encontrar un hecho equivalente o no poder crearlo.
         */
        obtenerIdHechoDocumentoInstanciaEquivalenteAIdHechoPlantilla(idHechoPlantilla: string, crearHecho?:boolean): string {

            var idHecho: string = null;
            if (crearHecho != false) {
                crearHecho = true;
            }

            if (this.documentoInstancia && this.documentoInstancia != null && this.definicionPlantilla && this.definicionPlantilla != null) {
                if (this.mapeoHechosPlantillaAHechosDocumentoInstancia[idHechoPlantilla] && this.mapeoHechosPlantillaAHechosDocumentoInstancia[idHechoPlantilla] != null) {
                    idHecho = this.mapeoHechosPlantillaAHechosDocumentoInstancia[idHechoPlantilla];
                } else {
                    var hecho = this.buscarHechoPlantillaEnHechosDocumentoInstancia(idHechoPlantilla);
                    if (!crearHecho && hecho == null) {
                        return null;
                    }
                    if (hecho == null) {
                        var hechoACrear = this.hechoPorIdHechoPlantilla[idHechoPlantilla];
                        if (hechoACrear && hechoACrear != null) {

                            this.inyectaHechoADocumentoInstancia(hechoACrear);
                            idHecho = hechoACrear.Id;
                            this.mapeoHechosPlantillaAHechosDocumentoInstancia[idHechoPlantilla] = idHecho;
                        }
                    } else {
                        idHecho = hecho.Id;
                        this.mapeoHechosPlantillaAHechosDocumentoInstancia[idHechoPlantilla] = idHecho;
                    }
                }
            }
            return idHecho;
        }
        /** 
        * Agrega un hecho al documento instancia.
        * @param hechoACrear Es el hecho que se va a inyectar al documento de instancia.
        **/
        inyectaHechoADocumentoInstancia(hechoACrear: model.Hecho) {

            this.documentoInstancia.VerificarDuplicidad(hechoACrear);
            this.documentoInstancia.HechosPorId[hechoACrear.Id] = hechoACrear;
            if (!this.documentoInstancia.HechosPorIdConcepto[hechoACrear.IdConcepto] || this.documentoInstancia.HechosPorIdConcepto[hechoACrear.IdConcepto] == null) {
                this.documentoInstancia.HechosPorIdConcepto[hechoACrear.IdConcepto] = new Array<string>();
            }
            this.documentoInstancia.HechosPorIdConcepto[hechoACrear.IdConcepto].push(hechoACrear.Id);
            if (!this.documentoInstancia.HechosPorIdContexto[hechoACrear.IdContexto]) {
                this.documentoInstancia.HechosPorIdContexto[hechoACrear.IdContexto] = new Array<string>();
            }
            if (!this.documentoInstancia.HechosPorIdUnidad[hechoACrear.IdUnidad]) {
                this.documentoInstancia.HechosPorIdUnidad[hechoACrear.IdUnidad] = new Array<string>();
            }
            if ($.inArray(hechoACrear.Id, this.documentoInstancia.HechosPorIdContexto[hechoACrear.IdContexto]) == -1) {
                this.documentoInstancia.HechosPorIdContexto[hechoACrear.IdContexto].push(hechoACrear.Id);
            }
            if ($.inArray(hechoACrear.Id, this.documentoInstancia.HechosPorIdUnidad[hechoACrear.IdUnidad]) == -1) {
                this.documentoInstancia.HechosPorIdUnidad[hechoACrear.IdUnidad].push(hechoACrear.Id);
            }
        }

        /**
        * Elimina el hecho del documento de instancia.
        * @param idHecho Identificador del hecho del documento de instancia que se pretende eliminar.
         **/
        eliminarHechoDeDocumentoInstanciaPorId(idHecho: string) {
            var hecho = this.documentoInstancia.HechosPorId[idHecho];
            if (!hecho || hecho == null) {
                throw new Error("No existe el hecho con el id \"" + idHecho + "\" en el documento de instancia.");
            }
            this.eliminarHechoDeDocumentoInstancia(hecho);
        }

        /** 
        * Elimina un hecho del documento instancia.
        * @param hechoAEliminar Es el hecho que se va a eliminar del documento de instancia.
        * @param idHechoPlantilla El identificador de hecho de plantailla si es que se tiene disponible.
        **/
        eliminarHechoDeDocumentoInstancia(hechoAEliminar: model.Hecho, idHechoPlantilla?: string) {

            this.documentoInstancia.EliminaDuplicidadHecho(hechoAEliminar);

            var index: number;

            index = $.inArray(hechoAEliminar.Id, this.documentoInstancia.HechosPorIdConcepto[hechoAEliminar.IdConcepto]);
            if (index != -1) {
                this.documentoInstancia.HechosPorIdConcepto[hechoAEliminar.IdConcepto].splice(index, 1);
            }
            index = $.inArray(hechoAEliminar.Id, this.documentoInstancia.HechosPorIdContexto[hechoAEliminar.IdContexto]);
            if (index != -1) {
                this.documentoInstancia.HechosPorIdContexto[hechoAEliminar.IdContexto].splice(index, 1);
            }
            index = $.inArray(hechoAEliminar.Id, this.documentoInstancia.HechosPorIdUnidad[hechoAEliminar.IdUnidad]);
            if (index != -1) {
                this.documentoInstancia.HechosPorIdUnidad[hechoAEliminar.IdUnidad].splice(index, 1);
            }
            var operacionesHechos = abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().OperacionesPorIdHecho;
            if (operacionesHechos[hechoAEliminar.Id]) { 
                for (var indexDetalleOperacion: number = 0; indexDetalleOperacion < operacionesHechos[hechoAEliminar.Id].length; indexDetalleOperacion++) {
                    abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().removerError(hechoAEliminar.Id, operacionesHechos[hechoAEliminar.Id][indexDetalleOperacion]);
                }
                operacionesHechos[hechoAEliminar.Id] = undefined;
                delete operacionesHechos[hechoAEliminar.Id];
            }
            if (this.documentoInstancia.HechosPorId[hechoAEliminar.Id] && this.documentoInstancia.HechosPorId[hechoAEliminar.Id] != null) {
                this.documentoInstancia.HechosPorId[hechoAEliminar.Id] = undefined;
                delete this.documentoInstancia.HechosPorId[hechoAEliminar.Id];
            }
            if (idHechoPlantilla && this.mapeoHechosPlantillaAHechosDocumentoInstancia[idHechoPlantilla]) {
                delete this.mapeoHechosPlantillaAHechosDocumentoInstancia[idHechoPlantilla];
                this.mapeoHechosPlantillaAHechosDocumentoInstancia[idHechoPlantilla] = undefined;
            }

            hechoAEliminar = null;
            this.documentoInstancia.EsCorrecto = abaxXBRL.model.OperacionesCalculoDocumentoInstancia.getInstance().NumeroErrores == 0;
            abaxXBRL.plugins.XbrlListadoErrores.getInstance().reevaluaListadoErrores();
        }

        /**
         * Busca una unidad en el documento instancia la cual es equivalente a una unidad definida en una plantilla.
         *
         * @param idUnidadPlantilla el identificador de la unidad de la plantilla a buscar.
         * @param idConcepto el identificador del concepto que se ligará a la unidad
         * @return el objeto con la unidad que corresponde a la unidad. null si no es posible buscar o encontrar la unidad en el documento instancia.
         */
        buscarUnidadPlantillaEnUnidadesDocumentoInstancia(idUnidadPlantilla: string, idConcepto: string): abaxXBRL.model.Unidad {
            var unidadDocumentoInstancia: abaxXBRL.model.Unidad = null;
            var unidadABuscar = this.unidadPorIdUnidadPlantilla[idUnidadPlantilla];
            if (!unidadABuscar || unidadABuscar == null) {
                unidadABuscar = this.crearUnidadAPartirDeDefinicionPlantilla(idUnidadPlantilla);
                if (unidadABuscar && unidadABuscar != null) {
                    this.unidadPorIdUnidadPlantilla[idUnidadPlantilla] = unidadABuscar;
                }
            }

            if (unidadABuscar && unidadABuscar != null && this.documentoInstancia && this.documentoInstancia != null) {
                var unidadCandidata: abaxXBRL.model.Unidad = null;
                for (var idUnidadDocumentoInstancia in this.documentoInstancia.UnidadesPorId) {
                    if (this.documentoInstancia.UnidadesPorId[idUnidadDocumentoInstancia]) {
                        if (this.documentoInstancia.UnidadesPorId[idUnidadDocumentoInstancia].EstructuralmenteIgual(unidadABuscar)) {
                            if (this.documentoInstancia.HechosPorIdUnidad[idUnidadDocumentoInstancia] && this.documentoInstancia.HechosPorIdUnidad[idUnidadDocumentoInstancia].length && this.documentoInstancia.HechosPorIdUnidad[idUnidadDocumentoInstancia].length > 0) {
                                var hechoEncontrado: boolean = false;
                                for (var i = 0; i < this.documentoInstancia.HechosPorIdUnidad[idUnidadDocumentoInstancia].length; i++) {
                                    var hechoUnidad = this.documentoInstancia.HechosPorId[this.documentoInstancia.HechosPorIdUnidad[idUnidadDocumentoInstancia][i]];
                                    if (hechoUnidad && hechoUnidad.IdConcepto === idConcepto) {
                                        hechoEncontrado = true;
                                        break;
                                    }
                                }
                                if (hechoEncontrado) {
                                    unidadDocumentoInstancia = this.documentoInstancia.UnidadesPorId[idUnidadDocumentoInstancia];
                                    break;
                                } else {
                                    unidadCandidata = this.documentoInstancia.UnidadesPorId[idUnidadDocumentoInstancia];
                                }
                            } else {
                                unidadCandidata = this.documentoInstancia.UnidadesPorId[idUnidadDocumentoInstancia];
                            }
                        }
                    }
                }
                if (unidadDocumentoInstancia == null && unidadCandidata != null) {
                    unidadDocumentoInstancia = unidadCandidata;
                }
            }

            return unidadDocumentoInstancia;
        }

        /**
         * Busca un contexto en el documento instancia el cual es equivalente a un contexto definido en una plantilla.
         *
         * @param idUnidadPlantilla el identificador de la unidad de la plantilla a buscar.
         * @param idConcepto el identificador del concepto que se ligará al contexto
         * @return el objeto con la unidad que corresponde a la unidad. null si no es posible buscar o encontrar la unidad en el documento instancia.
         */
        buscarContextoPlantillaEnContextosDocumentoInstancia(idContextoPlantilla: string, idConcepto: string): abaxXBRL.model.Contexto {
            var contextoDocumentoInstancia: abaxXBRL.model.Contexto = null;
            var contextoABuscar = this.contextoPorIdContextoPlantilla[idContextoPlantilla];
            if (!contextoABuscar || contextoABuscar == null) {
                contextoABuscar = this.crearContextoAPartirDeDefinicionPlantilla(idContextoPlantilla);
                if (contextoABuscar && contextoABuscar != null) {
                    this.contextoPorIdContextoPlantilla[idContextoPlantilla] = contextoABuscar;
                }
            }

            if (contextoABuscar && contextoABuscar != null && this.documentoInstancia && this.documentoInstancia != null) {
                var contextoCandidato: abaxXBRL.model.Contexto = null;
                var llaveFechas: string = null;
                if (contextoABuscar.Periodo.Tipo == abaxXBRL.model.Periodo.INSTANTE) {
                    llaveFechas = moment(contextoABuscar.Periodo.FechaInstante).utc().format(model.ConstantesComunes.FORMATO_FECHA);
                } else {
                    llaveFechas = moment(contextoABuscar.Periodo.FechaInicio).utc().format(model.ConstantesComunes.FORMATO_FECHA) + model.ConstantesComunes.SEPARADOR_LLAVE_FECHAS_CONTEXTO + moment(contextoABuscar.Periodo.FechaFin).utc().format(model.ConstantesComunes.FORMATO_FECHA);
                }
                if (this.documentoInstancia.ContextosPorFecha[llaveFechas]) {
                    for (var idx in this.documentoInstancia.ContextosPorFecha[llaveFechas]) {
                        var idContextoDocumentoInstancia = this.documentoInstancia.ContextosPorFecha[llaveFechas][idx];
                        if (this.documentoInstancia.ContextosPorId[idContextoDocumentoInstancia]) {
                            if (this.documentoInstancia.ContextosPorId[idContextoDocumentoInstancia].EstructuralmenteIgual(contextoABuscar)) {
                                if (this.documentoInstancia.HechosPorIdContexto[idContextoDocumentoInstancia] && this.documentoInstancia.HechosPorIdContexto[idContextoDocumentoInstancia].length && this.documentoInstancia.HechosPorIdContexto[idContextoDocumentoInstancia].length > 0) {
                                    var hechoEncontrado: boolean = false;
                                    for (var i = 0; i < this.documentoInstancia.HechosPorIdContexto[idContextoDocumentoInstancia].length; i++) {
                                        if (this.documentoInstancia.HechosPorId[this.documentoInstancia.HechosPorIdContexto[idContextoDocumentoInstancia][i]].IdConcepto === idConcepto) {
                                            hechoEncontrado = true;
                                            break;
                                        }
                                    }
                                    if (hechoEncontrado) {
                                        contextoDocumentoInstancia = this.documentoInstancia.ContextosPorId[idContextoDocumentoInstancia];
                                        break;
                                    } else {
                                        contextoCandidato = this.documentoInstancia.ContextosPorId[idContextoDocumentoInstancia];
                                    }
                                } else {
                                    contextoCandidato = this.documentoInstancia.ContextosPorId[idContextoDocumentoInstancia];
                                }
                            }
                        }
                    }
                }
                if (contextoDocumentoInstancia == null && contextoCandidato != null) {
                    contextoDocumentoInstancia = contextoCandidato;
                }
            }

            return contextoDocumentoInstancia;
        }

        /**
         * Busca un hecho en el documento instancia el cual es equivalente a un hecho definido en una plantilla.
         *
         * @param idHechoPlantilla el identificador del hecho de la plantilla a buscar.
         * @return el objeto con la unidad que corresponde a la unidad. null si no es posible buscar o encontrar la unidad en el documento instancia.
         */
        buscarHechoPlantillaEnHechosDocumentoInstancia(idHechoPlantilla: string): abaxXBRL.model.Hecho {
            var hechoDocumentoInstancia: abaxXBRL.model.Hecho = null;
            var hechoABuscar = this.hechoPorIdHechoPlantilla[idHechoPlantilla];
            if (!hechoABuscar || hechoABuscar == null) {
                hechoABuscar = this.crearHechoAPartirDeIdDefinicionPlantilla(idHechoPlantilla);
                if (hechoABuscar && hechoABuscar != null) {
                    this.hechoPorIdHechoPlantilla[idHechoPlantilla] = hechoABuscar;
                }
            }

            if (hechoABuscar && hechoABuscar != null && this.documentoInstancia && this.documentoInstancia != null && this.documentoInstancia.HechosPorIdConcepto[hechoABuscar.IdConcepto] && this.documentoInstancia.HechosPorIdConcepto[hechoABuscar.IdConcepto].length) {
                for (var i = 0; i < this.documentoInstancia.HechosPorIdConcepto[hechoABuscar.IdConcepto].length; i++) {
                    var hecho = this.documentoInstancia.HechosPorId[this.documentoInstancia.HechosPorIdConcepto[hechoABuscar.IdConcepto][i]];
                    var contexto = this.documentoInstancia.ContextosPorId[hecho.IdContexto];
                    var contextoPlantilla = this.documentoInstancia.ContextosPorId[hechoABuscar.IdContexto];
                    if (contexto && contexto != null && contextoPlantilla && contextoPlantilla != null && contexto.EstructuralmenteIgual(contextoPlantilla)) {
                        if (hecho.EsNumerico) {
                            var unidad = this.documentoInstancia.UnidadesPorId[hecho.IdUnidad];
                            var unidadPlantilla = this.documentoInstancia.UnidadesPorId[hechoABuscar.IdUnidad];
                            if (unidad && unidad != null && unidadPlantilla && unidadPlantilla != null && unidad.EstructuralmenteIgual(unidadPlantilla)) {
                                hechoDocumentoInstancia = hecho;
                                break;
                            }
                        } else {
                            hechoDocumentoInstancia = hecho;
                            break;
                        }
                    }

                }
            }

            return hechoDocumentoInstancia;
        }
        /**
         * Retorna la definción de un hecho de plantilla en base a su dientificador.
         * @param idHechoPlantilla Identificador del hecho de plantilla.
         */
        public obtenDefinicionPlantillaPorId(idHechoPlantilla:string):model.HechoPlantilla {
        
            return this.definicionPlantilla.obtenerDefinicionDeElementos().HechosPlantillaPorId[idHechoPlantilla];
        }
        /**
         * Eleimina el primer elemento tipo <tr></tr> padre del elemento a evaluar.
         * @param $elemento Elemento a evaluar.
         */
        public eliminaContenedorTr($elemento: JQuery):void {
        
            if($elemento.parents('xbrl\\:tabla-hipercubo, table[xbrl\\:tabla-excel]').length == 0) {

                $elemento.parents('tr:first').remove();
            } else {
                
                //console.error("No fue posible eliminar el TR del elemento puesto que se encuentra dentro de un hipercubo o de una talbla de excel");
                //console.error($elemento);
            }
        }

        /**
         * Crea un objeto Hecho a partir de una definición de plantilla
         *
         * @param idHechoPlantilla el identificador del hecho de plantilla
         * @return un objeto Hecho el cual representa el hecho descrito por la plantilla
         */
        crearHechoAPartirDeIdDefinicionPlantilla(idHechoPlantilla: string): abaxXBRL.model.Hecho {
            var hecho: abaxXBRL.model.Hecho = null;

            if (this.definicionPlantilla && this.definicionPlantilla != null) {
                hecho = this.crearHechoAPartirDeDefinicionPlantilla(this.definicionPlantilla.obtenerDefinicionDeElementos().HechosPlantillaPorId[idHechoPlantilla])
            }

            return hecho;
        }

        /**
         * Crea un objeto Hecho a partir de una definición de plantilla
         *
         * @param hechoPlantilla el hecho de plantilla
         * @return un objeto Hecho el cual representa el hecho descrito por la plantilla
         */
        crearHechoAPartirDeDefinicionPlantilla(hechoPlantilla: abaxXBRL.model.HechoPlantilla): abaxXBRL.model.Hecho {
            var hecho: abaxXBRL.model.Hecho = null;
            var definicionCorrecta: boolean = true;

            if (hechoPlantilla && hechoPlantilla != null) {
                var hechoTemp = new abaxXBRL.model.Hecho();
                hechoTemp.Id = "F" + abaxXBRL.utils.UUIDUtils.generarUUID();
                hechoTemp.EsValorNil = false;
                hechoTemp.RequiereValidacion = true;

                if (hechoPlantilla.IdConcepto && hechoPlantilla.IdConcepto != null) {
                    var concepto = this.documentoInstancia.Taxonomia.ConceptosPorId[hechoPlantilla.IdConcepto];
                    if (concepto && concepto != null) {
                        hechoTemp.IdConcepto = concepto.Id;
                        hechoTemp.Tipo = concepto.Tipo;
                        if (concepto.Tipo == abaxXBRL.model.ConstantesComunes.TIPO_CONCEPTO_ITEM) {
                            hechoTemp.EsTupla = false;
                            hechoTemp.IdContexto = this.obtenerIdContextoDocumentoInstanciaEquivalenteAIdContextoPlantilla(hechoPlantilla.IdContextoPlantilla, hechoPlantilla.IdConcepto);
                            if (!hechoTemp.IdContexto || hechoTemp.IdContexto == null) {
                                definicionCorrecta = false;
                            } else if ($.inArray(concepto.TipoDatoXbrl, abaxXBRL.model.ConstantesComunes.TIPOS_DATO_NUMERICOS_XBRL) != -1) {
                                hechoTemp.EsNumerico = true;
                                hechoTemp.NoEsNumerico = false;
                                hechoTemp.IdUnidad = this.obtenerIdUnidadDocumentoInstanciaEquivalenteAIdUnidadPlantilla(hechoPlantilla.IdUnidadPlantilla, hechoPlantilla.IdConcepto);
                                if (!hechoTemp.IdUnidad || hechoTemp.IdUnidad == null) {
                                    definicionCorrecta = false;
                                } else if (concepto.TipoDatoXbrl === abaxXBRL.model.ConstantesComunes.TIPO_DATO_FRACTION_ITEM_TYPE) {
                                    hechoTemp.EsFraccion = true;
                                    var valorNumerador = this.reemplazarVariablesPlantilla(hechoPlantilla.ValorNumerador);
                                    var valorDenominador = this.reemplazarVariablesPlantilla(hechoPlantilla.ValorDenominador);
                                    if (!isNaN(Number(valorNumerador))) {
                                        hechoTemp.ValorNumerador = Number(valorNumerador);
                                    }
                                    if (!isNaN(Number(valorDenominador))) {
                                        hechoTemp.ValorDenominador = Number(valorDenominador);
                                    }
                                } else {
                                    hechoTemp.ValorHecho = this.reemplazarVariablesPlantilla(hechoPlantilla.Valor);
                                }
                                if (hechoPlantilla.Precision && hechoPlantilla.Precision != null && hechoPlantilla.Decimales && hechoPlantilla.Decimales != null) {
                                    definicionCorrecta = false;
                                } else {
                                    if ((!hechoPlantilla.Precision || hechoPlantilla.Precision == null) && (!hechoPlantilla.Decimales || hechoPlantilla.Decimales == null)) {
                                        definicionCorrecta = false;
                                    } else {
                                        if (hechoPlantilla.Precision && hechoPlantilla.Precision != null) {
                                            if (hechoPlantilla.Precision === abaxXBRL.model.ConstantesComunes.CADENA_PRECISION_INFINITA) {
                                                hechoTemp.EsPrecisionInfinita = true;
                                            } else {
                                                var valorPrecision = this.reemplazarVariablesPlantilla(hechoPlantilla.Precision);
                                                if (!isNaN(Number(valorPrecision))) {
                                                    hechoTemp.Precision = Number(valorPrecision);
                                                } else {
                                                    definicionCorrecta = false;
                                                }
                                            }
                                        }
                                        if (hechoPlantilla.Decimales && hechoPlantilla.Decimales != null) {
                                            if (hechoPlantilla.Decimales === abaxXBRL.model.ConstantesComunes.CADENA_PRECISION_INFINITA) {
                                                hechoTemp.EsDecimalesInfinitos = true;
                                            } else {
                                                var valorDecimales = this.reemplazarVariablesPlantilla(hechoPlantilla.Decimales);
                                                if (!isNaN(Number(valorDecimales))) {
                                                    hechoTemp.Decimales = Number(valorDecimales);
                                                } else {
                                                    definicionCorrecta = false;
                                                }
                                            }
                                        }
                                    }
                                }
                            } else {
                                hechoTemp.EsNumerico = false;
                                hechoTemp.NoEsNumerico = true;
                                hechoTemp.EsFraccion = false;
                                hechoTemp.EsPrecisionInfinita = false;
                                hechoTemp.EsDecimalesInfinitos = false;
                                hechoTemp.ValorHecho = this.reemplazarVariablesPlantilla(hechoPlantilla.Valor);
                            }
                        } else {
                            hechoTemp.EsTupla = true;
                            hechoTemp.EsNumerico = false;
                            hechoTemp.NoEsNumerico = true;
                            hechoTemp.EsFraccion = false;
                            hechoTemp.EsPrecisionInfinita = false;
                            hechoTemp.EsDecimalesInfinitos = false;

                            hechoTemp.Hechos = new Array<string>();
                            for (var i = 0; i < hechoPlantilla.Hechos.length; i++) {
                                var hechoHijo = this.crearHechoAPartirDeDefinicionPlantilla(hechoPlantilla.Hechos[i]);
                                if (hechoHijo && hechoHijo != null) {
                                    hechoHijo.IdTuplaPadre = hechoTemp.Id;
                                    hechoTemp.Hechos.push(hechoHijo.Id);
                                } else {
                                    definicionCorrecta = false;
                                    break;
                                }
                            }
                        }
                    } else {
                        definicionCorrecta = false;
                    }
                }
                if (definicionCorrecta) {
                    hecho = hechoTemp;
                }

            }

            return hecho;
        }


        /**
        * Crea un objeto Hecho a partir de los identificadores de sus descriptores.
        *
        * @param idConcepto Identificador del concepto del hecho en la plantilla para su poder obtener la definición del concepto.
        * @param idContexto Identificador del contexto del hecho en la plantilla para su poder obtener la definición del contexto.
        * @param idUnidad Identificador de la unidad del hecho en la plantilla para su poder obtener la definición de la unidad.
        * @param precision Precisión utilizada para los campos númericos.
        * @param decimales Decimales utilizada para los campos númericos.
        * @param valorDefault Valor con el que se inicializará el hecho, si no se indica el hecho será nulo.
        * @return un objeto Hecho el cual representa el hecho definido por los descriptores.
        */
        crearHechoAPartirDeIdDescriptores(idConcepto: string, idContexto: string, idUnidad: string, precision?: string, decimales?: string, valorDefault?: string): abaxXBRL.model.Hecho {

            if (!idConcepto || idConcepto == null) {
                throw new Error("Se requiere el IdConcepto para crear el hecho del campo de captura.");
            }
            /*if (!idContexto || idContexto == null) {
                throw new Error("Se requiere el IdContexto para crear el hecho del campo de captura.");
            }*/

            var concepto = this.documentoInstancia.Taxonomia.ConceptosPorId[idConcepto];
            if (!concepto) {

                throw new Error("No existe la definición del concepto \"" + idConcepto + "\"");
            }
            var esNumerico = $.inArray(concepto.TipoDatoXbrl, abaxXBRL.model.ConstantesComunes.TIPOS_DATO_NUMERICOS_XBRL) != -1;
            if ((!idUnidad || idUnidad == null) && esNumerico) {
                throw new Error("Se requiere el IdUnidad para crear el hecho del campo de captura cuando el concepto es de tipo numérico.({idConcepto:\"" + idConcepto + "\", idContexto:\"" + idContexto + "\"})");
            }

            var tienePrecision: boolean = precision && precision != null;
            var tieneDecimales: boolean = decimales && decimales != null;

            if (tienePrecision && tieneDecimales) {
                throw new Error("No se pueden indicar el parametro precision y el prametro decimales en el mismo hecho, por favor elimina uno de los dos.");
            }

            if (!tienePrecision && !tieneDecimales && esNumerico) {
                throw new Error("Debe indicar el parametro precision ó el prametro decimales para crear un hecho numérico.");
            }

            var hechoTemp = new abaxXBRL.model.Hecho();
            hechoTemp.Id = "F" + abaxXBRL.utils.UUIDUtils.generarUUID();
            //Por el momento no se usarán valores Nil, únicamente cadenas vacías
            hechoTemp.EsValorNil = false;

            if (!concepto || concepto == null) {
                throw new Error("No existe el concepto con el id " + idConcepto + " en la taxonomia");
            }

            hechoTemp.IdConcepto = concepto.Id;
            hechoTemp.Tipo = concepto.Tipo;
            if (concepto.Tipo == abaxXBRL.model.ConstantesComunes.TIPO_CONCEPTO_ITEM) {

                hechoTemp.EsTupla = false;
                var contexto: model.Contexto = this.documentoInstancia.ContextosPorId[idContexto];
                if (!contexto || contexto == null) {
                    return null;
                    //throw new Error("No existe el contexto con el id " + idContexto + " en el documento instancia.");
                }
                hechoTemp.IdContexto = idContexto;

                if ($.inArray(concepto.TipoDatoXbrl, abaxXBRL.model.ConstantesComunes.TIPOS_DATO_NUMERICOS_XBRL) != -1) {

                    hechoTemp.EsNumerico = true;
                    hechoTemp.NoEsNumerico = false;

                    var unidad: model.Unidad = this.documentoInstancia.obtenerUnidadPorId(idUnidad);

                    if (!unidad || unidad == null) {

                        throw new Error("No existe la unidad con el id " + idUnidad + " en el documento instancia.");
                    }

                    hechoTemp.IdUnidad = idUnidad;
                    hechoTemp.EsFraccion = concepto.TipoDatoXbrl === abaxXBRL.model.ConstantesComunes.TIPO_DATO_FRACTION_ITEM_TYPE;

                    if (!hechoTemp.EsValorNil) {
                        var valor = Number(valorDefault);
                        if (isNaN(valor)) {
                            throw new Error("El valor default para un campo númerico debe de ser un número y se inyecto:" + valorDefault);
                        }
                        hechoTemp.ValorHecho = valorDefault;
                    }

                    if (!tienePrecision && !tieneDecimales) {
                        throw new Error("Se requiere la precision o los decimales para los campos númericos.");
                    }

                    if (tienePrecision) {
                        if (precision === abaxXBRL.model.ConstantesComunes.CADENA_PRECISION_INFINITA) {
                            hechoTemp.EsPrecisionInfinita = true;
                        } else {
                            var valorPrecision = parseInt(precision);
                            hechoTemp.Precision = Number(valorPrecision);
                        }
                    }
                    if (tieneDecimales) {
                        if (decimales === abaxXBRL.model.ConstantesComunes.CADENA_PRECISION_INFINITA) {
                            hechoTemp.EsDecimalesInfinitos = true;
                        } else {
                            var valorDecimales = parseInt(decimales);
                            hechoTemp.Decimales = Number(valorDecimales);
                        }
                    }
                } else {
                    hechoTemp.EsNumerico = false;
                    hechoTemp.NoEsNumerico = true;
                    hechoTemp.EsFraccion = false;
                    hechoTemp.EsPrecisionInfinita = false;
                    hechoTemp.EsDecimalesInfinitos = false;
                    if (!hechoTemp.EsValorNil) {

                        hechoTemp.ValorHecho = valorDefault;
                    }
                }
            } else {
                //Si no es item, es decir si es una tupla
                hechoTemp.EsTupla = true;
                hechoTemp.EsNumerico = false;
                hechoTemp.NoEsNumerico = true;
                hechoTemp.EsFraccion = false;
                hechoTemp.EsPrecisionInfinita = false;
                hechoTemp.EsDecimalesInfinitos = false;
                //Como no podemos saber que hechos tiene agregados se le asigna un areglo vacio.
                hechoTemp.Hechos = new Array<string>();
            }
            //Validamos si el hecho existe en el documento instancia.
            var hechoExistente = this.documentoInstancia.obtenerHecho(idConcepto, idContexto, idUnidad);
            if (hechoExistente == null) {
                // Agregamos el hecho al documento instancia.
                this.inyectaHechoADocumentoInstancia(hechoTemp);
            } else {
                hechoTemp=hechoExistente;
            }

            return hechoTemp;
        }

        /**
         * Crea un objeto Contexto a partir de una definición de plantilla
         *
         * @param idContextoPlantilla el identificador del contexto de plantilla
         * @return un objeto Contexto el cual representa el contexto descrita por la plantilla.
         */
        crearContextoAPartirDeDefinicionPlantilla(idContextoPlantilla: string): abaxXBRL.model.Contexto {
            var contexto: abaxXBRL.model.Contexto = null;
            var definicionCorrecta: boolean = true;

            if (this.definicionPlantilla && this.definicionPlantilla != null) {
                var contextoPlantilla = this.definicionPlantilla.obtenerDefinicionDeElementos().ContextosPlantillaPorId[idContextoPlantilla];
                if (contextoPlantilla && contextoPlantilla != null) {
                    var contextoTemp: any = {
                        Id: "C" + abaxXBRL.utils.UUIDUtils.generarUUID()
                    };

                    if (contextoPlantilla.Periodo && contextoPlantilla.Periodo != null) {

                        var tipo: number = contextoPlantilla.Periodo.Tipo;

                        if (tipo && tipo != null) {
                            if (tipo == abaxXBRL.model.Periodo.INSTANTE) {
                                var fechaInstanteString: string = this.reemplazarVariablesPlantilla(contextoPlantilla.Periodo.FechaInstante);
                                var fechaInstante: Date = null;

                                if (fechaInstanteString && fechaInstanteString != null) {
                                    var momento = moment(fechaInstanteString + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z');
                                    if (momento.isValid()) {
                                        fechaInstante = momento.utc().toDate();
                                    }
                                }

                                if (fechaInstante != null) {
                                    contextoTemp.Periodo = {
                                        Tipo: tipo,
                                        FechaInstante: fechaInstante
                                    };
                                } else {
                                    definicionCorrecta = false;
                                }
                            } else if (tipo == abaxXBRL.model.Periodo.DURACION) {
                                var fechaInicioString: string = this.reemplazarVariablesPlantilla(contextoPlantilla.Periodo.FechaInicio);
                                var fechaInicio: Date = null;
                                var fechaFinString: string = this.reemplazarVariablesPlantilla(contextoPlantilla.Periodo.FechaFin);
                                var fechaFin: Date = null;

                                if (fechaInicioString && fechaInicioString != null) {
                                    var momento = moment(fechaInicioString + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z');
                                    if (momento.isValid()) {
                                        fechaInicio = momento.utc().toDate();
                                    }
                                }

                                if (fechaFinString && fechaFinString != null) {
                                    var momento = moment(fechaFinString + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z');
                                    if (momento.isValid()) {
                                        fechaFin = momento.utc().toDate();
                                    }
                                }

                                if (fechaInicio != null && fechaFin != null) {
                                    contextoTemp.Periodo = {
                                        Tipo: tipo,
                                        FechaInicio: fechaInicio,
                                        FechaFin: fechaFin
                                    };
                                } else {
                                    definicionCorrecta = false;
                                }
                            }
                        } else {
                            definicionCorrecta = false;
                        }
                    } else {
                        definicionCorrecta = false;
                    }

                    if (contextoPlantilla.Entidad && contextoPlantilla.Entidad != null) {

                        var idEntidad: string = this.reemplazarVariablesPlantilla(contextoPlantilla.Entidad.Id);
                        var esquemaId = this.reemplazarVariablesPlantilla(contextoPlantilla.Entidad.EsquemaId);
                        var contieneInformacionDimensional: boolean = contextoPlantilla.Entidad.ContieneInformacionDimensional;

                        if (contieneInformacionDimensional) {
                            var segmento = this.reemplazarVariablesPlantilla(contextoPlantilla.Entidad.Segmento);
                            var valoresDimension = this.crearValoresDimensionAPartirDeDefinicionPlantilla(contextoPlantilla.Entidad.ValoresDimension);

                            if (idEntidad != null && esquemaId != null && segmento != null && valoresDimension != null) {
                                contextoTemp.Entidad = {
                                    EsquemaId: esquemaId,
                                    Id: idEntidad,
                                    ContieneInformacionDimensional: contieneInformacionDimensional,
                                    Segmento: segmento,
                                    ValoresDimension: valoresDimension
                                };
                            } else {
                                definicionCorrecta = false;
                            }
                        } else {
                            if (idEntidad != null && esquemaId != null) {
                                contextoTemp.Entidad = {
                                    EsquemaId: esquemaId,
                                    Id: idEntidad,
                                    ContieneInformacionDimensional: contieneInformacionDimensional
                                };
                            } else {
                                definicionCorrecta = false;
                            }
                        }
                    } else {
                        definicionCorrecta = false;
                    }

                    contextoTemp.ContieneInformacionDimensional = contextoPlantilla.ContieneInformacionDimensional;

                    if (contextoPlantilla.ContieneInformacionDimensional) {
                        var escenario = this.reemplazarVariablesPlantilla(contextoPlantilla.Escenario);
                        var valoresDimension = this.crearValoresDimensionAPartirDeDefinicionPlantilla(contextoPlantilla.ValoresDimension);

                        if (escenario != null && valoresDimension != null) {
                            contextoTemp.Escenario = escenario;
                            contextoTemp.ValoresDimension = valoresDimension;
                        } else {
                            definicionCorrecta = false;
                        }
                    }

                    if (definicionCorrecta) {
                        contexto = new abaxXBRL.model.Contexto().deserialize(contextoTemp);
                    }
                }
            }

            return contexto;
        }

        /**
         * Crea un arreglo de información dimensional en base a la información dimensional provista para un contexto de una plantilla.
         *
         * @param valoresDimensionPlantilla la información dimensional provista en la plantilla.
         * @return una arreglo de información dimensional creado a partir de lo que se definió en la plantilla de captura. null si ocurrió un error al generar la información.
         */
        crearValoresDimensionAPartirDeDefinicionPlantilla(valoresDimensionPlantilla: Array<abaxXBRL.model.DimensionInfo>): Array<abaxXBRL.model.DimensionInfo> {
            var valoresDimension: Array<abaxXBRL.model.DimensionInfo> = null;
            var definicionCorrecta: boolean = true;
            if (valoresDimensionPlantilla && valoresDimensionPlantilla != null && valoresDimensionPlantilla.length && valoresDimensionPlantilla.length > 0) {
                var valoresDimensionTemp = new Array<abaxXBRL.model.DimensionInfo>();
                for (var i = 0; i < valoresDimensionPlantilla.length; i++) {
                    var dimensionInfo = valoresDimensionPlantilla[i];
                    if (dimensionInfo.Explicita) {
                        var idDimension = this.reemplazarVariablesPlantilla(dimensionInfo.IdDimension);
                        var qnameDimension = this.reemplazarVariablesPlantilla(dimensionInfo.QNameDimension);
                        var idItemMiembro = this.reemplazarVariablesPlantilla(dimensionInfo.IdItemMiembro);
                        var qnameItemMiembro = this.reemplazarVariablesPlantilla(dimensionInfo.QNameItemMiembro);
                        if (idDimension != null && qnameDimension != null && idItemMiembro != null && qnameItemMiembro != null) {
                            valoresDimensionTemp[i] = new abaxXBRL.model.DimensionInfo().deserialize({
                                Explicita: dimensionInfo.Explicita,
                                IdDimension: idDimension,
                                IdItemMiembro: idItemMiembro,
                                QNameDimension: qnameDimension,
                                QNameItemMiembro: qnameItemMiembro
                            });
                        } else {
                            definicionCorrecta = false;
                        }
                    } else {
                        var idDimension = this.reemplazarVariablesPlantilla(dimensionInfo.IdDimension);
                        var qnameDimension = this.reemplazarVariablesPlantilla(dimensionInfo.QNameDimension);
                        var elementoMiembroTipificado = this.reemplazarVariablesPlantilla(dimensionInfo.ElementoMiembroTipificado);
                        if (qnameDimension != null && elementoMiembroTipificado != null) {
                            valoresDimensionTemp[i] = new abaxXBRL.model.DimensionInfo().deserialize({
                                Explicita: dimensionInfo.Explicita,
                                IdDimension: idDimension,
                                QNameDimension: qnameDimension,
                                ElementoMiembroTipificado: elementoMiembroTipificado
                            });
                        } else {
                            definicionCorrecta = false;
                        }
                    }
                }
                if (definicionCorrecta) {
                    valoresDimension = valoresDimensionTemp;
                }
            }

            return valoresDimension;
        }

        /**
         * Crea un objeto Unidad a partir de una definición de plantilla
         *
         * @param idUnidadPlantilla el identificador de la unidad de plantilla
         * @return un objeto Unidad el cual representa la unidad descrita por la plantilla.
         */
        crearUnidadAPartirDeDefinicionPlantilla(idUnidadPlantilla: string): abaxXBRL.model.Unidad {
            var unidad: abaxXBRL.model.Unidad = null;
            var definicionCorrecta: boolean = true;

            if (this.definicionPlantilla && this.definicionPlantilla != null) {
                var unidadPlantilla = this.definicionPlantilla.obtenerDefinicionDeElementos().UnidadesPlantillaPorId[idUnidadPlantilla];
                if (unidadPlantilla && unidadPlantilla != null) {
                    var unidadTemp: any = {
                        Id: "U" + abaxXBRL.utils.UUIDUtils.generarUUID(),
                        Tipo: unidadPlantilla.Tipo,
                    };

                    if (unidadPlantilla.Tipo == abaxXBRL.model.Unidad.MEDIDA) {
                        var medidasTemp = this.crearMedidasAPartirMedidasPlantilla(unidadPlantilla.Medidas);
                        if (medidasTemp != null) {
                            unidadTemp.Medidas = medidasTemp;
                        } else {
                            definicionCorrecta = false;
                        }
                    } else {
                        var medidasTemp = this.crearMedidasAPartirMedidasPlantilla(unidadPlantilla.MedidasNumerador);
                        if (medidasTemp != null) {
                            unidadTemp.MedidasNumerador = medidasTemp;
                            medidasTemp = this.crearMedidasAPartirMedidasPlantilla(unidadPlantilla.MedidasDenominador);
                            if (medidasTemp != null) {
                                unidadTemp.MedidasDenominador = medidasTemp;
                            } else {
                                definicionCorrecta = false;
                            }
                        } else {
                            definicionCorrecta = false;
                        }
                    }

                    if (definicionCorrecta) {
                        unidad = new abaxXBRL.model.Unidad().deserialize(unidadTemp);
                    }
                }
            }
            return unidad;
        }

        /**
         * Crea un arreglo de medidas a partir de su definición en una unidad de la plantilla del documento instancia.
         *
         * @param medidas las medidas que se definieron en la unidad de la plantilla.
         * @return un arreglo con las medidas creadas a partir de la definición. null en caso de que haya un problema al crear las medidas en base a la definición.
         */
        crearMedidasAPartirMedidasPlantilla(medidas: Array<abaxXBRL.model.MedidaPlantilla>): Array<any> {
            var medidasGeneradas: Array<any> = null;
            var definicionCorrecta: boolean = true;
            if (medidas && medidas != null && medidas.length && medidas.length > 0) {
                var medidasTemp = new Array<any>();
                for (var i = 0; i < medidas.length; i++) {
                    var medidaPlantilla = medidas[i];
                    var espacioNombres = this.reemplazarVariablesPlantilla(medidaPlantilla.EspacioNombres);
                    var nombre = this.reemplazarVariablesPlantilla(medidaPlantilla.Nombre);
                    if (espacioNombres != null && nombre != null) {
                        medidasTemp[i] = {
                            EspacioNombres: espacioNombres,
                            Nombre: nombre
                        };
                    } else {
                        definicionCorrecta = false;
                        break;
                    }
                }
                if (definicionCorrecta) {
                    medidasGeneradas = medidasTemp;
                }
            }
            return medidasGeneradas;
        }

        /**
         * Analiza la expresión pasada como parámetros y si comienza con el caracter '#' reemplaza el contenido de la expresión por la variable del documento instancia que le corresponda.
         * Si la expresión no comienza con el caracter '#' regresa la misma cadena sin modificaciones. Si la expresión comienza con el caracter '#' pero no existe una variable de documento
         * instancia que corresponda con la expresión, se regresará null.
         *
         * @param expresion la expresión a evaluar.
         * @return el resultado de la evaluación según lo descrito anteriormente.
         */
        reemplazarVariablesPlantilla(expresion: string): string {
            var resultado: string = expresion;

            if (expresion && expresion != null && abaxXBRL.utils.StringUtils.startsWith(expresion, abaxXBRL.model.ConstantesComunes.PREFIJO_VARIABLES_DOCUMENTO_INSTANCIA)) {
                var idVariable = expresion.slice(abaxXBRL.model.ConstantesComunes.PREFIJO_VARIABLES_DOCUMENTO_INSTANCIA.length);
                var valorVariable = this.definicionPlantilla.obtenerVariablePorId(idVariable);
                if (valorVariable && valorVariable != null) {
                    resultado = valorVariable;
                } else {
                    resultado = '';
                }
            }

            return resultado;
        }

        /**
        * Obtiene la lista de usuarios asignados a un documento de instancia y la lista de usuarios pendientes por
        * asignar.
        * @param idDocumentoInstancia Identificador del documento de instancia a consultar
        */
        obtenerUsuariosDocumentoInstancia(): ng.IPromise<any> {
            var self = this;
            var deferred = self.qService.defer();

            self.abaxXBRLRequestService.post(self.abaxXBRLUsuariosDocumentoApiPath, { idDocumentoInstancia: self.documentoInstancia.IdDocumentoInstancia }).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    deferred.resolve(resultadoOperacion);
                } else {
                    deferred.reject(resultadoOperacion);
                }
            }, function (error: any) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        /**
        * Actualiza en el servidor la lista de permisos de los usuarios asignados al documento de instancia
        * @param usuarios La lista de usuarios asignados al documento de instancia
        */
        actualizarUsuariosDocumentoAsignados(usuarios: Array<model.UsuarioDocumentoInstancia>): ng.IPromise<any> {
            var self = this;
            var deferred = self.qService.defer();

            self.abaxXBRLRequestService.post(self.abaxXBRLGuardarUsuariosDocumentoApiPath, {
                idDocumentoInstancia: self.documentoInstancia.IdDocumentoInstancia,
                usuariosAsignadosJSON: $.toJSON(usuarios)
            }).then(function (result: any) {
                    var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                    if (resultadoOperacion.Resultado) {
                        deferred.resolve(resultadoOperacion);
                    } else {
                        deferred.reject(resultadoOperacion);
                    }
                }, function (error: any) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        /**
        * Obtiene la lista de plantillas de documento de instancia relacionadas con una taxonomía en específico
        * asignar.
        * @param idTaxonomina Identificador de la taxonomía para filtrar
        */
        obtenerTaxonomiasRegistradas(): ng.IPromise<any> {
            var self = this;
            var deferred = self.qService.defer();

            self.abaxXBRLRequestService.post(self.abaxXBRLObtenerTaxonomiasApiPath, {}).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    deferred.resolve(resultadoOperacion);
                } else {
                    deferred.reject(resultadoOperacion);
                }
            }, function (error: any) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        /**
        * Obtiene una lista de opciones del servidor en una lista con resultados  {Etiqueta:Valor}
        *
        * @param apiUrl URL para invocar al servicio en el servidor
        */
        obtenerOpcionesLista(apiUrl: string, parametrosRequest?: { [nombre: string]: any }): ng.IPromise<any> {
            var self = this;
            var deferred = self.qService.defer();
            var params: {[nombre:string]:string} = parametrosRequest ? parametrosRequest : {};
            self.abaxXBRLRequestService.post(apiUrl, params).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    deferred.resolve(resultadoOperacion);
                } else {
                    deferred.reject(resultadoOperacion);
                }
            }, function (error: any) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }


        /**
        * Carga desde el servidor el objeto que representa la definición de la taxonomía previamente reigstrada en la base de datos
        * Se envía como parámetro el ID de la taxonomía a obtener su definición desde el servidor
        */
        obtenerDefinicionTaxonomia(idTaxonomia: number): ng.IPromise<any> {
            var self = this;
            var deferred = self.qService.defer();

            self.abaxXBRLRequestService.post(self.abaxXBRLObtenerDefinicionTaxonomia, { "idTaxonomia": idTaxonomia }).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    deferred.resolve(resultadoOperacion);
                } else {
                    deferred.reject(resultadoOperacion);
                }
            }, function (error: any) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        /**
        * Carga desde el servidor el objeto que representa la definición de la taxonomía representada
        * por su punto de entrada
        */
        cargarTaxonomiaPorURL(urlTaxonomia: string): ng.IPromise<any> {
            var self = this;
            var deferred = self.qService.defer();

            self.abaxXBRLRequestService.post(self.abaxXBRLCargarTaxonomiaUrlApiPath, { "urlEntryPoint": urlTaxonomia }).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                deferred.resolve(resultadoOperacion);
            }, function (error: any) {
                    deferred.reject(error);
            });

            return deferred.promise;
        }

        /**
        * Actualiza el estado de documento al bloquear o liberar el documento instancia
        * @param bloquear, parametro para identificar si se requiere bloquear <code>true<code> o liberar <code>false</code>.
        */
        bloquearLiberarDocumentoInstancia(bloquear: boolean): ng.IPromise<any> {
            var self = this;
            var deferred = self.qService.defer();

            self.abaxXBRLRequestService.post(self.abaxXBRLBloquearLiberarDocumentoInstanciaApiPath, {
                idDocumentoInstancia: self.documentoInstancia.IdDocumentoInstancia,
                bloquear: bloquear
            }).then(function (result: any) {
                    var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                    if (resultadoOperacion.Resultado) {
                        deferred.resolve(resultadoOperacion);
                    } else {
                        deferred.reject(resultadoOperacion);
                    }
                }, function (error: any) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }


        /**
        * Importa las notas definidas en un archivo word al documento instancia que se esta trabando.
        * @param archivoNotaDocumentoInstancia, parametro que tiene el archivo a importar.
        */
        importarNotasDocumentoInstancia(archivoNotaDocumentoInstancia: File): ng.IPromise<any> {
            var self = this;
            var deferred = self.qService.defer();

            var fd = new FormData();
            fd.append('file', archivoNotaDocumentoInstancia);
            fd.append('documentoInstanciaJSON', $.toJSON(self.documentoInstancia));


            self.httpService.post(self.abaxXBRLImportarNotasDocumentoApiPath, fd, {
                transformRequest: angular.identity,
                headers: { 'Content-Type': undefined, 'Authorization': 'Bearer ' + shared.service.AbaxXBRLSessionService.getSesionInmediate().Token }
            }).then(function (result: any) {
                    var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                    if (resultadoOperacion.Resultado) {
                        deferred.resolve(resultadoOperacion);
                    } else {
                        deferred.reject(resultadoOperacion);
                    }
                }, function (error: any) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }



        

        /**
         * Método estático de tipo fábrica para la creación de una instancia del servicio.
         *
         * @param $http el servicio angular para invocaciones http
         * @param $q el servicio angular para operaciones en cola.
         * @param abaxXBRLRequestService Servicio para el manejo de peticiones al servidor.
         * @return una nueva instancia del servicio.
         */
        public static AbaxXBRLServicesFactory($http: ng.IHttpService, $q: ng.IQService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService): AbaxXBRLServices {
            return new AbaxXBRLServices($http, $q, abaxXBRLRequestService);
        }

        /**
        * Obtiene la unidad por sus caracteristicas esenciales. 
        * La busca en el documento instancia y si no existe la crea en base a los datos proporcionados y luego la agrega al documetno de instancia.
        * @param tipoDeUnidad Indica el tipo de la unidad, solo se admiten los valores:
        * -  model.Unidad.MEDIDA : Indica que la unidad sólo se compone de una medida
        * -  model.Unidad.DIVISORIA: Indica que la unidad se compone de un numerador y denominador.
        * @param espacionNombresUnidad Espacion de nombres para la definicion de la unidad. Por ejemplo "http://www.xbrl.org/2003/iso4217";
        * @param nombreUnidad Nombre de la unidad que será referenciado en el espacio de nombres. Por ejemplo "medida_MXN";
        * @param medidasNumerador Valor que aplica para las unidades de tipo DIVISORIA indicando los valores que conforman el numerador.
        * @param medidasDenominador Valor que aplica para las unidades de tipo DIVISORIA indicando los valores que conforman el denominador.
        * @return Unidad obtenida del documento instancia o generada con los valores dados.
        **/
        public ObtenerUnidadPorelementos(tipoDeUnidad: number, espacionNombresUnidad: string, nombreUnidad: string, medidasNumerador?: Array<model.Medida>, medidasDenominador?: Array<model.Medida>): model.Unidad {

            var unidad = new model.Unidad();
            unidad.Id = 'U' + abaxXBRL.utils.UUIDUtils.generarUUID();
            unidad.Tipo = tipoDeUnidad;
            unidad.Medidas = new Array<model.Medida>();
            var medida = new model.Medida();
            medida.EspacioNombres = espacionNombresUnidad;
            medida.Nombre = nombreUnidad;
            unidad.Medidas.push(medida);

            if (unidad.Tipo == model.Unidad.DIVISORIA) {

                if (!medidasNumerador || medidasNumerador == null || medidasNumerador.length == 0) {
                    throw new Error("La unidad de tipo DIVISORIA requiere que se indiquen las medidas del Numerador.");
                }

                if (!medidasDenominador || medidasDenominador == null || medidasDenominador.length == 0) {
                    throw new Error("La unidad de tipo DIVISORIA requiere que se indiquen las medidas del Denominador.");
                }

                unidad.MedidasNumerador = medidasNumerador;
                unidad.MedidasDenominador = medidasDenominador;
            }

            var unidadPreviamenteExistente = this.buscarUnidadEnDocumento(unidad);

            if (!unidadPreviamenteExistente || unidadPreviamenteExistente == null) {
                if (!this.documentoInstancia.UnidadesPorId) {
                    this.documentoInstancia.UnidadesPorId = {};
                }
                this.documentoInstancia.UnidadesPorId[unidad.Id] = unidad;
            } else {
                unidad = unidadPreviamenteExistente;
            }

            return unidad;
        }

        /**
        * Obtiene la unidad por sus caracteristicas esenciales. 
        * La busca en el documento instancia y si no existe la crea en base a los datos proporcionados y luego la agrega al documetno de instancia.
        * @param unidad Modelo a evaluar.
        * @return Identificador de la unidad encontrada o de la nueva unidad generada según sea el caso.
        **/
        public ObtenerIdUnidadEquivalente(unidad: model.Unidad): string {

            if (unidad.Tipo == model.Unidad.MEDIDA && (!unidad.Medidas || unidad.Medidas.length == 0)) {

                throw new Error("La unidad de tipo Medida debe contener valores en su arreglo Medidas.");
            }
            if (unidad.Tipo == model.Unidad.DIVISORIA &&
                (!unidad.MedidasNumerador || unidad.MedidasNumerador.length == 0 ||
                 !unidad.MedidasDenominador || unidad.MedidasDenominador.length == 0)) {

                throw new Error("La unidad de tipo Divisoria debe contener valores en su arreglo MedidasNumerador y MedidasDenominador.");
            }
            var $self = this;
            var unidad = new model.Unidad().deserialize(unidad);
            var unidadExistente: model.Unidad;
            var idUnidad: string = null;
            var indiceUnidad: number;
            var idUnidadObtenida: string = null;
            for (idUnidad in $self.documentoInstancia.UnidadesPorId) {

                unidadExistente = $self.documentoInstancia.UnidadesPorId[idUnidad];
                if (unidadExistente.EstructuralmenteIgual(unidad)) {

                    idUnidadObtenida = idUnidad;
                    break;
                }
            }
            if (!idUnidadObtenida) {

                unidad.Id = 'U' + abaxXBRL.utils.UUIDUtils.generarUUID();
                if (!$self.documentoInstancia.UnidadesPorId) {
                    $self.documentoInstancia.UnidadesPorId = {};
                }
                $self.documentoInstancia.UnidadesPorId[unidad.Id] = unidad;
                idUnidadObtenida = unidad.Id;
            }
            
            return idUnidadObtenida;
        }

        /**
        * Busca una unidad que sea estructuralmente igual entre las unidades del documento instancia.
        *
        * @param unidad la unidad a buscar en el documento instancia.
        * @return una unidad previamente registrada en el documento instancia la cual es estructuralmente igual a la pasada como parámetro. null en caso de no existir.
        */
        public buscarUnidadEnDocumento(unidad: model.Unidad): model.Unidad {
            var unidadPreviamenteExistente: model.Unidad = null;
            for (var idUnidad in this.documentoInstancia.UnidadesPorId) {
                if (this.documentoInstancia.UnidadesPorId[idUnidad].EstructuralmenteIgual(unidad)) {
                    unidadPreviamenteExistente = this.documentoInstancia.UnidadesPorId[idUnidad];
                    break;
                }
            }
            return unidadPreviamenteExistente;
        }

        /**
         * Genera un índice de todos los conceptos que participan en alguna fórmula como variables dentro de la taxonomía
         *
         * @return un objeto que tiene como llave los identificadores de los conceptos y como valor un arreglo con los conceptos relacionados en alguna fórmula de la taxonomía.
         */
        public generarIndiceVariablesFormulas(): { [idConcepto: string]: Array<string> } {
            var indiceVariablesFormula: { [idConcepto: string]: Array<string> } = {};

            if (this.definicionPlantilla && this.definicionPlantilla !== null) {
                for (var idFormula in this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas) {
                    if (this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas.hasOwnProperty(idFormula)) {
                        var formula: abaxXBRL.model.DefinicionFormula = this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas[idFormula];
                        var variables = new Array<string>();
                        for (var idVariable in formula.DefinicionVariables) {
                            if (formula.DefinicionVariables.hasOwnProperty(idVariable)) {
                                var variable: model.DefinicionVariableFormula = formula.DefinicionVariables[idVariable];
                                if (!variable.IdConcepto || variable.IdConcepto == null) continue;
                                if ($.inArray(variable.IdConcepto, variables) == -1) {
                                    variables.push(variable.IdConcepto);
                                }
                            }
                        }
                        for (var j = 0; j < variables.length; j++) {
                            var idConcepto = variables[j];
                            if (!indiceVariablesFormula[idConcepto]) {
                                indiceVariablesFormula[idConcepto] = variables;
                            } else {
                                indiceVariablesFormula[idConcepto] = utils.ArrayUtils.union(indiceVariablesFormula[idConcepto], variables);
                            }
                        }
                    }
                }
            }

            return indiceVariablesFormula;
        }


        /**
         * Genera un índice de todas las fórmulas relacionadas a un concepto.
         *
         * @return un objeto que tiene como llave los identificadores de los conceptos y como valor un arreglo con los identificadores de las fórmulas aplicables de la taxonomía.
         */
        public generarIndiceFormulasPorConcepto(): { [idConcepto: string]: Array<string> } {
            var indiceFormulasPorConcepto: { [idConcepto: string]: Array<string> } = {};

            if (this.definicionPlantilla && this.definicionPlantilla !== null) {
                for (var idFormula in this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas) {
                    if (this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas.hasOwnProperty(idFormula)) {
                        var formula: abaxXBRL.model.DefinicionFormula = this.definicionPlantilla.obtenerDefinicionDeElementos().ListadoDeFormulas[idFormula];
                        for (var idVariable in formula.DefinicionVariables) {
                            if (formula.DefinicionVariables.hasOwnProperty(idVariable)) {
                                var variable: model.DefinicionVariableFormula = formula.DefinicionVariables[idVariable];
                                if (!variable.IdConcepto || variable.IdConcepto == null) continue;
                                if (!indiceFormulasPorConcepto[variable.IdConcepto]) {
                                    indiceFormulasPorConcepto[variable.IdConcepto] = new Array<string>();
                                }
                                if ($.inArray(idFormula, indiceFormulasPorConcepto[variable.IdConcepto]) == -1) {
                                    indiceFormulasPorConcepto[variable.IdConcepto].push(idFormula);
                                }
                            }
                        }
                    }
                }
            }

            return indiceFormulasPorConcepto;
        }

        /**
        * Elimina hechos del documento de instancia que sean de las características del hecho de la plantilla
        * enviado como parámetro.
        *
        */
        public eliminarHechoDeInstanciaPorIdHechoPlantilla(idHechoPlantilla: string): void {
            var hecho = this.buscarHechoPlantillaEnHechosDocumentoInstancia(idHechoPlantilla);
            while (hecho != null) {
                this.eliminarHechoDeDocumentoInstancia(hecho);
                hecho = this.buscarHechoPlantillaEnHechosDocumentoInstancia(idHechoPlantilla);
            }

        }
        /**
        * Limpia los diccionarios auxiliares del servicio.
        **/
        public limpiarDiccionariosServicio():void {
            this.mapeoContextosPlantillaAContextosDocumentoInstancia = {};
            this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia = {};
            this.mapeoHechosPlantillaAHechosDocumentoInstancia = {};
            this.unidadPorIdUnidadPlantilla = {};
            this.contextoPorIdContextoPlantilla = {};
            this.hechoPorIdHechoPlantilla = {};
            this.descripcionRolesPorConcepto = {};
            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.limpiarOperaciones();
        }

        /* Elimina los datos del documento de instancia previamente cargado * */
        public limpiarDocumentoYPlantilla(): void {
            this.definicionPlantilla = null;
            this.documentoInstancia = null;
            this.mapeoContextosPlantillaAContextosDocumentoInstancia = {};
            this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia = {};
            this.mapeoHechosPlantillaAHechosDocumentoInstancia = {};
            this.unidadPorIdUnidadPlantilla = {};
            this.contextoPorIdContextoPlantilla = {};
            this.hechoPorIdHechoPlantilla = {};
            this.descripcionRolesPorConcepto = {};
            abaxXBRL.model.OperacionesCalculoDocumentoInstancia.limpiarOperaciones();
        }

        /**
        * Busca todos los hechos de un documento de instancia que correspondan a algún concepto de la lista
        de conceptos enviada como parámetro.
        *
        */
        public obtenerHechosEnDocumentoPorIdConceptos(idConceptos: Array<string>): Array<model.Hecho> {
            var hechosResultado = new Array<model.Hecho>();
            var self = this;
            if (self.documentoInstancia && self.documentoInstancia != null && self.documentoInstancia.HechosPorIdConcepto && self.documentoInstancia.HechosPorIdConcepto!=null)  {
                
                for (var idxConcepto in idConceptos) {
                    var idConceptoBuscado = idConceptos[idxConcepto];
                    if (self.documentoInstancia.HechosPorIdConcepto[idConceptoBuscado] && self.documentoInstancia.HechosPorIdConcepto[idConceptoBuscado] != null &&
                        self.documentoInstancia.HechosPorIdConcepto[idConceptoBuscado].length && self.documentoInstancia.HechosPorIdConcepto[idConceptoBuscado].length > 0) {

                        for (var idxIdHexho in self.documentoInstancia.HechosPorIdConcepto[idConceptoBuscado]) {
                            var idHecho = self.documentoInstancia.HechosPorIdConcepto[idConceptoBuscado][idxIdHexho];
                            if (self.documentoInstancia.HechosPorId[idHecho] && self.documentoInstancia.HechosPorId[idHecho] != null) {
                                hechosResultado.push(self.documentoInstancia.HechosPorId[idHecho]);        
                            }
                        }
                    }
                }
            }
            return hechosResultado;
        }
        /** Obtiene los diferentes conjuntos de fechas encontrados en los hechos enviados como parámetro */
        public obtenerDiferentesFechasDeHechos(listaHechos: Array<model.Hecho>): Array<model.Periodo> {
            var self = this;
            var listaPeriodos = new Array<model.Periodo>();
            var listaContextosRevisados: { [id: string]: string } = {};
            for (var idxHecho in listaHechos){
                var hecho = listaHechos[idxHecho];
                if (hecho.IdContexto && hecho.IdContexto != null && self.documentoInstancia.ContextosPorId[hecho.IdContexto] && !listaContextosRevisados[hecho.IdContexto]) {

                    var ctx = self.documentoInstancia.ContextosPorId[hecho.IdContexto];
                    //Si no es igual a ningún periodo registrado, agregar el periodo
                    var encontrado = false;
                    for (var idxPeriodo in listaPeriodos) {
                        var periodo = listaPeriodos[idxPeriodo];
                        if (periodo.EstructuralmenteIgual(ctx.Periodo)) {
                            encontrado = true;
                            break;
                        }
                    }
                    if (!encontrado) {
                       //agregar
                        listaPeriodos.push(ctx.Periodo);
                        listaContextosRevisados[ctx.Id] = ctx.Id;
                    }
                }
            }
            return listaPeriodos;
        }
        /** Obtiene los diferentes conjuntos de entidades (únicamente considerando el URI y el ID) encontrados en los hechos enviados como parámetro */
        public obtenerDiferentesEntidadesDeHechos(listaHechos: Array<model.Hecho>): Array<model.Entidad> {
            var self = this;
            var listaEntidades = new Array<model.Entidad>();
            var listaContextosRevisados: { [id: string]: string } = {};
            for (var idxHecho in listaHechos) {
                var hecho = listaHechos[idxHecho];
                if (hecho.IdContexto && hecho.IdContexto != null && self.documentoInstancia.ContextosPorId[hecho.IdContexto] && !listaContextosRevisados[hecho.IdContexto]) {
                    var ctx = self.documentoInstancia.ContextosPorId[hecho.IdContexto];
                    //Si no es igual a ningúna entidad registrada, agregar la entidad
                    var encontrado = false;
                    for (var idxEntidad in listaEntidades) {
                        var entidad = listaEntidades[idxEntidad];
                        if (entidad.EsquemaId == ctx.Entidad.EsquemaId && entidad.IdEntidad == ctx.Entidad.IdEntidad ) {
                            encontrado = true;
                            break;
                        }
                    }
                    if (!encontrado) {
                        //agregar
                        listaEntidades.push(ctx.Entidad);
                        listaContextosRevisados[ctx.Id] = ctx.Id;
                    }
                }
            }
            return listaEntidades;
        }

        /**
        * Obtiene el listado de documentos de un usuario en una sola lista
        */
        obtenerDocumentosUsuarioEnListaUnificada(): ng.IPromise<any> {
            var self = this;
            var deferred = self.qService.defer();

            self.abaxXBRLRequestService.post(self.abaxXBRLObtenerDocumentosUsuarioEnListaUnificada, {}).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    deferred.resolve(resultadoOperacion);
                } else {
                    deferred.reject(resultadoOperacion);
                }
            }, function (error: any) {
                    deferred.reject(error);
            });

            return deferred.promise;
        }
        /**
        * Obtiene el listado de documentos de un usuario en una sola lista
        */
        public obtenerDocumentosVersion(idDocumentoInstancia:number): ng.IPromise<any> {
            var self = this;
            var deferred = self.qService.defer();
            self.abaxXBRLRequestService.post(self.abaxXBRLObtenerDocumentosVersion, { "idDocumentoInstancia": idDocumentoInstancia.toString() }).then(function (result: any) {
                var resultadoOperacion: abaxXBRL.model.ResultadoOperacion = result.data;
                if (resultadoOperacion.Resultado) {
                    deferred.resolve(resultadoOperacion);
                } else {
                    deferred.reject(resultadoOperacion);
                }
            }, function (error: any) {
                deferred.reject(error);
            });

            return deferred.promise;
        }
        /**
        * Obtiene del servidor del resultado de combinar un documento de instancia ya cargado en el visor con un documento de intancia en base de datos
        */
        agregarDocumentoInstanciaAComparar(idDocumentoComparar: number, esVersionDocumentoOrigen:boolean): ng.IPromise<any> {
            
            var self = this;
            var deferred = self.qService.defer();
            self.abaxXBRLRequestService.post(self.abaxXBRLAgregarDocumentoInstanciaAComparar, { 'documentoInstancia': $.toJSON(this.documentoInstancia), 'idDocumentoComparar': idDocumentoComparar, 'paramEsVersion': esVersionDocumentoOrigen ? "true" : "false"}).then(function (result: any) {
                var resultadoDto: model.ResultadoOperacion = result.data;
                if (resultadoDto.Resultado) {
                    self.documentoInstancia.deserialize(resultadoDto.InformacionExtra);
                    deferred.resolve(resultadoDto);
                } else {
                    deferred.reject(resultadoDto);
                }
            }, function (error: any) {
                deferred.reject(error);
            });

            return deferred.promise;
        }

        /**
        * Invoca el procedimiento en el servidor para realizar la importación de hechos desde otro documento de instancia
        */
        importarHechosDeDocumento(idDocumentoImportar: number, coincidirMoneda: boolean, sobreescribirValores: boolean) {

            var self = this;
            var deferred = self.qService.defer();
            self.abaxXBRLRequestService.post(self.abaxXBRLImportarHechosDocumentoInstancia, {
                'documentoInstancia': $.toJSON(this.documentoInstancia),
                'idDocumentoImportar': idDocumentoImportar,
                'coincidirMoneda': coincidirMoneda,
                'sobreescribirValores': sobreescribirValores
            }).then(function (result: any) {
                var resultadoDto: model.ResultadoOperacion = result.data;
                if (resultadoDto.Resultado) {
                    self.documentoInstancia.deserialize(resultadoDto.InformacionExtra["documentoInstancia"]);
                    deferred.resolve(resultadoDto);
                } else {
                    deferred.reject(resultadoDto);
                }
            }, function (error: any) {
                    deferred.reject(error);
                });

            return deferred.promise;

        }
        /**
        * Toma de la definicion de plantilla aquellos conceptos que no deben de ser modificados e itera los hechos de esos conceptos y les asigna el valor definido en la plantilla.
        **/
        public evaluaHechosFijosDocumentoInstancia(): void {
            var $abaxService = this;
            var conceptosFijos = $abaxService.getDefinicionPlantilla().conceptosFijosDocumentoInstancia;
            if (conceptosFijos) {
                var documento = $abaxService.getDocumentoInstancia();
                for (var idConcepto in conceptosFijos) {
                    var idsHechos = documento.HechosPorIdConcepto[idConcepto];
                    if (idsHechos) {
                        var valor = conceptosFijos[idConcepto];
                        for (var indexIdHecho: number = 0; indexIdHecho < idsHechos.length; indexIdHecho++) {
                            var idHecho = idsHechos[indexIdHecho];
                            var hecho = documento.HechosPorId[idHecho];
                            hecho.ValorHecho = valor;
                        }
                    }
                }
            }
        }

        /**
        * Obtiene la descripción de los formatos en los que se tiene contenido el concepto.
        * @param idConcepto Identificador del concepto buscado.
        * @return Nombre de los roles a los que pertenece el concepto.
        **/
        public obtenIdFormatosPorConcepto(idConcepto: string): string {

            var $self = this;
            var descripcionRoles: string =  $self.descripcionRolesPorConcepto[idConcepto];
            if (descripcionRoles) {
                return descripcionRoles;
            }

            descripcionRoles = "";
            var rolesPresentacion = $self.documentoInstancia.Taxonomia.RolesPresentacion;
            for (var indexRol:number = 0; indexRol < rolesPresentacion.length; indexRol++) {
                var rolPresentacion = rolesPresentacion[indexRol];
                var contieneConcepto = $self.estrucutrasContieneIdConcepto(idConcepto,rolPresentacion.Estructuras);
                if (contieneConcepto) {
                    descripcionRoles += rolPresentacion.Nombre + '<br />';
                }
            }
            this.descripcionRolesPorConcepto[idConcepto] = descripcionRoles;
            return  descripcionRoles;

        }
        /**
        * Valida si el arreglo de estructuras o sus sub estructuras contienen el id de concepto indicado.
        * @param idConcepto Identificador del concepto buscado.
        * @param estructuras Arreglo de estructuras a evaluar.
        * @return Si el concepto indicado esta contenido en al conjunto de estructuras o alguno de sus subconjuntos.
        **/
        private  estrucutrasContieneIdConcepto(idConcepto: string, estructuras: model.EstructuraFormato[]): boolean {

            var $self = this;
            var contenido: boolean = false;
            for (var indexEstructura: number = 0; indexEstructura < estructuras.length; indexEstructura++) {
                var estructura = estructuras[indexEstructura];
                if (estructura.IdConcepto == idConcepto) {
                    contenido = true;
                    break;
                }
                if (estructura.SubEstructuras && estructura.SubEstructuras.length > 0) {
                    if ($self.estrucutrasContieneIdConcepto(idConcepto, estructura.SubEstructuras)) {
                        contenido = true;
                        break;
                    }
                }
            }
            return contenido;
        }
        /**
        * Evalua si el arreglo contiene valores por los cuales filtrar, si no los tiene retorna el diccionario completo, si los tiene retorna un diccionario con los
        * elementos que coincidan, en caso de que el arreglo de llaves tenga valores pero ninguno coincida retornara un diccionario vacio.
        * @param llaves Arreglo de llaves por las cuales filtrar.
        * @param diccionario Conjunto a filtrar..
        * @return Todos los valores del diccionario si no se indican llaves, diccionario con el subconjunto de elemntos encontrados, puede ser un diccionario vaicio si ningún elemento coincide.
        **/
        private obtenSubGrupoDiccionario(llaves: Array<string>, diccionario: {[llave: string]: any }): {[llave: string]: any } {

            var subGrupo: { [llave: string]: any } = null;
            if (llaves && llaves.length > 0) {

                subGrupo = {};
                var llave: string;
                for (llave in diccionario) {

                    if (llaves.indexOf(llave) != -1) {
                        subGrupo[llave] = diccionario[llave];
                    }
                }
            } else {

                subGrupo = diccionario;
            }

            return subGrupo;
        }
        /**
        * Obtiene un arreglo con los elementos  que se encuentran en ambos arreglos.
        * @param arregloA Primer arreglo a comparar.
        * @param arregloB Segundo arreglo a comperar.
        * @return Arreglo con los elementos comunes.
        **/
        private interseccionArreglos<T>(arregloA: Array<T>, arregloB: Array<T>):Array<T> {
            var arregloInterseccion = new Array<T>();
            var indexA: number;
            var indexB: number;
            var itemA: T;
            var itemB: T;
            for (indexA = 0; indexA < arregloA.length; indexA++) {

                itemA = arregloA[indexA];
                for (indexB = 0; indexB < arregloB.length; indexB++) {

                    itemB = arregloB[indexB];
                    if (itemA == itemB) {

                        arregloInterseccion.push(itemA);
                    }
                }
            }

            return arregloInterseccion;
        }
        /**
        * Obtiene los dientificadores de contexto del listado de hechos proporcionado.
        * @param Lista de hechos a evaluar.
        * @return Lista con los identificadores de contexto.
        **/
        public obtenIdsContextosHechos(hechosIds: Array<string>): Array<string> {

            var indexHecho: number;
            var idContexto: string;
            var idHecho: string;
            var hecho: model.Hecho;
            var idsContextos: Array<string> = [];
            var diccionario: { [idContexto: string]: string } = {};
            var $self = this;

            for (indexHecho = 0; indexHecho < hechosIds.length; indexHecho++) {

                idHecho = hechosIds[indexHecho];
                hecho = $self.documentoInstancia.HechosPorId[idHecho];
                idContexto = hecho.IdContexto;
                if (!diccionario[idContexto]) {

                    idsContextos.push(idContexto);
                    diccionario[idContexto] = idContexto;
                }
            }
            return idsContextos;

        }

        /**
        * Obtiene los identificadores de hechos para un conjunto de conceptos en particular.
        * @param idsConecptos Identificadores de los conceptos requeridos.
        * @param idsHechos Identificador de conjunto de hechos para delimintar los elementos a filtrar
        * @return Identificadores de los hechos.
        **/
        private obtenHechosIdsPorIdsConcepto(idsConecptos: Array<string>, idsHechos?:Array<string>): Array<string> {


            var index: number;
            var $self = this;
            var idConcepto: string;
            var idHecho: string;
            var hecho: model.Hecho;
            var hechosTemporales: Array<string>;
            var idsHechosConcepto: Array<string> = [];
            var diccionarioConceptosAuxiliar = {};
            var diccionarioHechoAuxiliar = {};

            for (index = 0; index < idsConecptos.length; index++) {

                idConcepto = idsConecptos[index];
                diccionarioConceptosAuxiliar[idConcepto] = idConcepto;
            }
            if (idsHechos) {

                for (index = 0; index < idsHechos.length; index++) {

                    idHecho = idsHechos[index];
                    if (!diccionarioHechoAuxiliar[idHecho]) {

                        hecho = $self.documentoInstancia.HechosPorId[idHecho];
                        if (hecho && diccionarioConceptosAuxiliar[hecho.IdConcepto]) {

                            diccionarioHechoAuxiliar[idHecho] = idHecho;
                            idsHechosConcepto.push(idHecho);
                        }
                    }
                }
            } else {
                for (idConcepto in diccionarioConceptosAuxiliar) {

                    hechosTemporales = $self.documentoInstancia.HechosPorIdConcepto[idConcepto];
                    if (hechosTemporales) {
                        idsHechosConcepto = idsHechosConcepto.concat(hechosTemporales);
                    }
                }
            }
            return idsHechosConcepto;
        }
        /**
        * Obtiene los identificadores de hechos para los identificadores de contexto dados.
        * @param idContextos Identificadores de los contextos a manejar.
        * @param idsHechos Identificadores de los hechos iniciales a evaluar.
        * @return Identificadores de los hechos que pertenecen al conjunto de contextos dados.
        **/
        private obtenHechosIdPorContextoIds(idsContextos:Array<string>,idsHechos?:Array<string>):Array<string> {

            var index: number;
            var $self = this;
            var idContexto: string;
            var idHecho: string;
            var hecho: model.Hecho;
            var hechosTemporales: Array<string>;
            var idsHechosContexto:Array<string> = [];
            var diccionarioContextoAuxiliar = {};
            var diccionarioHechoAuxiliar = {};

            for (index = 0; index < idsContextos.length; index++) {

                idContexto = idsContextos[index];
                diccionarioContextoAuxiliar[idContexto] = idContexto;
            }
            if (idsHechos) {

                for (index = 0; index < idsHechos.length; index++) {

                    idHecho = idsHechos[index];
                    if (!diccionarioHechoAuxiliar[idHecho]) {

                        hecho = $self.documentoInstancia.HechosPorId[idHecho];
                        if (hecho && diccionarioContextoAuxiliar[hecho.IdContexto]) {

                            diccionarioHechoAuxiliar[idHecho] = idHecho;
                            idsHechosContexto.push(idHecho);
                        }
                    }
                }
            } else {

                for (idContexto in diccionarioContextoAuxiliar) {

                    hechosTemporales = $self.documentoInstancia.HechosPorIdContexto[idContexto];
                    if (hechosTemporales) {
                        idsHechosContexto = idsHechosContexto.concat(hechosTemporales);
                    }
                }
            }
            return idsHechosContexto;
        }
        /**
        * Obtiene los identificadores de hechos para los identificadores de contexto dados.
        * @param idsUnidades Conjunto de unidades a considerar.
        * @param idsHechos Identificadores de hechos para limitar el conjunto de datos a evaluar.
        * @return Lista de hechos pertenecientes al conjunto de unidades dado.
        **/
        private obtenHechosIdsPorUnidadesIds(idsUnidades: Array<string>, idsHechos: Array<string>):Array<string> {

            var index: number;
            var $self = this;
            var idUnidad: string;
            var idHecho: string;
            var hecho: model.Hecho;
            var hechosTemporales: Array<string>;
            var idsHechosUnidades = [];
            var diccionarioUnidadesAuxiliar = {};
            var diccionarioHechoAuxiliar = {};
            
            for (index = 0; index < idsUnidades.length; index++) {

                idUnidad = idsUnidades[index];
                diccionarioUnidadesAuxiliar[idUnidad] = idUnidad;
            }
            if (idsHechos) {

                for (index = 0; index < idsHechos.length; index++) {

                    idHecho = idsHechos[index];
                    if (!diccionarioHechoAuxiliar[idHecho]) {

                        hecho = $self.documentoInstancia.HechosPorId[idHecho];
                        if (hecho && diccionarioUnidadesAuxiliar[hecho.IdUnidad]) {

                            diccionarioHechoAuxiliar[idHecho] = idHecho;
                            idsHechosUnidades.push(idHecho);
                        }
                    }
                }
            } else {

                for (idUnidad in diccionarioUnidadesAuxiliar) {

                    hechosTemporales = $self.documentoInstancia.HechosPorIdUnidad[idUnidad];
                    if (hechosTemporales) {

                        idsHechosUnidades = idsHechosUnidades.concat(hechosTemporales);
                    }
                }
            }
            return idsHechosUnidades;
        }
        /**
        * Obtiene los identificadores de hechos para los identificadores de contexto dados.
        * @param idsUnidades Conjunto de unidades a considerar.
        * @param idsHechos Identificadores de hechos para limitar el conjunto de datos a evaluar.
        * @return Lista de hechos pertenecientes al conjunto de unidades dado.
        **/
        private obtenHechosIdsPorContextosIds(idsContextos: Array<string>, idsHechos: Array<string>): Array<string> {

            var index: number;
            var $self = this;
            var idContexto: string;
            var idHecho: string;
            var hecho: model.Hecho;
            var hechosTemporales: Array<string>;
            var idsHechosContexto = [];
            var diccionarioContextosAuxiliar = {};
            var diccionarioHechoAuxiliar = {};

            for (index = 0; index < idsContextos.length; index++) {

                idContexto = idsContextos[index];
                diccionarioContextosAuxiliar[idContexto] = idContexto;
            }
            if (idsHechos) {

                for (index = 0; index < idsHechos.length; index++) {

                    idHecho = idsHechos[index];
                    if (!diccionarioHechoAuxiliar[idHecho]) {

                        hecho = $self.documentoInstancia.HechosPorId[idHecho];
                        if (hecho && diccionarioContextosAuxiliar[hecho.IdContexto]) {

                            diccionarioHechoAuxiliar[idHecho] = idHecho;
                            idsHechosContexto.push(idHecho);
                        }
                    }
                }
            } else {

                for (idContexto in diccionarioContextosAuxiliar) {

                    hechosTemporales = $self.documentoInstancia.HechosPorIdContexto[idContexto];
                    if (hechosTemporales) {

                        idsHechosContexto = idsHechosContexto.concat(hechosTemporales);
                    }
                }
            }
            return idsHechosContexto;
        }
        /**
        * Obtiene las unidades que cumplen con los parametros de filtrado.
        * @param filtro DTO con la información de filtrado.
        * @return Lista con los identificadores de las únidades que aplican.
        **/
        public obtenIdsUnidadesPorFiltroUnidad(filtro: model.FiltroHechosDto): Array<string> {

            var $self = this;
            var diccionarioUnidadesEvaluar: { [idUnidad: string]: model.Unidad } = $self.documentoInstancia.UnidadesPorId;
            var idUnidad: string;
            var index: number;
            var idsUnidadesValidas: Array<string> = [];
            var diccionarioUnidadesValidas: { [idUnidad: string]: string } = {};
            var unidad: model.Unidad;

            if (filtro.IdUnidad && filtro.IdUnidad.length > 0) {

                diccionarioUnidadesEvaluar = $self.obtenSubconjutoDiccionario(diccionarioUnidadesEvaluar, filtro.IdUnidad);
            }



            for (idUnidad in diccionarioUnidadesEvaluar) {

                unidad = diccionarioUnidadesEvaluar[idUnidad];
                if (filtro.TipoUnidad && (filtro.TipoUnidad != unidad.Tipo)) {
                    continue;
                }
                if (filtro.Unidad && filtro.Unidad.length > 0) {

                    var contieneUnidad = false;
                    for (index = 0; index < filtro.Unidad.length; index++) {

                        var itemFiltroUnidad: model.Unidad = filtro.Unidad[index];
                        if (unidad.EstructuralmenteIgual(itemFiltroUnidad)) {

                            contieneUnidad = true;
                            break;
                        }
                    }
                    if (!contieneUnidad) {

                        continue;
                    }
                }
                if (!diccionarioUnidadesValidas[idUnidad]) {

                    diccionarioUnidadesValidas[idUnidad] = idUnidad;
                    idsUnidadesValidas.push(idUnidad);
                }
            }

            return idsUnidadesValidas;
        }

        /**
        * Obtiene un subconjunto con los elementos indicados del diccionario ingresado.
        * @param diccionario Diccionario del que se obtendrá el subconjunto.
        * @param llavesSubConjunto Elementos requeridos del diccionario.
        * @return Diccionario con los elementos solicitados.
        **/
        private obtenSubconjutoDiccionario<T>(diccionario: { [llave: string]: T }, llavesSubConjuto: Array<string>): { [llave: string]: T } {

            var index: number;
            var subConjunto: { [llave: string]: T } = {};
            var llave: string;
            var elemento: T;
            for (index = 0; index < llavesSubConjuto.length; index++) {

                llave = llavesSubConjuto[index];
                elemento = diccionario[llave];
                if (elemento) {

                    subConjunto[llave] = elemento;
                }
            }
            return subConjunto;
        }

        /**
        * Evalua si el contexto dado contiene una conbinación de dimensiones tal que cumpla con la combinación de dimensiones dada en el filtro.
        * @param contexto Contexto a evaluar.
        * @param filtro Filtro con los valires dimensionales.
        **/
        private contenidoEnGruposParcialesDimensionesFiltro(contexto: model.Contexto, filtro: model.FiltroHechosDto): boolean {

            if (!contexto.ContieneInformacionDimensional && !contexto.Entidad.ContieneInformacionDimensional) {

                return false;
            }
            var grupoDimensionesContexto: Array<model.DimensionInfo> = (contexto.ValoresDimension && contexto.ValoresDimension.length > 0) ?
                contexto.ValoresDimension : contexto.Entidad.ValoresDimension;
            if (!grupoDimensionesContexto || grupoDimensionesContexto.length == 0) {

                return false;
            }
            var indexGroup: number;
            var indexDimContext: number;
            var dimensionGroup: Array<model.DimensionInfo>;
            var dimensionFilter: model.DimensionInfo;
            var dimensionContexto: model.DimensionInfo;
            var matchGroup: boolean;
            var dimConteined: boolean;
            var contenido = false;
            var index: number;
            for (index = 0; index < filtro.ConjuntosParcialesDimensiones.length; index++) {

                matchGroup = true;
                dimensionGroup = filtro.ConjuntosParcialesDimensiones[index];

                if (!dimensionGroup) {

                    continue;
                }
                for (indexGroup = 0; indexGroup < dimensionGroup.length; indexGroup++) {

                    dimConteined = false;
                    dimensionFilter = dimensionGroup[indexGroup];
                    for (indexDimContext = 0; indexDimContext < grupoDimensionesContexto.length; indexDimContext++) {

                        dimensionContexto = grupoDimensionesContexto[indexDimContext];

                        if (dimensionFilter.QNameDimension != dimensionContexto.QNameDimension) {

                            continue;
                        }
                        if (dimensionFilter.Explicita != undefined && dimensionFilter.Explicita != dimensionContexto.Explicita) {

                            continue;
                        }
                        if (dimensionFilter.QNameItemMiembro && dimensionFilter.QNameItemMiembro != dimensionContexto.QNameItemMiembro) {

                            continue;
                        }
                        if (dimensionFilter.ElementoMiembroTipificado && dimensionFilter.ElementoMiembroTipificado != dimensionContexto.ElementoMiembroTipificado) {

                            continue;
                        }
                        dimConteined = true;
                        break;
                    }
                    if (!dimConteined) {
                        matchGroup = false;
                        break;
                    }
                }
                if (matchGroup) {
                    contenido = true;
                    break;
                }
            }

            return contenido;
        }
        /**
        * Evalua si el contexto dado contiene una conbinación de dimensiones tal que cumpla con la combinación de dimensiones dada en el filtro.
        * @param contexto Contexto a evaluar.
        * @param filtro Filtro con los valires dimensionales.
        **/
        private contenidoEnGruposExactosDimensionesFiltro(contexto: model.Contexto, filtro: model.FiltroHechosDto): boolean {

            if (!contexto.ContieneInformacionDimensional && !contexto.Entidad.ContieneInformacionDimensional) {

                return false;
            }
            var grupoDimensionesContexto: Array<model.DimensionInfo> = (contexto.ValoresDimension && contexto.ValoresDimension.length > 0) ?
                contexto.ValoresDimension : contexto.Entidad.ValoresDimension;
            if (!grupoDimensionesContexto || grupoDimensionesContexto.length == 0) {

                return false;
            }
            var indexGroup: number;
            var indexDimContext: number;
            var dimensionGroup: Array<model.DimensionInfo>;
            var dimensionFilter: model.DimensionInfo;
            var dimensionContexto: model.DimensionInfo;
            var matchGroup: boolean;
            var dimConteined: boolean;
            var contenido = false;
            var index: number;
            for (index = 0; index < filtro.ConjuntosExactosDimensiones.length; index++) {

                matchGroup = true;
                dimensionGroup = filtro.ConjuntosExactosDimensiones[index];
                if (!dimensionGroup || dimensionGroup.length != grupoDimensionesContexto.length) {

                    continue;
                }
                for (indexDimContext = 0; indexDimContext < grupoDimensionesContexto.length; indexDimContext++) {

                    dimConteined = false;
                    dimensionContexto = grupoDimensionesContexto[indexDimContext];
                    for (indexGroup = 0; indexGroup < dimensionGroup.length; indexGroup++) {

                        dimensionFilter = dimensionGroup[indexGroup];
                        if (dimensionFilter.QNameDimension != dimensionContexto.QNameDimension) {

                            continue;
                        }
                        if (dimensionFilter.Explicita != undefined && dimensionFilter.Explicita != dimensionContexto.Explicita) {

                            continue;
                        }
                        if (dimensionFilter.QNameItemMiembro && dimensionFilter.QNameItemMiembro != dimensionContexto.QNameItemMiembro) {

                            continue;
                        }
                        if (dimensionFilter.ElementoMiembroTipificado && dimensionFilter.ElementoMiembroTipificado != dimensionContexto.ElementoMiembroTipificado) {

                            continue;
                        }
                        dimConteined = true;
                        break;
                    }
                    if (!dimConteined) {
                        matchGroup = false;
                        break;
                    }
                }
                if (matchGroup) {
                    contenido = true;
                    break;
                }
            }

            return contenido;
        }
        /**
        * Obtiene los dientificadores de los contextos validos.
        * @param filtro Filtro que será aplicado a los contextos.
        * @param subconjuntoContextosIds Subconjunto opcional de identificadores de contexto para limitar los contextos a evaluar.
        * @return Listado con los identificadores de los contextos a evaluar.
        **/
        public obtenIdsContextosPorFiltro(filtro: model.FiltroHechosDto, subconjuntoContextosIds?: Array<string>): Array<string> {

            var $self = this;
            var contextosEvaluar: { [idContexto: string]: model.Contexto } = $self.documentoInstancia.ContextosPorId;
            var idsContextosValidos: Array<string> = [];
            var idsContextosFechas: Array<string> = [];
            var diccionarioContextosValidos: { [idContexto: string]: string } = {};
            var idContexto: string;
            var contexto: model.Contexto;
            var index: number;
            var contenido: boolean;
            var periodo: model.PlantillaPeriodo;
            var definicionPlantilla: model.DefinicionDePlantillaXbrl = $self.getDefinicionPlantilla();
            if (filtro.IdContexto && filtro.IdContexto.length > 0) {

                contextosEvaluar = $self.obtenSubconjutoDiccionario(contextosEvaluar, filtro.IdContexto);
            } 
            if (subconjuntoContextosIds && subconjuntoContextosIds.length > 0) {

                contextosEvaluar = $self.obtenSubconjutoDiccionario(contextosEvaluar, subconjuntoContextosIds);
            }
            if (filtro.Periodo && filtro.Periodo.length > 0) {

                for (index = 0; index < filtro.Periodo.length; index++) {

                    periodo = filtro.Periodo[index];
                    periodo.evaluaVariablesPlantilla(definicionPlantilla);
                    idsContextosFechas = idsContextosFechas.concat($self.documentoInstancia.ContextosPorFecha[periodo.IdGrupoFechas]);
                }
                if (idsContextosFechas && idsContextosFechas.length > 0) {

                    contextosEvaluar = $self.obtenSubconjutoDiccionario(contextosEvaluar, idsContextosFechas);
                }
            }

            for (idContexto in contextosEvaluar) {

                contexto = contextosEvaluar[idContexto];
                if (filtro.ClaveEntidad && filtro.ClaveEntidad.length > 0 && filtro.ClaveEntidad.indexOf(contexto.Entidad.Id) == -1) {

                    continue;
                }
                if (filtro.ConjuntosParcialesDimensiones && filtro.ConjuntosParcialesDimensiones.length > 0 && !$self.contenidoEnGruposParcialesDimensionesFiltro(contexto, filtro)) {

                    continue;
                }
                if (filtro.ConjuntosExactosDimensiones && filtro.ConjuntosExactosDimensiones.length > 0 && !$self.contenidoEnGruposExactosDimensionesFiltro(contexto, filtro)) {

                    continue;
                }
                idsContextosValidos.push(idContexto);
            }

            return idsContextosValidos;
        }



        /**
        * Busca los hechos que coincidan con la definición del filtro.
        * @param filtro Filtro a evaluar.
        * @return Listado de hechos encontrados.
        **/
        public buscaHechosPorFiltro(filtro: model.FiltroHechosDto): Array<string> {

            var $self = this;
            
            var index: number;
            var indexHecho: number;
            var idHecho: string;
            var idConcepto: string;
            var idContexto: string;
            var idUnidad: string;
            var hecho: model.Hecho;
            var concepto: model.Concepto;
            var contexto: model.Contexto;
            var idsContextos:Array<string> = [];
            var idsHechosConcepto: Array<string> = null;
            var idsHechosContexto: Array<string> = null;
            var idsHechosUnidad: Array<string> = null;
            var idsHechos: Array<string> = filtro.IdHecho && filtro.IdHecho.length > 0 ? filtro.IdHecho : null;
            var hechosTemporales: Array<string>;
            var diccionarioHechoAuxiliar: { [idHecho: string]: string };
            var diccionarioContextoAuxiliar: { [idContexto: string]: string}
            var hecho: model.Hecho;

            if (filtro.IdConcepto && filtro.IdConcepto.length > 0) {
                
                idsHechos = $self.obtenHechosIdsPorIdsConcepto(filtro.IdConcepto, idsHechos);
                if (idsHechos.length == 0) {

                    return idsHechos;
                }
            }
            var filtrarPorUnidad = (filtro.IdUnidad && filtro.IdUnidad.length > 0) || (filtro.TipoUnidad > 0);
            if (filtrarPorUnidad) {

                var idsUnidadesValidas = $self.obtenIdsUnidadesPorFiltroUnidad(filtro);
                if (idsUnidadesValidas && idsUnidadesValidas.length > 0) {

                    idsHechos = $self.obtenHechosIdsPorUnidadesIds(idsUnidadesValidas, idsHechos);
                    if (idsHechos.length == 0) {

                        return idsHechos;
                    }
                } else {

                    return [];
                }
            }

            var filtrarPorContexto = (filtro.IdContexto && filtro.IdContexto.length > 0) ||
                (filtro.Periodo && filtro.Periodo.length > 0) ||
                (filtro.ClaveEntidad && filtro.ClaveEntidad.length > 0) ||
                (filtro.ConjuntosParcialesDimensiones && filtro.ConjuntosParcialesDimensiones.length > 0) ||
                (filtro.ConjuntosExactosDimensiones && filtro.ConjuntosExactosDimensiones.length > 0);


            var contextosHechos = idsHechos && idsHechos.length > 0 ? $self.obtenIdsContextosHechos(idsHechos) : null;
            var idsContextosValidos: Array<string> = $self.obtenIdsContextosPorFiltro(filtro, contextosHechos);
            idsHechos = $self.obtenHechosIdsPorContextosIds(idsContextosValidos, idsHechos);
            return idsHechos ? idsHechos : [];
        }

        /**
        * Evalua dos contextos indicando si el contexto a comparar es mayor que el contexto origen.
        * @param contextoOrigen Contexto original que será comparado.
        * @param contextoComparar Contexto contra el que se compara.
        * @return Si el contexto a comparar es mayor que el contexto origen.
        **/
        private esContextoMaryor(contextoOrigen: model.Contexto, contextoComparar: model.Contexto): boolean {

            var esMayor: boolean = false;
            var fechaContextoOrigen: Date;
            var fechaContextoComparar: Date;

            if (contextoComparar.Periodo.Tipo == model.Periodo.PARA_SIEMPRE) {

                esMayor = true;
            }
            if (!esMayor) {
                if (contextoOrigen.Periodo.Tipo == model.Periodo.DURACION) {

                    fechaContextoOrigen = contextoOrigen.Periodo.FechaFin;
                } else if (contextoOrigen.Periodo.Tipo == model.Periodo.INSTANTE) {

                    fechaContextoOrigen = contextoOrigen.Periodo.FechaFin;
                }

                if (contextoComparar.Periodo.Tipo == model.Periodo.DURACION) {

                    fechaContextoComparar = contextoOrigen.Periodo.FechaFin;
                } else if (contextoComparar.Periodo.Tipo == model.Periodo.INSTANTE) {

                    fechaContextoComparar = contextoOrigen.Periodo.FechaFin;
                }

                if (fechaContextoComparar > fechaContextoOrigen) {

                    esMayor = true;
                }
            }

            return esMayor;
        }
        /**
        * Obtiene el hecho reportado en la fecha más antigua.
        * @param listaIdsHechos Lista con los identificadores de hechos a evaluar.
        * @return Hecho reportado con mayor fecha.
        **/
        public ObtenHechoMasReciente(listaIdsHechos: Array<string>): model.Hecho {

            var $self = this;
            var hechoMayor: model.Hecho;
            for (var index: number = 0; index < listaIdsHechos.length; index++) {

                var itemHecho: model.Hecho = $self.documentoInstancia.HechosPorId[listaIdsHechos[index]];
                if (!itemHecho) {
                    continue;
                }
                if (hechoMayor) {

                    var contextoOrigen = $self.documentoInstancia.ContextosPorId[hechoMayor.IdContexto];
                    var contextoComparar = $self.documentoInstancia.ContextosPorId[itemHecho.IdContexto];
                    if (contextoOrigen && contextoOrigen && $self.esContextoMaryor(contextoOrigen, contextoComparar)) {

                        hechoMayor = itemHecho;
                    }
                } else {

                    hechoMayor = itemHecho;
                }
            }
            return itemHecho;
        }
        /**
         * Inicializa las variables adicionales de la descripción de la formula.
         * @param descripcionFormula Descripción a evaluar.
         * @param idFormula Identificador de la formula.
         * @param idHechoBase Hecho base.
         * @return La descripción con las variables sustituidas por la descirpción del concepto.
         */
        public remplazarVariablesAdicionalesDescripcionFormula(descripcionFormula: string, idFormula: string, idHechoBase?: model.Hecho): string {

            var descripcionEvaluada = descripcionFormula;
            try {
                var $self = this;
                var expresionRegular = new RegExp("\\{variable\\d+\\}", "g");

                var taxonomia = $self.documentoInstancia.Taxonomia;
                if (expresionRegular.test(descripcionFormula)) {
                    var formula = $self.obtenDefinicionFormulaPorId(idFormula);
                    if (formula) {
                        var idVariable: string;
                        for (idVariable in formula.DefinicionVariables) {

                            var expresionVariable = new RegExp("\\{" + idVariable + "\\}", "g");
                            if (expresionVariable.test(descripcionEvaluada)) {

                                var definicionVariable = formula.DefinicionVariables[idVariable];
                                if (definicionVariable.IdConcepto) {

                                    var etiquetaConcepto = taxonomia.obtenerEtiquetaDeConcepto(definicionVariable.IdConcepto, model.ConstantesComunes.ROL_ETIQUETA_DEFAULT, model.ConstantesComunes.IDIOMA_DEFAULT);
                                    descripcionEvaluada = descripcionEvaluada.replace(expresionVariable, etiquetaConcepto);
                                }
                            }
                        }
                    }
                }
            } catch (exception) {

                console.error(exception);
            }

            return descripcionEvaluada;
        }
        /**
         * Aplica filtros especiales para la proyección de un hipercubo.
         * @param listaHechosIds Lista de identificadores de hechos a evaluar.
         * @param proyeccion Proyección resultante.
         */
        public AplicaFiltroProyeccionContextos(listaHechosIds: Array<string>, proyeccion: model.XbrlConfiguracionProyeccionHipercubo): Array<string> {

            var documentoInstancia = this.documentoInstancia;
            var listaHechosProyeccion = new Array<string>();
            var contextosAplica: {[idContexto:string]:boolean} = {};
            var indexHecho: number;

            if (listaHechosIds && listaHechosIds.length > 0) {

                if (proyeccion.FiltrosContextoPorValorConcepto) {


                    for (var idConcepto in proyeccion.FiltrosContextoPorValorConcepto) {

                        var idsHechosPorConcepto = documentoInstancia.HechosPorIdConcepto[idConcepto];
                        if (idsHechosPorConcepto) {

                            var valor = proyeccion.FiltrosContextoPorValorConcepto[idConcepto];
                            for (indexHecho = 0; indexHecho < idsHechosPorConcepto.length; indexHecho++) {
                                var idHecho = idsHechosPorConcepto[indexHecho];
                                var hecho = documentoInstancia.HechosPorId[idHecho];
                                if (hecho && hecho.ValorHecho == valor) {

                                    contextosAplica[hecho.IdContexto] = true;
                                }
                            }
                        }
                    }
                }

                for (var indexHecho = 0; indexHecho < listaHechosIds.length; indexHecho++) {

                    var idHecho = listaHechosIds[indexHecho];
                    var hecho = documentoInstancia.HechosPorId[idHecho];
                    if (hecho && contextosAplica[hecho.IdContexto]) {

                        listaHechosProyeccion.push(idHecho);
                    }
                }
            }   
            return listaHechosProyeccion;
        }

        /**
         * Constructor de la clase
         * 
         * @param $http el servicio angular para invocaciones http
         * @param $q el servicio angular para operaciones en cola.
         * @param abaxXBRLRequestService Servicio para el manejo de peticiones al servidor.
         */
        constructor($http: ng.IHttpService, $q: ng.IQService, abaxXBRLRequestService: shared.service.AbaxXBRLRequestService) {
            this.abaxXBRLViewerApiPath = "DocumentoInstancia/ObtenerModeloVisorXbrl";
            this.abaxXBRLSaveDocApiPath = "DocumentoInstancia/GuardarDocumentoInstanciaXbrl";
            this.abaxXBRLCargarDocApiPath = "DocumentoInstancia/CargarDocumentoInstanciaXbrl";
            this.abaxXBRLHistoricoVersionesApiPath = "DocumentoInstancia/ObtenerVersionesDocumentoInstancia";
            this.abaxXBRLUsuariosDocumentoApiPath = "DocumentoInstancia/BuscarUsuariosParaCompartir";
            this.abaxXBRLGuardarUsuariosDocumentoApiPath = "DocumentoInstancia/ActualizarUsuariosAsignadosDocumentoInstancia";
            this.abaxXBRLObtenerTaxonomiasApiPath = "DocumentoInstancia/ObtenerTaxonomiasRegistradasJsonResult";
            this.abaxXBRLObtenerDefinicionTaxonomia = "DocumentoInstancia/ObtenerDefinicionTaxonomia";
            this.abaxXBRLBloquearLiberarDocumentoInstanciaApiPath = "DocumentoInstancia/BloquearLiberarDocumentoInstancia";
            this.abaxXBRLImportarNotasDocumentoApiPath = "DocumentoInstancia/ImportarNotasDocumentoInstancia";
            this.abaxXBRLCargarTaxonomiaUrlApiPath = "DocumentoInstancia/CargarTaxonomiaPorUrl";
            this.abaxXBRLObtenerDocumentosUsuarioEnListaUnificada = "DocumentoInstancia/ObtenerDocumentosUsuarioEnListaUnificada";
            this.abaxXBRLObtenerDocumentosVersion = "DocumentoInstancia/ObtenerDocumentosEnvioVersion";
            this.abaxXBRLAgregarDocumentoInstanciaAComparar = "DocumentoInstancia/AgregarDocumentoInstanciaAComparar";
            this.abaxXBRLImportarHechosDocumentoInstancia = "DocumentoInstancia/ImportarHechosDocumentoInstancia";
            this.httpService = $http;
            this.qService = $q;
            this.abaxXBRLRequestService = abaxXBRLRequestService;
            this.definicionPlantilla = null;
            this.mapeoContextosPlantillaAContextosDocumentoInstancia = {};
            this.mapeoUnidadesPlantillaAUnidadesDocumentoInstancia = {};
            this.mapeoHechosPlantillaAHechosDocumentoInstancia = {};
            this.unidadPorIdUnidadPlantilla = {};
            this.contextoPorIdContextoPlantilla = {};
            this.hechoPorIdHechoPlantilla = {};
            this.descripcionRolesPorConcepto = {};

            //Obtener los datos de sesión del usuario
            var self = this;
            var sesion = shared.service.AbaxXBRLSessionService.getSesionInmediate();
            self.idUsuarioActivo = sesion.Usuario.IdUsuario;
            self.idEmisoraActiva = sesion.IdEmpresa;
            self.nombreCompletoUsuarioActivo = sesion.Usuario.Nombre + ' ' + sesion.Usuario.ApellidoPaterno + ' ' + sesion.Usuario.ApellidoMaterno;


        }
    }

}