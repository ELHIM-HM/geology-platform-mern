import { useContext, useEffect } from 'react'
import './App.scss'
import { ThemeContext } from './context/ThemeContext'
import {
  DARK_THEME,
  LIGHT_THEME,
} from './constants/themeConstants'

import MoonIcon from './assets/icons/moon.svg'
import SunIcon from './assets/icons/sun.svg'
import BaseLayout from './layout/BaseLayout'
import Eventt from './../src/components/even/Eventt'
import Ann from './../src/components/even/Ann'
import Library from './Pages/library/Library'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import {
  Dashboard,
  PageNotFound,
  Collections,
  CreateCollection,
  UpdateCollection,
} from './screens'
import Login from './Pages/Login_Admin/Login' // Assurez-vous que le chemin est correct

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  // adding dark-mode class if the dark mode is set on to the body tag
  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [theme])

  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null
  }

  const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? (
      children
    ) : (
      <Navigate to='/login' />
    )
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<BaseLayout />}>
            <Route
              path='/'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path='/library'
              element={
                <PrivateRoute>
                  <Library />
                </PrivateRoute>
              }
            />
            <Route
              path='/collections'
              element={
                <PrivateRoute>
                  <Collections />
                </PrivateRoute>
              }
            />
            <Route
              path='/collections/create'
              element={
                <PrivateRoute>
                  <CreateCollection />
                </PrivateRoute>
              }
            />
            <Route
              path='/collections/update/:id'
              element={
                <PrivateRoute>
                  <UpdateCollection />
                </PrivateRoute>
              }
            />
            <Route
              path='/ann'
              element={
                <PrivateRoute>
                  <Ann />
                </PrivateRoute>
              }
            />
            <Route
              path='/eventt'
              element={
                <PrivateRoute>
                  <Eventt />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>

        <button
          type='button'
          className='theme-toggle-btn'
          onClick={toggleTheme}
        >
          <img
            className='theme-icon'
            src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          />
        </button>
      </Router>
    </>
  )
}

export default App
