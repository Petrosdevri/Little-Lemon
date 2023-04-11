import { Stack } from 'react-bootstrap';
import RestaurantInterior from '../../images/restaurant-interior.png';
import RestaurantDishes from '../../images/restaurant-dishes.png';

export default function About() {
    return (
        <Stack className="about-page" direction="horizontal" gap={4}>
            <Stack className="restaurant-cv" gap={1}>
                <Stack className="cv" gap={1}>
                    <h1 style={{ color: 'black' }}>Little Lemon</h1>
                    <h2 style={{ color: 'black' }}>Chicago</h2>
                </Stack>
                <h4>Amet minim mollit non deserunt<br />
                ullamco est sit aliqua dolor do amet<br />
                sint. Velit officia consequat duis enim<br />
                velit mollit. Exercitation veniam<br />
                consequat sunt nostrud amet.<br />
                Amet minim mollit non deserunt<br />
                ullamco est sit aliqua dolor do amet<br />
                sint. Velit officia consequat duis enim<br />
                velit mollit.
                </h4>
            </Stack>
            <article className="restaurant-imgs">
                <img src={RestaurantDishes} id="restaurant-dishes" alt="restaurant-dishes"/>
                <img src={RestaurantInterior} id="restaurant-interior" alt="restaurant-interior"/>
            </article>
        </Stack>
    );
}