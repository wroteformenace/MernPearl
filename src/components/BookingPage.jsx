import React from "react";
import { Link } from "react-router-dom";
import Cal from "@calcom/embed-react";
import "./BookingPage.css"; // Assuming you place above CSS here

export default function BookingPage() {
  return (
    <div className="booking-page-container">
      <div className="booking-box">
        <h2>Book an Intro Call</h2>
        <div className="cal-container">
          <Cal
            namespace="intro-call"
            calLink="richard-feynman-t59amh/intro-call"
            config={{ layout: "month_view", theme: "light" }}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <Link to="/" className="booking-back-link">
        ← Back to Home
      </Link>
    </div>
  );
}