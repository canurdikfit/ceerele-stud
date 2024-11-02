import { motion } from "framer-motion"
import { HeadingOverlay } from "../ui/HeadingOverlay"
import Image, { StaticImageData } from "next/image"

export default function OurServices(props: {
    heading: string,
    content: string,
    video: StaticImageData
    image: StaticImageData
}) {
    return (
        <section className='padding section service h-screen serv flex items-center  lg:pb-20 xl:pb-0 about_sections'>
            <HeadingOverlay label='Our Services' />


                <div className="grid md:grid-cols-5 h-fit items-center gap-y-5 md:gap-y-10">
                    <div className="md:col-span-2 flex items-center md:justify-end justify-center overflow-visible">
                        <motion.div
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
                            className="max-w-sm h-64 md:h-60 lg:h-96 xl:h-[450px] mx-auto relative">
                            <Image
                                src={props.image}
                                sizes='100%'
                                alt="Art Works"
                                className='object-contain object-center h-full w-full max-w-[184px] md:max-w-full relative z-10' />
                            <div className='absolute inset-0 z-10 px-[5%] pt-[4%]'>
                                <Image src={props.video} alt="Animation" className='h-[95%] w-full rounded-2xl object-cover object-center' />
                            </div>
                        </motion.div>

                    </div>
                    <div className="md:col-span-3 h-fit space-y-2 md:space-y-5 text-center md:text-left">
                        <motion.h4 initial={{
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
                            className='xl:text-5xl md:text-4xl text-2xl max-w-md xl:max-w-2xl'>
                            {props.heading}
                        </motion.h4>
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
                            className='text-sm md:text-xl xl:text-2xl opacity-80 pb-3'>
                            {props.content}
                        </motion.p>
                    </div>
                </div>
 
        </section>
    )
}
