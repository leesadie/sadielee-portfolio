'use client';

import { font_med } from "../fonts";

interface WorkCardProps {
    image: string;
    head: string;
    date: string;
}

const WorkCard:React.FC<WorkCardProps> = ({
    image,
    head,
    date
}) => {
    return (
        <div
            className="
                md:w-72
                w-full
                h-[200px]
                bg-lightgray
                rounded-sm
                relative
                pt-32
            "
        >
            <div 
                className='absolute inset-1.5 w-[calc(100%-rem*2)] h-32 bg-cover'
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className={`px-3 pt-3 text-graysubtitle ${font_med.className}`}>
                {head}
            </div>
            <div className="px-3 pt-0.5 text-sm text-graysubtitle">
                {date}
            </div>
        </div>
    );
}

export default WorkCard;