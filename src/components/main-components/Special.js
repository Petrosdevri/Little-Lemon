import GreekSalad from '../images/greek salad.png';
import Bruschetta from '../images/bruschetta.png';
import LemonDessert from '../images/lemon-dessert.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Special() {
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
        <article className="specials-menu">
            <article id="greek-salad">
                <img src={GreekSalad} alt="greek-salad" />
                <div className="title-and-price">
                    <h3>Greek Salad</h3>
                    <h6>$12.99</h6>
                </div>
                <p>The famous Greek salad of crispy<br />
                lettuce, peppers, olives and<br />
                our Chicago style feta cheese,<br />
                garnished with crunchy<br />
                garlic and rosemary croutons.
                </p>
                <br />
                <Link to="/order-online" {...hover} className="order-link">Order a delivery</Link>
            </article>
            <article id="bruschetta">
                <img src={Bruschetta} alt="bruschetta" />
                <div className="title-and-price">
                    <h3>Bruschetta</h3>
                    <h6>$5.99</h6>
                </div>
                <p>Our Bruschetta is made from<br />
                grilled bread that has been<br />
                smeared with garlic and<br />
                seasoned with salt and olive<br />
                oil.
                </p>
                <br />
                <Link to="/order-online" {...hover2} className="order-link">Order a delivery</Link>
            </article>
            <article id="lemon-dessert">
               <img src={LemonDessert} alt="lemon-dessert" />
                <div className="title-and-price">
                    <h3>Lemon Dessert</h3>
                    <h6>$5.00</h6>
                </div>
                <p>This comes straight from<br />
                grandma's recipe book, every<br />
                last ingredient has been<br />
                sourced and is as authentic<br />
                as can be imagined.
                </p>
                <br />
                <Link to="/order-online" {...hover3} className="order-link">Order a delivery</Link>
            </article>
        </article>
    )
}

/* <article className="specials-menu">
<article id="greek-salad">
<img src={GreekSalad} alt="greek-salad" />
<div className="title-and-price">
    <h3>Greek Salad</h3>
    <h6>$12.99</h6>
</div>
<p>The famous Greek salad of crispy<br />
lettuce, peppers, olives and<br />
our Chicago style feta cheese,<br />
garnished with crunchy<br />
garlic and rosemary croutons.
</p>
<br />
<Link to="/order-online" {...hover} className="order-link">Order a delivery</Link>
</article>
<article id="bruschetta">
<img src={Bruschetta} alt="bruschetta" />
<div className="title-and-price">
    <h3>Bruschetta</h3>
    <h6>$5.99</h6>
</div>
<p>Our Bruschetta is made from<br />
grilled bread that has been<br />
smeared with garlic and<br />
seasoned with salt and olive<br />
oil.
</p>
<br />
<Link to="/order-online" {...hover2} className="order-link">Order a delivery</Link>
</article>
<article id="lemon-dessert">
<img src={LemonDessert} alt="lemon-dessert" />
<div className="title-and-price">
    <h3>Lemon Dessert</h3>
    <h6>$5.00</h6>
</div>
<p>This comes straight from<br />
grandma's recipe book, every<br />
last ingredient has been<br />
sourced and is as authentic<br />
as can be imagined.
</p>
<br />
<Link to="/order-online" {...hover3} className="order-link">Order a delivery</Link>
</article>
</article>
*/