import React from 'react'

function Hero() {
  return (
    <div className='h-screen'>
      <div className='grid grid-cols-2'>
        <div className="flex flex-col items-start">
          <h3 className='text-2xl text-center text-white'>¡Hola!</h3>
          <h1 className='text-5xl text-center text-white'>Soy <span className='text-red-400'>Ezequiel</span></h1>
        </div>

        <div className="">
          <img 
            src="../../assets/images/hero.png"
            alt="me" 
          />
        </div>
    </div>

    </div>
  )
  }

export default Hero