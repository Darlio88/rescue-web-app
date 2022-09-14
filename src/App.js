
//importing components
import Navbar from './components/Navbar';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Donate from './components/Donate';
import BottomBar from './components/BottomBar';


function App() {
  return (
   <div>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Donate />
      <BottomBar />
   </div>
  );
}

export default App;
