import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import banner from "@/assets/images/hero-banner.jpeg";
import shery from "@/assets/images/shery.png";
import yash from "@/assets/images/yash.png";
import details from "@/assets/images/details-ceo.png";
import aditya from "@/assets/images/aditya.png";
import khushi from "@/assets/images/khushi.png";
import haseeb from "@/assets/images/haseeb.png";
import bhushan from "@/assets/images/bhushan.png";
import prachi from "@/assets/images/prachi.png";
import yashika from "@/assets/images/yashika.png";
import insta from "@/assets/images/insta-logo.webp";
import tiktok from "@/assets/images/tiktok-logo.webp";
import discord from "@/assets/images/discord-logo.png";
import podcast from "@/assets/images/podcast-logo.png";
import Link from "next/link";
import Footer from "@/components/Footer";

const page = () => {
  const members = [
    { name: "Aditya Chatterjee", role: "Design Lead", img: aditya },
    { name: "Khushi Shroff", role: "User-Interface Specialist", img: khushi },
    { name: "Haseeb Raza", role: "Frontend Developer", img: haseeb },
    { name: "Bhushan Bhise", role: "Sales Executive", img: bhushan },
    { name: "Prachi Rusia", role: "Lead Generation Manager", img: prachi },
    { name: "Yashika Vahi", role: "Content Manager", img: yashika },
  ];
  return (
    <div>
      <Header />
      <div className="relative">
        <Image
          src={banner}
          alt="banner"
          className="w-full h-[70vh] object-cover"
        />
        <div className="bg-[#0b0b0b31] h-full w-full flex flex-col justify-center items-center absolute top-0 text-center">
          <h1 className="bg-gradient-to-r from-[#19FE93] to-[#09CAFF] px-2 inline-block text-transparent bg-clip-text text-2xl xl1:text-[35px] 2xl:text-[53px] font-bold italic">
            Welcome to Artus
          </h1>
          <h1 className="text-white xl1:text-[35px] 2xl:text-[53px] font-bold italic">
            Meet the Team Building the Future of Work
          </h1>
          <button className="bg-[#046EC5] transition-all hover:bg-[#2e6da1] border border-black text-white mt-8 font-semibold px-6 py-2.5 2xl:py-3 xl:text-sm 2xl:text-lg rounded-full">
            Contact the Founders
          </button>
        </div>
      </div>
      <div className="container mx-auto px-5">
        <div className="mt-10">
          <h4 className="leading-tight font-bold text-center xl1:text-[35px] 2xl:text-[39px]">
            A Bold, Young, and Unstoppable <br /> Team of Ambitious Individuals
          </h4>
          <p className="text-center my-8 xl1:text:[22px] 2xl:text-[24px]">
            As competition and complexity increase, the ability to quickly{" "}
            <br /> make well-informed decisions can set industry leaders apart.
          </p>
          <div>
            <div className="flex items-center gap-4 justify-between my-20">
              <Image
                src={shery}
                alt="shery"
                className="h-[500px] 2xl:h-[600px] w-auto"
              />
              <Image src={details} alt="details" className="w-2/4 " />
              <Image
                src={yash}
                alt="yash"
                className="h-[500px] 2xl:h-[600px] w-auto"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 border-b pb-10">
              {members.map((member, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center"
                  >
                    <Image
                      src={member.img}
                      alt={member.name}
                      className="w-[177px] 2xl:w-[254px] h-[177px] 2xl:h-[254px] rounded-full"
                    />
                    <h4 className="xl1:text-[24px] 2xl:text-[27px] font-bold mt-4">
                      {member.name}
                    </h4>
                    <p className="text-black font-medium text-[19px]">
                      {member.role}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              <h3 className="xl1:text-[58px] 2xl:text-[74px] leading-none font-bold text-center mt-20">
                <span className="text-[#1967FE]">Join Our Community!</span>
              </h3>
              <div className="flex items-center gap-10 justify-center my-16">
                <Link
                  href="https://www.instagram.com/_artusai_/"
                  target="_blank"
                  className="flex flex-col items-center justify-center"
                >
                  <div className="rounded-full bg-white p-4">
                    <Image
                      src={insta}
                      alt="insta"
                      className="xl1:w-14 2xl:w-16 xl1:h-14 2xl:h-16"
                    />
                  </div>

                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://www.tiktok.com/@_artusai_?lang=en"
                  target="_blank"
                  className="flex flex-col items-center justify-center"
                >
                  <div className="rounded-full bg-white p-4">
                    <Image
                      src={tiktok}
                      alt="tiktok"
                      className="xl1:w-14 2xl:w-16 xl1:h-14 2xl:h-16"
                    />
                  </div>

                  <span>Tiktok</span>
                </Link>
                <Link
                  href="https://discord.gg/u54UXEc3"
                  target="_blank"
                  className="flex flex-col items-center justify-center"
                >
                  <div className="rounded-full bg-white p-4">
                    <Image
                      src={discord}
                      alt="discord"
                      className="xl1:w-14 2xl:w-16 xl1:h-14 2xl:h-16"
                    />
                  </div>
                  <span>Discord</span>
                </Link>
                <Link
                  href="https://open.spotify.com/episode/4EBVHbILVBMcsAx8EfbExx?si=L_LFeGzHSwyXl0zL6KGWhg"
                  target="_blank"
                  className="flex flex-col items-center justify-center"
                >
                  <div className="rounded-full bg-white p-4">
                    <Image
                      src={podcast}
                      alt="podcast"
                      className="xl1:w-14 2xl:w-16 xl1:h-14 2xl:h-16"
                    />
                  </div>
                  <span>Podcast</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
