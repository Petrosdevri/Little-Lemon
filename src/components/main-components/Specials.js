import { Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Special from './Special';
import GreekSalad from '../images/greek salad.png';
import Bruschetta from '../images/bruschetta.png';
import LemonDessert from '../images/lemon-dessert.png';

export default function Specials() {
    return (
        <Stack className="specials" gap={5}>
            <Stack className="warning" direction="horizontal" gap={4}>
                <h1>This weeks specials</h1>
                <Link to="/menu"><button id="online-menu">Online Menu</button></Link>
            </Stack>
            <Stack className="specials-menu" direction="horizontal" gap={2}>
                <Special id="greek-salad" image={GreekSalad} alt="greek-salad" title={"Greek Salad"} price={"$12.99"} description={`The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.`} />
                <Special id="bruschetta" image={Bruschetta} alt="bruschetta" title={"Bruschetta"} price={"$5.99"} description={`Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.`} />
                <Special id="lemon-dessert" image={LemonDessert} alt="lemon-dessert" title={"Lemon Dessert"} price={"$5.00"} description={`This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.`} />
            </Stack>
        </Stack>
    )
}