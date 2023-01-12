import contact_img from '../assets/contact_img.jpg';

function ContactUs() {
    return (
      <div id="contactus">
        <img src={contact_img} alt="contact page" className="h-[100vh] w-full"/>
        <h1>Get In Touch</h1>
        <p>Want to find out how SEAS can solve problems specific to your business? Let's talk.</p>
        
      </div>
    );
  }
  
  export default ContactUs;
  