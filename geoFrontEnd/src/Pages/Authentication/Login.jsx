/* eslint-disable react/no-unescaped-entities */
import Navbar from '../../Components/Navbar/Navbar'
import backgroundImg from '../../assets/header-img/img-3.jpg'
import FlyoutLink from '../../Components/Navbar/FlyoutLink'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div
      className='hero'
      style={{
        background: ` linear-gradient(rgba(8,0,58,0.7) ,rgba(8,0,58,0.6)  ), url(${backgroundImg}) `,
      }}
    >
      <Navbar isTransparent={false} />
      <div className='font-[sans-serif] text-gray-800  max-w-4xl flex items-center mx-auto md:h-screen p-4 mt-6'>
        <div className='grid md:grid-cols-3 items-center shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl overflow-hidden bg-white'>
          <div className='max-md:order-1 flex flex-col justify-center space-y-16 max-md:mt-16 min-h-full bg-gradient-to-r from-gray-900 to-gray-700 lg:px-8 px-4 py-4'>
            <div>
              <h4 className='text-white text-lg font-semibold'>
                Create Your Account
              </h4>
              <p className='text-[13px] text-white mt-2'>
                Welcome to our registration page! Get started by creating your
                account.
              </p>
            </div>
            <div>
              <h4 className='text-white text-lg font-semibold'>
                Simple & Secure Registration
              </h4>
              <p className='text-[13px] text-white mt-2'>
                Our registration process is designed to be straightforward and
                secure. We prioritize your privacy and data security.
              </p>
            </div>
          </div>
          <form className='md:col-span-2 w-full py-14 px-6 sm:px-16'>
            <div className='mb-6'>
              <h3 className='text-2xl font-bold'>Login</h3>
            </div>
            <div className='space-y-5'>
              <div>
                <label className='text-sm mb-2 block'>Email </label>
                <div className='relative flex items-center'>
                  <input
                    name='email'
                    type='email'
                    required
                    className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500'
                    placeholder='Enter email'
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#bbb'
                    stroke='#bbb'
                    className='w-4 h-4 absolute right-4'
                    viewBox='0 0 682.667 682.667'
                  >
                    <defs>
                      <clipPath id='a' clipPathUnits='userSpaceOnUse'>
                        <path
                          d='M0 512h512V0H0Z'
                          data-original='#000000'
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clipPath='url(#a)'
                      transform='matrix(1.33 0 0 -1.33 0 682.667)'
                    >
                      <path
                        fill='none'
                        strokeMiterlimit='10'
                        strokeWidth='40'
                        d='M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z'
                        data-original='#000000'
                      ></path>
                      <path
                        d='M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z'
                        data-original='#000000'
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <div>
                <label className='text-sm mb-2 block'>Password</label>
                <div className='relative flex items-center'>
                  <input
                    name='password'
                    type='password'
                    required
                    className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500'
                    placeholder='Enter password'
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='#bbb'
                    stroke='#bbb'
                    className='w-4 h-4 absolute right-4 cursor-pointer'
                    viewBox='0 0 128 128'
                  >
                    <path
                      d='M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z'
                      data-original='#000000'
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className='!mt-10'>
              <button
                type='button'
                className='w-full py-3 px-4 text-sm font-semibold rounded text-white bg-gray-700 hover:bg-gray-800 focus:outline-none'
              >
                Login
              </button>
            </div>
            <span className='text-sm mt-6 '>
              You don't have an Account?{' '}
          
                <FlyoutLink
                  href={'#'}
                  FlyoutContent={FlyoutSignUp}
                  style='inline'
                  squirePosition='left-0 top-1/3'
                  isNavbar={false}
                >
                  <span className='text-blue-600 font-semibold hover:underline ml-1'>
                    Sing up
                  </span>
                </FlyoutLink>
         
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

const FlyoutSignUp = () => {
  return (
    <div className=' w-48 bg-gray-300 p-5 shadow-xl '>
      <div className='mb-3 space-y-3'>
        <span className='block text-sm font-semibold hover:underline'>
          <Link to={'/registration/student'}>As Student</Link>
        </span>

        <span className='block text-sm font-semibold hover:underline'>
          <Link to={'/registration/teacher'}>As Teacher</Link>
        </span>
      </div>
    </div>
  )
}
