using AbaxXBRLCore.Reports.Constants;
using AbaxXBRLCore.Reports.Dto;
using AbaxXBRLCore.Reports.Util;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Reports.Exporter.Impl.Rol
{
    /// <summary>
    /// Auxiliar para el procesamiento del reporte de ingresos por producto.
    /// </summary>
    public class IngresosProductoHelper
    {
        private static int contadorTMP = 0;
	
	    private static String todasLasMarcas = "TODAS";
	    private static String todosLosProductos = "TODOS";

	    private static String tituloRenglonTotal = "TOTAL";
	    private static String IdDimensionMarcas = "ifrs_mx-cor_20141205_PrincipalesMarcasEje";
	    private static String IdDimensionProductos = "ifrs_mx-cor_20141205_PrincipalesProductosOLineaDeProductosEje";
	
	    private static IList<string> elementosMiembroTipoIngreso = new List<string>()
			    {
				    "ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro",
				    "ifrs_mx-cor_20141205_IngresosNacionalesMiembro",
				    "ifrs_mx-cor_20141205_IngresosPorExportacionMiembro",
				    "ifrs_mx-cor_20141205_IngresosTotalesMiembro"
			    };

        public static IList<IngresosProductoReporteDto> generaContenidoReporte(DocumentoInstanciaXbrlDto documentoInstancia, ReporteXBRLDTO reporteXBRLDTO, int ContadorNotasAlPie, out int outContadorNotasAlPie)
        {
            contadorTMP = ContadorNotasAlPie;

		    IDictionary<String, IDictionary<String, IngresosProductoReporteDto>> marcas = new Dictionary<String, IDictionary<String, IngresosProductoReporteDto>>();
		
		    IList<IngresosProductoReporteDto> contenido = null;

		    IngresosProductoReporteDto total = new IngresosProductoReporteDto();
		    total.Total = true;
		    total.PrincipalesProductos = tituloRenglonTotal;

            String finPeriodo = ReporteXBRLUtil.obtenerValorHecho(ReportConstants.ID_FECHA_CIERRE_REPORTE_2014, documentoInstancia);
		    String inicioPeriodo = DateReporteUtil.obtenerPeriodos(finPeriodo)["acum_anio_actual"].Split(new String[]{"_"},StringSplitOptions.None)[0];
		
		    var dateInicioPeriodo = DateReporteUtil.obtenerFecha(inicioPeriodo);
		    var dateFinPeriodo = DateReporteUtil.obtenerFecha(finPeriodo);

            foreach (ContextoDto contexto in documentoInstancia.ContextosPorId.Values)
		    {
			    if (contexto.Periodo.Tipo == PeriodoDto.Instante) {
				    if (!contexto.Periodo.FechaInstante.Equals(dateFinPeriodo))
					    continue;				
			    } else {
				    if (!contexto.Periodo.FechaInicio.Equals(dateInicioPeriodo) || !contexto.Periodo.FechaFin.Equals(dateFinPeriodo))
					    continue;
			    }
			
			    if (contexto.ValoresDimension != null && contexto.ValoresDimension.Count() > 0) {
				    DimensionInfoDto dimensionMarca = obtenerPrimero(contexto.ValoresDimension, IdDimensionMarcas);
				    DimensionInfoDto dimensionProducto = obtenerPrimero(contexto.ValoresDimension, IdDimensionProductos);
				
				    if (dimensionMarca != null && dimensionProducto != null) {
					    String marca = obtenerNombreMarcaProducto(dimensionMarca.ElementoMiembroTipificado).Trim();
					    String producto = obtenerNombreMarcaProducto(dimensionProducto.ElementoMiembroTipificado).Trim();
					    String idMiembro = obtenerIdItemMiembro(contexto.ValoresDimension);
                        HechoDto hecho = documentoInstancia.HechosPorId[documentoInstancia.HechosPorIdContexto[contexto.Id][0]];
					
					    if (marca.Equals(todasLasMarcas) && producto.Equals(todosLosProductos)) {
						    actualizarIngresosProducto(total, producto, idMiembro, hecho, reporteXBRLDTO);
					    } else {
						    actualizarHechosProducto(marcas, marca, producto, idMiembro, hecho, reporteXBRLDTO);
					    }
				    }
			    }
		    }
		
		    contenido = crearIngresosProducto(marcas);
		    contenido.Add(total);

            outContadorNotasAlPie = contadorTMP;
            contadorTMP = 0;
		
		    return contenido;
	    }
	
	    private static String obtenerNombreMarcaProducto(String miembroTipificado) {
		    return ReporteXBRLUtil.eliminaEtiquetas(miembroTipificado);
	    }
	
	    private static IList<IngresosProductoReporteDto> crearIngresosProducto(IDictionary<String, IDictionary<String, IngresosProductoReporteDto>> marcas) 
        {
		    List<IngresosProductoReporteDto> contenido = new List<IngresosProductoReporteDto>();
            foreach (String idMarca in marcas.Keys) 
            {
			    IngresosProductoReporteDto marca = new IngresosProductoReporteDto();
			    marca.Marca = true;
			    marca.PrincipalesMarcas = idMarca;
			    contenido.Add(marca);
			    contenido.AddRange(marcas[idMarca].Values);
		    }
		
		    return contenido;		
	    }
	
	    private static DimensionInfoDto obtenerPrimero(IList<DimensionInfoDto> dimensiones, String IdDimension) {
		    DimensionInfoDto primero = null;
		    foreach(DimensionInfoDto dimension in  dimensiones)
		    {
			    if (dimension.IdDimension != null && dimension.IdDimension.Equals(IdDimension) && 
					    dimension.ElementoMiembroTipificado != null) {
					    //&& !dimension.ElementoMiembroTipificado.Contains(todos)) {
				    primero = dimension;
				    break;
			    }
		    }
		
		    return primero;
	    }
	
	    private static String obtenerIdItemMiembro(IList<DimensionInfoDto> dimensiones) {
            //Arrays.sort(elementosMiembroTipoIngreso);
		
		    foreach(DimensionInfoDto dimension in  dimensiones)
		    {
			    if (dimension.IdItemMiembro != null) {
				    int index = elementosMiembroTipoIngreso.IndexOf(dimension.IdItemMiembro); 
				    if (index > -1) {
					    return elementosMiembroTipoIngreso[index];
				    }
			    }
		    }
		    return null;	
	    }

        private static void actualizarHechosProducto(IDictionary<String, IDictionary<String, IngresosProductoReporteDto>> marcas, String marca, String producto, String idItemMiembro, HechoDto hecho, ReporteXBRLDTO reporteXBRLDTO)
        {
		    if (!marcas.ContainsKey(marca)) {
			    marcas.Add(marca, new Dictionary<String, IngresosProductoReporteDto>());
		    }
		
		    if (!marcas[marca].ContainsKey(producto)) {
			    marcas[marca].Add(producto, actualizarIngresosProducto(null, producto, idItemMiembro, hecho, reporteXBRLDTO));
		    } else {
			    actualizarIngresosProducto(marcas[marca][producto], producto, idItemMiembro, hecho, reporteXBRLDTO); 
		    }
	    }

        private static IngresosProductoReporteDto actualizarIngresosProducto(IngresosProductoReporteDto ingresos, String producto, String idItemMiembro, HechoDto hecho, ReporteXBRLDTO reporteXBRLDTO)
        {
		    if (ingresos == null) {
			    ingresos = new IngresosProductoReporteDto();
			    ingresos.Producto = true;
			    ingresos.PrincipalesProductos = producto;
		    }
		
		    if (idItemMiembro.Equals("ifrs_mx-cor_20141205_IngresosNacionalesMiembro")) {
                ingresos.IngresosNacionales = new HechoReporteDTO();
			    ingresos.IngresosNacionales.ValorNumerico = hecho.ValorNumerico;
                ingresos.IngresosNacionales.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                obtenerNotasAlPie(hecho, ingresos.IngresosNacionales, reporteXBRLDTO);
		    } else if (idItemMiembro.Equals("ifrs_mx-cor_20141205_IngresosPorExportacionMiembro")) {
                ingresos.IngresosExportacion = new HechoReporteDTO();
                ingresos.IngresosExportacion.ValorNumerico = hecho.ValorNumerico;
                ingresos.IngresosExportacion.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                obtenerNotasAlPie(hecho, ingresos.IngresosExportacion, reporteXBRLDTO);
		    } else if (idItemMiembro.Equals("ifrs_mx-cor_20141205_IngresosDeSubsidiariasEnElExtranjeroMiembro")) {
                ingresos.IngresosSubsidirias = new HechoReporteDTO();
                ingresos.IngresosSubsidirias.ValorNumerico = hecho.ValorNumerico;
                ingresos.IngresosSubsidirias.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                obtenerNotasAlPie(hecho, ingresos.IngresosSubsidirias, reporteXBRLDTO);
		    } else if (idItemMiembro.Equals("ifrs_mx-cor_20141205_IngresosTotalesMiembro")) {
                ingresos.IngresosTotales = new HechoReporteDTO();
                ingresos.IngresosTotales.ValorNumerico = hecho.ValorNumerico;
                ingresos.IngresosTotales.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                obtenerNotasAlPie(hecho, ingresos.IngresosTotales, reporteXBRLDTO);
		    }
		
		    return ingresos;
	    }

        private static void obtenerNotasAlPie(HechoDto hecho, HechoReporteDTO hechoReporteDTO, ReporteXBRLDTO reporteXBRLDTO)
        {
            if ((hecho.NotasAlPie != null && hecho.NotasAlPie.Count > 0) &&
                (hecho.Valor != null && !String.IsNullOrEmpty(hecho.Valor.Trim())) &&
                (hecho.NotasAlPie.Values != null && hecho.NotasAlPie.Values.Count > 0))
            {
                if (reporteXBRLDTO.NotasAlPie.Contains(hecho.Id))
                {
                    hechoReporteDTO.NotaAlPie = true;
                    hechoReporteDTO.IdHecho = hecho.Id;
                }
                else
                {
                    String textoNota = "";

                    foreach (IList<NotaAlPieDto> notas in hecho.NotasAlPie.Values)
                    {
                        foreach (NotaAlPieDto subnota in notas)
                        {
                            if (subnota.Idioma.Equals(reporteXBRLDTO.Lenguaje.ToLower()))
                            {
                                textoNota = textoNota + "<p>&mdash;&nbsp;</p>" + subnota.Valor;
                            }
                        }
                    }

                    if (String.IsNullOrEmpty(textoNota) && hecho.NotasAlPie.First().Value.ElementAt(0) != null)
                    {
                        textoNota = hecho.NotasAlPie.First().Value.ElementAt(0).Valor;
                    }

                    if (!String.IsNullOrEmpty(textoNota) && !reporteXBRLDTO.NotasAlPie.Contains(hecho.Id))
                    {
                        hechoReporteDTO.NotaAlPie = true;
                        hechoReporteDTO.IdHecho = hecho.Id;

                        contadorTMP++;
                        reporteXBRLDTO.NotasAlPie.Add(hecho.Id, new KeyValuePair<int, string>(contadorTMP, textoNota));
                    }
                }
            }
        }
    }
}
