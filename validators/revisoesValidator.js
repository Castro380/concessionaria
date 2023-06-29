const revisoesValidator = {
    
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