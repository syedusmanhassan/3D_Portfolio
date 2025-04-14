import React from "react";
import Hero from "./Components/Sections/Hero";
import ShowcaseSection from "./Components/Sections/ShowcaseSection";
import Navbar from "./Components/Navbar";
import LogoSection from "./Components/LogoSection";

const App =()=>{
    return(
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <LogoSection/>
    </>
    );
}

export default App;