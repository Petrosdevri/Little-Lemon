import Logo from "./images/Logo.svg";

export default function Footer() {
    return (
        <footer>
            <img src={Logo} alt="logo"/>
            <ul>
                <li><a href="/">Doormat</a></li>
                <li><a href="/">Navigation</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login" >Login</a></li>
            </ul>
            <ul>
                <li>Contact</li>
                <br></br>
                <li><img src="https://cdn-icons-png.flaticon.com/128/447/447031.png" alt="address" /> 2395 Maldove Way, Chicago IL</li>
                <li><img src="https://cdn-icons-png.flaticon.com/128/1/1257.png" alt="phone-number" /> (629)-243-6827</li>
                <li><img src="https://cdn-icons-png.flaticon.com/128/2099/2099199.png" alt="email" /><a href="mailto: info@littlelemon.com"> info@littlelemon.com</a></li>
            </ul>
            <ul>
                <li>Social Media Links</li>
                <br></br>
                <li><img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" alt="facebook" /><a href="https://www.facebook.com"> Little Lemon Restaurant</a></li>
                <li><img src="https://cdn-icons-png.flaticon.com/128/739/739193.png" alt="instagram" /><a href="https://www.instagram.com"> @little_lemon_restaurant</a></li>
                <li><img src="https://cdn-icons-png.flaticon.com/128/2168/2168336.png" alt="twitter" /><a href="https://www.twitter.com"> @little_lemon_restaurant</a></li>
            </ul>
        </footer>
    );
}