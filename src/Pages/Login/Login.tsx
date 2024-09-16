import "./Login.css";
import { HeaderGlobal } from "../../Components/Header/Header.Global";
import { CadastroCliente } from "../../Components/Input/Input";
//oi ubirajara
export default function Login() {
  return (
    <div className="login-page">
      <HeaderGlobal />
      <CadastroCliente />
    </div>
  );
}
