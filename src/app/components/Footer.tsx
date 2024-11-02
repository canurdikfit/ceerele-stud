import { BiLogoInstagramAlt } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { FaFacebook, FaLinkedin, FaRegCopyright } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMailOutline } from 'react-icons/io5'
import { LuBuilding2 } from 'react-icons/lu'
import Creele from './../assets/icons/footerLogo.png';
import BoxReveal from './ui/box-reveal'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className='w-screen relative z-10 padding   section'>
            <div className='h-[600px] lg:h-[400px]'>
                <div className='h-[600px] lg:h-[400px] flex flex-col justify-end pb-10 w-full gap-10'>
                    <div className="w-full flex items-end justify-between flex-wrap gap-10 md:pl-10 xl:pl-20">
                        <ul className='space-y-6'>
                            {
                                FooterBasicInfo[0].map((items, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className='flex items-center gap-5'
                                        >
                                            <items.icon className='text-[#FBD40D] text-xl' />
                                            <BoxReveal
                                                duration={0.6}
                                                boxColor='#FBD40D'>
                                                <span className='text-[15px] font-normal'>{items.label}</span>
                                            </BoxReveal>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className='flex items-center gap-5'>
                            {
                                FooterBasicInfo[1].map((items, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className='flex items-center justify-center gap-5 h-10 w-10 rounded-full bg-[#FBD40D] hover:bg-black transition-colors group/icon ease-in-out duration-300'
                                        >
                                            <Link href={items.label} target='_blank'>
                                                <items.icon className='text-black text-2xl transition-colors ease-in-out duration-300 group-hover/icon:text-white' />
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <hr className='opacity-50' />
                    <div className="md:pl-10 xl:pl-20 flex flex-wrap items-center justify-between gap-10">
                        <Image
                            src={Creele}
                            alt='Creele'
                            sizes='100%'
                            className='h-6 md:h-8 w-auto'
                        />
                        <div className="flex gap-4">
                            {
                                BasicLinks.map((items, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            target='_blank'
                                            href={items.hash}
                                            className='text-[#FBD40D] hover:text-white transition-colors ease-in-out duration-300'>
                                            <h6 className='text-lg underline underline-offset-4 whitespace-nowrap'>{items.label}</h6>
                                        </Link>
                                    )
                                })
                            }
                        </div>
                        <div className="flex items-center gap-1 text-[#A7A7A7]">
                            <FaRegCopyright />
                            <BoxReveal
                                duration={0.6}
                                boxColor='#FBD40D'>
                                <span className='text-[13px]'>
                                    Creele Animation Studios. All rights reserved.
                                </span>
                            </BoxReveal>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}




const FooterBasicInfo = [
  [
    {
      icon: IoMailOutline,
      label: "info@creelestudios.com",
    },
    {
      icon: BsTelephone,
      label: "09066828247",
    },
    {
      icon: LuBuilding2,
      label: "13 Ilesanmi Idowu Street, Ogudu GRA, Lagos Nigeria",
    },
  ],
  [
    {
      icon: FaFacebook,
      label: "https://web.facebook.com/p/Creele-Animation-Studios",
    },
    {
      icon: FaXTwitter,
      label: "https://x.com/creelestudios?s=21",
    },
    {
      icon: FaLinkedin,
      label: "https://www.linkedin.com/company/creele-animation-studios",
    },
    {
      icon: BiLogoInstagramAlt,
      label: "https://www.instagram.com/creelestudio?igsh=MWc1eGF4enlubnFhdg==",
    },
  ],
];

const BasicLinks = [
    {
        label: 'Careers',
        hash: 'https://airtable.com/app2BTfHuoEs6H1zu/pagyJVqUISwVrYAxY/form'
    },
    {
        label: 'BOOK A MEETING',
        hash: 'https://outlook.office365.com/owa/calendar/CreeleStudiosMeetings@creelestudios.com/bookings/'
    }
]
