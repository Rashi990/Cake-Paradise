import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons

function Footer() {
  return (
    <div className="container">
      <div className="row">
        {/* Company Section */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Get Help Section */}
        <div className="footer-col">
          <h4>Get Help</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Online Shop Section */}
        <div className="footer-col">
          <h4>Online Shop</h4>
          <ul>
            <li><a href="#">Cakes</a></li>
            <li><a href="#">Desserts</a></li>
            <li><a href="#">Sweets</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
