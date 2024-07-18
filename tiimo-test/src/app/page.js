import Image from "next/image";
import Nav from "@/app/components/nav";
import MainSection from "@/app/components/mainSection";
import Example from "@/app/components/TiltCardExample";
import ChatBtn from "@/app/components/chatBtn";

export default function Home() {
    return (
        <main className="bg-page min-h-screen overflow-clip">
            {/*<div className="relative z-50">*/}
                <div className='gradient-hero'>
                    <div className='noise'></div>
                </div>
                <Nav/>
                <MainSection/>
                <ChatBtn/>
            {/*</div>*/}
        </main>
    );
}
