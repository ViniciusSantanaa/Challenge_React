import { Link } from "react-router-dom";
import { StyledGuardIAn, StyledHeader, StyledIA, StyledIA_pequeno, StyledLink, StyledLogin, StyledNav } from "./Header.styled";


export const Header = () => {
    return(
        <>
            <StyledHeader>
                <StyledNav>
                    <StyledGuardIAn>Guard<StyledIA>IA</StyledIA>n</StyledGuardIAn>
                    <StyledLink>
                        <Link to="">Sobre o produto</Link>
                    </StyledLink>
                    <StyledLink>
                        <Link to="">Cr<StyledIA_pequeno>IA</StyledIA_pequeno>dores</Link>
                    </StyledLink>
                    <StyledLogin>
                        <StyledLink>
                            <Link to="">Login</Link>
                        </StyledLink>
                    </StyledLogin>
                </StyledNav>
            </StyledHeader>
        </>
    )
}