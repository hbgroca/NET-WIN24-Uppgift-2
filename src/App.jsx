// Import components
import Accordion from './components/Accordion'
import BtnDarkMode from './components/BtnDarkMode'
import BtnHamburger from './components/BtnHamburger'
import CardSponsor from './components/Card-sponsor'
import Navbar from './sections/Navbar'


function App() {

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>

        <CardSponsor imageUrl='./images/svg/sponsors/logoipsum-1.svg' />
      </main>
    </>
  )
}

export default App
