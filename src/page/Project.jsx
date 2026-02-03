import { useContext } from "react";
import "../styles/Project.css";
import { PortfolioContext } from "../context/PortfolioContext";

export default function Projects() {
  const { data } = useContext(PortfolioContext);
  const { projects } = data;

  return (
    <section className="section">
      <h2 className="title">Projects</h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.id}>
            {p.image && <img src={p.image} alt={p.title} className="project-image" />}
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {p.link !== "#" && (
              <div className="project-links">
                <a href={p.link} target="_blank" rel="noreferrer">View Project</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
