using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.CellStore.Modelo;

namespace AbaxXBRLCore.CellStore.Adapter
{
    public class MedidaAdapter
    {
        public EntMedida EntMedida { get; }

        public MedidaAdapter(Medida medida)
        {
            this.EntMedida = new EntMedida
            {
                EspacioNombres = medida.EspacioNombres,
                Nombre = medida.Nombre
            };
        }
    }
}
