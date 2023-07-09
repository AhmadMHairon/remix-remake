"use client";

import React, { useEffect } from "react";
import PageHeader from "../shared/PageHeader";
import PageBody from "../shared/PageBody";

const CheatCodePageView = ({
  rootRef,
  invoiceRef,
  noneRef,
  setActive,
  active,
}: any) => {
  const pageRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (
        !pageRef.current ||
        !rootRef.current ||
        !invoiceRef.current ||
        !noneRef.current
      )
        return;
      const salesOffset =
        Math.floor(
          (rootRef.current.offsetTop + invoiceRef.current?.offsetTop) / 2
        ) + 5;
      const invoiceIDOffset =
        Math.floor(
          (invoiceRef.current.offsetTop + noneRef.current?.offsetTop) / 2
        ) + 5;
      setActive(
        pageRef.current?.offsetTop > noneRef.current?.offsetTop + 10
          ? "none"
          : pageRef.current?.offsetTop > invoiceIDOffset
          ? "invoiceID"
          : pageRef.current?.offsetTop > invoiceRef.current?.offsetTop + 10
          ? "invoice"
          : pageRef.current?.offsetTop > salesOffset
          ? "sales"
          : pageRef.current?.offsetTop > rootRef.current?.offsetTop + 10
          ? "root"
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
    <div ref={pageRef} className="sticky bottom-0 md:bottom-[-14vh]">
      <div className="relative mx-2 max-h-[75vh] select-none overflow-hidden  rounded bg-gray-700 shadow-md md:mx-4 md:rounded-lg lg:mx-auto lg:max-w-4xl">
        <PageHeader active={active} />

        <div className="px-2 pt-1 pb-2 md:px-4 md:pt-2 md:pb-4">
          <div className="relative flex overflow-hidden rounded bg-white text-gray-600 md:rounded-lg undefined">
            <PageBody active={active} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheatCodePageView;
