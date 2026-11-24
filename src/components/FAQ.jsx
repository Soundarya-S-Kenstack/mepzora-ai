
import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
    {
        question: "What is MEPZORA.ai?",
        answer:
            "MEPZORA.ai is an AI-powered construction engineering intelligence platform designed to transform engineering drawings into actionable construction data through component identification, measurement extraction, quantity takeoff, BOQ generation, and cost estimation."
    },
    {
        question: "How does MEPZORA analyze engineering drawings?",
        answer:
            "MEPZORA aims to use artificial intelligence to interpret engineering drawings, identify building components, and extract relevant measurements and information to simplify quantity calculation and construction estimation workflows."
    },
    {
        question: "What types of engineering drawings does MEPZORA support?",
        answer:
            "MEPZORA is designed to support architectural, structural, mechanical, electrical, and plumbing (MEP) drawings, helping organize information from different engineering disciplines."
    },
    {
        question: "Can MEPZORA generate BOQs and estimate construction costs?",
        answer:
            "Yes. BOQ generation and cost estimation are key capabilities of MEPZORA. The platform aims to organize component details, units, and calculated quantities into structured Bills of Quantities and support project cost estimation."
    },
    {
        question: "What types of building projects does MEPZORA focus on?",
        answer:
            "MEPZORA primarily focuses on shopping malls and commercial buildings, with potential applications in residential apartments, office buildings, hospitals, educational institutions, and other building developments."
    }
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex((currentIndex) =>
            currentIndex === index ? null : index
        );
    };

    return (
        <section className="faq-section" id="faq">
            <div className="faq-container">

                {/* Section Heading */}
                <div className="faq-heading">
                    <span className="faq-label">
                        GOT QUESTIONS?
                    </span>

                    <h2>
                        Frequently Asked
                        <span> Questions</span>
                    </h2>

                    <p>
                        Find answers to common questions about MEPZORA,
                        AI-powered engineering drawing analysis,
                        quantity takeoff, BOQ generation, and
                        construction cost estimation.
                    </p>
                </div>

                {/* FAQ Main Content */}
                <div className="faq-content">

                    {/* Left Introduction Card */}
                    <div className="faq-intro">

                        <div className="faq-intro-icon">
                            ?
                        </div>

                        <span className="faq-intro-label">
                            NEED MORE INFORMATION?
                        </span>

                        <h3>
                            Have Questions?
                            <span> We're Here to Help.</span>
                        </h3>

                        <p>
                            Want to know how MEPZORA can support
                            your building project? Get in touch
                            with us to explore intelligent engineering
                            analysis and estimation solutions.
                        </p>

                        <div className="faq-intro-bottom">
                            <span className="faq-intro-line"></span>
                            <span>MEPZORA.AI</span>
                        </div>

                    </div>

                    {/* Right FAQ Accordion */}
                    <div className="faq-list">

                        {faqData.map((faq, index) => (
                            <div
                                className={`faq-item ${
                                    activeIndex === index ? "active" : ""
                                }`}
                                key={index}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={activeIndex === index}
                                    aria-controls={`faq-answer-${index}`}
                                    id={`faq-question-${index}`}
                                    type="button"
                                >
                                    <span className="faq-question-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="faq-question-text">
                                        {faq.question}
                                    </span>

                                    <span className="faq-toggle">
                                        {activeIndex === index ? "−" : "+"}
                                    </span>
                                </button>

                                {activeIndex === index && (
                                    <div
                                        className="faq-answer"
                                        id={`faq-answer-${index}`}
                                        role="region"
                                        aria-labelledby={`faq-question-${index}`}
                                    >
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </section>
    );
}

export default FAQ;
