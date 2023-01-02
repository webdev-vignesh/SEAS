import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import HomePage from "./HomePage";
import ScrollToTop from "react-scroll-to-top";

function MainPage() {
    return (
      <div>
        <HomePage />
        <AboutUs />
        <ContactUs />
        <ScrollToTop smooth color="#3ab54a" width="" />
      </div>
    );
  }
  
  export default MainPage;
  