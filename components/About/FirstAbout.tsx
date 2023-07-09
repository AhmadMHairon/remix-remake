import React from "react";

const FirstAbout = () => {
  return (
    <section className="mx-auto max-w-5xl p-6 md:p-10">
      <h2 className="font-display text-4xl font-extrabold text-white md:text-7xl founder">
        While you were <span className="text-red-brand">waiting</span> for your
        static site to build,{" "}
        <span className="text-blue-brand">distributed web</span> infra­structure
        got really good.{" "}
        <span className="text-pink-brand">Break through the static.</span>
      </h2>
      <p className="hyphen-manual mt-2 text-lg md:pr-52 md:text-xl lg:pr-72">
        Remix is a seamless server and browser runtime that provides snappy page
        loads and instant transitions by leveraging distributed systems and
        native browser features instead of clunky static builds. Built on the
        Web Fetch API (instead of Node){" "}
        <b className="text-white">it can run anywhere</b>. It already runs
        natively on Cloudflare Workers, and of course supports serverless and
        traditional Node.js environments, so you can come as you are.
      </p>
      <div className="h-6"></div>
      <p className="hyphen-manual mt-2 text-lg md:pr-52 md:text-xl lg:pr-72">
        Page speed is only one aspect of our true goal though. We{"'"}re after{" "}
        <b className="text-white">better user experiences</b>. As you’ve pushed
        the boundaries of the web, your tools haven’t caught up to your
        appetite. <b className="text-white">Remix is ready</b> to serve you from
        the initial request to the fanciest UX your designers can think up.
        Check it out 👀
      </p>
    </section>
  );
};

export default FirstAbout;
