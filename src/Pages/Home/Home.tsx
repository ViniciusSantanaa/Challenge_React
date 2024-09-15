import { Header } from "../../Components/Header/Header.Home";
import { Main } from "../../Components/Main/Main";
import { Texto } from "../../Components/Texto/Texto";
import { Vantagens } from "../../Components/Vantagens/Vantagens";


export default function Home() {
    return (
        <>
            <Header/>
            <Main />
            <Vantagens />
            <Texto />
        </>
    );
};