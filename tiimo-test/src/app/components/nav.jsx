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
                        <Image src={logoImage} alt="Tiimo Logo Image" width={33} height={34}/>
                    </div>
                    <div>
                        <Image src={logo} alt="Tiimo Logo" width={50} height={14} className='ml-2'/>
                    </div>
                </div>
                <div className='nav flex py-4 ml-auto text-base max-w-full'>
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
                                    ? 'lg:hidden fixed top-24 left-0 right-0 mx-2 p-2 flex justify-start items-start bg-black border border-none rounded-3xl ease-in duration-700 shadow-2xl'
                                    : 'lg:hidden fixed top-[-100%] left-0 right-0 mx-2 p-2 flex justify-start items-start bg-black border border-none rounded-3xl ease-in duration-700 shadow-2xl'
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
                 shadow transition delay-150 duration-500 hover:scale-105 hover:shadow-2xl'>
                            Start your free trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
        //     <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
        //         <a href="#" className="flex items-center whitespace-nowrap text-2xl font-black">
        // <span className="mr-2 text-4xl text-blue-600">
        //   <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" /></svg>
        // </span>
        //             <span className="text-black">the future</span>
        //         </a>
        //         <input type="checkbox" className="peer hidden" id="navbar-open" />
        //         <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
        //             <span className="sr-only">Toggle Navigation</span>
        //             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        //                 <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        //             </svg>
        //         </label>
        //         <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
        //             <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
        //                 <li className="text-gray-600 md:mr-12 hover:text-blue-600"><a href="#">Pricing</a></li>
        //                 <li className="text-gray-600 md:mr-12 hover:text-blue-600"><a href="#">Features</a></li>
        //                 <li className="text-gray-600 md:mr-12 hover:text-blue-600"><a href="#">Support</a></li>
        //                 <li className="text-gray-600 md:mr-12 hover:text-blue-600">
        //                     <button class="rounded-md border-2 border-blue-600 px-6 py-1 font-medium text-blue-600 transition-colors hover:bg-blue-600 hover:text-white">Login</button>
        //                 </li>
        //             </ul>
        //         </nav>
        //     </div>
    )
}

export default Nav

