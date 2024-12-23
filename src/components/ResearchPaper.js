import React from "react";
import qoutes from "@/assets/images/qoutes.png";
import paper from "@/assets/images/paper.png";
import Image from "next/image";

const ResearchPaper = () => {
  return (
    <div className="grid grid-cols-8 px-16 py-12 gap-10">
      <div className="col-span-5">
        <p className="text-[29px] text-[#5D5B5B]">
          Striking pewter studded epaulettes silver zips inner drawstring waist
          channel urban edge single-breasted jacket. Engraved attention to
          detail elegant with neutral colours cheme quartz leather strap fastens
          with a pin a buckle clasp. Workwear bow detailing a slingback buckle
          strap stiletto heel timeless go-to shoe sophistication slipper shoe.
          Flats elegant pointed toe design cut-out sides luxe leather lining
          versatile shoe must-have.
        </p>
        <div className="flex gap-4 my-8 items-start">
          <Image src={qoutes} alt="qoutes" className="mt-3" />
          <p className="font-medium text-[48px] leading-tight">
            Knicker lining concealed back zip fasten swing style high waisted
            double layer full pattern floral.
          </p>
        </div>
        <p className="text-[29px] text-[#5D5B5B]">
          Foam padding in the insoles leather finest quality staple flat slip-on
          design pointed toe off-duty shoe. Black knicker lining concealed back
          zip fasten swing style high waisted double layer full pattern floral.
          Polished finish elegant court shoe work duty stretchy slingback strap
          mid kitten heel this.
        </p>
      </div>
      <div className="col-span-3">
        <p className="font-semibold text-[33px] mb-5">
          Published Research Papers
        </p>
        <div className="bg-[#F1F1F1] rounded-[20px] p-8">
          <div className="flex gap-3 items-center mb-8">
            <Image src={paper} alt="paper" className="w-[125px]" />
            <div>
              <h5 className="font-bold text-[27px]">
                Fundamentals of AI Agents
              </h5>
              <p className="text-sm my-3">
                Navigate how Al can help product managers focus on creative
                endeavors by taking away their burden of daily repetitive tasks.
              </p>
              <span className="text-xs font-bold text-[#1967FE]">
                Posted by Ashrey
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-center mb-8">
            <Image src={paper} alt="paper" className="w-[125px]" />
            <div>
              <h5 className="font-bold text-[27px]">
                Limitations of AI Agents
              </h5>
              <p className="text-sm my-3">
                Navigate how Al can help product managers focus on creative
                endeavors by taking away their burden of daily repetitive tasks.
              </p>
              <span className="text-xs font-bold text-[#1967FE]">
                Posted by Ashrey
              </span>
            </div>
          </div>
          <div className="flex gap-3 items-center mb-8">
            <Image src={paper} alt="paper" className="w-[125px]" />
            <div>
              <h5 className="font-bold text-[27px]">
                From Agents to Multi-Agent Systems
              </h5>
              <p className="text-sm my-3">
                Navigate how Al can help product managers focus on creative
                endeavors by taking away their burden of daily repetitive tasks.
              </p>
              <span className="text-xs font-bold text-[#1967FE]">
                Posted by Ashrey
              </span>
            </div>
          </div>
          <button className="bg-[#046EC5] text-xs xl:text-base 2xl:text-lg sm:mx-auto flex items-center min-h-11 leading-none text-white rounded-full font-semibold py-2.5 px-8">
            <span>View All</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
