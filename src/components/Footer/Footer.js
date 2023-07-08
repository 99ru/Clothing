import React from "react";
import NewsletterSignup from "./NewsletterSignup";
import HelpSection from "./HelpSection";
import MoreSection from "./MoreSection";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content-container">
        <div className="help_and_more_section">
          <HelpSection />
          <MoreSection />
        </div>
        <NewsletterSignup />
      </div>
      <div className="footer-content">
        <p>© 2023 | Alphalete Athletics | Not Real Page</p>
        <p className="slogan">LEARN MORE | DREAM MORE | BE MORE</p>
      </div>
    </div>
  );
}

export default Footer;
