import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import "../styles/Navbar.css";

export default function Navbar() {
  const { isAdmin, logout } = useContext(PortfolioContext);
  const navigate = useNavigate();

  const handleAdminClick = () => {
    if (isAdmin) {
      logout();
    } else {
      navigate("/admin-login");
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Flowa</h2>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/project">Project</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="admin-btn" onClick={handleAdminClick}>
        {isAdmin ? "Logout" : "Admin"}
      </button>
    </nav>
  );
}
