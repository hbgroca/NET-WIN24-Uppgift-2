// Import components
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// Import layout
import RootLayout from './layout/RootLayout';

// Import sections
import MainPage from './pages/MainPage';
import Navbar from './sections/Navbar/Navbar'
import ContactPage from './pages/ContactPage/ContactPage';
import Testimonials from './pages/Testimonials/TestimonialsPage';
import Error404 from './pages/404/Error404';


// Router things learnt from Net ninja on Youtube
// https://www.youtube.com/playlist?list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<MainPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='navbar' element={<Navbar />} />
      <Route path='testimonials' element={<Testimonials />} />
      <Route path='*' element={<Error404 />} />
    </Route>
  )
);



function App() {
  return (
    <>
      <main>
        {/* Router */}
        <RouterProvider router={router} />
      </main>
    </>
  )
}

export default App