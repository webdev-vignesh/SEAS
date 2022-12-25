import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import HomePage from "./HomePage";

function MainPage() {
    return (
      <div>
        <div id="home"><HomePage /></div>
        <div id="about"><AboutUs /></div>
        <div id="contact"><ContactUs /></div>
      </div>
    );
  }
  
  export default MainPage;
  