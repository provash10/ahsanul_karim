"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import logoImg1 from "../../../../public/assets/ahsanuldmlogo1.png";

export default function NavbarLogoImg1() {
    return (
        <Link href="/" className="flex items-center">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
                <Image
                    src={logoImg1}
                    alt="logo"
                    width={40}
                    height={40}
                    className="w-14 h-14 object-contain"
                />
            </motion.div>
        </Link>
    );
}
