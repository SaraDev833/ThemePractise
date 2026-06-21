import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../context'
const Navbar = () => {

  const {theme, setTheme}= useContext(ThemeContext);
    
  return (
  
    <div className='flex justify-between w-full items-center bg-cyan-800 py-4! px-4!'>
        <h2 className='text-2xl text-white cursor-pointer'>CodeWithSara</h2>
        <ul className='flex gap-4 text-xl items-center'>
          <button className='text-white' onClick={()=>setTheme(!theme)}>{theme==="Dark"?"LightMode":"Dark Mode"}</button>
          <NavLink to={'/about'}  className={({ isActive }) =>
    isActive ? 'text-xl text-white cursor-pointer bg-emerald-950 px-2 py-1' : 'text-xl text-white cursor-pointer'
  }>About</NavLink>
          <NavLink to={'/skills'} className='text-xl text-white cursor-pointer'>Skills</NavLink>
          <NavLink to={'/contact'} className='text-xl text-white cursor-pointer'>Contact</NavLink>
        </ul>
    </div>
  )
}

export default Navbar
