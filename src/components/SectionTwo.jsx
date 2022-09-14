import React from 'react'
//importing deal sticker
import Deal from '../assets/deal.png'

//importing colors
import {colors} from '../assets/colors'


const SectionTwo = () => {
  return (
    <div className='md:flex items-center justify-between p-5 px-10'>
  <div>
    <img
    className='h-80 w-80'
     src={Deal} style={{display:"block"}} alt='donate-money' />
  </div>
  <p style={{color:colors.black}}
      className='text-lg font-bold'>Save homeless people with 
    <br></br> 
    real and enjoyable action
    </p>
    <div className='space-y-1'>
      <h4 style={{color:colors.black}}
      className='text-base font-bold'>80%</h4>
      <h6 style={{color:colors.black}}
      className='text-sm font-light'>Benefactors Saved</h6>
    </div>
    <div className="mr-5 space-y-1">
    <h4 style={{color:colors.black}}
      className='text-base font-bold'>20 June</h4>
    <h6 style={{color:colors.black}}
      className='text-sm font-light'>World Refugee Day</h6>
    </div>
 </div>
  )
}

export default SectionTwo