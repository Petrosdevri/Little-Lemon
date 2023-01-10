export default function Specials() {
    return (
        <div className="specials">
            <article className="warning">
                <h1>This weeks specials</h1>
                <button id="online-menu">
                    <h5>Online Menu</h5>
                </button>
            </article>
            <article className="specials-menu">
                <article id="greek-salad">
                    <img src="./images/greek-salad.jpg" alt="greek-salad" />
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
                    <img src="./images/bruschetta.svg" alt="bruschetta" />
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
                    <img src="./images/lemon dessert.jpg" alt="lemon-dessert" />
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
        </div>
    )
}