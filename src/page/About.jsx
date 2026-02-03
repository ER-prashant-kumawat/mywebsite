import { useContext } from "react";
import "../styles/About.css";
import { PortfolioContext } from "../context/PortfolioContext";

export default function About(){
    const { data } = useContext(PortfolioContext);
    const { about } = data;

    return(
        <section className="section" id="About">
            <h2 className="title">{about.title}</h2>
            <p className="about-text">
                {about.description}
            </p>
        </section>
    );
}