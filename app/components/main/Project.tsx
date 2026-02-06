'use client';

interface ProjectProps {
    href: string;
    text: string;
    date: string;
    newTab?: boolean;
}

const Project:React.FC<ProjectProps> = ({
    href,
    text,
    date,
    newTab = true,
}) => {
    return (
        <div
            className="
                relative
                mt-4
                transition duration-300 ease-in
                before:absolute
                before:-inset-0.5
                before:rounded-md
                before:scale-100
                before:bg-transparent
                hover:before:bg-lightgray2
                before:transition
                before:duration-300
                before:ease-in-out
                before:-z-10
                hover:before:scale-x-[1.03]
                hover:before:scale-y-[1.4]
                cursor-pointer
            "
        >
            <a href={href} target={newTab ? "_blank" : undefined} rel={newTab ? "noopener noreferrer" : undefined}>
                <div className="flex flex-row gap-4 items-start">
                    {/* Content */}
                    <div className="flex flex-1 flex-row gap-1 text-neutral-500">
                        <div>{text}</div>
                        <div className="border-t border-dashed border-graysubtitle flex-1 mt-3 mx-1"/>
                        <div>{date}</div>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Project;