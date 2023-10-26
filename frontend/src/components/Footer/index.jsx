import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="columns">
          <div className="column">
            <h4>Contact Us</h4>
            <p>Email: contact@yourwebsite.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="column">
            <h4>Connect With Us</h4>
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="has-text-centered">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
