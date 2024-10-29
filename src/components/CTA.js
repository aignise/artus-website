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
      <div className="pt-10 sm:pt-20 px-5 sm:px-0 w-full sm:w-4/5 xl1:w-[70%] mx-auto relative z-10">
        <h1 className="text-white text-[31px] xl1:text-[55px] 2xl:text-[67px] font-semibold leading-tight sm:text-center">
          Ideate, Build, and Deploy
          <br className="hidden sm:block" /> at Impossible Speed
        </h1>
        <p className="text-white sm:text-center mt-5 font-semibold text-[16px] xl1:text-[21px] 2xl:text-[26px]">
          Join the future of product development with Artus.
        </p>
        <div className="mt-10 sm:mt-24 pb-10 sm:pb-24 xl2:w-full 2xl:w-11/12 mx-auto">
          <div className="flex items-start gap-8 lg:gap-4 2xl:gap-8">
            <div className="w-12 sm:w-32 lg:w-28 flex items-center">
              <span className="text-[20px] sm:text-[42px] xl1:text-[48px] 2xl:text-[61px] font-semibold text-white leading-none">
                10x
              </span>
              <Image
                src={arrowDown}
                alt="arrowDown"
                className="h-[14px] sm:h-[33px] 2xl:h-[42px] w-auto"
              />
            </div>
            <div>
              <h4 className="text-white font-bold text-[11px] sm:text-[23px] xl1:text-[23px] 2xl:text-[29px] leading-tight">
                Project Completion Time
              </h4>
              <p className="text-white opacity-70 text-[10px] sm:text-[20px] xl1:text-[20px] 2xl:text-[25px] leading-tight">
                Our users build software{" "}
                <span className="font-semibold text-[13px] sm:text-[28px] 2xl:text-[36px] text-black">
                  2x
                </span>{" "}
                to{" "}
                <span className="font-semibold text-[13px] sm:text-[28px] 2xl:text-[36px] text-black">
                  10x
                </span>{" "}
                faster than through <br className="hidden lg:block" />{" "}
                traditional development methods.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 lg:gap-4 mt-10 sm:mt-24 lg:ml-[30%]">
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
          </div>
          <div className="flex items-start gap-4 mt-10 sm:mt-24">
            <div className="w-24 sm:w-48 lg:w-28 flex justify-end">
              <Image
                src={businessCenter}
                alt="businessCenter"
                className="w-[25px] h-auto sm:w-[42px]"
              />
            </div>
            <div>
              <h4 className="text-white font-bold text-[11px] sm:text-[23px] xl1:text-[23px] 2xl:text-[29px]">
                Enterprise-Grade Complexity
              </h4>
              <p className="text-white opacity-70 text-[10px] sm:text-[20px] xl1:text-[20px] 2xl:text-[25px]">
                Unlike other AI Coding, Artus is built for complexity.{" "}
                <br className="hidden lg:block" />
                The more complex your project, the better the outputs.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-10 sm:mt-24 lg:ml-[30%]">
            <div className="w-32 sm:w-64 lg:w-32 flex justify-end">
              <Image
                src={user}
                alt="user"
                className="h-[17px] sm:h-[33px] w-auto"
              />
            </div>
            <div>
              <h4 className="text-white font-bold text-[11px] sm:text-[23px] xl1:text-[23px] 2xl:text-[29px] mb-2">
                Intuitive User Experience
              </h4>
              <p className="text-white opacity-70 text-[10px] sm:text-[20px] xl1:text-[20px] 2xl:text-[25px]">
                Artus is engineered for a seamless user experience,
                <br className="hidden lg:block" /> simplifying complexities
                and boosting efficiency through{" "}
                <br className="hidden lg:block" />
                innovative design and technology.
              </p>
            </div>
          </div>
        </div>
        <div className="border-y border-[#BEBEBE] py-10 sm:py-16">
          <h3 className="text-white sm:text-center font-semibold text-[30px] sm:text-[33px] xl1:text-[33px] 2xl:text-[40px]">
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
                        <p className="text-[19px] xl1:text-[19px] 2xl:text-[23px] font-medium text-white opacity-70 text-center w-full sm:w-2/4 lg:w-3/4">
                          {item.review}
                        </p>
                        <p className="text-[20px] xl1:text-[21px] 2xl:text-[25px] font-bold text-white opacity-70 text-center w-full sm:w-2/4 lg:w-3/4 mb-3">
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
            <div className="w-full flex justify-center mt-16">
              <Link
                href="https://calendly.com/ashreyignise/artus-product-demo?month=2024-10"
                target="_blank"
                className="bg-[#000000] text-xs xl1:text-base 2xl:text-lg border flex items-center w-max border-[#000000] text-white rounded-full font-semibold min-h-11 leading-none px-5"
              >
                <span>Book a Demo</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-10 sm:py-20">
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
        </div>
      </div>
    </div>
  );
};

export default CTA;
