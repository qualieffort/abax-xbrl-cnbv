using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.CellStore.Services.Impl;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Services.Implementation;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestGenerarColeccionesReportes
    {

        private String ConectionString = "mongodb://localhost/abaxxbrl_cellstore";
        private String DatabaseName = "abaxxbrl_cellstore";

        /// <summary>
        /// Servico a probar.
        /// </summary>
        public EmpresaService EmpresaService { get; set; }

        [TestMethod]
        public void GeneraColeccionAdministradores()
        {

            var AbaxXBRLCellStoreMongo = new AbaxXBRLCellStoreMongo();
            AbaxXBRLCellStoreMongo.ConnectionString = ConectionString;
            AbaxXBRLCellStoreMongo.DataBaseName = DatabaseName;
            AbaxXBRLCellStoreMongo.Init();

            List<Administrador> listaAdministradores = new List<Administrador>();

            var listaEnvios = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", "{}");

            List<Hecho> listaHechos = new List<Hecho>();

            //long cantidadHechosAProcesar = 0;

            //if (listaEnvios.Count > 0)
            //{
            //    cantidadHechosAProcesar = AbaxXBRLCellStoreMongo.CuentaElementosColeccion("Hecho", ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, Administrador.universoIdHechos));
            //}

            //if (cantidadHechosAProcesar == 0)
            //{
            //    return;
            //}

            //var cantidad = 2000;
            //decimal cantidadVecesAEjecutar = (decimal)cantidadHechosAProcesar / 2000;
            //int cantidadVecesAEjecutarEntero = (int)cantidadVecesAEjecutar;
            //long cantidadRegistrosUltimaPagina = cantidadHechosAProcesar - (cantidadVecesAEjecutarEntero * cantidad);

            //if (cantidadVecesAEjecutar > cantidadVecesAEjecutarEntero)
            //{
            //    cantidadVecesAEjecutarEntero = cantidadVecesAEjecutarEntero + 1;
            //}

            //if (listaEnvios.Count > 0)
            //{

            //    for (var i = 1; i <= cantidadVecesAEjecutarEntero; i++)
            //    {
            //        if (listaHechos.Count == 0)
            //        {
            //            if (i == (cantidadVecesAEjecutarEntero))
            //            {
            //                listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>(ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, Administrador.universoIdHechos), null, (int)cantidadRegistrosUltimaPagina, i).ToList();
            //            }
            //            else
            //            {
            //                listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>(ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, Administrador.universoIdHechos), null, cantidad, i).ToList();
            //            }

            //        }
            //        else
            //        {
            //            if (i == (cantidadVecesAEjecutarEntero))
            //            {
            //                listaHechos.AddRange(AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>(ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, Administrador.universoIdHechos), null, (int)cantidadRegistrosUltimaPagina, i).ToList());
            //            }
            //            else
            //            {
            //                listaHechos.AddRange(AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>(ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, Administrador.universoIdHechos), null, cantidad, i).ToList());
            //            }

            //        }
            //    }

            //}

            listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementos<Hecho>("Hecho", ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, Administrador.universoIdHechos)).ToList();

            var hechosAgrupadosPorEnvio = listaHechos.GroupBy(hecho => hecho.IdEnvio);

            Dictionary<String, List<List<Hecho>>> listaDeSecuenciaPorEnvio = new Dictionary<string, List<List<Hecho>>>();

            foreach (var grupo in hechosAgrupadosPorEnvio)
            {
                var hechosAgrupadosPorSecuencia = grupo.ToList().GroupBy(hecho => hecho.MiembrosDimensionales[0].MiembroTipificado).Select(grp => grp.ToList()).ToList();

                Dictionary<String, List<List<Hecho>>> elemento = new Dictionary<string, List<List<Hecho>>>();

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

            AbaxXBRLCellStoreMongo.UpsertCollectionReportes("Administrador", listaAdministradores);

        }

        [TestMethod]
        public void GeneraColeccionPersonasResponsables()
        {

            var AbaxXBRLCellStoreMongo = new AbaxXBRLCellStoreMongo();
            AbaxXBRLCellStoreMongo.ConnectionString = ConectionString;
            AbaxXBRLCellStoreMongo.DataBaseName = DatabaseName;
            AbaxXBRLCellStoreMongo.Init();

            List<PersonaResponsable> listaAdministradores = new List<PersonaResponsable>();

            var listaEnvios = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", "{}");

            List<Hecho> listaHechos = new List<Hecho>();

            //            long cantidadHechosAProcesar = 0;

            //            if (listaEnvios.Count > 0)
            //            {
            ////                cantidadHechosAProcesar = AbaxXBRLCellStoreMongo.CuentaElementosColeccion("Hecho", "{ 'Concepto.IdConcepto':  { $in: [ 'ar_pros_ResponsiblePersonInstitution','ar_pros_ResponsiblePersonName', 'ar_pros_ResponsiblePersonPosition'  ]} , IdEnvio: { $in: [ '97238FE67F4C496B8FEC7A17B86A733A']}}");

            //                cantidadHechosAProcesar = AbaxXBRLCellStoreMongo.CuentaElementosColeccion("Hecho", ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, PersonaResponsable.universoIdHechos));
            //            }

            //            if (cantidadHechosAProcesar == 0)
            //            {
            //                return;
            //            }

            //            var cantidad = 2000;
            //            decimal cantidadVecesAEjecutar = (decimal)cantidadHechosAProcesar / 2000;
            //            int cantidadVecesAEjecutarEntero = (int)cantidadVecesAEjecutar;
            //            long cantidadRegistrosUltimaPagina = cantidadHechosAProcesar - (cantidadVecesAEjecutarEntero * cantidad);

            //            if (cantidadVecesAEjecutar > cantidadVecesAEjecutarEntero)
            //            {
            //                cantidadVecesAEjecutarEntero = cantidadVecesAEjecutarEntero + 1;
            //            }

            //            if (listaEnvios.Count > 0)
            //            {

            //                for (var i = 1; i <= cantidadVecesAEjecutarEntero; i++)
            //                {
            //                    if (listaHechos.Count == 0)
            //                    {
            //                        if (i == (cantidadVecesAEjecutarEntero))
            //                        {
            //                            listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>(ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, PersonaResponsable.universoIdHechos), null, (int)cantidadRegistrosUltimaPagina, i).ToList();
            //                            //listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>("{ 'Concepto.IdConcepto':  { $in: [ 'ar_pros_ResponsiblePersonInstitution','ar_pros_ResponsiblePersonName', 'ar_pros_ResponsiblePersonPosition'  ]} , IdEnvio: { $in: [ '97238FE67F4C496B8FEC7A17B86A733A']}}", null, (int)cantidadRegistrosUltimaPagina, i).ToList();
            //                        }
            //                        else
            //                        {
            //                            listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>(ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, PersonaResponsable.universoIdHechos), null, cantidad, i).ToList();
            //                            //listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>("{ 'Concepto.IdConcepto':  { $in: [ 'ar_pros_ResponsiblePersonInstitution','ar_pros_ResponsiblePersonName', 'ar_pros_ResponsiblePersonPosition'  ]} , IdEnvio: { $in: [ '97238FE67F4C496B8FEC7A17B86A733A']}}", null, cantidad, i).ToList();
            //                        }

            //                    }
            //                    else
            //                    {
            //                        if (i == (cantidadVecesAEjecutarEntero))
            //                        {
            //                            listaHechos.AddRange(AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>(ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, PersonaResponsable.universoIdHechos), null, (int)cantidadRegistrosUltimaPagina, i).ToList());
            //                            //listaHechos.AddRange(AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>("{ 'Concepto.IdConcepto':  { $in: [ 'ar_pros_ResponsiblePersonInstitution','ar_pros_ResponsiblePersonName', 'ar_pros_ResponsiblePersonPosition'  ]} , IdEnvio: { $in: [ '97238FE67F4C496B8FEC7A17B86A733A']}}", null, (int)cantidadRegistrosUltimaPagina, i).ToList());
            //                        }
            //                        else
            //                        {
            //                            listaHechos.AddRange(AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>(ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, PersonaResponsable.universoIdHechos), null, cantidad, i).ToList());
            //                            //listaHechos.AddRange(AbaxXBRLCellStoreMongo.ConsultaElementosColeccion<Hecho>("{ 'Concepto.IdConcepto':  { $in: [ 'ar_pros_ResponsiblePersonInstitution','ar_pros_ResponsiblePersonName', 'ar_pros_ResponsiblePersonPosition'  ]} , IdEnvio: { $in: [ '97238FE67F4C496B8FEC7A17B86A733A']}}", null, cantidad, i).ToList());
            //                        }

            //                    }
            //                }

            //            }

            listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementos<Hecho>("Hecho", ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, PersonaResponsable.universoIdHechos)).ToList();

            var hechosAgrupadosPorEnvio = listaHechos.GroupBy(hecho => hecho.IdEnvio).Select(grp => grp.ToList()).ToList();

            List<PersonaResponsable> listaPersonaResponsable = new List<PersonaResponsable>();

            foreach (var grupoHechosPorEnvio in hechosAgrupadosPorEnvio)
            {

                var listaHechosPorSecuenciaInstitucion = grupoHechosPorEnvio.ToList().GroupBy(hecho => hecho.MiembrosDimensionales[0].MiembroTipificado).Select(grp => grp.ToList()).ToList();

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

                        listaPersonaResponsable.Add(personaResponsable);
                    }

                }

            }

            AbaxXBRLCellStoreMongo.UpsertCollectionReportes("PersonaResponsable", listaPersonaResponsable);

        }

        [TestMethod]
        public void GeneraColeccionResumen4D()
        {
            var AbaxXBRLCellStoreMongo = new AbaxXBRLCellStoreMongo();
            AbaxXBRLCellStoreMongo.ConnectionString = ConectionString;
            AbaxXBRLCellStoreMongo.DataBaseName = DatabaseName;
            AbaxXBRLCellStoreMongo.Init();

            var universoTaxonomias = "'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_ics_entry_point_2014-12-05', 'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_cp_entry_point_2014-12-05'," +
                "'http://www.bmv.com.mx/taxonomy/ifrs_mx/full_ifrs_mc_mx_fibras_entry_point_2014-12-05', 'http://www.bmv.com.mx/2015-06-30/ccd/full_ifrs_ccd_entry_point_2015-06-30', " +
                "'http://www.bmv.com.mx/2015-06-30/deuda/full_ifrs_deuda_entry_point_2015-06-30'";

            var parametrosEnvio = " { 'Parametros.trimestre': '4D', Taxonomia: {$in : [" + universoTaxonomias + "] } }";

            var listaEnvios = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", parametrosEnvio);

            IList<Hecho> listaHechos = new List<Hecho>();

            if (listaEnvios.Count > 0)
            {
                listaHechos = AbaxXBRLCellStoreMongo.ConsultaElementos<Hecho>("Hecho", ReporteUtil.obtenerFiltrosHechosEnFormatoBSON(listaEnvios, ResumenInformacion4D.universoIdHechos));
            }

            List<Dictionary<Envio, IList<Hecho>>> listaHechosPorEnvio = new List<Dictionary<Envio, IList<Hecho>>>();

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
                elemento.TotalActivo = (infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")) != null) ? Decimal.Parse(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Assets")).Valor) : 0;
                elemento.TotalPasivo = (infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")) != null) ? Decimal.Parse(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Liabilities")).Valor) : 0;
                elemento.TotalCapitalContablePasivo = (infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_EquityAndLiabilities")) != null) ? Decimal.Parse(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_EquityAndLiabilities")).Valor) : 0;
                elemento.Ingreso = (infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")) != null) ? Decimal.Parse(infoEnvio.ElementAt(0).Value.ToList().Find(hecho => hecho.Concepto.IdConcepto.Equals("ifrs-full_Revenue")).Valor) : 0;

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
        }
    }
}
