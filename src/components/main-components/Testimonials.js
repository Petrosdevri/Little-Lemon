import { Stack } from 'react-bootstrap';
import Testimonial from './Testimonial';
import Person1 from '../images/person1.png';
import Person2 from '../images/person2.png';
import Person3 from '../images/person3.png';
import Person4 from '../images/person4.png';

export default function Testimonials() {
    return (
        <article className="testimonials">
            <h2>Testimonials</h2>
            <Stack className="testimonials-container" direction="horizontal" gap={4}>
                <Testimonial image={Person1} rating="Highly recommend for a fun night out with friends or a romantic dinner with your significant other!" name="John Doe"  />
                <Testimonial image={Person2} rating="The food is mouth-watering and the service is always exceptional." name="Maria Rinaldi" />
                <Testimonial image={Person3} rating="The food at Little Lemon is always fresh and authentic. I feel like I'm dining in a small town in Italy." name="Marco Rubio" />
                <Testimonial image={Person4} rating="Little Lemon is hands down my favourite restaurant in the city!" name="Amy Robinson" />
            </Stack>
        </article>
    )
}