
import React from "react";
import "./Footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="footer-container">

                <div className="footer-main">

                    {/* Brand Information */}

<div className="footer-brand">

    <a href="#home" className="footer-logo">
        <img
            src="/mepzora-logo.png"
            alt="Mepzora.ai Logo"
            className="footer-logo-image"
        />
    </a>

    <span className="footer-brand-tagline">
        BUILDING INTELLIGENCE
    </span>

    <p>
        Exploring the future of construction through
        artificial intelligence, engineering, and
        digital innovation.
    </p>

                        <div className="footer-social-links">
                            <a href="https://www.linkedin.com/"
                                target="_blank" rel="noreferrer"
                                aria-label="LinkedIn">in</a>

                            <a href="https://www.instagram.com/"
                                target="_blank" rel="noreferrer"
                                aria-label="Instagram">◎</a>

                            <a href="https://www.facebook.com/"
                                target="_blank" rel="noreferrer"
                                aria-label="Facebook">f</a>
                        </div>

                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4>Quick Links</h4>

                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#solutions">Solutions</a></li>
                            <li><a href="#workflow">Workflow</a></li>
                            <li><a href="#projects">Projects</a></li>
                        </ul>
                    </div>

                    {/* Explore */}
                    <div className="footer-column">
                        <h4>Explore</h4>

                        <ul>
                            <li><a href="#why-choose">Why Choose Us</a></li>
                            <li><a href="#vision">Vision & Mission</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="footer-column footer-contact">
                        <h4>Contact Us</h4>

                        <p>
                            Have a question or project idea?
                            Let's connect.
                        </p>

                        <a href="mailto:info@mepzora.ai">
                            ✉ info@mepzora.ai
                        </a>

                        <a href="https://mepzora.ai"
                            target="_blank" rel="noreferrer">
                            🌐 www.mepzora.ai
                        </a>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">

                    <p>
                        © {currentYear} Mepzora.ai.
                        All Rights Reserved.
                    </p>

                    <div className="footer-bottom-links">
                        <a href="#home">Back to Top ↑</a>
                    </div>

                </div>

            </div>
        </footer>
    );
}

export default Footer;
