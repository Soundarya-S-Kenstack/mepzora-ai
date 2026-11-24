
import React from "react";
import { motion } from "framer-motion";
import {
    ShoppingBag,
    Building2,
    House,
    Hospital,
    ArrowUpRight
} from "lucide-react";

import "./Industries.css";

const industries = [
    {
        number: "01",
        icon: ShoppingBag,
        title: "Shopping Malls",
        subtitle: "Large-Scale Retail Developments",
        description:
            "Support complex multi-floor mall construction through intelligent drawing analysis, quantity extraction, MEP assessment, and BOQ generation.",
        image:
            "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1000&q=85",
        tag: "PRIMARY INDUSTRY"
    },
    {
        number: "02",
        icon: Building2,
        title: "Commercial Buildings",
        subtitle: "Offices & Business Complexes",
        description:
            "Simplify engineering analysis and estimation for office towers, IT parks, corporate spaces, and commercial developments.",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
        tag: "COMMERCIAL PROJECTS"
    },
    {
        number: "03",
        icon: House,
        title: "Residential Buildings",
        subtitle: "Apartments & Housing Projects",
        description:
            "Support quantity takeoff and construction estimation for residential towers, apartment complexes, and multi-storey housing developments.",
        image:
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=85",
        tag: "RESIDENTIAL PROJECTS"
    },
    {
        number: "04",
        icon: Hospital,
        title: "Institutional Buildings",
        subtitle: "Hospitals & Educational Facilities",
        description:
            "Assist with complex building layouts, engineering components, MEP systems, and project quantity estimation.",
        image:
            "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1000&q=85",
        tag: "SPECIALIZED PROJECTS"
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 35
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut"
        }
    }
};

function Industries() {
    return (
        <section className="industries-section" id="industries">

            {/* Background Decorations */}
            <div className="industries-blueprint"></div>

            <div className="industries-container">

                {/* Section Header */}
                <motion.div
                    className="industries-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                >

                    <div className="industries-label">
                        <span className="industries-label-icon">
                            <Building2 size={15} />
                        </span>
                        WHO WE SERVE
                    </div>

                    <h2>
                        Intelligent Engineering for
                        <span> Every Building Project</span>
                    </h2>

                    <p>
                        From expansive shopping malls to modern commercial
                        complexes, MEPZORA aims to simplify engineering
                        drawing analysis, quantity takeoff, and cost
                        estimation across diverse construction projects.
                    </p>

                    <div className="industries-heading-line">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </motion.div>

                {/* Industry Cards */}
                <motion.div
                    className="industries-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                >

                    {industries.map((industry) => {
                        const Icon = industry.icon;

                        return (
                            <motion.article
                                className="industry-card"
                                key={industry.number}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                            >

                                {/* Background Image */}
                                <div className="industry-image">

                                    <img
                                        src={industry.image}
                                        alt={industry.title}
                                    />

                                    <div className="industry-overlay"></div>

                                </div>

                                {/* Card Content */}
                                <div className="industry-content">

                                    <div className="industry-top">

                                        <div className="industry-icon">
                                            <Icon size={23} strokeWidth={1.7} />
                                        </div>

                                        <span className="industry-number">
                                            {industry.number}
                                        </span>

                                    </div>

                                    <span className="industry-tag">
                                        {industry.tag}
                                    </span>

                                    <h3>{industry.title}</h3>

                                    <h4>{industry.subtitle}</h4>

                                    <p>{industry.description}</p>

                                    <div className="industry-footer">

                                        <span>MEPZORA.AI</span>

                                        <div className="industry-arrow">
                                            <ArrowUpRight size={19} />
                                        </div>

                                    </div>

                                </div>

                            </motion.article>
                        );
                    })}

                </motion.div>

                {/* Bottom Message */}
                <motion.div
                    className="industries-bottom"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >

                    <div className="industries-bottom-icon">
                        <Building2 size={25} />
                    </div>

                    <div className="industries-bottom-content">
                        <span>BUILT AROUND CONSTRUCTION INTELLIGENCE</span>

                        <h3>
                            One intelligent approach. Multiple building possibilities.
                        </h3>
                    </div>

                    <div className="industries-bottom-mark">
                        <ArrowUpRight size={24} />
                    </div>

                </motion.div>

            </div>
        </section>
    );
}

export default Industries;
