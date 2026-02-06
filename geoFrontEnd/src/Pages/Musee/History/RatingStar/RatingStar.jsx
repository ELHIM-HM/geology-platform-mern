import React, { useState, useRef, useEffect } from 'react'
import image from '../pictures/rating_1.jpg'

const RatingStar = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const feedbackRef = useRef(null)

  // Fonction pour faire défiler vers le bas jusqu'au composant "Thank you for your feedback!"
  const scrollToFeedback = () => {
    feedbackRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  // Effect pour déclencher le défilement lorsque le rating est mis à jour
  useEffect(() => {
    if (rating > 0) {
      scrollToFeedback()
    }
  }, [rating])

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-3xl font-bold mb-6 mt-8'>Feedback</h1>
      <div className='w-1/3 p-8 border border-gray-300 rounded-lg mb-8'>
        <img
          src={image}
          alt='Votre image'
          className='max-w-full h-auto border border-gray-400 rounded-lg shadow-md'
        />
      </div>
      <div className='flex flex-col items-center pb-6'>
        <h2 className='text-2xl font-bold mb-4'>Rate Us</h2>
        <div className='flex space-x-2'>
          {[...Array(5)].map((star, index) => {
            index += 1
            return (
              <button
                type='button'
                key={index}
                className={
                  index <= (hover || rating)
                    ? 'text-yellow-500'
                    : 'text-gray-400'
                }
                onClick={() => {
                  setRating(index)
                  scrollToFeedback() // Défiler vers le bas lorsque l'étoile est cliquée
                }}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <svg
                  className='w-10 h-10'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  stroke='none'
                >
                  <path d='M12 .587l3.668 7.431 8.2 1.19-5.933 5.784 1.4 8.168L12 18.897l-7.335 3.863 1.4-8.168L.765 9.208l8.2-1.19L12 .587z' />
                </svg>
              </button>
            )
          })}
        </div>
        {rating > 0 && (
          <div
            className='mt-6 mb-8 text-lg text-green-600 font-semibold'
            ref={feedbackRef} // Référence pour le défilement automatique
          >
            <p>Thank you for your feedback!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default RatingStar
