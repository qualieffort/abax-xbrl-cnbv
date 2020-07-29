using AbaxXBRLCore.Viewer.Application.Import;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Common.Dtos
{
    /// <summary>
    /// DTO que contiene el resumen de la información de la importación de un archivo de excel
    /// </summary>
    public class ResumenProcesoImportacionExcelDto
    {
        /// <summary>
        /// Lista de errores de importación
        /// </summary>
        public List<InformeErrorImportacion> InformeErrores { get; set; }
        /// <summary>
        /// Lista de hechos sobreescritos
        /// </summary>
        public List<InformacionHechoSobreescritoDto> HechosSobreescritos { get; set; }
        /// <summary>
        /// Información de hechos importados organizados por ID de concepto
        /// </summary>
        public Dictionary<String,List<InformacionHechoImportadoExcelDto>> HechosImportados { get; set; }
        /// <summary>
        /// Conteo total de hechos importados
        /// </summary>
        public int TotalHechosImportados { get; set; }
        /// <summary>
        /// Agrega un nuevo hecho importado al listado y verifica si es un hecho que sobreescribe a otro
        /// </summary>
        /// <param name="hechoImportado">Hecho que se importa</param>
        public void AgregarHechoImportado(InformacionHechoImportadoExcelDto hechoImportado, String nombreConcepto) {
            if (!HechosImportados.ContainsKey(hechoImportado.IdConcepto))
            {
                HechosImportados.Add(hechoImportado.IdConcepto, new List<InformacionHechoImportadoExcelDto>());
            }
            //Verificar si ya existe una importación a ese hecho y si el valor el diferente
            InformacionHechoImportadoExcelDto hechoInicial = HechosImportados[hechoImportado.IdConcepto].
                FirstOrDefault(x => x.IdHecho.Equals(hechoImportado.IdHecho) && !x.ValorImportado.Equals(hechoImportado.ValorImportado));
            if (hechoInicial != null)
            {
                var valTmp = hechoInicial.ValorImportado;
                if (valTmp.Length > 30) {
                    valTmp = valTmp.Substring(0, 30) + "...";
                }
                var valTmpFinal = hechoImportado.ValorImportado;
                if (valTmpFinal.Length > 30)
                {
                    valTmpFinal = valTmpFinal.Substring(0, 30) + "...";
                }
                //Hecho sobreescrito
                HechosSobreescritos.Add(new InformacionHechoSobreescritoDto() {
                    IdConcepto = hechoImportado.IdConcepto,
                    IdHecho = hechoImportado.IdHecho,
                    ValorInicial = valTmp,
                    ValorFinal = valTmpFinal,
                    HojaInicial = hechoInicial.HojaExcel,
                    HojaFinal = hechoImportado.HojaExcel,
                    Mensaje = "El concepto (" + nombreConcepto + ") fue importado desde la hoja (" + hechoInicial.HojaExcel + ") con valor (" + valTmp +
                    ") pero fue importado nuevamente desde la hoja ("+ hechoImportado.HojaExcel+")"
                });
              
            }
            HechosImportados[hechoImportado.IdConcepto].Add(hechoImportado);
        }
        /// <summary>
        /// Crea un nuevo informe de error con el mensaje correspondiente a un error de formato de campo
        /// </summary>
        /// <param name="nombreConcepto">Nombre del concepto que genera el error</param>
        /// <param name="hoja">Hoja donde se originó el error</param>
        /// <param name="renglon">Renglón origen del error</param>
        /// <param name="columna">Columna origen del error</param>
        /// <param name="valorImportado">Valor leído del excel</param>
        public void AgregarErrorFormato(String nombreConcepto, String hoja, String renglon, String columna, String valorImportado) {
            var valTmpFinal = valorImportado;
            if (valTmpFinal.Length > 30)
            {
                valTmpFinal = valTmpFinal.Substring(0, 30) + "...";
            }
            InformeErrores.Add(new InformeErrorImportacion(){
                Mensaje = "No se pudo importar el valor del concepto (" + nombreConcepto + "), de la hoja (" + hoja +
                                            ") debido a que el formato no es correcto. (Renglón: "+(renglon) +", Columna:"+(columna)+")",
                Hoja = hoja,
                Renglon = renglon,
                Columna = columna,
                ValorLeido = valTmpFinal
            });

            
        }
    }
}
