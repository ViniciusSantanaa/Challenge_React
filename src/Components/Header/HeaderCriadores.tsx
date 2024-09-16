import { FaArrowLeftLong } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { StyledGuardian_Global, StyledIA_Global, StyledSeta } from "./Header.Global.styled"
import { StyledHeadercriadores, StyledRepositorio } from "./HeaderCriadores.styled"


export const HeaderCriadores = () => {
    return(
        <StyledHeadercriadores>
            <StyledSeta>
                <Link to="/"><FaArrowLeftLong size="1.5rem" color="#6495ED"/></Link>
            </StyledSeta>
                <StyledGuardian_Global>Guard<StyledIA_Global>IA</StyledIA_Global>n</StyledGuardian_Global>
                <StyledRepositorio href="https://github.com/ViniciusSantanaa/Challenge_React">Repositório</StyledRepositorio>
        </StyledHeadercriadores>
    )
}