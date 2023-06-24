import Pagina from '@/Componentes/Pagina'
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
            const acessorios = JSON.parse(window.localStorage.getItem('acessorios')) || []
            const acessorio = acessorios[query.id]

            for (let atributo in acessorio) {
                setValue(atributo, acessorio[atributo])
            }
        }
    }, [query.id])

    function salvar(dados) { //salvar dados no localstorage
        const acessorios = JSON.parse(window.localStorage.getItem('acessorios')) || [] // tirar de uma string
        acessorios.splice(query.id, 1, dados)
        window.localStorage.setItem('acessorios', JSON.stringify(acessorios))//transformar em uma string
        push('/acessorios')
    }

    return (
        <Pagina titulo='Acessorios'>



            <Form>
                <Form.Group className="mb-3" controlId="manta">
                    <Form.Label>Manta Refletiva:</Form.Label>
                    <Form.Control type="text" {...register('manta')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="calotas">
                    <Form.Label>Calotas:</Form.Label>
                    <Form.Control type="text" {...register('calotas')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="sensor">
                    <Form.Label>Sensor de Ré:</Form.Label>
                    <Form.Control type="text" {...register('sensor')} />
                </Form.Group>
                
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