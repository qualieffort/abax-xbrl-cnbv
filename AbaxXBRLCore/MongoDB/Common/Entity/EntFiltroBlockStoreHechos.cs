using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
// ReSharper disable InconsistentNaming

namespace AbaxXBRLBlockStore.Common.Entity
{

    public class EntFiltroBlockStoreHechos
    {
        public string EspacioNombresPrincipal { get; set; }
        public string IdEntidad { get; set; }
        public string ConceptoId { get; set; }
        public string PeriodoFechaInicial { get; set; }
        public string PeriodoFechaFinal { get; set; }

        public string PeriodoFechaInstante { get; set; }
        public string MedidaTipoMedidaNombre { get; set; }
        public string MedidaTipoMedidaNumeradorNombre { get; set; }
        public string DimensionEspaciodeNombre { get; set; }
        public string DimensionNombre { get; set; }
        public string DimensionNombreElementoMiembro { get; set; }
        public string DimensionElementoMiembroTipificado { get; set; }

    }

   
}
