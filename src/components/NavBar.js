import {Link} from 'react-scroll';
import { Link as RLink } from "react-router-dom";
import Logo from '../assets/logo.png';
import Drawer from './Drawer';
import MainPage from './HomePage';

function NavBar() {
  
  const path = window.location.href;
  
  return (
    <nav className="flex justify-between bg-[#3AB54A]">
      <ul className="hidden sm:flex space-x-20 p-5 ml-6 text-xl font-semibold text-white">
        <li className="mt-2"><RLink to="/SEAS" element={<MainPage/>} className="hover:text-green-900 ">Home</RLink></li>
        <li className="mt-2">
          {path === "http://localhost:3002/SEAS" 
          ? <Link to="aboutus" spy={true} smooth={true} className="cursor-pointer hover:text-green-900">About Us</Link>
          : <RLink to="/aboutus" className="cursor-pointer hover:text-green-900">About Us</RLink>}</li>
        <li className="mt-2">
          <div className="relative group ">
            <button className="cursor-pointer hover:text-green-900">Services</button>
            <div className="absolute hidden group-hover:block">
              <div className="px-6 pt-2 pb-4 bg-green-500 flex flex-col-reverse flex-wrap">
                <div><RLink to="/energy" className="cursor-pointer hover:text-green-900 ">Energy Management</RLink></div>
                <div><RLink to="/automation" className="cursor-pointer hover:text-green-900 ">Automation</RLink></div>
                <div><RLink to="/iot" className="cursor-pointer hover:text-green-900 ">IoT</RLink></div>
              </div>
            </div>
          </div>
        </li>
        <li className="mt-2">
          {path === "http://localhost:3002/SEAS" 
          ? <Link to="contactus" spy={true} smooth={true} className="cursor-pointer hover:text-green-900">Contact Us</Link>
          : <RLink to="/contactus" className="cursor-pointer hover:text-green-900">Contact Us</RLink>}
        </li>
      </ul>
      <div className="sm:invisible">
        <Drawer />
      </div>
      <div className="navbar-logo grid col-start-4 justify-items-end mr-6">
          <RLink to="/"><img src={Logo} alt='seas-logo' className='h-24 cursor-pointer' /></RLink>
      </div>
    </nav>
  );
}

export default NavBar;
  