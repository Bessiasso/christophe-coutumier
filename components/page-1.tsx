"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Page1() {
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
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#064e3b]/30" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#064e3b]/30" />
            <div className="absolute -bottom-4 left-2 w-6 h-6 border-b-2 border-l-2 border-[#064e3b]/30" />
            <div className="absolute -bottom-4 right-2 w-6 h-6 border-b-2 border-r-2 border-[#064e3b]/30" />

            {/* Decorative floral elements */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 text-[#064e3b]/20 text-2xl">
                ❀
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[#064e3b]/20 text-2xl">
                ❀
            </div>

            <motion.div
                variants={itemVariants}
                className="absolute w-16 top-2 h-0.5 bg-[#064e3b]/30 mx-auto"
            />

            <motion.div variants={itemVariants} className="space-y-4 ">
                <h3
                    className="font-great-vibes text-4xl sm:text-4xl md:text-5xl text-[#064e3b]"
                    style={{ fontFamily: "var(--font-great-vibes)" }}
                >
                    Chers famille et amis
                </h3>
                <div className="px-3 flex items-center justify-center gap-4 w-full my-3">
                    <div className="flex-1 h-0.5 bg-[#064e3b]/30" />
                    <div className="text-xl text-[#064e3b]/50">❦</div>
                    <div className="flex-1 h-0.5 bg-[#064e3b]/30" />
                </div>
                {/* Text section with image background */}
                <div className="relative w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-lg min-h-[300px]">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="/images/christophe3.jpg"
                            alt="Wedding"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                    {/* Text content */}
                    <div className="relative space-y-3 p-6 sm:p-8 min-h-[300px] flex flex-col justify-center">
                        <p className="font-great-vibes text-4xl sm:text-5xl text-white max-w-md leading-relaxed drop-shadow-lg">
                            Nous sommes ravis de vous annoncer notre mariage
                            coutumier !
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="absolute w-16 bottom-2 h-0.5 bg-[#064e3b]/30 mx-auto"
            />
        </motion.div>
    );
}
