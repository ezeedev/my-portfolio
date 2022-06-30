import HeroImg from '../../assets/Hero.png'
import Pattern from '../../pattern.svg'

function Hero() {
  return (
    <div className='flex  flex-col justify-center h-screen'>
      <div className='grid grid-cols-2'>
        <div className="flex flex-col justify-center items-start">
          <h3 className='text-2xl text-center text-white'>¡Hola!</h3>
          <h1 className='text-5xl text-center text-white'>Soy <span className='text-red-400'>Ezequiel</span></h1>
        </div>

        <div className="m-auto">
          <div className="flex justify-center rounded-bl-[40%] rounded-br-[40%] rounded-tr-[60%] rounded-tl-[70%] bg-emerald-500 w-[300px]">
            <img src={HeroImg} alt="" className="w-[200px]" />
          </div>
        </div>
    </div>

    </div>
  )
  }

export default Hero