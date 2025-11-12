"use client";

import { motion } from "framer-motion";

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
            className="flex flex-col items-center justify-center h-full text-center space-y-6 sm:space-y-8 p-4"
        >
            <motion.div
                variants={itemVariants}
                className="w-16 h-0.5 bg-[#0F4F40]/30 mx-auto"
            />

            <motion.div variants={itemVariants} className="space-y-4">
                <h3
                    className="font-great-vibes text-3xl sm:text-4xl md:text-5xl text-[#0F4F40]"
                    style={{ fontFamily: "var(--font-great-vibes)" }}
                >
                    Chers famille et amis
                </h3>
                <div className="flex items-center justify-center gap-4 w-full my-4">
                    <div className="flex-1 h-0.5 bg-[#0F4F40]/30" />
                    <div className="text-xl text-[#0F4F40]/50">❦</div>
                    <div className="flex-1 h-0.5 bg-[#0F4F40]/30" />
                </div>
                <div className="space-y-3">
                    <p
                        className="font-coming-soon text-sm sm:text-base text-[#0F4F40]/80 max-w-md leading-relaxed"
                        style={{ fontFamily: "var(--font-coming-soon)" }}
                    >
                        Nous sommes ravis de vous annoncer notre mariage coutumier ! 🥳
                    </p>
                    <p
                        className="font-coming-soon text-sm sm:text-base text-[#0F4F40]/80 max-w-md leading-relaxed"
                        style={{ fontFamily: "var(--font-coming-soon)" }}
                    >
                        Nos familles et nous avons hâte de célébrer ce moment spécial avec vous !
                    </p>
                    <p
                        className="font-coming-soon text-sm sm:text-base text-[#0F4F40]/80 max-w-md leading-relaxed"
                        style={{ fontFamily: "var(--font-coming-soon)" }}
                    >
                        Vous aurez les détails relatifs au lieu et à l&apos;heure de la cérémonie, sur vos cartes d&apos;invitation.
                    </p>
                </div>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="w-16 h-0.5 bg-[#0F4F40]/30 mx-auto mt-4"
            />
        </motion.div>
    );
}

