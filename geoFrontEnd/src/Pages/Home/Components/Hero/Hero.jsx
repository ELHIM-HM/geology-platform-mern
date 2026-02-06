/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom'
import './Hero.css'
import white_arrow from '../../../../assets/header-img/white-arrow.png'

const Hero = () => {
  return (
    <div className='hero h-container'>
      <div className='text-center max-w-[50rem]'>
        <h1 className='text-[3.75rem] font-semibold'>
          Welcome to the Geology Platform!
        </h1>
        <p className='p text-overly max-w-[36rem] mx-auto my-[3.25rem] mt-[1.5rem] leading-[1.6]'>
          Come join us to explore the fascinating world of
          geology! Discover the incredible variety of rocks,
          minerals, and fossils found on our planet. Learn
          about how they're made and where they come from.
        </p>
        <div className='flex items-center gap-[1.5rem] justify-center'>
          <p className='text-overly'>
            Are you a student or teacher of the Geology
            Department?
          </p>
          <Link to={'/login'}>
            <button className='btn'>
              Log in
              <img src={white_arrow} alt='' />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
