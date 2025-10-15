'use client';

import { font_med } from "@/app/fonts";
import Image from "next/image";
import ButtonNew from "../ButtonNew";
import WorkCard from "../WorkCard";
import { GoArrowUpRight } from "react-icons/go";

const MainNew = () => {
    return (
        <div className="flex flex-col max-w-2xl w-full mx-auto md:px-4 px-6">
            {/* ABOUT */}
            <section
                id="about"
                className="flex flex-col md:pt-28 pt-18"
            >
                <div className="flex flex-row gap-4">
                    <Image 
                        src='/images/pfp_new.svg'
                        alt="about"
                        height={64}
                        width={64}
                        className="rounded-full"
                    />
                    <div className={`${font_med.className} text-2xl pt-4`}>
                        Sadie Lee
                    </div>
                </div>
                <div className='pt-8 text-graysubtitle'>
                    <p>
                        I study cognitive science and data science at the
                        <span className={`hover:opacity-60 cursor-pointer transition duration-200 text-gray-900 ${font_med.className}`}>
                            <a target="_blank" rel="noopener noreferrer" href="https://cogsys.ubc.ca/" className="pl-1">
                                University of British Columbia
                            </a>
                        </span>, graduating May 2026. 
                        My most recent research investigated risks to patient privacy from deep learning models trained on de-identified medical images, which I completed with
                        <span className={`hover:opacity-60 cursor-pointer transition duration-200 text-gray-900 ${font_med.className}`}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.mayoclinicplatform.org/" className="pl-1">
                                Mayo Clinic Platform 
                            </a>
                        </span>.
                    </p>
                </div>
                <div className="pt-4 text-graysubtitle">
                    I'm interested in building, evaluating, and understanding AI/ML systems, particularly for human health. Previously, I’ve worked at 
                    <span className={`hover:opacity-60 cursor-pointer transition duration-200 text-gray-900 ${font_med.className}`}>
                        <a target="_blank" rel="noopener noreferrer" href="https://bcchr.ca/dhil" className="pl-1">
                            BC Children's Hospital Research Institute
                        </a>
                    </span>,
                    <span className={`hover:opacity-60 cursor-pointer transition duration-200 text-gray-900 ${font_med.className}`}>
                        <a target="_blank" rel="noopener noreferrer" href="https://eml.ubc.ca/" className="pl-1">
                            UBC Emerging Media Lab
                        </a>
                    </span>,
                    and
                    <span className={`hover:opacity-60 cursor-pointer transition duration-200 text-gray-900 ${font_med.className}`}>
                        <a target="_blank" rel="noopener noreferrer" href="https://voythos.io/" className="pl-1">
                            Voythos
                        </a>
                    </span>
                    . 
                </div>
                <div className="flex flex-row md:gap-3 gap-2 pt-8">
                    <div className="flex-col w-fit flex">
                        <ButtonNew 
                            href="mailto:leesadie025@gmail.com"
                            text="Email"
                            icon={GoArrowUpRight}
                        />
                    </div>
                    <div className="flex-col w-fit flex">
                        <ButtonNew 
                            href="https://github.com/leesadie"
                            text="Github"
                            icon={GoArrowUpRight}
                        />
                    </div>
                    <div className="flex-col w-fit flex">
                        <ButtonNew 
                            href="https://www.linkedin.com/in/leesadie/"
                            text="LinkedIn"
                            icon={GoArrowUpRight}
                        />
                    </div>
                    <div className="flex-col w-fit hidden md:flex">
                        <ButtonNew 
                            href="files/Sadie_Lee_Resume.pdf"
                            text="Resume"
                            icon={GoArrowUpRight}
                        />
                    </div>
                </div>
                <div className="pt-2 flex flex-col w-fit md:hidden">
                    <ButtonNew 
                        href="files/Sadie_Lee_Resume.pdf"
                        text="Resume"
                        icon={GoArrowUpRight}
                    />
                </div>
            </section>

            {/* WORK */}
            <section
                id="work"
                className="flex flex-col pt-16"
            >
                <div className={`${font_med.className}`}>
                    Work
                </div>
                <div className="flex flex-col pt-8">
                    <div className="flex md:flex-row flex-col gap-2">
                        <div className="md:w-1/2">
                            <WorkCard image="/images/voythos.svg" head="Voythos Imaging" date="Summer 2025"/>
                        </div>
                        <div className="md:w-1/2 flex flex-col text-graysubtitle">
                            3D CT image segmentation models as part of a pipeline to predict trajectories for patients with complex aortic and cardiovascular diseases.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:pt-4 pt-8">
                    <div className="flex md:flex-row flex-col gap-2">
                        <div className="md:w-1/2">
                            <WorkCard image="/images/mcp_accelerate.svg" head="MCP_Accelerate Imaging" date="Summer 2024"/>
                        </div>
                        <div className="md:w-1/2 flex flex-col text-graysubtitle">
                            Development and testing of an end-to-end de-identified medical imaging data for AI/ML workflow via classification and segmentation models.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:pt-4 pt-8">
                    <div className="flex md:flex-row flex-col gap-2">
                        <div className="md:w-1/2">
                            <WorkCard image="/images/bcchr_reachout.svg" head="BCCHR Time in Range Data" date="2023-2024"/>
                        </div>
                        <div className="md:w-1/2 flex flex-col text-graysubtitle">
                            <p>
                                Automation of time in range data collection and analysis for the
                                <span className={`hover:opacity-60 cursor-pointer transition duration-200 text-gray-900 ${font_med.className}`}>
                                    <a target="_blank" rel="noopener noreferrer" href="https://tangdiabeteslab.com/portfolio-details-t1d-nexgen.php" className="px-1">
                                        T1D REACHOUT
                                    </a>
                                </span>
                                study at BC Children’s Hospital Research Institute/UBC Faculty of Medicine.
                            </p>
                            <div className="pt-4 flex flex-col w-fit">
                                <ButtonNew href="https://github.com/leesadie/REACHOUT_TIR_Collection" text="Code"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* RESEARCH */}
            <section
                id="research"
                className="flex flex-col pt-16"
            >
                <div className={`${font_med.className}`}>
                    Research
                </div>
                <div className="pt-8">
                    {/* BCCHR paper */}
                    <div className="group text-graysubtitle">
                        <div>
                            Design and Implementation of a Mobile App to Deliver Peer Support to Adults with T1D: Operational Feasibility Study
                        </div>
                        <div className="pt-1 text-sm text-graysubtitle2">
                            Sadie Lee, Baray Sidhu, Parteek Johal, Ayman Azhar, Jonath Sujan, Matthias Görges, Tricia S. Tang
                        </div>
                        <div className="text-sm text-graysubtitle2">
                            In Progress
                        </div>
                    </div>
                    {/* Capstone paper */}
                    <div
                        className="
                            mt-6
                            text-graysubtitle
                        "
                    >
                        <div>
                            Re-identification Risk of Medical Imaging-Based Deep Learning Models
                        </div>
                        <div className="pt-1 text-sm text-graysubtitle2">
                            Sadie Lee
                        </div>
                        <div className="text-sm text-graysubtitle2">
                            August 2025 • Undergraduate Research Capstone
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="pt-4 flex flex-col w-fit">
                            <ButtonNew href="/files/Re-id_Risk_Imaging.pdf" text="PDF"/>
                        </div>
                        <div className="pt-4 flex flex-col w-fit">
                            <ButtonNew href="https://github.com/leesadie/Re-id_Risk_Imaging" text="Code"/>
                        </div>
                        <div className="pt-4 flex flex-col w-fit">
                            <ButtonNew href="/files/MCP_Presentation_Jul24.pdf" text="Slides"/>
                        </div>
                    </div>
                    {/* IEEE URTC paper */}
                    <div
                        className="
                            mt-6
                            text-graysubtitle
                        "
                    >
                        <div>
                            Formalizing Ethical Design in Prostate Cancer Image Analysis: Preliminary Case Study
                        </div>
                        <div className="pt-1 text-sm text-graysubtitle2">
                            Sadie Lee, Adam Resnick, Nasibeh Zanjirani Farahani
                        </div>
                        <div className="text-sm text-graysubtitle2">
                            October 2024 • IEEE MIT URTC
                        </div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="pt-4 flex flex-col w-fit">
                            <ButtonNew href="/files/MIT_URTC_Final.pdf" text="PDF"/>
                        </div>
                        <div className="pt-4 flex flex-col w-fit">
                            <ButtonNew href="https://ieeexplore.ieee.org/document/10937534" text="IEEE"/>
                        </div>
                    </div>
                    {/* AAAI paper */}
                    <div
                        className="
                            mt-6
                            text-graysubtitle
                        "
                    >
                        <div>
                            Topological Data Analysis and Interpretability of 3D-Convolutional Neural Networks
                        </div>
                        <div className="pt-1 text-sm text-graysubtitle2">
                            Sadie Lee
                        </div>
                        <div className="text-sm text-graysubtitle2">
                            February 2024 • AAAI Undergraduate Consortium
                        </div>
                    </div>
                    <div className="pt-4 flex flex-col w-fit">
                        <ButtonNew href="/files/AAAI_UC_Proposal.pdf" text="PDF"/>
                    </div>
                    {/* MINT paper */}
                    <div
                        className="
                            mt-6
                            text-graysubtitle
                        "
                    >
                        <div>
                            Human Computer Interaction for Brain Computer Interfaces with Reinforcement Learning
                        </div>
                        <div className='pt-1 text-sm text-graysubtitle2'>
                            Sadie Lee
                        </div>
                        <div className="text-sm text-graysubtitle2">
                            December 2023 • UBC Multifaceted Innovations in Neurotechnology (MINT)
                        </div>
                    </div>
                    <div className="pt-4 flex flex-col w-fit">
                        <ButtonNew href="/files/HCI_BCI_Lit_Review.pdf" text="PDF"/>
                    </div>
                </div>
            </section>

            {/* MORE */}
            <section
                id="more"
                className="flex flex-col pt-16 pb-28"
            >
                <div className={`${font_med.className}`}>
                    More
                </div>
                <div className="pt-8">
                    <div
                        className="
                            relative
                            text-graysubtitle
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
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/concept-map-viewer">
                            <div className="flex flex-row gap-1">
                                <div className="text-graysubtitle">
                                    Concept Map Visualizer
                                </div>
                                <div className="border-t border-dashed border-graysubtitle flex-1 mt-3 mx-1"/>
                                <div className="text-graysubtitle">
                                    2025
                                </div>
                            </div>
                        </a>
                    </div>
                    <div
                        className="
                            relative
                            mt-4
                            text-graysubtitle
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
                        <a target="_blank" rel="noopener noreferrer" href="https://voythos.io/">
                            <div className="flex flex-row gap-1">
                                <div className="text-graysubtitle">
                                    Voythos Web Development
                                </div>
                                <div className="border-t border-dashed border-graysubtitle flex-1 mt-3 mx-1"/>
                                <div className="text-graysubtitle">
                                    2025
                                </div>
                            </div>
                        </a>
                    </div>
                    <div
                        className="
                            relative
                            mt-4
                            text-graysubtitle
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
                        <a target="_blank" rel="noopener noreferrer" href="https://kyralee.vercel.app/">
                            <div className="flex flex-row gap-1">
                                <div className="text-graysubtitle">
                                    Kyra Lee Portfolio
                                </div>
                                <div className="border-t border-dashed border-graysubtitle flex-1 mt-3 mx-1"/>
                                <div className="text-graysubtitle">
                                    2024
                                </div>
                            </div>
                        </a>
                    </div>
                    <div
                        className="
                            relative
                            mt-4
                            text-graysubtitle
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
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/forestar">
                            <div className="flex flex-row gap-1">
                                <div className="text-graysubtitle">
                                    Forestʌr
                                </div>
                                <div className="border-t border-dashed border-graysubtitle flex-1 mt-3 mx-1"/>
                                <div className="text-graysubtitle">
                                    2023
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainNew;