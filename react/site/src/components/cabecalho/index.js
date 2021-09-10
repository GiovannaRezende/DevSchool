import { Cabecalho } from './styled'

export default function Index1(){
    return (
        <Cabecalho> 
        <div class="cabecalho-esq">
            <div class="foto-perfil"><img src="/assets/images/perfil.svg" alt=""/></div>
            <div class="circulo"><img src="/assets/images/circulo.svg" alt=""/></div>
            <div class="nome-prof">Olá, <span>Bruno Oliveira</span></div>
        </div>
        <div class="cabecalho-dir">
            <div class="recarregar"><button><img src="/assets/images/recarregar.svg" alt=""/></button></div>
            <div class="sair"><button><img src="/assets/images/sair.svg" alt=""/></button></div>
        </div>
        </Cabecalho>
    )
}

