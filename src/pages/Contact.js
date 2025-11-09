import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>Get In Touch</h1>
          <p>We'd love to hear from you. Reach out to us anytime!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-container">
              <h2>Send Us a Message</h2>
              <p className="form-intro">
                Have a question or want to know more about our church? Fill out the form
                below and we'll get back to you as soon as possible.
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-container">
              <h2>Contact Information</h2>
              <p className="info-intro">
                You can also reach us through any of the following channels. We're here
                to serve you!
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon"><i className="bi bi-telephone-fill"></i></div>
                  <h3>Phone</h3>
                  <p>+254 721 253 234</p>
                  <p>0712 364 251</p>
                  <a href="tel:+254721253234" className="info-link">Call Now</a>
                </div>

                <div className="info-card">
                  <div className="info-icon"><i className="bi bi-envelope-fill"></i></div>
                  <h3>Email</h3>
                  <p>info@aicchebisaas.org</p>
                  <p>pastor@aicchebisaas.org</p>
                  <a href="mailto:info@aicchebisaas.org" className="info-link">Send Email</a>
                </div>

                <div className="info-card">
                  <div className="info-icon"><i className="bi bi-geo-alt-fill"></i></div>
                  <h3>Address</h3>
                  <p>P.O. Box 2517-30100</p>
                  <p>Eldoret, Kenya</p>
                  <a href="#map" className="info-link">View Map</a>
                </div>

                <div className="info-card">
                  <div className="info-icon"><i className="bi bi-clock-fill"></i></div>
                  <h3>Office Hours</h3>
                  <p>Monday - Friday</p>
                  <p>9:00 AM - 5:00 PM</p>
                  <p className="office-note">Closed on Public Holidays</p>
                </div>
              </div>

              <div className="social-section">
                <h3>Connect With Us</h3>
                <p>Follow us on social media for updates and inspiration</p>
                <div className="social-links">
                <button className="social-link facebook" type="button">
  <i className="bi bi-facebook"></i> Facebook
</button>
<button className="social-link twitter" type="button">
  <i className="bi bi-twitter"></i> Twitter
</button>
<button className="social-link instagram" type="button">
  <i className="bi bi-instagram"></i> Instagram
</button>
<button className="social-link youtube" type="button">
  <i className="bi bi-youtube"></i> YouTube
</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section" id="map">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=0.5619081,35.3115442&z=17&hl=en&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Church Location"
            ></iframe>
          </div>
          <div className="map-info">
            <p>
              <strong>Directions:</strong> Visit us at AIC Chebisaas in the Chebisaas area
              of Eldoret. For detailed directions, please call us or open the map above
              to navigate using Google Maps.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
