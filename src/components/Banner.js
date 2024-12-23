import Image from "next/image";
import React from "react";
import bannerImage from "@/assets/images/banner.png";
import bannerShadow from "@/assets/images/banner-shadow.png";
import bannerShadowSm from "@/assets/images/banner-shadow-sm.png";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        src={bannerShadow}
        alt="bannerShadow"
        className="hidden lg:block w-full absolute top-0 left-0 z-0"
      />
      <Image
        src={bannerShadowSm}
        alt="bannerShadow"
        className="block lg:hidden w-full absolute top-0 left-0 z-0"
      />
      <div className="relative z-10">
        <h1 className="px-5 sm:px-0 sm:w-3/4 mx-auto lg:w-full text-white font-semibold text-[31px] sm:text-[50px] xl1::text-[52px] 2xl:text-[54px] leading-snug sm:leading-[60px] sm:text-center pt-8 sm:pt-20 tracking-tight">
          Automating Software Development <br />{" "}
          <span className="text-[25px] sm:text-[50px] xl1::text-[52px] 2xl:text-[54px] bg-gradient-to-r from-[#19FE93] to-[#09CAFF] inline-block text-transparent bg-clip-text">
            for the Next Generation
          </span>
        </h1>
        <p className="w-full px-5 sm:px-0 sm:w-11/12 mx-auto lg:w-full text-white text-[17px] sm:text-[19px] xl1::text-[19px] 2xl:text-[21px] sm:text-center my-8 sm:my-12">
          From idea to execution, Artus empowers you with AI Workers to build
          faster, smarter, <br className="hidden lg:block" />
          and at a fraction of the cost.
        </p>
        <div className="flex gap-3 px-5 sm:px-0 sm:justify-center mb-8">
          <Link
            href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
            target="_blank"
            className="bg-[#046EC5] bg-gradient-to-r from-[#6EBAF8] to-[#046EC5] hover:to-[#6EBAF8] text-[12px] sm:text-sm xl1::text-base 2xl:text-lg flex items-center min-h-11 leading-none text-white rounded-full font-semibold py-2.5 px-8"
          >
            <span>Book a Demo</span>
          </Link>
          <Link
            href={"#content"}
            className="bg-transparent text-[12px] sm:text-sm xl1::text-base 2xl:text-lg border flex items-center min-h-11 leading-none border-white text-white rounded-full font-semibold py-2.5 px-8"
          >
            <span>Learn More</span>
          </Link>
        </div>
        <div className="w-[90%] lg:w-4/5 mx-auto">
          <Image src={bannerImage} alt="bannerImage" priority />
        </div>
      </div>
    </div>
  );
};

export default Banner;
