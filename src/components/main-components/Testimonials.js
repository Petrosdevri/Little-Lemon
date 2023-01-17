import Testimonial from './Testimonial';

export default function Testimonials() {
    return (
        <article className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
                <Testimonial />
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </div>
        </article>
    )
}