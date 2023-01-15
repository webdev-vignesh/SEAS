import Footer from './Footer';
import NavBar from './NavBar';
import ScrollToTop from "react-scroll-to-top";


function ContactUs() {
    return (
      <div id="contactPage">
        <NavBar />
        <div className="">
          <h1>Get In Touch</h1>
          <p>Want to find out how SEAS can solve problems specific to your business? Let's talk.</p>
        </div>
        <ScrollToTop smooth color="#3ab54a" width="" />
        <Footer />
      </div>
    );
  }
  
  export default ContactUs;
  