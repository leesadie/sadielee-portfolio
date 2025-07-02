'use client';

import { GoArrowUpRight } from "react-icons/go";
import { font_mono } from "../fonts";

interface ButtonProps {
    href: string;
    text: string;
}

const ButtonNew:React.FC<ButtonProps> = ({
    href,
    text
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
                text-graysubtitle
                rounded-lg
                bg-newgray
                px-2
                py-1
                hover:opacity-60
                transition
                duration-200
                ease-in
            "
        >
            <div className="flex flex-row">
                <div className={`text-sm ${font_mono.className}`}>
                    {text}
                </div>
                <div className="pt-0.5">
                    <GoArrowUpRight size={16}/>
                </div>
            </div>
        </a>
    );
}

export default ButtonNew;