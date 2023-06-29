const cadastrosValidator = {
    nome: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 2,
            message: 'O mínimo é 2'
        },
        maxLength: {
            value: 30,
            message: 'O máximo é 30'
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
            value: /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/,        /*telefone esta invalido*/
            message: "telefone inválido"
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

    cep: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 7,
            message: 'O mínimo é 7'
        },
        maxLength: {
            value: 15,
            message: 'O máximo é 15'
        },
    },
}
export default cadastrosValidator