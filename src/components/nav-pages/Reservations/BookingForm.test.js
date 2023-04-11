import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('renders BookingForm', () => {
    render(<BookingForm />);
    const heading = screen.getByText("Make a reservation");
    expect(heading).toBeInTheDocument();
});