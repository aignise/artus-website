import Image from "next/image";
import React from "react";
import underconstruction from "@/assets/images/underconstruction.jpg";
import Header from "@/components/Header";

const page = () => {
  return (
    <div>
      <Header />
      <div className="h-screen flex justify-center items-center">
        <Image src={underconstruction} alt="underconstruction" />
      </div>
    </div>
  );
};

export default page;
