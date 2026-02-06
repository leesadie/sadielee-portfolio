'use client';

import { useEffect, useState } from "react";
import { font_med } from "@/app/fonts";

const sections = [
  { id: "about", marker: "about-marker" },
  { id: "work", marker: "work-marker" },
  { id: "more", marker: "more-marker" },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState<string>("about");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    const markerId = visible[0].target.id;
                    const match = sections.find((s) => s.marker === markerId);
                    if (match && match.id != activeSection) {
                        setActiveSection(match.id);
                    }
                }
            },
            {
                threshold: [0, 0.25, 0.5],
            }
        );

        const elements: HTMLElement[] = [];

        sections.forEach((section) => {
            const el = document.getElementById(section.marker);
            if (el) {
                elements.push(el);
                observer.observe(el);
            }
        });

        return () => {
            elements.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, [activeSection]);

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id); 
        }
    }

    return (
        <div className="flex md:flex-col flex-row gap-4 md:gap-0 md:bg-transparent bg-bg p-4 md:p-0 w-screen justify-center md:justify-normal">
            {sections.map(({ id }) => (
                <button
                    key={id}
                    onClick={() => handleClick(id)}
                    className="flex items-center space-x-2 cursor-pointer group"
                >
                    <div className={`w-2 h-2 rounded-full ${activeSection === id ? "bg-accent" : "bg-transparent"} transition-all ease-in`} />
                    <div className={`${font_med.className} md:text-base text-sm`}>
                        {id.charAt(0).toUpperCase() + id.slice(1)}
                    </div>
                </button>
            ))}
        </div>
    );
}

export default Navbar;