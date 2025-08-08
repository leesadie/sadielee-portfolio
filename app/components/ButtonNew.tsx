'use client';

import { IconType } from "react-icons";

interface ButtonProps {
    href: string;
    text: string;
    icon?: IconType
}

const ButtonNew:React.FC<ButtonProps> = ({
    href,
    text,
    icon: Icon,
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                text-graysubtitle
                outline
                outline-graysubtitle2
                px-2
                ${Icon ? 'py-1' : 'py-0.5'}
                ${Icon ? 'rounded-sm' : 'rounded-xs'}
                hover:bg-graysubtitle2
                hover:text-white
                transition
                duration-200
                ease-in
            `}
        >
            <div className="flex flex-row">
                <div className={`${Icon ? 'text-sm' : 'text-xs'}`}>
                    {text}
                </div>
                <div className="pt-0.5">
                    {Icon && <Icon size={16}/>}
                </div>
            </div>
        </a>
    );
}

export default ButtonNew;