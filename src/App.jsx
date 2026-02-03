import { Routes, Route } from "react-router-dom";
import { PortfolioProvider } from "../src/context/PortfolioContext";
import Navbar from "../src/components/Navbar";
import Home from "../src/page/Home";
import About from "../src/page/About";
import Skills from "../src/page/Skills";
import Projects from "../src/page/Project";
import Resume from "../src/page/Resume";
import Contact from "../src/page/Contact";
import AdminLogin from "../src/page/AdminLogin";
import AdminDashboard from "../src/page/AdminDashboard";

export default function App() {
  return (
    <PortfolioProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </PortfolioProvider>
  );
}
