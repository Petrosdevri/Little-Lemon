import RestaurantFood from '../images/restaurant-food.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Hero() {
    function useHover(styleOnHover, styleOnNotHover) {
        const [style, setStyle] = useState(styleOnNotHover);
        const onMouseEnter = () => setStyle(styleOnHover)
        const onMouseLeave = () => setStyle(styleOnNotHover)
        return {style, onMouseEnter, onMouseLeave}
    }

    const hover = useHover({ color: '#FFFFFF'}, { color: '#000000' });

    return (
        <div className="hero">
            <div class="starter-info">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <h5>We are a family owned<br /> 
                    Mediterranean restaurant,<br /> 
                    focused on traditional<br />
                    recipes served with a modern<br />
                    twist.
                </h5>
                <Link to="/reservations" {...hover}><button id="reserve-btn">Reserve a Table</button></Link>
            </div>
            <aside>
                <img src={RestaurantFood} id="restaurant-food" alt="restaurant-food" />
            </aside>
        </div>
    );
}