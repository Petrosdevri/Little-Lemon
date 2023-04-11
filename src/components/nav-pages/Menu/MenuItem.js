import { useState } from 'react';
import { Card, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function MenuItem(props) {
    function useHover(styleOnHover, styleOnNotHover) {
        const [style, setStyle] = useState(styleOnNotHover);
        const onMouseEnter = () => setStyle(styleOnHover)
        const onMouseLeave = () => setStyle(styleOnNotHover)
        return {style, onMouseEnter, onMouseLeave}
    }

    const hover = useHover({ color: '#EE9972'}, { color: '#000000' });

    return(
        <Card className="menu-dish" style={{ width: '265px', height: '425px', background: '#EDEFEE' }}>
            <Card.Img src={props.image} alt={props.alt} variant="top" />
            <Card.Body>
                <Stack className="title-and-price" direction="horizontal" gap={3}>
                    <Card.Title>{props.title}</Card.Title>
                    <h6>{props.price}</h6>
                </Stack>
                <Card.Text>{props.description}</Card.Text>
                <Link to="/order-online" className="order-link" {...hover}>Order a delivery</Link>
            </Card.Body>
        </Card>
    );
}