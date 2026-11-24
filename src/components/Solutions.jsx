
import React from "react";
import { motion } from "framer-motion";

import {
    FileSearch,
    Ruler,
    ClipboardList,
    Calculator,
    Workflow,
    Building2,
    ArrowUpRight
} from "lucide-react";

import "./Solutions.css";


const solutions = [

    {
        number: "01",
        icon: FileSearch,
        title: "Intelligent Drawing Analysis",
        description:
            "Analyze architectural, structural, and engineering drawings using AI to understand building layouts and automatically identify construction components.",
        tag: "AI DRAWING ANALYSIS"
    },

    {
        number: "02",
        icon: Ruler,
        title: "Automated Quantity Takeoff",
        description:
            "Extract measurements, identify building elements, and calculate quantities of walls, floors, columns, beams, doors, and other construction components.",
        tag: "QUANTITY EXTRACTION"
    },

    {
        number: "03",
        icon: ClipboardList,
        title: "Automated BOQ Generation",
        description:
            "Generate structured Bills of Quantities with item descriptions, measurement units, calculated quantities, and detailed estimation information.",
        tag: "BOQ AUTOMATION"
    },

    {
        number: "04",
        icon: Calculator,
        title: "Construction Cost Estimation",
        description:
            "Support accurate project budgeting through quantity-based cost calculations, material requirements, and construction cost analysis.",
        tag: "COST ESTIMATION"
    },

    {
        number: "05",
        icon: Workflow,
        title: "MEP Engineering Analysis",
        description:
            "Interpret mechanical, electrical, and plumbing drawings to identify building services components and support automated quantity assessment.",
        tag: "MEP INTELLIGENCE"
    },

    {
        number: "06",
        icon: Building2,
        title: "Commercial Building Intelligence",
        description:
            "Address the engineering and estimation requirements of shopping malls, commercial complexes, office buildings, and large-scale construction projects.",
        tag: "BUILDING INTELLIGENCE"
    }

];


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12
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


function Solutions() {

    return (

        <section className="solutions-section" id="solutions">

            {/* Decorative Background */}
            <div className="solutions-blueprint"></div>

            <div className="solutions-glow solutions-glow-one"></div>

            <div className="solutions-glow solutions-glow-two"></div>


            <div className="solutions-container">

                {/* Section Heading */}
                <motion.div
                    className="solutions-header"

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true, amount: 0.3 }}

                    transition={{ duration: 0.7 }}
                >

                    <div className="solutions-label">

                        <span className="solutions-label-icon">
                            <Building2 size={15} />
                        </span>

                        AI-POWERED ENGINEERING SOLUTIONS

                    </div>


                    <h2>
                        Intelligent Solutions for

                        <span> Modern Building Construction</span>
                    </h2>


                    <p>
                        From engineering drawing analysis to automated
                        quantity takeoff, BOQ generation, and project
                        cost estimation, MEPZORA brings intelligence
                        to every stage of building construction.
                    </p>


                    <div className="solutions-heading-line">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </motion.div>


                {/* Solutions Grid */}
                <motion.div

                    className="solutions-grid"

                    variants={containerVariants}

                    initial="hidden"

                    whileInView="visible"

                    viewport={{ once: true, amount: 0.12 }}

                >

                    {solutions.map((solution) => {

                        const Icon = solution.icon;

                        return (

                            <motion.article

                                className="solution-card"

                                key={solution.number}

                                variants={cardVariants}

                                whileHover={{
                                    y: -9,
                                    transition: { duration: 0.25 }
                                }}

                            >

                                {/* Card Top */}
                                <div className="solution-card-top">

                                    <div className="solution-icon-box">

                                        <Icon
                                            size={27}
                                            strokeWidth={1.8}
                                        />

                                    </div>

                                    <span className="solution-number">
                                        {solution.number}
                                    </span>

                                </div>


                                {/* Card Content */}
                                <div className="solution-card-content">

                                    <span className="solution-tag">

                                        <span></span>

                                        {solution.tag}

                                    </span>


                                    <h3>
                                        {solution.title}
                                    </h3>


                                    <p>
                                        {solution.description}
                                    </p>

                                </div>


                                {/* Card Footer */}
                                <div className="solution-card-footer">

                                    <span>
                                        MEPZORA.AI
                                    </span>

                                    <div className="solution-card-arrow">

                                        <ArrowUpRight size={19} />

                                    </div>

                                </div>


                                {/* Decorative Blueprint Detail */}
                                <div className="solution-card-decoration">

                                    <Icon
                                        size={115}
                                        strokeWidth={0.7}
                                    />

                                </div>

                            </motion.article>

                        );

                    })}

                </motion.div>


                {/* Bottom Information Strip */}
                <motion.div

                    className="solutions-bottom"

                    initial={{ opacity: 0, y: 25 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true, amount: 0.3 }}

                    transition={{ duration: 0.6 }}

                >

                    <div className="solutions-bottom-icon">

                        <Building2 size={25} />

                    </div>


                    <div className="solutions-bottom-content">

                        <span>
                            FROM DRAWINGS TO CONSTRUCTION ESTIMATES
                        </span>

                        <h3>
                            Smarter engineering for every square foot.
                        </h3>

                    </div>


                    <div className="solutions-bottom-mark">

                        <ArrowUpRight size={24} />

                    </div>

                </motion.div>

            </div>

        </section>

    );

}

export default Solutions;
