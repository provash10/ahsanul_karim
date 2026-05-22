import Banner from '@/components/Banner/Banner';
import React from 'react';
import Skills from './skills/page';
import Services from './services/page';
import Contact from './contact/page';
import AboutMe from '@/components/Cards/AboutMe/AboutMe';
import GetInTouch from '@/components/GetInTouch/GetInTouch';
import EmailSubscribe from '@/components/Banner/EmailSubscribe';
import CoreSkills from './coreSkills/page';
import CustomCareSolution from '@/components/Banner/CustomCareSolution';
import Testimonials from '@/components/Cards/Reviews/Testimonials';
import StatsCard from '@/components/Cards/StatsCard/StatsCard';




const Home = () => {
  return (
    <div className="bg-[#030810]">
      <Banner />
      <div className="max-w-7xl mx-auto flex flex-col gap-4 px-2 sm:px-3 pt-0 pb-4">
        {/* <CoreSkills></CoreSkills> */}
        <AboutMe />
        <Skills />
        <Services />
        <CustomCareSolution />
        <StatsCard />
        <Testimonials />
        <GetInTouch />
      </div>
    </div>
  );
};

export default Home;
