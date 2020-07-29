module abaxXBRL.shared.modelos {

    /**
    * Interface que definie los diferentes elementos que pueden configurarse en una tabla dinamica.
    **/
    export interface IOpcionesTablaDinamica {

        /**
        * Banndera que indica si la tabla se esta presentando en modo pantalla completa.
        * En cuyo caso toma todo el alto del viewPort menos el alto del encabezado de la tabla, como el alto del scroll que presenta el cuerpo.
        **/
        fullScreen?: boolean;
        /**
        * Porcentaje de la altura del view port que será utilizado como alto de la tabla.
        * Si esta en true el fullScreen no se toma en cuenta esta opción.
        **/
        heightScreenPorcent?: number;

        /*
        * Si la tabla tiene activo el plugin de tabla excel, esta opción hace que se pause dicho plugin para las tablas.
        **/
        desHabilitarTablaExcel?: boolean;

        /**
        * Bandera que indica si se deben de sincronizar el ancho de las columnas del cuerpo de la tabla.
        * Por defecto su valor es <code>false</code>
        **/
        sincronizarAnchoColumnasBody?: boolean;

        /**
        * Bandera que indica que se desactive el ajuste automatico del ancho de las columanas.
        * Por defecto su valor es <code>false</code>
        **/
        deshabilitarAjuteAnchoColumnas?: boolean;
        /**
        * Bandera que indica que se desactive el ajuste automatico del alto de las filas.
        * Por defecto su valor es <code>false</code>
        **/
        deshabilitarAjuteAltoFilas?: boolean;

        /**
        * Bandera que indica si los altos y anchos a los que se deben ajustar las filas y columnas de la tabla fija deben ser asignados mediante reglas de estilo
        * es decir mediante la definición de reglas de estilo CSS dentro de clases.
        * Si el valor es falso entonces los altos y anchos se asignan directamente en el atributo style del elemento evaluado.
        * Por defecto su valor es verdadero.  
        **/
        ajustarPorReglasDeEstilo?: boolean;
        /**
        * Identificador que será utilizados para marcar el conenedor principal de la tabla.
        * Si el existen más de una tabla solo la primera se marca con este identificador y el resto se marca con 
        * el identificador dado más un '_' y e indice de la tabla en el DOM.
        **/
        idMasterTable?: string;
        /**
        * Ancho minimo de la primera columna en pixeles, si no es indicado el valor por defecto es 300.
        **/
        firstColumnMinWidth?: number;
        /**
        * Ancho minimo que se asignará a todas las columas en pixeles.
        **/
        minColumWidth?: number;

    }

} 