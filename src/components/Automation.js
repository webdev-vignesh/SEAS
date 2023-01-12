import HA from '../assets/homeAutomation.jpg';
import IA1 from '../assets/industrialAutomation1.jpg';
import IA2 from '../assets/industrialAutomation2.jpg';
import Footer from './Footer';
import NavBar from './NavBar';

function Automation() {
  return (
    <div id="energy" className="flex flex-col bg-gradient-to-t from-[#5433FF] to-[#3AB54A] md:h-[100vh] lg:h-full">
      <NavBar className="flex " />
      <div className="flex-1 text-white m-2"> 
        <h1 className="text-2xl text-center font-bold">Automation</h1>
        <p className="text-center"> We specialize in providing industrial, home automation solutions and services to help our clients increase efficiency, reduce costs, and improve their overall operations. Our team of certified professionals has extensive experience in the industry and is dedicated to delivering exceptional service and support.</p> <br/>
        <div className=" grid gird-cols-1  md:grid-cols-2 grid-rows-2 gap-1">
          <div className="m-2 flex gap-2 order-2 md:order-none">
            <img src={IA1} alt ="industrial automation" className="h-fit w-2/4"/>
            <img src={IA2} alt ="industrial automation" className="h-fit w-2/4"/>
          </div>
          <div className="m-2 order-1 md:order-none">
            <p className="font-semibold">▪️ Industrial Automation</p>
            <p>If you are looking to streamline your industrial operations and increase productivity, we can help. We offer a range of automation solutions, including process control systems to help you optimize your processes and improve your production.</p>
          </div>

          <div className="m-2 order-3 md:order-none">
            <p className="font-semibold">▪️ Home Automation</p>
            <p>We also offer home automation services to help you create a smarter, more convenient, and more energy-efficient home. Our team can help you design and install automation systems for lighting, heating and cooling, security, and other systems, giving you complete control over your home from a single device.</p>
          </div>
          <div className="m-2 order-4 md:order-none">
            <img src={HA} alt ="home automation" className=""/>
          </div>
        </div>
        <p className="text-center mt-3 mb-1">We don't just stop at installation, we also offer ongoing support and maintenance services to ensure that your automation systems are always running smoothly.
        Our team is available to provide expert advice, troubleshooting, and repair services as needed.
        We look forward to working with you and helping you take your operations to the next level. Please don't hesitate to contact us for more information or to request a quote.
        </p>  
      </div> 
      <Footer className="flex"/>
    </div>
  );
}
  
export default Automation;
  