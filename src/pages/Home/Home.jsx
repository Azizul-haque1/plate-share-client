import React from 'react';
import { motion } from 'framer-motion';
import Hero from './HomeSections/Hero';
import FeaturedFoods from './HomeSections/FeaturedFoods';
import OurMission from './HomeSections/OurMission';
import HowItWorks from './HomeSections/HowItWorks';
import CommunityTestimonials from './HomeSections/CommunityTestimonials';
import Newsletter from './HomeSections/Newsletter';
import Team from './HomeSections/Team';
import ImpactStats from './HomeSections/ImpactStats';
import VolunteerCTA from './HomeSections/VolunteerCTA';
import FAQ from './HomeSections/FAQ';


const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full bg-base-100"
        >
            <Hero />
            <ImpactStats />
            <FeaturedFoods />
            <OurMission />
            <HowItWorks />
            <VolunteerCTA />
            <Team />
            <FAQ />
            <CommunityTestimonials />
            <Newsletter />
        </motion.div>
    );
};

export default Home;