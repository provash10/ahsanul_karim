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
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-3 pb-4 pt-0 sm:px-4 sm:gap-5 lg:px-6">
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
