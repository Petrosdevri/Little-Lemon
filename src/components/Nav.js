import { useState } from "react";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Logo from "./images/Logo.svg";

export default function Navigation() {
    function useHover(styleOnHover, styleOnNotHover) {
        const [style, setStyle] = useState(styleOnNotHover);
        const onMouseEnter = () => setStyle(styleOnHover);
        const onMouseLeave = () => setStyle(styleOnNotHover);
        return {style, onMouseEnter, onMouseLeave};
    }

    const hover = useHover({ color: '#EE9972'}, { color: '#000000' });
    const hover2 = useHover({ color: '#EE9972'}, { color: '#000000' });
    const hover3 = useHover({ color: '#EE9972'}, { color: '#000000' });
    const hover4 = useHover({ color: '#EE9972'}, { color: '#000000' });
    const hover5 = useHover({ color: '#EE9972'}, { color: '#000000' });
    const hover6 = useHover({ color: '#EE9972'}, { color: '#000000' });

    return (
        <Navbar collapseOnSelect fixed='top' expand='sm' className="navigation">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end">
                        <img src={Logo} alt="logo" id="logo"/>
                        <li><Link to="/" {...hover}>Home</Link> </li>
                        <li><Link to="/about" {...hover2}>About</Link></li>
                        <li><Link to="/menu" {...hover3}>Menu</Link></li>
                        <li><Link to="/reservations" {...hover4}>Reservations</Link></li>
                        <li><Link to="/order-online" {...hover5}>Order Online</Link></li>
                        <li><Link to="/login" {...hover6}>Login</Link></li>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}