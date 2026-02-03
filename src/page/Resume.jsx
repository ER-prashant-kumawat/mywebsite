import { useState, useContext } from "react";
import "../styles/Resume.css";
import { PortfolioContext } from "../context/PortfolioContext";

export default function Resume() {
  const { data } = useContext(PortfolioContext);
  const { resume } = data;
  const [filter, setFilter] = useState("All");
  const [preview, setPreview] = useState(null);
  const [uploads, setUploads] = useState([]);
  const [downloads, setDownloads] = useState({});

  const defaultResumes = [
    { id: 1, title: "Frontend Developer Resume", type: "Frontend", file: "/resumes/frontend.pdf" },
    { id: 2, title: "Backend Developer Resume", type: "Backend", file: "/resumes/backend.pdf" },
    { id: 3, title: "Machine Learning Resume", type: "ML", file: "/resumes/ml.pdf" },
  ];

  const allResumes = [...defaultResumes, ...uploads];

  const filteredResumes =
    filter === "All" ? allResumes : allResumes.filter(r => r.type === filter);

  const handleDownload = (resume) => {
    setDownloads(prev => ({
      ...prev,
      [resume.title]: (prev[resume.title] || 0) + 1,
    }));
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const type = prompt("Enter resume type (Frontend / Backend / ML / Other):");
    if (!type) return;

    const newResume = {
      id: Date.now(),
      title: file.name,
      type,
      file: URL.createObjectURL(file),
      uploaded: true,
    };

    setUploads(prev => [...prev, newResume]);
  };

  return (
    <section className="section" id="Resume">
      <h2 className="title">Resume</h2>
      <p className="resume-text">Select, preview or download resumes by category.</p>

      {/* ---------- FILTER BAR ---------- */}
      <div className="resume-filter">
        {["All", "Frontend", "Backend", "ML", "Other"].map(cat => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ---------- UPLOAD ---------- */}
      <div className="resume-upload">
        <label className="upload-btn">
          Upload Resume
          <input type="file" accept=".pdf" hidden onChange={handleUpload} />
        </label>
      </div>

      {/* ---------- GRID ---------- */}
      <div className="resume-grid">
        {filteredResumes.map(resume => (
          <div className="resume-card" key={resume.id}>
            <div className={`resume-icon ${resume.type.toLowerCase()}`}></div>
            <h3>{resume.title}</h3>
            <p className="resume-type">{resume.type}</p>

            <div className="resume-actions">
              <button className="btn-outline" onClick={() => setPreview(resume)}>
                Preview
              </button>

              <a
                href={resume.file}
                download
                className="btn-secondary"
                onClick={() => handleDownload(resume)}
              >
                Download
              </a>
            </div>

            <p className="resume-count">
              Downloads: {downloads[resume.title] || 0}
            </p>
          </div>
        ))}
      </div>

      {/* ---------- PREVIEW MODAL ---------- */}
      {preview && (
        <div className="modal-overlay" onClick={() => setPreview(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>{preview.title}</h3>
            <iframe src={preview.file} title="Resume Preview"></iframe>
            <button className="btn-primary" onClick={() => setPreview(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
