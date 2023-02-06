import Footer from './Footer';
import NavBar from './NavBar';
import ScrollToTop from "react-scroll-to-top";
import apfcPanel from '../assets/apfc-panel.png';
import solarPanel from '../assets/solar-install.jpg';
import { Helmet } from 'react-helmet';

function Energy() {
  return (
    <div id="energy" className="flex flex-col h-screen">
      <Helmet><title>SEAS Tech | Energy Management</title></Helmet>
      <NavBar className="flex" />
      <div className="flex-1 text-white bg-gradient-to-t from-[#182848] to-[#4b6cb7] " >
        <br/>
        <h1 className="text-2xl text-center font-bold">Energy Management</h1>
        <br />
        <p className="text-center ml-2 mr-2">We offer energy management services to help you optimize your energy use and reduce your carbon footprint.</p> 
        <p className="text-center ml-2 mr-2"> Our team can conduct energy audits, provide recommendations for energy-efficient upgrades, </p> 
        <p className="text-center ml-2 mr-2">and help you implement strategies to reduce your energy consumption.</p>
        <br/>
        <div className="flex-wrap md:flex md:justify-around ">
          <div className="p-4 md:p-0 md:ml-2 lg:ml-6">
            <img src={apfcPanel} alt="apfc panel" className="md:h-64 md:w-52 lg:w-64"/>
          </div>
          <div className="p-4 md:p-0 ">
            <h2>Our Energy Management services includes:</h2>
            <p>▪️ Solar panel installation</p>
            <p>▪️ APFC panel installation</p>
          </div>
          <div className="p-4 md:p-0 md:mr-2 lg:mr-6">
            <img src={solarPanel} alt="solar panel" className="md:h-64 md:w-52 lg:w-64"/>
          </div>  
        </div>
        <p className="text-center mt-1">With years of experience in the industry, we have the knowledge and skills to handle any project, big or small. <br/>
        Our team of highly trained and experienced professionals is dedicated to providing top-quality service to our clients.</p>  
        <br/>
      </div> 
      <ScrollToTop smooth color="#3ab54a" width="" />
      <Footer className="flex"/>
    </div>
  );
}
  
export default Energy;
  