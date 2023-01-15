import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./Footer";
import { Helmet } from 'react-helmet';

function HomePage() {
  return (
    <div>
      <Helmet><title>SEAS Tech | Home</title></Helmet>
      <NavBar />
      <MainPage />
      <AboutUs />
      <ContactUs />
      <Footer />
      <ScrollToTop smooth color="#3ab54a" width="" />
    </div>
  );
}
  
export default HomePage;
  