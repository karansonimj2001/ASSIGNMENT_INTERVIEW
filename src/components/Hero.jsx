// src/components/Hero.jsx
import "../index.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span>Namaste , Welcome To Amrutam</span>
        <h1>Join Amrutam -Grow your Practice</h1>
        <p>
          Connect with more patients , set your own schedule, and grow your Ayurvedic practice effortlessy.
        </p>
        <a href="#services" className="btn-primary">Join Now</a>
        <section class="stats1">
          <div class="stat1-item">
            <h2>500+</h2>
            <p>Average Active Users</p>
          </div>
          <div class="divider"></div>
          <div class="stat1-item">
            <h2>40+</h2>
            <p>Average daily free calls</p>
          </div>
        </section>

      </div>

      <div className="hero-image">
        <img src="images\group.png" className="floating"/>
      </div>
    </section>
   

  );
}
