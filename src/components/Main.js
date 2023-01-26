import Hero from './main-components/Hero';
import Specials from './main-components/Specials';
import Testimonials from './main-components/Testimonials';
import About from './main-components/About';
import Login from './main-components/Login';
//import { Routes, Route } from "react-router-dom";
/* <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/menu" element={<Specials />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
*/

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