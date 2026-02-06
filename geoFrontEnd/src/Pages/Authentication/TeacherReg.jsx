/* eslint-disable react/no-unescaped-entities */
import Navbar from '../../Components/Navbar/Navbar'
import backgroundImg from '../../assets/header-img/img-3.jpg'
import { Link } from 'react-router-dom'

const TeacherReg = () => {
  return (
    <div
      className='hero'
      style={{
        background: ` linear-gradient(rgba(8,0,58,0.7) ,rgba(8,0,58,0.6)  ), url(${backgroundImg}) `,
      }}
    >
      <Navbar isTransparent={false} />
      <div className='font-[sans-serif] text-gray-800  max-w-5xl flex items-center mx-auto md:h-screen p-4 mt-9'>
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
    <h3 className='text-2xl font-bold'>Create teacher account</h3>
  </div>
  <div className='space-y-5'>
    <div className="md:flex md:space-x-2">
      <div className="md:w-1/2">
        <label className='text-sm mb-2 block'>First Name</label>
        <input
          name='firstName'
          type='text'
          required
          className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500'
          placeholder='Enter first name'
        />
      </div>
      <div className="md:w-1/2">
        <label className='text-sm mb-2 block'>Last Name</label>
        <input
          name='lastName'
          type='text'
          required
          className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500'
          placeholder='Enter last name'
        />
      </div>
    </div>
    <div className="md:flex md:space-x-2">
      <div className="md:w-1/2">
        <label className='text-sm mb-2 block'>Birthday</label>
        <input
          name='birthday'
          type='date'
          required
          className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500'
        />
      </div>
      <div className="md:w-1/2">
        <label className='text-sm mb-2 block'>Phone</label>
        <input
          name='phone'
          type='tel'
          required
          className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500'
          placeholder='Enter phone number'
        />
      </div>
    </div>
    <div className="md:flex md:space-x-2">
      <div className="md:w-1/2">
        <label className='text-sm mb-2 block'>Password</label>
        <input
          name='password'
          type='password'
          required
          className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500'
          placeholder='Enter password'
        />
      </div>
      <div className="md:w-1/2">
        <label className='text-sm mb-2 block'>Retype Password</label>
        <input
          name='retypePassword'
          type='password'
          required
          className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500'
          placeholder='Retype password'
        />
      </div>
    </div>
    <div className="md:flex md:space-x-2">
      <div className="md:w-1/2">
        <label className='text-sm mb-2 block'>Email</label>
        <input
          name='email'
          type='email'
          required
          className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500'
          placeholder='Enter email'
        />
      </div>
      <div className="md:w-1/2">
        <label className='text-sm mb-2 block'>Dropdown Menu</label>
        <select
          name='dropdown'
          className='bg-white border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500'
        >
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </select>
      </div>
    </div>
  </div>
  <div className='!mt-10'>
    <button
      type='button'
      className='w-full py-3 px-4 text-sm font-semibold rounded text-white bg-gray-700 hover:bg-gray-800 focus:outline-none'
    >
      Sign up
    </button>
  </div>
  <span className='text-sm mt-6'>
    Already have an account?{' '}
    <span className='text-blue-600 font-semibold hover:underline ml-1'>
      <Link to={'/login'}>Login</Link>
    </span>
  </span>
</form>

        </div>
      </div>
    </div>
  )
}

export default TeacherReg
