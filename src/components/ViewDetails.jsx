import React from "react";
import { useParams, Link } from "react-router-dom";
import { packagesData } from "../data/packagesData";
import Header from "./Header";
import Footer from "./Footer";

const ViewDetails = () => {
  const { id } = useParams();
  const packageDetails = packagesData.find(pkg => pkg.id === id);

  if (!packageDetails) {
    return (
      <>
        <Header />
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <h2>Package not found</h2>
          <Link className="cta-btn" to="/">Back to Home</Link>
        </div>
        <Footer />
      </>
    );
  }

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
    <>
      <Header />
      <div className="view-details-page">
        <h1>{title}</h1>
        <p>{overview}</p>

        <h2>Suggested Activities</h2>
        <ul>
          {activities.map((activity, idx) => (
            <li key={idx}>{activity}</li>
          ))}
        </ul>

        <h2>Included</h2>
        <ul>
          {included.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h2>Customizable Options</h2>
        <ul>
          {customizable.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <h2>Not Included</h2>
        <ul>
          {notIncluded.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {notes && notes.length > 0 && (
          <>
            <h2>Notes</h2>
            <ul>
              {notes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </>
        )}

        {/* --- CTA Section --- */}
        <div className="view-details-cta">
          <p>
            Want to customize your journey or discuss pricing?{" "}
            <Link className="cta-btn" to="/contact">
              Contact us
            </Link>
          </p>
        </div>
        
        <Link to="/" className="cta-btn" style={{ marginTop: "2rem" }}>
          ← Back to Packages
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ViewDetails;
