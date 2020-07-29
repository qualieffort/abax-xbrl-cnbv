using AbaxXBRLBlockStore.Common.Entity;
using AbaxXBRLCore.Common.Entity;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Web;

namespace AbaxXBRLCore.CellStore.Util
{
    public class CellStoreUtil
    {
        /// <summary>
        /// Expresion regular para identificar saltos de sección en una expresión HTML generada a partir de Word.
        /// </summary>
        private static Regex REGEXP_ETIQUETAS_HTML = new Regex("\\<.*?\\>", RegexOptions.Compiled | RegexOptions.Multiline);

        /// <summary>
        /// Expresion regular para identificar saltos de sección en una expresión HTML generada a partir de Word.
        /// </summary>
        private static Regex REGEXP_DEPURA_BSON = new Regex("(ObjectId|ISODate)\\((\".+?\")\\)", RegexOptions.Compiled | RegexOptions.Multiline);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="valor"></param>
        /// <returns></returns>
        public static String EliminaEtiquetas(String valor)
        {
            String decoded = HttpUtility.HtmlDecode(valor??String.Empty);
            decoded = REGEXP_ETIQUETAS_HTML.Replace(decoded, String.Empty);
            decoded = decoded.Trim().Replace("\n", String.Empty).Replace("\r", String.Empty);
            return decoded;
        }

        /// <summary>
        /// Depura el identificador generado por bson
        /// </summary>
        /// <param name="json">Cadena json con la informacion original</param>
        /// <returns>Cadena json con la informacion reemplazada</returns>
        public static string DepurarIdentificadorBson(string json)
        {

            return REGEXP_DEPURA_BSON.Replace(json,"$2");
        }

        /// <summary>
        /// Arma el BsonDocument que se trata de la consulta al repositorio de informacion
        /// </summary>
        /// <param name="filtrosConsulta">Filtros de consulta a realizar en el respositorio de informacion</param>
        /// <returns>Documento con la consulta a realizar en el repositorio de informacion</returns>
        public static BsonDocument ArmarConsultaRepositorio(EntFiltroConsultaHecho filtrosConsulta)
        {
            var documentoConsulta = new StringBuilder();
            documentoConsulta.Append("{");

            if (filtrosConsulta.EsValorChunks.Value)
            {
                documentoConsulta.Append("'EsValorChunks' : true, ");
            }
            else
            {
                documentoConsulta.Append("'EsValorChunks' : { $nin : [ true ] }, ");
            }

            //Se agrega las emisoras
            documentoConsulta.Append("'Entidad.Nombre' : { $in : [");
            for (var indice = 0; indice < filtrosConsulta.filtros.entidadesId.Length; indice++)
            {
                var entidad = filtrosConsulta.filtros.entidadesId[indice];
                documentoConsulta.Append("'").Append(entidad).Append("'");
                if (indice != (filtrosConsulta.filtros.entidadesId.Length - 1))
                    documentoConsulta.Append(",");
            }
            documentoConsulta.Append("] }, ");

            //Se agrega las unidades

            documentoConsulta.Append("$or : [ {");
            documentoConsulta.Append("'Unidad.Medidas.Nombre' : {");
            documentoConsulta.Append("$exists : false");
            documentoConsulta.Append("} }");

            if (filtrosConsulta.filtros.unidades.Length > 0)
            {
                documentoConsulta.Append(", { 'Unidad.Medidas.Nombre' : { $in : [");
                for (var indice = 0; indice < filtrosConsulta.filtros.unidades.Length; indice++)
                {
                    var unidad = filtrosConsulta.filtros.unidades[indice];
                    documentoConsulta.Append("'").Append(unidad).Append("'");
                    if (indice != (filtrosConsulta.filtros.unidades.Length - 1))
                        documentoConsulta.Append(",");
                }
                documentoConsulta.Append("] } ");
                documentoConsulta.Append("}");
            }

            documentoConsulta.Append("],");

            //Se agregan los periodos
            documentoConsulta.Append("$and : [ { $or : [");

            for (var indice = 0; indice < filtrosConsulta.filtros.periodos.Length; indice++)
            {
                EntPeriodo periodoFiltro = filtrosConsulta.filtros.periodos[indice];
                var fechaFinal = periodoFiltro.FechaFin.Value;
                var fechaInicial = periodoFiltro.FechaInicio.Value;

                documentoConsulta.Append("{ $and : [ { 'Periodo.FechaInicio' : ISODate('").Append(fechaInicial.ToString("yyyy-MM-dd"))
                    .Append("T00:00:00Z') }, { 'Periodo.FechaFin' : ISODate('").Append(fechaFinal.ToString("yyyy-MM-dd")).Append("T00:00:00Z') } ] }");
                documentoConsulta.Append(", { 'Periodo.FechaInstante': ISODate('").Append(fechaFinal.ToString("yyyy-MM-dd")).Append("T00:00:00Z') }");

                if (indice != (filtrosConsulta.filtros.periodos.Length - 1))
                    documentoConsulta.Append(",");
            }

            documentoConsulta.Append("] }");

            //Se agregan los conceptos

            if (filtrosConsulta.conceptos != null && filtrosConsulta.conceptos.Length > 0)
            {
                documentoConsulta.Append(", { $or : [");

                for (var indice = 0; indice < filtrosConsulta.conceptos.Length; indice++)
                {
                    var concepto = filtrosConsulta.conceptos[indice];
                    documentoConsulta.Append("{ $and : [");

                    documentoConsulta.Append("{'Concepto.IdConcepto': '" + concepto.Id + "'},");
                    documentoConsulta.Append("{'Taxonomia': '" + concepto.EspacioNombresTaxonomia + "'}");

                    //En el caso que al concepto se tengan dimensiones
                    if (concepto.InformacionDimensional != null && concepto.InformacionDimensional.Length > 0)
                    {
                        documentoConsulta.Append(", { $or : [");

                        for (var indiceDimension = 0; indiceDimension < concepto.InformacionDimensional.Length; indiceDimension++)
                        {
                            documentoConsulta.Append("{ $and : [");

                            var dimension = concepto.InformacionDimensional[indiceDimension];
                            documentoConsulta.Append("{'MiembrosDimensionales.Explicita': " + dimension.Explicita.ToString().ToLower() + "},");

                            documentoConsulta.Append(dimension.QNameDimension != null && dimension.QNameDimension.Length > 0 ? "{'MiembrosDimensionales.QNameDimension' : '" + dimension.QNameDimension + "'}," : "");
                            documentoConsulta.Append(dimension.IdDimension != null && dimension.IdDimension.Length > 0 ? "{'MiembrosDimensionales.IdDimension' : '" + dimension.IdDimension + "'}" : "");

                            documentoConsulta.Append(dimension.QNameItemMiembro != null && dimension.QNameItemMiembro.Length > 0 ? ", {'MiembrosDimensionales.QNameItemMiembro' : '" + dimension.QNameItemMiembro + "'}" : "");
                            documentoConsulta.Append(dimension.IdItemMiembro != null && dimension.IdItemMiembro.Length > 0 ? ",{'MiembrosDimensionales.IdItemMiembro' : '" + dimension.IdItemMiembro + "'}" : "");

                            documentoConsulta.Append(dimension.Filtro != null && dimension.Filtro.Length > 0 ? ", {'MiembrosDimensionales.MiembroTipificado' : /" + dimension.Filtro + "/}" : "");


                            documentoConsulta.Append("]  }");

                            if ((indiceDimension + 1) < concepto.InformacionDimensional.Length)
                                documentoConsulta.Append(",");
                        }
                        documentoConsulta.Append("] }");
                    }

                    documentoConsulta.Append("] }");

                    if (indice != (filtrosConsulta.conceptos.Length - 1))
                        documentoConsulta.Append(",");
                }
                documentoConsulta.Append("] }");
            }
            documentoConsulta.Append("] }");

            //BsonDocument FiltroConsulta = MongoDB.Bson.Serialization.BsonSerializer.Deserialize<BsonDocument>("{'idEntidad': {		$in: ['DAIMLER1', 'DAIMLER']},'medida.tipoMedida.nombre': {$in: ['MXN']},$and: [{$or: [{'periodo.fecha': ISODate('2014-12-31T00:00:00Z')},{$and: [{'periodo.fechaInicial': ISODate('2014-12-31T00:00:00Z')}, {'periodo.fecha': ISODate('2014-12-31T00:00:00Z')}]}]}]}");
            BsonDocument FiltroConsulta = BsonSerializer.Deserialize<BsonDocument>(documentoConsulta.ToString());

            return FiltroConsulta;
        }

        /// <summary>
        /// Arma la consulta que se trata de la consulta al repositorio de informacion
        /// </summary>
        /// <param name="filtrosConsulta">Filtros de consulta a realizar en el respositorio de informacion</param>
        /// <returns>Documento con la consulta a realizar en el repositorio de informacion</returns>
        public static IMongoQuery GenerarConsultaHecho(EntFiltroConsultaHecho filtrosConsulta)
        {
            var documentoConsulta = new StringBuilder();
            documentoConsulta.Append("{");

            // Se agregan los identificadores de envio
            IMongoQuery queryIdEnvios = GenerarConsultaIncluirOExcluir("IdEnvio", filtrosConsulta.idEnvios);

            IMongoQuery queryEsValorChunks = null;
            if (filtrosConsulta.EsValorChunks.HasValue)
            {
                if (filtrosConsulta.EsValorChunks.Value)
                {
                    queryEsValorChunks = Query.EQ("EsValorChunks", true);
                }
                else
                {
                    queryEsValorChunks = Query.NotIn("EsValorChunks", new BsonValue[] { true });
                }
            }
            else
            {
                queryEsValorChunks = Query.In("EsValorChunks", new BsonValue[] { true, false });
            }

            // Se agregan las entidades
            IMongoQuery queryEntidades = GenerarConsultaIncluirOExcluir("Entidad.Nombre", filtrosConsulta.filtros.entidadesId);

            // Se agregan las unidades
            IMongoQuery queryNoExistenUnidades = Query.NotExists("Unidad.Medidas.Nombre");
            IMongoQuery queryRangoUnidades = GenerarConsultaIncluirOExcluir("Unidad.Medidas.Nombre", filtrosConsulta.filtros.unidades);

            IMongoQuery queryUnidades = Query.Or(
                queryNoExistenUnidades,
                queryRangoUnidades
            );

            // Se agregan los periodos
            IMongoQuery queryFechas = null;
            if (filtrosConsulta.filtros.periodos != null && filtrosConsulta.filtros.periodos.Length > 0)
            {
                List<IMongoQuery> queryTotalFechas = new List<IMongoQuery>();

                foreach (var periodoFiltro in filtrosConsulta.filtros.periodos)
                {
                    var fechaInicial = periodoFiltro.FechaInicio.Value;
                    var fechaFinal = periodoFiltro.FechaFin.Value;

                    IMongoQuery queryFechaInicio = Query.EQ("Periodo.FechaInicio", fechaInicial);
                    IMongoQuery queryFechaFin = Query.EQ("Periodo.FechaFin", fechaFinal);
                    IMongoQuery queryFechaInstante = Query.EQ("Periodo.FechaInstante", fechaFinal);

                    IMongoQuery queryGrupoFechas = 
                        Query.Or(
                            Query.And(
                                queryFechaInicio,
                                queryFechaFin
                            ),
                            queryFechaInstante
                        );

                    queryTotalFechas.Add(queryGrupoFechas);
                }

                queryFechas = Query.Or(queryTotalFechas);
            }
            else
            {
                IMongoQuery queryFechasFin = GenerarConsultaIncluirOExcluir("Periodo.FechaFin", filtrosConsulta.filtros.fechasReporte);
                IMongoQuery queryFechasInstante = GenerarConsultaIncluirOExcluir("Periodo.FechaInstante", filtrosConsulta.filtros.fechasReporte);

                queryFechas = Query.Or(
                    queryFechasFin,
                    queryFechasInstante
                );
            }

            //Se agregan los conceptos
            IMongoQuery queryConceptos = null;
            if (filtrosConsulta.conceptos != null && filtrosConsulta.conceptos.Length > 0)
            {
                List<IMongoQuery> queryTotalConceptos = new List<IMongoQuery>();

                foreach (var concepto in filtrosConsulta.conceptos)
                {
                    IMongoQuery queryIdConcepto = Query.EQ("Concepto.IdConcepto", concepto.Id);
                    IMongoQuery queryTaxonomia = Query.EQ("Taxonomia", concepto.EspacioNombresTaxonomia??"");

                    IMongoQuery queryConcepto = Query.And(
                        queryIdConcepto,
                        queryTaxonomia
                    );

                    queryTotalConceptos.Add(queryConcepto);
                }

                queryConceptos = Query.Or(queryTotalConceptos);
            }

            /*


                //Se agregan los conceptos

                if (filtrosConsulta.conceptos != null && filtrosConsulta.conceptos.Length > 0)
            {
                documentoConsulta.Append(", { $or : [");

                for (var indice = 0; indice < filtrosConsulta.conceptos.Length; indice++)
                {
                    var concepto = filtrosConsulta.conceptos[indice];
                    documentoConsulta.Append("{ $and : [");

                    documentoConsulta.Append("{'Concepto.IdConcepto': '" + concepto.Id + "'},");
                    documentoConsulta.Append("{'Taxonomia': '" + concepto.EspacioNombresTaxonomia + "'}");

                    //En el caso que al concepto se tengan dimensiones
                    if (concepto.InformacionDimensional != null && concepto.InformacionDimensional.Length > 0)
                    {
                        documentoConsulta.Append(", { $or : [");

                        for (var indiceDimension = 0; indiceDimension < concepto.InformacionDimensional.Length; indiceDimension++)
                        {
                            documentoConsulta.Append("{ $and : [");

                            var dimension = concepto.InformacionDimensional[indiceDimension];
                            documentoConsulta.Append("{'MiembrosDimensionales.Explicita': " + dimension.Explicita.ToString().ToLower() + "},");

                            documentoConsulta.Append(dimension.QNameDimension != null && dimension.QNameDimension.Length > 0 ? "{'MiembrosDimensionales.QNameDimension' : '" + dimension.QNameDimension + "'}," : "");
                            documentoConsulta.Append(dimension.IdDimension != null && dimension.IdDimension.Length > 0 ? "{'MiembrosDimensionales.IdDimension' : '" + dimension.IdDimension + "'}" : "");

                            documentoConsulta.Append(dimension.QNameItemMiembro != null && dimension.QNameItemMiembro.Length > 0 ? ", {'MiembrosDimensionales.QNameItemMiembro' : '" + dimension.QNameItemMiembro + "'}" : "");
                            documentoConsulta.Append(dimension.IdItemMiembro != null && dimension.IdItemMiembro.Length > 0 ? ",{'MiembrosDimensionales.IdItemMiembro' : '" + dimension.IdItemMiembro + "'}" : "");

                            documentoConsulta.Append(dimension.Filtro != null && dimension.Filtro.Length > 0 ? ", {'MiembrosDimensionales.MiembroTipificado' : /" + dimension.Filtro + "/}" : "");


                            documentoConsulta.Append("]  }");

                            if ((indiceDimension + 1) < concepto.InformacionDimensional.Length)
                                documentoConsulta.Append(",");
                        }
                        documentoConsulta.Append("] }");
                    }

                    documentoConsulta.Append("] }");

                    if (indice != (filtrosConsulta.conceptos.Length - 1))
                        documentoConsulta.Append(",");
                }
                documentoConsulta.Append("] }");
            }
            documentoConsulta.Append("] }");

            //BsonDocument FiltroConsulta = MongoDB.Bson.Serialization.BsonSerializer.Deserialize<BsonDocument>("{'idEntidad': {		$in: ['DAIMLER1', 'DAIMLER']},'medida.tipoMedida.nombre': {$in: ['MXN']},$and: [{$or: [{'periodo.fecha': ISODate('2014-12-31T00:00:00Z')},{$and: [{'periodo.fechaInicial': ISODate('2014-12-31T00:00:00Z')}, {'periodo.fecha': ISODate('2014-12-31T00:00:00Z')}]}]}]}");
            BsonDocument FiltroConsulta = BsonSerializer.Deserialize<BsonDocument>(documentoConsulta.ToString());
            */
            IMongoQuery queryFinal = Query.And(
                queryIdEnvios,
                queryEsValorChunks,
                queryEntidades,
                queryUnidades,
                queryFechas,
                queryConceptos
            );

            return queryFinal;
        }

        /// <summary>
        /// Genera un query incluyente o excluyente, dependiendo si el filtro contiene datos
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="campo"></param>
        /// <param name="filtro"></param>
        /// <returns></returns>
        public static IMongoQuery GenerarConsultaIncluirOExcluir<T>(string campo, IEnumerable<T> filtro)
        {
            if (filtro != null && filtro.Count() > 0)
                return Query.In(campo, GenerarValoresFiltro(filtro));
            else
                return Query.NotIn(campo, new BsonValue[0]);
        }

        /// <summary>
        /// Genera los valores necesarios para un filtro incluyente
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="filtro"></param>
        /// <returns></returns>
        public static List<BsonValue> GenerarValoresFiltro<T>(IEnumerable<T> filtro)
        {
            var listaFiltro = new List<BsonValue>();

            if (filtro != null && filtro.Count() > 0) {
                foreach (var item in filtro)
                {
                    listaFiltro.Add(BsonValue.Create(item));
                }
            }

            return listaFiltro;
        }
    }
}
