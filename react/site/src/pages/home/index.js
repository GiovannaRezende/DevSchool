import Menu from '../../components/menu';
import Cabecalho from '../../components/cabecalho';

import { Container, Conteudo } from './styled'

export default function Index() {
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
                                <input type="text"/>
                            </div>
                            <div class="form">
                                <div class="chamada"> Chamada: </div>
                                <input type="text"/>
                            </div>
                        </div>
                        <div class="inputs-dir">
                            <div class="form">
                                <div class="curso"> Curso: </div>
                                <input type="text"/>
                            </div>
                            <div class="form">
                                <div class="turma"> Turma: </div>
                                <input type="text"/>
                            </div>
                        </div>
                        <div class="cadastrar"><button>Cadastrar</button></div>
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
                        <tr class="linha-tp1"style={{width:"5em", height:"4.5px"}}>
                            <td class="linhas">1</td>
                            <td>Giovanna</td>
                            <td>18</td>
                            <td>InfoC</td>
                            <td>Informática</td>
                            <td class="botoes"><button><img src="/assets/images/editar.svg" alt=""/></button> <button><img src="/assets/images/remover.svg" alt=""/></button></td>
                            <td> </td>
                        </tr>
                        <tr class="linha-tp2" style={{width:"5em", height:"4.5px"}}>
                            <td class="linhas">2</td>
                            <td>Zacarias</td>
                            <td>23</td>
                            <td>InfoC</td>
                            <td>Informática</td>
                            <td> </td>
                        </tr>
                        <tr class="linha-tp1">
                            <td class="linhas">3</td>
                            <td>Ariana Grande</td>
                            <td>27</td>
                            <td>InfoC</td>
                            <td>Informática</td>
                            <td> </td>
                        </tr>
                        <tr class="linha-tp2">
                            <td class="linhas">4</td>
                            <td>Inês Brasil</td>
                            <td>31</td>
                            <td>InfoC</td>
                            <td>Informática</td>
                            <td> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </Conteudo>
        </Container>

        
               
            
    )
}
