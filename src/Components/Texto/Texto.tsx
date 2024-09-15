import { StyledCarro, StyledConteudo_Seguro, StyledTexto_Seguro } from "./Texto.styled"
import Carro from "../../assets/civic-site.png"

export const Texto = () => {
    return(
        <StyledConteudo_Seguro>
        <section>
            <StyledTexto_Seguro>Com nosso Seguro Automotivo, você pode ter a tranquilidade de saber que seu investimento está protegido contra imprevistos que poderiam comprometer seu valor. Preserve o valor do seu veículo e dirija com confiança sabendo que estamos cuidando dele.</StyledTexto_Seguro>
        </section>
        <StyledCarro src={Carro} alt="Imagem de Civic" />
    </StyledConteudo_Seguro>
    )
}