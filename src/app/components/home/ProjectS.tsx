import { HeadingOverlay } from "../ui/HeadingOverlay";
import ProjectCarousel from "../ui/ProjectCarousel";


export default function ProjectS() {
    return (
        <section className='padding xl:px-28 section carousel'>
            <HeadingOverlay label='OUR PROJECTS' />
            <div className="h-screen flex flex-col items-center justify-center overflow-hidden">
                <ProjectCarousel />
            </div>
        </section>
    )
}
