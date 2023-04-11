import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function BookingForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    useEffect(() => {
        if (Array.isArray(props.availableTimes)) {
        setFinalTime(props.availableTimes.map((time) => <option>{time}</option>));
        }
    }, [props.availableTimes]);
    const [finalTime, setFinalTime] = useState([]);

    let generateTimeOptions = (times) => {
        return times.map((time) => <option>{time}</option>);
    };

    const handleDateChange = e => {
        setDate(e.target.value);
        const date = new Date(e.target.value);
        props.updateTimes(date);
        setFinalTime(generateTimeOptions(props.availableTimes));
    };

    const errorHandler = () => {
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        const phoneRegex = /^\d{10}$/;

        if (name === "" || !emailRegex.test(email) || !phoneRegex.test(phone) || date === "" || guests === "") {
            return false;
        } else {
            return true;
        }
    };

    return (
        <div className="booking-form">
            <div className="booking-form-img">
                <h1>Make a reservation</h1>
                <p>Fill out the form below to make a reservation.</p>
            </div>
            <Form className="reservations-form">
                <Form.Control type="full-name" id="full-name" onChange={e => setName(e.target.value)} placeholder="Full Name" value={name} required />
                <Form.Control type="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="Email" value={email} required />
                <Form.Control type="tel" id="phone" onChange={e => setPhone(e.target.value)} placeholder="Phone" value={phone} required />
                <Form.Control type="date" id="res-date" onChange={handleDateChange} value={date} required />
                <Form.Select id="res-time">
                    {finalTime}
                </Form.Select>
                <Form.Control type="number" id="guests" minLength={1} maxLength={15} onChange={e => setGuests(e.target.value)} placeholder="1" value={guests} required />
                <Form.Select id="occasion" required>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Other">Other</option>
                </Form.Select>
                <Form.Control type="text" placeholder="Other occasion" id="other-occasion" />
                <Button type="submit" disabled={!errorHandler()} id="submit-form-btn"><Link to="/reservations/confirmed" style={{ "color": "#000"}}>Make Your reservation</Link></Button>
            </Form>
        </div>
    );
}