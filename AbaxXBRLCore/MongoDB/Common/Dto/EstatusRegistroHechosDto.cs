using AbaxXBRLCore.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AbaxXBRLCore.MongoDB.Common.Dto
{
    public class EstatusRegistroHechosDto
    {
        
        /// <summary>
        /// Indica el numero de registros por aplicar
        /// </summary>

        public int numeroRegistrosPorAplicar { get; set; }

        /// <summary>
        /// Indica el numero de registros aplicados
        /// </summary>
        private int numeroRegistrosAplicados;

        /// <summary>
        /// Identificador del documento instancia
        /// </summary>
        public long idDocumentoInstancia { get; set; }

        /// <summary>
        /// Resultado de operacion del registro de mongo
        /// </summary>
        public ResultadoOperacionDto resultadoOperacion { get; set; }

        /// <summary>
        /// version del documento
        /// </summary>
        public long version { get; set; }

        public void AgregarHechoRegistro(){
            numeroRegistrosAplicados = numeroRegistrosAplicados + 1;
        }

        /// <summary>
        /// Obtiene el numero de registros aplicados
        /// </summary>
        /// <returns></returns>
        public int ObtenerNumeroRegistrosAplicados() {
            return numeroRegistrosAplicados;
        }




    }
}
