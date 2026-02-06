import React, { useState } from 'react'
import banner from '../assets/image.jpg'
import { FaWpexplorer } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import { useEffect } from 'react'

function HeroContent() {
  const [SearchResult, setSearchResult] = useState([])
  const [Key, setKey] = useState('')
  useEffect(() => {
    const search = async () => {
      try {
        if (!Key.trim()) {
          setSearchResult([])
          return
        }
        const res = await axios.get(
          'http://localhost:3000/api/library',
          { params: { Key: Key, limit: 5 } },
        )
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    search()
  }, [])

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 '>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36'>
          <div className='space-y-8'>
            <h1 className='text-2xl md:text-4xl font-bold'>
              Hello, welcome here to learn something{' '}
              <span className='text-pink-500'>
                new everyday!!!
              </span>
            </h1>
            <p className='text-sm md:text-xl'>
              Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Dolor, et totam. Tempora
              amet atque expedita, quae corrupti totam sed
              pariatur corporis at veniam est voluptas
              animi!
            </p>
            <label className='input input-bordered flex items-center gap-2'>
              <input
                type='text'
                className='grow'
                placeholder='Search'
                value={SearchResult}
                onChange={setSearchResult}
              />
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
                fill='currentColor'
                className='w-4 h-4 opacity-70'
              >
                <path
                  fillRule='evenodd'
                  d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                  clipRule='evenodd'
                />
              </svg>
            </label>
          </div>
          <button className='btn mt-6 btn-secondary flex items-center justify-center'>
            <Link
              to='freebook-section'
              smooth={true}
              duration={500}
              className='flex items-center'
            >
              Explore More <FaWpexplorer className='ml-2' />
            </Link>
          </button>
        </div>
        <div className='order-1 w-full mt-20 md:w-1/2'>
          <img
            src={banner}
            className='md:w-[550px] md:h-[460px] md:ml-12 rounded'
            alt=''
          />
        </div>
      </div>
    </>
  )
}

export default HeroContent
