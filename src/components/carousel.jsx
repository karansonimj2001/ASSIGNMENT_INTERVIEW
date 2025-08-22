import React, { useState } from "react";
import "../index.css";

const Carousel = () => {
  // 3 groups with 3 phones each (title + image)
  const groups = [
    [
      {  image: "/images/iphone 15.png", title: "Value Your Practice" },
      { title: "Today's Healing Journey", image: "/images/iphone 15-1.png" },
      { title: "Consultation Details", image: "/images/iphone 15-2.png" },
    ],
    [
      { title: "Withdrawal Settings", image: "/images/iphone 15-3.png" },
      { title: "Earnings Overview", image: "/images/iphone 15-4.png" },
      { title: "Secure Payments", image: "/images/iphone 15-6.png" },
    ],
    [
      { title: "Easy Scheduling", image: "/images/iphone 15-5.png" },
      { title: "Calendar View", image: "/images/iphone 15-7.png" },
      { title: "Reminders", image: "/images/iphone 15-8.png" },
    ],
  ];

  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <div className="carousel-container">
      {/* Top Buttons */}
      <div className="carousel-buttons">
        <button
          className={activeGroup === 0 ? "active" : ""}
          onClick={() => setActiveGroup(0)}
        >
          Consultations
        </button>
        <button
          className={activeGroup === 1 ? "active" : ""}
          onClick={() => setActiveGroup(1)}
        >
          Payment withdrawal
        </button>
        <button
          className={activeGroup === 2 ? "active" : ""}
          onClick={() => setActiveGroup(2)}
        >
          Schedule
        </button>
      </div>

      {/* Slider */}
      <div className="carousel-slider">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${activeGroup * 100}%)` }}
        >
          {groups.map((group, index) => (
            <div className="carousel-group" key={index}>
              {group.map((item, i) => (
                <div className="phone-block" key={i}>
                  <h3>{item.title}</h3>
                  <img src={item.image} alt={`slide-${index}-${i}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
