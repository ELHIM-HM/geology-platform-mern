import { useContext, useEffect, useRef } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { LIGHT_THEME } from '../../constants/themeConstants'
import LogoBlue from '../../assets/images/logo_blue.svg'
import LogoWhite from '../../assets/images/logo_white.svg'
import {
  MdOutlineCollectionsBookmark,
  MdEvent,
  MdOutlineClose,
  MdOutlineGridView,
  MdOutlineLogout,
} from 'react-icons/md'
import { VscLibrary } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import './Sidebar.scss'
import { SidebarContext } from '../../context/SidebarContext'

const Sidebar = () => {
  const { theme } = useContext(ThemeContext)
  const { isSidebarOpen, closeSidebar } =
    useContext(SidebarContext)
  const navbarRef = useRef(null)

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== 'sidebar-open-btn'
    ) {
      closeSidebar()
    }
  }

  useEffect(() => {
    document.addEventListener(
      'mousedown',
      handleClickOutside,
    )
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
      )
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    // Redirection vers l'URL de la page de login après la déconnexion
    window.location.href = 'http://localhost:5173/'
  }

  return (
    <nav
      className={`sidebar ${
        isSidebarOpen ? 'sidebar-show' : ''
      }`}
      ref={navbarRef}
    >
      <div className='sidebar-top'>
        <div className='sidebar-brand'>
          <img
            src={
              theme === LIGHT_THEME ? LogoBlue : LogoWhite
            }
            alt='Logo'
          />
          <span className='sidebar-brand-text'>
            Admin Dashboard
          </span>
        </div>
        <button
          className='sidebar-close-btn'
          onClick={closeSidebar}
        >
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className='sidebar-body'>
        <div className='sidebar-menu'>
          <ul className='menu-list'>
            <li className='menu-item'>
              <Link to='/collections' className='menu-link'>
                <span className='menu-link-icon'>
                  <MdOutlineCollectionsBookmark size={20} />
                </span>
                <span className='menu-link-text'>
                  Collections
                </span>
              </Link>
            </li>
            <li className='menu-item'>
              <Link to='/Eventt' className='menu-link'>
                <span className='menu-link-icon'>
                  <MdEvent size={18} />
                </span>
                <span className='menu-link-text'>
                  Events
                </span>
              </Link>
            </li>
            <li className='menu-item'>
              <Link to='/Library' className='menu-link'>
                <span className='menu-link-icon'>
                  <VscLibrary size={20} />
                </span>
                <span className='menu-link-text'>
                  Library
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className='sidebar-menu sidebar-menu2'>
          <ul className='menu-list'>
            <li className='menu-item'>
              <button
                onClick={handleLogout}
                className='menu-link'
              >
                <span className='menu-link-icon'>
                  <MdOutlineLogout size={20} />
                </span>
                <span className='menu-link-text'>
                  Logout
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
