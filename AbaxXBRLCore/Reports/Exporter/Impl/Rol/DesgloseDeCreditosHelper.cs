using AbaxXBRLCore.Common.Constants;
using AbaxXBRLCore.Common.Util;
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
    /// Métodos de utilería para la generación del reporte Desglose de Créditos
    /// </summary>
    public class DesgloseDeCreditosHelper
    {
     /// <param name="documentoInstancia">el documento instancia XBRL que se</param>
	 /// <returns>una lista con los elementos que componen la estructura del reporte de Desglose de Créditos.</returns>
	 /// @en caso de no poder parsear las fechas.
	 ////
        private static int contadorTMP = 0;
        public static IList<DesgloseDeCreditosReporteDto> generarContenidoDeReporte(DocumentoInstanciaXbrlDto documentoInstancia, ReporteXBRLDTO reporteXBRLDTO, int ContadorNotasAlPie, out int outContadorNotasAlPie) 
    {

		IList<DesgloseDeCreditosReporteDto> contenido = new List<DesgloseDeCreditosReporteDto>();
        var idioma = reporteXBRLDTO.Lenguaje;

        contadorTMP = ContadorNotasAlPie;

		String[] estructuraDelReporte = new String[] { "ifrs_mx-cor_20141205_BancariosSinopsis", "ifrs_mx-cor_20141205_ComercioExteriorBancarios",
				"ifrs_mx-cor_20141205_ConGarantiaBancarios", "ifrs_mx-cor_20141205_BancaComercial", "ifrs_mx-cor_20141205_OtrosBancarios",
				"ifrs_mx-cor_20141205_TotalBancarios", "ifrs_mx-cor_20141205_BursatilesYColocacionesPrivadasSinopsis",
				"ifrs_mx-cor_20141205_BursatilesListadasEnBolsaQuirografarios", "ifrs_mx-cor_20141205_BursatilesListadasEnBolsaConGarantia",
				"ifrs_mx-cor_20141205_ColocacionesPrivadasQuirografarios", "ifrs_mx-cor_20141205_ColocacionesPrivadasConGarantia",
				"ifrs_mx-cor_20141205_TotalBursatilesListadasEnBolsaYColocacionesPrivadas",
				"ifrs_mx-cor_20141205_OtrosPasivosCirculantesYNoCirculantesConCostoSinopsis",
				"ifrs_mx-cor_20141205_OtrosPasivosCirculantesYNoCirculantesConCosto", "ifrs_mx-cor_20141205_TotalOtrosPasivosCirculantesYNoCirculantesConCosto",
				"ifrs_mx-cor_20141205_ProveedoresSinopsis", "ifrs_mx-cor_20141205_Proveedores", "ifrs_mx-cor_20141205_TotalProveedores",
				"ifrs_mx-cor_20141205_OtrosPasivosCirculantesYNoCirculantesSinCostoSinopsis",
				"ifrs_mx-cor_20141205_OtrosPasivosCirculantesYNoCirculantesSinCosto", "ifrs_mx-cor_20141205_TotalOtrosPasivosCirculantesYNoCirculantesSinCosto",
				"ifrs_mx-cor_20141205_TotalDeCreditos" };

		List<HechoDto> hechos = new List<HechoDto>();
		List<String> idsHechos = new List<String>();
		IList<String> idHechosPorConcepto = null;

		foreach(String idConcepto  in  estructuraDelReporte)
		{
			if (!idConcepto.EndsWith("Sinopsis")) 
            {

                if (documentoInstancia.HechosPorIdConcepto.ContainsKey(idConcepto)) 
                {
                    idHechosPorConcepto = documentoInstancia.HechosPorIdConcepto[idConcepto];
					idsHechos.AddRange(idHechosPorConcepto);
				}
			}
		}

        if (documentoInstancia.HechosPorIdConcepto.ContainsKey("ifrs_mx-cor_20141205_InstitucionExtranjeraSiNo"))
        {
            idHechosPorConcepto = documentoInstancia.HechosPorIdConcepto["ifrs_mx-cor_20141205_InstitucionExtranjeraSiNo"];
            idsHechos.AddRange(idHechosPorConcepto);
        }

        if (documentoInstancia.HechosPorIdConcepto.ContainsKey("ifrs_mx-cor_20141205_FechaDeFirmaContrato"))
        {
            idHechosPorConcepto = documentoInstancia.HechosPorIdConcepto["ifrs_mx-cor_20141205_FechaDeFirmaContrato"];
            idsHechos.AddRange(idHechosPorConcepto);
        }

        if (documentoInstancia.HechosPorIdConcepto.ContainsKey("ifrs_mx-cor_20141205_FechaDeVencimiento"))
        {
            idHechosPorConcepto = documentoInstancia.HechosPorIdConcepto["ifrs_mx-cor_20141205_FechaDeVencimiento"];
            idsHechos.AddRange(idHechosPorConcepto);
        }

        if (documentoInstancia.HechosPorIdConcepto.ContainsKey("ifrs_mx-cor_20141205_TasaDeInteresYOSobretasa"))
        {
            idHechosPorConcepto = documentoInstancia.HechosPorIdConcepto["ifrs_mx-cor_20141205_TasaDeInteresYOSobretasa"];
            idsHechos.AddRange(idHechosPorConcepto);
        }

		IDictionary<String, List<String>> institucionesPorConcepto = new Dictionary<String, List<String>>();
		IDictionary<String, IDictionary<String, DesgloseDeCreditosReporteDto>> detalleDtoPorConcepto = new Dictionary<String, IDictionary<String, DesgloseDeCreditosReporteDto>>();
		foreach(String idHecho  in  idsHechos)
		{
            if (!documentoInstancia.HechosPorId.ContainsKey(idHecho))
            {
                LogUtil.Error("Se solicitia un hecho que no existe en el documento {idHecho:[" + idHecho + "]}");
                continue;
            }
            
            var hecho = documentoInstancia.HechosPorId[idHecho];
            if (!documentoInstancia.ContextosPorId.ContainsKey(hecho.IdContexto))
            {
                LogUtil.Error("No existe el contexto definido para el hecho {idHecho:[" + idHecho + "], idContexto:[" + hecho.IdContexto + "]}");
                continue;
            }
			var contexto = documentoInstancia.ContextosPorId[hecho.IdContexto];

			IDictionary<String, DesgloseDeCreditosReporteDto> detalleDtoPorInstitucion = null;
			if (!detalleDtoPorConcepto.ContainsKey(hecho.IdConcepto)) {
				detalleDtoPorInstitucion = new Dictionary<String, DesgloseDeCreditosReporteDto>();
				detalleDtoPorConcepto.Add(hecho.IdConcepto, detalleDtoPorInstitucion);
			} else {
				detalleDtoPorInstitucion = detalleDtoPorConcepto[hecho.IdConcepto];
			}

			hechos.Add(hecho);
			String idMiembroEjeDenominacion = "";
			String idMiembroEjeIntervaloTiempo = "";
			String miembroTipificado = "";
			foreach(DimensionInfoDto dimensionInfo  in  contexto.ValoresDimension)
			{
				if (dimensionInfo.IdDimension.Equals("ifrs_mx-cor_20141205_InstitucionEje")) 
                {
					miembroTipificado = dimensionInfo.ElementoMiembroTipificado;
					if (!detalleDtoPorInstitucion.ContainsKey(miembroTipificado)) 
                    {
						DesgloseDeCreditosReporteDto detalleInstitucionDto = new DesgloseDeCreditosReporteDto();
						detalleInstitucionDto.Titulo = ReporteXBRLUtil.eliminaEtiquetas(miembroTipificado);
						detalleDtoPorInstitucion.Add(miembroTipificado, detalleInstitucionDto);
					}
					if (!institucionesPorConcepto.ContainsKey(miembroTipificado)) {
						List<String> idsConceptos = new List<String>();
						idsConceptos.Add(hecho.IdConcepto);
						institucionesPorConcepto.Add(miembroTipificado, idsConceptos);
					} else {
						if (!institucionesPorConcepto[miembroTipificado].Contains(hecho.IdConcepto)) {
							institucionesPorConcepto[miembroTipificado].Add(hecho.IdConcepto);
						}
					}
				}
			}
			foreach(DimensionInfoDto dimensionInfo  in  contexto.ValoresDimension)
			{
				if (dimensionInfo.Explicita) {
					if (dimensionInfo.IdDimension.Equals("ifrs_mx-cor_20141205_DenominacionEje")) {
						idMiembroEjeDenominacion = dimensionInfo.IdItemMiembro;
					} else if (dimensionInfo.IdDimension.Equals("ifrs_mx-cor_20141205_IntervaloDeTiempoEje")) {
						idMiembroEjeIntervaloTiempo = dimensionInfo.IdItemMiembro;
					}
				}
			}

			if (hecho.IdConcepto.Equals("ifrs_mx-cor_20141205_InstitucionExtranjeraSiNo")) {
				if (idMiembroEjeDenominacion.Equals("ifrs_mx-cor_20141205_TotalMonedasMiembro")
						&& idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_TotalIntervalosMiembro")) 
                {
                            if (institucionesPorConcepto.ContainsKey(miembroTipificado)) 
                            {
                                foreach (String idConcepto in institucionesPorConcepto[miembroTipificado])
                                {
                                    var intitucionExtranejraAux = CommonConstants.CADENAS_VERDADERAS.Contains(hecho.Valor.Trim().ToLower());
                                    detalleDtoPorConcepto[idConcepto][miembroTipificado].InstitucionExtranjera = new HechoReporteDTO();
                                    detalleDtoPorConcepto[idConcepto][miembroTipificado].InstitucionExtranjera.Valor = intitucionExtranejraAux.ToString().ToLower();
                                    obtenerNotasAlPie(hecho, detalleDtoPorConcepto[idConcepto][miembroTipificado].InstitucionExtranjera, reporteXBRLDTO);
                                }
                            }
				}
			} else if (hecho.IdConcepto.Equals("ifrs_mx-cor_20141205_FechaDeFirmaContrato")) {
				if (idMiembroEjeDenominacion.Equals("ifrs_mx-cor_20141205_TotalMonedasMiembro")
						&& idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_TotalIntervalosMiembro")) {
                            if (institucionesPorConcepto.ContainsKey(miembroTipificado)) 
                            {
                                foreach (String idConcepto in institucionesPorConcepto[miembroTipificado])
                                {
                                    detalleDtoPorConcepto[idConcepto][miembroTipificado].FechaFirmaContrato = new HechoReporteDTO();
                                    detalleDtoPorConcepto[idConcepto][miembroTipificado].FechaFirmaContrato.Valor = hecho.Valor;
                                    obtenerNotasAlPie(hecho, detalleDtoPorConcepto[idConcepto][miembroTipificado].FechaFirmaContrato, reporteXBRLDTO);
                                }
                            }
				}
			} else if (hecho.IdConcepto.Equals("ifrs_mx-cor_20141205_FechaDeVencimiento")) {
				if (idMiembroEjeDenominacion.Equals("ifrs_mx-cor_20141205_TotalMonedasMiembro")
						&& idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_TotalIntervalosMiembro")) {
                            if (institucionesPorConcepto.ContainsKey(miembroTipificado))
                            {
                                foreach (String idConcepto in institucionesPorConcepto[miembroTipificado])
                                {
                                    detalleDtoPorConcepto[idConcepto][miembroTipificado].FechaVencimiento = new HechoReporteDTO();
                                    detalleDtoPorConcepto[idConcepto][miembroTipificado].FechaVencimiento.Valor = hecho.Valor;
                                    obtenerNotasAlPie(hecho, detalleDtoPorConcepto[idConcepto][miembroTipificado].FechaVencimiento, reporteXBRLDTO);
                                }
                            }
				}
			} else if (hecho.IdConcepto.Equals("ifrs_mx-cor_20141205_TasaDeInteresYOSobretasa")) {
				if (idMiembroEjeDenominacion.Equals("ifrs_mx-cor_20141205_TotalMonedasMiembro")
						&& idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_TotalIntervalosMiembro")) {
                            if (institucionesPorConcepto.ContainsKey(miembroTipificado))
                            {
                                foreach (String idConcepto in institucionesPorConcepto[miembroTipificado])
                                {
                                    detalleDtoPorConcepto[idConcepto][miembroTipificado].TasaInteres = new HechoReporteDTO();
                                    detalleDtoPorConcepto[idConcepto][miembroTipificado].TasaInteres.Valor = hecho.Valor;
                                    obtenerNotasAlPie(hecho, detalleDtoPorConcepto[idConcepto][miembroTipificado].TasaInteres, reporteXBRLDTO);
                                }
                            }
				}
			} else {
                if (detalleDtoPorConcepto.ContainsKey(hecho.IdConcepto) && detalleDtoPorConcepto[hecho.IdConcepto].ContainsKey(miembroTipificado))
                {
                    var elementoTipificadoPorConcepto = detalleDtoPorConcepto[hecho.IdConcepto][miembroTipificado];
                    if (idMiembroEjeDenominacion.Equals("ifrs_mx-cor_20141205_MonedaNacionalMiembro"))
                    {
                        if (idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_AnoActualMiembro"))
                        {
                            elementoTipificadoPorConcepto.MonedaNacionalAnioActual = new HechoReporteDTO();
                            elementoTipificadoPorConcepto.MonedaNacionalAnioActual.ValorNumerico = hecho.ValorNumerico;
                            elementoTipificadoPorConcepto.MonedaNacionalAnioActual.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            obtenerNotasAlPie(hecho, elementoTipificadoPorConcepto.MonedaNacionalAnioActual, reporteXBRLDTO);
                        }
                        else if (idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_Hasta1AnoMiembro"))
                        {
                            elementoTipificadoPorConcepto.MonedaNacionalUnAnio = new HechoReporteDTO();
                            elementoTipificadoPorConcepto.MonedaNacionalUnAnio.ValorNumerico = hecho.ValorNumerico;
                            elementoTipificadoPorConcepto.MonedaNacionalUnAnio.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            obtenerNotasAlPie(hecho, elementoTipificadoPorConcepto.MonedaNacionalUnAnio, reporteXBRLDTO);
                        }
                        else if (idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_Hasta2AnosMiembro"))
                        {
                            elementoTipificadoPorConcepto.MonedaNacionalDosAnio = new HechoReporteDTO();
                            elementoTipificadoPorConcepto.MonedaNacionalDosAnio.ValorNumerico = hecho.ValorNumerico;
                            elementoTipificadoPorConcepto.MonedaNacionalDosAnio.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            obtenerNotasAlPie(hecho, elementoTipificadoPorConcepto.MonedaNacionalDosAnio, reporteXBRLDTO);
                        }
                        else if (idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_Hasta3AnosMiembro"))
                        {
                            elementoTipificadoPorConcepto.MonedaNacionalTresAnio = new HechoReporteDTO();
                            elementoTipificadoPorConcepto.MonedaNacionalTresAnio.ValorNumerico = hecho.ValorNumerico;
                            elementoTipificadoPorConcepto.MonedaNacionalTresAnio.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            obtenerNotasAlPie(hecho, elementoTipificadoPorConcepto.MonedaNacionalTresAnio, reporteXBRLDTO);
                        }
                        else if (idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_Hasta4AnosMiembro"))
                        {
                            elementoTipificadoPorConcepto.MonedaNacionalCuatroAnio = new HechoReporteDTO();
                            elementoTipificadoPorConcepto.MonedaNacionalCuatroAnio.ValorNumerico = hecho.ValorNumerico;
                            elementoTipificadoPorConcepto.MonedaNacionalCuatroAnio.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            obtenerNotasAlPie(hecho, elementoTipificadoPorConcepto.MonedaNacionalCuatroAnio, reporteXBRLDTO);
                        }
                        else if (idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_Hasta5AnosOMasMiembro"))
                        {
                            elementoTipificadoPorConcepto.MonedaNacionalCincoMasAnio = new HechoReporteDTO();
                            elementoTipificadoPorConcepto.MonedaNacionalCincoMasAnio.ValorNumerico = hecho.ValorNumerico;
                            elementoTipificadoPorConcepto.MonedaNacionalCincoMasAnio.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            obtenerNotasAlPie(hecho, elementoTipificadoPorConcepto.MonedaNacionalCincoMasAnio, reporteXBRLDTO);
                        }
                    }
                    else if (idMiembroEjeDenominacion.Equals("ifrs_mx-cor_20141205_MonedaExtranjeraMiembro"))
                    {
                        if (idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_AnoActualMiembro"))
                        {
                            elementoTipificadoPorConcepto.MonedaExtranjeraAnioActual = new HechoReporteDTO();
                            elementoTipificadoPorConcepto.MonedaExtranjeraAnioActual.ValorNumerico = hecho.ValorNumerico;
                            elementoTipificadoPorConcepto.MonedaExtranjeraAnioActual.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            obtenerNotasAlPie(hecho, elementoTipificadoPorConcepto.MonedaExtranjeraAnioActual, reporteXBRLDTO);
                        }
                        else if (idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_Hasta1AnoMiembro"))
                        {
                            elementoTipificadoPorConcepto.MonedaExtranjeraUnAnio = new HechoReporteDTO();
                            elementoTipificadoPorConcepto.MonedaExtranjeraUnAnio.ValorNumerico = hecho.ValorNumerico;
                            elementoTipificadoPorConcepto.MonedaExtranjeraUnAnio.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            obtenerNotasAlPie(hecho, elementoTipificadoPorConcepto.MonedaExtranjeraUnAnio, reporteXBRLDTO);
                        }
                        else if (idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_Hasta2AnosMiembro"))
                        {
                            elementoTipificadoPorConcepto.MonedaExtranjeraDosAnio = new HechoReporteDTO();
                            elementoTipificadoPorConcepto.MonedaExtranjeraDosAnio.ValorNumerico = hecho.ValorNumerico;
                            elementoTipificadoPorConcepto.MonedaExtranjeraDosAnio.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            obtenerNotasAlPie(hecho, elementoTipificadoPorConcepto.MonedaExtranjeraDosAnio, reporteXBRLDTO);
                        }
                        else if (idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_Hasta3AnosMiembro"))
                        {
                            elementoTipificadoPorConcepto.MonedaExtranjeraTresAnio = new HechoReporteDTO();
                            elementoTipificadoPorConcepto.MonedaExtranjeraTresAnio.ValorNumerico = hecho.ValorNumerico;
                            elementoTipificadoPorConcepto.MonedaExtranjeraTresAnio.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            obtenerNotasAlPie(hecho, elementoTipificadoPorConcepto.MonedaExtranjeraTresAnio, reporteXBRLDTO);
                        }
                        else if (idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_Hasta4AnosMiembro"))
                        {
                            elementoTipificadoPorConcepto.MonedaExtranjeraCuatroAnio = new HechoReporteDTO();
                            elementoTipificadoPorConcepto.MonedaExtranjeraCuatroAnio.ValorNumerico = hecho.ValorNumerico;
                            elementoTipificadoPorConcepto.MonedaExtranjeraCuatroAnio.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            obtenerNotasAlPie(hecho, elementoTipificadoPorConcepto.MonedaExtranjeraCuatroAnio, reporteXBRLDTO);
                        }
                        else if (idMiembroEjeIntervaloTiempo.Equals("ifrs_mx-cor_20141205_Hasta5AnosOMasMiembro"))
                        {
                            elementoTipificadoPorConcepto.MonedaExtranjeraCincoMasAnio = new HechoReporteDTO();
                            elementoTipificadoPorConcepto.MonedaExtranjeraCincoMasAnio.ValorNumerico = hecho.ValorNumerico;
                            elementoTipificadoPorConcepto.MonedaExtranjeraCincoMasAnio.ValorFormateado = ReporteXBRLUtil.formatoDecimal(hecho.ValorNumerico, ReporteXBRLUtil.FORMATO_CANTIDADES_MONETARIAS);
                            obtenerNotasAlPie(hecho, elementoTipificadoPorConcepto.MonedaExtranjeraCincoMasAnio, reporteXBRLDTO);
                        }
                    }
                }
                else 
                {
                    LogUtil.Error("No se encontro el elemento detalleDtoPorConcepto: {IdConcepto:[" + hecho.IdConcepto + "], miembroTipificado:[" + miembroTipificado + "]}");
                }
			}
		}

		foreach(String idConcepto  in  estructuraDelReporte)
		{
			if (idConcepto.EndsWith("Sinopsis")) {
				DesgloseDeCreditosReporteDto detalleDto = new DesgloseDeCreditosReporteDto();
				detalleDto.Titulo = DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(documentoInstancia.Taxonomia, idConcepto,
						idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT);
				detalleDto.TituloAbstracto = true;
				contenido.Add(detalleDto);
			} else {
				
				DesgloseDeCreditosReporteDto detalleDto = new DesgloseDeCreditosReporteDto();
				
				detalleDto.Titulo = DesgloseDeCreditosHelper.obtenerEtiquetaDeConcepto(documentoInstancia.Taxonomia, idConcepto,
						idioma, ReporteXBRLUtil.ETIQUETA_DEFAULT);
				detalleDto.TituloAbstracto = true;
				contenido.Add(detalleDto);

				DesgloseDeCreditosReporteDto detalleTotalDto = null;
                if (detalleDtoPorConcepto.ContainsKey(idConcepto))
                {
                    foreach (String miembroInstitucion in detalleDtoPorConcepto[idConcepto].Keys)
                    {
                        if (detalleDtoPorConcepto[idConcepto][miembroInstitucion].Titulo.Equals("TOTAL"))
                        {
                            detalleTotalDto = detalleDtoPorConcepto[idConcepto][miembroInstitucion];
                        }
                        else
                        {
                            contenido.Add(detalleDtoPorConcepto[idConcepto][miembroInstitucion]);
                        }
                    }
                }
                
				if(detalleTotalDto != null) {
					detalleTotalDto.Total = true;
					contenido.Add(detalleTotalDto);
				}
			}
		}

        outContadorNotasAlPie = contadorTMP;
        contadorTMP = 0;

		return contenido;
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

    /// <summary>
    /// Obtiene la etiqueta de un concepto de una taxonomía para el idioma solicitado. 
    /// <summary>
	/// <param name="taxonomia">la taxonomía XBRL en la cual se define el concepto.</param>
	/// <param name="idConcepto">el identificador del concepto a consultar.</param>
	/// <param name="idioma">el identificador del idioma a consultar.</param>
	/// <param name="rol">el rol de la etiqueta a consultar.</param>
	/// <returns>la etiqueta que corresponde al concepto en el idioma solicitado.</returns>
	public static String obtenerEtiquetaDeConcepto(TaxonomiaDto taxonomia, String idConcepto, String idioma, String rol) {
		String valor = null;
		if (taxonomia != null) {

            if (taxonomia.ConceptosPorId.ContainsKey(idConcepto))
            {
                ConceptoDto concepto = taxonomia.ConceptosPorId[idConcepto];
                if (concepto.Etiquetas.ContainsKey(idioma) && concepto.Etiquetas[idioma].ContainsKey(rol))
                {
                    EtiquetaDto etiqueta = concepto.Etiquetas[idioma][rol];
					valor = etiqueta.Valor;
				}
			}
		}
		return valor;
	}
    }
}
