import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-green-800">
      <NavBar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
