import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import { mask } from 'remask'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {
            const id = query.id
            const cadastros = JSON.parse(window.localStorage.getItem('cadastros')) || []
            const cadastro = cadastros[query.id]

            for (let atributo in cadastro) {
                setValue(atributo, cadastro[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) { //salvar dados no localstorage
        const cadastros = JSON.parse(window.localStorage.getItem('cadastros')) || [] // tirar de uma string
        cadastros.splice(query.id, 1, dados)
        window.localStorage.setItem('cadastros', JSON.stringify(cadastros))//transformar em uma string
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
                    <Form.Label>NOME:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>CPF: </Form.Label>
                    <Form.Control 
                    mask='999.999.999-99'
                     type="text" {...register('cpf')} 
                     onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control 
                    mask='999.999.999-99'
                    type="text" {...register('telefone')}
                    onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="text" {...register('email')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cep">
                    <Form.Label>CEP: </Form.Label>
                    <Form.Control 
                    mask='999.999.999-99'
                     type="text" {...register('cep')} 
                     onChange={handleChange} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/login">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form