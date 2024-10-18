// Import components

// Import sections
import AppFeatures from './sections/AppFeatures'
import AppFeatures2 from './sections/AppFeatures2'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import Slider from './sections/Slider'
import Sponsors from './sections/Sponsors'
import Subscribe from './sections/Subscribe'
import Testimonials from './sections/Testimonials'


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />

        {/* Only in desktop resolution */}
        <Sponsors />

        <AppFeatures />

        <Slider />
        
        <AppFeatures2 />
        <Testimonials />

        <Subscribe />
      </main>

      <Footer />
    </>
  )
}

export default App