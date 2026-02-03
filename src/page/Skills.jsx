import { useContext } from "react";
import "../styles/Skills.css";
import { PortfolioContext } from "../context/PortfolioContext";

export default function Skills() {
  const { data } = useContext(PortfolioContext);
  const { skills } = data;

  return (
    <section className="section">
      <h2 className="title">My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-bar">
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
