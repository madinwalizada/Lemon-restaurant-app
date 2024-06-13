import React from "react";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "./api"; // Assuming submitAPI is defined in api.js or a similar file

const Main = () => {
  const history = useNavigate();

  const submitForm = async (formData) => {
    try {
      const submissionResult = await submitAPI(formData); // Assuming submitAPI is an asynchronous function
      if (submissionResult === true) {
        history.push("/confirmed-booking"); // Navigate to booking confirmed page upon successful submission
      } else {
        console.log("Submission failed or returned false.");
        // Handle submission failure scenario here if needed
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      // Handle error scenario here if needed
    }
  };

  return (
    <div className="main-container">
      <h1>Main Component</h1>
      {/* Example form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = {
            // Example form data fields
            name: "John Doe",
            email: "john.doe@example.com",
            // Add more fields as needed
          };
          submitForm(formData); // Call submitForm function with form data
        }}
      ></form>
    </div>
  );
};

export default Main;
