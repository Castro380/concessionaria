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

    const [leiloes, setLeiloes] = useState([])

    useEffect(() => {
        setLeiloes(getAll())

    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('leiloes')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('leiloes', JSON.stringify(itens))
            setLeiloes(itens)
        }
    }

    return (
        <>
            <Pagina Titulo='leiloes'>

            </Pagina>
            <Container>

                <Link href="/leiloes/form" className='mb-2 btn btn-primary mt-2'>
                    <AiFillPlusCircle />
                    Novo
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>Cpf</th>
                            <th>Carro</th>
                            <th>Ano</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leiloes.map((item, id) => (
                            <tr key={id}>
                                <td>
                                    <Link href={'/leiloes/' + id}>
                                        <BsFillPencilFill title="Alterar" />
                                    </Link>
                                    {' '}
                                    <Button variant='secundary' >
                                        <BsFillTrash3Fill title="Excluir" onClick={() => excluir(id)} className="primary" />
                                    </Button>


                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.carro}</td>
                                <td>{item.ano}</td>
                                <td>{item.estado}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default index