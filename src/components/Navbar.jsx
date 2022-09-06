import React from 'react'
import { colors } from '../assets/colors'
import Logo from "../assets/logo.png"


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-5 px-10'>

    {/* RIGHT NAVIGATION BAR */}
    <div 
    style={{flex:1.5}}
    className='flex flex-row items-center space-x-2'>
      <div 
      style={{height:'3.25rem',width:"3.25rem"}} 
      className="">
        <img 
        style={{display:"block"}}
        src={Logo} alt="logo"/>
      </div>
      <h3 
      style={{color:colors.black}}
      className='text-lg font-bold'>Rescue</h3>
    </div>


    {/* RIGHT NAVIGATION BAR */}
    <div 
    style={{flex:3}}
    className="flex flew-row space-x-1 justify-between">
      <h6 style={{color:colors.black}}
      className='text-base font-bold'>Home</h6>
      <h6  style={{color:colors.black}}
      className='text-base font-bold'>Our Story</h6>
      <h6  style={{color:colors.black}}
      className='text-base font-bold'>What we do?</h6>
      <h6  style={{color:colors.black}}
      className='text-base font-bold'>Blog</h6>
      <h6  style={{color:colors.black}}
      className='text-base font-bold'>Get Involved</h6>
      <button
      style={{backgroundColor:colors.black, color:colors.white}}
      className="px-3 py-2"
      >LET'S DONATE</button>
    </div>
  </nav>
  )
}

export default Navbar