import Team from '../assets/aboutus_img.jpg';
import Footer from './Footer';
import NavBar from './NavBar';

function IoT() {
    return (
      <div id="iot">
        <NavBar />
        <img src={Team} alt="aboutus" className="w-full h-[100vh]" />   
        <Footer />
      </div>
    );
  }
  
  export default IoT;
  