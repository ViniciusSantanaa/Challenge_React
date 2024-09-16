import styled from "styled-components";

export const StyledAjuste = styled.section`
    display: flex;
    justify-content: space-around;

    @media (max-width: 430px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 745px) and (max-width) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const StyledDivCriadores = styled.div`
    background-color: #D9D9D9;
    width: 350px;
    height: 450px;
    margin-top: 80px;
    border-radius: 10px;

    @media (max-width: 430px) {
        width: 260px;
        height: 245px;
        margin-top: 80px;
        border-radius: 5px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        width: 300px;
        height: 300px;
        margin-top: 80px;
        border-radius: 10px;
    }

    @media (min-width: 745px) and (max-width) {
        
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        width: 300px;
        height: 350px;
        margin-top: 80px;
        border-radius: 10px;
    }
`

export const StyledDivImagem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 430px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        
    }

    @media (min-width: 745px) and (max-width) {
        
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        
    }
`

export const StyledImagemCriadores = styled.img`
    width: 207px;
    height: 226px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 17px;

    @media (max-width: 430px) {
        width: 150px;
        height: 120px;
        border-radius: 5px;
        margin-top: 11px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        width: 170px;
        height: 150px;
        border-radius: 10px;
        margin-top: 16px;
    }

    @media (min-width: 745px) and (max-width) {
        
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        width: 200px;
        height: 170px;
        border-radius: 10px;
        margin-top: 21px;
    }
`

export const StyledDados = styled.div`
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    line-height: 50px;

    @media (max-width: 430px) {
        font-size: 14px;
        margin-top: 17px;
        line-height: 20px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        font-size: 16px;
        margin-top: 19px;
        line-height: 35px;
    }

    @media (min-width: 745px) and (max-width) {
        
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        font-size: 18px;
        margin-top: 18px;
        line-height: 35px;
    }
`
