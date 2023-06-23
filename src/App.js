import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Layouts/Base";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import AOS from "aos";
import "aos/dist/aos.css";
import Privacy from "./Pages/Privacy";
import Careers from "./Pages/Careers";
import Portfolio from "./Pages/Portfolio";
import Getaquote from "./Pages/Getaquote";
AOS.init();

function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/Aboutus" element={<AboutUs />} />
            <Route path="/Contactus" element={<ContactUs />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/getaquote" element={<Getaquote />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
