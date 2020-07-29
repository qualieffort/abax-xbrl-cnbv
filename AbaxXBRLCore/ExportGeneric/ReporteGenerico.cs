using AbaxXBRL.Taxonomia.Linkbases;
using AbaxXBRL.Util;
using AbaxXBRLCore.Common.Util;
using AbaxXBRLCore.ExportGeneric;
using AbaxXBRLCore.Viewer.Application.Dto;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace AbaxXBRLCore.Export
{
  public class ReporteGenerico
    {
        /// <summary>
        ///  Procesa un objeto "DocumentoInstanciaXbrlDto" para obtener una estructura procesada para la generacion del reporte
        /// </summary>
        /// <param name="documentoInstanciaXbrlDto"> Modelo DTO </param>
        /// <param name="idioma">Idioma de presentación</param>
        /// <param name="agruparPorUnidad">Por default es "True", permite agrupar por Moneda, si es "False" agrupa por Entidad </param>
        /// <returns> Estructura  con los filtros establecidos y un listado de conceptos por rol   </returns>
        public EstructuraReporteGenerico GeneracionReporteGenerico(DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto, string idioma = "es", bool agruparPorUnidad = true)
        {
            EstructuraReporteGenerico estructuraReporteGenerico = new EstructuraReporteGenerico(); 
            List<EstructuraRolReporte> estructuraReporteGenericoPorRol = new List<EstructuraRolReporte>();
            foreach (RolDto<EstructuraFormatoDto> rol in documentoInstanciaXbrlDto.Taxonomia.RolesPresentacion)
            {
                var listaDeConceptosEnHiperCubos = ObtenerListaDeHiperCubosPorRol(documentoInstanciaXbrlDto.Taxonomia, rol.Uri);
                estructuraReporteGenericoPorRol.Add(listaDeConceptosPorRol(documentoInstanciaXbrlDto, rol, listaDeConceptosEnHiperCubos, idioma, agruparPorUnidad));
            }
            estructuraReporteGenerico.ReporteGenericoPorRol = estructuraReporteGenericoPorRol;
            estructuraReporteGenerico.Idioma = idioma;
            estructuraReporteGenerico.AgruparPorUnidad = agruparPorUnidad;
            return estructuraReporteGenerico;
        }




        public static List<EstructuraColumnaReporte> OrdenarFechaDeColumnas(List<EstructuraColumnaReporte> estructuraDeColumnas)
        {
            List<EstructuraColumnaReporte> listaEstructuraDeColumnas = new List<EstructuraColumnaReporte>();
            List<DateTime> listaFechas = new List<DateTime>();

            var ordenamientoFechas = from l in estructuraDeColumnas
                                     orderby l.FechaInstante descending, l.FechaInicio descending
                                     select l;

            foreach (var elementoOrdenado in ordenamientoFechas) {
                EstructuraColumnaReporte estructuraColumnaReporte = new EstructuraColumnaReporte();

                estructuraColumnaReporte.Entidad = elementoOrdenado.Entidad;
                estructuraColumnaReporte.EsquemaEntidad = elementoOrdenado.EsquemaEntidad;
                estructuraColumnaReporte.FechaFin = elementoOrdenado.FechaFin;
                estructuraColumnaReporte.FechaInicio = elementoOrdenado.FechaInicio;
                estructuraColumnaReporte.FechaInstante = elementoOrdenado.FechaInstante;
                estructuraColumnaReporte.Moneda = elementoOrdenado.Moneda;
                estructuraColumnaReporte.MonedaId = elementoOrdenado.MonedaId;
                estructuraColumnaReporte.NombreColumna = elementoOrdenado.NombreColumna;
                estructuraColumnaReporte.TipoDePeriodo = elementoOrdenado.TipoDePeriodo;

                listaEstructuraDeColumnas.Add(estructuraColumnaReporte);
            }
            return listaEstructuraDeColumnas;
        }


        /// <summary>
        /// Genera las columnas para el reporte y un listado de los conceptos procesados con o sin dimension
        /// </summary>
        /// <param name="documentoInstanciaXbrlDto">Modelo DTO</param>
        /// <param name="rolActual">rol a procesar</param>
        /// <param name="listaDeConceptosEnHiperCubos">lista de conceptos que el rol a procesar tiene en hipercubos</param>
        /// <param name="idioma">Idioma de presentación</param>
        /// <returns></returns>
        private EstructuraRolReporte listaDeConceptosPorRol(DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto,
            RolDto<EstructuraFormatoDto> rolActual, IEnumerable<string> listaDeConceptosEnHiperCubos, string idioma, bool agruparPorUnidad)
        {
            int indentacion = 0;
            var listaDeConceptos = new List<EstructuraConceptoReporte>();
            var estructuraReporteGenericoPorRol = new EstructuraRolReporte();

            estructuraReporteGenericoPorRol.RolUri = rolActual.Uri;
            estructuraReporteGenericoPorRol.Rol = rolActual.Nombre;

            // llenar columnas del reporte
            estructuraReporteGenericoPorRol.ColumnasDelReporte = new List<EstructuraColumnaReporte>();

            var conceptosIdPermitidos = UtilAbax.ObtenerListaConceptosDeRolPresentacion(documentoInstanciaXbrlDto.Taxonomia, rolActual.Uri)
                .Where(x =>! ((x.EsDimension!=null?x.EsDimension.Value:false) || x.EsHipercubo  || (x.EsMiembroDimension!=null?x.EsMiembroDimension.Value:false) ))
                .Select(x => x.Id);

            foreach (var conceptoId in conceptosIdPermitidos)
            {
                if (documentoInstanciaXbrlDto.HechosPorIdConcepto.ContainsKey(conceptoId))
                {
                    foreach (var idHecho in documentoInstanciaXbrlDto.HechosPorIdConcepto[conceptoId])
                    {
                        var hecho = documentoInstanciaXbrlDto.HechosPorId[idHecho];

                        if (hecho.IdContexto != null) {
                            var contexto = documentoInstanciaXbrlDto.ContextosPorId[hecho.IdContexto];
                            //Verificar si este hecho cabe en alguna de las columnas
                            var columnaYaExiste = false;
                            foreach (var columna in estructuraReporteGenericoPorRol.ColumnasDelReporte)
                            {
                                if(HechoPerteneceAColumna(hecho, documentoInstanciaXbrlDto , columna, agruparPorUnidad)){
                                    columnaYaExiste = true;
                                    break;
                                }
                            }
                            if (!columnaYaExiste) {
                                estructuraReporteGenericoPorRol.ColumnasDelReporte.Add(CrearColumnaEncabezado(hecho, documentoInstanciaXbrlDto, agruparPorUnidad));   
                            }
                        }
                    }
                }
            }
            
            
            if (estructuraReporteGenericoPorRol.ColumnasDelReporte.Count > 1)
            {
                estructuraReporteGenericoPorRol.ColumnasDelReporte = OrdenarFechaDeColumnas(estructuraReporteGenericoPorRol.ColumnasDelReporte);
            }
            Debug.WriteLine(estructuraReporteGenericoPorRol.Rol);
            foreach (var col in estructuraReporteGenericoPorRol.ColumnasDelReporte)
            {
                Debug.WriteLine(col.Entidad + "," + DateUtil.ToStandarString(col.FechaInicio) + " - " + DateUtil.ToStandarString(col.FechaFin) + " - " + DateUtil.ToStandarString(col.FechaInstante) + "," + 
                    col.Moneda
                    );
            }

            if (documentoInstanciaXbrlDto.Taxonomia != null && documentoInstanciaXbrlDto.Taxonomia.RolesPresentacion != null)
            {
                foreach (var estructura in rolActual.Estructuras) 
                {
                    AgregarNodoEstructura(documentoInstanciaXbrlDto, rolActual.Uri, listaDeConceptos, estructura, documentoInstanciaXbrlDto.Taxonomia, idioma, indentacion, estructuraReporteGenericoPorRol.ColumnasDelReporte, listaDeConceptosEnHiperCubos, agruparPorUnidad, conceptosIdPermitidos);
                }
            }
            estructuraReporteGenericoPorRol.Conceptos = listaDeConceptos;
            return estructuraReporteGenericoPorRol;
        }

        /// <summary>
        /// Crea un objeto de columna encabezado de reporte en base a los datos del hecho enviado como parámetro
        /// </summary>
        /// <param name="hecho">Hecho cuyos datos se usan como entrada para crear la columna</param>
        /// <param name="documentoInstanciaXbrlDto">Documento de instancia del hecho</param>
        /// <param name="agruparPorUnidad">Indica si la unidad se considera para agrupar o diferenciar columnas</param>
        /// <returns>La nueva estructura de columnas creada</returns>
        private EstructuraColumnaReporte CrearColumnaEncabezado(HechoDto hecho, DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto, bool agruparPorUnidad)
        {
            var contexto = documentoInstanciaXbrlDto.ContextosPorId[hecho.IdContexto];

            EstructuraColumnaReporte columnasEncabezado = new EstructuraColumnaReporte();
            columnasEncabezado.FechaInicio = contexto.Periodo.FechaInicio;
            columnasEncabezado.FechaFin = contexto.Periodo.FechaFin;
            columnasEncabezado.FechaInstante = contexto.Periodo.FechaInstante;
            columnasEncabezado.Entidad = contexto.Entidad.Id;
            columnasEncabezado.EsquemaEntidad = contexto.Entidad.EsquemaId;
            columnasEncabezado.TipoDePeriodo = contexto.Periodo.Tipo;
            if (hecho.IdUnidad != null && documentoInstanciaXbrlDto.UnidadesPorId.ContainsKey(hecho.IdUnidad) && agruparPorUnidad)
            {
                var unidad = documentoInstanciaXbrlDto.UnidadesPorId[hecho.IdUnidad];
                var numeradores = new List<MedidaDto>();
                var denominadores = new List<MedidaDto>();
                if (unidad.Medidas != null)
                {
                    numeradores.AddRange(unidad.Medidas);
                }
                if (unidad.MedidasNumerador != null)
                {
                    numeradores.AddRange(unidad.MedidasNumerador);
                }
                if (unidad.MedidasDenominador != null)
                {
                    denominadores.AddRange(unidad.MedidasDenominador);
                }
                columnasEncabezado.MonedaId = hecho.IdUnidad;
                columnasEncabezado.Moneda = "";
                int idx = 0;
                foreach (var numerador in numeradores)
                {
                    if (idx > 0)
                    {
                        columnasEncabezado.Moneda += ", ";
                    }
                    columnasEncabezado.Moneda += numerador.Nombre;
                    idx++;
                }
                if (denominadores.Count > 0)
                {
                    columnasEncabezado.Moneda += " / ";
                }
                idx = 0;
                foreach (var denom in denominadores)
                {
                    if (idx > 0)
                    {
                        columnasEncabezado.Moneda += ", ";
                    }
                    columnasEncabezado.Moneda += denom.Nombre;
                    idx++;
                }
            }
            return columnasEncabezado;
        }

        /// <summary>
        /// Verifica si un hecho, por los criterios de entidad, fechas y moneda pertenece a una de las columnasde del reporte
        /// </summary>
        /// <param name="hecho">Hecho a comparar</param>
        /// <param name="columna">Columna que se está comparando actualmente</param>
        /// <param name="agruparPorUnidad">Indica si se desea considerar unidad para generar los grupos de columnas</param>
        /// <returns>True si el hecho pertenece a la columna, false en otro caso</returns>
        private bool HechoPerteneceAColumna(HechoDto hecho,DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto, EstructuraColumnaReporte columna, bool agruparPorUnidad)
        {
            var contexto = documentoInstanciaXbrlDto.ContextosPorId[hecho.IdContexto];
            var unidad = hecho.IdUnidad != null ? documentoInstanciaXbrlDto.UnidadesPorId[hecho.IdUnidad] : (UnidadDto)null;

            if (!columna.Entidad.Equals(contexto.Entidad.Id)) 
            {
                return false;
            }

            if (!(columna.FechaInicio.Equals(contexto.Periodo.FechaInicio) && columna.FechaFin.Equals(contexto.Periodo.FechaFin) && 
                columna.FechaInstante.Equals(contexto.Periodo.FechaInstante)))
            {
                return false;
            }

            if (agruparPorUnidad) {

                if (String.IsNullOrEmpty(columna.MonedaId)) 
                {
                    if (unidad != null)
                    {
                        return false;
                    }
                }
                else
                {
                    if (unidad == null)
                    {
                        return false;
                    }
                    //Si columna tiene unidad y hecho tiene unidad, verificar si son compatibles
                    var unidadColumna = documentoInstanciaXbrlDto.UnidadesPorId[columna.MonedaId];
                    if (!unidad.EsEquivalente(unidadColumna)) {
                        return false;
                    }
                }
            }
            return true;
        }


        /// <summary>
        /// Metodo recursivo que procesa los conceptos del rol actual y genera un listado de conceptos con sus hechos y dimensiones 
        /// </summary>
        /// <param name="documentoInstanciaXbrlDto">Modelo DTO</param>
        /// <param name="uriRolPresentacion">uri del rol a procesar</param>
        /// <param name="listaConceptos">lista que contiene los conceptos procesados</param>
        /// <param name="estructura">contiene el concepto a procesar</param>
        /// <param name="taxonomia">Objeto de taxonomía utilizado para obtener etiquetas de presentación</param>
        /// <param name="idioma">Idioma de presentación</param>
        /// <param name="indentacion">Nivel del concepto</param>
        /// <param name="columnas">lista de columnas que tiene el reporte</param>
        /// <param name="listaDeConceptosEnHiperCubos">lista de conceptos que el rol a procesar tiene en hipercubos</param>
        private void AgregarNodoEstructura(DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto, string uriRolPresentacion, List<EstructuraConceptoReporte> listaConceptos, EstructuraFormatoDto estructura,
            TaxonomiaDto taxonomia, string idioma, int indentacion, List<EstructuraColumnaReporte> columnas, IEnumerable<string> listaDeConceptosEnHiperCubos, bool agruparPorUnidad, IEnumerable<string> conceptosIdPermitidos) 
        {
            if (!conceptosIdPermitidos.Contains(estructura.IdConcepto)) return;

            string nombreconcepto = string.Empty;           
            var concepto = taxonomia.ConceptosPorId[estructura.IdConcepto];

            if (string.IsNullOrEmpty(estructura.RolEtiquetaPreferido))
                nombreconcepto = UtilAbax.ObtenerEtiqueta(taxonomia, estructura.IdConcepto, Etiqueta.RolEtiqueta, idioma);
            else
                nombreconcepto = UtilAbax.ObtenerEtiqueta(taxonomia, estructura.IdConcepto,
                    estructura.RolEtiquetaPreferido, idioma);

            if (listaDeConceptosEnHiperCubos.Contains(estructura.IdConcepto))
            {
                IList<EstructuraConceptoReporte> conceptosConDimension = BuscarConceptosConDimensiones(taxonomia, documentoInstanciaXbrlDto, concepto, uriRolPresentacion, idioma, columnas, nombreconcepto, indentacion, agruparPorUnidad);
                
                if (conceptosConDimension.Any())
                {
                    listaConceptos.AddRange(conceptosConDimension);
                }
            }
            else {
                var hechoSinDimension = ObtenerPrimerHechoSinDimension(documentoInstanciaXbrlDto, concepto, uriRolPresentacion, idioma, columnas, agruparPorUnidad);

                listaConceptos.Add(new EstructuraConceptoReporte()
                {
                    ConceptoId = concepto.Id,
                    NombreConcepto = nombreconcepto,
                    NivelIndentacion = indentacion,
                    EsAbstracto = concepto.EsAbstracto,
                    Hechos = hechoSinDimension,
                    Dimensiones = new Dictionary<string,EstructuraDimensionReporte>()
                });
            }
            
            if (estructura.SubEstructuras != null)
            {
                indentacion++;
                foreach (var subEstructura in estructura.SubEstructuras)
                    AgregarNodoEstructura(documentoInstanciaXbrlDto, uriRolPresentacion, listaConceptos, subEstructura, taxonomia, idioma, indentacion, columnas, listaDeConceptosEnHiperCubos, agruparPorUnidad, conceptosIdPermitidos);
                indentacion--;
            }
        }

        /// <summary>
        /// Genera un listado de hechos con relacion al concepto sin dimension
        /// </summary>
        /// <param name="documentoInstanciaXbrlDto">Modelo DTO</param>
        /// <param name="concepto">concepto a procesar</param>
        /// <param name="uriRolPresentacion">uri del rol que se esta procesando</param>
        /// <param name="idioma">Idioma de presentación</param>
        /// <param name="columnas">lista de columnas que tiene el reporte</param>
        /// <returns></returns>
        private EstructuraHechoReporte[] ObtenerPrimerHechoSinDimension(DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto, ConceptoDto concepto, string uriRolPresentacion, string idioma, List<EstructuraColumnaReporte> columnas, bool agruparPorUnidad)
        {
            EstructuraHechoReporte[] estructuraHecho = new EstructuraHechoReporte[columnas.Count()];
            if (documentoInstanciaXbrlDto.HechosPorIdConcepto.ContainsKey(concepto.Id))
            {
                int valoresDeHechosEncontrados = 0;
                var hechosIdSinDimension = documentoInstanciaXbrlDto.HechosPorIdConcepto[concepto.Id];
                foreach (var hecho in documentoInstanciaXbrlDto.HechosPorId.Where(x=>hechosIdSinDimension.Contains(x.Key)).Select(x=>x.Value))
                {
                    if (hecho.IdContexto != null && documentoInstanciaXbrlDto.ContextosPorId.ContainsKey(hecho.IdContexto)) {
                        var ctx = documentoInstanciaXbrlDto.ContextosPorId[hecho.IdContexto];
                        if ((ctx.ValoresDimension != null && ctx.ValoresDimension.Count > 0) || (ctx.Entidad.ValoresDimension != null && ctx.Entidad.ValoresDimension.Count > 0)) {
                            continue;
                        }
                    }
                    if (valoresDeHechosEncontrados == columnas.Count) break; ;
                    int posicion = BuscarIndexColumna(documentoInstanciaXbrlDto, columnas, hecho, agruparPorUnidad);
                    if (posicion != -1)
                    {
                        estructuraHecho[posicion] = new EstructuraHechoReporte();
                        estructuraHecho[posicion].HechoId = hecho.Id;
                        estructuraHecho[posicion].Valor = hecho.Valor;
                        estructuraHecho[posicion].ValorNumerico = hecho.ValorNumerico;
                        estructuraHecho[posicion].ValorRedondeado = hecho.ValorRedondeado;
                        estructuraHecho[posicion].EsNumerico = hecho.EsNumerico;
                        valoresDeHechosEncontrados++;
                    }
                }
            }
            return estructuraHecho;
        }

        /// <summary>
        /// Busca el indice de la relación periodo del hecho con las columnas generadas 
        /// </summary>
        /// <param name="documentoInstanciaXbrlDto">Modelo DTO</param>
        /// <param name="columnas">lista de columnas que tiene el reporte</param>
        /// <param name="hecho">objeto hechoDTO </param>
        /// <returns></returns>
        private int BuscarIndexColumna(DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto, List<EstructuraColumnaReporte> columnas, HechoDto hecho, bool agruparPorUnidad)
        {
            var contexto = documentoInstanciaXbrlDto.ContextosPorId[hecho.IdContexto];
            for (int idCol = 0; idCol < columnas.Count; idCol++)
            {
                var columna = columnas[idCol];
                var unidadHecho = hecho.IdUnidad != null ? documentoInstanciaXbrlDto.UnidadesPorId[hecho.IdUnidad] : (UnidadDto)null;
                
                if (columna.Entidad.Equals(contexto.Entidad.Id))
                {
                    if ((columna.FechaInicio.Equals(contexto.Periodo.FechaInicio) && 
                        columna.FechaFin.Equals(contexto.Periodo.FechaFin) &&
                        columna.FechaInstante.Equals(contexto.Periodo.FechaInstante)))
                    {
                        if (agruparPorUnidad)
                        {
                            if (String.IsNullOrEmpty(columna.MonedaId))
                            {
                                if (unidadHecho == null)
                                {
                                    return idCol;
                                }
                            }
                            else
                            {
                                 //Si columna tiene unidad y hecho tiene unidad, verificar si son compatibles
                                if (unidadHecho != null && unidadHecho.EsEquivalente(documentoInstanciaXbrlDto.UnidadesPorId[columna.MonedaId]))
                                {
                                    return idCol;
                                }
                            }
                        }
                        else
                        {
                            return idCol;
                        }
                    }
                }
            }
            return -1;
        }

        /// <summary>
        /// Genera un listado de los conceptos con la relacion de sus dimensiones
        /// </summary>
        /// <param name="taxonomia">Objeto de taxonomía utilizado para obtener etiquetas de presentación</param>
        /// <param name="documentoInstanciaXbrlDto"></param>
        /// <param name="concepto">concepto a procesar</param>
        /// <param name="uriRolPresentacion"></param>
        /// <param name="idioma">Idioma de presentación</param>
        /// <param name="columnas">lista de columnas que tiene el reporte</param>
        /// <param name="nombreconcepto">nombre del concepto que se mostrar en el reporte</param>
        /// <param name="indentacion">Nivel del concepto</param>
        /// <returns></returns>
        private IList<EstructuraConceptoReporte> BuscarConceptosConDimensiones(TaxonomiaDto taxonomia, DocumentoInstanciaXbrlDto documentoInstanciaXbrlDto,
                    ConceptoDto concepto, string uriRolPresentacion, string idioma, List<EstructuraColumnaReporte> columnas, string nombreconcepto, int indentacion, bool agruparPorUnidad)
        {
            List<EstructuraConceptoReporte> listaDeEstructurasConceptos = new List<EstructuraConceptoReporte>();

            if (!(concepto.EsAbstracto != null && concepto.EsAbstracto.Value))
            {
                var hechoIdsEncontrados = new List<string>();
                if (documentoInstanciaXbrlDto.HechosPorIdConcepto.ContainsKey(concepto.Id))
                {
                    hechoIdsEncontrados.AddRange(documentoInstanciaXbrlDto.HechosPorIdConcepto[concepto.Id]);
                }
                if (hechoIdsEncontrados.Count() == 0)
                {
                    var combinacionDimensiones = new Dictionary<string, EstructuraDimensionReporte>();
                    listaDeEstructurasConceptos.Add(new EstructuraConceptoReporte()
                    {
                        ConceptoId = concepto.Id,
                        NombreConcepto = nombreconcepto,
                        NivelIndentacion = indentacion,
                        EsAbstracto = concepto.EsAbstracto,
                        Hechos = new EstructuraHechoReporte[columnas.Count],
                        Dimensiones = combinacionDimensiones
                    });
                    return listaDeEstructurasConceptos;
                }
                else
                {
                    foreach (var hechoId in hechoIdsEncontrados)
                    {
                        HechoDto hecho = documentoInstanciaXbrlDto.HechosPorId[hechoId];
                        List<DimensionInfoDto> listaDimensionesTotales = new List<DimensionInfoDto>();
                        ContextoDto contexto = documentoInstanciaXbrlDto.ContextosPorId[hecho.IdContexto];
                        if (contexto.ValoresDimension != null)
                            listaDimensionesTotales.AddRange(contexto.ValoresDimension);

                        if (contexto.Entidad.ValoresDimension != null)
                            listaDimensionesTotales.AddRange(contexto.Entidad.ValoresDimension);

                        AgregarDimensionesDefault(listaDimensionesTotales,taxonomia,concepto.Id,uriRolPresentacion);

                        EstructuraConceptoReporte estructuraEncontrada = null;
                        var estructuraDimensionesBuscada = CrearEstructuraDimensiones(listaDimensionesTotales, taxonomia,idioma);
                        foreach (var estConceptoActual in listaDeEstructurasConceptos)
                        {
                            if (EsMismaCombinacionDeDimensiones(estConceptoActual.Dimensiones, estructuraDimensionesBuscada))
                            {
                                estructuraEncontrada = estConceptoActual;
                                break;
                            }
                        }
                        //Si no se encontró la combinación de dimensiones, crear nueva
                        if (estructuraEncontrada == null)
                        {
                            estructuraEncontrada = new EstructuraConceptoReporte()
                            {
                                ConceptoId = concepto.Id,
                                NombreConcepto = nombreconcepto,
                                NivelIndentacion = indentacion,
                                EsAbstracto = concepto.EsAbstracto,
                                Hechos = new EstructuraHechoReporte[columnas.Count],
                                Dimensiones = estructuraDimensionesBuscada
                            };
                            listaDeEstructurasConceptos.Add(estructuraEncontrada);
                        }

                        int posicion = BuscarIndexColumna(documentoInstanciaXbrlDto, columnas, hecho, agruparPorUnidad);
                        if (posicion != -1)
                        {
                            estructuraEncontrada.Hechos[posicion] = new EstructuraHechoReporte();
                            estructuraEncontrada.Hechos[posicion].HechoId = hecho.Id;
                            estructuraEncontrada.Hechos[posicion].Valor = hecho.Valor;
                            estructuraEncontrada.Hechos[posicion].ValorNumerico = hecho.ValorNumerico;
                            estructuraEncontrada.Hechos[posicion].ValorRedondeado = hecho.ValorRedondeado;
                            estructuraEncontrada.Hechos[posicion].EsNumerico = hecho.EsNumerico;
                        }
                    }
                }
            }
            else {
                listaDeEstructurasConceptos.Add(new EstructuraConceptoReporte()
                {
                    ConceptoId = concepto.Id,
                    NombreConcepto = nombreconcepto,
                    NivelIndentacion = indentacion,
                    EsAbstracto = concepto.EsAbstracto,
                    Hechos = new EstructuraHechoReporte[columnas.Count],
                    Dimensiones = new Dictionary<string,EstructuraDimensionReporte>()
                });
            }

            return listaDeEstructurasConceptos;
        }

        /// <summary>
        /// Agrega las dimensiones default a la lista de dimensiones del concepto , en caso de que no cuenta con esa dimensión
        /// declarada y el hipercubo declarado en el rol actual cuenta con dimensión default
        /// </summary>
        /// <param name="listaDimensionesTotales">Lista actual de dimensiones totales</param>
        /// <param name="taxonomia">Taxonomía procesada actualmente</param>
        /// <param name="idConcepto">Identificador del concepto</param>
        /// <param name="uriRolPresentacion">URI del rol de presentación actualmente procesado</param>
        private void AgregarDimensionesDefault(List<DimensionInfoDto> listaDimensionesTotales, TaxonomiaDto taxonomia, string idConcepto, string uriRolPresentacion)
        {
            //Verificar si las dimensiones default del hipercubo del rol existen
            if (taxonomia.ListaHipercubos.ContainsKey(uriRolPresentacion))
            {
                var dimDefaultsDeConcepto = new Dictionary<string, string>();
                foreach (var hiperC in taxonomia.ListaHipercubos[uriRolPresentacion])
                {
                    if (hiperC.ElementosPrimarios.Contains(idConcepto))
                    {
                        //El concepto es elemento primario de cubo
                        foreach (var dimHiperc in hiperC.Dimensiones)
                        {
                            //Tiene miembro por default y no está declarada en la lista de dimensiones
                            if (taxonomia.DimensionDefaults.ContainsKey(dimHiperc) && !listaDimensionesTotales.Any(x => x.IdDimension.Equals(dimHiperc)))
                            {
                                listaDimensionesTotales.Add(new DimensionInfoDto()
                                {
                                    Explicita = true,
                                    IdDimension = dimHiperc,
                                    IdItemMiembro = taxonomia.DimensionDefaults[dimHiperc]
                                });
                            }
                        }
                    }
                }

            }
        }

        /// <summary>
        /// Verifica si las combinaciones de dimensiones enviadas como parámetros son equivalentes
        /// </summary>
        /// <param name="combinacionActuales">Combinación actual</param>
        /// <param name="combinacionComparar">Combinación que se desea comparar</param>
        /// <returns>True si la combinación es la misma, false en otro caso</returns>
        private bool EsMismaCombinacionDeDimensiones(IDictionary<string, EstructuraDimensionReporte> combinacionActuales, IDictionary<string, EstructuraDimensionReporte> combinacionComparar)
        {
            if (combinacionActuales.Count != combinacionComparar.Count) 
            {
                return false;
            }
            foreach(var dimensionActual in combinacionActuales.Values){
                if (!combinacionComparar.ContainsKey(dimensionActual.IdDimension)) {
                    return false;
                }
                var dimensionComparar = combinacionComparar[dimensionActual.IdDimension];
                if (!EsMismoMiembro(dimensionActual, dimensionComparar))
                {
                    return false;
                }
            }
            return true;
        }

        /// <summary>
        /// Compara los miembros de dos estructuras de dimensión para saber si son equivalentes
        /// </summary>
        /// <param name="dimensionActual">Dimensión actual</param>
        /// <param name="dimensionComparar">Dimensión a comparar</param>
        /// <returns>True si los miembros son equivalentes, false en otro caso</returns>
        private bool EsMismoMiembro(EstructuraDimensionReporte dimensionActual, EstructuraDimensionReporte dimensionComparar)
        {
            if (dimensionActual.Explicita)
            {
                return (dimensionActual.IdMiembro.Equals(dimensionComparar.IdMiembro));
            }
            else 
            {
                try
                {
                    var elementoActual = XmlUtil.CrearElementoXML(dimensionActual.ElementoMiembroTipificado);
                    var elementoComparar = XmlUtil.CrearElementoXML(dimensionComparar.ElementoMiembroTipificado);
                    return XmlUtil.EsNodoEquivalente(elementoActual, elementoComparar);
                }
                catch (Exception ex) {
                    return false;
                }
            }
        }

        /// <summary>
        /// Crea una combinación de dimensiones en objeto del tipo EstructuraDimension
        /// de acuerdo a la lista de dimensiones enviadas como parámtro
        /// </summary>
        /// <param name="listaDimensionesTotales">Lista de dimesiones a transformar</param>
        /// <param name="taxonomia">Objeto de taxonomía utilizado para obtener etiquetas de presentación</param>
        /// <param name="idioma">Idioma de presentación</param>
        /// <returns>Combinación de dimensiones</returns>
        private IDictionary<string, EstructuraDimensionReporte> CrearEstructuraDimensiones(List<DimensionInfoDto> listaDimensionesTotales, TaxonomiaDto taxonomia, 
        String idioma)
        {
            var resultado = new Dictionary<string, EstructuraDimensionReporte>();
            
            foreach(var dimensionInfo in listaDimensionesTotales)
            {
                if (!resultado.ContainsKey(dimensionInfo.IdDimension))
                {
                    resultado.Add(dimensionInfo.IdDimension, new EstructuraDimensionReporte()
                    {
                        IdDimension = dimensionInfo.IdDimension,
                        Explicita = dimensionInfo.Explicita,
                        IdMiembro = dimensionInfo.IdItemMiembro,
                        NombreDimension = UtilAbax.ObtenerEtiqueta(taxonomia, dimensionInfo.IdDimension, Etiqueta.RolEtiqueta, idioma),
                        NombreMiembro = dimensionInfo.Explicita ? UtilAbax.ObtenerEtiqueta(taxonomia, dimensionInfo.IdItemMiembro, Etiqueta.RolEtiqueta, idioma) : dimensionInfo.ElementoMiembroTipificado,
                        ElementoMiembroTipificado = dimensionInfo.ElementoMiembroTipificado
                    });
                }
            }
            
            return resultado;
        }




        #region Convierte en lista el arbol de hipercubos para una busqueda mas rapida

        /// <summary>
        /// Genera un lista de elementos que se encuentran en la estructura del hupercubo
        /// </summary>
        /// <param name="taxonomia">Taxonomía en la cuál se debe de inspeccionar el hipercubo del rol</param>
        /// <param name="uriRolPresentacion">Rol al cuál pertenece el hipercubo que se está examinando</param>
        /// <returns></returns>
        private IList<string> ObtenerListaDeHiperCubosPorRol(TaxonomiaDto taxonomia, String uriRolPresentacion)
        {
            var listaConceptos = new List<string>();
            List<string> listaGeneralConceptosEnHiperCubo = new List<string>();
            if (taxonomia != null && taxonomia.ListaHipercubos.Any() && taxonomia.ListaHipercubos.Where(x => x.Key.Equals(uriRolPresentacion)).Any())
            {
                foreach (var dimensionId in taxonomia.ListaHipercubos.Where(x => x.Key.Equals(uriRolPresentacion)))
                {
                    var dimension = taxonomia.ListaHipercubos[dimensionId.Key];
                    foreach (var listaDeEstructura in dimension)
                    {
                        foreach (string conceptoId in listaDeEstructura.ElementosPrimarios)
                        {
                            listaGeneralConceptosEnHiperCubo.Add(conceptoId);
                        }
                    }
                }
            }
            return listaGeneralConceptosEnHiperCubo;
        }

        /// <summary>
        /// Metodo recursivo para obtener listado de conceptos
        /// </summary>
        /// <param name="listaConceptos">Lista de concetos encontrados</param>
        /// <param name="estructura">Hijo del concepto </param>
        /// <param name="taxonomia">Taxonomía en la cuál se debe de inspeccionar el hipercubo del rol</param>
        private void AgregarNodoEstructuraHiperCubo(List<string> listaConceptos, EstructuraFormatoDto estructura, TaxonomiaDto taxonomia)
        {
            if (estructura.IdConcepto != null && taxonomia.ConceptosPorId.ContainsKey(estructura.IdConcepto))
            {
                if (!listaConceptos.Any(x => x.Equals(estructura.IdConcepto)))
                {
                    listaConceptos.Add(taxonomia.ConceptosPorId[estructura.IdConcepto].Id);
                }
            }
            if (estructura.SubEstructuras != null)
            {
                foreach (var subEstructura in estructura.SubEstructuras)
                {
                    AgregarNodoEstructuraHiperCubo(listaConceptos, subEstructura, taxonomia);
                }
            }
        }
        #endregion
    }
}





