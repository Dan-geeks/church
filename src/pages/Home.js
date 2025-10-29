import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import churchImage from '../assets/church.png';
import praiseImage from '../assets/praise and worship.jpg';
import sermonImage from '../assets/sermonimage.jpg';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Welcome to Africa Inland Church Chebisaas</h1>
            <p className="hero-subtitle">
              Evangelizing the unreached, building Christ-centered churches, and serving the community.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary">
                Worship With Us
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p className="mission-text">
            AIC Chebisaas is committed to evangelizing the unreached, building Christ-centered
            churches, and serving the community with compassion and integrity. We believe in
            transforming lives through the Gospel of Jesus Christ and making disciples who will
            continue to spread His love.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-image">
                <img src={praiseImage} alt="Praise and Worship" />
              </div>
              <h3>Vibrant Worship</h3>
              <p>Experience powerful praise and worship that connects you with God's presence.</p>
              <Link to="/services" className="feature-link">Learn More →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-image">
                <img src={sermonImage} alt="Sermon" />
              </div>
              <h3>Biblical Teaching</h3>
              <p>Grow in your faith through sound biblical teaching and inspiring messages.</p>
              <Link to="/services" className="feature-link">Learn More →</Link>
            </div>

            <div className="feature-card">
              <div className="feature-image">
                <img src={churchImage} alt="Community" />
              </div>
              <h3>Strong Community</h3>
              <p>Join a loving community of believers committed to supporting one another.</p>
              <Link to="/about" className="feature-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <h2>Join Us This Sunday</h2>
          <p>
            Whether you're new to the area or seeking a church home, we'd love to welcome you
            into our family. Come as you are and experience God's love with us.
          </p>
          <div className="cta-buttons">
            <Link to="/services" className="btn btn-primary">
              Service Times
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;