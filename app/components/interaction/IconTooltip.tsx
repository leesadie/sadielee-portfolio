'use client';

interface IconTooltipProps {
    label: string;
    href: string;
    children: React.ReactNode;
};

const IconTooltip = ({ label, href, children }: IconTooltipProps) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
        >
            {children}
            <span
                className="
                    pointer-events-none
                    absolute -top-8 left-1/2 -translate-x-1/2
                    whitespace-nowrap
                    bg-neutral-200 px-2 py-1 rounded-full text-xs text-main
                    opacity-0 group-hover:opacity-100
                    scale-95 group-hover:scale-100
                    transition
                "
            >
                {label}
            </span>
        </a>
    );
}

export default IconTooltip;