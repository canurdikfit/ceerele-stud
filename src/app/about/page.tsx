"use client";
import Studio from "../components/about/Studio";
import Vision from "../components/about/Vision";
import Navbar from "../components/Navbar";
import ReactFullpage from "@fullpage/react-fullpage";
import SoundDesignVid from "../assets/images/sound-design.png";
import AnimationVid from "../assets/motion_graphics/Animation.gif";
import StoryVid from "../assets/motion_graphics/book2.gif";
import OurServices from "../components/about/OurServices";
import ServiceImage from "../assets/artifacts/services.png";
import Career from "../components/about/Career";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.fullpage_api) {
        window.fullpage_api.moveTo(1);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <ReactFullpage
        navigation
        credits={{
          enabled: false,
        }}
        touchSensitivity={5}
        scrollingSpeed={1000}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <Studio />
              <Vision />
              {ServicesContent.map((item, idx) => {
                return (
                  <OurServices
                    key={idx}
                    heading={item.heading}
                    content={item.content}
                    image={ServiceImage}
                    video={item.video}
                  />
                );
              })}
              <Career />
              <Footer />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
}

const ServicesContent = [
  {
    heading:
      "Animation (2D & 3D): Bringing Your Stories to Life with Stunning Visuals",
    content:
      "At Creele Studios, we specialize in full-cycle animation production, offering both 2D and 3D animation services that bring your creative vision to life. From concept development and storyboarding to character design, animation, and post-production, we deliver captivating animations that resonate with audiences. Whether you’re crafting a feature film, a TV series, or short-form content, our expert team creates visually stunning worlds that tell authentic African stories and more.",
    video: AnimationVid,
  },
  {
    heading: "Sound Design for Film & Animation",
    content:
      "Our sound design services are tailored to enhance every frame of your film or animation project. At Creele Studios we understand the power of sound in storytelling. We offer sound effects, dialogue recording, music composition, and sound mixing to create immersive auditory experiences that perfectly complement your visuals. Whether it’s a thrilling adventure or an emotional journey, we bring depth and emotion through sound to elevate your project.",
    video: SoundDesignVid,
  },
  {
    heading: "Storybooks & Comics: Telling Stories Through Art and Imagination",
    content:
      "Creele Studios is dedicated to preserving cultures and employment new adventures through beautifully illustrated storybooks and comics. Our team of talented writers and artists creates compelling narratives that both entertain and educate, sparking imagination in readers of all ages.",
    video: StoryVid,
  },
];
