// src/components/WhyDoctors.jsx
import React from "react";
import "./index.css";

const FeatureRow = ({
  title,
  highlight,
  body,
  imageSrcs = [],
  reverse = false,     // false = image left, text right ; true = text left, image right
}) => (
  <div className={`wd-row ${reverse ? "wd-row--reverse" : ""}`}>
    {/* Image block */}
    <div className="wd-media">
      {imageSrcs.map((src, i) => (
        <img key={i} src={src} alt="" className="wd-img" loading="lazy" />
      ))}
    </div>

    {/* Text block */}
    <div className="wd-copy">
      <h3 className="wd-h3">
        {title} <span className="wd-highlight">{highlight}</span>
      </h3>
      <p className="wd-p">{body}</p>
    </div>
  </div>
);

export default function WhyDoctors() {
  return (
    <section className="wd">
      <div className="wd-head">
        <h2 className="wd-h2">Why Doctors Choose Us?</h2>
        <p className="wd-sub">Unlock the Benefits of Smarter Healthcare Management and Patient Care</p>
      </div>

      {/* Row 1: Instant FREE 5–Mins Call (image LEFT) */}
      <FeatureRow
        title="Instant"
        highlight="FREE 5–Mins Call"
        body="We understand the importance of building trust with your patients. That’s why Amrutam offers a free 5-minute call, helping you connect instantly and foster lasting patient relationships with ease."
        imageSrcs={[
          "/images/Group 1000006309.png",   // big card
          "/images/call-mock-2.png",   // small ‘connecting…’ card
        ]}
        reverse={false}
      />

      {/* Row 2: Forum for Meaningful Connections (text LEFT, images RIGHT) */}
      <FeatureRow
        title="Forum for"
        highlight="Meaningful Connections"
        body='We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions, while the "Thoughts" section allows you to share deeper Ayurvedic wisdom.'
        imageSrcs={[
          "/images/Group 1000006311.png",
          "/images/forum-card-2.png",
        ]}
        reverse={true}                 // text left, images right
      />
      {/* Row 1: Instant FREE 5–Mins Call (image LEFT) */}
      <FeatureRow
        title="Choose Your Session Mode"
        // highlight=""
        body="Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs."
        imageSrcs={[
          "/images/Group 1000006313.png",   // big card
          "/images/call-mock-2.png",   // small ‘connecting…’ card
        ]}
        reverse={false}
      />

      {/* Row 2: Forum for Meaningful Connections (text LEFT, images RIGHT) */}
      <FeatureRow
        title="Smart Wallet"
        // highlight=""
        body='We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.'
        imageSrcs={[
          "/images/Group 1000006316.png",
          "/images/forum-card-2.png",
        ]}
        reverse={true}                 // text left, images right
      />
      {/* Row 1: Instant FREE 5–Mins Call (image LEFT) */}
      <FeatureRow
        title="Flexible Work Timing"
        // highlight=""
        body="We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice."
        imageSrcs={[
          "/images/Group 1000006313.png",   // big card
          "/images/call-mock-2.png",   // small ‘connecting…’ card
        ]}
        reverse={false}
      />

     
    </section>
  );
}
