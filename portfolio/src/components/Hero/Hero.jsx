
import NavBar from '../Nav/NavBar'

function Hero() {
  return (
    <div className="">
    <NavBar />
      
    <div className='flex xs:py-10 flex-col justify-center h-screen'>

        <div className="flex flex-col justify-center items-start sm:px-2">

          <h3 className='sm:text-center sm:w-full text-3xl font-bold sm:leading-none leading-3 text-white'>¡Hola!</h3>

          <h1 className='text-6xl font-bold text-white sm:text-center sm:w-full mb-3'>Soy <span className='text-red-400 uppercase	'>Ezequiel</span></h1>

          <p className='sm:text-center sm:w-full text-xl text-white'>
            Desarrollador web, apasionado por la tecnología y la programación.
          </p>

          <div className='sm:mx-auto my-6'>
            <a href='#' download className='text-white'>
              <button className='bg-red-400 px-4 py-2 rounded-lg uppercase font-bold hover:bg-white hover:text-red-400 transition-colors duration-300'>
                ¡Descarga CV!
              </button>
            </a>
          </div>
        </div>
    </div>
    
    </div>
  )
  }

export default Hero