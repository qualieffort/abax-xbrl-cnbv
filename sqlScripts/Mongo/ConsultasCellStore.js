//Cantidad  de envíos por emisora
db.getCollection('Envio').aggregate([{$group:{_id:{"Entidad":"$Entidad.Nombre"},total:{ $sum: 1 }}}, { $sort: { _id: 1 } }]);
//Cantidad de envios por emisora y periodo
db.getCollection('Envio').aggregate([{$group:{_id:{"Entidad":"$Entidad.Nombre", "Periodo":"$Periodo.Fecha"},total:{ $sum: 1 }}}, { $sort: { _id: 1 } }]);
//Total de emisoras y periodos envíados
db.getCollection('Envio').aggregate([{$group:{_id:{"Entidad":"$Entidad.Nombre", "Periodo":"$Periodo.Fecha", "Auxiliar": "1"}}}, {$group:{_id:{"Count":"$_id.Auxiliar"}, total:{ $sum: 1 }}}]);
//Cantidad de envíos por taxonomia y periodo
db.getCollection('Envio').aggregate([{$group:{_id:{"Taxonomia":"$Taxonomia", "Periodo":"$Periodo.Fecha", "Ejercicio":"$Parametros.Ano", "Trimestre":"$Parametros.Trimestre"},total:{ $sum: 1 }}}, { $sort: { _id: 1 } }]);
//Cantidad de envíos recibidos despues de la fecha y hora indicados
db.getCollection('Envio').find({"FechaRecepcion" : {$gt: ISODate("2017-11-28T10:00:00.000Z")}}).count();
//Cantidad de hechos por taxonomía y envío.
db.getCollection('Hecho').aggregate([{$group:{_id:{"Taxonomia": "$Taxonomia", "IdEnvio":"$IdEnvio"},total:{ $sum: 1 }}}, { $sort: { _id: 1 } }]);




	

