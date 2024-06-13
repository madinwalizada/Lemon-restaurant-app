import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { fetchAPI } from "./api";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const BookingForm = ({ availableTimes, onBooking }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [times, setTimes] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchAvailableTimes = async () => {
      try {
        const fetchedTimes = await fetchAPI(formData.date);
        console.log("Fetched times:", fetchedTimes);
        setTimes(fetchedTimes);
      } catch (error) {
        console.error("Error fetching available times:", error);
        setTimes([]);
      }
    };

    if (formData.date) {
      fetchAvailableTimes();
    }
  }, [formData.date]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onBooking(formData); // Assuming onBooking handles form submission
      navigate("/confirmed-booking"); // Redirect upon successful booking using navigate
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="date">Choose date</FormLabel>
            <Input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              aria-label="Choose date"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="time">Choose time</FormLabel>
            <Select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              aria-label="Choose time"
            >
              {times.length > 0 ? (
                times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))
              ) : (
                <option value="">No times available</option>
              )}
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="guests">Number of guests</FormLabel>
            <Input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleInputChange}
              required
              aria-label="Number of guests"
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl>
            <FormLabel htmlFor="occasion">Occasion</FormLabel>
            <Select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleInputChange}
              required
              aria-label="Select occasion"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Select>
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button type="submit" colorScheme="blue" aria-label="On Click">
            Make Your Reservation
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
};

export default BookingForm;
