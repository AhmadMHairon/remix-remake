"use client";

import React, { useEffect, useRef } from "react";
import GoodByeText from "./GoodByeText";
import Image from "next/image";

const loadingClassNames = [
  "11 absolute bottom-[25vh] left-[8vw] h-[8vh] w-[8vh] md:h-[8vw] md:w-[8vw]",
  "16 absolute bottom-[23vh] right-[32vw] h-[5vh] w-[5vh] md:h-[5vw] md:w-[5vw]",
  "4 absolute top-[24vh] left-[-4vw] h-[13vh] w-[13vh] md:top-[16vh] md:h-[13vw] md:w-[13vw]",
  "17 absolute bottom-[-5vh] right-[18vw] h-[13vh] w-[13vh] md:bottom-[-4vh] md:h-[13vw] md:w-[13vw]",
  "13 absolute bottom-[-3vh] left-[15vw] h-[13vh] w-[13vh] md:left-[20vw] md:h-[13vw] md:w-[13vw]",
  "7 absolute top-[20vh] right-[-2vw] h-[13vh] w-[13vh] md:top-[12vh] md:h-[13vw] md:w-[13vw]",
  "14 absolute bottom-[16vh] left-[35vw] h-[5vh] w-[5vh] md:h-[5vw] md:w-[5vw]",
  "20 absolute bottom-[10vh] right-[-5vw] h-[13vh] w-[13vh] md:bottom-[3vh] md:h-[13vw] md:w-[13vw]",
  "10 absolute bottom-[37vh] left-[3vw] h-[5vh] w-[5vh] md:bottom-[42vh] md:h-[5vw] md:w-[5vw]",
  "9 absolute top-[38vh] right-[3vw] h-[5vh] w-[5vh] md:top-[50vh] md:h-[5vw] md:w-[5vw]",
  "19 absolute bottom-[36vh] right-[10vw] h-[5vh] w-[5vh] md:bottom-[9vh] md:h-[5vw] md:w-[5vw]",
  "15 absolute bottom-[30vh] right-[40vw] h-[8vh] w-[8vh] md:bottom-[2vh] md:h-[8vw] md:w-[8vw]",
  "18 absolute bottom-[25vh] right-[7vw] h-[8vh] w-[8vh] md:h-[8vw] md:w-[8vw]",
  "6 absolute top-[8vh] right-[22vw] h-[8vh] w-[8vh] md:h-[8vw] md:w-[8vw]",
  "3 absolute top-[1vh] right-[10vw] h-[5vh] w-[5vh] md:h-[5vw] md:w-[5vw]",
  "12 absolute bottom-[12vh] left-[2vw] h-[8vh] w-[8vh] md:bottom-[2vh] md:h-[8vw] md:w-[8vw]",
  "8 absolute top-[35vh] left-[48vw] h-[5vh] w-[5vh] md:top-[25vh] md:h-[5vw] md:w-[5vw]",
  "5 absolute top-[20vh] left-[35vw] h-[8vh] w-[8vh] md:top-[12vh] md:h-[8vw] md:w-[8vw]",
  "1 absolute top-[-5vh] left-[4vw] h-[13vh] w-[13vh] md:left-[13vw] md:h-[13vw] md:w-[13vw]",
  "2 absolute top-[-1vh] right-[40vw] h-[8vh] w-[8vh] md:h-[8vw] md:w-[8vw]",
];

const GoodByeSection = () => {
  const goodByeRef = useRef<HTMLDivElement>(null);
  const [goodByeOpacityOpacity, setGoodByeOpacityOpacity] = React.useState(0);
  const [goodByeScale, setGoodByeScale] = React.useState(0);
  const [waveScale, setWaveScale] = React.useState(1);
  const [removeIcons, setRemoveIcons] = React.useState(false);
  const [loaderAmount, setLoaderAmount] = React.useState(0);
  const [showHands, setShowHands] = React.useState(false);

  useEffect(() => {
    const onScroll = () => {
      const multipler = 6.25;
      if (goodByeRef.current) {
        const startOffset = goodByeRef.current?.offsetTop - window.innerHeight;
        const endOffstateValue = startOffset + goodByeRef.current?.offsetHeight;
        const endAddingLoadingState = (startOffset + endOffstateValue) / 2;
        setLoaderAmount(
          Math.max(window.scrollY - startOffset, 0) /
            Math.floor((endAddingLoadingState - startOffset) / 20)
        );

        const goodByeEndHeight = window.innerHeight * 1.2;

        const endGoodByeOffset = startOffset + goodByeEndHeight;

        const loadingToEndHeightMax = Math.pow(
          endOffstateValue - endGoodByeOffset,
          multipler
        );
        setShowHands(window.scrollY > endGoodByeOffset);
        setRemoveIcons(window.scrollY > endOffstateValue);

        const goodByeMaxValue = Math.pow(
          endGoodByeOffset - startOffset,
          multipler
        );
        setGoodByeOpacityOpacity(
          Math.pow(Math.max(window.scrollY - startOffset, 0), multipler) /
            goodByeMaxValue
        );
        // setWaveScale(
        //   Math.min(
        //     Math.pow(Math.max(endOffstateValue - window.scrollY, 0), 2) /
        //       loadingToEndHeightMax,
        //     1
        //   )
        // );

        console.log("loadingToEndHeightMax", loadingToEndHeightMax);
        console.log(
          "temp",
          Math.pow(Math.max(window.scrollY - endGoodByeOffset, 0), multipler) /
            loadingToEndHeightMax
        );
        setWaveScale(
          1 -
            Math.pow(
              Math.max(window.scrollY - endGoodByeOffset, 0),
              multipler
            ) /
              loadingToEndHeightMax
        );
        setGoodByeScale(
          10 -
            Math.min(
              (Math.max(window.scrollY - startOffset, 0) * 9) /
                goodByeEndHeight,
              9
            )
        );
      }
    };
    onScroll();
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="fixed inset-0 overflow-hidden">
        {loadingClassNames
          .filter((_, i) => {
            if (removeIcons) return;
            return i < loaderAmount;
          })
          .map((className, i) => (
            <Image
              key={i}
              src={`${showHands ? "/wave.png" : "/loading.gif"}`}
              alt=""
              width={100}
              height={100}
              className={className}
              style={{
                transform: `scale(${waveScale})`,
                opacity: waveScale,
              }}
            />
          ))}
      </div>

      <div className="h-[150vh]" ref={goodByeRef}>
        <GoodByeText opacity={goodByeOpacityOpacity} scale={goodByeScale} />
      </div>
    </>
  );
};

export default GoodByeSection;
