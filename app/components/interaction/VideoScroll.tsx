'use client';

import { font_med } from "@/app/fonts";
import { useState, useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

const DATA = [
    {
        id: 1,
        title: "Spherical coordinates",
        description: "Made with p5.js.",
        videoSrc: '/videos/coordinates.mp4'
    },
    {
        id: 2,
        title: "Flow fields",
        description: "Made with p5.js.",
        videoSrc: '/videos/flow.mp4'
    },
    {
        id: 3,
        title: "Loading",
        description: "Made with processing.",
        videoSrc: '/videos/loading.mp4'
    },
    {
        id: 4,
        title: "Generative geometry",
        description: "Made with processing.",
        videoSrc: '/videos/generative.mp4'
    },
    {
        id: 5,
        title: "Typography shuffle",
        description: "Made with processing.",
        videoSrc: '/videos/typography.mp4'
    }
]

export default function VideoScroll() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Handle smooth scroll
    const scrollToSection = (id: number) => {
        const element = document.getElementById(`video-section-${id}`);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };

    return (
        <div className="flex min-h-screen">
            {/* LEFT - TEXT */}
            <div className="w-1/2 sticky top-0 h-screen flex flex-col justify-center px-12 overflow-hidden border-r border-neutral-100">
                <div className="relative h-64 flex flex-col justify-center">
                    {DATA.map((item, index) => {
                        const isActive = activeIndex === index;
                        return (
                            <motion.div
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                initial={false}
                                animate={{
                                    opacity: isActive ? 1 : 0.3,
                                    scale: isActive ? 1.1 : 0.9,
                                    y: (index - activeIndex) * 40
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute w-full origin-left cursor-pointer group"
                            >
                                <div className="flex items-baseline gap-4">
                                    <h2 className={`
                                            text-3xl ${font_med.className}
                                            ${isActive ? "text-main" : "text-neutral-500"}
                                        `}
                                    >
                                        {item.title}
                                    </h2>
                                    {isActive && (
                                        <span className="text-[10px] uppercase text-main">
                                            {item.description}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* RIGHT - VIDEOS */}
            <div className="w-1/2 px-8 py-[50vh]">
                {DATA.map((item, index) => (
                    <MediaItem 
                        key={item.id}
                        item={item}
                        index={index}
                        setActiveIndex={setActiveIndex}
                    />
                ))}
            </div>
        </div>
    );
}

function MediaItem({ item, index, setActiveIndex }: { item: any, index: number, setActiveIndex: (i: number) => void }) {
    const containerRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const isInView = useInView(containerRef, {
        margin: "-45% 0px -45% 0px"
    });

    // Update parent active index
    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        }
    }, [isInView, index, setActiveIndex]);

    // Handle play/pause logic
    useEffect(() => {
        if (!videoRef.current) return;

        if (isInView) {
            videoRef.current.play().catch((error) => {
                console.warn("Autoplay was prevented:", error);
            });
        } else {
            videoRef.current.pause();
        }
    }, [isInView]);

    return (
        <div
            ref={containerRef}
            id={`video-section-${item.id}`}
            className="mb-32 last:mb-0 transition-transform duration-700"
        >
            <motion.div
                animate={{ opacity: isInView ? 1 : 0.4, scale: isInView ? 1 : 0.95}}
                className="aspect-video w-full overflow-hidden rounded-sm bg-gray-100 shadow-2xl"
            >
                <video 
                    ref={videoRef}
                    src={item.videoSrc}
                    className="h-full w-full object-contain bg-black"
                    muted
                    loop
                    playsInline
                    preload="auto"
                />
            </motion.div>
        </div>
    )
}