import React from "react";
import HeroTitle from "./HeroTitle";
import HeroCode from "./HeroCode";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const HeroSection = () => {
  return (
    <section
      className={`px-6 sm:px-8 lg:flex lg:w-full lg:items-center lg:justify-between lg:gap-12 ${inter.className}`}
    >
      <HeroTitle />
      <HeroCode />
    </section>
  );
};

export default HeroSection;
