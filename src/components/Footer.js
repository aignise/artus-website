import Link from "next/link";
import logo from "@/assets/images/ArtusLogo.svg";
import linkedin from "@/assets/images/linkedin-icon.png";
import fb from "@/assets/images/fb-icon.png";
import twitter from "@/assets/images/twitter-icon.png";
import rightArrow from "@/assets/images/arrowRight.png";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="relative z-[99] bg-[#000000] py-5 2xl:py-14">
      <div className="w-[95%] sm:w-[95%] lg:w-[90%] mx-auto">
        <div className="flex items-center justify-center gap-12">
          <p className="text-white text-center font-inter lg:text-[16px] xlu:text-[20.164px] font-normal leading-normal cursor-pointer">
            Research
          </p>
          <p className="text-white text-center font-inter lg:text-[16px] xlu:text-[20.164px] font-normal leading-normal cursor-pointer">
            Team
          </p>
        </div>
        <div className="lg:flex lg:flex-row flex-col sm:flex-col md:flex-col sm:gap-3 md:gap-8 justify-between items-center my-6 sm:my-8 md:my-10 lg:my-24">
          <Link href={"#"}>
            <Image
              src={logo}
              alt="logo"
              className="w-[80px] 2xl:w-[100 px] h-auto mx-auto"
            />
          </Link>
          <p className="text-white text-center font-inter md:text-[16px] lg:text-[20px] xlu:text-[22.164px] font-normal leading-normal py-3">
            We are Artus. Our goal is to translate the positive effects from{" "}
            <br />
            revolutionizing how companies engage with their clients & their
            team.
          </p>
          {/* <div className="hidden sm:block">
            <Link
              className="text-white font-semibold text-sm 2xl:text-lg mx-5"
              href={"#"}
            >
              Terms of Service
            </Link>
            <Link
              className="text-white font-semibold text-sm 2xl:text-lg mx-5"
              href={"#"}
            >
              Privacy Policy
            </Link>
          </div> */}
          <div className="flex justify-center">
            <Link
              className="text-white w-[48.829px] h-[46.667px] flex items-center justify-center font-semibold text-sm  p-3 mx-2 rounded-full border-2 border-[#ffffff20]"
              href={"https://www.linkedin.com/company/artusai"}
              target="_blank"
            >
              <Image src={linkedin} alt="linkedin" />
            </Link>
            {/* <Link
              className="text-white font-semibold text-sm block p-3 mx-2 rounded-full border-2 border-[#ffffff20]"
              href={"#"}
            >
              <Image src={fb} alt="fb" />
            </Link>
            <Link
              className="text-white font-semibold text-sm block p-3 mx-2 rounded-full border-2 border-[#ffffff20]"
              href={"#"}
            >
              <Image src={twitter} alt="twitter" />
            </Link> */}
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <p className="text-white opacity-[.31] text-center font-inter md:text-[16px] lg:text-[18px] xlu:text-[20.164px] font-normal leading-normal">
            All rights reserved. Copyright © 2024 Artus AI Workspaces Pvt Ltd
          </p>
        </div>
        {/* <div className="flex flex-col gap-5 mt-8 sm:hidden">
          <Link
            className="text-white font-semibold text-sm 2xl:text-lg"
            href={"#"}
          >
            Terms of Service
          </Link>
          <Link
            className="text-white font-semibold text-sm 2xl:text-lg"
            href={"#"}
          >
            Privacy Policy
          </Link>
        </div> */}
        {/* <div className="mt-8 sm:mt-16">
          <p className="text-white font-bold text-base 2xl:text-[21px]">
            Subscribe
          </p>
          <div className="flex items-center w-full my-4">
            <input
              type="text"
              className="h-10 2xl:h-12 border-none rounded-l-md w-full lg:w-3/5 px-2 focus:outline-none"
            />
            <button className="bg-[#0081FE] rounded-r-md h-10 2xl:h-12 px-4">
              <Image src={rightArrow} alt="rightArrow" />
            </button>
          </div>
          <p className="text-white opacity-60 text-xs 2xl:text-base">
            Hello, we are Artus. Our goal is to translate the positive effects
            from revolutionizing how companies engage with their clients & their
            team.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
