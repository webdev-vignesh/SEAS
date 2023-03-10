import {Link} from 'react-scroll';
import { Link as RLink } from "react-router-dom";
import Logo from '../assets/logo.png';
import Drawer from './Drawer';
import MainPage from './HomePage';

function NavBar() {
  
  const path = window.location.href;
  
  return (
    <nav className="sticky top-0 flex justify-between bg-[#3AB54A] h-max border-b shadow-md border-green-600">
      <ul className="hidden sm:flex space-x-20 p-5 ml-6 text-xl font-semibold text-white">
        <li className="mt-2"><RLink to="/" element={<MainPage/>} className="hover:text-green-900 ">Home</RLink></li>
        <li className="mt-2">
          {path === "http://localhost:3002/home" 
          ? <Link to="aboutus" spy={true} smooth={true} className="cursor-pointer hover:text-green-900">About Us</Link>
          : <RLink to="/aboutus" className="cursor-pointer hover:text-green-900">About Us</RLink>}</li>
        <li className="mt-2">
          <div className="relative group ">
            <button className="cursor-pointer hover:text-green-900">Services</button>
            <div className="absolute hidden group-hover:block">
              <div className="px-6 pt-2 pb-4 bg-green-500 flex flex-col flex-wrap">
                <div><RLink to="/iot" className="cursor-pointer hover:text-green-900 ">IoT</RLink></div>
                <div><RLink to="/automation" className="cursor-pointer hover:text-green-900 ">Automation</RLink></div>
                <div><RLink to="/energy" className="cursor-pointer hover:text-green-900">Energy Management</RLink></div>
                <div><RLink to="/web" className="cursor-pointer hover:text-green-900 ">Web Development</RLink></div>
              </div>
            </div>
          </div>
        </li>
        <li className="mt-2">
          {path === "http://localhost:3002/home" 
          ? <Link to="contactus" spy={true} smooth={true} className="cursor-pointer hover:text-green-900">Contact Us</Link>
          : <RLink to="/contactus" className="cursor-pointer hover:text-green-900">Contact Us</RLink>}
        </li>
      </ul>
      <div className="sm:invisible">
        <Drawer />
      </div>
      <div className="mr-6">
          <RLink to="/"><img src={Logo} alt='seas-logo' className='h-20 cursor-pointer' /></RLink>
      </div>
    </nav>
  );
}

export default NavBar;