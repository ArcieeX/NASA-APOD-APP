import React, { useState } from "react";
import "./App.css";
import Gallery from './components/Gallery.jsx'

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="nasa-photo-of-the-day">
      <header>
        <h1 className="title">NASA Photo Of The Day</h1>
      </header>
      <button className="btn" onClick={handleButtonClick}>
        {isVisible ? "Hide Images" : "Click to Show Today's Image"}
      </button>
      {isVisible && (
        <div id="hidden" className="display-block">
          <div id="photos-wrapper" className="photos-wrapper">
            <Gallery/>
          </div>  
        </div>
      )}
    </div>
  );
};

export default App;

