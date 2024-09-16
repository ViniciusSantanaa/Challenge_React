import styled from "styled-components";

export const StyledNav = styled.nav `
    display: flex;
    justify-content: space-around;
    gap: 250px;
    color: #545454;
    text-decoration: none;
    align-items: center;

    @media (max-width: 430px) {
        gap: 15px;
        font-size: 13px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        gap: 50px;
        font-size: 13px;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        gap: 75px;
        font-size: 15px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        font-size: 20px;
        gap: 82px;
    }
`

export const StyledHeader = styled.header`
    margin-top: 39px;
    margin-left: 45px;
    margin-right: 30px;

    @media (max-width: 430px) {
        margin-top: 39px;
        margin-left: 45px;
        margin-right: 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        margin-top: 39px;
        margin-left: 45px;
        margin-right: 30px;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        margin-top: 22px;
        margin-left: 27px;
        margin-right: 43px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        margin-top: 39px;
        margin-left: 45px;
        margin-right: 30px;
    }
`

export const StyledGuardIAn = styled.h1`
    color: #545454;
    font-size: 24px;

    @media (max-width: 430px){
        color: #545454;
        font-size: 20px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        font-size: 20px;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        font-size: 24px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        font-size: 20px;
    }

`

export const StyledIA = styled.strong`
    color: #0055CF;
    font-size: 24px;

    @media (max-width: 430px){
        font-size: 20px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        font-size: 20px;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        font-size: 24px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        font-size: 20px;
    }
`

export const StyledIA_pequeno = styled.strong`
    color: #0055CF;
`

export const StyledLogin = styled.div `
    border: solid 1px #545454;
    width: 88px;
    height: 35px;
    align-items: center;
    border-radius: 10px;
    display: flex;
    justify-content: center;

    @media (max-width: 430px) {
        width: 53px;
        height: 22px;
        border-radius: 5px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        width: 53px;
        height: 22px;
        border-radius: 5px;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        width: 76px;
        height: 28px;
        border-radius: 5px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        width: 86px;
        height: 38px;
        border-radius: 5px;
    }
`

export const StyledLink = styled.nav`

    a{
        text-decoration: none;
        color: #545454;
    }
`