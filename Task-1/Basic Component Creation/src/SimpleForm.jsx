import React, { useState } from "react";

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    alert(`Button clicked! Input value is: ${inputValue}`);
  };

  return (
    <div>
      <h1>Simple Form</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default SimpleForm;
