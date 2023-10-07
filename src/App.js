import "./App.css";
import SideMenu from "./components/SideMenu";
import { Link, Route, Routes } from "react-router-dom";
import Accelerators from "./pages/Accelerators";
import Services from "./pages/Services";
import About from "./pages/About";
import Home from "./pages/Home";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <div className="header min-h-screen">
      <div className="sideMenu flex flex-col lg:flex-row">
        <div className="menuLeft lg:w-1/4 w-full">
          <SideMenu />
        </div>
        <div className="menuRight lg:w-3/4 w-full">
          <div className="text-right p-4">
            <Link
              to="/Explore"
              className="text-blue-500 hover:text-blue-700 text-lg px-4 py-2 rounded-lg bg-white"
            >
              Explore
            </Link>
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Accelerators" element={<Accelerators />}></Route>
            <Route path="/Services" element={<Services />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Explore" element={<ContactForm />}></Route>
          </Routes>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
