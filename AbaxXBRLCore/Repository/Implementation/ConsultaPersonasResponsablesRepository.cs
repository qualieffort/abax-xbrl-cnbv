#region

using System;
using System.Collections.Generic;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using System.Data.SqlClient;
using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.DbContext;
using System.Data.Entity.Core.Objects;
using System.Linq;
using Spring.Data.Generic;
using System.Data;
using AbaxXBRLCore.CellStore.Services.Impl;
using Newtonsoft.Json;
using System.Collections;
using MongoDB.Driver;
using MongoDB.Bson;
using System.Text.RegularExpressions;
using AbaxXBRLCore.CellStore.Services;
using System.Globalization;
using AbaxXBRLCore.Reports.Util;
using System.Threading.Tasks;
using AbaxXBRLCore.Viewer.Application.Dto;

#endregion

namespace AbaxXBRLCore.Repository.Implementation
{
    /// <summary>
    ///     Implementación del repositorio base para operaciones con la entidad RegistroAuditoria.
    ///     <author>Eric Alan González Fuentes</author>
    ///     <version>1.0</version>
    /// </summary>
    public class ConsultaPersonasResponsablesRepository : IConsultaPersonasResponsablesRepository
    {

        /// <summary>
        /// Objecto de acceso a datos en Mongo.
        /// </summary>
        public AbaxXBRLCellStoreMongo AbaxXBRLCellStoreMongo { get; set; }

        /// <summary>
        /// Obtiene la información de Administradores.
        /// </summary>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        public PeticionInformationDataTableDto<Administrador> ObtenerInformacionAdministradores(PeticionInformationDataTableDto<Administrador> peticionDataTable)
        {

            this.GeneraColeccionAdministradores();

            Dictionary<String, object> parametros = new Dictionary<String, object>();
            foreach (var filtro in peticionDataTable.filtros)
            {
                parametros.Add(filtro.Key, (String)filtro.Value);
            }

            List<Administrador> listaAdministradores = AbaxXBRLCellStoreMongo.ConsultaElementos<Administrador>("Administrador", ReporteUtil.obtenerFiltrosEnviosEnFormatoBSON(parametros)).ToList();

            if (listaAdministradores == null || listaAdministradores.Count() == 0)
            {
                peticionDataTable.data = new List<Administrador>();
                return peticionDataTable;
            }

            listaAdministradores = ReporteUtil.ordenarListaElementosPorColumna(listaAdministradores, Administrador.diccionarioColumnas.ElementAt(peticionDataTable.order[0].column).Key, peticionDataTable.order[0].dir, Administrador.diccionarioColumnas.ElementAt(peticionDataTable.order[0].column).Value);

            foreach (var administrador in listaAdministradores)
            {
                administrador.Taxonomia = ReporteUtil.obtenerNombreSimpleTaxonomia(administrador.Taxonomia);
            }

            peticionDataTable.recordsTotal = listaAdministradores.Count();

            if (peticionDataTable.start < listaAdministradores.Count())
            {
                var diferencia = listaAdministradores.Count() - peticionDataTable.start;

                if (diferencia >= peticionDataTable.length)
                {
                    peticionDataTable.data = listaAdministradores.GetRange(peticionDataTable.start, peticionDataTable.length);
                }
                else
                {
                    peticionDataTable.data = listaAdministradores.GetRange(peticionDataTable.start, diferencia);
                }

            }

            return peticionDataTable;
        }

        /// <summary>
        /// Obtiene el listado de Personas responsables y se la pasa a PeticionDataTable.
        /// </summary>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        public PeticionInformationDataTableDto<PersonaResponsable> ObtenerInformacionPersonasResponsables(PeticionInformationDataTableDto<PersonaResponsable> peticionDataTable)
        {

            this.GeneraColeccionPersonaResponsable();

            Dictionary<String, object> parametros = new Dictionary<String, object>();
            foreach (var filtro in peticionDataTable.filtros)
            {
                parametros.Add(filtro.Key, (String)filtro.Value);
            }

            List<PersonaResponsable> listaPersonasResponsables = AbaxXBRLCellStoreMongo.ConsultaElementos<PersonaResponsable>("PersonaResponsable", ReporteUtil.obtenerFiltrosEnviosEnFormatoBSON(parametros)).ToList();

            if (listaPersonasResponsables == null || listaPersonasResponsables.Count() == 0)
            {
                peticionDataTable.data = new List<PersonaResponsable>();
                return peticionDataTable;
            }

            listaPersonasResponsables = ReporteUtil.ordenarListaElementosPorColumna(listaPersonasResponsables, PersonaResponsable.diccionarioColumnas.ElementAt(peticionDataTable.order[0].column).Key, peticionDataTable.order[0].dir, PersonaResponsable.diccionarioColumnas.ElementAt(peticionDataTable.order[0].column).Value);

            foreach (var administrador in listaPersonasResponsables)
            {
                administrador.Taxonomia = ReporteUtil.obtenerNombreSimpleTaxonomia(administrador.Taxonomia);
            }

            peticionDataTable.recordsTotal = listaPersonasResponsables.Count();

            if (peticionDataTable.start < listaPersonasResponsables.Count())
            {
                var diferencia = listaPersonasResponsables.Count() - peticionDataTable.start;

                if (diferencia >= peticionDataTable.length)
                {
                    peticionDataTable.data = listaPersonasResponsables.GetRange(peticionDataTable.start, peticionDataTable.length);
                }
                else
                {
                    peticionDataTable.data = listaPersonasResponsables.GetRange(peticionDataTable.start, diferencia);
                }

            }

            return peticionDataTable;
        }

        /// <summary>
        /// Obtien el listado de Resumen 4D y se la pasa a PeticionDataTable.
        /// </summary>
        /// <param name="peticionDataTable"></param>
        /// <returns></returns>
        public PeticionInformationDataTableDto<ResumenInformacion4DDTO> ObtenerResumenInformacion4D(PeticionInformationDataTableDto<ResumenInformacion4DDTO> peticionDataTable)
        {

            this.GeneraColeccionResumen4D();

            Dictionary<String, object> parametros = new Dictionary<String, object>();
            foreach (var filtro in peticionDataTable.filtros)
            {
                parametros.Add(filtro.Key, (String)filtro.Value);
            }

            List<ResumenInformacion4DDTO> listaResumenInformacion4D = this.ObtenerResumenInformacion4DPorFiltro(parametros);

            //Se ordena el resultado.
            if (peticionDataTable.order.Any() && listaResumenInformacion4D != null && listaResumenInformacion4D.Count > 0)
            {
                listaResumenInformacion4D = ReporteUtil.ordenarListaElementosPorColumna(listaResumenInformacion4D, ResumenInformacion4DDTO.diccionarioColumnas.ElementAt(peticionDataTable.order[0].column).Key, peticionDataTable.order[0].dir, ResumenInformacion4DDTO.diccionarioColumnas.ElementAt(peticionDataTable.order[0].column).Value);
            }

            #region Se prepara el resultado.
            peticionDataTable.recordsTotal = listaResumenInformacion4D.Count();
            if (listaResumenInformacion4D.Count == 0)
            {
                peticionDataTable.data = listaResumenInformacion4D;
                return peticionDataTable;
            }

            if (peticionDataTable.start < listaResumenInformacion4D.Count())
            {
                var diferencia = listaResumenInformacion4D.Count() - peticionDataTable.start;

                if (diferencia >= peticionDataTable.length)
                {
                    peticionDataTable.data = listaResumenInformacion4D.GetRange(peticionDataTable.start, peticionDataTable.length);
                }
                else
                {
                    peticionDataTable.data = listaResumenInformacion4D.GetRange(peticionDataTable.start, diferencia);
                }
            }
            #endregion

            return peticionDataTable;
        }

        /// <summary>
        /// Obtiene la informacón de Administradores para el Reporte de Excel.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>        
        public List<Administrador> ObtenerInformacionReporteAdministradores(Dictionary<string, object> parametros)
        {
            List<Administrador> listaAdministradores = AbaxXBRLCellStoreMongo.ConsultaElementos<Administrador>("Administrador", ReporteUtil.obtenerFiltrosEnviosEnFormatoBSON(parametros)).ToList();

            listaAdministradores = ReporteUtil.ordenarListaElementosPorColumna(listaAdministradores, Administrador.diccionarioColumnas.ElementAt(1).Key, "asc", Administrador.diccionarioColumnas.ElementAt(1).Value);

            foreach (var administrador in listaAdministradores)
            {
                administrador.Taxonomia = ReporteUtil.obtenerNombreSimpleTaxonomia(administrador.Taxonomia);
            }

            return listaAdministradores;
        }

        /// <summary>
        /// Obtiene la informacón de Personas Responsables para el Reporte de Excel.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        public List<PersonaResponsable> ObtenerInformacionReportePersonasResponsables(Dictionary<string, object> parametros)
        {
            List<PersonaResponsable> listaPersonasResponsables = AbaxXBRLCellStoreMongo.ConsultaElementos<PersonaResponsable>("PersonaResponsable", ReporteUtil.obtenerFiltrosEnviosEnFormatoBSON(parametros)).ToList();

            listaPersonasResponsables = ReporteUtil.ordenarListaElementosPorColumna(listaPersonasResponsables, PersonaResponsable.diccionarioColumnas.ElementAt(1).Key, "asc", PersonaResponsable.diccionarioColumnas.ElementAt(1).Value);

            foreach (var personaResponsable in listaPersonasResponsables)
            {
                personaResponsable.Taxonomia = ReporteUtil.obtenerNombreSimpleTaxonomia(personaResponsable.Taxonomia);
            }

            return listaPersonasResponsables;
        }

        /// <summary>
        /// Obtiene la lista del Resumen de Informacón de Reportes 4D.
        /// </summary>
        /// <param name="parametros"></param>
        /// <returns></returns>
        public List<ResumenInformacion4DDTO> ObtenerResumenInformacion4DPorFiltro(Dictionary<string, object> parametros)
        {

            List<ResumenInformacion4DDTO> listaResumenInformacion4D = AbaxXBRLCellStoreMongo.ConsultaElementos<ResumenInformacion4D>("Resumen4D", ReporteUtil.obtenerFiltrosEnviosEnFormatoBSON(parametros)).ToList().ConvertAll(new Converter<ResumenInformacion4D, ResumenInformacion4DDTO>(ResumenInformacion4DDTO.Resumen4DEntityToResumen4DDTO));

            return listaResumenInformacion4D;
        }

        /// <summary>
        /// Método asíncrono que genera documentos en la collection PersonaResponsable de envios actuales no procesados.
        /// </summary>
        /// <returns></returns>
        async Task GeneraColeccionAdministradores()
        {

            await Task.Run(() =>
            {

                List<Administrador> listaAdministradores = new List<Administrador>();

                #region Eliminación de Documentos de la coleccion Administrador donde sus envíos no son actuales.
                var listaIdEnviosAEliminarEnAdministrador = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", "{EsVersionActual: false}").ToList();

                List<String> listaIdEnviosAEliminarEnAdministradorCadena = new List<string>();

                if (listaIdEnviosAEliminarEnAdministrador.Count > 0)
                {
                    listaIdEnviosAEliminarEnAdministradorCadena = listaIdEnviosAEliminarEnAdministrador.Select(envio => "'" + envio.IdEnvio + "',").ToList();
                }

                var filtros = "{IdEnvio: {$in : [" + String.Join(" ", listaIdEnviosAEliminarEnAdministradorCadena.ToArray()).TrimEnd(',') + "]}}";

                AbaxXBRLCellStoreMongo.EliminarAsync("Administrador", filtros);
                #endregion

                #region Obtención de Envios Actuales a procesar.
                var listaEnvios = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", "{EsVersionActual: true}");

                List<Administrador> listaAdministradoresEnMongo = AbaxXBRLCellStoreMongo.ConsultaElementos<Administrador>("Administrador", "{}").ToList();

                foreach (var administradorAux3 in listaAdministradoresEnMongo)
                {
                    if (listaEnvios.ToList().Find(envio => envio.IdEnvio.Equals(administradorAux3.IdEnvio)) != null)
                    {
                        var envio = listaEnvios.ToList().Find(envioAux => envioAux.IdEnvio.Equals(administradorAux3.IdEnvio));
                        listaEnvios.Remove(envio);
                    }
                } 
                #endregion

                List<Hecho> listaHechos = new List<Hecho>();

                #region Obtención de hechos a procesar.
                long cantidadHechosAProcesar = 0;

                if (listaEnvios.Count > 0)
                {
                    cantidadHechosAProcesar = AbaxXBRLCellStoreMongo.CuentaElementosColeccion("Hecho", ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, Administrador.universoIdHechos));
                }

                if (cantidadHechosAProcesar == 0)
                {
                    return;
                }

                var cantidad = 500;
                decimal cantidadVecesAEjecutar = (decimal)cantidadHechosAProcesar / cantidad;
                int cantidadVecesAEjecutarEntero = (int)cantidadVecesAEjecutar;
                long cantidadRegistrosUltimaPagina = cantidadHechosAProcesar - (cantidadVecesAEjecutarEntero * cantidad);

                if (cantidadVecesAEjecutar > cantidadVecesAEjecutarEntero)
                {
                    cantidadVecesAEjecutarEntero = cantidadVecesAEjecutarEntero + 1;
                }

                if (listaEnvios.Count > 0)
                {

                    for (var i = 1; i <= cantidadVecesAEjecutarEntero; i++)
                    {
                        if (listaHechos.Count == 0)
                        {
                            if (i == (cantidadVecesAEjecutarEntero))
                            {
                                listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>(ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, Administrador.universoIdHechos), null, (int)cantidad, i).ToList();
                            }
                            else
                            {
                                listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>(ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, Administrador.universoIdHechos), null, cantidad, i).ToList();
                            }

                        }
                        else
                        {
                            if (i == (cantidadVecesAEjecutarEntero))
                            {
                                listaHechos.AddRange(AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>(ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, Administrador.universoIdHechos), null, (int)cantidad, i).ToList());
                            }
                            else
                            {
                                listaHechos.AddRange(AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>(ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, Administrador.universoIdHechos), null, cantidad, i).ToList());
                            }

                        }
                    }

                }

                #endregion

                #region Creación de listado de Administradores a insertar en la colección Administrador.
                var hechosAgrupadosPorEnvio = listaHechos.GroupBy(hecho => hecho.IdEnvio);

                Dictionary<String, List<List<Hecho>>> listaDeSecuenciaPorEnvio = new Dictionary<string, List<List<Hecho>>>();

                foreach (var grupo in hechosAgrupadosPorEnvio)
                {
                    var hechosAgrupadosPorSecuencia = grupo.ToList().GroupBy(hecho => hecho.MiembrosDimensionales[0].MiembroTipificado).Select(grp => grp.ToList()).ToList();
                    listaDeSecuenciaPorEnvio.Add(grupo.Key, hechosAgrupadosPorSecuencia);
                }

                Administrador administrador;

                foreach (var listaSecuenciasPorEnvio in listaDeSecuenciaPorEnvio)
                {
                    foreach (var elementoListaSecuencia in listaSecuenciasPorEnvio.Value)
                    {
                        var entidad = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorName")).Entidad.Nombre;
                        var taxonomia = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorName")).Taxonomia;
                        var idEnvio = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorName")).IdEnvio;
                        var fechaReporte = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorName")).Periodo.FechaInstante;

                        var elementoAux = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorName"));
                        String tipoAdministrador = "";

                        if (elementoAux != null)
                        {
                            if (elementoAux.MiembrosDimensionales.ToList().Find(miembro => miembro.Explicita == true).EtiquetasMiembroDimension.ToList().Count > 0)
                            {
                                tipoAdministrador = elementoAux.MiembrosDimensionales.ToList().Find(miembro => miembro.Explicita == true).EtiquetasMiembroDimension.ToList().Find(etiqueta => etiqueta.Idioma.Equals("es")).Valor;
                            }
                        }

                        var hechoNombre = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorName"));
                        var hechoApellidoPaterno = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorFirstName"));
                        var hechoApellidoMaterno = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorSecondName"));
                        var hechoTipoConsejero = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorDirectorshipType"));
                        var hechoAuditoria = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorParticipateInCommitteesAudit"));
                        var hechoPS = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorParticipateInCommitteesCorporatePractices"));
                        var hechoEyC = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorParticipateInCommitteesEvaluationAndCompensation"));
                        var hechoOtros = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorParticipateInCommitteesOthers"));
                        var hechoFechaDesignacion = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorDesignationDate"));
                        var hechoTipoAsamblea = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorAssemblyType"));
                        var hechoPeriodoElecto = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorPeriodForWhichTheyWereElected"));
                        var hechoCargo = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorPosition"));
                        var hechoTiempoCargo = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorTimeWorkedInTheIssuer"));
                        var hechoPartAccionaria = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorShareholding"));
                        var hechoSexo = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorGender"));
                        var hechoInfoAdicional = elementoListaSecuencia.Find(hechoNombreAux => hechoNombreAux.Concepto.IdConcepto.Equals("ar_pros_AdministratorAdditionalInformation"));

                        administrador = new Administrador();
                        administrador.Taxonomia = taxonomia ?? "";
                        administrador.IdEnvio = idEnvio ?? "";

                        if (fechaReporte != null)
                        {
                            try
                            {
                                Console.WriteLine("Error en fecha fechaReporte: ", fechaReporte);
                                administrador.FechaReporte = Convert.ToDateTime(fechaReporte).ToString("dd/MM/yyyy");
                            }
                            catch (Exception e)
                            {
                                administrador.FechaReporte = "";
                                LogUtil.Error("Error en fecha: " + fechaReporte);
                            }
                        }

                        administrador.ClaveCotizacion = entidad ?? "";
                        administrador.TipoAdministrador = (tipoAdministrador != null) ? tipoAdministrador : "";
                        administrador.Nombre = (hechoNombre != null && hechoNombre.Valor != null) ? hechoNombre.Valor : "";
                        administrador.ApellidoPaterno = (hechoApellidoPaterno != null && hechoApellidoPaterno.Valor != null) ? hechoApellidoPaterno.Valor : "";
                        administrador.ApellidoMaterno = (hechoApellidoMaterno != null && hechoApellidoMaterno.Valor != null) ? hechoApellidoMaterno.Valor : "";
                        administrador.TipoConsejero = (hechoTipoConsejero != null) ? hechoTipoConsejero.Valor : "";
                        administrador.Auditoria = (hechoAuditoria != null && hechoAuditoria.Valor != null) ? hechoAuditoria.Valor : "";
                        administrador.PracticasSocietarias = (hechoPS != null && hechoPS.Valor != null) ? hechoPS.Valor : "";
                        administrador.EvaluacionCompensacion = (hechoEyC != null && hechoEyC.Valor != null) ? hechoEyC.Valor : "";
                        administrador.Otros = (hechoOtros != null && hechoOtros.Valor != null) ? ReporteUtil.removeTextHTML(hechoOtros.Valor) : "";
                        if (hechoFechaDesignacion != null && hechoFechaDesignacion.Valor != null)
                        {
                            try
                            {
                                Console.WriteLine("Error en fecha hechoFechaDesignacion : ", hechoFechaDesignacion.Valor);
                                administrador.FechaDesignacion = Convert.ToDateTime(hechoFechaDesignacion.Valor).ToString("dd/MM/yyyy");
                            }
                            catch (Exception e)
                            {
                                administrador.FechaDesignacion = "";
                                LogUtil.Error("Error en fecha hechoFechaDesignacion: " + hechoFechaDesignacion.Valor);
                            }
                        }
                        administrador.TipoAsamblea = (hechoTipoAsamblea != null && hechoTipoAsamblea.Valor != null) ? hechoTipoAsamblea.Valor : "";
                        administrador.PeriodoElecto = (hechoPeriodoElecto != null && hechoPeriodoElecto.Valor != null) ? hechoPeriodoElecto.Valor : "";
                        administrador.Cargo = (hechoCargo != null && hechoCargo.Valor != null) ? hechoCargo.Valor : "";
                        administrador.TiempoOcupandoCargo = (hechoTiempoCargo != null && hechoTiempoCargo.Valor != null) ? hechoTiempoCargo.Valor : "";
                        administrador.ParticipacionAccionaria = (hechoPartAccionaria != null && hechoPartAccionaria.Valor != null) ? hechoPartAccionaria.Valor : "";
                        administrador.Sexo = (hechoSexo != null && hechoSexo.Valor != null) ? hechoSexo.Valor : "";
                        administrador.InfoAdicional = (hechoInfoAdicional != null && hechoInfoAdicional.Valor != null) ? ReporteUtil.removeTextHTML(hechoInfoAdicional.Valor) : "";

                        listaAdministradores.Add(administrador);
                    }
                } 
                #endregion

                AbaxXBRLCellStoreMongo.UpsertCollectionReportes("Administrador", listaAdministradores);

            });
        }

        /// <summary>
        /// Método asíncrono que genera documentos en la collection PersonaResponsable de envios actuales no procesados.
        /// </summary>
        /// <returns></returns>
        async Task GeneraColeccionPersonaResponsable()
        {
            await Task.Run(() =>
            {

                List<PersonaResponsable> listaPersonasResponsables = new List<PersonaResponsable>();

                #region Eliminación de Documentos de la coleccion PersonaResponsable donde sus envíos no son actuales.
                var listaIdEnviosAEliminarEnPersonaResponsable = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", "{EsVersionActual: false}").ToList();

                List<String> listaIdEnviosAEliminarEnPersonaResponsableCadena = new List<string>();

                if (listaIdEnviosAEliminarEnPersonaResponsable.Count > 0)
                {
                    listaIdEnviosAEliminarEnPersonaResponsableCadena = listaIdEnviosAEliminarEnPersonaResponsable.Select(envio => "'" + envio.IdEnvio + "',").ToList();
                }

                var filtros = "{IdEnvio: {$in : [" + String.Join(" ", listaIdEnviosAEliminarEnPersonaResponsableCadena.ToArray()).TrimEnd(',') + "]}}";

                AbaxXBRLCellStoreMongo.EliminarAsync("PersonaResponsable", filtros);
                #endregion

                #region Obtención de Envios Actuales a procesar.
                var listaEnvios = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", "{EsVersionActual: true}");

                List<PersonaResponsable> listaPersonasResponsablesEnMongo = AbaxXBRLCellStoreMongo.ConsultaElementos<PersonaResponsable>("PersonaResponsable", "{}").ToList();

                foreach (var personaResponsableAux3 in listaPersonasResponsablesEnMongo)
                {
                    if (listaEnvios.ToList().Find(envio => envio.IdEnvio.Equals(personaResponsableAux3.IdEnvio)) != null)
                    {
                        var envio = listaEnvios.ToList().Find(envioAux => envioAux.IdEnvio.Equals(personaResponsableAux3.IdEnvio));
                        listaEnvios.Remove(envio);
                    }
                } 
                #endregion

                List<Hecho> listaHechos = new List<Hecho>();

                #region Obtención de hechos que interesan, creación del listado de Personas Responsables a agregar a la colección PersonaResponsable.
                listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementos<Hecho>("Hecho", ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, PersonaResponsable.universoIdHechos)).ToList();

                var hechosAgrupadosPorEnvio = listaHechos.GroupBy(hecho => hecho.IdEnvio).Select(grp => grp.ToList()).ToList();

                List<PersonaResponsable> listaPersonaResponsable = new List<PersonaResponsable>();

                foreach (var grupoHechosPorEnvio in hechosAgrupadosPorEnvio)
                {

                    var listaHechosPorSecuenciaInstitucion = grupoHechosPorEnvio.ToList().Where(hecho => hecho.MiembrosDimensionales.Count > 0).GroupBy(hecho => hecho.MiembrosDimensionales[0].MiembroTipificado).Select(grp => grp.ToList()).ToList();
                    var numeroFideicomiso = (grupoHechosPorEnvio.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_NumberOfTrust")) != null) ? grupoHechosPorEnvio.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_NumberOfTrust")).Valor : "";
                    
                    foreach (var elementoListaSecuenciaInstitucion in listaHechosPorSecuenciaInstitucion)
                    {

                        var listaHechosPorSecuenciaPersona = (from hecho in elementoListaSecuenciaInstitucion from miembro in hecho.MiembrosDimensionales where miembro.IdDimension.Equals("ar_pros_ResponsiblePersonsSequenceTypedAxis") group hecho by miembro.MiembroTipificado into grupo select grupo.ToList()).ToList();

                        foreach (var lista in listaHechosPorSecuenciaPersona)
                        {
                            PersonaResponsable personaResponsable = new PersonaResponsable();
                            var hechoInstitucion = elementoListaSecuenciaInstitucion.Find(hechoInstitucionAux => hechoInstitucionAux.Concepto.IdConcepto.Equals("ar_pros_ResponsiblePersonName"));

                            personaResponsable.IdEnvio = (hechoInstitucion != null && hechoInstitucion.IdEnvio != null) ? hechoInstitucion.IdEnvio : "";
                            personaResponsable.Taxonomia = (hechoInstitucion != null && hechoInstitucion.Taxonomia != null) ? hechoInstitucion.Taxonomia : "";
                            personaResponsable.ClaveCotizacion = (hechoInstitucion != null && hechoInstitucion.Entidad != null) ? hechoInstitucion.Entidad.Nombre : "";
                            personaResponsable.Fecha = (hechoInstitucion != null && hechoInstitucion.Periodo != null) ? hechoInstitucion.Periodo.FechaInstante.GetValueOrDefault().ToString("dd/MM/yyyy") : "";
                            var miembro = hechoInstitucion.MiembrosDimensionales.ToList().Find(elemento => elemento.IdDimension.Equals("ar_pros_TypeOfResponsibleFigureAxis"));

                            if (miembro != null)
                            {
                                var etiquetaMiembroDimension = miembro.EtiquetasMiembroDimension.ToList().Find(elemento => (elemento.Idioma.Equals("es") && elemento.Rol.Equals("http://www.xbrl.org/2003/role/label")));
                                var valorEtiqueta = (etiquetaMiembroDimension != null) ? etiquetaMiembroDimension.Valor : "";
                                personaResponsable.TipoPersonaResponsable = (valorEtiqueta != null) ? valorEtiqueta : "";
                            }

                            var hechoInstitucionAux2 = elementoListaSecuenciaInstitucion.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ResponsiblePersonInstitution"));
                            
                            personaResponsable.Institucion = (hechoInstitucionAux2 != null && hechoInstitucionAux2.Valor != null) ? hechoInstitucionAux2.Valor : "";
                            personaResponsable.Cargo = (lista.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ResponsiblePersonPosition")) != null) ? lista.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ResponsiblePersonPosition")).Valor : "";
                            personaResponsable.Nombre = (lista.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ResponsiblePersonName")) != null) ? lista.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ResponsiblePersonName")).Valor : "";
                            personaResponsable.NumeroFideicomiso = numeroFideicomiso;

                            listaPersonaResponsable.Add(personaResponsable);
                        }

                    }

                } 
                #endregion

                AbaxXBRLCellStoreMongo.UpsertCollectionReportes("PersonaResponsable", listaPersonaResponsable);

            });
        }

        /// <summary>
        /// Método asíncrono que genera documentos en la collection Resumen4D de envios actuales no procesados.
        /// </summary>
        /// <returns></returns>
        async Task GeneraColeccionResumen4D() {

            await Task.Run(() =>
            {

                List<ResumenInformacion4D> listaPersonasResponsables = new List<ResumenInformacion4D>();

                var universoTaxonomias = "'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05', 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2014-12-05'," +
                "'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2014-12-05', 'http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30', " +
                "'http://www.bmv.com.mx/2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30'";

                #region Elimina los documentos de envios con el atributo EsVersionActual=false.
                var parametrosEnvio = " { EsVersionActual: false, 'Parametros.trimestre': '4D', Taxonomia: {$in : [" + universoTaxonomias + "] } }";

                var listaIdEnviosAEliminarEnResumen4D = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", parametrosEnvio).ToList();

                List<String> listaIdEnviosAEliminarEnResumen4DCadena = new List<string>();

                if (listaIdEnviosAEliminarEnResumen4D.Count > 0)
                {
                    listaIdEnviosAEliminarEnResumen4DCadena = listaIdEnviosAEliminarEnResumen4D.Select(envio => "'" + envio.IdEnvio + "',").ToList();
                }

                var filtros = "{IdEnvio: {$in : [" + String.Join(" ", listaIdEnviosAEliminarEnResumen4DCadena.ToArray()).TrimEnd(',') + "]}}";

                AbaxXBRLCellStoreMongo.EliminarAsync("Resumen4D", filtros);
                #endregion

                #region Obtiene los envios actuales a procesar, se quitan aquellos que han sido procesados con anterioridad.
                parametrosEnvio = " { EsVersionActual: true, 'Parametros.trimestre': '4D', Taxonomia: {$in : [" + universoTaxonomias + "] } }";
                var listaEnvios = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", parametrosEnvio);

                List<ResumenInformacion4D> listaResumen4DEnMongo = AbaxXBRLCellStoreMongo.ConsultaElementos<ResumenInformacion4D>("Resumen4D", "{}").ToList();

                foreach (var resumen4DAux3 in listaResumen4DEnMongo)
                {
                    if (listaEnvios.ToList().Find(envio => envio.IdEnvio.Equals(resumen4DAux3.IdEnvio)) != null)
                    {
                        var envio = listaEnvios.ToList().Find(envioAux => envioAux.IdEnvio.Equals(resumen4DAux3.IdEnvio));
                        listaEnvios.Remove(envio);
                    }
                } 
                #endregion

                List<Hecho> listaHechos = new List<Hecho>();

                //Se ontienen los hechos que interesan de los envios no procesados.
                if (listaEnvios.Count > 0)
                {
                    listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementos<Hecho>("Hecho", ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, ResumenInformacion4D.universoIdHechos)).ToList();
                }

                List<Dictionary<Envio, IList<Hecho>>> listaHechosPorEnvio = new List<Dictionary<Envio, IList<Hecho>>>();

                //Se crea una lista Del envio (Key) y sus hechos (value).
                if (listaEnvios != null && listaEnvios.Count > 0 && listaHechos != null && listaHechos.Count > 0)
                {
                    foreach (var envio in listaEnvios)
                    {
                        IList<Hecho> listaHechosPorIdEnvio = listaHechos.ToList().FindAll(hecho => hecho.IdEnvio == envio.IdEnvio);

                        Dictionary<Envio, IList<Hecho>> hechosPorEnvio = new Dictionary<Envio, IList<Hecho>>();
                        hechosPorEnvio.Add(envio, listaHechosPorIdEnvio);

                        listaHechosPorEnvio.Add(hechosPorEnvio);
                    }
                }

                List<ResumenInformacion4D> listaResumenInformacion4D = new List<ResumenInformacion4D>();

                #region Se construye la lista del Resumen de Información 4D.
                foreach (var infoEnvio in listaHechosPorEnvio)
                {
                    ResumenInformacion4D elemento = new ResumenInformacion4D();

                    var taxonomia = infoEnvio.ElementAt(0).Key.Taxonomia;

                    elemento.IdEnvio = infoEnvio.ElementAt(0).Key.IdEnvio;
                    elemento.Taxonomia = taxonomia;
                    elemento.FechaReporte = infoEnvio.ElementAt(0).Key.Periodo.Fecha.GetValueOrDefault().ToString("dd/MM/yyyy");
                    var fechaReporte = infoEnvio.ElementAt(0).Key.Periodo.Fecha;
                    var inicioFechaAcumuladoAnioActual = new DateTime(fechaReporte.GetValueOrDefault().Year, 1, 1);

                    elemento.TotalActivo = (infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets") && hecho.Periodo.FechaInstante.GetValueOrDefault() == fechaReporte.GetValueOrDefault())) != null ? Decimal.Parse(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets") && hecho.Periodo.FechaInstante.GetValueOrDefault() == fechaReporte.GetValueOrDefault()).Valor) : 0;
                    elemento.TotalPasivo = (infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities") && hecho.Periodo.FechaInstante.GetValueOrDefault() == fechaReporte.GetValueOrDefault())) != null ? Decimal.Parse(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities") && hecho.Periodo.FechaInstante.GetValueOrDefault() == fechaReporte.GetValueOrDefault()).Valor) : 0;
                    elemento.TotalCapitalContablePasivo = (infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_EquityAndLiabilities") && hecho.Periodo.FechaInstante.GetValueOrDefault() == fechaReporte.GetValueOrDefault())) != null ? Decimal.Parse(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_EquityAndLiabilities") && hecho.Periodo.FechaInstante.GetValueOrDefault() == fechaReporte.GetValueOrDefault()).Valor) : 0;
                    elemento.Ingreso = (infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue") && hecho.Periodo.FechaInicio.GetValueOrDefault() == inicioFechaAcumuladoAnioActual && hecho.Periodo.FechaFin.GetValueOrDefault() == fechaReporte.GetValueOrDefault())) != null ? Decimal.Parse(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue") && hecho.Periodo.FechaInicio.GetValueOrDefault() == inicioFechaAcumuladoAnioActual && hecho.Periodo.FechaFin.GetValueOrDefault() == fechaReporte.GetValueOrDefault()).Valor) : 0;

                    try
                    {
                        elemento.Unidad = infoEnvio.ElementAt(0).Key.Parametros["moneda"].ToString().Substring(infoEnvio.ElementAt(0).Key.Parametros["moneda"].ToString().LastIndexOf(':') + 1);
                    }
                    catch (KeyNotFoundException)
                    {
                        //LogUtil.Error("LLave no encontrada");
                    }

                    switch (taxonomia)
                    {
                        case "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05":
                        case "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2014-12-05":
                        case "http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2014-12-05":
                            elemento.ClaveCotizacion = infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs_mx-cor_20141205_ClaveDeCotizacionBloqueDeTexto")).Valor;
                            elemento.NumeroFideicomiso = "";
                            elemento.NombreProveedorServiciosAuditoria = ReporteUtil.removeTextHTML(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs_mx-cor_20141205_NombreDeProveedorDeServiciosDeAuditoriaExternaBloqueDeTexto")).Valor);
                            elemento.NombreSocioOpinion = ReporteUtil.removeTextHTML(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs_mx-cor_20141205_NombreDelSocioQueFirmaLaOpinionBloqueDeTexto")).Valor);
                            elemento.TipoOpinionEstadosFinancieros = ReporteUtil.removeTextHTML(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs_mx-cor_20141205_TipoDeOpinionALosEstadosFinancierosBloqueDeTexto")).Valor);
                            break;
                        case "http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30":
                            elemento.ClaveCotizacion = infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("mx_ccd_Ticker")).Valor;
                            elemento.NumeroFideicomiso = infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("mx_ccd_TrustNumber")).Valor;
                            elemento.NombreProveedorServiciosAuditoria = ReporteUtil.removeTextHTML(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("mx_ccd_NameServiceProviderExternalAudit")).Valor);
                            elemento.NombreSocioOpinion = ReporteUtil.removeTextHTML(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("mx_ccd_NameOfTheAsociadoSigningOpinion")).Valor);
                            elemento.TipoOpinionEstadosFinancieros = ReporteUtil.removeTextHTML(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("mx_ccd_TypeOfOpinionOnTheFinancialStatements")).Valor);
                            break;
                        case "http://www.bmv.com.mx/2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30":
                            elemento.ClaveCotizacion = infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("mx_deuda_Ticker")).Valor;
                            elemento.NumeroFideicomiso = infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("mx_deuda_TrustNumber")).Valor; ;
                            elemento.NombreProveedorServiciosAuditoria = ReporteUtil.removeTextHTML(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("mx_deuda_NameServiceProviderExternalAudit")).Valor);
                            elemento.NombreSocioOpinion = ReporteUtil.removeTextHTML(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("mx_deuda_NameOfTheAsociadoSigningOpinion")).Valor);
                            elemento.TipoOpinionEstadosFinancieros = ReporteUtil.removeTextHTML(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("mx_deuda_TypeOfOpinionOnTheFinancialStatements")).Valor);
                            break;
                        default:
                            break;
                    }

                    listaResumenInformacion4D.Add(elemento);
                }
                #endregion

                AbaxXBRLCellStoreMongo.UpsertCollectionReportes("Resumen4D", listaResumenInformacion4D);
            });
        }

        /// <summary>
        /// Obtiene los envíos actuales de la clave de cotización pasada como parámetro.
        /// </summary>
        /// <param name="claveCotizacion"></param>
        /// <returns></returns>
        public List<LlaveValorDto> ObtenerAniosEnvioReporteAnual(string claveCotizacion)
        {
            var parametros = "{" +
                "'Entidad.Nombre': '" + claveCotizacion + "'" +
                "EsVersionActual: true, " +
                "Taxonomia: 'http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_N_entry_point_2016-08-22'" +
                "}";

            var listaAnios = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", parametros).ToList().Select(envio => new LlaveValorDto(envio.Periodo.Ejercicio.ToString(), envio.Periodo.Ejercicio.ToString())).ToList();
            return listaAnios;
        }

        /// <summary>        
        /// Obtiene los trimestres de envios ICS, dado la clave de cotización y el año.
        /// </summary>
        /// <param name="anio"></param>
        /// <param name="claveCotizacion"></param>
        /// <returns></returns>
        public List<LlaveValorDto> ObtenerTrimestresICSPorEntidadYAnio(string anio, string claveCotizacion)
        {
            var parametros = "{" +
               "'Entidad.Nombre': '" + claveCotizacion + "'," +
               "EsVersionActual: true, " +
               "Taxonomia: 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05', " +
               "'Parametros.Ano': '" + anio + "'}";

            var listaAnios = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", parametros).ToList().Select(envio => new LlaveValorDto(envio.Parametros["trimestre"].ToString(), envio.Parametros["trimestre"].ToString())).ToList();

            return listaAnios;
        }
    }
}