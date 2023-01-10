export default function Hero() {
    return (
        <div className="hero">
            <div class="starter-info">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <h4>We are a family owned<br /> 
                    Mediterranean restaurant,<br /> 
                    focused on traditional<br />
                    recipes served with a modern<br />
                    twist.
                </h4>
                <br />
                <button id="reserve-btn">
                    <h3>Reserve a Table</h3>
                </button>
            </div>
            <aside>
                <img src='./images/restaurantfood.jpg' id="restaurantt-food" alt="restaurant-food" />
            </aside>
        </div>
    );
}