import React from 'react'

import {colors} from '../assets/colors'
import City from '../assets/smart-city.png'
import People from '../assets/protest.png'
import World from '../assets/world.png'

const SectionThree = () => {
  return (
    <div className='flex flex-row justify-between p-5 px-10'>
    <div className='flex flex-col items-start space-y-3'>
      <div style={{height:"64px", width:"64px"}}>
      <img className="block" src={World} alt="world"/>
      </div>
      <h4 
      style={{color:colors.black}}
      className='text-base font-bold'>Save The World</h4>
      <h6 
      style={{color:colors.black}}
      className='text-sm '>Each year on June 20, <br></br>
        the world celebrates World Refugee Day. <br></br>
        This year, the focus will be on the right to seek <br></br>
       safety in times of peril</h6>
    </div>
    <div className='flex flex-col items-start space-y-3'>
      <div style={{height:"64px", width:"64px"}}>
      <img className="block" src={City} alt="world"/>
      </div>
      <h4 
      style={{color:colors.black}}
      className='text-base font-bold'>Comfortable City</h4>
      <h6 
      style={{color:colors.black}}
      className='text-sm '>For many people, country life means a <br></br>
        peaceful existence that is quieter,<br></br>
        cleaner, and closer to the natural world</h6>
    </div>
    <div className='flex flex-col items-start space-y-3'>
      <div style={{height:"64px", width:"64px"}}>
      <img className="block" src={People} alt="world"/>
      </div>
      <h4 
      style={{color:colors.black}}
      className='text-base font-bold'>Humane Treatment</h4>
      <h6 
      style={{color:colors.black}}
      className='text-sm '>People forced to flee should be treated <br></br>
                with respect and dignity. They are<br></br>
        entitled to safety and dignity
    </h6>
    </div>
  </div>
  )
}

export default SectionThree