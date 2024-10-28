import Link from "next/link";
import logo from "@/assets/images/Artus.png";
import linkedin from "@/assets/images/linkedin-icon.png";
import fb from "@/assets/images/fb-icon.png";
import twitter from "@/assets/images/twitter-icon.png";
import rightArrow from "@/assets/images/arrowRight.png";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#000000] py-16">
      <div className="w-5/6 lg:w-3/4 mx-auto">
        <div className="flex justify-between items-center">
          <Link href={"#"}>
            <Image
              src={logo}
              alt="logo"
              className="w-[80px] 2xl:w-[109px] h-auto"
            />
          </Link>
          <div className="hidden sm:block">
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
          </div>
          <div className="flex">
            <Link
              className="text-white font-semibold text-sm block p-3 mx-2 rounded-full border-2 border-[#ffffff20]"
              href={"#"}
            >
              <Image src={linkedin} alt="linkedin" />
            </Link>
            <Link
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
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-8 sm:hidden">
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
        </div>
        <div className="mt-8 sm:mt-16">
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
        </div>
      </div>
    </div>
  );
};

export default Footer;
