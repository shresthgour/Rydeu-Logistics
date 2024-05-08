import React from 'react'
import navbar from '../assets/navbar.png'

const Navbar = () => {
  return (
    <div className='w-[100vw]'>
      <img src={navbar} alt="navbar" className='w-full' />
    </div>
  )
}

export default Navbar