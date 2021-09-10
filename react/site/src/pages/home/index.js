import Menu from '../../components/menu';
import Cabecalho from '../../components/cabecalho';
import NovoAluno from '../../components/novo-aluno'

import { Cabecalho, NovoAluno } from './styled'


import Api from '../../../service/api'
const api = new Api();

export default function Index() {
    return (

            <Cabecalho>
                <NovoAluno>
                    
                </NovoAluno>
            </Cabecalho>
            
        
    )
}
