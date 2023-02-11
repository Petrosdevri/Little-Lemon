import Person1 from '../images/person1.png';

export default function Testimonial() {
    return (
        <div className="testimonial">
            <img src={Person1} alt="rating-img"/>
            <h5>Rating</h5>
            <blockquote><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em></blockquote>
            <h6>John Doe</h6>
        </div>
    )
}