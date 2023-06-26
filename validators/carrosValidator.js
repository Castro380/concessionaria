import * as Yup from 'yup';

const carrosValidator = Yup.object().shape({
    marca: Yup.string()
        .required('Campo Obrigatório')
        .min(2, 'O mínimo é 2')
        .max(15, 'O máximo é 15'),

    modelo: Yup.string()
        .required('Campo Obrigatório')
        .min(2, 'O mínimo é 2')
        .max(15, 'O máximo é 15'),

    cor: Yup.string()
        .required('Campo Obrigatório')
        .min(3, 'O mínimo é 3')
        .max(10, 'O máximo é 10'),

    ano: Yup.number()
        .required('Campo Obrigatório')
        .min(1950, 'O mínimo é 1950')
        .max(new Date().getFullYear(), 'O ano não pode ser superior ao ano atual')
});

export default carrosValidator;