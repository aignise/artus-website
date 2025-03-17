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
      <div className="relative pt-24 sm:pt-28 md:pt-64 pb-0">
        <Image className="absolute top-[340px]" src={BackgroundArrow} />
        <Image className="absolute -top-80 md:block hidden" src={Light3} />
        <div className="relative px-5 sm:px-0 sm:mx-4 md:mx-10">
          <h1 className="font-inter font-semibold text-[40px] sm:text-[52px] md:text-[62px] lg:text-[72px] xlu:text-[80px] sm:leading-[83.99px] tracking-[-3px] sm:tracking-[-4.46px] text-center align-middle text-[#FFFFFF]">
            Product Planning with{" "}
            <span className="bg-gradient-to-r from-[#CEE1FF] via-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent">
              HiveMind
            </span>
          </h1>
          <p className="font-inter font-normal sm:text-[22px] md:text-[26px] lg:text-[30px] xlu:text-[32px] sm:leading-[32px] md:leading-[45.6px] tracking-[-0.68px] text-center align-middle text-[#FFFFFF] sm:pt-9 w-[80%] mx-auto">
            Everything you need to plan, build, and deliver great products, all
            in one place. Artus simplifies product management for faster,
            smarter results.
          </p>
        </div>
        <div className="relative px-5 sm:px-0 flex flex-col sm:w-[90%] gap-0 sm:gap-12 mx-auto mt-10 sm:mt-12 md:mt-24 z-10">
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 lg:justify-between justify-between">
            <div className="w-full lg:w-[70%]">
              <Image src={Clarity} alt="vision" className="w-full" />
            </div>
            <div className="text-center lg:text-left w-full lg:w-[25%]">
              <div className="">
                <div>
                  <h3 className="font-inter font-semibold text-[24px] sm:text-[34px] md:text-[44px] lg:text-[54px] xlu:text-[64px] md:leading-[90.85px] tracking-[-2.11px] bg-gradient-to-r from-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent">
                    Clarity
                  </h3>
                  <p className="font-inter font-medium sm:text-[20px] md:text-[24px] lg:text-[28px] xlu:text-[32px] sm:leading-[45.6px] tracking-[-0.68px] align-middle text-[#FFFFFF] md:mt-0 lg:mt-4">
                    Define clear goals to align with your vision and close
                    projects faster
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-0 lg:justify-between justify-between">
            <div className="lg:w-[27%] xlu:w-[26%] xl1:w-[25%] w-full text-center lg:text-left">
              <div className="">
                <div className="">
                  <h3 className="font-inter font-semibold text-[24px] sm:text-[32px] md:text-[42px] lg:text-[52px] xlu:text-[64px] md:leading-[90.85px] tracking-[-2.11px] bg-gradient-to-r from-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent">
                    Specificity
                  </h3>
                  <p className="font-inter font-medium sm:text-[20px] md:text-[24px] lg:text-[28px] xlu:text-[32px] sm:leading-[45.6px] tracking-[-0.68px]  align-middle text-[#FFFFFF] sm:mt-4">
                    Utilize specialized AI for every aspect of planning
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[70%] xl1:w-[70%]">
              <Image src={Specificity} alt="Specificity" className="w-full" />
            </div>
          </div>
          <div className="relative flex flex-col lg:flex-row items-center gap-5 lg:gap-0 lg:justify-between justify-center mt-8">
            <div className="w-full xxl:w-[100%] 2xl:w-[90%] xl1:w-[84%] xlu:w-[84%] lx:w-[82%] lg:w-[80%]">
              <Image src={DynamicD} alt="Specificity" className="w-full" />
            </div>
            <div className="lg:absolute lg:right-[50px] text-center lg:top-[10px] xlu:top-[50px]">
              <h3 className="md:text-center font-inter font-semibold text-[24px] sm:text-[34px] md:text-[44px] lg:text-[54px] xlu:text-[64px] md:leading-[90.85px] tracking-[-2.11px] bg-gradient-to-r from-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent">
                Dynamic <br /> Documentation
              </h3>
            </div>
          </div>
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-between mt-16 sm:mt-20 md:mt-36 w-full lg:w-[90%] text-center lg:text-left lg:mx-auto">
            <Image className="absolute -top-72 -left-36" src={Light4} />
            <Image
              className="lg:absolute lg:-top-72 lg:left-64 xl:left-96 lg:block hidden"
              src={Light4}
            />
            {/* <Image className="absolute -top-72 left-[1000px]" src={Light4}/> */}
            <Image className="absolute -top-28" src={Light3} />
            <div className="w-full lg:w-[31%]">
              <div>
                <h3 className="font-inter font-semibold text-[24px] sm:text-[34px] md:text-[44px] lg:text-[44px] xlu:text-[62px] md:leading-[90.854px] tracking-[-2.113px] bg-gradient-to-r from-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent shadow-[0px_9.391px_9.391px_rgba(0,0,0,0.25)]">
                  Visualization
                </h3>
                <p className="text-white font-inter font-medium sm:text-[20px] md:text-[26px] lg:text-[26px] xlu:text-[32px] md:leading-[45.6px] tracking-[-0.684px] sm:mb-[24px] md:mb-[0px]">
                  Get AI-generated schematics like Database ERD
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[31%]">
              <h3 className="font-inter font-semibold text-[24px] sm:text-[34px] md:text-[44px] lg:text-[44px] xlu:text-[62px] md:leading-[90.854px] tracking-[-2.113px] bg-gradient-to-r from-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent shadow-[0px_9.391px_9.391px_rgba(0,0,0,0.25)]">
                Sprints
              </h3>
              <p className="text-white font-inter font-medium sm:text-[20px] md:text-[26px] lg:text-[26px] xlu:text-[32px] md:leading-[45.6px] tracking-[-0.684px] sm:mb-[24px] md:mb-[0px]">
                Phase-wise execution of you ideas for agility agility
              </p>
            </div>
            <div className="w-full lg:w-[31%]">
              <h3 className="font-inter font-semibold text-[24px] sm:text-[34px] md:text-[44px] lg:text-[44px] xlu:text-[62px] md:leading-[90.854px] tracking-[-2.113px] bg-gradient-to-r from-[#CEE1FF] to-[#1967FE] bg-clip-text text-transparent shadow-[0px_9.391px_9.391px_rgba(0,0,0,0.25)]">
                AI Tasks
              </h3>
              <p className="text-white font-inter font-medium sm:text-[20px] md:text-[26px] lg:text-[26px] xlu:text-[32px] md:leading-[45.6px] tracking-[-0.684px] sm:mb-[24px] md:mb-[0px]">
                Pre-prompted tasks-generated for AI Coders
              </p>
            </div>
          </div>
          <div className="relative mt-16 sm:mt-24 md:mt-44">
            <div className="flex gap-4 justify-between items-center w-full">
              <p className="text-white font-inter font-semibold md:text-[17px] lg:text-[24px] xlu:text-[32px] md:leading-[24px] lg:leading-[45.6px] tracking-[-0.684px]">
                Manage your teams of AIs & humans seamlessly with this product
                management co-pilot
              </p>
              <Image
                className="md:w-[160px] lg:w-[300px] xlu:w-[404.875px]"
                src={ApolloBlueLogo}
              />
            </div>
            <Image
              src={ApolloB}
              alt="ApolloB"
              className="w-[98%] scale-110 transform-gpu"
            />
          </div>
          <div className="flex gap-3 px-5 sm:px-0 justify-center items-center mb-0 mt-10">
            <p className="text-white font-inter font-semibold sm:text-[25px]  md:text-[27px] lg:text-[29.164px] xlu:text-[31.164px]  tracking-[-1.247px]">
              Start using these features
            </p>
            <Link
              href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
              target="_blank"
              className="flex items-center justify-center w-44 px-4 sm:px-8 py-3 sm:py-4 
             rounded-[32px] bg-gradient-to-r from-[#09CAFF] to-[#19FE93] 
             font-inter text-black sm:text-[23.6px] font-semibold leading-[100%] tracking-[-0.04em] 
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
