import Header from "@/components/Header";
import React from "react";
import artimes from "@/assets/images/artimes-lg.png";
import athenaBot from "@/assets/images/athena-bot.png";
import artimesChat from "@/assets/images/artimes-chat.png";
import artimesAi from "@/assets/images/artimes-ai.png";
import acceleratedDiscovery from "@/assets/images/accelerated-discovery.png";
import thinkAi from "@/assets/images/thing-ai.png";
import diveDeeper from "@/assets/images/dive-deeper-blog.png";
import apollo from "@/assets/images/apollo-footer.png";
import artimesFuture from "@/assets/images/artimes-future.png";
import user from "@/assets/images/user-read.png";
import read from "@/assets/images/read.png";
import Image from "next/image";
import { Fira_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Link from "next/link";

const firaSans = Fira_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className="bg-black w-full">
      <Header />
      <div className="px-5 md:px-0 md:w-[70%] mx-auto">
        <Image src={artimes} alt="athena" className="w-full" />
        <div className="flex items-center gap-3 mt-3">
          <Image src={user} className="w-11 md:w-[52px] h-11 md:h-[52px]" />
          <div>
            <p className="text-white text-xl md:text-[27px] font-light">
              Yashika Vahi
            </p>
            <div className="flex items-center gap-2">
              <Image src={read} alt="read" className="w-4 md:w-5 h-4 md:h-5" />
              <p className="text-white text-sm md:text-base">5 min read</p>
            </div>
          </div>
        </div>
        <h1
          className={`text-white font-bold text-[27px] md:text-[43px] mt-5 ${firaSans.className}`}
        >
          Introduction to Artemis
        </h1>

        <p
          className={`text-[#E6E6E6] text-base xl1:text-lg 2xl:text-xl pb-4 md:pb-8 ${firaSans.className}`}
        >
          As modern codebases grow larger and more intricate, managing every
          detail—every line, function, and variable—becomes a monumental task.
          That’s where Artemis—an intelligent, context-aware AI coding ChatAgent
          steps in, making software development faster, smarter, and more
          efficient.
        </p>
        <h1
          className={`text-[#E6E6E6] mt-4 md:mt-8 font-medium text-2xl xl1:text-[35px] pb-0 md:pb-8 ${firaSans.className}`}
        >
          What Makes Artemis Unique?
        </h1>
        <div className={`text-[#E6E6E6] ${firaSans.className} mt-4 md:mt-8`}>
          <p className="text-[16px] md:text-[20px] md:mt-5">
            <span className="font-semibold">
              Instant Answers, Zero Guesswork:{" "}
            </span>
            With Artemis, you no longer need to dig through endless files or
            documentation. It delivers precise answers to your code-related
            questions in seconds.
          </p>
          <p className="text-[16px] md:text-[20px] mt-5">
            <span className="font-semibold">
              · Aligned with Your Business Goals:
            </span>
            Artemis goes beyond code. It understands your business objectives,
            ensuring that every coding decision aligns with your broader vision.
          </p>
          <p className="text-[16px] md:text-[20px] mt-5">
            <span className="font-semibold">· Team Collaboration:</span>
            Working on a complex team project? Artemis keeps track of tasks,
            delegations, and progress, helping you stay organized and focused.
          </p>
          <p className="text-[16px] md:text-[20px] mt-5">
            <span className="font-semibold">· Real-Time Problem Solver</span>
            Artemis doesn’t just identify bugs—it helps debug them. And if
            changes are needed? It coordinates with other AI agents to execute
            real-time updates without disruption.
          </p>
        </div>
        <Image src={artimesFuture} alt="artimes-future" className="mt-5" />
        <h1
          className={`text-[#E6E6E6] mt-4 md:mt-8 font-medium text-xl xl1:text-[35px] pb-4 md:pb-8 ${firaSans.className}`}
        >
          Why Artemis is the Future of Coding
        </h1>
        <p
          className={`text-[#E6E6E6] text-base md:text-lg md:mt-4 xl1:text-xl ${firaSans.className}`}
        >
          Coding is no longer about simply writing lines of code—it’s about
          managing vast systems, ensuring quality, and delivering results under
          tight timelines. Artemis takes care of the heavy lifting, allowing you
          to focus on innovation and creativity.
        </p>
        <p
          className={`text-[#E6E6E6] text-base md:text-lg xl1:text-xl ${firaSans.className}`}
        >
          Whether you’re a solo developer or part of a larger team, Artemis acts
          as your reliable assistant, keeping you one step ahead in an
          ever-evolving tech landscape.
        </p>
        <h1
          className={`text-[#E6E6E6] mt-4 md:mt-10 font-medium text-xl xl1:text-[35px] pb-4 md:pb-8 ${firaSans.className}`}
        >
          Use Cases
        </h1>
        <div className={`text-[#E6E6E6] ${firaSans.className} md:mt-8`}>
          <p className="text-base md:text-[20px] md:mt-5">
            <span className="font-semibold">Challenge:</span>
            Imagine you’re knee-deep in a database issue. You’re unsure which
            fields are required for a critical function, and the thought of
            combing through endless files and documentation feels overwhelming.
          </p>
          <p className="text-base md:text-[20px] mt-5">
            <span className="font-semibold">Solution: </span>
            Instead of manually searching, you simply ask Artemis, “What fields
            are required for this database function?” Within moments, Artemis
            scans your entire codebase, delivering the precise answer you need.
            No guesswork. No hours wasted. Just instant clari
          </p>
          <p className="text-base md:text-[20px] mt-5">
            <span className="font-semibold">It doesn’t stop there: </span>
            Let’s say you have an idea for a new implementation but aren’t sure
            if it aligns with the overall project goals. Artemis can analyze
            your suggestion, cross-check it with the project’s business
            objectives, and offer comprehensive feedback. Its insights help you
            refine your approach, ensuring that every action you take is both
            viable and impactful.
          </p>
        </div>
        <Image src={artimesChat} alt="artimesChat" className="mt-10" />
        <h1
          className={`text-[#E6E6E6] mt-4 md:mt-10 font-medium text-xl xl1:text-[35px] pb-2 md:pb-8 ${firaSans.className}`}
        >
          Multi-Agent Collaboration
        </h1>
        <p
          className={`text-[#E6E6E6] text-base md:text-lg md:mt-4 xl1:text-xl ${firaSans.className}`}
        >
          Now, imagine you want to go beyond brainstorming. Artemis can instruct
          its subordinate AI agents—part of the Artus multi-agent framework—to
          directly implement changes in your codebase. For example, you ask
          Artemis to integrate its earlier recommendations into the project. The
          updates are executed, and the changes reflect in real-time. You can
          even review and tweak these changes in your coder side by side,
          keeping the process transparent and collaborative.
        </p>
        <Image src={artimesAi} alt="artimesAi" className="mt-10" />
        <h1
          className={`text-[#E6E6E6] mt-4 md:mt-10 font-medium text-xl xl1:text-[35px] md:pb-8 ${firaSans.className}`}
        >
          Conclusion
        </h1>
        <p
          className={`text-[#E6E6E6] text-base md:text-lg mt-4 xl1:text-xl ${firaSans.className}`}
        >
          Artemis lets you focus on your ideas and strategy while the intricate
          details fall seamlessly into place. It gives you a smarter way to
          work. It simplifies your processes, clears roadblocks, and aligns
          every line of code with your goals. Why juggle endless complexities
          when Artemis can transform how you approach development?
        </p>

        <div className={`${firaSans.className} mt-14 text-2xl md:text-[35px]`}>
          <h4 className="font-medium text-white">More From Artus</h4>
          <div className="block md:flex mt-5 gap-10">
            <Link
              href={"/research/intoroduction-to-apollo"}
              className="md:w-2/4 block"
            >
              <Image src={apollo} alt="apollo" className="rounded-t-2xl" />
              <p className="text-white text-base md:text-xl font-semibold my-5 text-center">
                Introduction to Apollo
              </p>
            </Link>
            <Link
              href={"/research/intoroduction-to-athena"}
              className="md:w-2/4 block"
            >
              <Image src={athenaBot} alt="artimes" className="rounded-t-2xl" />
              <p className="text-white text-base md:text-xl font-semibold my-5 text-center">
                Introduction to Athena
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
