import styled from 'styled-components'

const Container = styled.div`
display: flex;  
flex-direction: row;
background-color: #ffffff;
padding: .8em;
justify-content: space-between;
margin: 0em 0em 1em 0em;
box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
width: 100%;

.cabecalho-esq {
    display: flex;  
    flex-direction: row;
    align-items: center;
}

.foto-perfil img {
padding: 0em .3em;
}

.circulo img {
    position:absolute; 
    top: 10px; 
    left: 19em;
}

.nome-prof {
    font: 500 0.8em Roboto;
    color: #615858;
}

.nome-prof span {
    font: 800 1em Roboto;
    color: #615858;
}

.cabecalho-dir {
    display: flex;  
    flex-direction: row;
}

.recarregar button {
    background-color: #986CDF;
    border-radius: 3em;
    border: none;
    padding: .6em .6em;
    margin-right: .3em;
    cursor: pointer;
}

.recarregar button:hover {
    background-color: #AC05D2;
}

.sair button {
    background-color: #986CDF;
    border-radius: 3em;
    border: none;
    padding: .4em .6em;
    cursor: pointer;
    justify-content: center;
}

.sair button:hover {
    background-color: #AC05D2;
}
`

export { Container }
