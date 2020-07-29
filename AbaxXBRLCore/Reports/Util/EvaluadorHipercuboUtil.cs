using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Hipercubos;
using AbaxXBRLCore.Viewer.Application.Model;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

namespace AbaxXBRLCore.Reports.Util
{
    /// <summary>
    /// Utilería auxiliar para la evaluación de hipercubos y su consumo en los generadores de reportes.
    /// </summary>
    public class EvaluadorHipercuboUtil
    {
        /// <summary>
        /// Configuración de generación de reporte.
        /// </summary>
        public ConfiguracionReporteHipercuboDto configuracion { get; set; }
        /// <summary>
        /// Documento de instancia a evaluar.
        /// </summary>
        private DocumentoInstanciaXbrlDto documentoInstancia {get; set;}
        /// <summary>
        /// Utilieria auxiliar para la consulta de información sobre el documento de instancia.
        /// </summary>
        private ConsultaDocumentoInstanciaUtil consultaDocumentoInstanciaUtil {get; set;}
        /// <summary>
        /// Filtro para obtener los hechos del hipercubo.
        /// </summary>
        private FiltroHechosDto filtro;
        /// <summary>
        /// Diccionario con los miembros por dimension.
        /// </summary>
        private IDictionary<string, IDictionary<string, DimensionInfoDto>> miembrosDimension = new Dictionary<string, IDictionary<string, DimensionInfoDto>>();
        /// <summary>
        /// Diccionario con los identificadores de los miembros de cada dimension por grupo.
        /// </summary>
        private IDictionary<string, IDictionary<string,string>> gruposDimensionesDinamicas = new Dictionary<string,IDictionary<string,string>>();
        /// <summary>
        /// Definicion de la plantilla del documento.
        /// </summary>
        private IDefinicionPlantillaXbrl definicionPlantilla;
        /// <summary>
        /// Clase auxiliar para el manejo de indices por contexto.
        /// </summary>
        private class IndiceContextoPlantillaDto
        {
            /// <summary>
            /// Nombre de la plantilla donde se agrua este contexto.
            /// </summary>
            public string NombrePlantilla { get; set; }
            /// <summary>
            /// Posicion donde se lista el contexto en la plantilla.
            /// </summary>
            public int IndiceArreglo {get; set; }
            /// <summary>
            /// La longitud del arreglo de contextos que existen por plantilla.
            /// </summary>
            public int LongitudArregloContextos {get; set;}
        }
        /// <summary>
        /// Contructor que inicializa en base a la ruta del archivo de configuración.
        /// </summary>
        /// <param name="configPath"></param>
        public EvaluadorHipercuboUtil(string configPath, DocumentoInstanciaXbrlDto documentoInstancia, IDefinicionPlantillaXbrl definicionPlantilla) 
        {
            var assembly = Assembly.GetExecutingAssembly();

            using (Stream stream = assembly.GetManifestResourceStream(configPath))
            {
                if (stream != null)
                {
                    using (StreamReader reader = new StreamReader(stream))
                    {
                        string result = reader.ReadToEnd();
                        configuracion = JsonConvert.DeserializeObject<ConfiguracionReporteHipercuboDto>(result);
                    }
                }
                else
                {
                    throw new NullReferenceException("No fue posible localizar el recurso: " + configPath);
                }
                
            }

            

            this.documentoInstancia = documentoInstancia;
            this.definicionPlantilla = definicionPlantilla;
            consultaDocumentoInstanciaUtil = new ConsultaDocumentoInstanciaUtil(documentoInstancia, definicionPlantilla);
            Init();
        }

        /// <summary>
        /// Inicializa diccionarios auxiliares.
        /// </summary>
        private void Init()
        {
            var periodos = new List<PlantillaPeriodoDto>();
            var conjuntosDimensiones = new List<IList<DimensionInfoDto>>();

            foreach (var aliasPlantillaPeriodo in configuracion.PlantillasContextos.Keys)
            {
                var plantillaContexto = configuracion.PlantillasContextos[aliasPlantillaPeriodo];
                var plantillaPeriodo = plantillaContexto.Periodo;
                periodos.Add(plantillaPeriodo);
            }
            var listaFiltroDimensiones = new List<DimensionInfoDto>();
            foreach (var aliasDimensionItem in configuracion.PlantillaDimensiones.Keys)
            {
                var plantillaDimension = configuracion.PlantillaDimensiones[aliasDimensionItem];
                var dimension = new DimensionInfoDto()
                {
                    Explicita = plantillaDimension.Explicita,
                    QNameDimension = plantillaDimension.QNameDimension
                };
                listaFiltroDimensiones.Add(dimension);
            }
            conjuntosDimensiones.Add(listaFiltroDimensiones);

            filtro = new FiltroHechosDto()
            {
                IdConcepto = configuracion.IdConceptos,
                Periodo = periodos,
                ConjuntosExactosDimensiones = conjuntosDimensiones
            };

            var idsHechos = consultaDocumentoInstanciaUtil.BuscaHechosPorFiltro(filtro);
            var idsContextos = consultaDocumentoInstanciaUtil.ObtenIdsContextosHechos(idsHechos);
            foreach (var idContexto in idsContextos)
            {
                var contexto = documentoInstancia.ContextosPorId[idContexto];
                var listaDimensiones = contexto.ContieneInformacionDimensional ?
                                    contexto.ValoresDimension : contexto.Entidad.ContieneInformacionDimensional ?
                                    contexto.Entidad.ValoresDimension : new List<DimensionInfoDto>();

                var diccionarioDimensionesContexto = new Dictionary<string, string>();
                foreach (var dimension in listaDimensiones)
                {

                    IDictionary<string, DimensionInfoDto> diccionarioMiembros;
                    var idDimension = dimension.IdDimension;
                    if (!miembrosDimension.TryGetValue(idDimension, out diccionarioMiembros))
                    {
                        diccionarioMiembros = new Dictionary<string, DimensionInfoDto>();
                        miembrosDimension.Add(idDimension, diccionarioMiembros);
                    }
                    PlantillaDimensionInfoDto plantillaDimension;
                    if(configuracion.PlantillaDimensiones.TryGetValue(idDimension, out plantillaDimension))
                    {
                        var idMiembro = plantillaDimension.ObtenIdMiembro(dimension);
                        if (!diccionarioMiembros.ContainsKey(idMiembro))
                        {
                            diccionarioMiembros.Add(idMiembro, dimension);
                        }
                        diccionarioDimensionesContexto.Add(idDimension,idMiembro);
                    }
                }
                var idGrupoDimensionesDinamicasBuilder = new StringBuilder();
                var grupo = new Dictionary<string,string>();
                foreach(var aliasDimensionDinamica in configuracion.DimensionesDinamicas) 
                {
                    string idMiembroDimension;
                    if(diccionarioDimensionesContexto.TryGetValue(aliasDimensionDinamica, out idMiembroDimension))
                    {
                        idGrupoDimensionesDinamicasBuilder.Append('_');
                        idGrupoDimensionesDinamicasBuilder.Append(idMiembroDimension);
                        grupo.Add(aliasDimensionDinamica,idMiembroDimension);
                    }
                }
                var idGrupoDimesionesDinamicas = idGrupoDimensionesDinamicasBuilder.Length > 1 ? idGrupoDimensionesDinamicasBuilder.ToString().Substring(1) : "indefinida";
                if (!gruposDimensionesDinamicas.ContainsKey(idGrupoDimesionesDinamicas))
                {
                    gruposDimensionesDinamicas.Add(idGrupoDimesionesDinamicas, grupo);
                }
            }
        }
        /// <summary>
        /// Determina si un contexto es palicable a los parametros dados.
        /// </summary>
        /// <param name="contexto">Contexto a evaluar.</param>
        /// <param name="periodo">Plantilla del periodo.</param>
        /// <param name="entidad"></param>
        /// <param name="miembrosDimension">Diccionario con los miembros de dimensión a evaluar.</param>
        /// <returns>Si el contexto aplica para los parametros dados.</returns>
        public bool ContextoAplicable(ContextoDto contexto, PlantillaPeriodoDto periodo, EntidadDto entidad, IDictionary<string, string> miembrosDimension)
        {
            var valido = false;
            if (periodo.EsEquivalente(contexto.Periodo, definicionPlantilla))
            {
                var entidadContexto = contexto.Entidad;
                if (entidad == null ||
                    (entidad.EsquemaId.Equals(entidadContexto.EsquemaId) &&
                        entidad.Id.Equals(entidadContexto.Id) &&
                        entidad.ContieneInformacionDimensional == entidadContexto.ContieneInformacionDimensional))
                {
                    if (miembrosDimension != null)
                    {
                        var valoresDimension = contexto.ContieneInformacionDimensional ? contexto.ValoresDimension :
                            entidadContexto.ContieneInformacionDimensional ? entidadContexto.ValoresDimension : null;
                        if (valoresDimension != null)
                        {
                            var correspondenMiembros = true;
                            foreach (var dimensionContexto in valoresDimension)
                            {
                                var qNameDimension = dimensionContexto.QNameDimension;
                                var idMiembroContexto = dimensionContexto.Explicita ?
                                                        dimensionContexto.QNameItemMiembro :
                                                        dimensionContexto.ElementoMiembroTipificado;
                                string idMiembroPlantilla;
                                if (miembrosDimension.TryGetValue(qNameDimension, out idMiembroPlantilla))
                                {
                                    if (!idMiembroPlantilla.Equals(idMiembroContexto))
                                    {
                                        correspondenMiembros = false;
                                    }
                                }
                            }
                            if (correspondenMiembros)
                            {
                                valido = true;
                            }
                        }
                        else
                        {
                            valido = true;
                        }
                    }
                }

            }

            return valido;
        }

        /// <summary>
        /// Asigna los miembros en un listado a un diccionario.
        /// </summary>
        /// <param name="listaMiembros">Miembros que serán asignados.</param>
        /// <param name="diccionarioMiembros">Diccinario con los miembros que serán asignados.</param>
        public void AsignaMiembros(IList<DimensionInfoDto> listaMiembros, IDictionary<string,string> diccionarioMiembros)
        {
            
            for (var indexMembers = 0; indexMembers < listaMiembros.Count; indexMembers++)
            {
                var dimension = listaMiembros[indexMembers];
                var qNameDimension = dimension.QNameDimension;
                var idMiembro = dimension.Explicita ? dimension.QNameItemMiembro : dimension.ElementoMiembroTipificado;
                if (!diccionarioMiembros.ContainsKey(qNameDimension))
                {
                    diccionarioMiembros[qNameDimension] = idMiembro;
                }
            }
        }
        /// <summary>
        /// Evalua el listado de contextos para asingar un indice con respecto a la columna.
        /// </summary>
        /// <param name="listaMiembrosEje">Miembros de eje de referencia para signar la posición.</param>
        /// <param name="listaIdsContextosEvaluar">Lista del contextos a los que se les asignará un inicie.</param>
        /// <returns>Diccionario que contiene el listado de contextos que aplican por plantilla contexto.</returns>
        private IDictionary<string, IndiceContextoPlantillaDto> ObtenIndiciesContextosPlantilla(IList<DimensionInfoDto> listaMiembrosEje, IList<string> listaIdsContextosEvaluar)
        {
            var indicesContextoPorPlantilla = new Dictionary<string,IDictionary<string, int>>();
            var indexPlantillaContexto = -1;

            foreach (var aliasPlantillaContexto in configuracion.PlantillasContextos.Keys)
            {
                indexPlantillaContexto++;
                var plantillaContexto = configuracion.PlantillasContextos[aliasPlantillaContexto];
                IList<string> idsContextosSinProcesar;
                var miembrosPlantilla = plantillaContexto.ContieneInformacionDimensional ? plantillaContexto.ValoresDimension :
                                        plantillaContexto.Entidad != null && plantillaContexto.Entidad.ContieneInformacionDimensional ?
                                        plantillaContexto.ValoresDimension : null;
                var plantillaPeriodo = plantillaContexto.Periodo;
                var entidad = plantillaContexto.Entidad;
                var miembrosEvaluar = new Dictionary<string, string>();

                plantillaPeriodo.EvaluaVariablesPlantilla(definicionPlantilla);
                if (miembrosPlantilla != null && miembrosPlantilla.Count > 0)
                {
                    AsignaMiembros(miembrosPlantilla, miembrosEvaluar);
                }
                if (listaMiembrosEje.Count > 0)
                {
                    var qNameDimension = listaMiembrosEje[0].QNameDimension;
                    for (var indexMiembroEje = 0; indexMiembroEje < listaMiembrosEje.Count; indexMiembroEje++)
                    {
                        var miemborEje = listaMiembrosEje[indexMiembroEje];
                        if (!miemborEje.QNameDimension.Equals(qNameDimension))
                        {
                            throw new NullReferenceException("Todos los miembros del eje dimensional deben pertenecer a la misma diemensión (\"" + qNameDimension + "\" vs \"" + miemborEje.QNameDimension + "\")");
                        }
                        var idMiembro = miemborEje.Explicita ? miemborEje.QNameItemMiembro : miemborEje.ElementoMiembroTipificado;
                        if (!miembrosEvaluar.ContainsKey(qNameDimension))
                        {
                            miembrosEvaluar.Add(qNameDimension, idMiembro);
                        }
                        else
                        {
                            miembrosEvaluar[qNameDimension] = idMiembro;
                        }
                        idsContextosSinProcesar = new List<string>();
                        for (var indexContexto = 0; indexContexto < listaIdsContextosEvaluar.Count; indexContexto++)
                        {
                            var idContexto = listaIdsContextosEvaluar[indexContexto];
                            var contexto = documentoInstancia.ContextosPorId[idContexto];
                            if (ContextoAplicable(contexto, plantillaPeriodo, entidad, miembrosEvaluar))
                            {
                                IDictionary<string,int> indicesContexto;
                                if (!indicesContextoPorPlantilla.TryGetValue(aliasPlantillaContexto, out indicesContexto)) 
                                {
                                    indicesContexto = new Dictionary<string, int>();
                                    indicesContextoPorPlantilla.Add(aliasPlantillaContexto, indicesContexto);
                                }
                                indicesContexto.Add(idContexto, indicesContexto.Count);
                            }
                            else
                            {
                                idsContextosSinProcesar.Add(idContexto);
                            }
                        }
                        listaIdsContextosEvaluar = idsContextosSinProcesar;
                    }
                }

            }
            var indicesContextoPlantillaDto =  new Dictionary<string, IndiceContextoPlantillaDto>();
            foreach(var aliasPlantilla  in  indicesContextoPorPlantilla.Keys) 
            {
                var indicesContexto = indicesContextoPorPlantilla[aliasPlantilla];
                foreach(var idContexto in indicesContexto.Keys)
                {
                    if (!indicesContextoPlantillaDto.ContainsKey(idContexto))
                    {
                        var item = new IndiceContextoPlantillaDto()
                        {
                            NombrePlantilla = aliasPlantilla,
                            IndiceArreglo = indicesContexto[idContexto],
                            LongitudArregloContextos = indicesContexto.Count,
                        };

                        if (item.LongitudArregloContextos <= item.IndiceArreglo) 
                        {
                            throw new IndexOutOfRangeException("Error al indexar el contexto \"" + idContexto + "\" en la plantilla\"" + aliasPlantilla + 
                                "\", se intento asignar el indice " + item.IndiceArreglo + " para un conjunto de " + item.LongitudArregloContextos + " contextos. ");
                        }

                        indicesContextoPlantillaDto.Add(idContexto, item);
                    }
                }
            }
            return indicesContextoPlantillaDto;
        }
        /// <summary>
        /// Genera la matriz con los elementos a presentar.
        /// [idConcepto,[idPlantillaContexto,[ArregloHechosPorType]]]
        /// </summary>
        /// <param name="listaMiembrosEje">Lista con los miembros de la dimensión eje que serán utilizados para generar la matriz.</param>
        /// <returns>Diccionario por concepto y tipo plantilla que retorna un arreglo de hechos por contexto.</returns>
        public IDictionary<string,IDictionary<string, HechoDto[]>> ObtenMatrizHechos(IList<DimensionInfoDto> listaMiembrosEje)
        {
            var idsHechos = consultaDocumentoInstanciaUtil.BuscaHechosPorFiltro(filtro);
            var listaIdsContextosEvaluar = consultaDocumentoInstanciaUtil.ObtenIdsContextosHechos(idsHechos);
            var diccionarioIndicesContextos = ObtenIndiciesContextosPlantilla(listaMiembrosEje, listaIdsContextosEvaluar);
            var matrizHechos = new Dictionary<string,IDictionary<string, HechoDto[]>>();

            foreach (var idHecho in idsHechos)
            {
                var hecho = documentoInstancia.HechosPorId[idHecho];
                var idContexto = hecho.IdContexto;
                var idConcepto = hecho.IdConcepto;
                IndiceContextoPlantillaDto indiceContextoPlantilla; 
                if(diccionarioIndicesContextos.TryGetValue(idContexto, out indiceContextoPlantilla)) 
                {
                    IDictionary<string, HechoDto[]> hechosPlantilla;
                    if(!matrizHechos.TryGetValue(idConcepto, out hechosPlantilla))
                    {
                        hechosPlantilla = new Dictionary<string, HechoDto[]>();
                        matrizHechos.Add(idConcepto, hechosPlantilla);
                    }
                    HechoDto[] arregloHechos;
                    var nombrePlantilla = indiceContextoPlantilla.NombrePlantilla;
                    if (!hechosPlantilla.TryGetValue(nombrePlantilla, out arregloHechos))
                    {
                        arregloHechos = new HechoDto[indiceContextoPlantilla.LongitudArregloContextos];
                        hechosPlantilla.Add(nombrePlantilla, arregloHechos);
                    }
                    arregloHechos[indiceContextoPlantilla.IndiceArreglo] = hecho;
                }
            }
            return matrizHechos;
        }

        /// <summary>
        /// Obtiene los titulos para los miembros de un listado para una dimension dada.
        /// </summary>
        /// <param name="aliasDimension">Alias de la dimension buscada</param>
        /// <param name="miembros">Lista con los miembros de los que se pertende extraer los titulos.</param>
        /// <returns>Lista con los titulos que aplican para los miembros dados.</returns>
        public IList<string> ObtenTitulosMiembrosDimension(String aliasDimension, IList<DimensionInfoDto> miembros)
        {
            var titulos = new List<string>();
            PlantillaDimensionInfoDto plantillaDimension;
            if (configuracion.PlantillaDimensiones.TryGetValue(aliasDimension, out plantillaDimension))
            {
                for (var indexMiembro = 0; indexMiembro < miembros.Count; indexMiembro++)
                {
                    var miembro = miembros[indexMiembro];
                    var nombre = plantillaDimension.ObtenNombreMiembro(miembro);
                    titulos.Add(nombre);
                }
            }
            else 
            {
                throw new NullReferenceException("No existe una definición de plantilla para la dimension: " + aliasDimension);
            }

            return titulos;
        }



        /// <summary>
        /// Alias de la dimensión que se pretende evaluar.
        /// </summary>
        /// <param name="qNameDimension">Alias de la dimensión que se pretende evaluar.</param>
        /// <returns>Lista con los miembros de la dimension indicada.</returns>
        public IList<DimensionInfoDto> ObtenMiembrosDimension(String aliasDimension)
        {
            var listaMiembros = new List<DimensionInfoDto>();
            IDictionary<string, DimensionInfoDto> miembros;
            if (miembrosDimension.TryGetValue(aliasDimension,out miembros)) 
            {
                listaMiembros = new List<DimensionInfoDto>( miembros.Values );
            }
            return listaMiembros;
        }

        /// <summary>
        /// Reordena el diccionario de hechos para mapearlos primero por la definición de plantilla (miembro explicito) obteniendo un listado de diccionarios
        /// donde cada diccionario mapea los hechos de un mismo comjunto (miembro implicito) de la definición de plantilla (miembro explicito) por concepto.
        /// Ejemplo:
        /// Diccionario[PlantillaContextoExplicitas][indiceTitulo][idConcepto];
        /// </summary>
        /// <param name="hechos">Mapa de hechos con la definición regular.</param>
        /// <returns></returns>
        public  IDictionary<String, IList<IDictionary<string, HechoDto>>> ReordenaConjutosPorExplicitaImplicitaConcepto(
            IDictionary<String, IDictionary<String, HechoDto[]>> hechos)
        {
            var diccionarioAjustado = new Dictionary<String, IList<IDictionary<string, HechoDto>>>();
            foreach (var idConcepto in hechos.Keys)
            {
                var hechosConcepto = hechos[idConcepto];
                foreach (var clavePlantillaContexto in hechosConcepto.Keys)
                {
                    var hechosPlantillaContexto = hechosConcepto[clavePlantillaContexto];
                    if (hechosPlantillaContexto.Length == 0)
                    {
                        continue;
                    }
                    IList<IDictionary<string, HechoDto>> listaElementos;
                    if (!diccionarioAjustado.TryGetValue(clavePlantillaContexto, out listaElementos))
                    {
                        listaElementos = new List<IDictionary<string, HechoDto>>();
                        for (var index = 0; index < hechosPlantillaContexto.Length; index++)
                        {
                            listaElementos.Add(new Dictionary<string, HechoDto>());
                        }
                        diccionarioAjustado.Add(clavePlantillaContexto, listaElementos);
                    }
                    for (var indexHecho = 0; indexHecho < hechosPlantillaContexto.Length; indexHecho++)
                    {
                        var diccionarioHecho = listaElementos[indexHecho];
                        var hecho = hechosPlantillaContexto[indexHecho];
                        if (diccionarioHecho != null && hecho != null)
                        {
                            diccionarioHecho[hecho.IdConcepto] = hecho;
                        }
                        
                    }
                }
            }
            return diccionarioAjustado;
        }
        /// <summary>
        /// Genera un diccionario de miembros (implicita) seguido de un diccionario de titulos (explicita) seguido de uni diccionario de conceptos por cada hecho.
        /// Ejemplo:
        /// Diccionario[PlantillaContextoExplicitas][TextoTiulo][idConcepto];
        /// </summary>
        /// <param name="hechos">Hechos a evaluar.</param>
        /// <param name="titulosImplicita">Listado ordenado con los titulos para la dimensión explicita</param>
        /// <returns> Diccinario(idMiembroExplicita, Diccionario(NombreExplicita,Diccionario(idConcepto,hecho))) </returns>
        public IDictionary<String, IDictionary<String,IDictionary<String, HechoDto>>> ReordenaConjutosPorExplicitaImplicitaTituloConcepto(
            IDictionary<String, IDictionary<String, HechoDto[]>> hechos, IList<String> titulosImplicita)
        {
            var diccionarioAjustado = new Dictionary<String, IDictionary<String,IDictionary<string, HechoDto>>>();
            foreach (var idConcepto in hechos.Keys)
            {
                var hechosConcepto = hechos[idConcepto];
                foreach (var clavePlantillaContexto in hechosConcepto.Keys)
                {
                    var hechosPlantillaContexto = hechosConcepto[clavePlantillaContexto];
                    
                    IDictionary<string,IDictionary<string, HechoDto>> diccionarioExplicita;
                    if (!diccionarioAjustado.TryGetValue(clavePlantillaContexto, out diccionarioExplicita))
                    {
                        diccionarioExplicita = new Dictionary<String,IDictionary<string, HechoDto>>();
                        diccionarioAjustado.Add(clavePlantillaContexto, diccionarioExplicita);
                    }
                    for (var indexHecho = 0; indexHecho < hechosPlantillaContexto.Length; indexHecho++)
                    {
                        var hecho = hechosPlantillaContexto[indexHecho];
                        var tituloImplicita = titulosImplicita[indexHecho];
                        IDictionary<string, HechoDto> diccionarioHechosPorConcepto;
                        if (!diccionarioExplicita.TryGetValue(tituloImplicita, out diccionarioHechosPorConcepto))
                        {
                            diccionarioHechosPorConcepto = new Dictionary<string, HechoDto>();
                            diccionarioExplicita.Add(tituloImplicita, diccionarioHechosPorConcepto);
                        }
                        diccionarioHechosPorConcepto[hecho.IdConcepto] = hecho;
                    }
                }
            }
            return diccionarioAjustado;
        }
        /// <summary>
        /// Reordena el mapa de hechos ordenados por el contexto (Combinacion de miembros de dimensiones explicitas), por conceptos y finalmente por dimensio implicita.
        /// Ejemplo:
        /// Diccionario[PlantillaContextoExplicitas][idConcepto][indiceImplicita];
        /// </summary>
        /// <param name="hechos">Matriz a reordenar.</param>
        /// <returns>Mapa reordenado.</returns>
        public IDictionary<String, IDictionary<String, IList<HechoDto>>> ReordenaConjutosPorExplicitaConceptoImplicita(
            IDictionary<String, IDictionary<String, HechoDto[]>> hechos)
        {
            var diccionarioAjustado = new Dictionary<String, IDictionary<String, IList<HechoDto>>>();
            foreach (var idConcepto in hechos.Keys)
            {
                var hechosConcepto = hechos[idConcepto];
                foreach (var clavePlantillaContexto in hechosConcepto.Keys)
                {
                    var hechosPlantillaContexto = hechosConcepto[clavePlantillaContexto];
                    if (hechosPlantillaContexto.Length == 0)
                    {
                        continue;
                    }
                    IDictionary<String, IList<HechoDto>> diccionarioConceptos;
                    if (!diccionarioAjustado.TryGetValue(clavePlantillaContexto, out diccionarioConceptos))
                    {
                        diccionarioConceptos = new Dictionary<String, IList<HechoDto>>();
                        diccionarioAjustado.Add(clavePlantillaContexto, diccionarioConceptos);
                    }
                    IList<HechoDto> listaHechos;
                    if (!diccionarioConceptos.TryGetValue(idConcepto, out listaHechos))
                    {
                        listaHechos = new List<HechoDto>();
                        diccionarioConceptos.Add(idConcepto,listaHechos);
                    }
                    for (var indexHecho = 0; indexHecho < hechosPlantillaContexto.Length; indexHecho++)
                    {
                        var hecho = hechosPlantillaContexto[indexHecho];
                        listaHechos.Add(hecho);
                    }
                }
            }
            return diccionarioAjustado;
        }
        /// <summary>
        /// Obtiene los miembros dimensionales del contexto del hecho indicado según su tipo.
        /// </summary>
        /// <param name="hecho">Hecho a evaluar</param>
        /// <param name="instancia">Instancia a evaluar.</param>
        /// <param name="explicita">Si buscará dimensiones explicitas o implicitas.</param>
        /// <returns>Miembros dimensionales del tipo indicado.</returns>
        public IList<DimensionInfoDto> ObtenDimensionesTipo(HechoDto hecho, DocumentoInstanciaXbrlDto instancia, bool explicita) {

            var contexto = instancia.ContextosPorId[hecho.IdContexto];
            var idsDimensiones = new List<DimensionInfoDto>();
            
            for (var indexMiembro = 0; indexMiembro < contexto.ValoresDimension.Count; indexMiembro++)
            {
                var miembro = contexto.ValoresDimension[indexMiembro];
                if (miembro.Explicita.Equals(explicita))
                {
                    idsDimensiones.Add(miembro);
                }
            }
            return idsDimensiones;
        }
        /// <summary>
        /// Obtiene el miembro de la dimensión indicada.
        /// </summary>
        /// <param name="hecho">Hecho del que se requiere el miembro</param>
        /// <param name="idDimension">Identificador de la dimensión</param>
        /// <param name="instancia">Documento de instnacia donde se obtiene el contexto.</param>
        /// <returns>Miembro d ela dimensión para el hecho indicado.</returns>
        public  DimensionInfoDto ObtenMiembroDimension(HechoDto hecho, String idDimension, DocumentoInstanciaXbrlDto instancia)
        {
            var contexto = instancia.ContextosPorId[hecho.IdContexto];
            DimensionInfoDto miembroRetorno = null;
            for (var indexMiembro = 0; indexMiembro < contexto.ValoresDimension.Count; indexMiembro++)
            {
                var miembro = contexto.ValoresDimension[indexMiembro];
                if (miembro.IdDimension.Equals(idDimension))
                {
                    miembroRetorno = miembro;
                }
            }
            return miembroRetorno;
        }
    }
}
