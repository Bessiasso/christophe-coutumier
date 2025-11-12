"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface InvitationData {
    brideName: string;
    groomName: string;
    date: string;
    time: string;
    location: string;
    venue: string;
    additionalDetails?: string;
}

const invitationData: InvitationData = {
    brideName: "Marie-Paule",
    groomName: "Christophe",
    date: "Samedi 13 décembre 2025",
    time: "12h00",
    location: "Ivoire Playce",
    venue: "Réception",
    additionalDetails: "Cérémonie coutumière",
};

export function Page2() {
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
            className="relative flex flex-col items-center justify-center h-full text-center space-y-6 sm:space-y-8"
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
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[#064e3b]/20 text-2xl">
                ❀
            </div>

            {/* Decorative top element */}
            <motion.div
                variants={itemVariants}
                className="absolute w-16 top-2 h-0.5 bg-[#064e3b]/30 mx-auto"
            />

            {/* Couple Names */}
            <motion.div variants={itemVariants} className="space-y-1">
                <h2
                    className="font-great-vibes text-4xl sm:text-5xl md:text-6xl text-[#064e3b]"
                    style={{ fontFamily: "var(--font-great-vibes)" }}
                >
                    {invitationData.brideName}
                </h2>
                <div className="text-2xl sm:text-3xl text-[#064e3b]/60">&</div>
                <h2
                    className="font-great-vibes text-4xl sm:text-5xl md:text-6xl text-[#064e3b]"
                    style={{ fontFamily: "var(--font-great-vibes)" }}
                >
                    {invitationData.groomName}
                </h2>
            </motion.div>

            {/* Decorative divider */}
            <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-4 "
            >
                <div className="flex-1 h-0.5 bg-[#064e3b]/30 w-30" />
                <div className="text-2xl text-[#064e3b]/50">❦</div>
                <div className="flex-1 h-0.5 bg-[#064e3b]/30 w-30" />
            </motion.div>

            {/* Date */}
            <motion.div variants={itemVariants} className="space-y-1">
                <p
                    className="font-coming-soon font-semibold text-lg sm:text-xl text-[#064e3b]"
                    style={{ fontFamily: "var(--font-coming-soon)" }}
                >
                    {invitationData.date}
                </p>
                <p className="text-base sm:text-lg text-[#064e3b]/80">à</p>
                <p
                    className="font-coming-soon font-semibold text-base sm:text-lg text-[#064e3b]/80"
                    style={{ fontFamily: "var(--font-coming-soon)" }}
                >
                    {invitationData.time}
                </p>
            </motion.div>

            {/* Decorative divider */}
            {/* <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-4 w-full"
            >
                <div className="flex-1 h-0.5 bg-[#064e3b]/30" />
                <div className="text-2xl text-[#064e3b]/50">❦</div>
                <div className="flex-1 h-0.5 bg-[#064e3b]/30" />
            </motion.div> */}

            {/* Location */}
            <motion.div variants={itemVariants} className="space-y-3">
                <p
                    className="font-coming-soon text-base sm:text-lg text-[#064e3b] font-semibold"
                    style={{ fontFamily: "var(--font-coming-soon)" }}
                >
                    {invitationData.venue} - {invitationData.location}
                </p>
                {/* Google Maps Link */}
                <a
                    href="https://maps.app.goo.gl/oZ6nUU7kucYhJnc8A"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-coming-soon text-sm sm:text-base text-[#064e3b] hover:text-[#064e3b]/80 transition-colors underline decoration-[#064e3b]/40 hover:decoration-[#064e3b]/60"
                    style={{ fontFamily: "var(--font-coming-soon)" }}
                >
                    Voir sur Google Maps
                    <ExternalLink className="w-4 h-4" />
                </a>
            </motion.div>

            {/* Decorative bottom element */}
            <motion.div
                variants={itemVariants}
                className="absolute w-16 bottom-2 h-0.5 bg-[#064e3b]/30 mx-auto"
            />
        </motion.div>
    );
}
