import React, { useState, useEffect } from 'react';
import '../css/BtnDarkMode.css';

function BtnDarkMode() {
  // On load of page
  useEffect(() => {
    if(localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
      document.getElementById("btn-darkmode-toggle").classList.add("btn-darkmode-active");
    }else {
      document.body.classList.remove("dark-mode");
      document.getElementById("btn-darkmode-toggle").classList.remove("btn-darkmode-active");
    }
  }, []);

  function toggleDarkMode(e) {
    document.body.classList.toggle("dark-mode");
    e.target.classList.toggle("btn-darkmode-active");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
  };
  
  return (
    <div className="btn-darkmode-container">
        <p className="btn-darkmode-text" aria-hidden="true">Dark mode</p>
        <button onClick={toggleDarkMode} id="btn-darkmode-toggle" className="btn-darkmode" aria-label="Växla mellan ljus eller mörkt tema."></button>
    </div>
  );
};
export default BtnDarkMode;

