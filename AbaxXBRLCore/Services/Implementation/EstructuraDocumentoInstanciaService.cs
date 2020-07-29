using AbaxXBRL.Taxonomia;
using AbaxXBRLCore.Viewer.Application.Dto;
using AbaxXBRLCore.Viewer.Application.Dto.Angular;
using AbaxXBRLCore.Viewer.Application.Dto.EditorGenerico;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Globalization;

namespace AbaxXBRLCore.Services.Implementation
{
    /// <summary>
    /// Servicio para el poder crear las estructuras por cada rol definido en la taxonomia del documento instancia
    /// </summary>
    /// <author>Emigdio Hernandez, Luis Angel Morales</author>
    public class EstructuraDocumentoInstanciaService
    {
        /// <summary>
        /// Informacion del documento instancia que se requiere generar su estructura
        /// </summary>
        public DocumentoInstanciaXbrlDto documentoInstancia;

        /// <summary>
        /// Informacion de la paleta de colores que se va a utilizar
        /// </summary>
        private List<string> paletaColores;

        /// <summary>
        /// Constructor principal para generar la estructura de un documento de instancia
        /// </summary>
        /// <param name="documentoInstancia">Documento instancia</param>
        public EstructuraDocumentoInstanciaService(DocumentoInstanciaXbrlDto documentoInstancia)
        {
            this.documentoInstancia = documentoInstancia;
        }
        


        //Invoca la preparación de todas las tablas del formato
        public void prepararTodasLasEstructurasTabla(IList<ElementoDocumentoDto> estructuraDocumento)
        {
            var self = this;
            //Inicializar los encabezados de las tablas
            foreach (var estructura in estructuraDocumento)
            {
                //recopilar los hechos que se muestran an la tabla
                estructura.mostrarElementoDocumento = true;
                if (estructura.tipo == ElementoDocumentoDto.Tabla)
                {
                    this.prepararEstructuraTabla(estructura);
                }
            }
        }


        /// <summary>
        /// Actualiza todas las tablas de la estructura de la tabla por rol
        /// </summary>
        /// <param name="estructuraDocumento">Informacion de la estructura de la tabla</param>
        public void actualizarTodasLasEstructurasTabla(IList<ElementoDocumentoDto> estructuraDocumento)
        {
            var self = this;
            //Inicializar los encabezados de las tablas
            foreach (var estructura in estructuraDocumento)
            {
                //recopilar los hechos que se muestran an la tabla
                estructura.mostrarElementoDocumento = true;
                if (estructura.tipo == ElementoDocumentoDto.Tabla)
                {
                    this.actualizarEstructuraTabla(estructura);
                }
            }
        }


        /// <summary>
        /// Actualiza la estructura de la tabla 
        /// </summary>
        /// <param name="elementoDocumento">Informacion del elemento del documento</param>
        public void actualizarEstructuraTabla(ElementoDocumentoDto elementoDocumento)
        {

            var listaConceptosTabla = new List<string>();

            foreach (var renglon in elementoDocumento.tabla.renglones)
            {
                listaConceptosTabla.Add(renglon.idConcepto);
            }

            var listaHechos = this.obtenerHechosEnDocumentoPorIdConceptos(listaConceptosTabla);

            this.crearEstructuraEncabezadosHipercubo(elementoDocumento.tabla, listaHechos);
            this.crearEstructuraTabla(elementoDocumento.tabla);


            if (!elementoDocumento.tabla.mostrarColumnasVacias)
            {
                this.depurarColumnasTabla(elementoDocumento.tabla);
            }

            this.agruparEncabezados(elementoDocumento.tabla);


            if (!elementoDocumento.tabla.mostrarRenglonesVacios)
            {
                this.depurarRenglonesEstructuraDocumento(elementoDocumento);
            }

        }


        //Prepara la estructura de una tabla calculando los encabezados al realiza el producto cartesiano de las dimensiones
        //Popula la tabla que representa lo que se despliega en pantalla tomando en cuenta los encabezados de las dimensiones de la tabla
        public void prepararEstructuraTabla(ElementoDocumentoDto elementoDocumento)
        {

            var listaHechos = this.crearMiembrosDimensionesFicticias(elementoDocumento.tabla);

            this.crearEstructuraEncabezadosHipercubo(elementoDocumento.tabla, listaHechos);
            this.crearEstructuraTabla(elementoDocumento.tabla);


            if (!elementoDocumento.tabla.mostrarColumnasVacias)
            {
                this.depurarColumnasTabla(elementoDocumento.tabla);
            }

            this.agruparEncabezados(elementoDocumento.tabla);


            if (!elementoDocumento.tabla.mostrarRenglonesVacios)
            {
                this.depurarRenglonesEstructuraDocumento(elementoDocumento);
            }

        }

        /**
        * Identifica los renglones que no tiene hechos y marca como no visible el renglon
        */
        public void depurarRenglonesEstructuraDocumento(ElementoDocumentoDto elementoDocumento)
        {
            elementoDocumento.mostrarElementoDocumento = true;
            if (elementoDocumento.tipo == ElementoDocumentoDto.Tabla)
            {
                elementoDocumento.mostrarElementoDocumento = false;
                for (var i = 0; i < elementoDocumento.tabla.renglones.Count; i++)
                {
                    var hechosRenglon = elementoDocumento.tabla.tablaHechos[i];
                    var tieneHechosRenglon = false;
                    for (var iCol = 0; iCol < elementoDocumento.tabla.encabezado.columnasTotales; iCol++)
                    {
                        var celda = elementoDocumento.tabla.tablaHechos[i][iCol];
                        if ((celda.hechosEnCelda != null && celda.hechosEnCelda.Count > 0))
                        {
                            tieneHechosRenglon = true;
                            elementoDocumento.mostrarElementoDocumento = true;
                            break;
                        }
                        if (elementoDocumento.tabla.renglones[i].EsAbstracto)
                        {
                            tieneHechosRenglon = true;
                        }
                    }

                    if (!tieneHechosRenglon)
                    {
                        elementoDocumento.tabla.renglones[i].visible = false;
                    }
                }
            }
        }


        //Agrupa los encabezados padres que abrasan el siguiente nivel de identación
        public void agruparEncabezados(EstructuraTablaDto tabla)
        {

            for (var idxRenglon = 0; idxRenglon < tabla.encabezado.renglonesEncabezado; idxRenglon++)
            {
                var renglon = tabla.encabezado.tablaEncabezado[idxRenglon];
                if (renglon != null)
                {
                    var colspan = 0;
                    MiembroDimensionDto miembroActual = null;
                    var colInicioMiembro = 0;
                    var iCol = 0;
                    for (iCol = 0; iCol < tabla.encabezado.columnasTotales; iCol++)
                    {

                        if (miembroActual == null)
                        {
                            miembroActual = renglon[iCol].miembroDimension;
                            colInicioMiembro = iCol;
                        }
                        else if (renglon[iCol].miembroDimension == null || miembroActual != renglon[iCol].miembroDimension ||
                          (miembroActual == renglon[iCol].miembroDimension && this.existeCambioMiembroRenglonAnterior(tabla.encabezado, idxRenglon, iCol)))
                        {
                            //Corte de miembro
                            colspan = iCol - colInicioMiembro;
                            renglon[colInicioMiembro].numeroColumnas = colspan;
                            for (var subCol = colInicioMiembro + 1; subCol <= colInicioMiembro + colspan - 1; subCol++)
                            {
                                //Indicar que las columnas no serán visibles
                                renglon[subCol].visible = false;

                            }
                            //Colocar el indicador de cierre de grupo en la última columna del grupo
                            this.colocarTerminoDeGrupo(tabla.encabezado, idxRenglon, colInicioMiembro + colspan - 1);

                            miembroActual = renglon[iCol].miembroDimension;
                            colInicioMiembro = iCol;
                        }
                    }
                    //Corte de miembro
                    colspan = iCol - colInicioMiembro;
                    if (renglon.ContainsKey(colInicioMiembro))
                    {
                        renglon[colInicioMiembro].numeroColumnas = colspan;
                        for (var subCol = colInicioMiembro + 1; subCol <= colInicioMiembro + colspan - 1; subCol++)
                        {
                            //Indicar que las columnas no serán visibles
                            renglon[subCol].visible = false;
                            //Colocar el indicador de cierre de grupo en la última columna si el colspan es mayor a 1
                            if (colspan > 1 && subCol == colInicioMiembro + colspan - 1)
                            {
                                this.colocarTerminoDeGrupo(tabla.encabezado, idxRenglon, subCol);
                            }
                        }
                    }
                }
            }
        }


        //Verifica si en en renglón anterior al actual, existe un cambio de miembro de la columna actual
        //a la columna anterior
        public bool existeCambioMiembroRenglonAnterior(EncabezadoTablaDto encabezado, int renglon, int columna)
        {

            //si existe renglón anterior 
            if (renglon > 0 && columna > 0)
            {

                //Verifica si existe cambio en algún renglón superior al nivel actual
                for (var iRenglon = renglon - 1; iRenglon >= 0; iRenglon--)
                {
                    var celdaAnterior = encabezado.tablaEncabezado[iRenglon][columna - 1];
                    var celdaActual = encabezado.tablaEncabezado[iRenglon][columna];
                    if (celdaAnterior == null && celdaActual == null)
                    {
                        continue;
                    }

                    if ((celdaActual == null && celdaAnterior != null) || (celdaActual != null && celdaAnterior == null))
                    {
                        return true;
                    }

                    if ((celdaActual.miembroDimension == null && celdaAnterior.miembroDimension != null) || (celdaActual.miembroDimension != null && celdaAnterior.miembroDimension == null))
                    {
                        return true;
                    }

                    if (celdaActual.miembroDimension != null && celdaAnterior.miembroDimension != null)
                    {
                        if (celdaActual.miembroDimension.idDimension != celdaAnterior.miembroDimension.idDimension)
                        {
                            return true;
                        }
                        var miembroActual = "";
                        var miembroAnterior = "";
                        if (celdaActual.miembroDimension.elementoMiembroTipificado != null)
                        {
                            miembroActual = celdaActual.miembroDimension.elementoMiembroTipificado;
                        }
                        else
                        {
                            miembroActual = celdaActual.miembroDimension.idConceptoMiembro;
                        }
                        if (celdaAnterior.miembroDimension.elementoMiembroTipificado != null)
                        {
                            miembroAnterior = celdaAnterior.miembroDimension.elementoMiembroTipificado;
                        }
                        else
                        {
                            miembroAnterior = celdaAnterior.miembroDimension.idConceptoMiembro;
                        }
                        if (miembroActual == miembroAnterior)
                        {
                            continue;
                        }
                        else
                        {
                            return true;
                        }
                    }
                }
            }
            return false;
        }


        //Coloca, desde esta celda, hacia abajo, hasta encontrar otro miembro el indicador de termino de grupo
        public void colocarTerminoDeGrupo(EncabezadoTablaDto encabezado, int renglon, int col)
        {
            encabezado.tablaEncabezado[renglon][col].presentaTerminoAgrupacion = true;
            for (var renglonActual = renglon + 1; renglonActual < encabezado.renglonesEncabezado; renglonActual++)
            {
                if (encabezado.tablaEncabezado[renglonActual][col].miembroDimension != null)
                {
                    break;
                }
                encabezado.tablaEncabezado[renglonActual][col].presentaTerminoAgrupacion = true;
            }
        }


        /**
        * Crea una estructura tabular donde coloca en la celda correspondiente con el concepto del renglon
        * y la combinación de dimensiones de la columna los hechos que corresponden
        */
        public void crearEstructuraTabla(EstructuraTablaDto tabla)
        {

            var hechosPorColumna = new Dictionary<int, int>();
            var ultimoRenglonConHechos = 0;
            var ultimoColumnaConHechos = 0;
            tabla.tablaHechos = new Dictionary<int, Dictionary<int, CeldaTablaDto>>();

            for (var numRenglon = 0; numRenglon < tabla.renglones.Count; numRenglon++)
            {
                tabla.tablaHechos[numRenglon] = new Dictionary<int, CeldaTablaDto>();
            }

            for (var iCol = 0; iCol < tabla.encabezado.columnasTotales; iCol++)
            {
                hechosPorColumna[iCol] = 0;
                var dimensiones = tabla.encabezado.obtenerDimensionesColumna(iCol);

                for (var numRenglon = 0; numRenglon < tabla.renglones.Count; numRenglon++)
                {

                    tabla.tablaHechos[numRenglon][iCol] = new CeldaTablaDto();
                    tabla.tablaHechos[numRenglon][iCol].hechosEnCelda = new List<AbaxXBRLCore.Viewer.Application.Dto.HechoDto>();


                    if (this.documentoInstancia.HechosPorIdConcepto.ContainsKey(tabla.renglones[numRenglon].idConcepto))
                    {

                        var hechosConcepto = this.documentoInstancia.HechosPorIdConcepto[tabla.renglones[numRenglon].idConcepto];

                        foreach (var idx in hechosConcepto)
                        {
                            var hecho = this.documentoInstancia.HechosPorId[idx];
                            //TODO Mejora
                            if (this.correspondeHechoADimensiones(hecho, dimensiones, tabla.encabezado, tabla.renglones[numRenglon]))
                            {

                                ultimoRenglonConHechos = numRenglon;
                                ultimoColumnaConHechos = iCol;
                                hechosPorColumna[iCol] = hechosPorColumna[iCol] + 1;

                                tabla.tablaHechos[numRenglon][iCol].hechosEnCelda.Add(hecho);
                                tabla.tablaHechos[numRenglon][iCol].hechoMostrado = hecho;
                                tabla.tablaHechos[numRenglon][iCol].visible = true;
                                tabla.tablaHechos[numRenglon][iCol].esUltimoHecho = false;
                                tabla.tablaHechos[numRenglon][iCol].CambioValorComparador = hecho.CambioValorComparador;
                                if (hecho.EsNumerico)
                                {
                                    if (this.documentoInstancia.Taxonomia.ConceptosPorId[hecho.IdConcepto].TipoDatoXbrl.Contains(AbaxXBRL.Constantes.TiposDatoXBRL.MonetaryItemType))
                                        tabla.tablaHechos[numRenglon][iCol].ValorHechoFormato = decimal.Parse(hecho.Valor).ToString("C2");
                                    else
                                        tabla.tablaHechos[numRenglon][iCol].ValorHechoFormato = decimal.Parse(hecho.Valor).ToString("N0");
                                }
                                else
                                {
                                    if (this.documentoInstancia.Taxonomia.ConceptosPorId[hecho.IdConcepto].TipoDato.Contains(AbaxXBRL.Constantes.TiposDatoXBRL.TextBlockItemType))
                                        tabla.tablaHechos[numRenglon][iCol].EsCampoTextBlock = true;
                                    tabla.tablaHechos[numRenglon][iCol].ValorHechoFormato = hecho.Valor;
                                }
                            }
                        }
                    }

                }
            }
            tabla.numeroHechosPorColumna = hechosPorColumna;
            if (tabla.tablaHechos.ContainsKey(ultimoRenglonConHechos) && tabla.tablaHechos[ultimoRenglonConHechos].ContainsKey(ultimoColumnaConHechos))
            {
                tabla.tablaHechos[ultimoRenglonConHechos][ultimoColumnaConHechos].esUltimoHecho = true;
            }
        }

        /**
        * Verifica si un hecho tiene correspondencia con la lista de dimensiones enviada
        */
        public bool correspondeHechoADimensiones(AbaxXBRLCore.Viewer.Application.Dto.HechoDto hecho, List<MiembroDimensionDto> miembros, EncabezadoTablaDto encabezado, RenglonTablaDto renglonTabla)
        {

            AbaxXBRLCore.Viewer.Application.Dto.ContextoDto ctx = null;
            if (hecho.IdContexto != null && this.documentoInstancia.ContextosPorId.ContainsKey(hecho.IdContexto))
            {
                ctx = this.documentoInstancia.ContextosPorId[hecho.IdContexto];
            }
            foreach (var miembro in miembros)
            {

                var dimension = encabezado.dimensionesPorId[miembro.idDimension];
                var listaMiembrosGrupo = new List<MiembroDimensionDto>();
                listaMiembrosGrupo.Add(miembro);
                if (miembro.miembrosAgrupados != null && miembro.miembrosAgrupados.Count > 0)
                {
                    for (var id = 0; id < miembro.miembrosAgrupados.Count; id++)
                    {
                        //Si están agrupadas fechas
                        if (dimension.idConceptoEje == InformacionDimensionDto.ID_DIMENSION_TIEMPO)
                        {

                            if (renglonTabla.rolEtiqueta != null && renglonTabla.rolEtiqueta.Equals("http://www.xbrl.org/2003/role/periodStartLabel"))
                            {
                                //Si la etiqueta es de inicio de periodo agregar al grupo si la fecha es de inicio
                                var fechaInicioInstante = ((DateTime)miembro.miembrosAgrupados[id].informacionExtra["FechaInstante"]).AddDays(1);
                                if (((DateTime)miembro.informacionExtra["FechaInicio"]).CompareTo(fechaInicioInstante) == 0)
                                {
                                    listaMiembrosGrupo.Add(miembro.miembrosAgrupados[id]);
                                }
                            }
                            else if (renglonTabla.rolEtiqueta != null && renglonTabla.rolEtiqueta.Equals("http://www.xbrl.org/2003/role/periodEndLabel"))
                            {
                                //Si la etiqueta es de fin de periodo agregar al grupo si la fecha es de final
                                if (((DateTime)miembro.informacionExtra["FechaFin"]).CompareTo((DateTime)miembro.miembrosAgrupados[id].informacionExtra["FechaInstante"]) == 0)
                                {
                                    listaMiembrosGrupo.Add(miembro.miembrosAgrupados[id]);
                                }
                            }
                            else
                            {
                                //Si no, agregar al grupo
                                listaMiembrosGrupo.Add(miembro.miembrosAgrupados[id]);
                            }
                        }
                        else
                        {
                            listaMiembrosGrupo.Add(miembro.miembrosAgrupados[id]);
                        }
                    }
                }
                var correspondeADimension = false;
                foreach (var miembroGrupo in listaMiembrosGrupo)
                {

                    correspondeADimension = correspondeADimension || this.correspondeContextoAMiembro(dimension, ctx, miembroGrupo);
                }
                if (!correspondeADimension)
                {
                    return false;
                }
            }
            return true;
        }




        //Verifica si el contexto enviado corresponde al miembro de dimensión enviado como parámetro
        public bool correspondeContextoAMiembro(InformacionDimensionDto dimension, AbaxXBRLCore.Viewer.Application.Dto.ContextoDto ctx, MiembroDimensionDto miembro)
        {

            if (dimension != null && dimension.tipo == InformacionDimensionDto.Ficticia && dimension.idConceptoEje == InformacionDimensionDto.ID_DIMENSION_TIEMPO && ctx != null)
            {
                var periodoColumna = new PeriodoDto();
                periodoColumna.Tipo = int.Parse(miembro.informacionExtra["Tipo"].ToString()) ;
                periodoColumna.FechaFin = (DateTime)miembro.informacionExtra["FechaFin"];
                periodoColumna.FechaInicio = (DateTime)miembro.informacionExtra["FechaInicio"];
                periodoColumna.FechaInstante = (DateTime)miembro.informacionExtra["FechaInstante"];
                if (!ctx.Periodo.EstructuralmenteIgual(periodoColumna))
                {
                    return false;
                }
            }

            if (dimension != null && dimension.tipo == InformacionDimensionDto.Ficticia && dimension.idConceptoEje == InformacionDimensionDto.ID_DIMENSION_ENTIDAD && ctx != null)
            {
                if (!(ctx.Entidad.EsquemaId.Equals(miembro.informacionExtra["EsquemaId"]) && ctx.Entidad.IdEntidad.Equals(miembro.informacionExtra["IdEntidad"])))
                {
                    return false;
                }
            }

            if (dimension != null && dimension.tipo == InformacionDimensionDto.Real && ctx != null)
            {
                var esDefault = false;
                if (this.documentoInstancia.Taxonomia.DimensionDefaults.ContainsKey(dimension.idConceptoEje) &&
                    this.documentoInstancia.Taxonomia.DimensionDefaults[dimension.idConceptoEje].Equals(miembro.idConceptoMiembro))
                {
                    esDefault = true;
                }

                if (!esDefault)
                {
                    if (!this.existeMiembroEnContexto(ctx, miembro))
                    {
                        return false;
                    }
                }
                else
                {
                    //Si es default, verificar que el hecho no tenga la dimensión en su contexto
                    if (this.existeDimensionEnContexto(ctx, dimension))
                    {
                        return false;
                    }
                }
            }
            return true;
        }


        /**
        * Verifica si la dimensión existe en los valores dimensionales del contexto
        */
        public bool existeDimensionEnContexto(AbaxXBRLCore.Viewer.Application.Dto.ContextoDto contexto, InformacionDimensionDto infoDimensionBuscada)
        {
            var dimensionesContexto = new List<DimensionInfoDto>();
            if (contexto.ValoresDimension != null && contexto.ValoresDimension.Count > 0)
            {
                foreach (var valorDimension in contexto.ValoresDimension)
                {
                    dimensionesContexto.Add(valorDimension);
                }
            }
            if (contexto.Entidad.ValoresDimension != null && contexto.Entidad.ValoresDimension.Count > 0)
            {
                foreach (var valorDimension in contexto.Entidad.ValoresDimension)
                {
                    dimensionesContexto.Add(valorDimension);
                }
            }
            foreach (var dimInfo in dimensionesContexto)
            {
                if (dimInfo.IdDimension == infoDimensionBuscada.idConceptoEje)
                {
                    return true;
                }
            }
            return false;
        }


        /**
        * Verifica si el miembro de la dimensión existe en los valores dimensionales del contexto
        */
        public bool existeMiembroEnContexto(AbaxXBRLCore.Viewer.Application.Dto.ContextoDto contexto, MiembroDimensionDto miembro)
        {
            var dimensionesContexto = new List<DimensionInfoDto>();
            if (contexto.ValoresDimension != null && contexto.ValoresDimension.Count > 0)
            {
                foreach (var valorDimension in contexto.ValoresDimension)
                {
                    dimensionesContexto.Add(valorDimension);
                }
            }
            if (contexto.Entidad.ValoresDimension != null && contexto.Entidad.ValoresDimension.Count > 0)
            {
                foreach (var valorDimension in contexto.Entidad.ValoresDimension)
                {
                    dimensionesContexto.Add(valorDimension);
                }
            }
            foreach (var dimInfo in dimensionesContexto)
            {

                if (dimInfo.IdDimension == miembro.idDimension)
                {
                    if (dimInfo.Explicita)
                    {
                        if (dimInfo.IdItemMiembro == miembro.idConceptoMiembro)
                        {
                            return true;
                        }
                    }
                    else
                    {
                        if (dimInfo.ElementoMiembroTipificado == miembro.elementoMiembroTipificado)
                        {
                            return true;
                        }
                    }
                }
            }
            return false;
        }


        //Quita las columnas que no tienen hechos
        public void depurarColumnasTabla(EstructuraTablaDto tabla)
        {
            var tablaEncabezadoFinal = new Dictionary<int, Dictionary<int, CeldaTablaDto>>();
            var tablaHechosFinal = new Dictionary<int, Dictionary<int, CeldaTablaDto>>();
            var columnaFinal = 0;
            for (var iRenglon = 0; iRenglon < tabla.encabezado.renglonesEncabezado; iRenglon++)
            {
                tablaEncabezadoFinal[iRenglon] = new Dictionary<int, CeldaTablaDto>();
                columnaFinal = 0;
                //Crear las columnas por renglon, excepto las columnas sin hechos
                for (var iColumna = 0; iColumna < tabla.encabezado.columnasTotales; iColumna++)
                {
                    if (tabla.numeroHechosPorColumna[iColumna] > 0)
                    {
                        tablaEncabezadoFinal[iRenglon][columnaFinal] = tabla.encabezado.tablaEncabezado[iRenglon][iColumna];
                        columnaFinal++;
                    }
                }
            }
            //quitar de la tabla de hechos las columnas también
            foreach (var idxRenglon in tabla.tablaHechos.Keys)
            {
                tablaHechosFinal[idxRenglon] = new Dictionary<int, CeldaTablaDto>();
                columnaFinal = 0;
                for (var iColumna = 0; iColumna < tabla.encabezado.columnasTotales; iColumna++)
                {
                    if (tabla.numeroHechosPorColumna[iColumna] > 0)
                    {
                        tablaHechosFinal[idxRenglon][columnaFinal] = tabla.tablaHechos[idxRenglon][iColumna];
                        columnaFinal++;
                    }
                }
            }
            tabla.encabezado.columnasTotales = columnaFinal;

            tabla.tablaHechos = tablaHechosFinal;
            tabla.encabezado.tablaEncabezado = tablaEncabezadoFinal;
        }


        public List<AbaxXBRLCore.Viewer.Application.Dto.HechoDto> crearMiembrosDimensionesFicticias(EstructuraTablaDto tabla)
        {
            string[] coloresEntidad = { "", this.GenerarColorEntidad(), this.GenerarColorEntidad(), this.GenerarColorEntidad(), this.GenerarColorEntidad(), this.GenerarColorEntidad(), this.GenerarColorEntidad() };
            var iColorEntidad = 0;
            var self = this;
            var listaConceptosTabla = new List<string>();
            foreach (var renglon in tabla.renglones)
            {
                listaConceptosTabla.Add(renglon.idConcepto);
            }
            List<AbaxXBRLCore.Viewer.Application.Dto.HechoDto> listaHechos = this.obtenerHechosEnDocumentoPorIdConceptos(listaConceptosTabla);
            var fechas = this.obtenerDiferentesFechasDeHechos(listaHechos);
            var entidades = this.obtenerDiferentesEntidadesDeHechos(listaHechos);

            foreach (var dimensionInfo in tabla.encabezado.dimensiones)
            {

                if (dimensionInfo.tipo == InformacionDimensionDto.Ficticia)
                {
                    if (dimensionInfo.idConceptoEje == InformacionDimensionDto.ID_DIMENSION_TIEMPO)
                    {

                        for (int idxFecha = 0; idxFecha < fechas.Count; idxFecha++)
                        {
                            var fecha = fechas[idxFecha];

                            var miembroFecha = new MiembroDimensionDto();
                            miembroFecha.idDimension = dimensionInfo.idConceptoEje;
                            miembroFecha.informacionExtra = new Dictionary<string, object>();
                            miembroFecha.miembrosAgrupados = new List<MiembroDimensionDto>();
                            miembroFecha.informacionExtra["Tipo"] = fecha.Tipo;
                            miembroFecha.informacionExtra["FechaInicio"] = fecha.FechaInicio;
                            miembroFecha.informacionExtra["FechaFin"] = fecha.FechaFin;
                            miembroFecha.informacionExtra["FechaInstante"] = fecha.FechaInstante;
                            miembroFecha.indentacion = 0;
                            miembroFecha.visible = true;
                            //TODO Validar si es correcto el identificador
                            miembroFecha.idConceptoMiembro = idxFecha.ToString();
                            miembroFecha.esDimensionFicticia = true;
                            miembroFecha.titulo = fecha.Tipo == Period.Instante ? fecha.FechaInstante.ToString("yyyy-MM-dd") :
                                fecha.FechaInicio.ToString("yyyy-MM-dd") + " - " + fecha.FechaFin.ToString("yyyy-MM-dd");
                            dimensionInfo.miembros[miembroFecha.idConceptoMiembro] = miembroFecha;
                        }
                        if (fechas.Count == 0)
                        {
                            //Agregar un miembro default
                            var miembroFecha = new MiembroDimensionDto();
                            miembroFecha.idDimension = dimensionInfo.idConceptoEje;
                            miembroFecha.informacionExtra = new Dictionary<string, object>();
                            miembroFecha.informacionExtra["Tipo"] = "";
                            miembroFecha.informacionExtra["FechaInicio"] = "";
                            miembroFecha.informacionExtra["FechaFin"] = "";
                            miembroFecha.informacionExtra["FechaInstante"] = "";
                            miembroFecha.indentacion = 0;
                            miembroFecha.visible = true;
                            miembroFecha.idConceptoMiembro = "abax_sin_contexto";
                            miembroFecha.tieneContextoIndefinido = true;
                            miembroFecha.titulo = "Sin Fechas";
                            dimensionInfo.miembros[miembroFecha.idConceptoMiembro] = miembroFecha;
                        }

                        if (tabla.agruparFechas)
                        {
                            //Agrupar las fechas: los miembros de fecha de tipo instante se pueden agrupar con los periodos si:
                            //la fecha instante es igual a la fecha fin del periodo o 
                            //la fecha instante es igual a la fecha de inicio del periodo - 1 día
                            this.agruparDimensionFecha(dimensionInfo);
                        }

                    }
                    if (dimensionInfo.idConceptoEje == InformacionDimensionDto.ID_DIMENSION_ENTIDAD)
                    {
                        for (var idxEntidad = 0; idxEntidad < entidades.Count; idxEntidad++)
                        {
                            var entidad = entidades[idxEntidad];

                            var miembroEntidad = new MiembroDimensionDto();
                            miembroEntidad.idDimension = dimensionInfo.idConceptoEje;
                            miembroEntidad.informacionExtra = new Dictionary<string, object>();
                            miembroEntidad.informacionExtra["EsquemaId"] = entidad.EsquemaId;
                            miembroEntidad.informacionExtra["IdEntidad"] = entidad.IdEntidad;
                            miembroEntidad.indentacion = 0;
                            miembroEntidad.visible = true;
                            miembroEntidad.titulo = entidad.IdEntidad;
                            miembroEntidad.esDimensionFicticia = true;
                            //TODO Validar si es correcto el identificador
                            miembroEntidad.idConceptoMiembro = idxEntidad.ToString();
                            miembroEntidad.color = coloresEntidad[iColorEntidad];
                            iColorEntidad++;
                            dimensionInfo.miembros[miembroEntidad.idConceptoMiembro] = miembroEntidad;
                        }
                        if (entidades.Count == 0)
                        {
                            //Agregar un miembro default
                            var miembroEntidad = new MiembroDimensionDto();
                            miembroEntidad.idDimension = dimensionInfo.idConceptoEje;
                            miembroEntidad.informacionExtra = new Dictionary<string, object>();
                            miembroEntidad.informacionExtra["EsquemaId"] = "";
                            miembroEntidad.informacionExtra["IdEntidad"] = "";
                            miembroEntidad.indentacion = 0;
                            miembroEntidad.visible = true;
                            miembroEntidad.titulo = "Sin Entidades";
                            miembroEntidad.idConceptoMiembro = "abax_sin_contexto";
                            miembroEntidad.tieneContextoIndefinido = true;
                            dimensionInfo.miembros[miembroEntidad.idConceptoMiembro] = miembroEntidad;
                        }
                    }
                }
            }
            return listaHechos;
        }


        /** Agrupa los periodos de instante que corresponden al inicio o fin de alguna duración */
        public void agruparDimensionFecha(InformacionDimensionDto dimensionFecha)
        {
            var miembrosAgrupados = new Dictionary<string, MiembroDimensionDto>();
            foreach (var idxMiembro in dimensionFecha.miembros.Keys)
            {
                var miembroFecha = dimensionFecha.miembros[idxMiembro];

                //intentar agrupar los miembros
                foreach (var idxMiembroAgrupar in dimensionFecha.miembros.Keys)
                {
                    var miembroAgrupar = dimensionFecha.miembros[idxMiembroAgrupar];

                    if (this.puedeAgruparMiembro(miembroFecha, miembroAgrupar))
                    {
                        miembrosAgrupados[idxMiembroAgrupar] = miembroAgrupar;
                        miembroFecha.miembrosAgrupados.Add(miembroAgrupar);
                    }
                }
            }
            var miembrosFinales = new Dictionary<string, MiembroDimensionDto>();

            foreach (var idxMiembro in dimensionFecha.miembros.Keys)
            {
                if (!miembrosAgrupados.ContainsKey(idxMiembro))
                {
                    miembrosFinales[idxMiembro] = dimensionFecha.miembros[idxMiembro];
                }
            }
            dimensionFecha.miembros = miembrosFinales;
        }

        /// Verifica si el miembro a agrupar puede ser agrupado dentro del miembro fecha
        public bool puedeAgruparMiembro(MiembroDimensionDto miembroFecha, MiembroDimensionDto miembroAAgrupar)
        {
            if (miembroFecha.informacionExtra.ContainsKey("Tipo") && miembroAAgrupar.informacionExtra.ContainsKey("Tipo"))
            {
                if (miembroAAgrupar.informacionExtra["Tipo"] is int && miembroFecha.informacionExtra["Tipo"] is int)
                    if ((int)miembroFecha.informacionExtra["Tipo"] == Period.Duracion && (int)miembroAAgrupar.informacionExtra["Tipo"] == Period.Instante)
                    {
                        //Si el miembro a agrupar está al final del periodo: se agrupa
                        if (((DateTime)miembroFecha.informacionExtra["FechaFin"]).CompareTo(((DateTime)miembroAAgrupar.informacionExtra["FechaInstante"])) == 0)
                        {
                            return true;
                        }
                        //Si el miembro a agrupar está un dia antes del inicio del periodo, se agrupa
                        var fechaInicioInstante = ((DateTime)miembroAAgrupar.informacionExtra["FechaInstante"]).AddDays(1);
                        if (((DateTime)miembroFecha.informacionExtra["FechaInicio"]).CompareTo(fechaInicioInstante) == 0)
                        {
                            return true;
                        }

                    }
            }
            return false;
        }


        /***
        * Crea la estructura de encabezados para mostrar la tabla ya sea un hipercubo o una tabla 
        */
        public void crearEstructuraEncabezadosHipercubo(EstructuraTablaDto tabla, List<AbaxXBRLCore.Viewer.Application.Dto.HechoDto> listaHechos)
        {
            //calcular columnas y renglones
            var columnasTotales = 1;
            var renglonesTotales = 0;
            foreach (var dimensionInfo in tabla.encabezado.dimensiones)
            {
                var columnasDimensionActual = 0;
                var renglonesDimension = 0;
                foreach (var idxMiembro in dimensionInfo.miembros.Keys)
                {
                    var miembro = dimensionInfo.miembros[idxMiembro];
                    if (miembro.visible)
                    {
                        columnasDimensionActual++;
                    }
                    if (miembro.indentacion > renglonesDimension)
                    {
                        renglonesDimension = miembro.indentacion;
                    }
                }
                columnasTotales = columnasTotales * columnasDimensionActual;
                renglonesTotales += renglonesDimension + 1;
                dimensionInfo.profundidad = renglonesDimension + 1;
            }
            tabla.encabezado.columnasTotales = columnasTotales;
            tabla.encabezado.renglonesEncabezado = renglonesTotales;

            tabla.encabezado.dimensiones.Sort((dimA, dimB) => dimA.orden - dimB.orden);
            var dimensionesOrdenadas = tabla.encabezado.dimensiones;

            var coordenadaActual = new CoordenadaTablaDto();
            coordenadaActual.col = 0;
            coordenadaActual.row = 0;

            var tablaEncabezado = new Dictionary<int, Dictionary<int, CeldaTablaDto>>();

            for (var iRow = 0; iRow < tabla.encabezado.renglonesEncabezado; iRow++)
            {
                tablaEncabezado[iRow] = new Dictionary<int, CeldaTablaDto>();
                for (var iCol = 0; iCol < tabla.encabezado.columnasTotales; iCol++)
                {
                    //tablaEncabezado[iRow][iCol] = null;
                    tablaEncabezado[iRow][iCol] = new CeldaTablaDto();
                    tablaEncabezado[iRow][iCol].visible = true;
                    tablaEncabezado[iRow][iCol].numeroColumnas = 1;
                    tablaEncabezado[iRow][iCol].presentaTerminoAgrupacion = false;
                }
            }

            this.crearRenglonesEncabezado(dimensionesOrdenadas, dimensionesOrdenadas[0].subEstructuraOrigen.SubEstructuras, coordenadaActual, tablaEncabezado, 0);
            tabla.encabezado.tablaEncabezado = tablaEncabezado;

        }


        /**
        *Genera un color de la entidad
        */
        private string GenerarColorEntidad()
        {

            if (this.paletaColores == null)
            {
                string[] paleta = { "#B2EBF2", "#80DEEA", "#4DD0E1", "#26C6DA", "#00BCD4", "#0097A7", "#00838F", "#006064", "#84FFFF", "#18FFFF", "#00E5FF", "#00B8D4" };
                this.paletaColores = new List<string>();

                foreach (var color in paleta)
                {
                    this.paletaColores.Add(color);
                }
            }
            var random = new Random();

            var count = this.paletaColores.Count;
            var valorRandom = (random.Next() * 100) % count;
            var index = Math.Round(Convert.ToDecimal(valorRandom));

            index = index > 0 ? index - 1 : 0;

            return this.paletaColores.ToArray()[Convert.ToInt32(index)];
        }


        /**
         * Recorre la estructura del linkbase de presentación de un rol de la taxonomía para generar un objeto equivalente con la estructura del documento para poder presentarlo en pantalla.
         *
         * @param estructuras las estructuras que componen el linkbase de presentación del rol.
         * @param estructuraDocumento la estructura del documento que resulta del recorrido del linkbase de presentación.
         * @param elementoPredecesor el elemento del documento que precede al elemento que debe ser creado por la estructura que actualmente se está recorriendo.
         * @param indentacion el nivel de indentacion que debe aplicarse a los elementos creados para la estructura actual del linkbase de presentación.
         * @return el elemento del documento instancia que resultó de recorrer la estructura del linkbase de presentación.
         */
        public ElementoDocumentoDto recorrerArbolLinkbasePresentacion(IList<EstructuraFormatoDto> estructuras, IList<ElementoDocumentoDto> estructuraDocumento, ElementoDocumentoDto elementoPredecesor,
            int indentacion, AbaxXBRLCore.Viewer.Application.Dto.RolDto<EstructuraFormatoDto> rol)
        {
            ElementoDocumentoDto elementoDocumento = null;
            if (estructuras == null || estructuras.Count == 0) return null;
            for (var i = 0; i < estructuras.Count; i++)
            {
                var estructura = estructuras[i];
                var concepto = this.documentoInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];
                if (concepto.EsAbstracto != null && concepto.EsAbstracto.Value)
                {

                    //Si algún hijo es un hipercubo, crear la estructura de la tabla completa
                    if (this.algunHijoEsHipercubo(estructura))
                    {
                        //Crear el titulo del hipercubo
                        elementoDocumento = new ElementoDocumentoDto();
                        elementoDocumento.tipo = ElementoDocumentoDto.Titulo;
                        elementoDocumento.indentacion = indentacion;
                        elementoDocumento.idConcepto = concepto.Id;
                        estructuraDocumento.Add(elementoDocumento);



                        //Asegurarse de crear primero el hipercubo
                        EstructuraFormatoDto estructuraDeclaracionHipercubo = null;

                        for (var iSub = 0; iSub < estructura.SubEstructuras.Count; iSub++)
                        {
                            var estructuraDeHipercubo = estructura.SubEstructuras[iSub];
                            var conceptoDeHipercubo = this.documentoInstancia.Taxonomia.ConceptosPorId[estructuraDeHipercubo.IdConcepto];
                            if (conceptoDeHipercubo.EsHipercubo)
                            {
                                var tabla = this.crearTablaDimensional(estructuraDeHipercubo, rol);
                                elementoDocumento = new ElementoDocumentoDto();
                                elementoDocumento.tipo = ElementoDocumentoDto.Tabla;
                                elementoDocumento.indentacion = indentacion;
                                elementoDocumento.tabla = tabla;
                                estructuraDocumento.Add(elementoDocumento);
                                estructuraDeclaracionHipercubo = estructuraDeHipercubo;
                            }
                        }
                        for (var iSub = 0; iSub < estructura.SubEstructuras.Count; iSub++)
                        {
                            var estructuraDeHipercubo = estructura.SubEstructuras[iSub];
                            var conceptoDeHipercubo = this.documentoInstancia.Taxonomia.ConceptosPorId[estructuraDeHipercubo.IdConcepto];
                            if (!conceptoDeHipercubo.EsHipercubo)
                            {
                                this.agregarRenglonATabla(elementoDocumento.tabla, conceptoDeHipercubo, indentacion, estructura.RolEtiquetaPreferido);
                                this.recorrerArbolLinkbasePresentacion(estructuraDeHipercubo.SubEstructuras, estructuraDocumento, elementoDocumento, indentacion + 1, rol);
                            }
                        }
                        //Si el hipercubo no tiene elementos primario line items, tomarlos de los hijos del hipercubo que no sean dimensiones
                        //Esta consideración se agregó debido a que reportes de la sec no tenían line items como hermanos de los hipercubos
                        if (elementoDocumento != null && elementoDocumento.tabla != null && estructuraDeclaracionHipercubo != null)
                        {
                            if (elementoDocumento.tabla.renglones == null || elementoDocumento.tabla.renglones.Count == 0)
                            {
                                for (var iSub = 0; iSub < estructuraDeclaracionHipercubo.SubEstructuras.Count; iSub++)
                                {
                                    var estructuraHijaHipercubo = estructuraDeclaracionHipercubo.SubEstructuras[iSub];
                                    var conceptoDeHipercubo = this.documentoInstancia.Taxonomia.ConceptosPorId[estructuraHijaHipercubo.IdConcepto];
                                    if (conceptoDeHipercubo.EsDimension == null || (conceptoDeHipercubo.EsDimension != null && !conceptoDeHipercubo.EsDimension.Value))
                                    {
                                        this.agregarRenglonATabla(elementoDocumento.tabla, conceptoDeHipercubo, indentacion, estructuraDeclaracionHipercubo.RolEtiquetaPreferido);
                                        this.recorrerArbolLinkbasePresentacion(estructuraHijaHipercubo.SubEstructuras, estructuraDocumento, elementoDocumento, indentacion + 1, rol);
                                    }
                                }
                            }
                        }


                    }
                    else
                    {
                        if (this.algunDescendienteTieneHipercubo(estructura))
                        {
                            elementoDocumento = new ElementoDocumentoDto();
                            elementoDocumento.tipo = ElementoDocumentoDto.Titulo;
                            elementoDocumento.indentacion = indentacion;
                            elementoDocumento.idConcepto = estructura.IdConcepto;
                            estructuraDocumento.Add(elementoDocumento);
                            this.recorrerArbolLinkbasePresentacion(estructura.SubEstructuras, estructuraDocumento, null, indentacion + 1, rol);
                        }
                        else
                        {
                            if (elementoPredecesor != null && elementoPredecesor.tipo == ElementoDocumentoDto.Tabla)
                            {
                                this.agregarRenglonATabla(elementoPredecesor.tabla, concepto, indentacion, estructura.RolEtiquetaPreferido);
                                elementoDocumento = elementoPredecesor;
                                this.recorrerArbolLinkbasePresentacion(estructura.SubEstructuras, estructuraDocumento, elementoPredecesor, indentacion + 1, rol);
                            }
                            else
                            {
                                var tabla = this.crearTablaNoDimensional(concepto);
                                elementoDocumento = new ElementoDocumentoDto();
                                elementoDocumento.tipo = ElementoDocumentoDto.Tabla;
                                elementoDocumento.indentacion = indentacion;
                                elementoDocumento.tabla = tabla;
                                elementoDocumento.tabla.renglones[0].EsAbstracto = concepto.EsAbstracto!=null?concepto.EsAbstracto.Value:false;
                                estructuraDocumento.Add(elementoDocumento);
                                this.recorrerArbolLinkbasePresentacion(estructura.SubEstructuras, estructuraDocumento, elementoDocumento, 1, rol);
                            }
                        }
                    }
                }
                else
                {
                    if (this.algunDescendienteTieneHipercubo(estructura))
                    {
                        var tabla = this.crearTablaNoDimensional(concepto);

                        elementoDocumento = new ElementoDocumentoDto();
                        elementoDocumento.tipo = ElementoDocumentoDto.Tabla;
                        elementoDocumento.indentacion = indentacion;
                        elementoDocumento.tabla = tabla;
                        estructuraDocumento.Add(elementoDocumento);
                        this.recorrerArbolLinkbasePresentacion(estructura.SubEstructuras, estructuraDocumento, elementoDocumento, 1, rol);
                    }
                    else
                    {
                        if (elementoPredecesor != null && elementoPredecesor.tipo == ElementoDocumentoDto.Tabla)
                        {
                            this.agregarRenglonATabla(elementoPredecesor.tabla, concepto, indentacion, estructura.RolEtiquetaPreferido);
                            elementoDocumento = elementoPredecesor;
                            this.recorrerArbolLinkbasePresentacion(estructura.SubEstructuras, estructuraDocumento, elementoPredecesor, indentacion + 1, rol);
                        }
                        else
                        {
                            var tabla = this.crearTablaNoDimensional(concepto);

                            elementoDocumento = new ElementoDocumentoDto();
                            elementoDocumento.tipo = ElementoDocumentoDto.Tabla;
                            elementoDocumento.indentacion = indentacion;
                            elementoDocumento.tabla = tabla;
                            estructuraDocumento.Add(elementoDocumento);
                            this.recorrerArbolLinkbasePresentacion(estructura.SubEstructuras, estructuraDocumento, elementoDocumento, 1, rol);
                        }
                    }
                }
                elementoPredecesor = elementoDocumento;
            }

            return elementoDocumento;
        }

        //Verifica si en el siguiente nivel de hijos de la estructura hay alguna declaración de hipercubo
        private bool algunHijoEsHipercubo(EstructuraFormatoDto estructura)
        {

            if (estructura != null && estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
            {
                for (var iSub = 0; iSub < estructura.SubEstructuras.Count; iSub++)
                {
                    if (this.documentoInstancia.Taxonomia.ConceptosPorId.ContainsKey(estructura.SubEstructuras[iSub].IdConcepto))
                    {
                        var concepto = this.documentoInstancia.Taxonomia.ConceptosPorId[estructura.SubEstructuras[iSub].IdConcepto];
                        if (concepto.EsHipercubo)
                        {
                            return true;
                        }
                    }

                }
            }
            return false;
        }

        //Verfica si algún descendiente del nodo tiene un hipercubo declarado
        private bool algunDescendienteTieneHipercubo(EstructuraFormatoDto estructura)
        {
            bool resultado = false;

            if (estructura != null)
            {
                resultado = this.documentoInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto].EsHipercubo;
                if (!resultado && estructura.SubEstructuras != null && estructura.SubEstructuras.Count > 0)
                {
                    for (var i = 0; i < estructura.SubEstructuras.Count; i++)
                    {
                        resultado = this.algunDescendienteTieneHipercubo(estructura.SubEstructuras[i]);
                        if (resultado) break;
                    }
                }
            }
            return resultado;
        }

        //Agrega conceptos renglones a una estructura de tabla
        private void agregarRenglonATabla(EstructuraTablaDto tabla, ConceptoDto concepto, int indentacion, string rolEtiqueta)
        {

            var renglon = new RenglonTablaDto();
            renglon.idConcepto = concepto.Id;
            renglon.EsAbstracto = concepto.EsAbstracto!=null?concepto.EsAbstracto.Value:false;
            renglon.indentacion = indentacion;
            renglon.visible = true;
            renglon.rolEtiqueta = rolEtiqueta;

            tabla.renglones.Add(renglon);
        }

        //Crea la estructura de una tabla con las dimensiones de tiempo y entidad únicamente
        private EstructuraTablaDto crearTablaNoDimensional(ConceptoDto concepto)
        {
            var tabla = new EstructuraTablaDto();
            tabla.agruparFechas = true;
            tabla.encabezado = new EncabezadoTablaDto();
            var informacionDimensionTiempo = new InformacionDimensionDto();
            informacionDimensionTiempo.tipo = InformacionDimensionDto.Ficticia;
            informacionDimensionTiempo.titulo = "Periodo";
            informacionDimensionTiempo.idConceptoEje = InformacionDimensionDto.ID_DIMENSION_TIEMPO;
            informacionDimensionTiempo.subEstructuraOrigen = new EstructuraFormatoDto();
            informacionDimensionTiempo.subEstructuraOrigen.IdConcepto = InformacionDimensionDto.ID_DIMENSION_TIEMPO;
            informacionDimensionTiempo.orden = 0;
            var informacionDimensionEntidad = new InformacionDimensionDto();
            informacionDimensionEntidad.tipo = InformacionDimensionDto.Ficticia;
            informacionDimensionEntidad.titulo = "Entidad";
            informacionDimensionEntidad.idConceptoEje = InformacionDimensionDto.ID_DIMENSION_ENTIDAD;
            informacionDimensionEntidad.subEstructuraOrigen = new EstructuraFormatoDto();
            informacionDimensionEntidad.subEstructuraOrigen.IdConcepto = InformacionDimensionDto.ID_DIMENSION_ENTIDAD;
            informacionDimensionEntidad.orden = 1;

            tabla.encabezado.dimensionesPorId[informacionDimensionTiempo.idConceptoEje] = informacionDimensionTiempo;
            tabla.encabezado.dimensiones.Add(informacionDimensionTiempo);

            tabla.encabezado.dimensionesPorId[informacionDimensionEntidad.idConceptoEje] = informacionDimensionEntidad;
            tabla.encabezado.dimensiones.Add(informacionDimensionEntidad);

            var renglon = new RenglonTablaDto();
            renglon.idConcepto = concepto.Id;
            renglon.indentacion = 0;
            renglon.visible = true;

            tabla.renglones.Add(renglon);

            return tabla;
        }


        //Crea la estructura de una tabla dimensional incluidas las dimensiones de entidad y tiempo
        private EstructuraTablaDto crearTablaDimensional(EstructuraFormatoDto estructura, AbaxXBRLCore.Viewer.Application.Dto.RolDto<EstructuraFormatoDto> rol)
        {

            var concepto = this.documentoInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];
            if (!concepto.EsHipercubo) return null;

            var tabla = new EstructuraTablaDto();
            tabla.agruparFechas = true;
            tabla.encabezado = new EncabezadoTablaDto();

            var ordenDimensiones = 0;

            if (estructura.SubEstructuras != null)
            {
                for (var i = 0; i < estructura.SubEstructuras.Count; i++)
                {
                    var estructuraDimension = estructura.SubEstructuras[i];
                    var conceptoDimension = this.documentoInstancia.Taxonomia.ConceptosPorId[estructuraDimension.IdConcepto];
                    if (conceptoDimension.EsDimension != null && conceptoDimension.EsDimension.Value)
                    {
                        var informacionDimension = new InformacionDimensionDto();
                        informacionDimension.tipo = InformacionDimensionDto.Real;
                        informacionDimension.idConceptoEje = conceptoDimension.Id;
                        informacionDimension.orden = ordenDimensiones++;
                        //Localizar la dimensión en el inventario de hipercubos
                        var dimensionHipercubo = this.buscarDimensionEnHipercubo(conceptoDimension.Id, this.documentoInstancia.Taxonomia.ListaHipercubos);
                        if (dimensionHipercubo != null)
                        {
                            informacionDimension.subEstructuraOrigen = dimensionHipercubo;
                            if (dimensionHipercubo.SubEstructuras != null)
                            {
                                for (var j = 0; j < dimensionHipercubo.SubEstructuras.Count; j++)
                                {
                                    this.obtenerInformacionDimension(dimensionHipercubo.SubEstructuras[j], informacionDimension, 0);
                                }
                            }
                            tabla.encabezado.dimensionesPorId[informacionDimension.idConceptoEje] = informacionDimension;
                            tabla.encabezado.dimensiones.Add(informacionDimension);
                        }
                    }
                }
            }



            var informacionDimensionTiempo = new InformacionDimensionDto();
            informacionDimensionTiempo.tipo = InformacionDimensionDto.Ficticia;
            informacionDimensionTiempo.titulo = "Periodo";
            informacionDimensionTiempo.idConceptoEje = InformacionDimensionDto.ID_DIMENSION_TIEMPO;
            informacionDimensionTiempo.subEstructuraOrigen = new EstructuraFormatoDto();
            informacionDimensionTiempo.subEstructuraOrigen.IdConcepto = InformacionDimensionDto.ID_DIMENSION_TIEMPO;

            informacionDimensionTiempo.orden = ordenDimensiones++; ;
            var informacionDimensionEntidad = new InformacionDimensionDto();
            informacionDimensionEntidad.tipo = InformacionDimensionDto.Ficticia;
            informacionDimensionEntidad.titulo = "Entidad";
            informacionDimensionEntidad.idConceptoEje = InformacionDimensionDto.ID_DIMENSION_ENTIDAD;
            informacionDimensionEntidad.subEstructuraOrigen = new EstructuraFormatoDto();
            informacionDimensionEntidad.subEstructuraOrigen.IdConcepto = InformacionDimensionDto.ID_DIMENSION_ENTIDAD;
            informacionDimensionEntidad.orden = ordenDimensiones++; ;

            tabla.encabezado.dimensionesPorId[informacionDimensionTiempo.idConceptoEje] = informacionDimensionTiempo;
            tabla.encabezado.dimensiones.Add(informacionDimensionTiempo);

            tabla.encabezado.dimensionesPorId[informacionDimensionEntidad.idConceptoEje] = informacionDimensionEntidad;
            tabla.encabezado.dimensiones.Add(informacionDimensionEntidad);


            return tabla;
        }

        //Busca una dimensión en específico dentro de una lista de las declaraciones de los roles de la taxonomía
        private EstructuraFormatoDto buscarDimensionEnHipercubo(string idDimension, IDictionary<string, IList<HipercuboDto>> hipercubosRol)
        {
            EstructuraFormatoDto dimensionBuscada = null;

            if (hipercubosRol != null)
            {
                foreach (var rol in hipercubosRol.Keys)
                {
                    var listaHipercubos = hipercubosRol[rol];
                    if (listaHipercubos != null)
                    {
                        foreach (var hipercubo in listaHipercubos)
                        {

                            if (hipercubo.EstructuraDimension.ContainsKey(idDimension))
                            {
                                //dimension encontrada
                                dimensionBuscada = new EstructuraFormatoDto();
                                dimensionBuscada.IdConcepto = idDimension;
                                dimensionBuscada.SubEstructuras = hipercubo.EstructuraDimension[idDimension];
                                break;
                            }
                        }
                    }

                }
            }
            return dimensionBuscada;

        }


        //Obtiene la información no estructurada (en forma de lista) de una estructura de árbol de los miembros de una dimensión
        private void obtenerInformacionDimension(EstructuraFormatoDto estructura, InformacionDimensionDto informacionDimension, int indentacion)
        {
            if (estructura != null)
            {
                var conceptoMiembro = this.documentoInstancia.Taxonomia.ConceptosPorId[estructura.IdConcepto];
                if (conceptoMiembro.EsMiembroDimension != null && conceptoMiembro.EsMiembroDimension.Value)
                {

                    var miembroDimension = new MiembroDimensionDto();
                    miembroDimension.idDimension = informacionDimension.idConceptoEje;
                    miembroDimension.idConceptoMiembro = conceptoMiembro.Id;
                    miembroDimension.indentacion = indentacion;
                    miembroDimension.visible = true;

                    informacionDimension.miembros[miembroDimension.idConceptoMiembro] = miembroDimension;
                    if (estructura.SubEstructuras != null)
                    {
                        for (var i = 0; i < estructura.SubEstructuras.Count; i++)
                        {
                            this.obtenerInformacionDimension(estructura.SubEstructuras[i], informacionDimension, indentacion + 1);
                        }
                    }
                }
            }
        }

        public void crearRenglonesEncabezado(List<InformacionDimensionDto> dimensiones, IList<EstructuraFormatoDto> estructuras, CoordenadaTablaDto coordenadas, Dictionary<int, Dictionary<int, CeldaTablaDto>> tablaEncabezado, int dimActual)
        {
            var dimension = dimensiones[dimActual];


            if (dimension.tipo == InformacionDimensionDto.Real)
            {
                if (estructuras != null)
                    foreach (var miembro in estructuras)
                    {
                        var rowInicial = coordenadas.row;
                        var colInicial = coordenadas.col;
                        var colInicioMiembroPadre = -1;


                        var infoMiembro = dimension.miembros[miembro.IdConcepto];
                        var nodoHoja = true;
                        if (miembro.SubEstructuras != null && miembro.SubEstructuras.Count > 0)
                        {
                            coordenadas.row += 1;
                            this.crearRenglonesEncabezado(dimensiones, miembro.SubEstructuras, coordenadas, tablaEncabezado, dimActual);
                            nodoHoja = false;
                        }

                        if (infoMiembro.visible)
                        {
                            //Siguiente dimension
                            if (dimActual + 1 < dimensiones.Count)
                            {
                                //Avanzar y tantas posiciones como indentación le haga falta el padre
                                coordenadas.row = rowInicial + dimension.profundidad - dimension.miembros[miembro.IdConcepto].indentacion;
                                colInicioMiembroPadre = coordenadas.col;

                                this.crearRenglonesEncabezado(dimensiones, dimensiones[dimActual + 1].subEstructuraOrigen.SubEstructuras, coordenadas, tablaEncabezado, dimActual + 1);
                                nodoHoja = false;
                            }
                        }


                        if (infoMiembro.visible || !nodoHoja)
                        {
                            //Sea o no nodo hoja, si es la última dimensión se avanza la columna 
                            if (colInicioMiembroPadre == -1)
                            {
                                coordenadas.col++;
                            }

                            var colspan = coordenadas.col - colInicial;
                            var rowspan = coordenadas.row - rowInicial;
                            for (var iCol = colInicial; iCol <= colInicial + colspan - 1; iCol++)
                            {
                                tablaEncabezado[rowInicial][iCol] = new CeldaTablaDto();
                                tablaEncabezado[rowInicial][iCol].visible = true;
                                tablaEncabezado[rowInicial][iCol].miembroDimension = dimension.miembros[miembro.IdConcepto];
                                tablaEncabezado[rowInicial][iCol].miembroDimension.titulo = miembro.IdConcepto;
                                tablaEncabezado[rowInicial][iCol].numeroColumnas = 1;
                                tablaEncabezado[rowInicial][iCol].rowspan = dimension.profundidad - dimension.miembros[miembro.IdConcepto].indentacion + 1;
                            }
                            coordenadas.row = rowInicial;
                        }
                    }
            }
            else
            {
                //Dimensiones ficticias
                foreach (var idExs in dimension.miembros.Keys)
                {
                    var miembroFicticio = dimension.miembros[idExs];
                    if (miembroFicticio.visible)
                    {
                        var colInicial = coordenadas.col;
                        var rowInicial = coordenadas.row;
                        //Siguiente dimension
                        if (dimActual + 1 < dimensiones.Count)
                        {
                            //Avanzar y tantas posiciones como indentación le haga falta el padre
                            coordenadas.row += dimension.profundidad - dimension.miembros[miembroFicticio.idConceptoMiembro].indentacion;
                            this.crearRenglonesEncabezado(dimensiones, dimensiones[dimActual + 1].subEstructuraOrigen.SubEstructuras, coordenadas, tablaEncabezado, dimActual + 1);
                        }
                        else
                        {
                            coordenadas.col++;
                        }
                        var colspan = coordenadas.col - colInicial;
                        var rowspan = coordenadas.row - rowInicial;
                        for (var iCol = colInicial; iCol <= colInicial + colspan - 1; iCol++)
                        {

                            tablaEncabezado[rowInicial][iCol] = new CeldaTablaDto();
                            tablaEncabezado[rowInicial][iCol].visible = true;
                            tablaEncabezado[rowInicial][iCol].miembroDimension = miembroFicticio;
                            tablaEncabezado[rowInicial][iCol].numeroColumnas = 1;

                        }
                        coordenadas.row = rowInicial;
                    }
                }
            }
        }


        /** Obtiene los diferentes conjuntos de fechas encontrados en los hechos enviados como parámetro */
        public List<PeriodoDto> obtenerDiferentesFechasDeHechos(List<AbaxXBRLCore.Viewer.Application.Dto.HechoDto> listaHechos)
        {
            var self = this;
            var listaPeriodos = new List<PeriodoDto>();
            var listaContextosRevisados = new Dictionary<string, string>();

            foreach (var hecho in listaHechos)
            {

                if (hecho.IdContexto != null && this.documentoInstancia.ContextosPorId.ContainsKey(hecho.IdContexto)
                    && !listaContextosRevisados.ContainsKey(hecho.IdContexto))
                {

                    var ctx = self.documentoInstancia.ContextosPorId[hecho.IdContexto];
                    //Si no es igual a ningún periodo registrado, agregar el periodo
                    var encontrado = false;
                    foreach (var periodo in listaPeriodos)
                    {

                        if (periodo.EstructuralmenteIgual(ctx.Periodo))
                        {
                            encontrado = true;
                            break;
                        }
                    }
                    if (!encontrado)
                    {
                        //agregar
                        listaPeriodos.Add(ctx.Periodo);
                        listaContextosRevisados[ctx.Id] = ctx.Id;
                    }
                }
            }
            return listaPeriodos;
        }


        /** Obtiene los diferentes conjuntos de entidades (únicamente considerando el URI y el ID) encontrados en los hechos enviados como parámetro */
        public List<EntidadDto> obtenerDiferentesEntidadesDeHechos(List<AbaxXBRLCore.Viewer.Application.Dto.HechoDto> listaHechos)
        {
            var self = this;
            var listaEntidades = new List<EntidadDto>();
            var listaContextosRevisados = new Dictionary<string, string>();

            foreach (var hecho in listaHechos)
            {

                if (hecho.IdContexto != null && this.documentoInstancia.ContextosPorId.ContainsKey(hecho.IdContexto) && !listaContextosRevisados.ContainsKey(hecho.IdContexto))
                {
                    var ctx = self.documentoInstancia.ContextosPorId[hecho.IdContexto];
                    //Si no es igual a ningúna entidad registrada, agregar la entidad
                    var encontrado = false;
                    foreach (var entidad in listaEntidades)
                    {
                        if (entidad.EsquemaId == ctx.Entidad.EsquemaId && entidad.IdEntidad == ctx.Entidad.IdEntidad)
                        {
                            encontrado = true;
                            break;
                        }
                    }
                    if (!encontrado)
                    {
                        //agregar
                        listaEntidades.Add(ctx.Entidad);
                        listaContextosRevisados[ctx.Id] = ctx.Id;
                    }
                }
            }
            return listaEntidades;
        }

        /**
        * Busca todos los hechos de un documento de instancia que correspondan a algún concepto de la lista
        de conceptos enviada como parámetro.
        *
        */
        public List<AbaxXBRLCore.Viewer.Application.Dto.HechoDto> obtenerHechosEnDocumentoPorIdConceptos(List<string> idConceptos)
        {
            var hechosResultado = new List<AbaxXBRLCore.Viewer.Application.Dto.HechoDto>();
            var self = this;
            if (self.documentoInstancia != null && self.documentoInstancia.HechosPorIdConcepto != null)
            {

                foreach (var idConceptoBuscado in idConceptos)
                {

                    if (self.documentoInstancia.HechosPorIdConcepto.ContainsKey(idConceptoBuscado) &&
                        self.documentoInstancia.HechosPorIdConcepto[idConceptoBuscado].Count > 0)
                    {

                        foreach (var idHecho in self.documentoInstancia.HechosPorIdConcepto[idConceptoBuscado])
                        {

                            if (self.documentoInstancia.HechosPorId.ContainsKey(idHecho))
                            {
                                hechosResultado.Add(self.documentoInstancia.HechosPorId[idHecho]);
                            }
                        }
                    }
                }
            }
            return hechosResultado;
        }

    }
}
