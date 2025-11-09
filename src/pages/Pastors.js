import React, { useState } from 'react';
import './Pastors.css';
import pastorPeterShikanga from '../assets/pastorpetershikanga.jpg';
import pastorBillChoge from '../assets/postarbillchoge.jpg';

function Pastors() {
  const [prayerRequests, setPrayerRequests] = useState({
    1: { firstName: '', lastName: '', message: '' },
    2: { firstName: '', lastName: '', message: '' },
    3: { firstName: '', lastName: '', message: '' },
    4: { firstName: '', lastName: '', message: '' }
  });

  const [submittedMessages, setSubmittedMessages] = useState({});

  const handleInputChange = (pastorId, field, value) => {
    setPrayerRequests(prev => ({
      ...prev,
      [pastorId]: {
        ...prev[pastorId],
        [field]: value
      }
    }));
  };

  const handleSubmit = (pastorId, pastorName, e) => {
    e.preventDefault();
    const request = prayerRequests[pastorId];

    if (request.firstName && request.lastName && request.message) {
      // In a real application, you would send this to a backend
      console.log(`Prayer request for ${pastorName}:`, request);

      setSubmittedMessages(prev => ({
        ...prev,
        [pastorId]: true
      }));

      // Reset form after 3 seconds
      setTimeout(() => {
        setPrayerRequests(prev => ({
          ...prev,
          [pastorId]: { firstName: '', lastName: '', message: '' }
        }));
        setSubmittedMessages(prev => ({
          ...prev,
          [pastorId]: false
        }));
      }, 3000);
    }
  };

  const getInitials = (name = '') =>
    name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  const pastors = [
    {
      id: 1,
      name: 'Apostle Peter Shikanga',
      title: 'Missionary Pastor – AIC Church',
      image: pastorPeterShikanga,
      youtubeUrl: 'https://www.youtube.com/@aicchebisaas',
      role: 'Role & Calling',
      roleDetails: [
        'Trained at AIC Missionary College in cross-cultural studies',
        'Coordinator of Intercession & the Church prayer network',
        'Coordinator of reaching out to the Gospel-unreached people groups around the church location & beyond the Kenyan borders',
        'Mentorship of young people through coaching and leadership development programs'
      ],
      focus: 'Ministry Focus',
      focusDetails: [
        'Evangelism in interior and marginalized areas',
        'Training local leaders & converts',
        'Gospel translation (where needed)',
        'Church planting & prayer centers',
        'Mobilizing believers for missions'
      ],
      impact: 'Impact',
      impactDetails: [
        'Preached in villages, mountains & cross-border regions',
        'Witnessed transformed lives and revived communities',
        'Partners with churches for long-term growth'
      ],
      engagement: 'Engagement',
      engagementDetails: [
        'Leads mission outreaches',
        'Speaker in revivals, missions & youth camps',
        'Open to mission partnerships'
      ],
      callToAction: 'Join the Ministry',
      callToActionText: 'Feel called to missions? Connect with Apostle Peter Shikanga to serve, support, or be trained in reaching the unreached.'
    },
    {
      id: 2,
      name: 'Pastor Bill Choge',
      title: 'Christian Education (CE) Department Worker – AIC Church',
      image: pastorBillChoge,
      youtubeUrl: 'https://www.youtube.com/@aicchebisaas',
      role: 'Role',
      roleDetails: [
        'Oversees Christian Education in the church',
        'Coordinates all curriculum activities across departments'
      ],
      departments: 'Departments Served',
      departmentsList: [
        'Men\'s Fellowship',
        'Women\'s Fellowship',
        'Christian Youth Association (CYA)',
        'Sunday School',
        'Star/Cadet',
        'Battalion',
        'Couples/Family Ministry'
      ],
      responsibilities: 'Key Responsibilities',
      responsibilitiesList: [
        'Organizes training programs for all groups',
        'Facilitates rallies, seminars, camps, and retreats',
        'Ensures spiritual growth through structured learning',
        'Develops and implements age-specific Christian curriculum'
      ],
      callToAction: 'Get Connected',
      callToActionText: 'Interested in joining a department or connecting with Pr. Choge? Reach out through the church office or visit the CE Department desk after any service for guidance and enrollment.'
    },
    {
      id: 3,
      name: 'Revered Cosmas Mutai',
      title: 'Senior Pastor, AIC Chebisaas',
      image: null,
      youtubeUrl: 'https://www.youtube.com/@aicchebisaas',
      roles: 'Roles',
      rolesList: [
        'Senior Pastor, AIC Chebisaas',
        'Marriage Counselor',
        'Peer Counselor'
      ],
      focus: 'Key Focus Areas',
      focusDetails: [
        'Preaching and teaching God\'s Word',
        'Guiding couples through pre-marital and marital counseling',
        'Mentoring youth and offering emotional support',
        'Conflict resolution and relationship restoration',
        'Promoting spiritual growth and healing'
      ],
      activities: 'Activities',
      activitiesDetails: [
        'Leads church services and community outreach',
        'Hosts marriage seminars and youth forums',
        'Offers one-on-one and group counseling sessions'
      ],
      values: 'Values',
      valuesDetails: [
        'Biblical foundation for life and relationships',
        'Empowering families and youth',
        'Compassionate, faith-based guidance'
      ],
      contact: 'Contact',
      contactText: 'Available for appointments and spiritual support',
      callToAction: 'Book Your Appointment',
      callToActionText: 'To book your appointment today'
    },
    {
      id: 4,
      name: 'Pastor Waltereno',
      title: 'Youth Pastor',
      image: null,
      youtubeUrl: 'https://www.youtube.com/@PastorWaltereno',
      bio: 'Youth Pastor at AIC Chebisaas, Pastor Waltereno is a renowned motivational speaker and dedicated youth counselor.',
      callToAction: 'Subscribe & Watch',
      callToActionText: 'Inspire your faith and purpose — Subscribe to his YouTube channel to watch uplifting messages and life-changing teachings.'
    }
  ];

  const renderPastorContent = (pastor) => {
    // Apostle Peter Shikanga
    if (pastor.id === 1) {
      return (
        <>
          {pastor.role && (
            <div className="pastor-section">
              <h4>{pastor.role}</h4>
              <ul>
                {pastor.roleDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
          {pastor.focus && (
            <div className="pastor-section">
              <h4>{pastor.focus}</h4>
              <ul>
                {pastor.focusDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
          {pastor.impact && (
            <div className="pastor-section">
              <h4>{pastor.impact}</h4>
              <ul>
                {pastor.impactDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
          {pastor.engagement && (
            <div className="pastor-section">
              <h4>{pastor.engagement}</h4>
              <ul>
                {pastor.engagementDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
          {pastor.callToAction && (
            <div className="pastor-cta">
              <h4>{pastor.callToAction}</h4>
              <p>{pastor.callToActionText}</p>
            </div>
          )}
        </>
      );
    }

    // Pastor Bill Choge
    if (pastor.id === 2) {
      return (
        <>
          {pastor.role && (
            <div className="pastor-section">
              <h4>{pastor.role}</h4>
              <ul>
                {pastor.roleDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
          {pastor.departments && (
            <div className="pastor-section">
              <h4>{pastor.departments}</h4>
              <ul>
                {pastor.departmentsList.map((dept, index) => (
                  <li key={index}>{dept}</li>
                ))}
              </ul>
            </div>
          )}
          {pastor.responsibilities && (
            <div className="pastor-section">
              <h4>{pastor.responsibilities}</h4>
              <ul>
                {pastor.responsibilitiesList.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
            </div>
          )}
          {pastor.callToAction && (
            <div className="pastor-cta">
              <h4>{pastor.callToAction}</h4>
              <p>{pastor.callToActionText}</p>
            </div>
          )}
        </>
      );
    }

    // Revered Cosmas Mutai
    if (pastor.id === 3) {
      return (
        <>
          {pastor.roles && (
            <div className="pastor-section">
              <h4>{pastor.roles}</h4>
              <ul>
                {pastor.rolesList.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
          )}
          {pastor.focus && (
            <div className="pastor-section">
              <h4>{pastor.focus}</h4>
              <ul>
                {pastor.focusDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
          {pastor.activities && (
            <div className="pastor-section">
              <h4>{pastor.activities}</h4>
              <ul>
                {pastor.activitiesDetails.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          )}
          {pastor.values && (
            <div className="pastor-section">
              <h4>{pastor.values}</h4>
              <ul>
                {pastor.valuesDetails.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          )}
          {pastor.contact && (
            <div className="pastor-section">
              <h4>{pastor.contact}</h4>
              <p>{pastor.contactText}</p>
            </div>
          )}
          {pastor.callToAction && (
            <div className="pastor-cta">
              <h4>{pastor.callToAction}</h4>
              <p>{pastor.callToActionText}</p>
            </div>
          )}
        </>
      );
    }

    // Pastor Waltereno
    if (pastor.id === 4) {
      return (
        <>
          {pastor.bio && <p className="pastor-bio">{pastor.bio}</p>}
          {pastor.callToAction && (
            <div className="pastor-cta">
              <h4>{pastor.callToAction}</h4>
              <p>{pastor.callToActionText}</p>
            </div>
          )}
        </>
      );
    }

    return null;
  };

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
            {pastors.map((pastor) => {
              const hasImage = Boolean(pastor.image);

              return (
                <div key={pastor.id} className="pastor-card">
                  <div className={`pastor-image-container${hasImage ? '' : ' pastor-image-container--empty'}`}>
                    {hasImage ? (
                      <img src={pastor.image} alt={pastor.name} className="pastor-image" />
                    ) : (
                      <div className="pastor-image-placeholder" aria-hidden="true">
                        <span>{getInitials(pastor.name)}</span>
                      </div>
                    )}
                    <div className="pastor-overlay">
                      <h3>{pastor.name}</h3>
                      {pastor.title && <p className="pastor-title">{pastor.title}</p>}
                    </div>
                  </div>
                  <div className="pastor-details">
                    <h3 className="pastor-name">{pastor.name}</h3>
                    {pastor.title && <p className="pastor-position">{pastor.title}</p>}

                    {/* Watch YouTube Button */}
                    {pastor.youtubeUrl && (
                      <div className="youtube-button-container">
                        <p className="youtube-text">Watch his latest videos on YouTube</p>
                        <a
                          href={pastor.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-youtube"
                        >
                          Click here
                        </a>
                      </div>
                    )}

                    {/* Pastor-specific content */}
                    <div className="pastor-content">
                      {renderPastorContent(pastor)}
                    </div>

                    {/* Prayer Request Form */}
                    <div className="prayer-request-form">
                      <h4>Leave a Message for Prayer Request</h4>
                      {submittedMessages[pastor.id] ? (
                        <div className="success-message">
                          Thank you! Your prayer request has been submitted.
                        </div>
                      ) : (
                        <form onSubmit={(e) => handleSubmit(pastor.id, pastor.name, e)}>
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="First Name"
                              value={prayerRequests[pastor.id].firstName}
                              onChange={(e) => handleInputChange(pastor.id, 'firstName', e.target.value)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Last Name"
                              value={prayerRequests[pastor.id].lastName}
                              onChange={(e) => handleInputChange(pastor.id, 'lastName', e.target.value)}
                              required
                            />
                          </div>
                          <div className="form-group">
                            <textarea
                              placeholder="Your prayer request message..."
                              value={prayerRequests[pastor.id].message}
                              onChange={(e) => handleInputChange(pastor.id, 'message', e.target.value)}
                              rows="4"
                              required
                            ></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Submit Prayer Request
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
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
