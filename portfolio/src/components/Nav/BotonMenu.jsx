import React from 'react'
import {FcMenu} from 'react-icons/fc'

function BotonMenu() {
  return (
  <div className="hidden absolute bottom-3 right-3 p-3 text-3xl rounded-full bg-white sm:block cursor-pointer">
    <FcMenu onClick={() => setIsOpen()}/>
  </div>
  )
}

export default BotonMenu