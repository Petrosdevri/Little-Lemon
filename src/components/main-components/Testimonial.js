import Person1 from '../images/person1.png';

export default function Testimonial() {
    return (
        <div className="testimonial">
            <h5>Rating</h5>
            <div className="rating-data">
                <img src={Person1} alt="rating-img"/>
                <h6>Name</h6>
            </div>
            <p>Review text</p>
        </div>
    )
}