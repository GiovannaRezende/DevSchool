import Menu from '../../components/menu';
import Cabecalho from '../../components/cabecalho';

import { Container, Conteudo } from './styled'


import { useState, useEffect } from 'react';

import Api from '../../../src/service/api'
const api = new Api();

export default function Index() {

    const [alunos, setAlunos] = useState([]);
    const [nome, setNome] = useState('');
    const [chamada, setChamada] = useState('');
    const [curso, setCurso] = useState('');
    const [turma, setTurma] = useState('');
    const [idAlterando, setIdAlterando] = useState(0);

    async function listar() {
        let r = await api.listar();
        setAlunos(r);
        listar();
    }

    async function inserir() {
        if(idAlterando == 0) {
        let r = await api.inserir(nome, chamada, curso, turma);
        alert('Aluno inserido!');
    } else {
        let r = await api.alterar(idAlterando, nome, chamada, curso, turma);
        alert('Aluno alterado!');
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
        let r = await api.remover(id);
        alert('Aluno removido!');

        listar();
    }

    async function editar(item){
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
            <Menu/>
                <Conteudo> 
                    <Cabecalho/>
                    <div class="novo-aluno">
                    <div class="cab-aluno">
                        <div class="barra"> <img src="/assets/images/barra.svg" alt=""/> </div>
                        <div class="titulo1"> Novo Aluno </div>
                    </div>
                    <div class="inputs">
                        <div class="inputs-esq">
                            <div class="form1">
                                <div class="nome">Nome: </div>
                                <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                            </div>
                            <div class="form">
                                <div class="chamada"> Chamada: </div>
                                <input type="text" value={chamada} onChange={e => setChamada(e.target.value)}/>
                            </div>
                        </div>
                        <div class="inputs-dir">
                            <div class="form">
                                <div class="curso"> Curso: </div>
                                <input type="text" value={curso} onChange={e => setCurso(e.target.value)}/>
                            </div>
                            <div class="form">
                                <div class="turma"> Turma: </div>
                                <input type="text" value={turma} onChange={e => setTurma(e.target.value)}/>
                            </div>
                        </div>
                        <div class="cadastrar"><button onClick={inserir}>Cadastrar</button></div>
                    </div>
                </div>
                <div class="matriculados">
                    <div class="cab-matriculados">
                        <div class="barra"> <img src="/assets/images/barra.svg" alt=""/></div>
                        <div class="titulo2">Alunos Matriculados</div>
                    </div>
                    <table class="tabela"> 
                    <thead>
                        <tr class="linha-principal">
                            <th class="campos" style={{width:"5em", height:"4.5px"}}>ID</th>
                            <th>Nome</th>
                            <th>Chamada</th>
                            <th>Turma</th>
                            <th>Curso</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map(item =>
                        <tr class="linha-tp1" style={{width:"5em", height:"4.5px"}}>
                            <td class="linhas">{item.id_matricula} </td>
                            <td>{item.nm_aluno}</td>
                            <td>{item.nr_chamada}</td>
                            <td>{item.nm_turma}</td>
                            <td>{item.nm_curso}</td>
                            <td class="botoes"><button onClick={() => editar(item)}><img src="/assets/images/editar.svg" alt=""/></button> <button onClick={() => remover(item.id_matricula)}><img src="/assets/images/remover.svg" alt=""/></button></td>
                            <td> </td>
                         </tr>
                        )}
                    </tbody>
                </table>
            </div>
            </Conteudo>
        </Container>

        
               
            
    )
}
