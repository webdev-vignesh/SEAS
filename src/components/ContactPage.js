import contact_img from '../assets/contact_img.jpg';
import Footer from './Footer';
import NavBar from './NavBar';

function ContactUs() {
    return (
      <div id="contactPage">
        <NavBar />
        <img src={contact_img} alt="contact page" className="h-[100vh] w-full"/>
        <h1>Get In Touch</h1>
        <p>Want to find out how SEAS can solve problems specific to your business? Let's talk.</p>
        <Footer />
      </div>
    );
  }
  
  export default ContactUs;
  