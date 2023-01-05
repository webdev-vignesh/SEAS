import MainPage from "./components/MainPage";
import { Routes, Route } from "react-router-dom";
import IoT from "./components/IoT";
import Energy from "./components/Energy";
import Automation from "./components/Automation";

function App() {
  return (
    <div className="App bg-[#3AB54A]">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/energy" element={<Energy />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/iot" element={<IoT />} />
      </Routes>
    </div>
  );
}

export default App;
