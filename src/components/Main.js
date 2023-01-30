import HomePage from "./main-components/HomePage";
import About from "./nav-pages/About";
import Menu from "./nav-pages/Menu";
import Reservations from "./nav-pages/booking-page/Reservations";
import Order from "./nav-pages/booking-page/Order";
import Login from "./nav-pages/Login";
import { Routes, Route } from "react-router-dom";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order-online" element={<Order />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}