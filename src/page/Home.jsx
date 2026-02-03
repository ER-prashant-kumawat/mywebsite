import { useContext } from "react";
import "../styles/Home.css";
import { ReactTyped } from "react-typed";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { PortfolioContext } from "../context/PortfolioContext";

export default function Home() {
  const { data } = useContext(PortfolioContext);
  const { profile } = data;

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="home" id="home">

      {/* 🎥 Video Background */}
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* ✨ Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            color: { value: "#4ade80" },
            opacity: { value: 0.4 },
            move: { speed: 1.5 },
            links: { enable: true, color: "#4ade80" },
          },
        }}
        className="particles"
      />

      <div className="home-content">

        <div className="home-left">
          <h1>
            Hi, I'm <span>{profile.name}</span>
          </h1>

          <h2>
            <ReactTyped
              strings={profile.descriptions}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </h2>

          <p>{profile.bio}</p>

          <div className="social-icons">
            <a href={profile.socials.instagram} target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="home-right">
          <img src={profile.image} alt="profile" />
        </div>

      </div>
    </section>
  );
}
