using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.CellStore.Modelo;
using AbaxXBRLCore.Viewer.Application.Dto;
using System.Collections.Generic;

namespace AbaxXBRLCore.CellStore.Adapter
{
    public class ConceptoAdapter
    {
        public ConceptoDto ConceptoDto { get; }

        public EntConcepto EntConcepto { get; }

        public ConceptoAdapter(ConceptoRolPresentacion conceptoRol)
        {
            this.ConceptoDto = new ConceptoDto
            {
                Tipo = conceptoRol.Tipo,
                Balance = conceptoRol.Balance,
                TipoDato = conceptoRol.TipoDato,
                TipoDatoXbrl = conceptoRol.TipoDato,
                Nombre = conceptoRol.Nombre,
                EspacioNombres = conceptoRol.EspacioNombres,
                Id = conceptoRol.IdConcepto,
                EsHipercubo = conceptoRol.EsHipercubo,
                EsDimension = conceptoRol.EsDimension,
                EsAbstracto = conceptoRol.EsAbstracto,
                EsMiembroDimension = conceptoRol.EsMiembroDimension,
                EtiquetasConcepto = AdaptarEtiquetas(conceptoRol.Etiquetas)
            };
        }

        public ConceptoAdapter(Concepto concepto)
        {
            this.EntConcepto = new EntConcepto
            {
                Id = concepto.IdConcepto,
                Nombre = concepto.Nombre,
                EspacioNombres = concepto.EspacioNombres,
                etiqueta = AdaptarEtiquetasEntity(concepto.Etiquetas)
            };
        }

        private List<EntEtiqueta> AdaptarEtiquetasEntity(IList<Etiqueta> etiquetasRol)
        {
            List<EntEtiqueta> etiquetas = new List<EntEtiqueta>();

            foreach (Etiqueta etiqueta in etiquetasRol)
            {
                EntEtiqueta entEtiqueta = new EtiquetaAdapter(etiqueta, true).EntEtiqueta;

                etiquetas.Add(entEtiqueta);
            }

            return etiquetas;
        }

        private EtiquetaDto[] AdaptarEtiquetas(IList<Etiqueta> etiquetasRol)
        {
            List<EtiquetaDto> etiquetas = new List<EtiquetaDto>();

            foreach (Etiqueta etiqueta in etiquetasRol) {
                EtiquetaDto etiquetaDto = new EtiquetaAdapter(etiqueta).EtiquetaDto;

                etiquetas.Add(etiquetaDto);
            }

            return etiquetas.ToArray();
        }
    }
}
