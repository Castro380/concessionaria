import Pagina from '@/Componentes/Pagina'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Row, Col } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { BsFillPencilFill } from 'react-icons/bs'


const Index = () => {
    const [leiloes, setLeiloes] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll() {
        axios.get('/api/leiloes').then(resultado => {
            setLeiloes(resultado.data)
        })
    }

    function excluir(id) {
        if (confirm('Deseja realmente excluir o registro?')) {
            axios.delete('/api/leiloes/' + id)
            getAll()
        }
    }

    return (
        <>
            <Pagina Titulo='leiloes' />
            <Container>
                <Link href="/leiloes/form" className='mb-2 btn btn-primary mt-2'>
                    <AiFillPlusCircle />
                    Novo
                </Link>
                <Row>
                    {leiloes.map((item) => (
                        <Col key={item.id} md={4} className='mb-4'>
                            <Card>
                                <Card.Img variant="top" src={item.imagem} style={{ height: '250px' }} />

                                <Card.Body>
                                    <Card.Title>{item.carro}</Card.Title>
                                    <Card.Text>
                                        <strong>Nome do vendedor:</strong> {item.nome}<br />
                                        <strong>Contato:</strong> {item.telefone}<br />
                                        <strong>Valor:</strong> {item.valor}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Link href={'/leiloes/' + item.id}>
                                        <BsFillPencilFill title="Alterar" />
                                    </Link>
                                    {' '}
                                    <Button variant='secundary'>
                                        <BsFillTrash3Fill
                                            title="Excluir"
                                            onClick={() => excluir(item.id)}
                                            className="primary"
                                        />
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Index
