import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'https://apigeo.onrender.com/api/login', // L'URL de votre API backend
        { username, password },
      )
      // Stocker le token ou une information indiquant que l'utilisateur est connecté
      localStorage.setItem('token', response.data.token)
      // Redirection vers le tableau de bord
      navigate('/')
    } catch (error) {
      console.error('Login error:', error)
      setErrorMessage(
        error.response?.data?.message ||
          'Login failed. Please try again.',
      )
    }
  }

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='max-w-md w-full p-6 bg-white shadow-md rounded-md'>
        <h2 className='text-2xl font-semibold text-center mb-4'>
          Login Form
        </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='username' className='block'>
              Username:
            </label>
            <input
              type='text'
              id='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-md'
              required
            />
          </div>
          <div>
            <label htmlFor='password' className='block'>
              Password:
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-md'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600'
          >
            Login
          </button>
        </form>
        {errorMessage && (
          <p className='text-red-500 mt-4'>
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  )
}

export default Login
