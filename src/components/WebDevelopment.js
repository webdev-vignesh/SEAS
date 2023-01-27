import web from '../assets/web-design.png';
import web1 from '../assets/web-design1.png';
import NavBar from './NavBar';
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ContactPage from './ContactPage';
import Footer from './Footer';

function IoT() {
  return (
    <div id="iot" className="flex flex-col text-white bg-gradient-to-t from-[#0052D4] h-full md:h-[100vh] ">
      <Helmet><title>SEAS Tech | Web Services</title></Helmet>
      <NavBar className="flex"/>
      <div className="text-center flex-1 mx-2 my-6">
        <h1 className="text-2xl text-center font-bold ">Web Development Services</h1>
        <p>
            At SEAS, we specialize in creating custom websites that are tailored to meet the unique needs of our clients. 
            Our team of experienced web developers is dedicated to delivering high-quality, responsive, and user-friendly websites that help businesses reach their online goals.        
        </p>
        <br />
        <div className="text-left grid grid-cols-1 md:grid-cols-3 ">         
          <div className="flex flex-col md:flex-row m-4 md:mt-0 ">
            <img src={web} alt="web-design"  />
            <br/>
            <ul className="ml-8">
                <h6 className="font-semibold md:w-60 lg:w-80">Our services include:</h6>
                <li>▪️ Website design and development</li>
                <li>▪️ Custom web applications</li>
                <li>▪️ E-commerce development</li>
                <li>▪️ SEO and digital marketing</li>
            </ul>
            <br/>
            <img className="flex-end" src={web1} alt="web-development"  />
          </div>
        </div>
        <p>
        If you're looking for a reliable partner to help you achieve your online goals, look no further than SEAS.
        </p>
        <p> 
        <span><Link to="/" element={<ContactPage/>} >Contact us</Link></span> today to schedule a consultation and learn more about our web development services.
        </p>
      </div>
      <ScrollToTop smooth color="#3ab54a" width="" />
      <Footer className="flex"/>
    </div>
  );
}
  
export default IoT;  