export default function About() {
    return (
        <div className="chicago">
            <article className="restaurant-info">
                <div class="title-and-subtitle2">
                    <h1 style={{ color: 'black' }}>Little Lemon</h1>
                    <h2 style={{ color: 'black' }}>Chicago</h2>
                </div>
                <h4>Amet minim mollit non deserunt<br /> 
                ullamco est sit aliqua dolor do amet<br /> 
                sint. Velit officia consequat duis enim<br /> 
                velit mollit. Exercitation veniam consequat sunt nostrud amet.<br />
                Amet minim mollit non deserunt<br />  
                ullamco est sit aliqua dolor do amet<br /> 
                sint. Velit officia consequat duis enim<br />  
                velit mollit. 
                </h4>
            </article>
            <article className="restaurant-images">
                <img src="./images/restaurant.jpg" alt="restaurant-img"/>
                <img src="./images/restaurant.jpg" alt="restaurant-img"/>
            </article>
        </div>
    )
}