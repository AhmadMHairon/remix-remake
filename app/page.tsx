import FirstAbout from "@/components/About/FirstAbout";
import HeroSection from "@/components/Hero/HeroSection";
import NavBar from "@/components/NavBar";
import TestimonialsSection from "@/components/Testimonials/TestimonialsSection";
import CheatCode from "@/components/cheatCode/CheatCode";
import GoodByeSection from "@/components/goodByeSection/GoodByeSection";
import LoadingState from "@/components/loadingState/LoadingState";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex flex-1 flex-col">
        <div className="h-8" />
        <h1 className="sr-only">Welcome to Remix</h1>
        <HeroSection />
        <div className="h-32"></div>
        <TestimonialsSection />
        <div className="h-32"></div>
        <div>
          <FirstAbout />
          {/* <Image
            src="http://remix.run/wave.png"
            alt=""

            className="absolute -left-full"
          ></Image> */}
          <div className="h-60"></div>
          <CheatCode />
          <div className="h-[25vh]" />
          <LoadingState />
          <div className="h-[25vh]"></div>
          <GoodByeSection />
        </div>
      </main>
    </>
  );
}
