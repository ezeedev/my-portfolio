import React from 'react'
import {FaHome} from 'react-icons/fa'
import {FcAbout, FcContacts} from 'react-icons/fc'


function NavBar() {
  return (
    <nav className='flex justify-center '>
      <div className="absolute bottom-3 w-[260px] h-[60px] bg-[rgba(255,255,255,.04)] shadow-[0 8px 32px 0 rgba(31, 38, 135, .37)] backdrop-filter:blur-[20px]  border-[rgba(255, 255, 255, .18)] rounded-full">

      <div className="flex justify-around">

      <a href="#">
      <FaHome 
          className='w-[20px] h-[60px] m-auto text-white'
        />
      </a>

        <a href="#">
          <FcAbout 
            className='w-[20px] h-[60px] m-auto text-white'
          />

        </a>

        <a href="#">
          <FcContacts 
            className='w-[20px] h-[60px] m-auto text-white'
          />
        </a>
      </div>
      </div>
    </nav>
  )
}

export default NavBar