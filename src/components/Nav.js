import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
    function useHover(styleOnHover, styleOnNotHover) {
        const [style, setStyle] = useState(styleOnNotHover);
        const onMouseEnter = () => setStyle(styleOnHover)
        const onMouseLeave = () => setStyle(styleOnNotHover)
        return {style, onMouseEnter, onMouseLeave}
    }

    const hover2 = useHover({ color: '#EE9972'}, { color: '#000000' });

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" {...hover2}>Home</Link>
                </li>
                <li>
                    <Link to="/about" {...hover2}>About</Link>
                </li>
                <li>
                    <Link to="/menu" {...hover2}>Menu</Link>
                </li>
                <li>
                    <Link to="/reservations" {...hover2}>Reservations</Link>
                </li>
                <li>
                    <Link to="/order-online" {...hover2}>Order Online</Link>
                </li>
                <li>
                    <Link to="/login" {...hover2}>Login</Link>
                </li>
            </ul>
        </nav>
    );
}