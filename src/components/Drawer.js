import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RLink } from 'react-router-dom';

function Drawer() {
  
  const path = window.location.href;

  const[showDrawer, setShowDrawer] = useState(false);

  return (
    <div>
      {showDrawer 
      ? (<button
          className="flex text-4xl text-white items-center cursor-pointer absolute left-10 top-6 z-50"
          onClick={() => setShowDrawer(!showDrawer)}>
          <Icon icon="material-symbols:close" />
        </button>) 
      : (<button className="absolute cursor-pointer left-10 top-6" onClick={() => setShowDrawer(!showDrawer)} ><Icon icon="humbleicons:view-list" height="40" color="white"/></button>)   
      }
      <div className={` top-0 h-[50vh] w-[60vw] bg-green-500 text-white absolute ease-in-out duration-300 
      ${showDrawer ? "translate-x-0 " : "-translate-x-full"} `}>
        <ul className="mt-12 mb-6 p-8 font-semibold">
          <li className="mb-2 hover:text-green-900">
            { path === "http://localhost:3000/" 
            ? <Link to="home" spy={true} smooth={true} className="flex"><Icon icon="material-symbols:home" className="m-1" />Home</Link>
            : <RLink to="/" className="cursor-pointer hover:text-green-900 flex"><Icon icon="material-symbols:home" className="m-1" />Home</RLink>
            }
          </li>
          <li className="mb-2 hover:text-green-900">
            { path === "http://localhost:3000/"
            ? <Link to="aboutus" spy={true} smooth={true}  className="flex"><Icon icon="mdi:about" className="m-1" />About Us</Link>
            : <RLink to="/aboutus" className="cursor-pointer hover:text-green-900 flex"><Icon icon="mdi:about" className="m-1" />About Us</RLink>
            }
            </li>
          <li className="mb-2">
          <div className="relative group ">
          <button className="cursor-pointer hover:text-green-900 flex"><Icon icon="ic:sharp-miscellaneous-services" className="m-1" />Services</button>
            <div className="absolute hidden group-hover:block">
              <div className="px-6 pt-2 pb-4 bg-green-500 flex flex-col flex-wrap">
              <div><RLink to="/iot" className="cursor-pointer hover:text-green-900 flex"><Icon icon="eos-icons:iot" className="mt-1 mr-2" />IoT</RLink></div>
              <div><RLink to="/automation" className="cursor-pointer hover:text-green-900 flex"><Icon icon="mdi:home-automation" className="mt-1 mr-2"/>Automation</RLink></div>
              <div><RLink to="/energy" className="cursor-pointer hover:text-green-900 flex"><Icon icon="material-symbols:energy-program-time-used" className="mt-1 mr-2"/>Energy Management</RLink></div>
              </div>
            </div>
          </div>
        </li>
          <li className="mb-2 hover:text-green-900">
            { path === "http://localhost:3000/"
            ? <Link to="contactus" spy={true} smooth={true}  className="flex"><Icon icon="material-symbols:contact-mail-rounded" className="m-1" />Contact Us</Link>
            : <RLink to="/contactus" className="cursor-pointer hover:text-green-900 flex"><Icon icon="material-symbols:contact-mail-rounded" className="m-1" />Contact Us</RLink>
            }
            </li>
        </ul>
      </div>
    </div>
  );
}
  
export default Drawer;