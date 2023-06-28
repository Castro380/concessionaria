import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import cadastrosValidator from '@/validators/cadastrosValidator'
import { mask } from 'remask'

const Formulario = () => {
    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const [endereco, setEndereco] = useState({})
    const [cadastros, setCadastros] = useState([]);

    useEffect(() => {
        getAll();
    }, [])

    function getAll() {
        axios.get('/api/cadastros').then(resultado => {
            setCadastros(resultado.data);
        });
    }

    function salvar(dados) {
        axios.post('/api/cadastros', dados)
        push('/cadastros')
    }

    async function buscarCEP(cep) {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            const { data } = response

            if (!data.erro) {
                setValue('endereco', data.logradouro)
                setValue('bairro', data.bairro)
                setValue('cidade', data.localidade)
                setValue('uf', data.uf)
                setEndereco(data)
            } else {
                setEndereco({})
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        const mascara = event.target.getAttribute('mask')

        if (name === 'cep') {
            const cep = value.replace(/\D/g, '')
            setValue(name, mask(cep, '99.999-999'))
            buscarCEP(cep)
        } else {
            setValue(name, mask(value, mascara))
        }
    }

    function verificarCPFDuplicado(cpf) {
        return cadastros.some(item => item.cpf === cpf)
      }

    return (
        <Pagina titulo='cadastros'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cadastrosValidator.nome)} />
                </Form.Group>
                {
                    errors.nome &&
                    <p className='mt -1 text-danger'>{errors.nome.message}</p>
                }

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>Cpf:</Form.Label>
                    <Form.Control
                        mask='999.999.999-99'
                        isInvalid={errors.cpf}
                        type="text"
                        {...register('cpf', {
                            ...cadastrosValidator.cpf,
                            validate: value =>
                                !verificarCPFDuplicado(value) || 'CPF já cadastrado'
                        })}
                        onChange={handleChange}
                    />
                </Form.Group>
                {
                    errors.cpf &&
                    <p className='mt -1 text-danger'>{errors.cpf.message}</p>
                }

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control mask='(99) 99999-9999' isInvalid={errors.telefone} type="text" {...register('telefone', cadastrosValidator.telefone)} onChange={handleChange} />
                </Form.Group>
                {
                    errors.telefone &&
                    <p className='mt -1 text-danger'>{errors.telefone.message}</p>
                }

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" {...register('email', cadastrosValidator.email)} />
                </Form.Group>
                {
                    errors.email &&
                    <p className='mt -1 text-danger'>{errors.email.message}</p>
                }

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control mask='99.999-999' isInvalid={errors.cep} type="text" {...register('cep', cadastrosValidator.cep)} onChange={handleChange} />
                </Form.Group>
                {
                    errors.cep &&
                    <p className='mt -1 text-danger'>{errors.cep.message}</p>
                }

                <Form.Group className="mb-3" controlId="endereco">
                    <Form.Label>Endereço: </Form.Label>
                    <Form.Control readOnly value={endereco.logradouro || ''} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bairro">
                    <Form.Label>Bairro: </Form.Label>
                    <Form.Control readOnly value={endereco.bairro || ''} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cidade">
                    <Form.Label>Cidade: </Form.Label>
                    <Form.Control readOnly value={endereco.localidade || ''} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="uf">
                    <Form.Label>Estado: </Form.Label>
                    <Form.Control readOnly value={endereco.uf || ''} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/cadastros">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default Formulario
