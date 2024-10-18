// Import components

// Import sections
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
        <Sponsors />

        <Subscribe />
      </main>

      <Footer />
    </>
  )
}

export default App