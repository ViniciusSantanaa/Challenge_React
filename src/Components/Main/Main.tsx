import { Link } from "react-router-dom"
import { StyledContrate, StyledContrateLink, StyledIMG, StyledMain, StyledSection, StyledSlogan } from "./Main.styled"
import PessoaDirigindo from "../../assets/mulher.dirigindo.jpg"

export const Main = () => {
    return(
        <>
        <StyledMain>
                <StyledSection>
                <StyledSlogan><strong> Seu carro é mais do que apenas um meio de transporte, é um investimento valioso. </strong></StyledSlogan>
                <StyledContrate>
                 <StyledContrateLink>
                        <Link to="" >Contrate</Link>
                 </StyledContrateLink>
                </StyledContrate>
            </StyledSection>    
            <StyledIMG src={PessoaDirigindo} alt="Imagem mulher dirigindo" />
        </StyledMain>
        </>
    )
}