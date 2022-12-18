import Team from '../assets/aboutus_img.jpg';

function AboutUs() {
    return (
      <div className="AboutUs" style={{ height: '80vh'}}>
        <img src={Team} alt="aboutus" style={{ height: '80vh', width: '100%'}} />
      </div>
    );
  }
  
  export default AboutUs;
  