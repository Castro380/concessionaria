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
            const carros = JSON.parse(window.localStorage.getItem('carros')) || []
            const carro = carros[query.id]

            for (let atributo in carro) {
                setValue(atributo, carro[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) { //salvar dados no localstorage
        const carros = JSON.parse(window.localStorage.getItem('carros')) || [] // tirar de uma string
        carros.splice(query.id, 1, dados)
        window.localStorage.setItem('carros', JSON.stringify(carros))//transformar em uma string
        push('/carros')
    }

    return (
        <Pagina titulo='Carros'>

            <Form>
                <Form.Group className="mb-3" controlId="marca">
                    <Form.Label>Marca:</Form.Label>
                    <Form.Control type="text" {...register('marca')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="modelo">
                    <Form.Label>Modelo:</Form.Label>
                    <Form.Control type="text" {...register('modelo')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cor">
                    <Form.Label>Cor:</Form.Label>
                    <Form.Control type="text" {...register('cor')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="estado">
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control type="text" {...register('estados')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="ano">
                    <Form.Label>Ano:</Form.Label>
                    <Form.Control type="text" {...register('ano')} />
                </Form.Group>
                
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/carros">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form