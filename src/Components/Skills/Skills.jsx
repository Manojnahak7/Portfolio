import { useEffect, useState } from "react";
import "./Skills.css";
import { skillsData } from "./skillsData";
import { SkillRadarChart } from "./SkillRadarChart";

const categories = ["All", "Frontend", "Backend", "Tools"];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;
  const [animatedPercentages, setAnimatedPercentages] = useState({});

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const visibleSkills = filteredSkills.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages));

  useEffect(() => {
    const newPercentages = {};
    visibleSkills.forEach((skill) => {
      let count = 0;
      const interval = setInterval(() => {
        count++;
        newPercentages[skill.name] = count;
        setAnimatedPercentages({ ...newPercentages });
        if (count >= skill.proficiency) clearInterval(interval);
      }, 10);
    });
  }, [page, activeCategory]);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading">My Skills</h2>

      <SkillRadarChart />

      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === activeCategory ? "active" : ""}
            onClick={() => {
              setActiveCategory(cat);
              setPage(1);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {visibleSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <h3>{skill.name}</h3>
            <p className="proficiency-text">
              Proficiency: {animatedPercentages[skill.name] || 0}%
            </p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${animatedPercentages[skill.name] || 0}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button onClick={handleNext} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </section>
  );
};
