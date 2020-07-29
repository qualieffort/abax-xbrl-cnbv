using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Constants
{
    /// <summary>
    /// Enum de las categorias de las facultades
    /// </summary>
    public enum CategoriasFacultad
    {
        FacultadesUsuarios = 1,
        FacultadesRoles = 2,
        FacultadesEmpresas = 3,
        FacultadesGrupos = 4,
        FacultadesBitacora =5,
        FacultadesDocumentoInstancia = 6,
        FacultadesMismaEmpresa = 7
    }


    public class CategoriaTypeAttribute : Attribute
    {
        public CategoriaTypeAttribute(CategoriasFacultad caterogoriaFacultad)
        {
            CaterogoriaFacultad = caterogoriaFacultad;
        }
        public CategoriasFacultad CaterogoriaFacultad { get; private set; }
    }
}