"use client";

import React from "react";
import { FaShopify, FaFacebookF, FaGoogle, FaBoxOpen, FaChartLine, FaEnvelope } from "react-icons/fa";

const skills = [
  { name: "Shopify Store Setup", icon: <FaShopify className="text-teal-400 text-3xl mb-1" /> },
  { name: "Facebook Ads", icon: <FaFacebookF className="text-blue-500 text-3xl mb-1" /> },
  { name: "Google Ads", icon: <FaGoogle className="text-red-500 text-3xl mb-1" /> },
  { name: "Product Research", icon: <FaBoxOpen className="text-yellow-400 text-3xl mb-1" /> },
  { name: "Conversion Optimization", icon: <FaChartLine className="text-green-400 text-3xl mb-1" /> },
  { name: "Email Marketing", icon: <FaEnvelope className="text-purple-400 text-3xl mb-1" /> },
];

const CoreSkillsCard = () => {
  return (
    <div className="p-2">
      <h4 className="font-semibold text-gray-800 mb-2 text-base">Core Skills</h4>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-md flex flex-col justify-center items-center p-2 shadow-sm hover:shadow-md transition-all duration-200 aspect-square"
          >
            {skill.icon}
            <h3 className="text-white font-medium text-[10px] text-center">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreSkillsCard;