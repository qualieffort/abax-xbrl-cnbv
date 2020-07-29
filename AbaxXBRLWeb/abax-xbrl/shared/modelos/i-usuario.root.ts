module abaxXBRL.shared.modelos {
    /**Contrato que define la estructura de la entidad que maneja los datos del usuario en sesión **/
    export interface IUsuario {
        /**Identificador único del usuario.**/
        IdUsuario?: number;
        /**Nombre(s) del usuario. **/
        Nombre?: string;
        /**Apellido paterno del usuario. **/
        ApellidoPaterno?: string;
        /**Apellido materno del usuario. **/
        ApellidoMaterno?: string;
        /**Correo electronico del usuario. **/
        CorreoElectronico?: string;
        //Nota: El password y el historico de password son datos que no deben de manejarse del lado del cliente.
        //Password: string;
        //HistoricoPassword: string
        /**La vigencia de la contraseña actual.**/
        VigenciaPassword?: Date;
        /**Cantidad de intentos fallidos por contraseña incorrecta por parte del usuario. **/
        IntentosErroneosLogin?: number;
        /**Si el usuario se encuentra bloqueado y no puede acceder al sitio. **/
        Bloqueado?: boolean;
        /**Si el usuario esta activo y puede acceder al sitio. **/
        Activo?: boolean;
        /**Nombre del puesto del usuario actual. **/
        Puesto?: string;
        /**Si el registro del usuario fue eliminado**/
        Borrado?: boolean;
        /**Otiene el nombre completo del usuario */
        NombreCompleto?: string;
        /**
        * Identificador SSO devuelto por OAM para identificar al usuario.
        **/
        IdSso?: string;
    }
}