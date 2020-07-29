
// ReSharper disable InconsistentNaming
namespace AbaxXBRLBlockStore.Common.Constants
{

    /// <summary>
    ///     Constantes base para el armado del blockStore y filtros. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class ConstBlockStore : ConstEstandar
    {
        public const string miAperturaFiltro = "{ ";
        public const string miAperturaComilla = "'";
        public const string miCondicionanteIn = "$in";
        public const string miCondicionanteEq = "$eq";
        public const string miSeparadorCondicionalFiltro = "' : {{ ${0} : [ '";
        public const string miSeparadorCondicionalFiltroIn = "' : { $in : [ '";
        public const string miSeparadorFiltro = "' , '";
        public const string miSeparadorComaFiltro = " , '";
        public const string miCierreFiltro = " }";
        public const string miCierreArreglo = "] } , ";
        public const string miCierreFinalArreglo = "] }";
        public const string miTextoEntreLlavesParaArmarJson = "{0} {{ {1} }} ,";
        public const int miUbicacionValorFechaenTipoIsoDate = 8;
        public const string miIdiomaEspañol = "es";
        public const string miCierreLlaveComa = " } ,";
    }

}
