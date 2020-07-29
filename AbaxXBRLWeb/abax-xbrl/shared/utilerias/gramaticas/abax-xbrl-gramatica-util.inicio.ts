module abaxXBRL.shared.utilerias.gramaticas {

    /**
    * Clase que implementa la definicion de una gramatica.
    **/
    export class Gramatica implements shared.modelos.IGramatica {
        /**
        * Nombre de la gramatica (la gramatica puede ser un elemento de otra gramatica).
        **/
        Nombre: string;
        /**
        * Solo se indica si. esta gramatica es final y evalua contenido literal en especifico.
        **/
        ExpresionRegular: RegExp;
        /**
        * Solo se indica si esta gramatica se compone se compone de un listado de reglas donde todas se deben de cumplir, para que sesa valida.
        **/
        Estructura: Array<shared.modelos.IGramatica>;
        /**
        * Solo se indica si esta gramatica se compone de un listado de reglas donde se debe de cumplir almenos una para que sea valida.
        **/
        Reglas: Array<shared.modelos.IGramatica>;
        /**
        * Mesnaje de error a retornar cuando no se cumple con esta gramatica.
        **/
        MensajeError: string;

        /**
        * Valida la gramatica y determina si es correcta.
        **/
        public Evalua(expresion: string, index?: number): shared.modelos.IResultadoEvaluacionGramatica {

            if (!expresion) {
                throw new Error("No se puede evaluar una expresion nula.");
            }
            var indexAuxiliar = index && index >= 0 ? index : 0;
            var resultado: shared.modelos.IResultadoEvaluacionGramatica;
            if (this.ExpresionRegular) {
                resultado = this.evaluaExpresionRegular(expresion, indexAuxiliar); 
                console.log("evaluando:" + this.Nombre + " => " + expresion);
                console.log(resultado);
                return resultado;
            }
            if (this.Estructura && this.Estructura.length > 0) {
                resultado = this.evaluaEstructura(expresion, indexAuxiliar);
                console.log("evaluando:" + this.Nombre + " => " + expresion);
                console.log(resultado);
                return resultado;
            }
            if (this.Reglas && this.Reglas.length > 0) {
                resultado = this.evaluaReglas(expresion, indexAuxiliar);
                console.log("evaluando:" + this.Nombre + " => " + expresion);
                console.log(resultado);
                return resultado;
            }
            return {
                IndexInicio: index,
                IndexFin: index,
                MensajeError: this.MensajeError,
                Valida: false
            };
        }
        /**
        * Determina si la expresión regular es valida.
        **/
        private evaluaExpresionRegular(expresion: string, index: number): shared.modelos.IResultadoEvaluacionGramatica {

            var expresionAuxiliar = expresion.substr(index);
            var valida = expresion.search(this.ExpresionRegular) == 0;
            var resultado: shared.modelos.IResultadoEvaluacionGramatica = {
                IndexInicio: index,
                IndexFin: index,
                Valida: valida
            };

            if (!valida) {
                resultado.MensajeError = this.MensajeError;
            } else {
                resultado.Match = this.ExpresionRegular.exec(expresionAuxiliar)[0];
                resultado.IndexFin = index + resultado.Match.length;
            }
            return resultado;
        }

        /**
        * Determina si se cumplen todas las reglas de la estructura.
        **/
        private evaluaEstructura(expresion: string, index: number): shared.modelos.IResultadoEvaluacionGramatica {
            var expresionAuxiliar = expresion.substr(index);
            var indexFinal: number = index;

            for (var indexElemento: number = 0; indexElemento < this.Estructura.length; indexElemento++) {
                //Si ya no hay más elementos que evaluar pero no se ha evaluado toda la estructura.
                if ((!expresionAuxiliar || expresionAuxiliar.length == 0)) {
                    return {
                        IndexInicio: indexFinal,
                        IndexFin: indexFinal,
                        MensajeError: this.MensajeError,
                        Valida: false
                    }
                }

                var gramatica: shared.modelos.IGramatica = this.Estructura[indexElemento];
                var resultado = gramatica.Evalua(expresionAuxiliar, index);
                if (!resultado.Valida) {
                    return resultado;
                }
                expresionAuxiliar = expresionAuxiliar.substr(resultado.IndexFin);
                indexFinal += resultado.IndexFin;
            }

            return {
                IndexInicio: index,
                IndexFin: indexFinal,
                Match: expresion.substr(index, indexFinal),
                Valida: true
            };
        }

        /**
        * Determina si se cumple alguna de reglas.
        **/
        private evaluaReglas(expresion: string, index: number): shared.modelos.IResultadoEvaluacionGramatica {
            var expresionAuxiliar = expresion.substr(index);

            for (var indexElemento: number = 0; indexElemento < this.Reglas.length; indexElemento++) {
                var gramatica: shared.modelos.IGramatica = this.Reglas[indexElemento];
                var resultado = gramatica.Evalua(expresionAuxiliar, index);
                if (resultado.Valida) {
                    return resultado;
                }
            }

            return {
                IndexInicio: index,
                IndexFin: index,
                MensajeError: this.MensajeError,
                Valida: false
            };
        }

        /**
        * Constructor de la clase.
        */
        constructor(Nombre: string, MensajeError: string) {

            this.Nombre = Nombre;
            this.MensajeError = MensajeError;
        }


    }

    export class GramaticaAritmetica {

        /**
        * Gramatica de una variable.
        **/
        private gVariable: Gramatica = new Gramatica("Variable", "No es una variable.");
        /**
        * Gramatica de un numero.
        **/
        private gConstante: Gramatica = new Gramatica("Constante", "No es una constante númerica.");
        /**
        * Gramatica de un operador.
        **/
        private gOperador: Gramatica = new Gramatica("Operador", "No es un operador valido.");

        /**
        * Gramatica de un operador.
        **/
        private gParentesisAbre: Gramatica = new Gramatica("ParentesisAbre", "Elemento invalido");

        /**
        * Gramatica de un operador.
        **/
        private gParentesisCierra: Gramatica = new Gramatica("ParentesisCierra", "Elemento invalido");

        /**
        * Gramatica para una agrupación por parentesis.
        **/
        private gParentesis: Gramatica = new Gramatica("Parentesis", "No es una agrupación valida");
        
        /**
        * Gramatica de un operando.
        **/
        private gOperando: Gramatica = new Gramatica("Operando", "No es un operando valido");
        /**
        * Gramatica de una operación aritmetica.
        **/
        private gExpresionAritmetica: Gramatica = new Gramatica("OperacionArtmetica", "No es una operación aritmetica valida");
        
        /**
        * Inicializa los elementos del scope.
        **/
        private init(): void {

            var $self = this;

            $self.gVariable.ExpresionRegular = / *\w[\w\d]* */;
            $self.gConstante.ExpresionRegular = / *((\d+(\.\d+)?)|(.\d+)) */;
            $self.gOperador.ExpresionRegular = / *[\+\-\*\/] */;
            $self.gParentesisAbre.ExpresionRegular = / *\( */;
            $self.gParentesisCierra.ExpresionRegular = / *\) */;
            $self.gParentesis.Estructura = [$self.gParentesisAbre, $self.gExpresionAritmetica, $self.gParentesisCierra];
            $self.gOperando.Reglas = [$self.gParentesis, $self.gVariable, $self.gConstante];
            $self.gExpresionAritmetica.Estructura = [$self.gOperando, $self.gOperador, $self.gOperando];

        }
        /**
        * Retorna la gramatica para una expresión aritmetica.
        **/
        public getGramatica(): shared.modelos.IGramatica {
            return this.gExpresionAritmetica;
        }

        /**
        * Constructor de la clase.
        **/
        constructor() {
            
            this.init();
        }
    }

}