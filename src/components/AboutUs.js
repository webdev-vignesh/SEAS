import BgImage from '../assets/aboutus_bg2.png';
import Mission from '../assets/mission1.png';
import Logo from '../assets/logo_old.png';
import Wwd from '../assets/whatwedo1.jpg';

function AboutUs() {
    return (
      <div id="aboutus" className="p-2 text-white h-auto md:h-[80vh] lg:h-auto " style={{backgroundImage : `url(${BgImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',}}>
          <p className="font-bold text-4xl text-center">About SEAS</p>
          <div className="grid grid-rows-6 grid-cols-1 md:grid-cols-2 grid-rows-3 ">
            <div>
              <p className="font-bold text-left mt-6 md:mt-2 text-2xl">⇗ OUR MISSION</p>
              <p className="m-1">
                To help businesses and organizations in increasing efficiency, reducing costs, and improving overall operations by utilising cutting-edge technologies. 
                We specialize in providing automation solutions for manufacturing and industrial processes, IoT solutions for asset tracking and monitoring, and energy management solutions for reducing energy consumption and costs.
              </p>
            </div>
            <div>            
              <img src={Mission} alt="our mission" className="h-3/4 w-3/4"/>
            </div>
            <div>
              <p className="font-bold text-center text-2xl mt-6 md:mt-2">⇌ WHO WE ARE</p>
              <p className="m-1">
                We are a team of commited experts who are enthusiastic about technology and applying it to solve problems in the real world.
                We have been in business for 4 years and have a reputation for providing our clients with cutting-edge, high-quality solutions.
                Our team of professionals has extensive knowledge in the areas of automation, Internet of Things, and energy management. 
              </p>
            </div>
            <div>
              <img src={Logo} alt="SEAS logo" className=" h-3/4 w-3/4" />
            </div>
            <div>
              <p className="font-bold text-right text-2xl mt-6 md:mt-2">⇯ WHAT WE DO</p>
              <p>
                We work closely with our clients to understand their individual requirements and design our solutions to match those requirements. 
                We understand that every business is unique, and we take great pleasure in providing exceptional customer service and building strong relationships with our clients.
              </p>
            </div>
            <div>
              <img src={Wwd} alt="SEAS logo" className=" h-3/4 w-3/4" />
            </div>
          </div>
        </div>
    );
  }
  
  export default AboutUs;
  