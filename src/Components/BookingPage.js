import React, { useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./api";

const initialState = {
  availableTimes: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return {
        ...state,
        availableTimes: action.times,
      };
    default:
      return state;
  }
};

const BookingPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date().toISOString().split("T")[0]; // Get today's date
        const times = await fetchAPI(today);
        dispatch({ type: "UPDATE_TIMES", times });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const submitForm = async (formData) => {
    try {
      const submissionResult = await submitAPI(formData);
      if (submissionResult === true) {
        console.log("Form submitted successfully.");
      } else {
        console.log("Submission failed or returned false.");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }
  };

  return (
    <div className="container__booking--page">
      <h1>Book Your Table</h1>
      <p>Please fill out the form below to book your table.</p>
      <BookingForm
        availableTimes={state.availableTimes}
        onBooking={submitForm}
      />
    </div>
  );
};

export default BookingPage;
