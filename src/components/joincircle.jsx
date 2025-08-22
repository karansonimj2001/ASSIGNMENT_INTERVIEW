import React from "react";
import "../index.css";

export default function JoinCircle() {
  return (
    <section className="join">
      <div className="join-head">
        <h2 className="join-title">Join Our Circle of Care</h2>
        <p className="join-sub">Becoming a part of Amrutam is simple</p>
      </div>

      <div className="join-body">
        {/* Left steps */}
        <div className="join-steps">
          <div className="step">
            <h4>Step 1: Get your referral code</h4>
            <p>Contact us to receive your unique referral code.</p>
          </div>
          <div className="step">
            <h4>Step 2: Register on Amrutam</h4>
            <p>Sign up on the Amrutam Doctors app or website to join our specialist network.</p>
          </div>
          <div className="step">
            <h4>Step 3: Complete KYC</h4>
            <p>Fill in your details and upload the required documents for verification.</p>
          </div>
          <div className="step">
            <h4>Step 4: Start consulting</h4>
            <p>Once verified, begin offering consultations and helping patients.</p>
          </div>
        </div>

        {/* Right image */}
        <div className="join-image">
          <img src="/images/Group 1000006308 (1).png" alt="Join Amrutam" />
        </div>
      </div>

     
    </section>
  );
}
