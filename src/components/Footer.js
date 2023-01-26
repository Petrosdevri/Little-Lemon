import Logo from "../images/Logo.svg";

export default function Footer() {
    return (
        <footer>
            <img src={Logo} alt="logo"/>
            <ul>
                <li><a href="#">Doormat</a></li>
                <li><a href="#">Navigation</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <ul>
                <li><a href="#">Contact</a></li>
                <br></br>
                <li><a href="#">Address</a></li>
                <li><a href="#">Phone Number</a></li>
                <li><a href="#">Email</a></li>
            </ul>
            <ul>
                <li><a href="#">Social Media Links</a></li>
                <br></br>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
        </footer>
    );
}