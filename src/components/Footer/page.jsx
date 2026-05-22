"use client";

import Image from "next/image";
import Link from "next/link";
import logoImg from '../../../public/assets/ahsanuldigital-logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import BottomBar from "@/components/Footer/BottomBar";

const Footer = () => {
  return (
    <footer className="relative m-3 overflow-hidden rounded-2xl border border-slate-800/40 bg-[#050b1a] pt-10 pb-4 text-gray-400 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.8)] sm:m-4 sm:pt-12">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_50%_0%,_rgba(37,99,235,0.05)_0%,_transparent_50%)]"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mb-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Branding & Mission */}
          <div className="space-y-6">
            <Link href="/" className="mb-4 flex w-fit items-center justify-center px-0 sm:px-2 group">
              {/* <div className="relative">
                <Image
                  src="/image/careio.png"
                  alt="Care.io Logo"
                  width={90}
                  height={25}
                  className="brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity object-contain"
                  priority
                />
              </div> */}
              {/* <h1 className="text-2xl font-bold">Ahsanul Digital</h1> */}
              <Image
                src={logoImg}
                alt="bannerImg"
                width={160}
                height={60}
                className="w-32 sm:w-40 md:w-[160px] h-auto"
              />
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-gray-500 sm:text-base">
              I am a Digital Marketing Expert specializing in Facebook, Instagram,
              and Google Ads. I help businesses grow online with proven strategies.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                { icon: <FaFacebookF />, href: "https://facebook.com/ahsanuldigital", color: "hover:bg-blue-600 hover:border-blue-600 hover:text-white text-blue-400 border-blue-500/30 bg-blue-500/10" },
                { icon: <FaTwitter />, href: "https://x.com/ahsanuldigital", color: "hover:bg-slate-600 hover:border-slate-500 hover:text-white text-slate-300 border-slate-500/30 bg-slate-500/10" },
                { icon: <FaInstagram />, href: "https://instagram.com/ahsanuldigital", color: "hover:bg-pink-600 hover:border-pink-500 hover:text-white text-pink-400 border-pink-500/30 bg-pink-500/10" },
                { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/ahsanuldigital", color: "hover:bg-blue-700 hover:border-blue-600 hover:text-white text-blue-300 border-blue-400/30 bg-blue-700/10" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border shadow-xl transition-all duration-300 hover:-translate-y-1 ${social.color}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Exploration */}
          <div>
            <h3 className="btn h-[38px] px-6 text-sm font-bold text-white mb-6 flex items-center gap-3 w-fit">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              Quick Explore
            </h3>
            <ul className="space-y-4 font-bold text-sm uppercase tracking-widest">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Skills", href: "/#skills" },
                { name: "Privacy Policy", href: "#" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-3 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Care Services */}
          <div>
            <h3 className="btn h-[38px] px-6 text-sm font-bold text-white mb-6 flex items-center gap-3 w-fit">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-4 font-bold text-sm uppercase tracking-widest">
              {["Facebook Ads", "Google Ads", "YouTube Ads", "Shopify"].map((service, i) => (
                <li key={i} className="flex items-center gap-3 group cursor-pointer hover:text-blue-400 transition-colors">
                  <span className="w-1.5 h-1.5 bg-blue-500/40 rounded-full group-hover:bg-blue-500 group-hover:scale-125 transition-all"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="btn h-[38px] px-6 text-sm font-bold text-white mb-6 flex items-center gap-3 w-fit">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0 text-base">
                  <FaMapMarkerAlt />
                </div>
                <div className="leading-tight">
                  <p className="text-white font-black text-xs uppercase tracking-widest mb-1">Our Location</p>
                  <p className="text-gray-400 font-semibold text-base">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0 text-base">
                  <FaEnvelope />
                </div>
                <div className="leading-tight">
                  <p className="text-white font-black text-xs uppercase tracking-widest mb-1">Send Email</p>
                  <a href="mailto:ahsanuldigital@gmail.com" className="text-gray-400 font-semibold text-sm sm:text-base hover:text-emerald-400 transition-colors break-all">
                    ahsanuldigital@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all shrink-0 text-base">
                  <FaPhoneAlt />
                </div>
                <div className="leading-tight">
                  <p className="text-white font-black text-xs uppercase tracking-widest mb-1">Call Support</p>
                  <a href="tel:+8801721821288" className="text-gray-400 font-semibold text-base hover:text-orange-400 transition-colors">
                    +8801721821288
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <BottomBar />

      </div>
    </footer>
  );
};

export default Footer;
