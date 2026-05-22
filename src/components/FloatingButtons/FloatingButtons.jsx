"use client";

import { motion } from "motion/react";
import { FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";

const WHATSAPP_LINK = "https://wa.me/8801721821288";
const MESSENGER_LINK = "https://m.me/ahsanuldigital";

const FloatBtn = ({ href, icon, label, bg }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        title={label}
        className="flex items-center justify-end"
    >
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${bg} text-white shadow-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0`}>
            {icon}
        </div>
    </motion.a>
);

export default function FloatingButtons() {
    return (
        <div className="fixed bottom-20 right-5 sm:right-8 z-[200] flex flex-col pr-1">
            <FloatBtn
                href={MESSENGER_LINK}
                icon={<FaFacebookMessenger />}
                label="Messenger"
                bg="bg-blue-500 hover:bg-blue-600"
            />
            <div className="-mt-6">
            <FloatBtn
                href={WHATSAPP_LINK}
                icon={<FaWhatsapp />}
                label="WhatsApp"
                bg="bg-green-500 hover:bg-green-600"
            />
            </div>
        </div>
    );
}
