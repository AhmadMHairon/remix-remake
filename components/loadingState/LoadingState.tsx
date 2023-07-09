"use client";

import React, { useEffect, useMemo } from "react";
import Loader from "../loader/Loader";
import PageHeader from "../shared/PageHeader";
import PageBody from "../shared/PageBody";

const loaderData1 = [
  {
    title: "document",
    width: 10,
    marginLeft: 0,
    error: false,
  },
  {
    title: "root.js",
    width: 25,
    marginLeft: 10,
    error: false,
  },
  {
    title: "user.json",
    width: 10,
    marginLeft: 35,
    error: false,
  },
  {
    title: "sales.js",
    width: 21,
    marginLeft: 35,
    error: false,
  },
  {
    title: "sales/nav.json",
    width: 8,
    marginLeft: 56,
    error: false,
  },
  {
    title: "invoices.js",
    width: 10,
    marginLeft: 56,
    error: false,
  },
  {
    title: "invoice.js",
    width: 22,
    marginLeft: 66,
    error: false,
  },
  {
    title: "invoice/{id}.json",
    width: 10,
    marginLeft: 88,
    error: false,
  },
];

const loaderData2 = [
  {
    title: "document",
    width: 30,
    marginLeft: 0,
    error: false,
  },
  {
    title: "root.js",
    width: 30,
    marginLeft: 30,
    error: false,
  },
  {
    title: "sales.js",
    width: 21,
    marginLeft: 30,
    error: false,
  },
  {
    title: "invoices.js",
    width: 8,
    marginLeft: 30,
    error: false,
  },
  {
    title: "invoice.js",
    width: 10,
    marginLeft: 30,
    error: false,
  },
  {
    title: "",
    width: 0,
    marginLeft: 0,
    error: false,
  },
  {
    title: "",
    width: 0,
    marginLeft: 0,
    error: false,
  },
  {
    title: "",
    width: 0,
    marginLeft: 0,
    error: false,
  },
];

const LoadingState = () => {
  const pageRef = React.useRef<HTMLDivElement>(null);
  const [completePrecentage, setCompletePrecentage] = React.useState(0);
  const [pageState, setPageState] = React.useState("none");

  const loaderData: { [key: string]: number } = useMemo(
    () =>
      loaderData1.reduce((obj, item) => {
        const value = item.marginLeft + item.width;
        obj[item.title] = value;
        return obj;
      }, {} as { [key: string]: number }),
    []
  );

  useEffect(() => {
    const onScroll = () => {
      if (!pageRef.current) return;
      const pageOffset = pageRef.current.offsetTop;
      const pageHeight =
        pageRef.current.getBoundingClientRect().height - window.innerHeight;
      const precentageComplete = (
        Math.min(Math.max((window.scrollY - pageOffset) / pageHeight, 0), 1) *
        100
      ).toFixed(2);

      const floatPercentage = parseFloat(precentageComplete);

      setCompletePrecentage(() => floatPercentage);

      setPageState(
        floatPercentage > loaderData["invoice/{id}.json"]
          ? "complete"
          : floatPercentage > loaderData["invoices.js"]
          ? "invoices.js"
          : floatPercentage > loaderData["sales/nav.json"]
          ? "sales/nav.json"
          : floatPercentage > loaderData["sales.js"]
          ? "sales.js"
          : floatPercentage > loaderData["root.js"]
          ? "root.js"
          : floatPercentage > loaderData["document"]
          ? "document"
          : "none"
      );
    };
    onScroll();
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <h2 className="sr-only">What about loading states?</h2>
      <div className="mx-auto max-w-6xl px-6 font-display text-[length:48px] font-extrabold leading-[48px] text-white md:px-12 md:text-[length:96px] md:leading-[96px] founder">
        Through nested routes, Remix can eliminate nearly{" "}
        <span className="text-green-brand">every loading state.</span>
      </div>
      <div className="h-[25vh]"></div>
      <p className="h-[50vh] px-6 font-display text-4xl font-extrabold text-gray-100 md:mx-auto md:max-w-3xl md:text-7xl founder">
        Most web apps fetch inside of components, creating{" "}
        <span className="text-aqua-brand">request waterfalls</span>, slower
        loads, and <span className="text-red-brand">jank.</span>
      </p>
      <p className="h-[50vh] px-6 font-display text-4xl font-extrabold text-gray-100 md:mx-auto md:max-w-3xl md:text-7xl founder">
        Remix loads data in parallel on the server and sends a fully formed HTML
        document.{" "}
        <span className="text-pink-brand">Way faster, jank free.</span>
      </p>
      <div
        style={{
          height: "400vh",
        }}
        ref={pageRef}
      >
        <div
          className="sticky top-0 flex h-screen w-full flex-col justify-center pb-4 xl:pb-56"
          aria-hidden="true"
        >
          <div className="xl:flex">
            <div className="relative xl:-right-10">
              <div className="mb-2 text-center font-display text-xl font-extrabold text-white lg:mb-6 lg:text-3xl">
                Without Remix
              </div>
              <div className="-mb-14 origin-top scale-75 sm:mb-[-18rem] sm:scale-50 xl:w-[50vw] xl:scale-75 undefined">
                <div className="relative mx-2 max-h-[75vh] select-none overflow-hidden  rounded bg-gray-700 shadow-md md:mx-4 md:rounded-lg lg:mx-auto lg:max-w-4xl">
                  <PageHeader />
                  <div className="px-2 pt-1 pb-2 md:px-4 md:pt-2 md:pb-4">
                    <div className="relative flex overflow-hidden rounded bg-white text-gray-600 md:rounded-lg h-[25vh] sm:h-[38vh]">
                      {pageState !== "none" && (
                        <PageBody pageState={pageState} />
                      )}
                    </div>

                    <div className="h-4"></div>
                    <Loader
                      completePrecentage={completePrecentage}
                      loaderData={loaderData1}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative xl:-left-10">
              <div className="mb-2 text-center font-display text-xl font-extrabold text-white lg:mb-6 lg:text-3xl">
                With Remix
              </div>
              <div className="-mb-14 origin-top scale-75 sm:mb-[-18rem] sm:scale-50 xl:w-[50vw] xl:scale-75 undefined">
                <div className="relative mx-2 max-h-[75vh] select-none overflow-hidden  rounded bg-gray-700 shadow-md md:mx-4 md:rounded-lg lg:mx-auto lg:max-w-4xl">
                  <PageHeader />
                  <div className="px-2 pt-1 pb-2 md:px-4 md:pt-2 md:pb-4">
                    <div className="relative flex overflow-hidden rounded bg-white text-gray-600 md:rounded-lg h-[25vh] sm:h-[38vh]">
                      {completePrecentage > 30 && <PageBody />}
                    </div>

                    <div className="h-4"></div>
                    <Loader
                      completePrecentage={completePrecentage}
                      loaderData={loaderData2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {completePrecentage > 0 && completePrecentage < 100 && (
            <div className="absolute bottom-0 w-full pb-4 text-center text-sm text-gray-300 md:text-base">
              {"(Keep scrolling to compare)"}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoadingState;
