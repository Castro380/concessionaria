import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/concessionária/">Concessionária</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cadastros/">Cadastros</Nav.Link>
            <Nav.Link href="/carros/">Carros</Nav.Link>
            <Nav.Link href="/acessorios/">Acessórios</Nav.Link>
            <Nav.Link href="/revisoes/">Marcar Revisão</Nav.Link>
            <Nav.Link href="/leiloes/">Leilões</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho