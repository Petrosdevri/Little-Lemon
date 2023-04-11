import { Stack } from 'react-bootstrap';
import RestaurantInterior from '../images/restaurant-interior.png';
import RestaurantDishes from '../images/restaurant-dishes.png';

export default function About() {
    return (
        <Stack className="about" direction="horizontal" gap={2}>
            <Stack className="restaurant-info" gap={1}>
                <Stack className="title-and-subtitle2" gap={1}>
                    <h1 style={{ color: '#000' }}>Little Lemon</h1>
                    <h2 style={{ color: '#000' }}>Chicago</h2>
                </Stack>
                <h4>Amet minim mollit non deserunt<br />
                ullamco est sit aliqua dolor do amet<br />
                sint. Velit officia consequat duis enim
                velit<br /> mollit. Exercitation veniam<br />
                consequat sunt nostrud amet.<br />
                Amet minim mollit non deserunt<br />
                ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim
                velit mollit.
                </h4>
            </Stack>
            <article className="restaurant-images">
                <img src={RestaurantDishes} id="restaurant-dishes" alt="restaurant-dishes"/>
                <img src={RestaurantInterior} id="restaurant-interior" alt="restaurant-interior"/>
            </article>
        </Stack>
    )
}