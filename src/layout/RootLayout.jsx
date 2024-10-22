import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from '../sections/Navbar/Navbar';
import Footer from '../sections/Footer/Footer';

export default function RootLayout() {  
  // Darkmode state
  const [darkMode, setDarkMode] = useState(false);

  // Change theme function
  const changeTheme = () => {
    // Change theme
    setDarkMode(darkMode => !darkMode);
  };

  return (
    <div>
      <header>
        {/* Navbar, send darkmode state down to button */}
        <Navbar darkMode={darkMode} changeTheme={changeTheme} />
      </header>
      
      <main>
        <Outlet context={{ darkMode }} />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}