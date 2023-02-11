import { useState } from "react";

export default function BookingForm(props) {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [otherOccasion, setOtherOccasion] = useState("");
    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option>{times}</option>)
    );

    function handleDateChange(e) {
        setDate(e.target.value);
        var stringify = e.target.value;
        const date = new Date(stringify);
        props.updateTimes(date);
        setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
    }

    return (
        <div className="booking-form">
            <div className="booking-form-img">
                <h1>Make a reservation</h1>
                <p>Fill out the form below to make a reservation.</p>
            </div>
            <form className="reservations-form">
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDateChange} required/>
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" required>
                    {finalTime}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" minLength={1} maxLength={10} id="guests" value={guests} onChange={e => setGuests(e.target.value)} required/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)} required>
                    <option selected>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>
                <label htmlFor="other-occasion">If you selected Other, please specify your occasion:</label>
                <input type="text" placeholder="Other occasion" id="other-occasion" value={otherOccasion} onChange={e => setOtherOccasion(e.target.value)}/>
                <input type="submit" value="Make Your reservation" id="submit-form-btn"/>
            </form>
        </div>
    );
}