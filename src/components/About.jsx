
import React from "react";
import "./About.css";

function About() {
    return (
        <section className="about-section" id="about">

            <div className="about-container">

                {/* Left Side - Images */}
                <div className="about-visual">

                    <div className="about-main-image">
                        <img
                            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=85"
                            alt="Architectural engineering blueprint and building design"
                        />
                    </div>

                    <div className="about-secondary-image">
                        <img
                            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=85"
                            alt="Construction engineering and project development"
                        />
                    </div>

                    {/* Floating Intelligence Card */}
                    <div className="about-floating-card">
                        <div className="about-floating-icon">
                            ✦
                        </div>

                        <div>
                            <h3>AI + Engineering</h3>
                            <p>From drawings to data</p>
                        </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="about-decoration"></div>

                </div>

                {/* Right Side - Content */}
                <div className="about-content">

                    <div className="about-label">
                        <span></span>
                        ABOUT MEPZORA.AI
                    </div>

                    <h2>
                        Turning Engineering Drawings
                        Into <span>Construction Intelligence</span>
                    </h2>

                    <p className="about-description">
                        MEPZORA is an AI-powered construction intelligence
                        platform designed to transform complex engineering
                        drawings into structured, actionable construction
                        data. It aims to understand architectural, structural,
                        mechanical, electrical, and plumbing drawings while
                        automatically identifying construction components.
                    </p>

                    <p className="about-description">
                        By combining artificial intelligence with engineering
                        workflows, MEPZORA aims to extract measurements,
                        calculate quantities, generate detailed Bills of
                        Quantities (BOQ), and support project cost estimation.
                        Our goal is to simplify complex estimation processes,
                        improve accuracy, and help construction professionals
                        make informed project decisions.
                    </p>

                    {/* About Features */}
                    <div className="about-features">

                        <div className="about-feature">
                            <div className="about-feature-icon">⌖</div>

                            <div>
                                <h3>Intelligent Drawing Analysis</h3>
                                <p>
                                    Understand engineering drawings and
                                    automatically identify construction
                                    components using AI.
                                </p>
                            </div>
                        </div>

                        <div className="about-feature">
                            <div className="about-feature-icon">◈</div>

                            <div>
                                <h3>Automated Quantity Takeoff</h3>
                                <p>
                                    Extract drawing measurements and
                                    calculate construction quantities
                                    efficiently.
                                </p>
                            </div>
                        </div>

                        <div className="about-feature">
                            <div className="about-feature-icon">⌘</div>

                            <div>
                                <h3>BOQ & Cost Estimation</h3>
                                <p>
                                    Generate structured Bills of Quantities
                                    and support project cost estimation.
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* About Button */}
                    <a href="#solutions" className="about-btn">
                        Explore Our Capabilities
                        <span>↗</span>
                    </a>

                </div>

            </div>

        </section>
    );
}

export default About;
