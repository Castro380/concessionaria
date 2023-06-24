const revisoesValidator = {
    nome: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 5,
            message: 'O mínimo é 5'
        },
        maxLength: {
            value: 20,
            message: 'O máximo é 20'
        },
    },

    cpf: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 11,
            message: 'O mínimo é 11'
        },
        maxLength: {
            value: 15,
            message: 'O máximo é 15'
        },
    },

    email: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 11,
            message: 'O mínimo é 11'
        },
        maxLength: {
            value: 30,
            message: 'O máximo é 30'
        },
    },

    telefone: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 11,
            message: 'O mínimo é 11'
        },
        maxLength: {
            value: 15,
            message: 'O máximo é 15'
        },
        pattern: {
            value: /^\d{3}.\d{3}.\d{3}-\d{2}$/,              /*telefone esta invalido*/   
            message: "telefone inválido"
        },
    },

    estado: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 7,
            message: 'O mínimo é 7'
        },
        maxLength: {
            value: 20,
            message: 'O máximo é 20'
        },
    },

    data: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 4,
            message: 'O mínimo é 4'
        },
        maxLength: {
            value: 15,
            message: 'O máximo é 15'         /*arrumar a data*/
        },
    },
}
export default revisoesValidator