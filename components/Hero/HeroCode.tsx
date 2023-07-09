import Image from "next/image";
import React from "react";
import { Source_Code_Pro } from "next/font/google";

const source = Source_Code_Pro({ subsets: ["latin"] });

const HeroCode = () => {
  return (
    <div className="relative -mx-6 mt-6 overflow-hidden p-4 sm:-mx-8 sm:p-8 md:p-10 lg:mt-0 lg:h-[51rem] lg:w-1/2 lg:rounded-l-2xl lg:p-8">
      <Image
        className="absolute top-0 left-0 h-full xl:rounded-3xl max-w-[unset] !w-[unset] object-contain"
        src="snippetBG.svg"
        alt="BG"
        fill={true}
        priority
      />
      {/* </div> */}
      <div className="relative overflow-auto bg-gray-800 p-3 text-sm sm:rounded-lg sm:text-base md:max-w-full lg:max-w-max xl:rounded-xl xl:p-4 hidden sm:block">
        <div>
          <pre
            className={`text-code-gray `}
            data-line-numbers="true"
            data-lang="tsx"
          >
            <code className={`codeblock-code ${source.className}`}>
              {/* i want the upper span class to add spaces between other spans */}
              <span className="codeblock-line" data-line-number="1">
                <span className="text-code-purple">export async</span>
                <span className="text-code-blue">function loader</span>
                {"({ "}
                <span className="text-code-lightblue">request</span>
                {"}) {"}
              </span>
              <span className="codeblock-line" data-line-number="2">
                {"  "}
                <span className="text-code-purple">return</span>
                <span className="text-code-blue noSpace">getProjects</span>
                {"()"};
              </span>
              <span className="codeblock-line" data-line-number="3">
                {"}"}
              </span>
              <span className="codeblock-line" data-line-number="4"></span>
              <span className="codeblock-line" data-line-number="5">
                <span className="text-code-purple">export</span>
                <span className="text-code-purple">async</span>
                <span className="text-code-blue">function</span>
                <span className="text-code-blue">action</span>
                {"({ "}
                <span className="text-code-lightblue">request</span>
                {"}) {"}
              </span>
              <span className="codeblock-line" data-line-number="6">
                {"  "}
                <span className="text-code-yellow">const</span>
                <span className="text-code-lightblue">form</span>
                <span className="text-code-purple">=</span>
                <span className="text-code-purple">await</span>
                <span className="text-code-lightblue noSpace">request</span>.
                <span className="text-code-blue noSpace">formData</span>
                {"()"};
              </span>
              <span className="codeblock-line" data-line-number="7">
                {"  "}
                <span className="text-code-purple">return</span>
                <span className="text-code-blue">createProject</span>
                {"({ title: "}
                <span className="text-code-lightblue noSpace">form</span>.
                <span className="text-code-blue">get</span>
                {'("'}
                <span className="text-code-green noSpace">title</span>
                {'") });'}
              </span>
              <span className="codeblock-line" data-line-number="8">
                {"}"}
              </span>
              <span className="codeblock-line" data-line-number="9"></span>
              <span className="codeblock-line" data-line-number="10">
                <span className="text-code-purple">export</span>
                <span className="text-code-purple">default</span>
                <span className="text-code-blue">function</span>
                <span className="text-code-blue noSpace">Projects</span>
                {"() {"}
              </span>
              <span className="codeblock-line" data-line-number="11">
                {"  "}
                <span className="text-code-yellow">const</span>
                <span className="text-code-lightblue">projects</span>
                <span className="text-code-purple">=</span>
                <span className="text-code-blue noSpace">useLoaderData</span>
                {"();"}
              </span>
              <span className="codeblock-line" data-line-number="12">
                {"  "}
                <span className="text-code-yellow noSpace">const</span> {"{ "}
                <span className="text-code-lightblue">state</span>
                {"} "}
                <span className="text-code-purple">=</span>
                <span className="text-code-blue noSpace">useNavigation</span>
                {"()"};
              </span>
              <span className="codeblock-line" data-line-number="13">
                {"  "}
                <span className="text-code-yellow">const</span>
                <span className="text-code-lightblue">busy</span>
                <span className="text-code-purple">=</span>
                <span className="text-code-lightblue">state</span>
                <span className="text-code-purple noSpace">===</span> {'"'}
                <span className="text-code-green noSpace">submitting</span>
                {'";'}
              </span>
              <span className="codeblock-line" data-line-number="14"></span>
              <span className="codeblock-line" data-line-number="15">
                {"  "}
                <span className="text-code-purple ">return</span>
                {"("}
              </span>
              <span className="codeblock-line" data-line-number="16">
                {"    "}
                {"<"}
                <span className="text-code-lightblue noSpace">div</span>
                {">"}
              </span>
              <span className="codeblock-line" data-line-number="17">
                {"      "}
                <span className="text-code-lightgray noSpace">{"{"}</span>
                <span className="text-code-lightblue noSpace">projects</span>.
                <span className="text-code-blue noSpace">map</span>
                {"(("}
                <span className="text-code-lightblue noSpace">project</span>
                {") "}
                <span className="text-code-blue noSpace">{"=>"}</span> {"("}
              </span>
              <span className="codeblock-line" data-line-number="18">
                {"        "}
                {"<"}
                <span className="text-code-yellow">Link</span>
                <span className="text-code-blue noSpace">to</span>
                <span className="text-code-purple noSpace">=</span>
                <span className="text-code-lightgray noSpace">{"{"}</span>
                <span className="text-code-lightblue noSpace">project</span>.
                <span className="text-code-lightblue noSpace">slug</span>
                <span className="text-code-lightgray noSpace">{"}"}</span>
                {">"}
                <span className="text-code-lightgray noSpace">{"{"}</span>
                <span className="text-code-lightblue noSpace">project</span>.
                <span className="text-code-lightblue noSpace">title</span>
                <span className="text-code-lightgray noSpace">{"}"}</span>
                {"</"}
                <span className="text-code-yellow noSpace">Link</span>
                {">"}
              </span>
              <span className="codeblock-line" data-line-number="19">
                {"      "}
                {"))}"}
              </span>
              <span className="codeblock-line" data-line-number="20"></span>
              <span className="codeblock-line" data-line-number="21">
                {"      "}
                {"<"}
                <span className="text-code-yellow">Form</span>
                <span className="text-code-blue noSpace">method</span>
                <span className="text-code-purple noSpace">=</span>
                {'"'}
                <span className="text-code-green noSpace">post</span>
                {'">'}
              </span>
              <span className="codeblock-line" data-line-number="22">
                {"        "}

                {"<"}
                <span className="text-code-lightblue">input</span>
                <span className="text-code-blue">name</span>
                <span className="text-code-purple">=</span>
                {'"'}
                <span className="text-code-green noSpace">title</span>
                {'"/>'}
              </span>
              <span className="codeblock-line" data-line-number="23">
                {"        "}
                {"<"}
                <span className="text-code-lightblue">button</span>
                <span className="text-code-blue noSpace">type</span>
                <span className="text-code-purple noSpace">=</span>
                {'"'}
                <span className="text-code-green noSpace">submit</span>
                {'"'} <span className="text-code-blue noSpace">disabled</span>
                <span className="text-code-purple noSpace">=</span>
                <span className="text-code-lightgray noSpace">{"{"}</span>
                <span className="text-code-lightblue noSpace">busy</span>
                <span className="text-code-lightgray noSpace">{"}"}</span>
                {">"}
              </span>
              <span className="codeblock-line" data-line-number="24">
                {"          "}
                <span className="text-code-lightgray noSpace">{"{"}</span>
                <span className="text-code-lightblue ">busy</span>
                <span className="text-code-purple noSpace">?</span> {'"'}
                <span className="text-code-green noSpace">Creating...</span>
                {'"'} <span className="text-code-purple noSpace">:</span>
                {' "'}
                <span className="text-code-green noSpace">
                  Create New Project
                </span>
                {'"'}
                <span className="text-code-lightgray">{"}"}</span>
              </span>
              <span className="codeblock-line" data-line-number="25">
                {"        "}
                {"<"}/
                <span className="text-code-lightblue noSpace">button</span>
                {">"}
              </span>
              <span className="codeblock-line" data-line-number="26">
                {"      "}
                {"<"}/<span className="text-code-yellow noSpace">Form</span>
                {">"}
              </span>
              <span className="codeblock-line" data-line-number="27">
                {"     "}
                {"<"}/<span className="text-code-lightblue noSpace">div</span>
                {">"}
              </span>
              <span className="codeblock-line" data-line-number="28">
                {"   "}

                {");"}
              </span>
              <span className="codeblock-line" data-line-number="29">
                {"}"}
              </span>
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default HeroCode;
