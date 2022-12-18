import contact_img from '../assets/contact_img.jpg';

function ContactUs() {
    return (
      <div className="ContactUs" style={{ height: '80vh'}}>
        <img src={contact_img} alt="contact page" style={{ height: '80vh', width: '100%'}}/>
      </div>
    );
  }
  
  export default ContactUs;
  