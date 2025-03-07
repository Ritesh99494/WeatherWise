import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <h1>WeatherWise</h1>
      
    </React.Fragment>
  );
}

export default App;
