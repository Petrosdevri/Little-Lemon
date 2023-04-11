import { Button, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
/*import HomePage from "../main-components/HomePage";
import Reservations from "./Reservations";
import Order from "../Order/Order";*/

export default function ConfirmedBooking() {
    return (
        <Stack className="confirmed-booking" gap={4}>
            <h1>Thank you for your reservation!</h1>
            <p>We look forward to seeing you soon.</p>
            <Stack direction="horizontal" gap={2}>
                <Link to="/"><Button type="submit" id="submit-form-btn">Home</Button></Link>
                <Link to="/reservations"><Button type="submit" id="submit-form-btn">Make another reservation</Button></Link>
                <Link to="/order-online"><Button type="submit" id="submit-form-btn">Order online</Button></Link>
            </Stack>
        </Stack>
    )
}