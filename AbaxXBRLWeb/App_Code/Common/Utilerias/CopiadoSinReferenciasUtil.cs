using System;
using System.Collections.Generic;
using AbaxXBRLWeb.Models;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using AbaxXBRLCore.Services;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLCore.Common.Util;

namespace AbaxXBRLWeb.App_Code.Common.Utilerias
{

    /// <summary>
    /// Utilieria de apoyo para el copiado de objetos sin referencias que puedan probocar un ciclado en la serialización a JSON.
    /// </summary>
    public class CopiadoSinReferenciasUtil
    { 
        public IUsuarioService UsuarioService { get; set; } 
        
        public CopiadoSinReferenciasUtil()
        {
            try
            {
                UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioService");  
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }

        /// <summary>
        /// Copia el contenido de una empresa evitando referencias de objetos que puedan probocar ciclos en la serialización JSON.
        /// </summary>
        /// <param name="origen">Elemento a copiar.</param>
        /// <returns>Elemento copiado</returns>
        public EmpresaDto Copia(Empresa origen) 
        {
            if (origen == null)
            {
                return null;
            }
            return new EmpresaDto()
            {
                IdEmpresa = origen.IdEmpresa,
                NombreCorto = origen.NombreCorto,
                RazonSocial = origen.RazonSocial,
                AliasClaveCotizacion = origen.AliasClaveCotizacion,
                RFC = origen.RFC,
                DomicilioFiscal = origen.DomicilioFiscal,
                Borrado = origen.Borrado,
                GrupoEmpresa = origen.GrupoEmpresa,
                Fideicomitente = (origen.Fideicomitente == null ? false : (origen.Fideicomitente == true ? true : false)),
                RepresentanteComun = (origen.RepresentanteComun == null ? false : (origen.RepresentanteComun == true ? true : false))
            };
        }
        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="origen">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public AbaxXBRLCore.Viewer.Application.Dto.Angular.ContextoDto Copia(Contexto origen)
        {
            if (origen == null)
            {
                return null;
            }
            return new AbaxXBRLCore.Viewer.Application.Dto.Angular.ContextoDto()
            {
                IdContexto = origen.IdContexto,
                Nombre = origen.Nombre,
                TipoContexto = origen.TipoContexto,
                IdentificadorEntidad = origen.IdentificadorEntidad,
                PorSiempre = origen.PorSiempre,
                FechaInicio = origen.FechaInicio,
                FechaFin = origen.FechaFin,
                Fecha = origen.Fecha,
                Escenario = origen.Escenario,
                EsquemaEntidad = origen.EsquemaEntidad,
                Segmento = origen.Segmento
            };
        }
        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<AbaxXBRLCore.Viewer.Application.Dto.Angular.ContextoDto> Copia(ICollection<Contexto> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<AbaxXBRLCore.Viewer.Application.Dto.Angular.ContextoDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }


        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public DocumentoInstanciaDto Copia(DocumentoInstancia o)
        {
            if (o == null)
            {
                return null;
            }
            return new DocumentoInstanciaDto()
            {
                IdDocumentoInstancia = o.IdDocumentoInstancia,
                IdEmpresa = o.IdEmpresa!=null?o.IdEmpresa.Value:0,
                IdUsuarioBloqueo = o.IdUsuarioBloqueo,
                Titulo = o.Titulo,
                UltimaVersion = o.UltimaVersion,
                RutaArchivo = o.RutaArchivo,
                EsCorrecto = o.EsCorrecto,
                Bloqueado = o.Bloqueado,
                Empresa = Copia(o.Empresa),
                FechaCreacion = o.FechaCreacion,
                FechaUltMod = o.FechaUltMod,
                IdUsuarioUltMod=o.IdUsuarioUltMod
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<EmpresaDto> Copia(ICollection<Empresa> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<EmpresaDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public UsuarioDto Copia(Usuario o)
        {
            if (o == null)
            {
                return null;
            } 

            return new UsuarioDto()
            {
                IdUsuario = o.IdUsuario,
                Nombre = o.Nombre,
                ApellidoPaterno = o.ApellidoPaterno,
                ApellidoMaterno = o.ApellidoMaterno,
                CorreoElectronico = o.CorreoElectronico,
                Bloqueado = o.Bloqueado,
                Activo = o.Activo,
                Puesto = o.Puesto,
                Borrado = o.Borrado,
                TieneEmpresas = UsuarioService.CountEmpresasPorUsuario(o.IdUsuario) > 0,
                TieneRoles = UsuarioService.CountRolesPorUsuario(o.IdUsuario) > 0,
                NombreCompleto = (o.Nombre + " " + o.ApellidoPaterno + " " + (o.ApellidoMaterno != null ? o.ApellidoMaterno : ""))
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public UsuarioEmpresaDto Copia(UsuarioEmpresa o)
        {
            if (o == null)
            {
                return null;
            }
            return new UsuarioEmpresaDto()
            {
                Empresa = Copia(o.Empresa),
                Usuario = Copia(o.Usuario),
                IdEmpresa = o.IdEmpresa,
                IdUsuario = o.IdUsuario,
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<UsuarioDto> Copia(ICollection<Usuario> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<UsuarioDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<UsuarioEmpresaDto> Copia(ICollection<UsuarioEmpresa> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<UsuarioEmpresaDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }

        

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<DocumentoInstanciaDto> Copia(ICollection<DocumentoInstancia> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<DocumentoInstanciaDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public AlertaDto Copia(Alerta o)
        {
            if (o == null)
            {
                return null;
            }
            return new AlertaDto()
            {
                IdAlerta = o.IdAlerta,
                Contenido = o.Contenido,
                Fecha = o.Fecha,
                IdDocumentoInstancia = o.IdDocumentoInstancia,
                IdUsuario = o.IdUsuario,
                DocumentoCorrecto = o.DocumentoCorrecto,
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<AlertaDto> Copia(ICollection<Alerta> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<AlertaDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ModuloDto Copia(Modulo o)
        {
            if (o == null)
            {
                return null;
            }
            return new ModuloDto()
            {
                IdModulo = o.IdModulo,
                Nombre = o.Nombre,
                Descripcion = o.Descripcion
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<ModuloDto> Copia(ICollection<Modulo> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<ModuloDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public AccionAuditableDto Copia(AccionAuditable o)
        {
            if (o == null)
            {
                return null;
            }
            return new AccionAuditableDto()
            {
              IdAccionAuditable = o.IdAccionAuditable,
              Nombre = o.Nombre,
              Descripcion = o.Descripcion
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<AccionAuditableDto> Copia(ICollection<AccionAuditable> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<AccionAuditableDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public RegistroAuditoriaDto Copia(RegistroAuditoria o)
        {
            if (o == null)
            {
                return null;
            }
            return new RegistroAuditoriaDto()
            {
               IdRegistroAuditoria = o.IdRegistroAuditoria,
               IdAccionAuditable = o.IdAccionAuditable,
               IdEmpresa = o.IdEmpresa,
               IdModulo = o.IdModulo,
               IdUsuario = o.IdUsuario,
               Fecha = o.Fecha,
               Registro = o.Registro,
               Usuario = Copia(o.Usuario),
               Empresa = Copia(o.Empresa),
               AccionAuditable = Copia(o.AccionAuditable),
               Modulo = Copia(o.Modulo)
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<RegistroAuditoriaDto> Copia(ICollection<RegistroAuditoria> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<RegistroAuditoriaDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public List<List<string>> GeneraFilaDataTableBitacora(ICollection<RegistroAuditoria> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new List<List<string>>();
            foreach (var i in o)
            {
                var fila = new List<string>();
                fila.Add(i.Fecha != null ?  i.Fecha.ToString("dd/MM/yyyy H:mm:ss") : String.Empty);
                fila.Add(i.Empresa != null ? i.Empresa.NombreCorto : String.Empty);
                fila.Add(i.Modulo != null ?  i.Modulo.Nombre : String.Empty);
                fila.Add(i.AccionAuditable != null ? i.AccionAuditable.Nombre : String.Empty);
                fila.Add(i.Usuario != null ? (i.Usuario.Nombre + ' ' + i.Usuario.ApellidoPaterno + ' ' + i.Usuario.ApellidoMaterno) : String.Empty);
                fila.Add(i.Registro != null ? i.Registro : String.Empty);
                lista.Add(fila);
            }

            return lista;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public RegistroAuditoriaDto CopiaPrimeraCapa(RegistroAuditoria o)
        {
            if (o == null)
            {
                return null;
            }
            return new RegistroAuditoriaDto()
            {
                IdRegistroAuditoria = o.IdRegistroAuditoria,
                IdAccionAuditable = o.IdAccionAuditable,
                IdEmpresa = o.IdEmpresa,
                IdModulo = o.IdModulo,
                IdUsuario = o.IdUsuario,
                Fecha = o.Fecha,
                Registro = o.Registro
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<RegistroAuditoriaDto> CopiaPrimeraCapa(ICollection<RegistroAuditoria> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<RegistroAuditoriaDto>();
            foreach (var i in o)
            {
                lista.Add(CopiaPrimeraCapa(i));
            }

            return lista;
        }




        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public RolDto Copia(Rol o)
        {
            if (o == null)
            {
                return null;
            }
            return new RolDto()
            {
                IdRol= o.IdRol,
                Nombre= o.Nombre,
                Descripcion= o.Descripcion,
                IdEmpresa= o.IdEmpresa,
                Borrado= o.Borrado
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<RolDto> Copia(ICollection<Rol> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<RolDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }


        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public CategoriaFacultadDto Copia(CategoriaFacultad o)
        {
            if (o == null)
            {
                return null;
            }
            return new CategoriaFacultadDto()
            {
                IdCategoriaFacultad = o.IdCategoriaFacultad,
                Nombre = o.Nombre,
                Descripcion = o.Descripcion,
                Borrado = o.Borrado
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<CategoriaFacultadDto> Copia(ICollection<CategoriaFacultad> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<CategoriaFacultadDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public FacultadDto Copia(Facultad o)
        {
            if (o == null)
            {
                return null;
            }
            return new FacultadDto()
            {
                IdFacultad = o.IdFacultad,
                IdCategoriaFacultad = o.IdCategoriaFacultad,
                Nombre = o.Nombre,
                Descripcion = o.Descripcion,
                Borrado = o.Borrado
            };
        }

        
        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<FacultadDto> Copia(ICollection<Facultad> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<FacultadDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }
        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public GrupoUsuariosDto Copia(GrupoUsuarios o)
        {
            if (o == null)
            {
                return null;
            }
            return new GrupoUsuariosDto()
            {
                IdGrupoUsuarios = o.IdGrupoUsuarios,
                IdEmpresa = o.IdEmpresa,
                Nombre = o.Nombre,
                Descripcion = o.Descripcion,
                Borrado = o.Borrado
            };
        }


        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<GrupoUsuariosDto> Copia(ICollection<GrupoUsuarios> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<GrupoUsuariosDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ErrorCargaTaxonomiaDto Copia(AbaxXBRL.Taxonomia.Impl.ErrorCargaTaxonomia o)
        {
            if (o == null)
            {
                return null;
            }
            return new ErrorCargaTaxonomiaDto()
            {
                 CodigoError = o.CodigoError,
                 Mensaje = o.Mensaje,
                 Severidad = o.Severidad == System.Xml.Schema.XmlSeverityType.Error ? ErrorCargaTaxonomiaDto.SEVERIDAD_ERROR : ErrorCargaTaxonomiaDto.SEVERIDAD_ADVERTENCIA,
                 Columna = o.Columna,
                 Linea = o.Linea,
                 UriArchivo = o.UriArchivo
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public IList<ErrorCargaTaxonomiaDto> Copia(IList<AbaxXBRL.Taxonomia.Impl.ErrorCargaTaxonomia> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new List<ErrorCargaTaxonomiaDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ConsultaAnalisisDto Copia(ConsultaAnalisis o)
        {
            if (o == null)
            {
                return null;
            }
            var consultaAnalisisDto= new ConsultaAnalisisDto()
            {
                IdConsultaAnalisis = o.IdConsultaAnalisis,
                Nombre = o.Nombre,
                
            };

            consultaAnalisisDto.ConsultaAnalisisConcepto=Copia(o.ConsultaAnalisisConcepto);
            consultaAnalisisDto.ConsultaAnalisisEntidad=Copia(o.ConsultaAnalisisEntidad);
            consultaAnalisisDto.ConsultaAnalisisPeriodo = Copia(o.ConsultaAnalisisPeriodo);

            return consultaAnalisisDto;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public List<ConsultaAnalisisConceptoDto> Copia(ICollection<ConsultaAnalisisConcepto> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new List<ConsultaAnalisisConceptoDto>();
            foreach (var i in o)
            {
                lista.Add(new ConsultaAnalisisConceptoDto() { IdConcepto=i.idConcepto,IdConsultaAnalisis=i.IdConsultaAnalisis,IdConsultaAnalisisConcepto=i.IdConsultaAnalisisConcepto,DescripcionConcepto=i.descripcionConcepto});
            }

            return lista;
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public List<ConsultaAnalisisEntidadDto> Copia(ICollection<ConsultaAnalisisEntidad> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new List<ConsultaAnalisisEntidadDto>();
            foreach (var i in o)
            {
                lista.Add(new ConsultaAnalisisEntidadDto() { IdEmpresa = i.idEmpresa.Value, IdConsultaAnalisis = i.IdConsultaAnalisis,NombreEntidad=i.NombreEntidad});
            }

            return lista;
        }

        

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public List<ConsultaAnalisisPeriodoDto> Copia(ICollection<ConsultaAnalisisPeriodo> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new List<ConsultaAnalisisPeriodoDto>();
            foreach (var i in o)
            {
                lista.Add(new ConsultaAnalisisPeriodoDto() { FechaInicio = i.FechaInicio, IdConsultaAnalisis = i.IdConsultaAnalisis, FechaFinal = i.FechaFinal,TipoPeriodo=i.TipoPeriodo,Fecha=i.Fecha ,Periodo=i.Periodo});
            }

            return lista;
        }

      


        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<ConsultaAnalisisDto> Copia(ICollection<ConsultaAnalisis> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<ConsultaAnalisisDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }

        

        /// <summary>
        /// Copia el contenido de un tipo de empresa evitando referencias de objetos que puedan probocar ciclos en la serialización JSON.
        /// </summary>
        /// <param name="origen">Elemento a copiar.</param>
        /// <returns>Elemento copiado</returns>
        public TipoEmpresaDto Copia(TipoEmpresa origen)
        {
            if (origen == null)
            {
                return null;
            }

            return new TipoEmpresaDto()
            {
                IdTipoEmpresa = origen.IdTipoEmpresa,
                Nombre = origen.Nombre,
                Descripcion = origen.Descripcion,
                Borrado = origen.Borrado
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<TipoEmpresaDto> Copia(ICollection<TipoEmpresa> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<TipoEmpresaDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }


        /// <summary>
        /// Copia el contenido de un tipo de empresa evitando referencias de objetos que puedan probocar ciclos en la serialización JSON.
        /// </summary>
        /// <param name="origen">Elemento a copiar.</param>
        /// <returns>Elemento copiado</returns>
        public GrupoEmpresaDto Copia(GrupoEmpresa origen)
        {
            if (origen == null)
            {
                return null;
            }

            return new GrupoEmpresaDto()
            {
                IdGrupoEmpresa = origen.IdGrupoEmpresa,
                Nombre = origen.Nombre,
                Descripcion = origen.Descripcion
            };
        }

        /// <summary>
        /// Copia el elemento evitando las referencias a objetos que proboquen redundancia ciclica cuando se serializan a JSON.
        /// </summary>
        /// <param name="o">Elemento a copiar.</param>
        /// <returns>Copia del elemento.</returns>
        public ICollection<GrupoEmpresaDto> Copia(ICollection<GrupoEmpresa> o)
        {
            if (o == null)
            {
                return null;
            }
            var lista = new HashSet<GrupoEmpresaDto>();
            foreach (var i in o)
            {
                lista.Add(Copia(i));
            }

            return lista;
        }
    }
}