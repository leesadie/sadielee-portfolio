'use client';

import Image from "next/image";
import { font_med } from "@/app/fonts";
import Card from "./Card";
import Button from "../Button";
import Project from "./Project";

// Icons
import { MdMail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa";
import { PiPresentationFill } from "react-icons/pi";
import { IoMdLink } from "react-icons/io";

const Main = () => {
    return (
        <div className="flex flex-col max-w-3xl w-full mx-auto md:px-4 px-6 text-main">
            {/* About */}
            <section
                id="about"
                className="flex flex-col md:pt-28 pt-18"
            >
                <div className="flex flex-row justify-between">
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
                    <div className="flex flex-row gap-2 md:pt-4 pt-5">
                        <a href="mailto:leesadie025@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition duration-200">
                            <MdMail size={24} className="text-main"/>
                        </a>
                        <a href="https://github.com/leesadie" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition duration-200">
                            <IoLogoGithub size={24} className="text-main"/>
                        </a>
                        <a href="https://www.linkedin.com/in/leesadie/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition duration-200">
                            <FaLinkedinIn size={24} className="text-main"/>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col pt-10">
                    <p>
                        I build and evaluate AI/ML models, particularly for human health, and examine how these systems are used in practice. I also create data visualizations and design interfaces to explore complex systems.
                    </p>
                    <p className="pt-5">
                        I currently study cognitive science and data science at the
                        <span className={`hover:opacity-60 cursor-pointer transition duration-200 text-gray-900 ${font_med.className}`}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.ubc.ca/" className="pl-1">
                                University of British Columbia
                            </a>
                        </span>, graduating May 2026. 
                        Previously, I've worked at 
                        <span className={`hover:opacity-60 cursor-pointer transition duration-200 ${font_med.className}`}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.mayoclinicplatform.org/" className="pl-1">
                                Mayo Clinic Platform
                            </a>
                        </span>,
                        <span className={`hover:opacity-60 cursor-pointer transition duration-200 ${font_med.className}`}>
                            <a target="_blank" rel="noopener noreferrer" href="https://bcchr.ca/dhil" className="pl-1">
                                BC Children's Hospital Research Institute
                            </a>
                        </span>,
                        <span className={`hover:opacity-60 cursor-pointer transition duration-200 ${font_med.className}`}>
                            <a target="_blank" rel="noopener noreferrer" href="https://eml.ubc.ca/" className="pl-1">
                                UBC Emerging Media Lab
                            </a>
                        </span>, and
                        <span className={`hover:opacity-60 cursor-pointer transition duration-200 ${font_med.className}`}>
                            <a target="_blank" rel="noopener noreferrer" href="https://voythos.io/" className="pl-1">
                                Voythos
                            </a>
                        </span>.
                    </p>
                </div>
                <div className="pt-5">
                    <p>
                        View my
                        <span className={`pl-1 hover:opacity-60 cursor-pointer transition duration-200 ${font_med.className}`}>
                            <a href="/files/Sadie_Lee_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                resume
                            </a>
                        </span>.
                    </p>
                </div>
            </section>

            {/* Work */}
            <section
                id="work"
                className="flex flex-col md:pt-20 pt-18"
            >
                <div className="text-lg">
                    Selected Work
                </div>
                <div className="pt-5 flex md:flex-row flex-col gap-2">
                    <Card 
                        image="/images/voythos.svg"
                        title="Multi-task image model"
                        subtitle="Custom Swin UNETR to segment the aorta and detect thrombosis"
                        about="Voythos • 2025"

                    />
                    <Card 
                        image="/images/mcp.svg"
                        title="AI/ML image workflow"
                        subtitle="Models to develop a workflow for medical imaging data"
                        about="Mayo Clinic Platform • 2024"
                        button={
                            <Button 
                                href="https://github.com/leesadie/prostateimaging"
                                text="Code"
                                icon={RiCodeSSlashFill}
                            />
                        }
                    />
                    <Card 
                        image="/images/tir.svg"
                        title="Time in range data"
                        subtitle="Automation of data collection and analysis for T1D REACHOUT"
                        about="BCCHR • 2023-2024"
                        button={
                            <Button 
                                href="https://github.com/leesadie/REACHOUT_TIR_Collection"
                                text="Code"
                                icon={RiCodeSSlashFill}
                            />
                        }
                    />
                </div>
            </section>

            {/* Research */}
            <section
                id="research"
                className="flex flex-col md:pt-20 pt-18"
            >
                <div className="text-lg">
                    Research
                </div>
                <div className="pt-5">
                    {/* BCCHR paper */}
                    <div className="group text-main">
                        <div>
                            T1D REACHOUT - a mobile app to deliver peer support to adults living with type 1 diabetes: The co-design and development process
                        </div>
                        <p className="md:pt-1 pt-2 text-sm text-graysubtitle2">
                            <span className={`${font_med.className}`}>
                                Sadie Lee
                            </span>
                            , Baray Sidhu, Parteek Johal, Ayman Azhar, Jonath Sujan, Matthias Görges, Tricia S. Tang
                        </p>
                        <div className="pt-1 md:pt-0 text-sm text-graysubtitle2">
                            In Progress • BC Children's Hospital Research Institute, UBC Faculty of Medicine
                        </div>
                    </div>

                    {/* Thesis */}
                    <div className="group text-main pt-8">
                        <div>
                            Re-identification Risk of Medical Imaging-Based Deep Learning Models
                        </div>
                        <p className="md:pt-1 pt-2 text-sm text-graysubtitle2">
                            <span className={`${font_med.className}`}>
                                Sadie Lee
                            </span>
                            , Adam Resnick, Rob Blundo
                        </p>
                        <div className="pt-1 md:pt-0 text-sm text-graysubtitle2">
                            Undergraduate Thesis 2025 • Mayo Clinic Platform
                        </div>
                        <div className="flex flex-row gap-1 pt-2">
                            <Button 
                                href="https://github.com/leesadie/Re-id_Risk_Imaging"
                                text="Code"
                                icon={RiCodeSSlashFill}
                            />
                            <Button 
                                href="/files/Reid_Risk_Imaging_Final.pdf"
                                text="PDF"
                                icon={FaFilePdf}
                            />
                            <Button 
                                href="/files/MCP_Presentation_Jul24.pdf"
                                text="Slides"
                                icon={PiPresentationFill}
                            />
                        </div>
                    </div>

                    {/* URTC 24 */}
                    <div className="group text-main pt-8">
                        <div>
                            Formalizing Ethical Design in Prostate Cancer Image Analysis: Preliminary Case Study
                        </div>
                        <p className="md:pt-1 pt-2 text-sm text-graysubtitle2">
                            <span className={`${font_med.className}`}>
                                Sadie Lee
                            </span>
                            , Adam Resnick, Nasibeh Zanjirani Farahani
                        </p>
                        <div className="pt-1 md:pt-0 text-sm text-graysubtitle2">
                            IEEE MIT URTC 2024 • Mayo Clinic Platform
                        </div>
                        <div className="flex flex-row gap-1 pt-2">
                            <Button 
                                href="/files/MIT_URTC_Final.pdf"
                                text="PDF"
                                icon={FaFilePdf}
                            />
                            <Button 
                                href="https://ieeexplore.ieee.org/document/10937534"
                                text="IEEE"
                                icon={IoMdLink}
                            />
                        </div>
                    </div>

                    {/* AAAI 24 */}
                    <div className="group text-main pt-8">
                        <div>
                            Topological Data Analysis and Interpretability of 3D-Convolutional Neural Networks
                        </div>
                        <p className="md:pt-1 pt-2 text-sm text-graysubtitle2">
                            <span className={`${font_med.className}`}>
                                Sadie Lee
                            </span>
                        </p>
                        <div className="pt-1 md:pt-0 text-sm text-graysubtitle2">
                            AAAI Undergraduate Consortium 2024
                        </div>
                        <div className="flex flex-row gap-1 pt-2">
                            <Button 
                                href="/files/AAAI_UC_Proposal.pdf"
                                text="PDF"
                                icon={FaFilePdf}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section
                id="projects"
                className="flex flex-col md:pt-20 pt-18 pb-20"
            >
                <div className="text-lg">
                    Projects
                </div>
                <div className="pt-4">
                    <Project 
                        href="https://patterns-of-growth.vercel.app/"
                        text="Patterns of Growth"
                        date="2025"
                    />
                    <Project 
                        href="https://www.voythos.io/"
                        text="Voythos Web"
                        date="2025"
                    />
                    <Project 
                        href="https://ubcballet.vercel.app/"
                        text="UBC Ballet Web"
                        date="2024"
                    />
                    <Project 
                        href="/apple-health-map"
                        text="A Map of Apple Health"
                        date="2023"
                    />
                    <Project 
                        href="https://github.com/leesadie/forestar"
                        text="Forestar App"
                        date="2023"
                    />
                </div>
            </section>
        </div>
    );
}

export default Main;