import React from "react";
import Hero from "./Components/Sections/Hero";
import ShowcaseSection from "./Components/Sections/ShowcaseSection";
import Navbar from "./Components/Navbar";
import LogoSection from "./Components/Sections/LogoSection";
import FeaturesCards from "./Components/Sections/FeaturesCards";

const App =()=>{
    return(
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    <FeaturesCards/>
    </>
    );
}

export default App;