
import {FcAbout, FcContacts, FcHome} from 'react-icons/fc'

function ButtonNav() {
  return (
    <>

      <a href="#">
      <FcHome 
          className='w-[20px] h-[60px] m-auto'
        />
      </a>

      <a href="#">
          <FcAbout 
            className='w-[20px] h-[60px] m-auto'
          />

        </a>

        <a href="#">
          <FcContacts 
            className='w-[20px] h-[60px] m-auto'
          />
        </a> 

    </>
  )
}

export default ButtonNav