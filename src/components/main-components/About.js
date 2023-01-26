import Restaurant from '../images/restaurant.jpg';
import Chefs from '../images/Mario and Adrian A.jpg';

export default function About() {
    return (
        <div className="about">
            <article className="restaurant-info">
                <div class="title-and-subtitle2">
                    <h1 style={{ color: 'black' }}>Little Lemon</h1>
                    <h2 style={{ color: 'black' }}>Chicago</h2>
                </div>
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
            </article>
            <article className="restaurant-images">
                <img src={Restaurant} id="restaurant-img" alt="restaurant-img"/>
                <img src={Chefs} id="chefs" alt="chefs"/>
            </article>
        </div>
    )
}