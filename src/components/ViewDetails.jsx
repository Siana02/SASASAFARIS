import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";

const ViewDetails = () => {
  const { id } = useParams();
  const { t } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get package details from translations
  const packageDetails = t(`packagesData.${id}`);
  
  if (!packageDetails || packageDetails === `packagesData.${id}`) {
    return (
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2>{t('viewDetails.packageNotFound')}</h2>
        <Link className="cta-btn" to="/">{t('viewDetails.backToHome')}</Link>
      </div>
    );
  }

  // Handle the case where packageDetails is an object (from translation)
  const getDetailProperty = (property) => {
    return t(`packagesData.${id}.${property}`);
  };

  const getDetailArray = (property) => {
    const item = t(`packagesData.${id}.${property}`);
    return Array.isArray(item) ? item : [];
  };

  return (
    <div className={`view-details-page package-bg-${id}`}>
      <h1>{getDetailProperty('title')}</h1>
      <p>{getDetailProperty('overview')}</p>

      <h2>{t('viewDetails.suggestedActivities')}</h2>
      <ul>
        {getDetailArray('activities').map((activity, idx) => (
          <li key={idx}>{activity}</li>
        ))}
      </ul>

      <h2>{t('viewDetails.included')}</h2>
      <ul>
        {getDetailArray('included').map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2>{t('viewDetails.customizableOptions')}</h2>
      <ul>
        {getDetailArray('customizable').map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2>{t('viewDetails.notIncluded')}</h2>
      <ul>
        {getDetailArray('notIncluded').map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {getDetailArray('notes').length > 0 && (
        <>
          <h2>{t('viewDetails.notes')}</h2>
          <ul>
            {getDetailArray('notes').map((note, idx) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </>
      )}

      {/* --- CTA Section --- */}
      <div className="view-details-cta">
        <p>
          {t('viewDetails.ctaText')}{" "}
          <Link className="cta-btn" to="/contact">
            {t('viewDetails.contactUs')}
          </Link>
        </p>
      </div>
      
      <Link to="/" className="cta-btn" style={{ marginTop: "2rem" }}>
        {t('viewDetails.backToPackages')}
      </Link>
    </div>
  );
};

export default ViewDetails;
