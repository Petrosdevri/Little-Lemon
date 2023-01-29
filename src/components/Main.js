import Hero from './main-components/Hero';
import Specials from './main-components/Specials';
import Testimonials from './main-components/Testimonials';
import About from './main-components/About';

export default function Main() {
    return (
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <About />
        </main>
    );
}