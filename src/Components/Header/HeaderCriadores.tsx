import { FaArrowLeftLong } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { StyledGuardian_Criadores, StyledHeadercriadores, StyledIA_Criadores, StyledRepositorio, StyledSeta_Criadores } from "./HeaderCriadores.styled"


export const HeaderCriadores = () => {
    return(
        <StyledHeadercriadores>
            <StyledSeta_Criadores>
                <Link to="/"><FaArrowLeftLong size="1.5rem" color="#6495ED"/></Link>
            </StyledSeta_Criadores>
                <StyledGuardian_Criadores>Guard<StyledIA_Criadores>IA</StyledIA_Criadores>n</StyledGuardian_Criadores>
                <StyledRepositorio href="https://github.com/ViniciusSantanaa/Challenge_React">Repositório</StyledRepositorio>
        </StyledHeadercriadores>
    )
}