// src/components/FeaturedSection.jsx
import React from "react";
import "../index.css"; // Importing CSS

const FeaturedSection = () => {
  const logos = [
    { src: "/images/Frame 1171275454.png", alt: "The Times of India" },
    { src: "/images/Frame 1171275455.png", alt: "YourStory" },
    { src: "/images/Frame 1171275456.png", alt: "Condé Nast Traveler" },
    { src: "/images/Frame 1171275457.png", alt: "Livingetc" },
    { src: "/images/Frame 1171275458.png", alt: "The Voice of Fashion" },
    { src: "/images/Frame 1171275459.png", alt: "GQ" },
    { src: "/images/Frame 1171275460.png", alt: "Lifestyle Asia" },
    { src: "/images/Frame 1171275462.png", alt: "Forbes 30 under 30" },
    { src: "/images/Frame 1171275461.png", alt: "Vogue" },
  ];

  return (
    <section className="featured-section">
      <div className="featured-container">
        <h2 className="featured-title">Featured</h2>
        <p className="featured-subtitle">
          Recognized and celebrated by leading publications – Amrutam in the spotlight!
        </p>

        <div className="featured-logos">
          {logos.map((logo, index) => (
            <div key={index} className="logo-wrapper">
              <img src={logo.src} alt={logo.alt} className="logo-img" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
