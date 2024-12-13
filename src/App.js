import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/About/AboutPage";
import ServicesPage from "./pages/Services/ServicesPage";
import ContactPage from "./pages/Contact/ContactPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {" "}
        {/* Applying background color here */}
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
