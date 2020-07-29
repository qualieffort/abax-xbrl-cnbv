module abaxXBRL.shared.modelos {
    export interface ICambioPassword {
        /**Contraseña actual.**/
        PasswordActual: string;
        /**Contraseña nueva. **/
        PasswordNuevo: string;
        /**Confirmación de contraseña nueva.**/
        PasswordNuevoConfirmacion: string;
    }
} 