import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import { mask } from 'remask'
import revisoesValidator from '@/validators/revisoesValidator'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        if (query.id) {

            axios.get('/api/revisoes/' + query.id).then(resultado => {
                const revisao = resultado.data

                for (let atributo in revisao) {
                    setValue(atributo, revisao[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/revisoes/' + query.id, dados)
        push('/revisoes')
    }

    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara))

    }

    return (
        <Pagina titulo='Revisoes'>



            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Select size="lg" {...register('nome', revisoesValidator.nome)}>
                        {nomes.map((item) => (
                            <option>{item.nome}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {
                    errors.nome &&
                    <p className='mt -1 text-danger'>{errors.nome.message}</p>
                }
                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>cpf:</Form.Label>
                    <Form.Select size="lg" {...register('cpf', revisoesValidator.cpf)}>
                        {cpfs.map((item) => (
                            <option>{item.cpf}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {
                    errors.cpf &&
                    <p className='mt -1 text-danger'>{errors.cpf.message}</p>
                }
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Select size="lg" {...register('telefone', revisoesValidator.telefone)}>
                        {telefones.map((item) => (
                            <option>{item.telefone}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                {
                    errors.telefone &&
                    <p className='mt -1 text-danger'>{errors.telefone.message}</p>
                }

                <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data: </Form.Label>
                    <Form.Control isInvalid={errors.data} type="date" {...register('data', revisoesValidator.data)} />
                </Form.Group>
                {
                    errors.data &&
                    <p className='mt -1 text-danger'>{errors.data.message}</p>
                }

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(alterar)}>
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/revisoes">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form