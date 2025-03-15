import React from "react";
import icon from "@/assets/images/Icon.png";
import coder from "@/assets/images/coder.png";
import researcher from "@/assets/images/researcher.png";
import HMCoding from "@/assets/images/HMCoding.svg";
import HMPlanning from "@/assets/images/HMPlanning.svg";
import athena from "@/assets/images/athena.png";
import apollo from "@/assets/images/apollo.png";
import artemis from "@/assets/images/artemis.png";
import devStages from "@/assets/images/dev-stages.png";
import Image from "next/image";
import Stars from "@/assets/images/Stars.svg";
import ChatAgents from "@/assets/images/ChatAgents.svg";
import Light1 from "@/assets/images/Light1.png";
import AthenaText from "@/assets/images/AthenaText.svg";
import ApolloText from "@/assets/images/ApolloText.svg";
import ArtemisText from "@/assets/images/ArtemisText.svg";
import Link from "next/link";

const ProductTeam = () => {
  return (
    <div className="relative bgAgent" id="content">
      <div className="my-16 mt-40">
        <p className="font-inter font-semibold text-[40px] leading-[44.54px] tracking-[-1.71px] text-center flex items-center justify-center text-[#D8D8D8]">
          Introducing
        </p>
        <h2
          className="font-inter font-semibold text-[80px] leading-[99.54px] tracking-[-5.41px] 
             text-center flex items-center justify-center 
             sm:text-[47px] xl:text-[47px] 2xl:text-[56px] 
             bg-gradient-to-r from-[#09CAFF] via-[#61FFFF] to-[#19FE93] 
             bg-clip-text text-transparent"
        >
          HiveMind Technology
        </h2>
      </div>
      <div className="relative w-11/12 sm:w-[70%] lg:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Image className="absolute -top-[400px] scale-[.7]" src={Light1} />
        <div className="relative z-10 bg-[#0B121E8C] rounded-2xl p-6">
          <div className="flex items-center gap-3 justify-center my-10 sm:my-10">
            <span className="font-inter font-semibold text-[54.36px] tracking-[-3.79px] text-center bg-gradient-to-r from-[#09CAFF] via-[#19FE93] to-[#19FE93] bg-clip-text text-transparent">
              HiveMind Coding
            </span>
          </div>
          <p className="font-inter font-normal text-[27.18px] leading-[39.67px] tracking-[-0.58px] text-center flex items-center justify-center text-[#FFFFFF]">
            AI Coders execute hundereds of <br /> tasks fully synchronized with
            the plan
          </p>
          <Image
            className="xxl:w-[460px] xl1:w-[400px] xl:w-[400px] w-[300px] mx-auto mt-28"
            src={HMCoding}
            alt="HMCoding"
          />
        </div>
        <div className="relative z-10 bg-[#0B121E8C] rounded-2xl p-6 pb-4 ">
          <div className="flex items-center gap-3 justify-center my-10">
            <span className="font-inter font-semibold text-[54.36px]  tracking-[-3.79px] text-center bg-gradient-to-r from-[#09CAFF] via-[#19FE93] to-[#19FE93] bg-clip-text text-transparent">
              HiveMind Planning
            </span>
          </div>
          <p className="font-inter font-normal text-[27.18px] leading-[39.67px] tracking-[-0.58px] text-center flex items-center justify-center text-[#FFFFFF]">
            A team of specialized AI Agents <br />
            conduct product R&D
          </p>
          <Image
            className="xxl:w-[460px] xl1:w-[400px] xl:w-[400px] w-[300px] mx-auto mt-28"
            src={HMPlanning}
            alt="HMPlanning"
          />
        </div>
      </div>
      <div className="px-5 sm:px-0 sm:w-[90%] mx-auto mt-40">
        <h2 className="font-inter font-semibold text-[64px] leading-[106.82px] tracking-[-4.46px] text-center flex flex-col items-center justify-center text-[#FFFFFF]">
          <span>The next generation of </span>
          <Image src={ChatAgents} />
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-10">
          <div className="flex flex-col gap-9 items-center p-5">
            <Image
              src={athena}
              alt="athena"
              className="w-[62px] 2xl:w-[80px] h-auto "
            />
            <Image src={AthenaText} />
            <p className="font-inter font-normal text-4xl leading-[52.4px] tracking-normal text-center text-[#ffffff]">
              A well-informed brainstorming assistant to perfect product
              decision-making.
            </p>
          </div>
          <div className="flex flex-col gap-9 items-center p-5">
            <Image
              src={apollo}
              alt="apollo"
              className="w-[62px] 2xl:w-[80px] h-auto"
            />
            <Image src={ApolloText} />
            <p className="font-inter font-normal text-4xl leading-[52.4px] tracking-normal text-center text-[#ffffff]">
              The ultimate product manager's co-pilot, helping in managing and
              delegating tasks effectively.
            </p>
          </div>
          <div className="flex flex-col gap-9 items-center p-5">
            <Image
              src={artemis}
              alt="artemis"
              className="w-[62px] 2xl:w-[80px] h-auto"
            />
            <Image src={ArtemisText} />
            <p className="font-inter font-normal text-4xl leading-[52.4px] tracking-normal text-center text-[#ffffff]">
              A senior developer for your team—keeping everyone on track, up to
              speed, and aligned.
            </p>
          </div>
        </div>
        <div className="flex gap-3 px-5 sm:px-0 sm:justify-center mt-24">
          <Link
            href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
            target="_blank"
            className="flex items-center justify-center gap-2 px-8 py-4 
             rounded-[32px] bg-gradient-to-r from-[#09CAFF] to-[#19FE93] 
             font-inter text-black text-[23.6px] font-semibold leading-[100%] tracking-[-0.04em] 
             sm:text-sm xl1:text-base 2xl:text-lg hover:opacity-90 transition-all"
          >
            <span>Book a Demo</span>
          </Link>
        </div>
      </div>
      {/* <div className="relative text-center pt-16 pb-10">
        <h4 className="px-5 tracking-tight [text-shadow:_2px_4px_8px_#00000026] sm:px-0 sm:w-[60%] lg:w-auto font-semibold text-[35px] sm:text-[44px] xl:text-[44px] 2xl:text-[52px] leading-tight bg-gradient-to-r from-[#09CAFF] to-[#19FE93] inline-block text-transparent bg-clip-text mb-8">
          Product Planning with HiveMind
        </h4>
        <p className="w-[85%] lg:w-auto mx-auto text-white text-sm sm:text-[18px] xl:text-[18px] 2xl:text-[21px] leading-tight text-center">
          Everything you need to plan, build, and deliver great products, <br />{" "}
          all in one place. Artus simplifies product management for <br />{" "}
          faster, smarter results.
        </p>
      </div> */}
      {/* <div className="w-full h-28 sm:h-52 bg-image-gradient"></div> */}
      {/* <div className="px-5 sm:px-0 sm:w-4/5 mx-auto flex justify-between items-center">
        <Image
          src={devStages}
          alt="devStages"
          className=" w-[60%] lg:w-[50%]"
        />
        <div className="text-right">
          <h className="text-xs sm:text-[20px] xl:text-[20px] 2xl:text-[28px] font-bold text-white text-right mb-8">Clarity</h>
          <p  className="sm:min-h-[57px] 2xl:min-h-[66px] text-[#b8b8b8] text-[11px] sm:text-[19px] xl:text-[19px] 2xl:text-[22px] text-end mt-4">
            Define clear goals to <br /> align with your vision <br /> and close
            projects faster
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default ProductTeam;
