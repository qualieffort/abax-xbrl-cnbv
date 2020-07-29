///<reference path="i-usuario.root.ts" />

module abaxXBRL.shared.modelos {
    /**Contrato que define los elementos que deben estar contenidos en la sessión. **/
    export interface ISession {
        /**Entidad de tipo IUsuario con la información del usuario en sesión. **/
        Usuario: IUsuario;
        /**Identificador del aempresa con la que se ha iniciado sesión **/
        IdEmpresa: number;
        /**Arreglo de cadenas con las claves de las facultades del usuario. **/
        Facultades: Array<IFacultad>;
        /**Token de la sesión actual. **/
        Token: string;
        /**sso indica si la autenticacion es por single sign on . **/
        Sso: boolean;
    }
}