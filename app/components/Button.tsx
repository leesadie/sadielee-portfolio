'use client';

import { IconType } from "react-icons";

interface ButtonProps {
    href: string;
    text: string;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
    href,
    text,
    icon: Icon
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                inline-flex
                items-center
                text-graysubtitle
                px-2
                py-1
                rounded-full
                bg-neutral-200
                hover:bg-neutral-300
                transition
                ease-in
            `}
        >
            {Icon && <Icon size={15} />}
            {text && <span className="text-xs ml-1">{text}</span>}
        </a>
    );
}

export default Button;