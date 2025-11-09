import React from 'react';
import './Departments.css';

function Departments() {
  const departments = [
    {
      id: 1,
      name: 'Men\'s Fellowship',
      icon: 'bi-people',
      description: 'Building godly men who lead with integrity, strength, and wisdom in their families and communities.',
      activities: ['Monthly meetings', 'Bible study', 'Community service', 'Men\'s conferences'],
      leader: 'Elder John Kipkoech'
    },
    {
      id: 2,
      name: 'Women\'s Fellowship',
      icon: 'bi-heart',
      description: 'Empowering women to grow in faith, support one another, and impact their families and communities.',
      activities: ['Weekly meetings', 'Prayer groups', 'Women\'s conferences', 'Mentorship programs'],
      leader: 'Elder Grace Wanjiku'
    },
    {
      id: 3,
      name: 'Christian Youth Association (CYA)',
      icon: 'bi-star',
      description: 'Raising up the next generation of strong believers who are passionate about Christ and making a difference.',
      activities: ['Friday fellowships', 'Talent shows', 'Outreach programs', 'Youth camps'],
      leader: 'Elder David Otieno'
    },
    {
      id: 4,
      name: 'Sunday School',
      icon: 'bi-book',
      description: 'Teaching children the foundations of faith and helping them develop a personal relationship with Jesus.',
      activities: ['Sunday classes', 'Bible stories', 'Memory verses', 'Children\'s programs'],
      leader: 'Teacher Mary Chepkoech'
    },
    {
      id: 5,
      name: 'Star/Cadet',
      icon: 'bi-shield',
      description: 'Discipleship program for pre-teens and teens, building character and leadership skills based on biblical principles.',
      activities: ['Weekly meetings', 'Badge programs', 'Camps', 'Leadership training'],
      leader: 'Captain James Kimutai'
    },
    {
      id: 6,
      name: 'Battalion',
      icon: 'bi-flag',
      description: 'Youth brigade focused on discipline, service, and spiritual growth through structured programs and activities.',
      activities: ['Drills', 'Community service', 'Spiritual formation', 'Camps and retreats'],
      leader: 'Commander Sarah Chebet'
    },
    {
      id: 7,
      name: 'Couples/Family Ministry',
      icon: 'bi-house-heart',
      description: 'Strengthening marriages and families through biblical teaching, counseling, and fellowship.',
      activities: ['Marriage seminars', 'Family devotions', 'Counseling sessions', 'Couple retreats'],
      leader: 'Pastor Shikanga'
    }
  ];

  return (
    <div className="departments-page">
      <section className="departments-hero">
        <div className="departments-hero-content">
          <h1>Church Departments</h1>
          <p>Serving together, growing together, impacting together</p>
        </div>
      </section>

      <section className="departments-intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Our Ministries</h2>
            <p>
              At AIC Chebisaas, we believe that every member has a place to serve and grow.
              Our departments provide opportunities for fellowship, discipleship, and service
              across all ages and life stages. Whether you're looking to connect with others,
              develop your gifts, or make a difference in the community, there's a place for you!
            </p>
          </div>
        </div>
      </section>

      <section className="departments-grid-section">
        <div className="container">
          <div className="departments-grid">
            {departments.map((dept) => (
              <div key={dept.id} className="department-card">
                <div className="dept-icon">
                  <i className={`bi ${dept.icon}`}></i>
                </div>
                <h3>{dept.name}</h3>
                <p className="dept-leader">
                  <i className="bi bi-person-badge"></i> {dept.leader}
                </p>
                <p className="dept-description">{dept.description}</p>
                <div className="dept-activities">
                  <h4>Activities:</h4>
                  <ul>
                    {dept.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
                <button className="dept-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-department-section">
        <div className="container">
          <div className="join-content">
            <h2>Join a Department</h2>
            <p>
              Interested in joining one of our departments or learning more about how you can
              get involved? We'd love to connect you with the right ministry for your gifts
              and passions.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Get Connected
              </a>
              <button className="btn btn-outline" onClick={() => window.location.href='tel:+254721253234'}>
                Call Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Departments;