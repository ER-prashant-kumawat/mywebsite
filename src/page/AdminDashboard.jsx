import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PortfolioContext } from "../context/PortfolioContext";
import "../styles/AdminDashboard.css";

export default function AdminDashboard() {
  const { data, updateData, isAdmin, logout } = useContext(PortfolioContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState(data);

  // Redirect if not admin
  if (!isAdmin) {
    navigate("/admin-login");
    return null;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");

    if (keys.length === 1) {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else if (keys.length === 2) {
      setFormData({
        ...formData,
        [keys[0]]: {
          ...formData[keys[0]],
          [keys[1]]: value,
        },
      });
    } else if (keys.length === 3) {
      setFormData({
        ...formData,
        [keys[0]]: {
          ...formData[keys[0]],
          [keys[1]]: {
            ...formData[keys[0]][keys[1]],
            [keys[2]]: value,
          },
        },
      });
    }
  };

  const handleSave = () => {
    updateData(formData);
    alert("Data saved successfully!");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="admin-header-left">
          <button className="back-btn" onClick={handleGoHome} title="Go back to portfolio">
            ← Back to Portfolio
          </button>
          <h1>Admin Dashboard</h1>
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="admin-container">
        <div className="admin-tabs">
          <button
            className={`tab-btn ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            className={`tab-btn ${activeTab === "skills" ? "active" : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={`tab-btn ${activeTab === "resume" ? "active" : ""}`}
            onClick={() => setActiveTab("resume")}
          >
            Resume
          </button>
        </div>

        <div className="admin-content">
          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="tab-content">
              <h2>Edit Profile</h2>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="profile.name"
                  value={formData.profile.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Title (Main):</label>
                <input
                  type="text"
                  name="profile.title"
                  value={formData.profile.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Typing Descriptions (comma separated):</label>
                <textarea
                  name="profile.descriptions"
                  value={formData.profile.descriptions.join(", ")}
                  onChange={(e) => {
                    const descriptions = e.target.value
                      .split(",")
                      .map((s) => s.trim());
                    setFormData({
                      ...formData,
                      profile: {
                        ...formData.profile,
                        descriptions,
                      },
                    });
                  }}
                />
              </div>
              <div className="form-group">
                <label>Bio:</label>
                <textarea
                  name="profile.bio"
                  value={formData.profile.bio}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Profile Image URL:</label>
                <input
                  type="text"
                  name="profile.image"
                  value={formData.profile.image}
                  onChange={handleInputChange}
                  placeholder="/profile.jpg"
                />
              </div>
              <div className="form-group">
                <label>Instagram URL:</label>
                <input
                  type="url"
                  name="profile.socials.instagram"
                  value={formData.profile.socials.instagram}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>GitHub URL:</label>
                <input
                  type="url"
                  name="profile.socials.github"
                  value={formData.profile.socials.github}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>LinkedIn URL:</label>
                <input
                  type="url"
                  name="profile.socials.linkedin"
                  value={formData.profile.socials.linkedin}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {/* About Tab */}
          {activeTab === "about" && (
            <div className="tab-content">
              <h2>Edit About</h2>
              <div className="form-group">
                <label>Title:</label>
                <input
                  type="text"
                  name="about.title"
                  value={formData.about.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea
                  name="about.description"
                  value={formData.about.description}
                  onChange={handleInputChange}
                  rows="5"
                />
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === "skills" && (
            <div className="tab-content">
              <h2>Edit Skills</h2>
              {formData.skills.map((skill, index) => (
                <div key={skill.id} className="skill-item">
                  <div className="form-group">
                    <label>Skill Name:</label>
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) => {
                        const newSkills = [...formData.skills];
                        newSkills[index].name = e.target.value;
                        setFormData({
                          ...formData,
                          skills: newSkills,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Level (0-100):</label>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={skill.level}
                      onChange={(e) => {
                        const newSkills = [...formData.skills];
                        newSkills[index].level = parseInt(e.target.value);
                        setFormData({
                          ...formData,
                          skills: newSkills,
                        });
                      }}
                    />
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      const newSkills = formData.skills.filter(
                        (_, i) => i !== index
                      );
                      setFormData({
                        ...formData,
                        skills: newSkills,
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button
                className="add-btn"
                onClick={() => {
                  const newId =
                    Math.max(...formData.skills.map((s) => s.id)) + 1;
                  setFormData({
                    ...formData,
                    skills: [
                      ...formData.skills,
                      { id: newId, name: "New Skill", level: 50 },
                    ],
                  });
                }}
              >
                + Add Skill
              </button>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="tab-content">
              <h2>Edit Projects</h2>
              {formData.projects.map((project, index) => (
                <div key={project.id} className="project-item">
                  <div className="form-group">
                    <label>Project Title:</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={(e) => {
                        const newProjects = [...formData.projects];
                        newProjects[index].title = e.target.value;
                        setFormData({
                          ...formData,
                          projects: newProjects,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Description:</label>
                    <textarea
                      value={project.description}
                      onChange={(e) => {
                        const newProjects = [...formData.projects];
                        newProjects[index].description = e.target.value;
                        setFormData({
                          ...formData,
                          projects: newProjects,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Image URL:</label>
                    <input
                      type="text"
                      value={project.image}
                      onChange={(e) => {
                        const newProjects = [...formData.projects];
                        newProjects[index].image = e.target.value;
                        setFormData({
                          ...formData,
                          projects: newProjects,
                        });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>Project Link:</label>
                    <input
                      type="url"
                      value={project.link}
                      onChange={(e) => {
                        const newProjects = [...formData.projects];
                        newProjects[index].link = e.target.value;
                        setFormData({
                          ...formData,
                          projects: newProjects,
                        });
                      }}
                    />
                  </div>
                  <button
                    className="delete-btn"
                    onClick={() => {
                      const newProjects = formData.projects.filter(
                        (_, i) => i !== index
                      );
                      setFormData({
                        ...formData,
                        projects: newProjects,
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
              <button
                className="add-btn"
                onClick={() => {
                  const newId =
                    Math.max(...formData.projects.map((p) => p.id)) + 1;
                  setFormData({
                    ...formData,
                    projects: [
                      ...formData.projects,
                      {
                        id: newId,
                        title: "New Project",
                        description: "",
                        image: "",
                        link: "#",
                      },
                    ],
                  });
                }}
              >
                + Add Project
              </button>
            </div>
          )}

          {/* Resume Tab */}
          {activeTab === "resume" && (
            <div className="tab-content">
              <h2>Edit Resume</h2>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="resume.email"
                  value={formData.resume.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="tel"
                  name="resume.phone"
                  value={formData.resume.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>Resume File URL:</label>
                <input
                  type="url"
                  name="resume.fileUrl"
                  value={formData.resume.fileUrl}
                  onChange={handleInputChange}
                  placeholder="/resume.pdf"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="admin-footer">
        <button className="save-btn" onClick={handleSave}>
          Save All Changes
        </button>
      </div>
    </div>
  );
}
