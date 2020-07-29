using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Common.Entity
{
    /// <summary>
    /// Clase hecho en la cual muestra la informacion del hecho
    /// </summary>
    public class EntHecho
    {
        /// <summary>
        /// Identificador de la taxonomia del hecho
        /// </summary>
        public String idTaxonomia;
        /// <summary>
        /// Identificador de la entidad que reporta
        /// </summary>
        public String idEntidad;
        /// <summary>
        /// Espacio de nombres de la entidad
        /// </summary>
        public String espaciodeNombresEntidad;

        public String espacioNombresPrincipal;

        public String codigoHashRegistro;

        /// <summary>
        /// Concepto del hecho definido
        /// </summary>
        public EntConcepto concepto;

        /// <summary>
        /// Tipo de dato del hecho
        /// </summary>
        public String tipoDato;

        /// <summary>
        /// Identifica si el tipo de dato es numerico
        /// </summary>
        public bool esTipoDatoNumerico;

        /// <summary>
        /// Valor del hecho
        /// </summary>
        public String valor;

        /// <summary>
        /// Valor del hecho formateado
        /// </summary>
        public String valorFormateado;

        /// <summary>
        /// Valor redondeado del hecho
        /// </summary>
        public String valorRedondeado;

        /// <summary>
        /// Numero de decimales del hecho numerico
        /// </summary>
        public String decimales;

        /// <summary>
        /// Identifica si es un dato de tipo fraccion
        /// </summary>
        public bool? esTipoDatoFraccion;

        /// <summary>
        /// Identifica si el valor del hecho puede ser nulo
        /// </summary>
        public bool? esValorNil;

        /// <summary>
        /// Periodo del hecho al que es asignado
        /// </summary>
        public EntPeriodo periodo;

        /// <summary>
        /// Medida del hecho
        /// </summary>
        public EntUnidades unidades;

        /// <summary>
        /// Arreglo de dimensiones a la cual esta asignado el hecho
        /// </summary>
        public EntDimension[] dimension;



    }
}
