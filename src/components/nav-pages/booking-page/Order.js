import { Link } from "react-router-dom";
import { useState } from "react";

export default function Order() {
    function useHover(styleOnHover, styleOnNotHover) {
        const [style, setStyle] = useState(styleOnNotHover);
        const onMouseEnter = () => setStyle(styleOnHover)
        const onMouseLeave = () => setStyle(styleOnNotHover)
        return {style, onMouseEnter, onMouseLeave}
    }

    const hover = useHover({ color: '#FFFFFF'}, { color: '#000000' });

    return (
        <div class="order-online">
            <div class="order-info">
                <h1>Order Online</h1>
                <p>Make sure to order online for pickup or delivery.</p>
                <button type="submit" id="order-btn"><Link to="/reservations" {...hover}>Order Online</Link></button>
            </div>
        </div>
    );

}