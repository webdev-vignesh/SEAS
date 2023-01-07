import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./Footer";

function MainPage() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <AboutUs />
      <ContactUs />
      <Footer />
      <ScrollToTop smooth color="#3ab54a" width="" />
    </div>
  );
}
  
export default MainPage;
  