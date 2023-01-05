import Team from '../assets/contact_img.jpg';
import Footer from './Footer';
import NavBar from './NavBar';

function Energy() {
    return (
      <div id="energy">
        <NavBar />
        <img src={Team} alt="aboutus" className="w-full h-[100vh]" />   
        <Footer />
      </div>
    );
  }
  
  export default Energy;
  