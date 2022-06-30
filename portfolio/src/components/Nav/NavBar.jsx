import React from 'react'
import { useState, useEffect } from 'react'
import { BotonMenu } from '../../components/Nav/BotonMenu'

import logo from '../../assets/logo.svg'


function NavBar() {

  const [isOpen, setIsOpen] = useState(false)
  useState(() => {
    
  },[isOpen])


  return (
    <nav className=' flex justify-between items-center py-4 px-6'>

      <div className="">

        <img 
          className='w-12'
          src={logo} 
          alt="Logo"
         />
      </div>

      <div className="sm:hidden text-xl flex justify-around items-center gap-20 h-full">
        <a href="#" className="text-white">Home</a>
        <a href="#" className="text-white">About</a>
        <a href="#" className="text-white">Contact</a>

      </div>
    <BotonMenu />
    </nav>
  )
}

export default NavBar