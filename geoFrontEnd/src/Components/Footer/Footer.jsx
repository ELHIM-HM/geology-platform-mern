import { Link } from 'react-router-dom'
import ItemContainer from './ItemContainer'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='md:flex md:justify-evenly md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7'>
        <h1 className='lg:text-2xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
          <span className='text-teal-400'>Feel free </span>
          to log in if you are a geology student, teacher, or researcher
        </h1>
        <div>
          <Link to={'/login'}>
            <button className='bg-teal-500 hover:bg-teal-600 duration-500 px-5 py-2.5 font-[Poppins] rounded-md text-white md:w-auto w-full'>
              {' '}
              Log In Now
            </button>
          </Link>
        </div>
      </div>
      <ItemContainer />
      <div
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      gap-10 text-center pt-2 text-gray-400 text-sm pb-8'
      >
        <span>&copy; 2024 . All rights reseved.</span>
        <span>Terms . Privacy Policy </span>
      </div>
    </footer>
  )
}

export default Footer
