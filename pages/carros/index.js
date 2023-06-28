import Pagina from '@/Componentes/Pagina'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { set } from 'react-hook-form';
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { BsFillPencilFill } from 'react-icons/bs'


const index = () => {

    const [carros, setCarros] = useState([])

    useEffect(() => {
        setCarros(getAll())

    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('carros')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('carros', JSON.stringify(itens))
            setCarros(itens)
        }
    }

    return (
        <>
            <Pagina Titulo='carros'>

            </Pagina>
            <Container>

                <Link href="/carros/form" className='mb-2 btn btn-primary mt-2'>
                    <AiFillPlusCircle />
                    Novo
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Cor</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carros.map((item, id) => (
                            <tr key={id}>
                                <td>
                                    <Link href={'/carros/' + id}>
                                        <BsFillPencilFill title="Alterar" />
                                    </Link>
                                    {' '}
                                    <Button variant='secundary' >
                                        <BsFillTrash3Fill title="Excluir" onClick={() => excluir(id)} className="primary" />
                                    </Button>


                                </td>
                                <td>{item.marca}</td>
                                <td>{item.modelo}</td>
                                <td>{item.cor}</td>
                                <td>{item.ano}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default index