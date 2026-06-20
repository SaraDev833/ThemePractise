import React from 'react'

const Navbar = () => {
  return (
  
    <div className='flex justify-between w-full items-center bg-cyan-800 py-4! px-4!'>
        <h2 className='text-2xl text-white cursor-pointer'>CodeWithSara</h2>
        <ul className='flex gap-4 text-xl items-center'>
          <li className='text-xl text-white cursor-pointer'>About</li>
          <li className='text-xl text-white cursor-pointer'>Skills</li>
          <li className='text-xl text-white cursor-pointer'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar
