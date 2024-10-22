import { NavLink, Outlet } from "react-router-dom"
import { useState } from "react"
import Navbar from '../sections/Navbar'
import Footer from '../sections/Footer'

export default function RootLayout() {  
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <header>
        {/* Navbar, send darkmode state down to button */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      </header>
      
      <main>
        <Outlet darkMode={darkMode} setDarkMode={setDarkMode}/>
      </main>
      
        {/* Footer */}
      <Footer />
    </div>
  )
};