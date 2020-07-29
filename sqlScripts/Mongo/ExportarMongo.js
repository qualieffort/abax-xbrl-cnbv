#Dump

mongodump --collection BlockStoreHecho --db abaxxbrl --out C:/TemporalesJson/mongobk/dumb
mongodump --collection BlockStoreConcepto --db abaxxbrl --out C:/TemporalesJson/mongobk/dumb
mongodump --collection BlockStoreDimension --db abaxxbrl --out C:/TemporalesJson/mongobk/dumb
mongodump --collection BlockStoreEmpresa --db abaxxbrl --out C:/TemporalesJson/mongobk/dumb
mongodump --collection BlockStoreUnidad --db abaxxbrl --out C:/TemporalesJson/mongobk/dumb

#Export

mongoexport --db abaxxbrl --collection BlockStoreHecho --out C:/TemporalesJson/mongobk/jsonsExporter/BlockStoreHecho.json
mongoexport --db abaxxbrl --collection BlockStoreConcepto --out C:/TemporalesJson/mongobk/jsonsExporter/BlockStoreConcepto.json
mongoexport --db abaxxbrl --collection BlockStoreDimension --out C:/TemporalesJson/mongobk/jsonsExporter/BlockStoreDimension.json
mongoexport --db abaxxbrl --collection BlockStoreEmpresa --out C:/TemporalesJson/mongobk/jsonsExporter/BlockStoreEmpresa.json
mongoexport --db abaxxbrl --collection BlockStoreUnidad --out C:/TemporalesJson/mongobk/jsonsExporter/BlockStoreUnidad.json

#Import

mongoimport --db abax_xbrl_bk --collection BlockStoreHecho --file C:/TemporalesJson/mongobk/jsonsExporter/BlockStoreHecho.json
mongoimport --db abax_xbrl_bk --collection BlockStoreConcepto --file C:/TemporalesJson/mongobk/jsonsExporter/BlockStoreConcepto.json
mongoimport --db abax_xbrl_bk --collection BlockStoreDimension --file C:/TemporalesJson/mongobk/jsonsExporter/BlockStoreDimension.json
mongoimport --db abax_xbrl_bk --collection BlockStoreEmpresa --file C:/TemporalesJson/mongobk/jsonsExporter/BlockStoreEmpresa.json
mongoimport --db abax_xbrl_bk --collection BlockStoreUnidad --file C:/TemporalesJson/mongobk/jsonsExporter/BlockStoreUnidad.json


db.getCollection('BlockStoreHecho').createIndex({"idTaxonomia":1,"idEntidad":1,"concepto.id":1,"periodo.FechaFin":1,"periodo.FechaInicio":1,"unidades":1,"dimension":1})
db.getCollection('BlockStoreHecho').createIndex({"codigoHashRegistro":1})
