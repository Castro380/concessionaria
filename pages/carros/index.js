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
        getAll();
    }, [])

    function getAll() {
        axios.get('/api/carros').then(resultado => {
            setCarros(resultado.data);
        });
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/carros/' + id)
            getAll()
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
                        {carros.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/carros/' + item.id}>
                                        <BsFillPencilFill title="Alterar" />
                                    </Link>
                                    {' '}
                                    <Button variant='secundary' >
                                        <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className="primary" />
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