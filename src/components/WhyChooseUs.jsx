
import React from "react";
import { motion } from "framer-motion";
import {
    BrainCircuit,
    FileSearch,
    Ruler,
    ClipboardList,
    Calculator,
    Workflow,
    ArrowUpRight,
    Sparkles,
    CheckCircle2,
} from "lucide-react";

import "./WhyChooseUs.css";

const advantages = [
    {
        number: "01",
        icon: BrainCircuit,
        title: "Intelligent Drawing Analysis",
        description:
            "Use AI-powered analysis to interpret architectural, structural, mechanical, electrical, and plumbing engineering drawings.",
    },
    {
        number: "02",
        icon: FileSearch,
        title: "Automated Component Identification",
        description:
            "Identify and organize building components from engineering drawings to support structured construction analysis.",
    },
    {
        number: "03",
        icon: Ruler,
        title: "Measurement & Quantity Takeoff",
        description:
            "Extract drawing measurements and calculate construction quantities to simplify estimation workflows.",
    },
    {
        number: "04",
        icon: ClipboardList,
        title: "Structured BOQ Generation",
        description:
            "Organize identified components, descriptions, units, and calculated quantities into structured Bills of Quantities.",
    },
    {
        number: "05",
        icon: Calculator,
        title: "Construction Cost Estimation",
        description:
            "Support project budgeting with quantity-based cost estimation and organized construction data.",
    },
    {
        number: "06",
        icon: Workflow,
        title: "Integrated Engineering Workflow",
        description:
            "Connect drawing analysis, component identification, quantity takeoff, BOQ preparation, and cost estimation in one workflow.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function scrollToSolutions() {
    document.getElementById("solutions")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

function WhyChoose() {
    return (
        <section className="why-choose-section" id="why-choose">
            <div className="why-choose-container">

                {/* Section Heading */}
                <motion.div
                    className="why-choose-heading"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="why-choose-label">
                        <Sparkles size={14} />
                        WHY MEPZORA.AI
                    </span>

                    <h2>
                        Why Choose
                        <span> Mepzora.ai?</span>
                    </h2>

                    <p>
                        Transform complex engineering drawings into
                        structured construction intelligence with
                        AI-powered analysis, automated quantity takeoff,
                        BOQ generation, and cost estimation.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="why-choose-content">

                    {/* Left Introduction */}
                    <motion.div
                        className="why-choose-intro"
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.75 }}
                    >
                        <span className="why-intro-number">
                            FROM DRAWINGS TO INTELLIGENCE
                        </span>

                        <h3>
                            Smarter Engineering
                            <span> Starts with Better Insights</span>
                        </h3>

                        <p>
                            Understanding complex engineering drawings
                            and preparing construction quantities can
                            involve multiple manual processes. MEPZORA
                            aims to simplify these workflows through
                            artificial intelligence.
                        </p>

                        <p>
                            From identifying architectural and MEP
                            components to extracting measurements,
                            calculating quantities, generating BOQs,
                            and supporting project cost estimation,
                            MEPZORA brings essential engineering
                            workflows together.
                        </p>

                        <div className="why-intro-highlights">
                            <div>
                                <CheckCircle2 size={17} />
                                <span>AI-Powered Drawing Analysis</span>
                            </div>

                            <div>
                                <CheckCircle2 size={17} />
                                <span>Automated Quantity Takeoff</span>
                            </div>

                            <div>
                                <CheckCircle2 size={17} />
                                <span>BOQ & Cost Estimation</span>
                            </div>
                        </div>

                        <div className="why-intro-decoration">
                            <span className="why-decoration-dot"></span>
                            <div></div>
                            <span>ENGINEERING INTELLIGENCE</span>
                        </div>
                    </motion.div>

                    {/* Right Feature Cards */}
                    <motion.div
                        className="why-choose-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}
                    >
                        {advantages.map((item) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    className="why-feature-card"
                                    key={item.number}
                                    variants={cardVariants}
                                    whileHover={{
                                        y: -7,
                                        transition: { duration: 0.25 },
                                    }}
                                >
                                    <div className="why-feature-top">
                                        <div className="why-feature-icon">
                                            <Icon size={24} strokeWidth={1.8} />
                                        </div>

                                        <span className="why-feature-number">
                                            {item.number}
                                        </span>
                                    </div>

                                    <h4>{item.title}</h4>

                                    <p>{item.description}</p>

                                    <div className="why-feature-line"></div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Bottom CTA Banner */}
                <motion.div
                    className="why-choose-bottom"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="why-bottom-icon">
                        <Sparkles size={25} />
                    </div>

                    <div className="why-bottom-text">
                        <span>ENGINEERING MEETS INTELLIGENCE</span>

                        <h3>
                            Turn Your Drawings Into Actionable Insights
                        </h3>

                        <p>
                            Explore how MEPZORA aims to simplify
                            engineering analysis, quantity takeoff,
                            and construction cost estimation.
                        </p>
                    </div>

                    <button
                        className="why-bottom-link"
                        onClick={scrollToSolutions}
                    >
                        Explore Solutions
                        <ArrowUpRight size={19} />
                    </button>
                </motion.div>

            </div>
        </section>
    );
}

export default WhyChoose;
