import EnergyBg from '../assets/energy_bg.jpg';
import Footer from './Footer';
import NavBar from './NavBar';
import ScrollToTop from "react-scroll-to-top";

function Energy() {
  return (
    <div id="energy" className="flex flex-col h-screen">
      <NavBar className="flex" />
      <div className="flex-1 text-[#5E0120]" style={{backgroundImage: `url(${EnergyBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover",}}>
        <h1 className="text-2xl text-center font-bold">Energy Management</h1>
        <br />
        <p className="text-center ml-2 mr-2">We offer energy management services to help you optimize your energy use and reduce your carbon footprint. Our team can conduct energy audits, provide recommendations for energy-efficient upgrades, and help you implement strategies to reduce your energy consumption.</p> <br/>
        <p className="ml-2">▪️ If you are looking to switch to renewable energy sources, our team can help you design and install a custom solar panel system for your industrial or commercial property. We will work with you to determine the best location for the panels, as well as the most efficient and cost-effective system for your needs.</p>
        <p className="ml-2">▪️ Proper maintenance is key to ensuring that your solar panel system is running at its best. Our team offers a range of services, including cleaning and inspection, to keep your system running smoothly. We also offer repairs and troubleshooting services if any issues arise.</p>
        <br/>
        <p className="text-center">With years of experience in the industry, we have the knowledge and skills to handle any project, big or small. <br/>
        Our team of highly trained and experienced professionals is dedicated to providing top-quality service to our clients.</p>  
        <br/>
      </div> 
      <ScrollToTop smooth color="#3ab54a" width="" />
      <Footer className="flex"/>
    </div>
  );
}
  
export default Energy;
  