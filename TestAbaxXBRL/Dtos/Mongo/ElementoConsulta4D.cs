using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL.Dtos.Mongo
{
    public class ElementoConsulta4D
    {
        /// <summary>
        /// Taxonomía que se reporte
        /// </summary>
        public String Taxonomia { get; set; }
        /// <summary>
        /// Fecha que se reporta
        /// </summary>
        public DateTime Fecha { get; set; }
        /// <summary>
        /// Entidad que se reporta
        /// </summary>
        public String Entidad { get; set; }
        /// <summary>
        /// Identificador del envío.
        /// </summary>
        public String IdEnvio { get; set; }
        /// <summary>
        /// ifrs_mx-cor_20141205_ClaveDeCotizacionBloqueDeTexto
        /// mx_deuda_Ticker
        /// mx_ccd_Ticker
        /// </summary>
        public String ClaveCotizacion { get; set; }
        /// <summary>
        /// mx_deuda_TrustNumber
        /// mx_ccd_TrustNumber
        /// </summary>
        public String NumeroFideicomiso { get; set; }
        /// <summary>
        /// Moneda en la que se reporta la informacion financiera
        /// </summary>
        public String Unidad { get; set; }
        /// <summary>
        /// ifrs_mx-cor_20141205_NumeroDeTrimestre
        /// mx_deuda_NumberOfQuarter
        /// mx_ccd_NumberOfQuarter
        /// </summary>
        public String NumeroTrimestre { get; set; }
        /// <summary>
        /// ifrs-full_Assets
        /// </summary>
        public String TotalActivos { get; set; }
        /// <summary>
        /// ifrs-full_Liabilities
        /// </summary>
        public String TotalPasivos { get; set; }
        /// <summary>
        /// ifrs-full_EquityAndLiabilities
        /// </summary>
        public String TotalCapitalContablePasivos { get; set; }
        /// <summary>
        /// ifrs-full_Revenue
        /// </summary>
        public String Ingresos { get; set; }
        /// <summary>
        /// ifrs_mx-cor_20141205_NombreDeProveedorDeServiciosDeAuditoriaExternaBloqueDeTexto
        /// mx_deuda_NameServiceProviderExternalAudit
        /// mx_ccd_NameServiceProviderExternalAudit
        /// </summary>
        public String NombreProveedorServiciosAuditoriaExterna { get; set; }
        /// <summary>
        /// ifrs_mx-cor_20141205_NombreDelSocioQueFirmaLaOpinionBloqueDeTexto
        /// mx_deuda_NameOfTheAsociadoSigningOpinion
        /// mx_ccd_NameOfTheAsociadoSigningOpinion
        /// </summary>
        public String NombreSocioFirmaOpinion { get; set; }
        /// <summary>
        /// ifrs_mx-cor_20141205_TipoDeOpinionALosEstadosFinancierosBloqueDeTexto
        /// mx_deuda_TypeOfOpinionOnTheFinancialStatements
        /// mx_ccd_TypeOfOpinionOnTheFinancialStatements
        /// </summary>
        public String TipoOpinionEstadosFinancieros { get; set; }
        /// <summary>
        /// Identificador del uno de los hechos
        /// </summary>
        public String IdHecho { get; set; }

    }
}
