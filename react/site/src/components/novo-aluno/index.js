import { NovoAluno } from './styled'

export default function Index() {
    return (
        <NovoAluno>
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
        </NovoAluno>
    )
}