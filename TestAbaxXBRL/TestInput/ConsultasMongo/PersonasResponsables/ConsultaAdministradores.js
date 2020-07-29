db.getCollection('AdministradoresEmpresa').aggregate(
 {"$match" : { "Concepto.IdConcepto": {"$in": [	"ar_pros_AdministratorName",
                                                "ar_pros_AdministratorFirstName",
                                                "ar_pros_AdministratorSecondName",
                                                "ar_pros_AdministratorDirectorshipType",
                                                "ar_pros_AdministratorParticipateInCommittees",
                                                "ar_pros_AdministratorParticipateInCommitteesAudit",
                                                "ar_pros_AdministratorParticipateInCommitteesCorporatePractices",
                                                "ar_pros_AdministratorParticipateInCommitteesEvaluationAndCompensation",
                                                "ar_pros_AdministratorParticipateInCommitteesOthers",
                                                "ar_pros_AdministratorDesignationAbstract",
                                                "ar_pros_AdministratorDesignationDate",
                                                "ar_pros_AdministratorAssemblyType",
                                                "ar_pros_AdministratorPeriodForWhichTheyWereElected",
                                                "ar_pros_AdministratorPosition",
                                                "ar_pros_AdministratorTimeWorkedInTheIssuer",
                                                "ar_pros_AdministratorShareholding",
                                                "ar_pros_AdministratorGender",
                                                "ar_pros_AdministratorAdditionalInformation"]}}},
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
     "IdSecuenciaAdministrador":{
         "$filter":{ 
             "input":"$MiembrosDimensionales",
             "as":"md",
             "cond":{"$eq":["$$md.IdDimension","ar_pros_CompanyAdministratorsSecuenceTypedAxis"]}
          }
     },
     "IdTipoAdministrador":{
         "$filter":{ 
             "input":"$MiembrosDimensionales",
             "as":"md",
             "cond":{"$eq":["$$md.IdDimension","ar_pros_TypeOfCompanyAdministratorsAxis"]}
          }
     }
 }},
 {"$project":{
     "Entidad":1, 
     "IdConcepto":1, 
     "Valor" :1,
     "Fecha" : 1,
     "Etiqueta": {"$arrayElemAt": [ "$Etiqueta", 0 ]},
     "IdSecuenciaAdministrador":{"$arrayElemAt": [ "$IdSecuenciaAdministrador", 0 ]},
     "IdTipoAdministrador":{"$arrayElemAt": [ "$IdTipoAdministrador", 0 ]}
 }},
 {"$project":{
     "Entidad":1, 
     "IdConcepto":1, 
     "Valor" :1,
     "Fecha" : 1,
     "Etiqueta": "$Etiqueta.Valor",
     "IdSecuenciaAdministrador":"$IdSecuenciaAdministrador.MiembroTipificado",
     "IdTipoAdministrador":"$IdTipoAdministrador.IdItemMiembro"
 }},
 {"$project":{
     "Entidad":1, 
     "IdConcepto":1, 
     "Valor" :1,
     "Fecha" : 1,
     "Etiqueta": 1,
     "IdSecuenciaAdministrador":1,
     "IdTipoAdministrador":1
 }},
 {"$sort":{"Fecha":1,"Entidad":1,"IdTipoAdministrador":1,"IdSecuenciaAdministrador":1,"Etiqueta":1}},
 {"$out":"AdministradoresEmpresaReducidos"}
)