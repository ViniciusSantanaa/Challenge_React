import styled from "styled-components";

export const StyledContainerInput = styled.section`
    background-color: #FFFF;
    width: 445px;
    height: 500px;
    border-radius: 5%;
    background-image: none;
    position: fixed;
    right: 50px;

    @media (max-width: 430px) {
        width: 350px;
        height: 470px;
        border-radius: 5px;
        right: 0;
        margin: 50px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        width: 390px;
        height: 500px;
        border-radius: 10px;
        margin-top: 174px;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        width: 390px;
        height: 500px;
        border-radius: 10px;
        margin-top: 174px;
    }

    
`

export const StyledContainerConteudo = styled.h1`
    background-image: none;
    color: #545454;
    margin-top: 20px;
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 32px;
`

export const StyledForm = styled.form`
    background-image: none;
`

export const StyledDivLabels = styled.div`
    background-image: none;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledAjusteLabel = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: none;
`

export const StyledLabelCPF = styled.input`
    background-image: none;
    background-color: #D9D9D9;
    width: 368px;
    height: 55px;
    display: flex;
    justify-content: center;
    border: none;
    margin-top: 75px;
    font-size: 20px;
    border-radius: 5px;

    @media (max-width: 430px) {
        width: 284px;
        height: 50px;
        margin-top: 78px;
        font-size: 24px;
    }
`

export const StyledLabelSenha = styled.input`
    background-image: none;
    background-color: #D9D9D9;
    width: 368px;
    height: 55px;
    border: none;
    margin-top: 75px;
    font-size: 20px;
    border-radius: 5px;

    @media (max-width: 430px) {
        width: 284px;
        height: 50px;
        margin-top: 78px;
        font-size: 24px;
    }
`

export const StyledButton = styled.button`
    background-image: none;
    background-color: #6397E1;
    color: #FFF;
    width: 368px;
    height: 55px;
    margin-top: 75px;
    font-size: 20px;
    text-align: left;
    border: none;
    border-radius: 5px;

    @media (max-width: 430px) {
        width: 284px;
        height: 50px;
        margin-top: 78px;
        font-size: 24px;
    }
`

