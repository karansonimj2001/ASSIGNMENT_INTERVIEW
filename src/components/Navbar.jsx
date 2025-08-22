import { useState } from "react";
import "../index.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top dark bar */}
      <div className="tophead">
        <span>Register Yourself As An Amrutam Doctor</span>
        <button className="joinnow">Join Now</button>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">AMRUTAM</div>
        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, "about")}>
              About Us
            </a>
          </li>
          <li>
            <a href="#onboarding" onClick={(e) => handleScroll(e, "onboarding")}>
              Onboarding
            </a>
          </li>
          <li>
            <a href="#faq" onClick={(e) => handleScroll(e, "faq")}>
              FAQ
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={(e) => handleScroll(e, "testimonials")}>
              Testimonials
            </a>
          </li>
        </ul>
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>
      </nav>
    </>
  );
}
