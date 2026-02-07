'use client';

import { ReactNode } from "react";

interface CardProps {
    image: string;
    title: string;
    subtitle: string;
    button1?: ReactNode;
    button2?: ReactNode;
    button3?: ReactNode;
}

const Card: React.FC<CardProps> = ({
    image,
    title,
    subtitle,
    button1,
    button2,
    button3
}) => {
    return (
        <div
            className="
                w-full
                h-32
                border
                border-newgray
                rounded-sm
                relative
            "
        >
            <div className="flex flex-row justify-between">
                <div className="flex flex-col w-2/3 p-2">
                    <div className="text-sm">
                        {title}
                    </div>
                    <div className="md:text-sm text-xs text-neutral-500 pt-1">
                        {subtitle}
                    </div>
                    <div className="flex flex-row gap-1 md:pt-4 pt-2">
                        <div>
                            {button1}
                        </div>
                        <div>
                            {button2}
                        </div>
                        <div>
                            {button3}
                        </div>
                    </div>
                </div>
                <div className="w-1/3 h-32 p-2">
                    <div
                        className="w-full h-full md:bg-contain bg-cover bg-center bg-no-repeat rounded-sm"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;