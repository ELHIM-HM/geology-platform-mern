import Navbar from '../../Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Companies from './Components/Companies/Companies'
import PlatDescreption from './Components/PlatDescreption/PlatDescreption'
import Collections from './Components/Collections/Collections'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from '../../Components/Footer/Footer'

export default function Home(){
  return (
    <div className='App'>
      <header>
        <Navbar isTransparent={true}/>
        <Hero />
      </header>
      <Companies />
      <PlatDescreption />
      <Collections />
      <ContactUs />
      <Footer />
    </div>
  )
}
