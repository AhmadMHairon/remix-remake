import Link from "next/link";
import React from "react";

const HeroTitle = () => {
  return (
    <div className={`lg:mb-10 lg:w-1/2 `}>
      <div className="lg:mx-auto lg:max-w-2xl ">
        <h2 className="font-display text-3xl font-extrabold text-white sm:text-5xl lg:text-[length:64px] lg:leading-[56px] xl:text-7xl founder">
          Focused on <span className="text-aqua-brand">web standards</span> and{" "}
          <span className="text-green-brand">modern web app</span> UX, you’re
          simply going to{" "}
          <span className="text-yellow-brand">build better websites</span>
        </h2>
        <div className="h-6"></div>
        <p className="text-lg lg:text-xl xl:pr-56">
          Remix is a full stack web framework that lets you focus on the user
          interface and work back through web standards to deliver a fast,
          slick, and resilient user experience. People are gonna love using your
          stuff.
        </p>
        <div className="h-9 xl:h-10"></div>
        <div className="xl: flex flex-col gap-4 xl:flex-row">
          <Link
            x-comp="PrimaryButtonLink"
            className="inline-flex items-center justify-center xl:text-xl h-14 xl:h-16 box-border px-8 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent font-semibold bg-blue-brand text-white hover:bg-blue-600 focus:ring-blue-200 transition-colors duration-200 w-full xl:order-1 xl:w-60"
            href="/docs/en/v1/tutorials/blog"
          >
            Get Started
          </Link>
          <Link
            className="inline-flex items-center justify-center xl:text-xl h-14 xl:h-16 t box-border px-8 rounded bg-transparent text-white border-current hover:border-blue-brand focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-blue-200 focus:ring-opacity-80 font-semibold border-2 w-full xl:w-60"
            href="/docs/en/v1"
          >
            Read the Docs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroTitle;
