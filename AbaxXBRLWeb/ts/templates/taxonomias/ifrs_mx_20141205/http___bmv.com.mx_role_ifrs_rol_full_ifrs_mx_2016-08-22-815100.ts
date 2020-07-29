///<reference path="../../../modeloAbax.ts" /> 
///<reference path="../../../modeloPlantillaAbax.ts" /> 
module abaxXBRL.templates {

    /**
     * Implementación de una clase con la definición de los elementos utilizados por la plantilla para presentar las definiciones del rol http://bmv.com.mx/role/ifrs/rol_full_ifrs_mx_2016-08-22-815100
     * 
     * @author AbaxXBRL Template Generator
     * @version 1.0
     */
    export class http___bmv_com_mx_role_ifrs_rol_full_ifrs_mx_2016_08_22_815100 implements abaxXBRL.model.DefinicionDeElementosPlantilla {

        /** La definición de los contextos utilizados por la plantilla */
        ContextosPlantillaPorId: { [idContextoPlantilla: string]: abaxXBRL.model.ContextoPlantilla };

        /** La definición de las unidades utilizadas por la plantilla */
        UnidadesPlantillaPorId: { [idUnidadPlantilla: string]: abaxXBRL.model.UnidadPlantilla };

        /** La definición de los hechos utilizados por la plantilla */
        HechosPlantillaPorId: { [idHechoPlantilla: string]: abaxXBRL.model.HechoPlantilla };

		/** El listado de fórmulas que se utilizan en un rol */
        ListadoDeFormulas: { [idFormula: string]: abaxXBRL.model.DefinicionFormula };

        /**
         * Constructor por defecto de la clase http___bmv_com_mx_role_ifrs_rol_full_ifrs_mx_2016_08_22_815100
         */
        constructor() {

            this.ListadoDeFormulas = {

               
                'MontoTotal_ifrs_mx-cor_20160822_TotalFunding': new model.DefinicionFormula().deserialize({
                    Id: 'MontoTotal_ifrs_mx-cor_20160822_TotalFunding',
                    TipoFormula: model.TipoFormula.ValueAssertion,
                    Expresion: '(bignumber(variable1) == bignumber(variable2))',
                    MensajeExito: 'El valor de {variable1} es igual a la suma de los elementos correspondientes en cada serie.',
                    MensajeError: 'El valor de {variable1} debe ser igual a la suma de los elementos correspondientes en cada serie.',
                    VariablesCoincidenPeriodo: true,
                    DefinicionVariables: {
                        'variable1': new model.DefinicionVariableFormula().deserialize({
                            Id: 'variable1',
                            IdConcepto: 'ifrs_mx-cor_20160822_TotalFunding',
                            PuedeCrearse: false,
                            PuedeEliminarse: false,
                            ConteoHechos: false
                        }),
                        "variable2": new model.DefinicionVariableFormula().deserialize({
                            "Id": "variable2",
                            "IdConcepto": "ifrs_mx-cor_20160822_OutstandingBalance",
                            "PuedeEliminarse": false,
                            "PuedeCrearse": false,
                            "ConteoHechos": false,
                            "FiltrosDimension": [
                                {
                                    "Explicita": true,
                                    "QNameDimension": "http://bmv.com.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TypesOfLiabilitiesAxis",
                                    "QNameItemMiembro": "http://bmv.com.mx/ifrs_mx-cor_20160822/full_ifrs_mx-cor_2016-08-22:TotalBankingMember",
                                    "IdDimension": "ifrs_mx-cor_20160822_TypesOfLiabilitiesAxis",
                                    "IdItemMiembro": "ifrs_mx-cor_20160822_TotalBankingMember"
                                }
                            ],
                            "MismasDimensiones": true,
                            "ConjuntoDimensionesParcial": true
                        })
                    }
                })
            };

            this.ContextosPlantillaPorId = {};

            this.UnidadesPlantillaPorId = {};
            
            this.HechosPlantillaPorId = {};
        }
    }

}