import styled from 'styled-components'

const Container = styled.div`
background-color: #2B3031;
padding: 1em 0em;
position: sticky;
top: 0px;
    
    .box1 {
        display: flex;  
        flex-direction: row;
        padding: .6em 4em;
        align-items: center;
    }
    
    .icone-dev {
    padding: 0em .4em;
    }
    
    .dev-school {
    color: #EA10C7;
    font: 700 1em Roboto;
    }
    
    .dev-school span {
        color: white;
        font: 700 1em Roboto;
    }
    
    .box2 {
        background-color: #262626;
        padding: .7em 2em;
        color: #262626;
    }
    
    .box3 {
        display: flex;  
        flex-direction: row;
        padding: .9em 2em;
        align-items: center;
        font: 500 1em Roboto;
        justify-content:space-between;
    }
    
    .texto-box3 {
        color: white;
    }
    
    
    .box4 {
        display: flex;  
        flex-direction: row;
        background-color: #fff;
        padding: .9em 2em;
        font: 600 1em Roboto;
        box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    }
    
    .texto-box4 {
    color: #1a1a1a;
    }
`

export { Container }