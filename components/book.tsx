"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Page1 } from "./page-1";
import { Page2 } from "./page-2";
import { Page3 } from "./page-3";

interface BookProps {
    children?: React.ReactNode;
}

const TOTAL_PAGES = 3;

export function Book({ children }: BookProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const handleOpen = () => {
        setIsOpen(true);
        setCurrentPage(0);
    };

    const handleNextPage = useCallback(() => {
        setCurrentPage((prev) => {
            if (prev < TOTAL_PAGES - 1) {
                return prev + 1;
            }
            return prev;
        });
    }, []);

    const handlePrevPage = useCallback(() => {
        setCurrentPage((prev) => {
            if (prev > 0) {
                return prev - 1;
            }
            return prev;
        });
    }, []);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                handlePrevPage();
            } else if (e.key === "ArrowRight") {
                handleNextPage();
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [isOpen, handleNextPage, handlePrevPage]);

    const renderPage = () => {
        switch (currentPage) {
            case 0:
                return <Page1 />;
            case 1:
                return <Page2 />;
            case 2:
                return <Page3 />;
            default:
                return <Page1 />;
        }
    };

    return (
        <div className="flex h-screen items-center justify-center p-5 sm:p-3 md:p-4 bg-[#FFF8E7] overflow-hidden">
            <div className="relative w-full max-w-4xl h-[80%] flex flex-col justify-center py-5 sm:py-2">
                <AnimatePresence mode="wait">
                    {!isOpen ? (
                        <motion.div
                            key="closed"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5 }}
                            className="cursor-pointer w-full flex items-center justify-center"
                            onClick={handleOpen}
                        >
                            {/* Book Cover - Front */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative w-full max-w-sm sm:max-w-md aspect-3/4 max-h-[85vh]"
                            >
                                <motion.div
                                    className="relative w-full h-full bg-linear-to-br from-[#F5D0C2] via-[#F5D0C2] to-[#F5D0C2] rounded-xl shadow-2xl border-4 border-[#F5D0C2] overflow-hidden"
                                    style={{
                                        transformStyle: "preserve-3d",
                                    }}
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0">
                                        <Image
                                            src="/images/christophe5.jpg"
                                            alt="Wedding"
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        {/* Overlay for better text readability */}
                                        <div className="absolute inset-0 bg-black/20" />
                                    </div>

                                    {/* Decorative border */}
                                    <div className="absolute inset-4 border-2 border-[#F5D0C2] rounded-xl z-10" />

                                    {/* Title on cover */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                                        <motion.h1
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="font-great-vibes text-5xl sm:text-6xl md:text-7xl text-[#F5D0C2] drop-shadow-lg mb-4"
                                            style={{
                                                fontFamily:
                                                    "var(--font-great-vibes)",
                                            }}
                                        >
                                            Marriage
                                        </motion.h1>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                            className="w-24 h-0.5 bg-[#F5D0C2]/70 my-4"
                                        />
                                        <motion.p
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                            className="font-coming-soon text-sm sm:text-base text-[#F5D0C2] drop-shadow-md"
                                            style={{
                                                fontFamily:
                                                    "var(--font-coming-soon)",
                                            }}
                                        >
                                            Cliquez pour ouvrir
                                        </motion.p>
                                    </div>

                                    {/* Decorative corner elements */}
                                    <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#F5D0C2]/50" />
                                    <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#F5D0C2]/50" />
                                    <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#F5D0C2]/50" />
                                    <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#F5D0C2]/50" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ opacity: 0, rotateY: -90 }}
                            animate={{ opacity: 1, rotateY: 0 }}
                            exit={{ opacity: 0, rotateY: 90 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="relative w-full h-full flex flex-col max-h-full"
                        >
                            {/* Open Book - Single Page View */}
                            <div className="relative flex-1 flex flex-col min-h-0 max-h-full">
                                {/* Main Page */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentPage}
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }}
                                        className="bg-[#F5D0C2] rounded-lg shadow-xl border-2 border-[#0F4F40]/10 p-2 sm:p-3 md:p-4 flex-1 flex flex-col min-h-0 max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-4.5rem)] md:max-h-[calc(100vh-5rem)] overflow-hidden"
                                    >
                                        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
                                            {children || renderPage()}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Controls */}
                                <div className="flex items-center justify-between mt-1.5 sm:mt-2 px-2 sm:px-4 shrink-0">
                                    {/* Previous Button */}
                                    <motion.button
                                        onClick={handlePrevPage}
                                        disabled={currentPage === 0}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all ${
                                            currentPage === 0
                                                ? "border-[#0F4F40]/20 text-[#0F4F40]/30 cursor-not-allowed"
                                                : "border-[#0F4F40]/40 text-[#0F4F40] hover:bg-[#0F4F40]/10 cursor-pointer"
                                        }`}
                                        aria-label="Previous page"
                                    >
                                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </motion.button>

                                    {/* Page Indicators */}
                                    <div className="flex items-center gap-2">
                                        {Array.from({
                                            length: TOTAL_PAGES,
                                        }).map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    setCurrentPage(index)
                                                }
                                                className={`transition-all ${
                                                    currentPage === index
                                                        ? "w-3 h-3 bg-[#0F4F40] rounded-full"
                                                        : "w-2 h-2 bg-[#0F4F40]/30 rounded-full hover:bg-[#0F4F40]/50"
                                                }`}
                                                aria-label={`Go to page ${
                                                    index + 1
                                                }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Next Button */}
                                    <motion.button
                                        onClick={handleNextPage}
                                        disabled={
                                            currentPage === TOTAL_PAGES - 1
                                        }
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-all ${
                                            currentPage === TOTAL_PAGES - 1
                                                ? "border-[#0F4F40]/20 text-[#0F4F40]/30 cursor-not-allowed"
                                                : "border-[#0F4F40]/40 text-[#0F4F40] hover:bg-[#0F4F40]/10 cursor-pointer"
                                        }`}
                                        aria-label="Next page"
                                    >
                                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </motion.button>
                                </div>

                                {/* Page Number Display */}
                                <div className="text-center mt-1 shrink-0">
                                    <p
                                        className="font-coming-soon text-xs sm:text-sm text-[#0F4F40]/60"
                                        style={{
                                            fontFamily:
                                                "var(--font-coming-soon)",
                                        }}
                                    >
                                        Page {currentPage + 1} of {TOTAL_PAGES}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
