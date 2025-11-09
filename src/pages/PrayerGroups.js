import React from 'react';
import './PrayerGroups.css';

function PrayerGroups() {
  const prayerGroups = [
    {
      id: 1,
      name: 'Early Morning Prayer Warriors',
      time: 'Monday - Friday, 5:30 AM - 6:30 AM',
      location: 'Church Sanctuary',
      description: 'Start your day with powerful intercession. Join us as we seek God\'s face together and pray for our families, church, and nation.',
      focus: ['Personal breakthrough', 'Family prayers', 'National intercession'],
      leader: 'Elder Grace Wanjiku'
    },
    {
      id: 2,
      name: 'Women\'s Prayer Circle',
      time: 'Every Wednesday, 10:00 AM - 12:00 PM',
      location: 'Church Hall',
      description: 'Women gathering to pray for their families, marriages, children, and specific needs in the church and community.',
      focus: ['Family restoration', 'Children\'s success', 'Marital blessings', 'Community needs'],
      leader: 'Mrs. Sarah Chebet'
    },
    {
      id: 3,
      name: 'Men\'s Prayer Fellowship',
      time: 'Every Tuesday, 6:00 PM - 7:30 PM',
      location: 'Conference Room',
      description: 'Men standing in the gap through prayer, building spiritual strength and accountability in their walk with God.',
      focus: ['Spiritual leadership', 'Business and careers', 'Family provision', 'Personal growth'],
      leader: 'Elder John Kipkoech'
    },
    {
      id: 4,
      name: 'Youth Intercession Team',
      time: 'Every Friday, 5:00 PM - 6:30 PM',
      location: 'Youth Center',
      description: 'Young people united in prayer for their generation, schools, universities, and youth-related challenges.',
      focus: ['Academic excellence', 'Career guidance', 'Peer relationships', 'Life decisions'],
      leader: 'Elder David Otieno'
    },
    {
      id: 5,
      name: 'Night of Prayer',
      time: 'Last Friday of Every Month, 9:00 PM - 12:00 AM',
      location: 'Main Sanctuary',
      description: 'Extended time of worship, prayer, and seeking God\'s presence. A powerful time of breakthroughs and divine encounters.',
      focus: ['Deep intercession', 'Spiritual warfare', 'Prophetic prayers', 'Breakthrough sessions'],
      leader: 'Pastor Shikanga'
    }
  ];

  return (
    <div className="prayer-groups-page">
      <section className="prayer-hero">
        <div className="prayer-hero-content">
          <h1>Prayer Groups</h1>
          <p>Where heaven and earth meet through the power of prayer</p>
        </div>
      </section>

      <section className="prayer-intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>The Power of United Prayer</h2>
            <p>
              "Again, truly I tell you that if two of you on earth agree about anything they
              ask for, it will be done for them by my Father in heaven. For where two or three
              gather in my name, there am I with them." - Matthew 18:19-20
            </p>
            <p>
              At AIC Chebisaas, we believe in the transformative power of prayer. Our prayer
              groups provide opportunities for believers to come together, seek God's face,
              and intercede for personal needs, families, our church, and our nation. Join us
              as we experience the power of united prayer!
            </p>
          </div>
        </div>
      </section>

      <section className="prayer-groups-grid-section">
        <div className="container">
          <div className="prayer-groups-grid">
            {prayerGroups.map((group) => (
              <div key={group.id} className="prayer-group-card">
                <div className="group-header">
                  <div className="group-icon">
                    <i className="bi bi-chat-quote"></i>
                  </div>
                  <h3>{group.name}</h3>
                </div>
                <div className="group-details">
                  <p className="group-time">
                    <i className="bi bi-clock"></i> {group.time}
                  </p>
                  <p className="group-location">
                    <i className="bi bi-geo-alt"></i> {group.location}
                  </p>
                  <p className="group-leader">
                    <i className="bi bi-person-badge"></i> {group.leader}
                  </p>
                </div>
                <p className="group-description">{group.description}</p>
                <div className="group-focus">
                  <h4>Prayer Focus:</h4>
                  <ul>
                    {group.focus.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <button className="group-btn">Join This Group</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prayer-requests-section">
        <div className="container">
          <div className="prayer-requests-content">
            <div className="requests-icon">
              <i className="bi bi-heart-fill"></i>
            </div>
            <h2>Submit Your Prayer Request</h2>
            <p>
              Do you have a prayer need? We're here to stand with you in prayer. Share your
              request with us, and our prayer teams will lift you up before the throne of grace.
            </p>
            <div className="prayer-form">
              <input type="text" placeholder="Your Name" className="prayer-input" />
              <input type="email" placeholder="Your Email (Optional)" className="prayer-input" />
              <textarea 
                placeholder="Share your prayer request..."
                className="prayer-textarea"
                rows="5"
              ></textarea>
              <button className="submit-prayer-btn">Submit Prayer Request</button>
            </div>
          </div>
        </div>
      </section>

      <section className="join-prayer-section">
        <div className="container">
          <h2>Join a Prayer Group Today</h2>
          <p>
            Experience the power of corporate prayer and see God move in mighty ways. Whether
            you're facing challenges, need breakthrough, or simply want to grow in your prayer
            life, we have a place for you.
          </p>
          <div className="cta-buttons">
            <a href="/contact" className="btn btn-primary">Get Connected</a>
            <button className="btn btn-outline" onClick={() => window.location.href='tel:+254721253234'}>
              Call Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrayerGroups;