import React from "react";
import "../../Components/Projects/Projects.css";
import ebook from "../../images/ebook_icon.png";
import retail from "../../images/retail_billing_icon.png";
import emp from "../../images/emp_management_icon.png";

const projects = [
  {
    title: "EBooks",
    duration: "Jan 2025 - Feb 2025",
    description:
      "An online book-selling platform built with core Java & web technologies. Includes admin, user panels, cart, order, feedback, and authentication system.",
    techStack: ["Java", "JSP", "MySQL", "JDBC", "Servlet", "Bootstrap"],
    image: ebook,
    github: "https://github.com/Manojnahak7/E_book",
  },
  {
    title: "Retail Billing Software",
    duration: "Feb 2025 - Apr 2025",
    description:
      "Retail billing solution with Spring Boot REST APIs, product listing, inventory, category management, PDF bill generator, and role-based login.",
    techStack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "JPA",
      "Postman",
      "React.js",
      "REST API",
      "MySQL",
    ],
    image: retail,
    github: "https://github.com/Manojnahak7/Retail-Billing-Software",
  },
  {
    title: "Employee Management System",
    duration: "Apr 2025 - June 2025",
    description:
      "Full-stack system for employee registration, login, profile update, and admin dashboard. Includes authentication using Spring Security.",
    techStack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Hibernate",
      "JPA",
      "React.js",
      "Postman",
      "REST API",
      "Spring Security",
    ],
    image: emp,
    github: "https://github.com/Manojnahak7/employee-management-system",
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="compact-projects-grid">
        {projects.map((proj, index) => (
          <div className="compact-project-card" key={index}>
            <div className="project-header">
              <img src={proj.image} alt={proj.title} className="project-icon" />
              <h3 className="project-title">{proj.title}</h3>
            </div>
            <p className="project-duration">{proj.duration}</p>
            <p className="project-description">{proj.description}</p>
            <div className="project-tags">
              {proj.techStack.map((tag, i) => (
                <span className="project-tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-footer">
              <a href={proj.github} target="_blank" rel="noreferrer">
                GitHub 🔗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
