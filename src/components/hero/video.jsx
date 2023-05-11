import React from "react";
import videoSrc from "../../assets/mov.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <video
          src={videoSrc}
          muted
          loop
          autoPlay
          playsInline
          className="hero-video"
        />
        <div className="hero-text">
          <h3>LEARN MORE | DREAM MORE | BE MORE</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
