import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link } from 'react-scroll';

function Drawer() {
    
  const[showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="sm:invisible" >
      {showDrawer 
      ? (<button
          className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowDrawer(!showDrawer)}>
          <Icon icon="material-symbols:close" />
        </button>) 
      : (<button className="fixed cursor-pointer left-10 top-6" onClick={() => setShowDrawer(!showDrawer)} ><Icon icon="humbleicons:view-list" height="40" color="white"/></button>)   
      }
      <div className={` top-0 w-[60vw] bg-green-500 text-white fixed h-full ease-in-out duration-300 
      ${showDrawer ? "translate-x-0 " : "-translate-x-full"} `}>
        <ul className="mt-8 mr-4 p-8">
          <li className="mb-2 hover:text-green-900"><Link to="home" spy={true} smooth={true} className="flex"><Icon icon="material-symbols:home" className="m-1" />Home</Link></li>
          <li className="mb-2 hover:text-green-900"><Link to="aboutus" spy={true} smooth={true}  className="flex"><Icon icon="mdi:about" className="m-1" />About</Link></li>
          <li className="mb-2"><Link to="/services" className="flex"><Icon icon="ic:sharp-miscellaneous-services" className="m-1" />Services</Link></li>
          <li className="mb-2 hover:text-green-900"><Link to="contactus" spy={true} smooth={true}  className="flex"><Icon icon="material-symbols:contact-mail-rounded" className="m-1" />Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
  
export default Drawer;
  