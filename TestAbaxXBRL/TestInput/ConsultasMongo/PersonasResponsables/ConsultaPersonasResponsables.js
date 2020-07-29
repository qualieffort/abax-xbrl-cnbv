db.getCollection('PersonasResponsables').aggregate(
 {"$match" : { "Concepto.IdConcepto": {"$in": ["ar_pros_ResponsiblePersonName","ar_pros_ResponsiblePersonPosition", "ar_pros_ResponsiblePersonInstitution"]}}},
 {"$project": { 
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
     "IdSecuenciaInstitucion":{
         "$filter":{ 
             "input":"$MiembrosDimensionales",
             "as":"md",
             "cond":{"$eq":["$$md.IdDimension","ar_pros_ResponsiblePersonsInstitutionSequenceTypedAxis"]}
          }
     },
     "TipoPersonaResponsable":{
         "$filter":{ 
             "input":"$MiembrosDimensionales",
             "as":"md",
             "cond":{"$eq":["$$md.IdDimension","ar_pros_TypeOfResponsibleFigureAxis"]}
          }
     },
     "IdSecuenciaPersona":{
         "$filter":{ 
             "input":"$MiembrosDimensionales",
             "as":"md",
             "cond":{"$eq":["$$md.IdDimension","ar_pros_ResponsiblePersonsSequenceTypedAxis"]}
          }
     }
 }},
 {"$project":{
     "Entidad":1, 
     "IdConcepto":1, 
     "Valor" :1,
     "Fecha" : 1,
     "Etiqueta": {"$arrayElemAt": [ "$Etiqueta", 0 ]},
     "TipoPersonaResponsable":{"$arrayElemAt": [ "$TipoPersonaResponsable", 0 ]},
     "IdSecuenciaInstitucion":{"$arrayElemAt": [ "$IdSecuenciaInstitucion", 0 ]},
     "IdSecuenciaPersona":{"$arrayElemAt": [ "$IdSecuenciaPersona", 0 ]}
 }},
 {"$project":{
     "Entidad":1, 
     "IdConcepto":1, 
     "Valor" :1,
     "Fecha" : 1,
     "Etiqueta": "$Etiqueta.Valor",
     "IdTipoPersonaResponsable": "$TipoPersonaResponsable.IdItemMiembro",
     "TipoPersonaResponsable": {
        "$filter":{ 
             "input":"$TipoPersonaResponsable.EtiquetasMiembroDimension",
             "as":"et",
             "cond":{"$and":[ {"$eq":["$$et.Idioma","es"]},{"$eq":["$$et.Rol","http://www.xbrl.org/2003/role/label"]}]}
          }    
     },
     "IdSecuenciaInstitucion":"$IdSecuenciaInstitucion.MiembroTipificado",
     "IdSecuenciaPersona":"$IdSecuenciaPersona.MiembroTipificado"
 }},
 {"$project":{
     "Entidad":1, 
     "IdConcepto":1, 
     "Valor" :1,
     "Fecha" : 1,
     "Etiqueta": 1,
     "TipoPersonaResponsable":{"$arrayElemAt": [ "$TipoPersonaResponsable", 0 ]},
     "IdSecuenciaInstitucion":1,
     "IdSecuenciaPersona":1,
     "IdTipoPersonaResponsable":1
 }},
 {"$project":{
     "Entidad":1, 
     "IdConcepto":1, 
     "Valor" :1,
     "Fecha" : 1,
     "Etiqueta": 1,
     "TipoPersonaResponsable":"$TipoPersonaResponsable.Valor",
     "IdSecuenciaInstitucion":1,
     "IdSecuenciaPersona":1,
     "IdTipoPersonaResponsable":1
 }},
 {"$sort":{"Fecha":1,"Entidad":1,"TipoPersonaResponsable":1,"IdSecuenciaInstitucion":1,"IdSecuenciaPersona":1,"Etiqueta":1}},
 {"$out": "PersonasResponsablesReducido"}
 
)