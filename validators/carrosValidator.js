const carrosValidator = {
    marca: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 2,
            message: 'O mínimo é 2'
        },
        maxLength: {
            value: 15,
            message: 'O máximo é 15'
        },
    },

    modelo: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 2,
            message: 'O mínimo é 2'
        },
        maxLength: {
            value: 15,
            message: 'O máximo é 15'
        },
    },

    cor: {
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

    ano: {
        required: 'Campo Obrigatório',
        minLength: {
            value: 4,
            message: 'O mínimo é 4'
        },
        maxLength: {
            value: 4,
            message: 'O máximo é 4'
        },                                    /*colocar uma validação que nao deixe adicionar o ano que nao tem*/
    },
}


export default carrosValidator 