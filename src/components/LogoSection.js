import Image from "next/image";
import React from "react";
import ibm from "@/assets/images/ibm.png";
import walmart from "@/assets/images/walmart.png";
import tech from "@/assets/images/tech.png";
import adobe from "@/assets/images/adobe.png";

const LogoSection = () => {
  return (
    <div className="mt-16">
      <h5 className="font-medium text-[17px] xl1:text-lg 2xl1:text-[21px] text-white text-center">
        Used by Developers working at
      </h5>
      <div className="px-5 w-full sm:w-11/12 gap-4 sm:gap-0 mx-auto lg:w-3/4 flex items-center py-8 lg:py-0 justify-between border-b border-[#BEBEBE]">
        <Image
          src={ibm}
          alt="ibm"
          className="w-2/4 object-contain sm:w-auto lg:w-full max-w-[121px]"
        />
        <Image
          src={walmart}
          alt="walmart"
          className="w-2/4 object-contain sm:w-auto lg:w-full max-w-[231px]"
        />
        <Image
          src={tech}
          alt="tech"
          className="w-2/4 object-contain sm:w-auto lg:w-full max-w-[272px]"
        />
        <Image
          src={adobe}
          alt="adobe"
          className="w-2/4 object-contain sm:w-auto lg:w-full max-w-[256px]"
        />
      </div>
    </div>
  );
};

export default LogoSection;
