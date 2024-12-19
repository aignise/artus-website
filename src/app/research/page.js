import Articles from "@/components/Articles";
import athena from "@/assets/images/athena-web.png";
import artimes from "@/assets/images/artimes-web.png";
import apollo from "@/assets/images/apollo-web.png";
import Header from "@/components/Header";
import React from "react";
import Footer from "@/components/Footer";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const page = () => {
  const articles = [
    {
      title: "Introduction to Athena",
      slug: "introduction-to-athena",
      desc: "Athena by ARTUS is your ultimate brainstorming ally, helping managers and engineering leads make faster, well-informed decisions in product development. Navigate challenges with confidence and stay ahead in the game.",
      image: athena,
      url: "/research/intoroduction-to-athena",
      isborder: true,
    },
    {
      title: "Introduction to Artemis",
      slug: "introduction-to-artemis",
      desc: "Traditional development methods often fall short, leading to delays and dissatisfaction. ARTUS aims to bridge this gap by ensuring that outputs are fully aligned with client needs, thereby increasing satisfaction and reducing project completion times.",
      image: artimes,
      url: "/research/intoroduction-to-artimes",
      isborder: true,
    },
    {
      title: "Introduction to Apollo",
      slug: "introduction-to-apollo",
      desc: "Say goodbye to tedious project management—Apollo lets you handle everything with simple conversations. Track progress, create reports, and transform teamwork effortlessly with this game-changing tool! ",
      image: apollo,
      url: "/research/intoroduction-to-apollo",
      isborder: false,
    },
  ];
  return (
    <div className="bg-black">
      <Header />
      <div className="px-5 mt-8 mb-10">
        <h2 className="font-medium text-white text-[28px] xl1:text-[30px] 2xl:text-[32px]">
          Resources
        </h2>
        <div className="block lg:flex md:mt-5 md:px-5 gap-10">
          <div className="w-full lg:w-3/5">
            {articles.map((item, index) => {
              return <Articles item={item} key={index} />;
            })}
          </div>
          <div className="w-full lg:w-2/5 md:pl-8 border-0 md:border-l border-[#676767]">
            <h4
              className={`text-white font-medium text-[20px] ${firaSans.className}`}
            >
              Editor’s Picks
            </h4>
            <div className="mt-5 border-b border-[#636363]">
              <h5
                className={`font-medium text-[#C9C9C9] text-[20px] ${firaSans.className}`}
              >
                Introduction to Athena
              </h5>
              <p className="text-[15px] text-[#909090] py-4">
                Athena by ARTUS is your ultimate brainstorming ally, helping
                managers and engineering leads make faster, well-informed
                decisions in product development.
              </p>
            </div>
            <div className="mt-5 border-b border-[#636363]">
              <h5
                className={`font-medium text-[#C9C9C9] text-[20px] ${firaSans.className}`}
              >
                Introduction to Artemis
              </h5>
              <p className="text-[15px] text-[#909090] py-4">
                Traditional development methods often fall short, leading to
                delays and dissatisfaction. ARTUS aims to bridge this gap by
                ensuring that outputs are
              </p>
            </div>
            <div className="mt-5">
              <h5
                className={`font-medium text-[#C9C9C9] text-[20px] ${firaSans.className}`}
              >
                Introduction to Apollo
              </h5>
              <p className="text-[15px] text-[#909090] py-4">
                Say goodbye to tedious project management—Apollo lets you handle
                everything with simple conversations. Track progress, create
                reports, and
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
