import { Ri24HoursFill } from "react-icons/ri"
import { StyledContainer, StyledFrase_Icone, StyledFundo, StyledIA_Vantagens, StyledItem, StyledVantagem } from "./Vantagens.styled"
import { MdOutlineSpeed } from "react-icons/md"
import { FaWrench } from "react-icons/fa"
import { FaBrazilianRealSign } from "react-icons/fa6"

export const Vantagens = () => {
    return(
        <>
    <StyledFundo>
        <StyledVantagem>Guard<StyledIA_Vantagens>IA</StyledIA_Vantagens>n e suas vantagens</StyledVantagem>
        <StyledContainer>
            <StyledItem>
                <Ri24HoursFill size="3rem" color="#6495ED"/>
                <StyledFrase_Icone>Obter assistência a qualquer hora do dia ou da noite</StyledFrase_Icone>
            </StyledItem>
            <StyledItem>
                <FaBrazilianRealSign  size="3rem" color="#6495ED"/>
                <StyledFrase_Icone>Evitar reparos mais caros no futuro ao resolver problemas menores rapidamente</StyledFrase_Icone>
            </StyledItem>
            <StyledItem>
                <MdOutlineSpeed size="3rem" color="#6495ED"/>
                <StyledFrase_Icone>Identificar rapidamente problemas potenciais em seus veículos</StyledFrase_Icone>
            </StyledItem>
            <StyledItem>
                <FaWrench size="3rem" color="#6495ED"/>
                <StyledFrase_Icone>Orientações sobre como realizar manutenção em seu veículo</StyledFrase_Icone>
            </StyledItem>
        </StyledContainer>
    </StyledFundo>
        </>
    )
}