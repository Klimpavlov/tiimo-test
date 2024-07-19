import React from 'react'
import Image from "next/image";
import chatBtn from "../../../public/chatBtn.svg"

const ChatBtn = () => {
    return (
        // <div className='flex justify-end sticky bottom-3 z-50 m-2'>
        <div className='fixed bottom-4 right-4 z-50'>
            <div className='z-10 px-3.5 pb-3.5 pt-4  bg-black border-none rounded-full cursor-pointer'>
                <Image src={chatBtn} alt='chatBtn'/>
            </div>
        </div>
    )
}

export default ChatBtn