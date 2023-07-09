import React from "react";
import CheatHeading from "./CheatHeading";
import CheatBody from "./CheatBody";
import LoadingState from "../loadingState/LoadingState";

const CheatCode = () => {
  return (
    <section>
      <CheatHeading />
      <div className="h-[25vh]"></div>
      <CheatBody />
    </section>
  );
};

export default CheatCode;
