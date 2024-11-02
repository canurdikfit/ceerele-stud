import { motion } from "framer-motion";
import VideoPlayer from "../ui/VideoPlayer";

export default function VideoS() {
  return (
    <section className="flex-row padding text-center section video">
      <div className="absolute z-10 -top-1 inset-x-0 mix-blend-overlay bg-blend-overlay">
        <h5 className="xl:text-[92px] text-center leading-none whitespace-nowrap tracking-[0.10em]">
          SPOTLIGHT ON CREELE ANIMATION STUDIOS
        </h5>
      </div>
      <div className="relative z-10">
        <div className="h-screen xl:pb-12 flex flex-col justify-center xl:justify-end items-center">
          <VideoPlayer />
        </div>
      </div>
    </section>
  );
}
