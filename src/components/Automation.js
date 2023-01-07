import AutomationBg from '../assets/service_img.jpeg';
import Footer from './Footer';
import NavBar from './NavBar';

function Automation() {
  return (
    <div id="energy" className="flex flex-col h-screen">
      <NavBar className="flex" />
      <div className="flex-1 text-[#5E0120]" /* style={{backgroundImage: `url(${AutomationBg})`, backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover",}}> */ >
        <h1 className="text-2xl text-center">Automation</h1>
        <p className="text-center"> We specialize in providing industrial automation and home automation solutions and services to help our clients increase efficiency, reduce costs, and improve their overall operations. Our team of certified professionals has extensive experience in the industry and is dedicated to delivering exceptional service and support.</p> <br/>
        <p>Industrial Automation</p>
        <p>If you are looking to streamline your industrial operations and increase productivity, we can help. We offer a range of automation solutions, including process control systems to help you optimize your processes and improve your production.</p>
        <br/>
        <p>Home Automation</p>
        <p>We also offer home automation services to help you create a smarter, more convenient, and more energy-efficient home. Our team can help you design and install automation systems for lighting, heating and cooling, security, and other systems, giving you complete control over your home from a single device.</p>
        <br/>
        <p className="text-center">We don't just stop at installation, we also offer ongoing support and maintenance services to ensure that your automation systems are always running smoothly. <br/>
        Our team is available to provide expert advice, troubleshooting, and repair services as needed.</p>  
        <br/>
        <p> We look forward to working with you and helping you take your operations to the next level. Please don't hesitate to contact us for more information or to request a quote.</p>
      </div> 
      <Footer className="flex"/>
    </div>
  );
}
  
export default Automation;
  