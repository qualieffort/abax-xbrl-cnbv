using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.CellStore.Modelo;
using System.Collections.Generic;

namespace AbaxXBRLCore.CellStore.Adapter
{
    public class UnidadAdapter
    {
        public EntUnidades EntUnidades { get; }

        public UnidadAdapter(Unidad unidad)
        {
            this.EntUnidades = new EntUnidades
            {
                Medidas = AdaptarMedidas(unidad.Medidas),
                MedidasNumerador = AdaptarMedidas(unidad.MedidasNumerador)
            };
        }

        private List<EntMedida> AdaptarMedidas(IList<Medida> medidas)
        {
            List<EntMedida> entMedidas = new List<EntMedida>();

            foreach (Medida medida in medidas)
            {
                EntMedida entMedida = new MedidaAdapter(medida).EntMedida;

                entMedidas.Add(entMedida);
            }

            return entMedidas;
        }
    }
}
