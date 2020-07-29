﻿using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Repository
{
    /// <summary>
    /// Interfaz del objeto repository para la consulta de la tabla de relación de empresas
    /// </summary>
    public interface IRelacionEmpresasRepository : IBaseRepository<RelacionEmpresas>
    {

        /// <summary>
        /// Elimina las relaciones existentes dado la empresa primaria.
        /// </summary>
        /// <param name="idEmpresaPrimaria">Identificador de la empresa primaria.</param>
        /// <returns></returns>
        ResultadoOperacionDto eliminarRelacionesPorEmpresaPrimaria(long idEmpresaPrimaria);

        /// <summary>
        /// Agrega relaciones a ReleacionEmpresa.
        /// </summary>
        /// <param name="idEmpresaPrimaria">Identificador de la empresa primaria.</param>
        /// <param name="idsFiduciarios">Lista de identificadores de empresas secundarias.</param>
        /// <returns></returns>
        ResultadoOperacionDto agregarRelaciones(long idEmpresaPrimaria, List<long> idsFiduciarios);
    }
}