import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { packagesData } from "../data/packagesData";
import { useLanguage } from "../hooks/useLanguage";

const ViewDetails = () => {
  const { id } = useParams();
  const { t, currentLanguage } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packageDetails = packagesData.find(pkg => pkg.id === id);

  if (!packageDetails) {
    return (
      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <h2>{t('viewDetails.packageNotFound')}</h2>
        <Link className="cta-btn" to="/">{t('viewDetails.backToHome')}</Link>
      </div>
    );
  }

  // Helper function to get translated content
  const getTranslatedContent = (content) => {
    if (typeof content === 'object' && content[currentLanguage]) {
      return content[currentLanguage];
    }
    return content; // fallback to original if no translation
  };

  const {
    title,
    overview,
    activities,
    included,
    customizable,
    notIncluded,
    notes
  } = packageDetails;

  return (
    <div className={`view-details-page package-bg-${id}`}>
      <h1>{getTranslatedContent(title)}</h1>
      <p>{getTranslatedContent(overview)}</p>

      <h2>{t('viewDetails.suggestedActivities')}</h2>
      <ul>
        {getTranslatedContent(activities).map((activity, idx) => (
          <li key={idx}>{activity}</li>
        ))}
      </ul>

      <h2>{t('viewDetails.included')}</h2>
      <ul>
        {getTranslatedContent(included).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2>{t('viewDetails.customizableOptions')}</h2>
      <ul>
        {getTranslatedContent(customizable).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      <h2>{t('viewDetails.notIncluded')}</h2>
      <ul>
        {getTranslatedContent(notIncluded).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {notes && getTranslatedContent(notes).length > 0 && (
        <>
          <h2>{t('viewDetails.notes')}</h2>
          <ul>
            {getTranslatedContent(notes).map((note, idx) => (
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
