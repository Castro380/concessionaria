import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue } = useForm()

    useEffect(() => {

        if (query.id) {
            const id = query.id
            const leiloes = JSON.parse(window.localStorage.getItem('leiloes')) || []
            const leilao = leiloes[query.id]

            for (let atributo in leilao) {
                setValue(atributo, leilao[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) { //salvar dados no localstorage
        const leiloes = JSON.parse(window.localStorage.getItem('leiloes')) || [] // tirar de uma string
        leiloes.splice(query.id, 1, dados)
        window.localStorage.setItem('leiloes', JSON.stringify(leiloes))//transformar em uma string
        push('/leiloes')
    }

    return (
        <Pagina titulo='Leiloes'>



            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control type="text" {...register('nome')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>Cpf:</Form.Label>
                    <Form.Control type="date" {...register('cpf')} />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control type="date" {...register('telefone')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="carro">
                    <Form.Label>Carro:</Form.Label>
                    <Form.Control type="date" {...register('carro')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="ano">
                    <Form.Label>Ano:</Form.Label>
                    <Form.Control type="date" {...register('ano')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="estado">
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control type="date" {...register('estado')} />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/lilao">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form