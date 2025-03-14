import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/images/banner.png";
import bannerShadow from "@/assets/images/banner-shadow.png";
import bannerShadowSm from "@/assets/images/banner-shadow-sm.png";
import BackgroundArrow from "@/assets/images/BackgroundArrow.svg";
import Stars from "@/assets/images/Stars.svg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative">
      <Image className="absolute top-[310px] left-[-10px]" src={BackgroundArrow}/>
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
      <div className="relative z-10 mt-20">
        <h1 className="text-white text-center font-inter font-semibold text-[80px] leading-[83.992px] tracking-[-4.456px] 
shadow-[2.461px_4.923px_9.846px_rgba(0,0,0,0.15)]">
          Automated Software Development <br />{" "}
        </h1>
        <p className="text-white text-center font-inter font-normal text-[32px] leading-[61.568px] tracking-[-0.684px] mt-10">
          From idea to execution, Artus empowers you with AI Workers to build
          faster, smarter <br className="hidden lg:block" />
          and at a fraction of the cost.
        </p>
        <div className="flex gap-3 px-5 sm:px-0 sm:justify-center mb-0 mt-10">
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
        <div className="w-[100%] lg:w-4/5 mx-auto">
          <Image src={bannerImage} alt="bannerImage" priority />
        </div>
      </div>
    </div>
  );
};

export default Banner;
