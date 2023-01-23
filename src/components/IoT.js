import iot from '../assets/iot.jpg';
import Footer from './Footer';
import NavBar from './NavBar';
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from 'react-helmet';

function IoT() {
  return (
    <div id="iot" className="flex flex-col text-white bg-gradient-to-t from-[#0052D4] h-full md:h-[100vh] ">
      <Helmet><title>SEAS Tech | IoT</title></Helmet>
      <NavBar className="flex"/>
      <div className="text-center flex-1 mx-2 my-6">
        <h1 className="text-2xl text-center font-bold ">Internet of Things</h1>
        <p>
          Our company specializes in providing innovative IoT solutions and services to help businesses and organizations optimize their operations and gain valuable insights from connected devices and data.
          We work closely with our clients to understand their unique needs and challenges, and design custom solutions that deliver measurable results.
        </p>
        <br />
        <div className="text-left grid grid-cols-1 md:grid-cols-3 ">
          <ul className="ml-8 mb-4">
            <h6 className="font-semibold ">Our IoT solutions include:</h6>
            <li>▪️ Smart device development and integration</li>
            <li>▪️ Cloud-based data management and analytics</li>
            <li>▪️ Remote monitoring and control</li>
            <li>▪️ Automation and optimization of industrial processes</li>              <li>▪️ Predictive maintenance and asset tracking</li>
          </ul>            
          <ul className="ml-8">
            <h6 className="font-semibold">Our ToT services include:</h6>
            <li>▪️ IoT strategy and consulting</li>
            <li>▪️ System design and implementation</li>
            <li>▪️ Device and data security</li>
            <li>▪️ Ongoing support and maintenance</li>
          </ul>
          <div className=" m-4 md:mt-0">
            <img src={iot} alt="internet of things"  />
          </div>
        </div>
        <p>
          Whether you're looking to improve efficiency in your manufacturing facility, optimize your supply chain, or gain insights from your product usage data, we can help.
        </p>
      </div>
      <ScrollToTop smooth color="#3ab54a" width="" />
      <Footer className="flex"/>
    </div>
  );
}
  
export default IoT;  