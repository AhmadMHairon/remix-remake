import Image from "next/image";
import React from "react";
import TestSlide from "./TestSlide";

const TestimonialsSection = () => {
  const myArray = new Array(10).fill(0);

  return (
    <section>
      <h2 className="sr-only">Testimonials</h2>
      <figure className="mx-auto max-w-xl p-6 sm:p-8">
        <div className="flex items-center justify-center gap-4 text-white">
          <div className="flex">
            <div className="h-12 w-12 relative z-10">
              <Image
                src={"http://remix.run/img/jenna.jpg"}
                alt="jenna"
                className="rounded-full object-cover"
                fill={true}
                priority
              />
            </div>
            <Image
              src={"twitterLogo.svg"}
              className="relative -left-4 h-12 w-12 text-white dark:invert"
              alt="twitter"
              priority
              height={40}
              width={40}
            />
          </div>
          <div>
            <a
              href="https://twitter.com/jjenzz/status/1459941582912827398"
              target="_blank"
              rel="noreferrer"
              className="block font-display text-xl font-extrabold md:text-3xl"
              aria-label="Tweet from Jenna Smith"
            >
              Jenna Smith
            </a>
            <span className="sr-only">, </span>
            <div className="text-lg uppercase">Radix UI</div>
          </div>
        </div>
        <div className="h-10"></div>
        <blockquote className="text-center text-lg leading-6 md:text-xl">
          I{"'"}ve been waiting for something to encourage progressive
          enhancement in the React space *forever* and Remix truly is so much
          more. Proving we don{"'"}t need to sacrifice React or choose SSG for a
          lightning fast, accessible UI, and the DX makes it all too easy 🤤
        </blockquote>
      </figure>
      <div
        className="flex gap-6 overflow-x-scroll md:pb-4"
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {myArray.map((_, i) => (
          <TestSlide key={i}></TestSlide>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
