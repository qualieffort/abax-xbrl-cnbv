using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Entities;
using AbaxXBRLCore.lang;
using AbaxXBRLCore.Repository;
using AbaxXBRLCore.Repository.Implementation;
using Spring.Transaction;
using Spring.Transaction.Interceptor;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System.IO;
using Newtonsoft.Json;
using AbaxXBRLCore.Common.Dtos.Sincronizacion;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    ///     Implementacion del Servicio para operaciones relacionadas con la Empresa.
    ///     <author>Alan Alberto Caballero Ibarra</author>
    ///     <version>1.0</version>
    /// </summary>
    public class EmpresaService : IEmpresaService
    {
        #region Propiedades

        /// <summary>
        /// Repositorio que persiste la infomración de las entidades "Empresa".
        /// </summary>
        public IEmpresaRepository EmpresaRepository { get; set; }
        public ITipoEmpresaRepository TipoEmpresaRepository { get; set; }
        public ITaxonomiaXbrlRepository TaxonomiaXbrlRepository { get; set; }
        public IArchivoTaxonomiaXbrlRepository ArchivoTaxonomiaXbrlRepository { get; set; }
        public IRelacionEmpresasRepository RelacionEmpresasRepository { get; set; }
        public IRepresentanteComunFideicomisoRepository RepresentanteComunFideicomisoRepository { get; set; }
        public ITipoRelacionEmpresaRepository TipoRelacionEmpresaRepository { get; set; }
        
        public IBitacoraProcesarArchivosBMVRepository BitacoraProcesarArchivosBMVRepository { get; set; }

        /// <summary>
        /// Servicio que ejecuta la sincronziacion de los archivos enviados por la BMV
        /// </summary>
        public ISincronizacionArchivosBMVService SincronizacionArchivosBMVService { get; set; }

        



        #endregion

        #region Servicios de Empresa
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarEmpresa(Empresa empresa, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { empresa.NombreCorto };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, empresa.IdEmpresa == 0 ? ConstantsAccionAuditable.Insertar : ConstantsAccionAuditable.Actualizar, ConstantsModulo.Empresa, empresa.IdEmpresa == 0 ? MensajesServicios.InsertarEmpresa : MensajesServicios.ActualizarEmpresa, param);
                resultado = EmpresaRepository.GuardarEmpresa(empresa);
                resultado.InformacionAuditoria = informacionAuditoria;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto ObtenerEmpresaPorId(long idEmpresa)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = EmpresaRepository.ObtenerEmpresaPorId(idEmpresa);

                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarEmpresa(long idEmpresa, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { EmpresaRepository.ObtenerEmpresaPorId(idEmpresa).NombreCorto };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar, ConstantsModulo.Empresa, MensajesServicios.BorrarEmpresa, param);
                EmpresaRepository.BorrarEmpresa(idEmpresa);
                resultado.Resultado = true;
                resultado.InformacionExtra = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
                resultado.InformacionAuditoria = null;
            }
            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarEmpresaLogicamente(long idEmpresa, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { EmpresaRepository.ObtenerEmpresaPorId(idEmpresa).NombreCorto };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar, ConstantsModulo.Empresa, MensajesServicios.BorrarEmpresa, param);
                EmpresaRepository.BorrarLogicamenteEmpresa(idEmpresa);
                resultado.Resultado = true;
                resultado.InformacionExtra = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
                resultado.InformacionAuditoria = null;
            }
            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto ObtenerEmpresas()
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = EmpresaRepository.ObtenerEmpresas();
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        /// <summary>
        /// Obtiene de forma paginada las empresas.
        /// </summary>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        [Transaction(TransactionPropagation.Required)]
        public PeticionInformationDataTableDto<EmpresaDto> ObtenerInformacionEmpresas(PeticionInformationDataTableDto<EmpresaDto> peticionDataTable)
        {
            return EmpresaRepository.ObtenerInformacionEmpresas(peticionDataTable);

        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto ObtenerEmpresasPorFiltro(string search)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = EmpresaRepository.ObtenerEmpresasPorFiltro(search);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        public ResultadoOperacionDto ObtenerIdEmpresaPorTicker(String ticker) {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();

            var listResult = EmpresaRepository.GetQueryable().Where(x => x.NombreCorto.Equals(ticker)).Select(x => x.IdEmpresa ).ToList();

            if ((listResult != null && listResult.Count > 0)) {
                resultadoOperacionDto.Resultado = true;
                resultadoOperacionDto.InformacionExtra = listResult[0];
             }
            else if (listResult.Count == 0)
            {
                resultadoOperacionDto.Mensaje = "No existen empresas cuyo nombre corto sea:" + ticker;
                resultadoOperacionDto.Resultado = false;

            }
            else if (listResult.Count > 1)
            {
                resultadoOperacionDto.Mensaje = "Existe mas de una empresa cuyo nombre corto es:" + ticker;
                resultadoOperacionDto.Resultado = false;
            }
            return resultadoOperacionDto;

        }

        public ResultadoOperacionDto EsFideicomisoDeFiduciario(long idEmpresaPrimaria, long idEmpresaSecundaria)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto()
            {
                Resultado = false
            };

            try
            {
                var listResult = RelacionEmpresasRepository.GetQueryable().
                Where(x => x.IdEmpresaPrimaria == idEmpresaPrimaria && x.IdEmpresaSecundaria == idEmpresaSecundaria && x.IdTipoRelacionEmpresa.Equals(ConstantsTipoRelacionEmpresa.FIDUCIARIO_DE_FIDEICOMITENTE)).ToList();
                var listResultRepComun = RepresentanteComunFideicomisoRepository.GetQueryable().
                Where(x => x.IdEmpresaPrimaria == idEmpresaPrimaria && x.IdEmpresaSecundaria == idEmpresaSecundaria && x.IdTipoRelacionEmpresa.Equals(ConstantsTipoRelacionEmpresa.REPRESENTANTE_COMUN_DE_FIDEICOMITENTE)).ToList();


                if ((listResult != null && listResult.Count > 0) || (listResultRepComun != null && listResultRepComun.Count > 0))
                {
                    resultadoOperacionDto.Resultado = true;
                } else
                {                    
                    resultadoOperacionDto.Mensaje = "El nombre corto del documento que intenta enviar no corresponde a uno de sus fideicomisos";
                }

            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultadoOperacionDto.Resultado = false;
                resultadoOperacionDto.Mensaje = exception.Message;
                resultadoOperacionDto.InformacionExtra = exception;
            }

            return resultadoOperacionDto;
        }

        public ResultadoOperacionDto EsFiduciarioORepresentanteComun(long idEmpresaPrimaria)
        {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto()
            {
                Resultado = false
            };

            try
            {

                var listResult = RelacionEmpresasRepository.GetQueryable().
                Where(x => x.IdEmpresaPrimaria == idEmpresaPrimaria && (x.IdTipoRelacionEmpresa.Equals(ConstantsTipoRelacionEmpresa.FIDUCIARIO_DE_FIDEICOMITENTE) || x.IdTipoRelacionEmpresa.Equals(ConstantsTipoRelacionEmpresa.REPRESENTANTE_COMUN_DE_FIDEICOMITENTE))).ToList();

                if (listResult != null && listResult.Count > 0)
                {
                    resultadoOperacionDto.Resultado = true;
                }

            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultadoOperacionDto.Resultado = false;
                resultadoOperacionDto.Mensaje = exception.Message;
                resultadoOperacionDto.InformacionExtra = exception;
            }

            return resultadoOperacionDto;
        }

        public ResultadoOperacionDto ValidarTickersXbrlSobre(String tickerSesion, String tickerSobre) {
            ResultadoOperacionDto resultadoOperacionDto = new ResultadoOperacionDto();

            if (tickerSesion.Equals(tickerSobre))
            {
                resultadoOperacionDto = ObtenerIdEmpresaPorTicker(tickerSobre);
            }
            else {
                resultadoOperacionDto = ObtenerIdEmpresaPorTicker(tickerSesion);


                if (resultadoOperacionDto.Resultado)
                {
                    long idEmpresaSesion = (long)resultadoOperacionDto.InformacionExtra;

                    resultadoOperacionDto = EsFiduciarioORepresentanteComun(idEmpresaSesion);
                    if (resultadoOperacionDto.Resultado)
                    {
                        resultadoOperacionDto = ObtenerIdEmpresaPorTicker(tickerSobre);

                        if (resultadoOperacionDto.Resultado)
                        {
                            long idEmpresaFideicomiso = (long)resultadoOperacionDto.InformacionExtra;

                            resultadoOperacionDto = EsFideicomisoDeFiduciario(idEmpresaSesion, idEmpresaFideicomiso);
                        }
                    }
                    else {
                        resultadoOperacionDto.Resultado = false;
                        resultadoOperacionDto.Mensaje = "El documento que intenta enviar no corresponde con su clave de cotización";
                    }
                }
            }

            return resultadoOperacionDto;
        }

        public ResultadoOperacionDto ConsultarFideicomitentesDeFiduciario(string search)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var empresas = EmpresaRepository.ObtenerEmpresasPorFiltro(search);
                var listaEmp = (empresas).ToList();
                if (listaEmp.Count == 1)
                {
                    //Agregar al resultado los fideicomisos representados.
                    var resultFides = ConsultarEmpresasSecundariasPorTipoRelacionYEmpresaPrimaria(ConstantsTipoRelacionEmpresa.FIDUCIARIO_DE_FIDEICOMITENTE, listaEmp[0].IdEmpresa);
                    var resultFidesRepComun = ConsultarEmpresasSecundariasRepComunPorTipoRelacionYEmpresaPrimaria(ConstantsTipoRelacionEmpresa.REPRESENTANTE_COMUN_DE_FIDEICOMITENTE, listaEmp[0].IdEmpresa);

                    List<Empresa> resultFidesFinal = new List<Empresa>();
                    resultFidesFinal.AddRange(resultFides.InformacionExtra as IList<Empresa>);

                    foreach (Empresa empresa in resultFidesRepComun.InformacionExtra as IList<Empresa>)
                    {
                        Boolean existeEmpresa = false;

                        foreach (Empresa empresaAux in resultFidesFinal)
                        {
                            if (empresa.Equals(empresaAux))
                            {
                                existeEmpresa = true;
                                break;
                            }
                        }

                        if (!existeEmpresa)
                        {
                            resultFidesFinal.Add(empresa);
                        }

                    }

                    if (resultFides.Resultado)
                    {
                        resultado.Resultado = true;
                        var listaFides = resultFidesFinal;
                        var mapaResultado = new Dictionary<string, Object>();
                        mapaResultado.Add("esFiduciario", listaFides.Count > 0 ? "1" : "0");
                        mapaResultado.Add("listaFideicomitentes", listaFides.Select(x => x.NombreCorto));
                        resultado.InformacionExtra = mapaResultado;
                        resultado.Resultado = true;
                    }
                }
                else if (listaEmp.Count == 0)
                {
                    resultado.Mensaje = "No existen empresas cuyo nombre corto sea:" + search;
                    resultado.Resultado = false;

                }
                else if (listaEmp.Count > 1)
                {
                    resultado.Mensaje = "Existe mas de una empresa cuyo nombre corto es:" + search;
                    resultado.Resultado = false;
                }

                
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto AsignarTiposEmpresa(long idEmpresa, List<long> idsTiposEmpresa, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();

            try
            {
                var query = new StringBuilder();
                query.AppendLine(string.Format("delete from EmpresaTipoEmpresa where IdEmpresa = {0};", idEmpresa));

                idsTiposEmpresa.ForEach(idTipoEmpresa =>
                    query.AppendLine(string.Format("insert into EmpresaTipoEmpresa (IdEmpresa, IdTipoEmpresa) values ({0}, {1});", idEmpresa, idTipoEmpresa))
                );

                EmpresaRepository.DbContext.Database.ExecuteSqlCommand(query.ToString());
                EmpresaRepository.Commit();

                resultado.Resultado = true;
                var param = new List<object>() { EmpresaRepository.ObtenerEmpresaPorId(idEmpresa).NombreCorto };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar, ConstantsModulo.Empresa, MensajesServicios.AsignarTiposEmpresa, param);
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }

            return resultado;
        }
        #endregion

        #region Servicios de Tipos de Empresa

        public ResultadoOperacionDto ObtenerEmpresasPorGrupoEmpresa(long igGrupoEmpresa)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = EmpresaRepository.ObtenerEmpresasPorGrupoEmpresa(igGrupoEmpresa);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto ObtenerEmpresasPorGrupo(string GrupoEmpresa)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                resultado.InformacionExtra = EmpresaRepository.ObtenerEmpresasPorGrupo(GrupoEmpresa);
                resultado.Resultado = true;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        /// <summary>
        /// Obtiene de forma paginada las empresas de un grupo de empresa.
        /// </summary>
        /// <param name="GrupoEmpresa">Grupo de la empresa de consulta</param>
        /// <param name="peticionDataTable">Información del paginado, ordenamiento, etc.</param>
        /// <returns></returns>
        [Transaction(TransactionPropagation.Required)]
        public PeticionInformationDataTableDto<Empresa> ObtenerInformacionEmpresasPorGrupoEmpresa(string grupoEmpresa, PeticionInformationDataTableDto<Empresa> peticionDataTable)
        {
            return EmpresaRepository.ObtenerEmpresasPorGrupoPaginacion(grupoEmpresa, peticionDataTable);
        }

        [Transaction(TransactionPropagation.Required)]
        public List<TipoEmpresa> ObtenerTiposEmpresa()
        {
            return TipoEmpresaRepository.ObtenerTiposEmpresa();
        }

        [Transaction(TransactionPropagation.Required)]
        public List<TipoEmpresa> ObtenerTiposEmpresa(long idEmpresa)
        {
            return TipoEmpresaRepository.ObtenerTiposEmpresa(idEmpresa);
        }

        [Transaction(TransactionPropagation.Required)]
        public IQueryable<TipoEmpresa> ObtenerTiposEmpresa(string search)
        {
            return TipoEmpresaRepository.ObtenerTiposEmpresa(search);
        }

        [Transaction(TransactionPropagation.Required)]
        public TipoEmpresa ObtenerTipoEmpresa(long idEmpresa)
        {
            return TipoEmpresaRepository.ObtenerTipoEmpresa(idEmpresa);
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarTipoEmpresa(TipoEmpresa tipoEmpresa, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { tipoEmpresa.Nombre };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, tipoEmpresa.IdTipoEmpresa == 0 ? ConstantsAccionAuditable.Insertar : ConstantsAccionAuditable.Actualizar, ConstantsModulo.TipoEmpresa, tipoEmpresa.IdTipoEmpresa == 0 ? MensajesServicios.InsertarTipoEmpresa : MensajesServicios.ActualizarTipoEmpresa, param);
                resultado = TipoEmpresaRepository.GuardarTipoEmpresa(tipoEmpresa);
                resultado.InformacionAuditoria = informacionAuditoria;
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarTipoEmpresa(long idEmpresa, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { TipoEmpresaRepository.ObtenerTipoEmpresa(idEmpresa).Nombre };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar, ConstantsModulo.TipoEmpresa, MensajesServicios.BorrarTipoEmpresa, param);
                TipoEmpresaRepository.BorrarTipoEmpresa(idEmpresa);
                resultado.Resultado = true;
                resultado.InformacionExtra = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
                resultado.InformacionAuditoria = null;
            }
            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarTipoEmpresaLogicamente(long idEmpresa, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { TipoEmpresaRepository.ObtenerTipoEmpresa(idEmpresa).Nombre };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar, ConstantsModulo.TipoEmpresa, MensajesServicios.BorrarTipoEmpresa, param);
                TipoEmpresaRepository.BorrarLogicamenteTipoEmpresa(idEmpresa);
                resultado.Resultado = true;
                resultado.InformacionExtra = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
                resultado.InformacionAuditoria = null;
            }
            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto AsignarTaxonomias(long idTipoEmpresa, List<long> idsTaxonomiasXbrl, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();

            try
            {
                var query = new StringBuilder();
                query.AppendLine(string.Format("delete from TipoEmpresaTaxonomiaXbrl where IdTipoEmpresa = {0};", idTipoEmpresa));

                idsTaxonomiasXbrl.ForEach(idTaxonomiaXbrl =>
                    query.AppendLine(string.Format("insert into TipoEmpresaTaxonomiaXbrl (IdTipoEmpresa, IdTaxonomiaXbrl) values ({0}, {1});", idTipoEmpresa, idTaxonomiaXbrl))
                );

                TipoEmpresaRepository.DbContext.Database.ExecuteSqlCommand(query.ToString());
                TipoEmpresaRepository.Commit();

                resultado.Resultado = true;

                var param = new List<object>() { TipoEmpresaRepository.ObtenerTipoEmpresa(idTipoEmpresa).Nombre };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar, ConstantsModulo.TipoEmpresa, MensajesServicios.AsignarTaxonomiasXbrl, param);
            }
            catch (Exception exception)
            {
                LogUtil.Error(exception);
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }

            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto ObtenRegistrosReporte(long idUsuarioExec, long idEmpresaExc)
        {
            var resultado = new ResultadoOperacionDto() { Resultado = true };
            try
            {
                resultado.InformacionExtra = TipoEmpresaRepository.ObtenRegistrosReporte();
                var param = new List<object>();
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Exportar, ConstantsModulo.TipoEmpresa, MensajesServicios.ExportarExcelTiposEmpresa, param, idEmpresaExc);
                resultado.InformacionAuditoria = informacionAuditoria;
            }
            catch (Exception ex)
            {
                LogUtil.Error(ex);
                resultado.Resultado = false;
                resultado.InformacionExtra = null;
                resultado.InformacionAuditoria = null;
            }

            return resultado;
        }
        #endregion

        #region Servicios de Taxonomia Xbrl
        /// <summary>
        /// Obtiene todas las taxonomias xbrl.
        /// </summary>
        /// <returns></returns>
        public List<TaxonomiaXbrlDto> ObtenerTaxonomiasXbrl()
        {
            var entidades = TaxonomiaXbrlRepository.Obtener();

            var taxonomias = entidades.Select(e =>
            {
                var archivo = ArchivoTaxonomiaXbrlRepository.Obtener(e.IdTaxonomiaXbrl);

                return new TaxonomiaXbrlDto
                {
                    IdTaxonomiaXbrl = e.IdTaxonomiaXbrl,
                    Nombre = e.Nombre,
                    Descripcion = e.Descripcion,
                    Anio = e.Anio,
                    Activa = e.Activa,
                    EspacioNombresPrincipal = e.EspacioNombresPrincipal,
                    PuntoEntrada = archivo != null ? archivo.Href : null
                };
            });

            return taxonomias.ToList();
        }

        /// <summary>
        /// Obtiene las taxonomias xbrl asignadas a un tipo de empresa.
        /// </summary>
        /// <returns></returns>
        public List<TaxonomiaXbrlDto> ObtenerTaxonomiasXbrl(long idTipoEmpresa)
        {
            var entidades = TaxonomiaXbrlRepository.ObtenerAsignadas(idTipoEmpresa);

            var taxonomias = entidades.Select(e =>
            {
                var archivo = ArchivoTaxonomiaXbrlRepository.Obtener(e.IdTaxonomiaXbrl);

                return new TaxonomiaXbrlDto
                {
                    IdTaxonomiaXbrl = e.IdTaxonomiaXbrl,
                    Nombre = e.Nombre,
                    Descripcion = e.Descripcion,
                    Anio = e.Anio,
                    Activa = e.Activa,
                    EspacioNombresPrincipal = e.EspacioNombresPrincipal,
                    PuntoEntrada = archivo != null ? archivo.Href : null
                };
            });

            return taxonomias.ToList();
        }

        /// <summary>
        /// Obtiene una taxonomia xbrl por su identificador
        /// </summary>
        /// <param name="idTaxonomiaXbrl"></param>
        /// <returns></returns>
        public TaxonomiaXbrlDto ObtenerTaxonomiaXbrlPorId(long idTaxonomiaXbrl)
        {
            var entidad = TaxonomiaXbrlRepository.Obtener(idTaxonomiaXbrl);
            var archivo = ArchivoTaxonomiaXbrlRepository.Obtener(entidad.IdTaxonomiaXbrl);

            return new TaxonomiaXbrlDto
            {
                IdTaxonomiaXbrl = entidad.IdTaxonomiaXbrl,
                Nombre = entidad.Nombre,
                Descripcion = entidad.Descripcion,
                Anio = entidad.Anio,
                Activa = entidad.Activa,
                EspacioNombresPrincipal = entidad.EspacioNombresPrincipal,
                PuntoEntrada = archivo != null ? archivo.Href : null
            };
        }

        /// <summary>
        /// Guarda una taxonomia en la BD
        /// </summary>
        /// <param name="taxonomiaXbrl"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto GuardarTaxonomiaXbrl(TaxonomiaXbrlDto taxonomiaXbrl, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { taxonomiaXbrl.Nombre };
                var informacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, taxonomiaXbrl.IdTaxonomiaXbrl == 0 ? ConstantsAccionAuditable.Insertar : ConstantsAccionAuditable.Actualizar, ConstantsModulo.TaxonomiaXbrl, taxonomiaXbrl.IdTaxonomiaXbrl == 0 ? MensajesServicios.InsertarTaxonomiaXbrl : MensajesServicios.ActualizarTaxonomiaXbrl, param);
                var taxonomia = TaxonomiaXbrlRepository.GetById(taxonomiaXbrl.IdTaxonomiaXbrl);

                if (taxonomia == null)
                {
                    taxonomia = new TaxonomiaXbrl
                    {
                        Nombre = taxonomiaXbrl.Nombre,
                        Descripcion = taxonomiaXbrl.Descripcion,
                        Anio = taxonomiaXbrl.Anio,
                        Activa = taxonomiaXbrl.Activa,
                        EspacioNombresPrincipal = taxonomiaXbrl.EspacioNombresPrincipal
                    };
                }
                else
                {
                    taxonomia.Nombre = taxonomiaXbrl.Nombre;
                    taxonomia.Descripcion = taxonomiaXbrl.Descripcion;
                    taxonomia.Anio = taxonomiaXbrl.Anio;
                    taxonomia.Activa = taxonomiaXbrl.Activa;
                    taxonomia.EspacioNombresPrincipal = taxonomiaXbrl.EspacioNombresPrincipal;
                }
                resultado = TaxonomiaXbrlRepository.Guardar(taxonomia);
                resultado.InformacionAuditoria = informacionAuditoria;

                if (resultado.Resultado)
                {
                    var id = Convert.ToInt64(resultado.InformacionExtra);

                    ArchivoTaxonomiaXbrlRepository.Borrar(id);

                    var archivo = new ArchivoTaxonomiaXbrl
                    {
                        IdTaxonomiaXbrl = id,
                        Href = taxonomiaXbrl.PuntoEntrada
                    };

                    ArchivoTaxonomiaXbrlRepository.Guardar(archivo);
                }
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
            }
            return resultado;
        }

        /// <summary>
        /// Borrar la taxonomia por su identificador
        /// </summary>
        /// <param name="idTaxonomiaXbrl"></param>
        /// <param name="idUsuarioExec"></param>
        /// <returns></returns>
        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto BorrarTaxonomiaXbrl(long idTaxonomiaXbrl, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto();
            try
            {
                var param = new List<object>() { TaxonomiaXbrlRepository.Obtener(idTaxonomiaXbrl).Nombre };
                resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Borrar, ConstantsModulo.TaxonomiaXbrl, MensajesServicios.BorrarTaxonomiaXbrl, param);
                TaxonomiaXbrlRepository.DbContext.Database.ExecuteSqlCommand(string.Format("delete from TipoEmpresaTaxonomiaXbrl where IdTaxonomiaXbrl = {0};", idTaxonomiaXbrl));
                ArchivoTaxonomiaXbrlRepository.Borrar(idTaxonomiaXbrl);
                TaxonomiaXbrlRepository.Borrar(idTaxonomiaXbrl);
                resultado.Resultado = true;
                resultado.InformacionExtra = true;
            }
            catch (Exception exception)
            {
                resultado.Resultado = false;
                resultado.Mensaje = exception.Message;
                resultado.InformacionExtra = exception;
                resultado.InformacionAuditoria = null;
            }
            return resultado;
        }
        #endregion

        #region Servicios de RelacionEmpresas
        public ResultadoOperacionDto ConsultarEmpresasSecundariasPorTipoRelacionYEmpresaPrimaria(int tipoRelacion, long idEmpresaPrimaria)
        {
            var listResult = RelacionEmpresasRepository.GetQueryable().
                Where(x => x.IdEmpresaPrimaria == idEmpresaPrimaria && x.IdTipoRelacionEmpresa == tipoRelacion).OrderBy(x => x.EmpresaSecundaria.NombreCorto).
                Select(x => x.EmpresaSecundaria).ToList();
            var res = new ResultadoOperacionDto();
            res.InformacionExtra = listResult;
            res.Resultado = true;
            return res;
        }

        public ResultadoOperacionDto ConsultarEmpresasSecundariasRepComunPorTipoRelacionYEmpresaPrimaria(int tipoRelacion, long idEmpresaPrimaria)
        {
            var listResult = RepresentanteComunFideicomisoRepository.GetQueryable().
                Where(x => x.IdEmpresaPrimaria == idEmpresaPrimaria && x.IdTipoRelacionEmpresa == tipoRelacion).OrderBy(x => x.EmpresaSecundaria.NombreCorto).
                Select(x => x.EmpresaSecundaria).ToList();
            var res = new ResultadoOperacionDto();
            res.InformacionExtra = listResult;
            res.Resultado = true;
            return res;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto AsignarFiduciarios(long idFideicomitente, List<long> idsFiduciarios, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto { Resultado = true };
            var param = new List<object>() { EmpresaRepository.ObtenerEmpresaPorId(idFideicomitente).NombreCorto };
            resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar, ConstantsModulo.Empresa, MensajesServicios.AsignarFideicomitentes, param);

            try
            {
                RelacionEmpresasRepository.eliminarRelacionesPorEmpresaPrimaria(idFideicomitente);
                RelacionEmpresasRepository.agregarRelaciones(idFideicomitente, idsFiduciarios);
            }
            catch (Exception e)
            {
                LogUtil.Error(e);
                resultado.Resultado = false;
                resultado.Mensaje = e.Message;
                resultado.Excepcion = e.StackTrace;
            }

            return resultado;
        }

        [Transaction(TransactionPropagation.Required)]
        public ResultadoOperacionDto AsignarFiduciariosRepComun(long idFideicomitente, List<long> idsFiduciarios, long idUsuarioExec)
        {
            var resultado = new ResultadoOperacionDto { Resultado = true };
            var param = new List<object>() { EmpresaRepository.ObtenerEmpresaPorId(idFideicomitente).NombreCorto };
            resultado.InformacionAuditoria = new InformacionAuditoriaDto(idUsuarioExec, ConstantsAccionAuditable.Actualizar, ConstantsModulo.Empresa, MensajesServicios.AsignarFideicomitentes, param);
           
            try
            {                
                RepresentanteComunFideicomisoRepository.eliminarRelacionesPorEmpresaPrimaria(idFideicomitente);                
                RepresentanteComunFideicomisoRepository.agregarRelaciones(idFideicomitente, idsFiduciarios);               
            }
            catch(Exception e)
            {
                LogUtil.Error(e);
                resultado.Resultado = false;
                resultado.Mensaje = e.Message;
                resultado.Excepcion = e.StackTrace;                
            }           

            return resultado;
        }

        /// <summary>
        /// Obtiene la empresas disponibles para ser asignads como fiduciarios de la empresa fideicomitente indicada.
        /// </summary>
        /// <param name="idFideicomitente">Identificador de la empresa fideicomitente a considerar.</param>
        /// <returns>Lista de empresas que no están asingadas a ningún fideicomientete o que están asignadas al fideicomitente indicado.</returns>
        public IList<EmpresaDto> ObtenEmpresasDispniblesAFiduciarios(long idFideicomitente)
        {
            return EmpresaRepository.ObtenEmpresasDispniblesAFiduciarios(idFideicomitente);
        }

        /// <summary>
        /// Obtiene la empresas disponibles para ser asignados como fiduciarios de la empresa Representante común indicada.
        /// </summary>
        /// <param name="idFideicomitente">Identificador de la empresa Representante común a considerar.</param>
        /// <returns>Lista de empresas disponibles para ser asignadas a un Representante común.</returns>
        public IList<EmpresaDto> ObtenEmpresasDisponiblesParaRepresentanteComun(long idFideicomitente)
        {
            return EmpresaRepository.ObtenEmpresasDispniblesARepresentanteComun(idFideicomitente);
        }

        /// <summary>
        /// Procesa la importacion de los archivos enviados por la BMV  para la sincronizacion de emisoras y fideicomisos
        /// </summary>
        /// <param name="infoProcesoImportacionDto">Informacion de los archivos a sincronizar</param>
        /// <returns>Rsultado de la oepracion del procesamiento</returns>
        [Transaction]
        public ResultadoOperacionDto ProcesarImportacionArchivosBMV(InformacionProcesoImportacionArchivosBMVDto infoProcesoImportacionDto) {
            var resultadoOperacion = new ResultadoOperacionDto();
            var bitacora = new BitacoraProcesarArchivosBMV();
            bitacora.Estatus = 1;

            try
            {
                

                resultadoOperacion.Resultado = true;

                LogUtil.Error("Inicializa el metodo de ProcesarArchivosEmisorasBMV");

                var resultadoSincronizacion = SincronizacionArchivosBMVService.ProcesarArchivosEmisorasBMV(infoProcesoImportacionDto.archivoEmisoras, infoProcesoImportacionDto.archivoFideicomisos);

                LogUtil.Error("Fin del metodo de ProcesarArchivosEmisorasBMV");

                resultadoOperacion.InformacionExtra = resultadoSincronizacion;

                infoProcesoImportacionDto.archivoEmisoras = null;
                infoProcesoImportacionDto.archivoFideicomisos = null;
                
                bitacora.FechaHoraProcesamiento = DateTime.Now;
                bitacora.NumeroEmisorasReportadas = resultadoSincronizacion.EmisorasImportadas.Count;
                bitacora.NumeroFideicomisosReportados = resultadoSincronizacion.FideicomisosImportados.Count;
                bitacora.RutaOrigenArchivoEmisoras = infoProcesoImportacionDto.RutaOrigenArchivoEmisoras;
                bitacora.RutaDestinoArchivoEmisoras = infoProcesoImportacionDto.RutaDestinoArchivoEmisoras;
                bitacora.RutaOrigenArchivoFideicomisos = infoProcesoImportacionDto.RutaOrigenArchivoFideicomisos;
                bitacora.RutaDestinoArchivoFideicomisos = infoProcesoImportacionDto.RutaDestinoArchivoFideicomisos;
                bitacora.InformacionSalida = JsonConvert.SerializeObject(resultadoSincronizacion);

                BitacoraProcesarArchivosBMVRepository.Add(bitacora);

            }
            catch (Exception e) {
                LogUtil.Error(e);
                bitacora.Estatus = 2;
                resultadoOperacion.Resultado = false;
                resultadoOperacion.Mensaje = e.StackTrace;
            }

            return resultadoOperacion;

        }


        #endregion
    }
}