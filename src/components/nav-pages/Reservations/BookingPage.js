import { useReducer } from "react";
import BookingForm from './BookingForm';
import fetchAPI from "../../API";

export default function BookingPage() {
    /* let availableTimes = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
"2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM",
"5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM",
"8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM"]; */
    const updateTimes = async (date) => {
        const data = await fetchAPI(date);
        dispatch([...data]);
    };
    const initializeTimes = () => fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes, []);

    return (
        <BookingForm  availableTimes={availableTimes} updateTimes={dispatch} />
    )
}