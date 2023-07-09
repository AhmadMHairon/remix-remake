import React, { useEffect, useRef } from "react";

const GoodByeText = ({
  opacity,
  scale,
}: {
  opacity: number;
  scale: number;
}) => {
  console.log(opacity, scale);
  return (
    <>
      <div
        className="flex h-screen w-screen items-center justify-center text-center font-display text-[length:48px] font-extrabold leading-[48px] text-white sm:text-[length:65px] sm:leading-[65px] md:text-[length:80px] md:leading-[80px] lg:text-[length:100px] lg:leading-[100px] xl:text-[length:140px] xl:leading-[140px] fixed inset-0"
        style={{ opacity: opacity, transform: `scale(${scale})` }}
      >
        Say good­bye to Spinnageddon
      </div>
      <div
        aria-hidden="true"
        className="sticky top-0 flex h-screen w-screen items-center justify-center text-center font-display text-[length:48px] font-extrabold leading-[48px] text-white sm:text-[length:65px] sm:leading-[65px] md:text-[length:80px] md:leading-[80px] lg:text-[length:100px] lg:leading-[100px] xl:text-[length:140px] xl:leading-[140px] hidden"
      >
        Say good­bye to Spinnageddon
      </div>
    </>
  );
};

export default GoodByeText;
