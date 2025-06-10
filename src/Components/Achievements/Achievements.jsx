import React from "react";
import "../Achievements/Achievements.css";
import probsolveinter from "../../images/hackerrank.jpg";
import sqlcertificate from "../../images/sql_intermediate.jpg";
import apitest from "../../images/postman.jpg";
const certificates = [
  {
    title: "Problem Solving (Intermediate)",
    image: probsolveinter,
  },
  {
    title: "SQL (Intermediate)",
    image: sqlcertificate,
  },
  {
    title: "API Test",
    image: apitest,
  },
];

const Achievements = () => {
  return (
    <section className="achievements-section" id="achievements">
      <h2 className="achievements-heading">My Achievements</h2>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-img"
            />
            <p className="certificate-title">{cert.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
