import styled from "styled-components";

export const StyledSeta_Criadores = styled.nav`
    margin-left: 50px;
`

export const StyledGuardian_Criadores = styled.h1`
    font-size: 36px;

    @media (max-width: 430px) {
        font-size: 24px;
    }
`

export const StyledIA_Criadores = styled.strong`
    font-size: 36px;
    color: #0055CF;

    @media (max-width: 430px) {
        font-size: 24px;
    }
`

export const StyledHeadercriadores = styled.header`
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    gap: 100px;
    align-items: baseline;
    width: 100vw;

    @media (max-width: 430px) {
        gap: 50px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        gap: 50px;
    }

    @media (min-width: 745px) and (max-width) {
        
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        gap: 212px;
    }
`

export const StyledRepositorio = styled.a`
    color: black;
    text-decoration: none;
    display: flex;
    justify-content: right;
    margin-right: 20px;
    border: solid 1px black;
    font-size: 20px;
    border-radius: 10px;
    width: 140px;
    height: 44px;
    align-items: center;
    justify-content: center;

    @media (max-width: 430px) {
        
    }

    @media (min-width: 431px) and (max-width: 744px) {
        
    }

    @media (min-width: 745px) and (max-width) {
        
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        
    }
`