'use client';

import VideoScroll from "../components/interaction/VideoScroll";
import { IoMdArrowBack } from "react-icons/io";

export default function CreativeCodeClient () {
    return (
        <main>
            <div>
                <a
                    href="/"
                    className={`
                        fixed
                        top-4
                        left-6
                        z-50
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
                    <IoMdArrowBack size={15}/>
                    <span className="text-xs ml-1">Return</span>
                </a>
            </div>
            <VideoScroll />
        </main>
    );
}