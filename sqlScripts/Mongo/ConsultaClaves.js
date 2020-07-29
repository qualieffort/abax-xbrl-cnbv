
//db.getCollection('Hecho').aggregate([ {'$group': { '_id': { Taxonomia: '$Taxonomia',ClaveEmisora:'$Entidad.Nombre', IdEnvio:'$IdEnvio'}}}])
mongo localhost:27017/abaxxbrl_cellstore --eval "db.getCollection('Hecho').aggregate([ {'$group': { '_id': { Taxonomia: '$Taxonomia',ClaveEmisora:'$Entidad.Nombre'}}}])" >> clavesCellStore.json
//db.getCollection('BlockStoreHecho').aggregate([ {'$group': { '_id': { Taxonomia: '$EspacioNombresPrincipal',ClaveEmisora:'$idEntidad'}}}])
mongo localhost:27017/abaxxbrl --eval "db.getCollection('BlockStoreHecho').aggregate([ {'$group': { '_id': { Taxonomia: '$EspacioNombresPrincipal',ClaveEmisora:'$idEntidad'}}}])" >> consultasEspecializadas.json