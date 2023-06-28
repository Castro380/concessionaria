import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cabecalho from './Cabecalho'
import Rodape from './Rodape';
import { Container } from 'react-bootstrap';
import Carrossel from './Carrossel';


const Pagina = (props) => {
    return (
        <div>
            <Cabecalho titulo={props.titulo} />

            <Carrossel/>

            <Container className='mb-5'>
                {props.children}
            </Container>

            <Rodape/>
        </div>
    )
}

export default Pagina