import "./style.css"
import Image from "next/image";
import logo from "../../assets/imagens/logos/ies_syp_logo1.png";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header>
           <Image src={logo} alt="" className="logo"/>
           <Navbar/>
        </header>
    );
}

