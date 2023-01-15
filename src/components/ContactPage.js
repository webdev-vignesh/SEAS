import Footer from './Footer';
import NavBar from './NavBar';
import ScrollToTop from "react-scroll-to-top";
import { Helmet } from 'react-helmet';

function ContactUs() {
    return (
      <div id="contactPage">
        <Helmet><title>SEAS Tech | Contact</title></Helmet>
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
  