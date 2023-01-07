import {Link} from 'react-scroll';
import { Link as RLink } from "react-router-dom";
import Logo from '../assets/logo.png';
import Drawer from './Drawer';
import MainPage from './MainPage';

function NavBar() {
  
  const path = window.location.href;
  
  return (
    <nav className="navbar grid grid-cols-4 ">
        <ul className="hidden sm:grid grid-cols-4 col-start-1 col-span-2 justify-items-center p-5 text-lg text-white">
          <li className="mt-2"><RLink to="/" element={<MainPage/>} className="hover:text-green-900">Home</RLink></li>
          <li className="mt-2 ">
            {path === "http://localhost:3000/" 
            ? <Link to="aboutus" spy={true} smooth={true} className="cursor-pointer hover:text-green-900">About Us</Link>
            : <RLink to="/" className="cursor-pointer hover:text-green-900">About Us</RLink>}</li>
          <li className="mt-2">
            <div className="relative group ">
              <button className="cursor-pointer hover:text-green-900">Services</button>
              <div className="absolute hidden group-hover:block">
                <div className="px-6 pt-2 pb-4 bg-green-500 flex flex-wrap">
                  <div><RLink to="/energy" className="cursor-pointer hover:text-green-900">Energy Management</RLink></div>
                  <div><RLink to="/automation" className="cursor-pointer hover:text-green-900">Automation</RLink></div>
                  <div><RLink to="/iot" className="cursor-pointer hover:text-green-900">IoT</RLink></div>
                </div>
              </div>
            </div>
          </li>
          <li className="mt-2">
          {path === "http://localhost:3000/" 
            ? <Link to="contactus" spy={true} smooth={true} className="cursor-pointer hover:text-green-900">Contact Us</Link>
            : <RLink to="/" className="cursor-pointer hover:text-green-900">Contact Us</RLink>}
          </li>
        </ul>
        <div>
          <Drawer />
        </div>
        <div className="navbar-logo grid col-start-4 justify-items-end mr-6">
            <RLink to="/"><img src={Logo} alt='seas-logo' className='h-24 cursor-pointer' /></RLink>
        </div>
    </nav>

  );
}
  
export default NavBar;
  