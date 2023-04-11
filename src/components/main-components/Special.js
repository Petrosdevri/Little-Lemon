import { useState } from 'react';
import { Card, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Special(props) {
    function useHover(styleOnHover, styleOnNotHover) {
        const [style, setStyle] = useState(styleOnNotHover);
        const onMouseEnter = () => setStyle(styleOnHover)
        const onMouseLeave = () => setStyle(styleOnNotHover)
        return {style, onMouseEnter, onMouseLeave}
    }

    const hover = useHover({ color: '#EE9972'}, { color: '#000000' });

    return (
        <Card className="special-dish" style={{ width: '265px', height: '425px', background: '#EDEFEE' }}>
            <Card.Img src={props.image} className="special-img" alt={props.alt} variant="top" />
            <Card.Body>
                <Stack className="title-and-price" direction="horizontal" gap={3}>
                    <Card.Title>{props.title}</Card.Title>
                    <h6>{props.price}</h6>
                </Stack>
                <Card.Text>{props.description}</Card.Text>
                <Link to="/order-online" className="order-link" {...hover}>Order a delivery</Link>
            </Card.Body>
        </Card>
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