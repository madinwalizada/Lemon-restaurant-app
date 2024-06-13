import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter
import BookingForm from "./Components/BookingForm";

test("Renders the BookingForm heading", () => {
  render(
    <MemoryRouter>
      <BookingForm />
    </MemoryRouter>
  );
  const headingElement = screen.getByText("Choose date"); // Adjust the text according to your actual heading
  expect(headingElement).toBeInTheDocument();
});
