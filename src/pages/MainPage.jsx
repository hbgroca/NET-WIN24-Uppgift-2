import { useOutletContext } from 'react-router-dom';
import AppFeatures from '../sections/AppFeatures/AppFeatures'
import AppFeatures2 from '../sections/AppFeatures/AppFeatures2'
import Hero from '../sections/Hero/Hero'
import Slider from '../sections/Slider/Slider'
import Sponsors from '../sections/Sponsors/Sponsors'
import Subscribe from '../sections/Subscribe/Subscribe'
import Testimonials from '../sections/Testimonials/Testimonials'
import Faq from '../sections/Faq/faq'

export default function MainPage() {
  
  // Get darkmode state from Outlet context
  const { darkMode } = useOutletContext();

  return (<>
      <Hero />

      <Sponsors />

      <AppFeatures />

      <Slider />

      <AppFeatures2 />

      <Testimonials />

      <Faq />

      <Subscribe />
    </>);
}