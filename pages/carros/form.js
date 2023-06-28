import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import carrosValidator from '@/validators/carrosValidator'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()
    const [carros, setCarros] = useState([]);

    useEffect(() => {
        getAll();
    }, [])

    function getAll() {
        axios.get('/api/carros').then(resultado => {
            setCarros(resultado.data);
        });
    }

    function salvar(dados) {
        axios.post('/api/carros', dados)
        push('/carros')
    }

    return (
        <Pagina titulo='carros'>
            <Form>
                <Form.Group className="mb-3" controlId="marca">
                    <Form.Label>Marca:</Form.Label>
                    <Form.Control isInvalid={errors.marca} type="text" {...register('marca')} />
                </Form.Group>
                {
                    errors.marca &&
                    <p className='mt -1 text-danger'>{errors.marca.message}</p>
                }
                <Form.Group className="mb-3" controlId="modelo">
                    <Form.Label>Modelo:</Form.Label>
                    <Form.Control isInvalid={errors.modelo} type="text" {...register('modelo')} />
                </Form.Group>
                {
                    errors.modelo &&
                    <p className='mt -1 text-danger'>{errors.modelo?.message}</p>
                }
                <Form.Group className="mb-3" controlId="cor">
                    <Form.Label>Cor:</Form.Label>
                    <Form.Control isInvalid={errors.cor} type="text" {...register('cor')} />
                </Form.Group>
                {
                    errors.cor &&
                    <p className='mt -1 text-danger'>{errors.cor?.message}</p>
                }
                <Form.Group className="mb-3" controlId="ano">
                    <Form.Label>Ano:</Form.Label>
                    <Form.Control isInvalid={errors.ano} type="number" {...register('ano')} />
                </Form.Group>
                {
                    errors.ano &&
                    <p className='mt -1 text-danger'>{errors.ano?.message}</p>
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