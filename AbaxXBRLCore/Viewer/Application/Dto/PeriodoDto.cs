using AbaxXBRL.Taxonomia;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace AbaxXBRLCore.Viewer.Application.Dto
{
    /// <summary>
    /// Implementación de un Data Transfer Object el cual representa un periodo o instante de tiempo en cual es reportada la información dentro de un Contexto de un documento instancia XBRL.
    /// <author>José Antonio Huizar Moreno</author>
    /// <version>1.0</version>
    /// </summary>
    public class PeriodoDto
    {
        /// <summary>
        /// Indica que el periodo representa una fecha instante
        /// </summary>
        public const int Instante = 1;

        /// <summary>
        /// Indica que el periodo representa un intervalo de fechas.
        /// </summary>
        public const int Duracion = 2;

        /// <summary>
        /// Indica que el periodo representa un intervalo "para siempre".
        /// </summary>
        public const int ParaSiempre = 3;
        /// <summary>
        /// El tipo de periodo
        /// </summary>
        public int Tipo { get; set; }

        /// <summary>
        /// La fecha que representa un instante de tiempo
        /// </summary>
        public DateTime FechaInstante { get; set; }

        /// <summary>
        /// La fecha de inicio del intervalo de tiempo
        /// </summary>
        public DateTime FechaInicio { get; set; }

        /// <summary>
        /// La fecha de fin del intervalo de tiempo
        /// </summary>
        public DateTime FechaFin { get; set; }

        /// <summary>
        /// Compara dos elementos de la clase Periodo y determina si son estructuralmente iguales.
        /// </summary>
        /// <param name="periodo">el periodo contra el cual se comparará este objeto Periodo.</param>
        /// <returns>true si los dos objetos periodo son estructuralmente iguales. false en cualquier otro caso.</returns>
        public bool EstructuralmenteIgual(PeriodoDto periodo) {
            bool resultado = true;

            if (periodo == null) {
                resultado = false;
            } else {
                if (this.Tipo != periodo.Tipo) {
                    resultado = false;
                } else {
                    if (this.Tipo == Period.Instante) {
                        if ((this.FechaInstante != null && periodo.FechaInstante == null) || (periodo.FechaInstante != null && this.FechaInstante == null)) {
                            return false;
                        } else {
                            if (this.FechaInstante != null && periodo.FechaInstante != null && !this.FechaInstante.Date.Equals(periodo.FechaInstante.Date)) {
                                resultado = false;
                            }
                        }
                    } else {
                        if ((this.FechaInicio != null && periodo.FechaInicio == null) || (periodo.FechaInicio != null && this.FechaInicio == null)) {
                            return false;
                        } else {
                            if (this.FechaInicio != null && periodo.FechaInicio != null && !this.FechaInicio.Date.Equals(periodo.FechaInicio.Date)) {
                                resultado = false;
                            }
                        }
                        if ((this.FechaFin != null && periodo.FechaFin == null) || (periodo.FechaFin != null && this.FechaFin == null)) {
                            return false;
                        } else {
                            if (this.FechaFin != null && periodo.FechaFin != null && !this.FechaFin.Equals(periodo.FechaFin)) {
                                resultado = false;
                            }
                        }
                    }
                }
            }

            return resultado;
        }
    }
}
