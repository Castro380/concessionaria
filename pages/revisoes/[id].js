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
            const revisoes = JSON.parse(window.localStorage.getItem('revisoes')) || []
            const revisao = revisoes[query.id]

            for (let atributo in revisao) {
                setValue(atributo, revisao[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) { //salvar dados no localstorage
        const revisoes = JSON.parse(window.localStorage.getItem('revisoes')) || [] // tirar de uma string
        revisoes.splice(query.id, 1, dados)
        window.localStorage.setItem('revisoes', JSON.stringify(revisoes))//transformar em uma string
        push('/revisoes')
    }

    return (
        <Pagina titulo='Revisoes'>



            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>Cpf:</Form.Label>
                    <Form.Control
                        mask='999.999.999-99'
                        type="text" {...register('cpf')}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="text" {...register('email')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control
                        mask='999.999.999-99'
                        type="text" {...register('telefone')}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="estado">
                    <Form.Label>Estado: </Form.Label>
                    <Form.Control type="text" {...register('estado')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data: </Form.Label>
                    <Form.Control type="text" {...register('data')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
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