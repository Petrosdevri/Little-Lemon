import MenuItem from './MenuItem';
import GreekSalad from '../../images/greek salad.png';
import Bruschetta from '../../images/bruschetta.png';
import LemonDessert from '../../images/lemon-dessert.png';

export default function Menu() {
    return (
        <article className="menu">
            <h1>Online Menu</h1>
            <article className="specials-menu">
                <MenuItem id="menu-greek-salad" image={GreekSalad} alt="greek-salad" title="Greek Salad" price="$12.99" description="Crispy lettuce, tomatoes, onions, feta cheese." />
                <MenuItem id="menu-bruschetta" image={Bruschetta} alt="bruschetta" title="Bruschetta" price="$5.99" description="Grilled bread smeared with garlic and seasoned with salt and olive oil." />
                <MenuItem id="menu-lemon-dessert" image={LemonDessert} alt="lemon-dessert" title="Lemon Dessert" price="$5.00" description="Lemon, sugar, whipping cream." />
            </article>
        </article>
    )
}