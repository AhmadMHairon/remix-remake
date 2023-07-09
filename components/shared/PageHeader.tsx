import Image from "next/image";
import React from "react";

const PageHeader = ({ active }: { active?: string }) => {
  return (
    <div className="flex items-center justify-center px-1 pt-1 pb-0 md:px-2 md:pt-2">
      <div className="relative flex w-2/3 items-center rounded-md bg-gray-600 px-2 py-1 text-gray-100 md:py-1 md:px-3">
        <span className="text-[length:10px] md:text-sm">
          <span className={active === "root" ? "text-blue-brand" : ""}>
            example.com
          </span>
          /
          <span className={active === "sales" ? "text-aqua-brand" : ""}>
            sales
          </span>
          /
          <span className={active === "invoice" ? "text-yellow-brand" : ""}>
            invoices
          </span>
          /
          <span className={active === "invoiceID" ? "text-red-brand" : ""}>
            102000
          </span>
        </span>
        <Image
          src="/reload.svg"
          alt="Remix Logo"
          className="absolute right-1 h-4 w-4 md:h-5 md:w-5"
          height={8.5}
          width={8.5}
        />
      </div>
      <div className="absolute left-1 flex gap-1 p-2 md:left-2 md:gap-2">
        <div className="h-2 w-2 rounded-full bg-gray-400 md:h-3 md:w-3"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400 md:h-3 md:w-3"></div>
        <div className="h-2 w-2 rounded-full bg-gray-400 md:h-3 md:w-3"></div>
      </div>
    </div>
  );
};

export default PageHeader;
