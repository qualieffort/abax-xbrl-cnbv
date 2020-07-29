using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.MongoDB.Common.Entity;
using System.Collections.Generic;

namespace AbaxXBRLCore.CellStore.Adapter
{
    public class HechoAdapter
    {
        public EntHechoCheckun EntHechoCheckun { get; }

        public HechoAdapter(Hecho hecho)
        {
            this.EntHechoCheckun = new EntHechoCheckun
            {
                idTaxonomia = hecho.Taxonomia,
                idEntidad = hecho.Entidad.Nombre,
                espaciodeNombresEntidad = hecho.Entidad.Esquema,
                espacioNombresPrincipal = hecho.Taxonomia,
                codigoHashRegistro = hecho.IdHecho,
                tipoDato = hecho.Concepto.TipoDato,
                esTipoDatoNumerico = hecho.EsNumerico,
                valor = hecho.Valor,
                valorRedondeado = hecho.ValorNumerico.ToString(),
                esValorChunks = hecho.EsValorChunks,
                decimales = hecho.Decimales,
                esTipoDatoFraccion = hecho.EsFraccion,
                esValorNil = hecho.EsValorNil,
                concepto = new ConceptoAdapter(hecho.Concepto).EntConcepto,
                periodo = new PeriodoAdapter(hecho.Periodo).EntPeriodo,
                unidades = new UnidadAdapter(hecho.Unidad).EntUnidades,
                dimension = AdaptarDimensionesEntity(hecho.MiembrosDimensionales)
            };

            this.EntHechoCheckun.concepto.EspacioNombresTaxonomia = hecho.Taxonomia;
        }

        private EntDimension[] AdaptarDimensionesEntity(IList<MiembrosDimensionales> miembrosDimensionales)
        {
            List<EntDimension> dimensiones = new List<EntDimension>();

            foreach (MiembrosDimensionales dimension in miembrosDimensionales)
            {
                EntDimension entDimension = new DimensionAdapter(dimension).EntDimension;

                dimensiones.Add(entDimension);
            }

            return dimensiones.ToArray();
        }
    }
}
