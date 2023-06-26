const leiloesValidator = {
    nome: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo é 3'
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

    carro: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo é 3'
        },
        maxLength: {
            value: 10,
            message: 'O máximo é 10'
        },
    },

    ano: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 4,
            message: 'O mínimo é 4'
        },
        maxLength: {
            value: 4,
            message: 'O máximo é 4'
        },
    },

    estado: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 3,
            message: 'O mínimo é 3'
        },
        maxLength: {
            value: 15,
            message: 'O máximo é 15'
        },
    },
}

export default leiloesValidator