import React from 'react';
import './PraiseWorship.css';

function PraiseWorship() {
  return (
    <div className="praise-page">
      <section className="praise-hero">
        <div className="praise-hero-content">
          <h1>Praise & Worship</h1>
          <p>Where hearts connect with God through music and praise</p>
        </div>
      </section>

      <section className="praise-intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Our Worship Ministry</h2>
            <p>
              At AIC Chebisaas, worship is more than singing songs - it's a lifestyle of
              honoring God with our whole hearts. Our praise and worship team is dedicated to
              creating an atmosphere where the presence of God is experienced and lives are
              transformed through authentic worship.
            </p>
            <p>
              We believe that worship is the heartbeat of the church, and we strive to lead
              our congregation into deeper encounters with God through spirit-filled praise
              and worship.
            </p>
          </div>
        </div>
      </section>

      <section className="worship-types-section">
        <div className="container">
          <h2>Our Worship Experience</h2>
          <div className="worship-grid">
            <div className="worship-card">
              <div className="worship-icon"><i className="bi bi-music-note-beamed"></i></div>
              <h3>Contemporary Worship</h3>
              <p>
                Modern worship songs that blend traditional messages with contemporary sounds,
                creating an engaging and relevant worship experience for all generations.
              </p>
            </div>
            <div className="worship-card">
              <div className="worship-icon"><i className="bi bi-book"></i></div>
              <h3>Traditional Hymns</h3>
              <p>
                Rich, time-tested hymns that connect us to our spiritual heritage and remind
                us of God's faithfulness throughout generations.
              </p>
            </div>
            <div className="worship-card">
              <div className="worship-icon"><i className="bi bi-heart-fill"></i></div>
              <h3>Spirit-Led Worship</h3>
              <p>
                Spontaneous worship moments where the Holy Spirit leads us into deeper
                encounters with God's presence and power.
              </p>
            </div>
            <div className="worship-card">
              <div className="worship-icon"><i className="bi bi-globe"></i></div>
              <h3>Multicultural Praise</h3>
              <p>
                Worship in multiple languages and styles, reflecting the diversity of our
                church family and the global body of Christ.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Worship Team Ministry</h2>
          <div className="team-content">
            <p>
              Our worship team consists of dedicated musicians, vocalists, and technical crew
              who work together to create an excellent worship experience. We practice weekly
              to ensure that every service is a powerful time of connecting with God.
            </p>
            <div className="team-schedule">
              <div className="schedule-card">
                <h3>Band Practice</h3>
                <p className="schedule-time">Saturdays, 4:00 PM - 6:00 PM</p>
                <p className="schedule-location">Church Sanctuary</p>
              </div>
              <div className="schedule-card">
                <h3>Vocals Practice</h3>
                <p className="schedule-time">Fridays, 6:00 PM - 8:00 PM</p>
                <p className="schedule-location">Church Hall</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="join-section">
        <div className="container">
          <div className="join-content">
            <h2>Join Our Worship Team</h2>
            <p>
              Are you passionate about worship and skilled in music? We're looking for
              instrumentalists, vocalists, and technical crew members to join our team!
            </p>
            <div className="positions-grid">
              <div className="position-card">
                <i className="bi bi-mic"></i>
                <h4>Vocalists</h4>
              </div>
              <div className="position-card">
                <i className="bi bi-music-player"></i>
                <h4>Instrumentalists</h4>
              </div>
              <div className="position-card">
                <i className="bi bi-sliders"></i>
                <h4>Sound Engineers</h4>
              </div>
              <div className="position-card">
                <i className="bi bi-camera-video"></i>
                <h4>Media Team</h4>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Express Interest</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PraiseWorship;