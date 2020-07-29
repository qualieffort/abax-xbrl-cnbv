module abaxXBRL.shared.modelos {
    export interface ICredencial {
        /**Valor de correo electronico capturado por el usuario. **/
        Correo: string;

        /**Valor del usuario ldap que trata de realizar el login. **/
        Usuario: string;

        /**Valor de la contraseña capturada por el usario. **/
        Password: string;
        /**Bandera que indica si se aceptan o no los treminos y condiciones de uso. **/
        AceptoTerminosCondiciones: boolean;
    }
}