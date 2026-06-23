import { BrowserRouter, Routes, Route } from "react-router-dom";

import Log from "./pages/log";
import Reg from "./pages/Reg";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Log />} />

        <Route path="/register" element={<Reg />} />

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

        

      </Routes>

    </BrowserRouter>
  );
}

export default App;