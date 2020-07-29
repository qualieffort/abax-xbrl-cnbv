using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using AbaxXBRL.Taxonomia;
using AbaxXBRL.Taxonomia.Impl;
using AbaxXBRL.Taxonomia.Validador;
using AbaxXBRL.Taxonomia.Validador.Impl;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Service.Impl;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Newtonsoft.Json;
using Spring.Util;

namespace TestAbaxXBRL
{
    class TestPlantillaDocumentoInstanciaExcel
    {

        private bool generarVariableValorDefaultNumerico = true;

        private bool generarVariableValorDefaultNoNumerico = true;

        [TestMethod]
        public void GenerarPlantillaDeTaxonomia()
        {
            //var documentoUrl = "C:\\Users\\Antonio\\Desktop\\ifrsxbrl_COMERCI_2014-3.xbrl";
            var documentoUrl = @"C:\workspace_abax\AbaxXBRL\DocumentosInstancia\ifrs2014_t3_primer_anio_fibras.xbrl";
            //var documentoUrl = "C:\\Users\\Antonio\\Downloads\\taxonomia_millo\\ifrs2014_t3_primer_anio_2.xbrl";
            //var folderTaxonomia = "mx-ifrs-ics-es_2012-04-01";
            var folderTaxonomia = "ifrs_mx_20141205";

            var documentoInstancia = new DocumentoInstanciaXBRL();
            var manejadorErrores = new ManejadorErroresCargaTaxonomia();
            var resultadoOperacion = new ResultadoOperacionDto();
            documentoInstancia.ManejadorErrores = manejadorErrores;
            documentoInstancia.Cargar(documentoUrl);
            if (manejadorErrores.PuedeContinuar())
            {
                IGrupoValidadoresTaxonomia grupoValidadores = new GrupoValidadoresTaxonomia();
                IValidadorDocumentoInstancia validador = new ValidadorDocumentoInstancia();
                grupoValidadores.ManejadorErrores = manejadorErrores;
                grupoValidadores.DocumentoInstancia = documentoInstancia;
                grupoValidadores.AgregarValidador(validador);
                grupoValidadores.ValidarDocumento();
                if (manejadorErrores.PuedeContinuar())
                {
                    var xbrlViewerService = new XbrlViewerService();
                    var documentoInstanciaDto = xbrlViewerService.PreparaDocumentoParaVisor(documentoInstancia,null);

                    IList<string> nombresVariablesPlantilla = new List<string>();

                    foreach (var rol in documentoInstanciaDto.Taxonomia.RolesPresentacion)
                    {
                        var resultadoGeneracion = GenerarPlantillaDeRol(rol, documentoInstanciaDto, nombresVariablesPlantilla);
                        if (resultadoGeneracion.Resultado)
                        {

                            string textoDefinicion = File.ReadAllText("PlantillasTs/DefinicionTaxonomia.txt");
                            if (textoDefinicion != null)
                            {
                                var uriEntryPoint = documentoInstanciaDto.DtsDocumentoInstancia[0].HRef;
                                var nombreClase = documentoInstanciaDto.DtsDocumentoInstancia[0].HRef.Replace(":", "_").Replace("/", "_").Replace(".", "_").Replace("-", "_");
                                var declaracionVariables = "";

                                foreach (var nombreVariable in nombresVariablesPlantilla)
                                {
                                    declaracionVariables += "this.VariablesDocumentoInstancia['" + nombreVariable + "'] = '';\n";
                                }

                                textoDefinicion = textoDefinicion.Replace("#uriEntryPoint", uriEntryPoint);
                                textoDefinicion = textoDefinicion.Replace("#nombreClase", nombreClase);
                                textoDefinicion = textoDefinicion.Replace("#declaracionVariables", declaracionVariables);
                                textoDefinicion = textoDefinicion.Replace("#folderTaxonomia", folderTaxonomia);

                                File.WriteAllText(documentoInstanciaDto.DtsDocumentoInstancia[0].HRef.Replace(":", "_").Replace("/", "_") + ".ts", textoDefinicion);
                            }

                        }
                    }
                }
            }
        }

        private string GenerarPlantillaHtmlDeRol(RolDto<EstructuraFormatoDto> rolPresentacion, IDictionary<string, object> contextosRol, DocumentoInstanciaXbrlDto documentoInstancia)
        {

            var plantillaHtml = "<xbrl-contenedor-formato xbrl:rol-uri=\"{{xbrlRol.Uri}}\" orientacion=\"landscape\" modo-vista-formato=\"{{documentoInstancia.modoVistaFormato}}\">";
            plantillaHtml += "<table class=\"table table-striped b-t b-light\" xbrl:tabla-excel selector=\"td:not(:first-child)\" selector-contenedor-x=\"#contenedorFormatos\" selector-contenedor-y=\"#contenedorFormatos\" tab-index=\"1\" on-space-or-enter-key=\"onSpaceOrEnterKey(evento, x, y)\" on-after-paste=\"onAfterPaste(valorPegado, x, y)\" on-after-range-paste=\"onAfterRangePaste(valorPegado, x, y, ancho, alto)\">";
            plantillaHtml += "<thead><tr><th class=\"th-sortable\" data-toggle=\"class\">Concepto</th>";
            foreach (var idContexto in contextosRol.Keys)
            {

                var descripcionPeriodo = "";
                IDictionary<string, object> periodo = (IDictionary<string, object>)((IDictionary<string, object>)contextosRol[idContexto])["Periodo"];

                if ((int)periodo["Tipo"] == Period.Instante)
                {
                    descripcionPeriodo = (string)periodo["FechaInstante"];
                }
                else
                {
                    descripcionPeriodo = (string)periodo["FechaInicio"] + " - " + (string)periodo["FechaFin"];
                }

                plantillaHtml += "<th style=\"min-width: 130px; width: 130px;\">" + descripcionPeriodo + "</th>";
            }
            plantillaHtml += "</tr></thead><tbody>";

            plantillaHtml += GenerarFragmentoPlantillaDeEstructura(rolPresentacion.Estructuras, contextosRol, documentoInstancia, 0);

            plantillaHtml += "</tbody></table></xbrl-contenedor-formato>";

            return plantillaHtml;
        }

        private string GenerarFragmentoPlantillaDeEstructura(IList<EstructuraFormatoDto> estructuras, IDictionary<string, object> contextosRol, DocumentoInstanciaXbrlDto documentoInstancia, int indentacion)
        {
            string plantillaHtml = "";

            foreach (var estructura in estructuras)
            {
                if (documentoInstancia.Taxonomia.ConceptosPorId.ContainsKey(estructura.IdConcepto))
                {
                    var concepto = documentoInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];
                    var EsAbstracto = concepto.EsAbstracto != null ? concepto.EsAbstracto.Value : false;
                    if (!EsAbstracto && !concepto.EsHipercubo)
                    {
                        IList<string> hechos = new List<string>();
                        if (documentoInstancia.HechosPorIdConcepto.ContainsKey(concepto.Id))
                        {
                            hechos = documentoInstancia.HechosPorIdConcepto[concepto.Id];
                        }
                        if (concepto.Id.Equals("ifrs_ExplanationOfChangeInNameOfReportingEntityOrOtherMeansOfIdentificationFromEndOfPrecedingReportingPeriod"))
                        {
                            System.Console.WriteLine("cha!");
                        }
                        plantillaHtml += "<tr><td><xbrl:etiqueta-concepto xbrl:id-concepto=\"" + concepto.Id + "\" xbrl:nivel-indentacion=\"" + indentacion + "\"></td>";
                        foreach (var idContexto in contextosRol.Keys)
                        {
                            var hechoEncontrado = false;
                            string idHecho = null;
                            foreach (var idhecho in hechos)
                            {
                                var hecho = documentoInstancia.HechosPorId[idhecho];
                                if (hecho.IdContexto.Equals(idContexto))
                                {
                                    hechoEncontrado = true;
                                    idHecho = hecho.Id;
                                    break;
                                }
                            }
                            if (!hechoEncontrado)
                            {
                                plantillaHtml += "<td>&nbsp;</td>";
                            }
                            else
                            {
                                plantillaHtml += "<td><xbrl:campo-captura xbrl:id-hecho-plantilla=\"" + idHecho + "\"></xbrl:campo-captura></td>";
                            }
                        }
                        plantillaHtml += "</tr>";
                    }
                }
                if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                {
                    plantillaHtml += GenerarFragmentoPlantillaDeEstructura(estructura.SubEstructuras, contextosRol, documentoInstancia, indentacion + 1);
                }
            }

            return plantillaHtml;
        }

        private ResultadoOperacionDto GenerarPlantillaDeRol(RolDto<EstructuraFormatoDto> rolPresentacion, DocumentoInstanciaXbrlDto documentoInstancia, IList<string> nombresVariablesPlantilla)
        {
            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = true;

            IDictionary<string, object> hechosRol = new Dictionary<string, object>();
            IDictionary<string, object> contextosRol = new Dictionary<string, object>();
            IDictionary<string, object> unidadesRol = new Dictionary<string, object>();

            if (rolPresentacion == null)
            {
                resultado.Resultado = false;
            }
            else
            {
                var EsDimesional = rolPresentacion.EsDimensional != null ? rolPresentacion.EsDimensional.Value : false;

                var resultadoGeneracion = GenerarInformacionHechos(rolPresentacion.Estructuras, EsDimesional, documentoInstancia, hechosRol, contextosRol, unidadesRol, nombresVariablesPlantilla);
                if (resultadoGeneracion.Resultado)
                {
                    string textoDefinicion = File.ReadAllText("PlantillasTs/DefinicionElementos.txt");
                    if (textoDefinicion != null)
                    {
                        var rolUri = rolPresentacion.Uri;
                        var nombreClaseDefiniciones = rolPresentacion.Uri.Replace(":", "_").Replace("/", "_").Replace(".", "_").Replace("-", "_");
                        var definicionContextos = JsonConvert.SerializeObject(contextosRol, Formatting.Indented);
                        var definicionUnidades = JsonConvert.SerializeObject(unidadesRol, Formatting.Indented); ;
                        var definicionHechos = JsonConvert.SerializeObject(hechosRol, Formatting.Indented);

                        textoDefinicion = textoDefinicion.Replace("#rolUri", rolUri);
                        textoDefinicion = textoDefinicion.Replace("#nombreClaseDefiniciones", nombreClaseDefiniciones);
                        textoDefinicion = textoDefinicion.Replace("#definicionContextos", definicionContextos);
                        textoDefinicion = textoDefinicion.Replace("#definicionUnidades", definicionUnidades);
                        textoDefinicion = textoDefinicion.Replace("#definicionHechos", definicionHechos);

                        File.WriteAllText(rolPresentacion.Uri.Replace(":", "_").Replace("/", "_") + ".ts", textoDefinicion);
                        File.WriteAllText(rolPresentacion.Uri.Replace(":", "_").Replace("/", "_") + ".html", GenerarPlantillaHtmlDeRol(rolPresentacion, contextosRol, documentoInstancia));
                    }
                }
            }

            return resultado;
        }

        private ResultadoOperacionDto GenerarInformacionHechos(IList<EstructuraFormatoDto> estructuras, bool esRolDimensional, DocumentoInstanciaXbrlDto documentoInstancia, 
            IDictionary<string, object> hechosRol, IDictionary<string, object> contextosRol, IDictionary<string, object> unidadesRol, IList<string> nombresVariablesPlantilla)
        {
            var resultado = new ResultadoOperacionDto();
            resultado.Resultado = true;

            if (estructuras == null)
            {
                resultado.Resultado = false;
            }
            else
            {
                foreach (var estructura in estructuras)
                {
                    var concepto = documentoInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];
                    var EsAbstracto = concepto.EsAbstracto != null ? concepto.EsAbstracto.Value : false;
                    if (!EsAbstracto && !concepto.EsHipercubo && documentoInstancia.HechosPorIdConcepto.ContainsKey(concepto.Id))
                    {
                        var hechos = documentoInstancia.HechosPorIdConcepto[concepto.Id];
                        foreach (var idhecho in hechos)
                        {
                            var hecho = documentoInstancia.HechosPorId[idhecho];
                            var definicionHecho = CrearDefinicionHecho(esRolDimensional, documentoInstancia, hechosRol, contextosRol, unidadesRol, nombresVariablesPlantilla, hecho);
                            if (definicionHecho != null)
                            {
                                hechosRol.Add(hecho.Id, definicionHecho);
                            }
                        }
                    }
                    if (estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                    {
                        GenerarInformacionHechos(estructura.SubEstructuras, esRolDimensional, documentoInstancia, hechosRol, contextosRol, unidadesRol, nombresVariablesPlantilla);
                    }
                }
            }

            return resultado;
        }

        private IDictionary<string, object> CrearDefinicionHecho(bool esRolDimensional, DocumentoInstanciaXbrlDto documentoInstancia, 
            IDictionary<string, object> hechosRol, IDictionary<string, object> contextosRol, IDictionary<string, object> unidadesRol, 
            IList<string> nombresVariablesPlantilla, AbaxXBRLCore.Viewer.Application.Dto.HechoDto hecho)
        {
            IDictionary<string, object> definicionHecho = null;

            if (!hechosRol.ContainsKey(hecho.Id))
            {

                if (hecho.Tipo == Concept.Item)
                {

                    IDictionary<string, object> definicionContexto = null;

                    if (contextosRol.ContainsKey(hecho.IdContexto))
                    {
                        definicionContexto = (IDictionary<string, object>)contextosRol[hecho.IdContexto];
                    }
                    else
                    {
                        if (documentoInstancia.ContextosPorId.ContainsKey(hecho.IdContexto))
                        {
                            var contexto = documentoInstancia.ContextosPorId[hecho.IdContexto];
                            if (esRolDimensional || (!contexto.ContieneInformacionDimensional && !contexto.Entidad.ContieneInformacionDimensional))
                            {
                                definicionContexto = new Dictionary<string, object>();

                                definicionContexto.Add("Id", contexto.Id);

                                var definicionPeriodo = new Dictionary<string, object>();

                                definicionPeriodo.Add("Tipo", contexto.Periodo.Tipo);
                                if (contexto.Periodo.Tipo == Period.Instante)
                                {
                                    var nombreVariableFecha = "fecha_" + contexto.Periodo.FechaInstante.ToString("yyyy_MM_dd");
                                    if (!nombresVariablesPlantilla.Contains(nombreVariableFecha))
                                    {
                                        nombresVariablesPlantilla.Add(nombreVariableFecha);
                                    }
                                    definicionPeriodo.Add("FechaInstante", "#" + nombreVariableFecha);
                                    definicionPeriodo.Add("FechaInicio", "");
                                    definicionPeriodo.Add("FechaFin", "");
                                }
                                else
                                {
                                    var nombreVariableFecha = "fecha_" + contexto.Periodo.FechaInicio.ToString("yyyy_MM_dd");
                                    if (!nombresVariablesPlantilla.Contains(nombreVariableFecha))
                                    {
                                        nombresVariablesPlantilla.Add(nombreVariableFecha);
                                    }
                                    definicionPeriodo.Add("FechaInicio", "#" + nombreVariableFecha);

                                    nombreVariableFecha = "fecha_" + contexto.Periodo.FechaFin.ToString("yyyy_MM_dd");
                                    if (!nombresVariablesPlantilla.Contains(nombreVariableFecha))
                                    {
                                        nombresVariablesPlantilla.Add(nombreVariableFecha);
                                    }
                                    definicionPeriodo.Add("FechaFin", "#" + nombreVariableFecha);
                                    definicionPeriodo.Add("FechaInstante", "");
                                }

                                definicionContexto.Add("Periodo", definicionPeriodo);

                                var definicionEntidad = new Dictionary<string, object>();

                                if (!nombresVariablesPlantilla.Contains("nombreEntidad"))
                                {
                                    nombresVariablesPlantilla.Add("nombreEntidad");
                                }
                                definicionEntidad.Add("Id", "#nombreEntidad");
                                if (!nombresVariablesPlantilla.Contains("esquemaEntidad"))
                                {
                                    nombresVariablesPlantilla.Add("esquemaEntidad");
                                }
                                definicionEntidad.Add("EsquemaId", "#esquemaEntidad");
                                definicionEntidad.Add("ContieneInformacionDimensional", contexto.Entidad.ContieneInformacionDimensional);

                                if (contexto.Entidad.ContieneInformacionDimensional)
                                {
                                    definicionEntidad.Add("Segmento", contexto.Entidad.Segmento);
                                    var definicionValoresDimension = new List<Dictionary<string, object>>();
                                    foreach (var valorDimension in contexto.Entidad.ValoresDimension)
                                    {
                                        var definicionValorDimension = new Dictionary<string, object>();

                                        definicionValorDimension.Add("Explicita", valorDimension.Explicita);
                                        if (valorDimension.Explicita)
                                        {
                                            definicionValorDimension.Add("IdDimension", valorDimension.IdDimension);
                                            definicionValorDimension.Add("IdItemMiembro", valorDimension.IdItemMiembro);
                                            definicionValorDimension.Add("QNameDimension", valorDimension.QNameDimension);
                                            definicionValorDimension.Add("QNameItemMiembro", valorDimension.QNameItemMiembro);
                                            definicionValorDimension.Add("ElementoMiembroTipificado", null);
                                        }
                                        else
                                        {
                                            definicionValorDimension.Add("IdDimension", valorDimension.IdDimension);
                                            definicionValorDimension.Add("IdItemMiembro", null);
                                            definicionValorDimension.Add("QNameDimension", valorDimension.QNameDimension);
                                            definicionValorDimension.Add("QNameItemMiembro", null);
                                            definicionValorDimension.Add("ElementoMiembroTipificado", valorDimension.ElementoMiembroTipificado);
                                        }

                                        definicionValoresDimension.Add(definicionValorDimension);
                                    }
                                    definicionEntidad.Add("ValoresDimension", definicionValoresDimension.ToArray());
                                }
                                else
                                {
                                    definicionEntidad.Add("Segmento", null);
                                    definicionEntidad.Add("ValoresDimension", new object[0]);
                                }

                                definicionContexto.Add("Entidad", definicionEntidad);
                                definicionContexto.Add("ContieneInformacionDimensional", contexto.ContieneInformacionDimensional);
                                if (contexto.ContieneInformacionDimensional)
                                {
                                    definicionContexto.Add("Escenario", contexto.Escenario);
                                    var definicionValoresDimension = new List<Dictionary<string, object>>();
                                    foreach (var valorDimension in contexto.ValoresDimension)
                                    {
                                        var definicionValorDimension = new Dictionary<string, object>();

                                        definicionValorDimension.Add("Explicita", valorDimension.Explicita);
                                        if (valorDimension.Explicita)
                                        {
                                            definicionValorDimension.Add("IdDimension", valorDimension.IdDimension);
                                            definicionValorDimension.Add("IdItemMiembro", valorDimension.IdItemMiembro);
                                            definicionValorDimension.Add("QNameDimension", valorDimension.QNameDimension);
                                            definicionValorDimension.Add("QNameItemMiembro", valorDimension.QNameItemMiembro);
                                            definicionValorDimension.Add("ElementoMiembroTipificado", null);
                                        }
                                        else
                                        {
                                            definicionValorDimension.Add("IdDimension", valorDimension.IdDimension);
                                            definicionValorDimension.Add("IdItemMiembro", null);
                                            definicionValorDimension.Add("QNameDimension", valorDimension.QNameDimension);
                                            definicionValorDimension.Add("QNameItemMiembro", null);
                                            definicionValorDimension.Add("ElementoMiembroTipificado", valorDimension.ElementoMiembroTipificado);
                                        }

                                        definicionValoresDimension.Add(definicionValorDimension);
                                    }
                                    definicionContexto.Add("ValoresDimension", definicionValoresDimension.ToArray());
                                }
                                else
                                {
                                    definicionContexto.Add("Escenario", null);
                                    definicionContexto.Add("ValoresDimension", new object[0]);
                                }

                                contextosRol.Add(contexto.Id, definicionContexto);
                            }
                        }
                    }

                    if (definicionContexto != null)
                    {

                        definicionHecho = new Dictionary<string, object>();

                        definicionHecho.Add("Id", hecho.Id);
                        definicionHecho.Add("IdConcepto", hecho.IdConcepto);
                        definicionHecho.Add("IdContextoPlantilla", definicionContexto["Id"]);
                        definicionHecho.Add("Hechos", new object[0]);
                        var concepto = documentoInstancia.Taxonomia.ConceptosPorId[hecho.IdConcepto];

                        if (hecho.EsNumerico)
                        {

                            IDictionary<string, object> definicionUnidad = null;

                            if (unidadesRol.ContainsKey(hecho.IdUnidad))
                            {
                                definicionUnidad = (IDictionary<string, object>)unidadesRol[hecho.IdUnidad];
                            }
                            else
                            {
                                if (documentoInstancia.UnidadesPorId.ContainsKey(hecho.IdUnidad))
                                {
                                    var unidad = documentoInstancia.UnidadesPorId[hecho.IdUnidad];

                                    definicionUnidad = new Dictionary<string, object>();

                                    definicionUnidad.Add("Id", unidad.Id);
                                    definicionUnidad.Add("Tipo", unidad.Tipo);

                                    if (unidad.Tipo == Unit.Medida)
                                    {
                                        var definicionMedidas = new List<IDictionary<string, object>>();
                                        foreach (var medida in unidad.Medidas)
                                        {
                                            var definicionMedida = new Dictionary<string, object>();

                                            var nombreVariableMedidaNombre = "medida_" + medida.Nombre;
                                            if (!nombresVariablesPlantilla.Contains(nombreVariableMedidaNombre))
                                            {
                                                nombresVariablesPlantilla.Add(nombreVariableMedidaNombre);
                                            }
                                            definicionMedida.Add("Nombre", "#" + nombreVariableMedidaNombre);
                                            var nombreVariableMedidaEspacioNombres = "medida_" + medida.EspacioNombres.Replace(":", "_").Replace(".", "_").Replace("/", "_").Replace("-", "_");
                                            if (!nombresVariablesPlantilla.Contains(nombreVariableMedidaEspacioNombres))
                                            {
                                                nombresVariablesPlantilla.Add(nombreVariableMedidaEspacioNombres);
                                            }
                                            definicionMedida.Add("EspacioNombres", "#" + nombreVariableMedidaEspacioNombres);

                                            definicionMedidas.Add(definicionMedida);
                                        }
                                        definicionUnidad.Add("Medidas", definicionMedidas);
                                        definicionUnidad.Add("MedidasDenominador", new object[0]);
                                        definicionUnidad.Add("MedidasNumerador", new object[0]);
                                    }
                                    else
                                    {
                                        var definicionMedidas = new List<IDictionary<string, object>>();
                                        foreach (var medida in unidad.MedidasDenominador)
                                        {
                                            var definicionMedida = new Dictionary<string, object>();

                                            var nombreVariableMedidaNombre = "medida_" + medida.Nombre;
                                            if (!nombresVariablesPlantilla.Contains(nombreVariableMedidaNombre))
                                            {
                                                nombresVariablesPlantilla.Add(nombreVariableMedidaNombre);
                                            }
                                            definicionMedida.Add("Nombre", "#" + nombreVariableMedidaNombre);
                                            var nombreVariableMedidaEspacioNombres = "medida_" + medida.EspacioNombres.Replace(":", "_").Replace(".", "_").Replace("/", "_").Replace("-", "_");
                                            if (!nombresVariablesPlantilla.Contains(nombreVariableMedidaEspacioNombres))
                                            {
                                                nombresVariablesPlantilla.Add(nombreVariableMedidaEspacioNombres);
                                            }
                                            definicionMedida.Add("EspacioNombres", "#" + nombreVariableMedidaEspacioNombres);

                                            definicionMedidas.Add(definicionMedida);
                                        }
                                        definicionUnidad.Add("MedidasDenominador", definicionMedidas);

                                        definicionMedidas = new List<IDictionary<string, object>>();
                                        foreach (var medida in unidad.MedidasNumerador)
                                        {
                                            var definicionMedida = new Dictionary<string, object>();

                                            var nombreVariableMedidaNombre = "medida_" + medida.Nombre;
                                            if (!nombresVariablesPlantilla.Contains(nombreVariableMedidaNombre))
                                            {
                                                nombresVariablesPlantilla.Add(nombreVariableMedidaNombre);
                                            }
                                            definicionMedida.Add("Nombre", "#" + nombreVariableMedidaNombre);
                                            var nombreVariableMedidaEspacioNombres = "medida_" + medida.EspacioNombres.Replace(":", "_").Replace(".", "_").Replace("/", "_").Replace("-", "_");
                                            if (!nombresVariablesPlantilla.Contains(nombreVariableMedidaEspacioNombres))
                                            {
                                                nombresVariablesPlantilla.Add(nombreVariableMedidaEspacioNombres);
                                            }
                                            definicionMedida.Add("EspacioNombres", "#" + nombreVariableMedidaEspacioNombres);

                                            definicionMedidas.Add(definicionMedida);
                                        }
                                        definicionUnidad.Add("MedidasNumerador", definicionMedidas);
                                        definicionUnidad.Add("Medidas", new object[0]);
                                    }

                                    unidadesRol.Add(unidad.Id, definicionUnidad);
                                }
                            }

                            if (definicionUnidad == null)
                            {
                                //return;
                            }
                            definicionHecho.Add("IdUnidadPlantilla", definicionUnidad["Id"]);

                            if (!StringUtils.IsNullOrEmpty(hecho.Decimales))
                            {
                                definicionHecho.Add("Decimales", hecho.Decimales);
                                definicionHecho.Add("Precision", null);
                            }
                            if (!StringUtils.IsNullOrEmpty(hecho.Precision))
                            {
                                definicionHecho.Add("Precision", hecho.Precision);
                                definicionHecho.Add("Decimales", null);
                            }

                            if (!concepto.TipoDatoXbrl.Equals("http://www.xbrl.org/2003/instance:fractionItemType"))
                            {
                                if (generarVariableValorDefaultNumerico)
                                {
                                    definicionHecho.Add("Valor", "#valorDefaultNumerico");
                                    if (!nombresVariablesPlantilla.Contains("valorDefaultNumerico"))
                                    {
                                        nombresVariablesPlantilla.Add("valorDefaultNumerico");
                                    }
                                    definicionHecho.Add("ValorNumerador", null);
                                    definicionHecho.Add("ValorDenominador", null);
                                }
                            }
                            else
                            {
                                if (generarVariableValorDefaultNumerico)
                                {
                                    definicionHecho.Add("Valor", null);
                                    definicionHecho.Add("ValorDenominador", "#valorDefaultNumerico");
                                    if (!nombresVariablesPlantilla.Contains("valorDefaultNumerico"))
                                    {
                                        nombresVariablesPlantilla.Add("valorDefaultNumerico");
                                    }
                                    definicionHecho.Add("ValorNumerador", "#valorDefaultNumerico");
                                    if (!nombresVariablesPlantilla.Contains("valorDefaultNumerico"))
                                    {
                                        nombresVariablesPlantilla.Add("valorDefaultNumerico");
                                    }
                                }
                            }

                        }
                        else
                        {
                            definicionHecho.Add("IdUnidadPlantilla", null);
                            definicionHecho.Add("ValorNumerador", null);
                            definicionHecho.Add("ValorDenominador", null);
                            definicionHecho.Add("Precision", null);
                            definicionHecho.Add("Decimales", null);
                            if (generarVariableValorDefaultNoNumerico)
                            {
                                definicionHecho.Add("Valor", "#valorDefaultNoNumerico");
                                if (!nombresVariablesPlantilla.Contains("valorDefaultNoNumerico"))
                                {
                                    nombresVariablesPlantilla.Add("valorDefaultNoNumerico");
                                }
                            }
                        }
                    }
                }
                else
                {
                    definicionHecho = new Dictionary<string, object>();

                    definicionHecho.Add("Id", hecho.Id);
                    definicionHecho.Add("IdConcepto", hecho.IdConcepto);

                    var definicionHechos = new List<IDictionary<string, object>>();
                    foreach (var hechoHijo in hecho.Hechos)
                    {
                        var hechoDto = documentoInstancia.HechosPorId[hechoHijo];
                        var definicionHechoHijo = CrearDefinicionHecho(esRolDimensional, documentoInstancia, hechosRol, contextosRol, unidadesRol, nombresVariablesPlantilla, hechoDto);
                        if (definicionHechoHijo != null)
                        {
                            definicionHechos.Add(definicionHechoHijo);
                        }
                    }
                    definicionHecho.Add("Hechos", definicionHechos.ToArray());

                    definicionHecho.Add("Valor", null);
                    definicionHecho.Add("ValorDenominador", null);
                    definicionHecho.Add("ValorNumerador", null);
                    definicionHecho.Add("Precision", null);
                    definicionHecho.Add("Decimales", null);
                    definicionHecho.Add("IdUnidadPlantilla", null);
                    definicionHecho.Add("IdContextoPlantilla", null);
                }
            }

            return definicionHecho;
        }
    }
}
