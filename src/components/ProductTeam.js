import React from "react";
import icon from "@/assets/images/Icon.png";
import coder from "@/assets/images/coder.png";
import researcher from "@/assets/images/researcher.png";
import athena from "@/assets/images/athena.png";
import apollo from "@/assets/images/apollo.png";
import artemis from "@/assets/images/artemis.png";
import devStages from "@/assets/images/dev-stages.png";
import Image from "next/image";
import Link from "next/link";

const ProductTeam = () => {
  return (
    <div className="relative bgAgent" id="content">
      <div className="w-max mx-auto bg-title py-10 sm:px-32 mt-10 text-center">
        <h3 className="text-[20px] sm:text-[31px] xl:text-[31px] 2xl:text-[37px] text-[#09CAFF] font-semibold">
          24/7. AI-Powered. Always On.
        </h3>
        <h1 className="text-[21px] sm:text-[47px] xl:text-[47px] 2xl:text-[56px] text-white font-semibold tracking-tight mt-4">
          Your New{" "}
          <span className="bg-gradient-to-r from-[#09CAFF] to-[#19FE93] inline-block text-transparent bg-clip-text">
            Product Team:
          </span>
        </h1>
      </div>
      <div className="my-16">
        <h2 className="font-semibold text-[31px] sm:text-[47px] xl:text-[47px] 2xl:text-[56px] text-white text-center tracking-tight">
          AI Workers
        </h2>
        <p className="text-[#bcbcbc] text-xs px-6 sm:px-0 sm:text-[15px] xl:text-[16px] 2xl:text-[24px] text-center leading-normal mt-5">
          Input a rough idea and receive a fully-fledged development{" "}
          <br className="hidden sm:block" />
          plan with the freedom to deploy AI workers at will to execute{" "}
          <br className="hidden" />
          any task in your project
        </p>
      </div>
      <div className="w-11/12 sm:w-[70%] lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-[#141414] rounded-2xl p-2">
          <div className="flex items-center gap-3 justify-center my-2 sm:my-4">
            <Image src={icon} alt="icon" className="w-7 h-auto sm:w-auto" />
            <span className="text-xs sm:text-[20px] xl:text-[20px] 2xl:text-[28px] font-bold text-white">
              AI Coder
            </span>
          </div>
          <p className="sm:min-h-[57px] 2xl:min-h-[66px] text-[#b8b8b8] text-[11px] sm:text-[19px] xl:text-[19px] 2xl:text-[22px] text-center mb-8">
            Writes Error free , scalable code
          </p>
          <Image src={coder} alt="coder" className="w-full" />
        </div>
        <div className="bg-[#141414] rounded-2xl p-2">
          <div className="flex items-center gap-3 justify-center my-4">
            <Image src={icon} alt="icon" className="w-7 h-auto sm:w-auto" />
            <span className="text-xs sm:text-[20px] xl:text-[20px] 2xl:text-[28px] font-bold text-white">
              AI Researcher
            </span>
          </div>
          <p className="sm:min-h-[57px] 2xl:min-h-[66px] text-[#b8b8b8] text-[11px] sm:text-[19px] xl:text-[19px] 2xl:text-[22px] text-center mb-8">
            Identifies the best technologies and <br />
            methodologies for your project.
          </p>
          <Image src={researcher} alt="researcher" />
        </div>
      </div>
      <div className="px-5 sm:px-0 sm:w-4/5 mx-auto">
        <h2 className="text-white sm:text-center tracking-tight leading-tight font-semibold text-[32px] xl:text-[44px] 2xl:text-[56px] mb-12 mt-32">
          Meet the next generation of <br />
          enterprise grade <span className="text-[#09CAFF]">
            Chat-Agents
          </span>{" "}
          by Artus
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
        <div className="flex items-center gap-3 justify-center py-16">
          <p className="text-white font-semibold text-[13px] xl:text-lg 2xl:text-[23px]">
            Start using these Features
          </p>{" "}
          <Link
            href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
            target="_blank"
            className="bg-[#046EC5] bg-gradient-to-r from-[#6EBAF8] to-[#046EC5] hover:to-[#6EBAF8] text-xs xl:text-base 2xl:text-lg flex items-center min-h-11 leading-none text-white rounded-full font-semibold py-2.5 px-8"
          >
            <span className="mb-1">Book a Demo</span>
          </Link>
        </div>
      </div>
      <div className="relative text-center pt-16 pb-10 sm:pb-28 lg:pb-56">
        <h4 className="px-5 tracking-tight [text-shadow:_2px_4px_8px_#00000026] sm:px-0 sm:w-[60%] lg:w-auto font-semibold text-[35px] sm:text-[44px] xl:text-[44px] 2xl:text-[52px] leading-tight bg-gradient-to-r from-[#09CAFF] to-[#19FE93] inline-block text-transparent bg-clip-text mb-8">
          With Artus, Vision Meets Execution
        </h4>
        <p className="w-[85%] lg:w-auto mx-auto text-white text-sm sm:text-[18px] xl:text-[18px] 2xl:text-[21px] leading-tight text-center">
          <span className="font-semibold">No more compromises</span>—Artus
          delivers your business vision to development with{" "}
          <br className="hidden lg:block" />
          pinpoint precision, for results that exceed expectations.
        </p>
      </div>
      <div className="w-full h-28 sm:h-52 bg-image-gradient"></div>
      <Image
        src={devStages}
        alt="devStages"
        className="absolute w-[90%] lg:w-[80%] left-1/2 -translate-x-2/4 -bottom-9 sm:-bottom-14 lg:-bottom-[12rem] 2xl:-bottom-[24rem]"
      />
    </div>
  );
};

export default ProductTeam;
