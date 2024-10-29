import Image from "next/image";
import React from "react";
import mvp from "@/assets/images/mvp-banner.png";
import developer from "@/assets/images/developer-section.png";
import circle from "@/assets/images/gradient-cicle.png";
import circleLeft from "@/assets/images/circle-left.png";
import circleRight from "@/assets/images/circle-right.png";
import subtractQray from "@/assets/images/Integrated.png";
import monitor from "@/assets/images/monitor.png";
import monitorLeft from "@/assets/images/monitor-left.png";
import productivity from "@/assets/images/productivity.png";
import productivityLeft from "@/assets/images/productivity-left.png";
import artemis from "@/assets/images/artemis.png";
import creation from "@/assets/images/creation.png";
import creationLeft from "@/assets/images/creation-left.png";
import Link from "next/link";

const DeveloperSection = () => {
  return (
    <div>
      <div className="pt-32 pb-16 w-[80%] mx-auto">
        <div className="sm:text-center">
          <h4 className="tracking-tight leading-snug lg:leading-none mx-auto font-semibold text-[29px] sm:text-[45px] xl1::text-[48px] 2xl:text-[52px] text-white">
            From{" "}
            <span className="bg-gradient-to-r from-[#09CAFF] to-[#19FE93] inline-block text-transparent bg-clip-text">
              concept to MVP
            </span>{" "}
            in minutes- <br /> speed up your product development effortlessly!
          </h4>
          <p className="text-white text-base sm:text-[18px] xl1::text-[19px] leading-normal 2xl:text-[21px] mt-10 sm:w-4/5 lg:w-2/4 mx-auto">
            Get a fully functional MVP without writing a single line of code.
            Artus makes product development faster, simpler, and effortless.
          </p>
        </div>
        <Image src={mvp} alt="mvp" className="w-full scale-110 transform-gpu" />
        <div className="grid grid-cols-1 sm:w-4/5 lg:w-full mx-auto lg:grid-cols-2 gap-10 sm:gap-20">
          <div className="flex items-start gap-3">
            <Image
              src={subtractQray}
              alt="subtractQray"
              className="w-[31px] sm:w-[53px] h-auto"
            />
            <div>
              <h2 className="text-white font-bold text-[17px] sm:text-[29px] xl1::text-[29px] 2xl:text-[34px]">
                Codebase Preview
              </h2>
              <p className="text-white text-[12px] sm:text-[21px] xl1::text-[21px] mt-3 2xl:text-[22px]">
                Preview the entire codebase on the app itself, keeping your
                project at your fingertips.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Image
              src={subtractQray}
              alt="subtractQray"
              className="w-[31px] sm:w-[53px] h-auto"
            />
            <div>
              <h2 className="text-white font-bold text-[17px] sm:text-[29px] xl1::text-[29px] 2xl:text-[34px]">
                Guide
              </h2>
              <p className="text-white text-[12px] sm:text-[21px] xl1::text-[21px] mt-3 2xl:text-[22px]">
                Step-by-step instructions guide you through each stage of
                launching and managing your MVP.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center pb-16 pt-40">
          <p className="text-white font-semibold text-[13px] sm:text-[19px] xl1::text-lg 2xl:text-xl">
            Start using these Features
          </p>{" "}
          <Link
            href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
            target="_blank"
            className="bg-[#046EC5] text-xs xl1::text-base 2xl:text-lg border flex items-center min-h-11 leading-none border-[#046EC5] text-white rounded-full font-semibold py-2.5 px-8"
          >
            <span>Book a Demo</span>
          </Link>
        </div>
      </div>
      <div className="relative">
        <Image
          src={circleLeft}
          alt="circle"
          className="block lg:hidden absolute left-0 top-0"
        />
        <Image
          src={circle}
          alt="circle"
          className="hidden lg:block absolute left-0 top-0"
        />
        <Image
          src={circleRight}
          alt="circle"
          className="block lg:hidden absolute right-0 top-0"
        />
        <Image
          src={circle}
          alt="circle"
          className="hidden lg:block absolute right-0 top-0"
        />
        <Image
          src={circle}
          alt="circle"
          className="w-auto md:w-[1000px] absolute left-2/4 -translate-x-1/2 bottom-[37rem]"
        />
        <Image
          src={circle}
          alt="circle"
          className="absolute left-0 top-1/2 -translate-y-1/2"
        />
        <Image
          src={circle}
          alt="circle"
          className="absolute left-2/4 -translate-x-1/2 bottom-0"
        />
        <div className="md:pt-10 pb-16 w-[85%] mx-auto relative z-10">
          <div className="sm:text-center">
            <h4 className="tracking-tight leading-none mx-auto font-semibold text-[29px] sm:text-[45px] xl1::text-[48px] 2xl:text-[52px] bg-gradient-to-r from-[#09CAFF] to-[#19FE93] inline-block text-transparent bg-clip-text">
              Unlock Unparalleled{" "}
            </h4>
            <h3 className="tracking-tight leading-none font-semibold text-[29px] 2xl:text-[52px] text-white">
              Developer Productivity{" "}
            </h3>
            <p className="text-white text-base sm:text-[18px] xl1::text-[19px] 2xl:text-[21px] mt-10 mb-16 leading-normal">
              Traditional processes are history – <br />
              Streamline your workflow and stop the resource drain!
            </p>
          </div>
          <Image src={developer} alt="developer" className="w-full" />
          <div className="grid grid-cols-1 sm:w-4/5 lg:w-full mx-auto lg:grid-cols-2 gap-10 sm:gap-20 mt-20">
            <div className="flex items-start gap-3">
              <Image
                src={subtractQray}
                alt="subtractQray"
                className="w-[31px] sm:w-[53px] h-auto"
              />
              <div>
                <h2 className="text-white font-bold text-[17px] sm:text-[29px] xl1::text-[29px] 2xl:text-[34px]">
                  AI Auto-Codes for Every Task
                </h2>
                <p className="text-white text-[12px] sm:text-[21px] xl1::text-[21px] mt-3 2xl:text-[22px]">
                  AI workers execute all tasks. No prompts, just instant code!
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Image
                src={subtractQray}
                alt="subtractQray"
                className="w-[31px] sm:w-[53px] h-auto"
              />
              <div>
                <h2 className="text-white font-bold text-[17px] sm:text-[29px] xl1::text-[29px] 2xl:text-[34px]">
                  Breakdown Tasks Automatically
                </h2>
                <p className="text-white text-[12px] sm:text-[21px] xl1::text-[21px] mt-3 2xl:text-[22px]">
                  Why Micromanage? let AI break down tasks into detailed steps,
                  with just a click!
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center py-40">
            <p className="text-white font-semibold text-[13px] sm:text-[19px] xl1::text-lg 2xl:text-xl">
              Start using these Features
            </p>{" "}
            <Link
              href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
              target="_blank"
              className="bg-[#046EC5] text-xs xl1::text-base 2xl:text-lg border flex items-center min-h-11 leading-none border-[#046EC5] text-white rounded-full font-semibold py-2.5 px-8"
            >
              <span>Book a Demo</span>
            </Link>
          </div>
          <div>
            <div className="flex items-center justify-center w-full sm:w-3/4 sm:mx-auto lg:w-full gap-2">
              <Image
                src={artemis}
                alt="artemis"
                className="xl1:w-9 2xl:w-[45px]"
              />
              <h2 className="tracking-tight leading-none sm:text-center text-white font-semibold text-[24px] sm:text-[33px] xl1::text-[33px] 2xl:text-[48px]">
                <span className="bg-gradient-to-r from-[#09CAFF] to-[#19FE93] inline-block text-transparent bg-clip-text">
                  Artemis by Artus:
                </span>{" "}
                <br />
              </h2>
            </div>
            <h2 className="tracking-tight sm:text-center text-white font-semibold text-[24px] sm:text-[33px] xl1::text-[33px] 2xl:text-[42px]">
              Overseeing Success in Every Line of Code
            </h2>

            <p className="sm:w-3/4 mx-auto lg:w-full sm:text-center text-white text-[15px] sm:text-[21px] xl1::text-[21px] 2xl:text-[22px] mt-10">
              With Artemis, Developers Are Never Alone: Comprehensive Support at
              Every Step
            </p>
          </div>
          <div className="mt-16">
            <div>
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-5">
                <div className="w-full lg:w-[55%]">
                  <Image
                    src={monitorLeft}
                    alt="monitorLeft"
                    className="w-full"
                  />
                </div>
                <div className="w-full sm:w-3/4 lg:w-[45%] flex pl-10 items-start gap-4">
                  <Image
                    src={monitor}
                    alt="monitor"
                    className="w-[29px] sm:w-[50px] mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-[20px] xl1::text-[31px] 2xl:text-[36px] text-[#09CAFF]">
                      Monitors your progress,
                    </h4>
                    <p className="text-[14px] xl1:text-[21px] 2xl:text-[22px] text-white font-semibold">
                      so you always know where you left off.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-5 my-10 sm:my-24">
                <div className="sm:w-3/4 lg:w-[45%] flex items-start gap-4">
                  <Image
                    src={productivity}
                    alt="productivity"
                    className="w-[26px] sm:w-[38px] h-auto mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-[20px] xl1::text-[31px] 2xl:text-[33px] text-[#09CAFF]">
                      Boosts your productivity
                    </h4>
                    <p className="text-[14px] xl1:text-[21px] 2xl:text-[22px] text-white font-semibold">
                      by clarifying your tasks, ensuring flawless execution and
                      keeping you perfectly in sync.
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[55%]">
                  <Image
                    src={productivityLeft}
                    alt="productivityLeft"
                    className="w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-5 my-10 sm:my-24">
                <div className="w-full lg:w-[55%]">
                  <Image
                    src={creationLeft}
                    alt="creationLeft"
                    className="w-full"
                  />
                </div>
                <div className="sm:w-3/4 lg:w-[45%] flex items-start gap-4">
                  <Image
                    src={creation}
                    alt="creation"
                    className="w-[28px] sm:w-[38px] h-auto mt-1"
                  />
                  <div>
                    <h4 className="font-semibold text-[20px] xl1::text-[31px] 2xl:text-[33px] text-[#09CAFF]">
                      Rapid creation of codebases
                    </h4>
                    <p className="text-[14px] xl1:text-[21px] 2xl:text-[22px] text-white font-semibold">
                      by consolidating your code from multiple tasks into a
                      modular unit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;
