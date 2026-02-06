import ClientOnly from "../components/ClientOnly";
import CreativeCodeClient from "./CreativeCodeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Creative Code",
    description: "Creative Code Exploration"
}

const CreativeCodePage = () => {
    return (
        <ClientOnly>
            <CreativeCodeClient />
        </ClientOnly>
    );
}

export default CreativeCodePage;