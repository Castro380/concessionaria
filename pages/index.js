import Cabecalho from "@/Componentes/Cabecalho";
import Pagina from "@/Componentes/Pagina";
import { Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

export default function Home() {
  return (
    <>
    
      <Cabecalho />
      <h1 className="text-center pt-3">CONCESSIONÁRIA</h1>
      <Container fluid className="p-0">
        <Image
          src="https://cdn6.campograndenews.com.br/uploads/noticias/2021/02/23/c8c350ef14ec8fe388d94672bcb0ec22a1d2ee99.jpg" 
          className="w-100 h-100"
        />
      </Container>
    </>
  );
}
