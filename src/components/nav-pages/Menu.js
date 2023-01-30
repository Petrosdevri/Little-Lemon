import GreekSalad from '../images/greek-salad.jpg';
import Bruschetta from '../images/bruschetta.svg';
import LemonDessert from '../images/lemon-dessert.jpg';

export default function Menu() {
    return (
        <article className="menu" style={{}}>
            <h1>Online Menu</h1>
            <article className="specials-menu">
                <article id="greek-salad">
                    <img src={GreekSalad} alt="greek-salad" />
                    <div className="title-and-price">
                        <h3>Greek Salad</h3>
                        <h6>$12.99</h6>
                    </div>
                    <p>The famous Greek salad of<br />
                    crispy lettuce, peppers, olives<br />
                    and our Chicago style feta<br />
                    cheese, garnished with<br />
                    crunchy garlic and rosemary<br />
                    croutons.
                    </p>
                    <br />
                    <h5>Order a delivery</h5>
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
                    <h5>Order a delivery</h5>
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
                    <h5>Order a delivery</h5>
                </article>
            </article>
        </article>
    )
}