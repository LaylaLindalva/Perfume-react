import styled from 'styled-components'


export const DivPrincipal = styled.div`
    display: flex;
    width: 600px;
    height: 470px;
`

export const Img = styled.img`
    width: 300px;
    height: 470px;
    border-radius: 10px 0px 0px 10px;
`

export const DivImg = styled.div`
    
`

export const DivConte = styled.div`
    background-color: hsl(0, 0%, 100%);
    border-radius: 0px 10px 10px 0px;
    padding: 0px 30px 0px 30px;
    
`

export const TextoInicio = styled.p`
    font-family: "Montserrat", sans-serif;
    opacity: 80%;
    padding: 10px 0px 0px 0px;
`
export const TituloPrincipal = styled.h1`
    font-family: "Fraunces", serif;
` 

export const Texto = styled.p`
    font-family: "Montserrat", sans-serif;
    opacity: 80%;
    line-height: 25px;
    margin: 0px;
`

export const DivPreco = styled.div`
    display: flex;
    align-items: center;
`

export const Preco = styled.h1`
    font-family: "Fraunces", serif;
    color: hsl(158, 36%, 37%);
`

export const Span = styled.span`
    font-family: "Montserrat", sans-serif;
    opacity: 80%;
    padding: 20px;
    font-size: 14px;
    text-decoration: line-through;
`

export const Button = styled.button`
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    background-color: green;
    padding: 15px;
    border-radius: 8px;
    width: 250px;
    border: 0px;
    color: hsl(0, 0%, 100%);
    transition: 1s;
    cursor: pointer;
    &:hover{
        background-color: hsl(212, 21%, 14%);
    }
    
`

export const ButtonImg = styled.img`
    padding: 0px 5px 0px 0px;
`