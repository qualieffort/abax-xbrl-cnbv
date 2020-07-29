// ReSharper disable InconsistentNaming

namespace AbaxXBRLBlockStore.Common.Constants
{

    public class ConstBlockStoreHechos : ConstBlockStore
    {

        #region Sbbt: Filtros de Consulta sobre la colección de hechos. - 

        public const string FiltroConsultaCompleta = "{{ 'EspacioNombresPrincipal' : '{0}' , 'idEntidad' : '{1}' , 'concepto.id' : '{2}','periodo.FechaInicio' : {3} , 'periodo.FechaFin' : {4} ,'periodo.FechaInstante' : {11} , 'medida.tipoMedida.nombre' : {{ '$all' : [{5}] }} , 'medida.tipoMedidaDenominador.nombre' : {{ '$all' : [{6}] }} , 'dimension.QNameDimension' : {{ '$all' : [{7}] }} , 'dimension.IdDimension' : {{ '$all' : [{8}] }} , 'dimension.IdItemMiembro' : {{ '$all' : [{9}] }} , 'dimension.ElementoMiembroTipificado' : {{ '$all' : [{10}] }}  }}";
        public const string FiltroGenerico = "{{ 'EspacioNombresPrincipal' : '{0}' , 'idEntidad' : '{1}' , 'concepto.id' : '{2}','periodo.FechaInicio' : {3} , 'periodo.FechaFin' : {4} ,'periodo.FechaInstante' : {7} , {5} , {6} }}";
        public const string FiltroConsultaHechos = "{{ 'EspacioNombresPrincipal' : '{0}' , 'idEntidad' : '{1}' , 'concepto.id' : '{2}','periodo.FechaInicio' : {3} , 'periodo.FechaFin' : {4} ,'periodo.FechaInstante' : {8} , 'medida.tipoMedida.nombre' : {{ '$all' : [{5}] }} , 'medida.tipoMedidaDenominador.nombre' : {{ '$all' : [{6}] }} , 'dimension' : {7} }}";

        public const string FiltroConsultaRepetidos = "{{ 'EspacioNombresPrincipal' : '{0}' , 'idEntidad' : '{1}' , 'concepto.Id' : '{2}' valoresExtras }}";


        #region Sbbt: Plantillas de Medida y Dimensión. - 

        public const string PlantillaConsultaMedida = " 'medida.tipoMedida.nombre' : {{ '$all' : [{0}] }} , 'medida.tipoMedidaDenominador.nombre' : {{ '$all' : [{1}] }} ";
        public const string PlantillaConsultaMedidaNull = " 'medida' : null ";
        public const string PlantillaConsultaDimension = " 'dimension.QNameDimension' : {{ '$all' : [{0}] }} , 'dimension.IdDimension' : {{ '$all' : [{1}] }} , 'dimension.IdItemMiembro' : {{ '$all' : [{2}] }} , 'dimension.ElementoMiembroTipificado' : {{ '$all' : [{3}] }} ";
        public const string PlantillaConsultaDimensionNull = " 'dimension' : null ";

        #endregion

        #endregion

        public const string CodigoHashRegistro = "'codigoHashRegistro' : '{0}'";
        public const string Trimestre = ", 'Trimestre' : '{0}'";
        public const string Ejercicio = ", 'Ejercicio' : '{0}'";

        public const string Taxonomia = ", 'EspacioNombresPrincipal' : '{0}'";
        public const string Entidad = " , 'idEntidad' : '{0}' , 'espaciodeNombresEntidad' : '{1}'";
        public const string Roll = ",'rol' : '{0}'";
        public const string Concepto = " , 'concepto' : {{ 'Id' : '{0}' , 'Nombre' : '{1}' , 'EspacioNombresTaxonomia' : '{2}' , 'EspacioNombres' : '{3}'";
        public const string ConceptoEtiqueta = ", 'etiqueta' :  [{0}] ";
        public const string ConceptoEtiquetaDimension = ", 'etiquetasDimension' :  [{0}] ";
        public const string ConceptoEtiquetaMiembroDimension = ", 'etiquetasMiembro' :  [{0}] ";

        public const string EstructuraEtiqueta = "{{ 'lenguaje' : '{0}' , 'valor' : '{1}' , 'rol' : '{2}' }} ";
        public const string Balance = " , 'tipoBalance' : '{0}'";
        public const string ValorDocumentoTipoDato = "}} , 'tipoDato' : '{0}' , 'esTipoDatoNumerico' : {1}";
        public const string ValorDocumentoTipoDatoNumericoValor = " , 'valor' : '{0}'";
        public const string ValorDocumentoTipoDatoNumericoValorRedondeado = " , 'valor' : '{0}', 'valorRedondeado' : '{1}'";
        public const string ValorDocumentoTipoDatoNumericoPrecision = " , 'precision' : '{0}'";
        public const string ValorDocumentoTipoDatoNumericoDecimales = " , 'decimales' : '{0}'";
        public const string EsValorChunks = " , 'esValorChunks' : {0}";
        public const string ValorDocumentoTipoDatoNumericoFraccion = " , 'esTipoDatoFraccion' : {0}";
        public const string ValorDocumentoTipoDatoValorNil = " , 'esValorNil' : {0}";
        public const string PeriodoDuracion = " , 'periodo': {{ 'Tipo' : {0}, 'FechaInicio' : {1}, 'FechaFin' : {2} }}";
        public const string PeriodoInstante = " , 'periodo': {{ 'Tipo' : {0}, 'FechaInstante' : {1} }}";

        public const string Medida = " , 'unidades' : {{ 'EsDivisoria' : {0}";
        public const string TipoMedida = " , 'Medidas' : [";
        public const string TipoMedidaArray = " {{ 'Nombre' : '{0}', 'EspacioNombres' : '{1}' }} ,";
        public const string TipoMedidaNumerador = " , 'MedidasNumerador' : [";
        public const string Dimension = "'dimension' : [";
        public const string DimensionAtributos = " {{ 'Explicita' : {0}, 'QNameDimension' : '{1}', 'IdDimension' : '{2}'";
        public const string DimensionAtributosNombreElementoMiembro = " , 'QNameItemMiembro' : '{0}', 'IdItemMiembro' : '{1}'";
        public const string DimensionMiembroTipificado = " , 'ElementoMiembroTipificado' : '{0}'";

        /// <summary>
        /// Longitud máxima para un valor de texto.
        /// El tamaño máximo soportado para un documento de BSON es de 16 megabytes.
        /// Se asigna un valor de 14 megabytes dejando 2 megabytes para los metadatos del hecho (2 millones de caracteres).
        /// </summary>
        public const int MAX_STRING_VALUE_LENGTH = 14000;

    }

}
