
import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Solutions", href: "#solutions" },
        { name: "Workflow", href: "#workflow" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <header className="navbar">
            <div className="navbar-container">

                {/* Logo */}
              <a href="#home" className="navbar-logo">
    <img
        src="/mepzora-logo.png"
        alt="Mepzora.ai Logo"
    />
</a>

                {/* Desktop Navigation */}
                <nav className={`navbar-menu ${menuOpen ? "active" : ""}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="navbar-link"
                            onClick={closeMenu}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Mobile Get Started Button */}
                    <a
                        href="#contact"
                        className="navbar-mobile-btn"
                        onClick={closeMenu}
                    >
                        Get Started
                        <span>↗</span>
                    </a>
                </nav>

                {/* Desktop CTA Button */}
                <a href="#contact" className="navbar-cta">
                    Get Started
                    <span>↗</span>
                </a>

                {/* Mobile Menu Button */}
                <button
                    className={`menu-toggle ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    type="button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
        </header>
    );
}

export default Navbar;
