import {FcAbout, FcContacts, FcHome} from 'react-icons/fc'

function ButtonNav() {
  return (
    <>

      <a href="#">
      <FcHome 
          className='w-[25px] h-[25px]'
        />
      </a>

      <a href="#">
          <FcAbout 
            className='w-[25px] h-[25px]'
          />

        </a>

        <a href="#">
          <FcContacts 
            className='w-[25px] h-[25px] bg-red-400'
          />
        </a> 

    </>
  )
}

export default ButtonNav