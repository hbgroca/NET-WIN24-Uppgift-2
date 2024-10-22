// Import components
import { createBrowserRouter, Route, Routes, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React, { useState } from 'react';

// Import sections
import ContactPage from './pages/ContactPage';
import MainPage from './pages/MainPage';
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import RootLayout from './layout/RootLayout';


// Router things learnt from Net ninja on Youtube
// https://www.youtube.com/playlist?list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='navbar' element={<Navbar />} />
    </Route>
  )
);

function App() {
  // Darkmode
  // const [darkMode, setDarkMode] = useState(false);
  
  return (
    <>
      <main>
        {/* Router */}
        <RouterProvider router={router}/>
      </main>
    </>
  )
}

export default App