'use client';

import { font_med } from "@/app/fonts";
import { ReactNode } from "react";

interface CardProps {
    image: string;
    title: string;
    subtitle: string;
    about: string;
    button?: ReactNode;
}

const Card: React.FC<CardProps> = ({
    image,
    title,
    subtitle,
    about,
    button
}) => {
    return (
        <div
            className="
                md:w-64
                w-full
                h-72
                border
                border-newgray
                rounded-sm
                relative
                pt-32
            "
        >
            <div 
                className='absolute inset-1.5 w-[calc(100%-rem*2)] h-32 bg-cover rounded-sm'
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className={`px-3 pt-3 text-main ${font_med.className}`}>
                        {title}
                    </div>
                    <div className="px-3 pt-0.5 text-sm text-graysubtitle">
                        {subtitle}
                    </div>
                    <div className="px-3 pt-1 text-sm text-graysubtitle">
                        {about}
                    </div>
                </div>
                <div className="px-3 pb-3">
                    {button}
                </div>
            </div>
        </div>
    );
}

export default Card;