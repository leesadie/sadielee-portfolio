'use client';

import { font_med } from "@/app/fonts";
import Card from "./Card";
import Button from "../Button";
import Project from "./Project";
import IconTooltip from "../interaction/IconTooltip";

// Icons
import { MdMail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaFilePdf } from "react-icons/fa";
import { PiPresentationFill } from "react-icons/pi";
import { IoMdLink } from "react-icons/io";

const Main = () => {
    return (
        <div className="flex flex-col max-w-2xl w-full mx-auto md:px-4 px-6 text-main">
            {/* About */}
            <section
                id="about"
                className="flex flex-col md:pt-28 pt-18"
            >
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-4">
                        <div className={`${font_med.className} text-lg pt-4`}>
                            Sadie Lee
                        </div>
                    </div>
                    <div className="flex flex-row gap-1 md:pt-4 pt-5">
                        <IconTooltip label="Email" href="mailto:leesadie025@gmail.com">
                            <MdMail size={22} className="text-neutral-600 hover:opacity-60 transition duration-200 ease-in"/>
                        </IconTooltip>

                        <IconTooltip label="Github" href="https://www.github.com/leesadie">
                            <IoLogoGithub size={22} className="text-neutral-600 hover:opacity-60 transition duration-200 ease-in"/>
                        </IconTooltip>

                        <IconTooltip label="LinkedIn" href="https://www.linkedin.com/in/leesadie/">
                            <FaLinkedinIn size={22} className="text-neutral-600 hover:opacity-60 transition duration-200 ease-in" />
                        </IconTooltip>

                        <IconTooltip label="Resume" href="/files/Sadie_Lee_Resume.pdf">
                            <IoDocumentTextSharp size={22} className="text-neutral-600 hover:opacity-60 transition duration-200 ease-in" />
                        </IconTooltip>
                    </div>
                </div>
                <div className="flex flex-col pt-10">
                    <p>
                        I build and evaluate AI/ML systems, with a focus on understanding how they behave in critical domains. 
                    </p>
                    <p className="pt-5">
                        Currently, I study cognitive systems and data science at
                        <span className={`hover:opacity-60 cursor-pointer transition duration-200 text-gray-900 ${font_med.className}`}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.ubc.ca/" className="pl-1">
                                UBC
                            </a>
                        </span>, graduating May 2026, and am a teaching assistant for COGS 401 (Seminar in Cognitive Systems).
                        Upon graduation, I will be joining 
                        <span className={`hover:opacity-60 cursor-pointer transition duration-200 ${font_med.className}`}>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.chip.org/" className="pl-1">
                                Boston Children's Hospital
                            </a>
                        </span>.
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
                    On the side, I enjoy designing software and exploring creative code. 
                </div>
            </section>

            {/* Work */}
            <section
                id="work"
                className="flex flex-col md:pt-20 pt-18"
            >
                <div className={`${font_med.className}`}>
                    Selected Work
                </div>
                <div className="pt-5 flex flex-col gap-2">
                    <Card 
                        image="/images/capstone.svg"
                        title="Evaluated risks to patient re-identification from ML models trained on medical images"
                        subtitle="Mayo Clinic Platform • 2025"
                        button1={
                            <Button 
                                href="https://github.com/leesadie/Re-id_Risk_Imaging"
                                text="Code"
                                icon={RiCodeSSlashFill}
                            />
                        }
                        button2={
                            <Button 
                                href="/files/Reid_Risk_Imaging_Final.pdf"
                                text="PDF"
                                icon={FaFilePdf}
                            />
                        }
                        button3={
                            <Button 
                                href="/files/MCP_Presentation_Jul24.pdf"
                                text="Slides"
                                icon={PiPresentationFill}
                            />
                        }
                    />

                    <Card 
                        image="/images/mcp.svg"
                        title="Developed an end-to-end AI/ML workflow for medical imaging with a prostate MR use case"
                        subtitle="Mayo Clinic Platform • 2024"
                        button1={
                            <Button 
                                href="https://github.com/leesadie/prostateimaging"
                                text="Code"
                                icon={RiCodeSSlashFill}
                            />
                        }
                    />

                    <Card 
                        image="/images/tir.svg"
                        title="Automated time in range data collection and analysis for a clinical trial"
                        subtitle="BCCHR • 2023-2024"
                        button1={
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
                <div className={`${font_med.className}`}>
                    Publications
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
                            JMIR Diabetes (in-press) • BC Children's Hospital Research Institute, UBC Faculty of Medicine
                        </div>
                        <div className="pt-2">
                            <Button 
                                href="https://preprints.jmir.org/preprint/71733/"
                                text="Preprint"
                                icon={IoMdLink}
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
                        <div className="pt-2">
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
                <div className={`${font_med.className}`}>
                    Coursework
                </div>
                <div>
                    <Project 
                        href="https://patterns-of-growth.vercel.app/"
                        text="Patterns of Growth"
                        date="2025"
                    />
                    <Project 
                        href="/apple-health-map"
                        text="A Map of Apple Health"
                        date="2023"
                    />
                </div>

                <div className={`md:pt-20 pt-18 ${font_med.className}`}>
                    Misc. software
                </div>
                <div>
                    <Project 
                        href="/creativecode"
                        text="Creative Code"
                        date="Ongoing"
                        newTab={false}
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
                        href="https://github.com/leesadie/forestar"
                        text="Forestar App (fullstack)"
                        date="2023"
                    />
                </div>
            </section>
        </div>
    );
}

export default Main;