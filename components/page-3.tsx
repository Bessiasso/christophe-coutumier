"use client";

import { motion } from "framer-motion";

export function Page3() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative flex flex-col items-center justify-center h-full text-center space-y-6 sm:space-y-8 p-4"
        >
            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#064e3b]/30" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#064e3b]/30" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#064e3b]/30" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#064e3b]/30" />

            {/* Decorative floral elements */}
            <div className="absolute top-8 left-1/2 -translate-x-1/2 text-[#064e3b]/20 text-2xl">
                ❀
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#064e3b]/20 text-2xl">
                ❀
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
                <p className="font-coming-soon text-xl sm:text-xl md:text-2xl text-[#064e3b] max-w-md leading-relaxed">
                    Nos familles et nous avons hâte de célébrer ce moment
                    spécial avec vous !
                </p>
            </motion.div>
        </motion.div>
    );
}
