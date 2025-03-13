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
import Link from "next/link";

const ProductTeam = () => {
  return (
    <div className="relative bgAgent" id="content">
      <div className="my-16">
        <p className="text-[#bcbcbc] text-xs px-6 sm:px-0 sm:text-[15px] xl:text-[16px] 2xl:text-[24px] text-center leading-normal mt-5">
          Introducing
        </p>
        <h2 className="font-semibold text-[31px] sm:text-[47px] xl:text-[47px] 2xl:text-[56px] text-white text-center tracking-tight">
          HiveMind Technology
        </h2>
      </div>
      <div className="w-11/12 sm:w-[70%] lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-[#141414] rounded-2xl p-2">
          <div className="flex items-center gap-3 justify-center my-10 sm:my-10">
            <span className="text-xs sm:text-[20px] xl:text-[20px] 2xl:text-[28px] font-bold text-white">
              HiveMind Coding
            </span>
          </div>
          <p className="sm:min-h-[57px] 2xl:min-h-[66px] text-[#b8b8b8] text-[11px] sm:text-[19px] xl:text-[19px] 2xl:text-[22px] text-center mb-8">
            AI Coders execute hundereds of <br /> tasks fully synchronized with
            the plan
          </p>
          <Image
            className="xxl:w-[460px] xl1:w-[300px] mx-auto mt-28"
            src={HMCoding}
            alt="HMCoding"
          />
        </div>
        <div className="bg-[#141414] rounded-2xl p-2 pb-4 ">
          <div className="flex items-center gap-3 justify-center my-10">
            <span className="text-xs sm:text-[20px] xl:text-[20px] 2xl:text-[28px] font-bold text-white">
              HiveMind Planning
            </span>
          </div>
          <p className="sm:min-h-[57px] 2xl:min-h-[66px] text-[#b8b8b8] text-[11px] sm:text-[19px] xl:text-[19px] 2xl:text-[22px] text-center mb-8">
            A team of specialized AI Agents <br />
            conduct product R&D
          </p>
          <Image
            className="xxl:w-[460px] xl1:w-[400px] mx-auto mt-28"
            src={HMPlanning}
            alt="HMPlanning"
          />
        </div>
      </div>
      <div className="px-5 sm:px-0 sm:w-4/5 mx-auto">
        <h2 className="text-white sm:text-center tracking-tight leading-tight font-semibold text-[32px] xl:text-[44px] 2xl:text-[56px] mb-12 mt-32">
          The next generation of <br />
          <span className="text-[#09CAFF]">Chat-Agents</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col gap-5 items-center p-5">
            <Image
              src={athena}
              alt="athena"
              className="w-[62px] 2xl:w-[80px] h-auto"
            />
            <h4 className="text-[27px] sm:text-[27px] xl:text-[27px] 2xl:text-[35px] font-bold bg-gradient-to-r from-[#09CAFF] to-[#19FE93] inline-block text-transparent bg-clip-text">
              Athena
            </h4>
            <p className="sm:w-[60%] lg:w-auto text-[#bcbdbf] text-center text-[17px] xl:text-[17px] 2xl:text-[22px] px-6">
              A well-informed brainstorming assistant to perfect product
              decision-making.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center p-5">
            <Image
              src={apollo}
              alt="apollo"
              className="w-[62px] 2xl:w-[80px] h-auto"
            />
            <h4 className="text-[27px] sm:text-[27px] xl:text-[27px] 2xl:text-[35px] font-bold bg-gradient-to-r from-[#09CAFF] to-[#19FE93] inline-block text-transparent bg-clip-text">
              Apollo
            </h4>
            <p className="sm:w-[60%] lg:w-auto text-[#bcbdbf] text-center text-[17px] xl:text-[17px] 2xl:text-[22px] px-6">
              The ultimate product manager's co-pilot, helping in managing and
              delegating tasks effectively.
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center p-5">
            <Image
              src={artemis}
              alt="artemis"
              className="w-[62px] 2xl:w-[80px] h-auto"
            />
            <h4 className="text-[27px] sm:text-[27px] xl:text-[27px] 2xl:text-[35px] font-bold bg-gradient-to-r from-[#09CAFF] to-[#19FE93] inline-block text-transparent bg-clip-text">
              Artemis
            </h4>
            <p className="sm:w-[60%] lg:w-auto text-[#bcbdbf] text-center text-[17px] xl:text-[17px] 2xl:text-[22px] px-6">
              A senior developer for your team—keeping everyone on track, up to
              speed, and aligned.
            </p>
          </div>
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
