import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./Components/Layouts/Base";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/Aboutus" element={<AboutUs />} />
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default App;
