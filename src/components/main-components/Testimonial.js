export default function Testimonial(props) {
    return (
        <div className="testimonial">
            <img src={props.image} alt="rating-img"/>
            <blockquote><em>{props.rating}</em></blockquote>
            <h6>{props.name}</h6>
        </div>
    )
}