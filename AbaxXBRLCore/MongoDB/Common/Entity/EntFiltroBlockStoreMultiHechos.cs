using System.Collections.Generic;

namespace AbaxXBRLBlockStore.Common.Entity
{
    public class EntFiltroBlockStoreMultiHechos
    {
        public string EspacioNombresPrincipal { get; set; }
        public List<string> ListaIdEntidad { get; set; }
        public List<EntFiltroPeriodos> ListaPeriodo { get; set; }
        public List<EntFiltroBlockStoreMedida> ListaMedida { get; set; }
        public List<EntFiltroConceptoDimension> ListaConceptoDimension { get; set; }


        public class EntFiltroConceptoDimension
        {
            public string ConceptoId { get; set; }
            public string DimensionEspaciodeNombre { get; set; }
            public string DimensionNombre { get; set; }
            public string DimensionNombreElementoMiembro { get; set; }
            public string DimensionElementoMiembroTipificado { get; set; }
        }


        public class EntFiltroBlockStoreMedida
        {
            public string MedidaTipoMedidaNombre { get; set; }
            public string MedidaTipoMedidaDenominadorNombre { get; set; }
        }


        public class EntFiltroPeriodos
        {
            public string PeriodoFechaInicial { get; set; }
            public string PeriodoFecha { get; set; }

        }

    }
}
