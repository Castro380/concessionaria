import Pagina from '@/Componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import acessoriosValidator from '@/validators/cadastrosValidator'

const form = () => {


    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) { //salvar dados no localstorage
        const acessorios = JSON.parse(window.localStorage.getItem('acessorios')) || [] // tirar de uma string
        acessorios.push(dados)
        window.localStorage.setItem('acessorios', JSON.stringify(acessorios))//transformar em uma string
    }

    return (
        <Pagina titulo='acessorios'>

            <Form>
                <Form.Group className="mb-3" controlId="manta">
                    <Form.Label>Manta Refletiva:</Form.Label>
                    <Form.Control insivalid={errors.manta} type="text" {...register('manta', acessoriosValidator.manta)} />
                </Form.Group>
                {
                    errors.manta &&
                    <p className='mt -1 text-danger'>{errors.manta.message}</p>
                }
                <Form.Group className="mb-3" controlId="calotas">
                    <Form.Label>Calotas:</Form.Label>
                    <Form.Control isInvalid={errors.calotas} type="text" {...register('calotas', acessoriosValidator.calotas)} />
                </Form.Group>
                {
                    errors.calotas &&
                    <p className='mt -1 text-danger'>{errors.calotas.message}</p>
                }
                <Form.Group className="mb-3" controlId="sensor">
                    <Form.Label>Sensor de Ré:</Form.Label>
                    <Form.Control isInvalid={errors.sensor} type="text" {...register('sensor', acessoriosValidator.sensor)} />
                </Form.Group>
                {
                    errors.sensor &&
                    <p className='mt -1 text-danger'>{errors.sensor.message}</p>
                }
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
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