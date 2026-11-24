
import React from "react";
import "./Projects.css";

const projects = [
    {
        number: "01",
        category: "RETAIL & COMMERCIAL DEVELOPMENT",
        title: "Shopping Malls",
        description:
            "Support complex, multi-floor mall projects with intelligent engineering drawing analysis, MEP component identification, quantity takeoff, and BOQ preparation.",
        image:
            "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=900",
        tag: "Featured Project Type",
    },
    {
        number: "02",
        category: "COMMERCIAL CONSTRUCTION",
        title: "Commercial Buildings",
        description:
            "Simplify engineering workflows for office towers, IT parks, and commercial complexes through drawing interpretation, measurement extraction, quantity calculation, and cost estimation.",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900",
        tag: "Commercial",
    },
    {
        number: "03",
        category: "RESIDENTIAL DEVELOPMENT",
        title: "Residential Buildings",
        description:
            "Support residential apartments and multi-storey housing projects with structured quantity estimation, building component identification, and BOQ generation.",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900",
        tag: "Residential",
    },
    {
        number: "04",
        category: "INSTITUTIONAL DEVELOPMENT",
        title: "Institutional Buildings",
        description:
            "Explore intelligent engineering analysis for hospitals, educational institutions, and other facilities with complex architectural and MEP requirements.",
        image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
        tag: "Institutional",
    },
];

function Projects() {
    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">

                {/* Section Heading */}
                <div className="projects-heading">
                    <span className="projects-label">
                        OUR PROJECT FOCUS
                    </span>

                    <h2>
                        Intelligent Solutions for
                        <span> Every Building Project</span>
                    </h2>

                    <p>
                        From large-scale shopping malls to modern
                        commercial and residential developments,
                        MEPZORA aims to transform engineering drawings
                        into actionable construction intelligence.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="projects-grid">

                    {projects.map((project) => (
                        <article
                            className="project-card"
                            key={project.number}
                        >

                            {/* Project Image */}
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={`${project.title} construction project`}
                                    className="project-image"
                                    loading="lazy"
                                />

                                <span className="project-number">
                                    {project.number}
                                </span>

                                <span className="project-image-tag">
                                    {project.tag}
                                </span>
                            </div>

                            {/* Project Content */}
                            <div className="project-content">

                                <span className="project-category">
                                    {project.category}
                                </span>

                                <h3>{project.title}</h3>

                                <p>{project.description}</p>

                                <a
                                    href="#contact"
                                    className="project-link"
                                >
                                    Discuss Your Project
                                    <span>→</span>
                                </a>

                            </div>

                        </article>
                    ))}

                </div>

                {/* Bottom CTA */}
                <div className="projects-bottom">
                    <div>
                        <span className="projects-bottom-label">
                            FROM DRAWINGS TO INTELLIGENCE
                        </span>

                        <h3>
                            Planning your next building project?
                        </h3>

                        <p>
                            Discover how MEPZORA can support your
                            engineering analysis, quantity takeoff,
                            BOQ preparation, and cost estimation needs.
                        </p>
                    </div>

                    <a href="#contact" className="projects-cta">
                        Discuss Your Project
                        <span>→</span>
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Projects;
