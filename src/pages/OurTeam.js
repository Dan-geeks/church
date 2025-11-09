import React from 'react';
import './OurTeam.css';

function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: 'SamSoy Kiprono',
      role: 'Worship Leader',
      bio: 'SamSoy leads our worship team with passion and dedication, creating an atmosphere where believers can encounter God\'s presence through music and song.',
      contact: {
        email: 'samsoy@aicchebisaas.org',
        phone: '+254 700 000 000'
      }
    },
    {
      id: 2,
      name: 'Elita',
      role: 'Ministry Coordinator',
      bio: 'Elita coordinates various ministry activities and ensures smooth operations across all church departments, serving with excellence and commitment.',
      contact: {
        email: 'elita@aicchebisaas.org',
        phone: '+254 700 000 001'
      }
    },
    {
      id: 3,
      name: 'B.R.',
      role: 'Youth Ministry Leader',
      bio: 'B.R. is passionate about empowering the next generation, leading our youth programs with energy and biblical wisdom.',
      contact: {
        email: 'br@aicchebisaas.org',
        phone: '+254 700 000 002'
      }
    }
  ];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-content">
          <h1>Our Team</h1>
          <p>Dedicated servants working together to advance God's kingdom</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="team-intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Meet Our Team</h2>
            <p>
              Our team is composed of dedicated individuals who are passionate about serving God
              and His people. Each member brings unique gifts and talents to help fulfill our
              church's mission of evangelizing the unreached and building Christ-centered
              communities.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="team-members-section">
        <div className="container">
          <div className="team-members-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member-card">
                <div className="member-image-container">
                  <div className="member-image-placeholder">
                    <i className="bi bi-person-circle"></i>
                  </div>
                </div>
                <div className="member-details">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-contact">
                    <div className="contact-item">
                      <i className="bi bi-envelope-fill"></i>
                      <span>{member.contact.email}</span>
                    </div>
                    <div className="contact-item">
                      <i className="bi bi-telephone-fill"></i>
                      <span>{member.contact.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="join-team-section">
        <div className="container">
          <h2>Join Our Team</h2>
          <p>
            Are you passionate about serving God and making a difference in people's lives?
            We're always looking for dedicated individuals to join our ministry team. Whether
            you have skills in worship, administration, youth work, or other areas, there's
            a place for you to serve.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurTeam;
