using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.Services;
using AbaxXBRLWeb.App_Code.Common.Service;
using AbaxXBRLWeb.App_Code.Common.Utilerias;
using AbaxXBRLWeb.Controllers;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using Newtonsoft.Json;
using AbaxXBRLCore.Common.Util;

namespace AbaxXbrlNgWeb.Controllers
{
    [RoutePrefix("Bitacora")]
    public class BitacoraController: BaseController
    {
        public IAuditoriaService AuditoriaService { get; set; }
        public IUsuarioService UsuarioService { get; set; }
        public IEmpresaService EmpresaService { get; set; }
        /// <summary>
        /// Utilería auxiliar para el copiado de entidades a dtos.
        /// </summary>
        private CopiadoSinReferenciasUtil CopiadoUtil = new CopiadoSinReferenciasUtil();

        public BitacoraController()
        {
            try
            {
                AuditoriaService = (IAuditoriaService)ServiceLocator.ObtenerFabricaSpring().GetObject("AuditoriaService");
                UsuarioService = (IUsuarioService)ServiceLocator.ObtenerFabricaSpring().GetObject("UsuarioService");
                EmpresaService = (IEmpresaService)ServiceLocator.ObtenerFabricaSpring().GetObject("EmpresaService");
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                throw;
            }
        }

        /// <summary>
        /// Servicio para la consulta de las emisoras.
        /// </summary>
        /// <returns>Lista de emisoras</returns>
        [HttpPost]
        [Authorize]
        [Route("GetEmisoras")]
        public IHttpActionResult GetEmisoras()
        {
            var usuario = UsuarioService.ObtenerUsuarioPorId(IdUsuarioExec).InformacionExtra as Usuario;

            IList<long> empresas = usuario.UsuarioEmpresa.Select(x => x.IdEmpresa).ToList();
            var emisoras = (EmpresaService.ObtenerEmpresas().InformacionExtra as List<EmpresaDto>);
            var dtos = emisoras.Where(x => empresas.Contains(x.IdEmpresa)).ToList();
            
            return Ok(dtos);
        }

        /// <summary>
        /// Servicio para la consulta de los modulos.
        /// </summary>
        /// <returns>Lista de modulos</returns>
        [HttpPost]
        [Authorize]
        [Route("GetModulos")]
        public IHttpActionResult GetModulos()
        {
            var modulos =  AuditoriaService.ObtenerModulos().InformacionExtra as List<Modulo>;
            var dtos = CopiadoUtil.Copia(modulos);
            return Ok(dtos);
        }

        /// <summary>
        /// Servicio para la consulta de las acciones.
        /// </summary>
        /// <returns>Lista de acciones</returns>
        [HttpPost]
        [Authorize]
        [Route("GetAcciones")]
        public IHttpActionResult GetAcciones()
        {
            var acciones = AuditoriaService.ObtenerAccionesAuditable().InformacionExtra as List<AccionAuditable>;
            var dtos = CopiadoUtil.Copia(acciones);
            return Ok(dtos);
        }

        /// <summary>
        /// Servicio para la consulta de los usuarios.
        /// </summary>
        /// <returns>Lista de usuarios</returns>
        [HttpPost]
        [Authorize]
        [Route("GetUsuarios")]
        public IHttpActionResult GetUsuarios()
        {
            var usuarios = UsuarioService.ObtenerUsuarios().InformacionExtra as List<Usuario>;
            var dtos = CopiadoUtil.Copia(usuarios);
            return Ok(dtos);
        }
        /// <summary>
        /// Obtiene la consulta de documento de instancia en base a los parametros enviados.
        /// </summary>
        /// <returns></returns>
        private IQueryable<RegistroAuditoria> ObtenConsultaBitacora() {
            long? idModulo = null;
            long? idUsuario = null;
            long? idEmpresa = null;
            long? idAccion = null;
            DateTime? fecha = null;
            String registro = null;
            String param;
            
            param = getFormKeyValue("idModulo");
            if (!String.IsNullOrEmpty(param))
            {
                idModulo = Int64.Parse(param);
            }
            param = getFormKeyValue("idUsuario");
            if (!String.IsNullOrEmpty(param))
            {
                idUsuario = Int64.Parse(param);
            }
            param = getFormKeyValue("idEmpresa");
            if (!String.IsNullOrEmpty(param))
            {
                idEmpresa = Int64.Parse(param);
            }
            param = getFormKeyValue("idAccion");
            if (!String.IsNullOrEmpty(param))
            {
                idAccion = Int64.Parse(param);
            }
            param = getFormKeyValue("fecha");
            if (!String.IsNullOrEmpty(param))
            {
                fecha = DateTime.ParseExact(param, "dd/MM/yyyy", System.Globalization.CultureInfo.InvariantCulture);
            }
            param = getFormKeyValue("registro");
            if (!String.IsNullOrEmpty(param))
            {
                registro = param;
            }

            var grupoEmpresa = SesionActual.GrupoEmpresa;


            var query = ((IQueryable<RegistroAuditoria>)AuditoriaService.ObtenerRegistrosAuditoriaPorModuloUsuarioAccion(idModulo, idUsuario, idAccion, idEmpresa, fecha, registro, IdUsuarioExec, grupoEmpresa).InformacionExtra);

            return query;
        
        }


        /// <summary>
        /// Retorna la cantidad de registros existentes para los elementos dados.
        /// </summary>
        /// <returns>Stream con el archivo de excel.</returns>
        [HttpPost]
        [Authorize]
        [Route("ObtenNumeroRegistros")]
        public IHttpActionResult ObtenNumeroRegistros()
        {
            var query = ObtenConsultaBitacora();

            var resultado = new ResultadoOperacionDto()
            {
                InformacionExtra = query.Count(),
                Mensaje = "OK",
                Resultado = true
            };
            return Ok(resultado);
        }



        /// <summary>
        /// Exporta los datos de la consulta a un archivo de excel.
        /// </summary>
        /// <returns>Stream con el archivo de excel.</returns>
        [HttpPost]
        [Authorize]
        [Route("Exportar")]
        public IHttpActionResult Exportar()
        {
            var query = ObtenConsultaBitacora();

            query = query.OrderByDescending(r => r.Fecha);
            var entidades = query.ToList();
            Dictionary<String, String> columns = new Dictionary<string, string>() { { "Fecha", "Fecha" }, { "Empresa.NombreCorto", "Emisora" }, { "Modulo.Nombre", "Modulo" }, { "AccionAuditable.Nombre", "Acción" }, { "Usuario.Nombre", "Nombre" }, { "Usuario.ApellidoPaterno", "Apellido Paterno" }, { "Usuario.ApellidoMaterno", "Apellido Materno" }, { "Registro", "Registro" } };
            return this.ExportDataToExcel("Listado", entidades, "bitacora.xls", columns);
        }

        private PeticionDataTableDto ObtenPeticionDataTable() {
            String param;
            List<DataTableOrderColumn> orders = new List<DataTableOrderColumn>();
            for (var index = 0; index < 6; index++)
            {
                var columnKey = "order[" + index + "][column]";
                param = getFormKeyValue(columnKey);
                if (param != null)
                {
                    var dirKey = "order[" + index + "][dir]";
                    var orderItem = new DataTableOrderColumn()
                    {
                        column = Int32.Parse(param),
                        dir = getFormKeyValue(dirKey)
                    };
                    orders.Add(orderItem);
                }
            }

            var dataTableRequest = new PeticionDataTableDto()
            {
                draw = Int32.Parse(getFormKeyValue("draw")),
                length = Int32.Parse(getFormKeyValue("length")),
                start = Int32.Parse(getFormKeyValue("start")),
                search = getFormKeyValue("search"),
                order = orders
            };
            return dataTableRequest;
        }


        private IQueryable<RegistroAuditoria> AplicaOrdenamientosDataTable(IQueryable<RegistroAuditoria> query, PeticionDataTableDto dataTableRequest)
        {
            query = query.OrderByDescending(r => r.Fecha);

            foreach (var order in dataTableRequest.order)
            {
                if (order.column == 0)
                {
                    if (order.dir == "desc")
                    {
                        query = query.OrderByDescending(r => r.Fecha);
                    }
                    else
                    {
                        query = query.OrderBy(r => r.Fecha);
                    }
                }
                if (order.column == 1)
                {
                    if (order.dir == "desc")
                    {
                        query = query.OrderByDescending(r => r.Empresa.NombreCorto);
                    }
                    else
                    {
                        query = query.OrderBy(r => r.Empresa.NombreCorto);
                    }
                }
                if (order.column == 2)
                {
                    if (order.dir == "desc")
                    {
                        query = query.OrderByDescending(r => r.Modulo.Nombre);
                    }
                    else
                    {
                        query = query.OrderBy(r => r.Modulo.Nombre);
                    }
                }
                if (order.column == 3)
                {
                    if (order.dir == "desc")
                    {
                        query = query.OrderByDescending(r => r.AccionAuditable.Nombre);
                    }
                    else
                    {
                        query = query.OrderBy(r => r.AccionAuditable.Nombre);
                    }
                }
                if (order.column == 4)
                {
                    if (order.dir == "desc")
                    {
                        query = query.OrderByDescending(r => r.Usuario.Nombre)
                            .ThenByDescending(r => r.Usuario.ApellidoPaterno)
                            .ThenByDescending(r => r.Usuario.ApellidoMaterno);
                    }
                    else
                    {
                        query = query.OrderBy(r => r.Usuario.Nombre)
                            .ThenBy(r => r.Usuario.ApellidoPaterno)
                            .ThenBy(r => r.Usuario.ApellidoMaterno);
                    }
                }
                if (order.column == 5)
                {
                    if (order.dir == "desc")
                    {
                        query = query.OrderByDescending(r => r.Registro);
                    }
                    else
                    {
                        query = query.OrderBy(r => r.Registro);
                    }
                }
            }
            return query;
        }

        [HttpPost]
        [Authorize]
        [Route("GetBitacora")]
        public IHttpActionResult GetBitacora()
        {

            var dataTableRequest = ObtenPeticionDataTable();
            var query = ObtenConsultaBitacora();
            query = AplicaOrdenamientosDataTable(query, dataTableRequest);
            var totalRegistros = query.Count();
            var entidades = query.Skip(dataTableRequest.start).Take(dataTableRequest.length).ToList();
            var dtos = CopiadoUtil.GeneraFilaDataTableBitacora(entidades);
            var response = new RespuestaDataTableDto() { 
                draw = dataTableRequest.draw,
                recordsTotal = totalRegistros,
                recordsFiltered = totalRegistros,
                data = dtos,
            };

            return Ok(response);
        }


        [HttpPost]
        [Authorize]
        [Route("EliminarRegistros")]
        public IHttpActionResult EliminarRegistros()
        {
            ResultadoOperacionDto resultado = null;
            DateTime fecha; 
            String param;
            
            param = getFormKeyValue("fecha");
            if (!String.IsNullOrEmpty(param))
            {
                fecha = DateTime.ParseExact(param, "dd/MM/yyyy", System.Globalization.CultureInfo.InvariantCulture);
                resultado = AuditoriaService.EliminarRegistrosAuditoriaAnterioresALaFecha(fecha,IdUsuarioExec,IdEmpresa);
            } 

            return Ok(resultado);
        }
 

    }
}