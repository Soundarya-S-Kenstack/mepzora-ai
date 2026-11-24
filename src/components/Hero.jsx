
import React from "react";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero-section" id="home">

            {/* Background Overlay */}
            <div className="hero-overlay"></div>

            <div className="hero-container">

                {/* Left Content */}
                <div className="hero-content">

                    <div className="hero-tag">
                        <span className="hero-tag-dot"></span>
                        AI-POWERED CONSTRUCTION INTELLIGENCE
                    </div>

                    <h1>
                        From Engineering Drawings
                        <br />
                        to <span>Intelligent Insights</span>
                    </h1>

                    <p className="hero-description">
                        Transform complex engineering drawings into
                        actionable construction data. MEPZORA uses AI
                        to identify building components, extract
                        measurements, calculate quantities, generate
                        detailed Bills of Quantities (BOQ), and support
                        accurate project cost estimation.
                    </p>

                    {/* Hero Buttons */}
                    <div className="hero-buttons">

                        <a href="#solutions" className="hero-primary-btn">
                            Explore Our Solutions
                            <span>↗</span>
                        </a>

                        <a href="#contact" className="hero-secondary-btn">
                            Get in Touch
                            <span>→</span>
                        </a>

                    </div>

                    {/* Hero Highlights */}
                    <div className="hero-highlights">

                        <div className="hero-highlight-item">
                            <div className="highlight-icon">⌖</div>
                            <div>
                                <h4>Drawing Intelligence</h4>
                                <p>AI-powered drawing analysis</p>
                            </div>
                        </div>

                        <div className="hero-highlight-item">
                            <div className="highlight-icon">⌘</div>
                            <div>
                                <h4>Automated Takeoff</h4>
                                <p>Measurements & quantities</p>
                            </div>
                        </div>

                        <div className="hero-highlight-item">
                            <div className="highlight-icon">◈</div>
                            <div>
                                <h4>Smart Estimation</h4>
                                <p>BOQ & cost estimation</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Right Visual */}
                <div className="hero-visual">

                    <div className="hero-image-frame"></div>

                    {/* Drawing Analysis Card */}
                    <div className="hero-floating-card ai-card">

                        <div className="floating-card-icon">✧</div>

                        <div>
                            <span className="floating-card-label">
                                AI DRAWING INTELLIGENCE
                            </span>

                            <h3>Drawing Analysis</h3>

                            <p>Intelligent component detection</p>
                        </div>

                    </div>

                    {/* Quantity Takeoff Card */}
                    <div className="hero-floating-card monitoring-card">

                        <div className="monitoring-icon">◉</div>

                        <div>
                            <h4>Quantity Takeoff</h4>
                            <p>Automated measurements</p>
                        </div>

                        <span className="monitoring-status">
                            AI
                        </span>

                    </div>

                    {/* Bottom BOQ Card */}
                    <div className="hero-experience-card">

                        <div className="experience-symbol">
                            <span>BOQ</span>
                        </div>

                        <div>
                            <h3>Smart BOQ Generation</h3>
                            <p>From drawings to cost insights</p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;
