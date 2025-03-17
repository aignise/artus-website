import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/images/banner.svg";
import bannerShadow from "@/assets/images/banner-shadow.png";
import bannerShadowSm from "@/assets/images/banner-shadow-sm.png";
import BackgroundArrow from "@/assets/images/BackgroundArrow.svg";
import Stars from "@/assets/images/Stars.svg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        className="absolute top-[310px] left-[-10px]"
        src={BackgroundArrow}
      />
      {/* <Image
        src={bannerShadow}
        alt="bannerShadow"
        className="hidden lg:block w-full absolute top-0 left-0 z-0"
      /> */}
      <Image
        src={bannerShadowSm}
        alt="bannerShadow"
        className="block lg:hidden w-full absolute top-0 left-0 z-0"
      />
      <div className="relative z-10 mt-20 md:mx-14 lg:mx-12 sm:mx-10 mx-4">
        <h1
          className="text-white text-center font-inter font-semibold text-[56px] sm:text-[62px] md:text-[68px] lg:text-[74px]  xlu:text-[80px] sm:leading-[83.992px] tracking-[-4.456px] 
shadow-[2.461px_4.923px_9.846px_rgba(0,0,0,0.15)]"
        >
          Automated Software Development
        </h1>
        <p className="text-white text-center font-inter font-normal text-[20px] sm:text-[26px] md:text-[28px] lg:text-[30px] xlu:text-[32px] sm:leading-[34px] md:leading-[61.568px] tracking-[-0.684px] mt-4 sm:mt-10">
          From idea to execution, Artus empowers you with AI Workers to build
          faster, smarter and at a fraction of the cost.
        </p>
        <div className="flex gap-3 px-5 sm:px-0 justify-center mb-0 mt-10">
          <Link
            href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
            target="_blank"
            className="flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 
             rounded-[32px] bg-gradient-to-r from-[#09CAFF] to-[#19FE93] 
             font-inter text-black sm:text-[23.6px] font-semibold leading-[100%] tracking-[-0.04em] 
             sm:text-sm xl1:text-base 2xl:text-lg hover:opacity-90 transition-all"
          >
            <span>Book a Demo</span>
          </Link>
        </div>
        <div className="w-[100%] lg:w-4/5 mx-auto">
          <Image src={bannerImage} alt="bannerImage" priority />
        </div>
      </div>
    </div>
  );
};

export default Banner;
