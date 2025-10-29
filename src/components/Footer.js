import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Africa Inland Church Chebisaas</h3>
          <p>Evangelizing the unreached, building Christ-centered churches, and serving the community.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/pastors">Our Pastors</Link></li>
            <li><Link to="/services">Services</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p><i className="bi bi-telephone-fill"></i> +254721253234</p>
          <p><i className="bi bi-telephone-fill"></i> 0712364251</p>
          <p><i className="bi bi-geo-alt-fill"></i> P.O. Box 2517-30100</p>
          <p>Eldoret, Kenya</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Africa Inland Church Chebisaas. All rights reserved.</p>
        <p>Serving Christ, serving community.</p>
      </div>
    </footer>
  );
}

export default Footer;