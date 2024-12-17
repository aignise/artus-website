import Image from "next/image";
import Link from "next/link";
import React from "react";

const Articles = ({ item }) => {
  return (
    <Link
      href={item.url}
      className={`${
        item.isborder ? "border-b border-[#636363]" : ""
      } py-5 my-5 block bg-transparent transition-all p-1 hover:bg-[#181818]`}
    >
      <h3 className="text-[#C9C9C9] font-bold text-[21px] xl1:text-[23px] 2xl:text-[25px]">
        {item.title}
      </h3>
      <div className="flex items-center gap-5">
        <p className="text-[#909090] text-[16px] xl1:text-[18px] 2xl:text-[20px]">
          {item.desc}
        </p>
        <Image src={item.image} alt="image" className="w-[195px] h-[125px]" />
      </div>
    </Link>
  );
};

export default Articles;
