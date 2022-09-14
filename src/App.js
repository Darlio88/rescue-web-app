
//importing components
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Donate from './components/Donate';

import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


import {colors} from './assets/colors'
import Volunteer from './assets/volunteer.png'
import Piggy from './assets/piggy-bank.png'
import Student from './assets/student.png'


function App() {
  return (
   <div>
   <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Donate />
      <div className='md:flex space-y-4 md:space-y-2 flex-wrap p-5 px-10 justify-between'>
        <div>
          <h4 style={{color:colors.black}} className='md:mb-2 text-xl font-semibold'>Rescue</h4>
          <p style={{color:colors.black}}>Become part of the rescue club today</p>
        </div>
        <div>
        <h4 style={{color:colors.black}} className='md:mb-2 text-xl font-semibold'>What we do?</h4>
        <ul>
          <li style={{color:colors.black}}>Our programs</li>
          <li style={{color:colors.black}} >Where we work</li>
          <li style={{color:colors.black}}>Stories</li>
          <li style={{color:colors.black}}>Our Impact</li>
        </ul>
        </div>
        <div>
        <h4 style={{color:colors.black}} className='md:mb-2 text-xl font-semibold'>About Us</h4>
        <ul>
          <li style={{color:colors.black}}>Our Story</li>
          <li style={{color:colors.black}}>Our blog</li>
          <li style={{color:colors.black}}>Our Patners</li>
          <li style={{color:colors.black}}>Contact Us</li>
        </ul>
        </div>
        <div>
        <h4 style={{color:colors.black}} className='md:mb-2 text-xl font-semibold'>Get Involved</h4>
        <ul>
          <li style={{color:colors.black}}>Fundraise for us</li>
          <li style={{color:colors.black}}>Come to an event</li>
          <li style={{color:colors.black}}>Accomdation</li>
        </ul>
        </div>
        <div>
          <h5 style={{color:colors.black}} className='md:mb-2 text-xl font-semibold'>Join And Power Up our Club</h5>
        <ul className='flex justify-between md:px-2 mt-4 pr-10 '>
          <li style={{color:colors.black}} ><FaFacebookF /></li>
          <li style={{color:colors.black}}><FaTwitter /></li>
          <li style={{color:colors.black}}><RiInstagramFill /></li>
        </ul>
        </div>
      </div>
   </div>
  );
}

export default App;
