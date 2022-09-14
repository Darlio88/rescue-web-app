import React from 'react'

//importing mother sticker
import Mother from "../assets/mother.png"

//importing colors
import { colors } from '../assets/colors'

const SectionOne = () => {
  return (
    <div className='flex justify-between items-center p-5 px-10'>
    <div className='space-y-4'>
      <h4 
      style={{color:colors.black}}
      className='font-bold text-2xl md:text-8xl'>
        Save <br></br> Refugee
      </h4>
      <p 
      className="md:font-bold"
      style={{color:colors.black}}>
        It is time to save the refugee for humanity
      </p>
      
      <button
        style={{backgroundColor:colors.orangeLight, color:colors.white, textTransform:"uppercase"}}
        className="md:px-3 md:py-2 px-1 py-1"
        >GET started</button>
     </div>
     <div >
        <img style={{display:"block"}} src={Mother} alt='refugee-mother'/>
     </div>
    </div>
  )
}

export default SectionOne