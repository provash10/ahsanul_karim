import SkillsCard from '@/components/Cards/SkillsCard/SkillsCard';
import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className='bg-[#060d1f] rounded-2xl shadow-[0_8px_40px_-8px_rgba(0,0,0,0.6)] border border-slate-800/60'>
            {/* <h2 className='text-4xl text-white text-center font-bold mt-4'>Skills</h2> */}
            <SkillsCard></SkillsCard>
        </section>
    );
};

export default Skills;