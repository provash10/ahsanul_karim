"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import logoImg2 from "../../../../public/assets/ahsanuldmlogo2.png";

export default function NavbarLogoImg2() {
    return (
        <Link href="/" className="flex items-center">
            <div className="relative overflow-hidden">
                <Image
                    src={logoImg2}
                    alt="logo"
                    width={150}
                    height={40}
                />
                {/* Glowing dot running left to right over the letters */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                    style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "white",
                        boxShadow: "0 0 8px 4px rgba(255,255,255,0.9), 0 0 16px 6px rgba(150,200,255,0.6)",
                    }}
                    animate={{ x: [-10, 155] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "linear", repeatDelay: 0.3 }}
                />
            </div>
        </Link>
    );
}
