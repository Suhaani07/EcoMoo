// src/components/HomePage.js
import React from "react";
import AnimalSelection from "./AnimalSelection";

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to Ecomoo!</h2>
      <p>Choose your animal friend:</p>
      <AnimalSelection />
    </div>
  );
};

export default HomePage;
