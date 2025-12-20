import ClientOnly from "../components/ClientOnly";
import HealthClient from "./HealthClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "A Map of Apple Health",
    description: "A Sociotechnical Map of Apple Health"
}

const AppleHealthMap = () => {
    return (
        <ClientOnly>
            <HealthClient />
        </ClientOnly>
    );
}

export default AppleHealthMap;