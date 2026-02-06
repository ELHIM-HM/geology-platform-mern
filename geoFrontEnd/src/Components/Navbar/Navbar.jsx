/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/header-img/logo-4.png'
import menu_icon from '../../assets/header-img/menu-icon.png'
import { Link as Scroll } from 'react-scroll'
import FlyoutLink from './FlyoutLink'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ isTransparent }) => {
  const [sticky, setSticky] = useState(false)
  const [hideMenu, setHideMenu] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setHideMenu((prev) => !prev)
  }

  return (
    <nav
      className={`h-container ${isTransparent ? '' : 'bg-gray-900'} ${sticky ? 'bg-gray-900 transition duration-500' : ''}`}
    >
      <Link to='/'>
        <div className='logo cursor-pointer'>
          <img src={logo} alt='Logo' />
          <h1>Geologie</h1>
        </div>
      </Link>

      <ul className={hideMenu ? 'hide-menu' : ''}>
        {isHomePage ? (
          <li>
            <Scroll
              to='hero'
              smooth={true}
              offset={0}
              duration={80}
            >
              <span>Home</span>
            </Scroll>
          </li>
        ) : (
          <li>
            <Link to='/'>Home</Link>
          </li>
        )}
        <li>
          <FlyoutLink href='#' FlyoutContent={FlyoutFSBM}>
            FSBM
          </FlyoutLink>
        </li>
        <li>
          <FlyoutLink href='#' FlyoutContent={FlyoutMusse}>
            Musse
          </FlyoutLink>
        </li>
        <li>
          <Link to='/evenement'>Events</Link>
        </li>
        
        <li>
          <Link to='/library'>Library</Link>
        </li>
        {isHomePage ? (
          <li>
            <Scroll
              to='contact'
              smooth={true}
              offset={-10}
              duration={80}
            >
              Contact us
            </Scroll>
          </li>
        ) : (
          <li>
            <Link to='/#contact'>Contact us</Link>
          </li>
        )}
      </ul>
      <img
        src={menu_icon}
        alt='Menu Icon'
        className='menu-icon'
        onClick={toggleMenu}
      />
    </nav>
  )
}

export default Navbar

const FlyoutFSBM = () => {
  return (
    <div className='w-48 bg-gray-300 p-5 shadow-xl'>
      <div className='mb-3 space-y-3'>
        <Link
          to='/Faculty'
          className='block text-sm font-semibold hover:underline'
        >
          Faculty Overview
        </Link>
        <Link
          to='/Geology'
          className='block text-sm font-semibold hover:underline'
        >
          Geology Overview
        </Link>
      </div>
    </div>
  )
}

const FlyoutMusse = () => {
  return (
    <div className='w-32 bg-gray-300 p-6 shadow-xl'>
      <div className='mb-3 space-y-3'>
        <Link
          to='/musee/history'
          className='block text-sm font-semibold hover:underline'
        >
          History
        </Link>
        <Link
          to='/musee/collections'
          className='block text-sm font-semibold hover:underline'
        >
          Collections
        </Link>
      </div>
    </div>
  )
}
