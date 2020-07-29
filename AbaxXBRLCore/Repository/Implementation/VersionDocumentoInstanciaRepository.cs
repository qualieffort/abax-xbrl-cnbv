using System.Linq;
using AbaxXBRLCore.Entities;
using System.Collections.Generic;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del objeto de acceso a los datos de base de datos de las versiones
    /// de un documento de instancia
    /// <author>Emigdio Hernandez</author>
    /// </summary>
    public class VersionDocumentoInstanciaRepository : BaseRepository<VersionDocumentoInstancia>, IVersionDocumentoInstanciaRepository
    {
        

        public VersionDocumentoInstancia ObtenerUltimaVersionDocumentoInstancia(long idDocumentoInstancia)
        {
            var query = from vdi in DbContext.VersionDocumentoInstancia
                        where vdi.IdDocumentoInstancia == idDocumentoInstancia &&
                        vdi.Fecha == (DbContext.VersionDocumentoInstancia.Where(v => v.IdDocumentoInstancia == vdi.IdDocumentoInstancia).Max(vdi2 => vdi2.Fecha))
                        select new 
                                   {
                                       IdDocumentoInstancia = vdi.IdDocumentoInstancia,
                                       Version = vdi.Version,
                                       IdUsuario = vdi.IdUsuario,
                                       Usuario = vdi.Usuario,
                                       Fecha = vdi.Fecha,
                                       Comentarios = vdi.Comentarios,
                                       EsCorrecto = vdi.EsCorrecto
                                   };
            var versiones = query.ToList();
            if(versiones.Count > 0)
            {
                VersionDocumentoInstancia vdi = new VersionDocumentoInstancia();
                vdi.IdDocumentoInstancia = versiones[0].IdDocumentoInstancia;
                vdi.Version = versiones[0].Version;
                vdi.IdUsuario = versiones[0].IdUsuario;
                vdi.Usuario = versiones[0].Usuario;
                vdi.Fecha = versiones[0].Fecha;
                vdi.Comentarios = versiones[0].Comentarios;
                vdi.EsCorrecto = versiones[0].EsCorrecto;
                return vdi;
            }
            return null;
        }

        public IList<VersionDocumentoInstancia> ObtenerVersionesDocumentoInstancia(long idDocumentoInstancia)
        {
            var query = from vdi in DbContext.VersionDocumentoInstancia
                        orderby vdi.Fecha descending
                        where vdi.IdDocumentoInstancia == idDocumentoInstancia
                        select new
                        {
                            IdDocumentoInstancia = vdi.IdDocumentoInstancia,
                            Version = vdi.Version,
                            IdUsuario = vdi.IdUsuario,
                            Usuario = vdi.Usuario,
                            Fecha = vdi.Fecha,
                            Comentarios = vdi.Comentarios,
                            EsCorrecto = vdi.EsCorrecto
                        };
            var versiones = query.ToList();
            IList<VersionDocumentoInstancia> versionesDocumento = new List<VersionDocumentoInstancia>();
            foreach (var version in versiones)
            {
                VersionDocumentoInstancia vdi = new VersionDocumentoInstancia();
                vdi.IdDocumentoInstancia = version.IdDocumentoInstancia;
                vdi.Version = version.Version;
                vdi.IdUsuario = version.IdUsuario;
                vdi.Usuario = version.Usuario;
                vdi.Fecha = version.Fecha;
                vdi.Comentarios = version.Comentarios;
                vdi.EsCorrecto = version.EsCorrecto;
                versionesDocumento.Add(vdi);
            }
            return versionesDocumento;
        }

        public VersionDocumentoInstancia ObtenerUltimaVersionDocumentoInstancia(long idDocumentoInstancia, long idVersion)
        {
            var versionBD = Get(
                        x => x.IdDocumentoInstancia == idDocumentoInstancia && x.Version == idVersion).First();

            return versionBD;
        }
    }
}
