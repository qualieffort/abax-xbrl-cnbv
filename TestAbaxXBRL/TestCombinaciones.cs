using AbaxXBRLCore.Common.Util;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestAbaxXBRL
{
    [TestClass]
    public class TestCombinaciones
    {
        [TestMethod]
        public void TestConbinacionesNArias()
        {
            LogUtil.LogDirPath = @"..\..\TestOutput\";
            LogUtil.Inicializa();

            IList<IList<String>> conjuntosOrigen = new List<IList<String>>()
            {
                new List<String>(){ "Acciones"},
                new List<String>(){ "Certificados bursátiles de largo plazo" },
                new List<String>(){ "Certificados bursátiles de corto plazo" },
                new List<String>(){ "Valores estructurados de corto plazo" },
                new List<String>(){ "Valores estructurados de largo plazo" },
                new List<String>(){ "Certificados de Participación Ordinaria (CPOs)" },

            };

            for (var index = 0; index < conjuntosOrigen.Count; index++)
            {
                var lista = ConbinaSinRepetirMiembros(conjuntosOrigen, (index + 1));
                var listacadena = GeneraCadena(lista);
                LogUtil.Info("Iteracion: " + (index + 1)  + "\n" + listacadena);
            }
        }

        public String GeneraCadena(IList<IList<String>> listaConjuntos)
        {
            StringBuilder bulider = new StringBuilder();
            foreach (IList<String> conjunto in listaConjuntos)
            {
                bulider.Append("\n");
                var builderLine = new StringBuilder();
                foreach (String miembro in conjunto)
                {
                    builderLine.Append(",");
                    builderLine.Append(miembro);
                }
                bulider.Append(builderLine.ToString().Substring(1));
            }
            return bulider.ToString().Substring(1);
        }

        public IList<IList<String>> ConbinaSinRepetirMiembros(IList<IList<String>> listaConjuntosA, int iteraciones)
        {
            IList<IList<String>> listaCombinaciones = new List<IList<String>>();
            for (var index = 0; index < iteraciones; index++)
            {
                listaCombinaciones = ConbinaSinRepetirMiembros(listaCombinaciones, listaConjuntosA, (index +1));
            }
            return listaCombinaciones;
        }

        public IList<IList<String>> ConbinaSinRepetirMiembros(IList<IList<String>> listaConjuntosA, IList<IList<String>> listaConjuntosB, int tamanioConjunto)
        {
            if (listaConjuntosA.Count == 0)
            {
                return new List<IList<String>>(listaConjuntosB);
            }
            if (listaConjuntosB.Count == 0)
            {
                return new List<IList<String>>(listaConjuntosA);
            }
            var listaCombinaciones = new List<IList<String>>();
            for (var indexA = 0; indexA < listaConjuntosA.Count; indexA++)
            {
                var subConjuntoA = listaConjuntosA[indexA];
                for (var indexB = 0; indexB < listaConjuntosB.Count; indexB++)
                {
                    var subConjuntoB = listaConjuntosB[indexB];
                    var subConjuntoMesclado = CombinaElementosSinRepetirMiembros(subConjuntoA, subConjuntoB);
                    if (subConjuntoMesclado.Count == tamanioConjunto && !ContieneConjunto(listaCombinaciones, subConjuntoMesclado))
                    {
                        listaCombinaciones.Add(subConjuntoMesclado);
                    }
                }
            }
            return listaCombinaciones;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="listaA"></param>
        /// <param name="listaB"></param>
        /// <returns></returns>
        public IList<String> CombinaElementosSinRepetirMiembros(IList<String> listaA, IList<String> listaB)
        {
            var listaResultante = new List<String>();
            
            for (var indexA = 0; indexA < listaA.Count; indexA++)
            {
                var miembroA = listaA[indexA];
                if (!listaResultante.Contains(miembroA))
                {
                    listaResultante.Add(miembroA);
                }
            }
            for (var indexB = 0; indexB < listaB.Count; indexB++)
            {
                var miembroB = listaB[indexB];
                if (!listaResultante.Contains(miembroB))
                {
                    listaResultante.Add(miembroB);
                }
            }
            return listaResultante;
        }


        /// <summary>
        /// Determina si un conjunto esta dentro de un listado de conjuntos.
        /// </summary>
        /// <param name="listaConjuntos">Listado con los conjuntos a evaluar</param>
        /// <param name="conjuntoComparar">Conjunto a comparar.</param>
        /// <returns></returns>
        public bool ContieneConjunto(IList<IList<String>> listaConjuntos, IList<String> conjuntoComparar)
        {
            if (listaConjuntos == null || listaConjuntos.Count == 0)
            {
                return false;
            }
            if (conjuntoComparar == null || conjuntoComparar.Count == 0)
            {
                return true;
            }
            var contenido = false;
            for (var indexConjuntos = 0; indexConjuntos < listaConjuntos.Count; indexConjuntos++)
            {
                var subConjunto = listaConjuntos[indexConjuntos];
                if (ContieneElementos(subConjunto, conjuntoComparar))
                {
                    contenido = true;
                    break;
                }
            }
            return contenido;
        }

        /// <summary>
        /// Determina si una lista de elementos esta contenida dentro de otra
        /// </summary>
        /// <param name="owner">Elemento a comparar</param>
        /// <param name="subGroupo">Elemento a comparar</param>
        /// <returns>Si un conjunto contiene al otro</returns>
        public bool ContieneElementos(IList<String> owner, IList<String> subGroupo)
        {
            
            if (owner == null || owner.Count == 0)
            {
                return false;
            }
            if (subGroupo == null || subGroupo.Count == 0 )
            {
                return true;
            }
            if (owner.Count < subGroupo.Count)
            {
                return false;
            }
            var contenido = true;
            for (var indiceSubGrupo = 0; indiceSubGrupo < subGroupo.Count; indiceSubGrupo++)
            {
                var elementoSubGrupo = subGroupo[indiceSubGrupo];
                var contieneElemento = false;
                for (var indiceOwner = 0; indiceOwner < owner.Count; indiceOwner++)
                {
                    var elementoOwner = owner[indiceOwner];
                    if (elementoOwner.Equals(elementoSubGrupo))
                    {
                        contieneElemento = true;
                        break;
                    }
                }
                if (!contieneElemento)
                {
                    contenido = false;
                    break;
                }
            }

            return contenido;
        }
    }
}
