import { StyledAjuste, StyledDados, StyledDivCriadores, StyledDivImagem, StyledImagemCriadores } from "./LayoutCriadores.styled"
import Vinicius from '../../assets/imagem.vinicius.jpg';
import Felipe from '../../assets/imagem.felipafa.jpeg';
import Pedro from '../../assets/imagem.gemeo.jpeg';


export const LayoutCriadores = () => {
    return(
        <StyledAjuste>
        <StyledDivCriadores>
            <StyledDivImagem>
                <StyledImagemCriadores src={Felipe} alt="imagem-felipe" />
            </StyledDivImagem>
            <StyledDados>
                <ul>
                 <li>Felipe Rosa Peres</li>
                 <li>RM - 557636</li>
                 <li>1TDSPX</li>
                </ul>
            </StyledDados>
        </StyledDivCriadores>
        <StyledDivCriadores>
            <StyledDivImagem>
                <StyledImagemCriadores src={Vinicius} alt="imagem-Vinicius"  />
            </StyledDivImagem>
            <StyledDados>
                <ul>
                    <li>Vinicius de Souza Sant Anna</li>
                    <li>RM - 556841</li>
                    <li>1TDSPX</li>
                   </ul>
            </StyledDados>
        </StyledDivCriadores>
        <StyledDivCriadores>
            <StyledDivImagem>
                <StyledImagemCriadores src={Pedro} alt="imagem-Pedro"  />
            </StyledDivImagem>
            <StyledDados>
                <ul>
                    <li>Pedro Henrique Souza</li>
                    <li>RM - 555533</li>
                    <li>1TDSPX</li>
                   </ul>
            </StyledDados>
        </StyledDivCriadores>
    </StyledAjuste>
    )
}