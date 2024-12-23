import Image from "next/image";
import React from "react";
import vision from "@/assets/images/vision-clearification.png";
import athena from "@/assets/images/athena.png";
import apolloPm from "@/assets/images/apollo-pm.png";
import apollo from "@/assets/images/apollo.png";
import subTract from "@/assets/images/Subtract.png";
import diveDeeper from "@/assets/images/dive-deeper.png";
import Link from "next/link";

const ProductManagement = () => {
  return (
    <div className="mt-20 sm:mt-48 lg:mt-80 2xl:mt-[32rem] pb-20">
      <div className="px-5 sm:px-0">
        <h1 className="sm:w-3/4 lg:w-full mx-auto leading-tight text-[29px] sm:text-[44px] xl:text-[48px] 2xl:text-[56px] font-semibold tracking-tight sm:text-center lg:leading-none mb-8">
          A Complete <span className="text-[#1967FE]">Product Management </span>
          <br className="hidden lg:block" />
          Experience
        </h1>
        <p className="text-[#5D6180]  text-[15px] sm:text-[17px] xl:text-[19px] 2xl:text-[22px] sm:text-center mb-8">
          Define clear goals to align with your or your <br />
          clients' vision and close projects faster
        </p>
        <Link
          href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
          target="_blank"
          className="w-max bg-gradient-to-r from-[#6EBAF8] to-[#046EC5] hover:to-[#6EBAF8] text-xs xl:text-base 2xl:text-lg sm:mx-auto flex items-center min-h-11 leading-none text-white rounded-full font-semibold py-2.5 px-8"
        >
          <span>Book Demo Now</span>
        </Link>
      </div>
      <div className="px-5 sm:px-0 flex flex-col sm:w-4/5 gap-5 sm:gap-20 mx-auto mt-16">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0">
          <div className="w-full lg:w-[55%]">
            <Image src={vision} alt="vision" className="w-full" />
          </div>
          <div className="bg-[#f9f9f9] w-full sm:w-4/5 lg:w-[45%] rounded-r-2xl">
            <div className="px-10 py-5 sm:p-10 flex items-start gap-3">
              <Image
                src={subTract}
                alt="subTract"
                className="w-[23px] sm:w-[36px] sm:mt-1 lg:mt-2"
              />
              <div>
                <h3 className="font-semibold text-[15px] sm:text-[25px] xl:text-[28px] 2xl:text-[32px] mb-3">
                  Big Picture Clarity
                </h3>
                <p className="text-[#5D6180] text-[10px] sm:text-[17px] xl:text-[19px] 2xl:text-[22px]">
                  Define clear goals to align with your or your clients' vision
                  and close projects faster
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-0">
          <div className="bg-[#f9f9f9] w-full sm:w-4/5 lg:w-[45%] rounded-l-2xl">
            <div className="px-10 py-5 sm:p-10 flex items-start gap-3">
              <Image
                src={athena}
                alt="subTract"
                className="w-[22px] sm:w-[42px] sm:mt-0.5 lg:mt-1.5"
              />
              <div>
                <h3 className="font-semibold text-[15px] sm:text-[25px] xl:text-[28px] 2xl:text-[32px] mb-3">
                  Brainstorm with Athena
                </h3>
                <p className="text-[#5D6180] text-[10px] sm:text-[17px] xl:text-[19px] 2xl:text-[22px]">
                  Map out the specifics of your projects in an empowering
                  brainstorming session with
                  <span className="font-bold ms-2">Athena by Artus</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[55%]">
            <Image src={diveDeeper} alt="diveDeeper" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-0">
          <div className="w-full lg:w-[55%]">
            <Image src={apolloPm} alt="apolloPm" />
          </div>
          <div className="bg-[#f9f9f9] w-full sm:w-4/5 lg:w-[45%] rounded-r-2xl">
            <div className="px-10 py-5 sm:p-10 flex items-start gap-3">
              <Image
                src={apollo}
                alt="apollo"
                className="w-[24px] sm:w-[48px] sm:mt-0.5 lg:mt-1.5"
              />
              <div>
                <h3 className="font-semibold text-[15px] sm:text-[25px] xl:text-[28px] 2xl:text-[32px] mb-3">
                  Lead effortlessly with Apollo
                </h3>
                <p className="text-[#5D6180] text-[10px] sm:text-[17px] xl:text-[19px] 2xl:text-[22px]">
                  Effortlessly lead both AI workers and human teams, fully in
                  control, with
                  <span className="font-bold ms-2">Apollo by Artus</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
