import { HeaderGlobal } from "../../Components/Header/Header.Global";
import { CadastroCliente } from "../../Components/Input/Input";

const Login: React.FC = () => {
    return(
        <>
            <HeaderGlobal />
            <CadastroCliente children={undefined} img={"home-dirigindo-login.jpg"}  />
        </>
    )
}

export default Login