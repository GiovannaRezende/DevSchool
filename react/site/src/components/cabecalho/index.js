import { Container } from './styled'

export default function Index(){
    return (
        <Container> 
        <div className="cabecalho-esq">
            <div className="foto-perfil"><img src="/assets/images/perfil.svg" alt=""/></div>
            <div className="circulo"><img src="/assets/images/circulo.svg" alt=""/></div>
            <div className="nome-prof">Olá, <span>Bruno Oliveira</span></div>
        </div>
        <div className="cabecalho-dir">
            <div className="recarregar"><button><img src="/assets/images/recarregar.svg" alt=""/></button></div>
            <div className="sair"><button><img src="/assets/images/sair.svg" alt=""/></button></div>
        </div>
        </Container>
    )
}

