import React from "react";
import "../Certifications/Certification.css";
import javaCert from "../../images/Core_java.jpg";
import springboot from "../../images/Springboot_certificate.png";
import fullstackjava from "../../images/fullstackjava.jpg";
import dsa from "../../images/dsa.jpg";
import postman from "../../images/postman.jpg";
const certifications = [
  {
    title: "Java Programming",
    issuer: "KnowledgeGate",
    year: "2025",
    image: javaCert,
  },
  {
    title: "Spring Boot Development",
    issuer: "Scaler",
    year: "2025",
    image: springboot,
  },
  {
    title: "Full Stack Java Developer",
    issuer: "Simplilearn",
    year: "2025",
    image: fullstackjava,
  },
  {
    title: "Data Structures & Algorithms (DSA)",
    issuer: "LearnYard",
    year: "2025",
    image: dsa,
  },
  {
    title: "API Testing",
    issuer: "Postman",
    year: "2025",
    image: postman,
  },
];

const Certification = () => {
  return (
    <section className="certification-section" id="certifications">
      <h2 className="certification-heading">My Certifications</h2>
      <div className="certification-list">
        {certifications.map((cert, index) => (
          <div className="cert-card-flex" key={index}>
            <img
              src={cert.image}
              alt={cert.title}
              className="cert-image-flex"
            />
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>
                <strong>Issued by:</strong> {cert.issuer}
              </p>
              <p>
                <strong>Year:</strong> {cert.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certification;
