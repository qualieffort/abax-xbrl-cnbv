using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.CellStore.Util;
using System.Collections.Generic;

namespace AbaxXBRLCore.CellStore.Adapter
{
    public class DimensionAdapter
    {
        public EntDimension EntDimension { get; }

        public DimensionAdapter(MiembrosDimensionales dimension)
        {
            this.EntDimension = new EntDimension
            {
                Explicita = dimension.Explicita,
                IdDimension = dimension.IdDimension,
                IdItemMiembro = dimension.IdItemMiembro,
                QNameDimension = dimension.QNameDimension,
                QNameItemMiembro = dimension.QNameItemMiembro,
                ElementoMiembroTipificado = CellStoreUtil.EliminaEtiquetas(dimension.MiembroTipificado),
                etiquetasDimension = AdaptarEtiquetasEntity(dimension.EtiquetasDimension),
                etiquetasMiembro = AdaptarEtiquetasEntity(dimension.EtiquetasMiembroDimension)
            };
        }

        private List<EntEtiqueta> AdaptarEtiquetasEntity(IList<Etiqueta> etiquetasRol)
        {
            List<EntEtiqueta> etiquetas = new List<EntEtiqueta>();

            foreach (Etiqueta etiqueta in etiquetasRol)
            {
                EntEtiqueta entEtiqueta = new EtiquetaAdapter(etiqueta, true).EntEtiqueta;

                etiquetas.Add(entEtiqueta);
            }

            return etiquetas;
        }
    }
}
