import Pagina from '@/Componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import acessoriosValidator from '@/validators/acessoriosValidator'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        if (query.id) {

            axios.get('/api/acessorios/' + query.id).then(resultado => {
                const acessorio = resultado.data

                for (let atributo in acessorio) {
                    setValue(atributo, acessorio[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/acessorios/' + query.id, dados)
        push('/acessorios')
    }

    return (
        <Pagina titulo='Acessorios'>



<Form>
                <Form.Group className="mb-3" controlId="manta">
                    <Form.Label>Manta Refletiva:</Form.Label>
                    <Form.Control insivalid={errors.manta} type="number" {...register('manta', acessoriosValidator.manta)} />
                </Form.Group>
                {
                    errors.manta &&
                    <p className='mt -1 text-danger'>{errors.manta.message}</p>
                }
                <Form.Group className="mb-3" controlId="calotas">
                    <Form.Label>Calotas:</Form.Label>
                    <Form.Control isInvalid={errors.calotas} type="number" {...register('calotas', acessoriosValidator.calotas)} />
                </Form.Group>
                {
                    errors.calotas &&
                    <p className='mt -1 text-danger'>{errors.calotas.message}</p>
                }
                <Form.Group className="mb-3" controlId="sensor">
                    <Form.Label>Sensor de Ré:</Form.Label>
                    <Form.Control isInvalid={errors.sensor} type="number" {...register('sensor', acessoriosValidator.sensor)} />
                </Form.Group>
                {
                    errors.sensor &&
                    <p className='mt -1 text-danger'>{errors.sensor.message}</p>
                }

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(alterar)}> 
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/acessorios">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form