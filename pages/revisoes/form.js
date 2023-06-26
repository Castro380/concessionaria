import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import revisoesValidator from '@/validators/revisoesValidator'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: {errors} } = useForm()
    const [modelos, setModelos] = useState([])

    useEffect(() => {
        const modelos = JSON.parse(window.localStorage.getItem('carros'))
            setModelos(modelos)       
    }, [])

    function salvar(dados) { //salvar dados no localstorage
        const revisoes = JSON.parse(window.localStorage.getItem('revisoes')) || [] // tirar de uma string
        revisoes.push(dados)
        window.localStorage.setItem('revisoes', JSON.stringify(revisoes))//transformar em uma string
        push('/revisoes')
    }
    
    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')
    
        setValue(name, mask(valor, mascara))

    }
    return (
        <Pagina titulo='revisoes'>
            <Form>
            <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', revisoesValidator.nome)} />
                </Form.Group>
                {
                    errors.nome &&
                    <p className='mt -1 text-danger'>{errors.nome.message}</p>
                }
                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>cpf:</Form.Label>
                    <Form.Control 
                    mask='999.999.999-99'
                    isInvalid={errors.cpf} type="text" {...register('cpf', revisoesValidator.cpf)} 
                    onChange={handleChange}/>
                </Form.Group>
                {
                    errors.cpf &&
                    <p className='mt -1 text-danger'>{errors.cpf.message}</p>
                }
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control isInvalid={errors.email} type="text" {...register('email', revisoesValidator.email)} />
                </Form.Group>
                {
                    errors.email &&
                    <p className='mt -1 text-danger'>{errors.email.message}</p>
                }
                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control 
                    mask='(99) 99999-9999'
                    isInvalid={errors.telefone} type="text" {...register('telefone', revisoesValidator.telefone)} 
                     onChange={handleChange} />
                </Form.Group>
                {
                    errors.telefone &&
                    <p className='mt -1 text-danger'>{errors.telefone.message}</p>
                }
                <Form.Group className="mb-3" controlId="modelo">
                        <Form.Label>Modelo: </Form.Label>
                        <Form.Select size="lg" {...register('modelo', revisoesValidator.modelo)}>
                            {modelos.map((item) => (
                                <option>{item.modelo}</option>
                            ))} 
                        </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="estado">
                    <Form.Label>Estado: </Form.Label>
                    <Form.Control isInvalid={errors.estado} type="text" {...register('estado', revisoesValidator.estado)} />
                </Form.Group>
                {
                    errors.estado &&
                    <p className='mt -1 text-danger'>{errors.estado.message}</p>
                }
                <Form.Group className="mb-3" controlId="data">
                    <Form.Label>Data: </Form.Label>
                    <Form.Control isInvalid={errors.data} type="date" {...register('data', revisoesValidator.data)} />
                </Form.Group>
                {
                    errors.data &&
                    <p className='mt -1 text-danger'>{errors.data.message}</p>
                }

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