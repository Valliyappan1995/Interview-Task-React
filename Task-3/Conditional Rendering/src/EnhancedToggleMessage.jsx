import React, { useState } from "react";

// Functional Component
const EnhancedToggleMessage = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleMessage = () => {
    setIsToggled(!isToggled);
  };

  // Conditional rendering using if statement
  let message;
  if (isToggled) {
    message = <h1>The toggle is ON</h1>;
  } else {
    message = <h1>The toggle is OFF</h1>;
  }

  return (
    <div>
      {/* Rendering the message using if statement */}
      {message}

      {/* Conditional rendering using ternary operator */}
      <button onClick={toggleMessage}>
        {isToggled ? "Turn OFF" : "Turn ON"}
      </button>

      {/* Conditional rendering using logical && operator */}
      <div>
        {isToggled && <p>You have turned the toggle ON!</p>}
        {!isToggled && <p>The toggle is currently OFF.</p>}
      </div>
    </div>
  );
};

export default EnhancedToggleMessage;
