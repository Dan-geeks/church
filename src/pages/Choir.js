import React from 'react';
import './Choir.css';

function Choir() {
  const choirMembers = [
    { name: 'Lawrence Kipchoge', role: 'Choir Director' },
    { name: 'Solo Mutai', role: 'Lead Vocalist' },
    { name: 'Grace Wanjiru', role: 'Alto Section Leader' },
    { name: 'David Omondi', role: 'Tenor Section Leader' }
  ];

  return (
    <div className="choir-page">
      {/* Hero Section */}
      <section className="choir-hero">
        <div className="choir-hero-content">
          <h1>AIC Chebisaas Choir</h1>
          <p>Lifting voices in praise and worship to our King</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="choir-intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>About Our Choir</h2>
            <p>
              The AIC Chebisaas Choir is a vibrant community of worshippers dedicated to
              glorifying God through music. Our choir leads worship during Sunday services
              and special events, creating an atmosphere where God's presence is experienced
              and hearts are touched.
            </p>
            <p>
              We believe that music is a powerful tool for worship, and our choir members
              are committed to excellence in their musical ministry. Whether through
              traditional hymns or contemporary worship songs, we aim to lead our congregation
              into deeper worship and connection with God.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="choir-team-section">
        <div className="container">
          <h2>Our Team</h2>
          <div className="team-grid">
            {choirMembers.map((member, index) => (
              <div key={index} className="team-member-card">
                <div className="member-icon">
                  <i className="bi bi-music-note-beamed"></i>
                </div>
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Schedule */}
      <section className="practice-section">
        <div className="container">
          <h2>Practice Schedule</h2>
          <div className="practice-grid">
            <div className="practice-card">
              <div className="practice-icon">
                <i className="bi bi-calendar-check"></i>
              </div>
              <h3>Choir Rehearsal</h3>
              <p className="practice-day">Every Thursday</p>
              <p className="practice-time">6:00 PM - 8:00 PM</p>
              <p className="practice-location">Church Main Hall</p>
            </div>
            <div className="practice-card">
              <div className="practice-icon">
                <i className="bi bi-mic"></i>
              </div>
              <h3>Sunday Warm-up</h3>
              <p className="practice-day">Every Sunday</p>
              <p className="practice-time">7:00 AM - 7:45 AM</p>
              <p className="practice-location">Main Sanctuary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="choir-join-section">
        <div className="container">
          <div className="join-content">
            <div className="join-icon">
              <i className="bi bi-people"></i>
            </div>
            <h2>Join Our Choir</h2>
            <p>
              Do you have a passion for worship and a voice to share? We'd love to have you
              join our choir family! No audition required - just a heart for worship and
              commitment to attend regular practices.
            </p>
            <div className="join-requirements">
              <h3>What We're Looking For:</h3>
              <ul>
                <li>A heart for worship and serving God</li>
                <li>Commitment to attend weekly rehearsals</li>
                <li>Ability to work as part of a team</li>
                <li>Willingness to learn and grow musically</li>
              </ul>
            </div>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Express Interest</a>
              <button className="btn btn-outline" onClick={() => window.location.href='tel:+254721253234'}>
                Call Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube CTA */}
      <section className="youtube-section">
        <div className="container">
          <h2>Watch Our Performances</h2>
          <p>
            Subscribe to our YouTube channel to watch our latest performances and stay
            updated with our worship ministry.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">
              <i className="bi bi-youtube"></i> Subscribe on YouTube
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Choir;