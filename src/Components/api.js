// api.js

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = async (date) => {
  try {
    // Local generation of available times based on date
    let result = [];
    let random = seededRandom(new Date(date).getDate()); // Use date to seed random

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }

    return result;
  } catch (error) {
    console.error("Error fetching available times:", error);
    return []; // Return an empty array or handle error appropriately
  }
};

export const submitAPI = async (formData) => {
  try {
    // Example of submitting form data to a remote API
    const response = await fetch("https://api.example.com/submitFormData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Failed to submit form data");
    }
    const data = await response.json();
    return data.success; // Assuming API returns success status
  } catch (error) {
    console.error("Error submitting form data:", error);
    return false; // Return false or handle error appropriately
  }
};
