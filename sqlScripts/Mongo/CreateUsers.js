/*mongo localhost:27017/abaxxbrl_cellstore "C:/2HSoftware/Proyectos/AbaxXBRL/AbaxXBRL/sqlScripts/Mongo/CreateUsers.js"*/
db.createUser(
	{
		user: "admin",
		pwd: "BiVa2018",
		roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
	}
);