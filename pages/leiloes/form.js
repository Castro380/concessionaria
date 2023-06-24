import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import leiloesValidator from '@/validators/leiloesValidator'
import { mask } from 'remask'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    function salvar(dados) { //salvar dados no localstorage
        const leiloes = JSON.parse(window.localStorage.getItem('leiloes')) || [] // tirar de uma string
        leiloes.push(dados)
        window.localStorage.setItem('leiloes', JSON.stringify(leiloes))//transformar em uma string
    }


    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')

        setValue(name, mask(valor, mascara))

    }
    return (
        <Pagina titulo='leiloes'>
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome:</Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', leiloesValidator.nome)} />
                </Form.Group>
                {
                    errors.nome &&
                    <p className='mt -1 text-danger'>{errors.nome.message}</p>
                }

                <Form.Group className="mb-3" controlId="cpf">
                    <Form.Label>Cpf:</Form.Label>
                    <Form.Control mask='999.999.999-99'
                        isInvalid={errors.cpf} type="text" {...register('cpf', leiloesValidator.cpf)} onChange={handleChange} />
                </Form.Group>
                {
                    errors.cpf &&
                    <p className='mt -1 text-danger'>{errors.cpf.message}</p>
                }

                <Form.Group className="mb-3" controlId="telefone">
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control
                        mask='(99) 99999-9999'
                        isInvalid={errors.telefone} type="text" {...register('telefone', leiloesValidator.telefone)} onChange={handleChange} />
                </Form.Group>
                {
                    errors.telefone &&
                    <p className='mt -1 text-danger'>{errors.telefone.message}</p>
                }

                <Form.Group className="mb-3" controlId="carro">
                    <Form.Label>Carro:</Form.Label>
                    <Form.Control isInvalid={errors.carro} type="text" {...register('carro', leiloesValidator.carro)} />
                </Form.Group>
                {
                    errors.carro &&
                    <p className='mt -1 text-danger'>{errors.carro.message}</p>
                }

                <Form.Group className="mb-3" controlId="ano">
                    <Form.Label>Ano:</Form.Label>
                    <Form.Control isInvalid={errors.ano} type="text" {...register('ano', leiloesValidator.ano)} />
                </Form.Group>
                {
                    errors.ano &&
                    <p className='mt -1 text-danger'>{errors.ano.message}</p>
                }

                <Form.Group className="mb-3" controlId="estado">
                    <Form.Label>Estado:</Form.Label>
                    <Form.Control isInvalid={errors.estado} type="text" {...register('estado', leiloesValidator.estado)} />
                </Form.Group>
                {
                    errors.estado &&
                    <p className='mt -1 text-danger'>{errors.estado.message}</p>
                }
                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/leiloes">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form