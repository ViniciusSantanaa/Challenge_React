import { FaArrowLeftLong } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { StyledSeta } from "./Header.Global.styled"

export const HeaderGlobal = () => {
    return(
        <>
        <StyledSeta>
            <Link to="/"><FaArrowLeftLong size="1rem" color="#6495ED"/></Link>
        </StyledSeta>
            <h1 class="Guard">Guard<strong class="IA">IA</strong>n</h1>
        </>
    )
}