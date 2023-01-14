import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import IoT from "./components/IoT";
import Energy from "./components/Energy";
import Automation from "./components/Automation";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <div className="App bg-[#3AB54A]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/iot" element={<IoT />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/SEAS" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
