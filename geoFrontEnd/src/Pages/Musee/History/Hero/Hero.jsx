import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <img src='../pictures/ms-1.jpg' alt='' />
      </div>

      <div className='hero-text'>
        <h1>Your Musuem , Your World</h1>
        <p>Discover Your Favourite collection !</p>
        <button className='show'>
          <a href='/'>Discover Now</a>
        </button>
      </div>
    </>
  )
}

export default Hero
