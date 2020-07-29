using AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un DTO el cual representa una celada de la tabla del documento instancia XBRL.
    /// <author>Luis Angel Morales Gonzalez</author>
    /// <version>1.0</version>
    /// </summary>
    public class EncabezadoTablaDto
    {

        /** Contiene el listado de las diferentes dimensiones que deben conformar la estructura del encabezado de la tabla de un documento instancia */
        public List<InformacionDimensionDto> dimensiones;

        /** Indice por ID */
        public Dictionary<string, InformacionDimensionDto> dimensionesPorId;

        /** Total de columnas mostradas en ese momento */
        public int columnasTotales;

        /** Total de renglones mostrados en el en cabezado */
        public int renglonesEncabezado;

        /** Representación de la tabla */
        public Dictionary<int, Dictionary<int, CeldaTablaDto>> tablaEncabezado;
        /**
         * Constructor por defecto de la clase EncabezadoTabla
         */
        public EncabezadoTablaDto()
        {
            this.dimensiones = new List<InformacionDimensionDto>();
            this.dimensionesPorId = new Dictionary<string, InformacionDimensionDto>();
        }

        /**
        * Obtiene el color que le corresponde a la columna dependiendo si alguna de sus dimensiones tiene un color de fondo asignado
        */
        public string obtenerColorColumna(int columna)
        {
            if (columna < this.columnasTotales)
            {
                for (var iRow = this.renglonesEncabezado - 1; iRow >= 0; iRow--)
                {
                    if (this.tablaEncabezado[iRow].ContainsKey(columna) && this.tablaEncabezado[iRow][columna].miembroDimension != null)
                    {
                        if (this.tablaEncabezado[iRow][columna].miembroDimension.color != "")
                        {
                            return this.tablaEncabezado[iRow][columna].miembroDimension.color;
                        }
                    }
                }
            }
            return "";
        }
        /**
        Obtiene la combinación de dimensiones de la columna indicada como parámetro
        */
        public List<MiembroDimensionDto> obtenerDimensionesColumna(int columna)
        {
            var listaDimensiones = new List<MiembroDimensionDto>();
            //Recorrer la columna de abajo hacia arriba omitiendo dimensiones repetidas
            if (columna < this.columnasTotales)
            {
                for (var iRow = this.renglonesEncabezado - 1; iRow >= 0; iRow--)
                {
                    if (this.tablaEncabezado[iRow].ContainsKey(columna) && this.tablaEncabezado[iRow][columna].miembroDimension != null)
                    {

                        var contieneDimension = false;
                        foreach (var tmpDim in listaDimensiones)
                        {

                            if (tmpDim.idDimension == this.tablaEncabezado[iRow][columna].miembroDimension.idDimension)
                            {
                                contieneDimension = true;
                                break;
                            }
                        }
                        if (!contieneDimension)
                        {
                            listaDimensiones.Add(this.tablaEncabezado[iRow][columna].miembroDimension);
                        }


                    }
                }
            }
            return listaDimensiones;

        }
    }
}
