import React from 'react'
import ButtonNav from './ButtonNav'


function NavBar() {
  return (
    <nav className='flex justify-center '>
      <div className="absolute bottom-3 sm:w-[260px] w-[200px] h-[60px] bg-[#6c72cb] shadow-xl border rounded-full">

      <div className="flex justify-around items-center h-full">

      <ButtonNav />

      </div>
      </div>
    </nav>
  )
}

export default NavBar