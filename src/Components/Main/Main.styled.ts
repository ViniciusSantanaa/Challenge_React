import styled from "styled-components";

export const StyledMain = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0%;
`

export const StyledSection = styled.section`
    width: 632px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin-left: 56px;

    @media (max-width: 430px) {
        margin-left: 15px;
        height: 80px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        margin-left: 15px;
        margin-top: 40px;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        margin-left: 80px;
        margin-top: 50px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        margin-left: 15px;
        height: 80px;
    }

`

export const StyledSlogan = styled.h2`
    color: #545454;
    margin-top: 133px;
    font-size: 36px;
    width: 632px;
    height: 130px;

    @media (max-width: 430px) {
        margin-top: 0;
        font-size: 13px;
        width: 150px;
        height: 80px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        margin-top: 0;
        font-size: 22px;
        width: 200px;
        height: 156px;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        margin-top: 0;
        font-size: 32px;
        width: 357px;
        height: 156px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        margin-top: 0;
        font-size: 36px;
        width: 414px;
        height: 188px;
    }
`

export const StyledContrate = styled.div`
    background-color: #545454;
    color: white;
    width: 88px;
    height: 35px;
    align-items: center;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-left: 247px;
    width: 142px;
    height: 55px;
    font-size: 20px;

    @media (max-width: 430px) {
        width: 72px;
        height: 30px;
        border-radius: 5px;
        margin-left: 73px;
        font-size: 11px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        width: 114px;
        height: 50px;
        border-radius: 5px;
        margin-left: 73px;
        font-size: 14px;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        width: 114px;
        height: 41px;
        border-radius: 10px;
        margin-left: 120px;
        font-size: 15px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        margin-top: 0;
        font-size: 36px;
        width: 414px;
        height: 188px;
    }
`

export const StyledContrateLink = styled.nav`
    a{
        text-decoration: none;
        color: #ffff;
    }
`

export const StyledIMG = styled.img`
    width: 600px;
    height: 400px;
    margin-right: 30px;
    margin-top: 155px;
    border-radius: 10px;

    @media (max-width: 430px) {
        width: 215px;
        height: 144px;
        margin-right: 30px;
        margin-top: 40px;
        border-radius: 5px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        width: 250px;
        height: auto;
        margin-top: 40px;
        margin-right: 0;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        width: 313.54px;
        height: 210px;
        margin-top: 40px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        width: 400px;
        height: 267.91px;
        margin-right: 30px;
        margin-top: 40px;
        border-radius: 5px;
    }
`