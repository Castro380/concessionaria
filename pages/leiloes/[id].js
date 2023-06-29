import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import leiloesValidator from '@/validators/leiloesValidator'
import { mask } from 'remask'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm()

    useEffect(() => {
        if (query.id) {

            axios.get('/api/leiloes/' + query.id).then(resultado => {
                const leilao = resultado.data

                for (let atributo in leilao) {
                    setValue(atributo, leilao[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/leiloes/' + query.id, dados)
        push('/leiloes')
    }

    function handleChange(event) {

        const name = event.target.name
        const valor = event.target.value
        const mascara = event.target.getAttribute('mask')
    
        setValue(name, mask(valor, mascara))
    
    }

    return (
        <Pagina titulo='Leiloes'>

            <Form>
            <Form.Group className="mb-3" controlId='carro'>
                    <Form.Label >Carro: </Form.Label>
                    <Form.Control
                        isInvalid={errors.carro}
                        isValid={!errors.carro}
                        type="text"
                        {...register('carro', leiloesValidator.carro)}
                    />
                </Form.Group>
                {
                    errors.carro &&
                    <p className='mt -1 text-danger'>{errors.carro.message}</p>
                }
                
                <Form.Group className="mb-3" controlId='imagem'>
                    <Form.Label>Imagem:</Form.Label>
                    <Form.Control
                        isInvalid={errors.imagem}
                        isValid={!errors.imagem}
                        type="text"
                        {...register('imagem', leiloesValidator.imagem)}
                    />
                    {errors.imagem && <p className='mt-1 text-danger'>{errors.imagem.message}</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId='nome'>
                    <Form.Label >Nome do Vendedor: </Form.Label>
                    <Form.Control
                        isInvalid={errors.nome} /*mudar em todos*/
                        isValid={!errors.nome}
                        type="text"
                        {...register('nome', leiloesValidator.nome)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId='telefone'>
                    <Form.Label >Contato: </Form.Label>
                    <Form.Control
                    mask='(99) 99999-9999'
                        isInvalid={errors.telefone}
                        isValid={!errors.telefone}
                        type="text"
                        {...register('telefone', leiloesValidator.telefone)}
                        onChange={handleChange}
                    />
                </Form.Group>
                {
                    errors.telefone &&
                    <p className='mt -1 text-danger'>{errors.telefone.message}</p>
                }

                <Form.Group className="mb-3" controlId='valor'>
                    <Form.Label >Valor: </Form.Label>
                    <Form.Control
                        isInvalid={errors.valor}
                        isValid={!errors.valor}
                        type="text"
                        {...register('valor', leiloesValidator.valor)}
                    />
                </Form.Group>
                {
                    errors.valor &&
                    <p className='mt -1 text-danger'>{errors.valor.message}</p>
                }

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(alterar)}> 
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