//import { Link } from "react-router-dom";
/* <Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/menu">Menu</Link>
<Link to="/reservations">Reservations</Link>
<Link to="/order-online">Order Online</Link>
<Link to="/login">Login</Link>
*/

export default function Nav() {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}