import styled from 'styled-components'

const NovoAluno = styled.div`
display: flex;  
flex-direction: column;
background-color: #ffffff;
padding: 1.5em;
margin: 2em 1.8em;
box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);

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
`

export { NovoAluno }