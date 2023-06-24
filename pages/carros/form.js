import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import carrosValidator from '@/validators/carrosValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm()

    function salvar(dados) { //salvar dados no localstorage
        const carros = JSON.parse(window.localStorage.getItem('carros')) || [] // tirar de uma string
        carros.push(dados)
        window.localStorage.setItem('carros', JSON.stringify(carros))//transformar em uma string
    }
    return (
        <Pagina titulo='carross'>
            <Form>
                <Form.Group className="mb-3" controlId="marca">
                    <Form.Label>Marca:</Form.Label>
                    <Form.Control isInvalid={errors.marca} type="text" {...register('marca', carrosValidator.marca)} />
                </Form.Group>
                {
                    errors.marca &&
                    <p className='mt -1 text-danger'>{errors.marca.message}</p>
                }
                <Form.Group className="mb-3" controlId="modelo">
                    <Form.Label>Modelo:</Form.Label>
                    <Form.Control isInvalid={errors.modelo} type="text" {...register('modelo', carrosValidator.modelo)} />
                </Form.Group>
                {
                    errors.modelo &&
                    <p className='mt -1 text-danger'>{errors.modelo.message}</p>
                }
                <Form.Group className="mb-3" controlId="cor">
                    <Form.Label>Cor:</Form.Label>
                    <Form.Control isInvalid={errors.cor} type="text" {...register('cor', carrosValidator.cor)} />
                </Form.Group>
                {
                    errors.cor &&
                    <p className='mt -1 text-danger'>{errors.cor.message}</p>
                }
                <Form.Group className="mb-3" controlId="estado">
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control isInvalid={errors.estado} type="text" {...register('estado', carrosValidator.estado)} />
                </Form.Group>
                {
                    errors.estado &&
                    <p className='mt -1 text-danger'>{errors.estado.message}</p>
                }
                <Form.Group className="mb-3" controlId="ano">
                    <Form.Label>Ano:</Form.Label>
                    <Form.Control isInvalid={errors.ano} type="text" {...register('ano', carrosValidator.ano)} />
                </Form.Group>
                {
                    errors.ano &&
                    <p className='mt -1 text-danger'>{errors.ano.message}</p>
                }
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