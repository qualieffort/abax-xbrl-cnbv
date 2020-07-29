///<reference path="../scripts/typings/x2js/xml2json.d.ts" />
module abaxXBRL.utils {

    /**
     * Define métodos convenientes para manipulación de cadenas.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class StringUtils {

        /** 
         * Elimina los espacios antes y después de una cadena 
         * 
         * @param valor el valor a procesar
         * @return la cadena sin espacios antes y después
         */
        public static trim(valor: string): string {
            return valor.replace(/^\s+|\s+$/g, '');
        }

        /** 
         * Elimina los espacios antes de una cadena 
         * 
         * @param valor el valor a procesar
         * @return la cadena sin espacios antes
         */
        public static lTrim(valor: string): string {
            return valor.replace(/^\s+/, '');
        }

        /** 
         * Elimina los espacios después de una cadena 
         * 
         * @param valor el valor a procesar
         * @return la cadena sin espacios después
         */
        public static rTrim(valor: string): string {
            return valor.replace(/\s+$/, '');
        }

        /** 
         * Elimina los espacios antes, dentro y después de una cadena 
         * 
         * @param valor el valor a procesar
         * @return la cadena sin espacios antes, dentro y después
         */
        public static fullTrim(valor: string): string {
            return valor.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g, '').replace(/\s+/g, ' ');
        }

        /**
         * Indica si una cadena está contenida dentro de otra cadena.
         *
         * @param valor el valor a procesar
         * @param cadenaBuscada la cadena a buscar
         * @return true si la cadena está contenida en la primera. false en cualquier otro caso.
         */
        public static contains(valor: string, cadenaBuscada: string): boolean {
            return valor.indexOf(cadenaBuscada) > -1;
        }

        /**
         * Determina si la cadena de referencia comienza exactamente con la cadena buscada.
         *
         * @param stringReference la cadena en la cual se buscará la cadena buscada
         * @param stringToSearch la cadena que será buscada
         * @return true si la cadena buscada aparece exactamente al principio de la cadena de referencia. false en cualquier otro caso.
         */
        public static startsWith(stringReference: string, stringToSearch: string): boolean {
            var resultado: boolean = false;

            if (stringReference && stringReference != null && stringToSearch && stringToSearch != null
                && stringReference.length && stringReference.length > 0 && stringToSearch.length
                && stringToSearch.length > 0 && stringToSearch.length <= stringReference.length) {
                resultado = stringReference.slice(0, stringToSearch.length) == stringToSearch;
            }

            return resultado;
        }

        /**
         * Escapa una cadena que puede contener o no un fragmento de HTML. Si lo contiene, escapa los caracteres especiales.
         *
         * @param str la cadena a analizar.
         * @return el equivalente escapado de la cadena original pasada como parámetro.
         */
        public static escapeHtml(str: string): string {
            var div = document.createElement('div');
            div.appendChild(document.createTextNode(str));
            return div.innerHTML;
        }

        /**
         * Codifica un caracter si este es un caracter especial por su equivalente unicode. Si no es un caracter considerado especial regresa el mismo caracter.
         *
         * @param original el caracter a analizar
         * @return si el caracter pasado como parámetro es considerado especial, su equivalente unicode. el caracter original en cualquier otro caso.
         */
        public static encodeCharx(original: string): string {
            var found = true;
            var thecharchar = original.charAt(0);
            var thechar = original.charCodeAt(0);
            switch (thecharchar) {
                case '\n': return "\\n"; //newline
                case '\r': return "\\r"; //Carriage return
                case '\'': return "\\'";
                case '"': return "\\\"";
                case '\&': return "\\&";
                case '\\': return "\\\\";
                case '\t': return "\\t";
                case '\b': return "\\b";
                case '\f': return "\\f";
                case '/': return "\\x2F";
                case '<': return "\\x3C";
                case '>': return "\\x3E";
                default:
                    found = false;
                    break;
            }
                return original;
        }

        /**
         * Escapa una cadena buscando si tiene contenido HTML. Si lo tiene, reemplaza los caracteres especiales por sus equivalentes unicode.
         *
         * @param str la cadena que se analizará
         * @return la cadena escapada que es equivalente a la proporcionada como parámetro.
         */
        public static escaparHtml(str: string): string {

            var preescape = "" + str;
            var escaped = "";
            var i = 0;
            for (i = 0; i < preescape.length; i++) {
                escaped = escaped + StringUtils.encodeCharx(preescape.charAt(i));
            }
            return StringUtils.escapeHtml(escaped);
        }

        ///
        //Se quitan las de los patrones de reemplazo especiales:
        //  Patrón	Inserta
        //  $$	Inserta una "$".
        //  $&  Inserta la subcadena emparejada.
        //  $`	Inserta la sección de cadena que precede a la subcadena emparejada.
        //  $'	Inserta la porción de subcadena que sigue a la subcadena emparejada.
        ///
        public static validarPatronEspecial(str: string): string {
           
            if (str) {
                str = str.replace(/\$&/g, '$ &');
                str = str.replace(/\$'/g, '$ \'');
                str = str.replace(/\$`/g, '$ `');
            }
            return str;
        }


    }

    /**
     * Define métodos convenientes para manipulación de UUID's.
     * 
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class UUIDUtils {

        /**
         * Genera un Identificador Universal Único de clase 4
         *
         * @return el identificador universal único clase 4 generado.
         */
        public static generarUUID(): string {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
            });
            return uuid;
        }
    }

    /**
     * Define métodos convenientes para manipulación de arreglos
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class ArrayUtils {

        /**
         * Concatena dos arreglos y elimina los elementos duplicados.
         * 
         * @param array1 el primer arreglo para unir
         * @param array2 el segundo arreglo para unir
         * @param array3 el arreglo que resulta de la union de los dos arreglos pasados como parámetros.
         */
        public static union(array1: Array<any>, array2: Array<any>): Array<any> {
            var array3 = new Array<any>();
            var arr = array1.concat(array2),
                len = arr.length;

            while (len--) {
                var itm = arr[len];
                if (array3.indexOf(itm) === -1) {
                    array3.unshift(itm);
                }
            }
            return array3;
        }
    }

    /**
     * Define métodos convenientes para manipulación de texto en formato XML
     *
     * @author José Antonio Huizar Moreno
     * @version 1.0
     */
    export class XmlUtils {

        /** El prefijo utilizado para identificar atributos */
        private static get PREFIJO_ATRIBUTOS(): string { return '_'; }

        /** El prefijo utilizado para identificar propiedades */
        public static get PREFIJO_PROPIEDADES(): string { return '__'; }

        public static x2js: IX2JS = new X2JS();

        /**
         * Verifica si 2 nodos tienen los mismos atributos y los mismos elementos hijos. Los nodos se reciben en formato de texto plano.
         *
         * @param nodo el nodo referencia
         * @param comparar el nodo contra el cual se compara la referencia
         * @ return true si los nodos son equivalentes. false en cualquier otro caso
         */
        public static EsNodoEquivalente(nodo: string, comparar: string): boolean {
            //try {
                var xml1 = XmlUtils.x2js.parseXmlString(nodo);
                var json1 = XmlUtils.x2js.xml2json(xml1);
                var xml2 = XmlUtils.x2js.parseXmlString(comparar);
                var json2 = XmlUtils.x2js.xml2json(xml2);

                return XmlUtils.CompararNodosXmlJson(json1, json2);
            //} catch (error) {
            //    return nodo == comparar;
            //}
        }

        /**
         * Utiliza la libería X2JS para convertir un elemento de texto que contiene la definición de un nodo XML a su equivalente en un objeto JSON.
         *
         * @param nodo la cadena que contiene el fragmento XML a analizar.
         * @return el objeto JSON creado a partir de la definición XML.
         */
        public static CrearJsonAPartirDeXml(nodo: string): any {
            return XmlUtils.x2js.xml2json(XmlUtils.x2js.parseXmlString(nodo));
        }

        /**
         * Utiliza la libería X2JS para convertir un objeto JSON que contiene la definición de un nodo XML a su equivalente en texto XML.
         *
         * @param nodo el objeto JSON que contiene el fragmento XML a analizar.
         * @return la cadena de texto XML partir de la definición XML.
         */
        public static CrearXmlAPartirDeJson(nodo: any): string {
            return XmlUtils.x2js.json2xml_str(nodo);
        }

        /**
         * Compara dos nodos XML producidos por la librería X2JS y determina si son equivalentes.
         *
         * @param nodo: el nodo que se tomará como referenca para la comparación.
         * @param comparar el nodo contra el cual se compara la referencia.
         * @return true si los nodos son equivalentes. false en cualquier otro caso.
         */
        public static CompararNodosXmlJson(nodo: any, comparar: any): boolean {
            var resultado: boolean = true;
            if (typeof nodo !== typeof comparar) {
                resultado = false;
            } else {
                if (typeof nodo == 'string') {
                    if (nodo !== comparar) {
                        resultado = false;
                    }
                } else if (Object.prototype.toString.call(nodo) === '[object Array]' && Object.prototype.toString.call(comparar) === '[object Array]') {
                    if (nodo[elemento].length == comparar[elemento].length) {
                        var copiaArregloElemento = nodo[elemento].slice();
                        for (var i = 0; i < nodo[elemento].length; i++) {
                            var indiceEncontrado: number = -1;
                            for (var j = 0; j < copiaArregloElemento.length; j++) {
                                if (XmlUtils.CompararNodosXmlJson(nodo[elemento][0], copiaArregloElemento[j])) {
                                    indiceEncontrado = j;
                                    break;
                                }
                            }
                            if (indiceEncontrado > 0) {
                                copiaArregloElemento.splice(indiceEncontrado, 1);
                            } else {
                                resultado = false;
                                break;
                            }
                        }
                    } else {
                        resultado = false;
                    }
                } else if (Object.prototype.toString.call(nodo) === '[object Array]' || Object.prototype.toString.call(comparar) === '[object Array]') {
                    resultado = false;
                } else {
                    for (var elemento in nodo) {
                        if (nodo.hasOwnProperty(elemento)) {
                            if (comparar.hasOwnProperty(elemento)) {
                                if (!XmlUtils.CompararNodosXmlJson(nodo[elemento], comparar[elemento])) {
                                    resultado = false;
                                    break;
                                }
                            } else {
                                resultado = false;
                                break;
                            }
                        }
                    }
                }

            }
            return resultado;
        }
    }

    /**
     * Define los códigos de moneda que pueden utilizarce para las unidades del documento instancia
     *
     * @author Luis Angel Morales González
     * @version 1.0
     */
    export class CodigosMonedaISO4217 {

        /** Listado de codigos de moneda*/
        private static codigosMoneda: { [idioma: string]: string; } = null;

        /** Inicializa los código iso 4217*/
        private static CrearCodigosMoneda() {
            if (CodigosMonedaISO4217.codigosMoneda == null) {
                CodigosMonedaISO4217.codigosMoneda = {};
            }

            CodigosMonedaISO4217.codigosMoneda["AED"] = "AED - Dirham de los Emiratos Árabes Unidos";
            CodigosMonedaISO4217.codigosMoneda["AFN"] = "AFN - Afgani afgano";
            CodigosMonedaISO4217.codigosMoneda["ALL"] = "ALL - Lek albanés";
            CodigosMonedaISO4217.codigosMoneda["AMD"] = "AMD - Dram armenio";
            CodigosMonedaISO4217.codigosMoneda["ANG"] = "ANG - Florín antillano neerlandés";
            CodigosMonedaISO4217.codigosMoneda["AOA"] = "AOA - Kwanza angoleño";
            CodigosMonedaISO4217.codigosMoneda["ARS"] = "ARS - Peso argentino";
            CodigosMonedaISO4217.codigosMoneda["AUD"] = "AUD - Dólar australiano";
            CodigosMonedaISO4217.codigosMoneda["AWG"] = "AWG - Florín arubeño";
            CodigosMonedaISO4217.codigosMoneda["AZN"] = "AZN - Manat azerbaiyano";
            CodigosMonedaISO4217.codigosMoneda["BAM"] = "BAM - Marco convertible de Bosnia-Herzegovina";
            CodigosMonedaISO4217.codigosMoneda["BBD"] = "BBD - Dólar de Barbados";
            CodigosMonedaISO4217.codigosMoneda["BDT"] = "BDT - Taka de Bangladés";
            CodigosMonedaISO4217.codigosMoneda["BGN"] = "BGN - Lev búlgaro";
            CodigosMonedaISO4217.codigosMoneda["BHD"] = "BHD - Dinar bahreiní";
            CodigosMonedaISO4217.codigosMoneda["BIF"] = "BIF - Franco burundés";
            CodigosMonedaISO4217.codigosMoneda["BMD"] = "BMD - Dólar de Bermuda";
            CodigosMonedaISO4217.codigosMoneda["BND"] = "BND - Dólar de Brunéi";
            CodigosMonedaISO4217.codigosMoneda["BOB"] = "BOB - Boliviano";
            CodigosMonedaISO4217.codigosMoneda["BOV"] = "BOV - Mvdol boliviano (código de fondos)";
            CodigosMonedaISO4217.codigosMoneda["BRL"] = "BRL - Real brasileño";
            CodigosMonedaISO4217.codigosMoneda["BSD"] = "BSD - Dólar bahameño";
            CodigosMonedaISO4217.codigosMoneda["BTN"] = "BTN - Ngultrum de Bután";
            CodigosMonedaISO4217.codigosMoneda["BWP"] = "BWP - Pula de Botsuana";
            CodigosMonedaISO4217.codigosMoneda["BYR"] = "BYR - Rublo bielorruso";
            CodigosMonedaISO4217.codigosMoneda["BZD"] = "BZD - Dólar de Belice";
            CodigosMonedaISO4217.codigosMoneda["CAD"] = "CAD - Dólar canadiense";
            CodigosMonedaISO4217.codigosMoneda["CDF"] = "CDF - Franco congoleño, o congolés";
            CodigosMonedaISO4217.codigosMoneda["CHF"] = "CHF - Franco suizo";
            CodigosMonedaISO4217.codigosMoneda["CLF"] = "CLF - Unidades de fomento chilenas (código de fondos)";
            CodigosMonedaISO4217.codigosMoneda["CLP"] = "CLP - Peso chileno";
            CodigosMonedaISO4217.codigosMoneda["CNY"] = "CNY - Yuan chino";
            CodigosMonedaISO4217.codigosMoneda["COP"] = "COP - Peso colombiano";
            CodigosMonedaISO4217.codigosMoneda["COU"] = "COU - Unidad de valor real colombiana (añadida al COP)";
            CodigosMonedaISO4217.codigosMoneda["CRC"] = "CRC - Colón costarricense";
            CodigosMonedaISO4217.codigosMoneda["CSD"] = "CSD - Dinar serbio (Reemplazado por RSD el 25 de octubre de 2006)";
            CodigosMonedaISO4217.codigosMoneda["CUP"] = "CUP - Peso cubano";
            CodigosMonedaISO4217.codigosMoneda["CUC"] = "CUC - Peso cubano convertible";
            CodigosMonedaISO4217.codigosMoneda["CVE"] = "CVE - Escudo caboverdiano";
            CodigosMonedaISO4217.codigosMoneda["CZK"] = "CZK - Koruna checa";
            CodigosMonedaISO4217.codigosMoneda["DJF"] = "DJF - Franco yibutiano";
            CodigosMonedaISO4217.codigosMoneda["DKK"] = "DKK - Corona danesa";
            CodigosMonedaISO4217.codigosMoneda["DOP"] = "DOP - Peso dominicano";
            CodigosMonedaISO4217.codigosMoneda["DZD"] = "DZD - Dinar argelino";
            CodigosMonedaISO4217.codigosMoneda["EGP"] = "EGP - Libra egipcia";
            CodigosMonedaISO4217.codigosMoneda["ERN"] = "ERN - Nakfa eritreo";
            CodigosMonedaISO4217.codigosMoneda["ETB"] = "ETB - Birr etíope";
            CodigosMonedaISO4217.codigosMoneda["EUR"] = "EUR - Euro";
            CodigosMonedaISO4217.codigosMoneda["FJD"] = "FJD - Dólar fiyiano";
            CodigosMonedaISO4217.codigosMoneda["FKP"] = "FKP - Libra malvinense";
            CodigosMonedaISO4217.codigosMoneda["GBP"] = "GBP - Libra esterlina (libra de Gran Bretaña)";
            CodigosMonedaISO4217.codigosMoneda["GEL"] = "GEL - Lari georgiano";
            CodigosMonedaISO4217.codigosMoneda["GHS"] = "GHS - Cedi ghanés";
            CodigosMonedaISO4217.codigosMoneda["GIP"] = "GIP - Libra de Gibraltar";
            CodigosMonedaISO4217.codigosMoneda["GMD"] = "GMD - Dalasi gambiano";
            CodigosMonedaISO4217.codigosMoneda["GNF"] = "GNF - Franco guineano";
            CodigosMonedaISO4217.codigosMoneda["GTQ"] = "GTQ - Quetzal guatemalteco";
            CodigosMonedaISO4217.codigosMoneda["GYD"] = "GYD - Dólar guyanés";
            CodigosMonedaISO4217.codigosMoneda["HKD"] = "HKD - Dólar de Hong Kong";
            CodigosMonedaISO4217.codigosMoneda["HNL"] = "HNL - Lempira hondureño";
            CodigosMonedaISO4217.codigosMoneda["HRK"] = "HRK - Kuna croata";
            CodigosMonedaISO4217.codigosMoneda["HTG"] = "HTG - Gourde haitiano";
            CodigosMonedaISO4217.codigosMoneda["HUF"] = "HUF - Forint húngaro";
            CodigosMonedaISO4217.codigosMoneda["IDR"] = "IDR - Rupiah indonesia";
            CodigosMonedaISO4217.codigosMoneda["ILS"] = "ILS - Nuevo shéquel israelí";
            CodigosMonedaISO4217.codigosMoneda["INR"] = "INR - Rupia india";
            CodigosMonedaISO4217.codigosMoneda["IQD"] = "IQD - Dinar iraquí";
            CodigosMonedaISO4217.codigosMoneda["IRR"] = "IRR - Rial iraní";
            CodigosMonedaISO4217.codigosMoneda["ISK"] = "ISK - Króna islandesa";
            CodigosMonedaISO4217.codigosMoneda["JMD"] = "JMD - Dólar jamaicano";
            CodigosMonedaISO4217.codigosMoneda["JOD"] = "JOD - Dinar jordano";
            CodigosMonedaISO4217.codigosMoneda["JPY"] = "JPY - Yen japonés";
            CodigosMonedaISO4217.codigosMoneda["KES"] = "KES - Chelín keniata";
            CodigosMonedaISO4217.codigosMoneda["KGS"] = "KGS - Som kirguís (de Kirguistán)";
            CodigosMonedaISO4217.codigosMoneda["KHR"] = "KHR - Riel camboyano";
            CodigosMonedaISO4217.codigosMoneda["KMF"] = "KMF - Franco comoriano (de Comoras)";
            CodigosMonedaISO4217.codigosMoneda["KPW"] = "KPW - Won norcoreano";
            CodigosMonedaISO4217.codigosMoneda["KRW"] = "KRW - Won surcoreano";
            CodigosMonedaISO4217.codigosMoneda["KWD"] = "KWD - Dinar kuwaití";
            CodigosMonedaISO4217.codigosMoneda["KYD"] = "KYD - Dólar caimano (de Islas Caimán)";
            CodigosMonedaISO4217.codigosMoneda["KZT"] = "KZT - Tenge kazajo";
            CodigosMonedaISO4217.codigosMoneda["LAK"] = "LAK - Kip lao";
            CodigosMonedaISO4217.codigosMoneda["LBP"] = "LBP - Libra libanesa";
            CodigosMonedaISO4217.codigosMoneda["LKR"] = "LKR - Rupia de Sri Lanka";
            CodigosMonedaISO4217.codigosMoneda["LRD"] = "LRD - Dólar liberiano";
            CodigosMonedaISO4217.codigosMoneda["LSL"] = "LSL - Loti lesotense";
            CodigosMonedaISO4217.codigosMoneda["LTL"] = "LTL - Litas lituano";
            CodigosMonedaISO4217.codigosMoneda["LVL"] = "LVL - Lat letón";
            CodigosMonedaISO4217.codigosMoneda["LYD"] = "LYD - Dinar libio";
            CodigosMonedaISO4217.codigosMoneda["MAD"] = "MAD - Dirham marroquí";
            CodigosMonedaISO4217.codigosMoneda["MDL"] = "MDL - Leu moldavo";
            CodigosMonedaISO4217.codigosMoneda["MGA"] = "MGA - Ariary malgache";
            CodigosMonedaISO4217.codigosMoneda["MKD"] = "MKD - Denar macedonio";
            CodigosMonedaISO4217.codigosMoneda["MMK"] = "MMK - Kyat birmano";
            CodigosMonedaISO4217.codigosMoneda["MNT"] = "MNT - Tughrik mongol";
            CodigosMonedaISO4217.codigosMoneda["MOP"] = "MOP - Pataca de Macao";
            CodigosMonedaISO4217.codigosMoneda["MRO"] = "MRO - Ouguiya mauritana";
            CodigosMonedaISO4217.codigosMoneda["MUR"] = "MUR - Rupia mauricia";
            CodigosMonedaISO4217.codigosMoneda["MVR"] = "MVR - Rufiyaa maldiva";
            CodigosMonedaISO4217.codigosMoneda["MWK"] = "MWK - Kwacha malauí";
            CodigosMonedaISO4217.codigosMoneda["MXN"] = "MXN - Peso mexicano";
            CodigosMonedaISO4217.codigosMoneda["MXV"] = "MXV - Unidad de Inversión (UDI) mexicana (código de fondos)";
            CodigosMonedaISO4217.codigosMoneda["MYR"] = "MYR - Ringgit malayo";
            CodigosMonedaISO4217.codigosMoneda["MZN"] = "MZN - Metical mozambiqueño";
            CodigosMonedaISO4217.codigosMoneda["NAD"] = "NAD - Dólar namibio";
            CodigosMonedaISO4217.codigosMoneda["NGN"] = "NGN - Naira nigeriana";
            CodigosMonedaISO4217.codigosMoneda["NIO"] = "NIO - Córdoba nicaragüense";
            CodigosMonedaISO4217.codigosMoneda["NOK"] = "NOK - Corona noruega";
            CodigosMonedaISO4217.codigosMoneda["NPR"] = "NPR - Rupia nepalesa";
            CodigosMonedaISO4217.codigosMoneda["NZD"] = "NZD - Dólar neozelandés";
            CodigosMonedaISO4217.codigosMoneda["OMR"] = "OMR - Rial omaní";
            CodigosMonedaISO4217.codigosMoneda["PAB"] = "PAB - Balboa panameña";
            CodigosMonedaISO4217.codigosMoneda["PEN"] = "PEN - Nuevo sol peruano";
            CodigosMonedaISO4217.codigosMoneda["PGK"] = "PGK - Kina de Papúa Nueva Guinea";
            CodigosMonedaISO4217.codigosMoneda["PHP"] = "PHP - Peso filipino";
            CodigosMonedaISO4217.codigosMoneda["PKR"] = "PKR - Rupia pakistaní";
            CodigosMonedaISO4217.codigosMoneda["PLN"] = "PLN - zloty polaco";
            CodigosMonedaISO4217.codigosMoneda["PYG"] = "PYG - Guaraní paraguayo";
            CodigosMonedaISO4217.codigosMoneda["QAR"] = "QAR - Rial qatarí";
            CodigosMonedaISO4217.codigosMoneda["RON"] = "RON - Leu rumano";
            CodigosMonedaISO4217.codigosMoneda["RUB"] = "RUB - Rublo ruso";
            CodigosMonedaISO4217.codigosMoneda["RWF"] = "RWF - Franco ruandés";
            CodigosMonedaISO4217.codigosMoneda["SAR"] = "SAR - Riyal saudí";
            CodigosMonedaISO4217.codigosMoneda["SBD"] = "SBD - Dólar de las Islas Salomón";
            CodigosMonedaISO4217.codigosMoneda["SCR"] = "SCR - Rupia de Seychelles";
            CodigosMonedaISO4217.codigosMoneda["SDG"] = "SDG - Dinar sudanés";
            CodigosMonedaISO4217.codigosMoneda["SEK"] = "SEK - Corona sueca";
            CodigosMonedaISO4217.codigosMoneda["SGD"] = "SGD - Dólar de Singapur";
            CodigosMonedaISO4217.codigosMoneda["SHP"] = "SHP - Libra de Santa Helena";
            CodigosMonedaISO4217.codigosMoneda["SLL"] = "SLL - Leone de Sierra Leona";
            CodigosMonedaISO4217.codigosMoneda["SOS"] = "SOS - Chelín somalí";
            CodigosMonedaISO4217.codigosMoneda["SRD"] = "SRD - Dólar surinamés";
            CodigosMonedaISO4217.codigosMoneda["STD"] = "STD - Dobra de Santo Tomé y Príncipe";
            CodigosMonedaISO4217.codigosMoneda["SYP"] = "SYP - Libra siria";
            CodigosMonedaISO4217.codigosMoneda["SZL"] = "SZL - Lilangeni suazi";
            CodigosMonedaISO4217.codigosMoneda["THB"] = "THB - Baht tailandés";
            CodigosMonedaISO4217.codigosMoneda["TJS"] = "TJS - Somoni tayik (de Tayikistán)";
            CodigosMonedaISO4217.codigosMoneda["TMT"] = "TMT - Manat turcomano";
            CodigosMonedaISO4217.codigosMoneda["TND"] = "TND - Dinar tunecino";
            CodigosMonedaISO4217.codigosMoneda["TOP"] = "TOP - Pa'anga tongano";
            CodigosMonedaISO4217.codigosMoneda["TRY"] = "TRY - Lira turca";
            CodigosMonedaISO4217.codigosMoneda["TTD"] = "TTD - Dólar de Trinidad y Tobago";
            CodigosMonedaISO4217.codigosMoneda["TWD"] = "TWD - Dólar taiwanés";
            CodigosMonedaISO4217.codigosMoneda["TZS"] = "TZS - Chelín tanzano";
            CodigosMonedaISO4217.codigosMoneda["UAH"] = "UAH - Grivna ucraniana";
            CodigosMonedaISO4217.codigosMoneda["UGX"] = "UGX - Chelín ugandés";
            CodigosMonedaISO4217.codigosMoneda["USD"] = "USD - Dólar estadounidense";
            CodigosMonedaISO4217.codigosMoneda["USN"] = "USN - Dólar estadounidense (Siguiente día) (código de fondos)";
            CodigosMonedaISO4217.codigosMoneda["USS"] = "USS - Dólar estadounidense (Mismo día) (código de fondos)";
            CodigosMonedaISO4217.codigosMoneda["UYU"] = "UYU - Peso uruguayo";
            CodigosMonedaISO4217.codigosMoneda["UZS"] = "UZS - Som uzbeko";
            CodigosMonedaISO4217.codigosMoneda["VEF"] = "VEF - Bolívar fuerte venezolano";
            CodigosMonedaISO4217.codigosMoneda["VND"] = "VND - Dong vietnamita";
            CodigosMonedaISO4217.codigosMoneda["VUV"] = "VUV - Vatu vanuatense";
            CodigosMonedaISO4217.codigosMoneda["WST"] = "WST - Tala samoana";
            CodigosMonedaISO4217.codigosMoneda["XAF"] = "XAF - Franco CFA de África Central";
            CodigosMonedaISO4217.codigosMoneda["XAG"] = "XAG - Onza de plata";
            CodigosMonedaISO4217.codigosMoneda["XAU"] = "XAU - Onza de oro";
            CodigosMonedaISO4217.codigosMoneda["XBA"] = "XBA - European Composite Unit (EURCO) (unidad del mercado de bonos)";
            CodigosMonedaISO4217.codigosMoneda["XBB"] = "XBB - European Monetary Unit (E.M.U.-6) (unidad del mercado de bonos)";
            CodigosMonedaISO4217.codigosMoneda["XBC"] = "XBC - European Unit of Account 9 (E.U.A.-9) (unidad del mercado de bonos)";
            CodigosMonedaISO4217.codigosMoneda["XBD"] = "XBD - European Unit of Account 17 (E.U.A.-17) (unidad del mercado de bonos)";
            CodigosMonedaISO4217.codigosMoneda["XCD"] = "XCD - Dólar del Caribe Oriental";
            CodigosMonedaISO4217.codigosMoneda["XDR"] = "XDR - Derechos Especiales de Giro (FMI)";
            CodigosMonedaISO4217.codigosMoneda["XFO"] = "XFO - Franco de oro (Special settlement currency)";
            CodigosMonedaISO4217.codigosMoneda["XFU"] = "XFU - Franco UIC (Special settlement currency)";
            CodigosMonedaISO4217.codigosMoneda["XOF"] = "XOF - Franco CFA de África Occidental";
            CodigosMonedaISO4217.codigosMoneda["XPD"] = "XPD - Onza de paladio";
            CodigosMonedaISO4217.codigosMoneda["XPF"] = "XPF - Franco CFP";
            CodigosMonedaISO4217.codigosMoneda["XPT"] = "XPT - Onza de platino";
            CodigosMonedaISO4217.codigosMoneda["XTS"] = "XTS - Reservado para pruebas";
            CodigosMonedaISO4217.codigosMoneda["XXX"] = "XXX - Sin divisa";
            CodigosMonedaISO4217.codigosMoneda["YER"] = "YER - Rial yemení (de Yemen)";
            CodigosMonedaISO4217.codigosMoneda["ZAR"] = "ZAR - Rand sudafricano";
            CodigosMonedaISO4217.codigosMoneda["ZMW"] = "ZMW - Kwacha zambiano";
            CodigosMonedaISO4217.codigosMoneda["ZWL"] = "ZWL - Dólar zimbabuense";

        }


        /**
         * Obtiene la descripcion de la moneda.
         *
         * @param codigoMoneda Codigo de la moneda a consultar.
         * @return la cadena de texto con la descipción de la moneda.
         */
        public static ObtenerDescripcionMoneda(codigoMoneda: string): string {
            CodigosMonedaISO4217.CrearCodigosMoneda()
            return CodigosMonedaISO4217.codigosMoneda[codigoMoneda];
        }

        /**
        *Obtiene el listado de los codigos de moneda que existen en ISO4217
        * @return listado de codigos de moneda en ISO4217.
        */
        public static ObtenerCodigosMonedas(): { [codigoMoneda: string]: string; } {
            CodigosMonedaISO4217.CrearCodigosMoneda()
            return CodigosMonedaISO4217.codigosMoneda;
        }

    }
    /**
     * Define los lenguajes que pueden utilizarce en las notas al pie de los hechos de un documento instancia
     *
     * @author Luis Angel Morales González
     * @version 1.0
     */
    export class LanguageISO639 {

        /** Listado de lenguajes ISO 639-1*/
        private static listadoLenguajes: { [idioma: string]: string; } = null;

        /** Inicializa los código iso 639-1*/
        private static CrearLenguajes() {
            if (LanguageISO639.listadoLenguajes == null) {
                LanguageISO639.listadoLenguajes = {};
                LanguageISO639.listadoLenguajes["aa"] = "afar";
                LanguageISO639.listadoLenguajes["ab"] = "abjasio (o abjasiano)";
                LanguageISO639.listadoLenguajes["ae"] = "avéstico";
                LanguageISO639.listadoLenguajes["af"] = "afrikáans";
                LanguageISO639.listadoLenguajes["ak"] = "akano";
                LanguageISO639.listadoLenguajes["am"] = "amhárico";
                LanguageISO639.listadoLenguajes["an"] = "aragonés";
                LanguageISO639.listadoLenguajes["ar"] = "árabe";
                LanguageISO639.listadoLenguajes["as"] = "asamés";
                LanguageISO639.listadoLenguajes["av"] = "avar (o ávaro)";
                LanguageISO639.listadoLenguajes["ay"] = "aimara";
                LanguageISO639.listadoLenguajes["az"] = "azerí";
                LanguageISO639.listadoLenguajes["ba"] = "baskir";
                LanguageISO639.listadoLenguajes["be"] = "bielorruso";
                LanguageISO639.listadoLenguajes["bg"] = "búlgaro";
                LanguageISO639.listadoLenguajes["bh"] = "bhoyapurí";
                LanguageISO639.listadoLenguajes["bi"] = "bislama";
                LanguageISO639.listadoLenguajes["bm"] = "bambara";
                LanguageISO639.listadoLenguajes["bn"] = "bengalí";
                LanguageISO639.listadoLenguajes["bo"] = "tibetano";
                LanguageISO639.listadoLenguajes["br"] = "bretón";
                LanguageISO639.listadoLenguajes["bs"] = "bosnio";
                LanguageISO639.listadoLenguajes["ca"] = "catalán";
                LanguageISO639.listadoLenguajes["ce"] = "checheno";
                LanguageISO639.listadoLenguajes["ch"] = "chamorro";
                LanguageISO639.listadoLenguajes["co"] = "corso";
                LanguageISO639.listadoLenguajes["cr"] = "cree";
                LanguageISO639.listadoLenguajes["cs"] = "checo";
                LanguageISO639.listadoLenguajes["cu"] = "eslavo eclesiástico antiguo";
                LanguageISO639.listadoLenguajes["cv"] = "chuvasio";
                LanguageISO639.listadoLenguajes["cy"] = "galés";
                LanguageISO639.listadoLenguajes["da"] = "danés";
                LanguageISO639.listadoLenguajes["de"] = "alemán";
                LanguageISO639.listadoLenguajes["dv"] = "maldivo (o dhivehi)";
                LanguageISO639.listadoLenguajes["dz"] = "dzongkha";
                LanguageISO639.listadoLenguajes["ee"] = "ewé";
                LanguageISO639.listadoLenguajes["el"] = "griego (moderno)";
                LanguageISO639.listadoLenguajes["en"] = "inglés";
                LanguageISO639.listadoLenguajes["eo"] = "esperanto";
                LanguageISO639.listadoLenguajes["es"] = "español (o castellano)";
                LanguageISO639.listadoLenguajes["et"] = "estonio";
                LanguageISO639.listadoLenguajes["eu"] = "euskera";
                LanguageISO639.listadoLenguajes["fa"] = "persa";
                LanguageISO639.listadoLenguajes["ff"] = "fula";
                LanguageISO639.listadoLenguajes["fi"] = "finés (o finlandés)";
                LanguageISO639.listadoLenguajes["fj"] = "fiyiano (o fiyi)";
                LanguageISO639.listadoLenguajes["fo"] = "feroés";
                LanguageISO639.listadoLenguajes["fr"] = "francés";
                LanguageISO639.listadoLenguajes["fy"] = "frisón (o frisio)";
                LanguageISO639.listadoLenguajes["ga"] = "irlandés (o gaélico)";
                LanguageISO639.listadoLenguajes["gd"] = "gaélico escocés";
                LanguageISO639.listadoLenguajes["gl"] = "gallego";
                LanguageISO639.listadoLenguajes["gn"] = "guaraní";
                LanguageISO639.listadoLenguajes["gu"] = "guyaratí (o guyaratí)";
                LanguageISO639.listadoLenguajes["gv"] = "manés (gaélico manés o de Isla de Man)";
                LanguageISO639.listadoLenguajes["ha"] = "hausa";
                LanguageISO639.listadoLenguajes["he"] = "hebreo";
                LanguageISO639.listadoLenguajes["hi"] = "hindi (o hindú)";
                LanguageISO639.listadoLenguajes["ho"] = "hiri motu";
                LanguageISO639.listadoLenguajes["hr"] = "croata";
                LanguageISO639.listadoLenguajes["ht"] = "haitiano";
                LanguageISO639.listadoLenguajes["hu"] = "húngaro";
                LanguageISO639.listadoLenguajes["hy"] = "armenio";
                LanguageISO639.listadoLenguajes["hz"] = "herero";
                LanguageISO639.listadoLenguajes["ia"] = "interlingua";
                LanguageISO639.listadoLenguajes["id"] = "indonesio";
                LanguageISO639.listadoLenguajes["ie"] = "occidental";
                LanguageISO639.listadoLenguajes["ig"] = "igbo";
                LanguageISO639.listadoLenguajes["ii"] = "yi de Sichuán";
                LanguageISO639.listadoLenguajes["ik"] = "iñupiaq";
                LanguageISO639.listadoLenguajes["io"] = "ido";
                LanguageISO639.listadoLenguajes["is"] = "islandés";
                LanguageISO639.listadoLenguajes["it"] = "italiano";
                LanguageISO639.listadoLenguajes["iu"] = "inuktitut (o inuit)";
                LanguageISO639.listadoLenguajes["ja"] = "japonés";
                LanguageISO639.listadoLenguajes["jv"] = "javanés";
                LanguageISO639.listadoLenguajes["ka"] = "georgiano";
                LanguageISO639.listadoLenguajes["kg"] = "kongo (o kikongo)";
                LanguageISO639.listadoLenguajes["ki"] = "kikuyu";
                LanguageISO639.listadoLenguajes["kj"] = "kuanyama";
                LanguageISO639.listadoLenguajes["kk"] = "kazajo (o kazajio)";
                LanguageISO639.listadoLenguajes["kl"] = "groenlandés (o kalaallisut)";
                LanguageISO639.listadoLenguajes["km"] = "camboyano (o jemer)";
                LanguageISO639.listadoLenguajes["kn"] = "canarés";
                LanguageISO639.listadoLenguajes["ko"] = "coreano";
                LanguageISO639.listadoLenguajes["kr"] = "kanuri";
                LanguageISO639.listadoLenguajes["ks"] = "cachemiro (o cachemir)";
                LanguageISO639.listadoLenguajes["ku"] = "kurdo";
                LanguageISO639.listadoLenguajes["kv"] = "komi";
                LanguageISO639.listadoLenguajes["kw"] = "córnico";
                LanguageISO639.listadoLenguajes["ky"] = "kirguís";
                LanguageISO639.listadoLenguajes["la"] = "latín";
                LanguageISO639.listadoLenguajes["lb"] = "luxemburgués";
                LanguageISO639.listadoLenguajes["lg"] = "luganda";
                LanguageISO639.listadoLenguajes["li"] = "limburgués";
                LanguageISO639.listadoLenguajes["ln"] = "lingala";
                LanguageISO639.listadoLenguajes["lo"] = "lao";
                LanguageISO639.listadoLenguajes["lt"] = "lituano";
                LanguageISO639.listadoLenguajes["lu"] = "luba-katanga (o chiluba)";
                LanguageISO639.listadoLenguajes["lv"] = "letón";
                LanguageISO639.listadoLenguajes["mg"] = "malgache (o malagasy)";
                LanguageISO639.listadoLenguajes["mh"] = "marshalés";
                LanguageISO639.listadoLenguajes["mi"] = "maorí";
                LanguageISO639.listadoLenguajes["mk"] = "macedonio";
                LanguageISO639.listadoLenguajes["ml"] = "malayalam";
                LanguageISO639.listadoLenguajes["mn"] = "mongol";
                LanguageISO639.listadoLenguajes["mr"] = "maratí";
                LanguageISO639.listadoLenguajes["ms"] = "malayo";
                LanguageISO639.listadoLenguajes["mt"] = "maltés";
                LanguageISO639.listadoLenguajes["my"] = "birmano";
                LanguageISO639.listadoLenguajes["na"] = "nauruano";
                LanguageISO639.listadoLenguajes["nb"] = "noruego bokmål";
                LanguageISO639.listadoLenguajes["nd"] = "ndebele del norte";
                LanguageISO639.listadoLenguajes["ne"] = "nepalí";
                LanguageISO639.listadoLenguajes["ng"] = "ndonga";
                LanguageISO639.listadoLenguajes["nl"] = "neerlandés (u holandés)";
                LanguageISO639.listadoLenguajes["nn"] = "nynorsk";
                LanguageISO639.listadoLenguajes["no"] = "noruego";
                LanguageISO639.listadoLenguajes["nr"] = "ndebele del sur";
                LanguageISO639.listadoLenguajes["nv"] = "navajo";
                LanguageISO639.listadoLenguajes["ny"] = "chichewa";
                LanguageISO639.listadoLenguajes["oc"] = "occitano";
                LanguageISO639.listadoLenguajes["oj"] = "ojibwa";
                LanguageISO639.listadoLenguajes["om"] = "oromo";
                LanguageISO639.listadoLenguajes["or"] = "oriya";
                LanguageISO639.listadoLenguajes["os"] = "osético (u osetio, u oseta)";
                LanguageISO639.listadoLenguajes["pa"] = "panyabí (o penyabi)";
                LanguageISO639.listadoLenguajes["pi"] = "pali";
                LanguageISO639.listadoLenguajes["pl"] = "polaco";
                LanguageISO639.listadoLenguajes["ps"] = "pastú (o pastún, o pashto)";
                LanguageISO639.listadoLenguajes["pt"] = "portugués";
                LanguageISO639.listadoLenguajes["qu"] = "quechua";
                LanguageISO639.listadoLenguajes["rm"] = "romanche";
                LanguageISO639.listadoLenguajes["rn"] = "kirundi";
                LanguageISO639.listadoLenguajes["ro"] = "rumano";
                LanguageISO639.listadoLenguajes["ru"] = "ruso";
                LanguageISO639.listadoLenguajes["rw"] = "ruandés (o kiñaruanda)";
                LanguageISO639.listadoLenguajes["sa"] = "sánscrito";
                LanguageISO639.listadoLenguajes["sc"] = "sardo";
                LanguageISO639.listadoLenguajes["sd"] = "sindhi";
                LanguageISO639.listadoLenguajes["se"] = "sami septentrional";
                LanguageISO639.listadoLenguajes["sg"] = "sango";
                LanguageISO639.listadoLenguajes["si"] = "cingalés";
                LanguageISO639.listadoLenguajes["sk"] = "eslovaco";
                LanguageISO639.listadoLenguajes["sl"] = "esloveno";
                LanguageISO639.listadoLenguajes["sm"] = "samoano";
                LanguageISO639.listadoLenguajes["sn"] = "shona";
                LanguageISO639.listadoLenguajes["so"] = "somalí";
                LanguageISO639.listadoLenguajes["sq"] = "albanés";
                LanguageISO639.listadoLenguajes["sr"] = "serbio";
                LanguageISO639.listadoLenguajes["ss"] = "suazi (o swati, o siSwati)";
                LanguageISO639.listadoLenguajes["st"] = "sesotho";
                LanguageISO639.listadoLenguajes["su"] = "sundanés (o sondanés)";
                LanguageISO639.listadoLenguajes["sv"] = "sueco";
                LanguageISO639.listadoLenguajes["sw"] = "suajili";
                LanguageISO639.listadoLenguajes["ta"] = "tamil";
                LanguageISO639.listadoLenguajes["te"] = "télugu";
                LanguageISO639.listadoLenguajes["tg"] = "tayiko";
                LanguageISO639.listadoLenguajes["th"] = "tailandés";
                LanguageISO639.listadoLenguajes["ti"] = "tigriña";
                LanguageISO639.listadoLenguajes["tk"] = "turcomano";
                LanguageISO639.listadoLenguajes["tl"] = "tagalo";
                LanguageISO639.listadoLenguajes["tn"] = "setsuana";
                LanguageISO639.listadoLenguajes["to"] = "tongano";
                LanguageISO639.listadoLenguajes["tr"] = "turco";
                LanguageISO639.listadoLenguajes["ts"] = "tsonga";
                LanguageISO639.listadoLenguajes["tt"] = "tártaro";
                LanguageISO639.listadoLenguajes["tw"] = "twi";
                LanguageISO639.listadoLenguajes["ty"] = "tahitiano";
                LanguageISO639.listadoLenguajes["ug"] = "uigur";
                LanguageISO639.listadoLenguajes["uk"] = "ucraniano";
                LanguageISO639.listadoLenguajes["ur"] = "urdu";
                LanguageISO639.listadoLenguajes["uz"] = "uzbeko";
                LanguageISO639.listadoLenguajes["ve"] = "venda";
                LanguageISO639.listadoLenguajes["vi"] = "vietnamita";
                LanguageISO639.listadoLenguajes["vo"] = "volapük";
                LanguageISO639.listadoLenguajes["wa"] = "valón";
                LanguageISO639.listadoLenguajes["wo"] = "wolof";
                LanguageISO639.listadoLenguajes["xh"] = "xhosa";
                LanguageISO639.listadoLenguajes["yi"] = "yídish (o yidis, o yiddish)";
                LanguageISO639.listadoLenguajes["yo"] = "yoruba";
                LanguageISO639.listadoLenguajes["za"] = "chuan (o chuang, o zhuang)";
                LanguageISO639.listadoLenguajes["zh"] = "chino";
                LanguageISO639.listadoLenguajes["zu"] = "zulú";

            }
        }

        /**
         * Obtiene la descripcion del nombre del lenguaje .
         *
         * @param codigoLenguaje Codigo del lenguaje a consultar.
         * @return la cadena de texto del nombre del lenguaje.
         */
        public static ObtenerNombreLenguaje(codigoLenguaje: string): string {
            LanguageISO639.CrearLenguajes()
            return LanguageISO639.listadoLenguajes[codigoLenguaje];
        }

        /**
        *Obtiene el listado de lenguajes que existen en ISO639
        * @return listado de lenguajes en iso639.
        */
        public static ObtenerLenguajes(): { [idioma: string]: string; } {
            LanguageISO639.CrearLenguajes()
            return LanguageISO639.listadoLenguajes;
        }

    }

    /**
     * Define los estilos que pueden utilizarce en un campo captura cuando es incorrecto, valido ó indeterminado
     *
     * @author Luis Angel Morales González
     * @version 1.0
     */
    export class EstilosCampoCaptura{
        /**
         * Obtiene la clase que se debe de utilizar en el campo de captura del hecho por estado de validación.
         *
         * @param estadoValidacion Estado de validacion del hecho
         * @return clase que se deberá presentar en el campo de captura.
         */
        public static obtenerClaseEstadoValidacionHechoTipoDatoXbrl(estadoValidacion: number): string {
            
            switch (estadoValidacion) {
                case 1: return "text-success";
                case 2: return "text-danger";
                case 3: return "text-default";
                case 4: return "text-warning";
                default:
                    return "text-default";
            }
        }
         
         /**
         * Obtiene la clase que se debe de utilizar en el campo de captura del hecho por estado de validación con el icono que corresponda.
         *
         * @param estadoValidacion Estado de validacion del hecho
         * @return clase que se deberá presentar en el campo de captura.
         */
        public static obtenerClaseConIconoEstadoValidacionHechoTipoDatoXbrl(estadoValidacion: number): string {

            switch (estadoValidacion) {
                case 1: return "i i-checkmark2 text-success";
                case 2: return "i i-cross2 text-danger";
                case 3: return "text-default";
                case 4: return "i i-notification text-warning";
                default:
                    return "";
            }
        }

        /**
         * Obtiene la clase que se debe de utilizar en el contenedor div del campo de captura del hecho por estado de validación.
         *
         * @param estadoValidacion Estado de validacion del hecho
         * @return clase que se deberá presentar en el contenedor div campo de captura.
         */
        public static obtenerClaseEstadoValidacionDivTipoDatoXbrl(estadoValidacion: number): string {

            switch (estadoValidacion) {
                case 1: return "div-success";
                case 2: return "div-danger";
                case 3: return "";
                case 4: return "div-warning";

                default:
                    return "div-default";
            }
        }

        /**
         * Obtiene la clase que se debe de utilizar para el icono de expandir un bloque de texto.
         *
         * @param estadoValidacion Estado de validacion del hecho
         * @return clase que se deberá presentar el icono de expandir un bloque de texto.
         */
        public static obtenerClaseConIconoEstadoValidacionHechoBloqueTexto(estadoValidacion: number): string {

            switch (estadoValidacion) {
                case 1: return "i i-arrow-down-2 clasePaddingValidacion";
                case 2: return "i i-arrow-down-2 clasePaddingValidacion";
                default:
                    return "i i-arrow-down-2";
            }
        }
        

    }

    /**
     * Define una clase de apoyo para validar tiempos de procesamiento de metodos en segundos
     *
     * @author Luis Angel Morales González
     * @version 1.0
     */
    export class Stopwatch {

        offset: number;

        //Inicializa el stop
        public start() {
            this.offset = Date.now();
        }

        //Cuanto se a tardado
        private delta() {
            var now = Date.now(),
            d = now - this.offset;
            this.offset = now;
            return d;
        }

        //Para el stop Watch
        public stop():number {
            return this.delta() / 1000;
        }

    }
}
