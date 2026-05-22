"use client";

import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import HireMeModal from '@/components/Modal/HireMeModal';
import NavbarLogoImg1 from '@/app/animations/NavbarAnimate/NavbarLogoImg1';
import NavbarLogoImg2 from '@/app/animations/NavbarAnimate/NavbarLogoImg2';
import NavbarBtn from '@/app/animations/NavbarAnimate/Navbarbtn';
import NavbarHireBtn from '@/app/animations/NavbarAnimate/NavbarHireBtn';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const links = [
        { href: "/", label: "Home" },
        { href: "#skills", label: "Skills" },
        { href: "#services", label: "Services" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <div className='sticky top-0 z-50 bg-[#0a192f] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.6)] border-b border-slate-800/60 px-4'>
            <div className='flex justify-between items-center px-6 py-3 h-14'>

                {/* Logo */}
                <div className='flex items-center gap-0'>
                    <NavbarLogoImg1 />
                    <NavbarLogoImg2 />
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center gap-6 font-medium'>
                    {links.map((link) => (
                        <NavbarBtn key={link.href} href={link.href} label={link.label} />
                    ))}
                </div>

                {/* Hire Me - desktop */}
                <div className='hidden md:block'>
                    <NavbarHireBtn onClick={() => setModalOpen(true)} />
                </div>

                {/* Hamburger - mobile */}
                <button
                    className='md:hidden text-white text-2xl'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden flex flex-col items-start gap-3 px-4 pb-4 bg-[#0a192f] border-t border-slate-700 w-full'>
                    {links.map((link) => (
                        <NavbarBtn key={link.href} href={link.href} label={link.label} onClick={() => setIsOpen(false)} />
                    ))}
                    <div className='pt-1 w-full'>
                        <NavbarHireBtn onClick={() => { setModalOpen(true); setIsOpen(false); }} />
                    </div>
                </div>
            )}

            <HireMeModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default Navbar;
