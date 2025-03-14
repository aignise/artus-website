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
    <div className="bg-[#6150FF] relative">
      <Image src={polygon} alt="polygon" className="w-full absolute" />
      <Image
        src={Reactangle}
        alt="polygon"
        className="w-full absolute -top-[480px]"
      />
      <div className="pt-10 sm:pt-20 px-5 sm:px-0 w-full sm:w-4/5 xl1:w-[70%] mx-auto relative z-10 mt-[680px]">
        <h1 className="text-white text-center font-inter font-semibold text-[93.907px] leading-[83.992px] tracking-[-6.456px] ">
          Ideate, Build, and Deploy
          <br className="hidden sm:block" /> at Impossible Speed
        </h1>
        <p className="text-white font-inter font-semibold text-[48px] leading-[61.568px] mt-20 flex items-center justify-center gap-4">
          Join the future of product development with{" "}
          <span className="">
            <Image className="w-[201px]" src={logo} />
          </span>
        </p>
        <div className="mt-10 sm:mt-24 pb-10 sm:pb-24 xl2:w-full 2xl:w-11/12 mx-auto lg:mt-56">
          <div className="flex items-start justify-end gap-8 lg:gap-4 2xl:gap-40">
            <div className="w-12 sm:w-32 lg:w-28 flex gap-4 items-center">
              <span className="text-white font-inter font-semibold text-[100px]  tracking-[-4.532px]">
                10x
              </span>
              <Image
                src={arrowDown}
                alt="arrowDown"
                className="h-[14px] sm:h-[33px] 2xl:h-[94px] w-auto rotate-180"
              />
            </div>
            <div>
              <h4 className="text-white font-inter font-bold text-[56px] leading-[42.617px] tracking-[-1.12px]">
                Faster Project Completion
              </h4>
              <p className="text-white font-inter font-normal text-[39.886px] leading-[61.568px] mt-8">
                Our users build software{" "}
                <span className="text-black opacity-70 font-inter font-semibold text-[53.568px] leading-[61.568px]">
                  2x
                </span>{" "}
                to{" "}
                <span className="text-black opacity-70 font-inter font-semibold text-[53.568px] leading-[61.568px]">
                  10x
                </span>{" "}
                faster than through traditional development methods.
              </p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-8 lg:gap-4 2xl:gap-[230px] mt-56">
            <div className="w-12 sm:w-32 lg:w-28 flex gap-4 items-center">
              <span className="text-white font-inter font-semibold text-[100px]  tracking-[-4.532px]">
                50%
              </span>
              <Image
                src={arrowDown}
                alt="arrowDown"
                className="h-[14px] sm:h-[33px] 2xl:h-[94px] w-auto"
              />
            </div>
            <div>
              <h4 className="text-white font-inter font-bold text-[56px] leading-[42.617px] tracking-[-1.12px]">
                Development Cost
              </h4>
              <p className="text-white font-inter font-normal text-[39.886px] leading-[61.568px] mt-8">
                By automating a majority of tasks, you can <br /> reduce costs
                by up to{" "}
                <span className="text-black opacity-70 font-inter font-semibold text-[53.568px] leading-[61.568px]">
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
        <div className="border-y border-[#BEBEBE] py-10 sm:py-16 mt-56">
          <h3 className="text-white text-center font-inter font-semibold text-[77.931px] leading-[88.931px] tracking-[-1.71px] ">
            What Our Customers Are Saying
          </h3>
          <div>
            <div className="mt-10 sm:mt-20">
              {/* Upper Section */}
              <Slider {...settings} className="client-slider">
                {data.map((item) => {
                  return (
                    <div>
                      <div className="flex flex-col justify-center gap-8 items-center">
                        <p className="text-white text-center font-inter font-semibold text-[32px] leading-[51.4px]">
                          {item.review}
                        </p>
                        <p className="text-[rgba(40,11,43,0.86)] text-center font-inter font-semibold text-[36.886px] leading-[59.383px] tracking-[-1.71px]">
                          {item.client}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
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
            <div className="flex gap-3 px-5 sm:px-0 sm:justify-center mt-56">
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
