import {Link} from 'react-scroll';
import Logo from '../assets/logo.png';
import Drawer from './Drawer';

function NavBar() {
    return (
      
      <nav className="navbar grid grid-cols-4">
          <ul className="hidden sm:grid grid grid-cols-4 col-start-1 col-span-2 justify-items-center p-5 text-lg text-white">
            <li className="mt-2 cursor-pointer hover:text-green-900"><Link to="home" spy={true} smooth={true}>Home</Link></li>
            <li className="mt-2 cursor-pointer hover:text-green-900"><Link to="aboutus" spy={true} smooth={true}>About</Link></li>
            <li className="mt-2"><Link to="services">Services</Link></li>
            <li className="mt-2 cursor-pointer hover:text-green-900"><Link to="contactus" spy={true} smooth={true}>Contact</Link></li>
          </ul>
          <div>
            <Drawer />
          </div>
          <div className="navbar-logo grid col-start-4 justify-items-end mr-6">
              <Link to="home" spy={true} smooth={true}><img src={Logo} alt='seas-logo' className='h-24 cursor-pointer' /></Link>
          </div>
      </nav>

    );
  }
  
  export default NavBar;
  