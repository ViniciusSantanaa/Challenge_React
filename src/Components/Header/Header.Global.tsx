import { FaArrowLeftLong } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { StyledGuardian_Global, StyledIA_Global, StyledSeta } from "./Header.Global.styled"


export const HeaderGlobal = () => {
    return(
        <>
        <StyledSeta>
            <Link to="/"><FaArrowLeftLong size="1.5rem" color="#6495ED"/></Link>
        </StyledSeta>
            <StyledGuardian_Global>Guard<StyledIA_Global>IA</StyledIA_Global>n</StyledGuardian_Global>
        </>
    )
}