import Menu from '../../components/menu';
import Cabecalho from '../../components/cabecalho';

import { Container, Conteudo } from './styled'

import { useState, useEffect, useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar';

import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

import Api from '../../../src/service/api'
const api = new Api();

export default function Index() {

    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState('');
    const [chamada, setChamada] = useState('');
    const [curso, setCurso] = useState('');
    const [turma, setTurma] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);
    const loading = useRef(null);

    async function listar() {
        let r = await api.listar();
        setAlunos(r);
        listar();
    }

    async function inserir() {
       loading.current.continuousStart();

        if(idAlterando === 0) {
            
            if (!nome || nome.replace === '' )
            return toast.error('O campo aluno deve ser preenchido!'); 
       
            if ( nome.length < 4)
            return toast.error('O campo nome deve ser maior que 4 caracteres!'); 
       
            if (chamada <= 0 )
            return toast.error('O número de chamada deve ser positivo e maior que 0!'); 
       
            if (!chamada || chamada.replace === '')
            return toast.error('O campo chamada é obrigatório!');
            
            if(chamada != parseInt(chamada))
            return toast.error('O campo chamada aceita apenas números!');
            loading.current.complete();

            if(curso.length < 4)
            return toast.error('O campo curso deve ser maior que 4 caracteres!');

            if(turma.length < 4)
            return toast.error('O campo turma deve ser maior que 4 caracteres!');

        let r = await api.inserir(nome, chamada, curso, turma);
        if(r.erro) {
            toast.error(`${r.erro}`); 
            loading.current.complete();
        }
        else {
            toast.success('Aluno inserido!');
            loading.current.complete();
        }
    } else {
        let r = await api.alterar(idAlterando, nome, chamada, curso, turma);
        if(r.erro) 
            toast.error(`${r.erro}`); 
        else {
            toast.success('Aluno alterado!');
            loading.current.complete();
        }

    }
        limparCampos();
        listar();
    }

    function limparCampos() {
        setNome('');
        setChamada('');
        setCurso('');
        setTurma('');
        setIdAlterando(0);
    }

    async function remover(id) {
        loading.current.continuousStart();
        confirmAlert({
            title: 'Remover aluno',
            message: `Tem certeza que deseja remover o aluno ${id}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async() => {
                        let r = await api.remover(id);
                        if(r.erro)
                            toast.error(`${r.erro}`);
                        else {
                            toast.success('Aluno removido!');
                            listar();
                            
                        }
                    }
                },
                {
                    label:'Não'
                }
            ]
        
        })
    }
    

    async function alterar(item){
        loading.current.continuousStart();

        setNome(item.nm_aluno);
        setChamada(item.nr_chamada);
        setCurso(item.nm_curso);
        setTurma(item.nm_turma);
        setIdAlterando(item.id_matricula);

        
    }
    
    useEffect(() => {
        listar();
    }, [])


    return (
        <Container>
            <ToastContainer/>
            <LoadingBar color="purple" ref={loading}/>
            <Menu/>
                <Conteudo> 
                    <Cabecalho/>
                    <div className="novo-aluno">
                    <div className="cab-aluno">
                        <div className="barra"> <img src="/assets/images/barra.svg" alt=""/> </div>
                        <div className="titulo1"> {idAlterando === 0 ? "Novo Aluno" : "Alterando aluno " + idAlterando} </div>
                    </div>
                    <div className="inputs">
                        <div className="inputs-esq">
                            <div className="form1">
                                <div className="nome">Nome: </div>
                                <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                            </div>
                            <div className="form">
                                <div className="chamada"> Chamada: </div>
                                <input type="text" value={chamada} onChange={e => setChamada(e.target.value)}/>
                            </div>
                        </div>
                        <div className="inputs-dir">
                            <div className="form">
                                <div className="curso"> Curso: </div>
                                <input type="text" value={curso} onChange={e => setCurso(e.target.value)}/>
                            </div>
                            <div className="form">
                                <div className="turma"> Turma: </div>
                                <input type="text" value={turma} onChange={e => setTurma(e.target.value)}/>
                            </div>
                        </div>
                        <div className="cadastrar"><button onClick={inserir}>{idAlterando === 0 ? "Cadastrar" : "Alterar"}   </button></div>
                    </div>
                </div>
                <div className="matriculados">
                    <div className="cab-matriculados">
                        <div className="barra"> <img src="/assets/images/barra.svg" alt=""/></div>
                        <div className="titulo2">Alunos Matriculados</div>
                    </div>
                <table>
                    <thead>
                        <tr className="linha-principal">
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Chamada</th>
                            <th>Curso</th>
                            <th>Turma</th>
                            <th className="botoes"> </th>
                            <th className="botoes"> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((item, i) =>
                        <tr className={i % 2 === 0 ? "linha-branca" : "linha-cinza"}>
                            <td>{item.id_matricula} </td>
                            <td title={item.nm_aluno}>{item.nm_aluno != null && item.nm_aluno.length >=25 ? item.nm_aluno.substr(0, 25) + "..." : item.nm_aluno }</td>
                            <td>{item.nr_chamada}</td>
                            <td>{item.nm_turma}</td>
                            <td>{item.nm_curso}</td>
                            <td className="botoes"><button onClick={() => alterar(item)}><img src="/assets/images/editar.svg" alt=""/></button> </td>
                            <td className="botoes"> <button onClick={() => remover(item.id_matricula)}><img src="/assets/images/remover.svg" alt=""/></button></td>
                         </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </Conteudo>
        </Container>
    )
}
