'use client'
import Creele from './../assets/icons/creele.png';
import RoundBtn from './../assets/artifacts/round_btn.png';
import { HiMiniBars3 } from "react-icons/hi2";
import React from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { IoCloseOutline } from 'react-icons/io5';
import Link from 'next/link';
import Image from 'next/image';


gsap.registerPlugin(useGSAP);

export default function Navbar() {
    const [state, setState] = React.useState<boolean>(false)

    useGSAP(() => {
        gsap.fromTo('#menu', {
            translateY: -500,
        }, {
            translateY: 0,
            duration: 1,
            ease: 'power3.in'
        })
    }, [])

    return (
        <nav
            id='menu'
            className={`fixed z-50 inset-x-0 transition-transform ease-in-out duration-500 top-0 md:top-3 xl:top-7 padding xl:px-36`}>
            <div
                className='relative mx-auto h-32 flex items-center'>
                <div className='relative z-10 flex items-center justify-between w-full'>
                    <Link href={'/home'} className='flex-shrink-0'>
                        <Image
                            src={Creele}
                            alt='Creele'
                            sizes='100%'
                            className='h-16 md:h-20 xl:h-28 w-auto relative z-40'
                        />
                    </Link>
                    <ul className={`items-center gap-8 lg:gap-12 text-center ${state ? 'translate-x-0' : 'translate-x-[100vw]'} fixed inset-0 md:-top-3 xl:-top-7 h-screen backdrop-blur flex flex-col justify-center w-screen bg-black/50`}>
                        {
                            NavigationSystem.map((items, index) => {
                                return (
                                    <li
                                        key={index}
                                    >
                                        <Link
                                            href={items.hash}
                                            onClick={() => setState(false)}
                                            className={`font-semibold aria-[current=page]:text-[#FBD40D] hover:text-[#FBD40D] text-3xl md:text-4xl xl:text-5xl`}
                                        >
                                            {items.label}
                                        </Link>
                                    </li>

                                )
                            })
                        }
                    </ul>
                    <button
                        onClick={() => setState(!state)}
                        className="relative bb flex items-center justify-center h-16 w-16 md:h-24 md:w-24">
                        <Image
                            src={RoundBtn}
                            alt="Button"
                            sizes="100%"
                            className="btn_designed"
                        />
                        {
                            !state ? (
                                <HiMiniBars3 className='relative z-20 text-3xl' />
                            ) : (
                                <IoCloseOutline className='relative z-20 text-3xl' />
                            )
                        }

                    </button>
                </div>
            </div>
        </nav >
    )
}


const NavigationSystem = [
    {
        label: 'Project',
        hash: '/projects'
    },
    {
        label: 'About',
        hash: '/about'
    },
    {
        label: 'Contact',
        hash: '/contact'
    },
]