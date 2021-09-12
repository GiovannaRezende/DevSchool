import { Container } from './styled'

export default function Index() {
    return (
        <Container>
            <div className="box1">
                <div className="icone-dev"><img src="/assets/images/livro.svg" alt=""/></div>
                <div className="dev-school">Dev<span>School</span></div>
            </div>
            <div className="box2">oi</div>
            <div className="box3">
                <div className="texto-box3">Gerenciamento</div>
                <div className="seta-baixo"><img src="/assets/images/seta-baixo.svg" alt=""/></div>
            </div>
            <div className="box4">
                <div className="texto-box4">Alunos</div>
            </div>  
        </Container>
    )
}