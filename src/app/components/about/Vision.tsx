import Image from 'next/image';
import LadyHand from '../../assets/images/hands_folded_art.png';
import { motion } from "framer-motion"

export default function Vision() {
    return (
        <section className='padding about_sections section vision pb-20 md:pb-0 items-center xl:items-end'>

                <div className="relative z-10 grid md:grid-cols-5 overflow-visible items-center xl:items-end mt-auto">
                    <div className="md:col-span-3 space-y-5 lg:pb-10 xl:pb-20">
                        <motion.h2
                            initial={{
                                translateY: 100,
                                opacity: 0
                            }}
                            whileInView={{
                                translateY: 0,
                                opacity: 1,
                            }}
                            transition={{
                                ease: 'linear',
                                duration: .5
                            }}
                        >OUR MISSION</motion.h2>
                        <motion.p
                            initial={{
                                translateY: 100,
                                opacity: 0
                            }}
                            whileInView={{
                                translateY: 0,
                                opacity: 1,
                            }}
                            transition={{
                                ease: 'linear',
                                duration: .5,
                                delay: .2
                            }}
                            className='max-w-2xl md:text-base xl:text-lg opacity-80 pb-3'>
                            Our mission is to cater to the desire for artistic, informative, inspirational and entertaining content developed from diverse culturally inspired storytelling for people worldwide. We are pushing the boundaries of creative innovation technology in order to become the top entertainment studio emerging from Africa.
                        </motion.p>

                        <motion.h2
                            initial={{
                                translateY: 100,
                                opacity: 0
                            }}
                            whileInView={{
                                translateY: 0,
                                opacity: 1,
                            }}
                            transition={{
                                ease: 'linear',
                                duration: .5,
                                delay: .4
                            }}
                        >OUR VISION</motion.h2>
                        <motion.p
                            initial={{
                                translateY: 100,
                                opacity: 0
                            }}
                            whileInView={{
                                translateY: 0,
                                opacity: 1,
                            }}
                            transition={{
                                ease: 'linear',
                                duration: .5,
                                delay: .6
                            }}
                            className='max-w-2xl md:text-base xl:text-lg opacity-80 pb-3'>
                            Our sights are set on showcasing a new kind of creative innovation in the entertainment industry, as well as across the technological and social spaces. We hope to capture the ears, eyes and hearts of all people, delivering a truly “Creele” experience.
                        </motion.p>

                    </div>
                    <div className="md:col-span-2 items-center md:justify-end justify-center overflow-visible hidden md:flex">
                        <div className="max-h-[600px] h-screen lg:h-[500px] xl:h-[700px] xl:max-h-[700px] relative">
                            <Image
                                src={LadyHand}
                                alt="Art Works"
                                sizes='100%'
                                className='object-contain object-bottom h-full w-full' />
                        </div>
                    </div>
                </div>
     
        </section>
    )
}


