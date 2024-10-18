// Import components

// Import sections
import AppFeatures from './sections/AppFeatures'
import AppFeatures2 from './sections/AppFeatures2'
import Footer from './sections/Footer'
import Navbar from './sections/Navbar'
import Sponsors from './sections/Sponsors'
import Subscribe from './sections/Subscribe'


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        {/* Only in desktop resolution */}
        <Sponsors />

        <AppFeatures />
        
        <AppFeatures2 />

        <Subscribe />
      </main>

      <Footer />
    </>
  )
}

export default App