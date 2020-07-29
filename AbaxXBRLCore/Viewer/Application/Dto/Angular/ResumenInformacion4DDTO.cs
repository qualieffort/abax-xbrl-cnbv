using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    public class ResumenInformacion4DDTO
    {

        public String Taxonomia { get; set; }
        public String FechaReporte { get; set; }
        public String ClaveCotizacion { get; set; }
        public String NumeroFideicomiso { get; set; }
        public String Unidad { get; set; }
        public Decimal TotalActivo { get; set; }
        public String TotalActivoFormateado { get; set; }
        public Decimal TotalPasivo { get; set; }
        public String TotalPasivoFormateado { get; set; }
        public Decimal TotalCapitalContablePasivo { get; set; }
        public String TotalCapitalContablePasivoFormateado { get; set; }
        public Decimal Ingreso { get; set; }
        public String IngresoFormateado { get; set; }
        public String NombreProveedorServiciosAuditoria { get; set; }
        public String NombreSocioOpinion { get; set; }
        public String TipoOpinionEstadosFinancieros { get; set; }

        public ResumenInformacion4DDTO()
        {

        }

        public ResumenInformacion4DDTO(ResumenInformacion4D entity)
        {
            this.Taxonomia = ReporteUtil.obtenerNombreSimpleTaxonomia(entity.Taxonomia);
            this.FechaReporte = entity.FechaReporte;
            this.ClaveCotizacion = entity.ClaveCotizacion;
            this.NumeroFideicomiso = entity.NumeroFideicomiso;
            this.Unidad = entity.Unidad;
            this.TotalActivo = entity.TotalActivo;
            this.TotalActivoFormateado = "$" + ReporteXBRLUtil.formatoDecimal(entity.TotalActivo, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
            this.TotalPasivo = entity.TotalPasivo;
            this.TotalPasivoFormateado = "$" + ReporteXBRLUtil.formatoDecimal(entity.TotalPasivo, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
            this.TotalCapitalContablePasivo = entity.TotalCapitalContablePasivo;
            this.TotalCapitalContablePasivoFormateado = "$" + ReporteXBRLUtil.formatoDecimal(entity.TotalCapitalContablePasivo, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
            this.Ingreso = entity.Ingreso;
            this.IngresoFormateado = "$" + ReporteXBRLUtil.formatoDecimal(entity.Ingreso, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
            this.NombreProveedorServiciosAuditoria = entity.NombreProveedorServiciosAuditoria;
            this.NombreSocioOpinion = entity.NombreSocioOpinion;
            this.TipoOpinionEstadosFinancieros = entity.TipoOpinionEstadosFinancieros;
        }

        public static Dictionary<string, string> diccionarioColumnas = new Dictionary<string, string>()
        {
            {"Taxonomia", "String"},
            {"FechaReporte", "DateTime"},
            {"ClaveCotizacion", "String"},
            {"NumeroFideicomiso", "String"},
            {"Unidad", "String"},
            {"TotalActivo",""},
            {"TotalPasivo",""},
            {"TotalCapitalContablePasivo",""},
            {"Ingreso",""},
            {"NombreProveedorServiciosAuditoria","String"},
            {"NombreSocioOpinion","String"},
            {"TipoOpinionEstadosFinancieros","String"}
        };

        public static Dictionary<string, string> diccionarioColumnasExcel = new Dictionary<string, string>()
        {
            {"Taxonomia", "Taxonomia"},
            {"FechaReporte", "Fecha"},
            {"ClaveCotizacion", "Clave de cotización"},
            {"NumeroFideicomiso", "Número de fideicomiso"},
            {"Unidad", "Unidad"},
            {"TotalActivoFormateado", "Total de activos"},
            {"TotalPasivoFormateado", "Total de pasivos"},
            {"TotalCapitalContablePasivoFormateado", "Total de capital contable y pasivos"},
            {"IngresoFormateado", "Ingresos"},
            {"NombreProveedorServiciosAuditoria", "Nombre de proveedor de servicios de Auditoria externa"},
            {"NombreSocioOpinion", "Nombre del socio que firma la opinión"},
            {"TipoOpinionEstadosFinancieros", "Tipo de opinión a los estados financieros"}
        };

        public static ResumenInformacion4DDTO Resumen4DEntityToResumen4DDTO(ResumenInformacion4D entity)
        {
            return new ResumenInformacion4DDTO(entity);
        }

    }
}
