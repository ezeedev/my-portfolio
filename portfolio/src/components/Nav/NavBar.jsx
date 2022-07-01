import React from 'react'
import { useState, useEffect } from 'react'

import logo from '../../assets/logo.svg'
import {FcMenu} from 'react-icons/fc'

function NavBar() {

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log('holaa');
    return (
      () => {
      <div className='bg-red-300 w-[200px] h-[300px]'>
        <a href="">Section 1</a>
        <a href="">Section 2</a>
        <a href="">Section 3</a>
      </div>
      }
    )
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

      <div className="hidden absolute bottom-3 right-3 p-3 text-3xl rounded-full bg-white sm:block cursor-pointer">
        <FcMenu onClick={() => setIsOpen({isOpen: !isOpen})}/>
      </div>
    </nav>
  )
}

export default NavBar