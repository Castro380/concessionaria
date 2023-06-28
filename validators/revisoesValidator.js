const revisoesValidator = {
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

    modelo:{
        rrequired: 'Campo Obrigatório',
        minLength: {
            value: 1,
            message: 'O mínimo é 1'
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
            value: /^\(?\d{2}\)?[-.\s]?\d{4,5}[-.\s]?\d{4}$/,        /*telefone esta invalido*/
            message: "telefone inválido"
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