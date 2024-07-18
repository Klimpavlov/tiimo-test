import React from 'react'
import Image from "next/image";
import chatBtn from "../../../public/chatBtn.svg"

const ChatBtn = () => {
    return (
        // <div className='flex justify-end sticky bottom-3 z-50 m-2'>
            <div className='sticky bottom-0 z-50 max-w-screen-xl flex justify-end items-center mx-auto p-4'>
            <div className='z-10 px-3.5 pb-3.5 pt-4 md:mr-3 bg-black border border-none rounded-full cursor-pointer'>
                <Image src={chatBtn} alt='chatBtn'/>
            </div>
        </div>
    )
}

export default ChatBtn