import BgImage from '../assets/home_img.jpg';
import SP1 from '../assets/solar_panel_1.jpg';
import SP2 from '../assets/solar_panel_2.jpg';
import SP3 from '../assets/solar_panel_3.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Autoplay, Pagination } from 'swiper';

function MainPage() {
    return (
      <div id="home" className="h-auto lg:h-[85vh] pb-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 " style= {{backgroundImage: `url(${BgImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: "center", backgroundSize: "cover",}}>
        <div className="pl-10 mt-14 col-span-2" style={{ fontFamily: "Poppins, sans-serif"}}>
          <h1 className="text-4xl text-white">Welcome to <span className="text-6xl">SEAS!</span></h1>
          <p className="mt-10 text-white text-2xl">A leading provider of innovative
           IoT solutions, Automation and Solar energy management
          for industrial and commercial purposes.</p>
        </div>
        <div className=" h-full m-4 col-span-2">
          {/* <Swiper 
          navigation={true}  
          modules={[ Navigation, Autoplay, Pagination]} 
          pagination={{ clickable: true}}
          loop={true} 
          autoplay={{
            delay: 2000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          className='mySwiper'>
            <SwiperSlide>
              <img 
                className="h-96"
                src={SP1}
                alt="solar panel 1"/>
            </SwiperSlide>
            <SwiperSlide>
              <img 
                className="h-96 w-auto"
                src={SP2}
                alt="solar panel 2"/>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-96"
                src={SP3}
                alt="solar panel 3"/>
            </SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    );
  }
  
  export default MainPage;
  