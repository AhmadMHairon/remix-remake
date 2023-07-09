import { Source_Code_Pro } from "next/font/google";
import React from "react";

const source = Source_Code_Pro({ subsets: ["latin"] });

const CheatHeading = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 font-display text-[length:48px] font-extrabold leading-[48px] text-white md:px-12 md:text-[length:96px] md:leading-[96px] founder">
      <h2>
        Remix has a cheat code: <br />
        <span className="text-yellow-brand">Nested Routes.</span>
      </h2>
      <span className={` text-gray-700 ${source.className}`} aria-hidden="true">
        ↑↑↓↓←→←→BA
      </span>
    </div>
  );
};

export default CheatHeading;
