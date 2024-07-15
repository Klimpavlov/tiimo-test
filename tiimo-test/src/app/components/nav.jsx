'use client';

import React, {useState, useEffect, useRef} from 'react'
import logoImage from "../../../public/tiimo-logo-image.png"
import logo from "../../../public/tiimo-logo.png"
import Image from "next/image";
import Link from "next/link";
import {AiOutlineMenu} from 'react-icons/ai';

const Nav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    const openNavRef = useRef(null)
    useEffect(() => {
        function handleClickOutside(event) {
            if (openNavRef.current && !openNavRef.current.contains(event.target)) {
                setNav(false)
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);

    }, [])

    return (
        <div className='sticky top-0 z-50'>
            {/*<div className='flex justify-center items-center lg:mx-40 md:mx-20 sm:mx-10'>*/}
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
                <div className='nav-logo flex gap-1.5 items-center w-full sm:w-auto max-w-xs sm:max-w-full'>
                    <div>
                        <Image src={logoImage} alt="Tiimo Logo Image" width={35} height={28}/>
                    </div>
                    <div>
                        <Image src={logo} alt="Tiimo Logo" width={50} height={14} className='ml-2'/>
                    </div>
                </div>
                <div className='nav flex py-4 ml-auto max-w-full'>
                    <ul className='hidden lg:flex'>
                        <li className='p-4 transition-colors duration-500 hover:text-slate-700'>
                            <Link href='/'>About</Link>
                        </li>
                        <li className='p-4 transition-colors duration-500 hover:text-slate-700'>
                            <Link href='/'>Articles</Link>
                        </li>
                        <li className='p-4 transition-colors duration-500 hover:text-slate-700'>
                            <Link href='/'>Events</Link>
                        </li>
                        <li className='p-4 transition-colors duration-500 hover:text-slate-700'>
                            <Link href='/'>Tiimo Learn</Link>
                        </li>
                        <li className='p-4 transition-colors duration-500 hover:text-slate-700'>
                            <Link href='/'>For coaches</Link>
                        </li>
                        <li className='p-4 transition-colors duration-500 hover:text-slate-700'>
                            <Link href='/'>Newsroom</Link>
                        </li>
                        <li className='p-4 transition-colors duration-500 hover:text-slate-700'>
                            <Link href='/'>FAQ</Link>
                        </li>
                    </ul>
                    {/* mobile button */}

                    <div ref={openNavRef} onClick={handleNav} className='lg:hidden z-10 p-3.5 mid:mr-3 md:mr-3 bg-black border border-none rounded-full
                    transform transition-transform duration-300 cursor-pointer hover:scale-110'>
                        <AiOutlineMenu style={{color: `white`}} size={20}/>
                    </div>

                    {/* mobile menu */}
                    <div
                        className={
                            nav
                                ? 'lg:hidden fixed top-24 left-0 right-0 mx-2 p-2 flex justify-start items-start bg-black border border-none rounded-3xl ease-in duration-700'
                                : 'lg:hidden fixed top-[-100%] left-0 right-0 mx-2 p-2 flex justify-start items-start bg-black border border-none rounded-3xl ease-in duration-700'
                        }
                    >

                        <ul className='text-slate-300 p-4 space-y-4'>
                            <li className='transition-colors duration-500 hover:text-white'>
                                <Link href='/'>About</Link>
                            </li>
                            <li className='transition-colors duration-500 hover:text-white'>
                                <Link href='/'>Articles</Link>
                            </li>
                            <li className='transition-colors duration-500 hover:text-white'>
                                <Link href='/'>Events</Link>
                            </li>
                            <li className='transition-colors duration-500 hover:text-white'>
                                <Link href='/'>Tiimo Learn</Link>
                            </li>
                            <li className='transition-colors duration-500 hover:text-white'>
                                <Link href='/'>For coaches</Link>
                            </li>
                            <li className='transition-colors duration-500 hover:text-white'>
                                <Link href='/'>Newsroom</Link>
                            </li>
                            <li className='transition-colors duration-500 hover:text-white'>
                                <Link href='/'>FAQ</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden sm:flex'>
                        <button className='px-5 bg-black border border-none rounded-full text-white
                 shadow transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl'>
                            Start your free trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav







