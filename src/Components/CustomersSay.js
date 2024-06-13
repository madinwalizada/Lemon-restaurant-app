import React from "react";

import avatar1 from "../avatar-01.png";
import avatar2 from "../avatar-02.jpg";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    text: "Great service! Highly recommend.",
    avatar: avatar1,
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    text: "Very satisfied with the quality.",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Sam Wilson",
    rating: 5,
    text: "Exceptional experience.",
    avatar: avatar2,
  },
  {
    id: 4,
    name: "Anna Lee",
    rating: 3,
    text: "Good, but could be better.",
    avatar: avatar1,
  },
];

const CustomersSay = () => {
  return (
    <div className="customers-say">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map(({ id, name, rating, text, avatar }) => (
            <div key={id} className="testimonial">
              <img src={avatar} alt={`${name}'s avatar`} className="avatar" />
              <h3>{name}</h3>
              <div className="rating">
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomersSay;
