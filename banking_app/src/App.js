import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import LoanCalculator from "./pages/LoanCalculator";
import AdminLogin from "./pages/AdminLogin";
import Contact from "./pages/Contact";
import Downloads from "./pages/Downloads";
import TenderList from "./pages/TenderList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lmwf" element={<LoanCalculator />} />
          <Route path="/shg-login" element={<AdminLogin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/tender" element={<TenderList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
