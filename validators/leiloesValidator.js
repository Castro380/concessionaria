const leiloesValidator = {
    nome: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 2,
            message: 'O mínimo é 2'
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

    valor: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 1,
            message: 'O mínimo é 1'
        },
        maxLength: {
            value: 10,
            message: 'O máximo é 10'
        },
    },
}

export default leiloesValidator