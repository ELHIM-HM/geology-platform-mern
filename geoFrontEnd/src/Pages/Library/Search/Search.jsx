// Search component

import React from 'react'
import './Search.css'
import image_1 from '../assets/image.jpg'
import { FaWpexplorer } from 'react-icons/fa6'
import CountUp from 'react-countup'
import { color } from 'framer-motion'
import { useRef } from 'react' // Import useRef

export function Search() {
  const booksRef = useRef(null) // Reference for OUR BOOKS section

  const handleExploreClick = () => {
    // Scroll to the section OUR BOOKS
    booksRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container '>
        {/* left side */}
        <div className='flexColStart hero-left'>
          <div className='hero-title'>
            <h1>
              Discover <br />
              our awesome collection . <br /> Ready !
            </h1>
          </div>

          <div className='flexColStart hero-des'>
            <span className='secondaryText'>
              Find a variety of properties that suit you
              very easilty
            </span>
            <span className='secondaryText'>
              Forget all difficulties in finding an{' '}
              <span className='green-text'>artifact</span>{' '}
              for you
            </span>
          </div>

          <div className='flexCenter search-bar'>
            <FaWpexplorer color='var(--blue)' size={25} />
            <button
              className='button'
              onClick={handleExploreClick}
            >
              Explore Now
            </button>{' '}
            {/* Added onClick handler */}
          </div>

          <div className='flexCenter stats'>
            <div className='flexColCenter stat'>
              <span>
                <CountUp
                  start={8800}
                  end={9000}
                  duration={4}
                />
                <span>+</span>
              </span>
              <span className='secondaryText'>
                Premium Product
              </span>
            </div>

            <div className='flexColCenter stat'>
              <span>
                <CountUp
                  start={100}
                  end={1500}
                  duration={4}
                />
                <span>+</span>
              </span>
              <span className='secondaryText'>
                Happy Visitor
              </span>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className='flexCenter hero-right'>
          <div className='image-container'>
            <img src={image_1} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Search
