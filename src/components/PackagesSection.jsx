import React from "react";
import { 
  ClassicMaasaiMara, 
  Amboseli, 
  FamilySafari, 
  RomanticSafari, 
  CoastalExperience 
} from "../assets/images";

const PackagesSection = () => (
  <section className="packages-section" id="packages">
    <div className="packages-section-container">
      <div className="packages-intro-container">
        <h2 className="packages-title">Safari & Beach Packages</h2>
        <p className="packages-subtitle">
          Choose your adventure: classic safaris, family escapes, coastal relaxation and more.
        </p>
      </div>
    <div className="packages-wrapper" tabIndex={0} aria-label="Safari & Beach Packages">
      {/* Card 1 */}
      <article className="package-card active" style={{opacity: 1, pointerEvents: "auto", zIndex: 10}}>
        <div className="package-card-image">
          <img src={ClassicMaasaiMara} alt="Mara & Tsavo Wildlife Safari - lions and elephants in savannah" />
        </div>
        <div className="package-card-content">
          <h2 className="package-title">Mara &amp; Tsavo Wildlife Safari</h2>
          <div className="package-duration">5 Days / 4 Nights</div>
          <div className="package-badge badge-popular">⭐ 4.9/5 &middot; Most Popular</div>
          <div className="package-description">
            Experience the iconic Big 5 across two legendary parks. Witness lions, elephants, and cheetahs in their natural habitat, with expert-guided game drives and evening sundowners.
          </div>
          <div className="package-ctas">
            <button className="package-cta-primary">
              Contact Us
              <span className="package-cta-primary-icon">
                <svg viewBox="0 0 48 48" width="24" height="24" aria-hidden="true" focusable="false">
                  <circle cx="24" cy="24" r="20" fill="#fff" />
                  <polyline points="18 30 30 18" fill="none" stroke="var(--cta)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="18 18 30 18 30 30" fill="none" stroke="var(--cta)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <a className="package-cta-secondary" href="#details-mara-tsavo">View Details</a>
          </div>
        </div>
      </article>
      {/* Card 2 */}
      <article className="package-card" data-index={1} aria-hidden="true">
        <div className="package-card-image">
          <img src={Amboseli} alt="Amboseli & Chyulu Explorer - elephants and Kilimanjaro" />
        </div>
        <div className="package-card-content">
          <h2 className="package-title">Amboseli &amp; Chyulu Explorer</h2>
          <div className="package-duration">4 Days / 3 Nights</div>
          <div className="package-badge badge-adventure">⭐ 4.8/5 &middot; Adventure Pick</div>
          <div className="package-description">
            Marvel at Amboseli’s majestic elephants against Mount Kilimanjaro’s backdrop and explore the hidden trails of Chyulu Hills for a serene wildlife adventure.
          </div>
          <div className="package-ctas">
            <button className="package-cta-primary">
              Contact Us
              <span className="package-cta-primary-icon">
                <svg viewBox="0 0 48 48" width="24" height="24" aria-hidden="true" focusable="false">
                  <circle cx="24" cy="24" r="20" fill="#fff" />
                  <polyline points="18 30 30 18" fill="none" stroke="var(--cta)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="18 18 30 18 30 30" fill="none" stroke="var(--cta)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <a className="package-cta-secondary" href="#details-amboseli-chyulu">View Details</a>
          </div>
        </div>
      </article>
      {/* Card 3 */}
      <article className="package-card" data-index={2} aria-hidden="true">
        <div className="package-card-image">
          <img src={FamilySafari} alt="Family Safari & Beach Holiday - family on Diani Beach" />
        </div>
        <div className="package-card-content">
          <h2 className="package-title">Family Safari &amp; Beach Holiday</h2>
          <div className="package-duration">7 Days / 6 Nights</div>
          <div className="package-badge badge-family">⭐ 4.9/5 &middot; Family Favorite</div>
          <div className="package-description">
            A perfect family mix of safari excitement and beach relaxation. Enjoy safe guided game drives, sandcastle building on Diani Beach, and fun-filled coastal activities for all ages.
          </div>
          <div className="package-ctas">
            <button className="package-cta-primary">
              Contact Us
              <span className="package-cta-primary-icon">
                <svg viewBox="0 0 48 48" width="24" height="24" aria-hidden="true" focusable="false">
                  <circle cx="24" cy="24" r="20" fill="#fff" />
                  <polyline points="18 30 30 18" fill="none" stroke="var(--cta)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="18 18 30 18 30 30" fill="none" stroke="var(--cta)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <a className="package-cta-secondary" href="#details-family-safari-beach">View Details</a>
          </div>
        </div>
      </article>
      {/* Card 4 */}
      <article className="package-card" data-index={3} aria-hidden="true">
        <div className="package-card-image">
          <img src={RomanticSafari} alt="Romantic Safari & Honeymoon Escape - couple sunset lodge" />
        </div>
        <div className="package-card-content">
          <h2 className="package-title">Romantic Safari &amp; Honeymoon Escape</h2>
          <div className="package-duration">6 Days / 5 Nights</div>
          <div className="package-badge badge-romantic">⭐ 5/5 &middot; Romantic Getaway</div>
          <div className="package-description">
            Indulge in a couple’s dream getaway with private safari lodges, candlelit dinners under the stars, and tranquil beachside sunsets for an unforgettable romantic experience.
          </div>
          <div className="package-ctas">
            <button className="package-cta-primary">
              Contact Us
              <span className="package-cta-primary-icon">
                <svg viewBox="0 0 48 48" width="24" height="24" aria-hidden="true" focusable="false">
                  <circle cx="24" cy="24" r="20" fill="#fff" />
                  <polyline points="18 30 30 18" fill="none" stroke="var(--cta)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="18 18 30 18 30 30" fill="none" stroke="var(--cta)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <a className="package-cta-secondary" href="#details-romantic-safari">View Details</a>
          </div>
        </div>
      </article>
      {/* Card 5 */}
      <article className="package-card" data-index={4} aria-hidden="true">
        <div className="package-card-image">
          <img src={CoastalExperience} alt="Kenyan Coastal Adventure - snorkeling and beach" />
        </div>
        <div className="package-card-content">
          <h2 className="package-title">Kenyan Coastal Adventure</h2>
          <div className="package-duration">5 Days / 4 Nights</div>
          <div className="package-badge badge-coastal">⭐ 4.7/5 &middot; Coastal Escape</div>
          <div className="package-description">
            Discover Kenya’s stunning coastline with sun-soaked beaches, snorkeling adventures, and cultural explorations from Watamu to Diani. A perfect blend of adventure and relaxation.
          </div>
          <div className="package-ctas">
            <button className="package-cta-primary">
              Contact Us
              <span className="package-cta-primary-icon">
                <svg viewBox="0 0 48 48" width="24" height="24" aria-hidden="true" focusable="false">
                  <circle cx="24" cy="24" r="20" fill="#fff" />
                  <polyline points="18 30 30 18" fill="none" stroke="var(--cta)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="18 18 30 18 30 30" fill="none" stroke="var(--cta)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            <a className="package-cta-secondary" href="#details-coastal-adventure">View Details</a>
          </div>
        </div>
      </article>
      {/* Progress indicator */}
      <div className="package-progress-indicator" aria-label="Package Progress" role="presentation">
        <div className="progress-dot active" data-dot={0} aria-hidden="true"></div>
        <div className="progress-dot" data-dot={1} aria-hidden="true"></div>
        <div className="progress-dot" data-dot={2} aria-hidden="true"></div>
        <div className="progress-dot" data-dot={3} aria-hidden="true"></div>
        <div className="progress-dot" data-dot={4} aria-hidden="true"></div>
      </div>
    </div>
    </div>
  </section>
);

export default PackagesSection;
