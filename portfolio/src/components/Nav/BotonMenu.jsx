import React from 'react'

function BotonMenu( {onClick} ) {
  return (
  <div className="hidden absolute bottom-3 right-3 p-3 text-3xl rounded-full bg-white sm:block cursor-pointer">
    <FcMenu onClick={() => setIsOpen(onClick)}/>
  </div>
  )
}

export default BotonMenu