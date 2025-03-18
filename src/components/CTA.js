"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowDown from "@/assets/images/arrow-down.png";
import businessCenter from "@/assets/images/business_center.png";
import user from "@/assets/images/user.png";
import polygon from "@/assets/images/polygon.png";
import Reactangle from "@/assets/images/Reactangle.png";
import logo from "@/assets/images/ArtusLogo.svg";
import Link from "next/link";

const CTA = () => {
  const data = [
    {
      review:
        "Artus turned our chaotic, slow development process into a streamlined, automated powerhouse. We’ve saved months of work.",
      client: "— Head of Product at an innovative SaaS company",
    },
    {
      review:
        "Our sprint velocity increased by 60%, and our client satisfaction went through the roof.",
      client: "— CEO of a fast-growing software company",
    },
  ];
  const settings = {
    dots: data.length > 3 ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: data.length > 3 ? 3 : data.length,
    slidesToScroll: 1,
    autoplay: data.length > 3 ? true : false,
    autoplaySpeed: 6000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: data.length > 2 ? true : false,
          autoplay: data.length > 2 ? true : false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: data.length > 1 ? true : false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: data.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#6150FF] relative pb-16 sm:pb-0">
      <Image src={polygon} alt="polygon" className="w-full absolute" />
      <Image
        src={Reactangle}
        alt="polygon"
        className="w-full absolute -top-[110px] sm:-top-[210px] md:-top-[250px] lg:-top-[330px] xlu:-top-[430px] xl1:-top-[460px] 2xl:-top-[480px] "
      />
      <div className="pt-10 sm:pt-20 px-5 sm:px-0 w-full sm:w-4/5 xl1:w-[90%] mx-auto relative z-10 xl1:mt-[680px] xlu:mt-[640px] lg:mt-[560px] md:mt-[390px] sm:mt-[350px] mt-[100px]">
        <h1 className="text-white text-center font-inter font-semibold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px]  xlu:text-[80px] leading-[50px] sm:leading-[83.992px] tracking-[-3px] lg:tracking-[-6.456px] ">
          Ideate, Build, and Deploy at Impossible Speed
        </h1>
        <p className="text-white text-center font-inter sm:whitespace-nowrap font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[38px] xlu:text-[42px] sm:leading-[61.568px] mt-8 sm:mt-10 md:mt-20 flex items-center justify-center gap-4">
          Join the future of product development with{" "} Artus
          {/* <span className="">
            <Image className="md:w-[120px] lg:w-[201px]" src={logo} />
          </span> */}
        </p>
        <div className="mt-10 sm:mt-24 pb-10 sm:pb-24 w-[80%] sm:w-full xl2:w-full 2xl:w-[77%] xxl:w-[73%] mx-auto lg:mt-96">
          <div className="flex items-start lg:justify-center xlu:justify-center xl1:justify-center 2xl:justify-end gap-[75px] sm:gap-[48px] md:gap-[50px] lg:gap-[124px] xlu:gap-[130px] xl1:gap-36 2xl:gap-40 ml-[25px] sm:ml-[72px]">
            <div className="w-12 sm:w-32 lg:w-28 flex gap-3 sm:gap-4 items-center">
              <span className="text-white font-inter font-semibold text-[46px] sm:text-[50px] md:text-[60px] lg:text-[70px] xlu:text-[80px]  tracking-[-4.532px]">
                10x
              </span>
              <Image
                src={arrowDown}
                alt="arrowDown"
                className="h-[40px] sm:h-[33px] md:h-[34px] lg:h-[44px] xlu:h-[52px] xl1:h-[60px] 2xl:h-[94px] w-auto rotate-180"
              />
            </div>
            <div className="xl1:w-[64%] xlu:w-[64%] lg:w-[64%] 2xl:w-full">
              <h4 className="text-white font-inter font-bold text-[20px] sm:text-[24px] md:text-[34px] lg:text-[44px] xlu:text-[52px] xl1:leading-[42.617px] xlu:leading-[54.617px] tracking-[-1.12px]">
                Faster Project Completion
              </h4>
              <p className="text-white font-inter font-normal text-[16px] sm:text-[20px] md:text-[26px] lg:text-[30px] xlu:text-[34.886px] lg:leading-[56px] xlu:leading-[61.568px] md:mt-8">
                Our users build software{" "}
                <span className="text-black opacity-70 font-inter font-semibold lg:text-[48px] xlu:text-[53.568px] md:leading-[61.568px]">
                  2x
                </span>{" "}
                to{" "}
                <span className="text-black opacity-70 font-inter font-semibold lg:text-[48px] xlu:text-[53.568px] md:leading-[61.568px]">
                  10x
                </span>{" "}
                faster than through traditional development methods.
              </p>
            </div>
          </div>
          <div className="flex items-start lg:justify-center xlu:justify-center xl1:justify-center justify-start gap-[100px] sm:gap-[85px] md:gap-[90px] lg:gap-[210px] xl:gap-[240px] xlu:gap-[250px] xl1:gap-[260px] 2xl:gap-[230px] mt-6 sm:mt-28 md:mt-56">
            <div className="w-12 sm:w-32 lg:w-28 flex gap-3 sm:gap-4 items-center">
              <span className="text-white font-inter font-semibold text-[46px] sm:text-[50px] md:text-[60px] lg:text-[70px]  xlu:text-[80px]  tracking-[-4.532px]">
                50%
              </span>
              <Image
                src={arrowDown}
                alt="arrowDown"
                className="h-[40px] sm:h-[33px] md:h-[34px] lg:h-[44px] xlu:h-[52px] xl1:h-[60px] 2xl:h-[94px] w-auto"
              />
            </div>
            <div className="xl1:w-[64%] xlu:w-[64%] lg:w-[64%] 2xl:w-full">
              <h4 className="text-white font-inter font-bold text-[20px] sm:text-[24px] md:text-[34px] lg:text-[44px] xlu:text-[52px] leading-[42.617px] tracking-[-1.12px]">
                Development Cost
              </h4>
              <p className="text-white font-inter font-normal text-[16px] sm:text-[20px] md:text-[26px] lg:text-[30px] xlu:text-[34.886px] lg:leading-[56px] xlu:leading-[61.568px] md:mt-8">
                By automating a majority of tasks, you can reduce costs by up to{" "}
                <span className="text-black opacity-70 font-inter font-semibold lg:text-[48px] xlu:text-[53.568px] md:leading-[61.568px]">
                  50%
                </span>
              </p>
            </div>
          </div>
          {/* <div className="flex items-start justify-center gap-5 lg:gap-4 mt-10 sm:mt-24">
            <div className="w-16 sm:w-32 lg:w-24 flex items-center">
              <span className="text-[16px] sm:text-[34px] xl1:text-[39px] font-bold text-white leading-none">
                50%
              </span>
              <Image
                src={arrowDown}
                alt="arrowDown"
                className="h-[16px] sm:h-[33px] w-auto"
              />
            </div>
            <div>
              <h4 className="text-white font-bold text-[11px] sm:text-[23px] xl1:text-[23px] 2xl:text-[29px] mb-2">
                Development Cost
              </h4>
              <p className="text-white opacity-70 text-[10px] sm:text-[20px] xl1:text-[20px] 2xl:text-[25px] leading-tight">
                By automating a majority of the tasks, you can reduce{" "}
                <br className="hidden lg:block" /> costs by up to{" "}
                <span className="font-semibold text-[14px] sm:text-[28px] 2xl:text-[36px] text-black">
                  50%
                </span>{" "}
              </p>
            </div>
          </div> */}
        </div>
        <div className="py-0 sm:py-16 mt-2 sm:mt-20 md:mt-18">
          <h3 className="text-white text-center font-inter font-semibold text-[25px] sm:text-[38px] md:text-[51px] lg:text-[64px] xlu:text-[77.931px] leading-[62.931px] sm:leading-[88.931px] tracking-[-1.71px] ">
            What Our Customers Are Saying
          </h3>
          <div>
            <div className="md:mt-16 sm:mt-6 lg:mt-40 lg:flex">
              {/* Upper Section */}
                {data.map((item) => {
                  return (
                    <div>
                      <div className="flex flex-col justify-between  lg:h-[380px] xlu:h-[460px] xl1:h-[360px] 2xl:h-[300px] xxl:h-[280px] w-[90%] mx-auto gap-2 sm:gap-8 lg:gap-2 items-center mt-4">
                        <p className="text-white text-center font-inter font-semibold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] md:leading-[40px] lg:leading-[51.4px]">
                          {item.review}
                        </p>
                        <p className="text-[rgba(40,11,43,0.86)] text-center font-inter font-semibold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xlu:text-[34.886px] 2xl:text-[37px] xxl:text-[41px] md:leading-[40px] lg:leading-[51.4px] tracking-[-1.71px]">
                          {item.client}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
            {/* <div className="flex justify-between items-start gap-28 mt-20">
              <p className="text-[17px] xl1:text-[19px] 2xl:text-[23px] font-medium text-white opacity-70 text-center w-1/3">
                Artus turned our chaotic, slow development process into a
                streamlined, automated powerhouse. We’ve saved months of work.{" "}
              </p>
              <p className="text-[17px] xl1:text-[19px] 2xl:text-[23px] font-medium text-white opacity-70 text-center w-1/3">
                Our sprint velocity increased by 60%, and our client
                satisfaction went through the roof.”
              </p>
              <p className="text-[17px] xl1:text-[19px] 2xl:text-[23px] font-medium text-white opacity-70 text-center w-1/3">
                Artus turned our chaotic, slow development process into a
                streamlined, automated powerhouse. We’ve saved months of work.
              </p>
            </div>
            <div className="flex justify-between items-center gap-28 mt-10">
              <p className="text-[19px] xl1:text-[21px] 2xl:text-[25px] font-bold text-white opacity-70 text-center w-1/3">
                -John, CEO of DevPro
              </p>
              <p className="text-[19px] xl1:text-[21px] 2xl:text-[25px] font-bold text-white opacity-70 text-center w-1/3">
                – Sara, Head of Product at a SaaS Company
              </p>
              <p className="text-[19px] xl1:text-[21px] 2xl:text-[25px] font-bold text-white opacity-70 text-center w-1/3">
                -John, CEO of DevPro
              </p>
            </div> */}
            <div className="flex gap-3 px-5 sm:px-0 justify-center mb-0 lg:mb-10 mt-20 sm:mt-10 lg:mt-56">
              <Link
                href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
                target="_blank"
                className="flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 
             rounded-[32px] bg-gradient-to-r from-[#1967FE] to-[#07C76D] 
             font-inter text-black sm:text-[23.6px] font-semibold leading-[100%] tracking-[-0.04em] 
             sm:text-sm xl1:text-base 2xl:text-lg hover:opacity-90 transition-all"
              >
                <span>Book a Demo</span>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="py-10 sm:py-20">
          <h1 className="text-white font-semibold text-[34px] sm:text-[45px] xl1:text-[45px] 2xl:text-[55px] sm:text-center leading-tight">
            Ready to <span className="text-black">Automate</span> <br /> Your
            Product Development?
          </h1>
          <p className="text-white text-[26px] sm:text-[28px] xl1:text-[28px] 2xl:text-[34px] w-full lg:w-4/5 mx-auto sm:text-center my-8 sm:my-12">
            <span className="text-[#F4F404]">Final CTA:</span> Don’t miss out on
            the chance to revolutionize your development process. Book your demo
            today and see how Artus can transform your agency.
          </p>
          <div className="w-full flex sm:justify-center mt-5 sm:mt-16">
            <Link
              href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
              target="_blank"
              className="bg-[#000000] text-xs xl1:text-base 2xl:text-lg border flex items-center w-max border-[#000000] text-white rounded-full font-semibold min-h-11 leading-none px-5"
            >
              <span>Book a Demo</span>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default CTA;
