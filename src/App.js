import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Reservations from "./Pages/Reservations";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import ScrollToTop from "./Components/ScrollTopTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/Reservations" element={<Reservations/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
