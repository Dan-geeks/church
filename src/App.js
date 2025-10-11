import React from 'react';
import './App.css';
import churchImage from './assets/church.png';

function App() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const target = document.querySelector(sectionId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav>
        <ul>
          <li>
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#mission" onClick={(e) => scrollToSection(e, '#mission')}>
              Mission
            </a>
          </li>
          <li>
            <a href="#history" onClick={(e) => scrollToSection(e, '#history')}>
              History
            </a>
          </li>
          <li>
            <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>
              Services
            </a>
          </li>
          <li>
            <a href="#events" onClick={(e) => scrollToSection(e, '#events')}>
              Events
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Africa Inland Church Chebisaas</h1>
          <p>Evangelizing the unreached, building Christ-centered churches, and serving the community.</p>
          <a
            href="#services"
            className="btn"
            onClick={(e) => scrollToSection(e, '#services')}
          >
            Worship With Us
          </a>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission">
        <div className="container">
          <h2>Mission</h2>
          <div className="mission-text">
            <p>
              AIC Chebisaas is committed to evangelizing the unreached, building Christ-centered
              churches, and serving the community with compassion and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history">
        <div className="container">
          <h2>History of AIC</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                The Africa Inland Church (AIC) emerged from the Africa Inland Mission
                (AIM) in 1895, founded by Peter Cameron Scott. AIM began its work in
                Kenya among the Kamba people, facing numerous challenges in its early
                years.
              </p>
              <p>
                AIC has grown to become one of the largest Protestant churches in
                Kenya, with a strong focus on theological education and evangelism.
              </p>
            </div>
            <div className="about-image">
              <img src={churchImage} alt="Africa Inland Church sanctuary" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <h2>Our Sunday Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>First Service</h3>
              <div className="time">English | 8:00 AM - 10:00 AM</div>
              <p>A time of vibrant worship, prayer, and the preaching of God's Word.</p>
            </div>
            <div className="service-card">
              <h3>Second Service</h3>
              <div className="time">Kiswahili | 10:00 AM - 12:30 PM</div>
              <p>Experience community and encouragement as we worship in Kiswahili.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="events-list">
            <div className="event-item">
              <div className="event-date">October 15, 2025</div>
              <h3>Community Outreach Day</h3>
              <p>
                Join us as we serve our community through food distribution and
                neighborhood cleanup. All ages welcome!
              </p>
            </div>
            <div className="event-item">
              <div className="event-date">October 22, 2025</div>
              <h3>Youth Prayer Vigil</h3>
              <p>
                Students gather for worship, testimony, and encouragement as we seek
                God together.
              </p>
            </div>
            <div className="event-item">
              <div className="event-date">October 29, 2025</div>
              <h3>Leaders Equipping Forum</h3>
              <p>
                Equipping elders, deacons, and ministry leaders for effective service
                in the church.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <h3>Contacts</h3>
              <p>
                +254721253234
                <br />
                0712364251
              </p>
            </div>
            <div className="contact-item">
              <h3>Location & Address</h3>
              <p>
                P.O. Box 2517-30100
                <br />
                Eldoret, Kenya
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Africa Inland Church Chebisaas. All
          rights reserved.
        </p>
        <p>Serving Christ, serving community.</p>
      </footer>
    </div>
  );
}

export default App;
