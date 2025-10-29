import React from 'react';
import './Pastors.css';
import pastorShikanga from '../assets/pastorshikanga.jpg';
import pastor1 from '../assets/paster1.jpg';

function Pastors() {
  const pastors = [
    {
      id: 1,
      name: 'Pastor Shikanga',
      title: 'Senior Pastor',
      image: pastorShikanga,
      bio: 'Pastor Shikanga has been serving as the Senior Pastor of AIC Chebisaas for over a decade. With a heart for evangelism and community outreach, he leads the congregation with wisdom, compassion, and a deep commitment to biblical teaching. His vision is to see transformed lives through the power of the Gospel.',
      specialties: ['Biblical Teaching', 'Church Leadership', 'Community Outreach']
    },
    {
      id: 2,
      name: 'Pastor Samuel',
      title: 'Associate Pastor',
      image: pastor1,
      bio: 'Pastor Samuel serves as the Associate Pastor, bringing energy and dedication to youth ministry and worship. His passion for connecting with young people and leading dynamic worship services has been instrumental in growing our church community. He believes in empowering the next generation of believers.',
      specialties: ['Youth Ministry', 'Worship Leading', 'Discipleship']
    }
  ];

  return (
    <div className="pastors-page">
      {/* Hero Section */}
      <section className="pastors-hero">
        <div className="pastors-hero-content">
          <h1>Meet Our Pastors</h1>
          <p>
            Dedicated shepherds called to serve, teach, and lead our congregation in faith
          </p>
        </div>
      </section>

      {/* Pastors Section */}
      <section className="pastors-section">
        <div className="container">
          <div className="section-intro">
            <h2>Our Leadership</h2>
            <p>
              Our pastoral team is committed to guiding our church family with biblical wisdom,
              compassionate care, and servant leadership. They are here to pray with you, teach
              God's Word, and help you grow in your faith journey.
            </p>
          </div>

          <div className="pastors-grid">
            {pastors.map((pastor) => (
              <div key={pastor.id} className="pastor-card">
                <div className="pastor-image-container">
                  <img src={pastor.image} alt={pastor.name} className="pastor-image" />
                  <div className="pastor-overlay">
                    <h3>{pastor.name}</h3>
                    <p className="pastor-title">{pastor.title}</p>
                  </div>
                </div>
                <div className="pastor-details">
                  <h3 className="pastor-name">{pastor.name}</h3>
                  <p className="pastor-position">{pastor.title}</p>
                  <p className="pastor-bio">{pastor.bio}</p>
                  <div className="pastor-specialties">
                    <h4>Ministry Focus:</h4>
                    <ul>
                      {pastor.specialties.map((specialty, index) => (
                        <li key={index}>{specialty}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Connect */}
      <section className="connect-section">
        <div className="container">
          <h2>Connect With Our Pastoral Team</h2>
          <p>
            Our pastors are available for prayer, counseling, and spiritual guidance.
            Whether you're facing challenges, have questions about faith, or simply want
            to connect, they're here for you.
          </p>
          <div className="connect-options">
            <div className="connect-card">
              <div className="connect-icon"><i className="bi bi-telephone-fill"></i></div>
              <h3>Call Us</h3>
              <p>+254721253234</p>
              <p>0712364251</p>
            </div>
            <div className="connect-card">
              <div className="connect-icon"><i className="bi bi-geo-alt-fill"></i></div>
              <h3>Visit Us</h3>
              <p>Join us for Sunday service</p>
              <p>8:00 AM or 10:00 AM</p>
            </div>
            <div className="connect-card">
              <div className="connect-icon"><i className="bi bi-envelope-fill"></i></div>
              <h3>Write to Us</h3>
              <p>P.O. Box 2517-30100</p>
              <p>Eldoret, Kenya</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pastors;