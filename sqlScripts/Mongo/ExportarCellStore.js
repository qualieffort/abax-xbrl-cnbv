mongoexport --db abaxxbrl_cellstore --collection Hecho --out ./Hecho.json
mongoexport --db abaxxbrl_cellstore --collection Envio --out ./Envio.json
mongoexport --db abaxxbrl_cellstore --collection RolPresentacion --out C:/TemporalesJson/mongobk/jsonsExporter/RolPresentacion.json
mongoexport --db abaxxbrl_cellstore --collection HechoSpotfire --out C:/TemporalesJson/mongobk/jsonsExporter/HechoSpotfire.json

mongoimport --db abaxxbrl_cellstore --collection Hecho --file "F:/Hecho.json"
mongoimport --db abaxxbrl_cellstore --collection Envio --file "F:/Envio.json"
mongoimport --db abaxxbrl_cellstore --collection RolPresentacion --file "C:/2HSoftware/Notas/55_DocumentaciónCNBV/02/02_Documentos/Respaldo/20180808/DatosMongo/RolPresentacion.json"
mongoimport --db abaxxbrl_cellstore --collection HechoSpotfire --file C:/TemporalesJson/mongobk/jsonsExporter/HechoSpotfire.json

AbaxCellUser
UserAbaxCell1


mongoexport --db abaxxbrl_cellstore --collection -q "{'Concepto.IdConcepto':{$in:['ar_pros_AdministratorName','ar_pros_AdministratorFirstName','ar_pros_AdministratorSecondName','ar_pros_AdministratorDirectorshipType','ar_pros_AdministratorParticipateInCommitteesAudit','ar_pros_AdministratorParticipateInCommitteesCorporatePractices','ar_pros_AdministratorParticipateInCommitteesEvaluationAndCompensation','ar_pros_AdministratorParticipateInCommitteesOthers','ar_pros_AdministratorDesignationDate','ar_pros_AdministratorAssemblyType','ar_pros_AdministratorPeriodForWhichTheyWereElected','ar_pros_AdministratorPosition','ar_pros_AdministratorTimeWorkedInTheIssuer','ar_pros_AdministratorShareholding','ar_pros_AdministratorGender','ar_pros_AdministratorAdditionalInformation']}}"  --out C:/TemporalesJson/mongobk/jsonsExporter/Administradores.json
mongoexport --db abaxxbrl_cellstore --collection HechoSpotifireTest --out C:/TemporalesJson/mongobk/jsonsExporter/HechoSpotifireTest.json


mongoexport --db abaxxbrl_cellstore --collection Envio --out C:/TemporalesJson/mongobk/jsonsExporter/EnvioAuxiliar.json
mongoexport --db abaxxbrl_cellstore --collection Hecho --out C:/TemporalesJson/mongobk/jsonsExporter/HechoAuxiliar.json 

mongoimport --db abaxxbrl_cellstore --collection Hecho --file "F:/EnvioAuxiliar.json"
mongoimport --db abaxxbrl_cellstore --collection Envio --file "F:/HechoAuxiliar.json"