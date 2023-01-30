import { useState } from "react";

export default function BookingForm() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    return (
        <form style="display: grid; max-width: 200px; gap: 20px">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChnage={e => setDate(e.target.value)} required/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={time} onChnage={e => setTime(e.target.value)} required>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" minLength="1" maxLength="10" id="guests" value={guests} onChnage={e => setGuests(e.target.value)} required/>
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChnage={e => setOccasion(e.target.value)} required>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    );
}