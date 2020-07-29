db.getCollection('NbisUnoFideicomiso').aggregate(
 {"$match" : { "Concepto.IdConcepto": {"$in": [	    "ar_pros_NumberOfTrust",
													"ar_pros_NameOfTheIssuer",
													"ar_pros_Settlor",
													"ar_pros_GuaranteesOnAssets",
													"ar_pros_OtherThirdPartiesObligatedWithTheTrust"]
                                      },
				"Taxonomia" : "http://www.cnbv.gob.mx/2016-08-22/ar_prospectus/ar_NBIS1_entry_point_2016-08-22",
			}
 },
 {"$project": { 
     "Fecha":"$Periodo.FechaInstante", 
	 "Entidad":"$Entidad.Nombre", 
     "IdConcepto":"$Concepto.IdConcepto", 
     "Valor" :"$Valor",
     "Etiqueta":{
         "$filter":{ 
             "input":"$Concepto.Etiquetas",
             "as":"et",
             "cond":{"$eq":["$$et.Idioma","es"]}
          }
     },
     "Fecha": "$Periodo.FechaInstante",
	 "IdEnvio": "$IdEnvio"
 }},
 {"$project":{
     "Entidad":1, 
     "IdConcepto":1, 
     "Valor" :1,
     "Fecha" : 1,
	 "IdEnvio": 1,
     "Etiqueta": {"$arrayElemAt": [ "$Etiqueta", 0 ]}
 }},
 {"$project":{
     "Entidad":1, 
     "IdConcepto":1, 
     "Valor" :1,
     "Fecha" : 1,
	 "IdEnvio": 1,
     "Etiqueta": "$Etiqueta.Valor"
 }},
 {"$sort":{"Fecha":1,"Entidad":1,"Etiqueta":1}},
 {"$out": "NbisUnoFideicomisoReducido"}
)