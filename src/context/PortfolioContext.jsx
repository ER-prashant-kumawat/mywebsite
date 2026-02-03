import React, { createContext, useState, useEffect } from "react";

export const PortfolioContext = createContext();

const DEFAULT_DATA = {
  profile: {
    name: "Prashant",
    title: "Frontend Developer",
    descriptions: [
      "Frontend Developer",
      "React Developer",
      "UI/UX Designer",
      "WordPress Expert",
    ],
    bio: "I build modern, fast and beautiful websites with premium UI and smooth animations.",
    image: "/profile.jpg",
    socials: {
      instagram: "https://instagram.com",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  about: {
    title: "About Me",
    description: "I am a passionate developer...",
  },
  skills: [
    { id: 1, name: "React", level: 90 },
    { id: 2, name: "JavaScript", level: 85 },
  ],
  projects: [
    {
      id: 1,
      title: "Project 1",
      description: "Description here",
      image: "/project1.jpg",
      link: "#",
    },
  ],
  resume: {
    email: "your@email.com",
    phone: "+1234567890",
    fileUrl: "#",
  },
};

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(DEFAULT_DATA);
  const [isAdmin, setIsAdmin] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("portfolioData");
    if (saved) {
      setData(JSON.parse(saved));
    }
    const admin = localStorage.getItem("isAdmin");
    if (admin) {
      setIsAdmin(JSON.parse(admin));
    }
  }, []);

  // Save data to localStorage whenever it changes
  const updateData = (newData) => {
    setData(newData);
    localStorage.setItem("portfolioData", JSON.stringify(newData));
  };

  const login = (password) => {
    // Simple password check (change this to your password)
    if (password === "admin123") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", JSON.stringify(true));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.setItem("isAdmin", JSON.stringify(false));
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updateData,
        isAdmin,
        login,
        logout,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
