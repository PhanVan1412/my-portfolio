import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components";
import Home from "./pages/Home/Home";
import AboutPage from "./pages/About/AboutPage";
import Portfolio from "./pages/Project/Portfolio";
import Certificates from "./pages/Certificates/Certificates";
import ContactPage from "./pages/Contact/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/certificates" element={<Certificates />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
