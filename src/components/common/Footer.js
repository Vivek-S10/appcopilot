import React from 'react';
import './Footer.css'; // Assuming you will create a CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} AppCopilot Rental. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;