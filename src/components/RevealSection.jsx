
import React from "react";
import { motion } from "framer-motion";

function RevealSection({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 55,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.15,
            }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}

export default RevealSection;
