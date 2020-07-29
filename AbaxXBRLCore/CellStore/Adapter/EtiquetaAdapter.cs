using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.Viewer.Application.Dto;

namespace AbaxXBRLCore.CellStore.Adapter
{
    public class EtiquetaAdapter
    {
        public EtiquetaDto EtiquetaDto { get; }

        public EntEtiqueta EntEtiqueta { get; }

        public EtiquetaAdapter(Etiqueta etiqueta, bool entity = false)
        {
            if (entity)
            {
                this.EntEtiqueta = new EntEtiqueta
                {
                    lenguaje = etiqueta.Idioma,
                    roll = etiqueta.Rol,
                    valor = etiqueta.Valor
                };
            }
            else
            {
                this.EtiquetaDto = new EtiquetaDto
                {
                    Idioma = etiqueta.Idioma,
                    Rol = etiqueta.Rol,
                    Valor = etiqueta.Valor
                };
            }
        }
    }
}
