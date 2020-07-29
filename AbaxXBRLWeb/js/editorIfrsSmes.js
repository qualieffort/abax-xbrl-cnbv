var formatoFecha = 'DD/MM/YYYY';
var numeroErrores = 0;
var tieneErrores = '';
var detalleOperaciones = {};
var detalleErrores = {};
var esBotonActualizar = false;
var realizoCambios = false;
var archivoExcel = '';
var cambiosPendientesGuardar = false;

var validacionesER12 = [
    {
        "resultado": "92000030"
    },
    {
        "resultado": "92000040"
    },
    {
        "resultado": "92000050"
    },
    {
        "resultado": "92000060"
    },
    {
        "resultado": "92000070"
    }
];

var validacionesVCC = [
    {
        "resultado": "SALDO_FINAL_CAP_SOC",
        "operadores": [
            "SALDO_INI_CAP_SOC", "INCR_DISM_PATR_CAP_SOC"
        ]
    },
    {
        "resultado": "INCR_DISM_PATR_CAP_SOC",
        "operadores": [
            "AJUSTES_RETR_CAP_SOC", "APL_UT_INT_CAP_SOC", "CONST_RESERVAS_CAP_SOC", "-DIVIDENDOS_DECRE_CAP_SOC", "DIS_AUM_CAP_CAP_SOC", "RECOMPRA_ACCS_CAP_SOC", "DIS_AUM_PR_ACCS_CAP_SOC", "DIS_AUM_INV_NC_CAP_SOC", "OTROS_MOVS_CAP_SOC", "RES_INTEGRAL_CAP_SOC"
        ]
    },
    {
        "resultado": "SALDO_FINAL_ACC_REC",
        "operadores": [
            "SALDO_INI_ACC_REC", "INCR_DISM_PATR_ACC_REC"
        ]
    },
    {
        "resultado": "INCR_DISM_PATR_ACC_REC",
        "operadores": [
            "AJUSTES_RETR_ACC_REC", "APL_UT_INT_ACC_REC", "CONST_RESERVAS_ACC_REC", "-DIVIDENDOS_DECRE_ACC_REC", "DIS_AUM_CAP_ACC_REC", "RECOMPRA_ACCS_ACC_REC", "DIS_AUM_PR_ACCS_ACC_REC", "DIS_AUM_INV_NC_ACC_REC", "OTROS_MOVS_ACC_REC", "RES_INTEGRAL_ACC_REC"
        ]
    },
    {
        "resultado": "SALDO_FINAL_PRIMA_EM_ACC",
        "operadores": [
            "SALDO_INI_PRIMA_EM_ACC", "INCR_DISM_PATR_PRIMA_EM_ACC"
        ]
    },
    {
        "resultado": "INCR_DISM_PATR_PRIMA_EM_ACC",
        "operadores": [
            "AJUSTES_RETR_PRIMA_EM_ACC", "APL_UT_INT_PRIMA_EM_ACC", "CONST_RESERVAS_PRIMA_EM_ACC", "-DIVIDENDOS_DECRE_PRIMA_EM_ACC", "DIS_AUM_CAP_PRIMA_EM_ACC", "RECOMPRA_ACCS_PRIMA_EM_ACC", "DIS_AUM_PR_ACCS_PRIMA_EM_ACC", "DIS_AUM_INV_NC_PRIMA_EM_ACC", "OTROS_MOVS_PRIMA_EM_ACC", "RES_INTEGRAL_PRIMA_EM_ACC"
        ]
    },
    {
        "resultado": "SALDO_FINAL_APORT_FUT_CAP",
        "operadores": [
            "SALDO_INI_APORT_FUT_CAP", "INCR_DISM_PATR_APORT_FUT_CAP"
        ]
    },
    {
        "resultado": "INCR_DISM_PATR_APORT_FUT_CAP",
        "operadores": [
            "AJUSTES_RETR_APORT_FUT_CAP", "APL_UT_INT_APORT_FUT_CAP", "CONST_RESERVAS_APORT_FUT_CAP", "-DIVIDENDOS_DECRE_APORT_FUT_CAP", "DIS_AUM_CAP_APORT_FUT_CAP", "RECOMPRA_ACCS_APORT_FUT_CAP", "DIS_AUM_PR_ACCS_APORT_FUT_CAP", "DIS_AUM_INV_NC_APORT_FUT_CAP", "OTROS_MOVS_APORT_FUT_CAP", "RES_INTEGRAL_APORT_FUT_CAP"
        ]
    },
    {
        "resultado": "SALDO_FINAL_OTRO_CAP_CONT",
        "operadores": [
            "SALDO_INI_OTRO_CAP_CONT", "INCR_DISM_PATR_OTRO_CAP_CONT"
        ]
    },
    {
        "resultado": "INCR_DISM_PATR_OTRO_CAP_CONT",
        "operadores": [
            "AJUSTES_RETR_OTRO_CAP_CONT", "APL_UT_INT_OTRO_CAP_CONT", "CONST_RESERVAS_OTRO_CAP_CONT", "-DIVIDENDOS_DECRE_OTRO_CAP_CONT", "DIS_AUM_CAP_OTRO_CAP_CONT", "RECOMPRA_ACCS_OTRO_CAP_CONT", "DIS_AUM_PR_ACCS_OTRO_CAP_CONT", "DIS_AUM_INV_NC_OTRO_CAP_CONT", "OTROS_MOVS_OTRO_CAP_CONT", "RES_INTEGRAL_OTRO_CAP_CONT"
        ]
    },
    {
        "resultado": "SALDO_FINAL_RESERVAS",
        "operadores": [
            "SALDO_INI_RESERVAS", "INCR_DISM_PATR_RESERVAS"
        ]
    },
    {
        "resultado": "INCR_DISM_PATR_RESERVAS",
        "operadores": [
            "AJUSTES_RETR_RESERVAS", "APL_UT_INT_RESERVAS", "CONST_RESERVAS_RESERVAS", "-DIVIDENDOS_DECRE_RESERVAS", "DIS_AUM_CAP_RESERVAS", "RECOMPRA_ACCS_RESERVAS", "DIS_AUM_PR_ACCS_RESERVAS", "DIS_AUM_INV_NC_RESERVAS", "OTROS_MOVS_RESERVAS", "RES_INTEGRAL_RESERVAS"
        ]
    },
    {
        "resultado": "SALDO_FINAL_UT_RET",
        "operadores": [
            "SALDO_INI_UT_RET", "INCR_DISM_PATR_UT_RET"
        ]
    },
    {
        "resultado": "INCR_DISM_PATR_UT_RET",
        "operadores": [
            "AJUSTES_RETR_UT_RET", "APL_UT_INT_UT_RET", "CONST_RESERVAS_UT_RET", "-DIVIDENDOS_DECRE_UT_RET", "DIS_AUM_CAP_UT_RET", "RECOMPRA_ACCS_UT_RET", "DIS_AUM_PR_ACCS_UT_RET", "DIS_AUM_INV_NC_UT_RET", "OTROS_MOVS_UT_RET", "RES_INTEGRAL_UT_RET"
        ]
    },
    {
        "resultado": "SALDO_FINAL_UT_PER_ACUM",
        "operadores": [
            "SALDO_INI_UT_PER_ACUM", "INCR_DISM_PATR_UT_PER_ACUM"
        ]
    },
    {
        "resultado": "INCR_DISM_PATR_UT_PER_ACUM",
        "operadores": [
            "AJUSTES_RETR_UT_PER_ACUM", "APL_UT_INT_UT_PER_ACUM", "CONST_RESERVAS_UT_PER_ACUM", "-DIVIDENDOS_DECRE_UT_PER_ACUM", "DIS_AUM_CAP_UT_PER_ACUM", "RECOMPRA_ACCS_UT_PER_ACUM", "DIS_AUM_PR_ACCS_UT_PER_ACUM", "DIS_AUM_INV_NC_UT_PER_ACUM", "OTROS_MOVS_UT_PER_ACUM", "RES_INTEGRAL_UT_PER_ACUM"
        ]
    },
    {
        "resultado": "SALDO_FINAL_OTRAS_PART_UT",
        "operadores": [
            "SALDO_INI_OTRAS_PART_UT", "INCR_DISM_PATR_OTRAS_PART_UT"
        ]
    },
    {
        "resultado": "INCR_DISM_PATR_OTRAS_PART_UT",
        "operadores": [
            "AJUSTES_RETR_OTRAS_PART_UT", "APL_UT_INT_OTRAS_PART_UT", "CONST_RESERVAS_OTRAS_PART_UT", "-DIVIDENDOS_DECRE_OTRAS_PART_UT", "DIS_AUM_CAP_OTRAS_PART_UT", "RECOMPRA_ACCS_OTRAS_PART_UT", "DIS_AUM_PR_ACCS_OTRAS_PART_UT", "DIS_AUM_INV_NC_OTRAS_PART_UT", "OTROS_MOVS_OTRAS_PART_UT", "RES_INTEGRAL_OTRAS_PART_UT"
        ]
    },
    {
        "resultado": "SALDO_FINAL_PART_CONTR",
        "operadores": [
            "SALDO_INI_PART_CONTR", "INCR_DISM_PATR_PART_CONTR"
        ]
    },
    {
        "resultado": "INCR_DISM_PATR_PART_CONTR",
        "operadores": [
            "AJUSTES_RETR_PART_CONTR", "APL_UT_INT_PART_CONTR", "CONST_RESERVAS_PART_CONTR", "-DIVIDENDOS_DECRE_PART_CONTR", "DIS_AUM_CAP_PART_CONTR", "RECOMPRA_ACCS_PART_CONTR", "DIS_AUM_PR_ACCS_PART_CONTR", "DIS_AUM_INV_NC_PART_CONTR", "OTROS_MOVS_PART_CONTR", "RES_INTEGRAL_PART_CONTR"
        ]
    },
    {
        "resultado": "SALDO_FINAL_PART_NO_CONTR",
        "operadores": [
            "SALDO_INI_PART_NO_CONTR", "INCR_DISM_PATR_PART_NO_CONTR"
        ]
    },
    {
        "resultado": "INCR_DISM_PATR_PART_NO_CONTR",
        "operadores": [
            "AJUSTES_RETR_PART_NO_CONTR", "APL_UT_INT_PART_NO_CONTR", "CONST_RESERVAS_PART_NO_CONTR", "-DIVIDENDOS_DECRE_PART_NO_CONTR", "DIS_AUM_CAP_PART_NO_CONTR", "RECOMPRA_ACCS_PART_NO_CONTR", "DIS_AUM_PR_ACCS_PART_NO_CONTR", "DIS_AUM_INV_NC_PART_NO_CONTR", "OTROS_MOVS_PART_NO_CONTR", "RES_INTEGRAL_PART_NO_CONTR"
        ]
    },
    {
        "resultado": "SALDO_FINAL_TOT_CAP_CONT",
        "operadores": [
            "SALDO_INI_TOT_CAP_CONT", "INCR_DISM_PATR_TOT_CAP_CONT"
        ]
    },
    {
        "resultado": "INCR_DISM_PATR_TOT_CAP_CONT",
        "operadores": [
            "AJUSTES_RETR_TOT_CAP_CONT", "APL_UT_INT_TOT_CAP_CONT", "CONST_RESERVAS_TOT_CAP_CONT", "-DIVIDENDOS_DECRE_TOT_CAP_CONT", "DIS_AUM_CAP_TOT_CAP_CONT", "RECOMPRA_ACCS_TOT_CAP_CONT", "DIS_AUM_PR_ACCS_TOT_CAP_CONT", "DIS_AUM_INV_NC_TOT_CAP_CONT", "OTROS_MOVS_TOT_CAP_CONT", "RES_INTEGRAL_TOT_CAP_CONT"
        ]
    }
];

var validacionesEFE = [
    {
        "resultado": "50020000",
        "operadores": [
            "50020010", "50020020", "50020030"
        ]
    },
    {
        "resultado": "50030000",
        "operadores": [
            "50030010", "50030020", "50030030", "50030040", "50030050", "50030060", "50030070", "50030080"
        ]
    },
    {
        "resultado": "50040000",
        "operadores": [
            "-50040010", "50040020", "50040030", "50040040"
        ]
    },
    {
        "resultado": "50050000",
        "operadores": [
            "50010000", "50020000", "50030000", "50040000"
        ]
    },
    {
        "resultado": "50060000",
        "operadores": [
            "50060010", "50060020", "50060030", "50060040", "50060050", "-50060060"
        ]
    },
    {
        "resultado": "50070000",
        "operadores": [
            "50050000", "50060000"
        ]
    },
    {
        "resultado": "50080000",
        "operadores": [
            "-50080010", "50080020", "-50080030", "50080040", "-50080050", "50080060", "-50080070", "50080080", "-50080090", "50080100", "50080110", "50080120", "50080130", "50080140"
        ]
    },
    {
        "resultado": "50090000",
        "operadores": [
            "50090010", "50090020", "50090030", "-50090040", "-50090050", "-50090060", "50090070", "-50090080", "50090090", "50090100", "-50090110", "-50090120", "50090130"
        ]
    },
    {
        "resultado": "50100000",
        "operadores": [
            "50070000", "50080000", "50090000"
        ]
    },
    {
        "resultado": "50130000",
        "operadores": [
            "50110000", "50120000"
        ]
    }
];

var validacionesER = [
    {
        "resultado": "40060000",
        "operadores": [
            "40040000", "40050000"
        ]
    },
    {
        "resultado": "40070000",
        "operadores": [
            "40070010", "40070020", "40070030", "40070040", "40070050"
        ]
    },
    {
        "resultado": "40090000",
        "operadores": [
            "40070000", "-40080000"
        ]
    },
    {
        "resultado": "40110000",
        "operadores": [
            "40060000", "40090000", "40100000"
        ]
    },
    {
        "resultado": "40120000",
        "operadores": [
            "40120010", "40120020"
        ]
    },
    {
        "resultado": "40130000",
        "operadores": [
            "40110000", "-40120000"
        ]
    },
    {
        "resultado": "40200000",
        "operadores": [
            "40150000"
        ]
    },
    {
        "resultado": "40150000",
        "operadores": [
            "40160000", "40170000"
        ]
    },
    {
        "resultado": "40300000",
        "operadores": [
            "40310000", "40320000"
        ]
    },
    {
        "resultado": "40010000",
        "operadores": [
            "40010010", "40010020", "40010030", "40010040", "40010050", "40010060", "40010061", "40010070"
        ]
    },
    {
        "resultado": "40021000",
        "operadores": [
            "40010000", "-40020000"
        ]
    },
    {
        "resultado": "40040000",
        "operadores": [
            "40021000", "-40030000"
        ]
    },
    {
        "resultado": "40290000",
        "operadores": [
            "40210000", "40220000", "40220100", "40230000", "40240000", "40250000", "40260000", "40270000", "40280000"
        ]
    },
    {
        "resultado": "40080000",
        "operadores": [
            "40080010", "40080020", "40080030", "40080050", "40080060"
        ]
    },
    {
        "resultado": "92000010"
    }
]

var validacionesEPF = [
    {
        "resultado": "10000000",
        "operadores": [
            "11000000", "12000000"
        ]
    },
    {
        "resultado": "10000000",
        "operadores": [
            "20000000", "30000000"
        ]
    },
    {
        "resultado": "12080060",
        "operadores": [
            "20000000", "30000000"
        ]
    },
    {
        "resultado": "11000000",
        "operadores": [
            "11010000", "11020000", "11030000", "11040000", "11050000", "11051000", "11060000"
        ]
    },
    {
        "resultado": "11020000",
        "operadores": [
            "11020010", "11020020", "11020030"
        ]
    },
    {
        "resultado": "11030000",
        "operadores": [
            "11030010", "11030020"
        ]
    },
    {
        "resultado": "11040000",
        "operadores": [
            "11040010", "11040020"
        ]
    },
    {
        "resultado": "11060000",
        "operadores": [
            "11060010", "11060020", "11060030", "11060050", "11060060"
        ]
    },
    {
        "resultado": "12000000",
        "operadores": [
            "12010000", "12020000", "12030000", "12040000", "12050000", "12060000", "12070000", "12080000"
        ]
    },
    {
        "resultado": "12020000",
        "operadores": [
            "12020010", "12020020", "12020030", "12020040"
        ]
    },
    {
        "resultado": "12030000",
        "operadores": [
            "12030010", "12030020", "12030030", "12030040", "12030050"
        ]
    },
    {
        "resultado": "12060000",
        "operadores": [
            "12060010", "12060020", "12060030", "12060031", "12060040"
        ]
    },
    {
        "resultado": "12080000",
        "operadores": [
            "12080001", "12080010", "12080020", "12080021", "12080040", "12080050"
        ]
    },
    {
        "resultado": "20000000",
        "operadores": [
            "21000000", "22000000"
        ]
    },
    {
        "resultado": "21000000",
        "operadores": [
            "21010000", "21020000", "21030000", "21040000", "21050000", "21060000"
        ]
    },
    {
        "resultado": "21050000",
        "operadores": [
            "21050010", "21050020"
        ]
    },
    {
        "resultado": "21060000",
        "operadores": [
            "21060010", "21060020", "21060030", "21060050", "21060060", "21060061", "21060080"
        ]
    },
    {
        "resultado": "22000000",
        "operadores": [
            "22010000", "22020000", "22030000", "22040000", "22050000"
        ]
    },
    {
        "resultado": "22050000",
        "operadores": [
            "22050010", "22050020", "22050040", "22050050", "22050051", "22050070"
        ]
    },
    {
        "resultado": "30000000",
        "operadores": [
            "30010000", "30020000"
        ]
    },
    {
        "resultado": "30010000",
        "operadores": [
            "30030000", "-30040000", "30050000", "30060000", "30070000", "30080000", "30090000"
        ]
    },
    {
        "resultado": "30080000",
        "operadores": [
            "30080010", "30080020", "30080030", "30080040", "30080050"
        ]
    },
    {
        "resultado": "30090000",
        "operadores": [
            "30090010", "30090020", "30090030", "30090040", "30090050", "30090060", "30090070", "30090080"
        ]
    },
    {
        "resultado": "91000010"
    },
    {
        "resultado": "91000020"
    },
    {
        "resultado": "91000030"
    },
    {
        "resultado": "91000040"
    },
    {
        "resultado": "91000050"
    },
    {
        "resultado": "91000060"
    },
    {
        "resultado": "91000070"
    },
    {
        "resultado": "91000080"
    },
    {
        "resultado": "91000090"
    },
    {
        "resultado": "91000100"
    },
    {
        "resultado": "91000110"
    },
    {
        "resultado": "91000120"
    }
];

var validacionesExtra = [
    {
        "resultado": "#input-VCC-SALDO_FINAL_TOT_CAP_CONT",
        "operadores": [
            "#input-EPF-30000000"
        ]
    },
    {
        "resultado": "#input-VCCA-SALDO_FINAL_TOT_CAP_CONT",
        "operadores": [
            "#input-EPFA-30000000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-RES_INTEGRAL_PART_CONTR",
        "operadores": [
            "#input-ER-40310000"
        ],
        "numeroTrimestre": 1
    },
    {
        "resultado": "#input-VCC-RES_INTEGRAL_PART_CONTR",
        "operadores": [
            "#input-ERAC-40310000"
        ],
        "numeroTrimestre": 2
    },
    {
        "resultado": "#input-VCC-RES_INTEGRAL_PART_CONTR",
        "operadores": [
            "#input-ERAC-40310000"
        ],
        "numeroTrimestre": 3
    },
    {
        "resultado": "#input-VCC-RES_INTEGRAL_PART_CONTR",
        "operadores": [
            "#input-ERAC-40310000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCCA-RES_INTEGRAL_PART_CONTR",
        "operadores": [
            "#input-ERA-40310000"
        ],
        "numeroTrimestre": 1
    },
    {
        "resultado": "#input-VCCA-RES_INTEGRAL_PART_CONTR",
        "operadores": [
            "#input-ERACA-40310000"
        ],
        "numeroTrimestre": 2
    },
    {
        "resultado": "#input-VCCA-RES_INTEGRAL_PART_CONTR",
        "operadores": [
            "#input-ERACA-40310000"
        ],
        "numeroTrimestre": 3
    },
    {
        "resultado": "#input-VCCA-RES_INTEGRAL_PART_CONTR",
        "operadores": [
            "#input-ERACA-40310000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-RES_INTEGRAL_PART_NO_CONTR",
        "operadores": [
            "#input-ER-40320000"
        ],
        "numeroTrimestre": 1
    },
    {
        "resultado": "#input-VCC-RES_INTEGRAL_PART_NO_CONTR",
        "operadores": [
            "#input-ERAC-40320000"
        ],
        "numeroTrimestre": 2
    },
    {
        "resultado": "#input-VCC-RES_INTEGRAL_PART_NO_CONTR",
        "operadores": [
            "#input-ERAC-40320000"
        ],
        "numeroTrimestre": 3
    },
    {
        "resultado": "#input-VCC-RES_INTEGRAL_PART_NO_CONTR",
        "operadores": [
            "#input-ERAC-40320000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCCA-RES_INTEGRAL_PART_NO_CONTR",
        "operadores": [
            "#input-ERA-40320000"
        ],
        "numeroTrimestre": 1
    },
    {
        "resultado": "#input-VCCA-RES_INTEGRAL_PART_NO_CONTR",
        "operadores": [
            "#input-ERACA-40320000"
        ],
        "numeroTrimestre": 2
    },
    {
        "resultado": "#input-VCCA-RES_INTEGRAL_PART_NO_CONTR",
        "operadores": [
            "#input-ERACA-40320000"
        ],
        "numeroTrimestre": 3
    },
    {
        "resultado": "#input-VCCA-RES_INTEGRAL_PART_NO_CONTR",
        "operadores": [
            "#input-ERACA-40320000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_CAP_SOC",
        "operadores": [
            "#input-EPFA-30030000"
        ]
    },
    {
        "resultado": "#input-VCC-SALDO_INI_PRIMA_EM_ACC",
        "operadores": [
            "#input-EPFA-30050000"
        ]
    },
    {
        "resultado": "#input-VCC-SALDO_INI_APORT_FUT_CAP",
        "operadores": [
            "#input-EPFA-30060000"
        ]
    },
    {
        "resultado": "#input-VCC-SALDO_INI_OTRO_CAP_CONT",
        "operadores": [
            "#input-EPFA-30070000"
        ]
    },
    {
        "resultado": "#input-VCC-SALDO_INI_OTRAS_PART_UT",
        "operadores": [
            "#input-EPFA-30090000"
        ]
    },
    {
        "resultado": "#input-VCC-SALDO_INI_PART_CONTR",
        "operadores": [
            "#input-EPFA-30010000"
        ]
    },
    {
        "resultado": "#input-VCC-SALDO_INI_PART_NO_CONTR",
        "operadores": [
            "#input-EPFA-30020000"
        ]
    },
    {
        "resultado": "#input-VCC-SALDO_FINAL_CAP_SOC",
        "operadores": [
            "#input-EPF-30030000"
        ]
    },
    {
        "resultado": "#input-VCC-SALDO_FINAL_PRIMA_EM_ACC",
        "operadores": [
            "#input-EPF-30050000"
        ]
    },
    {
        "resultado": "#input-VCC-SALDO_FINAL_OTRO_CAP_CONT",
        "operadores": [
            "#input-EPF-30070000"
        ]
    },
    {
        "resultado": "#input-VCC-SALDO_FINAL_OTRAS_PART_UT",
        "operadores": [
            "#input-EPF-30090000"
        ]
    },
    {
        "resultado": "#input-VCC-SALDO_FINAL_PART_CONTR",
        "operadores": [
            "#input-EPF-30010000"
        ]
    },
    {
        "resultado": "#input-VCC-SALDO_FINAL_PART_NO_CONTR",
        "operadores": [
            "#input-EPF-30020000"
        ]
    },
    {
        "resultado": "#input-VCCA-SALDO_FINAL_CAP_SOC",
        "operadores": [
            "#input-EPFA-30030000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCCA-SALDO_FINAL_ACC_REC",
        "operadores": [
            "#input-EPFA-30040000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCCA-SALDO_FINAL_PRIMA_EM_ACC",
        "operadores": [
            "#input-EPFA-30050000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_FINAL_OTRO_CAP_CONT",
        "operadores": [
            "#input-EPF-30070000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCCA-SALDO_FINAL_OTRAS_PART_UT",
        "operadores": [
            "#input-EPFA-30090000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCCA-SALDO_FINAL_PART_CONTR",
        "operadores": [
            "#input-EPFA-30010000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCCA-SALDO_FINAL_PART_NO_CONTR",
        "operadores": [
            "#input-EPFA-30020000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_CAP_SOC",
        "operadores": [
            "#input-VCCA-SALDO_INI_CAP_SOC"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_ACC_REC",
        "operadores": [
            "#input-VCCA-SALDO_INI_ACC_REC"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_PRIMA_EM_ACC",
        "operadores": [
            "#input-VCCA-SALDO_INI_PRIMA_EM_ACC"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_APORT_FUT_CAP",
        "operadores": [
            "#input-VCCA-SALDO_INI_APORT_FUT_CAP"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_OTRO_CAP_CONT",
        "operadores": [
            "#input-VCCA-SALDO_INI_OTRO_CAP_CONT"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_RESERVAS",
        "operadores": [
            "#input-VCCA-SALDO_INI_RESERVAS"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_UT_RET",
        "operadores": [
            "#input-VCCA-SALDO_INI_UT_RET"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_OTRAS_PART_UT",
        "operadores": [
            "#input-VCCA-SALDO_INI_OTRAS_PART_UT"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_PART_CONTR",
        "operadores": [
            "#input-VCCA-SALDO_INI_PART_CONTR"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_PART_NO_CONTR",
        "operadores": [
            "#input-VCCA-SALDO_INI_PART_NO_CONTR"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_TOT_CAP_CONT",
        "operadores": [
            "#input-VCCA-SALDO_INI_TOT_CAP_CONT"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-EFE-50130000",
        "operadores": [
            "#input-EPF-11010000"
        ]
    },
    {
        "resultado": "#input-EFE-50120000",
        "operadores": [
            "#input-EPFA-11010000"
        ]
    },
    {
        "resultado": "#input-ERAC-92000030",
        "operadores": [
            "#input-ERAC-40010000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-ERACA-92000030",
        "operadores": [
            "#input-ERACA-40010000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-ERAC-92000040",
        "operadores": [
            "#input-ERAC-40060000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-ERACA-92000040",
        "operadores": [
            "#input-ERACA-40060000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-ERAC-92000050",
        "operadores": [
            "#input-ERAC-40170000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-ERACA-92000050",
        "operadores": [
            "#input-ERACA-40170000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-ERAC-92000060",
        "operadores": [
            "#input-ERAC-40150000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-ERACA-92000060",
        "operadores": [
            "#input-ERACA-40150000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCCA-RES_INTEGRAL_TOT_CAP_CONT",
        "operadores": [
            "#input-ERA-40300000"
        ],
        "numeroTrimestre": 1
    },
    {
        "resultado": "#input-VCCA-RES_INTEGRAL_TOT_CAP_CONT",
        "operadores": [
            "#input-ERACA-40300000"
        ],
        "numeroTrimestre": 2
    },
    {
        "resultado": "#input-VCCA-RES_INTEGRAL_TOT_CAP_CONT",
        "operadores": [
            "#input-ERACA-40300000"
        ],
        "numeroTrimestre": 3
    },
    {
        "resultado": "#input-VCCA-RES_INTEGRAL_TOT_CAP_CONT",
        "operadores": [
            "#input-ERACA-40300000"
        ],
        "numeroTrimestre": 4
    },

    {
        "resultado": "#input-VCC-RES_INTEGRAL_TOT_CAP_CONT",
        "operadores": [
            "#input-ER-40300000"
        ],
        "numeroTrimestre": 1
    },
    {
        "resultado": "#input-VCC-RES_INTEGRAL_TOT_CAP_CONT",
        "operadores": [
            "#input-ERAC-40300000"
        ],
        "numeroTrimestre": 2
    },
    {
        "resultado": "#input-VCC-RES_INTEGRAL_TOT_CAP_CONT",
        "operadores": [
            "#input-ERAC-40300000"
        ],
        "numeroTrimestre": 3
    },
    {
        "resultado": "#input-VCC-RES_INTEGRAL_TOT_CAP_CONT",
        "operadores": [
            "#input-ERAC-40300000"
        ],
        "numeroTrimestre": 4
    },
    {
        "resultado": "#input-VCC-SALDO_INI_TOT_CAP_CONT",
        "operadores": [
            "#input-EPFA-30000000"
        ]

    }
];

var validacionesElementosRequeridos = [
    {
        "resultado": "#input-IG-00001000"
    },
    {
        "resultado": "#input-IG-00003000"
    },
    {
        "resultado": "#input-IG-00004000"
    },
    {
        "resultado": "#input-IG-00005000"
    },
    {
        "resultado": "#input-IG-00006000"
    },
    {
        "resultado": "#input-IG-00007000"
    },
    {
        "resultado": "#input-IG-00008000"
    }
];

function onSpaceOrEnterKey(e, td) {
    var hecho = $(td).find('.concepto');
    if (hecho) {
        $(hecho).campoCapturaXbrl('editar');
    }
}
function onAfterPaste(cellValue, cellTd) {
    var hecho = $(cellTd).find('.concepto');
    if (hecho) {
        $(hecho).campoCapturaXbrl('setValorBatch', cellValue);
        $(hecho).campoCapturaXbrl('redibujar');
    }
}

function onAfterRangePaste(pastedValue, startTd, x, y, ancho, alto) {
    $($(startTd).closest('table')).tableKeyNavigator('seleccionarRango', { x: x, y: y, ancho: ancho, alto: alto });
    validarFormatos();
}

function onBeforeCopy(td) {
    var hecho = $(td).find('.concepto');
    if (hecho) {
        return $(hecho).campoCapturaXbrl('getValor');
    }
}

$(document).ready(function () {

    //$.isLoading({ text: "Preparando el documento instancia, espere..." });

    /*$.post('/DocumentosInstancia/ObtenerModeloVisorXbrl',
        {
            documentoUrl: 'C:\\Users\\Antonio\\Desktop\\ifrsxbrl_CEMEX_2014-2.xbrl'
            //documentoUrl: 'C:\\Users\\Antonio\\Downloads\\q4-fy13-form-10k-xbrl_0\\dis-20130928.xml'
            //documentoUrl: 'C:\\Users\\Antonio\\Downloads\\q3-fy14-form-10q-xbrl\\dis-20140628.xml'
            //documentoUrl: 'C:\\Users\\Antonio\\Desktop\\example1_2014-03-05\\xbrl_example1_2014-03-05_a.xbrl'
            //documentoUrl: 'C:\\Users\\Antonio\\Downloads\\amzn\\amzn-20131231.xml'
            //documentoUrl: 'C:\\Users\\Antonio\\Downloads\\example4_2014-03-05\\xbrl_example4_2014-03-05.xbrl'
        }, function (data, textStatus, jqXHR) {
            if (data.Resultado) {
                console.log(data.InformacionExtra);
                presentarDocumentoInstancia(data.InformacionExtra);
                //blinkButton($('#botonErroresFormato'));
            } else {
                $.prompt('Ocurrió un error al obtener el documento instancia. Inténtelo nuevamente.',
                {
                    title: 'Error al contactar al servidor',
                    buttons: { 'Aceptar': true }
                });
            }

        }).always(function () {
            $.isLoading('hide');
        }).error(function () {
            $.prompt('Ocurrió un error al obtener el documento instancia. Inténtelo nuevamente.',
                {
                    title: 'Error al contactar al servidor',
                    buttons: { 'Aceptar': true }
                });
        });*/

    var estilosTabla = {
        activeClass: 'celdaSeleccionada',
        rangoSeleccionado: 'rangoSeleccionado',
        rangoSeleccionadoL: 'rangoSeleccionadoL',
        rangoSeleccionadoR: 'rangoSeleccionadoR',
        rangoSeleccionadoT: 'rangoSeleccionadoT',
        rangoSeleccionadoB: 'rangoSeleccionadoB',
        rangoSeleccionadoLD: 'rangoSeleccionadoLD',
        rangoSeleccionadoRD: 'rangoSeleccionadoRD',
        rangoSeleccionadoTD: 'rangoSeleccionadoTD',
        rangoSeleccionadoBD: 'rangoSeleccionadoBD'
    };

    $('#tablaVCCActual td:not(:first-child)').tableKeyNavigator('init', {
        activeClass: estilosTabla,
        xContainer: $('#contenedorTablaVCCActual'),
        yContainer: $('#contenedorFormatos'),
        onSpaceOrEnterKey: onSpaceOrEnterKey,
        onAfterPaste: onAfterPaste,
        onAfterRangePaste: onAfterRangePaste,
        onBeforeCopy: onBeforeCopy
    });

    $('#tablaVCCAnterior td:not(:first-child)').tableKeyNavigator('init', {
        activeClass: estilosTabla,
        xContainer: $('#contenedorTablaVCCAnterior'),
        yContainer: $('#contenedorFormatos'),
        onSpaceOrEnterKey: onSpaceOrEnterKey,
        onAfterPaste: onAfterPaste,
        onAfterRangePaste: onAfterRangePaste,
        onBeforeCopy: onBeforeCopy
    });

    $('#tablaEstadoPosicionFinanciera td:not(:first-child)').tableKeyNavigator('init', {
        activeClass: estilosTabla,
        xContainer: $('#contenedorFormatos'),
        yContainer: $('#contenedorFormatos'),
        onSpaceOrEnterKey: onSpaceOrEnterKey,
        onAfterPaste: onAfterPaste,
        onAfterRangePaste: onAfterRangePaste,
        onBeforeCopy: onBeforeCopy
    });

    $('#tablaEstadoPosicionFinanciera2 td:not(:first-child)').tableKeyNavigator('init', {
        activeClass: estilosTabla,
        xContainer: $('#contenedorFormatos'),
        yContainer: $('#contenedorFormatos'),
        onSpaceOrEnterKey: onSpaceOrEnterKey,
        onAfterPaste: onAfterPaste,
        onAfterRangePaste: onAfterRangePaste,
        onBeforeCopy: onBeforeCopy
    });

    $('#table_ER td:not(:first-child)').tableKeyNavigator('init', {
        activeClass: estilosTabla,
        xContainer: $('#contenedorFormatos'),
        yContainer: $('#contenedorFormatos'),
        onSpaceOrEnterKey: onSpaceOrEnterKey,
        onAfterPaste: onAfterPaste,
        onAfterRangePaste: onAfterRangePaste,
        onBeforeCopy: onBeforeCopy
    });

    $('#table_ER2 td:not(:first-child)').tableKeyNavigator('init', {
        activeClass: estilosTabla,
        xContainer: $('#contenedorFormatos'),
        yContainer: $('#contenedorFormatos'),
        onSpaceOrEnterKey: onSpaceOrEnterKey,
        onAfterPaste: onAfterPaste,
        onAfterRangePaste: onAfterRangePaste,
        onBeforeCopy: onBeforeCopy
    });

    $('#table_ER3 td:not(:first-child)').tableKeyNavigator('init', {
        activeClass: estilosTabla,
        xContainer: $('#contenedorFormatos'),
        yContainer: $('#contenedorFormatos'),
        onSpaceOrEnterKey: onSpaceOrEnterKey,
        onAfterPaste: onAfterPaste,
        onAfterRangePaste: onAfterRangePaste,
        onBeforeCopy: onBeforeCopy
    });

    $('#table_ER4 td:not(:first-child)').tableKeyNavigator('init', {
        activeClass: estilosTabla,
        xContainer: $('#contenedorFormatos'),
        yContainer: $('#contenedorFormatos'),
        onSpaceOrEnterKey: onSpaceOrEnterKey,
        onAfterPaste: onAfterPaste,
        onAfterRangePaste: onAfterRangePaste,
        onBeforeCopy: onBeforeCopy
    });

    $('#table_EFE td:not(:first-child)').tableKeyNavigator('init', {
        activeClass: estilosTabla,
        xContainer: $('#contenedorFormatos'),
        yContainer: $('#contenedorFormatos'),
        onSpaceOrEnterKey: onSpaceOrEnterKey,
        onAfterPaste: onAfterPaste,
        onAfterRangePaste: onAfterRangePaste,
        onBeforeCopy: onBeforeCopy
    });

    $('.navegacionFormatos').click(function (e) {
        e.preventDefault();

        var self = this;
        $('.navegacionFormatos').each(function () {
            $(this).parent().removeClass('active')
        }).promise().done(function () {
            $(self).parent().addClass('active');
        });

        $('#contenedorFormatos').scrollTo('#' + $(this).prop('href').split('#')[1], 500, { easing: 'easeInQuad' });

        return false;
    });


    $('.concepto').campoCapturaXbrl('init', {
        formatos: {
            FormatoEPF: formatoCaptura.FormatoEPF,
            FormatoER: formatoCaptura.FormatoER,
            FormatoEFE: formatoCaptura.FormatoEFE,
            FormatoVCC: formatoCaptura.FormatoVCC,
            FormatoIG: formatoCaptura.FormatoIG,
            FormatoDI12M: formatoCaptura.FormatoDI12M
        },
        catalogoConceptos: catalogoElementos,
        claseCampoVacio: 'celdaVacia',
        onBtnClick: presentarDetalleDeCalculo,
        onValueChanged: indicarCambiosPendientesGuardar
    });

    //Nombres y fechas de contextos

    var formatosArray = [
        formatoCaptura.FormatoEPF,
        formatoCaptura.FormatoER,
        formatoCaptura.FormatoEFE,
        formatoCaptura.FormatoVCC,
        formatoCaptura.FormatoIG,
        formatoCaptura.FormatoDI12M
    ];

    $(".fechaContexto").each(function () {
        var contexto = $(this).data('context');
        var tipoPeriodo = $(this).data('type');
        if (contexto && tipoPeriodo) {
            for (var iFormato = 0; iFormato < formatosArray.length; iFormato++) {
                for (var ictx = 0; formatosArray[iFormato].Contextos && ictx < formatosArray[iFormato].Contextos.length; ictx++) {
                    if (formatosArray[iFormato].Contextos[ictx].Id == contexto) {
                        if (tipoPeriodo == 'i') {
                            //instante
                            $(this).text(moment(formatosArray[iFormato].Contextos[ictx].FechaFin).format(formatoFecha));
                        } else {
                            //duracion
                            $(this).text(moment(formatosArray[iFormato].Contextos[ictx].FechaInicio).format(formatoFecha) + " - " + moment(formatosArray[iFormato].Contextos[ictx].FechaFin).format(formatoFecha));
                        }
                        return;
                    }
                }
            }
        }
    });

    $(".nombreContexto").each(function () {
        var contexto = $(this).data('context');
        if (contexto) {
            for (var iFormato = 0; iFormato < formatosArray.length; iFormato++) {
                for (var ictx = 0; formatosArray[iFormato].Contextos && ictx < formatosArray[iFormato].Contextos.length; ictx++) {
                    if (formatosArray[iFormato].Contextos[ictx].Id == contexto) {
                        $(this).text(formatosArray[iFormato].Contextos[ictx].Nombre);
                        return;
                    }
                }
            }
        }
    });

    //Quitar las columnas de los acumulados no usados para el trimestre uno
    if (numeroTrimestre == 1) {
        $(".AC").each(function () {
            $(this).remove();
        });
    }
    if (typeof String.prototype.startsWith != 'function') {
        String.prototype.startsWith = function (str) {
            return this.slice(0, str.length) == str;
        };
    }

    $('#btnValidarEstadoFinanciero').bind('click', function () {
        validarFormatos();
    });

    $('#btnBloquearEstadoFinanciero').bind('click', function () {
        bloquearLiberarDocumentoInstancia();
    });

    $('#btnGuardarEstadoFinanciero').bind('click', function () {
        presentarFormatoGuardarDocumento();
    });

    $('#btnHistorialEstadoFinanciero').click(function () {
        presentarVersionesDeDocumentoInstancia();
    });

    $('#btnCompartirEstadoFinanciero').click(function () {
        presentarUsuariosAsignadosDeDocumentoInstancia();
    });

    $('#btnExportarEstadoFinanciero').click(function () {
        presentarFormatoExportarDocumentoInstancia();
    });

    $('#btnImportarEstadoFinanciero').click(function () {
        presentarFormatoImportacionExcel();
    });

    $(document).on('click', '.popover-title .close', function (e) {
        var $target = $(e.target), $popover = $target.closest('.popover').prev();
        $popover && $popover.popover('hide');
    });

    $('#btnGuardarEstadoFinanciero').prop('disabled', true);

    $('#auxMonedas').autoNumeric('init', { aSign: '$', pSign: 'p', vMin: '-99999999999999.00', nBracket: '(,)' });

    $('.navegacionFormatos').bind('click', function () {
        $('#contenedorFormatos').show();
        $('#historicoVersiones').hide();
        $('#usuariosAsignados').hide();
    });

    validarFormatos();
    validarPermisosUsuario();

    window.onbeforeunload = confirmarNavegacionFueraDeLaPagina;
});



function confirmarNavegacionFueraDeLaPagina() {
    if (cambiosPendientesGuardar) {
        return 'Existen cambios pendientes por guardar. ¿Desea abandonar la página?';
    }
}

function indicarCambiosPendientesGuardar() {
    validarFormatos();
    if (!cambiosPendientesGuardar) {
        cambiosPendientesGuardar = true;
        $('#btnGuardarEstadoFinanciero').prop('disabled', false);
        blinkButton($('#btnGuardarEstadoFinanciero'));
    }
}

function presentarDetalleDeOperacion(idContexto, idElemento, detalleOperacion, indice, total) {

    if (detalleOperacion) {

        if (indice > 0) {
            $('#btnAnteriorDetalle').show();
            $('#btnAnteriorDetalle').unbind('click');
            $('#btnAnteriorDetalle').bind('click', function () {
                var detallesOperacion = detalleOperaciones[idContexto + "_" + idElemento];
                var anteriorDetalleOperacion = detallesOperacion[indice - 1];
                presentarDetalleDeOperacion(idContexto, idElemento, anteriorDetalleOperacion, indice - 1, total);
            });
        } else {
            $('#btnAnteriorDetalle').hide();
        }

        if (indice < (total - 1)) {
            $('#btnSiguienteDetalle').show();
            $('#btnSiguienteDetalle').unbind('click');
            $('#btnSiguienteDetalle').bind('click', function () {
                var detallesOperacion = detalleOperaciones[idContexto + "_" + idElemento];
                var siguienteDetalleOperacion = detallesOperacion[indice + 1];
                presentarDetalleDeOperacion(idContexto, idElemento, siguienteDetalleOperacion, indice + 1, total);
            });
        } else {
            $('#btnSiguienteDetalle').hide();
        }

        $('#detalleCalculoConcepto').text(detalleOperacion.concepto.TITULO);

        if (detalleOperacion.esIgualdad) {
            $('#tablaDetalleCalculo thead').html('<tr> ' +
                                                 '   <th>Concepto</th> ' +
                                                 '   <th>Formato</th> ' +
                                                 '   <th style="min-width:155px; width:155px;">Periodo</th> ' +
                                                 '   <th style="min-width:155px; width:155px;">Valor Referencia</th> ' +
                                                 '   <th style="min-width:200px; width:200px;">Valor</th> ' +
                                                 '</tr>');
        } else {
            $('#tablaDetalleCalculo thead').html('<tr> ' +
                                                 '   <th>Concepto</th> ' +
                                                 '   <th style="min-width:50px; width:50px;">Peso</th> ' +
                                                 '   <th style="min-width:155px; width:155px;">Valor Calculado</th> ' +
                                                 '   <th style="min-width:200px; width:200px;">Valor</th> ' +
                                                 '</tr>');
        }

        $('#tablaDetalleCalculo tbody').html('');
        $('#tablaDetalleCalculo tfoot').html('');

        for (i = 0; i < detalleOperacion.conceptosOperandos.length; i++) {
            var operando = detalleOperacion.conceptosOperandos[i];
            var titulo = operando.concepto.TITULO;
            if (operando.concepto.ID_FORMATO == 113) {
                titulo = titulo + ' ' + operando.concepto.COLUMNA;
            }
            if (detalleOperacion.esIgualdad) {
                var infoFormato = obtenerPeriodoyFormato(operando.conceptoAsociado[0].id.split('-')[1]);
                $('#tablaDetalleCalculo tbody').append('<tr>' +
                                                       '   <td>' + titulo + '</td>' +
                                                       '   <td>' + infoFormato.formato + '</td>' +
                                                       '   <td>' + infoFormato.periodo + '</td>' +
                                                       '   <td><span id="span_' + operando.id + '" class="acurrency">' + (operando.sinValor ? '&nbsp;' : operando.valor) + '</span></td>' +
                                                       '   <td><input id="input_' + operando.id + '" class="form-control acurrency espejo" value="' + (operando.sinValor ? '&nbsp;' : operando.valor) + '"/></td>' +
                                                       '</tr>');
            }
            else {
                $('#tablaDetalleCalculo tbody').append('<tr>' +
                                                       '   <td>' + titulo + '</td>' +
                                                       '   <td style="text-align:center">' + (operando.esResta ? '-1' : '1') + '</td>' +
                                                       '   <td><span id="span_' + operando.id + '" class="acurrency">' + (operando.sinValor ? '&nbsp;' : operando.valor) + '</span></td>' +
                                                       '   <td><input id="input_' + operando.id + '" class="form-control acurrency espejo" value="' + (operando.sinValor ? '&nbsp;' : operando.valor) + '"/></td>' +
                                                       '</tr>');
            }
        }

        var contieneError = detalleOperacion.valor != detalleOperacion.valorCalculado;
        var titulo = detalleOperacion.concepto.TITULO;
        if (detalleOperacion.concepto.ID_FORMATO == 113) {
            titulo = titulo + ' ' + detalleOperacion.concepto.COLUMNA;
        }
        if (!detalleOperacion.esIgualdad) {
            $('#tablaDetalleCalculo tfoot').append('<tr>' +
                                                   '   <th>' + titulo + '</th>' +
                                                   '   <th style="text-align:center">&nbsp;</th>' +
                                                   '   <th><span id="span_v_' + idElemento + '" class="acurrency' + (contieneError ? ' text-danger' : ' text-success') + '">' + detalleOperacion.valorCalculado + '</span></th>' +
                                                   '   <th><input id="input_v_' + idElemento + '" class="form-control acurrency" value="' + (isNaN(detalleOperacion.valor) ? '' : detalleOperacion.valor) + '"/></th>' +
                                                   '</tr>');
        } else {
            var infoFormato = obtenerPeriodoyFormato(detalleOperacion.conceptoResultado[0].id.split('-')[1]);
            $('#tablaDetalleCalculo tfoot').append('<tr>' +
                                                   '   <th>' + titulo + '</th>' +
                                                   '   <th>' + infoFormato.formato + '</th>' +
                                                   '   <th>' + infoFormato.periodo + '</th>' +
                                                   '   <th><span id="span_v_' + idElemento + '" class="acurrency' + (contieneError ? ' text-danger' : ' text-success') + '">' + detalleOperacion.valorCalculado + '</span></th>' +
                                                   '   <th><input id="input_v_' + idElemento + '" class="form-control acurrency" value="' + (isNaN(detalleOperacion.valor) ? '' : detalleOperacion.valor) + '"/></th>' +
                                                   '</tr>');
        }

        $('#input_v_' + idElemento).keyup(function () {
            var valorCalculado = 0;
            for (i = 0; i < detalleOperacion.conceptosOperandos.length; i++) {
                var operando = detalleOperacion.conceptosOperandos[i];
                var valorOperando = $("#input_" + operando.id).autoNumeric('get');
                if (valorOperando === "" || valorOperando === undefined) {
                    valorOperando = 0;
                } else {
                    valorOperando = parseFloat(valorOperando);
                }
                if (operando.esResta) {
                    valorCalculado = valorCalculado - valorOperando;
                } else {
                    valorCalculado = valorCalculado + valorOperando;
                }
            }
            $('#span_v_' + idElemento).autoNumeric('set', valorCalculado);
            $('#span_v_' + idElemento).removeClass('text-danger');
            $('#span_v_' + idElemento).removeClass('text-success');

            var valor = $('#input_v_' + idElemento).autoNumeric('get');
            if (valor === "" || valor === undefined) {
                valor = 0;
            } else {
                valor = parseFloat(valor);
            }

            if (valorCalculado != valor) {
                $('#span_v_' + idElemento).addClass('text-danger');
            } else {
                $('#span_v_' + idElemento).addClass('text-success');
            }
        });

        $('.espejo').keyup(function () {
            realizoCambios = true;
            var miId = $(this)[0].id;
            var spanId = miId.replace("input_", "span_");
            $('#' + spanId).text($(this).val());
            var valorCalculado = 0;
            for (i = 0; i < detalleOperacion.conceptosOperandos.length; i++) {
                var operando = detalleOperacion.conceptosOperandos[i];
                var valorOperando = $("#input_" + operando.id).autoNumeric('get');
                if (valorOperando === "" || valorOperando === undefined) {
                    valorOperando = 0;
                } else {
                    valorOperando = parseFloat(valorOperando);
                }
                if (operando.esResta) {
                    valorCalculado = valorCalculado - valorOperando;
                } else {
                    valorCalculado = valorCalculado + valorOperando;
                }
            }
            $('#span_v_' + idElemento).autoNumeric('set', valorCalculado);
            $('#span_v_' + idElemento).removeClass('text-danger');
            $('#span_v_' + idElemento).removeClass('text-success');

            var valor = $('#input_v_' + idElemento).autoNumeric('get');
            if (valor === "" || valor === undefined) {
                valor = 0;
            } else {
                valor = parseFloat(valor);
            }

            valorCalculado = valorCalculado.toFixed(2);
            valor = valor.toFixed(2);

            if (valorCalculado != valor) {
                $('#span_v_' + idElemento).addClass('text-danger');
            } else {
                $('#span_v_' + idElemento).addClass('text-success');
            }
        });

        $('#btnActualizarDatos').unbind('click');
        $('#btnActualizarDatos').bind('click', function () {
            esBotonActualizar = true;
            for (i = 0; i < detalleOperacion.conceptosOperandos.length; i++) {
                var operando = detalleOperacion.conceptosOperandos[i];
                var valorOperando = $("#input_" + operando.id).autoNumeric('get');
                operando.conceptoAsociado.campoCapturaXbrl('setValor', valorOperando);
            }
            detalleOperacion.conceptoResultado.campoCapturaXbrl('setValor', $('#input_v_' + idElemento).autoNumeric('get'));
            validarFormatos();
            $('#modalDetalleCalculo').modal('hide');
        });

        $('#modalDetalleCalculo').off('hide.bs.modal');
        $('#modalDetalleCalculo').on('hide.bs.modal', function (e) {
            if (!esBotonActualizar && realizoCambios && confirm('Ha realizado cambios. ¿Desea Guardarlos?')) {
                for (i = 0; i < detalleOperacion.conceptosOperandos.length; i++) {
                    var operando = detalleOperacion.conceptosOperandos[i];
                    var valorOperando = $("#input_" + operando.id).autoNumeric('get');
                    operando.conceptoAsociado.campoCapturaXbrl('setValor', valorOperando);
                }
                detalleOperacion.conceptoResultado.campoCapturaXbrl('setValor', $('#input_v_' + idElemento).autoNumeric('get'));
                validarFormatos();
            }
        })

        $('.acurrency').autoNumeric('init', { aSign: '$', pSign: 'p', vMin: '-99999999999999.00', nBracket: '(,)' });
        $('.anumeric').autoNumeric('init', { vMin: '0', vMax: '999999999999' });

        validarPermisosUsuario();
    }
}

function presentarDetalleDeCalculo(idContexto, idElemento, controlOrigen) {

    realizoCambios = false;
    esBotonActualizar = false;

    var detalleOperacion;
    var detallesOperacion = detalleOperaciones[idContexto + "_" + idElemento];

    var indice = 0;
    for (i = 0; i < detallesOperacion.length; i++) {
        detalleOperacion = detallesOperacion[i];
        indice = i;
        if (detalleOperacion.valor != detalleOperacion.valorCalculado) {
            break;
        }
    }

    presentarDetalleDeOperacion(idContexto, idElemento, detalleOperacion, indice, detallesOperacion.length);

    $('#modalDetalleCalculo').modal({
        'backdrop': true,
        'keyboard': true,
    });

    $('#modalDetalleCalculo').on('hidden.bs.modal', function (e) {
        if (controlOrigen) {
            controlOrigen.focus();
        }
    })
}

function agregarErrorAListado(detalleError) {
    numeroErrores++;

    var idConceptoResultado = detalleError.detalleOperacion.conceptoResultado[0].id;

    detalleErrores[idConceptoResultado] = detalleError;

    detalleError.detalleOperacion.conceptoResultado.tooltip({
        animation: true,
        container: document.body,
        html: true,
        placement: 'auto top',
        title: detalleErrores[idConceptoResultado].mensaje,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><span class="fa-stack pull-left m-r-sm" style="margin-top: 5px; margin-left:5px;"> ' +
                                '        <i class="fa fa-circle fa-stack-2x text-danger"></i> ' +
                                '        <i class="fa fa-exclamation fa-stack-1x text-white"></i> ' +
                                '    </span><div class="tooltip-inner"></div></div>'
    });

    detalleError.detalleOperacion.conceptoResultado.campoCapturaXbrl('valido', 2);
    detalleError.detalleOperacion.conceptoResultado.campoCapturaXbrl('detalleOperacion', detalleError.detalleOperacion.conceptosOperandos.length > 0);

    var idA = idConceptoResultado.replace("input-", "a-");

    if (detalleError.detalleOperacion.conceptosOperandos && detalleError.detalleOperacion.conceptosOperandos.length > 0) {

        $('#listaErroresValidacion').append('<li id="' + detalleError.id + '" class="list-group-item"> ' +
                                            '    <span class="fa-stack pull-left m-r-sm"> ' +
                                            '        <i class="fa fa-circle fa-stack-2x text-danger"></i> ' +
                                            '        <i class="fa fa-exclamation fa-stack-1x text-white"></i> ' +
                                            '    </span> ' +
                                            '    <a id="' + idA + '" href="javascript:void(0);" class="clear"> ' +
                                            detalleError.mensaje +
                                            '    </a> ' +
                                            '</li>');

        $('#' + idA).unbind('click');
        $('#' + idA).bind('click', function () {
            var id = $(this)[0].id;
            var elementosId = id.split('-');
            presentarDetalleDeCalculo(elementosId[1], elementosId[2]);
        });
    } else {
        $('#listaErroresValidacion').append('<li id="' + detalleError.id + '" class="list-group-item"> ' +
                                            '    <span class="fa-stack pull-left m-r-sm"> ' +
                                            '        <i class="fa fa-circle fa-stack-2x text-danger"></i> ' +
                                            '        <i class="fa fa-exclamation fa-stack-1x text-white"></i> ' +
                                            '    </span> ' +
                                            '    <span class="clear"> ' +
                                            detalleError.mensaje +
                                            '    </span> ' +
                                            '</li>');
    }
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
    });
    return uuid;
};

function DetalleError() {
    this.mensaje = "";
    this.id = "";
    this.detalleOperacion = "";
}

function DetalleOperacion() {
    this.id = "";
    this.conceptoResultado = "";
    this.concepto = "";
    this.valor = "";
    this.valorCalculado = "";
    this.contexto = "";
    this.conceptosOperandos = new Array();
    this.esIgualdad = false;
}

function DetalleOperando() {
    this.id = "";
    this.concepto = "";
    this.conceptoAsociado = "";
    this.valor = "";
    this.sinValor = false;
    this.esResta = false;
}

function buscarConceptoEnCatalogo(cuentaEmisnet) {
    for (i = 0; i < catalogoElementos.length; i++) {
        if (catalogoElementos[i].CUENTA_EMISNET == cuentaEmisnet) {
            return catalogoElementos[i];
        }
    }
    return "";
}

function blinkButton(boton) {
    boton.each(function (i) {
        var img = $(this);
        img[0].$count = 1;
        if (img[0].$interval) {
            clearInterval(img[0].$interval);
        }
        img[0].$interval = setInterval(function () {
            img.animate({ opacity: .3 }, 400, function () {
                img.animate({ opacity: 1 }, 200);
            });
            if (img[0].$count++ >= 3) {
                clearInterval(img[0].$interval);
            }
        }, 1000);
    });
}

function formatearMoneda(importe) {
    $('#auxMonedas').autoNumeric('set', importe);
    return $('#auxMonedas').val();
}

function validarFormatos() {

    $('#contenedorFormatos').show();
    $('#historicoVersiones').hide();
    $('#usuariosAsignados').hide();

    detalleErrores = {}
    numeroErrores = 0;
    detalleOperaciones = {};

    $('#listaErroresValidacion').html('');

    validarEstadoFinanciero(validacionesEPF, "EPF");
    validarEstadoFinanciero(validacionesEPF, "EPFA");
    validarEstadoFinanciero(validacionesER, "ER");
    validarEstadoFinanciero(validacionesER, "ERA");
    if (numeroTrimestre > 1) {
        validarEstadoFinanciero(validacionesER, "ERAC");
        validarEstadoFinanciero(validacionesER, "ERACA");
    }
    validarEstadoFinanciero(validacionesER12, "ER12");
    validarEstadoFinanciero(validacionesER12, "ER12A");

    validarEstadoFinanciero(validacionesEFE, "EFE");
    validarEstadoFinanciero(validacionesEFE, "EFEA");
    validarEstadoFinanciero(validacionesVCC, "VCC");
    validarEstadoFinanciero(validacionesVCC, "VCCA");
    validarEstadoFinanciero(validacionesExtra);
    validarEstadoFinanciero(validacionesElementosRequeridos);

    if (numeroErrores == 0) {

        $('#listaErroresValidacion').append('<li class="list-group-item">' +
                                            '   <span class="fa-stack pull-left m-r-sm">' +
                                            '       <i class="fa fa-circle fa-stack-2x text-success"></i>' +
                                            '       <i class="fa fa-check fa-stack-1x text-white"></i>' +
                                            '   </span>' +
                                            '   <span class="clear">' +
                                            '   No hay errores en el formato' +
                                            '   </span>' +
                                            '</li>');
        $('#botonErroresFormato').removeClass('btn-success');
        $('#botonErroresFormato').removeClass('btn-danger');
        $('#indicadorErroresFormato').removeClass('fa-exclamation');
        $('#indicadorErroresFormato').removeClass('fa-check');

        $('#botonErroresFormato').addClass('btn-success');
        $('#indicadorErroresFormato').addClass('fa-check');
    } else {
        $('#botonErroresFormato').removeClass('btn-success');
        $('#botonErroresFormato').removeClass('btn-danger');
        $('#indicadorErroresFormato').removeClass('fa-exclamation');
        $('#indicadorErroresFormato').removeClass('fa-check');

        $('#botonErroresFormato').addClass('btn-danger');
        $('#indicadorErroresFormato').addClass('fa-exclamation');
    }

    if (tieneErrores === '' || (tieneErrores && numeroErrores == 0) || (!tieneErrores && numeroErrores > 0)) {
        blinkButton($('#botonErroresFormato'));
        tieneErrores = numeroErrores > 0;
    }
}

function obtenerPeriodoyFormato(idContexto) {
    var resultado = {
        formato: '',
        periodo: ''
    };

    if (idContexto) {
        if (idContexto == 'EPF') {
            resultado.formato = 'Estado de Posición Financiera';
            resultado.periodo = 'Cierre del Trimestre Actual';
        } else if (idContexto == 'EPFA') {
            resultado.formato = 'Estado de Posición Financiera';
            resultado.periodo = 'Cierre del Año Anterior';
        } else if (idContexto == 'ER') {
            resultado.formato = 'Estado de Resultados';
            resultado.periodo = 'Trimestre Año Actual';
        } else if (idContexto == 'ERA') {
            resultado.formato = 'Estado de Resultados';
            resultado.periodo = 'Trimestre Año Anterior';
        } else if (idContexto == 'ERAC') {
            resultado.formato = 'Estado de Resultados';
            resultado.periodo = 'Acumulado Año Actual';
        } else if (idContexto == 'ERACA') {
            resultado.formato = 'Estado de Resultados';
            resultado.periodo = 'Acumulado Año Anterior';
        } else if (idContexto == 'ER12') {
            resultado.formato = 'Estado de Resultados Datos Informativos a 12 Meses';
            resultado.periodo = 'Año Actual';
        } else if (idContexto == 'ER12A') {
            resultado.formato = 'Estado de Resultados Datos Informativos a 12 Meses';
            resultado.periodo = 'Año Anterior';
        } else if (idContexto == 'EFE') {
            resultado.formato = 'Estado de Flujo de Efectivo';
            resultado.periodo = 'Año Actual';
        } else if (idContexto == 'EFEA') {
            resultado.formato = 'Estado de Flujo de Efectivo';
            resultado.periodo = 'Año Anterior';
        } else if (idContexto == 'VCC') {
            resultado.formato = 'Estado de Variaciones al Capital Contable';
            resultado.periodo = 'Año Actual';
        } else if (idContexto == 'VCCA') {
            resultado.formato = 'Estado de Variaciones al Capital Contable';
            resultado.periodo = 'Año Anterior';
        }
    }

    return resultado;
}

function validarEstadoFinanciero(validaciones, idContexto) {

    var infoPeriodoYFormato = obtenerPeriodoyFormato(idContexto);

    for (iVal = 0; iVal < validaciones.length; ++iVal) {

        var validacion = validaciones[iVal];

        if (validacion.numeroTrimestre && validacion.numeroTrimestre != numeroTrimestre) {
            continue;
        }

        var cuentaEmisnetResultado;
        var ctaResultado;
        var esValidacionIgualdad = validacion.resultado.startsWith('#');
        if (esValidacionIgualdad) {
            cuentaEmisnetResultado = validacion.resultado.split('-')[2];
            idContexto = validacion.resultado.split('-')[1];
            infoPeriodoYFormato = obtenerPeriodoyFormato(idContexto)
            ctaResultado = $(validacion.resultado);
        } else {
            cuentaEmisnetResultado = validacion.resultado;
            ctaResultado = $("#input-" + idContexto + "-" + cuentaEmisnetResultado);
        }

        var definicionConceptoResultado = buscarConceptoEnCatalogo(cuentaEmisnetResultado);

        if (!detalleErrores["input-" + idContexto + "-" + cuentaEmisnetResultado]) {
            ctaResultado.campoCapturaXbrl('valido', 3);
            ctaResultado.tooltip('destroy');
        }

        var valCtaResultado = ctaResultado.campoCapturaXbrl('getValor');

        var detalleOperacion = new DetalleOperacion();
        detalleOperacion.conceptoResultado = ctaResultado;
        detalleOperacion.id = generateUUID();
        detalleOperacion.concepto = definicionConceptoResultado;
        detalleOperacion.valor = valCtaResultado;
        detalleOperacion.contexto = idContexto;
        detalleOperacion.esIgualdad = esValidacionIgualdad;

        if (valCtaResultado === undefined || valCtaResultado === "") {
            var detalleError = new DetalleError();

            detalleError.id = generateUUID();
            detalleError.mensaje = 'Formato: ' + infoPeriodoYFormato.formato + '. Periodo: ' + infoPeriodoYFormato.periodo + ". El concepto " + definicionConceptoResultado.TITULO + " es requerido.";

            detalleError.detalleOperacion = detalleOperacion;

            //agregarErrorAListado(detalleError);
            //$(idBoton).unbind('click');
        } else {

            if (!validacion.operadores || validacion.operadores.length == 0) {
                continue;
            }

            detalleOperacion.valor = parseFloat(detalleOperacion.valor);
            detalleOperacion.valorCalculado = 0;

            var todosLosOperandosVacios = true;
            var erroresDetalle = [];
            var indiceErroresDetalle = 0;
            for (iOper = 0; iOper < validacion.operadores.length; iOper++) {

                var detalleOperando = new DetalleOperando();
                var idContextoOperando = idContexto;
                detalleOperando.esResta = false;
                var cuentaEmisnet = validacion.operadores[iOper];
                if (cuentaEmisnet.startsWith("-")) {
                    detalleOperando.esResta = true;
                    cuentaEmisnet = cuentaEmisnet.substring(1, cuentaEmisnet.length);
                }
                if (cuentaEmisnet.startsWith("#")) {
                    idContextoOperando = cuentaEmisnet.split('-')[1];
                    cuentaEmisnet = cuentaEmisnet.split('-')[2];
                }

                var definicionConcepto = buscarConceptoEnCatalogo(cuentaEmisnet);
                detalleOperando.id = generateUUID();

                if (esValidacionIgualdad) {
                    detalleOperando.conceptoAsociado = $(validacion.operadores[iOper]);
                } else {
                    detalleOperando.conceptoAsociado = $("#input-" + idContextoOperando + "-" + cuentaEmisnet);
                }

                var valorOperando = detalleOperando.conceptoAsociado.campoCapturaXbrl('getValor');

                if (valorOperando === undefined || valorOperando === "") {
                    detalleOperando.sinValor = true;

                    var detalleError = new DetalleError();

                    detalleError.id = generateUUID();
                    detalleError.mensaje = 'Formato: ' + infoPeriodoYFormato.formato + '. Periodo: ' + infoPeriodoYFormato.periodo + ". El concepto " + definicionConcepto.TITULO + " es requerido.";
                    detalleError.detalleOperacion = new DetalleOperacion();
                    detalleError.detalleOperacion.conceptoResultado = detalleOperando.conceptoAsociado;
                    detalleError.detalleOperacion.id = generateUUID();
                    detalleError.detalleOperacion.concepto = definicionConcepto;
                    detalleError.detalleOperacion.valor = valorOperando;
                    detalleError.detalleOperacion.contexto = idContextoOperando;


                    erroresDetalle[indiceErroresDetalle++] = detalleError;

                    valorOperando = 0;
                } else {
                    valorOperando = parseFloat(valorOperando);
                    todosLosOperandosVacios = false;
                }

                detalleOperando.valor = valorOperando;
                detalleOperando.concepto = definicionConcepto;

                if (detalleOperando.esResta) {
                    detalleOperacion.valorCalculado = detalleOperacion.valorCalculado - detalleOperando.valor;
                } else {
                    detalleOperacion.valorCalculado = detalleOperacion.valorCalculado + detalleOperando.valor;
                }

                detalleOperacion.conceptosOperandos[iOper] = detalleOperando;
            }

            if (todosLosOperandosVacios && !esValidacionIgualdad) {
                continue;
            } else {
                for (j = 0; j < erroresDetalle.length; j++) {
                    agregarErrorAListado(detalleError);
                }
            }

            detalleOperacion.valorCalculado = detalleOperacion.valorCalculado.toFixed(2);
            detalleOperacion.valor = detalleOperacion.valor.toFixed(2);

            if (detalleOperacion.valorCalculado != detalleOperacion.valor) {
                var detalleError = new DetalleError();
                detalleError.id = generateUUID();
                var tipoDato = "anumeric";
                if (definicionConceptoResultado.TIPO_DATO == "58") {
                    tipoDato = "anumeric";
                }

                if (esValidacionIgualdad && validacion.operadores.length == 1) {
                    detalleError.mensaje = 'Formato: ' + infoPeriodoYFormato.formato + '. Periodo: ' + infoPeriodoYFormato.periodo + '. El valor capturado para el concepto ' + definicionConceptoResultado.TITULO + ': ' + formatearMoneda(detalleOperacion.valor) + ' no coincide con otro valor capturado: ' + formatearMoneda(detalleOperacion.valorCalculado);
                } else {
                    detalleError.mensaje = 'Formato: ' + infoPeriodoYFormato.formato + '. Periodo: ' + infoPeriodoYFormato.periodo + '. El valor capturado para el concepto ' + definicionConceptoResultado.TITULO + ': ' + formatearMoneda(detalleOperacion.valor) + ' no coincide con el valor calculado: ' + formatearMoneda(detalleOperacion.valorCalculado);
                }

                detalleError.detalleOperacion = detalleOperacion;
                agregarErrorAListado(detalleError);

            } else {

                for (iOper = 0; iOper < validacion.operadores.length; iOper++) {
                    var idContextoOperador = idContexto;
                    var cuentaEmisnet = validacion.operadores[iOper];
                    if (cuentaEmisnet.startsWith("-")) {
                        cuentaEmisnet = cuentaEmisnet.substring(1, cuentaEmisnet.length);
                    }
                    if (cuentaEmisnet.startsWith("#")) {
                        idContextoOperador = cuentaEmisnet.split('-')[1];
                        cuentaEmisnet = cuentaEmisnet.split('-')[2];
                    }
                    var idBtn = 'btn-' + idContextoOperador + "-" + cuentaEmisnet;

                    $("#input-" + idContextoOperador + "-" + cuentaEmisnet).campoCapturaXbrl('valido', 1);
                }

                if (!detalleErrores["input-" + idContexto + "-" + cuentaEmisnetResultado]) {

                    $("#input-" + idContexto + "-" + cuentaEmisnetResultado).campoCapturaXbrl('valido', 1);
                    $("#input-" + idContexto + "-" + cuentaEmisnetResultado).campoCapturaXbrl('detalleOperacion', true);
                }
            }

            /*$(idBoton).unbind('click');
            $(idBoton).bind('click', function () {
                var id = $(this)[0].id;
                var elementosId = id.split('-');
                presentarDetalleDeCalculo(elementosId[1], elementosId[2]);
            });*/

            if (detalleOperaciones[idContexto + "_" + cuentaEmisnetResultado]) {
                detalleOperaciones[idContexto + "_" + cuentaEmisnetResultado][detalleOperaciones[idContexto + "_" + cuentaEmisnetResultado].length] = detalleOperacion;
            } else {
                detalleOperaciones[idContexto + "_" + cuentaEmisnetResultado] = [detalleOperacion];
            }
        }
    }
}

function presentarFormatoGuardarDocumento() {

    $('#contenedorFormatos').show();
    $('#historicoVersiones').hide();
    $('#usuariosAsignados').hide();

    $('#btnGuardarEstadoFinanciero').attr('disabled', 'disabled');

    $('#formularioGuardarVersion').show();
    $('#resultadosGuardarVersion').hide();

    $('#textTitulo').val(formatoCaptura.Titulo);
    $('#textComentarios').val('');

    $('#modalGuardarDocumentoInstancia').modal({
        'backdrop': true,
        'keyboard': true
    });

    $('#modalGuardarDocumentoInstancia').off('hide.bs.modal');
    $('#modalGuardarDocumentoInstancia').on('hide.bs.modal', function (e) {
        $('#btnGuardarEstadoFinanciero').removeAttr('disabled', 'disabled');
    })

    $('#btnCancelarGuardar').unbind('click');

    $('#btnCancelarGuardar').bind('click', function () {
        $('#btnGuardarEstadoFinanciero').removeAttr('disabled', 'disabled');
        $('#modalGuardarDocumentoInstancia').modal('hide');
    });

    $('#btnGuardarVersion').unbind('click');
    $('#btnGuardarVersion').bind('click', function () {

        var tituloDocumento = $('#textTitulo').val();
        var comentariosDocumento = $('#textComentarios').val();
        var error = false;

        if (tituloDocumento === undefined || tituloDocumento === '') {
            $('#textTitulo').removeClass("parsley-validated parsley-error");
            $('#textTitulo').parent().find('ul').remove();
            $('#textTitulo').addClass("parsley-validated parsley-error");
            $('#textTitulo').parent().append('<ul class="parsley-error-list"><li>Este dato es requerido</li></ul>');
            error = true;
        }

        if (comentariosDocumento === undefined || comentariosDocumento === '') {
            $('#textComentarios').removeClass("parsley-validated parsley-error");
            $('#textComentarios').parent().find('ul').remove();
            $('#textComentarios').addClass("parsley-validated parsley-error");
            $('#textComentarios').parent().append('<ul class="parsley-error-list"><li>Este dato es requerido</li></ul>');
            error = true;
        }

        if (!error) {
            formatoCaptura.Titulo = tituloDocumento;
            formatoCaptura.Comentarios = comentariosDocumento;
            $.isLoading({ text: "Guardando la versión del documento instancia, espere..." });
            crearFormatoCapturaVersionDocumento();
            guardarDocumentoInstancia();
        }

    });
}

function crearFormatoCapturaVersionDocumento() {

    validarFormatos();
    formatoCaptura.EsCorrecto = !tieneErrores;

    /*$('.form-control').each(function () {
        var formato;
        var contexto;

        var id = $(this)[0].id;

        if (!id.startsWith('input-')) return;

        var cuentaEmisnet = id.split('-')[2];
        var idContexto = id.split('-')[1];
        var valor;

        if ($(this).hasClass('acurrency') || $(this).hasClass('anumeric')) {
            valor = $(this).autoNumeric('get');
        } else {
            valor = $(this).val();
        }

        if (idContexto.startsWith("EPF")) {
            formato = formatoCaptura.FormatoEPF;
        } else if (idContexto == "ER" || idContexto == "ERA" || idContexto == "ERAC" || idContexto == "ERACA") {
            formato = formatoCaptura.FormatoER;
        } else if (idContexto.startsWith("EFE")) {
            formato = formatoCaptura.FormatoEFE;
        } else if (idContexto.startsWith("VCC")) {
            formato = formatoCaptura.FormatoVCC;
        } else if (idContexto.startsWith("IG")) {
            formato = formatoCaptura.FormatoIG;
        } else if (idContexto.startsWith("ER12")) {
            formato = formatoCaptura.FormatoDI12M;
        }

        for (i = 0; i < formato.Contextos.length; i++) {
            if (formato.Contextos[i].Id == idContexto) {
                contexto = formato.Contextos[i];
                break;
            }
        }

        if (!contexto.Hechos) {
            contexto.Hechos = {};
        }

        contexto.Hechos[cuentaEmisnet] = valor;
    });
    */

}

function guardarDocumentoInstancia() {
    console.log($.toJSON(formatoCaptura));
    $.post('/DocumentosInstancia/GuardarDocumentoInstancia',
        {
            idDocumentoInstancia: formatoCaptura.IdDocumentoInstancia,
            formatoCapturaJSON: $.toJSON(formatoCaptura)
        }, function (data, textStatus, jqXHR) {
            if (data.Resultado) {

                formatoCaptura.IdDocumentoInstancia = data.InformacionExtra.idDocumentoInstancia;
                formatoCaptura.Version = data.InformacionExtra.version;
                $('#resultadoGuardarVersion').html('<p>Se ha generado con &eacute;xito una nueva versi&oacute;n del documento instancia.</p><p><span class="font-bold">Versi&oacute;n: ' +
                    data.InformacionExtra.version + '</span></p><p>Comentarios de la versi&oacute;n creada: <span class="font-bold">' + formatoCaptura.Comentarios + '</span>');

                $('#idDocumento').html('Versión: ' + formatoCaptura.Version + " &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Título :" + formatoCaptura.Titulo);
                cambiosPendientesGuardar = false;
                $('#btnGuardarEstadoFinanciero').prop('disabled', true);
            }
        }, 'json').done(function () {

        }).fail(function () {
            $('#resultadoGuardarVersion').html('<p>Lo sentimos, ocurri&oacute; un error al guardar la versión del documento.</p><p>Int&eacute;ntelo nuevamente</p>');
        }).always(function () {
            $('#btnGuardarEstadoFinanciero').removeAttr('disabled', 'disabled');
            $.isLoading('hide');
            $('#formularioGuardarVersion').hide();
            $('#resultadosGuardarVersion').show();
        });
}

function presentarVersionesDeDocumentoInstancia() {

    if (!formatoCaptura.IdDocumentoInstancia || formatoCaptura.IdDocumentoInstancia == 0) {
        //Manejar documento sin versiones
        return;
    }

    $.isLoading({ text: "Obteniendo el histórico de versiones del documento instancia, espere..." });

    $.post('/DocumentosInstancia/ObtenerVersionesDocumentoInstancia',
        {
            idDocumentoInstancia: formatoCaptura.IdDocumentoInstancia
        }, function (data, textStatus, jqXHR) {
            if (data.Resultado) {
                mostrarVersionesDocumentoInstancia(data.InformacionExtra);
            }
        }, 'json').done(function () {

        }).fail(function () {
            $.prompt('Ocurrió un error al obtener las versiones del documento instancia. Inténtelo nuevamente.',
                {
                    title: 'Error al contactar al servidor',
                    buttons: { 'Aceptar': true }
                });
        }).always(function () {
            $.isLoading('hide');
        });
}

function mostrarVersionesDocumentoInstancia(listadoVersiones) {

    $('#historicoVersiones').html('<div id="versionesTimeLine" class="timeline"></div>');

    var esUltimaVersion = true;
    var izquierda = false;

    if (!listadoVersiones || listadoVersiones.length == 0) {
        $('#versionesTimeLine').append('<article class="timeline-item active">' +
                                        '   <div class="timeline-caption">' +
                                        '       <div class="panel panel-warning">' +
                                        '           <header class="panel-heading bg-dark">' +
                                        '               <h5>Sin Versiones</h5>' +
                                        '           </header>' +
                                        '           <div class="panel-body">' +
                                        '               <h5> Aún no se han generado versiones de este documento. </h5><br/>' +
                                        '           </div>' +
                                        '       </div>' +
                                        '   </div>' +
                                        '</article>');
    }

    for (i = 0; i < listadoVersiones.length; i++) {

        var version = listadoVersiones[i];

        if (esUltimaVersion) {
            $('#versionesTimeLine').append('<article class="timeline-item active">' +
                                            '   <div class="timeline-caption">' +
                                            '       <div class="panel panel-warning">' +
                                            '           <header class="panel-heading bg-dark">' +
                                            '               <h5>Versión: ' + version.Version + '</h5>' +
                                            '           </header>' +
                                            '           <div class="panel-body">' +
                                            '               <span class="timeline-icon"><i class="fa ' + (version.EsCorrecto ? 'fa-check' : 'fa-exclamation') + ' time-icon ' + (version.EsCorrecto ? 'bg-success' : 'bg-danger') + '"></i></span> ' +
                                            '               <span class="timeline-date">&nbsp;&nbsp;&nbsp;&nbsp;' + version.Fecha + '</span>' +
                                            '               <h5>' + version.NombreUsuario + '</h5><br/>' +
                                            '               <p>' + version.Comentarios + '</p>' +
                                            '           </div>' +
                                            '       </div>' +
                                            '   </div>' +
                                            '</article>');
            esUltimaVersion = false;
        } else {
            $('#versionesTimeLine').append('<article class="timeline-item ' + (izquierda ? 'alt' : '') + '">' +
                                            '   <div class="timeline-caption">' +
                                            '       <div class="panel panel-default">' +
                                            '           <header class="panel-heading bg-dark">' +
                                            '               <h5>Versión: ' + version.Version + '</h5>' +
                                            '           </header>' +
                                            '           <div class="panel-body">' +
                                            '               <span class="arrow ' + (izquierda ? 'right' : 'left') + '"></span>' +
                                            '               <span class="timeline-icon"><i class="fa ' + (version.EsCorrecto ? 'fa-check' : 'fa-exclamation') + ' time-icon ' + (version.EsCorrecto ? 'bg-success' : 'bg-danger') + '"></i></span>' +
                                            '               <span class="timeline-date">' + version.Fecha + '</span>' +
                                            '               <h5>' + version.NombreUsuario + '</h5><br/>' +
                                            '               <p>' + version.Comentarios + '</p>' +
                                            '               <div class="m-t-sm timeline-action"> ' +
                                            '                   <a href="/DocumentosInstancia/EditorIfrsSmes?idDocumentoInstancia=' + version.IdDocumentoInstancia + '&numeroVersion=' + version.Version + '" class="btn btn-sm btn-default btn-bg"><i class="fa fa-reply"></i>&nbsp;&nbsp;&nbsp;&nbsp;Cargar Datos</a> ' +
                                            '               </div> ' +
                                            '           </div>' +
                                            '       </div>' +
                                            '   </div>' +
                                            '</article>');
            izquierda = !izquierda;
        }
    }

    $('#versionesTimeLine').append('<div class="timeline-footer"><a href="javascript:void(0);"><i class="i i-ellipsis time-icon inline-block bg-warning"></i></a></div>');

    $('#usuariosAsignados').hide();
    $('#contenedorFormatos').hide();
    $('#historicoVersiones').show();
}

function presentarUsuariosAsignadosDeDocumentoInstancia() {

    if (cambiosPendientesGuardar) {
        $.prompt('Tiene cambios pendientes por guardar. No puede compartir el documento hasta que haya guardado sus cambios.',
            {
                title: 'Compartir documento instancia',
                buttons: { 'Aceptar': true }
            });
        return;
    }

    if (!formatoCaptura.IdDocumentoInstancia || formatoCaptura.IdDocumentoInstancia == 0) {
        $.prompt('Para poder compartir un documento primero debe guardarlo.',
                {
                    title: 'Compartir documento instancia',
                    buttons: { 'Aceptar': true }
                });
        return;
    }

    $.isLoading({ text: "Obteniendo los usuarios del documento instancia, espere..." });

    $.post('/DocumentosInstancia/BuscarUsuariosParaCompartir',
        {
            idDocumentoInstancia: formatoCaptura.IdDocumentoInstancia
        }, function (data, textStatus, jqXHR) {
            if (data.Resultado) {
                mostrarUsuariosAsignadosADocumento(data.InformacionExtra);
            }
        }, 'json').done(function () {

        }).fail(function () {
            $.prompt('Ocurrió un error al obtener los usuarios del documento instancia. Inténtelo nuevamente.',
                {
                    title: 'Error al contactar al servidor',
                    buttons: { 'Aceptar': true }
                });
        }).always(function () {
            $.isLoading('hide');
        });
}


function mostrarUsuariosAsignadosADocumento(datosUsuarios) {

    var datosAsignados = datosUsuarios;

    $('#contenedorFormatos').hide();
    $('#historicoVersiones').hide();
    $('#usuariosAsignados').show();
    $('#tableNoAsignados tbody tr').remove();
    $('#tableAsignados tbody tr').remove();
    if (datosUsuarios && datosUsuarios.UsuariosPorAsignar && datosUsuarios.UsuariosPorAsignar.length > 0) {
        for (i = 0; i < datosUsuarios.UsuariosPorAsignar.length; i++) {
            var usuarioPorAsignar = datosUsuarios.UsuariosPorAsignar[i];
            $('#tableNoAsignados tbody').append('<tr id="tr_no_asignado_' + usuarioPorAsignar.IdUsuario + '">' +
                                                '    <td style="text-align: center;">' +
                                                '        <label class="checkbox m-n i-checks">' +
                                                '            <input id="check_no_asignado_' + usuarioPorAsignar.IdUsuario + '" type="checkbox" name="idsNoAsignados" value="' + usuarioPorAsignar.IdUsuario + '"><i></i></label></td>' +
                                                '    <td>' + usuarioPorAsignar.NombreCompleto + '</td>' +
                                                '</tr>');
        }
    }

    if (datosUsuarios && datosUsuarios.UsuariosAsignados && datosUsuarios.UsuariosAsignados.length > 0) {
        for (i = 0; i < datosUsuarios.UsuariosAsignados.length; i++) {
            var usuarioAsignado = datosUsuarios.UsuariosAsignados[i];
            $('#tableAsignados tbody').append('<tr id="tr_asignado_' + usuarioAsignado.IdUsuario + '">' +
                                              '    <td style="text-align: center;">' +
                                              '        <label class="checkbox m-n i-checks">' +
                                              '            <input type="checkbox" name="idsAsignados" id="check_asignado_' + usuarioAsignado.IdUsuario + '" value="' + usuarioAsignado.IdUsuario + '"/><i></i></label></td>' +
                                              '    <td>' + usuarioAsignado.NombreCompleto + '</td>' +
                                              '    <td style="text-align: center;">' +
                                              '        <label class="checkbox m-n i-checks">' +
                                              '            <input type="checkbox" id="esDueno_' + usuarioAsignado.IdUsuario + '" name="esDueno" ' + (usuarioAsignado.EsDueno ? 'checked' : '') + '><i></i></label></td>' +
                                              '    <td style="text-align: center;">' +
                                              '        <label class="checkbox m-n i-checks">' +
                                              '            <input type="checkbox" id="puedeEscribir_' + usuarioAsignado.IdUsuario + '" name="puedeEscribir" ' + (usuarioAsignado.PuedeEscribir ? 'checked' : '') + '><i></i></label></td>' +
                                              '</tr>');
        }
    }

    $('#removerUsuarios').unbind('click');
    $('#removerUsuarios').bind('click', function () {
        $('#tableAsignados tbody tr td:first-child [type="checkbox"]').each(function () {
            var idUsuario = $(this).val();
            if (!$(this).is(':checked')) return;
            $('#tableNoAsignados tbody').append('<tr id="tr_no_asignado_' + idUsuario + '">' +
                                                    '    <td style="text-align: center;">' +
                                                    '        <label class="checkbox m-n i-checks">' +
                                                    '            <input id="check_no_asignado_' + idUsuario + '" type="checkbox" name="idsNoAsignados" value="' + idUsuario + '"><i></i></label></td>' +
                                                    '    <td>' + $(this).parent().parent().next().text() + '</td>' +
                                                    '</tr>');
            $('#tr_asignado_' + idUsuario).remove();

            $('#checkAllAsignados').removeAttr('checked');
            $('#checkAllNoAsignados').removeAttr('checked');

            /*$('#tableAsignados').filterTable({
                inputSelector: '#buscarAsignados',
                minRows: 0
            });

            $('#tableNoAsignados').filterTable({
                inputSelector: '#buscarNoAsignados',
                minRows: 0
            });*/
        });
    });
    $('#asignarUsuarios').unbind('click');
    $('#asignarUsuarios').bind('click', function () {
        $('#tableNoAsignados tbody tr td:first-child [type="checkbox"]').each(function () {
            var idUsuario = $(this).val();
            if (!$(this).is(':checked')) return;
            $('#tableAsignados tbody').append('<tr id="tr_asignado_' + idUsuario + '">' +
                                              '    <td style="text-align: center;">' +
                                              '        <label class="checkbox m-n i-checks">' +
                                              '            <input type="checkbox" name="idsAsignados" id="check_asignado_' + idUsuario + '" value="' + idUsuario + '"/><i></i></label></td>' +
                                              '    <td>' + $(this).parent().parent().next().text() + '</td>' +
                                              '    <td style="text-align: center;">' +
                                              '        <label class="checkbox m-n i-checks">' +
                                              '            <input type="checkbox" id="esDueno_' + idUsuario + '" name="esDueno" value="' + idUsuario + '"><i></i></label></td>' +
                                              '    <td style="text-align: center;">' +
                                              '        <label class="checkbox m-n i-checks">' +
                                              '            <input type="checkbox" id="puedeEscribir_' + idUsuario + '" name="puedeEscribir"><i></i></label></td>' +
                                              '</tr>');
            $('#tr_no_asignado_' + idUsuario).remove();

            $('#checkAllAsignados').removeAttr('checked');
            $('#checkAllNoAsignados').removeAttr('checked');

            $('input[id^="esDueno_"]').unbind('click');
            $('input[id^="esDueno_"]').bind('click', function () {
                var idUsuario = $(this).val();
                if (!$(this).is(':checked')) return;
                $('#puedeEscribir_' + idUsuario).prop('checked', true);
            });

            /*$('#tableAsignados').filterTable({
                inputSelector: '#buscarAsignados',
                minRows: 0
            });

            $('#tableNoAsignados').filterTable({
                inputSelector: '#buscarNoAsignados',
                minRows: 0
            });*/
        });
    });

    $('#btnCerrarAsignarUsuarios').unbind('click');
    $('#btnCerrarAsignarUsuarios').bind('click', function () {
        $('#contenedorFormatos').show();
        $('#historicoVersiones').hide();
        $('#usuariosAsignados').hide();
    });

    $('#asignarEmisoras').unbind('click');
    $('#asignarEmisoras').bind('click', function () {

        var usuariosAsignados = [];
        var indiceUsuariosAsignados = 0;
        var existePropietario = false;

        $('#tableAsignados tbody tr td:first-child [type="checkbox"]').each(function () {
            var idUsuario = $(this).val();

            usuariosAsignados[indiceUsuariosAsignados] = {
                IdUsuario: idUsuario,
                IdDocumentoInstancia: formatoCaptura.IdDocumentoInstancia,
                PuedeEscribir: ($('#esDueno_' + idUsuario).is(':checked') ? true : $('#puedeEscribir_' + idUsuario).is(':checked')),
                EsDueno: $('#esDueno_' + idUsuario).is(':checked'),
                PuedeLeer: true
            };

            if (usuariosAsignados[indiceUsuariosAsignados].EsDueno) {
                existePropietario = true;
            }

            indiceUsuariosAsignados++;
        }).promise().done(function () {
            if (indiceUsuariosAsignados == 0) {
                $.prompt('Debe asignar al menos un usuario al documento para poder guardar sus cambios.',
                    {
                        title: 'Error al compartir documento instancia',
                        buttons: { 'Aceptar': true }
                    });
                return;
            }

            if (!existePropietario) {
                $.prompt('Al menos uno de los usuarios asignados debe ser propietario del documento.',
                                {
                                    title: 'Error al compartir documento instancia',
                                    buttons: { 'Aceptar': true }
                                });
                return;
            }

            $('#asignarUsuarios').attr('disabled', 'disabled');
            $.isLoading({ text: "Actualizando los usuarios del documento instancia, espere..." });

            $.post('/DocumentosInstancia/ActualizarUsuariosAsignadosDocumentoInstancia',
            {
                idDocumentoInstancia: formatoCaptura.IdDocumentoInstancia,
                usuariosAsignadosJSON: $.toJSON(usuariosAsignados)
            }, function (data, textStatus, jqXHR) {
                if (data.Resultado) {
                    formatoCaptura.PuedeEscribir = data.InformacionExtra.PuedeEscribir;
                    formatoCaptura.EsDueno = data.InformacionExtra.EsDueno;

                    validarPermisosUsuario();

                    $.prompt('Se actualizaron con éxito los usuarios asignados al documento instancia.',
                                {
                                    title: 'Compartir documento instancia',
                                    buttons: { 'Aceptar': true }
                                });

                    $('#contenedorFormatos').show();
                    $('#historicoVersiones').hide();
                    $('#usuariosAsignados').hide();
                }
            }, 'json').done(function () {

            }).fail(function () {
                $('#resultadoGuardarVersion').html('<p>Lo sentimos, ocurri&oacute; un error al actualizar los usuarios asignados al documento instancia.</p><p>Int&eacute;ntelo nuevamente</p>');
            }).always(function () {
                $('#asignarUsuarios').removeAttr('disabled');
                $.isLoading('hide');
            });
        });
    });

    $('input[id^="esDueno_"]').unbind('click');
    $('input[id^="esDueno_"]').bind('click', function () {
        var idUsuario = $(this).val();
        if (!$(this).is(':checked')) return;
        $('#puedeEscribir_' + idUsuario).prop('checked', true);
    });

    /*$('#tableAsignados').filterTable({
        inputSelector: '#buscarAsignados',
        minRows: 0
    });

    $('#tableNoAsignados').filterTable({
        inputSelector: '#buscarNoAsignados',
        minRows: 0
    });*/

}

function validarPermisosUsuario() {
    if (formatoCaptura.Bloqueado && formatoCaptura.PuedeEscribir && formatoCaptura.IdUsuarioBloqueo == idUsuarioExec) {
        $('.concepto').campoCapturaXbrl('readonly', true);

        $('.form-control').each(function () {
            if ($(this)[0].id && ($(this)[0].id.startsWith('input-') || $(this)[0].id.startsWith('input_'))) {
                if ($(this).is('select')) {
                    $(this).prop('disabled', false);
                } else if ($(this).is('.calendar')) {
                    $(this).datepicker({
                        format: 'yyyy-mm-dd',
                        language: 'es'
                    });
                    $(this).prop('readOnly', false);
                } else {
                    $(this).prop('readOnly', false);
                }
            }
        });

        $('#btnGuardarEstadoFinanciero').prop('disabled', !cambiosPendientesGuardar);
        $('#btnCompartirEstadoFinanciero').prop('disabled', false);
        $('#btnActualizarDatos').show();

        $('#btnBloquearEstadoFinanciero i').removeClass('fa-lock');
        $('#btnBloquearEstadoFinanciero i').addClass('fa-unlock');
        $('#btnBloquearEstadoFinanciero').prop('title', 'Desbloquear');
        $('#btnImportarEstadoFinanciero').prop('disabled', false);
    } else {
        $('.concepto').campoCapturaXbrl('readonly', false);

        $('.form-control').each(function () {
            if ($(this)[0].id && ($(this)[0].id.startsWith('input-') || $(this)[0].id.startsWith('input_'))) {
                if ($(this).is('select')) {
                    $(this).prop('disabled', true);
                } else if ($(this).is('.calendar')) {
                    $(this).datepicker('remove');
                    $(this).prop('readOnly', true);
                } else {
                    $(this).prop('readOnly', true);
                }
            }
        });

        $('#btnImportarEstadoFinanciero').prop('disabled', true);
        $('#btnGuardarEstadoFinanciero').prop('disabled', true);
        $('#btnCompartirEstadoFinanciero').prop('disabled', true);
        $('#btnActualizarDatos').hide();
    }

    $('#btnCompartirEstadoFinanciero').prop('disabled', !formatoCaptura.EsDueno);
    $('#btnBloquearEstadoFinanciero').prop('disabled', !formatoCaptura.PuedeEscribir);
}

function bloquearLiberarDocumentoInstancia() {
    if (cambiosPendientesGuardar) {
        $.prompt('Tiene cambios pendientes por guardar. No puede liberar el documento hasta que haya guardado sus cambios.',
            {
                title: 'Bloquear documento instancia',
                buttons: { 'Aceptar': true }
            });
        return;
    }

    var bloquear = !formatoCaptura.Bloqueado;

    if (formatoCaptura.Bloqueado) {
        $.isLoading({ text: "Liberando el documento instancia, espere..." });
    } else {
        $.isLoading({ text: "Solicitando el bloqueo del documento instancia, espere..." });
    }

    $('#btnBloquearEstadoFinanciero').prop('disabled', true);

    $.post('/DocumentosInstancia/BloquearLiberarDocumentoInstancia',
            {
                idDocumentoInstancia: formatoCaptura.IdDocumentoInstancia,
                bloquear: bloquear
            }, function (data, textStatus, jqXHR) {
                if (data.Resultado) {

                    formatoCaptura.Bloqueado = data.InformacionExtra.Bloqueado;
                    formatoCaptura.IdUsuarioBloqueo = data.InformacionExtra.IdUsuarioBloqueo;
                    formatoCaptura.NombreUsuarioBloqueo = data.InformacionExtra.NombreUsuarioBloqueo;

                    validarPermisosUsuario();

                    if (formatoCaptura.Bloqueado) {
                        $('#btnBloquearEstadoFinanciero i').removeClass('fa-lock');
                        $('#btnBloquearEstadoFinanciero i').addClass('fa-unlock');
                        $('#btnBloquearEstadoFinanciero').prop('title', 'Desbloquear');
                        if (formatoCaptura.IdUsuarioBloqueo == idUsuarioExec) {
                            $('#datosBloqueo').text('El documento de instancia está disponible para su edición');
                        }else {
                            $('#datosBloqueo').text('El documento ha sido bloqueado por el usuario: ' + formatoCaptura.NombreUsuarioBloqueo);
                        }

                       
                        $.prompt('Se bloqueó con éxito el documento instancia.',
                                {
                                    title: 'Bloquear documento instancia',
                                    buttons: { 'Aceptar': true }
                                });
                    } else {
                        $('#btnBloquearEstadoFinanciero i').removeClass('fa-unlock');
                        $('#btnBloquearEstadoFinanciero i').addClass('fa-lock');
                        $('#btnBloquearEstadoFinanciero').prop('title', 'Bloquear');
                        $('#datosBloqueo').text('El documento no está bloqueado.');
                        $.prompt('Se liberó con éxito el documento instancia.',
                                {
                                    title: 'Liberar documento instancia',
                                    buttons: { 'Aceptar': true }
                                });
                    }

                    $('#btnBloquearEstadoFinanciero').prop('disabled', false);
                    $('#contenedorFormatos').show();
                    $('#historicoVersiones').hide();
                    $('#usuariosAsignados').hide();
                }
            }, 'json').done(function () {

            }).fail(function () {
                $('#resultadoGuardarVersion').html('<p>Lo sentimos, ocurri&oacute; un error al actualizar los usuarios asignados al documento instancia.</p><p>Int&eacute;ntelo nuevamente</p>');
            }).always(function () {
                $('#asignarUsuarios').removeAttr('disabled');
                $.isLoading('hide');
            });


}

function presentarFormatoExportarDocumentoInstancia() {
    $('#contenedorFormatos').show();
    $('#historicoVersiones').hide();
    $('#usuariosAsignados').hide();

    $('#modalExportarDocumentoInstancia').modal({
        'backdrop': true,
        'keyboard': true
    });

    $('#btnCancelarExportar').unbind('click');
    $('#btnCancelarExportar').bind('click', function () {
        $('#modalExportarDocumentoInstancia').modal('hide');
    });

    $('#btnExportarDocumentoInstancia').unbind('click');
    $('#btnExportarDocumentoInstancia').bind('click', function () {

        var url = '';
        var data = '';
        if ($('#formatoExportar').val() == 1) {
            url = '/DocumentosInstancia/ExportarDocumentoInstanciaExcel';
            crearFormatoCapturaVersionDocumento();
            data = {
                formatoCapturaJSON: $.toJSON(formatoCaptura)
            };
        } else if ($('#formatoExportar').val() == 2) {
            url = '/DocumentoInstancia/GenerarDocumentoXBRL';
            if (!formatoCaptura.IdDocumentoInstancia || formatoCaptura.IdDocumentoInstancia < 1) {
                $.prompt('Para poder exportar en formato XBRL debe guardar primero su archivo, reintente.', {
                    title: 'Descarga de archivo',
                    buttons: { 'Aceptar': true }
                });
                return;
            }
            if (cambiosPendientesGuardar) {
                $.prompt('Para poder exportar en formato XBRL debe guardar los cambios en su documento, reintente.', {
                    title: 'Descarga de archivo',
                    buttons: { 'Aceptar': true }
                });
                return;
            }
            data = {
                idDocumentoInstancia: formatoCaptura.IdDocumentoInstancia
            };
        } else if ($('#formatoExportar').val() == 3) {
            alert("Este formato no está disponible en la versión de demostración");
            return;
        } else if ($('#formatoExportar').val() == 4) {
            alert("Este formato no está disponible en la versión de demostración");
            return;
        }

        /*$('#formatoCapturaJSON').val($.toJSON(formatoCaptura));
        $('#exportarForm').submit();
        */
        $('#btnExportarDocumentoInstancia').prop('disabled', true);
        $.isLoading({ text: "Preparando su descarga, espere..." });

        $.fileDownload(url, {
            httpMethod: "POST",
            data: data,
            successCallback: function (url) {
                $.isLoading('hide');
                $('#btnExportarDocumentoInstancia').prop('disabled', false);
                $('#modalExportarDocumentoInstancia').modal('hide');
            },
            failCallback: function (responseHtml, url) {
                $('#btnExportarDocumentoInstancia').prop('disabled', false);
                $.isLoading('hide');
                $.prompt('Ocurrió un error en la descarga del archivo, reintente.', {
                    title: 'Descarga de archivo',
                    buttons: { 'Aceptar': true }
                });
            }
        });

    });
}

function presentarFormatoImportacionExcel() {

    if (!formatoCaptura.Bloqueado || formatoCaptura.IdUsuarioBloqueo != idUsuarioExec) {
        $.prompt('No puede importar información al documento sin antes bloquearlo para edición.', {
            title: 'Importar documento instancia',
            buttons: { 'Aceptar': true }
        });
        return;
    }

    archivoExcel = '';

    $('#contenedorFormatos').show();
    $('#historicoVersiones').hide();
    $('#usuariosAsignados').hide();

    $('#modalImportarExcelDocumentoInstancia').modal({
        'backdrop': true,
        'keyboard': true
    });

    $('#archivoExcel').unbind('change');
    $('#archivoExcel').bind('change', function (event) {
        archivoExcel = event.target.files;
        if (archivoExcel !== undefined && archivoExcel[0] && archivoExcel[0].name) {
            var nombreArchivo = archivoExcel[0].name;
            $('#archivoExcel').next().find('input').val(nombreArchivo);
        }
    });

    $('#archivoExcel').unbind('click');
    $('#archivoExcel').bind('click', function () {
        $('#archivoExcel').next().find('input').val('');
        resetFormElement($("#archivoExcel"));
    });

    $('#btnDescargarPlantillaExcel').unbind('click');
    $('#btnDescargarPlantillaExcel').bind('click', function () {
        if (numeroTrimestre == 1) {
            window.location = '/formatoT1.xlsx';
        } else {
            window.location = '/formatoT234.xlsx';
        }
    });

    $('#btnCancelarImportar').unbind('click');
    $('#btnCancelarImportar').bind('click', function () {
        $('#modalImportarExcelDocumentoInstancia').modal('hide');
    });

    $('#btnImportarDocumentoExcel').unbind('click');
    $('#btnImportarDocumentoExcel').bind('click', function () {
        var validExtensions = ['xls', 'xlsx'];
        var filename = $("#archivoExcel").val();

        if (filename === undefined || filename === '') {
            $.prompt('Debe seleccionar un archivo excel a importar, verifique.', {
                title: 'Importar documento instancia',
                buttons: { 'Aceptar': true }
            });
            $('#archivoExcel').next().find('input').val('');
            resetFormElement($("#archivoExcel"));
            return false;
        }

        var fileNameExt = filename.substr(filename.lastIndexOf('.') + 1);
        if ($.inArray(fileNameExt, validExtensions) == -1) {
            $.prompt('La extensión del documento a importar sólo puede ser xls o xlsx, verifique.', {
                title: 'Importar documento instancia',
                buttons: { 'Aceptar': true }
            });
            $('#archivoExcel').next().find('input').val('');
            resetFormElement($("#archivoExcel"));
            return false;
        }

        var data = new FormData();
        $.each(archivoExcel, function (key, value) {
            data.append('archivoXLS', value);
        });

        crearFormatoCapturaVersionDocumento();
        data.append('formatoCapturaJSON', $.toJSON(formatoCaptura));

        $.isLoading({ text: "Importando información del documento instancia, espere..." });
        $('#btnImportarDocumentoExcel').prop('disabled', true);

        $.ajax({
            url: '/DocumentosInstancia/ImportarDocumentoInstanciaExcel',
            type: 'POST',
            data: data,
            cache: false,
            dataType: 'json',
            processData: false,
            contentType: false,
            success: function (data, textStatus, jqXHR) {
                if (data.Resultado) {
                    formatoCaptura = data.InformacionExtra;
                    console.debug(data.InformacionExtra);
                    actualizarDatosFormatoCaptuta();
                    $.prompt('Se importaron exitósamente los hechos al documento instancia a partir del documento Excel.',
                    {
                        title: 'Importar documento instancia',
                        buttons: { 'Aceptar': true }
                    });
                    $('#modalImportarExcelDocumentoInstancia').modal('hide');
                    indicarCambiosPendientesGuardar();
                } else {
                    $.prompt('El formato del documento Excel no es correcto, verifique e inténtelo nuevamente.',
                    {
                        title: 'Error al importar documento Excel',
                        buttons: { 'Aceptar': true }
                    });
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                $.prompt('Ocurrió un error al importar los hechos del documento instancia a partir del documento Excel. Inténtelo nuevamente.',
                    {
                        title: 'Error al contactar al servidor',
                        buttons: { 'Aceptar': true }
                    });
                $('#modalImportarExcelDocumentoInstancia').modal('hide');
            }
        }).always(function () {
            $('#btnImportarDocumentoExcel').prop('disabled', false);
            $.isLoading('hide');
            $('#archivoExcel').next().find('input').val('');
        });

    });
}

function resetFormElement(e) {
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
}

function actualizarDatosFormatoCaptuta() {
    $('.concepto').campoCapturaXbrl('actualizar', {

    }).promise().done(function () {
        validarFormatos();
        formatoCaptura.EsCorrecto = !tieneErrores;
    });

}
