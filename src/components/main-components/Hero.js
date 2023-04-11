import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RestaurantFood from '../images/restaurant-food.jpg';

export default function Hero() {
    return (
        <Stack className="hero" direction="horizontal" gap={1}>
            <Stack className="starter-info" gap={2}>
                <Stack className="starter-headings" gap={1}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <h5>We are a family owned<br />
                        Mediterranean restaurant,<br />
                        focused on traditional<br />
                        recipes served with a modern<br />
                        twist.</h5>
                </Stack>
                <Link to="/reservations"><button id="reserve-btn">Reserve a Table</button></Link>
            </Stack>
            <img src={RestaurantFood} id="restaurant-food" alt="restaurant-food" />
        </Stack>
    );
}