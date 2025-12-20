'use client';

import { font_map_body } from "../fonts";
import Image from "next/image";
import Citation from "../components/Citation";

const HealthClient = () => {
    return (
        <div className="bg-mapbg flex flex-col w-screen h-full">
            <div className="md:p-10 p-5 w-screen md:w-full">
                <Image 
                    src='images/map_hero.svg'
                    alt="map hero"
                    height={1500}
                    width={1500}
                />
            </div>
            {/* Title/intro */}
            <div className={`md:mx-80 text-gray-50 ${font_map_body.className}`}>
                <div className="md:text-6xl/18 text-3xl pt-10 md:px-20 px-12">
                    A Sociotechnical Map of Apple Health
                </div>
                <p className="md:pt-20 pt-10 md:pl-20 px-6 md:text-lg text-sm">
                    Wearable technologies such as sensors and smartwatches are commonly used in the context of health and wellbeing, for prevention, maintenance, monitoring, and management.
                    <Citation ids={[1, 2]}/>
                    To do so, these technologies collect users’ biometric data and apply algorithms to identify patterns and track trends over time. While initially used in clinical settings, wearables have saturated the consumer market, where 1 in 6 consumers in the United States currently use some form.
                    <Citation ids={[1]}/> 
                </p>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-sm">
                    Given the pervasiveness of this technology, it thus useful to understand where this data goes and how it is used. This study examines the Apple Watch Series 9 health and fitness system through the sociotechnical lens of information theory with the aim of understanding the interconnected systems that play into its creation and usage.
                </p>
            </div>
            <hr className="mt-20 w-full border-t-1 border-white"/>

            {/* Methods */}
            <div className={`md:mx-80 text-gray-50 ${font_map_body.className}`}>
                <div className="md:text-3xl text-2xl md:pl-20 px-12 pt-20">
                    I. Methodology
                </div>
                <p className="pt-10 md:pl-20 px-6 md:text-lg text-sm">
                    The primary point of access to the Apple Watch Series 9 was online resources, in order to retrieve and organize system information according to Glushko’s three tiers: presentation, logic, and storage. 
                    <Citation ids={[3]}/>
                    Presentation encompasses software and hardware for user interaction as well as how the system is viewed societally, logic involves how algorithms use biometric data and organize data in apps, and storage includes where data is stored both on device and externally on servers. 
                </p>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-sm">
                    Information on hardware, software, data collection, and privacy was identified via Apple’s documentation and reports. To understand certain flows of data, Xcode was utilized to access Apple HealthKit, a central repository that stores health data which can be used by third-party developers to build external applications.
                    <Citation ids={[4]}/>
                    Non-technical information was found via government reports, legal cases, and other news sources.
                </p>
            </div>
            <hr className="mt-20 w-full border-t-1 border-white"/>

            {/* Supply chain */}
            <div className={`md:mx-80 text-gray-50 ${font_map_body.className}`}>
                <div className="md:text-3xl text-2xl md:pl-20 px-12 pt-20">
                    II. Supply chain
                </div>
                <p className="pt-10 md:pl-20 px-6 md:text-lg text-sm">
                    When the Apple Watch Series 9 is assembled, individual supply chains made of materials, suppliers, and labor are embedded in the device, i.e. supply chains within supply chains. Apple’s global supply chain
                    <Citation ids={[5]}/>
                    spans over three million people, fifty countries and regions, and thousands of businesses and facilities.
                    <Citation ids={[6]}/> 
                    Each individual within the supply chain can be considered an agent, any entity capable of autonomous and intentional action on a system, 
                    <Citation ids={[3]}/>
                    from miners and refiners of rare earth elements to manufacturers, assemblers, designers, and developers. 
                </p>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-sm">
                    These agents operate within various infrastructures which contain the properties of being embedded, learned, linked with practice, transparent, and large in scale and scope. 
                    <Citation ids={[7]}/>
                    For example, transportation workers rely on road networks and shipping routes, manufacturers and assemblers require energy systems in addition to databases and communication structures, 
                    <Citation ids={[8]} />
                    and the work of designers and developers involves the Internet and computer networks. 
                </p>
                <div className="flex items-center justify-center pt-5 w-screen md:w-full px-6 md:px-0">
                    <a href="/files/SupplyChain.pdf" rel="noopener noreferrer" target="_blank">
                        <Image 
                            src='/images/supply_chain.svg'
                            alt="supply chain"
                            height={700}
                            width={700}
                            className="hover:border hover:border-neutral-500 hover:border-dotted transition duration-300 ease-in-out"
                        />
                    </a>
                </div>
            </div>
            <hr className="mt-20 w-full border-t-1 border-white"/>

            {/* Technical */}
            <div className={`md:mx-80 text-gray-50 ${font_map_body.className}`}>
                <div className="md:text-3xl text-2xl md:pl-20 px-12 pt-20">
                    III. Technical specifications
                </div>
                <p className="pt-10 md:pl-20 px-6 md:text-lg text-sm">
                    The health and fitness system of the Apple Watch Series 9 collects the following data from a user: activity with total calories, steps, and workouts, sleep stages and duration, blood oxygen, heart rate, respiratory rate, wrist temperature, electroencephalogram (ECG), and geolocation; users can also log menstrual cycle, mental health, and medical record information. 
                    <Citation ids={[9]}/>
                    This data is stored in iCloud and is end-to-end encrypted, 
                    <Citation ids={[10]}/>
                    where encryption keys are stored on trusted devices.
                    <Citation ids={[11]}/> 
                </p>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-base">
                    Apple indicates that iCloud metadata and encryption keys for certain data categories such as photos, notes, and calendars are stored on its own servers, while files encrypted in “chunks” are stored anonymously on third-party servers such as Amazon S3 and Google Cloud.
                    <Citation ids={[12]}/> 
                </p>
                <div className="flex items-center justify-center pt-5">
                    <a href="/files/DataFlow.pdf" rel="noopener noreferrer" target="_blank">
                        <Image 
                            src='/images/data.svg'
                            alt="data"
                            height={700}
                            width={700}
                            className="hover:border hover:border-neutral-500 hover:border-dotted transition duration-300 ease-in-out"
                        />
                    </a>
                </div>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-sm">
                    For apps created for the Apple Watch by third-party developers, HealthKit is used to store data, which is stored on device and not in iCloud.
                    <Citation ids={[4]}/> 
                </p>
                <div className="flex items-center justify-center pt-5 md:w-full w-screen md:p-0 p-6">
                    <a href="/files/HealthKit.pdf" rel="noopener noreferrer" target="_blank">
                        <Image 
                            src='/images/healthkit.svg'
                            alt="healthkit"
                            height={600}
                            width={600}
                            className="hover:border hover:border-neutral-500 hover:border-dotted transition duration-300 ease-in-out"
                        />
                    </a>
                </div>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-sm">
                    Defining an information system as the coordination of people, data, and information technology to “facilitate information creation, storage, and access”, 
                    <Citation ids={[13, 14]}/>
                    we can consider how the Apple Watch is an information system that coordinates a user, their data, and the device’s software to create, store, and allow users to access their health and fitness data. 
                </p>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-sm">
                    The Apple Watch Series 9 uses watchOS 10. Its hardware features a 4-core neural engine for faster machine learning tasks, a blood oxygen sensor, electrical heart sensor for ECG, third-generation optical heart sensor, high-g accelerometer for fall and crash detection, high dynamic range gyroscope for motion-based information, and GPS.
                    <Citation ids={[15, 16]}/>
                </p>
                <div className="flex items-center justify-center pt-5 md:w-full w-screen md:p-0 p-6">
                    <a href="/files/Hardware.pdf" rel="noopener noreferrer" target="_blank">
                        <Image 
                            src='/images/hardware.svg'
                            alt="hardware"
                            height={700}
                            width={700}
                            className="hover:border hover:border-neutral-500 hover:border-dotted transition duration-300 ease-in-out"
                        />
                    </a>
                </div>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-sm">
                    Based on the connectivity and networks required between sensors, communication protocol, algorithms, and data, in addition to the global supply chain network used for its assembly, we can also consider that the watch is an infrastructure in itself, containing the properties of being embedded, learned, linked with practice, and large in scale and scope throughout its entire creation and usage process. 
                </p>
            </div>
            <hr className="mt-20 w-full border-t-1 border-white"/>

            {/* Privacy and ethics */}
            <div className={`md:mx-80 text-gray-50 ${font_map_body.className}`}>
                <div className="md:text-3xl text-2xl md:pl-20 px-6 pt-20">
                    IV. Privacy and ethics
                </div>
                <p className="pt-10 md:pl-20 px-6 md:text-lg text-sm">
                    With a vast amount of biometric and personal health data being collected by the Apple Watch Series 9, concerns have arisen around “under-the-skin surveillance,” i.e. allowing devices to read and track our bodies and emotions. 
                    <Citation ids={[17]}/>
                    Moreover, consider that digitizing the world inherently necessitates surveilling it by recording, tagging, and tracking. 
                    <Citation ids={[17]}/>
                    Significant concerns have thus been raised regarding both the data security and consumer privacy of the Apple Watch Series 9.  
                </p>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-sm">
                    In 2021, a non-password protected database was found containing over 61 million records related to health and fitness tracking devices, notably the Apple Watch and its use of HealthKit. 
                    <Citation ids={[18]}/>
                    Many of these records also included identifiable user data such as name, geolocation, date of birth, height, weight, and gender. 
                </p>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-sm">
                    While HIPAA in the United States
                    <Citation ids={[19]}/>
                    and PIPEDA in Canada  
                    <Citation ids={[20]}/>
                    are meant to protect consumers’ personal data, these regulations are somewhat ambiguous regarding wearable technologies, and no uniform national policy currently exists for user-generated health data. 
                </p>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-sm">
                    In the United States, the landmark case 
                    <span className="italic px-1">
                        Katz v. United States (1967)
                    </span>
                    ruled that the government’s surveillance activities violated the petitioner’s privacy, thus establishing a constitutionally protected, reasonable expectation of privacy. 
                    <Citation ids={[21]}/>
                    Yet, lines of privacy have become increasingly blurred with wearable technology and how its data is stored, leading to questions of whether canonical notions of what constitutes a reasonable expectation of privacy can still exist.  
                </p>
                <hr className="mt-15 mb-10 md:ml-20 mx-6 md:w-7/8 border-t-1 border-white"/>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-sm">
                    The Apple Watch Series 9 uses machine learning-based algorithms to analyze ECG data, blood oxygen data, and the “double-tap” mechanism which detects subtle movements and changes in blood flow when users tap fingers together. 
                    <Citation ids={[22, 23]}/>
                    These algorithms are proprietary with little information disclosed about training data and training processes, leading to potential for undisclosed biases.   
                </p>
                <p className="pt-5 md:pl-20 px-6 md:text-lg text-sm">
                    In 
                    <span className="italic pl-1">
                        Morales v. Apple Inc. (2023)
                    </span>
                    , Apple was accused of the watch’s blood oxygen sensor system being racially biased against people with darker skin tones, with significantly less accurate results in measuring blood oxygen levels. 
                    <Citation ids={[24]}/>
                    Algorithmic bias may thus be present in blood oxygen measurements, i.e. bias embedded from those who built the algorithms, how these algorithms were developed, and how these algorithms are used.
                    <Citation ids={[25]}/>    
                </p>
            </div>
            <hr className="mt-20 w-full border-t-1 border-white"/>

            {/* Conclusion */}
            <div className={`md:mx-80 text-gray-50 ${font_map_body.className}`}>
                <div className="md:text-3xl text-2xl md:pl-20 px-6 pt-20">
                    V. Conclusion
                </div>
                <p className="pt-10 md:pl-20 px-6 md:text-lg text-sm">
                    Interacting with the Apple Watch Series 9 includes far more than its technical stack. Complex interactions exist across the system’s entire life cycle, from social and economic to legal and political. 
                </p>
            </div>
            <hr className="mt-20 w-full border-t-1 border-white"/>

            {/* Footnotes */}
            <section className={`md:mx-80 text-gray-50 ${font_map_body.className}`}>
                <div className="md:text-3xl text-2xl md:pl-20 px-6 pt-20">
                    Footnotes
                </div>
                <div className="pt-10 md:pl-20 px-6 md:text-base text-sm">
                    <ol className="pl-3 list-decimal space-y-4">
                        <li id="fn1">
                            Piwek, Lukasz, David A. Ellis, Sally Andrews, and Adam Joinson. "The rise of consumer health wearables: promises and barriers." PLoS medicine 13, no. 2 (2016): e1001953. https://doi.org/10.1371/journal.pmed.1001953
                        </li>
                        <li id="fn2">
                            Wu, Min, and Jake Luo. "Wearable technology applications in healthcare: a literature review." Online J. Nurs. Inform 23, no. 3 (2019).
                        </li>
                        <li id="fn3">
                            Glushko, Robert J. The discipline of organizing: professional edition. " O'Reilly Media, Inc.", 2016. 50. https://ischoolsinc.wildapricot.org/Discipline-of-Organizing-Professional
                        </li>
                        <li id="fn4">
                            “HealthKit.” Apple Developer Documentation, 2023. https://developer.apple.com/documentation/healthkit
                        </li>
                        <li id="fn5">
                            Information regarding supply chains specific to the Apple Watch Series 9 was unable to be identified through online sources; we assume that the product does not use an entirely different global supply chain.
                        </li>
                        <li id="fn6">
                            Apple Supplier Responsibility 2023 Progress Report. PDF file. Apple Incorporated. https://www.apple.com/supplier-responsibility/pdf/Apple_SR_2023_Progress_Report.pdf
                        </li>
                        <li id="fn7">
                            Star, Susan Leigh, and Karen Ruhleder. “Steps Toward an Ecology of Infrastructure: Design and Access for Large Information Spaces.” Information Systems Research 7, no. 1 (1996): 111–34. http://www.jstor.org/stable/23010792.
                        </li>
                        <li id="fn8">
                            National Research Council. "Information Technology and Manufacturing: A Preliminary Report on Research Needs." (1993). pp. 31-41
                        </li>
                        <li id="fn9">
                            Apple Watch User Guide. PDF file. Apple Incorporated. https://help.apple.com/pdf/watch/9/en_US/apple-watch-user-guide-watchos9.pdf
                        </li>
                        <li id="fn10">
                            Health Privacy Overview. PDF file. Apple Incorporated. https://www.apple.com/ios/health/pdf/Health_Privacy_White_Paper_May_2023.pdf
                        </li>
                        <li id="fn11">
                            “iCloud Data Security Overview - Apple Support (CA).” Apple Support. November 17, 2023. https://support.apple.com/en-ca/102651
                        </li>
                        <li id="fn12">
                            Fleishman, Glenn. 2018. “How to Find out Where Apple Stores Your ICloud Data (Spoiler: You Can’t Exactly).” Macworld. May 21, 2018. https://www.macworld.com/article/231380/where-does-apple-stores-your-icloud-data.html.
                        </li>
                        <li id="fn13">
                            Amy J. Ko (2023). Foundations of Information. https://faculty.washington.edu/ajko/books/foundations-of-information/.
                        </li>
                        <li id="fn14">
                            Michael K. Buckland (1991). Information and information systems. ABC-CLIO.
                        </li>
                        <li id="fn15">
                            “Apple Watch - Compare Models.” 2023. Apple (CA). 2023. https://www.apple.com/ca/watch/compare/.
                        </li>
                        <li id="fn16">
                            “Gyroscope and Accelerometer.” 2023. Apple Developer Documentation. 2023. https://developer.apple.com/design/human-interface-guidelines/gyro-and-accelerometer.
                        </li>
                        <li id="fn17">
                            Véliz, Carissa. 2021. “We Need to Talk about How Apple Is Normalising Surveillance.” Wired UK. November 10, 2021. https://www.wired.co.uk/article/apple-surveillance-technology.
                        </li>
                        <li id="fn18">
                            Fowler, Jeremiah. 2021. “Report: Fitness Tracker Data Breach Exposed 61 Million Records and User Data Online.” Website Planet. September 13, 2021. https://www.websiteplanet.com/blog/gethealth-leak-report/.
                        </li>
                        <li id="fn19">
                            Health Insurance Portability and Accountability Act. Pub. L. No. 104-191, § 264, 110 Stat.1936. (1996).
                        </li>
                        <li id="fn20">
                            Personal Information Protection and Electronic Documents Act, SC 2000, c 5, https://canlii.ca/t/541b8
                        </li>
                        <li id="fn21">
                            Katz v. United States, 389 U.S. 347, 88 S. Ct. 507, 19 L. Ed. 2d 576 (1967).
                        </li>
                        <li id="fn22">
                            Apple. 2022. “Blood Oxygen App on Apple Watch .” Apple Incorporated. https://www.apple.com/healthcare/docs/site/Blood_Oxygen_app_on_Apple_Watch_October_2022.pdf.
                        </li>
                        <li id="fn23">
                            Cherney, Max. 2023. “AI Quietly Reshapes Apple IPhones, Watches.” Reuters, September 12, 2023, sec. Technology. https://www.reuters.com/technology/ai-quietly-reshapes-apple-iphones-watches-2023-09-12/.
                        </li>
                        <li id="fn24">
                            Morales v. APPLE, INC., No. 22-cv-10872 (JSR) (S.D.N.Y. Aug. 29, 2023).
                        </li>
                        <li id="fn25">
                            Heilweil, Rebecca. 2020. “Why Algorithms Can Be Racist and Sexist.” Vox. February 18, 2020.https://www.vox.com/recode/2020/2/18/21121286/algorithms-bias-discrimination-facial-recognition-transparency.
                        </li>
                    </ol>
                </div>
            </section>
            <hr className="mt-20 w-full border-t-1 border-white"/>

            {/* Appendix */}
            <div className={`md:mx-80 mb-20 text-gray-50 ${font_map_body.className}`}>
                <div className="md:text-3xl text-2xl md:pl-20 px-6 pt-20">
                    About
                </div>
                <p className="pt-10 md:pl-20 px-6 md:text-base text-sm">
                    Project for INFO 200 (Foundations of Informatics) at the University of British Columbia in 2023. 
                </p>
                <p className="pt-5 md:pl-20 px-6 md:text-base text-sm">
                    Diagrams created with Figma. Website created with Next.js, TypeScript, Tailwind CSS.
                </p>
                <a href="https://github.com/leesadie/Portfolio_25-26/app/apple-health-map" rel="noopener noreferrer" target="_blank" className="md:text-base text-sm pt-2 md:pl-20 px-6 text-blue-400 hover:text-blue-500 transition duration-200">
                    View website code
                </a>
            </div>
        </div>
    );
}

export default HealthClient;