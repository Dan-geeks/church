import React from 'react';
import './ChurchElders.css';

function ChurchElders() {
  const elders = [
    {
      id: 1,
      name: 'Elder John Kipkoech',
      role: 'Head Elder',
      responsibilities: [
        'Church oversight and governance',
        'Pastoral care and counseling',
        'Leadership development',
        'Strategic planning'
      ],
      bio: 'Elder John has been serving the church for over 20 years with dedication and wisdom. His heart for the community and deep knowledge of Scripture make him an invaluable leader in our congregation.'
    },
    {
      id: 2,
      name: 'Elder Grace Wanjiku',
      role: 'Women\'s Ministry Elder',
      responsibilities: [
        'Women\'s ministry oversight',
        'Mentorship programs',
        'Community outreach',
        'Prayer ministry'
      ],
      bio: 'Elder Grace brings passion and compassion to her role, empowering women in their faith journey and ensuring our church is a place of nurture and growth for all.'
    },
    {
      id: 3,
      name: 'Elder David Otieno',
      role: 'Youth & Education Elder',
      responsibilities: [
        'Youth programs coordination',
        'Sunday School oversight',
        'Educational initiatives',
        'Mentoring young leaders'
      ],
      bio: 'Elder David is passionate about raising the next generation of believers. His innovative approach to youth ministry has transformed countless young lives.'
    },
    {
      id: 4,
      name: 'Elder Sarah Chebet',
      role: 'Worship & Music Elder',
      responsibilities: [
        'Worship services coordination',
        'Music ministry oversight',
        'Choir leadership',
        'Creative arts development'
      ],
      bio: 'Elder Sarah leads our worship with excellence and authenticity, creating an atmosphere where God\'s presence is tangible and hearts are transformed.'
    }
  ];

  return (
    <div className="elders-page">
      {/* Hero Section */}
      <section className="elders-hero">
        <div className="elders-hero-content">
          <h1>Church Elders</h1>
          <p>Faithful servants called to shepherd and guide our congregation</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="elders-intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Our Eldership Team</h2>
            <p>
              Our elders are dedicated men and women of God who provide spiritual leadership,
              oversight, and care for our church family. They work alongside our pastoral team
              to ensure the spiritual health and growth of our congregation, making decisions
              with wisdom, prayer, and biblical discernment.
            </p>
            <p>
              As spiritual shepherds, our elders are committed to prayer, teaching, and serving
              the body of Christ with humility and grace. They are available for counsel, prayer,
              and spiritual guidance whenever you need support.
            </p>
          </div>
        </div>
      </section>

      {/* Elders Grid */}
      <section className="elders-grid-section">
        <div className="container">
          <div className="elders-grid">
            {elders.map((elder) => (
              <div key={elder.id} className="elder-card">
                <div className="elder-icon">
                  <i className="bi bi-person-badge"></i>
                </div>
                <h3>{elder.name}</h3>
                <p className="elder-role">{elder.role}</p>
                <p className="elder-bio">{elder.bio}</p>
                <div className="elder-responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {elder.responsibilities.map((responsibility, index) => (
                      <li key={index}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Biblical Foundation */}
      <section className="biblical-section">
        <div className="container">
          <div className="biblical-content">
            <div className="biblical-icon">
              <i className="bi bi-book"></i>
            </div>
            <h2>Biblical Foundation of Eldership</h2>
            <p>
              "The elders who direct the affairs of the church well are worthy of double honor,
              especially those whose work is preaching and teaching." - 1 Timothy 5:17
            </p>
            <p>
              Our eldership model is based on the New Testament pattern, where elders are called
              to shepherd the flock of God, providing oversight, teaching, and pastoral care with
              humility and servant leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="elders-cta">
        <div className="container">
          <h2>Need Counsel or Prayer?</h2>
          <p>
            Our elders are here to support you in your spiritual journey. Whether you need prayer,
            guidance, or simply want to connect, please don't hesitate to reach out.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Contact Our Elders</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChurchElders;