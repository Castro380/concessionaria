const acessoriosValidator = {
    manta: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 1,
            message: 'O mínimo é 1'
        },
        maxLength: {
            value: 99,
            message: 'O máximo é 99'
        },
    },

    calotas: {                                      /*nao esta negando(quando salvo os campos vazios)// e colocar pra numerar*/
        required: 'Campo Obrigatório',
        minLength: {
            value: 1,
            message: 'O mínimo é 1'
        },
        maxLength: {
            value: 99,
            message: 'O máximo é 99'
        },
    },

    sensor: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 1,
            message: 'O mínimo é 1'
        },
        maxLength: {
            value: 99,
            message: 'O máximo é 99'
        },
    },
}   
export default acessoriosValidator