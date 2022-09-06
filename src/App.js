
//importing components
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Donate from './components/Donate';


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
      <div>
        <div>
          <h4>Rescue</h4>
          <p>Become part of the rescue club today</p>
        </div>
        <div>
        <h4>What we do?</h4>
        <ul>
          <li>Our programs</li>
          <li>Where we work</li>
          <li>Stories</li>
          <li>Our Impact</li>
        </ul>
        </div>
        <div>
        <h4>About Us</h4>
        <ul>
          <li>Our Story</li>
          <li>Our blog</li>
          <li>Our Patners</li>
          <li>Contact Us</li>
        </ul>
        </div>
        <div>
        <h4>Get Involved</h4>
        <ul>
          <li>Fundraise for us</li>
          <li>Come to an event</li>
          <li>Accomdation</li>
        </ul>
        </div>
        <div>
          <h5>Join And Power Up our Club</h5>
        </div>
      </div>
   </div>
  );
}

export default App;
