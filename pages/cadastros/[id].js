import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import { mask } from 'remask'
import cadastrosValidator from '@/validators/cadastrosValidator'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        if (query.id) {

            axios.get('/api/cadastros/' + query.id).then(resultado => {
                const cadastro = resultado.data

                for (let atributo in cadastro) {
                    setValue(atributo, cadastro[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/cadastros/' + query.id, dados)
        push('/cadastros')
    }

    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')
    
        setValue(name, mask(valor, mascara))

    }

    return (
        <Pagina titulo='Cadastros'>
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
                    <Form.Control mask='999.999.999-99'
                        isInvalid={errors.cpf} type="text" {...register('cpf', cadastrosValidator.cpf)} onChange={handleChange} />
                </Form.Group>
                {
                    errors.cpf &&
                    <p className='mt -1 text-danger'>{errors.cpf.message}</p>
                }

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control
                        mask='(99) 99999-9999'
                        isInvalid={errors.telefone} type="text" {...register('telefone', cadastrosValidator.telefone)} onChange={handleChange} />
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
                    <Form.Control
                        mask='99.999-999'
                        isInvalid={errors.cep} type="text" {...register('cep', cadastrosValidator.cep)} onChange={handleChange}/>
                </Form.Group>
                {
                    errors.cep &&
                    <p className='mt -1 text-danger'>{errors.cep.message}</p>
                }
                
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(alterar)}> 
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

export default form