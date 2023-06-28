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
    const [cadastros, setCadastros] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/cadastros').then(resultado => {
            setCadastros(resultado.data)
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/cadastros/' + id)
            getAll()
        }
    }

    return (
        <>
            <Pagina Titulo='cadastros'>

            </Pagina>
            <Container>

                <Link href="/cadastros/form" className='mb-2 btn btn-primary mt-2'>
                    <AiFillPlusCircle />
                    Novo
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>Telefone</th>
                            <th>Email</th>
                            <th>Cep</th>
                            <th>Cep</th>
                            <th>Cep</th>
                            <th>Cep</th>
                            <th>Cep</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cadastros.map((item, id) => (
                            <tr key={id}>
                                <td>
                                    <Link href={'/cadastros/' + id}>
                                        <BsFillPencilFill title="Alterar" />
                                    </Link>
                                    {' '}
                                    <Button variant='secundary' >
                                        <BsFillTrash3Fill title="Excluir" onClick={() => excluir(id)} className="primary" />
                                    </Button>


                                </td>
                                <td>{item.nome}</td>
                                <td>{item.cpf}</td>
                                <td>{item.telefone}</td>
                                <td>{item.email}</td>
                                <td>{item.cep}</td>
                                <td>{item.uf}</td>
                                <td>{item.bairro}</td>
                                <td>{item.cidade}</td>
                                <td>{item.endereco}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default index