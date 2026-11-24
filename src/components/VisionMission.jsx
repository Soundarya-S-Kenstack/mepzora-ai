
import React from "react";
import { motion } from "framer-motion";
import {
    Telescope,
    Target,
    ArrowUpRight,
    Sparkles,
    Lightbulb,
    Cpu,
    Building2,
    TrendingUp,
    ArrowRight,
} from "lucide-react";

import "./VisionMission.css";

const visionMissionData = [
    {
        number: "01",
        label: "OUR VISION",
        title: "Transforming the Future of",
        highlight: "Construction Intelligence",
        description:
            "To shape a future where artificial intelligence and engineering work together to transform complex building drawings into meaningful insights, enabling smarter planning, informed decisions, and more efficient construction projects.",
        footer: "ENGINEERING A SMARTER FUTURE",
        icon: Telescope,
        className: "vision-main-card",
    },
    {
        number: "02",
        label: "OUR MISSION",
        title: "Turning Engineering Drawings Into",
        highlight: "Actionable Intelligence",
        description:
            "To develop AI-powered solutions that understand engineering drawings, identify building components, extract measurements, calculate quantities, generate structured Bills of Quantities (BOQ), and support construction cost estimation.",
        footer: "FROM DRAWINGS TO DECISIONS",
        icon: Target,
        className: "mission-main-card",
    },
];

const values = [
    {
        icon: Lightbulb,
        title: "Innovation",
    },
    {
        icon: Building2,
        title: "Engineering Excellence",
    },
    {
        icon: Cpu,
        title: "Intelligent Automation",
    },
    {
        icon: TrendingUp,
        title: "Continuous Improvement",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 55,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

function VisionMission() {
    return (
        <section className="vision-mission-section" id="vision">

            {/* Decorative Background */}
            <div className="vision-bg-orbit vision-orbit-one"></div>
            <div className="vision-bg-orbit vision-orbit-two"></div>
            <div className="vision-bg-glow"></div>

            <div className="vision-mission-container">

                {/* Section Heading */}
                <motion.div
                    className="vision-heading"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="vision-label">
                        <Sparkles size={14} />
                        OUR PURPOSE & DIRECTION
                    </span>

                    <h2>
                        Redefining How Buildings Are
                        <span> Understood and Estimated</span>
                    </h2>

                    <p>
                        Combining artificial intelligence and engineering
                        expertise to bring greater intelligence to
                        construction planning and estimation.
                    </p>

                    <div className="vision-heading-line"></div>
                </motion.div>

                {/* Vision and Mission Cards */}
                <motion.div
                    className="vision-mission-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >

                    {visionMissionData.map((item) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                className={`vision-card ${item.className}`}
                                key={item.number}
                                variants={cardVariants}
                                whileHover={{
                                    y: -12,
                                    transition: { duration: 0.35 },
                                }}
                            >

                                {/* Decorative Card Shape */}
                                <div className="vision-card-decoration"></div>

                                {/* Card Top */}
                                <div className="vision-card-top">

                                    <div className="vision-icon">
                                        <Icon
                                            size={31}
                                            strokeWidth={1.7}
                                        />
                                    </div>

                                    <span className="vision-card-number">
                                        {item.number}
                                    </span>

                                </div>

                                {/* Card Content */}
                                <div className="vision-card-content">

                                    <span className="vision-card-label">
                                        {item.label}
                                    </span>

                                    <h3>
                                        {item.title}
                                        <span>{item.highlight}</span>
                                    </h3>

                                    <p>{item.description}</p>

                                </div>

                                {/* Card Footer */}
                                <div className="vision-card-footer">

                                    <span>{item.footer}</span>

                                    <div className="vision-footer-arrow">
                                        <ArrowUpRight size={19} />
                                    </div>

                                </div>

                            </motion.div>
                        );
                    })}

                </motion.div>

                {/* Core Values */}
                <motion.div
                    className="vision-values"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >

                    <div className="vision-values-heading">
                        <span>WHAT DRIVES US</span>

                        <h3>
                            Our Core Values
                        </h3>

                        <p>
                            The principles that shape our approach to
                            intelligent engineering and construction.
                        </p>
                    </div>

                    <div className="vision-values-list">

                        {values.map((value, index) => {
                            const Icon = value.icon;

                            return (
                                <motion.div
                                    className="vision-value-item"
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.12,
                                    }}
                                    whileHover={{ y: -5 }}
                                >

                                    <div className="vision-value-icon">
                                        <Icon size={21} />
                                    </div>

                                    <p>{value.title}</p>

                                </motion.div>
                            );
                        })}

                    </div>

                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    className="vision-bottom"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >

                    <div className="vision-bottom-decoration">
                        <div className="vision-cta-orbit"></div>
                        <div className="vision-cta-orbit orbit-two"></div>
                        <Sparkles size={35} />
                    </div>

                    <div className="vision-bottom-content">

                        <span className="vision-bottom-label">
                            THE FUTURE OF ENGINEERING INTELLIGENCE
                        </span>

                        <h3>
                            From Engineering Drawings
                            <span> to Smarter Decisions.</span>
                        </h3>

                        <p>
                            Discover how MEPZORA aims to simplify
                            drawing analysis, quantity takeoff,
                            BOQ preparation, and cost estimation.
                        </p>

                    </div>

                    <motion.a
                        href="#contact"
                        className="vision-bottom-button"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Get in Touch
                        <ArrowRight size={18} />
                    </motion.a>

                </motion.div>

            </div>

        </section>
    );
}

export default VisionMission;
