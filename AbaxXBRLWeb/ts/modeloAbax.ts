///<reference path="../scripts/typings/angularjs/angular.d.ts" /> 
///<reference path="../scripts/typings/angularjs/angular-route.d.ts" />
///<reference path="../scripts/typings/moment/moment.d.ts" />
///<reference path="../scripts/typings/math/math.d.ts" />
///<reference path="../scripts/typings/decimal.js/decimal.js.d.ts" /> 
module abaxXBRL.model {

    /**
     * Definición del contrato para la deserialización de un objeto JSON a su equivalente en TS.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export interface Serializable<T> {
        /**
        * Deserializa un objecto JS a su equivalente Typescript
        * @param input el objeto JS a deserializar
        * @return el objeto deserializado de tipo Typescript
        */
        deserialize(input: Object): T;
    }

    /** 
     * Contiene el resultado de una operación remota.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class ResultadoOperacion {

        /** Indica si la operación tuvo éxito o no */
        Resultado: boolean;

        /** Contiene los datos extras asociados a la respuesta */
        InformacionExtra: any;

        /** Contiene el mensaje regresado por la invocación remota */
        Mensaje: string;
        /** Mensaje detallado de la excepción en el servidor */
        Excepcion: string;
    }

    /** 
     * Representa una nota al pie contenida en un documento instancia.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class NotaAlPie implements Serializable<NotaAlPie> {

        /** La clave del idioma en el que se expresó la nota al pie de página */
        Idioma: string;

        /** El valor de la nota al pie de página */
        Valor: string;

        /** Indica que la nota al pie de página se encuentra editando del hecho*/
        NotaEditando: boolean;

        deserialize(input) {
            this.Idioma = input.Idioma;
            this.Valor = input.Valor;
            return this;
        }
    }

    /**
     * Representa una medida contenida dentro de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class Medida implements Serializable<Medida> {

        /** El nombre de la medida */
        Nombre: string;

        /**El espacio de nombres de la medida */
        EspacioNombres: string;

        /** La etiqueta asignada a la medida */
        Etiqueta: string;

        /** Indica si la medida es personalizada para un editor genérico o si pertenece a alguna moneda del grupo iso o propias de xbrl*/
        EsMedidaPersonalizada: boolean;

        /**
         * Compara una medida con esta medida y determina si son estructuralmente iguales
         *
         * @param medida la medida contra la cual se deberá comparar esta medida.
         * @return true si las medidas son estructuralmente iguales. false en cualquier otro caso.
         */
        EstructuralmenteIgual(medida: Medida): boolean {
            var resultado: boolean = true;

            if (!medida || medida == null) {
                resultado = false;
            } else {
                if (this.Nombre != medida.Nombre || this.EspacioNombres != medida.EspacioNombres) {
                    resultado = false;
                }
            }

            return resultado;
        }

        deserialize(input): Medida {
            this.Nombre = input.Nombre;
            this.EspacioNombres = input.EspacioNombres;
            this.Etiqueta = input.Etiqueta;
            return this;
        }
    }

    /**
     * Representa una unidad contenida dentro de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class Unidad implements Serializable<Unidad> {

        /** Indica que la unidad sólo se compone de una medida */
        public static get MEDIDA(): number { return 1; }

        /** Indica que la unidad se compone de un numerador y denominador */
        public static get DIVISORIA(): number { return 2; }

        /** El identificador único de la unidad dentro del documento instancia */
        Id: string;

        /** El tipo de la unidad */
        Tipo: number;

        /** Contiene la colección de medidas que conforman la unidad */
        Medidas: Array<Medida>;

        /** Contiene la colección de medidas que conforman el numerador de la unidad */
        MedidasNumerador: Array<Medida>;

        /** Contiene la colección de medidas que conforman el denominador de la unidad */
        MedidasDenominador: Array<Medida>;

        /**
         * Compara una unidad con esta unidad y determina si son estructuralmente iguales
         *
         * @param unidad la unidad contra la cual se deberá comparar esta unidad.
         * @return true si las unidades son estructuralmente iguales. false en cualquier otro caso.
         */
        EstructuralmenteIgual(unidad: Unidad): boolean {
            var resultado: boolean = true;

            if (!unidad || unidad == null) {
                resultado = false;
            } else {
                if (this.Tipo != unidad.Tipo) {
                    resultado = false;
                } else {
                    if (this.Tipo == Unidad.MEDIDA) {
                        resultado = this.medidasEquivalentes(this.Medidas, unidad.Medidas);
                    } else if (this.Tipo == Unidad.DIVISORIA) {
                        resultado = this.medidasEquivalentes(this.MedidasNumerador, unidad.MedidasNumerador) && this.medidasEquivalentes(this.MedidasDenominador, unidad.MedidasDenominador);
                    }
                }
            }

            return resultado;
        }

        /**
         * Compara dos arreglos de medidas para saber si sus contenidos son equivalentes.
         * 
         * @param medidas el primer conjunto de medidas a tomar como referencia.
         * @param medidasACompara el segundo conjunto de medidas contra el que se comparará la referencia.
         * @return true si los conjuntos de medidas son equivalentes. false en cualquier otro caso.
         */
        medidasEquivalentes(medidas: Array<Medida>, medidasAComparar: Array<Medida>): boolean {
            var resultado: boolean = true;

            if ((!medidas || medidas == null) && (!medidasAComparar || medidasAComparar == null)) {
                return true;
            }

            if ((!medidas || medidas == null) || (!medidasAComparar || medidasAComparar == null)) {
                return false;
            }

            if (medidas.length != medidasAComparar.length) {
                resultado = false;
            } else {
                var copiaComparar = medidasAComparar.slice();
                for (var i = 0; i < medidas.length; i++) {
                    var medidaEncontrada: boolean = false;
                    for (var j = 0; j < copiaComparar.length; j++) {
                        if (medidas[i].EstructuralmenteIgual(copiaComparar[i])) {
                            medidaEncontrada = true;
                            copiaComparar.splice(j, 1);
                            break;
                        }
                    }
                    if (!medidaEncontrada) {
                        resultado = false;
                        break;
                    }
                }
            }

            return resultado;
        }

        /**
         * Obtiene una cadena con la descripción de la unidad.
         */
        describir(): string {
            var descripcion = '';

            if (this.Tipo == Unidad.MEDIDA) {
                descripcion = this.describirMedidas(this.Medidas);
            } else if (this.Tipo == Unidad.DIVISORIA) {
                descripcion = this.describirMedidas(this.MedidasNumerador) + ' / ' + this.describirMedidas(this.MedidasDenominador);
            }

            return descripcion;
        }

        /**
         * Obtiene una cadena con la descripción de las medidas.
         */
        describirMedidas(medidas: Array<Medida>): string {
            var descripcion = '';
            for (var i = 0; i < medidas.length; i++) {
                descripcion = medidas[i].Nombre;
                if ((i + 1) < medidas.length) {
                    descripcion = ' * ';
                }
            }
            return descripcion;
        }

        deserialize(input): Unidad {
            this.Id = input.Id;
            this.Tipo = input.Tipo;

            var i = 0;
            if (input.Medidas) {
                this.Medidas = new Array<Medida>();
                for (i = 0; i < input.Medidas.length; i++) {
                    this.Medidas.push(new Medida().deserialize(input.Medidas[i]));
                }
            }
            if (input.MedidasNumerador) {
                this.MedidasNumerador = new Array<Medida>();
                for (i = 0; i < input.MedidasNumerador.length; i++) {
                    this.MedidasNumerador.push(new Medida().deserialize(input.MedidasNumerador[i]));
                }
            }
            if (input.MedidasDenominador) {
                this.MedidasDenominador = new Array<Medida>();
                for (i = 0; i < input.MedidasDenominador.length; i++) {
                    this.MedidasDenominador.push(new Medida().deserialize(input.MedidasDenominador[i]));
                }
            }
            return this;
        }
    }

    /**
     * Representa un periodo de reporte contenido dentro de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class Periodo implements Serializable<Periodo> {

        /** Indica que el periodo representa una fecha instante */
        public static get INSTANTE(): number { return 1; }

        /** Indica que el periodo representa un intervalo de fechas. */
        public static get DURACION(): number { return 2; }

        /** Indica que el periodo representa un intervalo "para siempre". */
        public static get PARA_SIEMPRE(): number { return 3; }

        /** El tipo de periodo */
        Tipo: number;

        /** La fecha que contiene el instante de reporte */
        FechaInstante: Date;

        /** La fecha que contiene la fecha de inicio de la duración de tiempo de este periodo */
        FechaInicio: Date;

        /** La fecha que contiene la fecha de fin de la duración de tiempo de este periodo */
        FechaFin: Date;

        /**
         * Compara dos elementos de la clase Periodo y determina si son estructuralmente iguales.
         *
         * @param periodo el periodo contra el cual se comparará este objeto Periodo.
         * @return true si los dos objetos periodo son estructuralmente iguales. false en cualquier otro caso.
         */
        EstructuralmenteIgual(periodo: Periodo): boolean {
            var resultado: boolean = true;

            if (!periodo || periodo == null) {
                resultado = false
            } else {
                if (this.Tipo !== periodo.Tipo) {
                    resultado = false;
                } else {
                    if (this.Tipo == Periodo.INSTANTE) {
                        if (((this.FechaInstante && this.FechaInstante != null) && (!periodo.FechaInstante || periodo.FechaInstante == null)) || ((periodo.FechaInstante && periodo.FechaInstante != null) && (!this.FechaInstante || this.FechaInstante == null))) {
                            return false;
                        } else {
                            if (this.FechaInstante && this.FechaInstante != null && periodo.FechaInstante && periodo.FechaInstante != null && this.FechaInstante.getTime() != periodo.FechaInstante.getTime()) {
                                resultado = false;
                            }
                        }
                    } else {
                        if (((this.FechaInicio && this.FechaInicio != null) && (!periodo.FechaInicio || periodo.FechaInicio == null)) || ((periodo.FechaInicio && periodo.FechaInicio != null) && (!this.FechaInicio || this.FechaInicio == null))) {
                            return false;
                        } else {
                            if (this.FechaInicio && this.FechaInicio != null && periodo.FechaInicio && periodo.FechaInicio != null && this.FechaInicio.getTime() != periodo.FechaInicio.getTime()) {
                                resultado = false;
                            }
                        }
                        if (((this.FechaFin && this.FechaFin != null) && (!periodo.FechaFin || periodo.FechaFin == null)) || ((periodo.FechaFin && periodo.FechaFin != null) && (!this.FechaFin || this.FechaFin == null))) {
                            return false;
                        } else {
                            if (this.FechaFin && this.FechaFin != null && periodo.FechaFin && periodo.FechaFin != null && this.FechaFin.getTime() != periodo.FechaFin.getTime()) {
                                resultado = false;
                            }
                        }
                    }
                }
            }

            return resultado;
        }

        /**
         * Obtiene una cadena con la descripción del periodo.
         */
        describir(): string {
            var descripcion = '';
            if (this.Tipo == Periodo.INSTANTE) {
                descripcion = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_PERIODO_REPORTE_AL') + moment(this.FechaInstante).utc().format(ConstantesComunes.FORMATO_FECHA);
            } else if (this.Tipo == Periodo.DURACION) {
                descripcion = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_PERIODO_REPORTE_DEL_AL', {
                    fechaInicio: moment(this.FechaInicio).utc().format(ConstantesComunes.FORMATO_FECHA),
                    fechaFin: moment(this.FechaFin).utc().format(ConstantesComunes.FORMATO_FECHA)
                });
            } else if (this.Tipo == Periodo.PARA_SIEMPRE) {
                descripcion = shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_PERIODO_POR_SIEMPRE');
            }
            return descripcion;
        }

        deserialize(input):Periodo {
            this.Tipo = input.Tipo;
            if (input.FechaInstante) {
                if (typeof input.FechaInstante == 'string') {
                    this.FechaInstante = moment(input.FechaInstante).utc().toDate();
                } else {
                    this.FechaInstante = input.FechaInstante;
                }
            }
            if (input.FechaInicio) {
                if (typeof input.FechaInicio == 'string') {
                    this.FechaInicio = moment(input.FechaInicio).utc().toDate();
                } else {
                    this.FechaInicio = input.FechaInicio;
                }
            }
            if (input.FechaFin) {
                if (typeof input.FechaFin == 'string') {
                    this.FechaFin = moment(input.FechaFin).utc().toDate();
                } else {
                    this.FechaFin = input.FechaFin;
                }
            }
            return this;
        }
    }

    /**
     * Representa un valor de una dimensión en un contexto contenido dentro de un documento instancia XBRL.
     * @author Emigdio Hernández
     * @version 1.0
     */
    export class DimensionInfo implements Serializable<DimensionInfo>{

        /** Indica si la dimensión es explicita o implicita */
        Explicita: boolean;
        /** Identificador de la dimensión a la que pertence este miembro */
        IdDimension: string;
        /** Miembro de la dimensión en caso que sea explícita */
        IdItemMiembro: string;
        /** Nombre completo del elemento de dimension*/
        QNameDimension: string;
        /**Nombre completo del elemento Item de una dimensión explícita*/
        QNameItemMiembro: string;
        /*Miembro de la dimensión en caso que sea tipificada*/
        ElementoMiembroTipificado: string;

        /** Representación en cadena JSON del elemento miembro tipificado */
        TextoMiembroTipificado: string;
        /** Objeto json que representa al elemento miembro tipificado */
        JsonMiembroTipificado: any;

        /**
         * Verifica que dos elementos DimensionInfo sean estructualmente iguales.
         *
         * @param miembroComparar el elemento contra el cual se va a comparar este objeto DimensionInfo
         * @return true si los elementos son estructuralmente iguales. false en cualquier otro caso.
         */
        EstructuralmenteIgual(miembroComparar: DimensionInfo): boolean {

            var resultado: boolean = true;

            if (!miembroComparar || miembroComparar == null) {
                resultado = false;
            } else {

                if (this.Explicita != miembroComparar.Explicita || this.QNameDimension !== miembroComparar.QNameDimension) {
                    resultado = false;
                } else {

                    if (this.Explicita) {
                        if (this.QNameItemMiembro !== miembroComparar.QNameItemMiembro) {
                            resultado = false;
                        }
                    } else {
                        if (((this.ElementoMiembroTipificado && this.ElementoMiembroTipificado != null) && (!miembroComparar.ElementoMiembroTipificado || miembroComparar.ElementoMiembroTipificado == null)) ||
                            ((!this.ElementoMiembroTipificado || this.ElementoMiembroTipificado == null) && (miembroComparar.ElementoMiembroTipificado && miembroComparar.ElementoMiembroTipificado != null))) {
                            resultado = false;
                        } else {
                            if (this.ElementoMiembroTipificado && this.ElementoMiembroTipificado != null && miembroComparar.ElementoMiembroTipificado && miembroComparar.ElementoMiembroTipificado != null) {

                                if (!(this.TextoMiembroTipificado && this.TextoMiembroTipificado != null)) {
                                    this.CreatTextoElementoMiembroTipificado();
                                }
                                if (!(miembroComparar.TextoMiembroTipificado && miembroComparar.TextoMiembroTipificado != null)) {
                                    miembroComparar.CreatTextoElementoMiembroTipificado();
                                }

                                if (this.TextoMiembroTipificado && this.TextoMiembroTipificado != null && miembroComparar.TextoMiembroTipificado && miembroComparar.TextoMiembroTipificado != null) {
                                    //Comparar mediante la representación en json
                                    /*if (!abaxXBRL.utils.XmlUtils.CompararNodosXmlJson(this.JsonMiembroTipificado, miembroComparar.JsonMiembroTipificado)){
                                        resultado = false;
                                    } */
                                    if (this.TextoMiembroTipificado != miembroComparar.TextoMiembroTipificado) {
                                        resultado = false;
                                    }

                                } else {
                                    //Comparar mediante XML Util    
                                    if (!abaxXBRL.utils.XmlUtils.EsNodoEquivalente(this.ElementoMiembroTipificado, miembroComparar.ElementoMiembroTipificado)) {
                                        resultado = false;
                                    }
                                }

                            }
                        }
                    }
                }
            }
            return resultado;
        }

        /**
         * Verifica que dos elementos DimensionInfo tengan información de la misma dimensión.
         *
         * @param miembroComparar el elemento contra el cual se va a comparar este objeto DimensionInfo
         * @return true si los elementos tienen información de la misma dimensión. false en cualquier otro caso.
         */
        EsInfoMismaDimension(miembroComparar: DimensionInfo): boolean {

            var resultado: boolean = true;

            if (!miembroComparar || miembroComparar == null) {
                resultado = false;
            } else {
                if (this.Explicita != miembroComparar.Explicita || this.QNameDimension !== miembroComparar.QNameDimension) {
                    resultado = false;
                }
            }
            return resultado;
        }

        /**
        * Crea el resumen en texto del elemento miembro tipificado para
        * facilitar comparaciones posteriores
        */
        CreatTextoElementoMiembroTipificado() {

            if (this.ElementoMiembroTipificado && this.ElementoMiembroTipificado != null) {
                this.JsonMiembroTipificado = abaxXBRL.utils.XmlUtils.x2js.xml_str2json(this.ElementoMiembroTipificado);
                this.TextoMiembroTipificado = JSON.stringify(this.JsonMiembroTipificado);
            }
        }

        deserialize(input): DimensionInfo {
            this.Explicita = input.Explicita;
            this.IdDimension = input.IdDimension;
            this.IdItemMiembro = input.IdItemMiembro;
            this.QNameDimension = input.QNameDimension;
            this.QNameItemMiembro = input.QNameItemMiembro;
            this.ElementoMiembroTipificado = input.ElementoMiembroTipificado;
            this.CreatTextoElementoMiembroTipificado();
            return this;
        }
    }

    /**
     * Representa un contexto contenido dentro de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class Contexto implements Serializable<Contexto> {
        /** El identificador único del contexto dentro del documento instancia */
        Id: string;

        /** El periodo de reporte del contexto */
        Periodo: Periodo;

        /** El identificador de la entidad */
        Entidad: Entidad;

        /** El fragmento con el XML que describe el escenario del contexto */
        Escenario: string;

        /** Indica si el escenario del contexto contiene información dimensional */
        ContieneInformacionDimensional: boolean;

        /** Contiene los valores de miembros de dimensión existentes en el contexto */
        ValoresDimension: Array<DimensionInfo>;

        /**
         * Obtiene una cadena con la descripción del contexto.
         */
        describir(): string {
            return shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCRIPCION_CONTEXTO', {
                periodo: this.Periodo.describir(),
                entidad: this.Entidad.describir()
            });
        }

        /**
         * Determina si un contexto es estructuralmente igual a este contexto.
         * 
         * @param contexto el contexto contra el cual se comparará este concepto.
         * @return true si ambos contextos son estructuralmente iguales. false en cualquier otro caso.
         */
        EstructuralmenteIgual(contexto: Contexto): boolean {
            var resultado: boolean = true;

            if (!contexto || contexto == null) {
                resultado = false;
            } else {
                if (((this.Periodo && this.Periodo != null) && (!contexto.Periodo || contexto.Periodo == null)) ||
                    ((!this.Periodo || this.Periodo == null) && (contexto.Periodo && contexto.Periodo != null))) {
                    resultado = false;
                } else {
                    if (this.Periodo && this.Periodo != null && contexto.Periodo && contexto.Periodo != null) {
                        if (this.Periodo.EstructuralmenteIgual(contexto.Periodo)) {
                            if (((this.Entidad && this.Entidad != null) && (!contexto.Entidad || contexto.Entidad == null)) ||
                                ((!this.Entidad || this.Entidad == null) && (contexto.Entidad && contexto.Entidad != null))) {
                                resultado = false;
                            } else {
                                if (this.Entidad && this.Entidad != null && contexto.Entidad && contexto.Entidad != null) {
                                    if (this.Entidad.EstructuralmenteIgual(contexto.Entidad)) {
                                        if (this.ContieneInformacionDimensional != contexto.ContieneInformacionDimensional) {
                                            resultado = false;
                                        } else {

                                            if (((this.ValoresDimension && this.ValoresDimension != null) && (!contexto.ValoresDimension || contexto.ValoresDimension == null)) || ((contexto.ValoresDimension && contexto.ValoresDimension != null) && (!this.ValoresDimension || this.ValoresDimension == null))) {
                                                return false;
                                            } else {
                                                if (this.ValoresDimension && this.ValoresDimension != null && contexto.ValoresDimension && contexto.ValoresDimension != null) {
                                                    if (this.ValoresDimension.length != contexto.ValoresDimension.length) {
                                                        resultado = false;
                                                    } else {
                                                        var copiaComparar = contexto.ValoresDimension.slice();
                                                        for (var i = 0; i < this.ValoresDimension.length; i++) {
                                                            var equivalenteEncontrado: boolean = false;
                                                            for (var j = 0; j < copiaComparar.length; j++) {
                                                                if (this.ValoresDimension[i].EstructuralmenteIgual(copiaComparar[j])) {
                                                                    equivalenteEncontrado = true;
                                                                    copiaComparar.splice(j, 1);
                                                                    break;
                                                                }
                                                            }
                                                            if (!equivalenteEncontrado) {
                                                                resultado = false;
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            }

                                        }
                                    } else {
                                        resultado = false;
                                    }
                                }
                            }
                        } else {
                            resultado = false;
                        }
                    }
                }
            }

            return resultado;
        }

        deserialize(input):Contexto {
            this.Id = input.Id;
            if (input.Periodo) {
                this.Periodo = new Periodo().deserialize(input.Periodo);
            }
            if (input.Entidad) {
                this.Entidad = new Entidad().deserialize(input.Entidad);
            }
            this.Escenario = input.Escenario;
            this.ContieneInformacionDimensional = input.ContieneInformacionDimensional;
            if (input.ValoresDimension) {
                this.ValoresDimension = new Array<DimensionInfo>();
                for (var i = 0; i < input.ValoresDimension.length; i++) {
                    this.ValoresDimension.push(new DimensionInfo().deserialize(input.ValoresDimension[i]));
                }
            }
            return this;
        }
    }

    /**
     * Representa una entidad contenido dentro de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class Entidad implements Serializable<Entidad> {

        /** El identificador de la entidad en el espacio de nombres */
        IdEntidad: string;

        /** El espacio de nombres donde se ha definido el identificador de la entidad */
        EsquemaId: string;

        /** El identificador único de la entidad en el documento instancia */
        Id: string;

        /** El fragmento XML que contiene el segmento de la entidad */
        Segmento: string;

        /** Indica si el escenario del contexto contiene información dimensional */
        ContieneInformacionDimensional: boolean;

        /** Contiene los valores de miembros de dimensión existentes en el contexto */
        ValoresDimension: Array<DimensionInfo>;

        /**
         * Obtiene una cadena con la descripción de la entidad.
         */
        describir(): string {
            return shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCRIPCION_ENTIDAD') + this.Id;
        }

        /**
         * Verifica si este objeto es igual o equivalente a otra entidad
         *
         * @param entidad la entidad contra la cual se comparará esta entidad.
         * @return true si las dos entidad son estructuralmente iguales. false en cualquier otro caso
         */
        EstructuralmenteIgual(entidad: Entidad): boolean {
            var resultado: boolean = true;
            if (!entidad || entidad == null) {
                resultado = false
            } else {
                if (this.EsquemaId === entidad.EsquemaId && this.Id === entidad.Id && this.ContieneInformacionDimensional == entidad.ContieneInformacionDimensional) {
                    if (this.ContieneInformacionDimensional) {

                        if (((this.ValoresDimension && this.ValoresDimension != null) && (!entidad.ValoresDimension || entidad.ValoresDimension == null)) || ((entidad.ValoresDimension && entidad.ValoresDimension != null) && (!this.ValoresDimension || this.ValoresDimension == null))) {
                            return false;
                        } else {
                            if (this.ValoresDimension && this.ValoresDimension != null && entidad.ValoresDimension && entidad.ValoresDimension != null) {
                                if (this.ValoresDimension.length != entidad.ValoresDimension.length) {
                                    resultado = false;
                                } else {
                                    var copiaComparar = entidad.ValoresDimension.slice();
                                    for (var i = 0; i < this.ValoresDimension.length; i++) {
                                        var equivalenteEncontrado: boolean = false;
                                        for (var j = 0; j < copiaComparar.length; j++) {
                                            if (this.ValoresDimension[i].EstructuralmenteIgual(copiaComparar[j])) {
                                                equivalenteEncontrado = true;
                                                copiaComparar.splice(j, 1);
                                                break;
                                            }
                                        }
                                        if (!equivalenteEncontrado) {
                                            resultado = false;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                } else {
                    resultado = false;
                }
            }
            return resultado;
        }

        deserialize(input) {
            this.EsquemaId = input.EsquemaId;
            this.Id = input.Id;
            if (input.IdEntidad) {
                this.IdEntidad = input.IdEntidad;
            } else {
                this.IdEntidad = this.EsquemaId + ConstantesComunes.SEPARADOR_NOMBRE_CALIFICADO + this.Id;
            }
            this.Segmento = input.Segmento;
            this.ContieneInformacionDimensional = input.ContieneInformacionDimensional;
            if (input.ValoresDimension) {
                this.ValoresDimension = new Array<DimensionInfo>();
                for (var i = 0; i < input.ValoresDimension.length; i++) {
                    this.ValoresDimension.push(new DimensionInfo().deserialize(input.ValoresDimension[i]));
                }
            }
            return this;
        }
    }

    /**
     * Enumeración para contener los posibles estados de la validación de un hecho
     */
    export enum EstadoValidacion {
        /** Indica que un hecho es válido */
        Valido = 1,
        /** Indica que un hecho es inválido */
        Invalido = 2,
        /** Indica que no se ha determinado la validez del hecho */
        SinDeterminar = 3,
        /** Indica que un hecho tiene un mensaje de advertencia */
        Advertencia = 4

    }

    /**
     * Representa un hecho contenido dentro de un documento instancia XBRL.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class Hecho implements Serializable<Hecho> {

        /** El identificador del concepto al cual pertnece este hecho */
        IdConcepto: string;

        /** El identificador único dentro del documento del hecho */
        Id: string;

        /** El identificador del hecho padre en caso de que este hecho sea parte de una tupla */
        IdTuplaPadre: string;

        /** El identificador del contexto al cual está relacionado el hecho */
        IdContexto: string;

        /** El identificador de la unidad a la cual está relacionado este hecho */
        IdUnidad: string;

        /** La precisión del hecho en caso de ser numérico */
        Precision: number;

        /** Los decimales del hecho en caso de ser numérico */
        Decimales: number;

        /** El tipo de hecho item o tuple */
        Tipo: number;

        /** Indica si el hecho tiene precisión infinita */
        EsPrecisionInfinita: boolean;

        /** Indica si el hecho tiene decimales infinitos */
        EsDecimalesInfinitos: boolean;

        /** Contiene la representación en cadena del valor del hecho */
        private Valor: string;

        /** Contiene el estado de la validación del hecho dentro del documento */
        private EstadoValidacion: EstadoValidacion;

        /** Contiene el valor numérico del hecho */
        private _valorNumerico: decimal.Decimal;

        /** Contiene el valor redondeado del hecho utilizado para el cálculo */
        private _valorRedondeado: decimal.Decimal;

        /** Indica si ya se ha calculado el valor redondeado del hecho con la precisión y decimales inferidos */
        private _valorRedondeadoCalculado: boolean;

        /** El valor inferido o calculado de decimales */
        private _valorCalculadoDecimales: number;

        /** El valor inferido o calculado de precisión */
        private _valorCalculadoPrecision: number;

        /** Contiene una lista con los identificadores de los hechos con los cuales se encuentra duplicado dentro del documento instancia */
        DuplicadoCon: Array<string>;

        /** Contiene la representación en cadena del valor del denominador del hecho */
        ValorDenominador: number;

        /** Contiene la representación en cadena del valor del numerador del hecho */
        ValorNumerador: number;

        /** Contiene la lista de hechos que contiene este hecho de tipo tupla */
        Hechos: Array<string>;

        /** Indica si el tipo de dato de este hecho es numérico */
        EsNumerico: boolean;

        /** Indica si el tipo de dato de este hecho es fecha*/
        EsFecha: boolean;

        /** Indica si el tipo de dato de este hecho es boolean*/
        EsBoolean: boolean;

        /** Arreglo de opciones del listado que se va a presentar en la directiva token*/
        ListaValoresToken: Array<string>;

        /** Indica si el tipo de dato de este hecho corresponde a un token*/
        EsToken: boolean;

        /** Indica si el tipo de dato de este hecho es fracción */
        EsFraccion: boolean;

        /** Indica si este hecho es de tipo tupla */
        EsTupla: boolean;

        /** Indica si el valor del hecho es nil */
        EsValorNil: boolean;

        /** Indica si el tipo de dato de este hecho es no numérico */
        NoEsNumerico: boolean;

        /** Indica si existe un detalle de operaciones asociado a este hecho */
        TieneDetalleOperaciones: boolean;

        /** Indica si existen operaciones de cálculo asociadas a este hecho */
        TieneOperacionesCalculo: boolean;

        /** Indica si existen notas al pie de pagina asociadas a este hecho*/
        TieneNotasAlPie: boolean;

        /** Contiene el listado de notas al pie asociadas a este hecho */
        NotasAlPie: { [idioma: string]: Array<NotaAlPie>; }

        /** Indica si el hecho requiere ser validado nuevamente debido a cambios recientes */
        RequiereValidacion: boolean;

        /** Valor por default del hecho en el caso que no se tenga valor*/
        ValorDefault: string;
        /**
        * Bandera que indica si el hecho cambio de valor contra otra versión.
        **/
        CambioValorComparador: boolean;


        /** Contiene el estado de la validación del hecho dentro del documento */
        get ValorEstadoValidacion(): EstadoValidacion {
            return this.EstadoValidacion;
        }

        /** Contiene el estado de la validación del hecho dentro del documento */
        set ValorEstadoValidacion(estado: EstadoValidacion) {
            if (this.EstadoValidacion != estado) {
                this.EstadoValidacion = estado;
                if (plugins.AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.Id]) {
                    for (var i = 0; i < plugins.AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.Id].length; i++) {
                        $('#' + plugins.AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.Id][i]).xbrlCampoCaptura('marcarSucio');
                    }
                }
            }
        }

        /**
         * Obtiene la representación en cadena del hecho.
         *
         * @return la representación en cadena del hecho.
         */
        get ValorHecho(): string {
            if ((!this.Valor || this.Valor.length == 0) && this.ValorDefault) {
                this.Valor = this.ValorDefault;
            }

            return this.Valor;
        }

        /**
         * Obtiene el valor redondeado calculado del hecho (para hechos de tipo numérico).
         *
         * @return el valor redondeado calculado del hecho (para hechos de tipo numérico).
         */
        get ValorRedondeado(): decimal.Decimal {

            try {
                if (!this._valorRedondeadoCalculado || !this._valorRedondeado) {
                    this.inferirPrecisionYDecimales();
                    this._valorRedondeado = this.obtenerValorRedondeado(this.Valor);
                    this._valorRedondeadoCalculado = true;
                }

            } catch (Error) {
                console.error(Error);
                this.Valor = "0";
                this._valorRedondeado = this.obtenerValorRedondeado(this.Valor);
            }

            return this._valorRedondeado;
        }

        /**
         * Establece la representación en cadena del hecho.
         *
         * @param valor la representación en cadena del hecho a establecer.
         */
        set ValorHecho(valor: string) {

            if ((!valor || valor.length == 0) && this.ValorDefault) {
                valor = this.ValorDefault;
            }
            this.Valor = valor;
            this._valorRedondeadoCalculado = false;

            if (this.EsNumerico) {
                this.validarHechoNumerico();
            } else if (this.EsFecha) {
                this.validarHechoFecha();
            } else if (this.EsBoolean) {
                this.validarHechoBoolean();
            } else if (this.EsToken) {
                this.validarHechoToken(this.ListaValoresToken);
            }

            if (plugins.AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.Id]) {
                for (var i = 0; i < plugins.AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.Id].length; i++) {
                    $('#' + plugins.AngularJQueryBridge.getInstance().obtenerMapaElementosPorIdHecho()[this.Id][i]).xbrlCampoCaptura('marcarSucio');
                }
            }

        }

        /**
         * Calcula el valor redondeado de una cadena
         * de acuerdo a la configuración de precisión y valores decimales configurada para este hecho
         *
         * @param stringVal el valor a redondear
         * @return el valor redondeado
         */
        obtenerValorRedondeado(stringVal: string): decimal.Decimal {
            var valorDecimal = math.eval('bignumber("' + stringVal + '")');
            return this.redondear(valorDecimal);
        }

        /**
         * Infiere los valores de decimales y precision partiendo de la configuración
         * de los atriburos del hecho
         */
        inferirPrecisionYDecimales(): void {

            this._valorNumerico = math.eval('bignumber("' + this.Valor + '")');
            this._valorCalculadoDecimales = this.Decimales;
            this._valorCalculadoPrecision = this.Precision;
            if (this.EsPrecisionInfinita) {
                this.EsDecimalesInfinitos = true;
            } else if (this._valorCalculadoPrecision != null && this._valorCalculadoPrecision > 0) {
                if (this._valorNumerico.equals('0')) {
                    this.EsDecimalesInfinitos = true;
                    this.EsPrecisionInfinita = true;
                }
                else {
                    this._valorCalculadoDecimales = this._valorCalculadoPrecision - (math.Floor(math.log10(math.abs(this._valorNumerico)))) - 1;
                }
            } else if (this._valorCalculadoDecimales != null && !this.EsDecimalesInfinitos && this.Decimales && this.Decimales != null && this.Decimales > 0) {

                if (this._valorNumerico.equals('0')) {
                    this.EsPrecisionInfinita = true;
                }

                var partes: Array<string> = this.dividirNumero(this.Valor);
                this._valorCalculadoPrecision = (partes[0].length > 0 ? partes[0].length : -1 * partes[1].length) + this._valorCalculadoDecimales;

                if (partes[2] && partes[2] != null && partes[2].length > 0) {
                    this._valorCalculadoPrecision += parseInt(partes[2]);
                }

                if (this._valorCalculadoPrecision < 0) {
                    this._valorCalculadoPrecision = 0;
                }
            } else if (this.EsDecimalesInfinitos) {
                this.EsPrecisionInfinita = true;
            }
        }

        /** Parte la representación en cadena del número en dígitos enteros y decimales despreciando
         * los ceros a la izquierda del dígito más significativo y los ceros  a la derecha después del decimal menos 
         * significativo
         *
         * @param valorString el valor representado como cadena
         * @return la representación en cadena separada en partes.
         */
        private dividirNumero(valorString: string): Array<string> {
            //0 - digitos significativos enteros
            //1 - ceros antes del primero dígito significativo después del punto
            //2 - valor del exponente (si tiene)
            var partesFinales = new Array<string>();

            partesFinales[0] = this.obtenerDigitosEnteriosSignificativos(valorString);
            partesFinales[1] = this.obtenerCerosDecimalesAntesDelPrimerDigito(valorString);
            partesFinales[2] = this.obtenerDigitosExponente(valorString);

            return partesFinales;
        }

        /**
         * Obtiene la cadena de dígitos que están después de la letra de exponente E o e
         *
         * @param valorString el valor numérico original
         * @return una cadena que representa el exponente del número
         */
        private obtenerDigitosExponente(valorString: string): string {
            var exp: string = '';
            var partes: Array<string> = valorString.split(/[Ee]+/);
            if (partes.length > 1) {
                exp = partes[1];
            }
            return exp;
        }

        /**
         * Obtiene una cadena con los 0's encontrados deespués del punto decimal y hasta antes del primer dígito
         * decimal significativo, si no hay dígito significativo entonces se retorna una cadena vacía
         *
         * @param valorString el valor del número original
         * @return una cadena con los ceros después del punto antes del primer dígito significativo
         */
        private obtenerCerosDecimalesAntesDelPrimerDigito(valorString: string): string {
            var cerosDecimale = '';
            var partes: Array<string> = valorString.split(/[Ee]+/);
            var enteros_decimales: Array<string> = partes[0].split('.');
            if (enteros_decimales.length > 1) {

                var indicePrimerDigitoSignificativo: number = -1;
                for (var i = 0; i < enteros_decimales[1].length; i++) {
                    if (enteros_decimales[1][i] != '0') {
                        indicePrimerDigitoSignificativo = i;
                        break;
                    }
                }
                if (indicePrimerDigitoSignificativo > -1) {
                    cerosDecimale = enteros_decimales[1].substring(0, indicePrimerDigitoSignificativo);
                }
            }
            return cerosDecimale;
        }

        /**
         * Obtiene la cadena normalizada que representa los dígitos enterps significativos
         * a la derecha del punto decimal
         *
         * @param valorString el valor del número original
         * @return una cadena con los dígitos enteros representativos
         */
        private obtenerDigitosEnteriosSignificativos(valorString: string): string {
            var partes: Array<string> = valorString.split(/[Ee]+/);
            var enteros_decimales: Array<string> = partes[0].split('.');
            enteros_decimales[0] = enteros_decimales[0].replace('-', '').replace('+', '');
            if (enteros_decimales[0] && enteros_decimales[0] != null && enteros_decimales[0].length > 0) {
                enteros_decimales[0] = parseInt(enteros_decimales[0]).toString();
                if (enteros_decimales[0] == '0') {
                    enteros_decimales[0] = '';
                }
            }
            else {
                enteros_decimales[0] = '';
            }
            return enteros_decimales[0];
        }

        /**
         * Redondea un número double de acuerdo a los parámetros de decimales
         * y precisión especificados en el hecho
         *
         * @param valorDouble el valor numérico del valor
         * @return el valor redondeado del valor numérico
         */
        redondear(valorDecimal: decimal.Decimal): decimal.Decimal {
            if (this.EsDecimalesInfinitos) {
                return valorDecimal;
            }
            var roundedValue: decimal.Decimal = valorDecimal;
            if (this._valorCalculadoDecimales != null) {
                if (this._valorCalculadoDecimales >= 0) {
                    var powerOfTen: number = math.pow(10.0, math.abs(this._valorCalculadoDecimales));
                    roundedValue = roundedValue.times(powerOfTen);
                    var original: decimal.Decimal = math.eval('bignumber("' + roundedValue.toString() + '")');
                    roundedValue = math.round(roundedValue);
                    var dif = roundedValue.minus(original).abs();
                    var puntoCinco: decimal.Decimal = math.eval('bignumber("0.5")');
                    if (dif.comparedTo(puntoCinco) == 0) {
                        if (roundedValue.modulo(2).abs().equals(1)) {
                            if (roundedValue.isNegative()) {
                                roundedValue = roundedValue.plus(1);
                            } else {
                                roundedValue = roundedValue.minus(1);
                            }
                        }
                    }
                    roundedValue = roundedValue.dividedBy(powerOfTen);
                }
                else {
                    //roundedValue = math.round(roundedValue, this._valorCalculadoDecimales);
                    var powerOfTen: number = math.pow(10.0, math.abs(this._valorCalculadoDecimales));
                    roundedValue = roundedValue.dividedBy(powerOfTen);
                    var original: decimal.Decimal = math.eval('bignumber("' + roundedValue.toString() + '")');
                    roundedValue = math.round(roundedValue);
                    var dif = roundedValue.minus(original).abs();
                    var puntoCinco: decimal.Decimal = math.eval('bignumber("0.5")');
                    if (dif.comparedTo(puntoCinco) == 0) {
                        if (roundedValue.modulo(2).abs().equals(1)) {
                            if (roundedValue.isNegative()) {
                                roundedValue = roundedValue.plus(1);
                            } else {
                                roundedValue = roundedValue.minus(1);
                            }
                        }
                    }
                    roundedValue = roundedValue.times(powerOfTen);
                }
            }
            return roundedValue;
        }

        /**
        * Valida si el hecho corresponde a tipo de dato fecha, en el caso que no corresponda asigna el valor
        * por default si es que existe
        */
        validarHechoFecha() {
            this.EsFecha = true;
            if (!moment(this.Valor, abaxXBRL.model.ConstantesComunes.FORMATO_FECHA, true).isValid()) {
                this.Valor = this.ValorDefault ? this.ValorDefault : "";
            }
        }

        /**
        * Valida si el hecho corresponde a tipo de dato boolean, en el caso que no corresponda asigna el valor
        * por default si es que existe
        */
        validarHechoBoolean() {
            this.EsBoolean = true;
            if (!(this.Valor == "true" || this.Valor == "false")) {
                this.Valor = this.ValorDefault;
            }
        }

        /**
       * Valida si el hecho contiene un valor correcto del token
       */
        validarHechoToken(listadoValoresToken: Array<string>) {
            this.EsToken = true;
            if (!this.ListaValoresToken) {
                this.ListaValoresToken = listadoValoresToken;
            }
            if (listadoValoresToken.indexOf(this.Valor) < 0) {
                this.Valor = this.ValorDefault;
            }
        }

        /**
        * Método para obtener el valor cadena de un campo cuando se esta en IE.
        * @param elemento Elemento con el contenido a evaluar.
        * @return Valor cadena del elemento.
        **/
        private obtenValorCadena(elemento: any): string {
            if (!elemento || elemento == null) {
                return "";
            }

            if (typeof elemento == 'string' || elemento instanceof String) {
                return elemento.toString();
            }

            if (elemento.val) {
                elemento = elemento.val();
            }

            if (typeof elemento == 'string' || elemento instanceof String) {
                return elemento.toString();
            }

            return "";

        }



        /**
        * Valida si el hecho corresponde a tipo de dato numérico, en el caso que no corresponda asigna el valor
        * por default si es que existe
        */
        validarHechoNumerico() {
            var regex = /^[+-]?\$?[+-]?\d+(,\d{3})*(\.\d*)?$/i;
            //Ajuste para IE
            var valorEvaluar: string = this.Valor;

            if (shared.service.AbaxXBRLUtilsService.usandoInternetExplorer()) {
                valorEvaluar = this.obtenValorCadena(this.Valor);
            }

            if (!regex.test(valorEvaluar.trim())) {
                this.Valor = this.ValorDefault ? this.ValorDefault : "0";
            }
            this.Valor = valorEvaluar.replace(/,/g, '').replace(/\$/g, '').replace(/ /g, '');
        }

        deserialize(input) {

            this.IdConcepto = input.IdConcepto;
            this.Id = input.Id;
            this.IdContexto = input.IdContexto;
            this.IdUnidad = input.IdUnidad;
            this.RequiereValidacion = true;

            if (input.Precision && input.Precision != null) {
                this.Precision = parseInt(input.Precision);
            } else {
                this.Precision = null;
            }
            if (input.Decimales && input.Decimales != null) {
                this.Decimales = parseInt(input.Decimales);
            } else {
                this.Decimales = null;
            }
            this.Tipo = input.Tipo;
            this.EsPrecisionInfinita = input.EsPrecisionInfinita;
            this.EsDecimalesInfinitos = input.EsDecimalesInfinitos;
            this.ValorHecho = input.Valor;
            this.ValorDenominador = input.ValorDenominador;
            this.ValorNumerador = input.ValorNumerador;

            var i = 0;
            if (input.Hechos) {
                this.Hechos = new Array<string>();
                for (i = 0; i < input.Hechos.length; i++) {
                    this.Hechos.push(input.Hechos[i]);
                }
            }

            if (input.TuplaPadre && input.TuplaPadre.Id) {
                this.IdTuplaPadre = input.TuplaPadre.Id;
            }

            if (input.DuplicadoCon) {
                this.DuplicadoCon = new Array<string>();
                for (i = 0; i < input.DuplicadoCon.length; i++) {
                    this.DuplicadoCon.push(input.DuplicadoCon[i]);
                }
            }

            this.EsNumerico = input.EsNumerico;
            this.EsFraccion = input.EsFraccion;
            this.EsTupla = input.EsTupla;
            this.EsValorNil = input.EsValorNil;
            this.NoEsNumerico = input.NoEsNumerico;
            this.EstadoValidacion = EstadoValidacion.SinDeterminar;
            this.TieneDetalleOperaciones = false;
            this.CambioValorComparador = input.CambioValorComparador ? false : true;

            if (input.NotasAlPie) {
                this.NotasAlPie = {};
                for (var property in input.NotasAlPie) {
                    this.TieneNotasAlPie = true;
                    if (input.NotasAlPie.hasOwnProperty(property)) {
                        if (!this.NotasAlPie[property]) {
                            this.NotasAlPie[property] = new Array<NotaAlPie>();
                        }
                        for (var nota in input.NotasAlPie[property]) {
                            this.NotasAlPie[property].push(new NotaAlPie().deserialize(input.NotasAlPie[property][nota]));
                        }
                    }
                }
            }

            return this;
        }
    }

    /**
     * Representa un etiqueta de la taxonomía.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class Etiqueta implements Serializable<Etiqueta> {

        /** El rol asociado a la etiquta */
        Rol: string;

        /** El valor de la etiqueta */
        Valor: string;

        /** El idioma en que está expresada la etiqueta */
        Idioma: string;

        deserialize(input) {
            this.Rol = input.Rol;
            this.Valor = input.Valor;
            this.Idioma = input.Idioma;
            return this;
        }
    }


    /**
     * Representa una parte de una referencia de un concepto de la taxonomía.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class ParteReferencia implements Serializable<ParteReferencia> {

        /** El nombre de la parte de la referencia */
        Nombre: string;

        /** El espacio de nombres de la parte de la referencia */
        EspacioNombres: string;

        /** El valor de la parte de la referencia */
        Valor: string;

        deserialize(input) {
            this.Nombre = input.Nombre;
            this.EspacioNombres = input.EspacioNombres;
            this.Valor = input.Valor;
            return this;
        }
    }

    /**
     * Representa una referencia de un concepto de la taxonomía.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class Referencia implements Serializable<Referencia> {

        /** Las diferentes partes que conforman una referencia */
        Partes: Array<ParteReferencia>;

        /** El rol de la referencia */
        Rol: string;

        deserialize(input) {

            this.Rol = input.Rol;

            var i = 0;
            if (input.Partes) {
                this.Partes = new Array<ParteReferencia>();
                for (i = 0; i < input.Partes.length; i++) {
                    this.Partes.push(new ParteReferencia().deserialize(input.Partes[i]));
                }
            }

            return this;
        }
    }

    /**
     * Representa un tipo de dato XBRL de la especificación.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class TipoDato {

        /** El nombre del tipo de dato */
        Nombre: string;

        /** El namespace en el que es declarado */
        Namespace: string;

        /** Indica si el tipo de dato requiere de tener asociado una unidad */
        RequiereUnidad: boolean;

        /**
         * El constructor de la clase TipoDato
         *
         * @param nombre el nombre del tipo de dato
         * @param namespace el espacio de nombres en que se declaró el tipo de dato
         * @param requiereUnidad indica si el tipo de dato requiere tener asociado una unidad.
         */
        constructor(nombre: string, namespace: string, requiereUnidad: boolean) {
            this.Nombre = nombre;
            this.Namespace = namespace;
            this.RequiereUnidad = requiereUnidad;
        }
    }

    /**
     * Representa un tipo de dato XBRL de la especificación de tipo numérico
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class TipoDatoNumerico extends TipoDato {

        /** Las opciones que se utilizarán para la captura utilizando el plugin autoNumeric de jQuery */
        OpcionesAutonumeric: any;

        /**
         * El constructor de la clase TipoDato
         *
         * @param nombre el nombre del tipo de dato
         * @param namespace el espacio de nombres en que se declaró el tipo de dato
         * @param requiereUnidad indica si el tipo de dato requiere tener asociado una unidad.
         * @param opcionesAutonumeric las opciones que se usarán para el plugin autoNumeric.
         */
        constructor(nombre: string, namespace: string, requiereUnidad: boolean, opcionesAutonumeric: any) {
            super(nombre, namespace, requiereUnidad);
            this.OpcionesAutonumeric = opcionesAutonumeric;
        }
    }

    export class TiposDatoXbrl {

        private static _instance: TiposDatoXbrl = null;

        private Tipos: { [nombre: string]: TipoDato };

        private TiposCampoCaptura: { [nombre: string]: string };

        constructor() {
            if (TiposDatoXbrl._instance) {
                throw new Error("Error: Fallo al instanciar: Utilice TiposDatoXbrl.getInstance() en lugar de new.");
            }
            TiposDatoXbrl._instance = this;
            this.Tipos = {};
            this.Tipos['http://www.xbrl.org/2003/instance:decimalItemType'] = new TipoDatoNumerico('decimalItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '-99999999999999999', vMax: '99999999999999999', mDec: '18', aPad: false });
            this.Tipos['http://www.xbrl.org/2003/instance:floatItemType'] = new TipoDatoNumerico('floatItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '-99999999999999999', vMax: '99999999999999999', mDec: '18', aPad: false });
            this.Tipos['http://www.xbrl.org/2003/instance:doubleItemType'] = new TipoDatoNumerico('doubleItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '-99999999999999999', vMax: '99999999999999999', mDec: '18', aPad: false });
            this.Tipos['http://www.xbrl.org/2003/instance:integerItemType'] = new TipoDatoNumerico('integerItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '-99999999999999999', vMax: '99999999999999999', mDec: '0' });
            this.Tipos['http://www.xbrl.org/2003/instance:nonPositiveIntegerItemType'] = new TipoDatoNumerico('nonPositiveIntegerItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '-99999999999999999', vMax: '0', mDec: '0' });
            this.Tipos['http://www.xbrl.org/2003/instance:negativeIntegerItemType'] = new TipoDatoNumerico('negativeIntegerItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '-99999999999999999', vMax: '-1', mDec: '0' });
            this.Tipos['http://www.xbrl.org/2003/instance:longItemType'] = new TipoDatoNumerico('longItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '-99999999999999999', vMax: '99999999999999999', mDec: '0' });
            this.Tipos['http://www.xbrl.org/2003/instance:intItemType'] = new TipoDatoNumerico('intItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '-2147483648', vMax: '2147483647', mDec: '0' });
            this.Tipos['http://www.xbrl.org/2003/instance:shortItemType'] = new TipoDatoNumerico('shortItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '-32768', vMax: '32767', mDec: '0' });
            this.Tipos['http://www.xbrl.org/2003/instance:byteItemType'] = new TipoDatoNumerico('byteItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '0', vMax: '255', nBracket: '(,)', mDec: '0' });
            this.Tipos['http://www.xbrl.org/2003/instance:nonNegativeIntegerItemType'] = new TipoDatoNumerico('nonNegativeIntegerItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '0', vMax: '9999999999999999999', mDec: '0', aSep: '' });
            this.Tipos['http://www.xbrl.org/2003/instance:unsignedLongItemType'] = new TipoDatoNumerico('unsignedLongItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '0', vMax: '99999999999999999', nBracket: '(,)', mDec: '0' });
            this.Tipos['http://www.xbrl.org/2003/instance:unsignedIntItemType'] = new TipoDatoNumerico('unsignedIntItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '0', vMax: '2147483647', mDec: '0' });
            this.Tipos['http://www.xbrl.org/2003/instance:unsignedShortItemType'] = new TipoDatoNumerico('unsignedShortItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '0', vMax: '65535', mDec: '0' });
            this.Tipos['http://www.xbrl.org/2003/instance:unsignedByteItemType'] = new TipoDatoNumerico('unsignedByteItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '0', vMax: '255', mDec: '0' });
            this.Tipos['http://www.xbrl.org/2003/instance:positiveIntegerItemType'] = new TipoDatoNumerico('positiveIntegerItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '1', vMax: '2147483647', mDec: '0' });
            this.Tipos['http://www.xbrl.org/2003/instance:monetaryItemType'] = new TipoDatoNumerico('monetaryItemType', 'http://www.xbrl.org/2003/instance', true, { aSign: '$', pSign: 'p', vMin: '-99999999999999999.00', nBracket: '(,)' });
            this.Tipos['http://www.xbrl.org/2003/instance:sharesItemType'] = new TipoDatoNumerico('sharesItemType', 'http://www.xbrl.org/2003/instance', true, { pSign: 'p', vMin: '-99999999999999999.00', nBracket: '(,)' });
            this.Tipos['http://www.xbrl.org/2003/instance:pureItemType'] = new TipoDatoNumerico('pureItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '-99999999999999999', vMax: '99999999999999999', mDec: '18', aPad: false });
            this.Tipos['http://www.xbrl.org/2003/instance:fractionItemType'] = new TipoDatoNumerico('fractionItemType', 'http://www.xbrl.org/2003/instance', true, { vMin: '-99999999999999999.00', vMax: '99999999999999999.00' });

            this.Tipos['http://www.xbrl.org/2003/instance:stringItemType'] = new TipoDato('stringItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:booleanItemType'] = new TipoDato('booleanItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:hexBinaryItemType'] = new TipoDato('hexBinaryItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:base64BinaryItemType'] = new TipoDato('base64BinaryItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:anyURIItemType'] = new TipoDato('anyURIItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:QNameItemType'] = new TipoDato('QNameItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:durationItemType'] = new TipoDato('durationItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:dateTimeItemType'] = new TipoDato('dateTimeItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:timeItemType'] = new TipoDato('timeItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:dateItemType'] = new TipoDato('dateItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:gYearMonthItemType'] = new TipoDato('gYearMonthItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:gYearItemType'] = new TipoDato('gYearItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:gMonthDayItemType'] = new TipoDato('gMonthDayItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:gDayItemType'] = new TipoDato('gDayItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:gMonthItemType'] = new TipoDato('gMonthItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:normalizedStringItemType'] = new TipoDato('normalizedStringItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:tokenItemType'] = new TipoDato('tokenItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:languageItemType'] = new TipoDato('languageItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:NameItemType'] = new TipoDato('NameItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/2003/instance:NCNameItemType'] = new TipoDato('NCNameItemType', 'http://www.xbrl.org/2003/instance', false);
            this.Tipos['http://www.xbrl.org/dtr/type/non-numeric:textBlockItemType'] = new TipoDato('textBlockItemType', 'http://www.xbrl.org/dtr/type/non-numeric', false);

            this.TiposCampoCaptura = {};
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:decimalItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:floatItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:doubleItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:integerItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:nonPositiveIntegerItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:negativeIntegerItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:longItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:intItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:shortItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:byteItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:nonNegativeIntegerItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:unsignedLongItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:unsignedIntItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:unsignedShortItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:unsignedByteItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:positiveIntegerItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:monetaryItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:sharesItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:pureItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:fractionItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';

            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:dateItemType'] = 'abaxXBRL.plugins.CampoCapturaFecha';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:stringItemType'] = 'abaxXBRL.plugins.CampoCapturaString';
            this.TiposCampoCaptura['http://www.xbrl.org/dtr/type/non-numeric:textBlockItemType'] = 'abaxXBRL.plugins.CampoCapturaTextBlock';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:booleanItemType'] = 'abaxXBRL.plugins.CampoCapturaBoolean';
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:tokenItemType'] = 'abaxXBRL.plugins.CampoCapturaToken';
            this.TiposCampoCaptura['http://www.xbrl.org/dtr/type/numeric:perShareItemType'] = 'abaxXBRL.plugins.CampoCapturaNumerico';         
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:base64BinaryItemType'] = 'abaxXBRL.plugins.CampoCapturaBinary';


            /*this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:stringItemType'] = new TipoDato('stringItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:booleanItemType'] = new TipoDato('booleanItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:hexBinaryItemType'] = new TipoDato('hexBinaryItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:base64BinaryItemType'] = new TipoDato('base64BinaryItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:anyURIItemType'] = new TipoDato('anyURIItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:QNameItemType'] = new TipoDato('QNameItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:durationItemType'] = new TipoDato('durationItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:dateTimeItemType'] = new TipoDato('dateTimeItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:timeItemType'] = new TipoDato('timeItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:dateItemType'] = new TipoDato('dateItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:gYearMonthItemType'] = new TipoDato('gYearMonthItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:gYearItemType'] = new TipoDato('gYearItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:gMonthDayItemType'] = new TipoDato('gMonthDayItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:gDayItemType'] = new TipoDato('gDayItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:gMonthItemType'] = new TipoDato('gMonthItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:normalizedStringItemType'] = new TipoDato('normalizedStringItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:tokenItemType'] = new TipoDato('tokenItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:languageItemType'] = new TipoDato('languageItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:NameItemType'] = new TipoDato('NameItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/2003/instance:NCNameItemType'] = new TipoDato('NCNameItemType', 'http://www.xbrl.org/2003/instance', false);
            this.TiposCampoCaptura['http://www.xbrl.org/dtr/type/non-numeric:textBlockItemType'] = new TipoDato('textBlockItemType', 'http://www.xbrl.org/dtr/type/non-numeric', false);*/
        }

        public get(): { [nombre: string]: TipoDato } {
            return this.Tipos;
        }

        public getTiposCampoCaptura(): { [nombre: string]: string } {
            return this.TiposCampoCaptura;
        }

        public static getInstance(): TiposDatoXbrl {
            if (TiposDatoXbrl._instance === null) {
                TiposDatoXbrl._instance = new TiposDatoXbrl();
            }
            return TiposDatoXbrl._instance;
        }

    }

    export class Concepto implements Serializable<Concepto> {
        Tipo: number;
        Balance: number;
        TipoDato: string;
        TipoDatoXbrl: string;
        TipoPeriodo: string;
        Conceptos: Array<Concepto>;
        RolEtiquetaPreferido: string;
        Nombre: string;
        EspacioNombres: string;
        Id: string;
        EsHipercubo: boolean;
        EsDimension: boolean;
        EsAbstracto: boolean;
        EsMiembroDimension: boolean;
        EsNillable: boolean;
        EsTipoDatoNumerico: boolean;
        EsTipoDatoToken: boolean;
        EsTipoDatoFraccion: boolean;
        Etiquetas: { [idioma: string]: { [rol: string]: Etiqueta } };
        Referencias: Array<Referencia>;
        ListaValoresToken: Array<string>;
        AtributosAdicionales: { [nombre: string]: string };
        deserialize(input) {

            this.Tipo = input.Tipo;
            this.Balance = input.Balance;
            this.TipoDato = input.TipoDato;
            this.TipoDatoXbrl = input.TipoDatoXbrl;
            this.TipoPeriodo = input.TipoPeriodo;

            var i = 0;
            if (input.Conceptos) {
                this.Conceptos = new Array<Concepto>();
                for (i = 0; i < input.Conceptos.length; i++) {
                    this.Conceptos.push(new Concepto().deserialize(input.Conceptos[i]));
                }
            }

            this.RolEtiquetaPreferido = input.RolEtiquetaPrefereido;
            this.Nombre = input.Nombre;
            this.EspacioNombres = input.EspacioNombres;
            this.Id = input.Id;
            this.EsHipercubo = input.EsHipercubo;
            this.EsDimension = input.EsDimension;
            this.EsAbstracto = input.EsAbstracto;
            this.EsMiembroDimension = input.EsMiembroDimension;
            this.EsNillable = input.EsNillable;

            this.EsTipoDatoNumerico = input.EsTipoDatoNumerico;
            this.EsTipoDatoToken = input.EsTipoDatoToken;
            this.EsTipoDatoFraccion = input.EsTipoDatoFraccion;

            if (input.Etiquetas) {
                this.Etiquetas = {};
                for (var rol in input.Etiquetas) {
                    if (input.Etiquetas.hasOwnProperty(rol)) {
                        if (!this.Etiquetas[rol]) {
                            this.Etiquetas[rol] = {};
                        }

                        for (var idioma in input.Etiquetas[rol]) {
                            if (input.Etiquetas[rol].hasOwnProperty(idioma)) {
                                this.Etiquetas[rol][idioma] = new Etiqueta().deserialize(input.Etiquetas[rol][idioma]);
                            }
                        }
                    }
                }
            }

            if (input.Referencias && input.Referencias.length) {
                this.Referencias = new Array<Referencia>();
                for (var i = 0; i < input.Referencias.length; i++) {
                    this.Referencias.push(new Referencia().deserialize(input.Referencias[i]));
                }
            }

            if (input.ListaValoresToken && input.ListaValoresToken.length) {
                this.ListaValoresToken = new Array<string>();
                for (var i = 0; i < input.ListaValoresToken.length; i++) {
                    this.ListaValoresToken.push(input.ListaValoresToken[i]);
                }
            }

            if (input.AtributosAdicionales)
            {
                this.AtributosAdicionales = {};
                for (var nombre in input.AtributosAdicionales)
                {
                    this.AtributosAdicionales[nombre] = input.AtributosAdicionales[nombre];
                }
            }
            return this;
        }
    }

    export class EstructuraFormato implements Serializable<EstructuraFormato> {
        IdConcepto: string;
        RolEtiquetaPreferido: string;
        SubEstructuras: Array<EstructuraFormato>;

        deserialize(input) {
            this.IdConcepto = input.IdConcepto;
            this.RolEtiquetaPreferido = input.RolEtiquetaPreferido;

            if (input.SubEstructuras) {
                var i = 0;
                this.SubEstructuras = new Array<EstructuraFormato>();
                for (i = 0; i < input.SubEstructuras.length; i++) {
                    this.SubEstructuras.push(new EstructuraFormato().deserialize(input.SubEstructuras[i]));
                }
            }

            return this;
        }
    }

    /**
     * Representa un rol de presentación de una taxonomía XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class RolPresentacion implements Serializable<RolPresentacion> {

        /** El nombre del rol para presentar al usuario */
        Nombre: string;

        /** El URI del formato */
        Uri: string;

        /** Indica que la IU asociada al rol está cargando */
        Cargando: boolean;

        /** La estructura jerárquica de conceptos que componen el rol de presentación */
        Estructuras: Array<EstructuraFormato>;

        /** Indica si el formato incluye conceptos que pertenecen a alguna dimensión */
        EsDimensional: boolean;

        /** Valor actual del campo de busqueda**/
        FiltroBusqueda: string;

        /** Indicador que nos proporciona información si se va presentar el rol o se va a ocultar*/
        OcultarRol: boolean;

        /**
         * Genera una cadena con la descripción para presentar al usuario de este rol de presentación. 
         */
        describir(): string {
            return shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCRIPCION_ROL') + this.Nombre;
        }

        deserialize(input) {

            this.Nombre = input.Nombre;
            this.Uri = input.Uri;
            this.Cargando = true;

            if (input.Estructuras) {
                var i = 0;
                this.Estructuras = new Array<EstructuraFormato>();
                for (i = 0; i < input.Estructuras.length; i++) {
                    this.Estructuras.push(new EstructuraFormato().deserialize(input.Estructuras[i]));
                }
            }

            this.EsDimensional = input.EsDimensional;

            return this;
        }
    }

    /**
     * Representa un sumando de una operación de cálculo de un rol en una taxonomía XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class SumandoCalculo implements Serializable<SumandoCalculo> {
        /** El identificador del concepto a acumular */
        IdConcepto: string;
        /** El peso que debe aplicarse al momento de acumular el concepto */
        Peso: number;

        deserialize(input) {

            this.IdConcepto = input.IdConcepto;
            this.Peso = input.Peso;

            return this;
        }
    }

    /**
     * Representa las operaciones de cálculo que deben realizarse dentro de un rol de una taxonomía XBRL
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class RolCalculo implements Serializable<RolCalculo> {

        /** El nombre legible para el rol */
        Nombre: string;

        /** EL URI que identifica el rol */
        Uri: string;

        /** El conjunto de operaciones de cálculo que deben realizarse */
        OperacionesCalculo: { [id: string]: Array<SumandoCalculo> };

        deserialize(input) {

            this.Nombre = input.Nombre;
            this.Uri = input.Uri;

            if (input.OperacionesCalculo) {
                var i = 0;
                this.OperacionesCalculo = {};
                for (var id in input.OperacionesCalculo) {
                    if (input.OperacionesCalculo.hasOwnProperty(id)) {
                        this.OperacionesCalculo[id] = new Array<SumandoCalculo>();
                        for (i = 0; i < input.OperacionesCalculo[id].length; i++) {
                            this.OperacionesCalculo[id].push(new SumandoCalculo().deserialize(input.OperacionesCalculo[id][i]));
                        }
                    }
                }
            }

            return this;
        }
    }

    /**
     * Define constantes relacionadas al visor XBRL comunes a todos los módulos
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class ConstantesComunes {

        /** El rol de las etiquetas por default */
        public static get ROL_ETIQUETA_DEFAULT(): string { return 'http://www.xbrl.org/2003/role/label'; }

        /** El idioma por defecto para las etiquetas */
        public static get IDIOMA_DEFAULT(): string { return 'es'; }

        /** El idioma inglés para la consulta de etiquetas de un concepto */
        public static get IDIOMA_INGLES(): string { return 'en'; }

        /** El espacio de nombres que identificad a las monedas */
        public static get ESPACIO_NOMBRES_MONEDAS(): string { return 'http://www.xbrl.org/2003/iso4217'; }

        /** El prefijo que identifica que se trata de una expresión que contiene una variable de un documento instancia */
        public static get PREFIJO_VARIABLES_DOCUMENTO_INSTANCIA(): string { return '#'; }

        /** La cadena que sirve para separar los diferentes elementos de un nombre calificado en XML  */
        public static get SEPARADOR_NOMBRE_CALIFICADO(): string { return ':'; }

        /** El tipo de dato completamente calificado que identifica a fractionItemType */
        public static get TIPO_DATO_FRACTION_ITEM_TYPE(): string { return 'http://www.xbrl.org/2003/instance:fractionItemType'; }

        /** El tipo de concepto que identifica un tuple */
        public static get TIPO_CONCEPTO_TUPLE(): number { return 1; }

        /** El tipo de concepto que identifica un item */
        public static get TIPO_CONCEPTO_ITEM(): number { return 2; }

        /** La cadena que identifica la precisión infinita */
        public static get CADENA_PRECISION_INFINITA(): string { return 'INF'; }

        /** La cadena que identifica los decimales infinitos */
        public static get CADENA_DECIMALES_INFINITA(): string { return 'INF'; }

        /** El valor de tipo de dato false para presentacion*/
        public static get VALOR_FALSE(): string { return 'No'; }

        /** El valor de tipo de dato true para presentacion*/
        public static get VALOR_TRUE(): string { return 'Si'; }

        /** Valor vacio*/
        public static get ESPACIO_VACIO(): string { return ' '; }

        /** La cadena que sirve como separador de los elementos que conforman una llave en el mapa de contextos por fechas */
        public static get SEPARADOR_LLAVE_FECHAS_CONTEXTO(): string { return '_'; }

        /** Contiene la lista de tipos de dato numéricos de la especificación XBRL */
        public static get TIPOS_DATO_NUMERICOS_XBRL(): Array<string> {
            return ['http://www.xbrl.org/2003/instance:decimalItemType',
                'http://www.xbrl.org/2003/instance:floatItemType',
                'http://www.xbrl.org/2003/instance:doubleItemType',
                'http://www.xbrl.org/2003/instance:integerItemType',
                'http://www.xbrl.org/2003/instance:nonPositiveIntegerItemType',
                'http://www.xbrl.org/2003/instance:negativeIntegerItemType',
                'http://www.xbrl.org/2003/instance:longItemType',
                'http://www.xbrl.org/2003/instance:intItemType',
                'http://www.xbrl.org/2003/instance:shortItemType',
                'http://www.xbrl.org/2003/instance:byteItemType',
                'http://www.xbrl.org/2003/instance:nonNegativeIntegerItemType',
                'http://www.xbrl.org/2003/instance:unsignedLongItemType',
                'http://www.xbrl.org/2003/instance:unsignedIntItemType',
                'http://www.xbrl.org/2003/instance:unsignedShortItemType',
                'http://www.xbrl.org/2003/instance:unsignedByteItemType',
                'http://www.xbrl.org/2003/instance:positiveIntegerItemType',
                'http://www.xbrl.org/2003/instance:monetaryItemType',
                'http://www.xbrl.org/2003/instance:sharesItemType',
                'http://www.xbrl.org/2003/instance:pureItemType',
                'http://www.xbrl.org/2003/instance:fractionItemType',
                'http://www.xbrl.org/dtr/type/numeric:perShareItemType'];
        }

        /** El formato que deberá aplicarse a las fechas que se presentan al usuario */
        public static get FORMATO_FECHA(): string { return 'YYYY-MM-DD'; }
        /** Tipo de archivo de taxonomía que representa a un schemaRef */
        public static get TIPO_ARCHIVO_SCHEMA_REF(): number { return 1; }
        /** Tipo de archivo de taxonomía que representa a un linkbase ref */
        public static get TIPO_ARCHIVO_LINKBASE_REF(): number { return 2; }
        /** Tipo de archivo de taxonomía que representa a un role ref */
        public static get TIPO_ARCHIVO_ROLE_REF(): number { return 3; }
        /** Tipo de archivo de taxonomía que representa a un arc role ref */
        public static get TIPO_ARCHIVO_ARC_ROLE_REF(): number { return 4; }

        /** Define el máximo de caracteres que puede presentar para la etiqueta de un concepto */
        public static get MAXIMO_CARACTERES_CONCEPTO(): number { return 50; }

        /** Constante que indica puntos suspensivos */
        public static get CADENA_PUNTOS_SUSPENSIVOS(): string { return "..."; }

        /** Valor generico del tipo de dato boolean para un valor negativo*/
        public static get EDITOR_XBRL_NO(): string { return "No"; }

        /** Valor generico del tipo de dato boolean para un valor positivo en idioma es*/
        public static get EDITOR_XBRL_ES_SI(): string { return "Si"; }

        /** Valor generico del tipo de dato boolean para un valor positivo en idioma en*/
        public static get EDITOR_XBRL_EN_SI(): string { return "Yes"; }



    }

    /**
     * Representa una taxonomía XBRL considerando los conceptos que forman parte de ella así como los diferentes roles y linkbases.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class Taxonomia implements Serializable<Taxonomia> {

        /** Los roles que contienen arcos de cálculo */
        RolesCalculo: Array<RolCalculo>;

        /** Los valores de las dimensiones default */
        DimensionDefaults: { [id: string]: string };

        /** Los solres que contienen arcos de presentación */
        RolesPresentacion: Array<RolPresentacion>;

        /** El catálogo de conceptos indexados por identificador */
        ConceptosPorId: { [id: string]: Concepto };

        /** Conjunto de tipos de datos XBRL de la taxonomía organizados por nombre */
        TiposDeDatoXbrlPorNombre: { [id: string]: TipoDatoXbrl };

        /** Listado de idiomas dentro de la taxonomia*/
        IdiomasTaxonomiaObjeto: { [id: string]: IdiomaTaxonomia };

        /** Listado de idiomas dentro de la taxonomia*/
        IdiomasTaxonomia: { [id: string]: string };

        /**  Las diferentes etiquetas asociadas a los roles organizadas por idioma y posteriormente por rol */
        EtiquetasRol: { [rol: string]: { [idioma: string]: Etiqueta } };
        /** Lista de hipercubos declarados organizado por rol */
        ListaHipercubos: { [rol: string]: Array<Hipercubo>; };
        /**
         * Obtiene una etiqueta de un concepto por medio de su identificador, el rol buscado y el idioma indicado. 
         * Si no existe la etiqueta solicitada, se obtendrá la etiqueta del rol por defecto para el idioma solicitado. 
         * Si no existe la etiqueta para el idioma solicitado, se obtendrá la etiqueta en inglés.
         *
         * @param idConcepto el identificador del concepto a consultar.
         * @param rol el URI del rol de etiqueta a consultar.
         * @param idioma el idioma en el que se desea consultar la etiqueta.
         * @return la etiqueta buscada o su reemplazo más viable. Una cadena vacía en caso de que no exista dicha etiqueta.
         */
        obtenerEtiquetaDeConcepto(idConcepto: string, rol: string, idioma: string): string {
            var etiqueta = '';

            var concepto = this.ConceptosPorId[idConcepto];
            if (concepto && concepto != null) {
                var etiquetasPorIdioma = concepto.Etiquetas[idioma];

                if (!etiquetasPorIdioma || etiquetasPorIdioma == null) {
                    etiquetasPorIdioma = concepto.Etiquetas[ConstantesComunes.IDIOMA_DEFAULT];
                    if (!etiquetasPorIdioma || etiquetasPorIdioma == null) {
                        etiquetasPorIdioma = concepto.Etiquetas[ConstantesComunes.IDIOMA_INGLES];
                    }
                }

                if (etiquetasPorIdioma && etiquetasPorIdioma != null) {
                    if (etiquetasPorIdioma[rol] && etiquetasPorIdioma[rol] != null) {
                        etiqueta = etiquetasPorIdioma[rol].Valor;
                    } else if (etiquetasPorIdioma[ConstantesComunes.ROL_ETIQUETA_DEFAULT] && etiquetasPorIdioma[ConstantesComunes.ROL_ETIQUETA_DEFAULT] != null) {
                        etiqueta = etiquetasPorIdioma[ConstantesComunes.ROL_ETIQUETA_DEFAULT].Valor;
                    }
                }
            }

            return etiqueta;
        }

        /**
         * Valida si el concepto enviado tiene referencias a mostrar.
         *
         * @param idConcepto el identificador del concepto a consultar.
         * @return true, en el caso que tenga referencias para mostrar de lo contrario regresa false.
         */
        tieneReferenciasConcepto(idConcepto: string): boolean {
            var tieneReferencias = false;
            var concepto = this.ConceptosPorId[idConcepto];
            if (concepto && concepto != null && concepto.Referencias && concepto.Referencias != null) {
                tieneReferencias = concepto.Referencias.length > 0 ? true : false
            }
            return tieneReferencias;
        }

        /**
         * Obtiene el concepto de la taxonomia.
         *
         * @param idConcepto el identificador del concepto a consultar.
         * @return el concepto de la taxonomia.
         */
        obtenerConcepto(idConcepto: string): Concepto {
            return this.ConceptosPorId[idConcepto]
        }


        /**
         * Obtiene una etiqueta de un rol por medio de su uri y el idioma indicado. 
         * Si no existe la etiqueta solicitada, se obtendrá la etiqueta del rol por defecto para el idioma solicitado. 
         * Si no existe la etiqueta para el idioma solicitado, se obtendrá la etiqueta en inglés.
         *
         * @param uriRol el URI del rol de etiqueta a consultar.
         * @param idioma el idioma en el que se desea consultar la etiqueta.
         * @return la etiqueta buscada o su reemplazo más viable. Una cadena vacía en caso de que no exista dicha etiqueta.
         */
        obtenerEtiquetaDeRol(uriRol: string, idioma: string): string {
            var etiqueta = '';

            var etiquetasPorIdioma = this.EtiquetasRol[idioma];
            if (etiquetasPorIdioma && etiquetasPorIdioma != null) {
                if (etiquetasPorIdioma[uriRol] && etiquetasPorIdioma[uriRol] != null) {
                    etiqueta = etiquetasPorIdioma[uriRol].Valor;
                } else {
                    etiquetasPorIdioma = this.EtiquetasRol[ConstantesComunes.IDIOMA_DEFAULT];

                    if (etiquetasPorIdioma[uriRol] && etiquetasPorIdioma[uriRol] != null) {
                        etiqueta = etiquetasPorIdioma[uriRol].Valor;
                    }

                }
            }

            return etiqueta;
        }


        /**
         * Genera un índice de todos los conceptos que participan en alguna operación de cálculo dentro de la taxonomía
         *
         * @return un objeto que tiene como llave los identificadores de los conceptos y como valor un arreglo con los conceptos a los que acumulan valor como operando en una operación de cálculo.
         */
        generarIndiceOperacionesCalculo(): { [idConcepto: string]: Array<string> } {
            var indiceOperacionesCalculo: { [idConcepto: string]: Array<string> } = {};

            for (var i = 0; i < this.RolesCalculo.length; i++) {
                var rol: abaxXBRL.model.RolCalculo = this.RolesCalculo[i];
                for (var id in rol.OperacionesCalculo) {
                    var idConceptoSumatoria: string = id;
                    var sumandos: Array<abaxXBRL.model.SumandoCalculo> = rol.OperacionesCalculo[id];

                    if (indiceOperacionesCalculo[idConceptoSumatoria]) {
                        if ($.inArray(idConceptoSumatoria, indiceOperacionesCalculo[idConceptoSumatoria]) == -1) {
                            indiceOperacionesCalculo[idConceptoSumatoria].push(idConceptoSumatoria);
                        }
                    } else {
                        indiceOperacionesCalculo[idConceptoSumatoria] = new Array<string>();
                        indiceOperacionesCalculo[idConceptoSumatoria].push(idConceptoSumatoria);
                    }

                    for (var k = 0; k < sumandos.length; k++) {
                        if (indiceOperacionesCalculo[sumandos[k].IdConcepto]) {
                            if ($.inArray(idConceptoSumatoria, indiceOperacionesCalculo[sumandos[k].IdConcepto]) == -1) {
                                indiceOperacionesCalculo[sumandos[k].IdConcepto].push(idConceptoSumatoria);
                            }
                        } else {
                            indiceOperacionesCalculo[sumandos[k].IdConcepto] = new Array<string>();
                            indiceOperacionesCalculo[sumandos[k].IdConcepto].push(idConceptoSumatoria);
                        }
                    }
                }
            }

            return indiceOperacionesCalculo;
        }

        deserialize(input) {

            if (input.RolesPresentacion) {
                var i = 0;
                this.RolesPresentacion = new Array<RolPresentacion>();
                for (i = 0; i < input.RolesPresentacion.length; i++) {
                    this.RolesPresentacion.push(new RolPresentacion().deserialize(input.RolesPresentacion[i]));
                }
            }

            if (input.RolesCalculo) {
                var i = 0;
                this.RolesCalculo = new Array<RolCalculo>();
                for (i = 0; i < input.RolesCalculo.length; i++) {
                    this.RolesCalculo.push(new RolCalculo().deserialize(input.RolesCalculo[i]));
                }
            }

            if (input.DimensionDefaults) {
                this.DimensionDefaults = {};
                for (var id in input.DimensionDefaults) {
                    if (input.DimensionDefaults.hasOwnProperty(id)) {
                        this.DimensionDefaults[id] = input.DimensionDefaults[id];
                    }
                }
            }

            if (input.TiposDeDatoXbrlPorNombre) {
                this.TiposDeDatoXbrlPorNombre = {};
                for (var id in input.TiposDeDatoXbrlPorNombre) {
                    if (input.TiposDeDatoXbrlPorNombre.hasOwnProperty(id)) {
                        this.TiposDeDatoXbrlPorNombre[id] = new TipoDatoXbrl().deserialize(input.TiposDeDatoXbrlPorNombre[id]);
                    }
                }
            }

            if (input.ConceptosPorId) {
                this.ConceptosPorId = {};
                for (var id in input.ConceptosPorId) {
                    if (input.ConceptosPorId.hasOwnProperty(id)) {
                        this.ConceptosPorId[id] = new Concepto().deserialize(input.ConceptosPorId[id]);
                    }
                }
            }

            if (input.IdiomasTaxonomia) {
                this.IdiomasTaxonomiaObjeto = {};
                this.IdiomasTaxonomia = {};
                var idIdioma = 0;
                for (var id in input.IdiomasTaxonomia) {
                    if (input.IdiomasTaxonomia.hasOwnProperty(id)) {
                        var idioma = new IdiomaTaxonomia();
                        idioma.ClaveIdioma = id;
                        idioma.DescripcionIdioma = input.IdiomasTaxonomia[id];
                        this.IdiomasTaxonomiaObjeto[idIdioma++] = idioma;
                        this.IdiomasTaxonomia[id] = input.IdiomasTaxonomia[id];
                    }
                }
            }

            if (input.EtiquetasRol) {
                this.EtiquetasRol = {};
                for (var idiomaRol in input.EtiquetasRol) {
                    if (input.EtiquetasRol.hasOwnProperty(idiomaRol)) {
                        if (!this.EtiquetasRol[idiomaRol]) {
                            this.EtiquetasRol[idiomaRol] = {};
                        }

                        for (var rol in input.EtiquetasRol[idiomaRol]) {
                            if (input.EtiquetasRol[idiomaRol].hasOwnProperty(rol)) {
                                this.EtiquetasRol[idiomaRol][rol] = new Etiqueta().deserialize(input.EtiquetasRol[idiomaRol][rol]);
                            }
                        }
                    }
                }

                //Se anexan los valores del rol por default
                if (!this.EtiquetasRol.hasOwnProperty(ConstantesComunes.IDIOMA_DEFAULT)) {
                    this.EtiquetasRol[ConstantesComunes.IDIOMA_DEFAULT] = {};

                    for (i = 0; i < this.RolesPresentacion.length; i++) {
                        var rolPresentacion = this.RolesPresentacion[i];

                        if (!this.EtiquetasRol[ConstantesComunes.IDIOMA_DEFAULT].hasOwnProperty(rolPresentacion.Uri)) {
                            var etiquetaRol = new Etiqueta();
                            etiquetaRol.Idioma = ConstantesComunes.IDIOMA_DEFAULT;
                            etiquetaRol.Rol = rolPresentacion.Uri;
                            etiquetaRol.Valor = rolPresentacion.Nombre;
                            this.EtiquetasRol[ConstantesComunes.IDIOMA_DEFAULT][rolPresentacion.Uri] = etiquetaRol;
                        }
                    }
                }

            }
            if (input.ListaHipercubos) {
                this.ListaHipercubos = {};
                for (var idrol in input.ListaHipercubos) {
                    this.ListaHipercubos[idrol] = new Array<Hipercubo>();
                    if (input.ListaHipercubos[idrol]) {
                        for (var idcubo in input.ListaHipercubos[idrol]) {
                            this.ListaHipercubos[idrol].push(new Hipercubo().deserialize(input.ListaHipercubos[idrol][idcubo]));
                        }
                    }
                }
            }



            return this;
        }
    }

    /**
    * Representa el conjunto de esquemas y linkbases importados en un documento de instancia
    *
    */
    export class DtsDocumentoInstancia implements Serializable<DtsDocumentoInstancia>{
        /** Indica el tipo de archivo importado en el documento */
        Tipo: number;
        /** Ruta del archivo importado*/
        HRef: string;
        /**RoleUri del arco o rol importado */
        RoleUri: string;
        /**Rol con el que se importa un archivo de linkbases */
        Role: string;

        deserialize(input) {

            this.Tipo = input.Tipo;
            this.HRef = input.HRef;
            this.RoleUri = input.RoleUri;
            this.Role = input.Role;
            return this;
        }
    }

    /**
     * Representa un tipo de dato XBRL.
     * Se incluye, para los tipos de datos Token la lista de posibles valores
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class TipoDatoXbrl implements Serializable<TipoDatoXbrl> {

        /**Espacio de nombres donde se definió el tipo de dato*/
        EspacioNombres: string;

        /**Nombre local del tipo de dato */
        Nombre: string;

        /**Indica si el tipo de dato de este item es de tipo fractionItemType o derivado de este.*/
        EsTipoDatoFraccion: boolean;

        /** Indica si el tipo de dato de este item es derivado de alguno de los tipos numéricos XBRL.*/
        EsTipoDatoNumerico: boolean;

        /** Indica si el tipo de dato de este item es de tipo monetaryItemType o derivado de este. */
        EsTipoDatoMonetario: boolean;

        /**Indica si el tipo de dato de este item es de tipo sharesItemType o derivado de este */
        EsTipoDatoAcciones: boolean;

        /**Indica si el tipo de dato de este item es de tipo pureItemType o derivado de este */
        EsTipoDatoPuro: boolean;

        /**Indica si el tipo de dato es tipo Token*/
        EsTipoDatoToken: boolean;

        /**Indica si el tipo de dato es tipo Boolean*/
        EsTipoDatoBoolean: boolean;

        /**Posible lista de valores para un tipo de dato token */
        ListaValoresToken: Array<string>;
        /** Patron señalado el token item type para cuando no hay valores */
        Pattern: string;

        deserialize(input) {

            this.EspacioNombres = input.EspacioNombres;
            this.Nombre = input.Nombre;
            this.EsTipoDatoFraccion = input.EsTipoDatoFraccion;
            this.EsTipoDatoNumerico = input.EsTipoDatoNumerico;

            this.EsTipoDatoMonetario = input.EsTipoDatoMonetario;
            this.EsTipoDatoAcciones = input.EsTipoDatoAcciones;
            this.EsTipoDatoPuro = input.EsTipoDatoPuro;
            this.EsTipoDatoToken = input.EsTipoDatoToken;
            this.EsTipoDatoBoolean = input.EsTipoDatoBoolean;

            this.ListaValoresToken = input.ListaValoresToken;
            this.Pattern = input.Pattern;
            return this;
        }
    }

    /**
     * Representa un tipo de dato XBRL.
     * Se incluye los idiomas de la taxonomia
     *
     * @author Luis Angel Morales Gonzalez
     * @version 1.0
     */
    export class IdiomaTaxonomia {

        /**Clave del idioma*/
        ClaveIdioma: string;

        /**Descripción del idioma */
        DescripcionIdioma: string;
    }


    /**
     * Representa un documento instancia XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class DocumentoInstanciaXbrl implements Serializable<DocumentoInstanciaXbrl> {

        /** El título del documento instancia */
        Titulo: string;

        /** La taxnomía con la que fue creado el documento instancia */
        Taxonomia: Taxonomia;

        /** Los contextos del documento instancia indexados por su identificador */
        ContextosPorId: { [id: string]: Contexto };

        /** Las unidades del documento instancia indexadas por su identificador */
        UnidadesPorId: { [id: string]: Unidad };

        /** Las entidades del documento instancia indexadas por su identificador */
        EntidadesPorId: { [id: string]: Entidad };

        /** El conjunto de hechos del documento instancia indexados por el identificador del concepto al que pertenecen */
        HechosPorIdConcepto: { [id: string]: Array<string> };

        /** El conjunto de hechos del documento instancia indexados por el identificador del hecho */
        HechosPorId: { [id: string]: Hecho };

        /** El conjunto de grupos de contextos equivalentes indexados por los diferentes contextos del documento instancia */
        GruposContextosEquivalentes: { [id: string]: Array<string> };

        /** Indice agrupado de contextos por las diferentes fechas que representan : La llave del mapa es la fecha o rango de fechas que tienen los periodos de la lista
        * En la lista de contextos existen los identificadores del los contextos cuyas fechas corresponden a la llave
        */
        ContextosPorFecha: { [fecha: string]: Array<string> };

        /** Índice de hechos agrupados por el ID de contexto al que están asignados, el identifcador del mapa
        * representa un identificador de contextos, como valor contiene una lista de identificadores de hechos asignados al contexto de la llave
        */
        HechosPorIdContexto: { [id: string]: Array<string> };

        /** Índice de hechos agrupados por el ID de la unidad a la que están asignados, el identificador del mapa 
        * representa un identificador de unidad, como valor contiene unal ista de identificadores de hechos asignados a la unidad de la llave
        */
        HechosPorIdUnidad: { [id: string]: Array<string> };

        /** El conjunto de archivos de DTS importados por el documento de instancia */
        DtsDocumentoInstancia: Array<DtsDocumentoInstancia>;

        /** Conjunto de errores de carga y validación del documento */
        Errores: Array<ErrorCargaTaxonomia>;

        /** Indica si el documento instancia requiere ser validado nuevamente debido a cambios recientes */
        RequiereValidacion: boolean;

        /** Indica si el documento instancia requiere ser validado contra las fórmulas de la taxonomía nuevamente debido a cambios recientes */
        RequiereValidacionFormulas: boolean;

        /** Indica si el documento tiene cambios pendientes por guardar */
        PendienteGuardar: boolean;

        /** Identificador del documento de instancia */
        IdDocumentoInstancia: number;

        /** Indica si el documento tiene errores de validación */
        EsCorrecto: boolean;

        /** Referencia al nombre del archivo con el que fue importado este documento */
        NombreArchivo: string;

        /** Identificador de la plantilla de captura con la que es capturado este documento */
        IdPlantilla: number;

        /** Identificador de la empresa a la que pertenece el documento */
        IdEmpresa: number;

        /** Indica si el usuario que consulta del documento instancia puede escribir datos */
        PuedeEscribir: boolean;

        /** Indica si el usuario que consulta del documento instancia tiene privilegios de propietario*/
        EsDueno: boolean;

        /** Indica si el documento instancia se encuentra bloqueado por algún usuario. */
        Bloqueado: boolean;

        /** Indica si los campos captura seran bloqueados por bloqueo del documento por usuario. */
        BloquearCamposCaptura: boolean;

        /** El identificador del usuario que realizó el bloqueo del documento. */
        IdUsuarioBloqueo: number;

        /** El nombre completo del usuario que realizó el bloqueo del documento. */
        NombreUsuarioBloqueo: string;

        /** Versión actual del documento de instancia */
        Version: number;

        /** Comentarios para el guardado de versiones */
        Comentarios: string;

        /* Modo de visualizacion del documento*/
        modoVistaFormato: string;

        /** Lista de parámetros de configuracion */
        ParametrosConfiguracion: { [id: string]: string };

        /** Idioma que se muestra en el documento instancia*/
        xbrlIdioma: abaxXBRL.model.IdiomaTaxonomia;

        /** Espacio de nombres del punto de entrada importado */
        EspacioNombresPrincipal: string;
        /**Diccionario de formulas que aplican para un hecho en particular.**/
        FormulasHecho: { [idHecho: string]: Array<string> }

        /** Indica que el documento solo se va a mostrar en solo lectura */
        documentoSoloLectura: boolean;

        /** Identifica si el documento instancia se esta tomando  para una comparación de varios documentos*/
        EsComparadorDocumento: boolean;

        /**
        * Contiene toda la estructura de documento instancia por rol de todo el documento instancia
        */
        estructurasDocumentoInstanciaPorRol: { [uriRol: string]: Array<any>; };

        /**
         * Constructor de la clase.
         */
        constructor() {
            this.HechosPorIdConcepto = {};
            this.HechosPorId = {};
            this.EntidadesPorId = {};
            this.ContextosPorId = {};
            this.UnidadesPorId = {};
            this.Errores = [];
            this.EsCorrecto = false;
            this.PendienteGuardar = true;
            this.GruposContextosEquivalentes = {};
            this.ContextosPorFecha = {};
            this.HechosPorIdContexto = {};
            this.HechosPorIdUnidad = {};
            this.ParametrosConfiguracion = {};
            this.FormulasHecho = {};
        }

        /** Verifica si en el listado de errores existen errores graves */
        tieneErroresGraves(): boolean {

            if (this.Errores && this.Errores != null && this.Errores.length) {
                for (var i = 0; i < this.Errores.length; i++) {
                    if (this.Errores[i].Severidad == model.SeveridadError.ErrorFatal) {
                        return true;
                    }
                }
            }

            return false;
        }

        /**
         * Obtiene un concepto de la taxonomía del documento instancia por medio de su identificador.
         * 
         * @param id el identificador del concepto a consultar.
         * @return el concepto asociado al identificador. undefined si no existe un concepto asociado al identificador proporcionado.
         */
        obtenerConceptoPorId(id: string): Concepto {
            return this.Taxonomia.ConceptosPorId[id];
        }

        /**
         * Obtiene una unidad del documento instancia por medio de su identificador
         * 
         * @param id el identificador de la unidad.
         * @return la unidad asociada al identificador proporcionado. undefined si no existe una unidad asociada al identificador proporcionado. 
         */
        obtenerUnidadPorId(id: string): Unidad {
            return this.UnidadesPorId[id];
        }

        /**
         * Obtiene un rol de presentación de la taxonomía por medio de su URI.
         *
         * @param uri el URI del rol a consultar.
         * @return el rol asociado al URI proporcionado como parámetro. undefined si no existe un rol asociado al identificador proporcionado. 
         */
        obtenerRolPresentacion(uri: string): RolPresentacion {
            var rol: RolPresentacion;
            if (this.Taxonomia.RolesPresentacion) {
                for (var i: number = 0; i < this.Taxonomia.RolesPresentacion.length; i++) {
                    if (this.Taxonomia.RolesPresentacion[i].Uri == uri) {
                        rol = this.Taxonomia.RolesPresentacion[i];
                        break;
                    }
                }
            }
            return rol;
        }

        /**
         * Obtiene un hecho por medio del identificador del concepto, del contexto y de la unidad (en caso de que aplique).
         *
         * @param idConcepto el identificador del concepto
         * @param idContexto el identificador del contexto 
         * @param idUnidad (opcional pasar null) el identificador de la unidad.
         * @return el hecho que corresponde a los identificadores proporcionados como parámetro. null en caso de no existir un hecho con dichas características. 
         */
        obtenerHecho(idConcepto: string, idContexto: string, idUnidad: string): Hecho {
            var hechos = this.HechosPorIdConcepto[idConcepto];
            var hecho: Hecho = null;
            if (hechos && hechos.length > 0) {
                for (var i: number = 0; i < hechos.length; i++) {
                    var hechoT = this.HechosPorId[hechos[i]];

                    if (hechoT.IdContexto == idContexto) {
                        if (!idUnidad || idUnidad == null || hechoT.IdUnidad == idUnidad) {
                            hecho = hechoT;
                            break;
                        } else {
                            var miUnidad = this.UnidadesPorId[idUnidad];
                            var otraUnidad = this.UnidadesPorId[hechoT.IdUnidad];
                            if (miUnidad && miUnidad != null && otraUnidad && otraUnidad != null && miUnidad.EstructuralmenteIgual(otraUnidad)) {
                                hecho = hechoT;
                                break;
                            }
                        }
                    } else {
                        var miContexto = this.ContextosPorId[idContexto];
                        var otroContexto = this.ContextosPorId[hechoT.IdContexto];
                        if (miContexto && miContexto != null && otroContexto && otroContexto != null && miContexto.EstructuralmenteIgual(otroContexto)) {
                            if (!idUnidad || idUnidad == null || hechoT.IdUnidad == idUnidad) {
                                hecho = hechoT;
                                break;
                            } else {
                                var miUnidad = this.UnidadesPorId[idUnidad];
                                var otraUnidad = this.UnidadesPorId[hechoT.IdUnidad];
                                if (miUnidad && miUnidad != null && otraUnidad && otraUnidad != null && miUnidad.EstructuralmenteIgual(otraUnidad)) {
                                    hecho = hechoT;
                                    break;
                                }
                            }
                        }
                    }
                }
            }

            return hecho;
        }


        /**
         * Obtiene un hecho por medio del identificador del mismo.
         *
         * @param idHecho el identificador del hecho
         * @return el hecho que corresponde al identificador proporcionados como parámetro. null en caso de no existir un hecho con dichas características. 
         */
        obtenerHechoPorId(idHecho: string): Hecho {
            var hecho: Hecho = null;
            if (this.HechosPorId[idHecho]) {
                hecho = this.HechosPorId[idHecho];
            }
            return hecho;
        }

        /**
         * Obtiene los hechos contenidos en el documento de instancia que corresponden a un concepto por medio del identificador.
         * 
         * @param idConcepto el identificador del concepto a consultar.
         * @return un arreglo con los identificadores de los hechos asociados al concepto identificado por el id proporcionado como parámetro. undefined en caso de no existir ningún hecho asociado a dicho concepto.
         */
        obtenerHechosPorConcepto(idConcepto: string): Array<string> {
            return this.HechosPorIdConcepto[idConcepto];
        }

        /**
         * Obtiene una cadena que describe el hecho indicando el concepto al que pertenece, el periodo de reporte y la unidad asociada (en caso de tener una).
         * @return una cadena con la descripción del hecho. 
         */
        describirHecho(hecho: Hecho): string {
            var descripcion: string = '';

            if (hecho.IdConcepto) {
                descripcion += shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCRIPCION_CONCEPTO') + this.Taxonomia.obtenerEtiquetaDeConcepto(hecho.IdConcepto, ConstantesComunes.ROL_ETIQUETA_DEFAULT, this.xbrlIdioma.ClaveIdioma);
            }

            if (hecho.IdContexto) {
                var contexto = this.ContextosPorId[hecho.IdContexto];
                if (contexto && contexto != null) {
                    descripcion += ' ' + contexto.describir();
                }
            }

            if (hecho.IdUnidad) {
                var unidad = this.UnidadesPorId[hecho.IdUnidad];
                if (unidad && unidad != null) {
                    descripcion += shared.service.AbaxXBRLUtilsService.getValorEtiqueta('EDITOR_XBRL_DESCRIPCION_UNIDAD') + unidad.describir();
                }
            }

            return descripcion;
        }

        /**
         * Determina si un hecho tiene una unidad equivalente a la unidad de otro hecho.
         *
         * @param hecho el hecho referencia.
         * @param otroHecho el hecho contra el cual se comparará.
         * @return true si las unidades de los hechos son equivalentes. false en cualquier otro caso.
         */
        UnidadesEquivalente(hecho: Hecho, otroHecho: Hecho): boolean {
            var resultado: boolean = false;
            if ((!hecho.IdUnidad || hecho.IdUnidad == null) && (!otroHecho.IdUnidad || otroHecho.IdUnidad == null)) {
                resultado = true;
            } else if ((hecho.IdUnidad && hecho.IdUnidad != null) && (otroHecho.IdUnidad && otroHecho.IdUnidad != null)) {
                var unidad: Unidad = this.UnidadesPorId[hecho.IdUnidad];
                var otraUnidad: Unidad = this.UnidadesPorId[otroHecho.IdUnidad];
                if (unidad && unidad != null && otraUnidad && otraUnidad != null) {
                    resultado = unidad.EstructuralmenteIgual(otraUnidad);
                }
            }
            return resultado;
        }

        /**
         * Verifica y agrega los elementos con los que este elemento se duplica a su lista interna de duplicados
         *
         * @param hecho el elemento a verificar
         */
        VerificarDuplicidad(hecho: Hecho): void {

            var esDuplicado: boolean = true;

            if (hecho.Tipo == ConstantesComunes.TIPO_CONCEPTO_ITEM) {
                if (this.HechosPorIdConcepto[hecho.IdConcepto] && this.HechosPorIdConcepto[hecho.IdConcepto] != null) {
                    for (var i = 0; i < this.HechosPorIdConcepto[hecho.IdConcepto].length; i++) {
                        var hechoComparar = this.HechosPorId[this.HechosPorIdConcepto[hecho.IdConcepto][i]];

                        var contextoEquivalente = false;
                        var unidadEquivalente = false;
                        var mismaTupla = false;

                        if (hecho.IdContexto === hechoComparar.IdContexto) {
                            contextoEquivalente = true;
                        } else {
                            var miContexto = this.ContextosPorId[hecho.IdContexto];
                            var otroContexto = this.ContextosPorId[hechoComparar.IdContexto];
                            if (miContexto && miContexto != null && otroContexto && otroContexto != null && miContexto.EstructuralmenteIgual(otroContexto)) {
                                contextoEquivalente = true;
                            }
                        }

                        if (hecho.EsNumerico) {
                            if (hecho.IdUnidad === hechoComparar.IdUnidad) {
                                unidadEquivalente = true;
                            } else {
                                var miUnidad = this.UnidadesPorId[hecho.IdUnidad];
                                var otraUnidad = this.UnidadesPorId[hechoComparar.IdUnidad];
                                if (miUnidad && miUnidad != null && otraUnidad && otraUnidad != null && miUnidad.EstructuralmenteIgual(otraUnidad)) {
                                    unidadEquivalente = true;
                                }
                            }
                        } else {
                            unidadEquivalente = true;
                        }

                        if (((hecho.IdTuplaPadre && hecho.IdTuplaPadre != null) && (!hechoComparar.IdTuplaPadre || hechoComparar.IdTuplaPadre == null)) || ((hechoComparar.IdTuplaPadre && hechoComparar.IdTuplaPadre != null) && (!hecho.IdTuplaPadre || hecho.IdTuplaPadre == null))) {
                            mismaTupla = false;
                        } else {
                            if (hecho.IdTuplaPadre && hecho.IdTuplaPadre != null && hechoComparar.IdTuplaPadre && hecho.IdTuplaPadre != null) {
                                if (hecho.IdTuplaPadre === hechoComparar.IdTuplaPadre) {
                                    mismaTupla = true;
                                }
                            } else {
                                mismaTupla = true;
                            }
                        }

                        if (contextoEquivalente && unidadEquivalente && mismaTupla) {
                            if (!hecho.DuplicadoCon || hecho.DuplicadoCon == null) {
                                hecho.DuplicadoCon = new Array<string>();
                            }
                            if (!hechoComparar.DuplicadoCon || hechoComparar.DuplicadoCon == null) {
                                hechoComparar.DuplicadoCon = new Array<string>();
                            }
                            if ($.inArray(hechoComparar.Id, hecho.DuplicadoCon) == -1) {
                                hecho.DuplicadoCon.push(hechoComparar.Id);
                            }
                            if ($.inArray(hecho.Id, hechoComparar.DuplicadoCon) == -1) {
                                hechoComparar.DuplicadoCon.push(hecho.Id);
                            }
                        }
                    }
                }
                else if (hecho.Tipo == ConstantesComunes.TIPO_CONCEPTO_TUPLE) {

                    if (this.HechosPorIdConcepto[hecho.IdConcepto] && this.HechosPorIdConcepto[hecho.IdConcepto] != null) {
                        for (var i = 0; i < this.HechosPorIdConcepto[hecho.IdConcepto].length; i++) {
                            var hechoComparar = this.HechosPorId[this.HechosPorIdConcepto[hecho.IdConcepto][i]];
                            if (this.EsTuplaDuplicada(hecho, hechoComparar)) {
                                if (!hecho.DuplicadoCon || hecho.DuplicadoCon == null) {
                                    hecho.DuplicadoCon = new Array<string>();
                                }
                                if (!hechoComparar.DuplicadoCon || hechoComparar.DuplicadoCon == null) {
                                    hechoComparar.DuplicadoCon = new Array<string>();
                                }
                                if ($.inArray(hechoComparar.Id, hecho.DuplicadoCon) == -1) {
                                    hecho.DuplicadoCon.push(hechoComparar.Id);
                                }
                                if ($.inArray(hecho.Id, hechoComparar.DuplicadoCon) == -1) {
                                    hechoComparar.DuplicadoCon.push(hecho.Id);
                                }
                            }
                        }
                    }
                }
            }

        }

        /** 
        * Elimina el hecho de la lista de duplicados en los otros hechos.
        * @hecho Hecho que se pretende eliminar del listado de duplicados de ostros hechos.
        **/
        EliminaDuplicidadHecho(hecho: Hecho): void {
            if (hecho && hecho !== null && hecho.DuplicadoCon) {
                var idHechoActual = hecho.Id;
                for (var index; index < hecho.DuplicadoCon; index++) {
                    var idHechoDuplicado: string = hecho.DuplicadoCon[index];
                    var hechoDuplicado: Hecho = this.HechosPorId[idHechoDuplicado];
                    delete hechoDuplicado.DuplicadoCon[idHechoActual];
                }
                hecho.DuplicadoCon = new Array<string>();
            }
        }

        /**
         * Determina si una tupla está duplicada con otra.
         * 
         * @param tupla la tupla que se tomará como referencia.
         * @param tuplaComprar la tupla que se compara contra la referencia.
         * @return true si la tupla está duplicada con la de referencia. false en cualquier otro caso.
         */
        EsTuplaDuplicada(tupla: Hecho, tuplaComparar: Hecho): boolean {

            var resultado: boolean = true;

            if (tupla.IdConcepto !== tuplaComparar.IdConcepto) {
                resultado = false;
            } else if (tupla.Hechos.length != tuplaComparar.Hechos.length) {
                resultado = false;
            } else if (tupla.IdTuplaPadre && tupla.IdTuplaPadre != null && tuplaComparar.IdTuplaPadre && tuplaComparar.IdTuplaPadre != null && tupla.IdTuplaPadre !== tuplaComparar.IdTuplaPadre) {
                resultado = false;
            } else {
                /*
                var copiaComparar = tuplaComparar.Hechos.slice();
                for (var i = 0; i < tupla.Hechos.length; i++) {
                    var hechoEquivalenteEncontrado: boolean = false;
                    for (var j = 0; j < copiaComparar.length; j++) {
                        
                        var hechoI = this.HechosPorId[tupla.Hechos[i]];

                        var hechoJ = this.HechosPorId[copiaComparar[j]];

                        if (hechoI.Tipo == ConstantesComunes.TIPO_CONCEPTO_TUPLE && hechoJ.Tipo == ConstantesComunes.TIPO_CONCEPTO_TUPLE) {
                            if (this.EsTuplaDuplicada(hechoI, hechoJ)) {
                                hechoEquivalenteEncontrado = true;
                                copiaComparar.splice(j, 1);
                                break;
                            }
                        } else if (hechoI.Tipo == ConstantesComunes.TIPO_CONCEPTO_ITEM && hechoJ.Tipo == ConstantesComunes.TIPO_CONCEPTO_ITEM) {

                            if (hechoI.IdConcepto === hechoJ.IdConcepto) {
                                if (hechoI.IdContexto === hechoJ.IdContexto || this.ContextosPorId[hechoI.IdContexto].EstructuralmenteIgual(this.ContextosPorId[hechoJ.IdContexto])) {
                                    if (hechoI.EsNumerico) {
                                        if (hechoI.ValorRedondeado == hechoJ.ValorRedondeado) {
                                            hechoEquivalenteEncontrado = true;
                                            copiaComparar.splice(j, 1);
                                            break;
                                        }
                                    } else {
                                        if (hechoI.ValorHecho === hechoJ.ValorHecho) {
                                            hechoEquivalenteEncontrado = true;
                                            copiaComparar.splice(j, 1);
                                            break;
                                        }
                                    }
                                }
                            }

                            break;
                        }
                    }
                    if (!hechoEquivalenteEncontrado) {
                        resultado = false;
                        break;
                    }
                }
                */
            }

            return resultado
        }

        /**
        * Elimina del documento de instancia los contextos que ningún hecho está utilizando
        */
        QuitarContextosNoUsados(): void {
            var contextosFinales: { [id: string]: Contexto } = {};
            for (var idCtx in this.ContextosPorId) {
                if (this.HechosPorIdContexto[idCtx] && this.HechosPorIdContexto[idCtx].length && this.HechosPorIdContexto[idCtx].length > 0) {
                    contextosFinales[idCtx] = this.ContextosPorId[idCtx];
                }
            }
            this.ContextosPorId = contextosFinales;
        }
        /**
        * Elimina del documento de instancia las unidades que ningún hecho está utilizando
        */
        QuitarUnidadesNoUsadas(): void {
            var unidadesFinales: { [id: string]: Unidad } = {};
            for (var idUnidad in this.UnidadesPorId) {
                if (this.HechosPorIdUnidad[idUnidad] && this.HechosPorIdUnidad[idUnidad].length && this.HechosPorIdUnidad[idUnidad].length > 0) {
                    unidadesFinales[idUnidad] = this.UnidadesPorId[idUnidad];
                }
            }
            this.UnidadesPorId = unidadesFinales;
        }
        deserialize(input) {

            this.Titulo = input.Titulo;
            this.IdDocumentoInstancia = input.IdDocumentoInstancia;
            this.EsCorrecto = input.EsCorrecto;
            this.NombreArchivo = input.NombreArchivo;
            this.IdPlantilla = input.IdPlantilla;
            this.IdEmpresa = input.IdEmpresa;
            this.PuedeEscribir = input.PuedeEscribir;
            this.EsDueno = input.EsDueno;
            this.Bloqueado = input.Bloqueado;
            this.IdUsuarioBloqueo = input.IdUsuarioBloqueo;
            this.NombreUsuarioBloqueo = input.NombreUsuarioBloqueo;
            this.Version = input.Version;
            this.Comentarios = input.Comentarios;
            this.RequiereValidacion = true;
            this.RequiereValidacionFormulas = true;
            this.EspacioNombresPrincipal = input.EspacioNombresPrincipal;
            this.HechosPorIdConcepto = {};
            this.HechosPorIdContexto = {};
            this.HechosPorIdConcepto = {};
            this.HechosPorIdUnidad = {};
            this.ContextosPorFecha = {};


            if (input.Taxonomia) {
                this.Taxonomia = new Taxonomia().deserialize(input.Taxonomia);
            }

            if (input.ContextosPorId) {
                this.ContextosPorId = {};
                for (var id in input.ContextosPorId) {
                    if (input.ContextosPorId.hasOwnProperty(id)) {
                        this.ContextosPorId[id] = new Contexto().deserialize(input.ContextosPorId[id]);
                    }
                }
            }

            if (input.UnidadesPorId) {
                this.UnidadesPorId = {};
                for (var id in input.UnidadesPorId) {
                    if (input.UnidadesPorId.hasOwnProperty(id)) {
                        this.UnidadesPorId[id] = new Unidad().deserialize(input.UnidadesPorId[id]);
                    }
                }
            }

            if (input.EntidadesPorId) {
                this.EntidadesPorId = {};
                for (var id in input.EntidadesPorId) {
                    if (input.EntidadesPorId.hasOwnProperty(id)) {
                        this.EntidadesPorId[id] = new Entidad().deserialize(input.EntidadesPorId[id]);
                    }
                }
            }

            if (input.HechosPorId) {
                this.HechosPorId = {};
                for (var property in input.HechosPorId) {
                    if (input.HechosPorId.hasOwnProperty(property)) {
                        if (!this.HechosPorId[property]) {
                            this.HechosPorId[property] = new Hecho().deserialize(input.HechosPorId[property]);
                        }
                    }
                }
            }

            if (input.HechosPorIdConcepto) {
                for (var property in input.HechosPorIdConcepto) {
                    if (input.HechosPorIdConcepto.hasOwnProperty(property)) {
                        if (!this.HechosPorIdConcepto[property]) {
                            this.HechosPorIdConcepto[property] = new Array<string>();
                        }
                        for (var i: number = 0; i < input.HechosPorIdConcepto[property].length; i++) {
                            this.HechosPorIdConcepto[property].push(input.HechosPorIdConcepto[property][i]);
                        }
                    }
                }
            }

            if (input.HechosPorIdContexto) {
                for (var property in input.HechosPorIdContexto) {
                    if (input.HechosPorIdContexto.hasOwnProperty(property)) {
                        if (!this.HechosPorIdContexto[property]) {
                            this.HechosPorIdContexto[property] = new Array<string>();
                        }
                        for (var i: number = 0; i < input.HechosPorIdContexto[property].length; i++) {
                            this.HechosPorIdContexto[property].push(input.HechosPorIdContexto[property][i]);
                        }
                    }
                }
            }

            if (input.HechosPorIdUnidad) {
                for (var property in input.HechosPorIdUnidad) {
                    if (input.HechosPorIdUnidad.hasOwnProperty(property)) {
                        if (!this.HechosPorIdUnidad[property]) {
                            this.HechosPorIdUnidad[property] = new Array<string>();
                        }
                        for (var i: number = 0; i < input.HechosPorIdUnidad[property].length; i++) {
                            this.HechosPorIdUnidad[property].push(input.HechosPorIdUnidad[property][i]);
                        }
                    }
                }
            }

            if (input.GruposContextosEquivalentes) {
                this.GruposContextosEquivalentes = {};
                for (var property in input.GruposContextosEquivalentes) {
                    if (input.GruposContextosEquivalentes.hasOwnProperty(property)) {
                        if (!this.GruposContextosEquivalentes[property]) {
                            this.GruposContextosEquivalentes[property] = new Array<string>();
                        }
                        for (var i: number = 0; i < input.GruposContextosEquivalentes[property].length; i++) {
                            this.GruposContextosEquivalentes[property].push(input.GruposContextosEquivalentes[property][i]);
                        }
                    }
                }
            }

            if (input.DtsDocumentoInstancia) {
                this.DtsDocumentoInstancia = new Array<DtsDocumentoInstancia>();
                for (var dts in input.DtsDocumentoInstancia) {
                    this.DtsDocumentoInstancia.push(new DtsDocumentoInstancia().deserialize(input.DtsDocumentoInstancia[dts]));
                }
            }

            if (input.Errores) {
                this.Errores = new Array<ErrorCargaTaxonomia>();
                for (var error in input.Errores) {
                    this.Errores.push(new ErrorCargaTaxonomia().deserialize(input.Errores[error]));
                }
            }

            if (input.ContextosPorFecha) {
                this.ContextosPorFecha = {};
                for (var property in input.ContextosPorFecha) {
                    if (input.ContextosPorFecha.hasOwnProperty(property)) {
                        if (!this.ContextosPorFecha[property]) {
                            this.ContextosPorFecha[property] = new Array<string>();
                        }
                        for (var i: number = 0; i < input.ContextosPorFecha[property].length; i++) {
                            this.ContextosPorFecha[property].push(input.ContextosPorFecha[property][i]);
                        }
                    }
                }
            }

            if (input.ParametrosConfiguracion) {
                this.ParametrosConfiguracion = {};
                for (var propertyParam in input.ParametrosConfiguracion) {
                    if (input.ParametrosConfiguracion.hasOwnProperty(propertyParam)) {
                        this.ParametrosConfiguracion[propertyParam] = input.ParametrosConfiguracion[propertyParam];
                    }
                }
            }

            if (input.estructurasDocumentoInstanciaPorRol) {
                this.estructurasDocumentoInstanciaPorRol = {};
                for (var estructura in input.estructurasDocumentoInstanciaPorRol) {
                    if (input.estructurasDocumentoInstanciaPorRol.hasOwnProperty(estructura)) {
                        this.estructurasDocumentoInstanciaPorRol[estructura] = input.estructurasDocumentoInstanciaPorRol[estructura];
                    }
                }
            }



            return this;
        }
    }

    /**
     * Representa el detalle de una operación de cálculo, en específico un operando de una operación aritmética.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class DetalleOperando {

        /** El identificador del hecho operando */
        IdHecho: string;

        /** El identificador de un concepto */
        IdConcepto: string;

        /** El identificador de un contexto */
        IdContexto: string;

        /** El identificador de una unidad */
        IdUnidad: string;

        /** El peso con el que se deberá considerar el operando en la operación de cálculo */
        Peso: number;

        /** El valor obtenido del concepto que se utilizó para realizar la operación aritmética */
        Valor: string;

        /** Indica si existe un detalle de operaciones asociado a este hecho */
        TieneDetalleOperaciones: boolean;

        /** Indica si existen operaciones de cálculo asociadas a este hecho */
        TieneOperacionesCalculo: boolean;

        /** Contiene el estado de la validación del hecho dentro del documento */
        EstadoValidacion: EstadoValidacion;

        /** El valor que resultó de la operación de cálculo */
        ValorCalculado: number;

        /**
         * Los valores a presentar de la dimensión
         */
        InformacionDimensiones: Array<{ dimension: string; miembro: string; valorTipificado: string; }>;

        /** Valor de la expresion numerica del hecho de tipo numerico */
        expresionNumerico: string;

        /** Rol opcional de la etiqueta del operando para desplegar sus operaciones */
        RolEtiqueta: string;
    }

    /**
     * Representa el dealle de una operación de cálculo del proceso de validación de un documento instancia.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class DetalleOperacion {

        /** El identificador de un concepto */
        IdConcepto: string;

        /** El identificador de un contexto */
        IdContexto: string;

        /** El identificador de una unidad */
        IdUnidad: string;

        /** El identificador del hecho */
        IdHecho: string;

        /** El URI del rol donde se originó el error de cálculo */
        UriRol: string;

        /** El valor obtenido del concepto que se utilizó para validar la operación aritmética */
        Valor: string;

        /** El valor que resultó de la operación de cálculo */
        ValorCalculado: string;

        /** El detalle de los operandos que participaron en la operación de cálculo */
        DetalleOperandos: Array<DetalleOperando>;

        /** Indica si la operación pudo ejecutarse con éxito o no */
        OperacionEjecutada: boolean;

        /** Contiene el motivo por el cual no pudo realizarse la validación */
        Motivo: string;

        /** Indica que los operandos contienen información dimensional a presentar */
        ContieneInformacionDimension: boolean;

        /** Indica que la fórmula contiene operaciones de cálculo */
        EsFormulaDeCalculo: boolean;

        /** Indica si el tipo de operación es fórmula u operación cálculo */
        EsFormula: boolean

        /** El identificador de la fórmula que está relacionada al detalle de la operación */
        IdFormula: string;

        /** Contiene el estado de la validación de la operación realizada */
        EstadoValidacion: EstadoValidacion;

        /** Contiene el estado de la validación de las formulas */
        EstadoValidacionFormula: EstadoValidacion;

        /** Valor de la expresion numerica del hecho de tipo numerico */
        expresionNumerico: string;
        /**
        * Bandera que indica si se debe o no mostrar una descripción del periodo.
        **/
        mostrarPeriodo: boolean;
    }

    /**
     * Definición de una enumeración la cual contiene la descripción de los tipos de fórmula disponibles.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export enum TipoFormula {

        /** Indica que la fórmula es tipo evaluación de existencia */
        ExistenceAssertion = 1,

        /** Indica que la fórmula es tipo evaluación de valor */
        ValueAssertion = 2
    }
    /**
    * Definición de una enumeración la cual contiene la bandera de indicación para hacer un match entre
    * periodos con diferente tipo
    * @author Emigdio Hernandez
    * @version 1.0
    */
    export enum TipoMatchPeriodo {
        /** Indica que para hacer un match entre un periodo de tipo duración e instante se utiliza la fecha de inicio */
        PeriodStartMatch = 1,
        /** Indica que para hacer un match entre un periodo de tipo duración e instante se utiliza la fecha de fin */
        PeriodEndMatch = 2
    }

    /**
    * Representa una definición de una fórmula de validación para una taxonomía XBRL.
    *
    * @author José Antonio Huizar Moreno
    * @version 1.0
    */
    export class DefinicionFormula implements Serializable<DefinicionFormula> {

        /** El identificador único de la fórmula */
        Id: string;

        /** El tipo de fórmula */
        TipoFormula: TipoFormula;

        /** La expresión que se evaluará en la fórmula */
        Expresion: string;

        /** El mensaje que se presentará al usuario en caso de que exista un error al evaluar la fórmual */
        MensajeError: string;

        /** El mensaje que se presentará al usuario en caso de que sea exitosa la evaluación de la fórmula */
        MensajeExito: string;

        /** Indica si el evaluador de fórmulas deberá verificar que todas las variables coincidan en periodo */
        VariablesCoincidenPeriodo: boolean;

        /** La lista con la definición detallada de las variables que participan en la fórmula */
        DefinicionVariables: { [idVariable: string]: DefinicionVariableFormula };

        /** Indica si la fórmula requiere ser validada nuevamente debido a cambios recientes */
        RequiereValidacion: boolean;

        /**Definicion de una fabrica de formulas. **/
        EvaluacionDinamica: { Evaluar(servicioAbax: services.AbaxXBRLServices): void; };

        /** Indica que aunque exista un fallback es una formula que debe de forzar en validar tomando en cuenta el valor de fallback */
        ExcepcionSinHijos: boolean;

        /** El nivel de severidad para reportar el error en caso de que no existan hijos para poder evaluar la fórmula */
        SeveridadExcepcionSinHijos: EstadoValidacion;

        /** Indica que la formula corresponde a una advertencia */
        EsAdvertencia: boolean;

        /**
        * Bandera que indica si se debe demostrar el periodo.
        **/
        MostrarPeriodo: boolean;
        /**
        * Bandera que indica que la epxresión a evaluar es de tipo javascript.
        **/
        ExpresionJavaScript: boolean;

        deserialize(input: any) {

            this.Id = input.Id;
            this.RequiereValidacion = true;
            this.TipoFormula = input.TipoFormula;
            this.Expresion = input.Expresion;
            this.MensajeError = input.MensajeError;
            this.MensajeExito = input.MensajeExito;
            this.VariablesCoincidenPeriodo = input.VariablesCoincidenPeriodo;
            this.ExcepcionSinHijos = input.ExcepcionSinHijos;
            this.EsAdvertencia = input.EsAdvertencia;
            this.MostrarPeriodo = input.MostrarPeriodo == true;
            this.ExpresionJavaScript = input.ExpresionJavaScript == true;

            if (input.SeveridadExcepcionSinHijos) {
                this.SeveridadExcepcionSinHijos = input.SeveridadExcepcionSinHijos;
            } else {
                this.SeveridadExcepcionSinHijos = EstadoValidacion.SinDeterminar;
            }

            if (input.DefinicionVariables) {
                this.DefinicionVariables = {};
                for (var idVariable in input.DefinicionVariables) {
                    if (input.DefinicionVariables.hasOwnProperty(idVariable)) {
                        this.DefinicionVariables[idVariable] = new DefinicionVariableFormula().deserialize(input.DefinicionVariables[idVariable]);
                    }
                }
            }
            if (input.EvaluacionDinamica) {
                this.EvaluacionDinamica = input.EvaluacionDinamica;
            }

            return this;
        }

    }


    /**
     * Representa una definición de una variable utilizada en una fórmula XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class DefinicionVariableFormula {

        /** El identificador de la variable */
        Id: string;

        /** El identificador del concepto del hecho que da valor a esta variable */
        IdConcepto: string;

        /** Los filtros que pueden aplicarse o no a las dimensiones del contexto en que aparece el hecho */
        FiltrosDimension: Array<FiltroDimension>;

        /** Indica si este hecho puede eliminarse desde el diálogo que presenta el resumen de errores */
        PuedeEliminarse: boolean;

        /** Indica si este hecho puede crearse desde el diálogo que presenta el resumen de errores */
        PuedeCrearse: boolean;

        /** El identificador de la unidad de la plantilla que deberá usuarse en caso de crear un nuevo hecho */
        IdUnidadPlantilla: string;

        /** El identificador del contexto de la plantilla que deberá usuarse en caso de crear un nuevo hecho */
        IdContextoPlantilla: string;

        /** Indica que la variable cuenta el número de ocurrencias de hechos que pertenecen al concepto */
        ConteoHechos: boolean;

        /** Indica si el valor de la variable debe ser sustituido por el primer schemaRef incluido en el documento instancia */
        EsSchemaRef: boolean;

        /** Valor que deberá ser asignado a la variable en caso de que no exista un hecho que cumpla con las condiciones descritas */
        ValorFallback: string;

        /** Indica que la cantidad de hechos que componen este valor puede cambiar dinamicamente durante la edición del documento. **/
        EsDinamica: boolean;

        /**Bandera que indica si la variable es el resultado de la función para enviarla al final. **/
        EsResultado: boolean;

        /** Bandera que indica como se debe de comparar las fechas entre periodos de diferente tipo */
        EmpatarPeriodo: number;

        /** Rol de etiqueta a utilizar al desplegar el detalle de las operaciones */
        RolEtiqueta: string;

        /** Indica si existe una excepción de periodo que no coincida con la variable de que coinciden en periodo las variables para la ejecución de la formula */
        ExcepcionPeriodo: boolean;
        /**
        * Bandera que indica que la variable de ben contener dimensiones equivalnetes a la primera variable.
        **/
        MismasDimensiones: boolean;
        /**
        * Bandera que indica si solo se deben evaluar conjuntos parciales, es decir que puede tener menos o más dimensiones el la variable pivote.
        */
        ConjuntoDimensionesParcial: boolean;
        /**
        * Diccionario con los filtros por concepto para los contextos evaluados.
        **/
        DiccionarioFiltroPorcontexto: { [idContexto: string]: { [idConceptoDimension: string]: FiltroDimension } };
        /**
        * Diccionario con los contextos equivalentes para la variable.
        **/
        DiccionarioContextosEquivalentes: { [idContexto: string]: { [idContexto: string]: boolean } };

        /**
        * Bandera que indica que la variable de ben contener dimensiones equivalnetes a la primera variable.
        **/
        retornarIdentificadorHecho: boolean;

        deserialize(input: any) {

            this.Id = input.Id;
            this.IdConcepto = input.IdConcepto;
            if (input.FiltrosDimension && input.FiltrosDimension.length && input.FiltrosDimension.length > 0) {
                this.FiltrosDimension = new Array<FiltroDimension>();
                for (var i = 0; i < input.FiltrosDimension.length; i++) {
                    this.FiltrosDimension.push(new FiltroDimension().deserialize(input.FiltrosDimension[i]));
                }
            }
            this.EsSchemaRef = input.EsSchemaRef;
            this.ValorFallback = input.ValorFallback;
            this.PuedeEliminarse = input.PuedeEliminarse;
            this.PuedeCrearse = input.PuedeCrearse;
            this.IdUnidadPlantilla = input.IdUnidadPlantilla;
            this.IdContextoPlantilla = input.IdContextoPlantilla;
            this.ConteoHechos = input.ConteoHechos;
            this.EsDinamica = input.EsDinamica == true;
            this.EsResultado = input.EsResultado == true;
            this.MismasDimensiones = input.MismasDimensiones == true;
            this.ConjuntoDimensionesParcial = input.ConjuntoDimensionesParcial == true;
            this.EmpatarPeriodo = input.EmpatarPeriodo;
            this.RolEtiqueta = input.RolEtiqueta;
            this.ExcepcionPeriodo = input.ExcepcionPeriodo;
            this.DiccionarioFiltroPorcontexto = {};
            this.DiccionarioContextosEquivalentes = {};
            this.retornarIdentificadorHecho = input.retornarIdentificadorHecho == true;

            return this;
        }
    }

    /**
     * Representa un filtro de variable para una fórmula XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class FiltroDimension extends DimensionInfo implements Serializable<FiltroDimension> {

        /** El valor como cadena del elemento miembro tipificado */
        ValorTipificado: string;

        /** Indica para una dimensión implícita si el valor debe ser distinto del especificado */
        DistintoDe: boolean;
        /**
        * Bandera que indica que este filtro aplica independientemente del miembro de la dimensión.
        **/
        CualquierMiembro: boolean;
        /**
        * Bandera que indica que debe evaluar las explicitas.
        **/
        EvaluaExplicita: boolean;
        /**
         * Determina si la dimensión cumple con el filtro actual.
         * @param miembro Dimension que que se peretende evaluar.
         */
        cumpleFiltro(miembro: DimensionInfo): boolean {

            var valida = false;
            var filtro = this;

            if (miembro &&
                miembro.Explicita == filtro.Explicita &&
                miembro.IdDimension == filtro.IdDimension &&
                miembro.QNameDimension == filtro.QNameDimension) {

                if (filtro.CualquierMiembro) {

                    valida = true;
                } else {

                    if (miembro.Explicita) {

                        if (miembro.IdItemMiembro == filtro.IdItemMiembro &&
                            miembro.QNameItemMiembro == filtro.QNameItemMiembro) {

                            valida = true;
                        }
                    } else {

                        if (!filtro.TextoMiembroTipificado) {
                            filtro.CreatTextoElementoMiembroTipificado();
                        }
                        if (!miembro.TextoMiembroTipificado) {
                            miembro.CreatTextoElementoMiembroTipificado();
                        }
                        if (miembro.TextoMiembroTipificado &&
                            filtro.TextoMiembroTipificado == miembro.TextoMiembroTipificado) {
                            valida = true;
                        }
                    }
                    if (filtro.DistintoDe) {

                        valida = !valida;
                    }
                }
            }

            return valida;
        }

        deserialize(input: any): FiltroDimension {

            this.Explicita = input.Explicita;
            this.QNameDimension = input.QNameDimension;
            this.IdDimension = input.IdDimension;
            this.IdItemMiembro = input.IdItemMiembro;
            this.QNameItemMiembro = input.QNameItemMiembro;
            this.ElementoMiembroTipificado = input.ElementoMiembroTipificado;
            this.ValorTipificado = input.ValorTipificado;
            this.DistintoDe = input.DistintoDe;
            this.CualquierMiembro = input.CualquierMiembro ? true : false;
            this.EvaluaExplicita = input.EvaluaExplicita ?  true : false;

            return this;
        }

    }

    /**
     * Representa los errores de cálculo contenidos en un documento instancia.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class OperacionesCalculoDocumentoInstancia {

        /** La instancia única de la clase */
        private static _instance: OperacionesCalculoDocumentoInstancia = null;

        private documentoInstancia: DocumentoInstanciaXbrl = null;

        /** El número de errores que contiene el listado */
        NumeroErrores: number;

        /** El número de advertencias que contiene el listado */
        NumeroAdvertencias: number;


        /** El conjunto de errores de cálculo agrupados por medio del identificador del hecho al que están relacionados */
        ErroresPorIdHecho: { [idHecho: string]: Array<DetalleOperacion> };

        /** El conjunto de advertencias de cálculo agrupados por medio del identificador del hecho al que están relacionados */
        AdvertenciaPorIdHecho: { [idHecho: string]: Array<DetalleOperacion> };

        /** El conjunto de todas las operaciones de cálculo agrupadas por medio del identificador del hecho al que están relacionadas */
        OperacionesPorIdHecho: { [idHecho: string]: Array<DetalleOperacion> };

        /** Un objeto que tiene como llave los identificadores de los conceptos y como valor un arreglo con los conceptos a los que acumulan valor como operando en una operación de cálculo. */
        IndiceOperacionesCalculo: { [idConcepto: string]: Array<string> };

        /** Un objeto que tiene como llave los identificadores de los conceptos y como valor un arreglo con los conceptos que participan en álguna fórmula relacionada. */
        IndiceVariablesFormulas: { [idConcepto: string]: Array<string> };

        /** Un objeto que tiene como llave los identificadores de los conceptos y como valor un arreglo con los identificadores de las fórmulas asociadas a ese concepto. */
        IndiceFormulasPorConcepto: { [idConcepto: string]: Array<string> };

        /** Un arreglo con todos los errores */
        Errores: Array<DetalleOperacion>;

        /** Un arreglo con todas las advertencias */
        Advertencias: Array<DetalleOperacion>;

        /** Elimina las operaciones asociadas */
        public static limpiarOperaciones() {
            if (OperacionesCalculoDocumentoInstancia._instance != null) {
                OperacionesCalculoDocumentoInstancia._instance.NumeroErrores = 0;
                OperacionesCalculoDocumentoInstancia._instance.NumeroAdvertencias = 0;
                OperacionesCalculoDocumentoInstancia._instance.ErroresPorIdHecho = {};
                OperacionesCalculoDocumentoInstancia._instance.AdvertenciaPorIdHecho = {};
                OperacionesCalculoDocumentoInstancia._instance.OperacionesPorIdHecho = {};
                OperacionesCalculoDocumentoInstancia._instance.Errores = new Array<DetalleOperacion>();
                OperacionesCalculoDocumentoInstancia._instance.Advertencias = new Array<DetalleOperacion>();
            }
        }

        /**
         * Obtiene la instancia única del listado de errores del documento instancia.
         */
        public static getInstance(): OperacionesCalculoDocumentoInstancia {
            if (OperacionesCalculoDocumentoInstancia._instance === null) {
                OperacionesCalculoDocumentoInstancia._instance = new OperacionesCalculoDocumentoInstancia();
            }
            return OperacionesCalculoDocumentoInstancia._instance;
        }

        /**
         * Remueve un error asociado a un hecho por medio del identificador del hecho y los datos de identificación del error a remover
         *
         * @param idHecho el identificador del hecho al que está relacionado el error de cálculo.
         * @param detalleOperacion el detalle de la operación que se agregará al listado de errores.
        * @return el número de errores asociados al hecho.
         */
        public removerError(idHecho, detalleOperacion: DetalleOperacion): number {
            var numeroErrores = 0;
            if (this.ErroresPorIdHecho[idHecho]) {
                var errorPrevio: boolean = false;
                var indicePrevio: number = 0;
                for (var i = 0; i < this.ErroresPorIdHecho[idHecho].length; i++) {
                    var detalleActual: DetalleOperacion = this.ErroresPorIdHecho[idHecho][i];
                    if (detalleOperacion.EsFormula) {
                        if (detalleActual.EsFormula && detalleActual.IdFormula === detalleOperacion.IdFormula) {
                            errorPrevio = true;
                            indicePrevio = i;
                            break;
                        }
                    } else {
                        if (!detalleActual.EsFormula && detalleActual.IdConcepto == detalleOperacion.IdConcepto && detalleActual.IdContexto == detalleOperacion.IdContexto && detalleActual.IdUnidad == detalleOperacion.IdUnidad && detalleActual.UriRol == detalleOperacion.UriRol) {
                            errorPrevio = true;
                            indicePrevio = i;
                            break;
                        }
                    }
                }
                if (errorPrevio) {
                    var indiceErrores = this.Errores.indexOf(this.ErroresPorIdHecho[idHecho][indicePrevio]);
                    this.ErroresPorIdHecho[idHecho].splice(indicePrevio, 1);
                    this.Errores.splice(indiceErrores, 1);
                    this.NumeroErrores--;
                }
                numeroErrores = this.ErroresPorIdHecho[idHecho].length;
            }
            return numeroErrores;
        }

        /**
         * Remueve una advertencia asociado a un hecho por medio del identificador del hecho y los datos de identificación de la advertencia a remover
         *
         * @param idHecho el identificador del hecho al que está relacionado la advertencia.
         * @param detalleOperacion el detalle de la operación que se agregará al listado de advertecias.
        * @return el número de advertencias asociados al hecho.
         */
        public removerAdvertencia(idHecho, detalleOperacion: DetalleOperacion): number {
            var numeroAdvertencias = 0;
            if (this.AdvertenciaPorIdHecho[idHecho]) {
                var advertenciaPrevio: boolean = false;
                var indicePrevio: number = 0;
                for (var i = 0; i < this.AdvertenciaPorIdHecho[idHecho].length; i++) {
                    var detalleActual: DetalleOperacion = this.AdvertenciaPorIdHecho[idHecho][i];
                    if (detalleOperacion.EsFormula) {
                        if (detalleActual.EsFormula && detalleActual.IdFormula === detalleOperacion.IdFormula) {
                            advertenciaPrevio = true;
                            indicePrevio = i;
                            break;
                        }
                    } else {
                        if (!detalleActual.EsFormula && detalleActual.IdConcepto == detalleOperacion.IdConcepto && detalleActual.IdContexto == detalleOperacion.IdContexto && detalleActual.IdUnidad == detalleOperacion.IdUnidad && detalleActual.UriRol == detalleOperacion.UriRol) {
                            advertenciaPrevio = true;
                            indicePrevio = i;
                            break;
                        }
                    }
                }
                if (advertenciaPrevio) {
                    var indiceAdvertencia = this.Advertencias.indexOf(this.AdvertenciaPorIdHecho[idHecho][indicePrevio]);
                    this.AdvertenciaPorIdHecho[idHecho].splice(indicePrevio, 1);
                    this.Advertencias.splice(indiceAdvertencia, 1);
                    this.NumeroAdvertencias--;
                }
                numeroAdvertencias = this.AdvertenciaPorIdHecho[idHecho].length;
            }
            return numeroAdvertencias;
        }



        /**
         * Agrega un error al listado de errores del documento instancia según el hecho al que pertenece sólo si este no ha sido agregado previamente.
         * 
         * @param idHecho el identificador del hecho al que está relacionado el error de cálculo.
         * @param detalleOperacion el detalle de la operación que se agregará al listado de errores.
         * @return el número de errores asociados al hecho.
         */
        public agregarError(idHecho: string, detalleOperacion: DetalleOperacion): number {
            var numeroErrores = 0;
            if (!this.ErroresPorIdHecho[idHecho]) {
                this.ErroresPorIdHecho[idHecho] = new Array<DetalleOperacion>();
                this.ErroresPorIdHecho[idHecho].push(detalleOperacion);
                this.Errores.push(detalleOperacion);
                this.NumeroErrores++;
                numeroErrores = this.ErroresPorIdHecho[idHecho].length;
            } else {
                var errorPrevio: boolean = false;
                var indicePrevio: number = 0;
                for (var i = 0; i < this.ErroresPorIdHecho[idHecho].length; i++) {
                    var detalleActual: DetalleOperacion = this.ErroresPorIdHecho[idHecho][i];
                    if (detalleOperacion.EsFormula) {
                        if (detalleActual.EsFormula && detalleActual.IdFormula === detalleOperacion.IdFormula) {
                            errorPrevio = true;
                            indicePrevio = i;
                            break;
                        }
                    } else {
                        if (!detalleActual.EsFormula && detalleActual.IdConcepto == detalleOperacion.IdConcepto && detalleActual.IdContexto == detalleOperacion.IdContexto && detalleActual.IdUnidad == detalleOperacion.IdUnidad && detalleActual.UriRol == detalleOperacion.UriRol) {
                            errorPrevio = true;
                            indicePrevio = i;
                            break;
                        }
                    }
                }
                if (!errorPrevio) {
                    this.Errores.slice();
                    this.ErroresPorIdHecho[idHecho].push(detalleOperacion);
                    this.Errores.push(detalleOperacion);
                    this.NumeroErrores++;
                } else {
                    var indiceErrores = this.Errores.indexOf(this.ErroresPorIdHecho[idHecho][indicePrevio]);
                    this.ErroresPorIdHecho[idHecho][indicePrevio] = detalleOperacion;
                    this.Errores[indiceErrores] = detalleOperacion;
                }
                numeroErrores = this.ErroresPorIdHecho[idHecho].length;
            }
            return numeroErrores;
        }


        /**
         * Agrega una advertencia al listado de advertencias del documento instancia según el hecho al que pertenece sólo si este no ha sido agregado previamente.
         * 
         * @param idHecho el identificador del hecho al que está relacionado la advertencia.
         * @param detalleOperacion el detalle de la operación que se agregará al listado de advertencias.
         * @return el número de advertencias asociados al hecho.
         */
        public agregarAdvertencia(idHecho: string, detalleOperacion: DetalleOperacion): number {
            var numeroAdvertencias = 0;
            if (!this.AdvertenciaPorIdHecho[idHecho]) {
                this.AdvertenciaPorIdHecho[idHecho] = new Array<DetalleOperacion>();
                this.AdvertenciaPorIdHecho[idHecho].push(detalleOperacion);
                this.Advertencias.push(detalleOperacion);
                this.NumeroAdvertencias++;
                numeroAdvertencias = this.AdvertenciaPorIdHecho[idHecho].length;
            } else {
                var advertenciaPrevio: boolean = false;
                var indicePrevio: number = 0;
                for (var i = 0; i < this.AdvertenciaPorIdHecho[idHecho].length; i++) {
                    var detalleActual: DetalleOperacion = this.AdvertenciaPorIdHecho[idHecho][i];
                    if (detalleOperacion.EsFormula) {
                        if (detalleActual.EsFormula && detalleActual.IdFormula === detalleOperacion.IdFormula) {
                            advertenciaPrevio = true;
                            indicePrevio = i;
                            break;
                        }
                    } else {
                        if (!detalleActual.EsFormula && detalleActual.IdConcepto == detalleOperacion.IdConcepto && detalleActual.IdContexto == detalleOperacion.IdContexto && detalleActual.IdUnidad == detalleOperacion.IdUnidad && detalleActual.UriRol == detalleOperacion.UriRol) {
                            advertenciaPrevio = true;
                            indicePrevio = i;
                            break;
                        }
                    }
                }
                if (!advertenciaPrevio) {
                    this.Advertencias.slice();
                    this.AdvertenciaPorIdHecho[idHecho].push(detalleOperacion);
                    this.Advertencias.push(detalleOperacion);
                    this.NumeroAdvertencias++;
                } else {
                    var indiceAdvertencias = this.Advertencias.indexOf(this.AdvertenciaPorIdHecho[idHecho][indicePrevio]);
                    this.AdvertenciaPorIdHecho[idHecho][indicePrevio] = detalleOperacion;
                    this.Advertencias[indiceAdvertencias] = detalleOperacion;
                }
                numeroAdvertencias = this.AdvertenciaPorIdHecho[idHecho].length;
            }
            return numeroAdvertencias;
        }


        /**
         * Agrega un detalle de operación de cálculo al listado del documento instancia según el hecho al que pertenece sólo si este no ha sido agregado previamente.
         * 
         * @param idHecho el identificador del hecho al que está relacionado el detalle de cálculo.
         * @param detalleOperacion el detalle de la operación que se agregará al listado de operaciones de cálculo.
         * @return el número total de operaciones asociadas al hecho después de agregar la operación.
         */
        public agregarOperacion(idHecho: string, detalleOperacion: DetalleOperacion): number {
            var numeroOperaciones = 0;
            if (!this.OperacionesPorIdHecho[idHecho]) {
                this.OperacionesPorIdHecho[idHecho] = new Array<DetalleOperacion>();
                this.OperacionesPorIdHecho[idHecho].push(detalleOperacion);
                numeroOperaciones = this.OperacionesPorIdHecho[idHecho].length;
            } else {
                var operacionPrevia: boolean = false;
                var indicePrevio: number = 0;
                for (var i = 0; i < this.OperacionesPorIdHecho[idHecho].length; i++) {
                    var detalleActual: DetalleOperacion = this.OperacionesPorIdHecho[idHecho][i];
                    if (detalleOperacion.EsFormula) {
                        if (detalleActual.EsFormula && detalleActual.IdFormula === detalleOperacion.IdFormula) {
                            operacionPrevia = true;
                            indicePrevio = i;
                            break;
                        }
                    } else {
                        if (!detalleActual.EsFormula && detalleActual.IdConcepto == detalleOperacion.IdConcepto && detalleActual.IdContexto == detalleOperacion.IdContexto && detalleActual.IdUnidad == detalleOperacion.IdUnidad && detalleActual.UriRol == detalleOperacion.UriRol) {
                            operacionPrevia = true;
                            indicePrevio = i;
                            break;
                        }
                    }
                }
                if (!operacionPrevia) {
                    this.OperacionesPorIdHecho[idHecho].push(detalleOperacion);
                } else {
                    this.OperacionesPorIdHecho[idHecho][indicePrevio] = detalleOperacion;
                }
                numeroOperaciones = this.OperacionesPorIdHecho[idHecho].length;
            }
            return numeroOperaciones;
        }

        /**
         * Constructor de la clase.
         */
        constructor() {
            if (OperacionesCalculoDocumentoInstancia._instance) {
                throw new Error("Error: Fallo al instanciar: Utilice ErroresCalculoDocumentoInstancia.getInstance() en lugar de new.");
            }
            OperacionesCalculoDocumentoInstancia._instance = this;
            this.NumeroErrores = 0;
            this.NumeroAdvertencias = 0;

            this.ErroresPorIdHecho = {};
            this.AdvertenciaPorIdHecho = {};

            this.OperacionesPorIdHecho = {};
            this.Errores = new Array<DetalleOperacion>();
            this.Advertencias = new Array<DetalleOperacion>();

        }
    }

    /**
     * Representa una versión de un documento instancia XBRL.
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class VersionDocumentoInstancia implements Serializable<VersionDocumentoInstancia> {

        /** Los comentarios que agregó el usuario al crear la versión  */
        Comentarios: string;

        /** Indica el estado de validación general de los datos del documento instancia en dicha versión */
        EsCorrecto: boolean;

        /** La fecha en que se creó la versión del documento instancia */
        Fecha: string;

        /** El identificador del documento instancia al que está relacionada esta versión */
        IdDocumentoInstancia: number;

        /** El identificador que se asignó a la versión del documento instancia en la base de datos */
        IdVersionDocumentoInstancia: number;

        /** El nombre completo del usuario que creó esta versión */
        NombreUsuario: string;

        /** El número de versión que se le asignó a esta versión */
        Version: number;

        deserialize(input) {

            this.Comentarios = input.Comentarios;
            this.IdDocumentoInstancia = input.IdDocumentoInstancia;
            this.EsCorrecto = input.EsCorrecto;
            this.Fecha = input.Fecha;
            this.IdVersionDocumentoInstancia = input.IdVersionDocumentoInstancia;
            this.NombreUsuario = input.NombreUsuario;
            this.Version = input.Version;

            return this;
        }
    }

    /**
     * Representa un usuario asignado o por asignar a un documento de instancia
     *
     * @author Emigdio Hernandez Rodriguez
     * @version 1.0
     */
    export class UsuarioDocumentoInstancia implements Serializable<UsuarioDocumentoInstancia> {
        /** Nombre completo del usuario del documento */
        NombreCompleto: string;
        /** Identificador del usuario del documento */
        IdUsuario: number;
        /** Indica si el usuario es dueño del documento */
        EsDueno: boolean;
        /** Indica si el usuario puede escribir en el documento */
        PuedeEscribir: boolean;
        /** Indica si el usuario puede escribir en el documento */
        PuedeLeer: boolean;
        /** Indica si el elemento está actualmente seleccionado en la lista */
        Seleccionado: boolean;
        /** Identificador del documento de instancia al que pertenece el permiso del usuario */
        IdDocumentoInstancia: number;

        deserialize(input) {
            this.NombreCompleto = input.NombreCompleto;
            this.IdUsuario = input.IdUsuario;
            this.EsDueno = input.EsDueno !== undefined ? input.EsDueno : false;
            this.PuedeEscribir = input.PuedeEscribir !== undefined ? input.PuedeEscribir : false;
            this.PuedeLeer = input.PuedeLeer !== undefined ? input.PuedeLeer : false;
            this.IdDocumentoInstancia = input.IdDocumentoInstancia !== undefined ? input.IdDocumentoInstancia : 0;
            this.Seleccionado = false;
            return this;
        }
    }
    /**
    * Representa a un registro de taxonomía en base de datos
    *
    * @author Emigdio Hernandez Rodriguez
    * @version 1.0
    */
    export class TaxonomiaXbrlBd implements Serializable<TaxonomiaXbrlBd>
    {

        /** Nombre de la taxonomía */
        Nombre: string;
        /** Descripción de la taxonomía */
        Descripcion: string;
        /** Año de la taxonomía */
        Anio: number;
        /** Identificador del taxonomía */
        IdTaxonomiaXbrl: number;
        /** Espacio de nombres que identifica a la taxonomia */
        EspacioNombresPrincipal: string;
        /** Lista de archivos importados de la taxonomía */
        ArchivosImportados: Array<ArchivoTaxonomiaXbrl>;

        deserialize(input) {
            this.Nombre = input.Nombre;
            this.Descripcion = input.Descripcion;
            this.Anio = input.Anio;
            this.IdTaxonomiaXbrl = input.IdTaxonomiaXbrl;
            this.EspacioNombresPrincipal = input.EspacioNombresPrincipal;

            if (input.ArchivoTaxonomiaXbrl && input.ArchivoTaxonomiaXbrl != null && input.ArchivoTaxonomiaXbrl.length) {
                this.ArchivosImportados = new Array<ArchivoTaxonomiaXbrl>();
                for (var i = 0; i < input.ArchivoTaxonomiaXbrl.length; i++) {
                    this.ArchivosImportados.push(new ArchivoTaxonomiaXbrl().deserialize(input.ArchivoTaxonomiaXbrl[i]));
                }
            }
            return this;
        }
    }
    /**
    * Representa a un archivo de punto de entrada de taxonomía
    *
    * @author Emigdio Hernandez Rodriguez
    * @version 1.0
    */
    export class ArchivoTaxonomiaXbrl implements Serializable<ArchivoTaxonomiaXbrl>
    {



        /** Identificador del archivo que compone a la taxonomía */
        IdArchivoTaxonomiaXbrl: number;

        /** Tipo de referencia del archivo Schema Ref, Role Ref, Arc Role Ref o Linkbase */
        TipoReferencia: number;

        /** HRef de la referencia */
        Href: string;

        /** Rol de la referencia */
        Rol: string;

        /** Role URI de la referencia */
        RolUri: string;


        deserialize(input) {
            this.IdArchivoTaxonomiaXbrl = input.IdArchivoTaxonomiaXbrl;
            this.TipoReferencia = input.TipoReferencia;
            this.Href = input.Href;
            this.Rol = input.Rol;
            this.RolUri = input.RolUri;
            return this;
        }
    }

    /**
     * Enumeración para contener los posibles niveles de severidad de un error
     */
    export enum SeveridadError {
        /** Indica que un hecho es válido */
        Error = 1,
        /** Indica que un hecho es inválido */
        Advertencia = 2,
        /** Indica que un hecho es inválido */
        ErrorFatal = 3
    }

    /**
    * Representa a un error de carga o de validación XBRL
    *
    * @author Emigdio Hernandez Rodriguez
    * @version 1.0
    */
    export class ErrorCargaTaxonomia implements Serializable<ErrorCargaTaxonomia>{

        /** Severidad del error */
        Severidad: SeveridadError;

        /** Mensaje del código de error */
        Mensaje: string;

        /** Código de error de carga o validación */
        CodigoError: string;

        /** Ubicación del archivo donde se genera el error */
        UriArchivo: string;

        /** Línea del archivo donde se genera el error */
        Linea: number;

        /** Columna del archivo donde se genera el error */
        Columna: number;

        deserialize(input) {
            this.Severidad = input.Severidad;
            this.Mensaje = input.Mensaje;
            this.CodigoError = input.CodigoError;
            this.UriArchivo = input.UriArchivo;
            this.Linea = input.Linea;
            this.Columna = input.Columna;
            return this;
        }

    }
    /**
    * Representa la información procesada de un hipercubo de la taxonomia
    *
    */
    export class Hipercubo implements Serializable<Hipercubo>{

        /// Linkbase role donde se declara el hipercubo
        Rol: string;
        /// Arco role con el cuál se declara el hipercubo, all o not-all
        ArcRoleDeclaracion: string;
        /// Tipo de elemento donde se declaran las dimensiones del hipercubo en el contexto, "segment" o "escenario"
        TipoElementoContexto: string;
        /// Indica si el hipercubo es cerrado
        Cerrado: boolean;
        /// Concepto de la declaración de la tabla
        IdConceptoHipercubo: string;
        /// Concepto de la declaración abstracta de toda la tabla, padre del hipercubo y los elementos primarios
        IdConceptoDeclaracionHipercubo: string;
        /// Conjunto de Identificadores de los elementos primarios
        ElementosPrimarios: Array<string>;
        /// Conjunto de identificadores de conceptos de cada dimensión del hipercubo
        Dimensiones: Array<string>;
        /// Conjunto de dominios de dimensión estructurados de acuerdo a su declaración en el hipercubo
        /// La llave del diccionario es el id de la dimensión y tiene como valor a su estructura de dominios
        EstructuraDimension: { [id: string]: Array<EstructuraFormato>; };

        deserialize(input) {

            this.ElementosPrimarios = new Array<string>();
            this.Dimensiones = new Array<string>();
            this.EstructuraDimension = {};

            this.Rol = input.Rol;
            this.ArcRoleDeclaracion = input.ArcRoleDeclaracion;
            this.TipoElementoContexto = input.TipoElementoContexto;
            this.Cerrado = input.Cerrado;
            this.IdConceptoHipercubo = input.IdConceptoHipercubo;
            this.IdConceptoDeclaracionHipercubo = input.IdConceptoDeclaracionHipercubo;

            if (input.ElementosPrimarios && input.ElementosPrimarios != null && input.ElementosPrimarios.length) {
                for (var i = 0; i < input.ElementosPrimarios.length; i++) {
                    this.ElementosPrimarios.push(input.ElementosPrimarios[i]);
                }
            }

            if (input.Dimensiones && input.Dimensiones != null && input.Dimensiones.length) {
                for (var i = 0; i < input.Dimensiones.length; i++) {
                    this.Dimensiones.push(input.Dimensiones[i]);
                }
            }

            if (input.EstructuraDimension && input.EstructuraDimension != null) {
                for (var idDim in input.EstructuraDimension) {
                    this.EstructuraDimension[idDim] = new Array<EstructuraFormato>();
                    for (var idxEstructura in input.EstructuraDimension[idDim]) {
                        this.EstructuraDimension[idDim].push(new EstructuraFormato().deserialize(input.EstructuraDimension[idDim][idxEstructura]));
                    }
                }
            }

            return this;
        }

    }
    /** Definición de contrato para la asignación de una funcionalidad al campo de captura **/
    export interface IProcesoBotonItem {
        /** Identificador de la operación **/
        Id?: string;
        /** Icono a mostrar para ejecutar la operación actual. **/
        Icono: string;
        /** Clase que se asigna al icono para personalizar sus estilos.**/
        ClasesIcono: Array<string>;
        /** Método que será ejecutado por la operación acutal. **/
        Accion(): void;
    }

    /** DTO para recibir la información del resultado de la importación de un archivo excel */
    export class ResumenProcesoImportacionExcelDto implements Serializable<ResumenProcesoImportacionExcelDto>{
        /* Total de hechos importados */
        TotalHechosImportados: number;
        /* Lista de errores de importacion */
        InformeErrores: Array<InformeErrorImportacion>;
        /* Lista de errores de hechos sobreescritos */
        HechosSobreescritos: Array<InformacionHechoSobreescritoDto>;


        deserialize(input) {
            this.TotalHechosImportados = input.TotalHechosImportados;
            this.InformeErrores = new Array<InformeErrorImportacion>();
            if (input.InformeErrores && input.InformeErrores.length) {

                for (var idxError in input.InformeErrores) {
                    this.InformeErrores.push(new model.InformeErrorImportacion().deserialize(input.InformeErrores[idxError]));
                }
            }
            this.HechosSobreescritos = new Array<InformacionHechoSobreescritoDto>();
            if (input.HechosSobreescritos && input.HechosSobreescritos.length) {

                for (var idxError in input.HechosSobreescritos) {
                    this.HechosSobreescritos.push(new model.InformacionHechoSobreescritoDto().deserialize(input.HechosSobreescritos[idxError]));
                }
            }
            return this;
        }
    }

    /* Clase que representa la información de un error durante la importación de información desde un archivo excel */
    export class InformeErrorImportacion implements Serializable<InformeErrorImportacion>{

        /** Mensaje de error */
        Mensaje: string;

        /** Valor leido de excel */
        ValorLeido: string;

        deserialize(input) {
            this.Mensaje = input.Mensaje;
            this.ValorLeido = input.ValorLeido;
            return this;
        }
    }

    /** Clase que representa la información de un hecho que ha sido sobreescrito por el mismo documento de excel con valores diferentes */
    export class InformacionHechoSobreescritoDto implements Serializable<InformacionHechoSobreescritoDto>{

        /** Mensaje de error */
        Mensaje: string;

        /** Valor leido de excel de un inicio*/
        ValorInicial: string;

        /** Valor leido de excel al final*/
        ValorFinal: string;

        deserialize(input) {
            this.Mensaje = input.Mensaje;
            this.ValorInicial = input.ValorInicial;
            this.ValorFinal = input.ValorFinal;
            return this;
        }
    }

    /**
    * Definición de filtros para la busqueda de hechos por sus distintas caracteristicas.
    **/
    export class FiltroHechosDto implements Serializable<FiltroHechosDto> {

        /** El identificador único dentro del documento del hecho */
        public IdHecho: Array<string>;

        /** El identificador del concepto al cual pertnece este hecho */
        public IdConcepto: Array<string>;
        /**
        * Arreglo con los indentificadores de la unidad.
        **/
        public IdUnidad: Array<string>;
        /** 
        * El tipo de la unidad
        */
        public TipoUnidad: number;
        /**
        * Arreglo de unidades.
        **/
        public Unidad: Array<Unidad>;

        /** El identificador único del contexto dentro del documento instancia */
        public IdContexto: Array<string>;

        /** El periodo de reporte del contexto */
        public Periodo: Array<PlantillaPeriodo>;
        /**
        * Clave de la entidad.
        */
        public ClaveEntidad: Array<string>;
        /** 
         * Evalua los datos de la dimensión y toma el contexto como valido si el contexto contiene todos los elementos de la lista, independiente mente
         * si el contexto contiene más dimensiones.
         * Si el contexto no cumple con uno de los filtros de dimensiones es invalido.
         *
        */
        public ConjuntosParcialesDimensiones: Array<Array<DimensionInfo>>;
        /**
         * Evalua que el contexto tenga exactamente la misma cantidad de dimensiones y miembros, si el contexto tiene más o menos se descarta.
        **/ 
        public ConjuntosExactosDimensiones: Array<Array<DimensionInfo>>;
        /**
        * Contextos por los cuales filtrar.
        **/
        public Contexto: Array<Contexto>;

        /**
        * Deserializa un elemento de entrada a un objeto del tipo FiltroHechosDto.
        * @param input Elemento a deserializar.
        * @return Objeto de la calse FiltroHechosDto.
        **/
        public deserialize(input:any): FiltroHechosDto  {

            if (input.IdHecho && input.IdHecho.length >= 0) {

                this.IdHecho = input.IdHecho;
            }

            if (input.IdConcepto && input.IdConcepto.length >= 0) {

                this.IdConcepto = input.IdConcepto;
            }

            if (input.IdUnidad && input.IdUnidad.length >= 0) {

                this.IdUnidad = input.IdUnidad;
            }

            if (input.IdContexto && input.IdContexto.length >= 0) {

                this.IdContexto = input.IdContexto;
            }

            if (input.ClaveEntidad && input.ClaveEntidad.length >= 0) {

                this.ClaveEntidad = input.ClaveEntidad;
            }

            var index: number;
            var item: any;
            if (input.Unidad && input.Unidad.length > 0) {

                this.Unidad = [];
                for (index = 0; index < input.Unidad.length; index++) {

                    item = new Unidad().deserialize(input.Unidad[index]);
                    this.Unidad.push(item);
                }
            }
            if (input.Periodo && input.Periodo.length > 0) {

                this.Periodo = [];
                for (index = 0; index < input.Periodo.length; index++) {

                    item = new PlantillaPeriodo().deserialize(input.Periodo[index]);
                    this.Periodo.push(item);
                }
            }
            if (input.Contexto && input.Contexto.length > 0) {

                this.Contexto = [];
                for (index = 0; index < input.Contexto.length; index++) {

                    item = new Contexto().deserialize(input.Contexto[index]);
                    this.Contexto.push(item);
                }
            }
            if (input.ConjuntosParcialesDimensiones && input.ConjuntosParcialesDimensiones.length > 0) {

                this.ConjuntosParcialesDimensiones = [];
                var indexArray: number;
                for (index = 0; index < input.ConjuntosParcialesDimensiones.length; index++) {

                    var array = input.ConjuntosParcialesDimensiones[index];
                    item = new Array<DimensionInfo>();
                    for (indexArray = 0; indexArray < array.length; indexArray++) {

                        var itemArray = array[indexArray];
                        if (itemArray) {

                            item.push(new DimensionInfo().deserialize(itemArray));
                        }
                    }
                    if (item.length > 0) {

                        this.ConjuntosParcialesDimensiones.push(item);
                    }
                }
            }
            if (input.ConjuntosExactosDimensiones && input.ConjuntosExactosDimensiones.length > 0) {

                this.ConjuntosExactosDimensiones = [];
                var indexArray: number;
                for (index = 0; index < input.ConjuntosExactosDimensiones.length; index++) {

                    var array = input.ConjuntosExactosDimensiones[index];
                    if (array && array.length > 0) {
                        item = new Array<DimensionInfo>();
                        for (indexArray = 0; indexArray < array.length; indexArray++) {

                            var itemArray = array[indexArray];
                            if (itemArray) {

                                item.push(new DimensionInfo().deserialize(itemArray));
                            }
                        }
                    }
                    if (item.length > 0) {

                        this.ConjuntosExactosDimensiones.push(item);
                    }
                    
                }
            }
            this.TipoUnidad = input.TipoUnidad;


            return this;
        }
    }
    /**
    * Definición de un periodo de plantilla.
    *
    **/
    export class PlantillaPeriodo extends Periodo implements Serializable<PlantillaPeriodo> {

        /**
        * Identificador de la variable que se utlizará para obtener la fecha instante del periodo.
        **/
        public VariableFechaInstante: string;
        /**
        * Identificador de la variable que se utlizará para obtener la fecha de inicio del periodo.
        **/
        public VariableFechaInicio: string;
        /**
        * Identificador de la variable que se utlizará para obtener la fecha de fin del periodo.
        **/
        public VariableFechaFin: string;

        /**
        * Identificador del grupo de fechas en el que se encuentra este contexto.
        **/
        public IdGrupoFechas: string;

        /**
       * Crea una fecha con la cadena indicada.
       * @param idVariableFecha Identificador de la variable fecha.
       * @param definicionPlantilla Definicion de la plantilla actual de donde se obtendrán los parametros.
       * @return Valor de la fecha.
       **/
        private parseVariableFecha(idVariableFecha: string, definicionPlantilla: model.DefinicionDePlantillaXbrl): Date {

            var $self = this;
            var cadenaFecha: string = definicionPlantilla.obtenerVariablePorId(idVariableFecha);
            if (!cadenaFecha) {

                throw new Error("No existe un valor para el dientrificador de varialbe \"" + idVariableFecha + "\"");
            }

            return moment(cadenaFecha + '0:00 + 0000', abaxXBRL.model.ConstantesComunes.FORMATO_FECHA + ' HH:mm Z').utc().toDate()
        }
        /**
        * Evalua las variables del elemento actual y las sustitulle en sus valores correspondientes.
        * @param definicionPlantilla Definición actual de la plantilla de donde se obtendra el valor de las variables.
        **/
        public evaluaVariablesPlantilla(definicionPlantilla: model.DefinicionDePlantillaXbrl): void {

            var $self = this;
            if ($self.Tipo == Periodo.INSTANTE) {

                $self.FechaInstante = $self.parseVariableFecha($self.VariableFechaInstante, definicionPlantilla);
                $self.IdGrupoFechas = definicionPlantilla.obtenerVariablePorId($self.VariableFechaInstante);
            }
            if ($self.Tipo == Periodo.DURACION) {

                $self.FechaInicio = $self.parseVariableFecha($self.VariableFechaInicio, definicionPlantilla);
                $self.FechaFin = $self.parseVariableFecha($self.VariableFechaFin, definicionPlantilla);
                $self.IdGrupoFechas = definicionPlantilla.obtenerVariablePorId($self.VariableFechaInicio) + "_" + definicionPlantilla.obtenerVariablePorId($self.VariableFechaFin);
            }
        }

        /**
        * Deserializa un elemento de entrada a su objeto equivalente de tipo PlantillaPeriodo;
        * @param input Elemento a deserializar.
        * @return Representación PlantillaPeriodo del elemento de entrada.
        **/
        public deserialize(input: any): PlantillaPeriodo {

            super.deserialize(input);

            this.VariableFechaInstante = input.VariableFechaInstante;
            this.VariableFechaInicio = input.VariableFechaInicio;
            this.VariableFechaFin = input.VariableFechaFin;
            this.IdGrupoFechas = input.IdGrupoFechas;
            return this;
        }

    }

    /**
    * Plantilla auxiliar para la generación de dimensiones.
    **/
    export class PlantillaDimensionInfo extends DimensionInfo implements Serializable<PlantillaDimensionInfo> {

        /**
        * Prefijo del valor a presentar.
        **/
        public PrefijoValor: string;
        /**
        * Subfijo del valor a presentar.
        */
        public SubfijoValor: string;
        /**
        * Identificador de la etiqueta que será utilizada cuando se agergen nuevos elementos a la dimension.
        **/
        public EtiquetaNuevoElemento: string;

        /**
        * Depura el identificador (qName ó miembro tipificado) para obtener solo el nombre base.
        * Elimina el prefijo y el subfijo para esta dimensión.
        * @param idMiembro Nombre del elemento que se pretende depurar.
        * @return Nombre del elemento sin el prefijo ni sufijo base.
        **/
        public obtenNombreMiembro(idMiembro: string): string {

            var lengthPrefijo: number = this.PrefijoValor.length;
            var lengthSubfijo: number = this.SubfijoValor.length;

            if (!idMiembro || idMiembro.length <= (lengthPrefijo + lengthSubfijo)) {

                throw new Error("El identificaodr del miembro es incorrecto para la dimensión [" + this.QNameDimension + "].");
            }
            var startIndex = lengthPrefijo;
            var endIndex = idMiembro.length - lengthSubfijo;
            var nombre: string = idMiembro.substring(startIndex,endIndex);
            return nombre;
        }
        /**
        * Genera el nombre del elemento según la configuración de la dimensión.
        * @param Valor simple que será asignado.
        * @return Valor XBRL para esta dimensión.
        **/
        public obtenXbrlNombreMiembro(nombre: string): string {

            var qName = this.PrefijoValor + nombre + this.SubfijoValor;
            return qName;
        }

        /**
        * Deserializa un elemento de entrada a su representación PlantillaDimensionInfo.
        * @param input Elemento a deserializar.
        * @return Objeto de tipo PlantillaDimensionInfo con la información del elemento de  entrada.
        **/
        public deserialize(input: any): PlantillaDimensionInfo {

            super.deserialize(input);

            this.PrefijoValor = input.PrefijoValor ? input.PrefijoValor : "";
            this.SubfijoValor = input.SubfijoValor ? input.SubfijoValor : "";
            this.EtiquetaNuevoElemento = input.EtiquetaNuevoElemento ? input.EtiquetaNuevoElemento : "";
            return this;
        }

    }

    /**
    *  Plantilla para la generación de contextos.
    **/
    export class PlantillaContexto extends Contexto implements Serializable<PlantillaContexto> {

        /**
        * Plantilla para la inicializaicón del periodo.
        **/
        public Periodo: PlantillaPeriodo;
        /**
        * Identificador del grupo con la configuración de dimensiones con la que se inicializará el contexto.
        **/
        public NombreGrupoDimensionesIniciales: string;
        /**
        * Lista con los identificadores de los contextos relacionados a esta plantilla.
        **/
        public ContextosRelacionados: Array<string>;

        /**
        * Genera un filtro de hechos con las caracteristicas principales del contexto.
        * @return filtro de ehchos con las caracteristicas principales del contexto.
        **/
        public generaFiltroHechos(): FiltroHechosDto {

            var $self = this;
            return new model.FiltroHechosDto().deserialize({
                Periodo: [$self.Periodo],
                ClaveEntidad: [$self.Entidad.Id],
                ConjuntosParcialesDimensiones: [$self.ValoresDimension],
                IdContexto: $self.ContextosRelacionados
            });
        }
        /**
        * Genera un arreglo de dimensiones con las dimensiones del contexto remplazando o agregando los miembros
        * dimensionales incluidos en el arreglo "dimensionesReplazar".
        * @param Arreglo con las dimensiones que se quieren remplazar o agregar a la definición del contexto.
        * @return Arreglo con las dimensiónes definidas en el contexto más las dimensiones asignadas en el parametro.
        **/
        public generaConjuntoDimensiones(dimensionesReplazar?: Array<DimensionInfo>): Array<DimensionInfo> {

            var dimensiones: Array<DimensionInfo> = [];
            var diccionarioDimensiones: { [qNameDimension:string]: DimensionInfo } = {};
            var index: number;
            var dimensionesContexto: Array<DimensionInfo> = [];
            var dimension: DimensionInfo;

            if (this.ContieneInformacionDimensional) {

                dimensionesContexto = this.ValoresDimension;
            } else {

                if (this.Entidad.ContieneInformacionDimensional) {

                    dimensionesContexto = this.Entidad.ValoresDimension;
                }
            }
            for (index = 0; index < dimensionesContexto.length; index++) {

                dimension = dimensionesContexto[index];
                diccionarioDimensiones[dimension.QNameDimension] = dimension;
            }
            if (dimensionesReplazar && dimensionesReplazar.length > 0) {
                for (index = 0; index < dimensionesReplazar.length; index++) {

                    dimension = dimensionesReplazar[index];
                    diccionarioDimensiones[dimension.QNameDimension] = dimension;
                }
            }
            var qNameDimension: string;
            for (qNameDimension in diccionarioDimensiones) {

                dimensiones.push(diccionarioDimensiones[qNameDimension]);
            }

            return dimensiones;
        }

        /**
        * Deserializa un elemento de entrada a su objeto equivalente de tipo PlantillaPeriodo;
        * @param input Elemento a deserializar.
        * @return Representación PlantillaPeriodo del elemento de entrada.
        **/
        public deserialize(input: any): PlantillaContexto {

            super.deserialize(input);
            this.Periodo = new PlantillaPeriodo().deserialize(input.Periodo);
            this.NombreGrupoDimensionesIniciales = input.NombreGrupoDimensionesIniciales;
            var index: number;
            this.ContextosRelacionados = [];
            
            if (input.ContextosRelacionados && input.ContextosRelacionados.length > 0) {

                for (index = 0; index < input.ContextosRelacionados.length; index++) {

                    if (input.ContextosRelacionados[index]) {

                        this.ContextosRelacionados.push(input.ContextosRelacionados[index]);
                    }
                }
            }
            return this;
        }

    }
    /**
    * Clase que define el conjunto de miembros de dimensión que se requiere utiliar para armar el conjunto de miembros de dimensión de un contexto.
    * 
    **/
    export class XbrlConfiguracionMiembrosDimensionContexto implements Serializable<XbrlConfiguracionMiembrosDimensionContexto> {

        /**
        * Arreglo con los identificadores de los grupos de dimensión a tomar en cuenta para construir el conjunto de miembros.
        **/
        public gruposDimensiones: Array<string>;
        /** 
        * Diccionario con los alias de los miembros por alias de dimensión.
        **/
        public miembrosDimension: { [aliasDimension: string]: string };
        /**
        * Arreglo con los nombres de las dimensiones de las que se tiene que generar un miembro si no existe.
        **/
        public dimensionesGenerarMiembros: Array<string>;
        /**
        * Bandera que indica si el contexto debe contener exactamente el conjunto de dimensiones indicadas y no más.
        * Si la vandera es false se tomara como valido cualquier contexto que contenga el subconjunto de dimensiones indicadas, es decir puede contener más dimensiones.
        * Su valor por defecto es false.
        **/
        public exactas: boolean;

        /**
        * Obtiene un arreglo con las dimensiones de los elementos configurados.
        * @param MiembrosDimensiones Diccionario con la relacion de alias dimension y alias miembro con su definición de DimensionInfo correspondiente.
        * @param DiccionarioGrupoDimensionMiembro Diccionario con la relación entre los alias de los grupos y sus contenidos de miembros de dimensión.
        * @return Arreglo con el conjunto de miembros de dimensión tomando como base los grupos dados (this.gruposDimensiones) y finalizando con los miembros expresados de forma explicita (this.miembrosDimension).
        **/
        public obtenArregloMiembrosDimension(
            MiembrosDimensiones: { [aliasDimension: string]: { [aliasMiembro: string]: model.DimensionInfo; }; },
            DiccionarioGrupoDimensionMiembro: { [nombreGupo: string]: { [aliasDimension: string]: string } }): Array<DimensionInfo> {

            var $self = this;
            var dimensiones: Array<DimensionInfo> = [];
            var diccionarioDimensiones:{ [aliasDimension: string]: model.DimensionInfo } = {};
            var nombreGrupo: string;
            var elementoGrupo: { [aliasDimension: string]: string };
            var aliasDimension: string;
            var aliasMiembro: string;
            var index: number;
            var dimension: DimensionInfo;

            if ($self.gruposDimensiones && $self.gruposDimensiones.length > 0) {

                for (index = 0; index < $self.gruposDimensiones.length; index++) {

                    nombreGrupo = $self.gruposDimensiones[index];
                    elementoGrupo = DiccionarioGrupoDimensionMiembro[nombreGrupo];
                    if (!elementoGrupo) {

                        throw new Error("No existe el elemento \"" + nombreGrupo + "\" en el diccionario de grupos de dimensiones.");
                    }
                    for (aliasDimension in elementoGrupo) {

                        aliasMiembro = elementoGrupo[aliasDimension];
                        dimension = MiembrosDimensiones[aliasDimension][aliasMiembro];
                        if (!dimension) {

                            throw new Error("No existe un miembro con el alias \"" + aliasMiembro + "\" en la dimension \"" + aliasDimension + "\" del grupo \"" + nombreGrupo + "\".");
                        }
                        diccionarioDimensiones[aliasDimension] = dimension;
                    }
                }
            }
            if ($self.miembrosDimension) {

                for (aliasDimension in $self.miembrosDimension) {

                    aliasMiembro = $self.miembrosDimension[aliasDimension];
                    dimension = MiembrosDimensiones[aliasDimension][aliasMiembro];
                    if (!dimension) {

                        throw new Error("No existe un miembro con el alias \"" + aliasMiembro + "\" en la dimension \"" + aliasDimension + "\".");
                    }
                    diccionarioDimensiones[aliasDimension] = dimension;
                }
            }
            for (aliasDimension in diccionarioDimensiones) {

                dimensiones.push(diccionarioDimensiones[aliasDimension]);
            }

            return dimensiones;
        }

        /**
        * Deserializa un elemento de entrada a su equivalente XbrlConfiguracionMiembrosDimensionContexto.
        * @param input Elemento a evaluar.
        * @return Representación XbrlConfiguracionMiembrosDimensionContexto del elemento de entrada.
        **/
        public deserialize(input: any): XbrlConfiguracionMiembrosDimensionContexto {

            var index: number;
            var aliasDimension: string;
            if (input.gruposDimensiones && input.gruposDimensiones.length > 0) {

                this.gruposDimensiones = [];
                for (index = 0; index < input.gruposDimensiones.length; index++) {

                    this.gruposDimensiones.push(input.gruposDimensiones[index]);
                }
            }
            if (input.miembrosDimension) {

                this.miembrosDimension = {};
                for (aliasDimension in input.miembrosDimension) {

                    this.miembrosDimension[aliasDimension] = input.miembrosDimension[aliasDimension];
                }
            }
            if (input.dimensionesGenerarMiembros) {

                this.dimensionesGenerarMiembros = [];
                for (var indexDimensionesgenerar = 0; indexDimensionesgenerar < input.dimensionesGenerarMiembros.length; indexDimensionesgenerar++) {

                    aliasDimension = input.dimensionesGenerarMiembros[indexDimensionesgenerar];
                    this.dimensionesGenerarMiembros.push(aliasDimension);
                }
            }

            this.exactas = input.exactas ? true : false;

            return this;
        }
    }
    /**
    * Configuración base para iterar los miembros de una dimensión en la vista.
    * 
    **/
    export class XbrlConfiguracionRepiteDimension implements Serializable<XbrlConfiguracionRepiteDimension> {

        /**
        * Identificador de la dimensión que se va ha iterar.
        **/
        public aliasDimension: string;
        /**
        * Agrupaciones por las cuales se filtraran los miembros de la dimension.
        **/
        public agruparPor: { [aliasDimension: string]: string };
        /**
        * Variable a sustituir con la cual se hace referencia al nombre del miembro.
        **/
        public variableAliasMiembro: string = "$aliasMiembro";
        /**
        * Código Javascript que será evaluado una vez completada la iteración.
        **/
        public enTerminaIterar: string;

        /**
        * Deserializa un elemento de entrada a su equivalente XbrlConfiguracionRepiteDimension.
        * @param input Elemento a deserializar.
        * @return Objeto de tipo XbrlConfiguracionRepiteDimension con la información del elemento de entrada.
        **/
        public deserialize(input: any): XbrlConfiguracionRepiteDimension {

            if (!input.aliasDimension) {

                throw new Error("Se debe de indicar la dimension a iterar");
            }

            this.aliasDimension = input.aliasDimension;
            if (input.variableAliasMiembro && input.variableAliasMiembro.trim().length > 0) {

                this.variableAliasMiembro = input.variableAliasMiembro;
            }
            
            
            if (input.agruparPor) {

                var aliasDimensionItera: string;
                this.agruparPor = {};
                for (aliasDimensionItera in input.agruparPor) {

                    this.agruparPor[aliasDimensionItera] = input.agruparPor[aliasDimensionItera];
                }
            }
                

            return this;
        }
    }
    /**
     * Dto con la información de filtrado para la proyección de un hipercubo.
     */
    export class XbrlConfiguracionProyeccionHipercubo implements Serializable<XbrlConfiguracionProyeccionHipercubo> {
        /**
        * Diccionario con la definición de los valores que debe tener un concepto para considerar su contexto en la proyecccion.
        **/
        public FiltrosContextoPorValorConcepto: { [idConcepto: string]: string };
        /**
         * Deserializa un elemento de entrada a un objeto de la clase XbrlConfiguracionProyeccionHipercubo
         * @param input Elemento a evaluar.
         * @return Representación "XbrlConfiguracionProyeccionHipercubo" del elemento de entrada.
         */
        public deserialize(input: any): XbrlConfiguracionProyeccionHipercubo {

            if (input.FiltrosContextoPorValorConcepto) {

                this.FiltrosContextoPorValorConcepto = {};
                for (var idConcepto in input.FiltrosContextoPorValorConcepto) {

                    this.FiltrosContextoPorValorConcepto[idConcepto] = input.FiltrosContextoPorValorConcepto[idConcepto];
                }
            }
           
            return this;
        }
    }

    /**
    * Configuración de inicialización de la directiva de administración de hipercubos.
    */
    export class XbrlConfiguracionTablaHipercuboDirective implements Serializable<XbrlConfiguracionTablaHipercuboDirective> {

        /**
        * Token a sustituir en los identificadores de los miembros de una dimensión (QName ó Tipificado) cuando se genera un nuemvo miembro mediante un template.
        **/
        public get TokenNombreMiembro(): string { return "{{TokenNombreMiembro}}"; };
        /**
        * Diccionario con la definición de las dimensiones que aplicarán para este hipercubo
        * la llave es un alias de la dimensión, el valor contiene el QNameDimension.
        **/
        public TemplatesDimensiones: { [aliasDimension: string]: PlantillaDimensionInfo; };
        /**
        * Diccionario con las definiciones de los elementos de las dimensiones miembro.
        **/
        public MiembrosDimensiones: { [aliasDimension: string]:{[aliasMiembro:string]: DimensionInfo; }; }
        /**
        * Conjunto de grupos de dimensiones miembro utilizados commo auxiliar para clasificar configuración por configuraciones de dimensiones miembro.
        * El dicionario contiene el identificador del grupo, seguido de un diccionario por identificador de dimensión con el valor del alias del miembro.
        **/
        public GruposDimensionesMiembro: { [nombreGrupo: string]: { [aliasDimension: string]: string } }
        /**
        * Arreglo con los tempaltes de los contextos que serán generados cuando se invoque la generación de contextos.
        **/
        public PlantillasContextos: { [aliasPlantillacontexto: string]: PlantillaContexto };
        /**
        * Filtro utilizado para inicializar los contextos y dimensiones en la directiva.
        **/
        public FiltroCargaInicial: FiltroHechosDto;
        /**
        * Alias de las unidades que se requieren para los conceptos de este hipercubo.
        **/
        public Unidades: { [aliasUnidad: string]: Unidad };
        /**
        * Diccionario de los filtros de proyecciónn existentes.
        **/
        public Proyecciones: { [aliasProyeccion:string]: XbrlConfiguracionProyeccionHipercubo};
        /**
        * Diccionario con los mensajes de error a mostrar.
        **/
        public MensajesError: { [claveMensaje: string]: string } = {

            "CAMPO_DIMENSION_VACIO": "MESSAGE_ERROR_CAMPO_DIMENSION_VACIO",
            "ELEMENTOS_DIMENSION_DUPLICADOS": "MESSAGE_ERROR_ELEMENTOS_DIMENSION_DUPLICADOS",
        }
        /**
        * Deserializa un elemento de entrada a su equivalente de tipo XbrlAdministraDimensionesDirectiveConfiguracion.
        * @param input Elemento de entrada que será evaluado para la generación del objeto.
        * @return Objeto del tipo TemplatesDimensiones con la información del elemento de entrada.
        **/
        public deserialize(input: any): XbrlConfiguracionTablaHipercuboDirective {

            var aliasDimension: string;
            var aliasMiembro: string;
            var dimensionItem: DimensionInfo;
            var diccionarioDimensionMiembro: { [aliasMiembro: string]: DimensionInfo; };
            var nombreGrupo: string;
            var index: number;
            var nombreSeccion: string;
            var contexto: Contexto;

            if (input.TemplatesDimensiones) {
                this.TemplatesDimensiones = {};
                for (aliasDimension in input.TemplatesDimensiones) {

                    this.TemplatesDimensiones[aliasDimension] = new PlantillaDimensionInfo().deserialize(input.TemplatesDimensiones[aliasDimension]);
                }
            }
            if (input.MiembrosDimensiones) {

                this.MiembrosDimensiones = {};
                for (aliasDimension in input.MiembrosDimensiones) {

                    diccionarioDimensionMiembro = input.MiembrosDimensiones[aliasDimension];
                    if (diccionarioDimensionMiembro) {

                        this.MiembrosDimensiones[aliasDimension] = {};
                        for (aliasMiembro in diccionarioDimensionMiembro) {

                            dimensionItem = diccionarioDimensionMiembro[aliasMiembro];
                            if (dimensionItem) {

                                this.MiembrosDimensiones[aliasDimension][aliasMiembro] = new DimensionInfo().deserialize(dimensionItem);
                            }
                        }
                    }
                }
            }
            if (input.GruposDimensionesMiembro) {

                this.GruposDimensionesMiembro = {};
                for (nombreGrupo in input.GruposDimensionesMiembro) {

                    this.GruposDimensionesMiembro[nombreGrupo] = {};
                    if (input.GruposDimensionesMiembro[nombreGrupo]) {

                        for (aliasDimension in input.GruposDimensionesMiembro[nombreGrupo]) {

                            this.GruposDimensionesMiembro[nombreGrupo][aliasDimension] = input.GruposDimensionesMiembro[nombreGrupo][aliasDimension];
                        }
                    }
                }
            }
            if (input.PlantillasContextos) {

                this.PlantillasContextos = {};
                for (nombreGrupo in input.PlantillasContextos) {

                    contexto = input.PlantillasContextos[nombreGrupo];
                    if (contexto) {

                        this.PlantillasContextos[nombreGrupo] = new PlantillaContexto().deserialize(contexto);
                    }
                }
            }

            if (input.FiltroCargaInicial) {

                this.FiltroCargaInicial = new FiltroHechosDto().deserialize(input.FiltroCargaInicial);
            }
            if (input.MensajesError) {
                var claveMensaje: string;
                for (claveMensaje in input.MensajesError) {

                    this.MensajesError[claveMensaje] = input.MensajesError[claveMensaje];
                }
            }
            if (input.Unidades) {

                this.Unidades = {};
                var aliasUnidad: string;
                for (aliasUnidad in input.Unidades) {

                    this.Unidades[aliasUnidad] = new Unidad().deserialize(input.Unidades[aliasUnidad]);
                }
            }
            if (input.Proyecciones) {

                this.Proyecciones = {};
                for (var aliasProyeccion in input.Proyecciones) {

                    this.Proyecciones[aliasProyeccion] = new XbrlConfiguracionProyeccionHipercubo().deserialize(input.Proyecciones[aliasProyeccion]);
                }
            }
            return this;
        }

    }

}