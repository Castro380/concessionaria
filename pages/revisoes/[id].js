import Pagina from '@/Componentes/Pagina'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { BsCheckSquare, BsArrowLeftSquare } from 'react-icons/bs'
import { mask } from 'remask'
import revisoesValidator from '@/validators/revisoesValidator'

const form = () => {

    const { push, query } = useRouter()
    const { register, handleSubmit, setValue, formState: { errors } } = useForm() 
    const [revisoes, setRevisoes] = useState([]);
    const [cadastros, setCadastros] = useState([]);
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
  
    useEffect(() => {
      getAll();
      getAll_();
    }, []);
  
    function getAll() {
      axios.get('/api/revisoes').then(resultado => {
        setRevisoes(resultado.data);
      });
    }
  
    function getAll_() {
      axios.get('/api/cadastros').then(resultado => {
        setCadastros(resultado.data);
      });
    }

    useEffect(() => {
        if (query.id) {

            axios.get('/api/revisoes/' + query.id).then(resultado => {
                const revisao = resultado.data

                for (let atributo in revisao) {
                    setValue(atributo, revisao[atributo])
                }
            })

        }
    }, [query.id])

    function alterar(dados) {
        axios.put('/api/revisoes/' + query.id, dados)
        push('/revisoes')
    }

    function handleChange(event) {
        const name = event.target.name;
        const valor = event.target.value;
        const mascara = event.target.getAttribute('mask');
    
        setValue(name, mascara ? mask(valor, mascara) : valor);
    
        const cadastroSelecionado = cadastros.find(item => item.nome === valor);
    
        if (cadastroSelecionado) {
          setCpf(cadastroSelecionado.cpf);
          setTelefone(cadastroSelecionado.telefone);
        } else {
          setCpf('');
          setTelefone('');
        }
      }

    return (
        <Pagina titulo='Revisoes'>



            <Form>
            <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            as="select"
            isInvalid={errors.cadastros}
            isValid={!errors.cadastros}
            {...register('cadastros', revisoesValidator.nome)}
            style={{ backgroundColor: '#f1f1f1', color: '#000000' }}
            onChange={handleChange}
          >
            <option value="">Selecione a cadastros</option>
            {cadastros.map((item, index) => (
              <option key={index} value={item.nome}>
                {item.nome}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        {
          errors.nome &&
          <p className='mt-1 text-danger'>{errors.nome.message}</p>
        }
                 <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>Cpf:</Form.Label>
          <Form.Control
            mask='999.999.999-99'
            isInvalid={errors.cpf}
            type="text"
            {...register('cpf', revisoesValidator.cpf)}
            onChange={handleChange}
            value={cpf}
          />
        </Form.Group>
        {
          errors.cpf &&
          <p className='mt-1 text-danger'>{errors.cpf.message}</p>
        }

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control
            mask='(99) 99999-9999'
            isInvalid={errors.telefone}
            type="text"
            {...register('telefone', revisoesValidator.telefone)}
            onChange={handleChange}
            value={telefone}
          />
        </Form.Group>
        {
          errors.telefone &&
          <p className='mt-1 text-danger'>{errors.telefone.message}</p>
        }

        <Form.Group className="mb-3" controlId="data">
          <Form.Label>Data: </Form.Label>
          <Form.Control isInvalid={errors.data} type="date" {...register('data', revisoesValidator.data)} />
        </Form.Group>
        {
          errors.data &&
          <p className='mt-1 text-danger'>{errors.data.message}</p>
        }

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(alterar)}>
                        <BsCheckSquare className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/revisoes">
                        <BsArrowLeftSquare className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form