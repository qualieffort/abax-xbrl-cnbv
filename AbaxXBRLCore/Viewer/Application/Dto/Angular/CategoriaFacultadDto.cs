﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto.Angular
{
    public class CategoriaFacultadDto
    {
        public long IdCategoriaFacultad { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public bool Borrado { get; set; }
    }
}