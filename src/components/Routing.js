import { Routes, Route } from "react-router-dom";

export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/menu" element={<Specials />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}