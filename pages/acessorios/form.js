import Pagina from '@/Componentes/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import acessoriosValidator from '@/validators/acessoriosValidator'
import axios from 'axios'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()


    function salvar(dados) {
        axios.post('/api/acessorios', dados)
        push('/acessorios')
    }

    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')
    
        setValue(name, mask(valor, mascara))
    
      }
    return (
        <Pagina titulo='acessorios'>

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