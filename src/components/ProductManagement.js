import Image from "next/image";
import React from "react";
import vision from "@/assets/images/vision-clearification.png";
import athena from "@/assets/images/athena.png";
import apolloPm from "@/assets/images/apollo-pm.png";
import apollo from "@/assets/images/apollo.png";
import subTract from "@/assets/images/Subtract.png";
import diveDeeper from "@/assets/images/dive-deeper.png";
import ApolloBlueLogo from "@/assets/images/ApolloBlueLogo.svg";
import BackgroundArrow from "@/assets/images/BackgroundArrow.svg";
import Light7 from "@/assets/images/Light7.svg";
import Link from "next/link";
import mvp from "@/assets/images/mvp-banner.png";
import ApolloB from "@/assets/images/ApolloB.png";
import Clarity from "@/assets/images/Clarity.png";
import Specificity from "@/assets/images/Specificity.png";
import DynamicD from "@/assets/images/DynamicD.png";
import Light3 from "@/assets/images/Light3.svg";
import Light4 from "@/assets/images/Light4.svg";

const ProductManagement = () => {
  return (
    <div className="bg-black">
      <div className="relative pt-64 pb-0">
        <Image className="absolute top-[340px]" src={BackgroundArrow} />
        <Image className="absolute -top-80 md:block hidden" src={Light3} />
        <div className="relative px-5 sm:px-0">
          <h1 className="font-inter font-semibold text-[84px] leading-[83.99px] tracking-[-4.46px] text-center align-middle text-[#FFFFFF]">
            Product Planning with{" "}
            <span className="bg-gradient-to-r from-[#CEE1FF] via-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent">
              HiveMind
            </span>
          </h1>
          <p className="font-inter font-normal text-[32px] leading-[45.6px] tracking-[-0.68px] text-center align-middle text-[#FFFFFF] pt-9 w-[80%] mx-auto">
            Everything you need to plan, build, and deliver great products, all
            in one place. Artus simplifies product management for faster,
            smarter results.
          </p>
        </div>
        <div className="relative px-5 sm:px-0 flex flex-col sm:w-[90%] gap-8 sm:gap-20 mx-auto mt-24 z-10">
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 lg:justify-between justify-between">
            <div className="w-full lg:w-[70%]">
              <Image src={Clarity} alt="vision" className="w-full" />
            </div>
            <div className="text-left md:text-right w-[25%]">
              <div className="">
                <div>
                  <h3
                    className="font-inter font-semibold text-[64px] leading-[90.85px] tracking-[-2.11px] text-right 
bg-gradient-to-r from-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent"
                  >
                    Clarity
                  </h3>
                  <p className="font-inter font-medium text-[32px] leading-[45.6px] tracking-[-0.68px] text-right align-middle text-[#FFFFFF] mt-4">
                    Define clear goals to align with your vision and close
                    projects faster
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 lg:justify-between justify-between">
            <div className="lg:w-[27%] xlu:w-[26%] xl1:w-[25%]">
              <div className="">
                <div className="">
                  <h3
                    className="font-inter font-semibold text-[64px] leading-[90.85px] tracking-[-2.11px] 
bg-gradient-to-r from-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent"
                  >
                    Specificity
                  </h3>
                  <p className="font-inter font-medium text-[32px] leading-[45.6px] tracking-[-0.68px]  align-middle text-[#FFFFFF] mt-4">
                    Utilize specialized AI for every aspect of planning
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[70%] xl1:w-[70%]">
              <Image src={Specificity} alt="Specificity" className="w-full" />
            </div>
          </div>
          <div className="relative flex flex-col lg:flex-row items-center gap-5 lg:gap-0 lg:justify-between justify-between mt-8">
            <div className="xxl:w-[100%] 2xl:w-[90%] xl1:w-[84%] xlu:w-[84%] lg:w-[82%]">
              <Image src={DynamicD} alt="Specificity" className="w-full" />
            </div>
            <div className="absolute right-[500px] top-[50px] text-right">
              <h3
                className="absolute font-inter font-semibold text-[64px] leading-[90.85px] tracking-[-2.11px] 
bg-gradient-to-r from-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent"
              >
                Dynamic <br /> Documentation
              </h3>
            </div>
          </div>
          <div className="relative flex justify-between mt-36 w-[90%] mx-auto">
            <Image className="absolute -top-72 -left-36" src={Light4} />
            <Image
              className="lg:absolute lg:-top-72 lg:left-72 xl:left-96 lg:block hidden"
              src={Light4}
            />
            {/* <Image className="absolute -top-72 left-[1000px]" src={Light4}/> */}
            <Image className="absolute -top-28" src={Light3} />
            <div className="w-[29%]">
              <div>
                <h3 className="font-inter font-semibold text-[62px] leading-[90.854px] tracking-[-2.113px] bg-gradient-to-r from-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent shadow-[0px_9.391px_9.391px_rgba(0,0,0,0.25)]">
                  Visualization
                </h3>
                <p className="text-white font-inter font-medium text-[32px] leading-[45.6px] tracking-[-0.684px]">
                  Get AI-generated schematics like Database ERD
                </p>
              </div>
            </div>
            <div className="w-[29%]">
              <h3 className="font-inter font-semibold text-[62px] leading-[90.854px] tracking-[-2.113px] bg-gradient-to-r from-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent shadow-[0px_9.391px_9.391px_rgba(0,0,0,0.25)]">
                Sprints
              </h3>
              <p className="text-white font-inter font-medium text-[32px] leading-[45.6px] tracking-[-0.684px]">
                Phase-wise execution of you ideas for agility agility
              </p>
            </div>
            <div className="w-[29%]">
              <h3 className="font-inter font-semibold text-[62px] leading-[90.854px] tracking-[-2.113px] bg-gradient-to-r from-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent shadow-[0px_9.391px_9.391px_rgba(0,0,0,0.25)]">
                AI Tasks
              </h3>
              <p className="text-white font-inter font-medium text-[32px] leading-[45.6px] tracking-[-0.684px]">
                Pre-prompted tasks-generated for AI Coders
              </p>
            </div>
          </div>
          <div className="relative mt-44">
            <div className="flex justify-between items-center w-full">
              <p className="text-white font-inter font-semibold text-[32px] leading-[45.6px] tracking-[-0.684px]">
                Manage your teams of AIs & humans seamlessly <br />
                with this product management co-pilot
              </p>
              <Image className="w-[404.875px]" src={ApolloBlueLogo} />
            </div>
            <Image
              src={ApolloB}
              alt="ApolloB"
              className="w-full scale-110 transform-gpu"
            />
          </div>
          <div className="flex items-center gap-6 px-5 sm:px-0 sm:justify-center mt-28 mb-[500px]">
            <p className="text-white font-inter font-semibold text-[31.164px] tracking-[-1.247px]">
              Start using these features
            </p>
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
      </div>
    </div>
  );
};

export default ProductManagement;
