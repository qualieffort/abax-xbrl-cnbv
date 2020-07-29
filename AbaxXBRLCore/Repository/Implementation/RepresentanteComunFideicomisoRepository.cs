﻿using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    /// Implementación del objeto repository para el acceso a la tabla RepresentanteComunFideicomiso.    
    /// </summary>
    public class RepresentanteComunFideicomisoRepository : BaseRepository<RepresentanteComunFideciomiso>, IRepresentanteComunFideicomisoRepository
    {
       
        public ResultadoOperacionDto eliminarRelacionesPorEmpresaPrimaria(long idEmpresaPrimaria)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto(); 

            string stringQuery = "delete from RepresentanteComunFideciomiso where IdEmpresaPrimaria = @idEmpresaPrimaria";

            var parameters = new SqlParameter[]
           {
                new SqlParameter("idEmpresaPrimaria", idEmpresaPrimaria)                
           };

            var query = DbContext.Database.ExecuteSqlCommand(stringQuery, parameters );
            resultadoOperacionDto.Resultado = true;

            return resultadoOperacionDto;
        }

        public ResultadoOperacionDto agregarRelaciones(long idEmpresaPrimaria, List<long> idsFiduciarios)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();
            var stringQuery = "insert into RepresentanteComunFideciomiso(IdTipoRelacionEmpresa, IdEmpresaPrimaria, IdEmpresaSecundaria) VALUES ";
            var stringQueryValues = "";

            if (idsFiduciarios.Any())
            {
                foreach(long id in idsFiduciarios)
                {
                    stringQueryValues = stringQueryValues + "(2," + idEmpresaPrimaria + ", " + id.ToString() + "),";
                }

                stringQueryValues = stringQueryValues.TrimEnd(',');                
            }

            if(stringQueryValues.Count() > 0)
            {
                var consulta = stringQuery + stringQueryValues;
                var query = DbContext.Database.ExecuteSqlCommand(consulta);
                resultadoOperacionDto.Resultado = true;
            }

            return resultadoOperacionDto;
        }
    }
}