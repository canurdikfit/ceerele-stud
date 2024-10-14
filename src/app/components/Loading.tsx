import Image from 'next/image';
import RectangleBtn from './../assets/artifacts/rectangular_btn.png';

interface Loader {
    onLoad: () => void
    loading: boolean
}

export default function Loading(props: Loader) {
    return (
        <section className={` items-end fixed inset-0 h-screen ${props.loading ? '' : 'opacity-0'} loading_screen bg-black transition-opacity ease-linear duration-1000`}>
            <div className="h-screen">
                <div className="relative z-10 h-screen flex items-end justify-center pb-52">
                    <button
                        onClick={props.onLoad}
                        className='relative bb xl:h-36 xl:w-80 md:h-32 md:w-72 h-24 w-52 -rotate-6'>
                        <Image
                            src={RectangleBtn}
                            alt="Button"
                            sizes="100%"
                            className='btn_designed'

                        />
                        <h6 className='relative z-10 xl:text-3xl md:text-[27px] text-xl btn_text_border'>Explore The Studio</h6>
                    </button>
                </div>
            </div>
        </section>
    )
}
