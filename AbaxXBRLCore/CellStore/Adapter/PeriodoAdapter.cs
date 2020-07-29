using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.CellStore.Modelo;

namespace AbaxXBRLCore.CellStore.Adapter
{
    public class PeriodoAdapter
    {
        public EntPeriodo EntPeriodo { get; }

        public PeriodoAdapter(Periodo periodo)
        {
            this.EntPeriodo = new EntPeriodo
            {
                Tipo = (short) periodo.TipoPeriodo,
                FechaInicio = periodo.FechaInicio,
                FechaFin = periodo.FechaFin,
                FechaInstante = periodo.FechaInstante
            };
        }
    }
}
