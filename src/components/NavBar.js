import Logo from '../assets/logo.png';
import Drawer from './Drawer';


function NavBar() {
    return (
      
      <nav className="navbar grid grid-cols-4" style={{ height: '15vh'}}>
          <div className="navbar-logo">
              <a href="/home"><img src={Logo} alt='seas-logo' className='h-16 m-3' /></a>
          </div>
          <ul className="hidden sm:grid grid grid-cols-4 col-start-3 col-span-2 justify-items-center p-5">
            <li><a href="/home">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/aboutus">About</a></li>
            <li><a href="/contactus">Contact</a></li>
          </ul>
          <Drawer />
      </nav>

    );
  }
  
  export default NavBar;
  