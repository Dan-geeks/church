import React, { useState } from 'react';
import './Sermons.css';

function Sermons() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const sermons = [
    {
      id: 1,
      title: 'Walking in Faith, Not by Sight',
      date: 'October 22, 2025',
      pastor: 'Pastor Shikanga',
      category: 'Faith',
      duration: '45 min',
      series: 'Living by Faith',
      description: 'Discover what it means to trust God completely, even when circumstances seem impossible. Learn practical steps to strengthen your faith walk.',
      scripture: '2 Corinthians 5:7'
    },
    {
      id: 2,
      title: 'The Power of Prayer',
      date: 'October 15, 2025',
      pastor: 'Pastor Samuel',
      category: 'Prayer',
      duration: '40 min',
      series: 'Prayer Life',
      description: 'Unlock the transformative power of prayer in your daily life. Learn how to pray effectively and see God move in amazing ways.',
      scripture: 'James 5:16'
    },
    {
      id: 3,
      title: 'Living in God\'s Grace',
      date: 'October 8, 2025',
      pastor: 'Pastor Shikanga',
      category: 'Grace',
      duration: '50 min',
      series: 'Grace Series',
      description: 'Experience the freedom and joy that comes from understanding and living in God\'s amazing grace. Your life will never be the same.',
      scripture: 'Ephesians 2:8-9'
    },
    {
      id: 4,
      title: 'Building Strong Families',
      date: 'October 1, 2025',
      pastor: 'Pastor Samuel',
      category: 'Family',
      duration: '42 min',
      series: 'Family Foundation',
      description: 'Practical biblical principles for building healthy, Christ-centered families that stand strong in today\'s challenging world.',
      scripture: 'Joshua 24:15'
    },
    {
      id: 5,
      title: 'The Joy of Serving',
      date: 'September 24, 2025',
      pastor: 'Pastor Shikanga',
      category: 'Service',
      duration: '38 min',
      series: 'Servant Leadership',
      description: 'Discover the fulfillment and purpose that comes from serving others. Learn how to use your gifts to make a difference.',
      scripture: 'Mark 10:45'
    },
    {
      id: 6,
      title: 'Overcoming Life\'s Challenges',
      date: 'September 17, 2025',
      pastor: 'Pastor Samuel',
      category: 'Faith',
      duration: '46 min',
      series: 'Victorious Living',
      description: 'Find strength and hope to overcome any obstacle with God\'s help. Learn biblical strategies for victory in difficult times.',
      scripture: 'Romans 8:37'
    }
  ];

  const categories = ['all', 'Faith', 'Prayer', 'Grace', 'Family', 'Service'];

  const filteredSermons = selectedCategory === 'all' 
    ? sermons 
    : sermons.filter(sermon => sermon.category === selectedCategory);

  return (
    <div className="sermons-page">
      {/* Hero Section */}
      <section className="sermons-hero">
        <div className="sermons-hero-content">
          <h1>Sermons & Messages</h1>
          <p>Grow in your faith through powerful biblical teaching</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="sermons-intro-section">
        <div className="container">
          <div className="intro-content">
            <h2>Life-Transforming Messages</h2>
            <p>
              Access our library of inspiring sermons and biblical teachings. Each message is
              carefully prepared to help you grow deeper in your relationship with God and apply
              His Word to your daily life. Whether you missed a service or want to revisit a
              powerful message, you'll find spiritual nourishment here.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === 'all' ? 'All Sermons' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons Grid */}
      <section className="sermons-grid-section">
        <div className="container">
          <div className="sermons-grid">
            {filteredSermons.map((sermon) => (
              <div key={sermon.id} className="sermon-card">
                <div className="sermon-header">
                  <div className="sermon-category-badge">{sermon.category}</div>
                  <div className="sermon-duration">
                    <i className="bi bi-clock"></i> {sermon.duration}
                  </div>
                </div>
                <h3>{sermon.title}</h3>
                <p className="sermon-series">Series: {sermon.series}</p>
                <p className="sermon-scripture">
                  <i className="bi bi-book"></i> {sermon.scripture}
                </p>
                <div className="sermon-meta">
                  <span className="sermon-date">
                    <i className="bi bi-calendar3"></i> {sermon.date}
                  </span>
                  <span className="sermon-pastor">
                    <i className="bi bi-person"></i> {sermon.pastor}
                  </span>
                </div>
                <p className="sermon-description">{sermon.description}</p>
                <div className="sermon-actions">
                  <button className="sermon-btn listen">
                    <i className="bi bi-play-circle"></i> Listen
                  </button>
                  <button className="sermon-btn download">
                    <i className="bi bi-download"></i> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="subscribe-section">
        <div className="container">
          <div className="subscribe-content">
            <div className="subscribe-icon">
              <i className="bi bi-bell"></i>
            </div>
            <h2>Never Miss a Message</h2>
            <p>
              Stay connected and receive notifications when new sermons are uploaded. Subscribe
              to our YouTube channel or podcast to get the latest messages delivered directly to you.
            </p>
            <div className="subscribe-buttons">
              <button className="btn btn-primary">
                <i className="bi bi-youtube"></i> Subscribe on YouTube
              </button>
              <button className="btn btn-outline">
                <i className="bi bi-rss"></i> Subscribe to Podcast
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="sermons-cta">
        <div className="container">
          <h2>Join Us Live Every Sunday</h2>
          <p>
            Experience the power of worship and teaching in person. Join us for our Sunday
            services at 8:00 AM (English) or 10:00 AM (Kiswahili).
          </p>
          <div className="cta-buttons">
            <a href="/services" className="btn btn-primary">View Service Times</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sermons;