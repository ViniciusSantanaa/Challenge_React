import styled from "styled-components";

export const StyledSectionProduto = styled.section`
    width: 1040px;
    align-items: center;
    margin-left: 130px;

    @media (max-width: 430px) {
        width: 330px;
        margin-left: 10px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        width: 500px;
        margin-left: 29px;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        width: 650px;
        margin-left: 68px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        width: 980px;
        margin-left: 53px;
    }
`

export const StyledSobreProduto = styled.p`
    color: #545454;
    font-size: 32px;
    margin-top: 50px;

    @media (max-width: 430px) {
        font-size: 20px;
    }

    @media (min-width: 431px) and (max-width: 744px) {
        font-size: 32px;
    }

    @media (min-width: 745px) and (max-width: 834px) {
        font-size: 36px;
    }

    @media (min-width: 835px) and (max-width: 1024px) {
        font-size: 40px;
    }
`

