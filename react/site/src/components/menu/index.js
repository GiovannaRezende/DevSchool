import { Menu } from './styled'

export default function Index() {
    return (
        <Menu>
            <div class="box1">
                <div class="icone-dev"><img src="/assets/images/livro.png" alt=""/></div>
                <div class="dev-school">Dev<span>School</span></div>
            </div>
            <div class="box2">oi</div>
            <div class="box3">
                <div class="texto-box3">Gerenciamento</div>
                <div class="seta-baixo"><img src="/assets/images/seta-baixo.png" alt=""/></div>
            </div>
            <div class="box4">
                <div class="texto-box4">Alunos</div>
            </div>  
        </Menu>
    )
}