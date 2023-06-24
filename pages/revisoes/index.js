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

    const [revisoes, setRevisoes] = useState([])

    useEffect(() => {
        setRevisoes(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('revisoes')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('revisoes', JSON.stringify(itens))
            setRevisoes(itens)
        }
    }

    return (
        <>
            <Pagina Titulo='revisoes'>

            </Pagina>
            <Container>

                <Link href="/revisoes/form" className='mb-2 btn btn-primary mt-2'>
                    <AiFillPlusCircle />
                    Novo
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Cpf</th>
                            <th>Email</th>
                            <th>Telefone</th>
                            <th>Estado</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {revisoes.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <Link href={'/revisoes/' + item.id}>
                                        <BsFillPencilFill title="Alterar" />
                                    </Link>
                                    {' '}
                                    <Button variant='secundary' >
                                        <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className="primary" />
                                    </Button>


                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.email}</td>
                                <td>{item.telefone}</td>
                                <td>{item.estado}</td>
                                <td>{item.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default index