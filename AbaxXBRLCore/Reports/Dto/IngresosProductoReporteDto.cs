using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Dto
{
    public class IngresosProductoReporteDto
    {
        public Boolean Marca { get; set;}

        public Boolean Producto { get; set;}

        public Boolean Total { get; set;}

        public String PrincipalesMarcas { get; set;}

        public String PrincipalesProductos { get; set;}

        public HechoReporteDTO IngresosNacionales { get; set;}

        public HechoReporteDTO IngresosExportacion { get; set;}

        public HechoReporteDTO IngresosSubsidirias { get; set;}

        public HechoReporteDTO IngresosTotales { get; set;}
    }
}
