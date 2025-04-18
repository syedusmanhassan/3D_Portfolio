import React from "react";
import Hero from "./Components/Sections/Hero";
import ShowcaseSection from "./Components/Sections/ShowcaseSection";
import LogoSection from "./Components/Sections/LogoSection";
import FeaturesCards from "./Components/Sections/FeaturesCards";
import Navbar from "./Components/NavBar";
import ExperienceSection from "./Components/Sections/ExperienceSection";
import TechStack from "./Components/Sections/TechStack";
import Testimonials from "./Components/Sections/Testimonials"
import Contact from "./Components/Sections/Contact";
import Footer from "./Components/Sections/Footer";

const App =()=>{
    return(
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeaturesCards/>
    <ExperienceSection/>
    <TechStack/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
    );
}

export default App;