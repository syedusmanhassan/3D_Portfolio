import React from "react";
import Hero from "./Components/Sections/Hero";
import ShowcaseSection from "./Components/Sections/ShowcaseSection";
import LogoSection from "./Components/Sections/LogoSection";
import FeaturesCards from "./Components/Sections/FeaturesCards";
import Navbar from "./Components/NavBar";
import ExperienceSection from "./Components/Sections/ExperienceSection";

const App =()=>{
    return(
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeaturesCards/>
    <ExperienceSection/>
    </>
    );
}

export default App;