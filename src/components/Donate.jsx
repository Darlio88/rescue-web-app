import React from 'react'

import {colors} from '../assets/colors'
import Volunteer from '../assets/volunteer.png'
import Piggy from '../assets/piggy-bank.png'
import Student from '../assets/student.png'

const Donate = () => {
  return (
    <div>
    <div className='p-5 px-10'>
      <div className='flex justify-between items-end'>
        <h4 
        style={{color:colors.black}}
        className='text-3xl font-semibold'>Good Helping <br></br> Communities</h4>
        <h6
         style={{color:colors.black}}
         className='text-base font-semibold'
        >we help women survivors of war rebuild their lives <br></br> and choose their own futures</h6>
      </div>
      <div className='flex justify-between items-center mt-10'>
        <div 
        className='space-y-4 px-8 py-8'
        style={{ backgroundColor:colors.white,}}>
          <div style={{height:160, width:160}}>
            <img src={Piggy} alt="save-money" className='block' />
          </div>
          <h6 
          className='text-md font-bold'
          style={{textTransform:"capitalize", color:colors.black}}>
            Invest in the Power Of <br></br> Women This December</h6>
      <button
        style={{ color:colors.orangeLight}}
        className="px-3 py-2 font-semibold">
        DONATE NOW
      </button>
        </div>
        <div 
        className='space-y-4 px-8 py-8'
        style={{ backgroundColor:colors.white}}>
          <div style={{height:160, width:160}}>
            <img src={Student} alt="save-money" className='block' />
          </div>
          <h6 
          className='text-md font-bold'
          style={{textTransform:"capitalize", color:colors.black}}>
           Donate to return 4.3M <br></br> children to school</h6>
      <button
        style={{ color:colors.orangeLight}}
        className="px-3 py-2 font-semibold">
        DONATE NOW
      </button>
        </div>
        <div 
        className='space-y-3 px-8 py-8'
        style={{ backgroundColor:colors.white}}>
          <div style={{height:160, width:160}}>
            <img src={Volunteer} alt="save-money" className='block' />
          </div>
          <h6 
          className='text-md font-bold'
          style={{textTransform:"capitalize", color:colors.black}}>
           Join hands to ensure <br></br> a long life for all</h6>
      <button
        style={{ color:colors.orangeLight}}
        className="px-3 py-2 font-semibold">
        DONATE NOW
      </button>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Donate