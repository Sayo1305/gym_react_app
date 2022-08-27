import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <div className='flex flex-row  py-4 px-3 w-full h-15 bg-transparent justify-center absolute z-10'>
      <div className='flex flex-row w-1/2'>
        <div className='basis-1/2 text-center md:text-2xl '>
              <Link className='hover:text-green-300' to={'/Home'}>Home</Link>
        </div>
        <div className='basis-1/2 text-center md:text-2xl'>
              <Link className='hover:text-green-300' to={'/About'}>About</Link>
        </div>
        <div className='basis-1/2 text-center md:text-2xl'>
              <Link className='hover:text-green-300' to={'/Contact'}>Contact</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar;