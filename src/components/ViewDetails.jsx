// src/pages/ViewDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { packagesData } from "../data/packagesData";

const ViewDetails = () => {
  const { id } = useParams();
  const packageDetails = packagesData.find(pkg => pkg.id === id);

  if (!packageDetails) {
    return (
      <div>
        <h2>Package not found</h2>
        <Link to="/">Back to Home</Link>
      </div>
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
    <div>
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

      <Link to="/">← Back to Packages</Link>
    </div>
  );
};

export default ViewDetails;
