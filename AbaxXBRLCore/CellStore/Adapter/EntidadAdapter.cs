using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.Viewer.Application.Dto;

namespace AbaxXBRLCore.CellStore.Adapter
{
    public class EntidadAdapter
    {
        public EntidadDto EntidadDto { get; }

        public EntidadAdapter(Entidad entidad)
        {
            this.EntidadDto = new EntidadDto(entidad.Esquema, entidad.Nombre);
        }
    }
}
