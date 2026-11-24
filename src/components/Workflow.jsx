
import React from "react";
import { motion } from "framer-motion";

import {
    Upload,
    FileSearch,
    Ruler,
    Calculator,
    ArrowRight,
    Sparkles,
    CheckCircle2
} from "lucide-react";

import "./Workflow.css";


const workflowSteps = [

    {
        number: "01",
        icon: Upload,
        title: "Upload Drawings",
        description:
            "Upload architectural, structural, mechanical, electrical, and plumbing drawings to begin the engineering analysis process.",
        tag: "DRAWING INPUT",
        details: "Engineering Plans"
    },

    {
        number: "02",
        icon: FileSearch,
        title: "AI Drawing Analysis",
        description:
            "Use AI to interpret engineering drawings, identify construction components, recognize building elements, and extract relevant measurements.",
        tag: "AI INTELLIGENCE",
        details: "Component Detection"
    },

    {
        number: "03",
        icon: Ruler,
        title: "Quantity Takeoff",
        description:
            "Automatically calculate construction quantities from extracted measurements and organize building components into structured categories.",
        tag: "QUANTITY EXTRACTION",
        details: "Measurement Analysis"
    },

    {
        number: "04",
        icon: Calculator,
        title: "BOQ & Cost Estimation",
        description:
            "Generate structured Bills of Quantities with item descriptions, units, quantities, and cost estimation details for construction projects.",
        tag: "COST INTELLIGENCE",
        details: "BOQ Generation"
    }

];


const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18
        }
    }
};


const cardVariants = {
    hidden: {
        opacity: 0,
        y: 55
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};


function Workflow() {

    return (

        <section className="workflow-section" id="workflow">

            {/* Background Decorations */}
            <div className="workflow-glow workflow-glow-one"></div>

            <div className="workflow-glow workflow-glow-two"></div>


            <div className="workflow-container">

                {/* Section Heading */}
                <motion.div

                    className="workflow-heading"

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true, amount: 0.3 }}

                    transition={{ duration: 0.7 }}

                >

                    <span className="workflow-label">

                        <Sparkles size={14} />

                        HOW IT WORKS

                    </span>


                    <h2>

                        From Engineering Drawings

                        <span> to Intelligent Estimates</span>

                    </h2>


                    <p>

                        MEPZORA transforms complex building drawings into
                        structured construction data through AI-powered
                        analysis, automated quantity takeoff, BOQ generation,
                        and project cost estimation.

                    </p>

                </motion.div>


                {/* Workflow Cards */}
                <motion.div

                    className="workflow-steps"

                    variants={containerVariants}

                    initial="hidden"

                    whileInView="visible"

                    viewport={{ once: true, amount: 0.15 }}

                >

                    {/* Connecting Line */}
                    <div className="workflow-connector">

                        <motion.div

                            className="workflow-connector-progress"

                            initial={{ scaleX: 0 }}

                            whileInView={{ scaleX: 1 }}

                            viewport={{ once: true }}

                            transition={{
                                duration: 1.8,
                                ease: "easeInOut"
                            }}

                        />

                    </div>


                    {/* Workflow Steps */}
                    {workflowSteps.map((step, index) => {

                        const Icon = step.icon;

                        return (

                            <motion.article

                                className="workflow-card"

                                key={step.number}

                                variants={cardVariants}

                            >

                                {/* Card Top */}
                                <div className="workflow-card-top">

                                    <span className="workflow-number">
                                        {step.number}
                                    </span>

                                    <span className="workflow-status">

                                        <span></span>

                                        STEP {index + 1}

                                    </span>

                                </div>


                                {/* Icon */}
                                <div className="workflow-icon">

                                    <Icon
                                        size={30}
                                        strokeWidth={1.8}
                                    />

                                </div>


                                {/* Content */}
                                <span className="workflow-tag">
                                    {step.tag}
                                </span>


                                <h3>
                                    {step.title}
                                </h3>


                                <p>
                                    {step.description}
                                </p>


                                {/* Card Footer */}
                                <div className="workflow-card-footer">

                                    <div className="workflow-detail">

                                        <CheckCircle2 size={15} />

                                        <span>
                                            {step.details}
                                        </span>

                                    </div>


                                    <div className="workflow-arrow">

                                        <ArrowRight size={18} />

                                    </div>

                                </div>

                            </motion.article>

                        );

                    })}

                </motion.div>


                {/* Bottom Information */}
                <motion.div

                    className="workflow-bottom"

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: 0.7, delay: 0.2 }}

                >

                    <div className="workflow-bottom-content">

                        <div className="workflow-bottom-icon">

                            <Sparkles size={21} />

                        </div>


                        <div>

                            <h4>
                                Engineering Drawings. Intelligent Insights.
                            </h4>

                            <p>

                                Simplifying construction measurement,
                                quantity estimation, and BOQ preparation
                                through artificial intelligence.

                            </p>

                        </div>

                    </div>


                    <a href="#solutions" className="workflow-cta">

                        Explore Our Solutions

                        <ArrowRight size={17} />

                    </a>

                </motion.div>

            </div>

        </section>

    );

}

export default Workflow;
