import HomePage from "./main-components/HomePage";
import About from "./nav-pages/About/About";
import Menu from "./nav-pages/Menu/Menu";
import Reservations from "./nav-pages/Reservations/Reservations";
import ConfirmedBooking from "./nav-pages/Reservations/ConfirmedBooking";
import Order from "./nav-pages/Order/Order";
import Login from "./nav-pages/Login/Login";
import { Routes, Route } from "react-router-dom";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/reservations/confirmed" element={<ConfirmedBooking />} />
            <Route path="/order-online" element={<Order />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}