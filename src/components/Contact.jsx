
import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setSuccessMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipient = "info@mepzora.ai";
        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        window.location.href =
            `mailto:${recipient}?subject=${subject}&body=${body}`;

        setSuccessMessage(
            "Your email application is opening with your message."
        );

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">

                {/* Section Heading */}
                <div className="contact-heading">
                    <span className="contact-label">
                        GET IN TOUCH
                    </span>

                    <h2>
                        Let's Discuss Your
                        <span> Project</span>
                    </h2>

                    <p>
                        Looking to simplify engineering drawing analysis,
                        quantity takeoff, or construction cost estimation?
                        Connect with MEPZORA and explore how intelligent
                        engineering solutions can support your project.
                    </p>
                </div>

                {/* Contact Content */}
                <div className="contact-content">

                    {/* Left Contact Information */}
                    <div className="contact-info">

                        <span className="contact-info-label">
                            CONTACT INFORMATION
                        </span>

                        <h3>
                            Let's Transform
                            <span> Your Engineering Workflow.</span>
                        </h3>

                        <p className="contact-info-description">
                            Whether you're planning a shopping mall,
                            commercial complex, or another building project,
                            reach out to discuss your engineering and
                            estimation requirements.
                        </p>

                        {/* Email */}
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                ✉
                            </div>

                            <div>
                                <span>Email Us</span>
                                <a href="mailto:info@mepzora.ai">
                                    info@mepzora.ai
                                </a>
                            </div>
                        </div>

                        {/* Website */}
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                🌐
                            </div>

                            <div>
                                <span>Website</span>
                                <a
                                    href="https://mepzora.ai"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    www.mepzora.ai
                                </a>
                            </div>
                        </div>

                        {/* Working Focus */}
                        <div className="contact-info-item">
                            <div className="contact-info-icon">
                                🏗️
                            </div>

                            <div>
                                <span>Our Focus</span>
                                <p>
                                    AI-Powered Construction Intelligence
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="contact-social">
                            <span>CONNECT WITH US</span>

                            <div className="contact-social-links">
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    in
                                </a>

                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Instagram"
                                >
                                    ◎
                                </a>

                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Facebook"
                                >
                                    f
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Contact Form */}
                    <div className="contact-form-wrapper">

                        <div className="contact-form-heading">
                            <h3>Send Us a Message</h3>
                            <p>
                                Tell us about your project and
                                how we can assist you.
                            </p>
                        </div>

                        <form
                            className="contact-form"
                            onSubmit={handleSubmit}
                        >

                            <div className="contact-form-row">

                                <div className="contact-field">
                                    <label htmlFor="contact-name">
                                        Full Name
                                    </label>

                                    <input
                                        type="text"
                                        id="contact-name"
                                        name="name"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="contact-field">
                                    <label htmlFor="contact-email">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        id="contact-email"
                                        name="email"
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-subject">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    id="contact-subject"
                                    name="subject"
                                    placeholder="e.g. Shopping Mall Project Estimation"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-message">
                                    Your Message
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    placeholder="Tell us about your project requirements..."
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="contact-submit-button"
                            >
                                Send Message
                                <span>→</span>
                            </button>

                            {successMessage && (
                                <div
                                    className="contact-success"
                                    role="status"
                                >
                                    {successMessage}
                                </div>
                            )}

                            <p className="contact-form-note">
                                Your email application will open
                                with your message ready to send.
                            </p>

                        </form>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Contact;
