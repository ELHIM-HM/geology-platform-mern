import React from 'react'
import NavBar from '../../Components/Navbar/Navbar'
import HeroContent from './Hero/HeroContent'
import Freebook from './Freebook/Freebook'
import Popular from './Popular/Popular'
import Search from './Search/Search'

export default function Library() {
  return (
    <div >
      <NavBar isTransparent={true} />
      <Search />
      <Popular />
    </div>
  )
}
