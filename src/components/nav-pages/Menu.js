import GreekSalad from '../images/greek salad.png';
import Bruschetta from '../images/bruschetta.png';
import LemonDessert from '../images/lemon-dessert.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Menu() {
    function useHover(styleOnHover, styleOnNotHover) {
        const [style, setStyle] = useState(styleOnNotHover);
        const onMouseEnter = () => setStyle(styleOnHover)
        const onMouseLeave = () => setStyle(styleOnNotHover)
        return {style, onMouseEnter, onMouseLeave}
    }

    const hover = useHover({ color: '#EE9972'}, { color: '#000000' });
    const hover2 = useHover({ color: '#EE9972'}, { color: '#000000' });
    const hover3 = useHover({ color: '#EE9972'}, { color: '#000000' });

    return (
        <article className="menu">
            <h1>Online Menu</h1>
            <article className="specials-menu">
                <article id="menu-greek-salad">
                    <img src={GreekSalad} alt="greek-salad" />
                    <div className="title-and-price">
                        <h3>Greek Salad</h3>
                        <h6>$12.99</h6>
                    </div>
                    <p>Crispy lettuce, tomatoes, onions, feta cheese.</p>
                    <br />
                    <Link to="/order-online" {...hover} className="menu-order-link">Order a delivery</Link>
                </article>
                <article id="menu-bruschetta">
                    <img src={Bruschetta} alt="bruschetta" />
                    <div className="title-and-price">
                        <h3>Bruschetta</h3>
                        <h6>$5.99</h6>
                    </div>
                    <p>Grilled bread smeared with garlic and
                    seasoned with salt and olive oil.</p>
                    <br />
                    <Link to="/order-online" {...hover2} className="menu-order-link">Order a delivery</Link>
                </article>
                <article id="menu-lemon-dessert">
                <img src={LemonDessert} alt="lemon-dessert" />
                    <div className="title-and-price">
                        <h3>Lemon Dessert</h3>
                        <h6>$5.00</h6>
                    </div>
                    <p>Lemon, sugar, whipping cream</p>
                    <br />
                    <Link to="/order-online" {...hover3} className="menu-order-link">Order a delivery</Link>
                </article>
            </article>
        </article>
    )
}