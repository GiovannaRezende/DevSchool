import styled from 'styled-components'

const Conteudo = styled.div `

.novo-aluno {
display: flex;  
flex-direction: column;
background-color: #ffffff;
padding: 1.5em;
box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
width: 76vw;
margin: 1.9em;

}

.cab-aluno {
display: flex;
flex-direction: row;
}

.barra {
padding: 0em .7em;
}

.titulo1 {
font: 700 1.6em Roboto;
color: #3C3939;
padding: 0em 0em 1em 0em;
}

.inputs {
display: flex;
flex-direction: row;
align-items: center;
}

.inputs-esq {
display: flex;
flex-direction: column; 
padding: 0em 4em 0em 0em;
}

.inputs-dir {
display: flex;
flex-direction: column; 
padding: 0em 2em 0em 0em;
}

.form {
display: flex;  
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0em 0em 1em 0em;
}

.form input {
border-radius: .3em;
border: 1px solid #A8A8A8;
width: 13em;
height: 2.2em;
outline: none;
}

.form1 {
display: flex;  
flex-direction: row;
align-items: center;
margin-left: 1.2em;
padding: 0em 0em 1em 0em;
}

.form1 input {
border-radius: .3em;
border: 1px solid #A8A8A8;
width: 13em;
height: 2.2em;
outline: none;
}

.nome {
font: 600 .8em Roboto;
color: #615858;
margin-right: .4em;
}


.curso {
font: 600 .8em Roboto;
color: #615858;
margin-right: .4em;
}

.chamada {
font: 600 .8em Roboto;
color: #615858;
}

.turma {
font: 600 .8em Roboto;
color: #615858;
margin-right: .4em;
}

.cadastrar {
align-self: flex-end;
padding: 0em 0em 1em 0em;
}

.cadastrar button {
padding: .6em 1em;
border-radius: 1.2em;
background-color: #E911C6;
border: none;
color: white;
font: 500 .8em Roboto;
cursor: pointer;
}

.cadastrar button:hover {
background-color: #FF00FF;
}

.cab-matriculados {
display: flex;  
flex-direction: row;
}

.matriculados {
    display: flex;  
    flex-direction: column;
    background-color: #ffffff;
    padding: 2em;
    margin: .3em 1.9em;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    width: 76vw;
}

.titulo2 {
    font: 700 1.6em Roboto;
    color: #3C3939;
    padding: 0em 0em .7em 0em;
}


.linha-principal {
background-color: #986CDF;
color: white;
font: 500 .8em Roboto;
padding: 1em;
align-items: center;
}

.linha-tp1 {
    background-color: #f5f5f5;
    color: #6D6868;
    font: 500 .8em Roboto;
    text-align: center;
    padding: 1em;
    
}

.linha-tp2 {
    background-color: #ffffff;
    color: #6D6868;
    font: 500 .8em Roboto;
    text-align: center;
    padding: 1em;
}

.campos {
    padding: 1em;

}

.linhas {
    padding: 1em;
}

.botoes button {
    background-color: #565656;
    border: none;
    border-radius: 2em;
    padding: .6em;
    align-items: center;
    cursor: pointer;
}

.botoes button:hover {
    background-color: #3C3939;
}

table {
    border-collapse: collapse; 
}

`

const Container = styled.div `
display: flex;  
flex-direction: row;
background-color: #f5f5f5;
height: 100vh;
width: 100%
`

export { Container, Conteudo }