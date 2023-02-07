import BgImage from '../assets/aboutus_bg2.png';
import Mission from '../assets/mission.png';
import Logo from '../assets/logo_old.png';
import Wwd from '../assets/whatwedo.jpg';

function AboutUs() {
  return (
    <div id="aboutus" className="p-4 text-white h-auto md:h-[80vh] lg:h-auto " style={{backgroundImage : `url(${BgImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',}}>
      <p className="font-bold text-4xl text-center m-4">About SEAS</p>
      
      {/* Main Content Grid start */}
      <div className="mt-6 grid grid-rows-6 grid-cols-1 md:grid-cols-2 grid-rows-3 ">
        
        {/* Mission Image */}
        <div className="order-2 md:order-none">            
          <img src={Mission} alt="our mission" className="h-full md:h-3/4 w-full md:w-3/4"/>
        </div>

        {/* Mission Content */}
        <div className="order-1 md:order-none">
          <p className="font-bold text-center text-2xl mt-6 md:mt-2">⇗ OUR MISSION</p>
          <p className="m-1">
            To help businesses and organizations in increasing efficiency, reducing costs, and improving overall operations by utilising cutting-edge technologies. 
            We specialize in providing automation solutions for manufacturing and industrial processes, IoT solutions for asset tracking and monitoring, and energy management solutions for reducing energy consumption and costs.
          </p>
        </div>

        {/* Who we are content */}
        <div className="order-3 md:order-none">
          <p className="font-bold text-center text-2xl mt-6 md:mt-2">⇌ WHO WE ARE</p>
          <p className="m-1">
            We are a team of commited experts who are enthusiastic about technology and applying it to solve problems in the real world.
            We have been in business for 4 years and have a reputation for providing our clients with cutting-edge, high-quality solutions.
            Our team of professionals has extensive knowledge in the areas of automation, Internet of Things, and energy management. 
          </p>
        </div>

        {/* SEAS logo Image */}
        <div className="order-4 md:order-none">
          <img src={Logo} alt="SEAS logo" className="h-full md:h-3/4 w-full md:w-3/4" />
        </div>

        {/* What we do Image */}
        <div className="order-6 md:order-none">
          <img src={Wwd} alt="What we do" className="h-full md:h-3/4 w-full md:w-3/4" />
        </div>

        {/* What we do Content */}
        <div className="order-5 md:order-none">
          <p className="font-bold text-center text-2xl mt-6 md:mt-2">⇯ WHAT WE DO</p>
          <p className="m-1">
            We work closely with our clients to understand their individual requirements and design our solutions to match those requirements. 
            We understand that every business is unique, and we take great pleasure in providing exceptional customer service and building strong relationships with our clients.
          </p>
        </div>  
      </div>
      {/* Main Content Grid end */}

    </div>
  );
}
  
export default AboutUs;  