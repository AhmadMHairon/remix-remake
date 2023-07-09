import Image from "next/image";
import React from "react";

interface LoaderDataItem {
  title: string;
  width: number;
  marginLeft: number;
  error: boolean;
}

const GreyNode = ({ index }: { index: number }) => {
  return (
    <div
      className={`${index % 10 === 0 ? "h-[6px]" : "h-1"} w-[1px]  ${
        index % 10 === 0 ? "bg-gray-50" : "bg-gray-300"
      }`}
    />
  );
};

const Loader = ({
  completePrecentage,
  loaderData,
}: {
  completePrecentage: number;
  loaderData: LoaderDataItem[];
}) => {
  let myArray = new Array(50).fill(0);

  const LoaderRow = ({ title, width, marginLeft, error }: any) => {
    const completedState = completePrecentage > width + marginLeft;
    const errorState = error && completedState;
    const showTitle = completePrecentage > marginLeft;

    return (
      <div className="flex items-center justify-center border-b border-gray-600 last:border-b-0">
        <div className="w-16 text-[length:8px] sm:w-28 sm:text-sm ">
          {showTitle ? title : ""}&nbsp;
        </div>
        <div className="relative flex-1">
          <div
            className={`h-1 sm:h-2 ${
              errorState
                ? "bg-red-brand"
                : completedState
                ? "bg-green-brand"
                : "bg-blue-brand"
            }`}
            style={{
              width: `${
                width + marginLeft > completePrecentage
                  ? Math.max(completePrecentage - marginLeft, 0)
                  : width
              }%`,
              marginLeft: `${marginLeft}%`,
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative ">
      <div className="absolute top-0 right-0 left-16 flex justify-around sm:left-28">
        {myArray.map((_, index) => (
          <GreyNode key={index} index={index + 1} />
        ))}
      </div>
      <div className="h-4"></div>
      <div>
        {loaderData.map((data, index) => (
          <LoaderRow
            key={index}
            title={data.title}
            width={data.width}
            marginLeft={data.marginLeft}
            error={data.error}
          />
        ))}
      </div>
      <div className="absolute top-0 right-0 left-16 h-full sm:left-28">
        <div
          className="absolute top-0 h-full"
          style={{
            left: `${completePrecentage}%`,
          }}
        >
          <Image
            src="/bluePointer.svg"
            alt="pointer"
            className="-ml-1 max-w-[unset] w-2 text-blue-brand  "
            width={100}
            height={100}
          />
          <div className="relative top-[-1px] h-full w-[1px] bg-blue-brand" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
