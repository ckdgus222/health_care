import RoomMain from "./pages/RoomMain";
import Acting from "./pages/Acting";
import Eum from "./pages/Eum";
import Begin from "./pages/Begin.jsx";
import EndoScope from "./pages/Endoscope.jsx";
import "./App.css";
import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import data from "./Data.json";
import roomData from "./Room.json";
import equipmentData from "./Equipment.json";
import { useState } from "react";

//react router 설치

export const Health = createContext(undefined);
export const Selected = createContext(undefined);

function App() {
  const [category, setCategory] = useState("");

  return (
    <Health.Provider value={{ data, roomData, equipmentData }}>
      <Selected.Provider value={{ category, setCategory }}>
        <Routes>
          <Route path="/" element={<Begin />} />
          <Route path="endoScope" element={<EndoScope/>}/>
          <Route path="/roomMain" element={<RoomMain />} />
          <Route path="/acting" element={<Acting />} />
          <Route path="/eum" element={<Eum />} />
        </Routes>
      </Selected.Provider>
    </Health.Provider>
  );
}

export default App;
