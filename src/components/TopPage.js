import { clear } from "@testing-library/user-event/dist/clear";
import React, { useEffect, useState, useRef } from "react";
import centerPic from "../images/centerPic.jpg";
import swan from "../images/swan.png";
// import video from "../images/landing-video.mp4";
// import video2 from "../images/bg-video.mp4";
import video2 from "../images/bg-video2.mp4";

import "../styles/toppage.css";
// import { CountdownTimer } from "./Timer";
var bride = "LEILA";
var groom = "NICHOLAS";

function TopPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 👈 70% speed (slower)
    }
  }, []);
  return (
    <section className="landing-page">
      <video ref={videoRef} autoPlay muted loop playsInline id="bgVideo">
        <source src={video2} type="video/mp4" />
      </video>
      <div className="landing-page-content">
        <h1>
          <span className="groom">{groom}</span>
          <span className="bride">& {bride}</span>
        </h1>
        <h4>05-23-2026</h4>
      </div>
    </section>
  );
}

export function Welcome() {
  return (
    <section className="welcome">
      <h1>Welcome</h1>
      <h3>families & friends</h3>
      <p>
        We’re so grateful you’re here to celebrate this incredible chapter of
        our lives with us. Your love, support, and presence mean the world to us
        as we begin our journey together as husband and wife. We can’t wait to
        share laughter, memories, and love with each and every one of you..
      </p>

      <img className="swan" src={swan} />
      <img className="swan2" src={swan} />
    </section>
  );
}

export default TopPage;
