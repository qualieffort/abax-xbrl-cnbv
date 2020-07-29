using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.CellStore.Modelo
{
    public class ResumenInformacion4D
    {

        public String IdEnvio { get; set; }
        public String Taxonomia { get; set; }
        public String FechaReporte { get; set; }
        public String ClaveCotizacion { get; set; }
        public String NumeroFideicomiso { get; set; }
        public String Unidad { get; set; }
        public Decimal TotalActivo { get; set; }
        public Decimal TotalPasivo { get; set; }
        public Decimal TotalCapitalContablePasivo { get; set; }
        public Decimal Ingreso { get; set; }        
        public String NombreProveedorServiciosAuditoria { get; set; }
        public String NombreSocioOpinion { get; set; }
        public String TipoOpinionEstadosFinancieros { get; set; }

        public static String universoIdHechos = "'ifrs_mx-cor_20141205_ClaveDeCotizacionBloqueDeTexto'," +
            "'ifrs-full_Assets'," +
            "'ifrs-full_Liabilities'," +
            "'ifrs-full_EquityAndLiabilities'," +
            "'ifrs-full_Revenue'," +
            "'ifrs_mx-cor_20141205_NombreDeProveedorDeServiciosDeAuditoriaExternaBloqueDeTexto'," +
            "'ifrs_mx-cor_20141205_NombreDelSocioQueFirmaLaOpinionBloqueDeTexto'," +
            "'ifrs_mx-cor_20141205_TipoDeOpinionALosEstadosFinancierosBloqueDeTexto'," +
            "'mx_ccd_Ticker'," +
            "'mx_ccd_TrustNumber'," +
            "'mx_ccd_NameServiceProviderExternalAudit'," +
            "'mx_ccd_NameOfTheAsociadoSigningOpinion'," +
            "'mx_ccd_TypeOfOpinionOnTheFinancialStatements'," +
            "'mx_deuda_Ticker'," +
            "'mx_deuda_TrustNumber'," +
            "'mx_deuda_NameServiceProviderExternalAudit'," +
            "'mx_deuda_NameOfTheAsociadoSigningOpinion'," +
            "'mx_deuda_TypeOfOpinionOnTheFinancialStatements'";

    }
}
