import Hero from './Hero/Hero'
import Navbar from '../../../Components/Navbar/Navbar'
import Destination from '../History/Destination/Destination'
import RatingStar from '../History/RatingStar/RatingStar'


export default function Musee() {
  return (
    <>
      <Navbar isTransparent={true} />
      <Hero />
      <Destination />
      <RatingStar />
    </>
  )
}
