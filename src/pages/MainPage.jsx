import AppFeatures from '../sections/AppFeatures'
import AppFeatures2 from '../sections/AppFeatures2'
import Hero from '../sections/Hero'
import Slider from '../sections/Slider'
import Sponsors from '../sections/Sponsors'
import Subscribe from '../sections/Subscribe'
import Testimonials from '../sections/Testimonials'
import Faq from '../sections/faq'


export default function MainPage() {



  return (<>
      <Hero />

      {/* Only in desktop resolution */}
      <Sponsors />

      <AppFeatures />

      <Slider />

      <AppFeatures2 />

      <Testimonials />

      <Faq />

      <Subscribe />
    </>);
}