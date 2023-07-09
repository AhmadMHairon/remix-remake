"use client";

import React from "react";
import CheatCodePageView from "./CheatCodePageView";

const CheatBody = () => {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const invoiceRef = React.useRef<HTMLDivElement>(null);
  const noneRef = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState("none");

  return (
    <div style={{ height: "275vh" }}>
      <p
        tabIndex={0}
        className="h-[50vh] px-6 font-display text-4xl font-extrabold text-gray-100 md:mx-auto md:max-w-3xl md:text-7xl founder"
      >
        Websites usually have levels of navigation that control child views.
      </p>
      <p
        ref={rootRef}
        tabIndex={0}
        className="h-[50vh] px-6 font-display text-4xl font-extrabold text-gray-100 md:mx-auto md:max-w-3xl md:text-7xl founder"
      >
        Not only are these components pretty much always coupled to URL
        segments...
      </p>
      <p
        ref={invoiceRef}
        tabIndex={0}
        className="h-[50vh] px-6 font-display text-4xl font-extrabold text-gray-100 md:mx-auto md:max-w-3xl md:text-7xl founder"
      >
        ...they’re also the semantic boundary of data loading and code
        splitting.
      </p>
      <p
        ref={noneRef}
        aria-hidden="true"
        className="h-[50vh] px-6 font-display text-4xl font-extrabold text-gray-100 md:mx-auto md:max-w-3xl md:text-7xl founder"
      >
        Hover or tap the buttons to see how they’re all related
      </p>
      <div
        className={`pb-2 text-center text-4xl md:text-7xl transition-all ${
          active === "none" && "animate-bounce"
        }`}
        aria-hidden="true"
      >
        👇
      </div>
      <div className="text-center">
        <button
          onMouseEnter={() => {
            setActive("root");
          }}
          className="m-2 rounded-full py-2 px-6 font-mono text-[12px] font-bold leading-6 opacity-80 md:text-base  bg-blue-900 text-blue-brand"
        >
          &lt;Root&gt;
        </button>
        <button
          onMouseEnter={() => {
            setActive("sales");
          }}
          className="m-2 rounded-full py-2 px-6 font-mono text-[12px] font-bold leading-6 opacity-80 md:text-base  bg-aqua-900 text-aqua-brand"
        >
          &lt;Sales&gt;
        </button>
        <button
          onMouseEnter={() => {
            setActive("invoice");
          }}
          className="m-2 rounded-full py-2 px-6 font-mono text-[12px] font-bold leading-6 opacity-80 md:text-base  bg-yellow-900 text-yellow-brand"
        >
          &lt;Invoices&gt;
        </button>
        <button
          onMouseEnter={() => {
            setActive("invoiceID");
          }}
          className="m-2 rounded-full py-2 px-6 font-mono text-[12px] font-bold leading-6 opacity-80 md:text-base  bg-red-900 text-red-brand"
        >
          &lt;Invoice id={"{id}"}&gt;
        </button>
      </div>
      <div className="h-4"></div>
      <CheatCodePageView
        rootRef={rootRef}
        invoiceRef={invoiceRef}
        noneRef={noneRef}
        active={active}
        setActive={setActive}
      />
    </div>
  );
};

export default CheatBody;
