// Import components

// Import sections
import ContactPage from './pages/ContactPage';
import MainPage from './pages/MainPage';
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'


import React, { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <header>
        {/* Navbar, sens darkmode state down to button */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      </header>

      <main>
        {/* <MainPage /> */}


        <ContactPage />
      </main>

      <Footer />
    </>
  )
}

export default App