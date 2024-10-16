import React, { useState } from 'react';
import '../css/BtnDarkMode.css';

function BtnDarkMode() {
  let darkMode = false;

  function toggleDarkMode(e) {
    document.body.classList.toggle("dark-mode");
    e.target.classList.toggle("btn-darkmode-active");
  };
  
  return (
    <div className="btn-darkmode-container">
        <p className="btn-darkmode-text" aria-hidden="true">Dark mode</p>
        <button onClick={toggleDarkMode} id="btn-darkmode-toggle" className="btn-darkmode" aria-label="Växla mellan ljus eller mörkt tema."></button>
    </div>
  );
};
export default BtnDarkMode;

