"use client";

import { motion } from "framer-motion";

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
    brideName: "Sarah",
    groomName: "John",
    date: "Saturday, June 15th, 2024",
    time: "4:00 PM",
    location: "123 Garden Lane",
    venue: "The Grand Garden",
    additionalDetails: "Reception to follow immediately after the ceremony.",
};

export function InvitationContent() {
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
            className="flex flex-col items-center justify-center h-full text-center space-y-6 sm:space-y-8"
        >
            {/* Decorative top element */}
            <motion.div
                variants={itemVariants}
                className="w-16 h-0.5 bg-[#191970]/30 mx-auto"
            />

            {/* Couple Names */}
            <motion.div variants={itemVariants} className="space-y-2">
                <h2
                    className="font-great-vibes text-4xl sm:text-5xl md:text-6xl text-[#191970]"
                    style={{ fontFamily: "var(--font-great-vibes)" }}
                >
                    {invitationData.brideName}
                </h2>
                <div className="text-2xl sm:text-3xl text-[#191970]/60">&</div>
                <h2
                    className="font-great-vibes text-4xl sm:text-5xl md:text-6xl text-[#191970]"
                    style={{ fontFamily: "var(--font-great-vibes)" }}
                >
                    {invitationData.groomName}
                </h2>
            </motion.div>

            {/* Decorative divider */}
            <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-4 w-full"
            >
                <div className="flex-1 h-0.5 bg-[#191970]/30" />
                <div className="text-2xl text-[#191970]/50">❦</div>
                <div className="flex-1 h-0.5 bg-[#191970]/30" />
            </motion.div>

            {/* Date */}
            <motion.div variants={itemVariants} className="space-y-1">
                <p
                    className="font-coming-soon text-lg sm:text-xl text-[#191970]"
                    style={{ fontFamily: "var(--font-coming-soon)" }}
                >
                    {invitationData.date}
                </p>
                <p
                    className="font-coming-soon text-base sm:text-lg text-[#191970]/80"
                    style={{ fontFamily: "var(--font-coming-soon)" }}
                >
                    {invitationData.time}
                </p>
            </motion.div>

            {/* Decorative divider */}
            <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-4 w-full"
            >
                <div className="flex-1 h-0.5 bg-[#191970]/30" />
                <div className="text-2xl text-[#191970]/50">❦</div>
                <div className="flex-1 h-0.5 bg-[#191970]/30" />
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants} className="space-y-1">
                <p
                    className="font-coming-soon text-base sm:text-lg text-[#191970] font-semibold"
                    style={{ fontFamily: "var(--font-coming-soon)" }}
                >
                    {invitationData.venue}
                </p>
                <p
                    className="font-coming-soon text-sm sm:text-base text-[#191970]/80"
                    style={{ fontFamily: "var(--font-coming-soon)" }}
                >
                    {invitationData.location}
                </p>
            </motion.div>

            {/* Additional Details */}
            {invitationData.additionalDetails && (
                <>
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center gap-4 w-full"
                    >
                        <div className="flex-1 h-0.5 bg-[#191970]/30" />
                        <div className="text-2xl text-[#191970]/50">❦</div>
                        <div className="flex-1 h-0.5 bg-[#191970]/30" />
                    </motion.div>
                    <motion.p
                        variants={itemVariants}
                        className="font-coming-soon text-sm sm:text-base text-[#191970]/70 max-w-md"
                        style={{ fontFamily: "var(--font-coming-soon)" }}
                    >
                        {invitationData.additionalDetails}
                    </motion.p>
                </>
            )}

            {/* Decorative bottom element */}
            <motion.div
                variants={itemVariants}
                className="w-16 h-0.5 bg-[#191970]/30 mx-auto mt-4"
            />
        </motion.div>
    );
}
