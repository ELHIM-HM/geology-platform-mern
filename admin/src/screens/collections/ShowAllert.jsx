/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'

const ShowAllert = ({ status, message, duration = 3 }) => {
  const dur = duration * 1000
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {setIsVisible(false)
    
    }, dur)

    return () => clearTimeout(timer)
  }, [dur])

  if (!isVisible) return null

  return (
    <div>
      <div className='fixed top-6 right-12 z-50'>
        <div
          className={`${
            status === 'err'
              ? 'bg-[#fc8181]'
              : 'bg-emerald-700 border-l-4 border-emerald-500'
          }  text-white p-4 rounded-lg shadow-md opacity-90`}
        >
          <p className='text-lg font-semibold'>
            {status === 'err' ? 'Error' : 'Seccuss'}
          </p>
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default ShowAllert
