import React from 'react'

//
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


import {colors} from '../assets/colors'

const BottomBar = () => {
  return (
    <div className='md:flex space-y-4 md:space-y-2 flex-wrap p-5 px-10 justify-between'>
    <div>
      <h4 style={{color:colors.black}} className='md:mb-2 text-xl font-semibold'>Rescue</h4>
      <p style={{color:colors.black}}>Become part of the rescue club today</p>
    </div>
    <div>
    <h4 style={{color:colors.black}} className='md:mb-2 text-xl font-semibold'>What we do?</h4>
    <ul>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70">Our programs</li>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70">Where we work</li>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70">Stories</li>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70">Our Impact</li>
    </ul>
    </div>
    <div>
    <h4 style={{color:colors.black}} className='md:mb-2 text-xl font-semibold'>About Us</h4>
    <ul>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70">Our Story</li>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70">Our blog</li>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70">Our Patners</li>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70">Contact Us</li>
    </ul>
    </div>
    <div>
    <h4 style={{color:colors.black}} className='md:mb-2 text-xl font-semibold'>Get Involved</h4>
    <ul>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70">Fundraise for us</li>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70">Come to an event</li>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70">Accomdation</li>
    </ul>
    </div>
    <div>
      <h5 style={{color:colors.black}} className='md:mb-2 text-xl font-semibold'>Join And Power Up our Club</h5>
    <ul className='flex justify-between md:px-2 mt-4 pr-10 '>
      <li style={{color:colors.black, }} className="cursor-pointer hover:opacity-70"><FaFacebookF /></li>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70"><FaTwitter /></li>
      <li style={{color:colors.black}} className="cursor-pointer hover:opacity-70"><RiInstagramFill /></li>
    </ul>
    </div>
  </div>
  )
}

export default BottomBar