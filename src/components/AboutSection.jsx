import React from 'react';

// TODO: Migrate About section HTML structure from existing HTML file
// TODO: Migrate About section CSS styles from existing CSS file
// TODO: Migrate About section JavaScript functionality (animations, testimonials) from existing JS file

const AboutSection = () => {
  return (
    <section className="about-section">
      {/* Placeholder about content - replace with migrated HTML */}
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About SASA Safaris</h2>
            <p className="about-description">
              With over 15 years of experience in wildlife tourism, SASA Safaris has been 
              providing unforgettable safari experiences to adventurers from around the world. 
              Our expert guides and commitment to conservation make us the premier choice for 
              your African safari adventure.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">20+</div>
                <div className="stat-label">Destinations</div>
              </div>
            </div>
            <button className="btn btn-primary">Learn More</button>
          </div>
          <div className="about-image">
            {/* TODO: Add about section image from assets */}
            <div className="placeholder-image">About Us Image</div>
          </div>
        </div>
        
        <div className="testimonials">
          <h3 className="testimonials-title">What Our Customers Say</h3>
          <div className="testimonials-grid">
            {/* TODO: Add dynamic testimonials rendering */}
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Amazing experience! The guides were knowledgeable and the wildlife viewing was incredible."
              </p>
              <div className="testimonial-author">- Sarah Johnson</div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Best safari tour company! Professional service and unforgettable memories."
              </p>
              <div className="testimonial-author">- Mike Davis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;