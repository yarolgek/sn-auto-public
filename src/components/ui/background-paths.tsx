"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import GradientText from "../GradientText";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    growthText = "More Growth.",
    headachesText = "Less Headaches.",
    guaranteedText = "Guaranteed.",
    buttonText = "Book a Free Strategy Call",
    servicesText = "View Services",
    onButtonClick,
    onServicesClick,
}: {
    growthText?: string;
    headachesText?: string;
    guaranteedText?: string;
    buttonText?: string;
    servicesText?: string;
    onButtonClick?: () => void;
    onServicesClick?: (e: React.MouseEvent) => void;
}) {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 pt-32 pb-20">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-[500px] h-[500px] blur-[120px] rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 -top-64 -right-64 dark:opacity-100 opacity-60" />
                <div className="absolute w-[500px] h-[500px] blur-[120px] rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 -bottom-64 -left-64 dark:opacity-100 opacity-60" />
            </div>
            
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        <motion.span 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="block text-gray-900 dark:text-gray-200"
                        >
                            {growthText}
                        </motion.span>
                        <motion.span 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="block text-gray-900 dark:text-gray-200"
                        >
                            {headachesText}
                        </motion.span>
                        <motion.span 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <GradientText>{guaranteedText}</GradientText>
                        </motion.span>
                    </h1>
                    
                    <motion.div 
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-wrap gap-6"
                    >
                        <button 
                            onClick={onButtonClick}
                            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all"
                        >
                            {buttonText}
                        </button>
                        <button 
                            onClick={onServicesClick}
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white flex items-center gap-2 px-8 py-4 transition-colors"
                        >
                            {servicesText} <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}