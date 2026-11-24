
import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Industries from "./components/Industries";
import Workflow from "./components/Workflow";
import Projects from "./components/Projects";
import WhyChoose from "./components/WhyChooseUs";
import VisionMission from "./components/VisionMission";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RevealSection from "./components/RevealSection";

function App() {
    return (
        <>
            <Navbar />

            <main>
                {/* Hero Section */}
                <Hero />

                {/* Scroll Reveal Animations */}
                <RevealSection>
                    <About />
                </RevealSection>

                <RevealSection delay={0.1}>
                    <Solutions />
                </RevealSection>

                <RevealSection delay={0.1}>
                    <Industries />
                </RevealSection>

                <RevealSection delay={0.1}>
                    <Workflow />
                </RevealSection>

                <RevealSection delay={0.1}>
                    <Projects />
                </RevealSection>

                <RevealSection delay={0.1}>
                    <WhyChoose />
                </RevealSection>

                <RevealSection delay={0.1}>
                    <VisionMission />
                </RevealSection>

                <RevealSection delay={0.1}>
                    <FAQ />
                </RevealSection>

                <RevealSection delay={0.1}>
                    <Contact />
                </RevealSection>

            </main>

            <Footer />
        </>
    );
}

export default App;
