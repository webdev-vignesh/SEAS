import Team from '../assets/service_img.jpeg';
import Footer from './Footer';
import NavBar from './NavBar';

function Automation() {
    return (
      <div id="automation">
        <NavBar />
        <img src={Team} alt="aboutus" className="w-full h-[100vh]" />   
        <Footer />
      </div>
    );
}
  
export default Automation;
  