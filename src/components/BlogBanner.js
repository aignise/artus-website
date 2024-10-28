import Image from "next/image";
import React from "react";
import blogBanner from "@/assets/images/blog-banner.png";

const BlogBanner = () => {
  return (
    <div className="relative">
      <Image src={blogBanner} alt="blogBanner" className="w-full" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#ffffff00] to-[#00000080]">
        <div className="flex flex-col justify-end h-full w-full px-16 py-12">
          <h1 className="text-white font-bold text-[60px]">
            Distributed Artificial Intelligence
          </h1>
          <p className="text-[#D0D0D0] font-medium text-[32px]">
            Artus is built upon state-of-the-art Distributed AI technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
