using System;
using AbaxXBRLBlockStore.Common.Connection.MongoDb;
using AbaxXBRLBlockStore.BlockStore;
using AbaxXBRLBlockStore.Services;
using System.Collections.Generic;
using MongoDB.Bson;
using System.Diagnostics;
using MongoDB.Driver;
using System.Text.RegularExpressions;
using AbaxXBRLCore.Common.Entity;
using Newtonsoft.Json;
using AbaxXBRLCore.ExportGeneric;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRL.Taxonomia;
using System.Linq;
using AbaxXBRLCore.Common.Dtos;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Export;
using AbaxXBRLCore.Services.Implementation;
using AbaxXBRLCore.Repository.Implementation;
using AbaxXBRLCore.Common.Util;
using AbaxXBRL.Util;
using System.Net;

namespace AbaxXBRLCore.ExportGeneric
{
    public class ReporteGenericoMongoDB
    {
        public EstructuraReporteGenerico CrearEstructuraGenerica(EntFiltroConsultaHecho filtros, ResultadoOperacionDto listaDeHechos, bool agruparPorUnidad, string nombreRol = "", string rolUri = "")
        {
            if (filtros.conceptos != null && filtros.conceptos.Count() > 0 && listaDeHechos.InformacionExtra != null && ((EntHecho[])listaDeHechos.InformacionExtra).Count() > 0)
            {
                EstructuraReporteGenerico estructuraReporteGenerico = new EstructuraReporteGenerico();
                EstructuraRolReporte estructuraRolReporte = new EstructuraRolReporte();
                estructuraRolReporte.ColumnasDelReporte = new List<EstructuraColumnaReporte>();
                estructuraRolReporte.Conceptos = new List<EstructuraConceptoReporte>();
                estructuraRolReporte.Rol = nombreRol;
                estructuraRolReporte.RolUri = rolUri;
                estructuraRolReporte.ColumnasDelReporte = new List<EstructuraColumnaReporte>();

                if (filtros.conceptos != null)
                {
                    foreach (var detalleConcepto in filtros.conceptos.OrderBy(x => x.orden))
                    {
                        foreach (var hecho in ((EntHecho[])listaDeHechos.InformacionExtra).Where(x => x.concepto.Id.Equals(detalleConcepto.Id)))
                        {
                            //Verificar si este hecho cabe en alguna de las columnas
                            var columnaYaExiste = false;
                            foreach (var columna in estructuraRolReporte.ColumnasDelReporte)
                            {
                                if (HechoPerteneceAColumna(hecho, columna, agruparPorUnidad))
                                {
                                    columnaYaExiste = true;
                                    break;
                                }
                            }
                            if (!columnaYaExiste)
                            {
                                estructuraRolReporte.ColumnasDelReporte.Add(CrearColumnaEncabezado(hecho, agruparPorUnidad));
                            }
                        }
                    }
                }

                // Ordenar las columnas
                if (estructuraRolReporte.ColumnasDelReporte.Count > 1)
                {
                    estructuraRolReporte.ColumnasDelReporte = OrdenarFechaDeColumnas(estructuraRolReporte.ColumnasDelReporte);
                }

                Debug.WriteLine(estructuraRolReporte.Rol);
                foreach (var col in estructuraRolReporte.ColumnasDelReporte)
                {
                    Debug.WriteLine(col.Entidad + "," + DateUtil.ToStandarString(col.FechaInicio) + " - " + DateUtil.ToStandarString(col.FechaFin) + " - " + DateUtil.ToStandarString(col.FechaInstante) + "," +
                        col.Moneda
                        );
                }

                List<EstructuraConceptoReporte> listaDeConceptos = new List<EstructuraConceptoReporte>();
                CrearEstructuraConceptosConHechos(listaDeConceptos, listaDeHechos, filtros.conceptos, estructuraRolReporte.ColumnasDelReporte, filtros.idioma, agruparPorUnidad);
                estructuraRolReporte.Conceptos = listaDeConceptos;

                estructuraReporteGenerico.ReporteGenericoPorRol = new List<EstructuraRolReporte>();
                estructuraReporteGenerico.ReporteGenericoPorRol.Add(estructuraRolReporte);
                estructuraReporteGenerico.Idioma = filtros.idioma;
                estructuraReporteGenerico.AgruparPorUnidad = agruparPorUnidad;

                return estructuraReporteGenerico;
            }

            return (EstructuraReporteGenerico)null;
        }


        private EstructuraColumnaReporte CrearColumnaEncabezado(EntHecho hecho, bool agruparPorUnidad)
        {
            EstructuraColumnaReporte columnasEncabezado = new EstructuraColumnaReporte();
            columnasEncabezado.FechaInicio = (hecho.periodo.FechaInicio != null ? hecho.periodo.FechaInicio.Value : DateTime.Now);
            columnasEncabezado.FechaFin = (hecho.periodo.FechaFin != null ? hecho.periodo.FechaFin.Value : DateTime.Now);
            columnasEncabezado.FechaInstante = (hecho.periodo.FechaInstante != null ? hecho.periodo.FechaInstante.Value : DateTime.Now);
            columnasEncabezado.Entidad = hecho.idEntidad;
            columnasEncabezado.EsquemaEntidad = hecho.idEntidad;
            columnasEncabezado.TipoDePeriodo = hecho.periodo.Tipo;

            var numeradores = new List<EntMedida>();
            var denominadores = new List<EntMedida>();

            if (hecho.unidades != null && agruparPorUnidad)
            {
                if (hecho.unidades.Medidas != null)
                {
                    numeradores.AddRange(hecho.unidades.Medidas);
                }

                if (hecho.unidades.MedidasNumerador != null)
                {
                    denominadores.AddRange(hecho.unidades.MedidasNumerador);
                }

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
            else
            {
                columnasEncabezado.Moneda = null;
            }
            return columnasEncabezado;
        }


        private string ObtenerNombreColumnaMoneda(EntHecho hecho, bool agruparPorUnidad)
        {
            string nombreMoneda = null;
            var numeradores = new List<EntMedida>();
            var denominadores = new List<EntMedida>();
            if (hecho.unidades != null && agruparPorUnidad)
            {
                if (hecho.unidades.Medidas != null)
                {
                    numeradores.AddRange(hecho.unidades.Medidas);
                }

                if (hecho.unidades.MedidasNumerador != null)
                {
                    denominadores.AddRange(hecho.unidades.MedidasNumerador);
                }

                nombreMoneda = "";
                int idx = 0;
                foreach (var numerador in numeradores)
                {
                    if (idx > 0)
                    {
                        nombreMoneda += ", ";
                    }
                    nombreMoneda += numerador.Nombre;
                    idx++;
                }
                if (denominadores.Count > 0)
                {
                    nombreMoneda += " / ";
                }
                idx = 0;
                foreach (var denom in denominadores)
                {
                    if (idx > 0)
                    {
                        nombreMoneda += ", ";
                    }
                    nombreMoneda += denom.Nombre;
                    idx++;
                }
            }
            return nombreMoneda;
        }
        private bool HechoPerteneceAColumna(EntHecho hecho, EstructuraColumnaReporte columna, bool agruparPorUnidad)
        {

            if (!columna.Entidad.Equals(hecho.idEntidad))
            {
                return false;
            }

            switch (hecho.periodo.Tipo)
            {
                case Period.Duracion:
                    if (!(columna.FechaInicio.Equals(hecho.periodo.FechaInicio) && columna.FechaFin.Equals(hecho.periodo.FechaFin) &&
                          ObtenerNombreColumnaMoneda(hecho, agruparPorUnidad) == columna.Moneda))
                    {
                        return false;
                    }
                    break;
                case Period.Instante:
                    if (!(columna.FechaInstante.Equals(hecho.periodo.FechaInstante) &&
                          ObtenerNombreColumnaMoneda(hecho, agruparPorUnidad) == columna.Moneda))
                    {
                        return false;
                    }
                    break;
            }

            /*if (agruparPorUnidad)
            {
                if (String.IsNullOrEmpty(columna.Moneda))
                {
                    return false;
                }
            }*/
            return true;
        }

        /// <summary>
        /// Obtiene la descripcion del concepto en el idioma especificado
        /// </summary>
        /// <param name="concepto">Entidad concepto que contiene la etiqueta </param>
        /// <param name="idioma">Idioma en que se mostrara el reporte</param>
        /// <returns></returns>
        private string ObtenerNombreConcepto(EntConcepto concepto, string idioma)
        {
            if (concepto.etiqueta == null || concepto.etiqueta.Count()==0)
            {
                return concepto.Id;
            }
            string descripcion = string.Empty;
            if (concepto.etiqueta.Where(x => x.lenguaje.Equals(idioma)).Any())
            {
                descripcion = concepto.etiqueta.Where(x => x.lenguaje.Equals(idioma)).Select(x => x.valor).FirstOrDefault();
            }
            else
            {
                descripcion = concepto.etiqueta[0].valor;
            }
            return descripcion;
        }


        /// <summary>
        /// Obtiene la descripcion del concepto en el idioma especificado
        /// </summary>
        /// <param name="concepto">Entidad concepto que contiene la etiqueta </param>
        /// <param name="idioma">Idioma en que se mostrara el reporte</param>
        /// <returns></returns>
        private string ObtenerNombreConceptoAbstracto(EntConcepto concepto, string idioma)
        {
            if (concepto.EtiquetaConceptoAbstracto == null || concepto.EtiquetaConceptoAbstracto.Count() == 0)
            {
                return concepto.EtiquetaVista;
            }
            string descripcion = string.Empty;
            if (concepto.EtiquetaConceptoAbstracto.Where(x => x.Key.Equals(idioma)).Any())
            {
                descripcion = concepto.EtiquetaConceptoAbstracto.Where(x => x.Key .Equals(idioma)).Select(x => x.Value).FirstOrDefault();
            }
            else
            {
                descripcion = concepto.EtiquetaVista;
            }
            return descripcion;
        }

        /// <summary>
        /// Genera un listado de los conceptos con la relacion de sus dimensiones
        /// </summary>
        /// <param name="concepto">Entidad concepto</param>
        /// <param name="columnas">Lista de columnas que tiene el reporte</param>
        /// <param name="listaDeHechos">Lista de hechos devueltos por el filtro</param>
        /// <param name="idioma">Idioma en que se mostrara el reporte</param>
        /// <param name="agruparPorUnidad">Por default es "True", permite agrupar por Moneda, si es "False" agrupa por Entidad</param>
        /// <returns></returns>
        private IList<EstructuraConceptoReporte> BuscarConceptosConDimensiones(EntConcepto concepto, List<EstructuraColumnaReporte> columnas, IEnumerable<EntHecho> listaDeHechos, string idioma, bool agruparPorUnidad, int nivelIndentacion, bool esAbstracto)
        {
            List<EstructuraConceptoReporte> listaDeEstructurasConceptos = new List<EstructuraConceptoReporte>();

            var listaDeHechosPorConcepto = listaDeHechos.Where(x => x.concepto.Id.Equals(concepto.Id));
            string nombreconcepto = ObtenerNombreConcepto(concepto, idioma);

            if (!(esAbstracto))
            {
                if (listaDeHechosPorConcepto.Count() == 0)
                {
                    var combinacionDimensiones = new Dictionary<string, EstructuraDimensionReporte>();
                    listaDeEstructurasConceptos.Add(new EstructuraConceptoReporte()
                    {
                        ConceptoId = concepto.Id,
                        NombreConcepto = nombreconcepto,
                        NivelIndentacion = nivelIndentacion,
                        EsAbstracto = esAbstracto,
                        Hechos = new EstructuraHechoReporte[columnas.Count],
                        Dimensiones = combinacionDimensiones
                    });
                    return listaDeEstructurasConceptos;
                }
                else
                {
                    foreach (var hecho in listaDeHechosPorConcepto)
                    {
                        if (hecho.dimension != null)
                        {
                            List<EntDimension> listaDimensionesTotales = new List<EntDimension>();
                            listaDimensionesTotales.AddRange(hecho.dimension);
                            EstructuraConceptoReporte estructuraEncontrada = null;
                            var estructuraDimensionesBuscada = CrearEstructuraDimensiones(listaDimensionesTotales, idioma);
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
                                    NivelIndentacion = nivelIndentacion,
                                    EsAbstracto = esAbstracto,
                                    Hechos = new EstructuraHechoReporte[columnas.Count],
                                    Dimensiones = estructuraDimensionesBuscada
                                };
                                listaDeEstructurasConceptos.Add(estructuraEncontrada);
                            }

                            int posicion = BuscarIndexColumna(columnas, hecho, agruparPorUnidad);
                            if (posicion != -1)
                            {
                                estructuraEncontrada.Hechos[posicion] = new EstructuraHechoReporte();
                                estructuraEncontrada.Hechos[posicion].Valor = hecho.valor;
                                estructuraEncontrada.Hechos[posicion].ValorFormateado = hecho.valorFormateado;
                                estructuraEncontrada.Hechos[posicion].ValorRedondeado = (!string.IsNullOrEmpty(hecho.valorRedondeado) ? Convert.ToDecimal(hecho.valorRedondeado) : 0);
                                estructuraEncontrada.Hechos[posicion].EsNumerico = hecho.esTipoDatoNumerico;
                                estructuraEncontrada.Hechos[posicion].TipoDato = hecho.tipoDato;
                            }
                        }
                    }
                }
            }
            else
            {
                listaDeEstructurasConceptos.Add(new EstructuraConceptoReporte()
                {
                    ConceptoId = concepto.Id,
                    NombreConcepto = nombreconcepto,
                    NivelIndentacion = nivelIndentacion,
                    EsAbstracto = esAbstracto,
                    Hechos = new EstructuraHechoReporte[columnas.Count],
                    Dimensiones = new Dictionary<string, EstructuraDimensionReporte>()
                });
            }

            return listaDeEstructurasConceptos;
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
            foreach (var dimensionActual in combinacionActuales.Values)
            {
                if (!combinacionComparar.ContainsKey(dimensionActual.IdDimension))
                {
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
                catch (Exception ex)
                {
                    return false;
                }
            }
        }


        /// <summary>
        /// Busca el indice de la relación periodo del hecho con las columnas generadas 
        /// </summary>
        /// <param name="columnas">Lista de columnas que tiene el reporte</param>
        /// <param name="hecho">Objeto EntHecho </param>
        /// <param name="agruparPorUnidad">Por default es "True", permite agrupar por Moneda, si es "False" agrupa por Entidad</param>
        /// <returns></returns>
        private int BuscarIndexColumna(List<EstructuraColumnaReporte> columnas, EntHecho hecho, bool agruparPorUnidad)
        {
            for (int idCol = 0; idCol < columnas.Count; idCol++)
            {
                var columna = columnas[idCol];
                var unidadHecho = ObtenerNombreColumnaMoneda(hecho, agruparPorUnidad);

                if (columna.Entidad.Equals(hecho.idEntidad))
                {
                    bool coincide = false;
                    switch (hecho.periodo.Tipo)
                    {
                        case Period.Duracion:
                            if ((columna.FechaInicio.Equals(hecho.periodo.FechaInicio) &&
                                 columna.FechaFin.Equals(hecho.periodo.FechaFin) && unidadHecho == columna.Moneda))
                                coincide = true;
                            break;
                        case Period.Instante:
                            if (columna.FechaInstante.Equals(hecho.periodo.FechaInstante) && unidadHecho == columna.Moneda)
                                coincide = true;
                            break;
                    }

                    if (coincide)
                    {
                        if (agruparPorUnidad)
                        {
                            if (columna.Moneda == null)
                            {
                                if (unidadHecho == null)
                                {
                                    return idCol;
                                }
                            }
                            else
                            {
                                //Si columna tiene unidad y hecho tiene unidad, verificar si son compatibles
                                if (unidadHecho != null)
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
        /// Crea una combinación de dimensiones en objeto del tipo EstructuraDimension
        /// de acuerdo a la lista de dimensiones enviadas como parámtro
        /// </summary>
        /// <param name="dimensionInfoDto">Lista de dimesiones a transformar</param>
        /// <param name="idioma">Idioma en que se mostrara el reporte</param>
        /// <returns></returns>
        private IDictionary<string, EstructuraDimensionReporte> CrearEstructuraDimensiones(List<EntDimension> dimensionInfoDto, String idioma)
        {
            var resultado = new Dictionary<string, EstructuraDimensionReporte>();

            foreach (var dimensionInfo in dimensionInfoDto)
            {
                if (!resultado.ContainsKey(dimensionInfo.IdDimension))
                {  
                    resultado.Add(dimensionInfo.IdDimension, new EstructuraDimensionReporte()
                    {
                        IdDimension = dimensionInfo.IdDimension,
                        Explicita = dimensionInfo.Explicita,
                        IdMiembro = dimensionInfo.IdItemMiembro,
                        NombreDimension = ObtenerNombreDimension(dimensionInfo, idioma), 
                        NombreMiembro = ObtenerNombreMiembro(dimensionInfo, idioma),
                        ElementoMiembroTipificado = dimensionInfo.ElementoMiembroTipificado
                    });
                }
            }
            return resultado;
        }

        /// <summary>
        /// Obtiene la descripcion de la dimension en el idioma especificado
        /// </summary>
        /// <param name="dimension">Entidad dimension</param>
        /// <param name="idioma">Idioma en que se mostrara el reporte</param>
        /// <returns></returns>
        private string ObtenerNombreDimension(EntDimension dimension, string idioma)
        {
            if (dimension.etiquetasDimension == null || dimension.etiquetasDimension.Count() ==0)
            {
                return dimension.IdDimension;
            }
            string descripcion = string.Empty;
            if (dimension.etiquetasDimension.Where(x => x.lenguaje.Equals(idioma)).Any())
            {
                descripcion = dimension.etiquetasDimension.Where(x => x.lenguaje.Equals(idioma)).Select(x => x.valor).FirstOrDefault();
            }
            else
            {
                descripcion = dimension.etiquetasDimension[0].valor;
            }
            return descripcion;
        }

        /// <summary>
        /// Obtiene la descripcion de la dimension en el idioma especificado
        /// </summary>
        /// <param name="dimension">Objeto que contiene las dimensiones</param>
        /// <param name="idioma">Idioma en que se mostrara el reporte</param>
        /// <returns></returns>
        private string ObtenerNombreMiembro(EntDimension dimension, string idioma)
        {
            string descripcion = string.Empty;

            if (dimension.Explicita)
            {
                if (dimension.etiquetasMiembro == null || dimension.etiquetasMiembro.Count()==0)
                {
                    return dimension.IdItemMiembro;
                }
                if (dimension.etiquetasMiembro.Where(x => x.lenguaje.Equals(idioma)).Any())
                {
                    descripcion = dimension.etiquetasMiembro.Where(x => x.lenguaje.Equals(idioma)).Select(x => x.valor).FirstOrDefault();
                }
                else
                {
                    descripcion = dimension.etiquetasMiembro[0].valor;
                }
            }
            else
            {
                descripcion = dimension.ElementoMiembroTipificado;
            }
            return descripcion;
        }

        /// <summary>
        /// Genera un listado de conceptos con sus hechos y dimensiones 
        /// </summary>
        /// <param name="listaConceptos">Lista de conceptos agregados a la estructura</param>
        /// <param name="listaDehechos">Lista de hechos a procesar</param>
        /// <param name="conceptos">Lista de conceptos a procesar</param>
        /// <param name="columnas">Lista de columnas que tiene el reporte</param>
        /// <param name="idioma">Idioma en que se mostrara el reporte</param>
        /// <param name="agruparPorUnidad">Por default es "True", permite agrupar por Moneda, si es "False" agrupa por Entidad</param>
        private void CrearEstructuraConceptosConHechos(List<EstructuraConceptoReporte> listaConceptos, ResultadoOperacionDto listaDehechos, EntConcepto[] conceptosFiltro,
             List<EstructuraColumnaReporte> columnas, string idioma, bool agruparPorUnidad)
        {
            foreach (var conceptoId in conceptosFiltro.OrderBy(x => x.orden).Select(y => y.Id).ToList())
            {
                var conceptoFiltro = conceptosFiltro.Where(x => x.Id.Equals(conceptoId)).FirstOrDefault();
                bool esAbstracto = conceptoFiltro.EsAbstracto;

                if (!((EntHecho[])listaDehechos.InformacionExtra).Where(x => x.concepto.Id.Equals(conceptoId)).Any())
                {
                    if (esAbstracto)
                    {
                        string nombreConceptoAbstracto = string.Empty;
                        if (((EntConcepto[])conceptosFiltro).Where(x => x.Id.Equals(conceptoId)).Any())
                        {
                            var conceptoAbstracto = ((EntConcepto[])conceptosFiltro).Where(x => x.Id.Equals(conceptoId)).FirstOrDefault();
                            nombreConceptoAbstracto = ObtenerNombreConceptoAbstracto(conceptoAbstracto, idioma);
                        } 

                        listaConceptos.Add(new EstructuraConceptoReporte()
                        {
                            ConceptoId = conceptoFiltro.Id,
                            NombreConcepto = nombreConceptoAbstracto,
                            NivelIndentacion = conceptoFiltro.Indentacion,
                            EsAbstracto = esAbstracto,
                            Hechos = new EstructuraHechoReporte[columnas.Count()],
                            Dimensiones = new Dictionary<string, EstructuraDimensionReporte>()
                        });
                    }
                    continue;
                }
                var concepto = ((EntHecho[])listaDehechos.InformacionExtra).Where(x => x.concepto.Id.Equals(conceptoId)).FirstOrDefault().concepto;
                if (esAbstracto) {
                    listaConceptos.Add(new EstructuraConceptoReporte()
                    {
                        ConceptoId = conceptoFiltro.Id,
                        NombreConcepto = ObtenerNombreConcepto(concepto, idioma),
                        NivelIndentacion = conceptoFiltro.Indentacion,
                        EsAbstracto = esAbstracto,
                        Hechos = new EstructuraHechoReporte[columnas.Count()],
                        Dimensiones = new Dictionary<string, EstructuraDimensionReporte>()
                    });

                    continue;
                }

                if (!((EntHecho[])listaDehechos.InformacionExtra).Where(x => x.concepto.Id.Contains(conceptoId)).Any()) continue;
                var nivelIndentacion = conceptosFiltro.Where(x => x.Id.Equals(conceptoId)).FirstOrDefault().Indentacion;
                
                var listaDeHechosPorConcepto = ((EntHecho[])listaDehechos.InformacionExtra).Where(x => x.concepto.Id.Equals(concepto.Id));
                var tieneDimension = false;
                if (listaDeHechosPorConcepto != null && listaDeHechosPorConcepto.Count() > 0)
                {
                    IList<EstructuraConceptoReporte> conceptosConDimension = BuscarConceptosConDimensiones(concepto, columnas, ((EntHecho[])listaDehechos.InformacionExtra), idioma, agruparPorUnidad, nivelIndentacion, esAbstracto);
                    if (conceptosConDimension.Any())
                    {
                        listaConceptos.AddRange(conceptosConDimension);
                        tieneDimension = true;
                    }
                    if (!tieneDimension)
                    {
                        var hechoSinDimension = ObtenerPrimerHechoSinDimension(concepto, columnas, ((EntHecho[])listaDehechos.InformacionExtra), idioma, agruparPorUnidad, esAbstracto);
                        string nombreconcepto = ObtenerNombreConcepto(concepto, idioma);
                        listaConceptos.Add(new EstructuraConceptoReporte()
                        {
                            ConceptoId = concepto.Id,
                            NombreConcepto = nombreconcepto,
                            NivelIndentacion = nivelIndentacion,
                            EsAbstracto = esAbstracto,
                            Hechos = hechoSinDimension,
                            Dimensiones = new Dictionary<string, EstructuraDimensionReporte>()
                        });
                    }
                    tieneDimension = false;
                }
            }
        }

        /// <summary>
        /// Genera un listado de hechos con relacion al concepto sin dimension
        /// </summary>
        /// <param name="concepto">Entidad concepto a procesar</param>
        /// <param name="columnas">Lista de columnas que tiene el reporte</param>
        /// <param name="listaDeHechosPorConcepto">Lista de hecho a procesar</param>
        /// <param name="idioma">Idioma en que se mostrara el reporte</param>
        /// <param name="agruparPorUnidad">Por default es "True", permite agrupar por Moneda, si es "False" agrupa por Entidad</param>
        /// <returns></returns>
        private EstructuraHechoReporte[] ObtenerPrimerHechoSinDimension(EntConcepto concepto, List<EstructuraColumnaReporte> columnas, IEnumerable<EntHecho> listaDeHechos, string idioma, bool agruparPorUnidad, bool esAbstracto)
        {
            EstructuraHechoReporte[] estructuraHecho = new EstructuraHechoReporte[columnas.Count()];
            int valoresDeHechosEncontrados = 0;
            var listaDeHechosPorConcepto = listaDeHechos.Where(x => x.concepto.Id.Equals(concepto.Id));
            foreach (var hecho in listaDeHechosPorConcepto)
            {
                if (valoresDeHechosEncontrados == columnas.Count) break;
                if (hecho.dimension != null) continue;
                
                int posicion = BuscarIndexColumna(columnas, hecho, agruparPorUnidad);
                if (posicion != -1)
                {
                    estructuraHecho[posicion] = new EstructuraHechoReporte();
                    estructuraHecho[posicion].Valor = WebUtility.HtmlDecode(hecho.valor);
                    estructuraHecho[posicion].ValorFormateado = hecho.valorFormateado;
                    estructuraHecho[posicion].ValorRedondeado = (!string.IsNullOrEmpty(hecho.valorRedondeado) ? Convert.ToDecimal(hecho.valorRedondeado) : 0);
                    estructuraHecho[posicion].EsNumerico = hecho.esTipoDatoNumerico;
                    estructuraHecho[posicion].TipoDato = hecho.tipoDato;
                    valoresDeHechosEncontrados++;
                }
            }
            return estructuraHecho;
        }

        /// <summary>
        /// Ordenacion de las columnas del reporte
        /// </summary>
        /// <param name="estructuraDeColumnas">Lista de columnas generadas en la estructura</param>
        /// <returns></returns>
        public static List<EstructuraColumnaReporte> OrdenarFechaDeColumnas(List<EstructuraColumnaReporte> estructuraDeColumnas)
        {
            List<EstructuraColumnaReporte> listaEstructuraDeColumnas = new List<EstructuraColumnaReporte>();
            List<DateTime> listaFechas = new List<DateTime>();

            var ordenamientoFechas = from l in estructuraDeColumnas
                                     orderby l.FechaInstante descending, l.FechaInicio descending
                                     select l;

            foreach (var elementoOrdenado in ordenamientoFechas)
            {
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
        /// Metodo que realiza la agrupacion de periodos de tipo instante en los de duración en el caso que se cumplan
        /// los filtros necesarios para integrar el valor
        /// </summary>
        /// <param name="estructuraReporteGenerico">Valores de columnas y hechos a valorar</param>
        /// <param name="filtros">Filtros de consulta que se realizo para la consulta generica</param>
        /// <returns>Estructura generica para presentar en el reporte</returns>
        public EstructuraReporteGenerico AgruparHechosPorPeriodo(EntFiltroConsultaHecho filtros,EstructuraReporteGenerico estructuraReporteGenerico)
        {

            
            //Obtenemos los periodos de tipoInstante
            if (estructuraReporteGenerico!=null && estructuraReporteGenerico.ReporteGenericoPorRol != null)
                foreach (var reporteGenericoRol in estructuraReporteGenerico.ReporteGenericoPorRol) {
                
                    for (var indiceColumna =0;indiceColumna<reporteGenericoRol.ColumnasDelReporte.Count;indiceColumna++) {
                        var columnaReporte = reporteGenericoRol.ColumnasDelReporte[indiceColumna];
                        if (columnaReporte.TipoDePeriodo == Period.Instante)
                        {

                            foreach (var periodosFiltro in filtros.filtros.periodos) {

                                if (periodosFiltro.FechaFin.Value.Date.Equals(columnaReporte.FechaInstante.Date)) { 
                                    columnaReporte.FechaInicio=periodosFiltro.FechaInicio.Value;
                                    columnaReporte.FechaFin = periodosFiltro.FechaFin.Value;
                                    break;
                                }
                            }
                        
                            for (var indiceColumnaDuracion = 0; indiceColumnaDuracion < reporteGenericoRol.ColumnasDelReporte.Count; indiceColumnaDuracion++)
                            {
                                var columnaReporteDuracion = reporteGenericoRol.ColumnasDelReporte[indiceColumnaDuracion];
                                if (columnaReporteDuracion.TipoDePeriodo == Period.Duracion && validarIgualdad(columnaReporteDuracion,columnaReporte))
                                {
                                    foreach(var concepto in reporteGenericoRol.Conceptos){
                                        if (concepto.Hechos[indiceColumnaDuracion] == null && concepto.Hechos[indiceColumna]!=null)
                                            concepto.Hechos[indiceColumnaDuracion] = concepto.Hechos[indiceColumna];
                                    }

                                    reporteGenericoRol.ColumnasDelReporte[indiceColumna].OcultarColumna = true;
                                    break;
                                }
                            }
                        }
                    }
                }
            

            return estructuraReporteGenerico;
        }

        /// <summary>
        /// Valdia que la estructura de una columna sea igual respecto a la emisora y unidad
        /// </summary>
        /// <param name="columna">Columna base para comparar</param>
        /// <param name="columnaCompara">Columna que se debe de comparar</param>
        /// <returns>En el caso que sean iguales regresa true</returns>
        private bool validarIgualdad(EstructuraColumnaReporte columna, EstructuraColumnaReporte columnaCompara){
            var SonIguales=false;
            if (columna.FechaFin.Equals(columnaCompara.FechaInstante)) {
                if (columna.EsquemaEntidad.Equals(columnaCompara.EsquemaEntidad))
                {
                    if (columna.Moneda == columnaCompara.Moneda)
                    {
                        SonIguales = true;
                    }
                }
            }
            
            return SonIguales;

        }
    }

}

