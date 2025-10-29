import React from 'react';
import './About.css';
import churchImage from '../assets/church.png';

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About AIC Chebisaas</h1>
          <p>Rooted in faith, Growing in love, Reaching the community</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon"><i className="bi bi-bullseye"></i></div>
              <h2>Our Mission</h2>
              <p>
                To evangelize the unreached, build Christ-centered churches, and serve
                the community with compassion and integrity. We are committed to making
                disciples who will transform lives through the Gospel of Jesus Christ.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon"><i className="bi bi-eye"></i></div>
              <h2>Our Vision</h2>
              <p>
                To be a transformative church that impacts our community and beyond,
                raising up believers who are passionate about Christ, committed to
                biblical truth, and dedicated to serving others with love and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <div className="history-content">
            <div className="history-text">
              <h2>Our Heritage</h2>
              <div className="history-story">
                <h3>The Birth of Africa Inland Mission</h3>
                <p>
                  The Africa Inland Church (AIC) emerged from the Africa Inland Mission (AIM),
                  founded in 1895 by Peter Cameron Scott, a young missionary with a burning
                  passion to reach the unreached peoples of Africa's interior.
                </p>
                <p>
                  After the tragic death of his brother from malaria during their first mission
                  attempt, Peter Cameron Scott returned to Africa with renewed determination,
                  establishing the first AIM station among the Kamba people in Kenya.
                </p>

                <h3>Growth and Establishment</h3>
                <p>
                  The early years were marked by tremendous challenges including disease,
                  hostile environments, and significant sacrifices by the missionaries.
                  Despite these obstacles, the mission persevered, establishing stations
                  across East Africa.
                </p>
                <p>
                  By the mid-20th century, the mission had evolved into a fully indigenous
                  church - the Africa Inland Church - led by African pastors and elders,
                  becoming one of the largest Protestant denominations in Kenya.
                </p>

                <h3>AIC Chebisaas Today</h3>
                <p>
                  As part of this rich heritage, AIC Chebisaas continues the legacy of
                  evangelism, discipleship, and community service. We stand on the shoulders
                  of faithful pioneers who sacrificed everything to bring the Gospel to Africa,
                  and we remain committed to their vision of transformed lives and communities
                  through Christ.
                </p>
              </div>
            </div>
            <div className="history-image">
              <img src={churchImage} alt="AIC Chebisaas Church" />
              <div className="image-caption">
                <p>AIC Chebisaas - Continuing a legacy of faith</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="bi bi-book"></i></div>
              <h3>Biblical Authority</h3>
              <p>
                We believe the Bible is God's inspired Word and the ultimate authority
                for faith and practice.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="bi bi-chat-quote"></i></div>
              <h3>Prayer</h3>
              <p>
                We are a praying church that depends on God for wisdom, strength, and
                direction in all we do.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="bi bi-heart-fill"></i></div>
              <h3>Love & Unity</h3>
              <p>
                We are committed to loving God wholeheartedly and loving one another as
                Christ loved us.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="bi bi-globe-americas"></i></div>
              <h3>Evangelism</h3>
              <p>
                We are passionate about sharing the Gospel and making disciples in our
                community and beyond.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="bi bi-people-fill"></i></div>
              <h3>Community Service</h3>
              <p>
                We believe in serving others with compassion, meeting both spiritual and
                physical needs.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="bi bi-star-fill"></i></div>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in all we do, giving our best to honor God and
                serve His people.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;