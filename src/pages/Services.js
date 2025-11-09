import React from 'react';
import './Services.css';
import praiseImage from '../assets/praise and worship.jpg';
import sermonImage from '../assets/sermonimage.jpg';

function Services() {
  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Join Us for Worship</h1>
          <p>Experience God's presence through vibrant worship and biblical teaching</p>
        </div>
      </section>

      {/* Service Times */}
      <section className="service-times-section">
        <div className="container">
          <h2>Sunday Service Times</h2>
          <p className="section-subtitle">
            Join us every Sunday as we gather to worship, learn, and grow together in Christ
          </p>
          
          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-image">
                <img src={praiseImage} alt="First Service" />
              </div>
              <div className="service-content">
                <h3>First Service</h3>
                <div className="service-time">
                  <span className="time-badge">8:00 AM - 10:00 AM</span>
                </div>
                <div className="service-language">
                  <span className="language-badge">English Service</span>
                </div>
                <p className="service-description">
                  Start your Sunday morning with vibrant worship, heartfelt prayers, and powerful
                  biblical teaching. Our first service is conducted in English and features
                  contemporary worship music that will lift your spirit and draw you closer to God.
                </p>
                <ul className="service-features">
                  <li>Contemporary worship music</li>
                  <li>Biblical preaching</li>
                  <li>Prayer and ministry time</li>
                  <li>Fellowship and community</li>
                </ul>
              </div>
            </div>

            <div className="service-card featured">
              <div className="service-image">
                <img src={sermonImage} alt="Second Service" />
              </div>
              <div className="service-content">
                <h3>Second Service</h3>
                <div className="service-time">
                  <span className="time-badge">10:00 AM - 12:30 PM</span>
                </div>
                <div className="service-language">
                  <span className="language-badge">Kiswahili Service</span>
                </div>
                <p className="service-description">
                  Experience the joy of worshiping in Kiswahili! Our second service brings together
                  a diverse community of believers for authentic worship, powerful teaching, and
                  heartfelt fellowship. Come as you are and feel the warmth of our church family.
                </p>
                <ul className="service-features">
                  <li>Worship in Kiswahili</li>
                  <li>Expository preaching</li>
                  <li>Community prayer</li>
                  <li>Family-friendly atmosphere</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="expect-section">
        <div className="container">
          <h2>What to Expect</h2>
          <div className="expect-grid">
            <div className="expect-card">
              <div className="expect-icon"><i className="bi bi-music-note-beamed"></i></div>
              <h3>Worship & Praise</h3>
              <p>
                Engaging worship led by our talented musicians and singers. We blend traditional
                hymns with contemporary songs to create a rich worship experience.
              </p>
            </div>
            <div className="expect-card">
              <div className="expect-icon"><i className="bi bi-book"></i></div>
              <h3>Biblical Teaching</h3>
              <p>
                Relevant, practical messages from God's Word that will equip you for daily living
                and deepen your relationship with Christ.
              </p>
            </div>
            <div className="expect-card">
              <div className="expect-icon"><i className="bi bi-people"></i></div>
              <h3>Warm Community</h3>
              <p>
                A friendly, welcoming atmosphere where you can connect with other believers,
                build relationships, and find support and encouragement.
              </p>
            </div>
            <div className="expect-card">
              <div className="expect-icon"><i className="bi bi-house-heart"></i></div>
              <h3>Family Friendly</h3>
              <p>
                Programs and activities for all ages. Children are welcome in our services,
                and we provide age-appropriate ministry opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekday Activities */}
      <section className="weekday-section">
        <div className="container">
          <h2>Weekday Ministries</h2>
          <div className="weekday-grid">
            <div className="weekday-card">
              <h3>Tuesday Prayer Meeting</h3>
              <p className="weekday-time">6:00 PM - 7:30 PM</p>
              <p>Join us for corporate prayer as we seek God's face together and intercede for our church, community, and nation.</p>
            </div>
            <div className="weekday-card">
              <h3>Wednesday Bible Study</h3>
              <p className="weekday-time">6:30 PM - 8:00 PM</p>
              <p>Dive deeper into God's Word through our midweek Bible study. A great opportunity for growth and discussion.</p>
            </div>
            <div className="weekday-card">
              <h3>Friday Youth Fellowship</h3>
              <p className="weekday-time">5:00 PM - 7:00 PM</p>
              <p>Young people gather for games, worship, teaching, and fellowship. Building strong foundations in faith.</p>
            </div>
            <div className="weekday-card">
              <h3>Saturday Outreach</h3>
              <p className="weekday-time">9:00 AM - 12:00 PM</p>
              <p>Serve the community through various outreach programs including food distribution and neighborhood visits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="services-cta">
        <div className="container">
          <h2>First Time Visiting?</h2>
          <p>
            We'd love to meet you! Come as you are and experience the love of Christ through
            our welcoming community. If you have any questions or need directions, don't
            hesitate to reach out.
          </p>
          <div className="cta-buttons">
            <a href="tel:+254721253234" className="btn btn-primary">
              Call Us
            </a>
            <a href="https://maps.google.com/maps?q=0.5619081,35.3115442&z=17" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;