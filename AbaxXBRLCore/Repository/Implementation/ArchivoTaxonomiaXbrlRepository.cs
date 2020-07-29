using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del objeto "Repository" para el acceso a los datos de las taxonomías
    /// registradas en base de datos.
    /// </summary>
    /// <author>Alan Alberto Caballero Ibarra</author>
    public class ArchivoTaxonomiaXbrlRepository : BaseRepository<ArchivoTaxonomiaXbrl>, IArchivoTaxonomiaXbrlRepository
    {
        public ArchivoTaxonomiaXbrl Obtener(long idTaxonomiaXbrl)
        {
            var entidades = GetAll().Where(e => e.IdTaxonomiaXbrl == idTaxonomiaXbrl);
            return entidades.FirstOrDefault();
        }

        public ResultadoOperacionDto Guardar(ArchivoTaxonomiaXbrl archivoTaxonomiaXbrl)
        {
            var dto = new ResultadoOperacionDto();
            try
            {
                if (archivoTaxonomiaXbrl.IdArchivoTaxonomiaXbrl == 0)
                {
                    archivoTaxonomiaXbrl.TipoReferencia = 1;
                    Add(archivoTaxonomiaXbrl);
                }
                else
                {
                    Update(archivoTaxonomiaXbrl);
                }
                dto.Resultado = true;
                dto.InformacionExtra = archivoTaxonomiaXbrl.IdArchivoTaxonomiaXbrl;
            }
            catch (Exception exception)
            {
                dto.Resultado = false;
                dto.Mensaje = exception.Message;
            }
            return dto;
        }

        public void Borrar(long idTaxonomiaXbrl)
        {
            var entidad = GetAll().Where(e => e.IdTaxonomiaXbrl == idTaxonomiaXbrl).FirstOrDefault();
            if(entidad != null)
                Delete(entidad);
        }
    }
}
