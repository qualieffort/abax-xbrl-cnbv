using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.CellStore.Services;
using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using NPOI.SS.UserModel;
using System.IO;
using System.Threading;
using System.Globalization;
using NPOI.XSSF.UserModel;
using AbaxXBRLCore.Common.Util;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Implementación del servicio de negocio para la elaboración del reporte "Ficha Administrativa".
    /// </summary>
    public class ReporteFichaAdministrativaService : Services.IReporteFichaAdministrativaService
    {

        /// <summary>
        /// Objecto de acceso a datos en Mongo.
        /// </summary>
        public IAbaxXBRLCellStoreMongo AbaxXBRLCellStoreMongo { get; set; }

        public static String taxonomiaAnexoN = "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_N_entry_point_2016-08-22";

        public static String conceptos = "'ar_pros_AdministratorName', 'ar_pros_AdministratorFirstName', 'ar_pros_AdministratorSecondName', 'ar_pros_AdministratorParticipateInCommitteesAudit', 'ar_pros_AdministratorParticipateInCommitteesCorporatePractices', 'ar_pros_AdministratorPosition', 'ar_pros_AdministratorParticipateInCommitteesOthers'" +
               "'ar_pros_ShareholderNameCorporateName', 'ar_pros_ShareholderFirstName', 'ar_pros_ShareholderSecondName', 'ar_pros_ShareholderShareholding'," +
               "'ar_pros_ResponsiblePersonName', 'ar_pros_ResponsiblePersonPosition'," +
               "'ar_pros_NameOfTheIssuer', 'ar_pros_AdministratorDirectorshipType', 'ar_pros_TypeOfInstrument'";

        public ResultadoOperacionDto GenerarFichaAdministrativaEmisora(IDictionary<string, string> parametrosReporte)
        {

            ResultadoOperacionDto resultado = new ResultadoOperacionDto();

            parametrosReporte.TryGetValue("ticker", out var claveCotizacion);
            parametrosReporte.TryGetValue("anio", out var anio);
            var taxonomia = taxonomiaAnexoN;

            if (claveCotizacion != null && anio != null)
            {
                var parametros = "{ 'Entidad.Nombre': '" + claveCotizacion + "'," +
               "'Periodo.Ejercicio': " + anio + "," +
               "Taxonomia: '" + taxonomia + "'," +
               "EsVersionActual: true }";

                List<Envio> envios = AbaxXBRLCellStoreMongo.ConsultaElementos<Envio>("Envio", parametros).ToList();
                Envio envio = null;

                if (envios.Count > 0)
                {
                    envio = envios.ElementAt(0);
                }

                List<Hecho> hechosAProcesar = new List<Hecho>();

                if (envio != null)
                {
                    parametros = "{IdEnvio: '" + envio.IdEnvio + "', 'Concepto.IdConcepto': {$in : [" + conceptos + "] }}";
                    hechosAProcesar = AbaxXBRLCellStoreMongo.ConsultaElementos<Hecho>("Hecho", parametros).ToList();
                }

                Hecho tipoInstrumento = hechosAProcesar.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_TypeOfInstrument"));

                List<AdministradorDTO> listaHechosConsejoAdministracion = ObtenerListadoHechosPorComite(hechosAProcesar, null);
                List<AdministradorDTO> listaHechosComiteAuditoria = ObtenerListadoHechosPorComite(hechosAProcesar, "ar_pros_AdministratorParticipateInCommitteesAudit");
                List<AdministradorDTO> listaHechosComitePracticasSocietarias = ObtenerListadoHechosPorComite(hechosAProcesar, "ar_pros_AdministratorParticipateInCommitteesCorporatePractices");
                List<String[]> accionistas = ObtenerAccionistas(hechosAProcesar);
                List<String[]> principalesFuncionarios = ObtenerPrincipalesFuncionarios(hechosAProcesar);

                XSSFWorkbook workBookExportar = new XSSFWorkbook();
                var hoja = workBookExportar.CreateSheet("Ficha Emisora");
                hoja.DisplayGridlines = false;

                var denominacion = hechosAProcesar.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_NameOfTheIssuer")) != null ? ReporteUtil.removeTextHTML(hechosAProcesar.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_NameOfTheIssuer")).Valor) : "";

                EscribirSeccionDatosGenerales(hoja, null, claveCotizacion, denominacion, (tipoInstrumento != null ? tipoInstrumento.Valor: "") );
                EscribirSeccionConsejoAdministracion(hoja, listaHechosConsejoAdministracion);
                EscribirSeccionPrincipalesFuncionarios(hoja, principalesFuncionarios);
                EscribirSeccionAccionistas(hoja, accionistas);
                EscribirSeccionComiteAuditoria(hoja, listaHechosComiteAuditoria);
                EscribirSeccionComitePracticasSocietarias(hoja, listaHechosComitePracticasSocietarias);

                var memoryStreamNew = new MemoryStream();
                var currentCulture = Thread.CurrentThread.CurrentCulture;
                Thread.CurrentThread.CurrentCulture = new CultureInfo("en-US");
                workBookExportar.Write(memoryStreamNew);
                Thread.CurrentThread.CurrentCulture = currentCulture;
                resultado.InformacionExtra = memoryStreamNew.ToArray();
                resultado.Resultado = true;
            } else {
                resultado.Resultado = false;
                resultado.Mensaje = "No se localizó ningún envío de la emisora:" + claveCotizacion + " para el año:" + anio;
            }

            return resultado;
        }

        private void EscribirSeccionDatosGenerales(ISheet hoja, List<String[]> datos, String ticker, String denominacion, String instrumentos)
        {
            List<String[]> datosGenerales = new List<String[]>();
            datosGenerales.Add(new String[] { "Clave de pizarra:", ticker });
            datosGenerales.Add(new String[] { "Denominación:", denominacion });
            datosGenerales.Add(new String[] { "Instrumentos:", instrumentos });

            IFont cellFont = hoja.Workbook.CreateFont();
            cellFont.Boldweight = (short)FontBoldWeight.Bold;
            cellFont.FontHeight = 9;
            cellFont.FontName = "Soberana Sans";

            ICellStyle cellStyle = hoja.Workbook.CreateCellStyle();
            cellStyle.SetFont(cellFont);
            cellStyle.BorderBottom = BorderStyle.Medium;

            EscribirEncabezadoTabla(hoja, new String[] { "DATOS GENERALES DE LA EMISORA" }, 2, 1, cellStyle);

            IFont cellFont2 = hoja.Workbook.CreateFont();
            cellFont2.FontName = "Soberana Sans Light";
            cellFont2.FontHeight = 9;
            ICellStyle cellStyle2 = hoja.Workbook.CreateCellStyle();
            cellStyle2.SetFont(cellFont2);

            EscribirRenglon(hoja, datosGenerales, 0, cellStyle2);
        }

        private void EscribirSeccionConsejoAdministracion(ISheet hoja, List<AdministradorDTO> datos)
        {
            ICellStyle cellStyle = hoja.Workbook.CreateCellStyle();
            cellStyle.BorderBottom = BorderStyle.Medium;
            IFont cellFont = hoja.Workbook.CreateFont();
            cellFont.Boldweight = (short)FontBoldWeight.Bold;
            cellFont.FontHeight = 9;
            cellFont.FontName = "Soberana Sans";
            cellStyle.SetFont(cellFont);

            EscribirEncabezadoTabla(hoja, new String[] { "Consejo de Administración", "Participación en otros consejos", "Tipo de consejero" }, 3, 3, cellStyle);

            String[] atributos = new String[] { "NombreCompleto", "ParticipacionOtrosConsejos", "TipoConsejero" };
            IFont cellFont2 = hoja.Workbook.CreateFont();
            cellFont2.FontName = "Soberana Sans Light";
            cellFont2.FontHeight = 9;
            ICellStyle cellStyle2 = hoja.Workbook.CreateCellStyle();
            cellStyle2.SetFont(cellFont2);

            EscribirRenglonTipoComite(hoja, atributos, datos, 0, cellStyle2);
        }

        private void EscribirSeccionPrincipalesFuncionarios(ISheet hoja, List<String[]> datos)
        {
            ICellStyle cellStyle = hoja.Workbook.CreateCellStyle();
            cellStyle.BorderBottom = BorderStyle.Medium;
            IFont cellFont = hoja.Workbook.CreateFont();
            cellFont.Boldweight = (short)FontBoldWeight.Bold;
            cellFont.FontHeight = 9;
            cellFont.FontName = "Soberana Sans";
            cellStyle.SetFont(cellFont);

            EscribirEncabezadoTabla(hoja, new String[] { "PRINCIPALES FUNCIONARIOS" }, 2, 3, cellStyle);

            IFont cellFont2 = hoja.Workbook.CreateFont();
            cellFont2.FontName = "Soberana Sans Light";
            cellFont2.FontHeight = 9;
            ICellStyle cellStyle2 = hoja.Workbook.CreateCellStyle();
            cellStyle2.SetFont(cellFont2);

            EscribirRenglon(hoja, datos, 0, cellStyle2);
        }

        private void EscribirSeccionAccionistas(ISheet hoja, List<String[]> datos)
        {
            ICellStyle cellStyle = hoja.Workbook.CreateCellStyle();
            cellStyle.BorderBottom = BorderStyle.Medium;
            IFont cellFont = hoja.Workbook.CreateFont();
            cellFont.Boldweight = (short)FontBoldWeight.Bold;
            cellFont.FontHeight = 9;
            cellFont.FontName = "Soberana Sans";
            cellStyle.SetFont(cellFont);

            EscribirEncabezadoTabla(hoja, new String[] { "ACCIONISTA", "Porcentaje de la Serie:" }, 2, 3, cellStyle);

            IFont cellFont2 = hoja.Workbook.CreateFont();
            cellFont2.FontName = "Soberana Sans Light";
            cellFont2.FontHeight = 9;
            ICellStyle cellStyle2 = hoja.Workbook.CreateCellStyle();
            cellStyle2.SetFont(cellFont2);

            EscribirRenglon(hoja, datos, 0, cellStyle2);
        }

        private void EscribirSeccionComiteAuditoria(ISheet hoja, List<AdministradorDTO> datos)
        {
            ICellStyle cellStyle = hoja.Workbook.CreateCellStyle();
            cellStyle.BorderBottom = BorderStyle.Medium;
            IFont cellFont = hoja.Workbook.CreateFont();
            cellFont.Boldweight = (short)FontBoldWeight.Bold;
            cellFont.FontHeight = 9;
            cellFont.FontName = "Soberana Sans";
            cellStyle.SetFont(cellFont);

            EscribirEncabezadoTabla(hoja, new String[] { "Comité de Auditoría" }, 3, 3, cellStyle);

            String[] atributos = new String[] { "NombreCompleto", "Cargo" };
            IFont cellFont2 = hoja.Workbook.CreateFont();
            cellFont2.FontName = "Soberana Sans Light";
            cellFont2.FontHeight = 9;
            ICellStyle cellStyle2 = hoja.Workbook.CreateCellStyle();
            cellStyle2.SetFont(cellFont2);

            EscribirRenglonTipoComite(hoja, atributos, datos, 0, cellStyle2);
        }

        private void EscribirSeccionComitePracticasSocietarias(ISheet hoja, List<AdministradorDTO> datos)
        {
            ICellStyle cellStyle = hoja.Workbook.CreateCellStyle();
            cellStyle.BorderBottom = BorderStyle.Medium;
            IFont cellFont = hoja.Workbook.CreateFont();
            cellFont.Boldweight = (short)FontBoldWeight.Bold;
            cellFont.FontHeight = 9;
            cellFont.FontName = "Soberana Sans";
            cellStyle.SetFont(cellFont);

            EscribirEncabezadoTabla(hoja, new String[] { "Comité de Prácticas Societarias" }, 3, 3, cellStyle);

            String[] atributos = new String[] { "NombreCompleto", "Cargo" };
            IFont cellFont2 = hoja.Workbook.CreateFont();
            cellFont2.FontName = "Soberana Sans Light";
            cellFont2.FontHeight = 9;
            ICellStyle cellStyle2 = hoja.Workbook.CreateCellStyle();
            cellStyle2.SetFont(cellFont2);

            EscribirRenglonTipoComite(hoja, atributos, datos, 0, cellStyle2);
        }

        private void EscribirEncabezadoTabla(ISheet hoja, String[] nombresColumnas, int numeroColumnas, int lineasEnBlanco, ICellStyle cellStyle)
        {
            int numColumnasTitulos = numeroColumnas;
            int iRenglon = hoja.LastRowNum + lineasEnBlanco;

            var row = hoja.CreateRow(iRenglon);
            ICell cell = null;

            for (int iCol = 0; iCol < numColumnasTitulos; iCol++)
            {
                hoja.SetColumnWidth(iCol, 9000);
                cell = row.GetCell(iCol, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                if ((iCol + 1) <= nombresColumnas.Length)
                {
                    cell.SetCellValue(nombresColumnas[iCol]);
                }
                cell.CellStyle = cellStyle;
            }
        }

        private void EscribirRenglon(ISheet hoja, List<String[]> datos, int celda, ICellStyle cellStyle)
        {
            int iRenglon = hoja.LastRowNum + 1;
            IRow row = null;
            int celdaInicio = celda;

            foreach (var elementos in datos)
            {
                row = hoja.CreateRow(iRenglon);
                celda = celdaInicio;
                foreach (var elemento in elementos)
                {
                    var cell = row.GetCell(celda, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                    cell.SetCellValue(elemento);
                    cell.CellStyle = cellStyle;
                    celda++;
                }
                iRenglon++;
            }
        }

        private void EscribirRenglonTipoComite(ISheet hoja, String[] atributos, List<AdministradorDTO> lista, int celda, ICellStyle cellStyle)
        {
            int iRenglon = hoja.LastRowNum + 1;
            IRow row = null;
            int celdaInicio = celda;

            foreach (var admin in lista)
            {
                row = hoja.CreateRow(iRenglon);
                celda = celdaInicio;

                foreach (var atributo in atributos)
                {
                    var cell = row.GetCell(celda, MissingCellPolicy.CREATE_NULL_AS_BLANK);
                    switch (atributo)
                    {
                        case "NombreCompleto":
                            cell.SetCellValue(admin.Nombre + " " + admin.ApellidoPaterno + " " + admin.ApellidoMaterno);
                            break;
                        case "TipoConsejero":
                            cell.SetCellValue(admin.TipoConsejero);
                            break;
                        case "Cargo":
                            cell.SetCellValue(admin.Cargo);
                            break;
                        case "ParticipacionOtrosConsejos":
                            cell.SetCellValue(admin.ParticipacionOtrosConsejos);
                            break;
                    }

                    cell.CellStyle = cellStyle;
                    celda++;
                }

                iRenglon++;
            }

        }

        private List<AdministradorDTO> ObtenerListadoHechosPorComite(List<Hecho> universoHechos, String concepto)
        {

            List<Hecho> listaHechosComiteAuditoria = new List<Hecho>();

            if (universoHechos != null && universoHechos.Count > 0)
            {
                listaHechosComiteAuditoria = universoHechos.FindAll(hecho =>
                    hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorName") ||
                    hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorFirstName") ||
                    hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorSecondName") ||
                    hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorParticipateInCommitteesAudit") ||
                    hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorParticipateInCommitteesCorporatePractices") ||
                    hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorPosition") ||
                    hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorParticipateInCommitteesOthers") ||
                    hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorDirectorshipType")).ToList();

            }

            List<List<Hecho>> comiteAuditoriaPorSecuencia = listaHechosComiteAuditoria.ToList().GroupBy(hecho => hecho.MiembrosDimensionales[0].MiembroTipificado).Select(grp => grp.ToList()).ToList();

            List<AdministradorDTO> comite = new List<AdministradorDTO>();

            foreach (var listaHechos in comiteAuditoriaPorSecuencia)
            {
                AdministradorDTO administrador = new AdministradorDTO();
                administrador.Nombre = listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorName")) != null ? listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorName")).Valor : "";
                administrador.ApellidoPaterno = listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorFirstName")) != null ? listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorFirstName")).Valor : "";
                administrador.ApellidoMaterno = listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorSecondName")) != null ? listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorSecondName")).Valor : "";
                administrador.Cargo = listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorPosition")) != null ? listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorPosition")).Valor : "";
                administrador.TipoConsejero = listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorDirectorshipType")) != null ? listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorDirectorshipType")).Valor : "";
                administrador.ParticipacionOtrosConsejos = listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorParticipateInCommitteesOthers")) != null ? ReporteUtil.removeTextHTML(ReporteUtil.removeTextHTML(listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_AdministratorParticipateInCommitteesOthers")).Valor)) : "";

                if (concepto != null)
                {
                    var participaEnComite = listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals(concepto)) != null ? listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals(concepto)).Valor.ToUpper() : "";

                    if (participaEnComite.Equals("SI"))
                    {
                        comite.Add(administrador);
                    }
                }
                else
                {
                    comite.Add(administrador);
                }
            }

            return comite;
        }

        private List<String[]> ObtenerAccionistas(List<Hecho> universoHechos)
        {
            List<Hecho> listaHechosAccionistas = new List<Hecho>();

            if (universoHechos != null && universoHechos.Count > 0)
            {
                listaHechosAccionistas = universoHechos.FindAll(hecho =>
                    hecho.Concepto.IdConcepto.Equals("ar_pros_ShareholderNameCorporateName") ||
                    hecho.Concepto.IdConcepto.Equals("ar_pros_ShareholderFirstName") ||
                    hecho.Concepto.IdConcepto.Equals("ar_pros_ShareholderSecondName") ||
                    hecho.Concepto.IdConcepto.Equals("ar_pros_ShareholderShareholding")).ToList();
            }

            List<List<Hecho>> hechosAccionistasPorSecuencia = listaHechosAccionistas.ToList().GroupBy(hecho => hecho.MiembrosDimensionales[0].MiembroTipificado).Select(grp => grp.ToList()).ToList();

            List<String[]> accionistas = new List<string[]>();

            foreach (var listaHechos in hechosAccionistasPorSecuencia)
            {
                var nombre = listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ShareholderNameCorporateName")) != null ? listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ShareholderNameCorporateName")).Valor : "";
                var apellidoPaterno = listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ShareholderFirstName")) != null ? listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ShareholderFirstName")).Valor : "";
                var apellidoMaterno = listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ShareholderSecondName")) != null ? listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ShareholderSecondName")).Valor : "";
                var participacion = listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ShareholderShareholding")) != null ? listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ShareholderShareholding")).Valor : "";

                accionistas.Add(new string[] { nombre + " " + apellidoPaterno + " " + apellidoMaterno, participacion });
            }

            return accionistas;
        }

        private List<String[]> ObtenerPrincipalesFuncionarios(List<Hecho> universoHechos)
        {
            List<Hecho> listaHechosPrincipalesFuncionarios = new List<Hecho>();

            if (universoHechos != null && universoHechos.Count > 0)
            {
                listaHechosPrincipalesFuncionarios = universoHechos.FindAll(hecho =>
                    hecho.Concepto.IdConcepto.Equals("ar_pros_ResponsiblePersonName") ||
                    hecho.Concepto.IdConcepto.Equals("ar_pros_ResponsiblePersonPosition")).ToList();
            }

            List<List<Hecho>> hechosPrincipalesFuncionariosPorSecuenciaInstitucion = listaHechosPrincipalesFuncionarios.ToList().GroupBy(hecho => hecho.MiembrosDimensionales[0].MiembroTipificado).Select(grp => grp.ToList()).ToList();

            List<List<Hecho>> listaHechosPersonaResponsable = new List<List<Hecho>>();

            List<List<Hecho>> hechosPrincipalesFuncionariosPorSecuenciaPersonaResponsable = listaHechosPrincipalesFuncionarios.ToList().GroupBy(hecho => hecho.MiembrosDimensionales[1].MiembroTipificado).Select(grp => grp.ToList()).ToList();

            foreach (var listaHechosPorSecuenciaPersonaResponsable in hechosPrincipalesFuncionariosPorSecuenciaPersonaResponsable)
            {
                listaHechosPersonaResponsable.Add(listaHechosPorSecuenciaPersonaResponsable);
            }

            List<String[]> principalesFuncionarios = new List<string[]>();

            foreach (var listaHechos in listaHechosPersonaResponsable)
            {
                if (listaHechos.ElementAt(0).MiembrosDimensionales[2].IdItemMiembro.Equals("ar_pros_CeoCfoAndGeneralCounselOrTheirEquivalentsA33N11Member"))
                {
                    var nombre = (listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ResponsiblePersonName")) != null) ? listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ResponsiblePersonName")).Valor : "";
                    var cargo = (listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ResponsiblePersonPosition")) != null) ? listaHechos.Find(hecho => hecho.Concepto.IdConcepto.Equals("ar_pros_ResponsiblePersonPosition")).Valor : "";
                    principalesFuncionarios.Add(new string[] { cargo, nombre });
                }
            }

            return principalesFuncionarios;
        }

    }
}
