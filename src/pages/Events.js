import React from 'react';
import './Events.css';

function Events() {
  const upcomingEvents = [
    {
      id: 1,
      date: 'October 15, 2025',
      title: 'Community Outreach Day',
      time: '9:00 AM - 2:00 PM',
      location: 'Chebisaas Community Center',
      description: 'Join us as we serve our community through food distribution and neighborhood cleanup. All ages welcome! Bring your family and friends to be a blessing to those in need.',
      category: 'Outreach'
    },
    {
      id: 2,
      date: 'October 22, 2025',
      title: 'Youth Prayer Vigil',
      time: '6:00 PM - 10:00 PM',
      location: 'Church Main Hall',
      description: 'Students and young adults gather for worship, testimony, and encouragement as we seek God together. Powerful time of intercession for our generation, families, and nation.',
      category: 'Youth'
    },
    {
      id: 3,
      date: 'October 29, 2025',
      title: 'Leaders Equipping Forum',
      time: '2:00 PM - 5:00 PM',
      location: 'Conference Room',
      description: 'Equipping elders, deacons, and ministry leaders for effective service in the church. Leadership training, vision casting, and strategic planning for the upcoming year.',
      category: 'Leadership'
    },
    {
      id: 4,
      date: 'November 5, 2025',
      title: 'Marriage Enrichment Seminar',
      time: '10:00 AM - 4:00 PM',
      location: 'Church Main Hall',
      description: 'A day dedicated to strengthening marriages through biblical principles. Guest speakers, workshops, and fellowship for married couples. Childcare provided.',
      category: 'Family'
    },
    {
      id: 5,
      date: 'November 12, 2025',
      title: 'Women\'s Conference',
      time: '9:00 AM - 3:00 PM',
      location: 'Church Grounds',
      description: 'Annual women\'s conference featuring inspirational speakers, worship, and fellowship. Theme: "Daughters of the King." Registration required.',
      category: 'Women'
    },
    {
      id: 6,
      date: 'November 19, 2025',
      title: 'Harvest Thanksgiving Service',
      time: '8:00 AM & 10:00 AM',
      location: 'Main Sanctuary',
      description: 'Special thanksgiving service celebrating God\'s faithfulness and provision. Bring your thanksgiving offerings and testimonies to share God\'s goodness.',
      category: 'Special Service'
    }
  ];

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="events-hero-content">
          <h1>Upcoming Events</h1>
          <p>Join us for life-changing gatherings and community activities</p>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <div className="events-intro">
            <h2>What's Happening</h2>
            <p>
              Stay connected with the life of our church through these upcoming events.
              Whether you're looking to serve, grow, or fellowship, there's something for everyone.
            </p>
          </div>

          <div className="events-list">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-header">
                  <div className="event-date-badge">
                    <div className="date-day">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="date-month">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </div>
                  </div>
                  <div className="event-main-info">
                    <div className="event-category">{event.category}</div>
                    <h3>{event.title}</h3>
                  </div>
                </div>
                
                <div className="event-details">
                  <div className="event-detail-item">
                    <span className="detail-icon"><i className="bi bi-clock"></i></span>
                    <span>{event.time}</span>
                  </div>
                  <div className="event-detail-item">
                    <span className="detail-icon"><i className="bi bi-geo-alt"></i></span>
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="event-description">{event.description}</p>

                <button className="event-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="calendar-section">
        <div className="container">
          <h2>Regular Schedule</h2>
          <div className="calendar-grid">
            <div className="calendar-card">
              <h3>Sunday</h3>
              <div className="calendar-items">
                <div className="calendar-item">
                  <span className="cal-time">8:00 AM</span>
                  <span className="cal-event">First Service (English)</span>
                </div>
                <div className="calendar-item">
                  <span className="cal-time">10:00 AM</span>
                  <span className="cal-event">Second Service (Kiswahili)</span>
                </div>
              </div>
            </div>

            <div className="calendar-card">
              <h3>Tuesday</h3>
              <div className="calendar-items">
                <div className="calendar-item">
                  <span className="cal-time">6:00 PM</span>
                  <span className="cal-event">Prayer Meeting</span>
                </div>
              </div>
            </div>

            <div className="calendar-card">
              <h3>Wednesday</h3>
              <div className="calendar-items">
                <div className="calendar-item">
                  <span className="cal-time">6:30 PM</span>
                  <span className="cal-event">Bible Study</span>
                </div>
              </div>
            </div>

            <div className="calendar-card">
              <h3>Friday</h3>
              <div className="calendar-items">
                <div className="calendar-item">
                  <span className="cal-time">5:00 PM</span>
                  <span className="cal-event">Youth Fellowship</span>
                </div>
              </div>
            </div>

            <div className="calendar-card">
              <h3>Saturday</h3>
              <div className="calendar-items">
                <div className="calendar-item">
                  <span className="cal-time">9:00 AM</span>
                  <span className="cal-event">Community Outreach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta">
        <div className="container">
          <h2>Don't Miss Out!</h2>
          <p>
            Stay updated on all our events and activities. For more information or to
            register for any event, please contact us.
          </p>
          <div className="cta-buttons">
            <a href="tel:+254721253234" className="btn btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;