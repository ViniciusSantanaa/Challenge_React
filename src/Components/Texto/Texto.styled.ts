import styled from "styled-components";

export const StyledConteudo_Seguro = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const StyledTexto_Seguro = styled.p`
    color: #545454;
    font-size: 34px;
    width: 632px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin-left: 56px;

    @media (max-width: 430px) {
        font-size: 15px;
        width: 170px;
        margin-left: 24px;
        margin-top: 35px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        font-size: 20px;
        width: 250px;
        margin-left: 35px;
        margin-top: 59px;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        font-size: 25px;
        width: 340px;
        margin-left: 59px;
        margin-top: 72px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        font-size: 32px;
        width: 400px;
        margin-left: 40px;
        margin-top: 77px;
    }
`

export const StyledCarro = styled.img`
    width: 467.15px;
    height: 376px;

    @media (max-width: 430px) {
        width: 180px;
        height: 148.39px;
        margin-top: 75px;        
    }

    @media (min-width: 431px) and (max-width: 744px) {
        width: 180px;
        height: auto;
        margin-top: 75px;
    }
    
    @media (min-width: 745px) and (max-width: 834px) {
        width: 310px;
        height: 281.71px;
        margin-top: 72px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        width: 400px;
        height: 352px;
        margin-top: 75px;
    }
`