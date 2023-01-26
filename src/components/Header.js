import Logo from "./images/Logo.svg";
import Hamburger from "./images/icon _hamburger menu.svg";
import Nav from './Nav';

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="logo" />
            <Nav />
            <img src={Hamburger} alt="hamburger menu" />
        </header>
    );
}