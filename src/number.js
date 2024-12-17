import React, { useState } from "react";

const Number = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Check if input is a valid number
    if (!value || isNaN(value)) {
      setMessage("Please enter a valid number.");
      setInputValue(value); // Keep updating the input field
      return;
    }

    const num = parseInt(value, 10);

    // Handle conditions based on the number
    if (num < 0) {
      setMessage("Enter a positive value.");
    } else if (num % 2 === 0) {
      setMessage(`The next 3 even numbers are: ${num + 2}, ${num + 4}, ${num + 6}`);
    } else {
      setMessage(`The next 3 odd numbers are: ${num + 2}, ${num + 4}, ${num + 6}`);
    }

    setInputValue(value);
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>Number Processor</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
        style={{
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "300px",
        }}
      />
      {message && (
        <div style={{ marginTop: "20px", fontSize: "18px", color: "#333" }}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Number;
