import Image from "next/image";
import Link from "next/link";
import React from "react";

const TestSlide = () => {
  return (
    <figure className="__slide w-[80vw] shrink-0 rounded-lg bg-gray-800 p-8 text-white sm:p-10 md:w-[43vw] xl:w-[30rem]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 relative z-10">
            <Image
              src={"http://remix.run/img/jkup.jpg"}
              alt="jenna"
              className="rounded-full object-cover"
              fill={true}
              priority
            />
          </div>
          <figcaption>
            <Link
              href="https://twitter.com/jkup/status/1456360115205033989"
              className="block font-display text-xl font-extrabold md:text-xl"
              aria-label="Tweet from Jon Kuperman"
            >
              @jkup
            </Link>
            <div className="text-sm lg:text-base">Cloudflare</div>
          </figcaption>
        </div>
        <Link href="https://twitter.com/jkup/status/1456360115205033989">
          <Image
            src={"twitterLogo.svg"}
            className="h-6 w-6 dark:invert"
            alt="jenna"
            priority
            height={40}
            width={40}
          />
        </Link>
      </div>
      <div className="h-6"></div>
      <blockquote className="text-sm text-gray-200 xl:text-base">
        What’s really cool with Remix loaders is that you can do most of your
        data transformation and calculations there, like check if a list is
        empty, limit the number of records, only send specific attributes, so
        your React component just receives the data and renders it, no logic
        needed
      </blockquote>
    </figure>
  );
};

export default TestSlide;
