'use client';

import React, {useState} from 'react'
import Image from "next/image";
import imgAppStore from "../../../public/appStore.svg"
import imgGooglePLay from "../../../public/googlePlay.svg"
import imgAppDownloadContentL1 from "../../../public/appDownloadContent-l1.png"
import imgAppDownloadContentL2 from "../../../public/appDownloadContent-l2.png"
import imgAppDownloadContentR1 from "../../../public/appDownloadContent-r1.png"
import imgAppDownloadContentR2 from "../../../public/appDownloadContent-r2.png"
import TiltCard from "@/app/components/TiltCardExample";

const MainSection = () => {

    const [isHoveringLeft, setIsHoveringLeft] = useState(false);
    const [isHoveringRight, setIsHoveringRight] = useState(false);

    const handleMouseMove = (e) => {
        const screenWidth = window.innerWidth;
        const cursorX = e.clientX;

        if (cursorX < screenWidth / 2) {
            setIsHoveringLeft(true);
            setIsHoveringRight(false);
        } else {
            setIsHoveringLeft(false);
            setIsHoveringRight(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHoveringLeft(false);
        setIsHoveringRight(false);
    };
    return (
        <div className='relative block md:flex lg:flex justify-between px-4 sm:px-0'
             onMouseMove={handleMouseMove}
             onMouseLeave={handleMouseLeave}
        >
            <div className='mid:flex justify-center'>
                <TiltCard
                    imageSrc1={imgAppDownloadContentL1}
                    imageSrc2={imgAppDownloadContentL2}
                    classNames="max-w-52 md:max-w-48 lg:max-w-72 mt-8 md:mt-20 lg:mt-20 group relative"
                    // leftPosition={true}
                    leftImage={true}
                    isHovering={isHoveringLeft}
                />
            </div>
            <div className='main-text text-center mt-12 md:mt-20 lg:mt-20 relative z-20'>
                <div className='text-5xl mid:text-6xl md:text-7xl lg:text-7xl font-bold my-6 font-recoleta'>
                    <div>Welcome to</div>
                    <div className='mt-2'>planning.</div>
                </div>
                <div className='my-7'>
                    <div className='pt-6'>
                        <div className='text-lg tracking-normal text-custom-dark font-extra-thick mx-4'>Visualize time. Build focus. Make life happen.</div>
                        <div className='text-lg tracking-normal text-slate-700 mt-7'>Get one week of Tiimo premium for free.</div>
                        <div className='text-lg tracking-normal text-slate-700'>Start your free trial today. Cancel anytime.</div>
                    </div>
                </div>
                <div className='block mx-6 sm:flex sm:space-x-4 justify-center pt-8'>
                    <button className='w-full flex justify-center py-4 lg:px-20 md:py-4 md:px-9 mid:py-4 mid:px-8 sm:py-3 px-16 bg-black border border-none rounded-full text-white
                 transition delay-150 duration-500 hover:scale-105 hover:shadow-xl'>
                        <Image src={imgAppStore} alt='appStore'/>
                    </button>

                    <button className='w-full flex justify-center py-4 mt-4 lg:px-20 md:py-4 md:px-9 mid:py-4 mid:px-8 sm:mt-0 sm:py-3 px-16 bg-black border border-none rounded-full text-white
                 transition delay-150 duration-500 hover:scale-105 hover:shadow-xl'>
                        <Image src={imgGooglePLay} alt='googlePlay'/>
                    </button>
                </div>
            </div>
                <TiltCard
                    imageSrc1={imgAppDownloadContentR1}
                    imageSrc2={imgAppDownloadContentR2}
                    classNames="max-w-60 md:max-w-48 lg:max-w-64 relative mt-20 group hidden md:block lg:block"
                    // leftPosition={false}
                    rightImage={true}
                    isHovering={isHoveringRight}
                />
        </div>
    )
}

export default MainSection
