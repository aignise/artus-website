import Image from "next/image";
import React from "react";
import vision from "@/assets/images/vision-clearification.png";
import athena from "@/assets/images/athena.png";
import apolloPm from "@/assets/images/apollo-pm.png";
import apollo from "@/assets/images/apollo.png";
import subTract from "@/assets/images/Subtract.png";
import diveDeeper from "@/assets/images/dive-deeper.png";
import ApolloBlueLogo from "@/assets/images/ApolloBlueLogo.svg";
import Link from "next/link";
import mvp from "@/assets/images/mvp-banner.png";

const ProductManagement = () => {
  return (
    <div className="pt-28 pb-20 bg-[#1f1f1f]">
      <div className="px-5 sm:px-0">
        <h1 className="sm:w-3/4 lg:w-full mx-auto leading-tight text-[29px] sm:text-[44px] xl:text-[48px] 2xl:text-[56px] font-semibold tracking-tight sm:text-center lg:leading-none mb-8 text-white">
          Product Planning with HiveMind
        </h1>
        <p className="text-white  text-[15px] sm:text-[17px] xl:text-[19px] 2xl:text-[22px] sm:text-center mb-8">
          Everything you need to plan, build, and deliver great products, <br />{" "}
          all in one place. Artus simplifies product management for <br />{" "}
          faster, smarter results.
        </p>
      </div>
      <div className="px-5 sm:px-0 flex flex-col sm:w-4/5 gap-5 sm:gap-20 mx-auto mt-16">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 lg:justify-between justify-between">
          <div className="w-full lg:w-[55%]">
            <Image src={vision} alt="vision" className="w-full" />
          </div>
          <div className="text-right">
            <div className="">
              <div>
                <h3 className="font-semibold text-[15px] sm:text-[25px] xl:text-[28px] 2xl:text-[32px] mb-3 text-white">
                  Clarity
                </h3>
                <p className="text-white text-[10px] sm:text-[17px] xl:text-[19px] 2xl:text-[22px]">
                  Define clear goals to <br /> align with your vision <br />
                  and close projects faster
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0 lg:justify-between justify-between">
          <div className="text-right">
            <div className="">
              <div>
                <h3 className="font-semibold text-[15px] sm:text-[25px] xl:text-[28px] 2xl:text-[32px] mb-3 text-white">
                  Clarity
                </h3>
                <p className="text-white text-[10px] sm:text-[17px] xl:text-[19px] 2xl:text-[22px]">
                  Define clear goals to <br /> align with your vision <br />
                  and close projects faster
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[55%]">
            <Image src={vision} alt="vision" className="w-full" />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="">
            <div className="">
              <div>
                <h3 className="font-semibold text-[15px] sm:text-[25px] xl:text-[28px] 2xl:text-[32px] mb-3 text-white">
                  Visualization
                </h3>
                <p className="text-white text-[10px] sm:text-[17px] xl:text-[19px] 2xl:text-[22px]">
                  Get AI-generated <br /> schematics like <br />
                  Database ERD
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div>
                <h3 className="font-semibold text-[15px] sm:text-[25px] xl:text-[28px] 2xl:text-[32px] mb-3 text-white">
                  Sprints
                </h3>
                <p className="text-white text-[10px] sm:text-[17px] xl:text-[19px] 2xl:text-[22px]">
                  Phase-wise
                  <br /> execution of <br />
                  you ideas for agility <br /> agility
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div>
                <h3 className="font-semibold text-[15px] sm:text-[25px] xl:text-[28px] 2xl:text-[32px] mb-3 text-white">
                  AI Tasks
                </h3>
                <p className="text-white text-[10px] sm:text-[17px] xl:text-[19px] 2xl:text-[22px]">
                  Pre-prompted <br /> tasks-generated <br />
                  for AI Coders
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-10 flex justify-between items-center w-full">
            <p className="text-white text-base sm:text-[18px] xl1::text-[19px] leading-normal 2xl:text-[21px]">
              Manage your teams of AIs & humans seamlessly <br />
              with this product management co-pilot
            </p>
            <Image className="w-36" src={ApolloBlueLogo} />
          </div>
          <Image
            src={mvp}
            alt="mvp"
            className="w-full scale-110 transform-gpu"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
