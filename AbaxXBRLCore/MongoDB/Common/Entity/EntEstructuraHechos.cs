using MongoDB.Bson;
using System;
using System.Collections.Generic;

namespace AbaxXBRLBlockStore.Common.Entity
{

    /// <summary>
    ///     Clase que contiene la estructura del documento instancia a guardar en el BlockStore. 
    ///     <author>Ing. Joel Carmona Noriega.</author>
    ///     <creationDate>20151121</creationDate>         
    ///     <version>1.0.0.0</version>
    ///     <standard>SBBT 07.13</standard>
    /// </summary>
    public class EntEstructuraHechos
    {

        public string espacioNombresPrincipal { get; set; }
        public string idEntidad { get; set; }
        public string espaciodeNombresEntidad { get; set; }
        public string rol { get; set; }
        public EntCastConcepto concepto { get; set; }


        public string tipoBalance { get; set; }
        public string tipoDato { get; set; }
        public string valor { get; set; }
        public string valorRedondeado { get; set; }
        public string precision { get; set; }
        public string decimales { get; set; }


        public bool esTipoDatoNumerico { get; set; }
        public bool esTipoDatoFraccion { get; set; }
        public bool esValorNil { get; set; }
        public string idContexto { get; set; }


        public EntCastPeriodo periodo { get; set; }
        public EntCastMedida medida { get; set; }
        public List<EntCastDimension> dimension { get; set; }
    }



    public class EntCastConcepto
    {
        public string id { get; set; }
        public string nombreConcepto { get; set; }
        public string espaciodeNombres { get; set; }
        public EntCastEtiqueta etiqueta { get; set; }
    }



    public class EntCastEtiqueta
    {
        public string lenguaje { get; set; }
        public string valor { get; set; }
        public string roll { get; set; }
    }



    public class EntCastPeriodo
    {
        public bool esTipoInstante { get; set; }
        public DateTime? fechaInicial { get; set; }
        public DateTime? fecha { get; set; }
    }


    public class EntCastMedida
    {
        public bool esDivisorio { get; set; }
        public List<EntCastUnidad> tipoMedida { get; set; }
        public List<EntCastUnidad> tipoMedidaDenominador { get; set; }
    }


    public class EntCastUnidad
    {
        public string nombre { get; set; }
        public string espaciodeNombres { get; set; }
    }


    public class EntCastDimension
    {
        public bool esExplicito { get; set; }
        public string espaciodeNombreDimension { get; set; }
        public string nombreDimension { get; set; }
        public string espaciodeNombreElementoMiembro { get; set; }
        public string nombreElementoMiembro { get; set; }
        public string elementoMiembroTipificado { get; set; }
    }

}
