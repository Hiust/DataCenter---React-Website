import React from 'react';
import "./styles.scss";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import Pricing from "../../components/pricing/Pricing";
import Reviews from "../../components/reviews/Reviews";
import CallToAction from "../../components/callToAction/CallToAction";


function Home() {
    return (
        <>
            <Hero></Hero>
            <Features></Features>
            <HowItWorks></HowItWorks>
            <Pricing></Pricing>
            <div className="background">
                <Reviews></Reviews>
                <CallToAction></CallToAction>
            </div>
        </>
    )
}

export default Home;
