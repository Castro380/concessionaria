import Pagina from '@/Componentes/Pagina'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { set } from 'react-hook-form';
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { BsFillPencilFill } from 'react-icons/bs'


const index = () => {

    const [acessorios, setAcessorios] = useState([])

    useEffect(() => {
        setAcessorios(getAll())
    }, [])

    function getAll() {
        return JSON.parse(window.localStorage.getItem('acessorios')) || []
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro')) {
            const itens = getAll()
            itens.splice(id, 1)
            window.localStorage.setItem('acessorios', JSON.stringify(itens))
            setAcessorios(itens)
        }
    }
    return (
        <>
            <Pagina Titulo='acessorios'>

            </Pagina>
            <Container>

                <Link href="/acessorios/form" className='mb-2 btn btn-primary mt-2'>
                    <AiFillPlusCircle />
                    Novo
                </Link>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Manta Refletiva</th>
                            <th>Calotas</th>
                            <th>Sensor de Ré</th>
                        </tr>
                    </thead>
                    <tbody>
                        {acessorios.map((item, i) => (
                            <tr key={i}>
                                <td>
                                    <Link href={'/acessorios/' + i}>
                                        <BsFillPencilFill title="Alterar" />
                                    </Link>
                                    {' '}
                                    <Button variant='secundary' >
                                        <BsFillTrash3Fill title="Excluir" onClick={() => excluir(i)} className="primary" />
                                    </Button>
                                    
                                </td>
                                <td>{item.manta}</td>
                                <td>{item.calotas}</td>
                                <td>{item.sensor}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>


            </Container>



        </>


    )
}

export default index