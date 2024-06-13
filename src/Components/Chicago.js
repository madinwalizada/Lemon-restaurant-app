// src/Components/Chicago.js
import React from "react";

const Chicago = () => {
  return (
    <div className="chicago-container">
      <div className="chicago-description">
        <h2>
          Little Lemon <br />
          <span>Chicago</span>
        </h2>
        <p>
          Welcome to Little Lemon Chicago! Located in the heart of the city, our
          restaurant offers a unique dining experience that combines delicious
          food with a cozy atmosphere.
        </p>
        <p>
          Our journey began over a decade ago when our founder, John Doe, set
          out to create a place where people could enjoy fresh, healthy meals
          made from locally-sourced ingredients. Since then, Little Lemon
          Chicago has become a beloved destination for food lovers from near and
          far.
        </p>
        <p>
          Whether you're craving a hearty breakfast, a satisfying lunch, or a
          delightful dinner, we have something for everyone. Join us at Little
          Lemon Chicago and experience the taste of excellence!
        </p>
      </div>
      <div className="chicago-image">
        <img src="restaurant.jpg" alt="Little Lemon Chicago" />
      </div>
    </div>
  );
};

export default Chicago;
