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
import HivemindCodingHero from "@/assets/images/HivemindCodingHero.svg";
import ArtemisBlueLogo from "@/assets/images/ArtemisBlueLogo.svg";
import ArtemisScreenImage from "@/assets/images/ArtemisScreenImage.svg";
import BackgroundArrow from "@/assets/images/BackgroundArrow.svg";
import Light6 from "@/assets/images/Light6.svg";
import Light4 from "@/assets/images/Light4.svg";
import Light3 from "@/assets/images/Light3.svg";
import Light5 from "@/assets/images/Light5.svg";
import Light7 from "@/assets/images/Light7.svg";
import Light2 from "@/assets/images/Light2.svg";
import Link from "next/link";

const DeveloperSection = () => {
  return (
    <div className="relative mx-auto ">
      <Image className="absolute -left-4 -top-56 z-[0]" src={BackgroundArrow} />
      <Image
        className="absolute -top-[460px] left-[370px] 2xl:left-[270px] xl:left-[110px] xl1:left-[70px] lg:scale-[.7] md:left-[-70px] z-[0] lg:block hidden"
        src={Light6}
      />
      <div className="pt-32 pb-16 mx-auto w-[90%]">
        <div className="sm:text-center">
          <h4
            className="text-center font-inter font-bold text-[84px] leading-[83.992px] tracking-[-6.456px] 
shadow-[0px_0px_8px_rgba(0,0,0,0.45)] 
bg-gradient-to-r from-[#19FE93] to-[#09CAFF] bg-clip-text text-transparent"
          >
            HiveMind Coding
          </h4>
          <p className="text-white text-center font-inter font-medium text-[32px] leading-[61.568px] tracking-[-0.684px]">
            Boot up an army of AI coders to write enterprise-grade software for
            you.
          </p>
        </div>
        <Image
          src={HivemindCodingHero}
          alt="HivemindCodingHero"
          className="w-full scale-110 transform-gpu mt-28"
        />
      </div>
      <div className="relative lg:w-[100%] w-[100%] mx-auto">
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
        <div className="md:pt-10 pb-16 mx-auto relative z-10 md:w-[85%] sm:w-[85%] w-[85%] mt-36">
          <div className="sm:text-center">
            <h4
              className="text-center font-inter font-semibold text-[84px] leading-[88.931px] tracking-[-2.113px] 
shadow-[2.461px_4.923px_9.846px_rgba(0,0,0,0.15)] 
bg-gradient-to-r from-[#19FE93] to-[#09CAFF] bg-clip-text text-transparent"
            >
              Unlock Unparalleled{" "}
            </h4>
            <h3 className="text-white font-inter font-semibold text-[84px] leading-[88.931px] tracking-[-2.113px]">
              Developer Productivity{" "}
            </h3>
            <p className="text-white text-center font-inter font-semibold text-[32px] leading-[45.6px] tracking-[-0.684px] mt-20 mb-36">
              Traditional Processes Are History – <br />
              Streamline Your Workflow and Stop the Resource Drain!
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-2 mx-auto gap-x-24 gap-y-10 mb-10 w-[100%]">
            <Image
              className="absolute top-[500px] -left-0 lg:block hidden"
              src={Light7}
            />
            <div>
              <h4 className="text-[#09CAFF] font-inter font-semibold text-[64px] leading-[53.152px] tracking-[-1.28px] capitalize">
                Endpoint Creation
              </h4>
              <p className="text-white font-inter font-normal text-[32px] leading-[45.6px] tracking-[-0.684px] pt-4">
                Integration-ready  endpoints to connect with {" "}
                frontend
              </p>
            </div>
            <div>
              <h4 className="text-[#09CAFF] font-inter font-semibold text-[64px] leading-[53.152px] tracking-[-1.28px] capitalize">
                Database Building
              </h4>
              <p className="text-white font-inter font-normal text-[32px] leading-[45.6px] tracking-[-0.684px] pt-4">
                Scalable & secure  databases for enterprises
              </p>
            </div>
            <div>
              <h4 className="text-[#09CAFF] font-inter font-semibold text-[64px] leading-[53.152px] tracking-[-1.28px] capitalize">
                Task Executions
              </h4>
              <p className="text-white font-inter font-normal text-[32px] leading-[45.6px] tracking-[-0.684px] pt-4">
                Ability to breakdown and  execute all the tasks in your{" "}
                 project
              </p>
            </div>
            <div>
              <h4 className="text-[#09CAFF] font-inter font-semibold text-[64px] leading-[53.152px] tracking-[-1.28px] capitalize">
                Schematics Generation
              </h4>
              <p className="text-white font-inter font-normal text-[32px] leading-[45.6px] tracking-[-0.684px] pt-4">
                Visualize code logic with  flowcharts
              </p>
            </div>
            <div>
              <h4 className="text-[#09CAFF] font-inter font-semibold text-[64px] leading-[53.152px] tracking-[-1.28px] capitalize">
                Natural Language Edits
              </h4>
              <p className="text-white font-inter font-normal text-[32px] leading-[45.6px] tracking-[-0.684px] pt-4">
                Make changes to your  code in simple english
              </p>
            </div>
            <div>
              <h4 className="text-[#09CAFF] font-inter font-semibold text-[64px] leading-[53.152px] tracking-[-1.28px] capitalize">
                Auto-Documentation
              </h4>
              <p className="text-white font-inter font-normal text-[32px] leading-[45.6px] tracking-[-0.684px] pt-4">
                Code explainations &  documentation provided {" "}
                automatically
              </p>
            </div>
          </div>
          <div className="mt-72 mx-auto">
            <div className="flex justify-between items-center w-full mb-16">
              <p className="text-white font-inter font-medium text-[32px] leading-[53.6px] tracking-[-0.684px]"
              >
                Your Ai+Human teams's lead engineer for 
                unparalleled <br />developer productivity
              </p>
              <Image className="w-[404.875px]" src={ArtemisBlueLogo} />
            </div>
            <Image
              src={ArtemisScreenImage}
              alt="ArtemisScreenImage"
              className="w-full transform-gpu"
            />
          </div>
          {/* <Image src={developer} alt="developer" className="w-full" /> */}
          {/* <div className="grid grid-cols-1 sm:w-4/5 lg:w-full mx-auto lg:grid-cols-2 gap-10 sm:gap-20 mt-20">
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
          </div> */}
          {/* <div className="flex items-center gap-3 justify-center py-40">
            <p className="text-white font-semibold text-[13px] sm:text-[19px] xl1::text-lg 2xl:text-xl">
              Start using these Features
            </p>{" "}
            <Link
              href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
              target="_blank"
              className="bg-[#046EC5] bg-gradient-to-r from-[#6EBAF8] to-[#046EC5] hover:to-[#6EBAF8] text-xs xl1::text-base 2xl:text-lg flex items-center min-h-11 leading-none text-white rounded-full font-semibold py-2.5 px-8"
            >
              <span>Book a Demo</span>
            </Link>
          </div> */}
          {/* <div>
            <div className="flex items-center sm:justify-center w-full sm:w-3/4 sm:mx-auto lg:w-full gap-2 mb-4 sm:mb-0">
              <Image
                src={artemis}
                alt="artemis"
                className="w-7 xl1:w-9 2xl:w-[45px]"
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
          </div> */}
          {/* <div className="mt-16">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;
