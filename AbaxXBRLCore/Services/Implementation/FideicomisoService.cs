using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Implementación del servicio para la administración de fideicomisos.
    /// </summary>
    public class FideicomisoService : IFideicomisoService
    {
        public IFideicomisoRepository FideicomisoRepository { get; set; }

        public void Insertar(FideicomisoDto fideicomiso)
        {
            FideicomisoRepository.Insertar(fideicomiso);
        }

        public void Actualizar(FideicomisoDto fideicomiso)
        {
            FideicomisoRepository.Actualizar(fideicomiso);
        }

        public void Eliminar(long idFideicomiso)
        {
            FideicomisoRepository.Eliminar(idFideicomiso);
        }

        public IList<FideicomisoDto> ObtenerLista(long idEmpresa)
        {
            return FideicomisoRepository.ObtenerLista(idEmpresa);
        }
    }
}
