import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
      <button onClick={navigateToAbout}>Go to About Page</button>
    </div>
  );
};

export default Home;
