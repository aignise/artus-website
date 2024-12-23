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
          className="w-full h-[30vh] md:h-[40vh] lg:h-[70vh] object-cover"
        />
        <div className="bg-[#0b0b0b97] h-full w-full flex flex-col justify-center items-center absolute top-0 text-center">
          <h1 className="bg-gradient-to-r tracking-tight from-[#19FE93] to-[#09CAFF] p-3 inline-block text-transparent bg-clip-text text-2xl md:text-[40px] xl1:text-[50px] 2xl:text-[70px] font-bold">
            Welcome to Artus
          </h1>
          <h1 className="text-[#dadada] md:text-3xl xl1:text-[35px] 2xl:text-[50px] italic xl1:mt-3 font-semibold">
            Meet the Team Building the Future of Work
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-5">
        <div className="mt-16 lg:mt-20">
          <h4 className="leading-tight font-bold md:text-center text-2xl xl1:text-[35px] 2xl:text-[39px]">
            A Bold, Young and Unstoppable <br className="hidden md:block" />{" "}
            Team of Ambitious Individuals
          </h4>
          <p className="md:text-center my-3 md:my-8 text-xl xl1:text:[22px] 2xl:text-[24px]">
            As competition and complexity increase, the ability to quickly{" "}
            <br className="hidden md:block" /> make well-informed decisions can
            set industry leaders apart.
          </p>
          <div>
            <div className="block lg:flex items-center gap-8 justify-between my-8 md:my-20">
              <div className="md:flex items-center gap-10 md:w-full lg:w-2/4">
                <Image
                  src={shery}
                  alt="shery"
                  className="h-[400px] lg:h-[500px] 2xl:h-[600px] w-auto mx-auto md:mx-0"
                />
                <div className="my-5 md:my-0">
                  <h1 className="font-extrabold text-[24px] xl1:text-2xl 2xl:text-3xl">
                    Co-founder, CEO
                  </h1>
                  <h5 className="font-bold text-xl 2xl1:text-[22px] xl1:text-[24px] my-2">
                    Ashrey Ignise R
                  </h5>
                  <p className="text-base 2xl:text-lg text-[#5d5d5d] md:min-h-44 xl1:min-h-32">
                    On a mission to empower engineers, entrepreneurs, and
                    scientists around the world, Ashrey specializes in building
                    memorable brands and selling important ideas to the right
                    people.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-10 md:w-full lg:w-2/4">
                <div className="hidden md:block">
                  <div>
                    <h1 className="font-extrabold text-[24px] xl1:text-2xl 2xl:text-3xl">
                      Co-founder, CTO
                    </h1>
                    <h5 className="font-bold text-xl 2xl1:text-[22px] xl1:text-[24px] my-2">
                      Yash Vahi
                    </h5>
                  </div>
                  <p className="text-base 2xl:text-lg text-[#5d5d5d] md:min-h-44 xl1:min-h-32">
                    With a deep-rooted passion for Al- driven innovation, Yash
                    has dedicated his career to driving efficiency,
                    productivity, and innovation within teams.
                  </p>
                </div>
                <Image
                  src={yash}
                  alt="yash"
                  className="h-[400px] lg:h-[500px] 2xl:h-[600px] w-auto mx-auto md:mx-0"
                />
              </div>
              <div className="block md:hidden my-5">
                <div>
                  <h1 className="font-bold text-[22px] xl1:text-2xl 2xl:text-3xl">
                    Co-founder, CTO
                  </h1>
                  <h5 className="font-bold text-xl 2xl1:text-[22px] xl1:text-[24px] my-2">
                    Yash Vahi
                  </h5>
                </div>
                <p className="text-base 2xl:text-lg text-[#5d5d5d]">
                  With a deep-rooted passion for Al- driven innovation, Yash has
                  dedicated his career to driving efficiency, productivity, and
                  innovation within teams.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 border-b pb-10">
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
                    <h4 className="text-[22px] xl1:text-[24px] 2xl:text-[27px] font-bold mt-4">
                      {member.name}
                    </h4>
                    <p className="text-black font-medium text-lg xl1:text-[19px]">
                      {member.role}
                    </p>
                  </div>
                );
              })}
            </div>
            <div>
              <h3 className="text-3xl xl1:text-[38px] 2xl:text-[48px] leading-none font-bold text-center mt-20">
                <span className="text-[#1967FE] tracking-tight">
                  Join Our Community!
                </span>
              </h3>
              <div className="block md:flex items-center gap-10 justify-center my-8 md:my-16">
                <Link
                  href="https://www.instagram.com/_artusai_/"
                  target="_blank"
                  className="flex flex-col items-center justify-center"
                >
                  <div className="rounded-full bg-white p-4">
                    <Image
                      src={insta}
                      alt="insta"
                      className="w-14 2xl:w-16 h-14 2xl:h-16 object-contain"
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
                      className="w-14 2xl:w-16 h-14 2xl:h-16 object-contain"
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
                      className="w-14 2xl:w-16 h-14 2xl:h-16 object-contain"
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
                      className="w-14 2xl:w-16 h-14 2xl:h-16 object-contain"
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
