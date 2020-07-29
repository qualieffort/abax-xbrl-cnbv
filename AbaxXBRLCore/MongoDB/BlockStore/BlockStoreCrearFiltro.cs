using System.Collections.Generic;
using AbaxXBRLBlockStore.Common.Constants;
using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLBlockStore.Common.Enum;

namespace AbaxXBRLBlockStore.BlockStore
{
    /// <summary>
    /// 
    /// </summary>
    public class BlockStoreCrearFiltro
    {
       
        public string crearCadenaFiltro(string strIdTaxonomia, string lstIdEntidad, string strConceptoId, string strFechaInicial, string strFecha, string lstMedidas, string lstMedidasDenominador, string lstDimensionEspaciodeNombre, string lstDimensionNombre, string lstDimensionNombreElementoMiembro, string lstDimensionElementoMiembroTipificado)
        {
            return crearCadenaFiltro(initFiltro(strIdTaxonomia, lstIdEntidad, strConceptoId, strFechaInicial, strFecha, lstMedidas, lstMedidasDenominador, lstDimensionEspaciodeNombre, lstDimensionNombre, lstDimensionNombreElementoMiembro, lstDimensionElementoMiembroTipificado));
        }

       
        public string crearCadenaFiltro(EntFiltroBlockStoreHechos filtroBlockStoreHechos)
        {
            var enumArmadoFiltro = EnumMongoArmadoFiltro.todo;
            if (string.IsNullOrEmpty(filtroBlockStoreHechos.MedidaTipoMedidaNombre)) enumArmadoFiltro += 1;
            if (string.IsNullOrEmpty(filtroBlockStoreHechos.DimensionNombre)) enumArmadoFiltro += 2;
            return crearCadenaFiltro(enumArmadoFiltro, filtroBlockStoreHechos);
        }

       
        public List<string> crearCadenaFiltro(EntFiltroBlockStoreMultiHechos filtroBlockStoreMultiHechos)
        {
            var filtros = new List<string>();
            var filtroBlockStoreHechos = new EntFiltroBlockStoreHechos { EspacioNombresPrincipal = filtroBlockStoreMultiHechos.EspacioNombresPrincipal };
            foreach (var itemIdEntidad in filtroBlockStoreMultiHechos.ListaIdEntidad)
            {
                filtroBlockStoreHechos.IdEntidad = itemIdEntidad;
                foreach (var itemPeriodo in filtroBlockStoreMultiHechos.ListaPeriodo)
                {
                    filtroBlockStoreHechos.PeriodoFechaInicial = itemPeriodo.PeriodoFechaInicial;
                    filtroBlockStoreHechos.PeriodoFechaFinal = itemPeriodo.PeriodoFecha;
                    foreach (var itemMedida in filtroBlockStoreMultiHechos.ListaMedida)
                    {
                        filtroBlockStoreHechos.MedidaTipoMedidaNombre = itemMedida.MedidaTipoMedidaNombre;
                        filtroBlockStoreHechos.MedidaTipoMedidaNumeradorNombre = itemMedida.MedidaTipoMedidaDenominadorNombre;
                        foreach (var itemConceptoDimension in filtroBlockStoreMultiHechos.ListaConceptoDimension)
                        {
                            filtroBlockStoreHechos.ConceptoId = itemConceptoDimension.ConceptoId;
                            filtroBlockStoreHechos.DimensionEspaciodeNombre = itemConceptoDimension.DimensionEspaciodeNombre;
                            filtroBlockStoreHechos.DimensionNombre = itemConceptoDimension.DimensionNombre;
                            filtroBlockStoreHechos.DimensionNombreElementoMiembro = itemConceptoDimension.DimensionNombreElementoMiembro;
                            filtroBlockStoreHechos.DimensionElementoMiembroTipificado = itemConceptoDimension.DimensionElementoMiembroTipificado;
                            filtros.Add(crearCadenaFiltro(filtroBlockStoreHechos));
                        }
                    }
                }
            }
            return filtros;
        }

       
        public string crearCadenaFiltro(EnumMongoArmadoFiltro enumMongoArmadoFiltro, EntFiltroBlockStoreHechos filtroBlockStoreHechos)
        {

            var filtro = string.Format(ConstBlockStoreHechos.FiltroConsultaRepetidos, filtroBlockStoreHechos.EspacioNombresPrincipal, filtroBlockStoreHechos.IdEntidad, filtroBlockStoreHechos.ConceptoId);

            var valoresExtras="";

            if (filtroBlockStoreHechos.PeriodoFechaInstante!=null) {
                valoresExtras = string.Format(",'periodo.FechaInstante' : {0}", filtroBlockStoreHechos.PeriodoFechaInstante);
            }else{
                valoresExtras= string.Format(",'periodo.FechaInicio' : {0} , 'periodo.FechaFin' : {1} ",filtroBlockStoreHechos.PeriodoFechaInicial,filtroBlockStoreHechos.PeriodoFechaFinal);
            }

            if(filtroBlockStoreHechos.MedidaTipoMedidaNumeradorNombre!=null){
                valoresExtras += string.Format(",'unidades.MedidasNumerador.Nombre' : {{ '$all' : [{0}] }} ", filtroBlockStoreHechos.MedidaTipoMedidaNumeradorNombre);
            }


            if (filtroBlockStoreHechos.MedidaTipoMedidaNombre != null)
            {
                valoresExtras += string.Format(",'unidades.Medidas.Nombre' : {{ '$all' : [{0}] }} ", filtroBlockStoreHechos.MedidaTipoMedidaNombre);
            }

            if (filtroBlockStoreHechos.DimensionNombre != null)
            {
                valoresExtras += string.Format(",'dimension.IdDimension': {{ '$all' : [{0}] }}", filtroBlockStoreHechos.DimensionNombre);
            }

            if (filtroBlockStoreHechos.DimensionEspaciodeNombre != null)
            {
                valoresExtras += string.Format(",'dimension.QNameDimension': {{ '$all' : [{0}] }}", filtroBlockStoreHechos.DimensionEspaciodeNombre);
            }

            if (filtroBlockStoreHechos.DimensionNombreElementoMiembro != null)
            {
                valoresExtras += string.Format(",'dimension.IdItemMiembro': {{ '$all' : [{0}] }}", filtroBlockStoreHechos.DimensionNombreElementoMiembro);
            }

            if (filtroBlockStoreHechos.DimensionElementoMiembroTipificado != null)
            {
                valoresExtras += string.Format(",'dimension.ElementoMiembroTipificado': {{ '$all' : [{0}] }}", filtroBlockStoreHechos.DimensionElementoMiembroTipificado);
            }


            filtro = filtro.Replace("valoresExtras",valoresExtras);
            return filtro;
        }

       
        public EntFiltroBlockStoreHechos initFiltro(string strIdTaxonomia, string lstIdEntidad, string strConceptoId, string strFechaInicial, string strFecha, string lstMedidas, string lstMedidasDenominador, string lstDimensionEspaciodeNombre, string lstDimensionNombre, string lstDimensionNombreElementoMiembro, string lstDimensionElementoMiembroTipificado)
        {
            return new EntFiltroBlockStoreHechos { EspacioNombresPrincipal = strIdTaxonomia, IdEntidad = lstIdEntidad, ConceptoId = strConceptoId, PeriodoFechaInicial = strFechaInicial, PeriodoFechaFinal = strFecha, MedidaTipoMedidaNombre = lstMedidas, MedidaTipoMedidaNumeradorNombre = lstMedidasDenominador, DimensionEspaciodeNombre = lstDimensionEspaciodeNombre, DimensionNombre = lstDimensionNombre, DimensionNombreElementoMiembro = lstDimensionNombreElementoMiembro, DimensionElementoMiembroTipificado = lstDimensionElementoMiembroTipificado };
        }

    }
}
